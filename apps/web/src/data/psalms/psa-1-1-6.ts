// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 1:1 – Blessed is the man
 * ──────────────────────────────────────────────────────────── */

export const psalm1_1_tokens: SourceToken[] = [
  {
    id: 'Ps.1.1.0',
    surfaceText: 'אַשְׁרֵי',
    lemma: 'אֶשֶׁר',
    transliteration: "ʾašrê",
    lemmaTranslit: "ʾešer",
    morph: 'HNcmpc',
    strong: 'H835',
    language: 'hebrew',
    position: 0,
    gloss: 'blessed is',
  },
  {
    id: 'Ps.1.1.1',
    surfaceText: 'הָאִישׁ',
    lemma: 'אִישׁ',
    transliteration: "hāʾîš",
    lemmaTranslit: "ʾîš",
    morph: 'HTd+Ncmsa',
    strong: 'H376',
    language: 'hebrew',
    position: 1,
    gloss: 'the man',
  },
  {
    id: 'Ps.1.1.2',
    surfaceText: 'אֲשֶׁר',
    lemma: 'אֲשֶׁר',
    transliteration: "ʾăšer",
    lemmaTranslit: "ʾăšer",
    morph: 'HR',
    strong: 'H834',
    language: 'hebrew',
    position: 2,
    gloss: 'who',
  },
  {
    id: 'Ps.1.1.3',
    surfaceText: 'לֹא',
    lemma: 'לֹא',
    transliteration: "lōʾ",
    lemmaTranslit: "lōʾ",
    morph: 'HAn',
    strong: 'H3808',
    language: 'hebrew',
    position: 3,
    gloss: 'not',
  },
  {
    id: 'Ps.1.1.4',
    surfaceText: 'הָלַךְ',
    lemma: 'הָלַךְ',
    transliteration: 'hālaḵ',
    lemmaTranslit: 'hālaḵ',
    morph: 'HVqp3ms',
    strong: 'H1980',
    language: 'hebrew',
    position: 4,
    gloss: 'walked',
  },
  {
    id: 'Ps.1.1.5',
    surfaceText: 'בַּעֲצַת',
    lemma: 'עֵצָה',
    transliteration: "baʿăṣaṯ",
    lemmaTranslit: "ʿēṣāh",
    morph: 'HR+Ncfsc',
    strong: 'H6098',
    language: 'hebrew',
    position: 5,
    gloss: 'in the counsel of',
  },
  {
    id: 'Ps.1.1.6',
    surfaceText: 'רְשָׁעִים',
    lemma: 'רָשָׁע',
    transliteration: "rěšāʿîm",
    lemmaTranslit: "rāšāʿ",
    morph: 'HNcmpa',
    strong: 'H7563',
    language: 'hebrew',
    position: 6,
    gloss: 'the wicked',
  },
];

