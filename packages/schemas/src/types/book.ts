import { z } from 'zod';
import { Testament } from './verse';
import { SourceLanguage } from './source-token';

/**
 * Book metadata
 */
export const BookMetadata = z.object({
  /** OSIS book code */
  code: z.string(),
  /** Full name */
  name: z.string(),
  /** Short name/abbreviation */
  shortName: z.string(),
  /** Testament */
  testament: Testament,
  /** Primary source language */
  primaryLanguage: SourceLanguage,
  /** Order in canon (Protestant ordering) */
  canonOrder: z.number().int().positive(),
  /** Number of chapters */
  chapterCount: z.number().int().positive(),
  /** Total verse count */
  verseCount: z.number().int().positive(),
  /** Category/genre */
  category: z.enum([
    'law',
    'history',
    'poetry',
    'prophecy',
    'gospel',
    'acts',
    'epistle',
    'apocalyptic',
  ]),
  /** Traditional author attribution */
  traditionalAuthor: z.string().optional(),
  /** Estimated composition period */
  compositionPeriod: z.string().optional(),
});
export type BookMetadata = z.infer<typeof BookMetadata>;

/**
 * Chapter summary
 */
export const ChapterSummary = z.object({
  /** Chapter number */
  number: z.number().int().positive(),
  /** Verse count */
  verseCount: z.number().int().positive(),
  /** Word count in source */
  sourceWordCount: z.number().int().positive(),
  /** Whether this chapter has any significant variants */
  hasVariants: z.boolean(),
  /** Brief theme/content summary */
  summary: z.string().optional(),
});
export type ChapterSummary = z.infer<typeof ChapterSummary>;

/**
 * Complete book data manifest
 */
export const BookManifest = z.object({
  /** Book metadata */
  metadata: BookMetadata,
  /** Chapter information */
  chapters: z.array(ChapterSummary),
  /** Source datasets used */
  sourceDatasets: z.array(z.string()),
  /** Available target languages */
  targetLanguages: z.array(z.object({
    code: z.string(),
    status: z.enum(['draft', 'review', 'beta', 'stable']),
  })),
  /** Pipeline metadata */
  pipelineMetadata: z.object({
    version: z.string(),
    generatedAt: z.string().datetime(),
  }),
  /** File paths for data files (relative to book directory) */
  files: z.object({
    sourceTokens: z.string(),
    verses: z.string(),
    translations: z.record(z.string()),
    alignments: z.record(z.string()),
    notes: z.string(),
    variants: z.string(),
    changelog: z.string(),
  }),
});
export type BookManifest = z.infer<typeof BookManifest>;

/**
 * Canon configuration (defines which books are included)
 */
export const CanonConfig = z.object({
  /** Canon name */
  name: z.string(),
  /** Description */
  description: z.string(),
  /** Books in order */
  books: z.array(z.object({
    code: z.string(),
    testament: Testament,
    order: z.number().int().positive(),
  })),
  /** Total book count */
  bookCount: z.number().int().positive(),
});
export type CanonConfig = z.infer<typeof CanonConfig>;

/**
 * Standard book codes and names
 */
