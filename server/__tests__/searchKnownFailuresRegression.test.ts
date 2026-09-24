import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { searchAcademicCourseUnified } from "../academicSearchEngine";

describe("Recherche — trois régressions identifiées", () => {
  it("reconnaît une demande d'argument philosophique sur la liberté", async () => {
    const res = await searchAcademicCourseUnified({
      query: "argument philosophique sur la liberté"
    });

    assert.equal(res.noResult, undefined);
    assert.match(res.chapterTitle, /libert/i);
    assert.doesNotMatch(res.chapterTitle, /Voltaire/i);
    assert.ok(
      res.coreConceptsAndFormulas.some(c =>
        /libert|citation|auteur|Descartes|Spinoza|Kant/i.test(
          `${c.name} ${c.formulaOrRule} ${c.explanation}`
        )
      )
    );
  });

  it("ne confond pas les thèmes de L'Étranger avec Thelma et Louise", async () => {
    const res = await searchAcademicCourseUnified({
      query: "thèmes de L'Étranger"
    });

    assert.equal(res.noResult, undefined);
    assert.match(`${res.chapterTitle} ${res.definitionAndScope}`, /L.?Étranger|Camus/i);
    assert.doesNotMatch(
      `${res.chapterTitle} ${res.definitionAndScope} ${res.directContent || ""}`,
      /Thelma\s+et\s+Louise/i
    );
  });

  it("conserve la pertinence du corpus NTSGOD pour un commentaire Bergson/Nietzsche", async () => {
    const res = await searchAcademicCourseUnified({
      query: "commentaire Bergson Nietzsche NTSGOD"
    });

    assert.equal(res.noResult, undefined);
    const corpus = [
      res.chapterTitle,
      res.definitionAndScope,
      res.directContent || "",
      res.fullCourseContent || "",
      res.quickRevisionMemo,
      ...(res.coreConceptsAndFormulas || []).flatMap(c => [
        c.name,
        c.formulaOrRule,
        c.explanation,
        c.contextOrApplication
      ])
    ].join(" ");

    assert.match(corpus, /Bergson/i);
    assert.match(corpus, /Nietzsche/i);
  });
});
