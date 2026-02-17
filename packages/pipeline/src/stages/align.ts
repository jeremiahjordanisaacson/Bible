import * as fs from 'fs';
import * as path from 'path';
import type { PipelineStage, PipelineConfig, PipelineContext } from '../pipeline';
import type { VerseAlignment, AlignmentMapping } from '@open-bible/schemas';
import type { ConfidenceLevel } from '@open-bible/schemas';

/**
 * Align stage - creates alignments between source tokens and translation spans
 */
export const alignStage: PipelineStage = {
  name: 'align',
  description: 'Generate token-to-span alignments',

  async run(config: PipelineConfig, context: PipelineContext): Promise<void> {
    const translationsDir = path.join(config.outputDir, 'translations');
    const alignmentsDir = path.join(config.outputDir, 'alignments');

    if (!fs.existsSync(alignmentsDir)) {
      fs.mkdirSync(alignmentsDir, { recursive: true });
    }

    // Process each target language
    for (const targetLang of config.targetLanguages) {
      const langTransDir = path.join(translationsDir, targetLang);
      const langAlignDir = path.join(alignmentsDir, targetLang);

      if (!fs.existsSync(langAlignDir)) {
        fs.mkdirSync(langAlignDir, { recursive: true });
      }

      // Process each book
      for (const bookCode of context.processedBooks) {
        const transPath = path.join(langTransDir, `${bookCode}.translations.json`);
        if (!fs.existsSync(transPath)) {
          continue;
        }

        const outputPath = path.join(langAlignDir, `${bookCode}.alignments.json`);

        if (!fs.existsSync(outputPath) || config.force) {
          let translations: Record<string, unknown>;
          try {
            translations = JSON.parse(fs.readFileSync(transPath, 'utf-8'));
          } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            context.warnings.push(`Failed to parse translations for ${bookCode} (${targetLang}): ${message}`);
            continue;
          }
          const alignments = generateAlignments(translations, targetLang);
          fs.writeFileSync(outputPath, JSON.stringify(alignments, null, 2));
        }
      }
    }

    console.log(`  Generated alignments for ${context.processedBooks.length} books`);
  },
};

/**
 * Generate alignments from translations
 * In a full implementation, this would use alignment algorithms
 * For now, it extracts alignments already embedded in the translation spans
 */
function generateAlignments(
  translations: Record<string, unknown>,
  targetLanguage: string
): Record<string, VerseAlignment> {
  const alignments: Record<string, VerseAlignment> = {};

  for (const [verseRef, trans] of Object.entries(translations)) {
    const translation = trans as Record<string, unknown>;
    const layers = (translation.layers || {}) as Record<string, unknown>;

    // Process each layer
    for (const [layerType, layer] of Object.entries(layers)) {
      if (!layer) continue;

      const layerData = layer as Record<string, unknown>;
      const mappings: AlignmentMapping[] = [];
      const alignedSourceTokens = new Set<string>();
      const spans = (layerData.spans || []) as Array<Record<string, unknown>>;

      for (const span of spans) {
        const sourceTokenIds = span.sourceTokenIds as string[] | undefined;
        if (sourceTokenIds && sourceTokenIds.length > 0) {
          mappings.push({
            id: `${verseRef}.${layerType}.${span.id}`,
            sourceTokenIds,
            targetSpanId: span.id as string,
            type: sourceTokenIds.length > 1 ? 'phrase' : 'direct',
            confidence: ((span.confidence as string) || 'medium') as ConfidenceLevel,
          });

          sourceTokenIds.forEach((id: string) => alignedSourceTokens.add(id));
        }
      }

      const alignmentKey = `${verseRef}.${layerType}`;
      alignments[alignmentKey] = {
        verseRef,
        layerType,
        targetLanguage,
        alignments: mappings,
        unalignedSourceTokens: [], // Would compute from source tokens
        unalignedTargetSpans: [],
        qualityScore: 0.9, // Placeholder
        metadata: {
          pipelineVersion: '0.1.0',
          generatedAt: new Date().toISOString(),
          algorithmId: 'embedded-alignment',
        },
      };
    }
  }

  return alignments;
}
