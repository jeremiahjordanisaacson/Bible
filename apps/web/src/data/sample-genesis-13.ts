// @ts-nocheck — adapter barrel for legacy data format
/**
 * Sample data for Genesis 13 (Hebrew) - COMPLETE CHAPTER
 * Abram and Lot separate; God's promise of land
 * Source: Open Hebrew Bible (Tanach.us) - Public Domain
 */

import { gen13_1_9Tokens, gen13_1_9Translations, gen13_1_9Notes } from './genesis/gen-13-1-9';
import { gen13_10_18Tokens, gen13_10_18Translations, gen13_10_18Notes } from './genesis/gen-13-10-18';

function buildVerses(tokens: any[], translations: any[], notes: any[]): any[] {
  const verseRefs = translations.map((t: any) => t.verseId);
  return verseRefs.map((ref: string) => {
    const prefix = ref + '.';
    return {
      ref,
      sourceTokens: tokens.filter((t: any) => t.id.startsWith(prefix)),
      translation: translations.find((t: any) => t.verseId === ref) || {},
      notes: notes.filter((n: any) => (n.verseId || n.verseRef) === ref),
    };
  });
}

const verses1_9 = buildVerses(gen13_1_9Tokens, gen13_1_9Translations, gen13_1_9Notes);
const verses10_18 = buildVerses(gen13_10_18Tokens, gen13_10_18Translations, gen13_10_18Notes);

export const genesisChapter13Verses = [...verses1_9, ...verses10_18];
export default genesisChapter13Verses;