export const psalm1_1_translation: VerseTranslation = {
  verseRef: 'Ps.1.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Blessed is the man who has not walked in the counsel of the wicked',
      spans: [
        { tokenIds: ['Ps.1.1.0'], targetSlice: [0, 10], confidence: 'high' },
        { tokenIds: ['Ps.1.1.1'], targetSlice: [11, 18], confidence: 'high' },
        { tokenIds: ['Ps.1.1.2'], targetSlice: [19, 22], confidence: 'high' },
        { tokenIds: ['Ps.1.1.3'], targetSlice: [23, 26], confidence: 'high' },
        { tokenIds: ['Ps.1.1.4'], targetSlice: [27, 33], confidence: 'high' },
        { tokenIds: ['Ps.1.1.5'], targetSlice: [34, 51], confidence: 'high' },
        { tokenIds: ['Ps.1.1.6'], targetSlice: [52, 62], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Blessed is the one who does not walk in step with the wicked.',
      spans: [
        { tokenIds: ['Ps.1.1.0'], targetSlice: [0, 8], confidence: 'high' },
        { tokenIds: ['Ps.1.1.1'], targetSlice: [9, 17], confidence: 'high' },
        { tokenIds: ['Ps.1.1.2'], targetSlice: [18, 26], confidence: 'high' },
        { tokenIds: ['Ps.1.1.3'], targetSlice: [27, 35], confidence: 'high' },
        { tokenIds: ['Ps.1.1.4'], targetSlice: [36, 44], confidence: 'high' },
        { tokenIds: ['Ps.1.1.5'], targetSlice: [45, 53], confidence: 'high' },
        { tokenIds: ['Ps.1.1.6'], targetSlice: [54, 61], confidence: 'high' },
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

export const psalm1_1_verse = {
  ref: 'Ps.1.1',
  sourceTokens: psalm1_1_tokens,
  translation: psalm1_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:2 – His delight is in the law of the LORD
 * ──────────────────────────────────────────────────────────── */

export const psalm1_2_tokens: SourceToken[] = [
  {
    id: 'Ps.1.2.0',
    surfaceText: 'כִּי',
    lemma: 'כִּי',
    transliteration: 'kî',
    lemmaTranslit: 'kî',
    morph: 'HC',
    strong: 'H3588',
    language: 'hebrew',
    position: 0,
    gloss: 'but',
  },
  {
    id: 'Ps.1.2.1',
    surfaceText: 'אִם',
    lemma: 'אִם',
    transliteration: "ʾim",
    lemmaTranslit: "ʾim",
    morph: 'HC',
    strong: 'H518',
    language: 'hebrew',
    position: 1,
    gloss: 'rather',
  },
  {
    id: 'Ps.1.2.2',
    surfaceText: 'בְּתוֹרַת',
    lemma: 'תּוֹרָה',
    transliteration: 'běṯôraṯ',
    lemmaTranslit: 'tôrāh',
    morph: 'HR+Ncfsc',
    strong: 'H8451',
    language: 'hebrew',
    position: 2,
    gloss: 'in the law of',
  },
  {
    id: 'Ps.1.2.3',
    surfaceText: 'יְהוָה',
    lemma: 'יְהוָה',
    transliteration: 'yhwh',
    lemmaTranslit: 'yhwh',
    morph: 'HNp',
    strong: 'H3068',
    language: 'hebrew',
    position: 3,
    gloss: 'the LORD',
  },
  {
    id: 'Ps.1.2.4',
    surfaceText: 'חֶפְצוֹ',
    lemma: 'חֵפֶץ',
    transliteration: 'ḥep̄ṣô',
    lemmaTranslit: 'ḥēp̄eṣ',
    morph: 'HNcmsc+Sp3ms',
    strong: 'H2656',
    language: 'hebrew',
    position: 4,
    gloss: 'his delight',
  },
];

export const psalm1_2_translation: VerseTranslation = {
  verseRef: 'Ps.1.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'But rather in the law of the LORD is his delight and in his law he meditates day and night',
      spans: [
        { tokenIds: ['Ps.1.2.0'], targetSlice: [0, 3], confidence: 'high' },
        { tokenIds: ['Ps.1.2.1'], targetSlice: [4, 10], confidence: 'high' },
        { tokenIds: ['Ps.1.2.2'], targetSlice: [11, 24], confidence: 'high' },
        { tokenIds: ['Ps.1.2.3'], targetSlice: [25, 33], confidence: 'high' },
        { tokenIds: ['Ps.1.2.4'], targetSlice: [34, 45], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'But whose delight is in the law of the LORD, and who meditates on his law day and night.',
      spans: [
        { tokenIds: ['Ps.1.2.0'], targetSlice: [0, 17], confidence: 'high' },
        { tokenIds: ['Ps.1.2.1'], targetSlice: [18, 35], confidence: 'high' },
        { tokenIds: ['Ps.1.2.2'], targetSlice: [36, 53], confidence: 'high' },
        { tokenIds: ['Ps.1.2.3'], targetSlice: [54, 71], confidence: 'high' },
        { tokenIds: ['Ps.1.2.4'], targetSlice: [72, 88], confidence: 'high' },
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

export const psalm1_2_verse = {
  ref: 'Ps.1.2',
  sourceTokens: psalm1_2_tokens,
  translation: psalm1_2_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:3 – Like a tree planted by streams of water
 * ──────────────────────────────────────────────────────────── */

export const psalm1_3_tokens: SourceToken[] = [
  {
    id: 'Ps.1.3.0',
    surfaceText: 'וְהָיָה',
    lemma: 'הָיָה',
    transliteration: 'wěhāyāh',
    lemmaTranslit: 'hāyāh',
    morph: 'HC+Vqp3ms',
    strong: 'H1961',
    language: 'hebrew',
    position: 0,
    gloss: 'and he shall be',
  },
  {
    id: 'Ps.1.3.1',
    surfaceText: 'כְּעֵץ',
    lemma: 'עֵץ',
    transliteration: "kěʿēṣ",
    lemmaTranslit: "ʿēṣ",
    morph: 'HR+Ncmsa',
    strong: 'H6086',
    language: 'hebrew',
    position: 1,
    gloss: 'like a tree',
  },
  {
    id: 'Ps.1.3.2',
    surfaceText: 'שָׁתוּל',
    lemma: 'שָׁתַל',
    transliteration: 'šāṯûl',
    lemmaTranslit: 'šāṯal',
    morph: 'HVqPmsa',
    strong: 'H8362',
    language: 'hebrew',
    position: 2,
    gloss: 'planted',
  },
  {
    id: 'Ps.1.3.3',
    surfaceText: 'עַל',
    lemma: 'עַל',
    transliteration: "ʿal",
    lemmaTranslit: "ʿal",
    morph: 'HR',
    strong: 'H5921',
    language: 'hebrew',
    position: 3,
    gloss: 'by',
  },
  {
    id: 'Ps.1.3.4',
    surfaceText: 'פַּלְגֵי',
    lemma: 'פֶּלֶג',
    transliteration: 'palgê',
    lemmaTranslit: 'peleg',
    morph: 'HNcmpc',
    strong: 'H6388',
    language: 'hebrew',
    position: 4,
    gloss: 'streams of',
  },
  {
    id: 'Ps.1.3.5',
    surfaceText: 'מָיִם',
    lemma: 'מַיִם',
    transliteration: 'māyim',
    lemmaTranslit: 'mayim',
    morph: 'HNcmpa',
    strong: 'H4325',
    language: 'hebrew',
    position: 5,
    gloss: 'water',
  },
];

export const psalm1_3_translation: VerseTranslation = {
  verseRef: 'Ps.1.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And he shall be like a tree planted by streams of water',
      spans: [
        { tokenIds: ['Ps.1.3.0'], targetSlice: [0, 15], confidence: 'high' },
        { tokenIds: ['Ps.1.3.1'], targetSlice: [16, 27], confidence: 'high' },
        { tokenIds: ['Ps.1.3.2'], targetSlice: [28, 35], confidence: 'high' },
        { tokenIds: ['Ps.1.3.3'], targetSlice: [36, 38], confidence: 'high' },
        { tokenIds: ['Ps.1.3.4'], targetSlice: [39, 49], confidence: 'high' },
        { tokenIds: ['Ps.1.3.5'], targetSlice: [50, 55], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'That person is like a tree planted by streams of water.',
      spans: [
        { tokenIds: ['Ps.1.3.0'], targetSlice: [0, 9], confidence: 'high' },
        { tokenIds: ['Ps.1.3.1'], targetSlice: [10, 19], confidence: 'high' },
        { tokenIds: ['Ps.1.3.2'], targetSlice: [20, 29], confidence: 'high' },
        { tokenIds: ['Ps.1.3.3'], targetSlice: [30, 39], confidence: 'high' },
        { tokenIds: ['Ps.1.3.4'], targetSlice: [40, 49], confidence: 'high' },
        { tokenIds: ['Ps.1.3.5'], targetSlice: [50, 55], confidence: 'high' },
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

export const psalm1_3_verse = {
  ref: 'Ps.1.3',
  sourceTokens: psalm1_3_tokens,
  translation: psalm1_3_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:4 – The wicked are like chaff
 * ──────────────────────────────────────────────────────────── */

export const psalm1_4_tokens: SourceToken[] = [
  {
    id: 'Ps.1.4.0',
    surfaceText: 'לֹא',
    lemma: 'לֹא',
    transliteration: "lōʾ",
    lemmaTranslit: "lōʾ",
    morph: 'HAn',
    strong: 'H3808',
    language: 'hebrew',
    position: 0,
    gloss: 'not',
  },
  {
    id: 'Ps.1.4.1',
    surfaceText: 'כֵן',
    lemma: 'כֵּן',
    transliteration: 'ḵēn',
    lemmaTranslit: 'kēn',
    morph: 'HD',
    strong: 'H3651',
    language: 'hebrew',
    position: 1,
    gloss: 'so',
  },
  {
    id: 'Ps.1.4.2',
    surfaceText: 'הָרְשָׁעִים',
    lemma: 'רָשָׁע',
    transliteration: "hārěšāʿîm",
    lemmaTranslit: "rāšāʿ",
    morph: 'HTd+Ncmpa',
    strong: 'H7563',
    language: 'hebrew',
    position: 2,
    gloss: 'the wicked',
  },
  {
    id: 'Ps.1.4.3',
    surfaceText: 'כַּמֹּץ',
    lemma: 'מֹץ',
    transliteration: 'kammōṣ',
    lemmaTranslit: 'mōṣ',
    morph: 'HR+Ncmsa',
    strong: 'H4671',
    language: 'hebrew',
    position: 3,
    gloss: 'like chaff',
  },
];

export const psalm1_4_translation: VerseTranslation = {
  verseRef: 'Ps.1.4',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Not so the wicked, but they are like chaff that the wind drives away',
      spans: [
        { tokenIds: ['Ps.1.4.0'], targetSlice: [0, 3], confidence: 'high' },
        { tokenIds: ['Ps.1.4.1'], targetSlice: [4, 6], confidence: 'high' },
        { tokenIds: ['Ps.1.4.2'], targetSlice: [7, 17], confidence: 'high' },
        { tokenIds: ['Ps.1.4.3'], targetSlice: [18, 28], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Not so the wicked! They are like chaff that the wind blows away.',
      spans: [
        { tokenIds: ['Ps.1.4.0'], targetSlice: [0, 16], confidence: 'high' },
        { tokenIds: ['Ps.1.4.1'], targetSlice: [17, 33], confidence: 'high' },
        { tokenIds: ['Ps.1.4.2'], targetSlice: [34, 50], confidence: 'high' },
        { tokenIds: ['Ps.1.4.3'], targetSlice: [51, 64], confidence: 'high' },
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

export const psalm1_4_verse = {
  ref: 'Ps.1.4',
  sourceTokens: psalm1_4_tokens,
  translation: psalm1_4_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:5 – The wicked will not stand in the judgment
 * ──────────────────────────────────────────────────────────── */

export const psalm1_5_tokens: SourceToken[] = [
  {
    id: 'Ps.1.5.0',
    surfaceText: 'לֹא',
    lemma: 'לֹא',
    transliteration: "lōʾ",
    lemmaTranslit: "lōʾ",
    morph: 'HAn',
    strong: 'H3808',
    language: 'hebrew',
    position: 0,
    gloss: 'not',
  },
  {
    id: 'Ps.1.5.1',
    surfaceText: 'יָקֻמוּ',
    lemma: 'קוּם',
    transliteration: 'yāqumû',
    lemmaTranslit: 'qûm',
    morph: 'HVqI3mp',
    strong: 'H6965',
    language: 'hebrew',
    position: 1,
    gloss: 'shall stand',
  },
  {
    id: 'Ps.1.5.2',
    surfaceText: 'רְשָׁעִים',
    lemma: 'רָשָׁע',
    transliteration: "rěšāʿîm",
    lemmaTranslit: "rāšāʿ",
    morph: 'HNcmpa',
    strong: 'H7563',
    language: 'hebrew',
    position: 2,
    gloss: 'the wicked',
  },
  {
    id: 'Ps.1.5.3',
    surfaceText: 'בַּמִּשְׁפָּט',
    lemma: 'מִשְׁפָּט',
    transliteration: 'bammišpāṭ',
    lemmaTranslit: 'mišpāṭ',
    morph: 'HR+Ncmsa',
    strong: 'H4941',
    language: 'hebrew',
    position: 3,
    gloss: 'in the judgment',
  },
];

export const psalm1_5_translation: VerseTranslation = {
  verseRef: 'Ps.1.5',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Therefore the wicked will not stand in the judgment',
      spans: [
        { tokenIds: ['Ps.1.5.0'], targetSlice: [0, 3], confidence: 'high' },
        { tokenIds: ['Ps.1.5.1'], targetSlice: [4, 15], confidence: 'high' },
        { tokenIds: ['Ps.1.5.2'], targetSlice: [16, 26], confidence: 'high' },
        { tokenIds: ['Ps.1.5.3'], targetSlice: [27, 42], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Therefore the wicked will not stand in the judgment.',
      spans: [
        { tokenIds: ['Ps.1.5.0'], targetSlice: [0, 13], confidence: 'high' },
        { tokenIds: ['Ps.1.5.1'], targetSlice: [14, 27], confidence: 'high' },
        { tokenIds: ['Ps.1.5.2'], targetSlice: [28, 41], confidence: 'high' },
        { tokenIds: ['Ps.1.5.3'], targetSlice: [42, 52], confidence: 'high' },
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

export const psalm1_5_verse = {
  ref: 'Ps.1.5',
  sourceTokens: psalm1_5_tokens,
  translation: psalm1_5_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:6 – The LORD knows the way of the righteous
 * ──────────────────────────────────────────────────────────── */

export const psalm1_6_tokens: SourceToken[] = [
  {
    id: 'Ps.1.6.0',
    surfaceText: 'כִּי',
    lemma: 'כִּי',
    transliteration: 'kî',
    lemmaTranslit: 'kî',
    morph: 'HC',
    strong: 'H3588',
    language: 'hebrew',
    position: 0,
    gloss: 'for',
  },
  {
    id: 'Ps.1.6.1',
    surfaceText: 'יוֹדֵעַ',
    lemma: 'יָדַע',
    transliteration: "yôḏēaʿ",
    lemmaTranslit: "yāḏaʿ",
    morph: 'HVqPtmsa',
    strong: 'H3045',
    language: 'hebrew',
    position: 1,
    gloss: 'knows',
  },
  {
    id: 'Ps.1.6.2',
    surfaceText: 'יְהוָה',
    lemma: 'יְהוָה',
    transliteration: 'yhwh',
    lemmaTranslit: 'yhwh',
    morph: 'HNp',
    strong: 'H3068',
    language: 'hebrew',
    position: 2,
    gloss: 'the LORD',
  },
  {
    id: 'Ps.1.6.3',
    surfaceText: 'דֶּרֶךְ',
    lemma: 'דֶּרֶךְ',
    transliteration: 'dereḵ',
    lemmaTranslit: 'dereḵ',
    morph: 'HNcbsa',
    strong: 'H1870',
    language: 'hebrew',
    position: 3,
    gloss: 'the way of',
  },
  {
    id: 'Ps.1.6.4',
    surfaceText: 'צַדִּיקִים',
    lemma: 'צַדִּיק',
    transliteration: 'ṣaddîqîm',
    lemmaTranslit: 'ṣaddîq',
    morph: 'HNcmpa',
    strong: 'H6662',
    language: 'hebrew',
    position: 4,
    gloss: 'the righteous',
  },
];

export const psalm1_6_translation: VerseTranslation = {
  verseRef: 'Ps.1.6',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'For the LORD knows the way of the righteous, but the way of the wicked will perish',
      spans: [
        { tokenIds: ['Ps.1.6.0'], targetSlice: [0, 3], confidence: 'high' },
        { tokenIds: ['Ps.1.6.1'], targetSlice: [4, 9], confidence: 'high' },
        { tokenIds: ['Ps.1.6.2'], targetSlice: [10, 18], confidence: 'high' },
        { tokenIds: ['Ps.1.6.3'], targetSlice: [19, 29], confidence: 'high' },
        { tokenIds: ['Ps.1.6.4'], targetSlice: [30, 43], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'For the LORD watches over the way of the righteous, but the way of the wicked leads to destruction.',
      spans: [
        { tokenIds: ['Ps.1.6.0'], targetSlice: [0, 19], confidence: 'high' },
        { tokenIds: ['Ps.1.6.1'], targetSlice: [20, 39], confidence: 'high' },
        { tokenIds: ['Ps.1.6.2'], targetSlice: [40, 59], confidence: 'high' },
        { tokenIds: ['Ps.1.6.3'], targetSlice: [60, 79], confidence: 'high' },
        { tokenIds: ['Ps.1.6.4'], targetSlice: [80, 99], confidence: 'high' },
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

export const psalm1_6_verse = {
  ref: 'Ps.1.6',
  sourceTokens: psalm1_6_tokens,
  translation: psalm1_6_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Psalm 1:1-6 — The two ways
 * ──────────────────────────────────────────────────────────── */

export const psalm1_1_6_verses = [
  psalm1_1_verse,
  psalm1_2_verse,
  psalm1_3_verse,
  psalm1_4_verse,
  psalm1_5_verse,
  psalm1_6_verse,
];

export default psalm1_1_6_verses;
