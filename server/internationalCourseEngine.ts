/**
 * Moteur universel de recherche éducative.
 *
 * Ce module ne définit pas une liste fermée de recherches possibles.
 * Il sert de filet de sécurité pour toute requête qui n'a pas été résolue
 * par les bases pédagogiques spécialisées de Le Prof.
 *
 * Principe : requête libre -> extraction du sujet -> recherche multi-source ->
 * classement des candidats -> extraction de la partie de l'article la plus
 * proche de la demande -> réponse pédagogique.
 */

import { CourseSearchResult, CourseConceptFormula } from '../src/types';
import { findInternationalCourse } from '../src/data/internationalCoursesBase';

function cleanQuery(str: string): string {
  return (str || '').trim().replace(/\s+/g, ' ');
}

export function isInternationalQuery(_query: string): boolean {
  // Conservé pour compatibilité avec les appelants existants.
  return true;
}

function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s'-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Mots grammaticaux très fréquents : ils ne doivent pas décider du sujet.
// Ce n'est PAS une liste de types de recherche : elle sert uniquement à retirer
// le bruit linguistique avant le classement des résultats.
const STOP_WORDS = new Set([
  'a','au','aux','avec','ce','ceci','cela','ces','cette','dans','de','des','du','en','et','est','etait','etre',
  'il','ils','je','la','le','les','leur','leurs','ma','mais','me','mes','mon','ne','nos','notre','nous','on','ou',
  'par','pas','pour','que','quel','quelle','quelles','quels','qui','quoi','sa','se','ses','son','sur','ta','te','tes',
  'toi','ton','tous','tout','un','une','vos','votre','vous','y','d','l',
  'donne','donner','donnez','moi','cherche','chercher','recherche','recherches','trouve','trouver','explique','expliquer',
  'parle','parler','montre','montrer','faire','fais','fait','faire-moi','svp','stp','please'
]);

function tokens(value: string): string[] {
  return normalize(value).split(/\s+/).filter(t => t.length >= 2 && !STOP_WORDS.has(t));
}

function subjectQuery(query: string): string {
  const result = tokens(query);
  return result.join(' ').trim() || normalize(query);
}

function rankHit(title: string, snippet: string, query: string, subject: string, index: number): number {
  const t = normalize(title);
  const s = normalize(snippet);
  const q = tokens(query);
  const st = tokens(subject);
  let score = 0;

  if (t === normalize(subject)) score += 150;
  if (t === normalize(query)) score += 120;

  for (const token of st) {
    if (t.includes(token)) score += 35;
    else if (s.includes(token)) score += 8;
  }
  for (const token of q) {
    if (t.includes(token)) score += 10;
    else if (s.includes(token)) score += 2;
  }

  if (t.includes('(homonymie)') || t.includes('(disambiguation)')) score -= 100;
  return score - index * 0.25;
}

async function searchWikipediaCandidate(query: string, lang: 'fr' | 'en') {
  const subject = subjectQuery(query);
  const searches = Array.from(new Set([query, subject])).filter(Boolean);
  const candidates: Array<{ title: string; score: number; lang: 'fr' | 'en' }> = [];

  for (const search of searches) {
    const url = `https://${lang}.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(search)}&srlimit=10&srprop=snippet&format=json&origin=*`;
    const res = await fetch(url, { headers: { 'User-Agent': 'LeProfAcademicEngine/3.0' }, signal: AbortSignal.timeout(5000) });
    if (!res.ok) continue;
    const data: any = await res.json();
    const hits = Array.isArray(data?.query?.search) ? data.query.search : [];
    hits.forEach((hit: any, index: number) => {
      const title = String(hit?.title || '');
      if (!title) return;
      candidates.push({ title, score: rankHit(title, String(hit?.snippet || ''), query, subject, index), lang });
    });
  }

  candidates.sort((a, b) => b.score - a.score);
  const best = candidates[0];
  if (!best || best.score < 20) return null;

  const summaryUrl = `https://${best.lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(best.title)}`;
  const summaryRes = await fetch(summaryUrl, { headers: { 'User-Agent': 'LeProfAcademicEngine/3.0' }, signal: AbortSignal.timeout(5000) });
  if (!summaryRes.ok) return null;
  const summary: any = await summaryRes.json();
  if (!summary?.extract || summary.type === 'disambiguation') return null;

  return { title: String(summary.title || best.title), extract: String(summary.extract), description: String(summary.description || ''), url: String(summary.content_urls?.desktop?.page || ''), lang: best.lang, score: best.score };
}

/**
 * Cherche automatiquement une section pertinente sans connaître à l'avance
 * le type de question. Les mots de la requête sont comparés aux titres des
 * sections de l'article retenu. Ainsi une formulation nouvelle peut fonctionner
 * sans être ajoutée à un dictionnaire « causes/conséquences/... ».
 */
