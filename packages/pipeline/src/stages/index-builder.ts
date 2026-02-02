import * as fs from 'fs';
import * as path from 'path';
import type { PipelineStage, PipelineConfig, PipelineContext } from '../pipeline';

/**
 * Index builder stage - creates search indexes
 */
export const indexBuilderStage: PipelineStage = {
  name: 'index',
  description: 'Build search indexes',

  async run(config: PipelineConfig, context: PipelineContext): Promise<void> {
    const outputDir = config.outputDir;
    const indexDir = path.join(outputDir, 'index');

    if (!fs.existsSync(indexDir)) {
      fs.mkdirSync(indexDir, { recursive: true });
    }

    // Build different indexes
    await buildTranslationIndex(config, context, indexDir);
    await buildLemmaIndex(config, context, indexDir);
    await buildStrongsIndex(config, context, indexDir);

    console.log(`  Built search indexes`);
  },
};

/**
 * Build index of translation text
 */
async function buildTranslationIndex(
  config: PipelineConfig,
  context: PipelineContext,
  indexDir: string
): Promise<void> {
  const index: Record<string, Array<{ verseRef: string; text: string }>> = {};

  for (const targetLang of config.targetLanguages) {
    const langDir = path.join(config.outputDir, 'translations', targetLang);
    if (!fs.existsSync(langDir)) continue;

    for (const bookCode of context.processedBooks) {
      const filePath = path.join(langDir, `${bookCode}.translations.json`);
      if (!fs.existsSync(filePath)) continue;

      const translations = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

      for (const [verseRef, trans] of Object.entries(translations)) {
        const translation = trans as any;
        const layers = translation.layers || {};

        // Index the idiomatic layer primarily
        const layer = layers.idiomatic || layers.literal;
        if (layer?.text) {
          // Tokenize text into words
          const words = layer.text.toLowerCase()
            .replace(/[.,;:!?"'()]/g, '')
            .split(/\s+/)
            .filter((w: string) => w.length > 2);

          for (const word of words) {
            if (!index[word]) {
              index[word] = [];
            }
            index[word].push({ verseRef, text: layer.text });
          }
        }
      }
    }
  }

  const indexPath = path.join(indexDir, 'translation-index.json');
  fs.writeFileSync(indexPath, JSON.stringify(index, null, 2));
}

/**
 * Build index of lemmas
 */
async function buildLemmaIndex(
  config: PipelineConfig,
  context: PipelineContext,
  indexDir: string
): Promise<void> {
  const index: Record<string, Array<{ verseRef: string; tokenId: string; gloss: string }>> = {};
  const tokensDir = path.join(config.outputDir, 'tokens');

  for (const bookCode of context.processedBooks) {
    const filePath = path.join(tokensDir, `${bookCode}.tokens.json`);
    if (!fs.existsSync(filePath)) continue;

    const tokenData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    for (const [verseRef, verseTokens] of Object.entries(tokenData)) {
      const vt = verseTokens as any;
      for (const token of vt.tokens || []) {
        if (token.lemma) {
          const key = token.lemma.toLowerCase();
          if (!index[key]) {
            index[key] = [];
          }
          index[key].push({
            verseRef,
            tokenId: token.id,
            gloss: token.gloss || '',
          });
        }
      }
    }
  }

  const indexPath = path.join(indexDir, 'lemma-index.json');
  fs.writeFileSync(indexPath, JSON.stringify(index, null, 2));
}

/**
 * Build index of Strong's numbers
 */
async function buildStrongsIndex(
  config: PipelineConfig,
  context: PipelineContext,
  indexDir: string
): Promise<void> {
  const index: Record<string, Array<{ verseRef: string; tokenId: string; lemma: string; gloss: string }>> = {};
  const tokensDir = path.join(config.outputDir, 'tokens');

  for (const bookCode of context.processedBooks) {
    const filePath = path.join(tokensDir, `${bookCode}.tokens.json`);
    if (!fs.existsSync(filePath)) continue;

    const tokenData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    for (const [verseRef, verseTokens] of Object.entries(tokenData)) {
      const vt = verseTokens as any;
      for (const token of vt.tokens || []) {
        if (token.strongs) {
          if (!index[token.strongs]) {
            index[token.strongs] = [];
          }
          index[token.strongs].push({
            verseRef,
            tokenId: token.id,
            lemma: token.lemma || '',
            gloss: token.gloss || '',
          });
        }
      }
    }
  }

  const indexPath = path.join(indexDir, 'strongs-index.json');
  fs.writeFileSync(indexPath, JSON.stringify(index, null, 2));
}

/**
 * Search the translation index
 */
export function searchTranslationIndex(
  indexPath: string,
  query: string
): Array<{ verseRef: string; text: string }> {
  if (!fs.existsSync(indexPath)) {
    return [];
  }

  const index = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));
  const words = query.toLowerCase().split(/\s+/).filter(w => w.length > 2);

  const results = new Map<string, { verseRef: string; text: string; score: number }>();

  for (const word of words) {
    const matches = index[word] || [];
    for (const match of matches) {
      const existing = results.get(match.verseRef);
      if (existing) {
        existing.score += 1;
      } else {
        results.set(match.verseRef, { ...match, score: 1 });
      }
    }
  }

  return Array.from(results.values())
    .sort((a, b) => b.score - a.score)
    .map(({ verseRef, text }) => ({ verseRef, text }));
}
