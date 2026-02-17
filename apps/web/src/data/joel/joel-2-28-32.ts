// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 2:28 – I will pour out my Spirit on all flesh
 * ──────────────────────────────────────────────────────────── */

export const joel2_28_tokens: SourceToken[] = [
  {
    id: 'Joel.2.28.0',
    surfaceText: 'אֶשְׁפּוֹךְ',
    lemma: 'שָׁפַךְ',
    transliteration: "ʾešpôḵ",
    lemmaTranslit: 'šāp̄aḵ',
    morph: 'HVqI1cs',
    strong: 'H8210',
    language: 'hebrew',
    position: 0,
    gloss: 'I will pour out',
  },
  {
    id: 'Joel.2.28.1',
    surfaceText: 'אֶת',
    lemma: 'אֵת',
    transliteration: "ʾeṯ",
    lemmaTranslit: "ʾēṯ",
    morph: 'HTo',
    strong: 'H853',
    language: 'hebrew',
    position: 1,
    gloss: 'direct-object',
  },
  {
    id: 'Joel.2.28.2',
    surfaceText: 'רוּחִי',
    lemma: 'רוּחַ',
    transliteration: 'rûḥî',
    lemmaTranslit: 'rûaḥ',
    morph: 'HNcbsc+Sp1cs',
    strong: 'H7307',
    language: 'hebrew',
    position: 2,
    gloss: 'my Spirit',
  },
  {
    id: 'Joel.2.28.3',
    surfaceText: 'עַל',
    lemma: 'עַל',
    transliteration: "ʿal",
    lemmaTranslit: "ʿal",
    morph: 'HR',
    strong: 'H5921',
    language: 'hebrew',
    position: 3,
    gloss: 'on',
  },
  {
    id: 'Joel.2.28.4',
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
    id: 'Joel.2.28.5',
    surfaceText: 'בָּשָׂר',
    lemma: 'בָּשָׂר',
    transliteration: 'bāśār',
    lemmaTranslit: 'bāśār',
    morph: 'HNcmsa',
    strong: 'H1320',
    language: 'hebrew',
    position: 5,
    gloss: 'flesh',
  },
];

