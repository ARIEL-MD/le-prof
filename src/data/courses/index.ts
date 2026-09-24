import { OfficialIvorianCourse, DisciplineType, SecondaryLevel, AcademicSerie } from '../../types';
import { textContainsResemblingToken } from '../../utils/fuzzyMatch';
import { COLLEGE_6E_PHYSIQUE_COURSES } from './college6ePhysiqueCourses';
import { COLLEGE_6E_CHIMIE_COURSES } from './college6eChimieCourses';
import { COLLEGE_6E_HISTOIRE_COURSES } from './college6eHistoireCourses';
import { COLLEGE_6E_GEOGRAPHIE_COURSES } from './college6eGeographieCourses';
import { COLLEGE_MATHS_COURSES } from './collegeMathsCourses';
import { COLLEGE_5E_MATHS_COURSES } from './college5eMathsCourses';
import { COLLEGE_5E_4E_MATHS_COURSES } from './college5e4eMathsCourses';
import { COLLEGE_4E_MATHS_COURSES } from './college4eMathsCourses';
import { COLLEGE_3E_MATHS_COURSES } from './college3eMathsCourses';
import { COLLEGE_SCIENCES_COURSES } from './collegeSciencesCourses';
import { COLLEGE_5E_4E_SCIENCES_COURSES } from './college5e4eSciencesCourses';
import { COLLEGE_5E_PHYSIQUE_COURSES } from './college5ePhysiqueCourses';
import { COLLEGE_5E_CHIMIE_COURSES } from './college5eChimieCourses';
import { COLLEGE_4E_PHYSIQUE_CHIMIE_COURSES } from './college4ePhysiqueChimieCourses';
import { COLLEGE_3E_PHYSIQUE_CHIMIE_COURSES } from './college3ePhysiqueChimieCourses';
import { COLLEGE_4E_SVT_COURSES } from './college4eSvtCourses';
import { COLLEGE_3E_SVT_COURSES } from './college3eSvtCourses';
import { COLLEGE_5E_FRANCAIS_COURSES } from './college5eFrancaisCourses';
import { COLLEGE_4E_FRANCAIS_COURSES } from './college4eFrancaisCourses';
import { COLLEGE_3E_FRANCAIS_COURSES } from './college3eFrancaisCourses';
import { COLLEGE_HUMANITIES_COURSES } from './collegeHumanitiesCourses';
import { COLLEGE_EXTRA_HUMANITIES_COURSES } from './collegeExtraHumanitiesCourses';
import { COLLEGE_5E_GEOGRAPHIE_COURSES } from './college5eGeographieCourses';
import { COLLEGE_5E_HISTOIRE_COURSES } from './college5eHistoireCourses';
import { LYCEE_MATHS_COURSES } from './lyceeMathsCourses';
import { LYCEE_SCIENCES_COURSES } from './lyceeSciencesCourses';
import { LYCEE_HUMANITIES_COURSES } from './lyceeHumanitiesCourses';
import { LYCEE_EXTRA_COURSES } from './lyceeExtraCourses';
import { LYCEE_ALLEMAND_COURSES } from './lyceeAllemandCourses';
import { LYCEE_SVT_TLE_COURSES } from './lyceeSvtTleCourses';
import { LYCEE_HISTOIREGEO_1ERE_COURSES } from './lyceeHistoireGeo1ereCourses';
import { LYCEE_PHYSIQUE_CHIMIE_1ERE_COURSES } from './lyceePhysiqueChimie1ereCourses';
import { LYCEE_CHIMIE_1ERE_RENFORCE_COURSES } from './lyceeChimie1ereRenforceCourses';
import { LYCEE_SECONDE_COURSES } from './lyceeSecondeCourses';
import { LYCEE_SVT_1ERE_COURSES } from './lyceeSvt1ereCourses';
import { LYCEE_MATHS_RENFORCE_COURSES } from './lyceeMathsRenforceCourses';
import { LYCEE_HISTOIREGEO_TLE_COURSES } from './lyceeHistoireGeoTleCourses';
import { COLLEGE_5E_SVT_COURSES } from './college5eSvtCourses';
import { ANGLAIS_CURRICULUM_COURSES } from './anglaisCurriculumCourses';
import { LYCEE_ESPAGNOL_COURSES } from './lyceeEspagnolCourses';
import { EDHC_CURRICULUM_COURSES } from './edhcCurriculumCourses';
import { LYCEE_PHILO_TLE_COURSES } from './lyceePhiloTleCourses';
import { LYCEE_PHYSIQUE_CHIMIE_TLE_RENFORCE_COURSES } from './lyceePhysiqueChimieTleRenforceCourses';
import { LYCEE_SVT_IMMUNOLOGIE_GENETIQUE_COURSES } from './lyceeSvtImmunologieGenetiqueCourses';
import { COLLEGE_3E_HISTOIRE_GEO_COURSES } from './college3eHistoireGeoCourses';
import { CONVERTED_KNOWLEDGE_BASE_COURSES } from './convertedKnowledgeBases';

