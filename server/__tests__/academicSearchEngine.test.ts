import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { searchAcademicCourseUnified } from "../academicSearchEngine";

describe("Academic Search Engine (100% sans IA)", () => {
  it("trouve immédiatement une citation ou notion de philosophie avec ses auteurs", async () => {
    const res = await searchAcademicCourseUnified({
      query: "citations sur la liberté"
    });

    assert.ok(res, "Le résultat ne doit pas être null");
    assert.equal(res.discipline, "philo");
    assert.match(res.chapterTitle, /Liberté/i);
    assert.ok(res.coreConceptsAndFormulas.length >= 3, "Doit comporter les thèses et citations");
    // Vérifie la présence de citations
    const hasQuotes = res.coreConceptsAndFormulas.some(c => c.name.includes("Citation") || c.formulaOrRule.includes("«"));
    assert.ok(hasQuotes, "Doit contenir des citations authentiques");
    assert.ok(res.stepByStepMethod.length > 0, "Doit fournir une méthode pas à pas");
    assert.ok(res.solvedExample.problemStatement.length > 0, "Doit fournir un exemple résolu");
  });

  it("trouve les mouvements littéraires et exemples d'œuvres pour la dissertation en français", async () => {
    const res = await searchAcademicCourseUnified({
      query: "exemples d'oeuvres pour dissertation sur le romantisme"
    });

    assert.ok(res, "Le résultat ne doit pas être null");
    assert.equal(res.discipline, "francais");
    assert.match(res.chapterTitle, /Romantisme/i);
    // Vérifie la présence d'auteurs et d'œuvres clés
    const hasWorks = res.coreConceptsAndFormulas.some(c => c.name.includes("Œuvres") || c.formulaOrRule.includes("Victor Hugo"));
    assert.ok(hasWorks, "Doit mentionner des œuvres et auteurs clés (ex: Victor Hugo)");
  });

  it("trouve un cours officiel du programme ivoirien (ex: Pythagore, SVT, PC)", async () => {
    const res = await searchAcademicCourseUnified({
      query: "théorème de Pythagore",
      discipline: "mathematiques",
      level: "3e"
    });

    assert.ok(res, "Le résultat ne doit pas être null");
    assert.match(res.chapterTitle, /Pythagore/i);
    assert.ok(res.coreConceptsAndFormulas.length > 0, "Doit comporter des formules");
    assert.ok(res.classicExamTraps.length > 0, "Doit comporter les pièges d'examen");
  });

  it("répond de manière encyclopédique même pour un sujet général hors-programme", async () => {
    const res = await searchAcademicCourseUnified({
      query: "Albert Camus et l'absurde"
    });

    assert.ok(res, "Le résultat ne doit pas être null");
    assert.ok(res.definitionAndScope.length > 50, "Doit contenir une synthèse encyclopédique substantielle");
    assert.ok(res.coreConceptsAndFormulas.length > 0, "Doit décomposer les concepts");
    assert.ok(res.certificationNote.includes("0 appel IA"), "Doit certifier que 0 appel IA a été effectué");
  });

  it("trouve précisément les arguments de la fonction évasive de la poésie malgré les fautes de frappe", async () => {
    const res = await searchAcademicCourseUnified({
      query: "argument sur la fontinon evasive de la  poesie"
    });

    assert.ok(res, "Le résultat ne doit pas être null");
    assert.equal(res.discipline, "francais");
    assert.match(res.chapterTitle, /Vocation.*Évasive.*Poésie/i);
    // Vérifie que les arguments d'auteurs sont bien fournis
    const baudelaireArg = res.coreConceptsAndFormulas.find(c => c.formulaOrRule.includes("Baudelaire"));
    assert.ok(baudelaireArg, "Doit contenir l'argument fondé sur Baudelaire");
    assert.match(baudelaireArg.formulaOrRule, /Fleurs du mal/i);

    const mallarmeArg = res.coreConceptsAndFormulas.find(c => c.formulaOrRule.includes("Mallarmé") || c.formulaOrRule.includes("Rimbaud"));
    assert.ok(mallarmeArg, "Doit contenir l'argument d'évasion spirituelle (Mallarmé / Rimbaud)");

    // Vérifie la présence de la nuance critique / dépassement
    const nuanceArg = res.coreConceptsAndFormulas.find(c => c.name.includes("Nuance") || c.formulaOrRule.includes("Césaire"));
    assert.ok(nuanceArg, "Doit proposer la nuance dialectique (Césaire / Éluard)");
  });

  it("gère de manière générale les demandes d'arguments sur d'autres genres (ex: réalisme dans le roman)", async () => {
    const res = await searchAcademicCourseUnified({
      query: "donne moi des arguments sur la fonction réaliste du roman"
    });

    assert.ok(res, "Le résultat ne doit pas être null");
    assert.equal(res.discipline, "francais");
    assert.match(res.chapterTitle, /Roman/i);
    assert.ok(res.coreConceptsAndFormulas.length >= 2, "Doit contenir des arguments et exemples d'œuvres");
    const hasRealism = res.coreConceptsAndFormulas.some(c => /Balzac|Zola|Stendhal|miroir/i.test(c.formulaOrRule + " " + c.explanation));
    assert.ok(hasRealism, "Doit mentionner des auteurs du réalisme (Balzac, Zola...)");
  });

  it("gère de manière générale toute requête avec extraction de sujet et intention", async () => {
    const res = await searchAcademicCourseUnified({
      query: "cours complet sur l'énergie cinétique"
    });

    assert.ok(res, "Le résultat ne doit pas être null");
    assert.ok(res.definitionAndScope.length > 30, "Doit définir le concept demandé");
    assert.ok(res.coreConceptsAndFormulas.length > 0, "Doit fournir des points clés ou formules");
  });

  it("répond précisément à une recherche de personnalité/auteur ('qui est platon') avec sa fiche dédiée et non une notion générique", async () => {
    const res = await searchAcademicCourseUnified({
      query: "qui est platon"
    });

    assert.ok(res, "Le résultat ne doit pas être null");
    assert.equal(res.discipline, "philo");
    assert.match(res.chapterTitle, /Platon/i);
    // Vérifie que ce n'est PAS la fiche générique de "La Philosophie : Utilité, Rôle et Portée"
    assert.doesNotMatch(res.chapterTitle, /Utilité, Rôle et Portée/i);
    assert.match(res.definitionAndScope, /Platon.*Athènes/i);
    // Vérifie la présence des concepts majeurs de Platon
    const hasCaverne = res.coreConceptsAndFormulas.some(c => /Caverne|Monde Intelligible|Idées|Réminiscence/i.test(c.name + " " + c.explanation));
    assert.ok(hasCaverne, "Doit comporter les concepts platoniciens (Caverne, Idées, Réminiscence)");
    // Vérifie le mémo
    assert.match(res.quickRevisionMemo, /Platon/i);
  });

  it("trouve précisément la fiche dédiée pour d'autres auteurs canoniques (Socrate, Descartes, Rousseau)", async () => {
    const resSocrate = await searchAcademicCourseUnified({
      query: "qui était socrate"
    });
    assert.ok(resSocrate);
    assert.match(resSocrate.chapterTitle, /Socrate/i);
    assert.match(resSocrate.definitionAndScope, /Athènes|ciguë|jeunesse/i);
    const hasMaieutique = resSocrate.coreConceptsAndFormulas.some(c => /maïeutique/i.test(c.name + " " + c.explanation));
    assert.ok(hasMaieutique, "Doit comporter la maïeutique socratique");

    const resDescartes = await searchAcademicCourseUnified({
      query: "descartes"
    });
    assert.ok(resDescartes);
    assert.match(resDescartes.chapterTitle, /Descartes/i);
    assert.match(resDescartes.quickRevisionMemo, /Cogito/i);
  });

  it("ne génère pas de mention boilerplate 'Définition officielle conforme aux programmes ivoiriens MENA / DPFC' dans les explications", async () => {
    const resMaths = await searchAcademicCourseUnified({
      query: "théorème de Pythagore",
      discipline: "mathematiques",
      level: "3e"
    });
    assert.ok(resMaths);
    for (const concept of resMaths.coreConceptsAndFormulas) {
      assert.doesNotMatch(
        concept.explanation,
        /Définition officielle conforme aux programmes ivoiriens MENA \/ DPFC/i,
        "L'explication ne doit pas contenir la mention boilerplate MENA/DPFC"
      );
    }

    const resPhilo = await searchAcademicCourseUnified({
      query: "citations sur la liberté"
    });
    assert.ok(resPhilo);
    for (const concept of resPhilo.coreConceptsAndFormulas) {
      assert.doesNotMatch(
        concept.explanation,
        /Cadre conceptuel fondamental au programme du Baccalauréat \(MENA \/ DPFC\)/i,
        "L'explication de philo ne doit pas contenir de cadre conceptuel boilerplate"
      );
    }
  });
});