export const joel2_28_translation: VerseTranslation = {
  verseRef: 'Joel.2.28',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'I will pour out my Spirit on all flesh; your sons and daughters shall prophesy',
      spans: [
        { tokenIds: ['Joel.2.28.0'], targetSlice: [0, 15], confidence: 'high' },
        { tokenIds: ['Joel.2.28.1'], targetSlice: [16, 29], confidence: 'high' },
        { tokenIds: ['Joel.2.28.2'], targetSlice: [30, 39], confidence: 'high' },
        { tokenIds: ['Joel.2.28.3'], targetSlice: [40, 42], confidence: 'high' },
        { tokenIds: ['Joel.2.28.4'], targetSlice: [43, 46], confidence: 'high' },
        { tokenIds: ['Joel.2.28.5'], targetSlice: [47, 52], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'I will pour out my Spirit on all people. Your sons and daughters will prophesy.',
      spans: [
        { tokenIds: ['Joel.2.28.0'], targetSlice: [0, 13], confidence: 'high' },
        { tokenIds: ['Joel.2.28.1'], targetSlice: [14, 27], confidence: 'high' },
        { tokenIds: ['Joel.2.28.2'], targetSlice: [28, 41], confidence: 'high' },
        { tokenIds: ['Joel.2.28.3'], targetSlice: [42, 55], confidence: 'high' },
        { tokenIds: ['Joel.2.28.4'], targetSlice: [56, 69], confidence: 'high' },
        { tokenIds: ['Joel.2.28.5'], targetSlice: [70, 79], confidence: 'high' },
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

export const joel2_28_verse = {
  ref: 'Joel.2.28',
  sourceTokens: joel2_28_tokens,
  translation: joel2_28_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 2:29 – Even on servants I will pour out my Spirit
 * ──────────────────────────────────────────────────────────── */

export const joel2_29_tokens: SourceToken[] = [
  {
    id: 'Joel.2.29.0',
    surfaceText: 'וְגַם',
    lemma: 'גַּם',
    transliteration: 'wěgam',
    lemmaTranslit: 'gam',
    morph: 'HC+HD',
    strong: 'H1571',
    language: 'hebrew',
    position: 0,
    gloss: 'and also',
  },
  {
    id: 'Joel.2.29.1',
    surfaceText: 'עַל',
    lemma: 'עַל',
    transliteration: "ʿal",
    lemmaTranslit: "ʿal",
    morph: 'HR',
    strong: 'H5921',
    language: 'hebrew',
    position: 1,
    gloss: 'on',
  },
  {
    id: 'Joel.2.29.2',
    surfaceText: 'הָעֲבָדִים',
    lemma: 'עֶבֶד',
    transliteration: "hāʿăḇāḏîm",
    lemmaTranslit: "ʿeḇeḏ",
    morph: 'HTd+Ncmpa',
    strong: 'H5650',
    language: 'hebrew',
    position: 2,
    gloss: 'the servants',
  },
  {
    id: 'Joel.2.29.3',
    surfaceText: 'וְעַל',
    lemma: 'עַל',
    transliteration: "wěʿal",
    lemmaTranslit: "ʿal",
    morph: 'HC+HR',
    strong: 'H5921',
    language: 'hebrew',
    position: 3,
    gloss: 'and on',
  },
  {
    id: 'Joel.2.29.4',
    surfaceText: 'הַשְּׁפָחוֹת',
    lemma: 'שִׁפְחָה',
    transliteration: 'haššěp̄āḥôṯ',
    lemmaTranslit: 'šip̄ḥāh',
    morph: 'HTd+Ncfpa',
    strong: 'H8198',
    language: 'hebrew',
    position: 4,
    gloss: 'the maidservants',
  },
  {
    id: 'Joel.2.29.5',
    surfaceText: 'אֶשְׁפּוֹךְ',
    lemma: 'שָׁפַךְ',
    transliteration: "ʾešpôḵ",
    lemmaTranslit: 'šāp̄aḵ',
    morph: 'HVqI1cs',
    strong: 'H8210',
    language: 'hebrew',
    position: 5,
    gloss: 'I will pour out',
  },
  {
    id: 'Joel.2.29.6',
    surfaceText: 'רוּחִי',
    lemma: 'רוּחַ',
    transliteration: 'rûḥî',
    lemmaTranslit: 'rûaḥ',
    morph: 'HNcbsc+Sp1cs',
    strong: 'H7307',
    language: 'hebrew',
    position: 6,
    gloss: 'my Spirit',
  },
];

export const joel2_29_translation: VerseTranslation = {
  verseRef: 'Joel.2.29',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Even on the male and female servants in those days I will pour out my Spirit',
      spans: [
        { tokenIds: ['Joel.2.29.0'], targetSlice: [0, 8], confidence: 'high' },
        { tokenIds: ['Joel.2.29.1'], targetSlice: [9, 11], confidence: 'high' },
        { tokenIds: ['Joel.2.29.2'], targetSlice: [12, 24], confidence: 'high' },
        { tokenIds: ['Joel.2.29.3'], targetSlice: [25, 31], confidence: 'high' },
        { tokenIds: ['Joel.2.29.4'], targetSlice: [32, 48], confidence: 'high' },
        { tokenIds: ['Joel.2.29.5'], targetSlice: [49, 64], confidence: 'high' },
        { tokenIds: ['Joel.2.29.6'], targetSlice: [65, 74], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Even on my servants, both men and women, I will pour out my Spirit in those days.',
      spans: [
        { tokenIds: ['Joel.2.29.0'], targetSlice: [0, 11], confidence: 'high' },
        { tokenIds: ['Joel.2.29.1'], targetSlice: [12, 23], confidence: 'high' },
        { tokenIds: ['Joel.2.29.2'], targetSlice: [24, 35], confidence: 'high' },
        { tokenIds: ['Joel.2.29.3'], targetSlice: [36, 47], confidence: 'high' },
        { tokenIds: ['Joel.2.29.4'], targetSlice: [48, 59], confidence: 'high' },
        { tokenIds: ['Joel.2.29.5'], targetSlice: [60, 71], confidence: 'high' },
        { tokenIds: ['Joel.2.29.6'], targetSlice: [72, 81], confidence: 'high' },
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

export const joel2_29_verse = {
  ref: 'Joel.2.29',
  sourceTokens: joel2_29_tokens,
  translation: joel2_29_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 2:30 – Wonders in the heavens and on the earth
 * ──────────────────────────────────────────────────────────── */

export const joel2_30_tokens: SourceToken[] = [
  {
    id: 'Joel.2.30.0',
    surfaceText: 'וְנָתַתִּי',
    lemma: 'נָתַן',
    transliteration: 'wěnāṯattî',
    lemmaTranslit: 'nāṯan',
    morph: 'HC+Vqp1cs',
    strong: 'H5414',
    language: 'hebrew',
    position: 0,
    gloss: 'and I will show',
  },
  {
    id: 'Joel.2.30.1',
    surfaceText: 'מוֹפְתִים',
    lemma: 'מוֹפֵת',
    transliteration: 'môp̄ěṯîm',
    lemmaTranslit: 'môp̄ēṯ',
    morph: 'HNcmpa',
    strong: 'H4159',
    language: 'hebrew',
    position: 1,
    gloss: 'wonders',
  },
  {
    id: 'Joel.2.30.2',
    surfaceText: 'בַּשָּׁמַיִם',
    lemma: 'שָׁמַיִם',
    transliteration: 'baššāmayim',
    lemmaTranslit: 'šāmayim',
    morph: 'HR+Ncmpa',
    strong: 'H8064',
    language: 'hebrew',
    position: 2,
    gloss: 'in the heavens',
  },
  {
    id: 'Joel.2.30.3',
    surfaceText: 'וּבָאָרֶץ',
    lemma: 'אֶרֶץ',
    transliteration: "ûḇāʾāreṣ",
    lemmaTranslit: "ʾereṣ",
    morph: 'HC+HR+Ncfsa',
    strong: 'H776',
    language: 'hebrew',
    position: 3,
    gloss: 'and on the earth',
  },
  {
    id: 'Joel.2.30.4',
    surfaceText: 'דָּם',
    lemma: 'דָּם',
    transliteration: 'dām',
    lemmaTranslit: 'dām',
    morph: 'HNcmsa',
    strong: 'H1818',
    language: 'hebrew',
    position: 4,
    gloss: 'blood',
  },
  {
    id: 'Joel.2.30.5',
    surfaceText: 'וָאֵשׁ',
    lemma: 'אֵשׁ',
    transliteration: "wāʾēš",
    lemmaTranslit: "ʾēš",
    morph: 'HC+Ncbsa',
    strong: 'H784',
    language: 'hebrew',
    position: 5,
    gloss: 'and fire',
  },
];

export const joel2_30_translation: VerseTranslation = {
  verseRef: 'Joel.2.30',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And I will show wonders in the heavens and on the earth: blood and fire and columns of smoke',
      spans: [
        { tokenIds: ['Joel.2.30.0'], targetSlice: [0, 15], confidence: 'high' },
        { tokenIds: ['Joel.2.30.1'], targetSlice: [16, 23], confidence: 'high' },
        { tokenIds: ['Joel.2.30.2'], targetSlice: [24, 38], confidence: 'high' },
        { tokenIds: ['Joel.2.30.3'], targetSlice: [39, 55], confidence: 'high' },
        { tokenIds: ['Joel.2.30.4'], targetSlice: [56, 61], confidence: 'high' },
        { tokenIds: ['Joel.2.30.5'], targetSlice: [62, 70], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'I will show wonders in the heavens and on the earth, blood and fire and billows of smoke.',
      spans: [
        { tokenIds: ['Joel.2.30.0'], targetSlice: [0, 14], confidence: 'high' },
        { tokenIds: ['Joel.2.30.1'], targetSlice: [15, 29], confidence: 'high' },
        { tokenIds: ['Joel.2.30.2'], targetSlice: [30, 44], confidence: 'high' },
        { tokenIds: ['Joel.2.30.3'], targetSlice: [45, 59], confidence: 'high' },
        { tokenIds: ['Joel.2.30.4'], targetSlice: [60, 74], confidence: 'high' },
        { tokenIds: ['Joel.2.30.5'], targetSlice: [75, 89], confidence: 'high' },
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

export const joel2_30_verse = {
  ref: 'Joel.2.30',
  sourceTokens: joel2_30_tokens,
  translation: joel2_30_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 2:31 – The sun shall be turned to darkness
 * ──────────────────────────────────────────────────────────── */

export const joel2_31_tokens: SourceToken[] = [
  {
    id: 'Joel.2.31.0',
    surfaceText: 'הַשֶּׁמֶשׁ',
    lemma: 'שֶׁמֶשׁ',
    transliteration: 'haššemeš',
    lemmaTranslit: 'šemeš',
    morph: 'HTd+Ncbsa',
    strong: 'H8121',
    language: 'hebrew',
    position: 0,
    gloss: 'the sun',
  },
  {
    id: 'Joel.2.31.1',
    surfaceText: 'יֵהָפֵךְ',
    lemma: 'הָפַךְ',
    transliteration: 'yēhāp̄ēḵ',
    lemmaTranslit: 'hāp̄aḵ',
    morph: 'HVNpI3ms',
    strong: 'H2015',
    language: 'hebrew',
    position: 1,
    gloss: 'shall be turned',
  },
  {
    id: 'Joel.2.31.2',
    surfaceText: 'לְחֹשֶׁךְ',
    lemma: 'חֹשֶׁךְ',
    transliteration: 'lěḥōšeḵ',
    lemmaTranslit: 'ḥōšeḵ',
    morph: 'HR+Ncmsa',
    strong: 'H2822',
    language: 'hebrew',
    position: 2,
    gloss: 'to darkness',
  },
  {
    id: 'Joel.2.31.3',
    surfaceText: 'וְהַיָּרֵחַ',
    lemma: 'יָרֵחַ',
    transliteration: 'wěhayyārēaḥ',
    lemmaTranslit: 'yārēaḥ',
    morph: 'HC+HTd+Ncmsa',
    strong: 'H3394',
    language: 'hebrew',
    position: 3,
    gloss: 'and the moon',
  },
  {
    id: 'Joel.2.31.4',
    surfaceText: 'לְדָם',
    lemma: 'דָּם',
    transliteration: 'lěḏām',
    lemmaTranslit: 'dām',
    morph: 'HR+Ncmsa',
    strong: 'H1818',
    language: 'hebrew',
    position: 4,
    gloss: 'to blood',
  },
];

export const joel2_31_translation: VerseTranslation = {
  verseRef: 'Joel.2.31',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'The sun shall be turned to darkness and the moon to blood, before the great and awesome day of the LORD comes',
      spans: [
        { tokenIds: ['Joel.2.31.0'], targetSlice: [0, 7], confidence: 'high' },
        { tokenIds: ['Joel.2.31.1'], targetSlice: [8, 23], confidence: 'high' },
        { tokenIds: ['Joel.2.31.2'], targetSlice: [24, 35], confidence: 'high' },
        { tokenIds: ['Joel.2.31.3'], targetSlice: [36, 48], confidence: 'high' },
        { tokenIds: ['Joel.2.31.4'], targetSlice: [49, 57], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'The sun will be turned to darkness and the moon to blood before the coming of the great and dreadful day of the LORD.',
      spans: [
        { tokenIds: ['Joel.2.31.0'], targetSlice: [0, 23], confidence: 'high' },
        { tokenIds: ['Joel.2.31.1'], targetSlice: [24, 47], confidence: 'high' },
        { tokenIds: ['Joel.2.31.2'], targetSlice: [48, 71], confidence: 'high' },
        { tokenIds: ['Joel.2.31.3'], targetSlice: [72, 95], confidence: 'high' },
        { tokenIds: ['Joel.2.31.4'], targetSlice: [96, 117], confidence: 'high' },
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

export const joel2_31_verse = {
  ref: 'Joel.2.31',
  sourceTokens: joel2_31_tokens,
  translation: joel2_31_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 2:32 – Everyone who calls on the name of the LORD shall be saved
 * ──────────────────────────────────────────────────────────── */

export const joel2_32_tokens: SourceToken[] = [
  {
    id: 'Joel.2.32.0',
    surfaceText: 'וְהָיָה',
    lemma: 'הָיָה',
    transliteration: 'wěhāyāh',
    lemmaTranslit: 'hāyāh',
    morph: 'HC+Vqp3ms',
    strong: 'H1961',
    language: 'hebrew',
    position: 0,
    gloss: 'and it shall be',
  },
  {
    id: 'Joel.2.32.1',
    surfaceText: 'כֹּל',
    lemma: 'כֹּל',
    transliteration: 'kōl',
    lemmaTranslit: 'kōl',
    morph: 'HNcmsc',
    strong: 'H3605',
    language: 'hebrew',
    position: 1,
    gloss: 'everyone',
  },
  {
    id: 'Joel.2.32.2',
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
    id: 'Joel.2.32.3',
    surfaceText: 'יִקְרָא',
    lemma: 'קָרָא',
    transliteration: "yiqrāʾ",
    lemmaTranslit: "qārāʾ",
    morph: 'HVqI3ms',
    strong: 'H7121',
    language: 'hebrew',
    position: 3,
    gloss: 'calls',
  },
  {
    id: 'Joel.2.32.4',
    surfaceText: 'בְּשֵׁם',
    lemma: 'שֵׁם',
    transliteration: 'běšēm',
    lemmaTranslit: 'šēm',
    morph: 'HR+Ncmsc',
    strong: 'H8034',
    language: 'hebrew',
    position: 4,
    gloss: 'on the name of',
  },
  {
    id: 'Joel.2.32.5',
    surfaceText: 'יְהוָה',
    lemma: 'יְהוָה',
    transliteration: 'yhwh',
    lemmaTranslit: 'yhwh',
    morph: 'HNp',
    strong: 'H3068',
    language: 'hebrew',
    position: 5,
    gloss: 'the LORD',
  },
  {
    id: 'Joel.2.32.6',
    surfaceText: 'יִמָּלֵט',
    lemma: 'מָלַט',
    transliteration: 'yimmālēṭ',
    lemmaTranslit: 'mālaṭ',
    morph: 'HVNpI3ms',
    strong: 'H4422',
    language: 'hebrew',
    position: 6,
    gloss: 'shall be saved',
  },
];

export const joel2_32_translation: VerseTranslation = {
  verseRef: 'Joel.2.32',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And it shall come to pass that everyone who calls on the name of the LORD shall be saved',
      spans: [
        { tokenIds: ['Joel.2.32.0'], targetSlice: [0, 15], confidence: 'high' },
        { tokenIds: ['Joel.2.32.1'], targetSlice: [16, 24], confidence: 'high' },
        { tokenIds: ['Joel.2.32.2'], targetSlice: [25, 28], confidence: 'high' },
        { tokenIds: ['Joel.2.32.3'], targetSlice: [29, 34], confidence: 'high' },
        { tokenIds: ['Joel.2.32.4'], targetSlice: [35, 49], confidence: 'high' },
        { tokenIds: ['Joel.2.32.5'], targetSlice: [50, 58], confidence: 'high' },
        { tokenIds: ['Joel.2.32.6'], targetSlice: [59, 73], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'And everyone who calls on the name of the LORD will be saved.',
      spans: [
        { tokenIds: ['Joel.2.32.0'], targetSlice: [0, 8], confidence: 'high' },
        { tokenIds: ['Joel.2.32.1'], targetSlice: [9, 17], confidence: 'high' },
        { tokenIds: ['Joel.2.32.2'], targetSlice: [18, 26], confidence: 'high' },
        { tokenIds: ['Joel.2.32.3'], targetSlice: [27, 35], confidence: 'high' },
        { tokenIds: ['Joel.2.32.4'], targetSlice: [36, 44], confidence: 'high' },
        { tokenIds: ['Joel.2.32.5'], targetSlice: [45, 53], confidence: 'high' },
        { tokenIds: ['Joel.2.32.6'], targetSlice: [54, 61], confidence: 'high' },
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

export const joel2_32_verse = {
  ref: 'Joel.2.32',
  sourceTokens: joel2_32_tokens,
  translation: joel2_32_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Joel 2:28-32 — Spirit poured out
 * ──────────────────────────────────────────────────────────── */

export const joel2_28_32_verses = [
  joel2_28_verse,
  joel2_29_verse,
  joel2_30_verse,
  joel2_31_verse,
  joel2_32_verse,
];

export default joel2_28_32_verses;
