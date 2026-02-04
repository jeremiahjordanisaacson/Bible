/**
 * Sample data for Genesis 7 (Hebrew)
 * The flood: Noah enters the ark, the waters prevail
 * Source: Open Hebrew Bible (Tanach.us) - Public Domain
 */

import { genesis7_1_10_verses } from './genesis/gen-7-1-10';
import { genesis7_11_24_verses } from './genesis/gen-7-11-24';

// Genesis chapter 7 verses (7:1-24) - COMPLETE CHAPTER
export const genesisChapter7Verses = [
  ...genesis7_1_10_verses,    // 7:1-10: God's command, Noah enters the ark
  ...genesis7_11_24_verses,   // 7:11-24: Flood begins, waters prevail 150 days
];

export default genesisChapter7Verses;