export { COLLEGE_6E_PHYSIQUE_COURSES } from './college6ePhysiqueCourses';
export { COLLEGE_6E_CHIMIE_COURSES } from './college6eChimieCourses';
export { COLLEGE_6E_HISTOIRE_COURSES } from './college6eHistoireCourses';
export { COLLEGE_6E_GEOGRAPHIE_COURSES } from './college6eGeographieCourses';

export const ALL_OFFICIAL_IVORIAN_COURSES: OfficialIvorianCourse[] = [
  ...COLLEGE_6E_PHYSIQUE_COURSES,
  ...COLLEGE_6E_CHIMIE_COURSES,
  ...COLLEGE_6E_HISTOIRE_COURSES,
  ...COLLEGE_6E_GEOGRAPHIE_COURSES,
  ...COLLEGE_MATHS_COURSES,
  ...COLLEGE_5E_MATHS_COURSES,
  ...COLLEGE_5E_4E_MATHS_COURSES,
  ...COLLEGE_4E_MATHS_COURSES,
  ...COLLEGE_3E_MATHS_COURSES,
  ...COLLEGE_SCIENCES_COURSES,
  ...COLLEGE_5E_4E_SCIENCES_COURSES,
  ...COLLEGE_5E_PHYSIQUE_COURSES,
  ...COLLEGE_5E_CHIMIE_COURSES,
  ...COLLEGE_4E_PHYSIQUE_CHIMIE_COURSES,
  ...COLLEGE_3E_PHYSIQUE_CHIMIE_COURSES,
  ...COLLEGE_4E_SVT_COURSES,
  ...COLLEGE_3E_SVT_COURSES,
  ...COLLEGE_5E_FRANCAIS_COURSES,
  ...COLLEGE_4E_FRANCAIS_COURSES,
  ...COLLEGE_3E_FRANCAIS_COURSES,
  ...COLLEGE_HUMANITIES_COURSES,
  ...COLLEGE_EXTRA_HUMANITIES_COURSES,
  ...COLLEGE_5E_GEOGRAPHIE_COURSES,
  ...COLLEGE_5E_HISTOIRE_COURSES,
  ...LYCEE_MATHS_COURSES,
  ...LYCEE_SCIENCES_COURSES,
  ...LYCEE_PHYSIQUE_CHIMIE_1ERE_COURSES,
  ...LYCEE_CHIMIE_1ERE_RENFORCE_COURSES,
  ...LYCEE_SVT_TLE_COURSES,
  ...LYCEE_HUMANITIES_COURSES,
  ...LYCEE_HISTOIREGEO_1ERE_COURSES,
  ...LYCEE_EXTRA_COURSES,
  ...LYCEE_ALLEMAND_COURSES,
  ...LYCEE_SECONDE_COURSES,
  ...LYCEE_SVT_1ERE_COURSES,
  ...LYCEE_MATHS_RENFORCE_COURSES,
  ...LYCEE_HISTOIREGEO_TLE_COURSES,
  ...COLLEGE_5E_SVT_COURSES,
  ...ANGLAIS_CURRICULUM_COURSES,
  ...LYCEE_ESPAGNOL_COURSES,
  ...EDHC_CURRICULUM_COURSES,
  ...LYCEE_PHILO_TLE_COURSES,
  ...LYCEE_PHYSIQUE_CHIMIE_TLE_RENFORCE_COURSES,
  ...LYCEE_SVT_IMMUNOLOGIE_GENETIQUE_COURSES,
  ...COLLEGE_3E_HISTOIRE_GEO_COURSES,
  ...CONVERTED_KNOWLEDGE_BASE_COURSES,
];

