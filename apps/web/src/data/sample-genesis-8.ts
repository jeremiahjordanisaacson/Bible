/**
 * Sample data for Genesis 8 (Hebrew)
 * The flood recedes: God remembers Noah, the waters recede, Noah's sacrifice
 * Source: Open Hebrew Bible (Tanach.us) - Public Domain
 */

import { genesis8_1_7_verses } from './genesis/gen-8-1-7';
import { genesis8_8_14_verses } from './genesis/gen-8-8-14';
import { genesis8_15_22_verses } from './genesis/gen-8-15-22';

// Genesis chapter 8 verses (8:1-22) - COMPLETE CHAPTER
export const genesisChapter8Verses = [
  ...genesis8_1_7_verses,    // 8:1-7: God remembers Noah, waters recede, raven sent
  ...genesis8_8_14_verses,   // 8:8-14: Dove sent three times, earth dries
  ...genesis8_15_22_verses,  // 8:15-22: Noah leaves ark, offers sacrifice, God's promise
];

export default genesisChapter8Verses;
