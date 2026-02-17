// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 3:1 – A prayer of Habakkuk the prophet
 * ──────────────────────────────────────────────────────────── */

export const hab3_1_tokens: SourceToken[] = [
  {
    id: 'Hab.3.1.0',
    surfaceText: 'תְּפִלָּה',
    lemma: 'תְּפִלָּה',
    transliteration: 'těp̄illāh',
    lemmaTranslit: 'těp̄illāh',
    morph: 'HNcfsa',
    strong: 'H8605',
    language: 'hebrew',
    position: 0,
    gloss: 'a prayer of',
  },
  {
    id: 'Hab.3.1.1',
    surfaceText: 'לַחֲבַקּוּק',
    lemma: 'חֲבַקּוּק',
    transliteration: 'laḥăḇaqqûq',
    lemmaTranslit: 'ḥăḇaqqûq',
    morph: 'HR+Np',
    strong: 'H2259',
    language: 'hebrew',
    position: 1,
    gloss: 'Habakkuk',
  },
  {
    id: 'Hab.3.1.2',
    surfaceText: 'הַנָּבִיא',
    lemma: 'נָבִיא',
    transliteration: "hannāḇîʾ",
    lemmaTranslit: "nāḇîʾ",
    morph: 'HTd+Ncmsa',
    strong: 'H5030',
    language: 'hebrew',
    position: 2,
    gloss: 'the prophet',
  },
  {
    id: 'Hab.3.1.3',
    surfaceText: 'עַל',
    lemma: 'עַל',
    transliteration: "ʿal",
    lemmaTranslit: "ʿal",
    morph: 'HR',
    strong: 'H5921',
    language: 'hebrew',
    position: 3,
    gloss: 'according to',
  },
  {
    id: 'Hab.3.1.4',
    surfaceText: 'שִׁגְיֹנוֹת',
    lemma: 'שִׁגָּיוֹן',
    transliteration: 'šigyōnôṯ',
    lemmaTranslit: 'šiggāyôn',
    morph: 'HNcfpa',
    strong: 'H7692',
    language: 'hebrew',
    position: 4,
    gloss: 'Shigionoth',
  },
];

