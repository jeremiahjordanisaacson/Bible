// @ts-nocheck — adapter barrel for legacy data format
/**
 * Sample data for Genesis 14 (Hebrew) - COMPLETE CHAPTER
 * War of the Kings and Melchizedek
 * Source: Open Hebrew Bible (Tanach.us) - Public Domain
 */

import { gen14_1_12Tokens, gen14_1_12Translations, gen14_1_12Notes } from './genesis/gen-14-1-12';
import { gen14_13_24Tokens, gen14_13_24Translations, gen14_13_24Notes } from './genesis/gen-14-13-24';

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

const verses1_12 = buildVerses(gen14_1_12Tokens, gen14_1_12Translations, gen14_1_12Notes);
const verses13_24 = buildVerses(gen14_13_24Tokens, gen14_13_24Translations, gen14_13_24Notes);

export const genesisChapter14Verses = [...verses1_12, ...verses13_24];
export default genesisChapter14Verses;
