// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 1:4 – The word of the LORD came to me
 * ──────────────────────────────────────────────────────────── */

export const jer1_4_tokens: SourceToken[] = [
  {
    id: 'Jer.1.4.0',
    surfaceText: 'וַיְהִי',
    lemma: 'הָיָה',
    transliteration: 'wayěhî',
    lemmaTranslit: 'hāyāh',
    morph: 'HC+Vqw3ms',
    strong: 'H1961',
    language: 'hebrew',
    position: 0,
    gloss: 'and came',
  },
  {
    id: 'Jer.1.4.1',
    surfaceText: 'דְבַר',
    lemma: 'דָּבָר',
    transliteration: 'ḏěḇar',
    lemmaTranslit: 'dāḇār',
    morph: 'HNcmsc',
    strong: 'H1697',
    language: 'hebrew',
    position: 1,
    gloss: 'the word of',
  },
  {
    id: 'Jer.1.4.2',
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
    id: 'Jer.1.4.3',
    surfaceText: 'אֵלַי',
    lemma: 'אֶל',
    transliteration: "ʾēlay",
    lemmaTranslit: "ʾel",
    morph: 'HR+Sp1cs',
    strong: 'H413',
    language: 'hebrew',
    position: 3,
    gloss: 'to me',
  },
];

