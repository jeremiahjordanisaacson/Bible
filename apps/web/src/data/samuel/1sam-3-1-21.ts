// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 3:1 – The word of the LORD was rare in those days
 * ──────────────────────────────────────────────────────────── */

export const samuel1_3_1_tokens: SourceToken[] = [
  {
    id: '1Sam.3.1.0',
    surfaceText: 'וְהַנַּעַר',
    lemma: 'נַעַר',
    transliteration: 'wěhannaʿar',
    lemmaTranslit: 'naʿar',
    morph: 'HC+HTd+Ncmsa',
    strong: 'H5288',
    language: 'hebrew',
    position: 0,
    gloss: 'and the boy',
  },
  {
    id: '1Sam.3.1.1',
    surfaceText: 'שְׁמוּאֵל',
    lemma: 'שְׁמוּאֵל',
    transliteration: "šěmûʾēl",
    lemmaTranslit: "šěmûʾēl",
    morph: 'HNp',
    strong: 'H8050',
    language: 'hebrew',
    position: 1,
    gloss: 'Samuel',
  },
  {
    id: '1Sam.3.1.2',
    surfaceText: 'מְשָׁרֵת',
    lemma: 'שָׁרַת',
    transliteration: 'měšārēṯ',
    lemmaTranslit: 'šāraṯ',
    morph: 'HVprmsa',
    strong: 'H8334',
    language: 'hebrew',
    position: 2,
    gloss: 'was ministering',
  },
  {
    id: '1Sam.3.1.3',
    surfaceText: 'וּדְבַר',
    lemma: 'דָּבָר',
    transliteration: 'ûḏěḇar',
    lemmaTranslit: 'dāḇār',
    morph: 'HC+Ncmsc',
    strong: 'H1697',
    language: 'hebrew',
    position: 3,
    gloss: 'and the word of',
  },
  {
    id: '1Sam.3.1.4',
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
    id: '1Sam.3.1.5',
    surfaceText: 'הָיָה',
    lemma: 'הָיָה',
    transliteration: 'hāyāh',
    lemmaTranslit: 'hāyāh',
    morph: 'HVqp3ms',
    strong: 'H1961',
    language: 'hebrew',
    position: 5,
    gloss: 'was',
  },
  {
    id: '1Sam.3.1.6',
    surfaceText: 'יָקָר',
    lemma: 'יָקָר',
    transliteration: 'yāqār',
    lemmaTranslit: 'yāqār',
    morph: 'HAamsa',
    strong: 'H3368',
    language: 'hebrew',
    position: 6,
    gloss: 'rare',
  },
];

