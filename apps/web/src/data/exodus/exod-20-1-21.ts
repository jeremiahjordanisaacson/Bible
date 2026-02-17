// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 20:1 – And God spoke all these words
 * ──────────────────────────────────────────────────────────── */

export const exodus20_1_tokens: SourceToken[] = [
  {
    id: 'Exod.20.1.0',
    surfaceText: 'וַיְדַבֵּר',
    lemma: 'דָּבַר',
    transliteration: "wayḏabbēr",
    lemmaTranslit: "dāḇar",
    morph: 'HVqw3ms',
    strong: 'H1696',
    language: 'hebrew',
    position: 0,
    gloss: 'spoke',
  },
  {
    id: 'Exod.20.1.1',
    surfaceText: 'אֱלֹהִים',
    lemma: 'אֱלֹהִים',
    transliteration: "ʾĕlōhîm",
    lemmaTranslit: "ʾĕlōhîm",
    morph: 'HNcmpa',
    strong: 'H430',
    language: 'hebrew',
    position: 1,
    gloss: 'God',
  },
  {
    id: 'Exod.20.1.2',
    surfaceText: 'אֵת',
    lemma: 'אֵת',
    transliteration: "ʾēṯ",
    lemmaTranslit: "ʾēṯ",
    morph: 'HTo',
    strong: 'H853',
    language: 'hebrew',
    position: 2,
    gloss: '[obj]',
  },
  {
    id: 'Exod.20.1.3',
    surfaceText: 'כָּל',
    lemma: 'כֹּל',
    transliteration: 'kāl',
    lemmaTranslit: 'kōl',
    morph: 'HNcmsc',
    strong: 'H3605',
    language: 'hebrew',
    position: 3,
    gloss: 'all',
  },
  {
    id: 'Exod.20.1.4',
    surfaceText: 'הַדְּבָרִים',
    lemma: 'דָּבָר',
    transliteration: 'hadděḇārîm',
    lemmaTranslit: 'dāḇār',
    morph: 'HNcmpa',
    strong: 'H1697',
    language: 'hebrew',
    position: 4,
    gloss: 'words',
  },
  {
    id: 'Exod.20.1.5',
    surfaceText: 'הָאֵלֶּה',
    lemma: 'אֵלֶּה',
    transliteration: "hāʾēlleh",
    lemmaTranslit: "ʾēlleh",
    morph: 'HPdxp',
    strong: 'H428',
    language: 'hebrew',
    position: 5,
    gloss: 'these',
  },
];

