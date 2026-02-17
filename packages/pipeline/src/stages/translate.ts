import * as fs from 'fs';
import * as path from 'path';
import type { PipelineStage, PipelineConfig, PipelineContext } from '../pipeline';
import type { VerseTranslation, VerseTokens, TranslationLayerType } from '@open-bible/schemas';
import { getTranslationEngine, type TranslationEngine } from '../engines/translation-engine';

/**
 * Translate stage - generates translation layers for each verse
 */
export const translateStage: PipelineStage = {
  name: 'translate',
  description: 'Generate translation drafts at multiple layers',

  async run(config: PipelineConfig, context: PipelineContext): Promise<void> {
    const tokensDir = path.join(config.outputDir, 'tokens');
    const translationsDir = path.join(config.outputDir, 'translations');

    if (!fs.existsSync(translationsDir)) {
      fs.mkdirSync(translationsDir, { recursive: true });
    }

    // Get translation engine
    const engine = getTranslationEngine(config.engineId, config.engineConfig);

    // Process each target language
    for (const targetLang of config.targetLanguages) {
      const langDir = path.join(translationsDir, targetLang);
      if (!fs.existsSync(langDir)) {
        fs.mkdirSync(langDir, { recursive: true });
      }

      // Process each book
      for (const bookCode of context.processedBooks) {
        console.log(`  Translating ${bookCode} to ${targetLang}...`);

        const tokensPath = path.join(tokensDir, `${bookCode}.tokens.json`);
        if (!fs.existsSync(tokensPath)) {
          context.warnings.push(`No tokens found for ${bookCode}`);
          continue;
        }

        const outputPath = path.join(langDir, `${bookCode}.translations.json`);

        if (!fs.existsSync(outputPath) || config.force) {
          // Load tokens
          let tokenData: Record<string, unknown>;
          try {
            tokenData = JSON.parse(fs.readFileSync(tokensPath, 'utf-8'));
          } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            context.warnings.push(`Failed to parse tokens for ${bookCode}: ${message}`);
            continue;
          }

          // Generate translations
          const translations = await generateBookTranslations(
            bookCode,
            tokenData,
            targetLang,
            engine,
            context
          );

          fs.writeFileSync(outputPath, JSON.stringify(translations, null, 2));
        }
      }
    }

    console.log(`  Generated translations for ${context.processedBooks.length} books in ${config.targetLanguages.length} languages`);
  },
};

/**
 * Generate translations for an entire book
 */
async function generateBookTranslations(
  bookCode: string,
  tokenData: Record<string, unknown>,
  targetLanguage: string,
  engine: TranslationEngine,
  context: PipelineContext
): Promise<Record<string, VerseTranslation>> {
  const translations: Record<string, VerseTranslation> = {};
  const layers: TranslationLayerType[] = ['literal', 'idiomatic', 'literary'];

  for (const [verseRef, verseTokens] of Object.entries(tokenData)) {
    try {
      const vt = verseTokens as Record<string, unknown>;
      const tokens = {
        verseRef: (vt.verseRef as string) || verseRef,
        language: (vt.language as string) || 'hebrew',
        tokens: (vt.tokens as Array<Record<string, unknown>>) || [],
        tokenCount: (vt.tokenCount as number) || 0,
      };
      const translation = await engine.translateVerse(
        verseRef,
        tokens as VerseTokens,
        targetLanguage,
        layers
      );
      translations[verseRef] = translation;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      context.warnings.push(`Translation failed for ${verseRef}: ${message}`);
    }
  }

  return translations;
}
