/**
 * MOTEUR DE COMPRÉHENSION LEXICALE GÉNÉRIQUE
 * ============================================
 * Ces fonctions permettent au moteur de recherche de reconnaître un mot même
 * si l'élève l'a écrit sous une forme jamais vue auparavant (pluriel, conjugaison,
 * terminaison féminine, faute de frappe/orthographe) — sans qu'aucune liste de
 * synonymes ou de formulations n'ait été pré-enregistrée pour ce mot précis.
 *
 * Contrainte du projet : 100% local, déterministe, 0 appel IA/API externe.
 * On utilise donc uniquement des règles morphologiques génériques (racinisation
 * "stemming" légère) et une distance d'édition (Levenshtein) bornée.
 */

export function stripAccentsLower(str: string): string {
  return (str || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

// Terminaisons grammaticales françaises les plus fréquentes (pluriels, conjugaisons,
// féminins, dérivations courantes). Classées de la plus longue à la plus courte pour
// ne retirer qu'une seule terminaison, la plus spécifique possible.
const FRENCH_SUFFIXES = [
  'issements', 'issement', 'issaient', 'eraient', 'issons', 'issant', 'erions',
  'assions', 'assiez', 'eriez', 'erons', 'eront', 'ations', 'issez', 'aient',
  'ation', 'ition', 'issez', 'ables', 'ismes', 'iques', 'euses', 'trice', 'teurs',
  'ement', 'ances', 'ences', 'ition', 'ition',
  'ions', 'iez', 'ait', 'ant', 'ent', 'ees', 'eux', 'euse', 'trice', 'teur',
  'isme', 'ique', 'able', 'age',
  'es', 'er', 'ez', 'e', 's', 'x'
];

/**
 * Réduit un mot à une racine approximative générique. Ne dépend d'aucun
 * dictionnaire de mots connus : fonctionne aussi bien sur un mot totalement
 * nouveau (nom propre, néologisme, terme technique jamais rencontré).
 */
export function frenchStem(wordRaw: string): string {
  let w = stripAccentsLower(wordRaw).trim();
  if (w.length <= 3) return w;
  for (const suf of FRENCH_SUFFIXES) {
    if (w.length - suf.length >= 3 && w.endsWith(suf)) {
      return w.slice(0, w.length - suf.length);
    }
  }
  return w;
}

/** Distance de Levenshtein, plafonnée pour rester rapide sur de très longues chaînes. */
export function levenshtein(a: string, b: string, maxDist = 3): number {
  if (a === b) return 0;
  if (Math.abs(a.length - b.length) > maxDist) return maxDist + 1;
  let prevRow = new Array(b.length + 1);
  for (let j = 0; j <= b.length; j++) prevRow[j] = j;
  for (let i = 1; i <= a.length; i++) {
    const currRow = new Array(b.length + 1);
    currRow[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      currRow[j] = Math.min(
        prevRow[j] + 1,
        currRow[j - 1] + 1,
        prevRow[j - 1] + cost
      );
    }
    prevRow = currRow;
  }
  return prevRow[b.length];
}

/**
 * Deux mots "se ressemblent" au sens large : forme identique, même racine
 * morphologique, ou à une/deux fautes de frappe près (tolérance proportionnelle
 * à la longueur). Généralise sans aucune liste de synonymes pré-enregistrée.
 */
export function wordsResemble(aRaw: string, bRaw: string): boolean {
  if (!aRaw || !bRaw) return false;
  const a = stripAccentsLower(aRaw);
  const b = stripAccentsLower(bRaw);
  if (a === b) return true;
  if (a.length < 3 || b.length < 3) return false;

  const stemA = frenchStem(a);
  const stemB = frenchStem(b);
  if (stemA.length >= 3 && stemA === stemB) return true;

  const maxLen = Math.max(a.length, b.length);
  if (maxLen >= 6) {
    // Tolérance volontairement stricte : elle doit rattraper une faute de frappe
    // ou un accent manquant, jamais transformer un mot en un autre mot grammaticalement
    // différent (ex: "fonction" ne doit pas ressembler à "fonctionne").
    const tolerance = maxLen >= 12 ? 2 : 1;
    if (levenshtein(a, b, tolerance) <= tolerance) return true;
  }
  return false;
}

/**
 * Vérifie si un token de la requête a un mot voisin (racine commune / faute de frappe)
 * dans un texte donné. Compare le token à chaque mot ENTIER du texte (jamais une simple
 * sous-chaîne "libre") pour éviter qu'un mot court (ex: "fonctionne") soit considéré comme
 * présent uniquement parce qu'il forme le préfixe d'un mot plus long et sans rapport
 * (ex: "fonctionnelle"). Cette fonction est destinée à un usage EN COMPLÉMENT d'une
 * vérification de correspondance exacte déjà faite par l'appelant, pas en remplacement.
 */
export function textContainsResemblingToken(text: string, token: string): boolean {
  if (!text || !token) return false;
  const normToken = stripAccentsLower(token);
  if (normToken.length < 3) return false; // aligné sur le seuil minimal déjà appliqué par les appelants
  const normText = stripAccentsLower(text);
  const words = normText.split(/[^a-z0-9]+/).filter(Boolean);
  return words.some(w => wordsResemble(w, normToken));
}
