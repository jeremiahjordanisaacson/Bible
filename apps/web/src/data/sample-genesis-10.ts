/**
 * Sample data for Genesis 10 (Hebrew) - COMPLETE CHAPTER
 * Table of Nations — descendants of Shem, Ham, and Japheth
 * Source: Open Hebrew Bible (Tanach.us) - Public Domain
 */

import { genesis10_1_5_verses } from './genesis/gen-10-1-5';
import { genesis10_6_20_verses } from './genesis/gen-10-6-20';
import { genesis10_21_32_verses } from './genesis/gen-10-21-32';

// Genesis chapter 10 verses (10:1-32) - COMPLETE CHAPTER
export const genesisChapter10Verses = [
  ...genesis10_1_5_verses,    // 10:1-5: Japheth's descendants
  ...genesis10_6_20_verses,   // 10:6-20: Ham's descendants, Nimrod
  ...genesis10_21_32_verses,  // 10:21-32: Shem's descendants
];

export default genesisChapter10Verses;
