import * as fs from 'fs';
import * as path from 'path';
import type { PipelineStage, PipelineConfig, PipelineContext } from '../pipeline';
import type { VerseAlignment, AlignmentMapping } from '@open-bible/schemas';

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
          const translations = JSON.parse(fs.readFileSync(transPath, 'utf-8'));
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
    const translation = trans as any;
    const layers = translation.layers || {};

    // Process each layer
    for (const [layerType, layer] of Object.entries(layers)) {
      if (!layer) continue;

      const layerData = layer as any;
      const mappings: AlignmentMapping[] = [];
      const alignedSourceTokens = new Set<string>();

      for (const span of layerData.spans || []) {
        if (span.sourceTokenIds && span.sourceTokenIds.length > 0) {
          mappings.push({
            id: `${verseRef}.${layerType}.${span.id}`,
            sourceTokenIds: span.sourceTokenIds,
            targetSpanId: span.id,
            type: span.sourceTokenIds.length > 1 ? 'phrase' : 'direct',
            confidence: span.confidence || 'medium',
          });

          span.sourceTokenIds.forEach((id: string) => alignedSourceTokens.add(id));
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
