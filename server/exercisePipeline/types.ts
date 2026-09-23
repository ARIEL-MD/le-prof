export interface ParsedQuestion {
  id: string;
  number: number;
  numberLabel: string; // "1.", "2.", "a)", "1. a)", "I.", etc.
  rawText: string;
  cleanText: string;
  parentQuestionLabel?: string;
  subQuestions?: ParsedQuestion[];
  detectedType: 
    | 'definition_domain' // Ensemble ou domaine de définition
    | 'evaluation'      // Calculer f(0), f(1)...
    | 'factorisation'   // Factoriser f(x)...
    | 'equation'        // Résoudre f(x)=0, équation...
    | 'inequation'      // Résoudre f(x) >= 0...
    | 'sign_table'      // Signe de f(x), tableau de signe...
    | 'variation'       // Variations de f, tableau de variation...
    | 'derivative'      // Dériver f, f'(x)...
    | 'limits'          // Limites en +inf, -inf...
    | 'asymptote'       // Asymptotes, branches infinies...
    | 'tangent'         // Équation de la tangente...
    | 'primitive'       // Primitive, intégrale...
    | 'probability'     // Probabilités, tirages...
    | 'sequence'        // Suites numériques
    | 'complex'         // Nombres complexes
    | 'matrix'          // Matrices et systèmes matriciels
    | 'statistics'      // Statistiques, moyenne, Mayer...
    | 'true_false'      // Vrai / Faux
    | 'geometry'
    | 'general_math'    // Autre question mathématique
    | 'comprehension'   // Question de compréhension/texte
    | 'general';        // Question générale
  extractedData?: {
    functionExpression?: string;
    evaluatedPoints?: number[];
    equationTarget?: string;
    interval?: string;
    [key: string]: any;
  };
}

export interface ParsedExercise {
  id: string;
  exerciseNumber: number;
  title: string;
  points?: string;
  contextText?: string;
  rawStatement: string;
  questions: ParsedQuestion[];
  isMultiQuestion: boolean;
}

export interface StatementParsingResult {
  rawStatement: string;
  cleanedStatement: string;
  exercises: ParsedExercise[];
  totalQuestionsCount: number;
  hasNumberedQuestions: boolean;
  disciplineDetected?: string;
  identifiedConcepts: string[];
}

export interface SolvedQuestionResult {
  numberLabel: string;
  titleOrPrompt: string;
  steps: string[];
  justification?: string;
  finalAnswer: string;
  verificationPassed?: boolean;
  verificationDetails?: string;
  matchedParsedQuestionId?: string;
}

export interface SolvedExerciseResult {
  title: string;
  points?: string;
  introContext?: string;
  questions: SolvedQuestionResult[];
}

export interface CompletenessValidationReport {
  isComplete: boolean;
  detectedQuestionsCount: number;
  solvedQuestionsCount: number;
  missingQuestions: ParsedQuestion[];
  extraQuestionsFound: string[];
  inventedQuestionsRemoved: string[];
  complianceRate: number; // 0 to 1
  details: string;
}
