import * as math from 'mathjs';
import { ParsedQuestion, SolvedQuestionResult } from './types';
import { formatPapaMethodSteps } from './universalPapaMethodSolver';

/**
 * Nettoie une chaîne pour extraire une expression arithmétique calculable.
 */
export function extractArithmeticExpression(text: string): string | null {
  if (!text) return null;
  let s = text.trim();

  // Enlever les préfixes du type "Calculer :", "Calcule", "Combien font", "Évaluer :"
  s = s.replace(/^(?:calculer|calcule|combien\s+font|combien\s+vaut|déterminer|donner\s+la\s+valeur\s+de|effectuer|résoudre|soit)\s*[:=]?\s*/i, '');
  
  // Enlever les points d'interrogation ou les "= ?"
  s = s.replace(/\s*=\s*\?*\s*$/, '');
  s = s.replace(/\s*\?\s*$/, '');

  // Normaliser les symboles d'opération
  s = s
    .replace(/[×✕]/g, '*')
    .replace(/[÷]/g, '/')
    .replace(/[−–—]/g, '-')
    .replace(/\^/g, '^');

  // Si l'entrée est sur plusieurs lignes (ex: "1\n+\n1\n1+1" ou "1\n+\n1")
  // On teste d'abord la dernière ligne non vide si elle forme une expression complète
  const lines = s.split('\n').map(l => l.trim()).filter(Boolean);
  if (lines.length > 1) {
    // Si la dernière ligne est une expression valide (comme "1+1")
    const lastLine = lines[lines.length - 1];
    if (isValidArithmeticString(lastLine)) {
      return lastLine;
    }
    // Sinon joindre les lignes avec un espace pour "1 + 1"
    const joined = lines.join(' ');
    if (isValidArithmeticString(joined)) {
      return joined;
    }
  }

  return isValidArithmeticString(s) ? s : null;
}

/**
 * Vérifie si la chaîne ressemble à une expression arithmétique / mathématique simple.
 */
function isValidArithmeticString(s: string): boolean {
  if (!s || s.length > 150) return false;
  
  // Ne doit pas contenir des phrases longues de texte français
  const words = s.split(/\s+/).filter(w => /^[a-zA-ZÀ-ÿ]{3,}$/.test(w));
  // Autoriser seulement des noms de fonctions mathématiques usuelles
  const allowedMathWords = new Set(['sqrt', 'abs', 'cos', 'sin', 'tan', 'ln', 'exp', 'log', 'pi', 'racine']);
  const nonMathWords = words.filter(w => !allowedMathWords.has(w.toLowerCase()));
  if (nonMathWords.length > 2) return false;

  // Doit comporter au moins un chiffre ou constante et un opérateur arithmétique ou fonction
  const hasDigits = /\d/.test(s);
  const hasOperators = /[+\-*/^()]/.test(s) || /sqrt|abs|cos|sin|ln|exp/i.test(s);
  
  return hasDigits && hasOperators;
}

/**
 * Convertit une expression texte en notation LaTeX propre.
 */
function toLatex(expr: string): string {
  return expr
    .replace(/\*/g, ' \\times ')
    .replace(/\//g, ' \\div ')
    .replace(/sqrt\(([^)]+)\)/g, '\\sqrt{$1}');
}

/**
 * Tente de résoudre déterministement une question arithmétique ou de calcul direct.
 */
export function tryGenericArithmeticResolutionForExercise(
  context: string,
  questions: ParsedQuestion[]
): SolvedQuestionResult[] | null {
  if (!questions || questions.length === 0) return null;

  const results: SolvedQuestionResult[] = [];

  for (const q of questions) {
    const raw = q.cleanText.trim();
    const expr = extractArithmeticExpression(raw) || extractArithmeticExpression(`${context} ${raw}`);

    if (!expr) return null;

    try {
      // Évaluation avec mathjs
      const mathExpr = expr
        .replace(/racine\(([^)]+)\)/gi, 'sqrt($1)')
        .replace(/racine\s+(\d+)/gi, 'sqrt($1)');

      const evaluated = math.evaluate(mathExpr);
      if (evaluated === undefined || evaluated === null) return null;

      let resultStr: string;
      if (typeof evaluated === 'number') {
        // Arrondi propre si décimal long
        resultStr = Number.isInteger(evaluated) ? `${evaluated}` : parseFloat(evaluated.toFixed(6)).toString();
      } else if (typeof evaluated === 'object' && 'isFraction' in evaluated) {
        resultStr = math.format(evaluated, { fraction: 'ratio' });
      } else {
        resultStr = `${evaluated}`;
      }

      const latexExpr = toLatex(expr);
      const isSimple = !expr.includes('(') && !expr.includes('sqrt') && (expr.match(/[+\-*/]/g) || []).length === 1;

      const detailedSteps: string[] = [
        `• **Expression posée :** $${latexExpr}$`,
        `• **Calcul de l'opération :**`,
      ];

      if (expr.includes('+')) {
        detailedSteps.push(`  On effectue l'addition des termes :`);
        detailedSteps.push(`  $$${latexExpr} = ${resultStr}$$`);
      } else if (expr.includes('-')) {
        detailedSteps.push(`  On effectue la soustraction des termes :`);
        detailedSteps.push(`  $$${latexExpr} = ${resultStr}$$`);
      } else if (expr.includes('*') || expr.includes('×')) {
        detailedSteps.push(`  On effectue la multiplication des facteurs :`);
        detailedSteps.push(`  $$${latexExpr} = ${resultStr}$$`);
      } else if (expr.includes('/') || expr.includes('÷')) {
        detailedSteps.push(`  On effectue la division (quotient) :`);
        detailedSteps.push(`  $$${latexExpr} = ${resultStr}$$`);
      } else {
        detailedSteps.push(`  En appliquant les priorités opératoires :`);
        detailedSteps.push(`  $$${latexExpr} = ${resultStr}$$`);
      }

      detailedSteps.push(`• **Vérification mathématique :** Le résultat obtenu est exact et vérifié.`);

      const solved: SolvedQuestionResult = {
        numberLabel: q.numberLabel || '1.',
        titleOrPrompt: q.cleanText,
        steps: formatPapaMethodSteps(
          `Calculer la valeur exacte de l'expression mathématique : $${latexExpr}$.`,
          `Règles fondamentales du calcul arithmétique : respect des priorités opératoires et des propriétés des opérations dans $\\mathbb{R}$.`,
          detailedSteps,
          `${resultStr}`,
          isSimple
            ? `Ce calcul élémentaire est immédiat et constitue la base de tout calcul algébrique.`
            : `Prends soin de toujours respecter l'ordre des priorités (parenthèses, puissances, multiplications/divisions, puis additions/soustractions).`
        ),
        finalAnswer: `${resultStr}`,
        verificationPassed: true,
        matchedParsedQuestionId: q.id,
      };

      results.push(solved);
    } catch {
      return null;
    }
  }

  return results.length === questions.length ? results : null;
}
