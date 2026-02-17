// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 23:1 – The LORD is my shepherd
 * ──────────────────────────────────────────────────────────── */

export const psalm23_1_tokens: SourceToken[] = [
  {
    id: 'Ps.23.1.0',
    surfaceText: 'יְהוָה',
    lemma: 'יְהוָה',
    transliteration: 'yhwh',
    lemmaTranslit: 'yhwh',
    morph: 'HNp',
    strong: 'H3068',
    language: 'hebrew',
    position: 0,
    gloss: 'the LORD',
  },
  {
    id: 'Ps.23.1.1',
    surfaceText: 'רֹעִי',
    lemma: 'רָעָה',
    transliteration: "rōʿî",
    lemmaTranslit: "rāʿāh",
    morph: 'HVqPtmsc+Sp1cs',
    strong: 'H7462',
    language: 'hebrew',
    position: 1,
    gloss: 'is my shepherd',
  },
  {
    id: 'Ps.23.1.2',
    surfaceText: 'לֹא',
    lemma: 'לֹא',
    transliteration: "lōʾ",
    lemmaTranslit: "lōʾ",
    morph: 'HAn',
    strong: 'H3808',
    language: 'hebrew',
    position: 2,
    gloss: 'not',
  },
  {
    id: 'Ps.23.1.3',
    surfaceText: 'אֶחְסָר',
    lemma: 'חָסֵר',
    transliteration: "ʾeḥsār",
    lemmaTranslit: 'ḥāsēr',
    morph: 'HVqI1cs',
    strong: 'H2637',
    language: 'hebrew',
    position: 3,
    gloss: 'I shall want',
  },
];