export const samuel1_3_1_translation: VerseTranslation = {
  verseRef: '1Sam.3.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And the boy Samuel was ministering to the LORD before Eli. And the word of the LORD was rare in those days.',
      spans: [
        { tokenIds: ['1Sam.3.1.0'], targetSlice: [0, 13], confidence: 'high' },
        { tokenIds: ['1Sam.3.1.1'], targetSlice: [14, 20], confidence: 'high' },
        { tokenIds: ['1Sam.3.1.2'], targetSlice: [21, 35], confidence: 'high' },
        { tokenIds: ['1Sam.3.1.3'], targetSlice: [56, 70], confidence: 'high' },
        { tokenIds: ['1Sam.3.1.4'], targetSlice: [71, 79], confidence: 'high' },
        { tokenIds: ['1Sam.3.1.5'], targetSlice: [80, 83], confidence: 'high' },
        { tokenIds: ['1Sam.3.1.6'], targetSlice: [84, 88], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "The boy Samuel ministered before the LORD under Eli. In those days the word of the LORD was rare.",
      spans: [
        { tokenIds: ['1Sam.3.1.0', '1Sam.3.1.1'], targetSlice: [0, 18], confidence: 'high' },
        { tokenIds: ['1Sam.3.1.2'], targetSlice: [19, 28], confidence: 'high' },
        { tokenIds: ['1Sam.3.1.3', '1Sam.3.1.4'], targetSlice: [65, 84], confidence: 'high' },
        { tokenIds: ['1Sam.3.1.5', '1Sam.3.1.6'], targetSlice: [85, 93], confidence: 'high' },
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

export const samuel1_3_1_verse = {
  ref: '1Sam.3.1',
  sourceTokens: samuel1_3_1_tokens,
  translation: samuel1_3_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 3:4 – The LORD called Samuel
 * ──────────────────────────────────────────────────────────── */

export const samuel1_3_4_tokens: SourceToken[] = [
  {
    id: '1Sam.3.4.0',
    surfaceText: 'וַיִּקְרָא',
    lemma: 'קָרָא',
    transliteration: 'wayyiqrāʾ',
    lemmaTranslit: 'qārāʾ',
    morph: 'HC+VqW3ms',
    strong: 'H7121',
    language: 'hebrew',
    position: 0,
    gloss: 'and he called',
  },
  {
    id: '1Sam.3.4.1',
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
    id: '1Sam.3.4.2',
    surfaceText: 'אֶל',
    lemma: 'אֶל',
    transliteration: "ʾel",
    lemmaTranslit: "ʾel",
    morph: 'HR',
    strong: 'H413',
    language: 'hebrew',
    position: 2,
    gloss: 'to',
  },
  {
    id: '1Sam.3.4.3',
    surfaceText: 'שְׁמוּאֵל',
    lemma: 'שְׁמוּאֵל',
    transliteration: "šěmûʾēl",
    lemmaTranslit: "šěmûʾēl",
    morph: 'HNp',
    strong: 'H8050',
    language: 'hebrew',
    position: 3,
    gloss: 'Samuel',
  },
  {
    id: '1Sam.3.4.4',
    surfaceText: 'וַיֹּאמֶר',
    lemma: 'אָמַר',
    transliteration: 'wayyōʾmer',
    lemmaTranslit: "ʾāmar",
    morph: 'HC+VqW3ms',
    strong: 'H559',
    language: 'hebrew',
    position: 4,
    gloss: 'and he said',
  },
  {
    id: '1Sam.3.4.5',
    surfaceText: 'הִנֵּנִי',
    lemma: 'הִנֵּה',
    transliteration: 'hinnēnî',
    lemmaTranslit: 'hinnēh',
    morph: 'HTm+Sp1cs',
    strong: 'H2009',
    language: 'hebrew',
    position: 5,
    gloss: 'here I am',
  },
];

export const samuel1_3_4_translation: VerseTranslation = {
  verseRef: '1Sam.3.4',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And the LORD called to Samuel, and he said, "Here I am."',
      spans: [
        { tokenIds: ['1Sam.3.4.0'], targetSlice: [0, 14], confidence: 'high' },
        { tokenIds: ['1Sam.3.4.1'], targetSlice: [8, 16], confidence: 'high' },
        { tokenIds: ['1Sam.3.4.2'], targetSlice: [17, 19], confidence: 'high' },
        { tokenIds: ['1Sam.3.4.3'], targetSlice: [20, 26], confidence: 'high' },
        { tokenIds: ['1Sam.3.4.4'], targetSlice: [28, 40], confidence: 'high' },
        { tokenIds: ['1Sam.3.4.5'], targetSlice: [42, 52], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Then the LORD called Samuel, and he said, "Here I am!"',
      spans: [
        { tokenIds: ['1Sam.3.4.0', '1Sam.3.4.1'], targetSlice: [0, 24], confidence: 'high' },
        { tokenIds: ['1Sam.3.4.2', '1Sam.3.4.3'], targetSlice: [25, 31], confidence: 'high' },
        { tokenIds: ['1Sam.3.4.4', '1Sam.3.4.5'], targetSlice: [33, 54], confidence: 'high' },
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

export const samuel1_3_4_verse = {
  ref: '1Sam.3.4',
  sourceTokens: samuel1_3_4_tokens,
  translation: samuel1_3_4_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 3:9 – Speak LORD for your servant hears
 * ──────────────────────────────────────────────────────────── */

export const samuel1_3_9_tokens: SourceToken[] = [
  {
    id: '1Sam.3.9.0',
    surfaceText: 'דַּבֵּר',
    lemma: 'דָּבַר',
    transliteration: 'dabbēr',
    lemmaTranslit: 'dāḇar',
    morph: 'HVpv2ms',
    strong: 'H1696',
    language: 'hebrew',
    position: 0,
    gloss: 'speak',
  },
  {
    id: '1Sam.3.9.1',
    surfaceText: 'יְהוָה',
    lemma: 'יְהוָה',
    transliteration: 'yhwh',
    lemmaTranslit: 'yhwh',
    morph: 'HNp',
    strong: 'H3068',
    language: 'hebrew',
    position: 1,
    gloss: 'LORD',
  },
  {
    id: '1Sam.3.9.2',
    surfaceText: 'כִּי',
    lemma: 'כִּי',
    transliteration: 'kî',
    lemmaTranslit: 'kî',
    morph: 'HC',
    strong: 'H3588',
    language: 'hebrew',
    position: 2,
    gloss: 'for',
  },
  {
    id: '1Sam.3.9.3',
    surfaceText: 'שֹׁמֵעַ',
    lemma: 'שָׁמַע',
    transliteration: "šōmēaʿ",
    lemmaTranslit: "šāmaʿ",
    morph: 'HVqrmsa',
    strong: 'H8085',
    language: 'hebrew',
    position: 3,
    gloss: 'hears',
  },
  {
    id: '1Sam.3.9.4',
    surfaceText: 'עַבְדֶּךָ',
    lemma: 'עֶבֶד',
    transliteration: "ʿaḇděḵā",
    lemmaTranslit: "ʿeḇeḏ",
    morph: 'HNcmsc+Sp2ms',
    strong: 'H5650',
    language: 'hebrew',
    position: 4,
    gloss: 'your servant',
  },
];

export const samuel1_3_9_translation: VerseTranslation = {
  verseRef: '1Sam.3.9',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Speak, LORD, for your servant hears.',
      spans: [
        { tokenIds: ['1Sam.3.9.0'], targetSlice: [0, 5], confidence: 'high' },
        { tokenIds: ['1Sam.3.9.1'], targetSlice: [7, 11], confidence: 'high' },
        { tokenIds: ['1Sam.3.9.2'], targetSlice: [13, 16], confidence: 'high' },
        { tokenIds: ['1Sam.3.9.3'], targetSlice: [30, 35], confidence: 'high' },
        { tokenIds: ['1Sam.3.9.4'], targetSlice: [17, 29], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Speak, LORD, for your servant is listening.',
      spans: [
        { tokenIds: ['1Sam.3.9.0', '1Sam.3.9.1'], targetSlice: [0, 11], confidence: 'high' },
        { tokenIds: ['1Sam.3.9.2'], targetSlice: [13, 16], confidence: 'high' },
        { tokenIds: ['1Sam.3.9.3', '1Sam.3.9.4'], targetSlice: [17, 43], confidence: 'high' },
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

export const samuel1_3_9_verse = {
  ref: '1Sam.3.9',
  sourceTokens: samuel1_3_9_tokens,
  translation: samuel1_3_9_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 3:10 – The LORD came and stood and called
 * ──────────────────────────────────────────────────────────── */

export const samuel1_3_10_tokens: SourceToken[] = [
  {
    id: '1Sam.3.10.0',
    surfaceText: 'וַיָּבֹא',
    lemma: 'בּוֹא',
    transliteration: 'wayyāḇōʾ',
    lemmaTranslit: 'bôʾ',
    morph: 'HC+VqW3ms',
    strong: 'H935',
    language: 'hebrew',
    position: 0,
    gloss: 'and he came',
  },
  {
    id: '1Sam.3.10.1',
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
    id: '1Sam.3.10.2',
    surfaceText: 'וַיִּתְיַצַּב',
    lemma: 'יָצַב',
    transliteration: 'wayyiṯyaṣṣaḇ',
    lemmaTranslit: 'yāṣaḇ',
    morph: 'HC+VtW3ms',
    strong: 'H3320',
    language: 'hebrew',
    position: 2,
    gloss: 'and stood',
  },
  {
    id: '1Sam.3.10.3',
    surfaceText: 'וַיִּקְרָא',
    lemma: 'קָרָא',
    transliteration: 'wayyiqrāʾ',
    lemmaTranslit: 'qārāʾ',
    morph: 'HC+VqW3ms',
    strong: 'H7121',
    language: 'hebrew',
    position: 3,
    gloss: 'and called',
  },
  {
    id: '1Sam.3.10.4',
    surfaceText: 'שְׁמוּאֵל',
    lemma: 'שְׁמוּאֵל',
    transliteration: "šěmûʾēl",
    lemmaTranslit: "šěmûʾēl",
    morph: 'HNp',
    strong: 'H8050',
    language: 'hebrew',
    position: 4,
    gloss: 'Samuel',
  },
  {
    id: '1Sam.3.10.5',
    surfaceText: 'שְׁמוּאֵל',
    lemma: 'שְׁמוּאֵל',
    transliteration: "šěmûʾēl",
    lemmaTranslit: "šěmûʾēl",
    morph: 'HNp',
    strong: 'H8050',
    language: 'hebrew',
    position: 5,
    gloss: 'Samuel',
  },
];

export const samuel1_3_10_translation: VerseTranslation = {
  verseRef: '1Sam.3.10',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And the LORD came and stood and called as at other times, "Samuel! Samuel!"',
      spans: [
        { tokenIds: ['1Sam.3.10.0'], targetSlice: [0, 14], confidence: 'high' },
        { tokenIds: ['1Sam.3.10.1'], targetSlice: [8, 16], confidence: 'high' },
        { tokenIds: ['1Sam.3.10.2'], targetSlice: [21, 26], confidence: 'high' },
        { tokenIds: ['1Sam.3.10.3'], targetSlice: [27, 37], confidence: 'high' },
        { tokenIds: ['1Sam.3.10.4'], targetSlice: [56, 63], confidence: 'high' },
        { tokenIds: ['1Sam.3.10.5'], targetSlice: [65, 72], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'The LORD came and stood there, calling as before, "Samuel! Samuel!"',
      spans: [
        { tokenIds: ['1Sam.3.10.0', '1Sam.3.10.1'], targetSlice: [0, 17], confidence: 'high' },
        { tokenIds: ['1Sam.3.10.2'], targetSlice: [18, 28], confidence: 'high' },
        { tokenIds: ['1Sam.3.10.3'], targetSlice: [30, 48], confidence: 'high' },
        { tokenIds: ['1Sam.3.10.4', '1Sam.3.10.5'], targetSlice: [50, 67], confidence: 'high' },
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

export const samuel1_3_10_verse = {
  ref: '1Sam.3.10',
  sourceTokens: samuel1_3_10_tokens,
  translation: samuel1_3_10_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 3:19 – Samuel grew and the LORD was with him
 * ──────────────────────────────────────────────────────────── */

export const samuel1_3_19_tokens: SourceToken[] = [
  {
    id: '1Sam.3.19.0',
    surfaceText: 'וַיִּגְדַּל',
    lemma: 'גָּדַל',
    transliteration: 'wayyiḡdal',
    lemmaTranslit: 'gāḏal',
    morph: 'HC+VqW3ms',
    strong: 'H1431',
    language: 'hebrew',
    position: 0,
    gloss: 'and he grew',
  },
  {
    id: '1Sam.3.19.1',
    surfaceText: 'שְׁמוּאֵל',
    lemma: 'שְׁמוּאֵל',
    transliteration: "šěmûʾēl",
    lemmaTranslit: "šěmûʾēl",
    morph: 'HNp',
    strong: 'H8050',
    language: 'hebrew',
    position: 1,
    gloss: 'Samuel',
  },
  {
    id: '1Sam.3.19.2',
    surfaceText: 'וַיהוָה',
    lemma: 'יְהוָה',
    transliteration: 'wayhwh',
    lemmaTranslit: 'yhwh',
    morph: 'HC+HNp',
    strong: 'H3068',
    language: 'hebrew',
    position: 2,
    gloss: 'and the LORD',
  },
  {
    id: '1Sam.3.19.3',
    surfaceText: 'הָיָה',
    lemma: 'הָיָה',
    transliteration: 'hāyāh',
    lemmaTranslit: 'hāyāh',
    morph: 'HVqp3ms',
    strong: 'H1961',
    language: 'hebrew',
    position: 3,
    gloss: 'was',
  },
  {
    id: '1Sam.3.19.4',
    surfaceText: 'עִמּוֹ',
    lemma: 'עִם',
    transliteration: "ʿimmô",
    lemmaTranslit: "ʿim",
    morph: 'HR+Sp3ms',
    strong: 'H5973',
    language: 'hebrew',
    position: 4,
    gloss: 'with him',
  },
];

export const samuel1_3_19_translation: VerseTranslation = {
  verseRef: '1Sam.3.19',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And Samuel grew, and the LORD was with him and let none of his words fall to the ground.',
      spans: [
        { tokenIds: ['1Sam.3.19.0'], targetSlice: [0, 16], confidence: 'high' },
        { tokenIds: ['1Sam.3.19.1'], targetSlice: [4, 10], confidence: 'high' },
        { tokenIds: ['1Sam.3.19.2'], targetSlice: [22, 30], confidence: 'high' },
        { tokenIds: ['1Sam.3.19.3'], targetSlice: [31, 34], confidence: 'high' },
        { tokenIds: ['1Sam.3.19.4'], targetSlice: [35, 43], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "Samuel grew up, and the LORD was with him, letting none of his words fall to the ground.",
      spans: [
        { tokenIds: ['1Sam.3.19.0', '1Sam.3.19.1'], targetSlice: [0, 16], confidence: 'high' },
        { tokenIds: ['1Sam.3.19.2', '1Sam.3.19.3'], targetSlice: [22, 38], confidence: 'high' },
        { tokenIds: ['1Sam.3.19.4'], targetSlice: [39, 47], confidence: 'high' },
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

export const samuel1_3_19_verse = {
  ref: '1Sam.3.19',
  sourceTokens: samuel1_3_19_tokens,
  translation: samuel1_3_19_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 3:21 – The LORD revealed himself to Samuel
 * ──────────────────────────────────────────────────────────── */

export const samuel1_3_21_tokens: SourceToken[] = [
  {
    id: '1Sam.3.21.0',
    surfaceText: 'וַיֹּסֶף',
    lemma: 'יָסַף',
    transliteration: 'wayyōsep̄',
    lemmaTranslit: 'yāsap̄',
    morph: 'HC+VhW3ms',
    strong: 'H3254',
    language: 'hebrew',
    position: 0,
    gloss: 'and he continued',
  },
  {
    id: '1Sam.3.21.1',
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
    id: '1Sam.3.21.2',
    surfaceText: 'לְהֵרָאֹה',
    lemma: 'רָאָה',
    transliteration: 'lěhērāʾōh',
    lemmaTranslit: 'rāʾāh',
    morph: 'HR+VNc',
    strong: 'H7200',
    language: 'hebrew',
    position: 2,
    gloss: 'to appear',
  },
  {
    id: '1Sam.3.21.3',
    surfaceText: 'בְּשִׁלֹה',
    lemma: 'שִׁלֹה',
    transliteration: 'běšilōh',
    lemmaTranslit: 'šilōh',
    morph: 'HR+HNp',
    strong: 'H7887',
    language: 'hebrew',
    position: 3,
    gloss: 'in Shiloh',
  },
  {
    id: '1Sam.3.21.4',
    surfaceText: 'בִּדְבַר',
    lemma: 'דָּבָר',
    transliteration: 'biḏḇar',
    lemmaTranslit: 'dāḇār',
    morph: 'HR+Ncmsc',
    strong: 'H1697',
    language: 'hebrew',
    position: 4,
    gloss: 'by the word of',
  },
  {
    id: '1Sam.3.21.5',
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
];

export const samuel1_3_21_translation: VerseTranslation = {
  verseRef: '1Sam.3.21',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And the LORD appeared again in Shiloh, for the LORD revealed himself to Samuel in Shiloh by the word of the LORD.',
      spans: [
        { tokenIds: ['1Sam.3.21.0'], targetSlice: [0, 22], confidence: 'high' },
        { tokenIds: ['1Sam.3.21.1'], targetSlice: [8, 16], confidence: 'high' },
        { tokenIds: ['1Sam.3.21.2'], targetSlice: [17, 25], confidence: 'high' },
        { tokenIds: ['1Sam.3.21.3'], targetSlice: [26, 35], confidence: 'high' },
        { tokenIds: ['1Sam.3.21.4'], targetSlice: [91, 109], confidence: 'high' },
        { tokenIds: ['1Sam.3.21.5'], targetSlice: [103, 111], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "The LORD continued to appear at Shiloh, for he revealed himself to Samuel there by the word of the LORD.",
      spans: [
        { tokenIds: ['1Sam.3.21.0', '1Sam.3.21.1'], targetSlice: [0, 26], confidence: 'high' },
        { tokenIds: ['1Sam.3.21.2'], targetSlice: [27, 36], confidence: 'high' },
        { tokenIds: ['1Sam.3.21.3'], targetSlice: [37, 46], confidence: 'high' },
        { tokenIds: ['1Sam.3.21.4', '1Sam.3.21.5'], targetSlice: [78, 104], confidence: 'high' },
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

export const samuel1_3_21_verse = {
  ref: '1Sam.3.21',
  sourceTokens: samuel1_3_21_tokens,
  translation: samuel1_3_21_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — 1 Samuel 3:1-21 (Samuel's call)
 * ──────────────────────────────────────────────────────────── */

export const samuel1_3_1_21_verses = [
  samuel1_3_1_verse,
  samuel1_3_4_verse,
  samuel1_3_9_verse,
  samuel1_3_10_verse,
  samuel1_3_19_verse,
  samuel1_3_21_verse,
];

export default samuel1_3_1_21_verses;
