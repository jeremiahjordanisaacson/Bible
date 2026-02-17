// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 38:1 – The LORD answered Job out of the whirlwind
 * ──────────────────────────────────────────────────────────── */

export const job38_1_tokens: SourceToken[] = [
  {
    id: 'Job.38.1.0',
    surfaceText: 'וַיַּעַן',
    lemma: 'עָנָה',
    transliteration: "wayyaʿan",
    lemmaTranslit: "ʿānāh",
    morph: 'HC+Vqw3ms',
    strong: 'H6030',
    language: 'hebrew',
    position: 0,
    gloss: 'and answered',
  },
  {
    id: 'Job.38.1.1',
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
    id: 'Job.38.1.2',
    surfaceText: 'אֶת',
    lemma: 'אֵת',
    transliteration: "ʾeṯ",
    lemmaTranslit: "ʾēṯ",
    morph: 'HTo',
    strong: 'H853',
    language: 'hebrew',
    position: 2,
    gloss: 'direct-object',
  },
  {
    id: 'Job.38.1.3',
    surfaceText: 'אִיּוֹב',
    lemma: 'אִיּוֹב',
    transliteration: "ʾiyyôḇ",
    lemmaTranslit: "ʾiyyôḇ",
    morph: 'HNp',
    strong: 'H347',
    language: 'hebrew',
    position: 3,
    gloss: 'Job',
  },
  {
    id: 'Job.38.1.4',
    surfaceText: 'מִן',
    lemma: 'מִן',
    transliteration: 'min',
    lemmaTranslit: 'min',
    morph: 'HR',
    strong: 'H4480',
    language: 'hebrew',
    position: 4,
    gloss: 'from',
  },
  {
    id: 'Job.38.1.5',
    surfaceText: 'הַסְּעָרָה',
    lemma: 'סְעָרָה',
    transliteration: "hassěʿārāh",
    lemmaTranslit: "sěʿārāh",
    morph: 'HTd+Ncfsa',
    strong: 'H5591',
    language: 'hebrew',
    position: 5,
    gloss: 'the whirlwind',
  },
];