export const exodus20_1_translation: VerseTranslation = {
  verseRef: 'Exod.20.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And God spoke all these words, saying:',
      spans: [
        { tokenIds: ['Exod.20.1.0'], targetSlice: [0, 13], confidence: 'high' },
        { tokenIds: ['Exod.20.1.1'], targetSlice: [4, 7], confidence: 'high' },
        { tokenIds: ['Exod.20.1.4'], targetSlice: [28, 33], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'And God spoke all these words, saying:',
      spans: [
        { tokenIds: ['Exod.20.1.0'], targetSlice: [0, 13], confidence: 'high' },
        { tokenIds: ['Exod.20.1.1'], targetSlice: [4, 7], confidence: 'high' },
        { tokenIds: ['Exod.20.1.4'], targetSlice: [28, 33], confidence: 'high' },
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

export const exodus20_1_verse = {
  ref: 'Exod.20.1',
  sourceTokens: exodus20_1_tokens,
  translation: exodus20_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 20:2 – I am the LORD your God who brought you out of Egypt
 * ──────────────────────────────────────────────────────────── */

export const exodus20_2_tokens: SourceToken[] = [
  {
    id: 'Exod.20.2.0',
    surfaceText: 'אָנֹכִי',
    lemma: 'אָנֹכִי',
    transliteration: "ʾānōḵî",
    lemmaTranslit: "ʾānōḵî",
    morph: 'HPp1cs',
    strong: 'H595',
    language: 'hebrew',
    position: 0,
    gloss: 'I',
  },
  {
    id: 'Exod.20.2.1',
    surfaceText: 'יְהוָה',
    lemma: 'יְהוָה',
    transliteration: 'yhwh',
    lemmaTranslit: 'yhwh',
    morph: 'HNp',
    strong: 'H3068',
    language: 'hebrew',
    position: 1,
    gloss: 'the LORD',
  },
  {
    id: 'Exod.20.2.2',
    surfaceText: 'אֱלֹהֶיךָ',
    lemma: 'אֱלֹהִים',
    transliteration: "ʾĕlōhêḵā",
    lemmaTranslit: "ʾĕlōhîm",
    morph: 'HNcmpc+Sp2ms',
    strong: 'H430',
    language: 'hebrew',
    position: 2,
    gloss: 'your God',
  },
  {
    id: 'Exod.20.2.3',
    surfaceText: 'אֲשֶׁר',
    lemma: 'אֲשֶׁר',
    transliteration: "ʾăšer",
    lemmaTranslit: "ʾăšer",
    morph: 'HAr',
    strong: 'H834',
    language: 'hebrew',
    position: 3,
    gloss: 'who',
  },
  {
    id: 'Exod.20.2.4',
    surfaceText: 'הוֹצֵאתִיךָ',
    lemma: 'יָצָא',
    transliteration: "hôṣēʾṯîḵā",
    lemmaTranslit: "yāṣāʾ",
    morph: 'HVhp1cs+Sp2ms',
    strong: 'H3318',
    language: 'hebrew',
    position: 4,
    gloss: 'brought you out',
  },
  {
    id: 'Exod.20.2.5',
    surfaceText: 'מֵאֶרֶץ',
    lemma: 'אֶרֶץ',
    transliteration: "mēʾereṣ",
    lemmaTranslit: "ʾereṣ",
    morph: 'HRd+Ncfsc',
    strong: 'H776',
    language: 'hebrew',
    position: 5,
    gloss: 'from the land of',
  },
  {
    id: 'Exod.20.2.6',
    surfaceText: 'מִצְרַיִם',
    lemma: 'מִצְרַיִם',
    transliteration: 'miṣrayim',
    lemmaTranslit: 'miṣrayim',
    morph: 'HNp',
    strong: 'H4714',
    language: 'hebrew',
    position: 6,
    gloss: 'Egypt',
  },
];

export const exodus20_2_translation: VerseTranslation = {
  verseRef: 'Exod.20.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'I am the LORD your God, who brought you out of the land of Egypt, out of the house of slavery.',
      spans: [
        { tokenIds: ['Exod.20.2.0'], targetSlice: [0, 1], confidence: 'high' },
        { tokenIds: ['Exod.20.2.1'], targetSlice: [9, 17], confidence: 'high' },
        { tokenIds: ['Exod.20.2.2'], targetSlice: [18, 27], confidence: 'high' },
        { tokenIds: ['Exod.20.2.4'], targetSlice: [33, 52], confidence: 'high' },
        { tokenIds: ['Exod.20.2.6'], targetSlice: [70, 75], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'I am the LORD your God, who brought you out of Egypt, out of the land of slavery.',
      spans: [
        { tokenIds: ['Exod.20.2.0'], targetSlice: [0, 1], confidence: 'high' },
        { tokenIds: ['Exod.20.2.1'], targetSlice: [9, 17], confidence: 'high' },
        { tokenIds: ['Exod.20.2.2'], targetSlice: [18, 27], confidence: 'high' },
        { tokenIds: ['Exod.20.2.4'], targetSlice: [33, 52], confidence: 'high' },
        { tokenIds: ['Exod.20.2.6'], targetSlice: [53, 58], confidence: 'high' },
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

export const exodus20_2_verse = {
  ref: 'Exod.20.2',
  sourceTokens: exodus20_2_tokens,
  translation: exodus20_2_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 20:3 – You shall have no other gods before me
 * ──────────────────────────────────────────────────────────── */

export const exodus20_3_tokens: SourceToken[] = [
  {
    id: 'Exod.20.3.0',
    surfaceText: 'לֹא',
    lemma: 'לֹא',
    transliteration: "lōʾ",
    lemmaTranslit: "lōʾ",
    morph: 'HTn',
    strong: 'H3808',
    language: 'hebrew',
    position: 0,
    gloss: 'not',
  },
  {
    id: 'Exod.20.3.1',
    surfaceText: 'יִהְיֶה',
    lemma: 'הָיָה',
    transliteration: 'yihyeh',
    lemmaTranslit: 'hāyāh',
    morph: 'HVqi3ms',
    strong: 'H1961',
    language: 'hebrew',
    position: 1,
    gloss: 'shall be',
  },
  {
    id: 'Exod.20.3.2',
    surfaceText: 'לְךָ',
    lemma: 'לְ',
    transliteration: 'lěḵā',
    lemmaTranslit: 'lě',
    morph: 'HRd+Sp2ms',
    strong: 'H0',
    language: 'hebrew',
    position: 2,
    gloss: 'to you',
  },
  {
    id: 'Exod.20.3.3',
    surfaceText: 'אֱלֹהִים',
    lemma: 'אֱלֹהִים',
    transliteration: "ʾĕlōhîm",
    lemmaTranslit: "ʾĕlōhîm",
    morph: 'HNcmpa',
    strong: 'H430',
    language: 'hebrew',
    position: 3,
    gloss: 'gods',
  },
  {
    id: 'Exod.20.3.4',
    surfaceText: 'אֲחֵרִים',
    lemma: 'אַחֵר',
    transliteration: "ʾăḥērîm",
    lemmaTranslit: "ʾaḥēr",
    morph: 'HAampa',
    strong: 'H312',
    language: 'hebrew',
    position: 4,
    gloss: 'other',
  },
  {
    id: 'Exod.20.3.5',
    surfaceText: 'עַל־פָּנָי',
    lemma: 'פָּנִים',
    transliteration: "ʿal-pānāy",
    lemmaTranslit: 'pānîm',
    morph: 'HRd+Ncmpc+Sp1cs',
    strong: 'H6440',
    language: 'hebrew',
    position: 5,
    gloss: 'before me',
  },
];

export const exodus20_3_translation: VerseTranslation = {
  verseRef: 'Exod.20.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'You shall have no other gods before me.',
      spans: [
        { tokenIds: ['Exod.20.3.0'], targetSlice: [15, 17], confidence: 'high' },
        { tokenIds: ['Exod.20.3.3'], targetSlice: [24, 28], confidence: 'high' },
        { tokenIds: ['Exod.20.3.4'], targetSlice: [18, 23], confidence: 'high' },
        { tokenIds: ['Exod.20.3.5'], targetSlice: [29, 38], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'You shall have no other gods before me.',
      spans: [
        { tokenIds: ['Exod.20.3.0'], targetSlice: [15, 17], confidence: 'high' },
        { tokenIds: ['Exod.20.3.3'], targetSlice: [24, 28], confidence: 'high' },
        { tokenIds: ['Exod.20.3.4'], targetSlice: [18, 23], confidence: 'high' },
        { tokenIds: ['Exod.20.3.5'], targetSlice: [29, 38], confidence: 'high' },
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

export const exodus20_3_verse = {
  ref: 'Exod.20.3',
  sourceTokens: exodus20_3_tokens,
  translation: exodus20_3_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 20:7 – You shall not take the name of the LORD in vain
 * ──────────────────────────────────────────────────────────── */

export const exodus20_7_tokens: SourceToken[] = [
  {
    id: 'Exod.20.7.0',
    surfaceText: 'לֹא',
    lemma: 'לֹא',
    transliteration: "lōʾ",
    lemmaTranslit: "lōʾ",
    morph: 'HTn',
    strong: 'H3808',
    language: 'hebrew',
    position: 0,
    gloss: 'not',
  },
  {
    id: 'Exod.20.7.1',
    surfaceText: 'תִשָּׂא',
    lemma: 'נָשָׂא',
    transliteration: "tiśśāʾ",
    lemmaTranslit: "nāśāʾ",
    morph: 'HVqi2ms',
    strong: 'H5375',
    language: 'hebrew',
    position: 1,
    gloss: 'take',
  },
  {
    id: 'Exod.20.7.2',
    surfaceText: 'אֶת־',
    lemma: 'אֵת',
    transliteration: "ʾeṯ",
    lemmaTranslit: "ʾēṯ",
    morph: 'HTo',
    strong: 'H853',
    language: 'hebrew',
    position: 2,
    gloss: '[obj]',
  },
  {
    id: 'Exod.20.7.3',
    surfaceText: 'שֵׁם',
    lemma: 'שֵׁם',
    transliteration: 'šēm',
    lemmaTranslit: 'šēm',
    morph: 'HNcmsc',
    strong: 'H8034',
    language: 'hebrew',
    position: 3,
    gloss: 'name',
  },
  {
    id: 'Exod.20.7.4',
    surfaceText: 'יְהוָה',
    lemma: 'יְהוָה',
    transliteration: 'yhwh',
    lemmaTranslit: 'yhwh',
    morph: 'HNp',
    strong: 'H3068',
    language: 'hebrew',
    position: 4,
    gloss: 'the LORD',
  },
  {
    id: 'Exod.20.7.5',
    surfaceText: 'אֱלֹהֶיךָ',
    lemma: 'אֱלֹהִים',
    transliteration: "ʾĕlōhêḵā",
    lemmaTranslit: "ʾĕlōhîm",
    morph: 'HNcmpc+Sp2ms',
    strong: 'H430',
    language: 'hebrew',
    position: 5,
    gloss: 'your God',
  },
  {
    id: 'Exod.20.7.6',
    surfaceText: 'לַשָּׁוְא',
    lemma: 'שָׁוְא',
    transliteration: "laššāwʾ",
    lemmaTranslit: "šāwʾ",
    morph: 'HRd+Ncmsa',
    strong: 'H7723',
    language: 'hebrew',
    position: 6,
    gloss: 'in vain',
  },
];

export const exodus20_7_translation: VerseTranslation = {
  verseRef: 'Exod.20.7',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'You shall not take the name of the LORD your God in vain.',
      spans: [
        { tokenIds: ['Exod.20.7.0'], targetSlice: [10, 13], confidence: 'high' },
        { tokenIds: ['Exod.20.7.1'], targetSlice: [14, 18], confidence: 'high' },
        { tokenIds: ['Exod.20.7.3'], targetSlice: [23, 27], confidence: 'high' },
        { tokenIds: ['Exod.20.7.4'], targetSlice: [35, 39], confidence: 'high' },
        { tokenIds: ['Exod.20.7.6'], targetSlice: [50, 57], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'You shall not misuse the name of the LORD your God.',
      spans: [
        { tokenIds: ['Exod.20.7.0'], targetSlice: [10, 13], confidence: 'high' },
        { tokenIds: ['Exod.20.7.1'], targetSlice: [14, 20], confidence: 'high' },
        { tokenIds: ['Exod.20.7.3'], targetSlice: [25, 29], confidence: 'high' },
        { tokenIds: ['Exod.20.7.4'], targetSlice: [37, 41], confidence: 'high' },
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

export const exodus20_7_verse = {
  ref: 'Exod.20.7',
  sourceTokens: exodus20_7_tokens,
  translation: exodus20_7_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 20:8 – Remember the Sabbath day to keep it holy
 * ──────────────────────────────────────────────────────────── */

export const exodus20_8_tokens: SourceToken[] = [
  {
    id: 'Exod.20.8.0',
    surfaceText: 'זָכוֹר',
    lemma: 'זָכוֹר',
    transliteration: 'zāḵôr',
    lemmaTranslit: 'zāḵôr',
    morph: 'HVqInfa',
    strong: 'H2142',
    language: 'hebrew',
    position: 0,
    gloss: 'remember',
  },
  {
    id: 'Exod.20.8.1',
    surfaceText: 'אֶת־',
    lemma: 'אֵת',
    transliteration: "ʾeṯ",
    lemmaTranslit: "ʾēṯ",
    morph: 'HTo',
    strong: 'H853',
    language: 'hebrew',
    position: 1,
    gloss: '[obj]',
  },
  {
    id: 'Exod.20.8.2',
    surfaceText: 'יוֹם',
    lemma: 'יוֹם',
    transliteration: 'yôm',
    lemmaTranslit: 'yôm',
    morph: 'HNcmsc',
    strong: 'H3117',
    language: 'hebrew',
    position: 2,
    gloss: 'day',
  },
  {
    id: 'Exod.20.8.3',
    surfaceText: 'הַשַּׁבָּת',
    lemma: 'שַׁבָּת',
    transliteration: 'haššabbāṯ',
    lemmaTranslit: 'šabbāṯ',
    morph: 'HTd+Ncfsa',
    strong: 'H7676',
    language: 'hebrew',
    position: 3,
    gloss: 'the Sabbath',
  },
  {
    id: 'Exod.20.8.4',
    surfaceText: 'לְקַדְּשׁוֹ',
    lemma: 'קָדַשׁ',
    transliteration: 'lěqadděšô',
    lemmaTranslit: 'qāḏaš',
    morph: 'HRd+VpInfc+Sp3ms',
    strong: 'H6942',
    language: 'hebrew',
    position: 4,
    gloss: 'to keep it holy',
  },
];

export const exodus20_8_translation: VerseTranslation = {
  verseRef: 'Exod.20.8',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Remember the Sabbath day, to keep it holy.',
      spans: [
        { tokenIds: ['Exod.20.8.0'], targetSlice: [0, 8], confidence: 'high' },
        { tokenIds: ['Exod.20.8.2'], targetSlice: [21, 24], confidence: 'high' },
        { tokenIds: ['Exod.20.8.3'], targetSlice: [13, 20], confidence: 'high' },
        { tokenIds: ['Exod.20.8.4'], targetSlice: [26, 42], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Remember the Sabbath day by keeping it holy.',
      spans: [
        { tokenIds: ['Exod.20.8.0'], targetSlice: [0, 8], confidence: 'high' },
        { tokenIds: ['Exod.20.8.2'], targetSlice: [21, 24], confidence: 'high' },
        { tokenIds: ['Exod.20.8.3'], targetSlice: [13, 20], confidence: 'high' },
        { tokenIds: ['Exod.20.8.4'], targetSlice: [28, 44], confidence: 'high' },
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

export const exodus20_8_verse = {
  ref: 'Exod.20.8',
  sourceTokens: exodus20_8_tokens,
  translation: exodus20_8_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 20:12 – Honor your father and your mother
 * ──────────────────────────────────────────────────────────── */

export const exodus20_12_tokens: SourceToken[] = [
  {
    id: 'Exod.20.12.0',
    surfaceText: 'כַּבֵּד',
    lemma: 'כָּבֵד',
    transliteration: 'kabbēḏ',
    lemmaTranslit: 'kāḇēḏ',
    morph: 'HVpImv2ms',
    strong: 'H3513',
    language: 'hebrew',
    position: 0,
    gloss: 'honor',
  },
  {
    id: 'Exod.20.12.1',
    surfaceText: 'אֶת־',
    lemma: 'אֵת',
    transliteration: "ʾeṯ",
    lemmaTranslit: "ʾēṯ",
    morph: 'HTo',
    strong: 'H853',
    language: 'hebrew',
    position: 1,
    gloss: '[obj]',
  },
  {
    id: 'Exod.20.12.2',
    surfaceText: 'אָבִיךָ',
    lemma: 'אָב',
    transliteration: "ʾāḇîḵā",
    lemmaTranslit: "ʾāḇ",
    morph: 'HNcmsc+Sp2ms',
    strong: 'H1',
    language: 'hebrew',
    position: 2,
    gloss: 'your father',
  },
  {
    id: 'Exod.20.12.3',
    surfaceText: 'וְאֶת־',
    lemma: 'וְ',
    transliteration: "wěʾeṯ",
    lemmaTranslit: 'wě',
    morph: 'HC+To',
    strong: 'H853',
    language: 'hebrew',
    position: 3,
    gloss: 'and',
  },
  {
    id: 'Exod.20.12.4',
    surfaceText: 'אִמֶּךָ',
    lemma: 'אֵם',
    transliteration: "ʾimměḵā",
    lemmaTranslit: "ʾēm",
    morph: 'HNcfsc+Sp2ms',
    strong: 'H517',
    language: 'hebrew',
    position: 4,
    gloss: 'your mother',
  },
  {
    id: 'Exod.20.12.5',
    surfaceText: 'עַל',
    lemma: 'עַל',
    transliteration: "ʿal",
    lemmaTranslit: "ʿal",
    morph: 'HRd',
    strong: 'H5921',
    language: 'hebrew',
    position: 5,
    gloss: 'upon',
  },
  {
    id: 'Exod.20.12.6',
    surfaceText: 'הָאֲדָמָה',
    lemma: 'אֲדָמָה',
    transliteration: "hāʾăḏāmāh",
    lemmaTranslit: "ʾăḏāmāh",
    morph: 'HTd+Ncfsa',
    strong: 'H127',
    language: 'hebrew',
    position: 6,
    gloss: 'the ground',
  },
];

export const exodus20_12_translation: VerseTranslation = {
  verseRef: 'Exod.20.12',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Honor your father and your mother, that your days may be long upon the land which the LORD your God is giving you.',
      spans: [
        { tokenIds: ['Exod.20.12.0'], targetSlice: [0, 5], confidence: 'high' },
        { tokenIds: ['Exod.20.12.2'], targetSlice: [6, 17], confidence: 'high' },
        { tokenIds: ['Exod.20.12.4'], targetSlice: [22, 33], confidence: 'high' },
        { tokenIds: ['Exod.20.12.6'], targetSlice: [68, 76], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Honor your father and your mother, so that you may live long in the land the LORD your God is giving you.',
      spans: [
        { tokenIds: ['Exod.20.12.0'], targetSlice: [0, 5], confidence: 'high' },
        { tokenIds: ['Exod.20.12.2'], targetSlice: [6, 17], confidence: 'high' },
        { tokenIds: ['Exod.20.12.4'], targetSlice: [22, 33], confidence: 'high' },
        { tokenIds: ['Exod.20.12.6'], targetSlice: [73, 77], confidence: 'high' },
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

export const exodus20_12_verse = {
  ref: 'Exod.20.12',
  sourceTokens: exodus20_12_tokens,
  translation: exodus20_12_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 20:13 – You shall not murder
 * ──────────────────────────────────────────────────────────── */

export const exodus20_13_tokens: SourceToken[] = [
  {
    id: 'Exod.20.13.0',
    surfaceText: 'לֹא',
    lemma: 'לֹא',
    transliteration: "lōʾ",
    lemmaTranslit: "lōʾ",
    morph: 'HTn',
    strong: 'H3808',
    language: 'hebrew',
    position: 0,
    gloss: 'not',
  },
  {
    id: 'Exod.20.13.1',
    surfaceText: 'תִּרְצָח',
    lemma: 'רָצַח',
    transliteration: 'tirṣāḥ',
    lemmaTranslit: 'rāṣaḥ',
    morph: 'HVqi2ms',
    strong: 'H7523',
    language: 'hebrew',
    position: 1,
    gloss: 'murder',
  },
];

export const exodus20_13_translation: VerseTranslation = {
  verseRef: 'Exod.20.13',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'You shall not murder.',
      spans: [
        { tokenIds: ['Exod.20.13.0'], targetSlice: [10, 13], confidence: 'high' },
        { tokenIds: ['Exod.20.13.1'], targetSlice: [14, 20], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'You shall not murder.',
      spans: [
        { tokenIds: ['Exod.20.13.0'], targetSlice: [10, 13], confidence: 'high' },
        { tokenIds: ['Exod.20.13.1'], targetSlice: [14, 20], confidence: 'high' },
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

export const exodus20_13_verse = {
  ref: 'Exod.20.13',
  sourceTokens: exodus20_13_tokens,
  translation: exodus20_13_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Collected export
 * ──────────────────────────────────────────────────────────── */

export const exodus20_1_21_verses = [
  exodus20_1_verse,
  exodus20_2_verse,
  exodus20_3_verse,
  exodus20_7_verse,
  exodus20_8_verse,
  exodus20_12_verse,
  exodus20_13_verse,
];

export default exodus20_1_21_verses;
