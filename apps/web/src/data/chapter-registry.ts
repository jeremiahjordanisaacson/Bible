/**
 * Chapter Registry — central lookup for all chapters with rich morphological data.
 *
 * Adding a new chapter:
 *   1. Create the data file(s) in the appropriate book folder.
 *   2. Create or update the barrel file (e.g. sample-genesis-9.ts).
 *   3. Import the barrel here and call `registerChapter(...)`.
 *
 * chapter-content.tsx reads from this registry instead of hard-coded if/else.
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type VerseData = any; // matches the shape used by VerseDisplay / CompareView

const registry = new Map<string, VerseData[]>();

/** Register a chapter's rich verse data. Key format: "Book.Chapter" e.g. "Gen.1" */
export function registerChapter(key: string, verses: VerseData[]) {
  registry.set(key, verses);
}

/** Look up a single verse by book, chapter, and 1-based verse number. */
export function getRichVerseData(
  book: string,
  chapter: number,
  verseNum: number,
): VerseData | null {
  const verses = registry.get(`${book}.${chapter}`);
  if (!verses) return null;
  const verse = verses.find((_: VerseData, i: number) => i + 1 === verseNum);
  return verse || null;
}

/** Does this chapter have any rich data at all? */
export function hasRichChapterData(book: string, chapter: number): boolean {
  return registry.has(`${book}.${chapter}`);
}

/** Which 1-based verse numbers have rich data for this chapter? */
export function getRichVerseNumbers(book: string, chapter: number): number[] {
  const verses = registry.get(`${book}.${chapter}`);
  if (!verses) return [];
  return verses.map((_: VerseData, i: number) => i + 1);
}

/** Return all registered chapter keys (useful for search indexing). */
export function getRegisteredChapters(): string[] {
  return Array.from(registry.keys());
}

/** Return the full verse array for a chapter. */
export function getChapterVerses(book: string, chapter: number): VerseData[] {
  return registry.get(`${book}.${chapter}`) || [];
}

// ──────────────────────────────────────────────
// Register all existing chapters
// ──────────────────────────────────────────────

