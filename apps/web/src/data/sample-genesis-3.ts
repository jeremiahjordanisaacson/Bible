/**
 * Sample data for Genesis 3 (Hebrew)
 * The fall of man - serpent's temptation, sin, consequences
 * Source: Open Hebrew Bible (Tanach.us) - Public Domain
 */

import { genesis3_1_7_verses } from './genesis/gen-3-1-7';
import { genesis3_8_13_verses } from './genesis/gen-3-8-13';

// Genesis chapter 3 verses (3:1-13 so far)
export const genesisChapter3Verses = [
  ...genesis3_1_7_verses,   // 3:1-7: The temptation and fall
  ...genesis3_8_13_verses,  // 3:8-13: God confronts Adam and Eve
];

export default genesisChapter3Verses;