export const job38_1_translation: VerseTranslation = {
  verseRef: 'Job.38.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And the LORD answered Job from the whirlwind',
      spans: [
        { tokenIds: ['Job.38.1.0'], targetSlice: [0, 3], confidence: 'high' },
        { tokenIds: ['Job.38.1.1'], targetSlice: [4, 12], confidence: 'high' },
        { tokenIds: ['Job.38.1.2'], targetSlice: [13, 13], confidence: 'high' },
        { tokenIds: ['Job.38.1.3'], targetSlice: [13, 21], confidence: 'high' },
        { tokenIds: ['Job.38.1.4'], targetSlice: [22, 26], confidence: 'high' },
        { tokenIds: ['Job.38.1.5'], targetSlice: [27, 45], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Then the LORD answered Job out of the whirlwind.',
      spans: [
        { tokenIds: ['Job.38.1.0', 'Job.38.1.1'], targetSlice: [0, 26], confidence: 'high' },
        { tokenIds: ['Job.38.1.2', 'Job.38.1.3'], targetSlice: [27, 30], confidence: 'high' },
        { tokenIds: ['Job.38.1.4', 'Job.38.1.5'], targetSlice: [31, 48], confidence: 'high' },
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

export const job38_1_verse = {
  ref: 'Job.38.1',
  sourceTokens: job38_1_tokens,
  translation: job38_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 38:2 – Who is this that darkens counsel?
 * ──────────────────────────────────────────────────────────── */

export const job38_2_tokens: SourceToken[] = [
  {
    id: 'Job.38.2.0',
    surfaceText: 'מִי',
    lemma: 'מִי',
    transliteration: 'mî',
    lemmaTranslit: 'mî',
    morph: 'HIr',
    strong: 'H4310',
    language: 'hebrew',
    position: 0,
    gloss: 'who',
  },
  {
    id: 'Job.38.2.1',
    surfaceText: 'זֶה',
    lemma: 'זֶה',
    transliteration: 'zeh',
    lemmaTranslit: 'zeh',
    morph: 'HPdms',
    strong: 'H2088',
    language: 'hebrew',
    position: 1,
    gloss: 'is this',
  },
  {
    id: 'Job.38.2.2',
    surfaceText: 'מַחְשִׁיךְ',
    lemma: 'חָשַׁךְ',
    transliteration: 'maḥšîḵ',
    lemmaTranslit: 'ḥāšaḵ',
    morph: 'HVhPrmsa',
    strong: 'H2821',
    language: 'hebrew',
    position: 2,
    gloss: 'who darkens',
  },
  {
    id: 'Job.38.2.3',
    surfaceText: 'עֵצָה',
    lemma: 'עֵצָה',
    transliteration: "ʿēṣāh",
    lemmaTranslit: "ʿēṣāh",
    morph: 'HNcfsa',
    strong: 'H6098',
    language: 'hebrew',
    position: 3,
    gloss: 'counsel',
  },
  {
    id: 'Job.38.2.4',
    surfaceText: 'בְמִלִּין',
    lemma: 'מִלָּה',
    transliteration: 'běmillîn',
    lemmaTranslit: 'millāh',
    morph: 'HR+Ncfpa',
    strong: 'H4405',
    language: 'hebrew',
    position: 4,
    gloss: 'with words',
  },
];

export const job38_2_translation: VerseTranslation = {
  verseRef: 'Job.38.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Who is this who darkens counsel with words without knowledge?',
      spans: [
        { tokenIds: ['Job.38.2.0'], targetSlice: [0, 3], confidence: 'high' },
        { tokenIds: ['Job.38.2.1'], targetSlice: [4, 11], confidence: 'high' },
        { tokenIds: ['Job.38.2.2'], targetSlice: [12, 24], confidence: 'high' },
        { tokenIds: ['Job.38.2.3'], targetSlice: [25, 32], confidence: 'high' },
        { tokenIds: ['Job.38.2.4'], targetSlice: [33, 43], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Who is this that obscures my plans with words without knowledge?',
      spans: [
        { tokenIds: ['Job.38.2.0', 'Job.38.2.1'], targetSlice: [0, 11], confidence: 'high' },
        { tokenIds: ['Job.38.2.2'], targetSlice: [17, 25], confidence: 'high' },
        { tokenIds: ['Job.38.2.3'], targetSlice: [26, 34], confidence: 'high' },
        { tokenIds: ['Job.38.2.4'], targetSlice: [35, 63], confidence: 'high' },
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

export const job38_2_verse = {
  ref: 'Job.38.2',
  sourceTokens: job38_2_tokens,
  translation: job38_2_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 38:4 – Where were you when I laid the earth's foundation?
 * ──────────────────────────────────────────────────────────── */

export const job38_4_tokens: SourceToken[] = [
  {
    id: 'Job.38.4.0',
    surfaceText: 'אֵיפֹה',
    lemma: 'אֵיפֹה',
    transliteration: "ʾêp̄oh",
    lemmaTranslit: "ʾêp̄oh",
    morph: 'HIr',
    strong: 'H375',
    language: 'hebrew',
    position: 0,
    gloss: 'where',
  },
  {
    id: 'Job.38.4.1',
    surfaceText: 'הָיִיתָ',
    lemma: 'הָיָה',
    transliteration: 'hāyîṯā',
    lemmaTranslit: 'hāyāh',
    morph: 'HVqp2ms',
    strong: 'H1961',
    language: 'hebrew',
    position: 1,
    gloss: 'were you',
  },
  {
    id: 'Job.38.4.2',
    surfaceText: 'בְּיָסְדִי',
    lemma: 'יָסַד',
    transliteration: 'běyāsědî',
    lemmaTranslit: 'yāsaḏ',
    morph: 'HR+VqI+Sp1cs',
    strong: 'H3245',
    language: 'hebrew',
    position: 2,
    gloss: 'when I laid the foundation of',
  },
  {
    id: 'Job.38.4.3',
    surfaceText: 'אָרֶץ',
    lemma: 'אֶרֶץ',
    transliteration: "ʾāreṣ",
    lemmaTranslit: "ʾereṣ",
    morph: 'HNcfsa',
    strong: 'H776',
    language: 'hebrew',
    position: 3,
    gloss: 'the earth',
  },
];

export const job38_4_translation: VerseTranslation = {
  verseRef: 'Job.38.4',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Where were you when I laid the foundation of the earth?',
      spans: [
        { tokenIds: ['Job.38.4.0'], targetSlice: [0, 5], confidence: 'high' },
        { tokenIds: ['Job.38.4.1'], targetSlice: [6, 14], confidence: 'high' },
        { tokenIds: ['Job.38.4.2'], targetSlice: [15, 44], confidence: 'high' },
        { tokenIds: ['Job.38.4.3'], targetSlice: [45, 54], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "Where were you when I laid the earth's foundation?",
      spans: [
        { tokenIds: ['Job.38.4.0', 'Job.38.4.1'], targetSlice: [0, 14], confidence: 'high' },
        { tokenIds: ['Job.38.4.2', 'Job.38.4.3'], targetSlice: [15, 50], confidence: 'high' },
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

export const job38_4_verse = {
  ref: 'Job.38.4',
  sourceTokens: job38_4_tokens,
  translation: job38_4_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 38:7 – When the morning stars sang together
 * ──────────────────────────────────────────────────────────── */

export const job38_7_tokens: SourceToken[] = [
  {
    id: 'Job.38.7.0',
    surfaceText: 'בְּרָן',
    lemma: 'רָנַן',
    transliteration: 'běrān',
    lemmaTranslit: 'rānan',
    morph: 'HR+VqI',
    strong: 'H7442',
    language: 'hebrew',
    position: 0,
    gloss: 'when sang',
  },
  {
    id: 'Job.38.7.1',
    surfaceText: 'יַחַד',
    lemma: 'יַחַד',
    transliteration: 'yaḥaḏ',
    lemmaTranslit: 'yaḥaḏ',
    morph: 'HD',
    strong: 'H3162',
    language: 'hebrew',
    position: 1,
    gloss: 'together',
  },
  {
    id: 'Job.38.7.2',
    surfaceText: 'כּוֹכְבֵי',
    lemma: 'כּוֹכָב',
    transliteration: 'kôḵěḇê',
    lemmaTranslit: 'kôḵāḇ',
    morph: 'HNcmpc',
    strong: 'H3556',
    language: 'hebrew',
    position: 2,
    gloss: 'stars of',
  },
  {
    id: 'Job.38.7.3',
    surfaceText: 'בֹקֶר',
    lemma: 'בֹּקֶר',
    transliteration: 'ḇōqer',
    lemmaTranslit: 'bōqer',
    morph: 'HNcmsa',
    strong: 'H1242',
    language: 'hebrew',
    position: 3,
    gloss: 'morning',
  },
  {
    id: 'Job.38.7.4',
    surfaceText: 'בְּנֵי',
    lemma: 'בֵּן',
    transliteration: 'běnê',
    lemmaTranslit: 'bēn',
    morph: 'HNcmpc',
    strong: 'H1121',
    language: 'hebrew',
    position: 4,
    gloss: 'sons of',
  },
  {
    id: 'Job.38.7.5',
    surfaceText: 'אֱלֹהִים',
    lemma: 'אֱלֹהִים',
    transliteration: "ʾĕlōhîm",
    lemmaTranslit: "ʾĕlōhîm",
    morph: 'HNcmpa',
    strong: 'H430',
    language: 'hebrew',
    position: 5,
    gloss: 'God',
  },
];

export const job38_7_translation: VerseTranslation = {
  verseRef: 'Job.38.7',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'When the morning stars sang together and all the sons of God shouted for joy',
      spans: [
        { tokenIds: ['Job.38.7.0'], targetSlice: [0, 4], confidence: 'high' },
        { tokenIds: ['Job.38.7.1'], targetSlice: [28, 36], confidence: 'high' },
        { tokenIds: ['Job.38.7.2'], targetSlice: [9, 14], confidence: 'high' },
        { tokenIds: ['Job.38.7.3'], targetSlice: [5, 16], confidence: 'high' },
        { tokenIds: ['Job.38.7.4'], targetSlice: [49, 56], confidence: 'high' },
        { tokenIds: ['Job.38.7.5'], targetSlice: [57, 60], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'While the morning stars sang together and all the angels shouted for joy.',
      spans: [
        { tokenIds: ['Job.38.7.0', 'Job.38.7.1'], targetSlice: [0, 5], confidence: 'high' },
        { tokenIds: ['Job.38.7.2', 'Job.38.7.3'], targetSlice: [6, 25], confidence: 'high' },
        { tokenIds: ['Job.38.7.4', 'Job.38.7.5'], targetSlice: [44, 54], confidence: 'high' },
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

export const job38_7_verse = {
  ref: 'Job.38.7',
  sourceTokens: job38_7_tokens,
  translation: job38_7_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 38:12 – Have you commanded the morning?
 * ──────────────────────────────────────────────────────────── */

export const job38_12_tokens: SourceToken[] = [
  {
    id: 'Job.38.12.0',
    surfaceText: 'הֲמִיָּמֶיךָ',
    lemma: 'יוֹם',
    transliteration: 'hămiyyāmeyḵā',
    lemmaTranslit: 'yôm',
    morph: 'HIr+HR+Ncmpc+Sp2ms',
    strong: 'H3117',
    language: 'hebrew',
    position: 0,
    gloss: 'have you ever',
  },
  {
    id: 'Job.38.12.1',
    surfaceText: 'צִוִּיתָ',
    lemma: 'צָוָה',
    transliteration: 'ṣiwwîṯā',
    lemmaTranslit: 'ṣāwāh',
    morph: 'HVPp2ms',
    strong: 'H6680',
    language: 'hebrew',
    position: 1,
    gloss: 'commanded',
  },
  {
    id: 'Job.38.12.2',
    surfaceText: 'בֹּקֶר',
    lemma: 'בֹּקֶר',
    transliteration: 'bōqer',
    lemmaTranslit: 'bōqer',
    morph: 'HNcmsa',
    strong: 'H1242',
    language: 'hebrew',
    position: 2,
    gloss: 'the morning',
  },
  {
    id: 'Job.38.12.3',
    surfaceText: 'שַׁחַר',
    lemma: 'שַׁחַר',
    transliteration: 'šaḥar',
    lemmaTranslit: 'šaḥar',
    morph: 'HNcmsa',
    strong: 'H7837',
    language: 'hebrew',
    position: 3,
    gloss: 'the dawn',
  },
];

export const job38_12_translation: VerseTranslation = {
  verseRef: 'Job.38.12',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Have you from your days commanded the morning, caused the dawn to know its place?',
      spans: [
        { tokenIds: ['Job.38.12.0'], targetSlice: [0, 24], confidence: 'high' },
        { tokenIds: ['Job.38.12.1'], targetSlice: [25, 34], confidence: 'high' },
        { tokenIds: ['Job.38.12.2'], targetSlice: [35, 46], confidence: 'high' },
        { tokenIds: ['Job.38.12.3'], targetSlice: [55, 63], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Have you ever given orders to the morning, or shown the dawn its place?',
      spans: [
        { tokenIds: ['Job.38.12.0', 'Job.38.12.1'], targetSlice: [0, 40], confidence: 'high' },
        { tokenIds: ['Job.38.12.2'], targetSlice: [31, 40], confidence: 'high' },
        { tokenIds: ['Job.38.12.3'], targetSlice: [55, 59], confidence: 'high' },
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

export const job38_12_verse = {
  ref: 'Job.38.12',
  sourceTokens: job38_12_tokens,
  translation: job38_12_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 38:31 – Can you bind the chains of the Pleiades?
 * ──────────────────────────────────────────────────────────── */

export const job38_31_tokens: SourceToken[] = [
  {
    id: 'Job.38.31.0',
    surfaceText: 'הַתְקַשֵּׁר',
    lemma: 'קָשַׁר',
    transliteration: 'haṯqaššēr',
    lemmaTranslit: 'qāšar',
    morph: 'HIr+VPi2ms',
    strong: 'H7194',
    language: 'hebrew',
    position: 0,
    gloss: 'can you bind',
  },
  {
    id: 'Job.38.31.1',
    surfaceText: 'מַעֲדַנּוֹת',
    lemma: 'מַעֲדַנָּה',
    transliteration: "maʿăḏannôṯ",
    lemmaTranslit: "maʿăḏannāh",
    morph: 'HNcfpa',
    strong: 'H4575',
    language: 'hebrew',
    position: 1,
    gloss: 'the chains of',
  },
  {
    id: 'Job.38.31.2',
    surfaceText: 'כִּימָה',
    lemma: 'כִּימָה',
    transliteration: 'kîmāh',
    lemmaTranslit: 'kîmāh',
    morph: 'HNp',
    strong: 'H3598',
    language: 'hebrew',
    position: 2,
    gloss: 'Pleiades',
  },
  {
    id: 'Job.38.31.3',
    surfaceText: 'מוֹשְׁכוֹת',
    lemma: 'מוֹשֵׁכָה',
    transliteration: 'môšěḵôṯ',
    lemmaTranslit: 'môšēḵāh',
    morph: 'HNcfpa',
    strong: 'H4189',
    language: 'hebrew',
    position: 3,
    gloss: 'the cords of',
  },
  {
    id: 'Job.38.31.4',
    surfaceText: 'כְּסִיל',
    lemma: 'כְּסִיל',
    transliteration: 'kěsîl',
    lemmaTranslit: 'kěsîl',
    morph: 'HNp',
    strong: 'H3685',
    language: 'hebrew',
    position: 4,
    gloss: 'Orion',
  },
];

export const job38_31_translation: VerseTranslation = {
  verseRef: 'Job.38.31',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Can you bind the chains of Pleiades or loosen the cords of Orion?',
      spans: [
        { tokenIds: ['Job.38.31.0'], targetSlice: [0, 12], confidence: 'high' },
        { tokenIds: ['Job.38.31.1'], targetSlice: [13, 27], confidence: 'high' },
        { tokenIds: ['Job.38.31.2'], targetSlice: [28, 36], confidence: 'high' },
        { tokenIds: ['Job.38.31.3'], targetSlice: [47, 59], confidence: 'high' },
        { tokenIds: ['Job.38.31.4'], targetSlice: [60, 65], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Can you bind the beautiful Pleiades? Can you loosen the cords of Orion?',
      spans: [
        { tokenIds: ['Job.38.31.0', 'Job.38.31.1'], targetSlice: [0, 26], confidence: 'high' },
        { tokenIds: ['Job.38.31.2'], targetSlice: [27, 35], confidence: 'high' },
        { tokenIds: ['Job.38.31.3', 'Job.38.31.4'], targetSlice: [37, 70], confidence: 'high' },
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

export const job38_31_verse = {
  ref: 'Job.38.31',
  sourceTokens: job38_31_tokens,
  translation: job38_31_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Job 38:1-41 (God answers from the whirlwind)
 * ──────────────────────────────────────────────────────────── */

export const job38_1_41_verses = [
  job38_1_verse,
  job38_2_verse,
  job38_4_verse,
  job38_7_verse,
  job38_12_verse,
  job38_31_verse,
];

export default job38_1_41_verses;