export const BOOK_INFO: Record<string, { name: string; shortName: string; testament: 'OT' | 'NT'; chapters: number }> = {
  // Old Testament
  Gen: { name: 'Genesis', shortName: 'Gen', testament: 'OT', chapters: 50 },
  Exod: { name: 'Exodus', shortName: 'Exod', testament: 'OT', chapters: 40 },
  Lev: { name: 'Leviticus', shortName: 'Lev', testament: 'OT', chapters: 27 },
  Num: { name: 'Numbers', shortName: 'Num', testament: 'OT', chapters: 36 },
  Deut: { name: 'Deuteronomy', shortName: 'Deut', testament: 'OT', chapters: 34 },
  Josh: { name: 'Joshua', shortName: 'Josh', testament: 'OT', chapters: 24 },
  Judg: { name: 'Judges', shortName: 'Judg', testament: 'OT', chapters: 21 },
  Ruth: { name: 'Ruth', shortName: 'Ruth', testament: 'OT', chapters: 4 },
  '1Sam': { name: '1 Samuel', shortName: '1Sam', testament: 'OT', chapters: 31 },
  '2Sam': { name: '2 Samuel', shortName: '2Sam', testament: 'OT', chapters: 24 },
  '1Kgs': { name: '1 Kings', shortName: '1Kgs', testament: 'OT', chapters: 22 },
  '2Kgs': { name: '2 Kings', shortName: '2Kgs', testament: 'OT', chapters: 25 },
  '1Chr': { name: '1 Chronicles', shortName: '1Chr', testament: 'OT', chapters: 29 },
  '2Chr': { name: '2 Chronicles', shortName: '2Chr', testament: 'OT', chapters: 36 },
  Ezra: { name: 'Ezra', shortName: 'Ezra', testament: 'OT', chapters: 10 },
  Neh: { name: 'Nehemiah', shortName: 'Neh', testament: 'OT', chapters: 13 },
  Esth: { name: 'Esther', shortName: 'Esth', testament: 'OT', chapters: 10 },
  Job: { name: 'Job', shortName: 'Job', testament: 'OT', chapters: 42 },
  Ps: { name: 'Psalms', shortName: 'Ps', testament: 'OT', chapters: 150 },
  Prov: { name: 'Proverbs', shortName: 'Prov', testament: 'OT', chapters: 31 },
  Eccl: { name: 'Ecclesiastes', shortName: 'Eccl', testament: 'OT', chapters: 12 },
  Song: { name: 'Song of Solomon', shortName: 'Song', testament: 'OT', chapters: 8 },
  Isa: { name: 'Isaiah', shortName: 'Isa', testament: 'OT', chapters: 66 },
  Jer: { name: 'Jeremiah', shortName: 'Jer', testament: 'OT', chapters: 52 },
  Lam: { name: 'Lamentations', shortName: 'Lam', testament: 'OT', chapters: 5 },
  Ezek: { name: 'Ezekiel', shortName: 'Ezek', testament: 'OT', chapters: 48 },
  Dan: { name: 'Daniel', shortName: 'Dan', testament: 'OT', chapters: 12 },
  Hos: { name: 'Hosea', shortName: 'Hos', testament: 'OT', chapters: 14 },
  Joel: { name: 'Joel', shortName: 'Joel', testament: 'OT', chapters: 3 },
  Amos: { name: 'Amos', shortName: 'Amos', testament: 'OT', chapters: 9 },
  Obad: { name: 'Obadiah', shortName: 'Obad', testament: 'OT', chapters: 1 },
  Jonah: { name: 'Jonah', shortName: 'Jonah', testament: 'OT', chapters: 4 },
  Mic: { name: 'Micah', shortName: 'Mic', testament: 'OT', chapters: 7 },
  Nah: { name: 'Nahum', shortName: 'Nah', testament: 'OT', chapters: 3 },
  Hab: { name: 'Habakkuk', shortName: 'Hab', testament: 'OT', chapters: 3 },
  Zeph: { name: 'Zephaniah', shortName: 'Zeph', testament: 'OT', chapters: 3 },
  Hag: { name: 'Haggai', shortName: 'Hag', testament: 'OT', chapters: 2 },
  Zech: { name: 'Zechariah', shortName: 'Zech', testament: 'OT', chapters: 14 },
  Mal: { name: 'Malachi', shortName: 'Mal', testament: 'OT', chapters: 4 },
  // New Testament
  Matt: { name: 'Matthew', shortName: 'Matt', testament: 'NT', chapters: 28 },
  Mark: { name: 'Mark', shortName: 'Mark', testament: 'NT', chapters: 16 },
  Luke: { name: 'Luke', shortName: 'Luke', testament: 'NT', chapters: 24 },
  John: { name: 'John', shortName: 'John', testament: 'NT', chapters: 21 },
  Acts: { name: 'Acts', shortName: 'Acts', testament: 'NT', chapters: 28 },
  Rom: { name: 'Romans', shortName: 'Rom', testament: 'NT', chapters: 16 },
  '1Cor': { name: '1 Corinthians', shortName: '1Cor', testament: 'NT', chapters: 16 },
  '2Cor': { name: '2 Corinthians', shortName: '2Cor', testament: 'NT', chapters: 13 },
  Gal: { name: 'Galatians', shortName: 'Gal', testament: 'NT', chapters: 6 },
  Eph: { name: 'Ephesians', shortName: 'Eph', testament: 'NT', chapters: 6 },
  Phil: { name: 'Philippians', shortName: 'Phil', testament: 'NT', chapters: 4 },
  Col: { name: 'Colossians', shortName: 'Col', testament: 'NT', chapters: 4 },
  '1Thess': { name: '1 Thessalonians', shortName: '1Thess', testament: 'NT', chapters: 5 },
  '2Thess': { name: '2 Thessalonians', shortName: '2Thess', testament: 'NT', chapters: 3 },
  '1Tim': { name: '1 Timothy', shortName: '1Tim', testament: 'NT', chapters: 6 },
  '2Tim': { name: '2 Timothy', shortName: '2Tim', testament: 'NT', chapters: 4 },
  Titus: { name: 'Titus', shortName: 'Titus', testament: 'NT', chapters: 3 },
  Phlm: { name: 'Philemon', shortName: 'Phlm', testament: 'NT', chapters: 1 },
  Heb: { name: 'Hebrews', shortName: 'Heb', testament: 'NT', chapters: 13 },
  Jas: { name: 'James', shortName: 'Jas', testament: 'NT', chapters: 5 },
  '1Pet': { name: '1 Peter', shortName: '1Pet', testament: 'NT', chapters: 5 },
  '2Pet': { name: '2 Peter', shortName: '2Pet', testament: 'NT', chapters: 3 },
  '1John': { name: '1 John', shortName: '1John', testament: 'NT', chapters: 5 },
  '2John': { name: '2 John', shortName: '2John', testament: 'NT', chapters: 1 },
  '3John': { name: '3 John', shortName: '3John', testament: 'NT', chapters: 1 },
  Jude: { name: 'Jude', shortName: 'Jude', testament: 'NT', chapters: 1 },
  Rev: { name: 'Revelation', shortName: 'Rev', testament: 'NT', chapters: 22 },
};
