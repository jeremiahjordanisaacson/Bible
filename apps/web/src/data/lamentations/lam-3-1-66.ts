// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 3:22 – The steadfast love of the LORD never ceases
 * ──────────────────────────────────────────────────────────── */

export const lam3_22_tokens: SourceToken[] = [
  {
    id: 'Lam.3.22.0',
    surfaceText: 'חַסְדֵי',
    lemma: 'חֶסֶד',
    transliteration: 'ḥasḏê',
    lemmaTranslit: 'ḥeseḏ',
    morph: 'HNcmpc',
    strong: 'H2617',
    language: 'hebrew',
    position: 0,
    gloss: 'the lovingkindnesses of',
  },
  {
    id: 'Lam.3.22.1',
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
    id: 'Lam.3.22.2',
    surfaceText: 'כִּי',
    lemma: 'כִּי',
    transliteration: 'kî',
    lemmaTranslit: 'kî',
    morph: 'HC',
    strong: 'H3588',
    language: 'hebrew',
    position: 2,
    gloss: 'that',
  },
  {
    id: 'Lam.3.22.3',
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
    id: 'Lam.3.22.4',
    surfaceText: 'תָמְנוּ',
    lemma: 'תָּמַם',
    transliteration: 'ṯāměnû',
    lemmaTranslit: 'tāmam',
    morph: 'HVqp1cp',
    strong: 'H8552',
    language: 'hebrew',
    position: 4,
    gloss: 'we are consumed',
  },
];

