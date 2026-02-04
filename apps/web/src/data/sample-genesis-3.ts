/**
 * Sample data for Genesis 3 (Hebrew)
 * The fall of man - serpent's temptation, sin, consequences
 * Source: Open Hebrew Bible (Tanach.us) - Public Domain
 */

import { genesis3_1_7_verses } from './genesis/gen-3-1-7';
import { genesis3_8_13_verses } from './genesis/gen-3-8-13';
import { genesis3_14_19_verses } from './genesis/gen-3-14-19';
import { genesis3_20_24_verses } from './genesis/gen-3-20-24';

// Genesis chapter 3 verses (3:1-24) - COMPLETE CHAPTER
export const genesisChapter3Verses = [
  ...genesis3_1_7_verses,    // 3:1-7: The temptation and fall
  ...genesis3_8_13_verses,   // 3:8-13: God confronts Adam and Eve
  ...genesis3_14_19_verses,  // 3:14-19: The curses, protoevangelium
  ...genesis3_20_24_verses,  // 3:20-24: Naming Eve, garments, expulsion
];

export default genesisChapter3Verses;
