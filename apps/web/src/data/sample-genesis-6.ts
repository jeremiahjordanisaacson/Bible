/**
 * Sample data for Genesis 6 (Hebrew)
 * The flood narrative begins: sons of God, human wickedness, Noah, and ark instructions
 * Source: Open Hebrew Bible (Tanach.us) - Public Domain
 */

import { genesis6_1_8_verses } from './genesis/gen-6-1-8';
import { genesis6_9_16_verses } from './genesis/gen-6-9-16';
import { genesis6_17_22_verses } from './genesis/gen-6-17-22';

// Genesis chapter 6 verses (6:1-22) - COMPLETE CHAPTER
export const genesisChapter6Verses = [
  ...genesis6_1_8_verses,    // 6:1-8: Sons of God, human wickedness, Noah finds favor
  ...genesis6_9_16_verses,   // 6:9-16: Noah's righteousness, corruption, ark instructions
  ...genesis6_17_22_verses,  // 6:17-22: Flood announcement, covenant, Noah's obedience
];

export default genesisChapter6Verses;
