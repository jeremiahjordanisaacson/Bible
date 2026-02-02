import { z } from 'zod';

/**
 * Pipeline execution metadata
 */
export const PipelineMetadata = z.object({
  /** Pipeline version (git hash or semver) */
  version: z.string(),
  /** Pipeline stage that generated this output */
  stage: z.string(),
  /** Execution timestamp */
  timestamp: z.string().datetime(),
  /** Git commit hash if available */
  gitCommit: z.string().optional(),
  /** Input file hashes for reproducibility */
  inputHashes: z.record(z.string()).optional(),
  /** Random seed if applicable */
  seed: z.number().int().optional(),
  /** Engine/model identifiers */
  engine: z.object({
    id: z.string(),
    version: z.string(),
    model: z.string().optional(),
    parameters: z.record(z.unknown()).optional(),
  }).optional(),
  /** Processing duration in milliseconds */
  durationMs: z.number().int().nonnegative().optional(),
  /** Warnings generated */
  warnings: z.array(z.string()).optional(),
});
export type PipelineMetadata = z.infer<typeof PipelineMetadata>;

/**
 * Source dataset information
 */
export const SourceDataset = z.object({
  /** Unique identifier */
  id: z.string(),
  /** Human-readable name */
  name: z.string(),
  /** Description */
  description: z.string(),
  /** Version or edition */
  version: z.string(),
  /** License information */
  license: z.object({
    /** License name/type */
    name: z.string(),
    /** SPDX identifier if applicable */
    spdx: z.string().optional(),
    /** License URL */
    url: z.string().url().optional(),
    /** Brief summary of permissions */
    summary: z.string(),
  }),
  /** Attribution requirements */
  attribution: z.string(),
  /** Source URL */
  sourceUrl: z.string().url().optional(),
  /** Download/access date */
  accessDate: z.string(),
  /** Content type */
  contentType: z.enum([
    'source-text',      // Hebrew/Greek/Aramaic text
    'morphology',       // Morphological data
    'lexicon',          // Lexicon/dictionary
    'translation',      // Existing translation for reference
    'alignment',        // Pre-existing alignment data
  ]),
  /** Languages included */
  languages: z.array(z.string()),
  /** Books covered */
  books: z.array(z.string()),
});
export type SourceDataset = z.infer<typeof SourceDataset>;

/**
 * Audit trail entry
 */
export const AuditEntry = z.object({
  /** Unique ID */
  id: z.string(),
  /** Timestamp */
  timestamp: z.string().datetime(),
  /** Action type */
  action: z.enum([
    'create',
    'update',
    'delete',
    'review',
    'approve',
    'reject',
    'merge',
  ]),
  /** What was affected */
  target: z.object({
    type: z.enum(['verse', 'note', 'translation', 'alignment', 'variant']),
    ref: z.string(),
    field: z.string().optional(),
  }),
  /** Who made the change */
  actor: z.object({
    type: z.enum(['human', 'pipeline', 'system']),
    id: z.string(),
    name: z.string().optional(),
  }),
  /** Previous value (if update) */
  previousValue: z.unknown().optional(),
  /** New value */
  newValue: z.unknown().optional(),
  /** Reason for change */
  reason: z.string().optional(),
  /** Git commit if applicable */
  gitCommit: z.string().optional(),
});
export type AuditEntry = z.infer<typeof AuditEntry>;

/**
 * Change log for a book
 */
export const BookChangeLog = z.object({
  /** Book code */
  bookCode: z.string(),
  /** All audit entries */
  entries: z.array(AuditEntry),
  /** Last updated */
  lastUpdated: z.string().datetime(),
});
export type BookChangeLog = z.infer<typeof BookChangeLog>;
