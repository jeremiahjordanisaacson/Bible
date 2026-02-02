import { z } from 'zod';

/**
 * Translation layer types
 */
export const TranslationLayerType = z.enum([
  'literal',      // Very literal, word-for-word where possible
  'idiomatic',    // Meaning-based, natural English
  'literary',     // Poetic/literary rendering
]);
export type TranslationLayerType = z.infer<typeof TranslationLayerType>;

/**
 * Translation profile/style presets
 */
export const TranslationProfile = z.enum([
  'maximal-literal',   // Prioritize source word order and structure
  'academic',          // Balanced with scholarly precision
  'readability',       // Prioritize natural flow and clarity
]);
export type TranslationProfile = z.infer<typeof TranslationProfile>;

/**
 * Confidence level for a translation choice
 */
export const ConfidenceLevel = z.enum([
  'high',      // Well-established, little ambiguity
  'medium',    // Some interpretive choices made
  'low',       // Significant uncertainty or multiple valid options
  'uncertain', // Best guess, needs review
]);
export type ConfidenceLevel = z.infer<typeof ConfidenceLevel>;

/**
 * A translated span - a piece of text in the translation that maps to source tokens
 */
export const TranslatedSpan = z.object({
  /** Unique span ID */
  id: z.string(),
  /** The translated text */
  text: z.string(),
  /** Position in the translation (0-indexed) */
  position: z.number().int().nonnegative(),
  /** Source token IDs this span translates */
  sourceTokenIds: z.array(z.string()),
  /** Confidence level */
  confidence: ConfidenceLevel,
  /** Alternative translations considered */
  alternatives: z.array(z.object({
    text: z.string(),
    reason: z.string(),
  })).optional(),
  /** Whether this span contains interpolated/implied words */
  hasImplied: z.boolean().optional(),
  /** Tags for highlighting (e.g., 'divine-name', 'idiom', 'hapax') */
  tags: z.array(z.string()).optional(),
});
export type TranslatedSpan = z.infer<typeof TranslatedSpan>;

/**
 * A complete translation layer for a verse
 */
export const TranslationLayer = z.object({
  /** Layer type */
  type: TranslationLayerType,
  /** Target language code (ISO 639-1) */
  targetLanguage: z.string(),
  /** Translated spans */
  spans: z.array(TranslatedSpan),
  /** Full text (concatenated spans) */
  text: z.string(),
  /** Overall confidence for the verse */
  overallConfidence: ConfidenceLevel,
  /** Whether this has been human-reviewed */
  humanReviewed: z.boolean(),
  /** Reviewer ID if reviewed */
  reviewerId: z.string().optional(),
  /** Review timestamp */
  reviewedAt: z.string().datetime().optional(),
});
export type TranslationLayer = z.infer<typeof TranslationLayer>;

/**
 * Complete translation object for a verse
 */
export const VerseTranslation = z.object({
  /** Verse reference */
  verseRef: z.string(),
  /** Target language */
  targetLanguage: z.string(),
  /** Translation profile used */
  profile: TranslationProfile,
  /** All translation layers */
  layers: z.object({
    literal: TranslationLayer.optional(),
    idiomatic: TranslationLayer.optional(),
    literary: TranslationLayer.optional(),
  }),
  /** Pipeline metadata */
  metadata: z.object({
    pipelineVersion: z.string(),
    generatedAt: z.string().datetime(),
    engineId: z.string(),
    engineVersion: z.string(),
    sourceDataVersion: z.string(),
  }),
});
export type VerseTranslation = z.infer<typeof VerseTranslation>;

/**
 * Target language configuration
 */
export const TargetLanguageConfig = z.object({
  /** ISO 639-1 code */
  code: z.string(),
  /** Display name */
  name: z.string(),
  /** Native name */
  nativeName: z.string(),
  /** Writing direction */
  direction: z.enum(['ltr', 'rtl']),
  /** Script name */
  script: z.string(),
  /** Whether fully implemented */
  implemented: z.boolean(),
  /** Percentage complete */
  completionPercent: z.number().min(0).max(100),
});
export type TargetLanguageConfig = z.infer<typeof TargetLanguageConfig>;
