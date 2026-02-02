import type { VerseTranslation, VerseTokens, TranslationLayerType, TranslatedSpan, ConfidenceLevel } from '@open-bible/schemas';

/**
 * Interface for translation engines
 * Allows plugging in different translation approaches
 */
export interface TranslationEngine {
  /** Engine identifier */
  id: string;
  /** Engine version */
  version: string;

  /**
   * Translate a verse to the target language
   */
  translateVerse(
    verseRef: string,
    tokens: VerseTokens,
    targetLanguage: string,
    layers: TranslationLayerType[]
  ): Promise<VerseTranslation>;

  /**
   * Translate a single token/phrase
   */
  translateToken(
    token: { text: string; lemma: string; gloss: string; morphology?: unknown },
    targetLanguage: string,
    context?: string
  ): Promise<string>;
}

/**
 * Registry of available translation engines
 */
const engines: Record<string, new (config?: Record<string, unknown>) => TranslationEngine> = {};

/**
 * Register a translation engine
 */
export function registerEngine(
  id: string,
  engineClass: new (config?: Record<string, unknown>) => TranslationEngine
): void {
  engines[id] = engineClass;
}

/**
 * Get a translation engine by ID
 */
export function getTranslationEngine(
  id: string,
  config?: Record<string, unknown>
): TranslationEngine {
  const EngineClass = engines[id];
  if (!EngineClass) {
    // Fall back to stub engine
    return new StubTranslationEngine(config);
  }
  return new EngineClass(config);
}

/**
 * Stub translation engine for development/testing
 * Generates placeholder translations from glosses
 */
export class StubTranslationEngine implements TranslationEngine {
  id = 'stub';
  version = '0.1.0';

  constructor(private config?: Record<string, unknown>) {}

  async translateVerse(
    verseRef: string,
    tokens: VerseTokens,
    targetLanguage: string,
    layers: TranslationLayerType[]
  ): Promise<VerseTranslation> {
    const translation: VerseTranslation = {
      verseRef,
      targetLanguage,
      profile: 'academic',
      layers: {},
      metadata: {
        pipelineVersion: '0.1.0',
        generatedAt: new Date().toISOString(),
        engineId: this.id,
        engineVersion: this.version,
        sourceDataVersion: '1.0.0',
      },
    };

    // Generate each requested layer
    for (const layerType of layers) {
      const spans = this.generateLayerSpans(tokens, layerType, verseRef, targetLanguage);
      const text = spans.map(s => s.text).join(' ');

      translation.layers[layerType] = {
        type: layerType,
        targetLanguage,
        text,
        spans,
        overallConfidence: 'medium',
        humanReviewed: false,
      };
    }

    return translation;
  }

  async translateToken(
    token: { text: string; lemma: string; gloss: string; morphology?: unknown },
    targetLanguage: string,
    context?: string
  ): Promise<string> {
    // Simply return the gloss for stub implementation
    return token.gloss || token.lemma;
  }

  private generateLayerSpans(
    tokens: VerseTokens,
    layerType: TranslationLayerType,
    verseRef: string,
    targetLanguage: string
  ): TranslatedSpan[] {
    const spans: TranslatedSpan[] = [];

    // Group tokens into spans based on layer type
    for (let i = 0; i < tokens.tokens.length; i++) {
      const token = tokens.tokens[i];
      let text = token.gloss || token.lemma;

      // Adjust text based on layer type
      if (layerType === 'literal') {
        // Keep gloss as-is
      } else if (layerType === 'idiomatic') {
        // Make it more natural (placeholder logic)
        text = text.replace(/\(obj\.\)/g, '').trim();
      } else if (layerType === 'literary') {
        // More poetic (placeholder logic)
        text = text.replace(/\(obj\.\)/g, '').trim();
      }

      spans.push({
        id: `${verseRef}.${targetLanguage}.${layerType}.${i}`,
        text,
        position: i,
        sourceTokenIds: [token.id],
        confidence: 'medium' as ConfidenceLevel,
      });
    }

    return spans;
  }
}

// Register the stub engine as default
registerEngine('stub', StubTranslationEngine);

/**
 * Available engine IDs
 */
export const AVAILABLE_ENGINES = ['stub'] as const;

/**
 * Engine capabilities for UI display
 */
export const ENGINE_INFO: Record<string, { name: string; description: string; requiresApiKey: boolean }> = {
  stub: {
    name: 'Stub Engine',
    description: 'Development engine that uses glosses for translation',
    requiresApiKey: false,
  },
};
