// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 11:1 – When Israel was a child, I loved him
 * ──────────────────────────────────────────────────────────── */

export const hos11_1_tokens: SourceToken[] = [
  {
    id: 'Hos.11.1.0',
    surfaceText: 'כִּי',
    lemma: 'כִּי',
    transliteration: 'kî',
    lemmaTranslit: 'kî',
    morph: 'HC',
    strong: 'H3588',
    language: 'hebrew',
    position: 0,
    gloss: 'when',
  },
  {
    id: 'Hos.11.1.1',
    surfaceText: 'נַעַר',
    lemma: 'נַעַר',
    transliteration: "naʿar",
    lemmaTranslit: "naʿar",
    morph: 'HNcmsa',
    strong: 'H5288',
    language: 'hebrew',
    position: 1,
    gloss: 'a child',
  },
  {
    id: 'Hos.11.1.2',
    surfaceText: 'יִשְׂרָאֵל',
    lemma: 'יִשְׂרָאֵל',
    transliteration: "yiśrāʾēl",
    lemmaTranslit: "yiśrāʾēl",
    morph: 'HNp',
    strong: 'H3478',
    language: 'hebrew',
    position: 2,
    gloss: 'Israel',
  },
  {
    id: 'Hos.11.1.3',
    surfaceText: 'וָאֹהֲבֵהוּ',
    lemma: 'אָהַב',
    transliteration: "wāʾōhăḇēhû",
    lemmaTranslit: "ʾāhaḇ",
    morph: 'HC+VqI1cs+Sp3ms',
    strong: 'H157',
    language: 'hebrew',
    position: 3,
    gloss: 'and I loved him',
  },
  {
    id: 'Hos.11.1.4',
    surfaceText: 'וּמִמִּצְרַיִם',
    lemma: 'מִצְרַיִם',
    transliteration: 'ûmimmiṣrayim',
    lemmaTranslit: 'miṣrayim',
    morph: 'HC+HR+Np',
    strong: 'H4714',
    language: 'hebrew',
    position: 4,
    gloss: 'and out of Egypt',
  },
  {
    id: 'Hos.11.1.5',
    surfaceText: 'קָרָאתִי',
    lemma: 'קָרָא',
    transliteration: "qārāʾṯî",
    lemmaTranslit: "qārāʾ",
    morph: 'HVqp1cs',
    strong: 'H7121',
    language: 'hebrew',
    position: 5,
    gloss: 'I called',
  },
  {
    id: 'Hos.11.1.6',
    surfaceText: 'לִבְנִי',
    lemma: 'בֵּן',
    transliteration: 'liḇnî',
    lemmaTranslit: 'bēn',
    morph: 'HR+Ncmsc+Sp1cs',
    strong: 'H1121',
    language: 'hebrew',
    position: 6,
    gloss: 'my son',
  },
];

