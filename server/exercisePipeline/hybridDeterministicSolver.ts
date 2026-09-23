/**
 * Orchestrateur local hybride.
 *
 * Le pipeline historique exigeait qu'un seul moteur résolve TOUT l'exercice.
 * C'est trop strict pour les exercices scolaires mixtes (dérivée -> signe ->
 * variation -> tangente, ou probabilité + calcul numérique, etc.).
 *
 * Ici, chaque question est confiée uniquement aux moteurs compatibles avec
 * son type de tâche. Le préambule de l'exercice est séparé de la question
 * courante afin d'empêcher toute contamination par une autre question.
 * Les résultats sont ensuite
 * réassemblés dans l'ordre original. Aucun appel IA/API n'est effectué.
 */
import { ParsedQuestion, SolvedExerciseResult, SolvedQuestionResult, StatementParsingResult, CompletenessValidationReport } from './types';
import { parseQuadraticPolynomial } from './mathVerifier';
import { solveQuadraticQuestion } from './exerciseSolverPipeline';
import { tryGenericLimitAndContinuityResolutionForExercise } from './genericLimitAndContinuitySolver';
import { tryGenericFunctionResolutionForExercise } from './genericFunctionSolver';
import { tryGenericSequenceResolutionForExercise } from './genericSequenceSolver';
import { tryGenericProbabilityResolutionForExercise } from './genericProbabilitySolver';
import { tryGenericHypergeometricResolutionForExercise } from './genericHypergeometricSolver';
import { tryGenericComplexResolutionForExercise } from './genericComplexSolver';
import { tryGenericPrimitiveResolutionForExercise } from './genericPrimitiveSolver';
import { tryGenericGeometryResolutionForExercise } from './genericGeometrySolver';
import { tryGenericSpaceGeometryResolutionForExercise } from './genericSpaceGeometrySolver';
import { tryGenericMatrixResolutionForExercise } from './genericMatrixSolver';
import { tryGenericKinematicsResolutionForExercise } from './genericKinematicsSolver';
import { tryGenericOhmResolutionForExercise } from './genericOhmSolver';
import { tryGenericStoichiometryResolutionForExercise } from './genericStoichiometrySolver';
import { tryGenericGravitationResolutionForExercise } from './genericGravitationSolver';
import { tryGenericOscillatorResolutionForExercise } from './genericOscillatorSolver';
import { tryGenericTecResolutionForExercise } from './genericTecSolver';
import { tryGenericArithmeticResolutionForExercise } from './genericArithmeticSolver';
import { validateCompleteness } from './completenessValidator';
import { solveMathsTleAExercise } from '../mathsEngine/mathsTleAEngine';

// Adaptateur vers l'ancien moteur Maths Tle A : il reste 100 % local mais
// retourne un contrat différent. Il est chargé dynamiquement afin de ne pas
// créer de dépendance circulaire au chargement du pipeline principal.
function tryLegacyMathsEngine(context: string, q: ParsedQuestion): SolvedQuestionResult | null {
  try {
    const res = solveMathsTleAExercise(`${context}\n\n${q.cleanText}`, { serie: 'A', level: 'terminale', discipline: 'mathematiques' });
    if (!res?.handledLocally || !res.result || res.result.confidence < 0.8) return null;
    const r = res.result;
    const steps = (r.stepByStepCalculations || []).flatMap((s) => [
      s.description,
      ...(s.mathLines || []),
    ].filter(Boolean));
    if (!r.finalAnswer || steps.length === 0 || r.verification?.checkPassed === false) return null;
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps,
      finalAnswer: r.finalAnswer,
      verificationPassed: true,
      verificationDetails: r.verification?.details,
      matchedParsedQuestionId: q.id,
    };
  } catch {
    return null;
  }
}

