import * as fs from 'fs';
import * as path from 'path';
import type { PipelineStage, PipelineConfig, PipelineContext } from '../pipeline';
import type { StudyNote, VerseNotes } from '@open-bible/schemas';

/**
 * Notes stage - generates study notes for verses
 */
export const notesStage: PipelineStage = {
  name: 'notes',
  description: 'Generate study notes and explanations',

  async run(config: PipelineConfig, context: PipelineContext): Promise<void> {
    const tokensDir = path.join(config.outputDir, 'tokens');
    const translationsDir = path.join(config.outputDir, 'translations');
    const notesDir = path.join(config.outputDir, 'notes');

    if (!fs.existsSync(notesDir)) {
      fs.mkdirSync(notesDir, { recursive: true });
    }

    // Process each book
    for (const bookCode of context.processedBooks) {
      const tokensPath = path.join(tokensDir, `${bookCode}.tokens.json`);

      if (!fs.existsSync(tokensPath)) {
        continue;
      }

      const outputPath = path.join(notesDir, `${bookCode}.notes.json`);

      if (!fs.existsSync(outputPath) || config.force) {
        let tokens: Record<string, unknown>;
        try {
          tokens = JSON.parse(fs.readFileSync(tokensPath, 'utf-8'));
        } catch (error) {
          const message = error instanceof Error ? error.message : String(error);
          context.warnings.push(`Failed to parse tokens for ${bookCode}: ${message}`);
          continue;
        }

        // Try each target language for translations, use the first available
        let translations: Record<string, unknown> = {};
        for (const lang of config.targetLanguages) {
          const translationsPath = path.join(translationsDir, lang, `${bookCode}.translations.json`);
          if (fs.existsSync(translationsPath)) {
            try {
              translations = JSON.parse(fs.readFileSync(translationsPath, 'utf-8'));
            } catch {
              // Fall through to next language
            }
            break;
          }
        }

        const notes = await generateBookNotes(bookCode, tokens, translations, context);
        fs.writeFileSync(outputPath, JSON.stringify(notes, null, 2));
      }
    }

    console.log(`  Generated notes for ${context.processedBooks.length} books`);
  },
};

/**
 * Generate study notes for a book
 */
async function generateBookNotes(
  bookCode: string,
  tokens: Record<string, unknown>,
  translations: Record<string, unknown>,
  context: PipelineContext
): Promise<Record<string, VerseNotes>> {
  const allNotes: Record<string, VerseNotes> = {};

  for (const verseRef of Object.keys(tokens)) {
    const notes: StudyNote[] = [];

    // In production, this would:
    // 1. Identify significant terms
    // 2. Detect translation choices that need explanation
    // 3. Flag ambiguous passages
    // 4. Generate cross-references
    // 5. Add textual criticism notes

    // For now, create placeholder structure
    allNotes[verseRef] = {
      verseRef,
      notes,
      countByCategory: {},
      hasInterpretiveIssues: false,
    };
  }

  return allNotes;
}

/**
 * Categories of notes to generate
 */
export const NOTE_CATEGORIES = [
  'translation-choice',
  'alternative',
  'grammatical',
  'lexical',
  'cultural',
  'theological',
  'textual',
  'interpretive',
  'cross-reference',
  'idiom',
  'uncertain',
] as const;

/**
 * Check if a term requires a study note
 */
export function requiresNote(token: {
  gloss: string;
  strongs?: string;
  morphology?: { pos: string };
}): boolean {
  // Terms that often need explanation
  const significantTerms = new Set([
    'H430', // Elohim
    'H3068', // YHWH
    'H1254', // bara (create)
    'G3056', // logos
    'G2316', // theos
    'G5547', // christos
  ]);

  if (token.strongs && significantTerms.has(token.strongs)) {
    return true;
  }

  return false;
}