export const hos11_1_translation: VerseTranslation = {
  verseRef: 'Hos.11.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'When Israel was a child, I loved him, and out of Egypt I called my son',
      spans: [
        { tokenIds: ['Hos.11.1.0'], targetSlice: [0, 4], confidence: 'high' },
        { tokenIds: ['Hos.11.1.1'], targetSlice: [5, 12], confidence: 'high' },
        { tokenIds: ['Hos.11.1.2'], targetSlice: [13, 19], confidence: 'high' },
        { tokenIds: ['Hos.11.1.3'], targetSlice: [20, 35], confidence: 'high' },
        { tokenIds: ['Hos.11.1.4'], targetSlice: [36, 52], confidence: 'high' },
        { tokenIds: ['Hos.11.1.5'], targetSlice: [53, 61], confidence: 'high' },
        { tokenIds: ['Hos.11.1.6'], targetSlice: [62, 68], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'When Israel was a child, I loved him, and out of Egypt I called my son.',
      spans: [
        { tokenIds: ['Hos.11.1.0'], targetSlice: [0, 10], confidence: 'high' },
        { tokenIds: ['Hos.11.1.1'], targetSlice: [11, 21], confidence: 'high' },
        { tokenIds: ['Hos.11.1.2'], targetSlice: [22, 32], confidence: 'high' },
        { tokenIds: ['Hos.11.1.3'], targetSlice: [33, 43], confidence: 'high' },
        { tokenIds: ['Hos.11.1.4'], targetSlice: [44, 54], confidence: 'high' },
        { tokenIds: ['Hos.11.1.5'], targetSlice: [55, 65], confidence: 'high' },
        { tokenIds: ['Hos.11.1.6'], targetSlice: [66, 71], confidence: 'high' },
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

export const hos11_1_verse = {
  ref: 'Hos.11.1',
  sourceTokens: hos11_1_tokens,
  translation: hos11_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 11:3 – I taught Ephraim to walk
 * ──────────────────────────────────────────────────────────── */

export const hos11_3_tokens: SourceToken[] = [
  {
    id: 'Hos.11.3.0',
    surfaceText: 'וְאָנֹכִי',
    lemma: 'אָנֹכִי',
    transliteration: "wěʾānōḵî",
    lemmaTranslit: "ʾānōḵî",
    morph: 'HC+Pp1cs',
    strong: 'H595',
    language: 'hebrew',
    position: 0,
    gloss: 'and I',
  },
  {
    id: 'Hos.11.3.1',
    surfaceText: 'תִרְגַּלְתִּי',
    lemma: 'רָגַל',
    transliteration: 'ṯirgaltî',
    lemmaTranslit: 'rāgal',
    morph: 'HVtp1cs',
    strong: 'H7270',
    language: 'hebrew',
    position: 1,
    gloss: 'taught to walk',
  },
  {
    id: 'Hos.11.3.2',
    surfaceText: 'לְאֶפְרַיִם',
    lemma: 'אֶפְרַיִם',
    transliteration: "lěʾep̄rayim",
    lemmaTranslit: "ʾep̄rayim",
    morph: 'HR+Np',
    strong: 'H669',
    language: 'hebrew',
    position: 2,
    gloss: 'Ephraim',
  },
  {
    id: 'Hos.11.3.3',
    surfaceText: 'קָחָם',
    lemma: 'לָקַח',
    transliteration: 'qāḥām',
    lemmaTranslit: 'lāqaḥ',
    morph: 'HVqp3ms+Sp3mp',
    strong: 'H3947',
    language: 'hebrew',
    position: 3,
    gloss: 'taking them',
  },
  {
    id: 'Hos.11.3.4',
    surfaceText: 'עַל',
    lemma: 'עַל',
    transliteration: "ʿal",
    lemmaTranslit: "ʿal",
    morph: 'HR',
    strong: 'H5921',
    language: 'hebrew',
    position: 4,
    gloss: 'by',
  },
  {
    id: 'Hos.11.3.5',
    surfaceText: 'זְרוֹעֹתָיו',
    lemma: 'זְרוֹעַ',
    transliteration: "zěrôʿōṯāyw",
    lemmaTranslit: "zěrôaʿ",
    morph: 'HNcfpc+Sp3ms',
    strong: 'H2220',
    language: 'hebrew',
    position: 5,
    gloss: 'his arms',
  },
];

export const hos11_3_translation: VerseTranslation = {
  verseRef: 'Hos.11.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'It was I who taught Ephraim to walk, taking them by their arms',
      spans: [
        { tokenIds: ['Hos.11.3.0'], targetSlice: [0, 5], confidence: 'high' },
        { tokenIds: ['Hos.11.3.1'], targetSlice: [6, 20], confidence: 'high' },
        { tokenIds: ['Hos.11.3.2'], targetSlice: [21, 28], confidence: 'high' },
        { tokenIds: ['Hos.11.3.3'], targetSlice: [29, 40], confidence: 'high' },
        { tokenIds: ['Hos.11.3.4'], targetSlice: [41, 43], confidence: 'high' },
        { tokenIds: ['Hos.11.3.5'], targetSlice: [44, 52], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'It was I who taught Ephraim to walk, taking them by the arms.',
      spans: [
        { tokenIds: ['Hos.11.3.0'], targetSlice: [0, 10], confidence: 'high' },
        { tokenIds: ['Hos.11.3.1'], targetSlice: [11, 21], confidence: 'high' },
        { tokenIds: ['Hos.11.3.2'], targetSlice: [22, 32], confidence: 'high' },
        { tokenIds: ['Hos.11.3.3'], targetSlice: [33, 43], confidence: 'high' },
        { tokenIds: ['Hos.11.3.4'], targetSlice: [44, 54], confidence: 'high' },
        { tokenIds: ['Hos.11.3.5'], targetSlice: [55, 61], confidence: 'high' },
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

export const hos11_3_verse = {
  ref: 'Hos.11.3',
  sourceTokens: hos11_3_tokens,
  translation: hos11_3_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 11:4 – I drew them with cords of kindness
 * ──────────────────────────────────────────────────────────── */

export const hos11_4_tokens: SourceToken[] = [
  {
    id: 'Hos.11.4.0',
    surfaceText: 'בְּחַבְלֵי',
    lemma: 'חֶבֶל',
    transliteration: 'běḥaḇlê',
    lemmaTranslit: 'ḥeḇel',
    morph: 'HR+Ncmpc',
    strong: 'H2256',
    language: 'hebrew',
    position: 0,
    gloss: 'with cords of',
  },
  {
    id: 'Hos.11.4.1',
    surfaceText: 'אָדָם',
    lemma: 'אָדָם',
    transliteration: "ʾāḏām",
    lemmaTranslit: "ʾāḏām",
    morph: 'HNcmsa',
    strong: 'H120',
    language: 'hebrew',
    position: 1,
    gloss: 'a man',
  },
  {
    id: 'Hos.11.4.2',
    surfaceText: 'אֶמְשְׁכֵם',
    lemma: 'מָשַׁךְ',
    transliteration: "ʾemšěḵēm",
    lemmaTranslit: 'māšaḵ',
    morph: 'HVqI1cs+Sp3mp',
    strong: 'H4900',
    language: 'hebrew',
    position: 2,
    gloss: 'I drew them',
  },
  {
    id: 'Hos.11.4.3',
    surfaceText: 'בַּעֲבֹתוֹת',
    lemma: 'עֲבֹת',
    transliteration: "baʿăḇōṯôṯ",
    lemmaTranslit: "ʿăḇōṯ",
    morph: 'HR+Ncfpa',
    strong: 'H5688',
    language: 'hebrew',
    position: 3,
    gloss: 'with bands of',
  },
  {
    id: 'Hos.11.4.4',
    surfaceText: 'אַהֲבָה',
    lemma: 'אַהֲבָה',
    transliteration: "ʾahăḇāh",
    lemmaTranslit: "ʾahăḇāh",
    morph: 'HNcfsa',
    strong: 'H160',
    language: 'hebrew',
    position: 4,
    gloss: 'love',
  },
];

export const hos11_4_translation: VerseTranslation = {
  verseRef: 'Hos.11.4',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'I drew them with cords of a man, with bands of love',
      spans: [
        { tokenIds: ['Hos.11.4.0'], targetSlice: [0, 13], confidence: 'high' },
        { tokenIds: ['Hos.11.4.1'], targetSlice: [14, 19], confidence: 'high' },
        { tokenIds: ['Hos.11.4.2'], targetSlice: [20, 31], confidence: 'high' },
        { tokenIds: ['Hos.11.4.3'], targetSlice: [32, 45], confidence: 'high' },
        { tokenIds: ['Hos.11.4.4'], targetSlice: [46, 50], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'I led them with cords of human kindness, with ties of love.',
      spans: [
        { tokenIds: ['Hos.11.4.0'], targetSlice: [0, 11], confidence: 'high' },
        { tokenIds: ['Hos.11.4.1'], targetSlice: [12, 23], confidence: 'high' },
        { tokenIds: ['Hos.11.4.2'], targetSlice: [24, 35], confidence: 'high' },
        { tokenIds: ['Hos.11.4.3'], targetSlice: [36, 47], confidence: 'high' },
        { tokenIds: ['Hos.11.4.4'], targetSlice: [48, 59], confidence: 'high' },
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

export const hos11_4_verse = {
  ref: 'Hos.11.4',
  sourceTokens: hos11_4_tokens,
  translation: hos11_4_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 11:8 – How can I give you up, Ephraim?
 * ──────────────────────────────────────────────────────────── */

export const hos11_8_tokens: SourceToken[] = [
  {
    id: 'Hos.11.8.0',
    surfaceText: 'אֵיךְ',
    lemma: 'אֵיךְ',
    transliteration: "ʾêḵ",
    lemmaTranslit: "ʾêḵ",
    morph: 'HD',
    strong: 'H349',
    language: 'hebrew',
    position: 0,
    gloss: 'how',
  },
  {
    id: 'Hos.11.8.1',
    surfaceText: 'אֶתֶּנְךָ',
    lemma: 'נָתַן',
    transliteration: "ʾetteněḵā",
    lemmaTranslit: 'nāṯan',
    morph: 'HVqI1cs+Sp2ms',
    strong: 'H5414',
    language: 'hebrew',
    position: 1,
    gloss: 'can I give you up',
  },
  {
    id: 'Hos.11.8.2',
    surfaceText: 'אֶפְרַיִם',
    lemma: 'אֶפְרַיִם',
    transliteration: "ʾep̄rayim",
    lemmaTranslit: "ʾep̄rayim",
    morph: 'HNp',
    strong: 'H669',
    language: 'hebrew',
    position: 2,
    gloss: 'Ephraim',
  },
  {
    id: 'Hos.11.8.3',
    surfaceText: 'אֲמַגֶּנְךָ',
    lemma: 'מָגַן',
    transliteration: "ʾămaggeněḵā",
    lemmaTranslit: 'māgan',
    morph: 'HVpI1cs+Sp2ms',
    strong: 'H4042',
    language: 'hebrew',
    position: 3,
    gloss: 'can I hand you over',
  },
  {
    id: 'Hos.11.8.4',
    surfaceText: 'יִשְׂרָאֵל',
    lemma: 'יִשְׂרָאֵל',
    transliteration: "yiśrāʾēl",
    lemmaTranslit: "yiśrāʾēl",
    morph: 'HNp',
    strong: 'H3478',
    language: 'hebrew',
    position: 4,
    gloss: 'Israel',
  },
];

export const hos11_8_translation: VerseTranslation = {
  verseRef: 'Hos.11.8',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'How can I give you up, Ephraim? How can I hand you over, Israel?',
      spans: [
        { tokenIds: ['Hos.11.8.0'], targetSlice: [0, 3], confidence: 'high' },
        { tokenIds: ['Hos.11.8.1'], targetSlice: [4, 21], confidence: 'high' },
        { tokenIds: ['Hos.11.8.2'], targetSlice: [22, 29], confidence: 'high' },
        { tokenIds: ['Hos.11.8.3'], targetSlice: [30, 49], confidence: 'high' },
        { tokenIds: ['Hos.11.8.4'], targetSlice: [50, 56], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'How can I give you up, Ephraim? How can I hand you over, Israel?',
      spans: [
        { tokenIds: ['Hos.11.8.0'], targetSlice: [0, 12], confidence: 'high' },
        { tokenIds: ['Hos.11.8.1'], targetSlice: [13, 25], confidence: 'high' },
        { tokenIds: ['Hos.11.8.2'], targetSlice: [26, 38], confidence: 'high' },
        { tokenIds: ['Hos.11.8.3'], targetSlice: [39, 51], confidence: 'high' },
        { tokenIds: ['Hos.11.8.4'], targetSlice: [52, 64], confidence: 'high' },
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

export const hos11_8_verse = {
  ref: 'Hos.11.8',
  sourceTokens: hos11_8_tokens,
  translation: hos11_8_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 11:9 – I will not execute my burning anger
 * ──────────────────────────────────────────────────────────── */

export const hos11_9_tokens: SourceToken[] = [
  {
    id: 'Hos.11.9.0',
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
    id: 'Hos.11.9.1',
    surfaceText: 'אֶעֱשֶׂה',
    lemma: 'עָשָׂה',
    transliteration: "ʾeʿĕśeh",
    lemmaTranslit: "ʿāśāh",
    morph: 'HVqI1cs',
    strong: 'H6213',
    language: 'hebrew',
    position: 1,
    gloss: 'I will execute',
  },
  {
    id: 'Hos.11.9.2',
    surfaceText: 'חֲרוֹן',
    lemma: 'חָרוֹן',
    transliteration: 'ḥărôn',
    lemmaTranslit: 'ḥārôn',
    morph: 'HNcmsc',
    strong: 'H2740',
    language: 'hebrew',
    position: 2,
    gloss: 'the burning of',
  },
  {
    id: 'Hos.11.9.3',
    surfaceText: 'אַפִּי',
    lemma: 'אַף',
    transliteration: "ʾappî",
    lemmaTranslit: "ʾap̄",
    morph: 'HNcmsc+Sp1cs',
    strong: 'H639',
    language: 'hebrew',
    position: 3,
    gloss: 'my anger',
  },
  {
    id: 'Hos.11.9.4',
    surfaceText: 'כִּי',
    lemma: 'כִּי',
    transliteration: 'kî',
    lemmaTranslit: 'kî',
    morph: 'HC',
    strong: 'H3588',
    language: 'hebrew',
    position: 4,
    gloss: 'for',
  },
  {
    id: 'Hos.11.9.5',
    surfaceText: 'אֵל',
    lemma: 'אֵל',
    transliteration: "ʾēl",
    lemmaTranslit: "ʾēl",
    morph: 'HNcmsa',
    strong: 'H410',
    language: 'hebrew',
    position: 5,
    gloss: 'God',
  },
  {
    id: 'Hos.11.9.6',
    surfaceText: 'אָנֹכִי',
    lemma: 'אָנֹכִי',
    transliteration: "ʾānōḵî",
    lemmaTranslit: "ʾānōḵî",
    morph: 'HPp1cs',
    strong: 'H595',
    language: 'hebrew',
    position: 6,
    gloss: 'I am',
  },
];

export const hos11_9_translation: VerseTranslation = {
  verseRef: 'Hos.11.9',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'I will not execute my burning anger; for I am God and not a man',
      spans: [
        { tokenIds: ['Hos.11.9.0'], targetSlice: [0, 3], confidence: 'high' },
        { tokenIds: ['Hos.11.9.1'], targetSlice: [4, 18], confidence: 'high' },
        { tokenIds: ['Hos.11.9.2'], targetSlice: [19, 33], confidence: 'high' },
        { tokenIds: ['Hos.11.9.3'], targetSlice: [34, 42], confidence: 'high' },
        { tokenIds: ['Hos.11.9.4'], targetSlice: [43, 46], confidence: 'high' },
        { tokenIds: ['Hos.11.9.5'], targetSlice: [47, 50], confidence: 'high' },
        { tokenIds: ['Hos.11.9.6'], targetSlice: [51, 55], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'I will not carry out my fierce anger; for I am God, and not a man.',
      spans: [
        { tokenIds: ['Hos.11.9.0'], targetSlice: [0, 9], confidence: 'high' },
        { tokenIds: ['Hos.11.9.1'], targetSlice: [10, 19], confidence: 'high' },
        { tokenIds: ['Hos.11.9.2'], targetSlice: [20, 29], confidence: 'high' },
        { tokenIds: ['Hos.11.9.3'], targetSlice: [30, 39], confidence: 'high' },
        { tokenIds: ['Hos.11.9.4'], targetSlice: [40, 49], confidence: 'high' },
        { tokenIds: ['Hos.11.9.5'], targetSlice: [50, 59], confidence: 'high' },
        { tokenIds: ['Hos.11.9.6'], targetSlice: [60, 66], confidence: 'high' },
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

export const hos11_9_verse = {
  ref: 'Hos.11.9',
  sourceTokens: hos11_9_tokens,
  translation: hos11_9_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 11:11 – They shall come trembling like birds
 * ──────────────────────────────────────────────────────────── */

export const hos11_11_tokens: SourceToken[] = [
  {
    id: 'Hos.11.11.0',
    surfaceText: 'יֶחֶרְדוּ',
    lemma: 'חָרַד',
    transliteration: 'yeḥerdû',
    lemmaTranslit: 'ḥāraḏ',
    morph: 'HVqI3mp',
    strong: 'H2729',
    language: 'hebrew',
    position: 0,
    gloss: 'they shall tremble',
  },
  {
    id: 'Hos.11.11.1',
    surfaceText: 'כְצִפּוֹר',
    lemma: 'צִפּוֹר',
    transliteration: 'ḵěṣippôr',
    lemmaTranslit: 'ṣippôr',
    morph: 'HR+Ncfsa',
    strong: 'H6833',
    language: 'hebrew',
    position: 1,
    gloss: 'like birds',
  },
  {
    id: 'Hos.11.11.2',
    surfaceText: 'מִמִּצְרַיִם',
    lemma: 'מִצְרַיִם',
    transliteration: 'mimmiṣrayim',
    lemmaTranslit: 'miṣrayim',
    morph: 'HR+Np',
    strong: 'H4714',
    language: 'hebrew',
    position: 2,
    gloss: 'from Egypt',
  },
  {
    id: 'Hos.11.11.3',
    surfaceText: 'וּכְיוֹנָה',
    lemma: 'יוֹנָה',
    transliteration: 'ûḵěyônāh',
    lemmaTranslit: 'yônāh',
    morph: 'HC+HR+Ncfsa',
    strong: 'H3123',
    language: 'hebrew',
    position: 3,
    gloss: 'and like doves',
  },
  {
    id: 'Hos.11.11.4',
    surfaceText: 'מֵאֶרֶץ',
    lemma: 'אֶרֶץ',
    transliteration: "mēʾereṣ",
    lemmaTranslit: "ʾereṣ",
    morph: 'HR+Ncfsa',
    strong: 'H776',
    language: 'hebrew',
    position: 4,
    gloss: 'from the land of',
  },
  {
    id: 'Hos.11.11.5',
    surfaceText: 'אַשּׁוּר',
    lemma: 'אַשּׁוּר',
    transliteration: "ʾaššûr",
    lemmaTranslit: "ʾaššûr",
    morph: 'HNp',
    strong: 'H804',
    language: 'hebrew',
    position: 5,
    gloss: 'Assyria',
  },
];

export const hos11_11_translation: VerseTranslation = {
  verseRef: 'Hos.11.11',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'They shall come trembling like birds from Egypt and like doves from the land of Assyria',
      spans: [
        { tokenIds: ['Hos.11.11.0'], targetSlice: [0, 18], confidence: 'high' },
        { tokenIds: ['Hos.11.11.1'], targetSlice: [19, 29], confidence: 'high' },
        { tokenIds: ['Hos.11.11.2'], targetSlice: [30, 40], confidence: 'high' },
        { tokenIds: ['Hos.11.11.3'], targetSlice: [41, 55], confidence: 'high' },
        { tokenIds: ['Hos.11.11.4'], targetSlice: [56, 72], confidence: 'high' },
        { tokenIds: ['Hos.11.11.5'], targetSlice: [73, 80], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'They will come from Egypt, trembling like sparrows, from Assyria, fluttering like doves.',
      spans: [
        { tokenIds: ['Hos.11.11.0'], targetSlice: [0, 14], confidence: 'high' },
        { tokenIds: ['Hos.11.11.1'], targetSlice: [15, 29], confidence: 'high' },
        { tokenIds: ['Hos.11.11.2'], targetSlice: [30, 44], confidence: 'high' },
        { tokenIds: ['Hos.11.11.3'], targetSlice: [45, 59], confidence: 'high' },
        { tokenIds: ['Hos.11.11.4'], targetSlice: [60, 74], confidence: 'high' },
        { tokenIds: ['Hos.11.11.5'], targetSlice: [75, 88], confidence: 'high' },
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

export const hos11_11_verse = {
  ref: 'Hos.11.11',
  sourceTokens: hos11_11_tokens,
  translation: hos11_11_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Hosea 11:1-12 — God's love for Israel
 * ──────────────────────────────────────────────────────────── */

export const hosea11_1_12_verses = [
  hos11_1_verse,
  hos11_3_verse,
  hos11_4_verse,
  hos11_8_verse,
  hos11_9_verse,
  hos11_11_verse,
];

export default hosea11_1_12_verses;
