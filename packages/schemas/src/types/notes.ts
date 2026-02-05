import { z } from 'zod';
import { ConfidenceLevel } from './translation';

/**
 * Note categories
 */
export const NoteCategory = z.enum([
  'translation-choice',   // Why a particular translation was chosen
  'alternative',          // Alternative readings/translations
  'grammatical',          // Grammar explanation
  'lexical',              // Word meaning explanation
  'cultural',             // Cultural/historical context
  'theological',          // Theological significance
  'textual',              // Textual criticism note
  'interpretive',         // Interpretive decision
  'cross-reference',      // Related passages
  'idiom',                // Idiomatic expression explanation
  'uncertain',            // Flagging uncertainty
  'historical',           // Historical context and background
  'structural',           // Literary/narrative structure
  'chronological',        // Timeline and dating
  'geographical',         // Geographic context
  'narrative',            // Narrative analysis
  'intertextual',         // Connections between texts
]);
export type NoteCategory = z.infer<typeof NoteCategory>;

/**
 * Reference to external sources
 */
export const SourceReference = z.object({
  /** Reference type */
  type: z.enum(['lexicon', 'grammar', 'commentary', 'article', 'bible-verse']),
  /** Source identifier */
  sourceId: z.string(),
  /** Specific location/entry */
  location: z.string().optional(),
  /** Display citation */
  citation: z.string(),
  /** URL if available */
  url: z.string().url().optional(),
});
export type SourceReference = z.infer<typeof SourceReference>;

/**
 * A study note for a verse or span
 */
export const StudyNote = z.object({
  /** Unique note ID */
  id: z.string(),
  /** Verse reference */
  verseRef: z.string(),
  /** Verse ID (alternate key) */
  verseId: z.string().optional(),
  /** Specific span IDs this note relates to (optional) */
  spanIds: z.array(z.string()).optional(),
  /** Source token IDs this note relates to (optional) */
  sourceTokenIds: z.array(z.string()).optional(),
  /** Note category */
  category: NoteCategory,
  /** Note title/summary */
  title: z.string(),
  /** Full note content (markdown supported) */
  content: z.string(),
  /** Confidence in the note's claims */
  confidence: ConfidenceLevel,
  /** References to sources */
  references: z.array(SourceReference).optional(),
  /** Tags for filtering */
  tags: z.array(z.string()).optional(),
  /** Whether this note discusses a controversial/disputed topic */
  isContested: z.boolean().optional(),
  /** Multiple scholarly positions if contested */
  positions: z.array(z.object({
    name: z.string(),
    description: z.string(),
    proponents: z.array(z.string()).optional(),
  })).optional(),
  /** Whether human-authored or AI-generated */
  authorType: z.enum(['human', 'ai', 'hybrid']),
  /** Author ID if human */
  authorId: z.string().optional(),
  /** Generation metadata */
  metadata: z.object({
    pipelineVersion: z.string().optional(),
    generatedAt: z.string().datetime(),
    lastModified: z.string().datetime().optional(),
    engineId: z.string().optional(),
  }),
});
export type StudyNote = z.infer<typeof StudyNote>;

/**
 * Collection of notes for a verse
 */
export const VerseNotes = z.object({
  /** Verse reference */
  verseRef: z.string(),
  /** All notes for this verse */
  notes: z.array(StudyNote),
  /** Note count by category */
  countByCategory: z.record(z.number().int().nonnegative()),
  /** Whether any notes flag major interpretive issues */
  hasInterpretiveIssues: z.boolean(),
});
export type VerseNotes = z.infer<typeof VerseNotes>;