async function findBestSection(pageTitle: string, lang: 'fr' | 'en', query: string): Promise<{ heading: string; content: string } | null> {
  try {
    const sectionsUrl = `https://${lang}.wikipedia.org/w/api.php?action=query&prop=sections&titles=${encodeURIComponent(pageTitle)}&format=json&formatversion=2`;
    const sectionsRes = await fetch(sectionsUrl, { headers: { 'User-Agent': 'LeProfAcademicEngine/3.0' }, signal: AbortSignal.timeout(3500) });
    if (!sectionsRes.ok) return null;
    const data: any = await sectionsRes.json();
    const sections = Array.isArray(data?.query?.pages?.[0]?.sections) ? data.query.pages[0].sections : [];
    if (!sections.length) return null;

    const pageTokens = new Set(tokens(pageTitle));
    const requestTokens = tokens(query).filter(t => !pageTokens.has(t));
    if (!requestTokens.length) return null;

    const ranked = sections.map((section: any) => {
      const heading = String(section?.line || '');
      const headingTokens = tokens(heading);
      const overlap = requestTokens.filter(t => headingTokens.includes(t) || normalize(heading).includes(t)).length;
      return { section, heading, score: overlap * 30 - Number(section?.toclevel || 9) };
    }).filter((x: any) => x.score > 0).sort((a: any, b: any) => b.score - a.score);

    const best = ranked[0];
    if (!best?.section?.index) return null;

    const extractUrl = `https://${lang}.wikipedia.org/w/api.php?action=query&prop=extracts&titles=${encodeURIComponent(pageTitle)}&format=json&formatversion=2&explaintext=1&section=${encodeURIComponent(String(best.section.index))}`;
    const extractRes = await fetch(extractUrl, { headers: { 'User-Agent': 'LeProfAcademicEngine/3.0' }, signal: AbortSignal.timeout(3500) });
    if (!extractRes.ok) return null;
    const extractData: any = await extractRes.json();
    const content = String(extractData?.query?.pages?.[0]?.extract || '').trim();
    return content.length >= 80 ? { heading: best.heading, content } : null;
  } catch {
    return null;
  }
}

export async function searchInternationalAcademicCourse(params: {
  query: string;
  discipline?: string;
  level?: string;
  curriculum?: string;
}): Promise<CourseSearchResult | null> {
  const query = cleanQuery(params.query);
  if (!query) return null;

  // La base internationale garde la priorité lorsqu'elle possède une fiche exacte.
  const builtInMatch = findInternationalCourse(query);
  if (builtInMatch) return builtInMatch;

  return searchMultiLingualEncyclopedia(query);
}

export async function searchMultiLingualEncyclopedia(query: string): Promise<CourseSearchResult | null> {
  const cleanQ = cleanQuery(query);
  if (!cleanQ) return null;

  try {
    const isEnglish = /\b(the|and|of|in|for|with|what|why|how|define|explain|calculate|difference|between|physics|chemistry|biology|mathematics|history|literature)\b/i.test(cleanQ);
    const languages: Array<'fr' | 'en'> = isEnglish ? ['en', 'fr'] : ['fr', 'en'];
    const candidates = [];

    for (const lang of languages) {
      const candidate = await searchWikipediaCandidate(cleanQ, lang);
      if (candidate) candidates.push(candidate);
    }
    if (!candidates.length) return null;

    candidates.sort((a, b) => b.score - a.score);
    const best = candidates[0];
    const targeted = await findBestSection(best.title, best.lang, cleanQ);
    const content = targeted?.content || best.extract;
    const heading = targeted?.heading || `Résultat : ${best.title}`;
    const paragraphs = content.split(/\n+/).map(p => p.trim()).filter(p => p.length > 25);

    const concepts: CourseConceptFormula[] = paragraphs.slice(0, 5).map((p, index) => ({
      name: index === 0 ? heading : `Information ${index + 1}`,
      formulaOrRule: p.slice(0, 500),
      explanation: p,
      contextOrApplication: `Information récupérée pour répondre directement à la requête « ${cleanQ} ».`
    }));

    return {
      query: cleanQ,
      discipline: 'philo',
      disciplineLabel: 'Recherche éducative universelle',
      cycle: 'second_cycle_bac',
      level: 'terminale',
      levelLabel: 'Tous niveaux & enseignement supérieur',
      chapterTitle: targeted ? `${targeted.heading} — ${best.title}` : best.title,
      definitionAndScope: content,
      coreConceptsAndFormulas: concepts,
      stepByStepMethod: [],
      solvedExample: { problemStatement: '', solutionStepByStep: '', finalAnswer: '' },
      classicExamTraps: [],
      selfCheckChecklist: [],
      quickRevisionMemo: paragraphs.slice(0, 2).join(' '),
      certificationNote: `Source encyclopédique externe : Wikipédia ${best.lang.toUpperCase()}. Le résultat a été sélectionné par correspondance de la requête et du sujet, sans réponse inventée.`,
      curriculumStandard: 'Recherche éducative universelle',
      isInternational: true,
      directContent: content,
      isDirectAnswer: true
    };
  } catch (err) {
    console.warn('Universal educational search error:', err);
    return null;
  }
}
