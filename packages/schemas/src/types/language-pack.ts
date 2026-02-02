import { z } from 'zod';

/**
 * Language pack metadata for a target language translation
 */
export const LanguagePackMetadata = z.object({
  /** ISO 639-1 language code */
  languageCode: z.string(),
  /** Display name in English */
  languageName: z.string(),
  /** Display name in the native language */
  nativeName: z.string(),
  /** Writing direction */
  direction: z.enum(['ltr', 'rtl']),
  /** Script name (e.g., 'Latin', 'Arabic', 'Devanagari') */
  script: z.string(),
  /** Version of this language pack */
  version: z.string(),
  /** Translation status */
  status: z.enum(['draft', 'review', 'beta', 'stable']),
  /** Books included */
  includedBooks: z.array(z.string()),
  /** Completion statistics */
  completion: z.object({
    /** Total verses */
    totalVerses: z.number().int().nonnegative(),
    /** Verses translated */
    translatedVerses: z.number().int().nonnegative(),
    /** Verses reviewed */
    reviewedVerses: z.number().int().nonnegative(),
    /** Percentage complete */
    percentComplete: z.number().min(0).max(100),
  }),
  /** Contributors */
  contributors: z.array(z.object({
    id: z.string(),
    name: z.string(),
    role: z.enum(['translator', 'reviewer', 'editor']),
  })),
  /** Translation engine used */
  translationEngine: z.object({
    id: z.string(),
    version: z.string(),
    model: z.string().optional(),
  }),
  /** License information */
  license: z.object({
    type: z.string(),
    url: z.string().url().optional(),
  }),
  /** Timestamps */
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  /** Reviewer override file path (relative) */
  overrideFile: z.string().optional(),
});
export type LanguagePackMetadata = z.infer<typeof LanguagePackMetadata>;

/**
 * Reviewer override entry
 */
export const ReviewerOverride = z.object({
  /** Verse reference */
  verseRef: z.string(),
  /** Layer being overridden */
  layer: z.string(),
  /** Span ID being overridden (optional, for specific spans) */
  spanId: z.string().optional(),
  /** Original AI-generated text */
  originalText: z.string(),
  /** Reviewer-corrected text */
  correctedText: z.string(),
  /** Reason for correction */
  reason: z.string(),
  /** Reviewer ID */
  reviewerId: z.string(),
  /** Override timestamp */
  timestamp: z.string().datetime(),
  /** Whether this is approved */
  approved: z.boolean(),
});
export type ReviewerOverride = z.infer<typeof ReviewerOverride>;

/**
 * Collection of overrides for a language
 */
export const LanguageOverrides = z.object({
  /** Language code */
  languageCode: z.string(),
  /** All overrides */
  overrides: z.array(ReviewerOverride),
  /** Override count */
  count: z.number().int().nonnegative(),
  /** Last updated */
  lastUpdated: z.string().datetime(),
});
export type LanguageOverrides = z.infer<typeof LanguageOverrides>;
