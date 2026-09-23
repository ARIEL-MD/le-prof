/**
 * Moteur Expert Géographie 6ème (Côte d'Ivoire)
 * Orchestre la classification et la résolution déterministe locale selon le programme officiel
 */

import { classifyGeo6eExercise, Geo6eClassification } from "./classifier";
import { solveGeo6eExercise } from "./solvers/geo6eSolver";
import { Geo6eStructuredResult } from "./types";
import { GEO_6E_CURRICULUM } from "../../geographie6eKnowledgeBase";

export interface Geo6eEngineResponse {
  success: boolean;
  handledLocally: boolean;
  classification: Geo6eClassification;
  result: Geo6eStructuredResult;
  methodologyAnalysis: any;
  pedagogicalMetadata: {
    curriculum: string;
    level: string;
    themeTitle: string;
    lessonNumber: number;
    lessonTitle: string;
    executionMode: "deterministic_local_engine";
    officialReference: string;
  };
}

export function solveGeo6e(statement: string): Geo6eEngineResponse {
  const classification = classifyGeo6eExercise(statement);
  const result = solveGeo6eExercise(statement, classification.topicType);

  return {
    success: true,
    handledLocally: true,
    classification,
    result,
    methodologyAnalysis: result.toMethodologyAnalysisResult(),
    pedagogicalMetadata: {
      curriculum: "Programme National Officiel de Géographie 6ème (Côte d'Ivoire)",
      level: "6ème (Collège)",
      themeTitle: classification.themeTitle,
      lessonNumber: classification.lessonNumber,
      lessonTitle: classification.lessonTitle,
      executionMode: "deterministic_local_engine",
      officialReference: "École Numérique & Programmes Éducatifs CI",
    },
  };
}