function isCompatible(q: ParsedQuestion, r: SolvedQuestionResult | null): boolean {
  if (!r || !r.finalAnswer || r.verificationPassed === false) return false;
  if (r.titleOrPrompt?.trim() !== q.cleanText.trim()) return false;
  const text = q.cleanText.toLowerCase();
  const body = `${r.finalAnswer} ${r.steps.join(' ')}`.toLowerCase();
  const forbidden: Record<string, RegExp[]> = {
    limits: [/résoudre.*équation|ensemble\s+des\s+solutions|s\s*=\s*\{/i],
    derivative: [/discriminant|résoudre.*équation|racines?\s+réelles/i],
    variation: [/discriminant|ensemble\s+des\s+solutions/i],
    probability: [/dérivée|discriminant|tableau\s+de\s+variation/i],
    sequence: [/asymptote|domaine\s+de\s+d[ée]finition/i],
  };
  if ((forbidden[q.detectedType] || []).some(re => re.test(body) && !re.test(text))) return false;
  return true;
}

function accept(q: ParsedQuestion, result: SolvedQuestionResult[] | null): SolvedQuestionResult | null {
  if (!result || result.length !== 1) return null;
  return isCompatible(q, result[0]) ? { ...result[0], matchedParsedQuestionId: q.id } : null;
}

function solveOneQuestion(context: string, q: ParsedQuestion, priorResults: SolvedQuestionResult[] = []): SolvedQuestionResult | null {
  // Le contexte commun contient uniquement les données situées AVANT les questions.
  // La question courante est ajoutée séparément. Cela empêche une autre question
  // de fournir accidentellement la méthode ou les données du solveur.
  const dependencyContext = /en\s+d[ée]duire|pr[ée]c[ée]dent|ci-dessus|en\s+utilisant|d[ée]duire/i.test(q.cleanText) && priorResults.length
    ? `${context}\n\nRÉSULTATS PRÉCÉDENTS EXPLICITEMENT UTILISABLES :\n${priorResults.map(r => `${r.numberLabel} ${r.finalAnswer}`).join('\n')}`
    : context;
  const questionContext = `${dependencyContext}\n${q.cleanText}`;

  const poly = parseQuadraticPolynomial(questionContext);
  const attempts: Array<() => SolvedQuestionResult[] | null> = [];

  // Le type de tâche est le garde-fou principal : on ne teste pas tous les moteurs.
  switch (q.detectedType) {
    case 'definition_domain':
      attempts.push(() => tryGenericLimitAndContinuityResolutionForExercise(questionContext, [q]));
      attempts.push(() => tryGenericFunctionResolutionForExercise(questionContext, [q]));
      break;
    case 'limits':
      attempts.push(() => tryGenericLimitAndContinuityResolutionForExercise(questionContext, [q]));
      attempts.push(() => tryGenericFunctionResolutionForExercise(questionContext, [q]));
      break;
    case 'derivative':
    case 'variation':
    case 'sign_table':
    case 'asymptote':
    case 'tangent':
      attempts.push(() => tryGenericFunctionResolutionForExercise(questionContext, [q]));
      if (poly) attempts.push(() => [parseQuadraticPolynomial(questionContext) ? solveQuadraticQuestionSafe(q, poly) : null].filter(Boolean) as SolvedQuestionResult[]);
      break;
    case 'evaluation':
      attempts.push(() => tryGenericArithmeticResolutionForExercise(questionContext, [q]));
      attempts.push(() => tryGenericFunctionResolutionForExercise(questionContext, [q]));
      if (poly) attempts.push(() => [parseQuadraticPolynomial(questionContext) ? solveQuadraticQuestionSafe(q, poly) : null].filter(Boolean) as SolvedQuestionResult[]);
      break;
    case 'sequence':
      attempts.push(() => tryGenericSequenceResolutionForExercise(questionContext, [q]));
      break;
    case 'probability':
      attempts.push(() => tryGenericHypergeometricResolutionForExercise(questionContext, [q]));
      attempts.push(() => tryGenericProbabilityResolutionForExercise(questionContext, [q]));
      break;
    case 'complex':
      attempts.push(() => tryGenericComplexResolutionForExercise(questionContext, [q]));
      break;
    case 'primitive':
      attempts.push(() => tryGenericPrimitiveResolutionForExercise(questionContext, [q]));
      break;
    case 'geometry':
      attempts.push(() => tryGenericSpaceGeometryResolutionForExercise(questionContext, [q]));
      attempts.push(() => tryGenericGeometryResolutionForExercise(questionContext, [q]));
      break;
    case 'matrix':
      attempts.push(() => tryGenericMatrixResolutionForExercise(questionContext, [q]));
      break;
    case 'factorisation':
    case 'equation':
    case 'inequation':
    case 'general_math':
    case 'general':
      attempts.push(() => tryGenericLimitAndContinuityResolutionForExercise(questionContext, [q]));
      attempts.push(() => tryGenericArithmeticResolutionForExercise(questionContext, [q]));
      if (poly) attempts.push(() => [solveQuadraticQuestionSafe(q, poly)].filter(Boolean) as SolvedQuestionResult[]);
      attempts.push(() => tryGenericFunctionResolutionForExercise(questionContext, [q]));
      attempts.push(() => tryGenericComplexResolutionForExercise(questionContext, [q]));
      attempts.push(() => tryGenericMatrixResolutionForExercise(questionContext, [q]));
      break;
    case 'true_false':
      break;
  }

  for (const attempt of attempts) {
    try {
      const solved = accept(q, attempt());
      if (solved) return solved;
    } catch {
      // Un moteur local défaillant ne doit pas contaminer la question suivante.
    }
  }

  // Aucun fallback générique ici. Une fausse réponse est plus grave qu'une question
  // temporairement non couverte : le pipeline supérieur pourra alors choisir une
  // autre stratégie au lieu d'afficher une solution inventée.
  return null;
}

// Le solveur quadratique historique renvoie null lorsqu'il ne reconnaît pas la tâche.
function solveQuadraticQuestionSafe(q: ParsedQuestion, poly: ReturnType<typeof parseQuadraticPolynomial>): SolvedQuestionResult | null {
  if (!poly) return null;
  return solveQuadraticQuestion(q, poly);
}

/**
 * Résolution hybride : chaque question peut utiliser un moteur différent.
 * Retourne null uniquement si au moins une question reste réellement inconnue.
 */
export function tryHybridDeterministicExerciseResolution(
  parsingResult: StatementParsingResult,
): { success: boolean; solvedExercises: SolvedExerciseResult[]; report: CompletenessValidationReport } | null {
  if (!parsingResult.exercises.length) return null;

  const solvedExercises: SolvedExerciseResult[] = [];

  for (const ex of parsingResult.exercises) {
    const context = ex.contextText || '';
    // Ne jamais envoyer toutes les questions au solveur comme contexte principal.
    // Les données de l'exercice sont le préambule; chaque question est traitée séparément.
    const solvedQuestions: SolvedQuestionResult[] = [];

    for (const q of ex.questions) {
      const solved = solveOneQuestion(context, q, solvedQuestions);
      if (!solved) return null;
      solvedQuestions.push(solved);
    }

    solvedExercises.push({
      title: ex.title,
      points: ex.points,
      introContext: ex.contextText,
      questions: solvedQuestions,
    });
  }

  const report = validateCompleteness(parsingResult.exercises, solvedExercises);
  if (!report.isComplete) return null;

  return { success: true, solvedExercises, report };
}
