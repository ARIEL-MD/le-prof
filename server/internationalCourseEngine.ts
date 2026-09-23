/**
 * Moteur universel de recherche éducative.
 *
 * Important : ce moteur n'utilise pas une liste fermée de « types de recherches ».
 * Il travaille à partir de la requête libre elle-même : sujet, relations entre
 * termes, contexte et formulation. Les recherches spécialisées de Le Prof restent
 * prioritaires ; ce module sert de moteur général lorsque ces bases ne suffisent pas.
 */

import { CourseSearchResult, CourseConceptFormula } from '../src/types';
import { findInternationalCourse } from '../src/data/internationalCoursesBase';

function cleanQuery(str: string): string {
  return (str || '').trim().replace(/\s+/g, ' ');
}

export function isInternationalQuery(_query: string): boolean {
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

// Bruit grammatical uniquement. Ce tableau ne décrit PAS les types de recherche.
const STOP_WORDS = new Set([
  'a','au','aux','avec','ce','ceci','cela','ces','cette','dans','de','des','du','en','et','est','etait','etre',
  'il','ils','je','la','le','les','leur','leurs','ma','mais','me','mes','mon','ne','nos','notre','nous','on','ou',
  'par','pas','pour','que','quel','quelle','quelles','quels','qui','quoi','sa','se','ses','son','sur','ta','te','tes',
  'toi','ton','tous','tout','un','une','vos','votre','vous','y','d','l',
  'donne','donner','donnez','moi','cherche','chercher','recherche','recherches','trouve','trouver','explique','expliquer',
  'parle','parler','montre','montrer','faire','fais','fait','svp','stp','please','peux','peut','pouvez','comment','pourquoi',
  'est-ce','estce','qu','quoi','quelque','faire-moi','fais-moi'
]);

const GENERIC_REQUEST_WORDS = new Set([
  'argument','arguments','citation','citations','exemple','exemples','definition','definir','resume','synthese','analyse',
  'cours','notion','notions','fiche','revision','information','informations','question','questions','reponse','reponses',
  'explication','explications','detail','details','principal','principaux','principale','principales','donner','donnez',
  'montre','montrer','explique','expliquer','calcul','calculer','solution','solutions','methode','methodes','conjugaison',
  'conjugue','conjuguer','traduction','traduire','compare','comparer','comparaison','difference','differences'
]);

function tokens(value: string): string[] {
  return normalize(value).split(/\s+/).filter(t => t.length >= 2 && !STOP_WORDS.has(t));
}

function meaningfulTokens(value: string): string[] {
  return tokens(value).filter(t => !GENERIC_REQUEST_WORDS.has(t));
}

/**
 * Construit plusieurs formulations de recherche sans supposer une intention précise.
 * On conserve toujours la requête complète : aucune information demandée n'est jetée.
 */
function buildSearchVariants(query: string): string[] {
  const q = cleanQuery(query);
  const raw = tokens(q);
  const meaningful = meaningfulTokens(q);
  const variants = new Set<string>();
  variants.add(q);
  if (meaningful.length) variants.add(meaningful.join(' '));
  if (raw.length >= 3) {
    variants.add(raw.slice(0, Math.min(raw.length, 8)).join(' '));
    variants.add(raw.slice(Math.max(0, raw.length - 8)).join(' '));
  }
  // Préserve les groupes de 2-4 mots consécutifs : utile pour les noms propres,
  // concepts et expressions que le moteur ne doit pas casser.
  for (let n = Math.min(4, raw.length); n >= 2; n--) {
    for (let i = 0; i + n <= raw.length; i++) {
      const phrase = raw.slice(i, i + n).join(' ');
      if (phrase.length >= 8) variants.add(phrase);
    }
    if (variants.size >= 10) break;
  }
  return Array.from(variants).slice(0, 12);
}

function overlapScore(queryTokens: string[], text: string): number {
  const normalized = normalize(text);
  if (!normalized) return 0;
  let score = 0;
  const unique = Array.from(new Set(queryTokens));
  for (const token of unique) {
    if (normalized.includes(token)) {
      score += token.length >= 7 ? 5 : token.length >= 5 ? 3 : 1.5;
    }
  }
  return score;
}

function rankHit(title: string, snippet: string, query: string, index: number, searchVariant: string): number {
  const t = normalize(title);
  const s = normalize(snippet);
  const qTokens = meaningfulTokens(query);
  const variantTokens = meaningfulTokens(searchVariant);
  const exactQuery = normalize(query);
  const exactVariant = normalize(searchVariant);
  let score = 0;

  if (t === exactQuery) score += 160;
  if (t === exactVariant) score += 110;
  if (t.includes(exactVariant) && exactVariant.length >= 8) score += 55;

  score += overlapScore(qTokens, t) * 9;
  score += overlapScore(qTokens, s) * 3;
  score += overlapScore(variantTokens, t) * 7;
  score += overlapScore(variantTokens, s) * 2;

  if (t.includes('(homonymie)') || t.includes('(disambiguation)')) score -= 150;
  if (/\b(liste|liste de|index|portail|homonymie|disambiguation)\b/i.test(t)) score -= 35;
  return score - index * 0.2;
}

async function searchWikipediaCandidates(query: string, lang: 'fr' | 'en') {
  const variants = buildSearchVariants(query);
  const candidates = new Map<string, { title: string; snippet: string; score: number; lang: 'fr' | 'en' }>();

  for (const variant of variants) {
    try {
      const url = `https://${lang}.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(variant)}&srlimit=12&srprop=snippet&format=json&origin=*`;
      const res = await fetch(url, { headers: { 'User-Agent': 'LeProfAcademicEngine/4.0' }, signal: AbortSignal.timeout(4500) });
      if (!res.ok) continue;
      const data: any = await res.json();
      const hits = Array.isArray(data?.query?.search) ? data.query.search : [];
      hits.forEach((hit: any, index: number) => {
        const title = String(hit?.title || '').trim();
        if (!title) return;
        const snippet = String(hit?.snippet || '').replace(/<[^>]+>/g, ' ');
        const score = rankHit(title, snippet, query, index, variant);
        const previous = candidates.get(normalize(title));
        if (!previous || score > previous.score) candidates.set(normalize(title), { title, snippet, score, lang });
      });
    } catch {
      // Une source indisponible ne doit pas empêcher les autres variantes de répondre.
    }
  }

  return Array.from(candidates.values()).sort((a, b) => b.score - a.score).slice(0, 12);
}

async function getWikipediaSummary(candidate: { title: string; score: number; lang: 'fr' | 'en' }) {
  try {
    const summaryUrl = `https://${candidate.lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(candidate.title)}`;
    const summaryRes = await fetch(summaryUrl, { headers: { 'User-Agent': 'LeProfAcademicEngine/4.0' }, signal: AbortSignal.timeout(4500) });
    if (!summaryRes.ok) return null;
    const summary: any = await summaryRes.json();
    if (!summary?.extract || summary.type === 'disambiguation') return null;
    return {
      title: String(summary.title || candidate.title),
      extract: String(summary.extract),
      description: String(summary.description || ''),
      url: String(summary.content_urls?.desktop?.page || ''),
      lang: candidate.lang,
      score: candidate.score
    };
  } catch {
    return null;
  }
}

/**
 * Recherche une section OU des passages pertinents sans connaître à l'avance
 * la nature de la demande. Les paragraphes sont scorés avec la requête complète,
 * ce qui permet par exemple « rôle de la pêche dans le développement économique
 * de la Côte d'Ivoire » sans créer une règle spéciale pour cette phrase.
 */
async function findRelevantContent(pageTitle: string, lang: 'fr' | 'en', query: string): Promise<{ heading: string; content: string } | null> {
  try {
    const sectionsUrl = `https://${lang}.wikipedia.org/w/api.php?action=query&prop=sections&titles=${encodeURIComponent(pageTitle)}&format=json&formatversion=2`;
    const sectionsRes = await fetch(sectionsUrl, { headers: { 'User-Agent': 'LeProfAcademicEngine/4.0' }, signal: AbortSignal.timeout(3500) });
    if (!sectionsRes.ok) return null;
    const data: any = await sectionsRes.json();
    const sections = Array.isArray(data?.query?.pages?.[0]?.sections) ? data.query.pages[0].sections : [];
    const requestTokens = meaningfulTokens(query);

    const rankedSections = sections.map((section: any) => {
      const heading = String(section?.line || '');
      return { section, heading, score: overlapScore(requestTokens, heading) };
    }).filter((x: any) => x.score > 0).sort((a: any, b: any) => b.score - a.score);

    const candidates = rankedSections.slice(0, 3);
    for (const candidate of candidates) {
      if (!candidate.section?.index) continue;
      const extractUrl = `https://${lang}.wikipedia.org/w/api.php?action=query&prop=extracts&titles=${encodeURIComponent(pageTitle)}&format=json&formatversion=2&explaintext=1&section=${encodeURIComponent(String(candidate.section.index))}`;
      const extractRes = await fetch(extractUrl, { headers: { 'User-Agent': 'LeProfAcademicEngine/4.0' }, signal: AbortSignal.timeout(3500) });
      if (!extractRes.ok) continue;
      const extractData: any = await extractRes.json();
      const content = String(extractData?.query?.pages?.[0]?.extract || '').trim();
      if (content.length >= 80) return { heading: candidate.heading, content };
    }

    // Certaines pages n'ont pas de titres utiles. Dans ce cas, on récupère le texte
    // complet et sélectionne les paragraphes les plus proches de la requête.
    const fullUrl = `https://${lang}.wikipedia.org/w/api.php?action=query&prop=extracts&titles=${encodeURIComponent(pageTitle)}&format=json&formatversion=2&explaintext=1&exsectionformat=plain`;
    const fullRes = await fetch(fullUrl, { headers: { 'User-Agent': 'LeProfAcademicEngine/4.0' }, signal: AbortSignal.timeout(4500) });
    if (!fullRes.ok) return null;
    const fullData: any = await fullRes.json();
    const fullText = String(fullData?.query?.pages?.[0]?.extract || '').trim();
    if (!fullText) return null;

    const paragraphs = fullText.split(/\n{1,2}/).map(p => p.trim()).filter(p => p.length >= 70);
    const rankedParagraphs = paragraphs.map((paragraph, index) => ({
      paragraph,
      score: overlapScore(requestTokens, paragraph) + (index < 3 ? 1 : 0)
    })).filter(x => x.score > 0).sort((a, b) => b.score - a.score);
    if (rankedParagraphs.length) {
      return { heading: 'Informations directement pertinentes', content: rankedParagraphs.slice(0, 5).map(x => x.paragraph).join('\n\n') };
    }
    return null;
  } catch {
    return null;
  }
}

function inferDiscipline(query: string): { code: string; label: string } {
  const q = normalize(query);
  if (/\b(philosoph|liberte|conscience|inconscient|bonheur|justice|verite|morale|art|raison)\b/.test(q)) return { code: 'philo', label: 'Philosophie' };
  if (/\b(equation|fonction|derivee|integrale|geometr|probabilite|statistique|matrice|arithmet|calcul)\b/.test(q)) return { code: 'maths', label: 'Mathématiques' };
  if (/\b(physique|vitesse|force|energie|electricite|optique|mecanique|mouvement)\b/.test(q)) return { code: 'physique', label: 'Physique' };
  if (/\b(chimie|atome|molecule|reaction|acide|base|oxydation|chimique)\b/.test(q)) return { code: 'chimie', label: 'Chimie' };
  if (/\b(cellule|photosynthese|mitose|meiose|adn|genetique|ecosysteme|biologie|corps humain)\b/.test(q)) return { code: 'svt', label: 'SVT / Biologie' };
  if (/\b(conjugaison|conjugue|grammaire|syntaxe|orthographe|roman|poeme|litterature|figure de style|texte)\b/.test(q)) return { code: 'francais', label: 'Français / Littérature' };
  if (/\b(guerre|revolution|colonisation|independance|histoire|empire|traite|royaume|president)\b/.test(q)) return { code: 'histoire', label: 'Histoire' };
  if (/\b(cote d ivoire|afrique|climat|population|geographie|urbanisation|agriculture|peche|mondialisation)\b/.test(q)) return { code: 'geo', label: 'Géographie / Économie' };
  return { code: 'general', label: 'Recherche éducative universelle' };
}

export async function searchInternationalAcademicCourse(params: {
  query: string;
  discipline?: string;
  level?: string;
  curriculum?: string;
}): Promise<CourseSearchResult | null> {
  const query = cleanQuery(params.query);
  if (!query) return null;
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
    const allCandidates: Array<{ title: string; snippet: string; score: number; lang: 'fr' | 'en' }> = [];

    for (const lang of languages) {
      const candidates = await searchWikipediaCandidates(cleanQ, lang);
      allCandidates.push(...candidates);
    }

    // Déduplication multilingue rudimentaire par titre normalisé.
    const unique = new Map<string, { title: string; snippet: string; score: number; lang: 'fr' | 'en' }>();
    for (const candidate of allCandidates) {
      const key = normalize(candidate.title);
      const current = unique.get(key);
      if (!current || candidate.score > current.score) unique.set(key, candidate);
    }

    const ranked = Array.from(unique.values()).sort((a, b) => b.score - a.score);
    if (!ranked.length || ranked[0].score < 12) return null;

    // On vérifie plusieurs candidats : le premier résultat Wikipedia n'est pas
    // automatiquement considéré comme pertinent.
    let best: any = null;
    let bestContent: { heading: string; content: string } | null = null;
    for (const candidate of ranked.slice(0, 6)) {
      const summary = await getWikipediaSummary(candidate);
      if (!summary) continue;
      const targeted = await findRelevantContent(summary.title, summary.lang, cleanQ);
      const contentScore = targeted ? overlapScore(meaningfulTokens(cleanQ), targeted.content) : 0;
      const totalScore = candidate.score + contentScore * 2;
      if (!best || totalScore > best.totalScore) {
        best = { ...summary, totalScore };
        bestContent = targeted;
      }
    }

    if (!best) return null;

    const content = bestContent?.content || best.extract;
    const heading = bestContent?.heading || `Résultat : ${best.title}`;
    const paragraphs = content.split(/\n+/).map((p: string) => p.trim()).filter((p: string) => p.length > 25);
    const concepts: CourseConceptFormula[] = paragraphs.slice(0, 6).map((p: string, index: number) => ({
      name: index === 0 ? heading : `Information ${index + 1}`,
      formulaOrRule: p.slice(0, 500),
      explanation: p,
      contextOrApplication: `Passage sélectionné pour sa pertinence avec la requête « ${cleanQ} ».`
    }));
    const discipline = inferDiscipline(cleanQ);

    return {
      query: cleanQ,
      discipline: discipline.code,
      disciplineLabel: discipline.label,
      cycle: 'second_cycle_bac',
      level: 'terminale',
      levelLabel: 'Tous niveaux & enseignement supérieur',
      chapterTitle: bestContent ? `${bestContent.heading} — ${best.title}` : best.title,
      definitionAndScope: content,
      coreConceptsAndFormulas: concepts,
      stepByStepMethod: [],
      solvedExample: { problemStatement: '', solutionStepByStep: '', finalAnswer: '' },
      classicExamTraps: [],
      selfCheckChecklist: [],
      quickRevisionMemo: paragraphs.slice(0, 2).join(' '),
      certificationNote: `Source encyclopédique externe : Wikipédia ${best.lang.toUpperCase()}. Résultat sélectionné par correspondance de la requête et vérification du contenu ; aucune réponse générique n'est fabriquée si aucune source pertinente n'est trouvée.`,
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