// Régressions critiques : la recherche ne doit jamais confondre une notion avec
// une fiche générique d'une autre matière et ne doit jamais fabriquer un résultat
// lorsque la base ne possède aucune correspondance fiable.
describe("Recherche de Cours & Notions — anti faux positifs", () => {
  it("résout 'definition guerre froide' dans le cours d'Histoire, pas dans Français", async () => {
    const res = await searchAcademicCourseUnified({ query: "definition guerre froide" });
    assert.equal(res.discipline, "histoire");
    assert.match(res.chapterTitle, /guerre froide/i);
    assert.doesNotMatch(res.chapterTitle, /connecteurs|français|poésie/i);
    assert.match(res.definitionAndScope, /Guerre froide/i);
  });

  it("résout plusieurs intentions sur une même notion sans changer de matière", async () => {
    const queries = ["guerre froide", "causes guerre froide", "consequences guerre froide", "dates guerre froide"];
    for (const query of queries) {
      const res = await searchAcademicCourseUnified({ query });
      assert.equal(res.discipline, "histoire", `Mauvaise discipline pour: ${query}`);
      assert.match(res.chapterTitle, /guerre froide/i, `Mauvais sujet pour: ${query}`);
    }
  });

  it("ne retourne pas une fiche arbitraire pour une notion inconnue", async () => {
    const res = await searchAcademicCourseUnified({ query: "notion totalement inexistante xyzqv 847291" });
    assert.equal(res.noResult, true);
    assert.match(res.chapterTitle, /aucun résultat pertinent/i);
  });
  it("répond exactement à une demande de conjugaison ciblée et conserve le verbe demandé", async () => {
    const res = await searchAcademicCourseUnified({ query: "manger au présent" });
    assert.equal(res.noResult, undefined);
    assert.match(res.chapterTitle, /manger/i);
    assert.match(res.directContent || "", /TEMPS DEMANDÉ.*PRÉSENT/i);
    assert.match(res.directContent || "", /je\s+\*?mange/i);
  });

  it("retourne le corpus demandé pour 'argument sur la liberté' sans basculer vers une autre notion", async () => {
    const res = await searchAcademicCourseUnified({ query: "argument sur la liberté" });
    assert.equal(res.noResult, undefined);
    assert.match(res.chapterTitle, /libert/i);
    assert.ok(res.coreConceptsAndFormulas.length >= 2);
    assert.ok(res.coreConceptsAndFormulas.some(c => /citation|auteur|libert/i.test(c.name + " " + c.formulaOrRule + " " + c.explanation)));
  });

  it("refuse une fiche sans rapport même lorsqu'un mot générique pourrait déclencher une base voisine", async () => {
    const res = await searchAcademicCourseUnified({ query: "xyzqv notion 847291" });
    assert.equal(res.noResult, true);
    assert.match(res.chapterTitle, /aucun résultat pertinent/i);
  });

  it("ne confond pas une requête à plusieurs termes avec une fiche partageant seulement un mot générique", async () => {
    const res = await searchAcademicCourseUnified({ query: "agriculture lunaire quantique 847291" });
    assert.equal(res.noResult, true);
  });

});


