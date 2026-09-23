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
    const hasQuotes = res.coreConceptsAndFormulas.some(c => c.name.includes("Citation") || c.formulaOrRule.includes("«"));
    assert.ok(hasQuotes, "Doit contenir des citations authentiques");
    // Une recherche de citations n'est pas une demande de méthode pas à pas :
    // elle doit prioritairement restituer le corpus demandé.
    assert.ok(res.coreConceptsAndFormulas.length > 0, "Doit fournir le corpus demandé");
  });

  it("trouve les mouvements littéraires et exemples d'œuvres pour la dissertation en français", async () => {
    const res = await searchAcademicCourseUnified({
      query: "exemples d'oeuvres pour dissertation sur le romantisme"
    });

    assert.ok(res, "Le résultat ne doit pas être null");
    assert.equal(res.discipline, "francais");
    assert.match(res.chapterTitle, /Romantisme/i);
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
    // Le moteur est explicitement déterministe et sans IA externe ; ce test ne doit
    // pas dépendre d'une phrase de présentation qui peut varier selon la source.
    assert.equal(res.isInternational === true || res.certificationNote.includes("0 appel IA"), true);
  });

  it("trouve précisément les arguments de la fonction évasive de la poésie malgré les fautes de frappe", async () => {
    const res = await searchAcademicCourseUnified({
      query: "argument sur la fontinon evasive de la  poesie"
    });

    assert.ok(res, "Le résultat ne doit pas être null");
    assert.equal(res.discipline, "francais");
    assert.match(res.chapterTitle, /Vocation.*Évasive.*Poésie/i);
    const baudelaireArg = res.coreConceptsAndFormulas.find(c => c.formulaOrRule.includes("Baudelaire"));
    assert.ok(baudelaireArg, "Doit contenir l'argument fondé sur Baudelaire");
    assert.match(baudelaireArg.formulaOrRule, /Fleurs du mal/i);

    const mallarmeArg = res.coreConceptsAndFormulas.find(c => c.formulaOrRule.includes("Mallarmé") || c.formulaOrRule.includes("Rimbaud"));
    assert.ok(mallarmeArg, "Doit contenir l'argument d'évasion spirituelle (Mallarmé / Rimbaud)");

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
});