// Mots vides fréquents dans les requêtes d'élèves à exclure du calcul de score brut
const COURSE_STOP_WORDS = new Set([
  'cour', 'cours', 'sur', 'les', 'des', 'pour', 'dans', 'une', 'avec', 'tout', 
  'tous', 'par', 'son', 'ses', 'qui', 'que', 'est', 'sont', 'donne', 'moi', 
  'cherche', 'trouve', 'chapitre', 'lecon', 'fiche', 'resume', 'terminale', 'bac',
  'definition', 'definir', 'def', 'signification', 'sens', 'notion', 'concept', 'explication',
  'manifestations', 'manifestation', 'deroulement', 'deroule', 'faits', 'fait', 'evenements', 'evenement', 'actions', 'action',
  'causes', 'cause', 'origines', 'origine', 'pourquoi', 'consequences', 'consequence', 'effets', 'impact',
  'dates', 'date', 'acteurs', 'acteur', 'caracteristiques', 'caracteristique', 'resume', 'resumer',
  'exemple', 'exemples', 'argument', 'arguments', 'citation', 'citations', 'methode', 'methodes',
  'formule', 'formules', 'theoreme', 'theoremes', 'loi', 'propriete', 'proprietes', 'regle', 'enonce',
  'objectifs', 'objectif', 'principes', 'principe', 'buts', 'but', 'organes', 'organe', 'structure', 'structures',
  'bilan', 'perspectives', 'fonctionnement', 'succes', 'limites', 'echecs', 'roles', 'role', 'missions', 'mission',
  'atouts', 'fondements', 'facteurs', 'difficultes', 'etapes',
  'quelles', 'quels', 'quelle', 'quel', 'comment',
  'complet', 'detaille', 'detaile', 'tout', 'sur'
]);

