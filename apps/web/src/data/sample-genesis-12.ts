// @ts-nocheck — adapter barrel for legacy data format
/**
 * Sample data for Genesis 12 (Hebrew) - COMPLETE CHAPTER
 * The call of Abram and journey to Canaan/Egypt
 * Source: Open Hebrew Bible (Tanach.us) - Public Domain
 */

import { gen12_1_9Tokens, gen12_1_9Translations, gen12_1_9Notes } from './genesis/gen-12-1-9';
import { gen12_10_20Tokens, gen12_10_20Translations, gen12_10_20Notes } from './genesis/gen-12-10-20';

/** Group flat token/translation/notes arrays into per-verse objects */
function buildVerses(
  tokens: any[],
  translations: any[],
  notes: any[],
): any[] {
  // Get unique verse refs from translations
  const verseRefs = translations.map((t: any) => t.verseId);

  return verseRefs.map((ref: string) => {
    const verseNum = ref; // e.g. "Gen.12.1"
    const parts = ref.split('.');
    const prefix = `${parts[0]}.${parts[1]}.${parts[2]}.`;

    return {
      ref: verseNum,
      sourceTokens: tokens.filter((t: any) => t.id.startsWith(prefix)),
      translation: translations.find((t: any) => t.verseId === verseNum) || {},
      notes: notes.filter((n: any) => (n.verseId || n.verseRef) === verseNum),
    };
  });
}

const verses1_9 = buildVerses(gen12_1_9Tokens, gen12_1_9Translations, gen12_1_9Notes);
const verses10_20 = buildVerses(gen12_10_20Tokens, gen12_10_20Translations, gen12_10_20Notes);

export const genesisChapter12Verses = [...verses1_9, ...verses10_20];
export default genesisChapter12Verses;