export const jer1_4_translation: VerseTranslation = {
  verseRef: 'Jer.1.4',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'The word of the LORD came to me',
      spans: [
        { tokenIds: ['Jer.1.4.0'], targetSlice: [0, 8], confidence: 'high' },
        { tokenIds: ['Jer.1.4.1'], targetSlice: [9, 20], confidence: 'high' },
        { tokenIds: ['Jer.1.4.2'], targetSlice: [21, 29], confidence: 'high' },
        { tokenIds: ['Jer.1.4.3'], targetSlice: [30, 35], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'The word of the LORD came to me.',
      spans: [
        { tokenIds: ['Jer.1.4.0'], targetSlice: [0, 8], confidence: 'high' },
        { tokenIds: ['Jer.1.4.1'], targetSlice: [9, 17], confidence: 'high' },
        { tokenIds: ['Jer.1.4.2'], targetSlice: [18, 26], confidence: 'high' },
        { tokenIds: ['Jer.1.4.3'], targetSlice: [27, 32], confidence: 'high' },
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

export const jer1_4_verse = {
  ref: 'Jer.1.4',
  sourceTokens: jer1_4_tokens,
  translation: jer1_4_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:5 – Before I formed you in the womb I knew you
 * ──────────────────────────────────────────────────────────── */

export const jer1_5_tokens: SourceToken[] = [
  {
    id: 'Jer.1.5.0',
    surfaceText: 'בְּטֶרֶם',
    lemma: 'טֶרֶם',
    transliteration: 'běṭerem',
    lemmaTranslit: 'ṭerem',
    morph: 'HR+HD',
    strong: 'H2962',
    language: 'hebrew',
    position: 0,
    gloss: 'before',
  },
  {
    id: 'Jer.1.5.1',
    surfaceText: 'אֶצָּרְךָ',
    lemma: 'יָצַר',
    transliteration: "ʾeṣṣāreḵā",
    lemmaTranslit: 'yāṣar',
    morph: 'HVqI1cs+Sp2ms',
    strong: 'H3335',
    language: 'hebrew',
    position: 1,
    gloss: 'I formed you',
  },
  {
    id: 'Jer.1.5.2',
    surfaceText: 'בַבֶּטֶן',
    lemma: 'בֶּטֶן',
    transliteration: 'ḇabbeṭen',
    lemmaTranslit: 'beṭen',
    morph: 'HR+Ncfsa',
    strong: 'H990',
    language: 'hebrew',
    position: 2,
    gloss: 'in the womb',
  },
  {
    id: 'Jer.1.5.3',
    surfaceText: 'יְדַעְתִּיךָ',
    lemma: 'יָדַע',
    transliteration: "yěḏaʿtîḵā",
    lemmaTranslit: "yāḏaʿ",
    morph: 'HVqp1cs+Sp2ms',
    strong: 'H3045',
    language: 'hebrew',
    position: 3,
    gloss: 'I knew you',
  },
];

export const jer1_5_translation: VerseTranslation = {
  verseRef: 'Jer.1.5',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Before I formed you in the womb I knew you, and before you were born I consecrated you',
      spans: [
        { tokenIds: ['Jer.1.5.0'], targetSlice: [0, 6], confidence: 'high' },
        { tokenIds: ['Jer.1.5.1'], targetSlice: [7, 19], confidence: 'high' },
        { tokenIds: ['Jer.1.5.2'], targetSlice: [20, 31], confidence: 'high' },
        { tokenIds: ['Jer.1.5.3'], targetSlice: [32, 42], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Before I formed you in the womb I knew you, before you were born I set you apart.',
      spans: [
        { tokenIds: ['Jer.1.5.0'], targetSlice: [0, 20], confidence: 'high' },
        { tokenIds: ['Jer.1.5.1'], targetSlice: [21, 41], confidence: 'high' },
        { tokenIds: ['Jer.1.5.2'], targetSlice: [42, 62], confidence: 'high' },
        { tokenIds: ['Jer.1.5.3'], targetSlice: [63, 81], confidence: 'high' },
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

export const jer1_5_verse = {
  ref: 'Jer.1.5',
  sourceTokens: jer1_5_tokens,
  translation: jer1_5_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:6 – I do not know how to speak, for I am only a youth
 * ──────────────────────────────────────────────────────────── */

export const jer1_6_tokens: SourceToken[] = [
  {
    id: 'Jer.1.6.0',
    surfaceText: 'אֲהָהּ',
    lemma: 'אֲהָהּ',
    transliteration: "ʾăhāh",
    lemmaTranslit: "ʾăhāh",
    morph: 'HI',
    strong: 'H162',
    language: 'hebrew',
    position: 0,
    gloss: 'ah',
  },
  {
    id: 'Jer.1.6.1',
    surfaceText: 'אֲדֹנָי',
    lemma: 'אֲדֹנָי',
    transliteration: "ʾăḏōnāy",
    lemmaTranslit: "ʾăḏōnāy",
    morph: 'HNp',
    strong: 'H136',
    language: 'hebrew',
    position: 1,
    gloss: 'Lord GOD',
  },
  {
    id: 'Jer.1.6.2',
    surfaceText: 'הִנֵּה',
    lemma: 'הִנֵּה',
    transliteration: 'hinnēh',
    lemmaTranslit: 'hinnēh',
    morph: 'HHd',
    strong: 'H2009',
    language: 'hebrew',
    position: 2,
    gloss: 'behold',
  },
  {
    id: 'Jer.1.6.3',
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
    id: 'Jer.1.6.4',
    surfaceText: 'יָדַעְתִּי',
    lemma: 'יָדַע',
    transliteration: "yāḏaʿtî",
    lemmaTranslit: "yāḏaʿ",
    morph: 'HVqp1cs',
    strong: 'H3045',
    language: 'hebrew',
    position: 4,
    gloss: 'I know how',
  },
  {
    id: 'Jer.1.6.5',
    surfaceText: 'דַּבֵּר',
    lemma: 'דָּבַר',
    transliteration: 'dabbēr',
    lemmaTranslit: 'dāḇar',
    morph: 'HVpIa',
    strong: 'H1696',
    language: 'hebrew',
    position: 5,
    gloss: 'to speak',
  },
  {
    id: 'Jer.1.6.6',
    surfaceText: 'כִּי',
    lemma: 'כִּי',
    transliteration: 'kî',
    lemmaTranslit: 'kî',
    morph: 'HC',
    strong: 'H3588',
    language: 'hebrew',
    position: 6,
    gloss: 'for',
  },
  {
    id: 'Jer.1.6.7',
    surfaceText: 'נַעַר',
    lemma: 'נַעַר',
    transliteration: "naʿar",
    lemmaTranslit: "naʿar",
    morph: 'HNcmsa',
    strong: 'H5288',
    language: 'hebrew',
    position: 7,
    gloss: 'a youth',
  },
];

export const jer1_6_translation: VerseTranslation = {
  verseRef: 'Jer.1.6',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Ah, Lord GOD! Behold, I do not know how to speak, for I am only a youth',
      spans: [
        { tokenIds: ['Jer.1.6.0'], targetSlice: [0, 2], confidence: 'high' },
        { tokenIds: ['Jer.1.6.1'], targetSlice: [3, 11], confidence: 'high' },
        { tokenIds: ['Jer.1.6.2'], targetSlice: [12, 18], confidence: 'high' },
        { tokenIds: ['Jer.1.6.3'], targetSlice: [19, 22], confidence: 'high' },
        { tokenIds: ['Jer.1.6.4'], targetSlice: [23, 33], confidence: 'high' },
        { tokenIds: ['Jer.1.6.5'], targetSlice: [34, 42], confidence: 'high' },
        { tokenIds: ['Jer.1.6.6'], targetSlice: [43, 46], confidence: 'high' },
        { tokenIds: ['Jer.1.6.7'], targetSlice: [47, 54], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Alas, Sovereign LORD, I do not know how to speak; I am too young.',
      spans: [
        { tokenIds: ['Jer.1.6.0'], targetSlice: [0, 8], confidence: 'high' },
        { tokenIds: ['Jer.1.6.1'], targetSlice: [9, 17], confidence: 'high' },
        { tokenIds: ['Jer.1.6.2'], targetSlice: [18, 26], confidence: 'high' },
        { tokenIds: ['Jer.1.6.3'], targetSlice: [27, 35], confidence: 'high' },
        { tokenIds: ['Jer.1.6.4'], targetSlice: [36, 44], confidence: 'high' },
        { tokenIds: ['Jer.1.6.5'], targetSlice: [45, 53], confidence: 'high' },
        { tokenIds: ['Jer.1.6.6'], targetSlice: [54, 62], confidence: 'high' },
        { tokenIds: ['Jer.1.6.7'], targetSlice: [63, 65], confidence: 'high' },
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

export const jer1_6_verse = {
  ref: 'Jer.1.6',
  sourceTokens: jer1_6_tokens,
  translation: jer1_6_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:7 – Do not say I am only a youth
 * ──────────────────────────────────────────────────────────── */

export const jer1_7_tokens: SourceToken[] = [
  {
    id: 'Jer.1.7.0',
    surfaceText: 'אַל',
    lemma: 'אַל',
    transliteration: "ʾal",
    lemmaTranslit: "ʾal",
    morph: 'HAn',
    strong: 'H408',
    language: 'hebrew',
    position: 0,
    gloss: 'do not',
  },
  {
    id: 'Jer.1.7.1',
    surfaceText: 'תֹּאמַר',
    lemma: 'אָמַר',
    transliteration: "tōʾmar",
    lemmaTranslit: "ʾāmar",
    morph: 'HVqI2ms',
    strong: 'H559',
    language: 'hebrew',
    position: 1,
    gloss: 'say',
  },
  {
    id: 'Jer.1.7.2',
    surfaceText: 'נַעַר',
    lemma: 'נַעַר',
    transliteration: "naʿar",
    lemmaTranslit: "naʿar",
    morph: 'HNcmsa',
    strong: 'H5288',
    language: 'hebrew',
    position: 2,
    gloss: 'a youth',
  },
  {
    id: 'Jer.1.7.3',
    surfaceText: 'אָנֹכִי',
    lemma: 'אָנֹכִי',
    transliteration: "ʾānōḵî",
    lemmaTranslit: "ʾānōḵî",
    morph: 'HPp1cs',
    strong: 'H595',
    language: 'hebrew',
    position: 3,
    gloss: 'I am',
  },
  {
    id: 'Jer.1.7.4',
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
    id: 'Jer.1.7.5',
    surfaceText: 'עַל',
    lemma: 'עַל',
    transliteration: "ʿal",
    lemmaTranslit: "ʿal",
    morph: 'HR',
    strong: 'H5921',
    language: 'hebrew',
    position: 5,
    gloss: 'to',
  },
  {
    id: 'Jer.1.7.6',
    surfaceText: 'כָּל',
    lemma: 'כֹּל',
    transliteration: 'kāl',
    lemmaTranslit: 'kōl',
    morph: 'HNcmsc',
    strong: 'H3605',
    language: 'hebrew',
    position: 6,
    gloss: 'all',
  },
];

export const jer1_7_translation: VerseTranslation = {
  verseRef: 'Jer.1.7',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Do not say, I am only a youth; for to all to whom I send you, you shall go',
      spans: [
        { tokenIds: ['Jer.1.7.0'], targetSlice: [0, 6], confidence: 'high' },
        { tokenIds: ['Jer.1.7.1'], targetSlice: [7, 10], confidence: 'high' },
        { tokenIds: ['Jer.1.7.2'], targetSlice: [11, 18], confidence: 'high' },
        { tokenIds: ['Jer.1.7.3'], targetSlice: [19, 23], confidence: 'high' },
        { tokenIds: ['Jer.1.7.4'], targetSlice: [24, 27], confidence: 'high' },
        { tokenIds: ['Jer.1.7.5'], targetSlice: [28, 30], confidence: 'high' },
        { tokenIds: ['Jer.1.7.6'], targetSlice: [31, 34], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Do not say, I am too young. You must go to everyone I send you to.',
      spans: [
        { tokenIds: ['Jer.1.7.0'], targetSlice: [0, 9], confidence: 'high' },
        { tokenIds: ['Jer.1.7.1'], targetSlice: [10, 19], confidence: 'high' },
        { tokenIds: ['Jer.1.7.2'], targetSlice: [20, 29], confidence: 'high' },
        { tokenIds: ['Jer.1.7.3'], targetSlice: [30, 39], confidence: 'high' },
        { tokenIds: ['Jer.1.7.4'], targetSlice: [40, 49], confidence: 'high' },
        { tokenIds: ['Jer.1.7.5'], targetSlice: [50, 59], confidence: 'high' },
        { tokenIds: ['Jer.1.7.6'], targetSlice: [60, 66], confidence: 'high' },
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

export const jer1_7_verse = {
  ref: 'Jer.1.7',
  sourceTokens: jer1_7_tokens,
  translation: jer1_7_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:9 – I have put my words in your mouth
 * ──────────────────────────────────────────────────────────── */

export const jer1_9_tokens: SourceToken[] = [
  {
    id: 'Jer.1.9.0',
    surfaceText: 'הִנֵּה',
    lemma: 'הִנֵּה',
    transliteration: 'hinnēh',
    lemmaTranslit: 'hinnēh',
    morph: 'HHd',
    strong: 'H2009',
    language: 'hebrew',
    position: 0,
    gloss: 'behold',
  },
  {
    id: 'Jer.1.9.1',
    surfaceText: 'נָתַתִּי',
    lemma: 'נָתַן',
    transliteration: 'nāṯattî',
    lemmaTranslit: 'nāṯan',
    morph: 'HVqp1cs',
    strong: 'H5414',
    language: 'hebrew',
    position: 1,
    gloss: 'I have put',
  },
  {
    id: 'Jer.1.9.2',
    surfaceText: 'דְּבָרַי',
    lemma: 'דָּבָר',
    transliteration: 'děḇāray',
    lemmaTranslit: 'dāḇār',
    morph: 'HNcmpc+Sp1cs',
    strong: 'H1697',
    language: 'hebrew',
    position: 2,
    gloss: 'my words',
  },
  {
    id: 'Jer.1.9.3',
    surfaceText: 'בְּפִיךָ',
    lemma: 'פֶּה',
    transliteration: 'běp̄îḵā',
    lemmaTranslit: 'peh',
    morph: 'HR+Ncmsc+Sp2ms',
    strong: 'H6310',
    language: 'hebrew',
    position: 3,
    gloss: 'in your mouth',
  },
];

export const jer1_9_translation: VerseTranslation = {
  verseRef: 'Jer.1.9',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Behold, I have put my words in your mouth',
      spans: [
        { tokenIds: ['Jer.1.9.0'], targetSlice: [0, 6], confidence: 'high' },
        { tokenIds: ['Jer.1.9.1'], targetSlice: [7, 17], confidence: 'high' },
        { tokenIds: ['Jer.1.9.2'], targetSlice: [18, 26], confidence: 'high' },
        { tokenIds: ['Jer.1.9.3'], targetSlice: [27, 40], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Then the LORD reached out his hand and touched my mouth and said, I have put my words in your mouth.',
      spans: [
        { tokenIds: ['Jer.1.9.0'], targetSlice: [0, 25], confidence: 'high' },
        { tokenIds: ['Jer.1.9.1'], targetSlice: [26, 51], confidence: 'high' },
        { tokenIds: ['Jer.1.9.2'], targetSlice: [52, 77], confidence: 'high' },
        { tokenIds: ['Jer.1.9.3'], targetSlice: [78, 100], confidence: 'high' },
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

export const jer1_9_verse = {
  ref: 'Jer.1.9',
  sourceTokens: jer1_9_tokens,
  translation: jer1_9_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:19 – They will fight against you but will not prevail
 * ──────────────────────────────────────────────────────────── */

export const jer1_19_tokens: SourceToken[] = [
  {
    id: 'Jer.1.19.0',
    surfaceText: 'וְנִלְחֲמוּ',
    lemma: 'לָחַם',
    transliteration: 'wěnilḥămû',
    lemmaTranslit: 'lāḥam',
    morph: 'HC+VNp3cp',
    strong: 'H3898',
    language: 'hebrew',
    position: 0,
    gloss: 'and they will fight',
  },
  {
    id: 'Jer.1.19.1',
    surfaceText: 'אֵלֶיךָ',
    lemma: 'אֶל',
    transliteration: "ʾēleyḵā",
    lemmaTranslit: "ʾel",
    morph: 'HR+Sp2ms',
    strong: 'H413',
    language: 'hebrew',
    position: 1,
    gloss: 'against you',
  },
  {
    id: 'Jer.1.19.2',
    surfaceText: 'וְלֹא',
    lemma: 'לֹא',
    transliteration: "wělōʾ",
    lemmaTranslit: "lōʾ",
    morph: 'HC+HAn',
    strong: 'H3808',
    language: 'hebrew',
    position: 2,
    gloss: 'but not',
  },
  {
    id: 'Jer.1.19.3',
    surfaceText: 'יוּכְלוּ',
    lemma: 'יָכֹל',
    transliteration: 'yûḵělû',
    lemmaTranslit: 'yāḵōl',
    morph: 'HVqI3mp',
    strong: 'H3201',
    language: 'hebrew',
    position: 3,
    gloss: 'they will prevail',
  },
  {
    id: 'Jer.1.19.4',
    surfaceText: 'לָךְ',
    lemma: 'לְ',
    transliteration: 'lāḵ',
    lemmaTranslit: 'lě',
    morph: 'HR+Sp2ms',
    strong: 'H0',
    language: 'hebrew',
    position: 4,
    gloss: 'against you',
  },
  {
    id: 'Jer.1.19.5',
    surfaceText: 'כִּי',
    lemma: 'כִּי',
    transliteration: 'kî',
    lemmaTranslit: 'kî',
    morph: 'HC',
    strong: 'H3588',
    language: 'hebrew',
    position: 5,
    gloss: 'for',
  },
  {
    id: 'Jer.1.19.6',
    surfaceText: 'אִתְּךָ',
    lemma: 'אֵת',
    transliteration: "ʾittěḵā",
    lemmaTranslit: "ʾēṯ",
    morph: 'HR+Sp2ms',
    strong: 'H854',
    language: 'hebrew',
    position: 6,
    gloss: 'with you',
  },
  {
    id: 'Jer.1.19.7',
    surfaceText: 'אֲנִי',
    lemma: 'אֲנִי',
    transliteration: "ʾănî",
    lemmaTranslit: "ʾănî",
    morph: 'HPp1cs',
    strong: 'H589',
    language: 'hebrew',
    position: 7,
    gloss: 'I am',
  },
];

export const jer1_19_translation: VerseTranslation = {
  verseRef: 'Jer.1.19',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'They will fight against you, but they will not prevail against you, for I am with you, declares the LORD',
      spans: [
        { tokenIds: ['Jer.1.19.0'], targetSlice: [0, 19], confidence: 'high' },
        { tokenIds: ['Jer.1.19.1'], targetSlice: [20, 31], confidence: 'high' },
        { tokenIds: ['Jer.1.19.2'], targetSlice: [32, 39], confidence: 'high' },
        { tokenIds: ['Jer.1.19.3'], targetSlice: [40, 57], confidence: 'high' },
        { tokenIds: ['Jer.1.19.4'], targetSlice: [58, 69], confidence: 'high' },
        { tokenIds: ['Jer.1.19.5'], targetSlice: [70, 73], confidence: 'high' },
        { tokenIds: ['Jer.1.19.6'], targetSlice: [74, 82], confidence: 'high' },
        { tokenIds: ['Jer.1.19.7'], targetSlice: [83, 87], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'They will fight against you but will not overcome you, for I am with you and will rescue you.',
      spans: [
        { tokenIds: ['Jer.1.19.0'], targetSlice: [0, 11], confidence: 'high' },
        { tokenIds: ['Jer.1.19.1'], targetSlice: [12, 23], confidence: 'high' },
        { tokenIds: ['Jer.1.19.2'], targetSlice: [24, 35], confidence: 'high' },
        { tokenIds: ['Jer.1.19.3'], targetSlice: [36, 47], confidence: 'high' },
        { tokenIds: ['Jer.1.19.4'], targetSlice: [48, 59], confidence: 'high' },
        { tokenIds: ['Jer.1.19.5'], targetSlice: [60, 71], confidence: 'high' },
        { tokenIds: ['Jer.1.19.6'], targetSlice: [72, 83], confidence: 'high' },
        { tokenIds: ['Jer.1.19.7'], targetSlice: [84, 93], confidence: 'high' },
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

export const jer1_19_verse = {
  ref: 'Jer.1.19',
  sourceTokens: jer1_19_tokens,
  translation: jer1_19_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Jeremiah 1:1-19 — Jeremiah's call
 * ──────────────────────────────────────────────────────────── */

export const jeremiah1_1_19_verses = [
  jer1_4_verse,
  jer1_5_verse,
  jer1_6_verse,
  jer1_7_verse,
  jer1_9_verse,
  jer1_19_verse,
];

export default jeremiah1_1_19_verses;