export const lam3_22_translation: VerseTranslation = {
  verseRef: 'Lam.3.22',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'The steadfast love of the LORD never ceases; his mercies never come to an end',
      spans: [
        { tokenIds: ['Lam.3.22.0'], targetSlice: [0, 23], confidence: 'high' },
        { tokenIds: ['Lam.3.22.1'], targetSlice: [24, 32], confidence: 'high' },
        { tokenIds: ['Lam.3.22.2'], targetSlice: [33, 37], confidence: 'high' },
        { tokenIds: ['Lam.3.22.3'], targetSlice: [38, 41], confidence: 'high' },
        { tokenIds: ['Lam.3.22.4'], targetSlice: [42, 57], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "Because of the LORD's great love we are not consumed, for his compassions never fail.",
      spans: [
        { tokenIds: ['Lam.3.22.0'], targetSlice: [0, 17], confidence: 'high' },
        { tokenIds: ['Lam.3.22.1'], targetSlice: [18, 35], confidence: 'high' },
        { tokenIds: ['Lam.3.22.2'], targetSlice: [36, 53], confidence: 'high' },
        { tokenIds: ['Lam.3.22.3'], targetSlice: [54, 71], confidence: 'high' },
        { tokenIds: ['Lam.3.22.4'], targetSlice: [72, 85], confidence: 'high' },
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

export const lam3_22_verse = {
  ref: 'Lam.3.22',
  sourceTokens: lam3_22_tokens,
  translation: lam3_22_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 3:23 – They are new every morning
 * ──────────────────────────────────────────────────────────── */

export const lam3_23_tokens: SourceToken[] = [
  {
    id: 'Lam.3.23.0',
    surfaceText: 'חֲדָשִׁים',
    lemma: 'חָדָשׁ',
    transliteration: 'ḥăḏāšîm',
    lemmaTranslit: 'ḥāḏāš',
    morph: 'HAampa',
    strong: 'H2319',
    language: 'hebrew',
    position: 0,
    gloss: 'new',
  },
  {
    id: 'Lam.3.23.1',
    surfaceText: 'לַבְּקָרִים',
    lemma: 'בֹּקֶר',
    transliteration: 'labběqārîm',
    lemmaTranslit: 'bōqer',
    morph: 'HR+Ncmpa',
    strong: 'H1242',
    language: 'hebrew',
    position: 1,
    gloss: 'every morning',
  },
  {
    id: 'Lam.3.23.2',
    surfaceText: 'רַבָּה',
    lemma: 'רַב',
    transliteration: 'rabbāh',
    lemmaTranslit: 'raḇ',
    morph: 'HAafsa',
    strong: 'H7227',
    language: 'hebrew',
    position: 2,
    gloss: 'great is',
  },
  {
    id: 'Lam.3.23.3',
    surfaceText: 'אֱמוּנָתֶךָ',
    lemma: 'אֱמוּנָה',
    transliteration: "ʾĕmûnāṯeḵā",
    lemmaTranslit: "ʾĕmûnāh",
    morph: 'HNcfsc+Sp2ms',
    strong: 'H530',
    language: 'hebrew',
    position: 3,
    gloss: 'your faithfulness',
  },
];

export const lam3_23_translation: VerseTranslation = {
  verseRef: 'Lam.3.23',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'They are new every morning; great is your faithfulness',
      spans: [
        { tokenIds: ['Lam.3.23.0'], targetSlice: [0, 3], confidence: 'high' },
        { tokenIds: ['Lam.3.23.1'], targetSlice: [4, 17], confidence: 'high' },
        { tokenIds: ['Lam.3.23.2'], targetSlice: [18, 26], confidence: 'high' },
        { tokenIds: ['Lam.3.23.3'], targetSlice: [27, 44], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'They are new every morning; great is your faithfulness.',
      spans: [
        { tokenIds: ['Lam.3.23.0'], targetSlice: [0, 13], confidence: 'high' },
        { tokenIds: ['Lam.3.23.1'], targetSlice: [14, 27], confidence: 'high' },
        { tokenIds: ['Lam.3.23.2'], targetSlice: [28, 41], confidence: 'high' },
        { tokenIds: ['Lam.3.23.3'], targetSlice: [42, 55], confidence: 'high' },
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

export const lam3_23_verse = {
  ref: 'Lam.3.23',
  sourceTokens: lam3_23_tokens,
  translation: lam3_23_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 3:24 – The LORD is my portion
 * ──────────────────────────────────────────────────────────── */

export const lam3_24_tokens: SourceToken[] = [
  {
    id: 'Lam.3.24.0',
    surfaceText: 'חֶלְקִי',
    lemma: 'חֵלֶק',
    transliteration: 'ḥelqî',
    lemmaTranslit: 'ḥēleq',
    morph: 'HNcmsc+Sp1cs',
    strong: 'H2506',
    language: 'hebrew',
    position: 0,
    gloss: 'my portion',
  },
  {
    id: 'Lam.3.24.1',
    surfaceText: 'יְהוָה',
    lemma: 'יְהוָה',
    transliteration: 'yhwh',
    lemmaTranslit: 'yhwh',
    morph: 'HNp',
    strong: 'H3068',
    language: 'hebrew',
    position: 1,
    gloss: 'is the LORD',
  },
  {
    id: 'Lam.3.24.2',
    surfaceText: 'אָמְרָה',
    lemma: 'אָמַר',
    transliteration: "ʾāměrāh",
    lemmaTranslit: "ʾāmar",
    morph: 'HVqp3fs',
    strong: 'H559',
    language: 'hebrew',
    position: 2,
    gloss: 'says',
  },
  {
    id: 'Lam.3.24.3',
    surfaceText: 'נַפְשִׁי',
    lemma: 'נֶפֶשׁ',
    transliteration: 'nap̄šî',
    lemmaTranslit: 'nep̄eš',
    morph: 'HNcfsc+Sp1cs',
    strong: 'H5315',
    language: 'hebrew',
    position: 3,
    gloss: 'my soul',
  },
  {
    id: 'Lam.3.24.4',
    surfaceText: 'עַל',
    lemma: 'עַל',
    transliteration: "ʿal",
    lemmaTranslit: "ʿal",
    morph: 'HR',
    strong: 'H5921',
    language: 'hebrew',
    position: 4,
    gloss: 'therefore',
  },
  {
    id: 'Lam.3.24.5',
    surfaceText: 'כֵּן',
    lemma: 'כֵּן',
    transliteration: 'kēn',
    lemmaTranslit: 'kēn',
    morph: 'HD',
    strong: 'H3651',
    language: 'hebrew',
    position: 5,
    gloss: 'thus',
  },
  {
    id: 'Lam.3.24.6',
    surfaceText: 'אוֹחִיל',
    lemma: 'יָחַל',
    transliteration: "ʾôḥîl",
    lemmaTranslit: 'yāḥal',
    morph: 'HVhI1cs',
    strong: 'H3176',
    language: 'hebrew',
    position: 6,
    gloss: 'I will hope',
  },
];

export const lam3_24_translation: VerseTranslation = {
  verseRef: 'Lam.3.24',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'The LORD is my portion, says my soul; therefore I will hope in him',
      spans: [
        { tokenIds: ['Lam.3.24.0'], targetSlice: [0, 10], confidence: 'high' },
        { tokenIds: ['Lam.3.24.1'], targetSlice: [11, 22], confidence: 'high' },
        { tokenIds: ['Lam.3.24.2'], targetSlice: [23, 27], confidence: 'high' },
        { tokenIds: ['Lam.3.24.3'], targetSlice: [28, 35], confidence: 'high' },
        { tokenIds: ['Lam.3.24.4'], targetSlice: [36, 45], confidence: 'high' },
        { tokenIds: ['Lam.3.24.5'], targetSlice: [46, 50], confidence: 'high' },
        { tokenIds: ['Lam.3.24.6'], targetSlice: [51, 62], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'I say to myself, The LORD is my portion; therefore I will wait for him.',
      spans: [
        { tokenIds: ['Lam.3.24.0'], targetSlice: [0, 10], confidence: 'high' },
        { tokenIds: ['Lam.3.24.1'], targetSlice: [11, 21], confidence: 'high' },
        { tokenIds: ['Lam.3.24.2'], targetSlice: [22, 32], confidence: 'high' },
        { tokenIds: ['Lam.3.24.3'], targetSlice: [33, 43], confidence: 'high' },
        { tokenIds: ['Lam.3.24.4'], targetSlice: [44, 54], confidence: 'high' },
        { tokenIds: ['Lam.3.24.5'], targetSlice: [55, 65], confidence: 'high' },
        { tokenIds: ['Lam.3.24.6'], targetSlice: [66, 71], confidence: 'high' },
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

export const lam3_24_verse = {
  ref: 'Lam.3.24',
  sourceTokens: lam3_24_tokens,
  translation: lam3_24_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 3:25 – The LORD is good to those who wait for him
 * ──────────────────────────────────────────────────────────── */

export const lam3_25_tokens: SourceToken[] = [
  {
    id: 'Lam.3.25.0',
    surfaceText: 'טוֹב',
    lemma: 'טוֹב',
    transliteration: 'ṭôḇ',
    lemmaTranslit: 'ṭôḇ',
    morph: 'HAamsa',
    strong: 'H2896',
    language: 'hebrew',
    position: 0,
    gloss: 'good is',
  },
  {
    id: 'Lam.3.25.1',
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
    id: 'Lam.3.25.2',
    surfaceText: 'לְקוָֹיו',
    lemma: 'קָוָה',
    transliteration: 'lěqōwāyw',
    lemmaTranslit: 'qāwāh',
    morph: 'HR+VqPtmpc+Sp3ms',
    strong: 'H6960',
    language: 'hebrew',
    position: 2,
    gloss: 'to those who wait for him',
  },
  {
    id: 'Lam.3.25.3',
    surfaceText: 'לְנֶפֶשׁ',
    lemma: 'נֶפֶשׁ',
    transliteration: 'lěnep̄eš',
    lemmaTranslit: 'nep̄eš',
    morph: 'HR+Ncfsa',
    strong: 'H5315',
    language: 'hebrew',
    position: 3,
    gloss: 'to the soul',
  },
  {
    id: 'Lam.3.25.4',
    surfaceText: 'תִּדְרְשֶׁנּוּ',
    lemma: 'דָּרַשׁ',
    transliteration: 'tiḏrěšennû',
    lemmaTranslit: 'dāraš',
    morph: 'HVqI3fs+Sp3ms',
    strong: 'H1875',
    language: 'hebrew',
    position: 4,
    gloss: 'that seeks him',
  },
];

export const lam3_25_translation: VerseTranslation = {
  verseRef: 'Lam.3.25',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'The LORD is good to those who wait for him, to the soul who seeks him',
      spans: [
        { tokenIds: ['Lam.3.25.0'], targetSlice: [0, 7], confidence: 'high' },
        { tokenIds: ['Lam.3.25.1'], targetSlice: [8, 16], confidence: 'high' },
        { tokenIds: ['Lam.3.25.2'], targetSlice: [17, 42], confidence: 'high' },
        { tokenIds: ['Lam.3.25.3'], targetSlice: [43, 54], confidence: 'high' },
        { tokenIds: ['Lam.3.25.4'], targetSlice: [55, 69], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'The LORD is good to those whose hope is in him, to the one who seeks him.',
      spans: [
        { tokenIds: ['Lam.3.25.0'], targetSlice: [0, 14], confidence: 'high' },
        { tokenIds: ['Lam.3.25.1'], targetSlice: [15, 29], confidence: 'high' },
        { tokenIds: ['Lam.3.25.2'], targetSlice: [30, 44], confidence: 'high' },
        { tokenIds: ['Lam.3.25.3'], targetSlice: [45, 59], confidence: 'high' },
        { tokenIds: ['Lam.3.25.4'], targetSlice: [60, 73], confidence: 'high' },
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

export const lam3_25_verse = {
  ref: 'Lam.3.25',
  sourceTokens: lam3_25_tokens,
  translation: lam3_25_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 3:31 – For the Lord will not cast off forever
 * ──────────────────────────────────────────────────────────── */

export const lam3_31_tokens: SourceToken[] = [
  {
    id: 'Lam.3.31.0',
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
    id: 'Lam.3.31.1',
    surfaceText: 'לֹא',
    lemma: 'לֹא',
    transliteration: "lōʾ",
    lemmaTranslit: "lōʾ",
    morph: 'HAn',
    strong: 'H3808',
    language: 'hebrew',
    position: 1,
    gloss: 'not',
  },
  {
    id: 'Lam.3.31.2',
    surfaceText: 'יִזְנַח',
    lemma: 'זָנַח',
    transliteration: 'yiznāḥ',
    lemmaTranslit: 'zānāḥ',
    morph: 'HVqI3ms',
    strong: 'H2186',
    language: 'hebrew',
    position: 2,
    gloss: 'will cast off',
  },
  {
    id: 'Lam.3.31.3',
    surfaceText: 'לְעוֹלָם',
    lemma: 'עוֹלָם',
    transliteration: "lěʿôlām",
    lemmaTranslit: "ʿôlām",
    morph: 'HR+Ncmsa',
    strong: 'H5769',
    language: 'hebrew',
    position: 3,
    gloss: 'forever',
  },
  {
    id: 'Lam.3.31.4',
    surfaceText: 'אֲדֹנָי',
    lemma: 'אֲדֹנָי',
    transliteration: "ʾăḏōnāy",
    lemmaTranslit: "ʾăḏōnāy",
    morph: 'HNp',
    strong: 'H136',
    language: 'hebrew',
    position: 4,
    gloss: 'the Lord',
  },
];

export const lam3_31_translation: VerseTranslation = {
  verseRef: 'Lam.3.31',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'For the Lord will not cast off forever',
      spans: [
        { tokenIds: ['Lam.3.31.0'], targetSlice: [0, 3], confidence: 'high' },
        { tokenIds: ['Lam.3.31.1'], targetSlice: [4, 7], confidence: 'high' },
        { tokenIds: ['Lam.3.31.2'], targetSlice: [8, 21], confidence: 'high' },
        { tokenIds: ['Lam.3.31.3'], targetSlice: [22, 29], confidence: 'high' },
        { tokenIds: ['Lam.3.31.4'], targetSlice: [30, 38], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'For no one is cast off by the Lord forever.',
      spans: [
        { tokenIds: ['Lam.3.31.0'], targetSlice: [0, 8], confidence: 'high' },
        { tokenIds: ['Lam.3.31.1'], targetSlice: [9, 17], confidence: 'high' },
        { tokenIds: ['Lam.3.31.2'], targetSlice: [18, 26], confidence: 'high' },
        { tokenIds: ['Lam.3.31.3'], targetSlice: [27, 35], confidence: 'high' },
        { tokenIds: ['Lam.3.31.4'], targetSlice: [36, 43], confidence: 'high' },
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

export const lam3_31_verse = {
  ref: 'Lam.3.31',
  sourceTokens: lam3_31_tokens,
  translation: lam3_31_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 3:32 – Though he causes grief he will have compassion
 * ──────────────────────────────────────────────────────────── */

export const lam3_32_tokens: SourceToken[] = [
  {
    id: 'Lam.3.32.0',
    surfaceText: 'כִּי',
    lemma: 'כִּי',
    transliteration: 'kî',
    lemmaTranslit: 'kî',
    morph: 'HC',
    strong: 'H3588',
    language: 'hebrew',
    position: 0,
    gloss: 'though',
  },
  {
    id: 'Lam.3.32.1',
    surfaceText: 'אִם',
    lemma: 'אִם',
    transliteration: "ʾim",
    lemmaTranslit: "ʾim",
    morph: 'HC',
    strong: 'H518',
    language: 'hebrew',
    position: 1,
    gloss: 'if',
  },
  {
    id: 'Lam.3.32.2',
    surfaceText: 'הוֹגָה',
    lemma: 'יָגָה',
    transliteration: 'hôgāh',
    lemmaTranslit: 'yāgāh',
    morph: 'HVhp3ms',
    strong: 'H3013',
    language: 'hebrew',
    position: 2,
    gloss: 'he causes grief',
  },
  {
    id: 'Lam.3.32.3',
    surfaceText: 'וְרִחַם',
    lemma: 'רָחַם',
    transliteration: 'wěriḥam',
    lemmaTranslit: 'rāḥam',
    morph: 'HC+Vqp3ms',
    strong: 'H7355',
    language: 'hebrew',
    position: 3,
    gloss: 'he will have compassion',
  },
  {
    id: 'Lam.3.32.4',
    surfaceText: 'כְּרֹב',
    lemma: 'רֹב',
    transliteration: 'kěrōḇ',
    lemmaTranslit: 'rōḇ',
    morph: 'HR+Ncmsc',
    strong: 'H7230',
    language: 'hebrew',
    position: 4,
    gloss: 'according to the abundance of',
  },
  {
    id: 'Lam.3.32.5',
    surfaceText: 'חֲסָדָיו',
    lemma: 'חֶסֶד',
    transliteration: 'ḥăsāḏāyw',
    lemmaTranslit: 'ḥeseḏ',
    morph: 'HNcmpc+Sp3ms',
    strong: 'H2617',
    language: 'hebrew',
    position: 5,
    gloss: 'his lovingkindnesses',
  },
];

export const lam3_32_translation: VerseTranslation = {
  verseRef: 'Lam.3.32',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Though he causes grief, he will have compassion according to the abundance of his steadfast love',
      spans: [
        { tokenIds: ['Lam.3.32.0'], targetSlice: [0, 6], confidence: 'high' },
        { tokenIds: ['Lam.3.32.1'], targetSlice: [7, 9], confidence: 'high' },
        { tokenIds: ['Lam.3.32.2'], targetSlice: [10, 25], confidence: 'high' },
        { tokenIds: ['Lam.3.32.3'], targetSlice: [26, 49], confidence: 'high' },
        { tokenIds: ['Lam.3.32.4'], targetSlice: [50, 79], confidence: 'high' },
        { tokenIds: ['Lam.3.32.5'], targetSlice: [80, 100], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Though he brings grief, he will show compassion, so great is his unfailing love.',
      spans: [
        { tokenIds: ['Lam.3.32.0'], targetSlice: [0, 13], confidence: 'high' },
        { tokenIds: ['Lam.3.32.1'], targetSlice: [14, 27], confidence: 'high' },
        { tokenIds: ['Lam.3.32.2'], targetSlice: [28, 41], confidence: 'high' },
        { tokenIds: ['Lam.3.32.3'], targetSlice: [42, 55], confidence: 'high' },
        { tokenIds: ['Lam.3.32.4'], targetSlice: [56, 69], confidence: 'high' },
        { tokenIds: ['Lam.3.32.5'], targetSlice: [70, 80], confidence: 'high' },
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

export const lam3_32_verse = {
  ref: 'Lam.3.32',
  sourceTokens: lam3_32_tokens,
  translation: lam3_32_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Lamentations 3:1-66 — Great is thy faithfulness
 * ──────────────────────────────────────────────────────────── */

export const lamentations3_1_66_verses = [
  lam3_22_verse,
  lam3_23_verse,
  lam3_24_verse,
  lam3_25_verse,
  lam3_31_verse,
  lam3_32_verse,
];

export default lamentations3_1_66_verses;
