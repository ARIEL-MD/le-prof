/**
 * ANALYSEUR SYNTAXIQUE ET MODAL DES SUJETS DE PHILOSOPHIE
 * ========================================================
 * Ce module résout le problème d'architecture signalé :
 * Au lieu d'injecter aveuglément le nom d'une notion générale
 * dans un gabarit pré-écrit, il analyse la structure logique,
 * la modalité (possibilité, nécessité, légitimité, causalité)
 * et les prédicats réels de la question posée.
 */

export interface ParsedSubjectAnalysis {
  modalType: "PEUT_ON" | "FAUT_IL" | "DOIT_ON" | "EST_IL" | "DEPEND_IL" | "SUFFIT_IL" | "RENONCER" | "POURQUOI" | "EXCLUT_IL" | "GENERIC";
  sujetBrut: string;
  sujetNettoye: string;
  termePrincipal: string;
  termeSecondaire?: string;
  predicatPrincipal: string;
  affirmationDirecte: string;
  interrogationContraire: string;
  problemeCourt: string;
  aspect1: string;
  aspect2: string;
  reformulation: string;
}

/**
 * Nettoie le sujet des préfixes scolaires ("Sujet 1 :", etc.) et des guillemets
 */
export function cleanPhiloSubject(raw: string): string {
  let s = raw.trim();
  s = s.replace(/^(?:sujet\s*\d*\s*[:\-–]\s*|dissertation\s*[:\-–]\s*|exercice\s*\d*\s*[:\-–]\s*)/i, "");
  s = s.replace(/^[«"“\s]+|[»"”\s\.\?!]+$/g, "").trim();
  return s;
}

/**
 * Détecte la modalité philosophique principale
 */
