/**
 * Sample data for Genesis 5 (Hebrew)
 * The book of the generations of Adam - genealogy from Adam to Noah
 * Source: Open Hebrew Bible (Tanach.us) - Public Domain
 */

import { genesis5_1_8_verses } from './genesis/gen-5-1-8';
import { genesis5_9_17_verses } from './genesis/gen-5-9-17';

// Genesis chapter 5 verses (5:1-17 so far, more to come)
export const genesisChapter5Verses = [
  ...genesis5_1_8_verses,    // 5:1-8: Adam and Seth
  ...genesis5_9_17_verses,   // 5:9-17: Enosh to Mahalalel
];

export default genesisChapter5Verses;
