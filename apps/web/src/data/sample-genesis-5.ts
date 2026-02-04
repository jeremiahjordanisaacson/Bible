/**
 * Sample data for Genesis 5 (Hebrew)
 * The book of the generations of Adam - genealogy from Adam to Noah
 * Source: Open Hebrew Bible (Tanach.us) - Public Domain
 */

import { genesis5_1_8_verses } from './genesis/gen-5-1-8';
import { genesis5_9_17_verses } from './genesis/gen-5-9-17';
import { genesis5_18_27_verses } from './genesis/gen-5-18-27';
import { genesis5_28_32_verses } from './genesis/gen-5-28-32';

// Genesis chapter 5 verses (5:1-32) - COMPLETE CHAPTER
export const genesisChapter5Verses = [
  ...genesis5_1_8_verses,    // 5:1-8: Adam and Seth
  ...genesis5_9_17_verses,   // 5:9-17: Enosh to Mahalalel
  ...genesis5_18_27_verses,  // 5:18-27: Jared, Enoch, Methuselah
  ...genesis5_28_32_verses,  // 5:28-32: Lamech, Noah, sons
];

export default genesisChapter5Verses;