describe("Recherche universelle — intentions et sujets inédits", () => {
  it("retourne réellement la facette demandée pour les causes de la guerre froide", async () => {
    const res = await searchAcademicCourseUnified({ query: "causes de la guerre froide" });
    assert.equal(res.noResult, undefined);
    assert.match(res.chapterTitle, /guerre froide/i);
    assert.match(res.chapterTitle, /causes|origines/i);
    assert.match(res.definitionAndScope, /cause|origine|contexte|déclench/i);
  });

  it("conserve le même sujet pour conséquences, acteurs et dates", async () => {
    const queries = [
      { q: "conséquences de la guerre froide", facet: /conséquences|bilan/i },
      { q: "acteurs de la guerre froide", facet: /acteurs|parties prenantes/i },
      { q: "dates de la guerre froide", facet: /dates|chronologie/i }
    ];

    for (const item of queries) {
      const res = await searchAcademicCourseUnified({ query: item.q });
      assert.equal(res.noResult, undefined, item.q);
      assert.match(res.chapterTitle, /guerre froide/i, item.q);
      assert.match(res.chapterTitle, item.facet, item.q);
    }
  });

  it("comprend des formulations inédites sans dépendre d'une liste de requêtes", async () => {
    const res = await searchAcademicCourseUnified({
      query: "pourquoi la chute du mur de Berlin a-t-elle marqué la fin de la guerre froide"
    });
    assert.equal(res.noResult, undefined);
    assert.match(res.chapterTitle, /Berlin|guerre froide/i);
    assert.ok(res.definitionAndScope.length > 50);
  });

  it("couvre plusieurs domaines avec la même logique de facettes", async () => {
    const cases = [
      { q: "définition de la mitose", title: /mitose/i },
      { q: "mécanisme de la photosynthèse", title: /photosynthèse|photosynthese/i },
      { q: "rôle de l'ONU", title: /ONU/i },
      { q: "avantages de la mondialisation", title: /mondialisation/i }
    ];

    for (const item of cases) {
      const res = await searchAcademicCourseUnified({ query: item.q });
      assert.equal(res.noResult, undefined, item.q);
      assert.match(res.chapterTitle, item.title, item.q);
    }
  });
});