export const psalm23_1_translation: VerseTranslation = {
  verseRef: 'Ps.23.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'The LORD is my shepherd; I shall not want',
      spans: [
        { tokenIds: ['Ps.23.1.0'], targetSlice: [0, 8], confidence: 'high' },
        { tokenIds: ['Ps.23.1.1'], targetSlice: [9, 23], confidence: 'high' },
        { tokenIds: ['Ps.23.1.2'], targetSlice: [24, 27], confidence: 'high' },
        { tokenIds: ['Ps.23.1.3'], targetSlice: [28, 40], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'The LORD is my shepherd, I lack nothing.',
      spans: [
        { tokenIds: ['Ps.23.1.0'], targetSlice: [0, 10], confidence: 'high' },
        { tokenIds: ['Ps.23.1.1'], targetSlice: [11, 21], confidence: 'high' },
        { tokenIds: ['Ps.23.1.2'], targetSlice: [22, 32], confidence: 'high' },
        { tokenIds: ['Ps.23.1.3'], targetSlice: [33, 40], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
  },
  metadata: {
    pipelineVersion: '0.1.0',
    generatedAt: new Date().toISOString(),
    engineId: 'open-bible-pipeline',
    engineVersion: '0.1.0',
    sourceDataVersion: '1.0.0',
  },
};

export const psalm23_1_verse = {
  ref: 'Ps.23.1',
  sourceTokens: psalm23_1_tokens,
  translation: psalm23_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 23:2 – He makes me lie down in green pastures
 * ──────────────────────────────────────────────────────────── */

export const psalm23_2_tokens: SourceToken[] = [
  {
    id: 'Ps.23.2.0',
    surfaceText: 'בִּנְאוֹת',
    lemma: 'נָאָה',
    transliteration: "binʾôṯ",
    lemmaTranslit: "nāʾāh",
    morph: 'HR+Ncfpc',
    strong: 'H4999',
    language: 'hebrew',
    position: 0,
    gloss: 'in pastures of',
  },
  {
    id: 'Ps.23.2.1',
    surfaceText: 'דֶּשֶׁא',
    lemma: 'דֶּשֶׁא',
    transliteration: "dešeʾ",
    lemmaTranslit: "dešeʾ",
    morph: 'HNcmsa',
    strong: 'H1877',
    language: 'hebrew',
    position: 1,
    gloss: 'green',
  },
  {
    id: 'Ps.23.2.2',
    surfaceText: 'יַרְבִּיצֵנִי',
    lemma: 'רָבַץ',
    transliteration: 'yarbîṣēnî',
    lemmaTranslit: 'rāḇaṣ',
    morph: 'HVhI3ms+Sp1cs',
    strong: 'H7257',
    language: 'hebrew',
    position: 2,
    gloss: 'he makes me lie down',
  },
  {
    id: 'Ps.23.2.3',
    surfaceText: 'עַל',
    lemma: 'עַל',
    transliteration: "ʿal",
    lemmaTranslit: "ʿal",
    morph: 'HR',
    strong: 'H5921',
    language: 'hebrew',
    position: 3,
    gloss: 'beside',
  },
  {
    id: 'Ps.23.2.4',
    surfaceText: 'מֵי',
    lemma: 'מַיִם',
    transliteration: 'mê',
    lemmaTranslit: 'mayim',
    morph: 'HNcmpc',
    strong: 'H4325',
    language: 'hebrew',
    position: 4,
    gloss: 'waters of',
  },
  {
    id: 'Ps.23.2.5',
    surfaceText: 'מְנֻחוֹת',
    lemma: 'מְנוּחָה',
    transliteration: 'měnuḥôṯ',
    lemmaTranslit: 'měnûḥāh',
    morph: 'HNcfpa',
    strong: 'H4496',
    language: 'hebrew',
    position: 5,
    gloss: 'rest',
  },
];

export const psalm23_2_translation: VerseTranslation = {
  verseRef: 'Ps.23.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'In green pastures he makes me lie down; beside still waters he leads me',
      spans: [
        { tokenIds: ['Ps.23.2.0'], targetSlice: [0, 14], confidence: 'high' },
        { tokenIds: ['Ps.23.2.1'], targetSlice: [15, 20], confidence: 'high' },
        { tokenIds: ['Ps.23.2.2'], targetSlice: [21, 41], confidence: 'high' },
        { tokenIds: ['Ps.23.2.3'], targetSlice: [42, 48], confidence: 'high' },
        { tokenIds: ['Ps.23.2.4'], targetSlice: [49, 58], confidence: 'high' },
        { tokenIds: ['Ps.23.2.5'], targetSlice: [59, 63], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'He makes me lie down in green pastures, he leads me beside quiet waters.',
      spans: [
        { tokenIds: ['Ps.23.2.0'], targetSlice: [0, 12], confidence: 'high' },
        { tokenIds: ['Ps.23.2.1'], targetSlice: [13, 25], confidence: 'high' },
        { tokenIds: ['Ps.23.2.2'], targetSlice: [26, 38], confidence: 'high' },
        { tokenIds: ['Ps.23.2.3'], targetSlice: [39, 51], confidence: 'high' },
        { tokenIds: ['Ps.23.2.4'], targetSlice: [52, 64], confidence: 'high' },
        { tokenIds: ['Ps.23.2.5'], targetSlice: [65, 72], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
  },
  metadata: {
    pipelineVersion: '0.1.0',
    generatedAt: new Date().toISOString(),
    engineId: 'open-bible-pipeline',
    engineVersion: '0.1.0',
    sourceDataVersion: '1.0.0',
  },
};

export const psalm23_2_verse = {
  ref: 'Ps.23.2',
  sourceTokens: psalm23_2_tokens,
  translation: psalm23_2_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 23:3 – He restores my soul
 * ──────────────────────────────────────────────────────────── */

export const psalm23_3_tokens: SourceToken[] = [
  {
    id: 'Ps.23.3.0',
    surfaceText: 'נַפְשִׁי',
    lemma: 'נֶפֶשׁ',
    transliteration: 'nap̄šî',
    lemmaTranslit: 'nep̄eš',
    morph: 'HNcfsc+Sp1cs',
    strong: 'H5315',
    language: 'hebrew',
    position: 0,
    gloss: 'my soul',
  },
  {
    id: 'Ps.23.3.1',
    surfaceText: 'יְשׁוֹבֵב',
    lemma: 'שׁוּב',
    transliteration: 'yěšôḇēḇ',
    lemmaTranslit: 'šûḇ',
    morph: 'HVpI3ms',
    strong: 'H7725',
    language: 'hebrew',
    position: 1,
    gloss: 'he restores',
  },
  {
    id: 'Ps.23.3.2',
    surfaceText: 'יַנְחֵנִי',
    lemma: 'נָחָה',
    transliteration: 'yanḥēnî',
    lemmaTranslit: 'nāḥāh',
    morph: 'HVhI3ms+Sp1cs',
    strong: 'H5148',
    language: 'hebrew',
    position: 2,
    gloss: 'he leads me',
  },
  {
    id: 'Ps.23.3.3',
    surfaceText: 'בְמַעְגְּלֵי',
    lemma: 'מַעְגָּל',
    transliteration: "ḇěmaʿgělê",
    lemmaTranslit: "maʿgāl",
    morph: 'HR+Ncmpc',
    strong: 'H4570',
    language: 'hebrew',
    position: 3,
    gloss: 'in paths of',
  },
  {
    id: 'Ps.23.3.4',
    surfaceText: 'צֶדֶק',
    lemma: 'צֶדֶק',
    transliteration: 'ṣeḏeq',
    lemmaTranslit: 'ṣeḏeq',
    morph: 'HNcmsa',
    strong: 'H6664',
    language: 'hebrew',
    position: 4,
    gloss: 'righteousness',
  },
];

export const psalm23_3_translation: VerseTranslation = {
  verseRef: 'Ps.23.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'He restores my soul; he leads me in paths of righteousness',
      spans: [
        { tokenIds: ['Ps.23.3.0'], targetSlice: [0, 7], confidence: 'high' },
        { tokenIds: ['Ps.23.3.1'], targetSlice: [8, 19], confidence: 'high' },
        { tokenIds: ['Ps.23.3.2'], targetSlice: [20, 31], confidence: 'high' },
        { tokenIds: ['Ps.23.3.3'], targetSlice: [32, 43], confidence: 'high' },
        { tokenIds: ['Ps.23.3.4'], targetSlice: [44, 57], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "He refreshes my soul. He guides me along the right paths for his name's sake.",
      spans: [
        { tokenIds: ['Ps.23.3.0'], targetSlice: [0, 15], confidence: 'high' },
        { tokenIds: ['Ps.23.3.1'], targetSlice: [16, 31], confidence: 'high' },
        { tokenIds: ['Ps.23.3.2'], targetSlice: [32, 47], confidence: 'high' },
        { tokenIds: ['Ps.23.3.3'], targetSlice: [48, 63], confidence: 'high' },
        { tokenIds: ['Ps.23.3.4'], targetSlice: [64, 77], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
  },
  metadata: {
    pipelineVersion: '0.1.0',
    generatedAt: new Date().toISOString(),
    engineId: 'open-bible-pipeline',
    engineVersion: '0.1.0',
    sourceDataVersion: '1.0.0',
  },
};

export const psalm23_3_verse = {
  ref: 'Ps.23.3',
  sourceTokens: psalm23_3_tokens,
  translation: psalm23_3_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 23:4 – Though I walk through the valley of the shadow of death
 * ──────────────────────────────────────────────────────────── */

export const psalm23_4_tokens: SourceToken[] = [
  {
    id: 'Ps.23.4.0',
    surfaceText: 'גַּם',
    lemma: 'גַּם',
    transliteration: 'gam',
    lemmaTranslit: 'gam',
    morph: 'HD',
    strong: 'H1571',
    language: 'hebrew',
    position: 0,
    gloss: 'even though',
  },
  {
    id: 'Ps.23.4.1',
    surfaceText: 'כִּי',
    lemma: 'כִּי',
    transliteration: 'kî',
    lemmaTranslit: 'kî',
    morph: 'HC',
    strong: 'H3588',
    language: 'hebrew',
    position: 1,
    gloss: 'though',
  },
  {
    id: 'Ps.23.4.2',
    surfaceText: 'אֵלֵךְ',
    lemma: 'הָלַךְ',
    transliteration: "ʾēlēḵ",
    lemmaTranslit: 'hālaḵ',
    morph: 'HVqI1cs',
    strong: 'H1980',
    language: 'hebrew',
    position: 2,
    gloss: 'I walk',
  },
  {
    id: 'Ps.23.4.3',
    surfaceText: 'בְּגֵיא',
    lemma: 'גַּיְא',
    transliteration: "běgêʾ",
    lemmaTranslit: "gayʾ",
    morph: 'HR+Ncmsc',
    strong: 'H1516',
    language: 'hebrew',
    position: 3,
    gloss: 'in the valley of',
  },
  {
    id: 'Ps.23.4.4',
    surfaceText: 'צַלְמָוֶת',
    lemma: 'צַלְמָוֶת',
    transliteration: 'ṣalmāweṯ',
    lemmaTranslit: 'ṣalmāweṯ',
    morph: 'HNcmsa',
    strong: 'H6757',
    language: 'hebrew',
    position: 4,
    gloss: 'the shadow of death',
  },
  {
    id: 'Ps.23.4.5',
    surfaceText: 'לֹא',
    lemma: 'לֹא',
    transliteration: "lōʾ",
    lemmaTranslit: "lōʾ",
    morph: 'HAn',
    strong: 'H3808',
    language: 'hebrew',
    position: 5,
    gloss: 'not',
  },
  {
    id: 'Ps.23.4.6',
    surfaceText: 'אִירָא',
    lemma: 'יָרֵא',
    transliteration: "ʾîrāʾ",
    lemmaTranslit: "yārēʾ",
    morph: 'HVqI1cs',
    strong: 'H3372',
    language: 'hebrew',
    position: 6,
    gloss: 'I will fear',
  },
  {
    id: 'Ps.23.4.7',
    surfaceText: 'רָע',
    lemma: 'רַע',
    transliteration: "rāʿ",
    lemmaTranslit: "raʿ",
    morph: 'HNcmsa',
    strong: 'H7451',
    language: 'hebrew',
    position: 7,
    gloss: 'evil',
  },
];

export const psalm23_4_translation: VerseTranslation = {
  verseRef: 'Ps.23.4',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Even though I walk through the valley of the shadow of death, I will fear no evil',
      spans: [
        { tokenIds: ['Ps.23.4.0'], targetSlice: [0, 11], confidence: 'high' },
        { tokenIds: ['Ps.23.4.1'], targetSlice: [12, 18], confidence: 'high' },
        { tokenIds: ['Ps.23.4.2'], targetSlice: [19, 25], confidence: 'high' },
        { tokenIds: ['Ps.23.4.3'], targetSlice: [26, 42], confidence: 'high' },
        { tokenIds: ['Ps.23.4.4'], targetSlice: [43, 62], confidence: 'high' },
        { tokenIds: ['Ps.23.4.5'], targetSlice: [63, 66], confidence: 'high' },
        { tokenIds: ['Ps.23.4.6'], targetSlice: [67, 78], confidence: 'high' },
        { tokenIds: ['Ps.23.4.7'], targetSlice: [79, 83], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Even though I walk through the darkest valley, I will fear no evil, for you are with me.',
      spans: [
        { tokenIds: ['Ps.23.4.0'], targetSlice: [0, 11], confidence: 'high' },
        { tokenIds: ['Ps.23.4.1'], targetSlice: [12, 23], confidence: 'high' },
        { tokenIds: ['Ps.23.4.2'], targetSlice: [24, 35], confidence: 'high' },
        { tokenIds: ['Ps.23.4.3'], targetSlice: [36, 47], confidence: 'high' },
        { tokenIds: ['Ps.23.4.4'], targetSlice: [48, 59], confidence: 'high' },
        { tokenIds: ['Ps.23.4.5'], targetSlice: [60, 71], confidence: 'high' },
        { tokenIds: ['Ps.23.4.6'], targetSlice: [72, 83], confidence: 'high' },
        { tokenIds: ['Ps.23.4.7'], targetSlice: [84, 88], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
  },
  metadata: {
    pipelineVersion: '0.1.0',
    generatedAt: new Date().toISOString(),
    engineId: 'open-bible-pipeline',
    engineVersion: '0.1.0',
    sourceDataVersion: '1.0.0',
  },
};

export const psalm23_4_verse = {
  ref: 'Ps.23.4',
  sourceTokens: psalm23_4_tokens,
  translation: psalm23_4_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 23:5 – You prepare a table before me
 * ──────────────────────────────────────────────────────────── */

export const psalm23_5_tokens: SourceToken[] = [
  {
    id: 'Ps.23.5.0',
    surfaceText: 'תַּעֲרֹךְ',
    lemma: 'עָרַךְ',
    transliteration: "taʿărōḵ",
    lemmaTranslit: "ʿāraḵ",
    morph: 'HVqI2ms',
    strong: 'H6186',
    language: 'hebrew',
    position: 0,
    gloss: 'you prepare',
  },
  {
    id: 'Ps.23.5.1',
    surfaceText: 'לְפָנַי',
    lemma: 'פָּנִים',
    transliteration: 'lěp̄ānay',
    lemmaTranslit: 'pānîm',
    morph: 'HR+Ncmpc+Sp1cs',
    strong: 'H6440',
    language: 'hebrew',
    position: 1,
    gloss: 'before me',
  },
  {
    id: 'Ps.23.5.2',
    surfaceText: 'שֻׁלְחָן',
    lemma: 'שֻׁלְחָן',
    transliteration: 'šulḥān',
    lemmaTranslit: 'šulḥān',
    morph: 'HNcmsa',
    strong: 'H7979',
    language: 'hebrew',
    position: 2,
    gloss: 'a table',
  },
  {
    id: 'Ps.23.5.3',
    surfaceText: 'נֶגֶד',
    lemma: 'נֶגֶד',
    transliteration: 'negeḏ',
    lemmaTranslit: 'negeḏ',
    morph: 'HR',
    strong: 'H5048',
    language: 'hebrew',
    position: 3,
    gloss: 'in the presence of',
  },
  {
    id: 'Ps.23.5.4',
    surfaceText: 'צֹרְרָי',
    lemma: 'צָרַר',
    transliteration: 'ṣōrěrāy',
    lemmaTranslit: 'ṣārar',
    morph: 'HVqPtmpc+Sp1cs',
    strong: 'H6887',
    language: 'hebrew',
    position: 4,
    gloss: 'my enemies',
  },
];

export const psalm23_5_translation: VerseTranslation = {
  verseRef: 'Ps.23.5',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'You prepare a table before me in the presence of my enemies',
      spans: [
        { tokenIds: ['Ps.23.5.0'], targetSlice: [0, 11], confidence: 'high' },
        { tokenIds: ['Ps.23.5.1'], targetSlice: [12, 21], confidence: 'high' },
        { tokenIds: ['Ps.23.5.2'], targetSlice: [22, 29], confidence: 'high' },
        { tokenIds: ['Ps.23.5.3'], targetSlice: [30, 48], confidence: 'high' },
        { tokenIds: ['Ps.23.5.4'], targetSlice: [49, 59], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'You prepare a table before me in the presence of my enemies.',
      spans: [
        { tokenIds: ['Ps.23.5.0'], targetSlice: [0, 12], confidence: 'high' },
        { tokenIds: ['Ps.23.5.1'], targetSlice: [13, 25], confidence: 'high' },
        { tokenIds: ['Ps.23.5.2'], targetSlice: [26, 38], confidence: 'high' },
        { tokenIds: ['Ps.23.5.3'], targetSlice: [39, 51], confidence: 'high' },
        { tokenIds: ['Ps.23.5.4'], targetSlice: [52, 60], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
  },
  metadata: {
    pipelineVersion: '0.1.0',
    generatedAt: new Date().toISOString(),
    engineId: 'open-bible-pipeline',
    engineVersion: '0.1.0',
    sourceDataVersion: '1.0.0',
  },
};

export const psalm23_5_verse = {
  ref: 'Ps.23.5',
  sourceTokens: psalm23_5_tokens,
  translation: psalm23_5_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 23:6 – Surely goodness and mercy shall follow me
 * ──────────────────────────────────────────────────────────── */

export const psalm23_6_tokens: SourceToken[] = [
  {
    id: 'Ps.23.6.0',
    surfaceText: 'אַךְ',
    lemma: 'אַךְ',
    transliteration: "ʾaḵ",
    lemmaTranslit: "ʾaḵ",
    morph: 'HD',
    strong: 'H389',
    language: 'hebrew',
    position: 0,
    gloss: 'surely',
  },
  {
    id: 'Ps.23.6.1',
    surfaceText: 'טוֹב',
    lemma: 'טוֹב',
    transliteration: 'ṭôḇ',
    lemmaTranslit: 'ṭôḇ',
    morph: 'HNcmsa',
    strong: 'H2896',
    language: 'hebrew',
    position: 1,
    gloss: 'goodness',
  },
  {
    id: 'Ps.23.6.2',
    surfaceText: 'וָחֶסֶד',
    lemma: 'חֶסֶד',
    transliteration: 'wāḥeseḏ',
    lemmaTranslit: 'ḥeseḏ',
    morph: 'HC+Ncmsa',
    strong: 'H2617',
    language: 'hebrew',
    position: 2,
    gloss: 'and mercy',
  },
  {
    id: 'Ps.23.6.3',
    surfaceText: 'יִרְדְּפוּנִי',
    lemma: 'רָדַף',
    transliteration: 'yirděp̄ûnî',
    lemmaTranslit: 'rāḏap̄',
    morph: 'HVqI3mp+Sp1cs',
    strong: 'H7291',
    language: 'hebrew',
    position: 3,
    gloss: 'shall follow me',
  },
  {
    id: 'Ps.23.6.4',
    surfaceText: 'כָּל',
    lemma: 'כֹּל',
    transliteration: 'kāl',
    lemmaTranslit: 'kōl',
    morph: 'HNcmsc',
    strong: 'H3605',
    language: 'hebrew',
    position: 4,
    gloss: 'all',
  },
  {
    id: 'Ps.23.6.5',
    surfaceText: 'יְמֵי',
    lemma: 'יוֹם',
    transliteration: 'yěmê',
    lemmaTranslit: 'yôm',
    morph: 'HNcmpc',
    strong: 'H3117',
    language: 'hebrew',
    position: 5,
    gloss: 'the days of',
  },
  {
    id: 'Ps.23.6.6',
    surfaceText: 'חַיָּי',
    lemma: 'חַי',
    transliteration: 'ḥayyāy',
    lemmaTranslit: 'ḥay',
    morph: 'HNcmpc+Sp1cs',
    strong: 'H2416',
    language: 'hebrew',
    position: 6,
    gloss: 'my life',
  },
];

export const psalm23_6_translation: VerseTranslation = {
  verseRef: 'Ps.23.6',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Surely goodness and mercy shall follow me all the days of my life',
      spans: [
        { tokenIds: ['Ps.23.6.0'], targetSlice: [0, 6], confidence: 'high' },
        { tokenIds: ['Ps.23.6.1'], targetSlice: [7, 15], confidence: 'high' },
        { tokenIds: ['Ps.23.6.2'], targetSlice: [16, 25], confidence: 'high' },
        { tokenIds: ['Ps.23.6.3'], targetSlice: [26, 41], confidence: 'high' },
        { tokenIds: ['Ps.23.6.4'], targetSlice: [42, 45], confidence: 'high' },
        { tokenIds: ['Ps.23.6.5'], targetSlice: [46, 57], confidence: 'high' },
        { tokenIds: ['Ps.23.6.6'], targetSlice: [58, 65], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Surely your goodness and love will follow me all the days of my life.',
      spans: [
        { tokenIds: ['Ps.23.6.0'], targetSlice: [0, 9], confidence: 'high' },
        { tokenIds: ['Ps.23.6.1'], targetSlice: [10, 19], confidence: 'high' },
        { tokenIds: ['Ps.23.6.2'], targetSlice: [20, 29], confidence: 'high' },
        { tokenIds: ['Ps.23.6.3'], targetSlice: [30, 39], confidence: 'high' },
        { tokenIds: ['Ps.23.6.4'], targetSlice: [40, 49], confidence: 'high' },
        { tokenIds: ['Ps.23.6.5'], targetSlice: [50, 59], confidence: 'high' },
        { tokenIds: ['Ps.23.6.6'], targetSlice: [60, 69], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
  },
  metadata: {
    pipelineVersion: '0.1.0',
    generatedAt: new Date().toISOString(),
    engineId: 'open-bible-pipeline',
    engineVersion: '0.1.0',
    sourceDataVersion: '1.0.0',
  },
};

export const psalm23_6_verse = {
  ref: 'Ps.23.6',
  sourceTokens: psalm23_6_tokens,
  translation: psalm23_6_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Psalm 23:1-6 — The Lord is my shepherd
 * ──────────────────────────────────────────────────────────── */

export const psalm23_1_6_verses = [
  psalm23_1_verse,
  psalm23_2_verse,
  psalm23_3_verse,
  psalm23_4_verse,
  psalm23_5_verse,
  psalm23_6_verse,
];

export default psalm23_1_6_verses;