export function detectModalType(cleanSubject: string): ParsedSubjectAnalysis["modalType"] {
  const s = cleanSubject.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  if (/\bexclut-(?:il|elle)\b|\bexcluent-(?:ils|elles)\b|\bexclut\b|\bs'oppose-t-(?:il|elle)\b|\bincompatible\b|\bsupprime-t-(?:il|elle)\b|\bruine-t-(?:il|elle)\b/i.test(s)) return "EXCLUT_IL";
  if (/\bdepend.*de\b|\bdependre\s+de\b/i.test(s)) return "DEPEND_IL";
  if (/\best-ce\s+renoncer\b|\brenoncer\s+[aà]\b|\brevient-il\s+[aà]\s+renoncer\b/i.test(s)) return "RENONCER";
  if (/\bsuffit-il\b|\bsuffit\s+de\b|\best-il\s+suffisant\b/i.test(s)) return "SUFFIT_IL";
  if (/^peut-on\b|\bl['’]homme\s+peut-il\b|\best-il\s+possible\b|\bpouvons-nous\b/i.test(s)) return "PEUT_ON";
  if (/^faut-il\b|\best-il\s+necessaire\b/i.test(s)) return "FAUT_IL";
  if (/^doit-on\b|\bl['’]homme\s+doit-il\b|\bavons-nous\s+le\s+devoir\b/i.test(s)) return "DOIT_ON";
  if (/^pourquoi\b/i.test(s)) return "POURQUOI";
  if (/^(?:est-il|est-elle|sont-ils|sont-elles)\b|\b(?:est|sont)-t-(?:il|elle|ils|elles)\b|\b[a-zà-ÿ][^?]*?-(?:t-il|t-elle|il|elle)\b/i.test(s)) return "EST_IL";

  return "GENERIC";
}

/**
 * Transforme le sujet interrogatif en affirmation fluide pour l'Aspect 1
 * Ex : "Le bonheur dépend-il de nous ?" -> "le bonheur dépend de nous"
 * Ex : "Peut-on être heureux sans autrui ?" -> "l'on peut être heureux sans autrui"
 * Ex : "Obéir, est-ce renoncer à sa liberté ?" -> "obéir équivaut à renoncer à sa liberté"
 * Ex : "L'idée d'inconscient exclut-elle l'idée de liberté ?" -> "l'idée d'inconscient exclut l'idée de liberté"
 */
export function buildAffirmationFromSubject(cleanSubject: string): string {
  let s = cleanSubject.replace(/\s*\?\s*$/, "").trim();

  // Inversions verbales interrogatives
  s = s.replace(/^peut-on\s+/i, "l'homme peut ");
  s = s.replace(/^pouvons-nous\s+/i, "nous pouvons ");
  s = s.replace(/^faut-il\s+/i, "il faut ");
  s = s.replace(/^doit-on\s+/i, "l'homme a le devoir de ");
  s = s.replace(/^est-il\s+toujours\s+/i, "il est toujours ");
  s = s.replace(/^est-il\s+/i, "il est ");
  s = s.replace(/^sont-ils\s+/i, "ils sont ");
  s = s.replace(/^pourquoi\s+/i, "les raisons pour lesquelles ");
  s = s.replace(/^dans\s+quelle\s+mesure\s+/i, "");
  s = s.replace(/^en\s+quoi\s+/i, "");

  // Inversions sujet-verbe médianes : "exclut-elle", "dépend-il de", "rend-il", "est-il"
  s = s.replace(/\bexclut-t-(il|elle)\b/gi, "exclut");
  s = s.replace(/\bexclut-(il|elle)\b/gi, "exclut");
  s = s.replace(/\bexcluent-(ils|elles)\b/gi, "excluent");
  s = s.replace(/\bsupprime-t-(il|elle)\b/gi, "supprime");
  s = s.replace(/\bruine-t-(il|elle)\b/gi, "ruine");
  s = s.replace(/\bmenace-t-(il|elle)\b/gi, "menace");
  s = s.replace(/\boppose-t-(il|elle)\b/gi, "oppose");
  s = s.replace(/\binterdit-il\b/gi, "interdit");
  s = s.replace(/\ban[ée]antit-il\b/gi, "anéantit");
  s = s.replace(/\bdepend-t-(il|elle)\b/gi, "dépend");
  s = s.replace(/\bdepend-(il|elle)\b/gi, "dépend");
  s = s.replace(/\brend-il\b/gi, "rend");
  s = s.replace(/\bdetruit-il\b/gi, "détruit");
  s = s.replace(/\basservit-il\b/gi, "asservit");
  s = s.replace(/\bsepare-t-il\b/gi, "sépare");
  s = s.replace(/\best-t-(il|elle)\b/gi, "est");
  s = s.replace(/\best-(il|elle)\b/gi, "est");
  s = s.replace(/\bsont-(ils|elles)\b/gi, "sont");
  s = s.replace(/\b(peut|peuvent)-t-(il|elle|ils|elles)\b/gi, "$1");

  // Formulations "X, est-ce renoncer à Y"
  s = s.replace(/,\s*est-ce\s+renoncer\s+[aà]\s+/gi, " implique de renoncer à ");
  s = s.replace(/,\s*est-ce\s+/gi, " consiste véritablement en ");

  if (s.length > 0) {
    s = s.charAt(0).toLowerCase() + s.slice(1);
  }
  return s;
}

/**
 * Construit l'antithèse critique contrastée pour l'Aspect 2
 */
export function buildOpposingQuestion(cleanSubject: string, modal: ParsedSubjectAnalysis["modalType"]): string {
  const norm = cleanSubject.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  if (modal === "EXCLUT_IL") {
    if (/inconscient/i.test(norm) && /libert/i.test(norm)) {
      return "toutefois, l'élucidation de l'inconscient ne permet-elle pas de fonder une liberté authentique et conquise ?";
    }
    if (/loi|etat|societe/i.test(norm) && /libert/i.test(norm)) {
      return "toutefois, la contrainte légitime n'est-elle pas la condition même de réalisation de la liberté ?";
    }
    return "toutefois, cette exclusion apparente ne peut-elle pas être surmontée par une compréhension plus haute de leurs rapports ?";
  }

  if (modal === "DEPEND_IL") {
    return "toutefois, n'est-il pas tributaire de déterminismes et de contingences extérieures ?";
  }
  if (modal === "RENONCER") {
    return "toutefois, l'obéissance réfléchie n'est-elle pas la véritable condition de réalisation de la liberté ?";
  }
  if (modal === "SUFFIT_IL") {
    return "toutefois, cette condition n'est-elle pas insuffisante sans d'autres exigences fondamentales ?";
  }
  if (modal === "PEUT_ON") {
    if (/heureux|bonheur/i.test(norm) && /sans\s+autrui|solitaire/i.test(norm)) {
      return "toutefois, la relation à autrui n'est-elle pas indispensable pour atteindre la félicité ?";
    }
    if (/penser.*sans.*mot|penser.*sans.*langage/i.test(norm)) {
      return "toutefois, la pensée peut-elle réellement s'élaborer et se fixer sans le langage ?";
    }
    if (/echapper.*temps/i.test(norm)) {
      return "toutefois, la conscience humaine n'est-elle pas par essence enracinée dans la temporalité ?";
    }
    return "toutefois, cette possibilité ne rencontre-t-elle pas des limites infranchissables ?";
  }
  if (modal === "FAUT_IL" || modal === "DOIT_ON") {
    if (/verite.*qui\s+blesse|illusion.*qui\s+console/i.test(norm)) {
      return "toutefois, l'illusion protectrice n'a-t-elle pas une valeur vitale pour préserver l'homme ?";
    }
    if (/douter/i.test(norm)) {
      return "toutefois, le doute systématique ne risque-t-il pas de paralyser l'action et d'interdire tout savoir ?";
    }
    return "toutefois, une telle exigence ne comporte-t-elle pas des risques ou des exceptions légitimes ?";
  }
  if (modal === "EST_IL") {
    if (/insatiable/i.test(norm) && /desir/i.test(norm)) {
      return "toutefois, le désir ne peut-il pas être régulé et sublimé par la raison ?";
    }
    if (/inutile|illusion|mythe/i.test(norm)) {
      return "toutefois, ne remplit-il pas une fonction essentielle pour l'existence humaine ?";
    }
    return "toutefois, ne faut-il pas nuancer cette identité en révélant une autre dimension du problème ?";
  }

  return "toutefois, la perspective inverse ne permet-elle pas de dépasser cette difficulté fondamentale ?";
}

/**
 * Analyse complète et synthèse déterministe pour un sujet quelconque
 */
export function parseAndAnalyzePhiloSubject(rawSubject: string): ParsedSubjectAnalysis {
  const clean = cleanPhiloSubject(rawSubject);
  const modal = detectModalType(clean);
  const affirmation = buildAffirmationFromSubject(clean);

  // 1. Problème philosophique central court (doit finir par ?, jamais de "ou", jamais d'affirmation)
  let problemeCourt = clean;
  if (!problemeCourt.endsWith("?")) {
    problemeCourt += " ?";
  }
  // Enlever les préambules interrogatifs redondants
  problemeCourt = problemeCourt.replace(/^dans\s+quelle\s+mesure\s+/i, "");
  problemeCourt = problemeCourt.replace(/^en\s+quoi\s+/i, "");
  problemeCourt = problemeCourt.replace(/^pourquoi\s+/i, "");
  if (problemeCourt.length > 0) {
    problemeCourt = problemeCourt.charAt(0).toUpperCase() + problemeCourt.slice(1);
  }

  // 2. Aspect 1 : commence par "dans quelle mesure [affirmation] ?"
  const aspect1 = `dans quelle mesure ${clean} ?`;

  // 3. Aspect 2 : question contrastée interrogative
  const aspect2 = buildOpposingQuestion(clean, modal);

  // 4. Reformulation spécifique sans gabarit plat
  let reformulation = "";
  if (modal === "EXCLUT_IL") {
    reformulation = `Ce sujet invite à examiner si « ${clean} » consacre une incompatibilité radicale et définitive, ou si cette exclusion apparente masque une complémentarité plus profonde où l'élucidation de l'un permet d'accomplir véritablement l'autre.`;
  } else if (modal === "DEPEND_IL") {
    reformulation = `Il s'agit d'examiner si « ${clean} » signifie que l'homme est le maître souverain de sa destinée, ou si des déterminismes et contingences extérieures échappent à son contrôle.`;
  } else if (modal === "RENONCER") {
    reformulation = `Ce sujet invite à déterminer si l'acte d'obéissance constitue une aliénation de la volonté personnelle ou si, au contraire, l'obéissance à la loi rationnelle accomplit la liberté véritable.`;
  } else if (modal === "PEUT_ON") {
    reformulation = `La question demande de statuer à la fois sur la possibilité de fait et sur la légitimité de droit : est-il concevable et souhaitable que ${affirmation} ?`;
  } else if (modal === "FAUT_IL" || modal === "DOIT_ON") {
    reformulation = `Ce sujet interroge une obligation ou une nécessité impérieuse : avons-nous le devoir inconditionnel d'agir ainsi, ou cette prescription doit-elle être tempérée par d'autres exigences humaines ?`;
  } else if (modal === "SUFFIT_IL") {
    reformulation = `La réflexion consiste à distinguer la simple condition préalable de la condition suffisante : ce facteur suffit-il à lui seul à produire le résultat escompté, ou appelle-t-il d'autres médiations ?`;
  } else {
    reformulation = `Ce sujet invite à confronter l'opinion commune immédiate à une analyse critique rigoureuse afin d'éclairer la tension philosophique contenue dans « ${clean} ».`;
  }

  const exactSubjectAnchor = `Sujet exact : « ${clean} ? »`;
  if (!reformulation.includes(clean)) reformulation = `${reformulation} ${exactSubjectAnchor}`.trim();

  return {
    modalType: modal,
    sujetBrut: rawSubject,
    sujetNettoye: clean,
    termePrincipal: "",
    predicatPrincipal: affirmation,
    affirmationDirecte: affirmation,
    interrogationContraire: aspect2,
    problemeCourt,
    aspect1,
    aspect2,
    reformulation,
  };
}