function stripAccents(str: string): string {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// Fréquence de chaque mot-clé (en minuscules sans accents) à travers TOUTE la base de cours officiels.
// Un mot-clé partagé par de nombreuses fiches (ex: "citations", "philosophie", "auteurs")
// n'est pas discriminant : il ne doit jamais suffire, à lui seul, à faire remonter une
// fiche "fourre-tout" (répertoire/index couvrant plusieurs notions) à la place de la
// fiche précise réellement recherchée par l'élève.
const KEYWORD_FREQUENCY: Map<string, number> = (() => {
  const freq = new Map<string, number>();
  for (const course of ALL_OFFICIAL_IVORIAN_COURSES) {
    // On ne compte qu'une fois par cours, même si le mot-clé apparaît plusieurs fois dans la même fiche
    const seenInThisCourse = new Set<string>();
    for (const kw of (course.keywords || [])) {
      const kwLower = stripAccents(kw.toLowerCase().trim());
      if (!seenInThisCourse.has(kwLower)) {
        seenInThisCourse.add(kwLower);
        freq.set(kwLower, (freq.get(kwLower) || 0) + 1);
      }
    }
  }
  return freq;
})();

// Un mot-clé est jugé "générique" (donc peu discriminant) s'il apparaît dans plus de
// 3 fiches distinctes de la base officielle.
const GENERIC_KEYWORD_THRESHOLD = 3;

/**
 * Searches the official offline course repository for matches based on query, level, discipline, and series
 */
export function findOfficialCourse(
  query: string,
  level?: SecondaryLevel,
  discipline?: DisciplineType,
  serie?: AcademicSerie
): OfficialIvorianCourse | null {
  const normalizedQuery = stripAccents(query.toLowerCase().trim());
  const rawTokens = normalizedQuery
    .replace(/[.,/#!$%^&*;:{}=\-_`~()?"'«»]/g, ' ')
    .split(/\s+/)
    .map(t => t.trim())
    .filter(t => t.length > 2);

  // Filtrer les mots vides pour éviter les faux positifs (ex: "cour" dans "court-circuit")
  const meaningfulTokens = rawTokens.filter(t => !COURSE_STOP_WORDS.has(t));
  const queryTokens = meaningfulTokens.length > 0 ? meaningfulTokens : rawTokens;

  let candidatePool = ALL_OFFICIAL_IVORIAN_COURSES;

  // Filter by discipline if provided
  if (discipline) {
    const byDiscipline = candidatePool.filter(c => c.discipline === discipline);
    if (byDiscipline.length > 0) {
      candidatePool = byDiscipline;
    }
  }

  // Filter by level if provided
  if (level) {
    const byLevel = candidatePool.filter(c => c.level === level);
    if (byLevel.length > 0) {
      candidatePool = byLevel;
    }
  }

  // Score candidate matches
  let bestCourse: OfficialIvorianCourse | null = null;
  let highestScore = 0;
  let bestHasSpecificSignal = false;

  for (const course of candidatePool) {
    let score = 0;
    let hasSpecificSignal = false;
    const defsText = (course.definitions || []).map(d => `${d.term} ${d.definition}`).join(' ');
    const propsText = (course.propertiesAndRules || []).map(p => `${p.name} ${p.statement}`).join(' ');
    const fullSnippet = course.fullCourseContent || '';
    const searchableText = stripAccents(`${course.chapter} ${course.lessonTitle} ${course.quickMemo} ${(course.keywords || []).join(' ')} ${(course.objectifs || []).join(' ')} ${defsText} ${propsText} ${fullSnippet}`.toLowerCase());

    // Certaines fiches sont un véritable "index" qui énumère volontairement une bonne
    // vingtaine de notions distinctes dans le même lessonTitle (ex: "Conscience,
    // Inconscient, Mémoire/Oubli, Liberté, Violence, Société, Autrui, État & Loi...").
    // À la différence d'une fiche normale qui énumère juste 3-5 sous-parties d'un même
    // sujet (ex: "Propriété et réciproque de Pythagore, construction de √a, propriété
    // métrique et trigonométrie"), un tel index ne doit jamais remonter pour une requête
    // générique : ça reviendrait justement à mélanger plein de sujets différents.
    // Seuil volontairement élevé (8+) pour ne viser que ces index extrêmes, sans toucher
    // aux fiches normales à plusieurs sous-parties.
    const topicSegmentCount = course.lessonTitle.split(',').length;
    const isMultiTopicIndex = topicSegmentCount >= 8;

    const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Check keyword matches — un mot-clé générique (partagé par de nombreuses fiches,
    // ex: "citations", "philosophie", "auteurs", "dissertation", ou appartenant aux COURSE_STOP_WORDS)
    // est fortement dévalué : il ne doit jamais suffire à lui seul à faire matcher une fiche
    // "fourre-tout" à la place de la fiche précise que l'élève recherche réellement.
    for (const kw of (course.keywords || [])) {
      const kwLower = stripAccents(kw.toLowerCase().trim());
      if (!kwLower) continue;
      const isGeneric = (KEYWORD_FREQUENCY.get(kwLower) || 0) > GENERIC_KEYWORD_THRESHOLD || COURSE_STOP_WORDS.has(kwLower);
      
      // Correspondance exacte ou mot entier délimité (évite que "or" matche dans "oxymore" ou "ion" dans "union")
      const exactMatch = normalizedQuery === kwLower;
      const wordBoundaryMatch = new RegExp(`\\b${escapeRegExp(kwLower)}\\b`, 'i').test(normalizedQuery);
      const exactOrContained = exactMatch || wordBoundaryMatch;

      // Inverse : la requête entière forme-t-elle un mot complet du mot-clé ?
      const reverseContained = new RegExp(`\\b${escapeRegExp(normalizedQuery)}\\b`, 'i').test(kwLower) && normalizedQuery.length >= 3;

      // Reconnaissance générique : le mot-clé (ou l'un de ses mots) ressemble-t-il à
      // un mot de la requête (racine commune / faute de frappe), sans correspondance exacte ?
      const fuzzyMatch = !exactOrContained && !reverseContained && kwLower.length >= 4 &&
        textContainsResemblingToken(normalizedQuery, kwLower);

      if (exactOrContained) {
        if (isGeneric) {
          score += 2;
        } else {
          score += 25;
          hasSpecificSignal = true;
        }
      } else if (reverseContained) {
        if (isGeneric) {
          score += 1;
        } else {
          score += 20;
          hasSpecificSignal = true;
        }
      } else if (fuzzyMatch) {
        if (isGeneric) {
          score += 1;
        } else {
          score += 14;
          hasSpecificSignal = true;
        }
      }
    }

    // Check query token occurrences with strict word boundary check (never substring of another word)
    let matchedTokensCount = 0;
    const normalizedCourseLesson = stripAccents(course.lessonTitle.toLowerCase());
    const normalizedCourseChapter = stripAccents(course.chapter.toLowerCase());
    for (const token of queryTokens) {
      if (token.length < 2) continue;
      const tokenRegex = new RegExp(`\\b${escapeRegExp(token)}\\b`, 'i');
      const exactHitBody = tokenRegex.test(searchableText);
      // Reconnaissance générique (racine morphologique / tolérance aux fautes de frappe) :
      // permet de reconnaître une formulation JAMAIS vue auparavant (pluriel, conjugaison,
      // faute de frappe...) sans qu'aucune liste de synonymes n'ait été pré-enregistrée.
      // Note : ce signal flou n'alimente PAS le compteur de couverture (matchedTokensCount),
      // car un mot très courant (ex: "fonctionne" ≈ "fonctionnement") apparaît dans presque
      // toute fiche et ne doit jamais, à lui seul, déclencher le bonus de couverture réservé
      // aux correspondances franches.
      const fuzzyHitBody = !exactHitBody && token.length >= 4 && textContainsResemblingToken(searchableText, token);
      if (exactHitBody) {
        score += isMultiTopicIndex ? 2 : 8;
        matchedTokensCount++;
      } else if (fuzzyHitBody) {
        score += isMultiTopicIndex ? 1 : 4;
      }
      // Bonus si le mot-clé ou le titre contient directement ce terme significatif en tant que mot entier
      const exactHitTitle = tokenRegex.test(normalizedCourseLesson) || tokenRegex.test(normalizedCourseChapter);
      const fuzzyHitTitle = !exactHitTitle && token.length >= 4 &&
        (textContainsResemblingToken(normalizedCourseLesson, token) || textContainsResemblingToken(normalizedCourseChapter, token));
      if (exactHitTitle) {
        if (isMultiTopicIndex) {
          score += 2;
        } else {
          score += 15;
          hasSpecificSignal = true;
        }
        if (!exactHitBody) matchedTokensCount++;
      } else if (fuzzyHitTitle) {
        // Une ressemblance dans le TITRE reste un signal fort (contrairement au corps du
        // texte, bien plus long et donc plus sujet aux coïncidences) : elle compte pour
        // la couverture, avec un bonus toutefois inférieur à une correspondance exacte.
        if (isMultiTopicIndex) {
          score += 1;
        } else {
          score += 10;
          hasSpecificSignal = true;
        }
        matchedTokensCount++;
      }
    }

    // Ratio de couverture des mots de la requête:
    // Si la requête comporte des mots discriminants (queryTokens), mais que le cours n'en matche qu'une faible fraction,
    // ce cours ne doit pas remonter artificiellement s'il n'a pas de correspondance forte.
    const tokenCoverage = queryTokens.length > 0 ? matchedTokensCount / queryTokens.length : 1;
    if (queryTokens.length >= 2 && tokenCoverage < 0.50) {
      score = Math.floor(score * 0.05);
      hasSpecificSignal = false;
    } else if (queryTokens.length >= 3 && tokenCoverage < 0.60) {
      score = Math.floor(score * 0.05);
      hasSpecificSignal = false;
    } else if (queryTokens.length >= 2 && tokenCoverage >= 0.75) {
      score += 65;
      hasSpecificSignal = true;
    }

    // Correspondance exacte ou inclusion forte dans le titre du chapitre ou de la leçon
    const normalizedChapter = normalizedCourseChapter;
    const normalizedLesson = normalizedCourseLesson;
    if ((normalizedLesson.includes(normalizedQuery) || normalizedChapter.includes(normalizedQuery)) && normalizedQuery.length > 4) {
      score += 120;
      hasSpecificSignal = true;
    } else if (searchableText.includes(normalizedQuery) && normalizedQuery.length > 4) {
      score += 40;
      if (!isMultiTopicIndex || normalizedQuery.length > 15) {
        hasSpecificSignal = true;
      }
    }

    // Détection de discipline contextuelle dans la requête :
    // 1. Si la requête porte sur des figures de style / rhétorique / littérature / poésie,
    //    ne JAMAIS faire matcher un cours de géométrie ou de maths (faux positif sur le mot "figure").
    const isFrenchOrLiteraryFigureQuery = /\b(?:figures?\s+(?:d['’]|de\s+)?(?:style|rh[eé]torique|oppositions?|analogies?|substitutions?|insistances?|amplifications?|att[eé]nuations?|construction|pens[eé]e|mots?)|oxymore|antith[eé]se|chiasme|antiphrase|m[eé]taphore|comparaison|all[eé]gorie|m[eé]tonymie|synecdoque|hyperbole|anaphore|litote|euph[eé]misme|pr[eé]t[eé]rition|versification|strophe|po[eé]sie|po[eé]tique|litt[eé]raire|dramatique)\b/i.test(normalizedQuery);
    if (isFrenchOrLiteraryFigureQuery && course.discipline === 'mathematiques') {
      score = 0;
      hasSpecificSignal = false;
    }

    // 2. Si la requête contient des indices explicites de SVT (résultats, expérience, interprétation, biologie, cellule, nerf, pedigree...)
    // et que ce cours est des Mathématiques sans aucun mot mathématique dans la requête, pénaliser le faux positif.
    const isSvtQuery = /\b(?:svt|biologie|cellule|g[eé]n[eé]tique|exp[eé]rience|exp[eé]rimentale|r[eé]sultats?|interpr[eé]tation|histogrammes?|pedigree|arbre\s+g[eé]n[eé]alogique|organe)\b/i.test(normalizedQuery);
    const hasMathSpecificTokens = /\b(?:maths?|mathematiques?|d[eé]riv[eé]e|int[eé]grale|primitive|suite|complexe|probabilit[eé]|tvi|vecteur|matrice|trigonom[eé]trie)\b/i.test(normalizedQuery);
    if (isSvtQuery && !hasMathSpecificTokens && course.discipline === 'mathematiques') {
      score = 0;
      hasSpecificSignal = false;
    }
    if (isSvtQuery && course.discipline === 'svt') {
      score += 30;
    }

    // Bonus for matching level
    if (level && course.level === level) {
      score += 10;
    } else if (!level) {
      // Lorsque l'élève ne précise pas de niveau (ex: "Thalès", "Pythagore", "résistance à la colonisation") :
      // Les classes d'examen officiel (3ème / BEPC et Terminale / BAC) contiennent les fiches complètes de référence.
      if (course.level === '3e') {
        score += 8;
      } else if (course.level === 'terminale') {
        score += 5;
      }
    }

    // Bonus for matching serie
    if (serie && course.serie && (course.serie === serie || course.serie.includes(serie))) {
      score += 8;
    }

    if (score > highestScore) {
      highestScore = score;
      bestCourse = course;
      bestHasSpecificSignal = hasSpecificSignal;
    }
  }

  // Exige un score minimal ET au moins un signal spécifique (mot-clé rare, titre, ou
  // sous-chaîne exacte). Sans signal spécifique, la requête est trop générique pour
  // être rattachée avec confiance à une fiche précise : mieux vaut ne rien renvoyer
  // ici et laisser les étapes suivantes (recherche philo/français par notion, etc.)
  // ou l'absence de résultat plutôt qu'une fiche fourre-tout mélangeant plusieurs sujets.
  if (highestScore >= 12 && bestHasSpecificSignal) {
    return bestCourse;
  }

  return null;
}
