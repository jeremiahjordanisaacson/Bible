/**
 * Sample data for Genesis 4 (Hebrew)
 * Cain and Abel - birth, offerings, murder, judgment, and descendants
 * Source: Open Hebrew Bible (Tanach.us) - Public Domain
 */

import { genesis4_1_8_verses } from './genesis/gen-4-1-8';
import { genesis4_9_16_verses } from './genesis/gen-4-9-16';
import { genesis4_17_26_verses } from './genesis/gen-4-17-26';

// Genesis chapter 4 verses (4:1-26) - COMPLETE CHAPTER
export const genesisChapter4Verses = [
  ...genesis4_1_8_verses,    // 4:1-8: Cain and Abel, offerings, murder
  ...genesis4_9_16_verses,   // 4:9-16: God confronts Cain, curse, mark
  ...genesis4_17_26_verses,  // 4:17-26: Cain's line, Lamech, Seth, Enosh
];

export default genesisChapter4Verses;
