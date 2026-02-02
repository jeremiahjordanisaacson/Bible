import { z } from 'zod';
import { ConfidenceLevel } from './translation';

/**
 * Alignment type describing the relationship
 */
export const AlignmentType = z.enum([
  'direct',        // Direct 1:1 translation
  'phrase',        // Multiple source words → single target phrase
  'expansion',     // Single source word → multiple target words
  'idiom',         // Idiomatic rendering, not word-for-word
  'implicit',      // Target words implied but not in source
  'reorder',       // Words reordered for target language grammar
]);
export type AlignmentType = z.infer<typeof AlignmentType>;

/**
 * Single alignment mapping
 */
export const AlignmentMapping = z.object({
  /** Unique alignment ID */
  id: z.string(),
  /** Source token IDs (can be multiple for phrases) */
  sourceTokenIds: z.array(z.string()),
  /** Target span ID */
  targetSpanId: z.string(),
  /** Type of alignment */
  type: AlignmentType,
  /** Confidence in the alignment */
  confidence: ConfidenceLevel,
  /** Notes explaining the alignment choice */
  note: z.string().optional(),
});
export type AlignmentMapping = z.infer<typeof AlignmentMapping>;

/**
 * Complete alignment data for a verse
 */
export const VerseAlignment = z.object({
  /** Verse reference */
  verseRef: z.string(),
  /** Translation layer this alignment is for */
  layerType: z.string(),
  /** Target language */
  targetLanguage: z.string(),
  /** All alignments for this verse */
  alignments: z.array(AlignmentMapping),
  /** Unaligned source tokens (should be empty ideally) */
  unalignedSourceTokens: z.array(z.string()),
  /** Unaligned target spans (implicit/added words) */
  unalignedTargetSpans: z.array(z.string()),
  /** Overall alignment quality score (0-1) */
  qualityScore: z.number().min(0).max(1),
  /** Metadata */
  metadata: z.object({
    pipelineVersion: z.string(),
    generatedAt: z.string().datetime(),
    algorithmId: z.string(),
  }),
});
export type VerseAlignment = z.infer<typeof VerseAlignment>;

/**
 * Alignment statistics for a book or corpus
 */
export const AlignmentStats = z.object({
  /** Total alignments */
  totalAlignments: z.number().int().nonnegative(),
  /** Breakdown by type */
  byType: z.record(z.number().int().nonnegative()),
  /** Breakdown by confidence */
  byConfidence: z.record(z.number().int().nonnegative()),
  /** Average quality score */
  avgQualityScore: z.number().min(0).max(1),
  /** Coverage percentage (tokens aligned) */
  coveragePercent: z.number().min(0).max(100),
});
export type AlignmentStats = z.infer<typeof AlignmentStats>;
