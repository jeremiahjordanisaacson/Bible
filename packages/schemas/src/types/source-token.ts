import { z } from 'zod';

/**
 * Source language codes
 */
export const SourceLanguage = z.enum(['hebrew', 'aramaic', 'greek']);
export type SourceLanguage = z.infer<typeof SourceLanguage>;

/**
 * Part of speech categories
 */
export const PartOfSpeech = z.enum([
  'noun',
  'verb',
  'adjective',
  'adverb',
  'pronoun',
  'preposition',
  'conjunction',
  'article',
  'particle',
  'interjection',
  'numeral',
  'proper-noun',
  'proper_noun',
  'relative_particle',
  'interrogative',
  'unknown'
]);
export type PartOfSpeech = z.infer<typeof PartOfSpeech>;

/**
 * Morphology data for a token
 * Follows standard biblical morphology codes
 */
export const Morphology = z.object({
  /** Part of speech */
  pos: PartOfSpeech,
  /** Person (1st, 2nd, 3rd) */
  person: z.enum(['1', '2', '3']).optional(),
  /** Gender */
  gender: z.enum(['masculine', 'feminine', 'neuter', 'common']).optional(),
  /** Number */
  number: z.enum(['singular', 'dual', 'plural']).optional(),
  /** Case (for Greek) */
  case: z.enum(['nominative', 'genitive', 'dative', 'accusative', 'vocative']).optional(),
  /** Tense */
  tense: z.enum(['perfect', 'imperfect', 'aorist', 'present', 'future', 'pluperfect', 'participle', 'imperative', 'infinitive', 'jussive', 'cohortative']).optional(),
  /** Voice */
  voice: z.enum(['active', 'middle', 'passive', 'middle-passive', 'deponent']).optional(),
  /** Mood */
  mood: z.enum(['indicative', 'imperative', 'subjunctive', 'optative', 'infinitive', 'participle', 'cohortative']).optional(),
  /** State (for Hebrew) */
  state: z.enum(['absolute', 'construct', 'determined']).optional(),
  /** Stem (for Hebrew verbs) */
  stem: z.enum(['qal', 'niphal', 'piel', 'pual', 'hiphil', 'hophal', 'hithpael', 'qal passive']).optional(),
  /** Pronominal suffix (common in Hebrew) */
  suffix: z.object({
    person: z.enum(['1', '2', '3']).optional(),
    gender: z.enum(['masculine', 'feminine', 'neuter', 'common']).optional(),
    number: z.enum(['singular', 'dual', 'plural']).optional(),
  }).optional(),
  /** Morphological type annotation (e.g., demonstrative, relative) */
  type: z.string().optional(),
  /** Raw morphology code from source data */
  rawCode: z.string().optional(),
});
export type Morphology = z.infer<typeof Morphology>;

/**
 * Lexicon reference
 */
export const LexiconRef = z.object({
  /** Lexicon identifier (e.g., 'strongs', 'bdb', 'bdag', 'lsj') */
  lexicon: z.string(),
  /** Entry ID in the lexicon */
  entryId: z.string(),
  /** URL if available */
  url: z.string().url().optional(),
});
export type LexiconRef = z.infer<typeof LexiconRef>;

/**
 * Source token - represents a single word/morpheme in the original language
 */
export const SourceToken = z.object({
  /** Unique identifier: {book}.{chapter}.{verse}.{position} */
  id: z.string(),
  /** Source language */
  language: SourceLanguage,
  /** Original script text (Hebrew/Greek/Aramaic characters) */
  text: z.string(),
  /** Romanized transliteration */
  transliteration: z.string(),
  /** Dictionary form */
  lemma: z.string(),
  /** Transliteration of lemma */
  lemmaTranslit: z.string().optional(),
  /** Very literal gloss (1-3 words) */
  gloss: z.string(),
  /** Extended gloss with more context */
  glossExtended: z.string().optional(),
  /** Morphological analysis */
  morphology: Morphology.optional(),
  /** References to lexicon entries */
  lexiconRefs: z.array(LexiconRef).optional(),
  /** Strong's number if applicable */
  strongs: z.string().optional(),
  /** Position in verse (0-indexed) */
  position: z.number().int().nonnegative(),
  /** Whether this is part of a compound or construct chain */
  isCompound: z.boolean().optional(),
  /** IDs of related tokens in a compound */
  compoundWith: z.array(z.string()).optional(),
});
export type SourceToken = z.infer<typeof SourceToken>;

/**
 * Collection of source tokens for a verse
 */
export const VerseTokens = z.object({
  /** Verse reference: {book}.{chapter}.{verse} */
  verseRef: z.string(),
  /** Ordered array of tokens */
  tokens: z.array(SourceToken),
  /** Source language for the verse */
  language: SourceLanguage,
  /** Total token count */
  tokenCount: z.number().int().positive(),
});
export type VerseTokens = z.infer<typeof VerseTokens>;