import genesisChapter1Verses from './sample-genesis';
import genesisChapter2Verses from './sample-genesis-2';
import genesisChapter3Verses from './sample-genesis-3';
import genesisChapter4Verses from './sample-genesis-4';
import genesisChapter5Verses from './sample-genesis-5';
import genesisChapter6Verses from './sample-genesis-6';
import genesisChapter7Verses from './sample-genesis-7';
import genesisChapter8Verses from './sample-genesis-8';
import genesisChapter9Verses from './sample-genesis-9';
import genesisChapter10Verses from './sample-genesis-10';
import genesisChapter11Verses from './sample-genesis-11';
import genesisChapter12Verses from './sample-genesis-12';
import genesisChapter13Verses from './sample-genesis-13';
import genesisChapter14Verses from './sample-genesis-14';
import genesisChapter15Verses from './sample-genesis-15';
import genesisChapter16Verses from './sample-genesis-16';
import genesisChapter17Verses from './sample-genesis-17';
import genesisChapter18Verses from './sample-genesis-18';
import genesisChapter19Verses from './sample-genesis-19';
import genesisChapter20Verses from './sample-genesis-20';
import genesisChapter21Verses from './sample-genesis-21';
import genesisChapter22Verses from './sample-genesis-22';
import genesisChapter23Verses from './sample-genesis-23';
import genesisChapter24Verses from './sample-genesis-24';
import genesisChapter25Verses from './sample-genesis-25';
import genesisChapter26Verses from './sample-genesis-26';
import genesisChapter27Verses from './sample-genesis-27';
import genesisChapter28Verses from './sample-genesis-28';
import genesisChapter29Verses from './sample-genesis-29';
import genesisChapter32Verses from './sample-genesis-32';
import genesisChapter35Verses from './sample-genesis-35';
import genesisChapter37Verses from './sample-genesis-37';
import genesisChapter39Verses from './sample-genesis-39';
import genesisChapter41Verses from './sample-genesis-41';
import genesisChapter42Verses from './sample-genesis-42';
import genesisChapter45Verses from './sample-genesis-45';
import genesisChapter49Verses from './sample-genesis-49';
import genesisChapter50Verses from './sample-genesis-50';
import exodusChapter1Verses from './sample-exodus-1';
import exodusChapter3Verses from './sample-exodus-3';
import exodusChapter12Verses from './sample-exodus-12';
import exodusChapter14Verses from './sample-exodus-14';
import exodusChapter15Verses from './sample-exodus-15';
import exodusChapter20Verses from './sample-exodus-20';
import exodusChapter33Verses from './sample-exodus-33';
import exodusChapter34Verses from './sample-exodus-34';
import leviticusChapter16Verses from './sample-leviticus-16';
import leviticusChapter19Verses from './sample-leviticus-19';
import numbersChapter6Verses from './sample-numbers-6';
import numbersChapter14Verses from './sample-numbers-14';
import deuteronomyChapter6Verses from './sample-deuteronomy-6';
import deuteronomyChapter18Verses from './sample-deuteronomy-18';
import deuteronomyChapter30Verses from './sample-deuteronomy-30';
import deuteronomyChapter34Verses from './sample-deuteronomy-34';
import matthewChapter1Verses from './sample-matthew-1';
import matthewChapter5Verses from './sample-matthew-5';
import matthewChapter6Verses from './sample-matthew-6';
import matthewChapter16Verses from './sample-matthew-16';
import matthewChapter28Verses from './sample-matthew-28';
import markChapter1Verses from './sample-mark-1';
import markChapter10Verses from './sample-mark-10';
import markChapter15Verses from './sample-mark-15';
import markChapter16Verses from './sample-mark-16';
import lukeChapter1Verses from './sample-luke-1';
import lukeChapter2Verses from './sample-luke-2';
import lukeChapter10Verses from './sample-luke-10';
import lukeChapter15Verses from './sample-luke-15';
import lukeChapter24Verses from './sample-luke-24';
import johnChapter1Verses from './sample-john';
import johnChapter3Verses from './sample-john-3';
import johnChapter4Verses from './sample-john-4';
import johnChapter6Verses from './sample-john-6';
import johnChapter10Verses from './sample-john-10';
import johnChapter14Verses from './sample-john-14';
import johnChapter17Verses from './sample-john-17';
import johnChapter19Verses from './sample-john-19';
import johnChapter20Verses from './sample-john-20';
import actsChapter2Verses from './sample-acts-2';
import actsChapter9Verses from './sample-acts-9';
import actsChapter17Verses from './sample-acts-17';
import romansChapter1Verses from './sample-romans-1';
import romansChapter8Verses from './sample-romans-8';
import corinthians1Chapter13Verses from './sample-1corinthians-13';
import corinthians1Chapter15Verses from './sample-1corinthians-15';
import galatiansChapter5Verses from './sample-galatians-5';
import ephesiansChapter2Verses from './sample-ephesians-2';
import philippiansChapter2Verses from './sample-philippians-2';
import colossiansChapter1Verses from './sample-colossians-1';
import hebrewsChapter11Verses from './sample-hebrews-11';
import jamesChapter1Verses from './sample-james-1';
import peter1Chapter1Verses from './sample-1peter-1';
import john1Chapter4Verses from './sample-1john-4';
import judeChapter1Verses from './sample-jude-1';
import revelationChapter1Verses from './sample-revelation-1';
import revelationChapter4Verses from './sample-revelation-4';
import revelationChapter21Verses from './sample-revelation-21';
import revelationChapter22Verses from './sample-revelation-22';

