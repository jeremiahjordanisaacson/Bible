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
import johnChapter1Verses from './sample-john';

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
registerChapter('John.1', johnChapter1Verses);
