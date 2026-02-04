/**
 * Sample data for Genesis 2 (Hebrew) - COMPLETE CHAPTER
 * Source: Open Hebrew Bible (Tanach.us) - Public Domain
 */

import { genesis2_1_7_verses } from './genesis/gen-2-1-7';
import { genesis2_8_14_verses } from './genesis/gen-2-8-14';
import { genesis2_15_25_verses } from './genesis/gen-2-15-25';

// Genesis chapter 2 verses (2:1-25) - COMPLETE CHAPTER
export const genesisChapter2Verses = [
  ...genesis2_1_7_verses,   // 2:1-7: Day 7 rest, creation of man
  ...genesis2_8_14_verses,  // 2:8-14: Garden of Eden, four rivers
  ...genesis2_15_25_verses, // 2:15-25: God's command, naming animals, creation of woman
];

export default genesisChapter2Verses;