export const hab3_1_translation: VerseTranslation = {
  verseRef: 'Hab.3.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'A prayer of Habakkuk the prophet, according to Shigionoth',
      spans: [
        { tokenIds: ['Hab.3.1.0'], targetSlice: [0, 11], confidence: 'high' },
        { tokenIds: ['Hab.3.1.1'], targetSlice: [12, 20], confidence: 'high' },
        { tokenIds: ['Hab.3.1.2'], targetSlice: [21, 32], confidence: 'high' },
        { tokenIds: ['Hab.3.1.3'], targetSlice: [33, 45], confidence: 'high' },
        { tokenIds: ['Hab.3.1.4'], targetSlice: [46, 56], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'A prayer of Habakkuk the prophet. On shigionoth.',
      spans: [
        { tokenIds: ['Hab.3.1.0'], targetSlice: [0, 9], confidence: 'high' },
        { tokenIds: ['Hab.3.1.1'], targetSlice: [10, 19], confidence: 'high' },
        { tokenIds: ['Hab.3.1.2'], targetSlice: [20, 29], confidence: 'high' },
        { tokenIds: ['Hab.3.1.3'], targetSlice: [30, 39], confidence: 'high' },
        { tokenIds: ['Hab.3.1.4'], targetSlice: [40, 48], confidence: 'high' },
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

export const hab3_1_verse = {
  ref: 'Hab.3.1',
  sourceTokens: hab3_1_tokens,
  translation: hab3_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 3:2 – O LORD, I have heard the report of you
 * ──────────────────────────────────────────────────────────── */

export const hab3_2_tokens: SourceToken[] = [
  {
    id: 'Hab.3.2.0',
    surfaceText: 'יְהוָה',
    lemma: 'יְהוָה',
    transliteration: 'yhwh',
    lemmaTranslit: 'yhwh',
    morph: 'HNp',
    strong: 'H3068',
    language: 'hebrew',
    position: 0,
    gloss: 'O LORD',
  },
  {
    id: 'Hab.3.2.1',
    surfaceText: 'שָׁמַעְתִּי',
    lemma: 'שָׁמַע',
    transliteration: "šāmaʿtî",
    lemmaTranslit: "šāmaʿ",
    morph: 'HVqp1cs',
    strong: 'H8085',
    language: 'hebrew',
    position: 1,
    gloss: 'I have heard',
  },
  {
    id: 'Hab.3.2.2',
    surfaceText: 'שִׁמְעֲךָ',
    lemma: 'שֵׁמַע',
    transliteration: "šimʿăḵā",
    lemmaTranslit: "šēmaʿ",
    morph: 'HNcmsc+Sp2ms',
    strong: 'H8088',
    language: 'hebrew',
    position: 2,
    gloss: 'the report of you',
  },
  {
    id: 'Hab.3.2.3',
    surfaceText: 'יָרֵאתִי',
    lemma: 'יָרֵא',
    transliteration: "yārēʾṯî",
    lemmaTranslit: "yārēʾ",
    morph: 'HVqp1cs',
    strong: 'H3372',
    language: 'hebrew',
    position: 3,
    gloss: 'I am in awe',
  },
];

export const hab3_2_translation: VerseTranslation = {
  verseRef: 'Hab.3.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'O LORD, I have heard the report of you, and your work, O LORD, do I fear',
      spans: [
        { tokenIds: ['Hab.3.2.0'], targetSlice: [0, 6], confidence: 'high' },
        { tokenIds: ['Hab.3.2.1'], targetSlice: [7, 19], confidence: 'high' },
        { tokenIds: ['Hab.3.2.2'], targetSlice: [20, 37], confidence: 'high' },
        { tokenIds: ['Hab.3.2.3'], targetSlice: [38, 49], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'LORD, I have heard of your fame; I stand in awe of your deeds, LORD.',
      spans: [
        { tokenIds: ['Hab.3.2.0'], targetSlice: [0, 17], confidence: 'high' },
        { tokenIds: ['Hab.3.2.1'], targetSlice: [18, 35], confidence: 'high' },
        { tokenIds: ['Hab.3.2.2'], targetSlice: [36, 53], confidence: 'high' },
        { tokenIds: ['Hab.3.2.3'], targetSlice: [54, 68], confidence: 'high' },
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

export const hab3_2_verse = {
  ref: 'Hab.3.2',
  sourceTokens: hab3_2_tokens,
  translation: hab3_2_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 3:3 – God came from Teman
 * ──────────────────────────────────────────────────────────── */

export const hab3_3_tokens: SourceToken[] = [
  {
    id: 'Hab.3.3.0',
    surfaceText: 'אֱלוֹהַּ',
    lemma: 'אֱלוֹהַּ',
    transliteration: "ʾĕlôahh",
    lemmaTranslit: "ʾĕlôahh",
    morph: 'HNcmsa',
    strong: 'H433',
    language: 'hebrew',
    position: 0,
    gloss: 'God',
  },
  {
    id: 'Hab.3.3.1',
    surfaceText: 'מִתֵּימָן',
    lemma: 'תֵּימָן',
    transliteration: 'mittêmān',
    lemmaTranslit: 'tēmān',
    morph: 'HR+Np',
    strong: 'H8487',
    language: 'hebrew',
    position: 1,
    gloss: 'from Teman',
  },
  {
    id: 'Hab.3.3.2',
    surfaceText: 'יָבוֹא',
    lemma: 'בּוֹא',
    transliteration: "yāḇôʾ",
    lemmaTranslit: "bôʾ",
    morph: 'HVqI3ms',
    strong: 'H935',
    language: 'hebrew',
    position: 2,
    gloss: 'comes',
  },
  {
    id: 'Hab.3.3.3',
    surfaceText: 'וְקָדוֹשׁ',
    lemma: 'קָדוֹשׁ',
    transliteration: 'wěqāḏôš',
    lemmaTranslit: 'qāḏôš',
    morph: 'HC+Aamsa',
    strong: 'H6918',
    language: 'hebrew',
    position: 3,
    gloss: 'and the Holy One',
  },
  {
    id: 'Hab.3.3.4',
    surfaceText: 'מֵהַר',
    lemma: 'הַר',
    transliteration: 'mēhar',
    lemmaTranslit: 'har',
    morph: 'HR+Ncmsc',
    strong: 'H2022',
    language: 'hebrew',
    position: 4,
    gloss: 'from Mount',
  },
  {
    id: 'Hab.3.3.5',
    surfaceText: 'פָּארָן',
    lemma: 'פָּארָן',
    transliteration: "pāʾrān",
    lemmaTranslit: "pāʾrān",
    morph: 'HNp',
    strong: 'H6290',
    language: 'hebrew',
    position: 5,
    gloss: 'Paran',
  },
];

export const hab3_3_translation: VerseTranslation = {
  verseRef: 'Hab.3.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'God came from Teman, and the Holy One from Mount Paran',
      spans: [
        { tokenIds: ['Hab.3.3.0'], targetSlice: [0, 3], confidence: 'high' },
        { tokenIds: ['Hab.3.3.1'], targetSlice: [4, 14], confidence: 'high' },
        { tokenIds: ['Hab.3.3.2'], targetSlice: [15, 20], confidence: 'high' },
        { tokenIds: ['Hab.3.3.3'], targetSlice: [21, 37], confidence: 'high' },
        { tokenIds: ['Hab.3.3.4'], targetSlice: [38, 48], confidence: 'high' },
        { tokenIds: ['Hab.3.3.5'], targetSlice: [49, 54], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'God came from Teman, the Holy One from Mount Paran.',
      spans: [
        { tokenIds: ['Hab.3.3.0'], targetSlice: [0, 8], confidence: 'high' },
        { tokenIds: ['Hab.3.3.1'], targetSlice: [9, 17], confidence: 'high' },
        { tokenIds: ['Hab.3.3.2'], targetSlice: [18, 26], confidence: 'high' },
        { tokenIds: ['Hab.3.3.3'], targetSlice: [27, 35], confidence: 'high' },
        { tokenIds: ['Hab.3.3.4'], targetSlice: [36, 44], confidence: 'high' },
        { tokenIds: ['Hab.3.3.5'], targetSlice: [45, 51], confidence: 'high' },
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

export const hab3_3_verse = {
  ref: 'Hab.3.3',
  sourceTokens: hab3_3_tokens,
  translation: hab3_3_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 3:17 – Though the fig tree should not blossom
 * ──────────────────────────────────────────────────────────── */

export const hab3_17_tokens: SourceToken[] = [
  {
    id: 'Hab.3.17.0',
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
    id: 'Hab.3.17.1',
    surfaceText: 'תְאֵנָה',
    lemma: 'תְּאֵנָה',
    transliteration: "ṯěʾēnāh",
    lemmaTranslit: "těʾēnāh",
    morph: 'HNcfsa',
    strong: 'H8384',
    language: 'hebrew',
    position: 1,
    gloss: 'the fig tree',
  },
  {
    id: 'Hab.3.17.2',
    surfaceText: 'לֹא',
    lemma: 'לֹא',
    transliteration: "lōʾ",
    lemmaTranslit: "lōʾ",
    morph: 'HAn',
    strong: 'H3808',
    language: 'hebrew',
    position: 2,
    gloss: 'should not',
  },
  {
    id: 'Hab.3.17.3',
    surfaceText: 'תִפְרָח',
    lemma: 'פָּרַח',
    transliteration: 'ṯip̄rāḥ',
    lemmaTranslit: 'pāraḥ',
    morph: 'HVqI3fs',
    strong: 'H6524',
    language: 'hebrew',
    position: 3,
    gloss: 'blossom',
  },
  {
    id: 'Hab.3.17.4',
    surfaceText: 'וְאֵין',
    lemma: 'אַיִן',
    transliteration: "wěʾên",
    lemmaTranslit: "ʾayin",
    morph: 'HC+HAn',
    strong: 'H369',
    language: 'hebrew',
    position: 4,
    gloss: 'and there be no',
  },
  {
    id: 'Hab.3.17.5',
    surfaceText: 'יְבוּל',
    lemma: 'יְבוּל',
    transliteration: 'yěḇûl',
    lemmaTranslit: 'yěḇûl',
    morph: 'HNcmsa',
    strong: 'H2981',
    language: 'hebrew',
    position: 5,
    gloss: 'fruit',
  },
  {
    id: 'Hab.3.17.6',
    surfaceText: 'בַּגְּפָנִים',
    lemma: 'גֶּפֶן',
    transliteration: 'baggěp̄ānîm',
    lemmaTranslit: 'gep̄en',
    morph: 'HR+Ncfpa',
    strong: 'H1612',
    language: 'hebrew',
    position: 6,
    gloss: 'on the vines',
  },
];

export const hab3_17_translation: VerseTranslation = {
  verseRef: 'Hab.3.17',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Though the fig tree should not blossom, nor fruit be on the vines',
      spans: [
        { tokenIds: ['Hab.3.17.0'], targetSlice: [0, 6], confidence: 'high' },
        { tokenIds: ['Hab.3.17.1'], targetSlice: [7, 19], confidence: 'high' },
        { tokenIds: ['Hab.3.17.2'], targetSlice: [20, 30], confidence: 'high' },
        { tokenIds: ['Hab.3.17.3'], targetSlice: [31, 38], confidence: 'high' },
        { tokenIds: ['Hab.3.17.4'], targetSlice: [39, 54], confidence: 'high' },
        { tokenIds: ['Hab.3.17.5'], targetSlice: [55, 60], confidence: 'high' },
        { tokenIds: ['Hab.3.17.6'], targetSlice: [61, 73], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Though the fig tree does not bud and there are no grapes on the vines.',
      spans: [
        { tokenIds: ['Hab.3.17.0'], targetSlice: [0, 10], confidence: 'high' },
        { tokenIds: ['Hab.3.17.1'], targetSlice: [11, 21], confidence: 'high' },
        { tokenIds: ['Hab.3.17.2'], targetSlice: [22, 32], confidence: 'high' },
        { tokenIds: ['Hab.3.17.3'], targetSlice: [33, 43], confidence: 'high' },
        { tokenIds: ['Hab.3.17.4'], targetSlice: [44, 54], confidence: 'high' },
        { tokenIds: ['Hab.3.17.5'], targetSlice: [55, 65], confidence: 'high' },
        { tokenIds: ['Hab.3.17.6'], targetSlice: [66, 70], confidence: 'high' },
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

export const hab3_17_verse = {
  ref: 'Hab.3.17',
  sourceTokens: hab3_17_tokens,
  translation: hab3_17_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 3:18 – Yet I will rejoice in the LORD
 * ──────────────────────────────────────────────────────────── */

export const hab3_18_tokens: SourceToken[] = [
  {
    id: 'Hab.3.18.0',
    surfaceText: 'וַאֲנִי',
    lemma: 'אֲנִי',
    transliteration: "waʾănî",
    lemmaTranslit: "ʾănî",
    morph: 'HC+Pp1cs',
    strong: 'H589',
    language: 'hebrew',
    position: 0,
    gloss: 'yet I',
  },
  {
    id: 'Hab.3.18.1',
    surfaceText: 'בַּיהוָה',
    lemma: 'יְהוָה',
    transliteration: 'bayhwh',
    lemmaTranslit: 'yhwh',
    morph: 'HR+Np',
    strong: 'H3068',
    language: 'hebrew',
    position: 1,
    gloss: 'in the LORD',
  },
  {
    id: 'Hab.3.18.2',
    surfaceText: 'אֶעְלוֹזָה',
    lemma: 'עָלַז',
    transliteration: "ʾeʿlôzāh",
    lemmaTranslit: "ʿālaz",
    morph: 'HVqI1cs',
    strong: 'H5937',
    language: 'hebrew',
    position: 2,
    gloss: 'will rejoice',
  },
  {
    id: 'Hab.3.18.3',
    surfaceText: 'אָגִילָה',
    lemma: 'גִּיל',
    transliteration: "ʾāgîlāh",
    lemmaTranslit: 'gîl',
    morph: 'HVqI1cs',
    strong: 'H1523',
    language: 'hebrew',
    position: 3,
    gloss: 'I will be joyful',
  },
  {
    id: 'Hab.3.18.4',
    surfaceText: 'בֵּאלֹהֵי',
    lemma: 'אֱלֹהִים',
    transliteration: "bēʾlōhê",
    lemmaTranslit: "ʾĕlōhîm",
    morph: 'HR+Ncmpc',
    strong: 'H430',
    language: 'hebrew',
    position: 4,
    gloss: 'in the God of',
  },
  {
    id: 'Hab.3.18.5',
    surfaceText: 'יִשְׁעִי',
    lemma: 'יֵשַׁע',
    transliteration: "yišʿî",
    lemmaTranslit: "yēšaʿ",
    morph: 'HNcmsc+Sp1cs',
    strong: 'H3468',
    language: 'hebrew',
    position: 5,
    gloss: 'my salvation',
  },
];

export const hab3_18_translation: VerseTranslation = {
  verseRef: 'Hab.3.18',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Yet I will rejoice in the LORD; I will be joyful in God my Savior',
      spans: [
        { tokenIds: ['Hab.3.18.0'], targetSlice: [0, 5], confidence: 'high' },
        { tokenIds: ['Hab.3.18.1'], targetSlice: [6, 17], confidence: 'high' },
        { tokenIds: ['Hab.3.18.2'], targetSlice: [18, 30], confidence: 'high' },
        { tokenIds: ['Hab.3.18.3'], targetSlice: [31, 47], confidence: 'high' },
        { tokenIds: ['Hab.3.18.4'], targetSlice: [48, 61], confidence: 'high' },
        { tokenIds: ['Hab.3.18.5'], targetSlice: [62, 74], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Yet I will rejoice in the LORD, I will be joyful in God my Savior.',
      spans: [
        { tokenIds: ['Hab.3.18.0'], targetSlice: [0, 11], confidence: 'high' },
        { tokenIds: ['Hab.3.18.1'], targetSlice: [12, 23], confidence: 'high' },
        { tokenIds: ['Hab.3.18.2'], targetSlice: [24, 35], confidence: 'high' },
        { tokenIds: ['Hab.3.18.3'], targetSlice: [36, 47], confidence: 'high' },
        { tokenIds: ['Hab.3.18.4'], targetSlice: [48, 59], confidence: 'high' },
        { tokenIds: ['Hab.3.18.5'], targetSlice: [60, 66], confidence: 'high' },
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

export const hab3_18_verse = {
  ref: 'Hab.3.18',
  sourceTokens: hab3_18_tokens,
  translation: hab3_18_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 3:19 – The LORD God is my strength
 * ──────────────────────────────────────────────────────────── */

export const hab3_19_tokens: SourceToken[] = [
  {
    id: 'Hab.3.19.0',
    surfaceText: 'יְהוִה',
    lemma: 'יְהוָה',
    transliteration: 'yěhwih',
    lemmaTranslit: 'yhwh',
    morph: 'HNp',
    strong: 'H3069',
    language: 'hebrew',
    position: 0,
    gloss: 'the Lord GOD',
  },
  {
    id: 'Hab.3.19.1',
    surfaceText: 'אֲדֹנָי',
    lemma: 'אֲדֹנָי',
    transliteration: "ʾăḏōnāy",
    lemmaTranslit: "ʾăḏōnāy",
    morph: 'HNp',
    strong: 'H136',
    language: 'hebrew',
    position: 1,
    gloss: 'the Lord',
  },
  {
    id: 'Hab.3.19.2',
    surfaceText: 'חֵילִי',
    lemma: 'חַיִל',
    transliteration: 'ḥêlî',
    lemmaTranslit: 'ḥayil',
    morph: 'HNcmsc+Sp1cs',
    strong: 'H2428',
    language: 'hebrew',
    position: 2,
    gloss: 'is my strength',
  },
  {
    id: 'Hab.3.19.3',
    surfaceText: 'וַיָּשֶׂם',
    lemma: 'שִׂים',
    transliteration: 'wayyāśem',
    lemmaTranslit: 'śîm',
    morph: 'HC+VqI3ms',
    strong: 'H7760',
    language: 'hebrew',
    position: 3,
    gloss: 'and he makes',
  },
  {
    id: 'Hab.3.19.4',
    surfaceText: 'רַגְלַי',
    lemma: 'רֶגֶל',
    transliteration: 'ragllay',
    lemmaTranslit: 'regel',
    morph: 'HNcfdc+Sp1cs',
    strong: 'H7272',
    language: 'hebrew',
    position: 4,
    gloss: 'my feet',
  },
  {
    id: 'Hab.3.19.5',
    surfaceText: 'כָּאַיָּלוֹת',
    lemma: 'אַיָּלָה',
    transliteration: "kāʾayyālôṯ",
    lemmaTranslit: "ʾayyālāh",
    morph: 'HR+Ncfpa',
    strong: 'H355',
    language: 'hebrew',
    position: 5,
    gloss: 'like the deer',
  },
];

export const hab3_19_translation: VerseTranslation = {
  verseRef: 'Hab.3.19',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "The Lord GOD is my strength; he makes my feet like the deer's",
      spans: [
        { tokenIds: ['Hab.3.19.0'], targetSlice: [0, 12], confidence: 'high' },
        { tokenIds: ['Hab.3.19.1'], targetSlice: [13, 21], confidence: 'high' },
        { tokenIds: ['Hab.3.19.2'], targetSlice: [22, 36], confidence: 'high' },
        { tokenIds: ['Hab.3.19.3'], targetSlice: [37, 49], confidence: 'high' },
        { tokenIds: ['Hab.3.19.4'], targetSlice: [50, 57], confidence: 'high' },
        { tokenIds: ['Hab.3.19.5'], targetSlice: [58, 71], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'The Sovereign LORD is my strength; he makes my feet like the feet of a deer.',
      spans: [
        { tokenIds: ['Hab.3.19.0'], targetSlice: [0, 12], confidence: 'high' },
        { tokenIds: ['Hab.3.19.1'], targetSlice: [13, 25], confidence: 'high' },
        { tokenIds: ['Hab.3.19.2'], targetSlice: [26, 38], confidence: 'high' },
        { tokenIds: ['Hab.3.19.3'], targetSlice: [39, 51], confidence: 'high' },
        { tokenIds: ['Hab.3.19.4'], targetSlice: [52, 64], confidence: 'high' },
        { tokenIds: ['Hab.3.19.5'], targetSlice: [65, 76], confidence: 'high' },
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

export const hab3_19_verse = {
  ref: 'Hab.3.19',
  sourceTokens: hab3_19_tokens,
  translation: hab3_19_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Habakkuk 3:1-19 — Habakkuk's prayer
 * ──────────────────────────────────────────────────────────── */

export const habakkuk3_1_19_verses = [
  hab3_1_verse,
  hab3_2_verse,
  hab3_3_verse,
  hab3_17_verse,
  hab3_18_verse,
  hab3_19_verse,
];

export default habakkuk3_1_19_verses;
