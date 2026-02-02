import { z } from 'zod';
import { SourceToken } from './source-token';

/**
 * Testament identifier
 */
export const Testament = z.enum(['OT', 'NT']);
export type Testament = z.infer<typeof Testament>;

/**
 * Standard book codes (OSIS format)
 */
export const BookCode = z.string().regex(/^[A-Z][a-zA-Z0-9]{2,}$/);
export type BookCode = z.infer<typeof BookCode>;

/**
 * Verse reference in standard format
 */
export const VerseRef = z.object({
  /** Book code (OSIS format, e.g., 'Gen', 'Matt') */
  book: BookCode,
  /** Chapter number */
  chapter: z.number().int().positive(),
  /** Verse number */
  verse: z.number().int().positive(),
  /** Optional sub-verse indicator for split verses */
  subVerse: z.string().optional(),
});
export type VerseRef = z.infer<typeof VerseRef>;

/**
 * Parse a verse reference string into components
 */
export function parseVerseRef(ref: string): VerseRef | null {
  const match = ref.match(/^([A-Z][a-zA-Z0-9]+)\.(\d+)\.(\d+)([a-z])?$/);
  if (!match) return null;

  return {
    book: match[1],
    chapter: parseInt(match[2], 10),
    verse: parseInt(match[3], 10),
    subVerse: match[4] || undefined,
  };
}

/**
 * Format a verse reference to string
 */
export function formatVerseRef(ref: VerseRef): string {
  return `${ref.book}.${ref.chapter}.${ref.verse}${ref.subVerse || ''}`;
}

/**
 * A segment within a verse that corresponds to source tokens
 */
export const VerseSegment = z.object({
  /** Unique segment ID within the verse */
  id: z.string(),
  /** Position in the verse (0-indexed) */
  position: z.number().int().nonnegative(),
  /** Source token IDs this segment maps to */
  sourceTokenIds: z.array(z.string()),
  /** Whether this is a major phrase boundary */
  isPhraseBreak: z.boolean().optional(),
  /** Clause type if known */
  clauseType: z.enum(['main', 'subordinate', 'relative', 'conditional', 'purpose', 'result']).optional(),
});
export type VerseSegment = z.infer<typeof VerseSegment>;

/**
 * Complete verse object with all associated data
 */
export const Verse = z.object({
  /** Verse reference in standard format */
  ref: z.string(),
  /** Parsed reference components */
  refParsed: VerseRef,
  /** Testament */
  testament: Testament,
  /** Source tokens in original language */
  sourceTokens: z.array(SourceToken),
  /** Logical segments for alignment */
  segments: z.array(VerseSegment),
  /** Raw source text concatenated */
  sourceText: z.string(),
  /** Whether there are textual variants for this verse */
  hasVariants: z.boolean(),
  /** Word count in source */
  wordCount: z.number().int().nonnegative(),
  /** Pipeline metadata */
  metadata: z.object({
    /** Pipeline version that generated this */
    pipelineVersion: z.string(),
    /** Timestamp of generation */
    generatedAt: z.string().datetime(),
    /** Source dataset identifiers */
    sourceDatasets: z.array(z.string()),
  }),
});
export type Verse = z.infer<typeof Verse>;