registerChapter('Gen.1', genesisChapter1Verses);
registerChapter('Gen.2', genesisChapter2Verses);
registerChapter('Gen.3', genesisChapter3Verses);
registerChapter('Gen.4', genesisChapter4Verses);
registerChapter('Gen.5', genesisChapter5Verses);
registerChapter('Gen.6', genesisChapter6Verses);
registerChapter('Gen.7', genesisChapter7Verses);
registerChapter('Gen.8', genesisChapter8Verses);
registerChapter('Gen.9', genesisChapter9Verses);
registerChapter('Gen.10', genesisChapter10Verses);
registerChapter('Gen.11', genesisChapter11Verses);
registerChapter('Gen.12', genesisChapter12Verses);
registerChapter('Gen.13', genesisChapter13Verses);
registerChapter('Gen.14', genesisChapter14Verses);
registerChapter('Gen.15', genesisChapter15Verses);
registerChapter('Gen.16', genesisChapter16Verses);
registerChapter('Gen.17', genesisChapter17Verses);
registerChapter('Gen.18', genesisChapter18Verses);
registerChapter('Gen.19', genesisChapter19Verses);
registerChapter('Gen.20', genesisChapter20Verses);
registerChapter('Gen.21', genesisChapter21Verses);
registerChapter('Gen.22', genesisChapter22Verses);
registerChapter('Gen.23', genesisChapter23Verses);
registerChapter('Gen.24', genesisChapter24Verses);
registerChapter('Gen.25', genesisChapter25Verses);
registerChapter('Gen.26', genesisChapter26Verses);
registerChapter('Gen.27', genesisChapter27Verses);
registerChapter('Gen.28', genesisChapter28Verses);
registerChapter('Gen.29', genesisChapter29Verses);
registerChapter('Gen.32', genesisChapter32Verses);
registerChapter('Gen.35', genesisChapter35Verses);
registerChapter('Gen.37', genesisChapter37Verses);
registerChapter('Gen.39', genesisChapter39Verses);
registerChapter('Gen.41', genesisChapter41Verses);
registerChapter('Gen.42', genesisChapter42Verses);
registerChapter('Gen.45', genesisChapter45Verses);
registerChapter('Gen.49', genesisChapter49Verses);
registerChapter('Gen.50', genesisChapter50Verses);
registerChapter('Exod.1', exodusChapter1Verses);
registerChapter('Exod.3', exodusChapter3Verses);
registerChapter('Exod.12', exodusChapter12Verses);
registerChapter('Exod.14', exodusChapter14Verses);
registerChapter('Exod.15', exodusChapter15Verses);
registerChapter('Exod.20', exodusChapter20Verses);
registerChapter('Exod.33', exodusChapter33Verses);
registerChapter('Exod.34', exodusChapter34Verses);
registerChapter('Lev.16', leviticusChapter16Verses);
registerChapter('Lev.19', leviticusChapter19Verses);
registerChapter('Num.6', numbersChapter6Verses);
registerChapter('Num.14', numbersChapter14Verses);
registerChapter('Deut.6', deuteronomyChapter6Verses);
registerChapter('Deut.18', deuteronomyChapter18Verses);
registerChapter('Deut.30', deuteronomyChapter30Verses);
registerChapter('Deut.34', deuteronomyChapter34Verses);
registerChapter('Matt.1', matthewChapter1Verses);
registerChapter('Matt.5', matthewChapter5Verses);
registerChapter('Matt.6', matthewChapter6Verses);
registerChapter('Matt.16', matthewChapter16Verses);
registerChapter('Matt.28', matthewChapter28Verses);
registerChapter('Mark.1', markChapter1Verses);
registerChapter('Mark.10', markChapter10Verses);
registerChapter('Mark.15', markChapter15Verses);
registerChapter('Mark.16', markChapter16Verses);
registerChapter('Luke.1', lukeChapter1Verses);
registerChapter('Luke.2', lukeChapter2Verses);
registerChapter('Luke.10', lukeChapter10Verses);
registerChapter('Luke.15', lukeChapter15Verses);
registerChapter('Luke.24', lukeChapter24Verses);
registerChapter('John.1', johnChapter1Verses);
registerChapter('John.3', johnChapter3Verses);
registerChapter('John.4', johnChapter4Verses);
registerChapter('John.6', johnChapter6Verses);
registerChapter('John.10', johnChapter10Verses);
registerChapter('John.14', johnChapter14Verses);
registerChapter('John.17', johnChapter17Verses);
registerChapter('John.19', johnChapter19Verses);
registerChapter('John.20', johnChapter20Verses);
registerChapter('Acts.2', actsChapter2Verses);
registerChapter('Acts.9', actsChapter9Verses);
registerChapter('Acts.17', actsChapter17Verses);
registerChapter('Rom.1', romansChapter1Verses);
registerChapter('Rom.8', romansChapter8Verses);
registerChapter('1Cor.13', corinthians1Chapter13Verses);
registerChapter('1Cor.15', corinthians1Chapter15Verses);
registerChapter('Gal.5', galatiansChapter5Verses);
registerChapter('Eph.2', ephesiansChapter2Verses);
registerChapter('Phil.2', philippiansChapter2Verses);
registerChapter('Col.1', colossiansChapter1Verses);
registerChapter('Heb.11', hebrewsChapter11Verses);
registerChapter('Jas.1', jamesChapter1Verses);
registerChapter('1Pet.1', peter1Chapter1Verses);
registerChapter('1John.4', john1Chapter4Verses);
registerChapter('Jude.1', judeChapter1Verses);
registerChapter('Rev.1', revelationChapter1Verses);
registerChapter('Rev.4', revelationChapter4Verses);
registerChapter('Rev.21', revelationChapter21Verses);
registerChapter('Rev.22', revelationChapter22Verses);
