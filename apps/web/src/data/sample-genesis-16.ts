// @ts-nocheck — adapter barrel for legacy data format
/**
 * Sample data for Genesis 16 (Hebrew)
 * Hagar and Ishmael — Sarah's maidservant, the angel at the spring
 * Source: Open Hebrew Bible (Tanach.us) - Public Domain
 */

import { gen16_1_16Tokens, gen16_1_16Translations, gen16_1_16Notes } from './genesis/gen-16-1-16';

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

export const genesisChapter16Verses = buildVerses(gen16_1_16Tokens, gen16_1_16Translations, gen16_1_16Notes);
export default genesisChapter16Verses;
