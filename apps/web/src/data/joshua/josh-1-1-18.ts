// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 1:1 – After the death of Moses…the LORD said to Joshua
 * ──────────────────────────────────────────────────────────── */

export const joshua1_1_tokens: SourceToken[] = [
  {
    id: 'Josh.1.1.0',
    surfaceText: 'וַיְהִי',
    lemma: 'הָיָה',
    transliteration: 'wayěhî',
    lemmaTranslit: 'hāyāh',
    morph: 'HC+Vqw3ms',
    strong: 'H1961',
    language: 'hebrew',
    position: 0,
    gloss: 'and it was',
  },
  {
    id: 'Josh.1.1.1',
    surfaceText: 'אַחֲרֵי',
    lemma: 'אַחַר',
    transliteration: "ʾaḥărê",
    lemmaTranslit: "ʾaḥar",
    morph: 'HR',
    strong: 'H310',
    language: 'hebrew',
    position: 1,
    gloss: 'after',
  },
  {
    id: 'Josh.1.1.2',
    surfaceText: 'מוֹת',
    lemma: 'מָוֶת',
    transliteration: 'môṯ',
    lemmaTranslit: 'māweṯ',
    morph: 'HNcmsc',
    strong: 'H4194',
    language: 'hebrew',
    position: 2,
    gloss: 'the death of',
  },
  {
    id: 'Josh.1.1.3',
    surfaceText: 'מֹשֶׁה',
    lemma: 'מֹשֶׁה',
    transliteration: 'mōšeh',
    lemmaTranslit: 'mōšeh',
    morph: 'HNp',
    strong: 'H4872',
    language: 'hebrew',
    position: 3,
    gloss: 'Moses',
  },
  {
    id: 'Josh.1.1.4',
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
    id: 'Josh.1.1.5',
    surfaceText: 'יְהוֹשֻׁעַ',
    lemma: 'יְהוֹשֻׁעַ',
    transliteration: "yěhôšuaʿ",
    lemmaTranslit: "yěhôšuaʿ",
    morph: 'HNp',
    strong: 'H3091',
    language: 'hebrew',
    position: 5,
    gloss: 'Joshua',
  },
];

export const joshua1_1_translation: VerseTranslation = {
  verseRef: 'Josh.1.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And it was after the death of Moses the servant of the LORD, the LORD said to Joshua',
      spans: [
        { tokenIds: ['Josh.1.1.0'], targetSlice: [0, 10], confidence: 'high' },
        { tokenIds: ['Josh.1.1.1'], targetSlice: [11, 16], confidence: 'high' },
        { tokenIds: ['Josh.1.1.2'], targetSlice: [17, 26], confidence: 'high' },
        { tokenIds: ['Josh.1.1.3'], targetSlice: [30, 35], confidence: 'high' },
        { tokenIds: ['Josh.1.1.4'], targetSlice: [60, 68], confidence: 'high' },
        { tokenIds: ['Josh.1.1.5'], targetSlice: [77, 83], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "After the death of Moses the LORD's servant, the LORD said to Joshua",
      spans: [
        { tokenIds: ['Josh.1.1.1', 'Josh.1.1.2'], targetSlice: [0, 22], confidence: 'high' },
        { tokenIds: ['Josh.1.1.3'], targetSlice: [23, 28], confidence: 'high' },
        { tokenIds: ['Josh.1.1.4'], targetSlice: [48, 56], confidence: 'high' },
        { tokenIds: ['Josh.1.1.5'], targetSlice: [62, 68], confidence: 'high' },
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

export const joshua1_1_verse = {
  ref: 'Josh.1.1',
  sourceTokens: joshua1_1_tokens,
  translation: joshua1_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:2 – Moses my servant is dead; now arise, cross this Jordan
 * ──────────────────────────────────────────────────────────── */

export const joshua1_2_tokens: SourceToken[] = [
  {
    id: 'Josh.1.2.0',
    surfaceText: 'מֹשֶׁה',
    lemma: 'מֹשֶׁה',
    transliteration: 'mōšeh',
    lemmaTranslit: 'mōšeh',
    morph: 'HNp',
    strong: 'H4872',
    language: 'hebrew',
    position: 0,
    gloss: 'Moses',
  },
  {
    id: 'Josh.1.2.1',
    surfaceText: 'עַבְדִּי',
    lemma: 'עֶבֶד',
    transliteration: "ʿaḇdî",
    lemmaTranslit: "ʿeḇeḏ",
    morph: 'HNcmsc+Sp1cs',
    strong: 'H5650',
    language: 'hebrew',
    position: 1,
    gloss: 'my servant',
  },
  {
    id: 'Josh.1.2.2',
    surfaceText: 'מֵת',
    lemma: 'מוּת',
    transliteration: 'mēṯ',
    lemmaTranslit: 'mûṯ',
    morph: 'HVqp3ms',
    strong: 'H4191',
    language: 'hebrew',
    position: 2,
    gloss: 'is dead',
  },
  {
    id: 'Josh.1.2.3',
    surfaceText: 'קוּם',
    lemma: 'קוּם',
    transliteration: 'qûm',
    lemmaTranslit: 'qûm',
    morph: 'HVqv2ms',
    strong: 'H6965',
    language: 'hebrew',
    position: 3,
    gloss: 'arise',
  },
  {
    id: 'Josh.1.2.4',
    surfaceText: 'עֲבֹר',
    lemma: 'עָבַר',
    transliteration: "ʿăḇōr",
    lemmaTranslit: "ʿāḇar",
    morph: 'HVqv2ms',
    strong: 'H5674',
    language: 'hebrew',
    position: 4,
    gloss: 'cross over',
  },
  {
    id: 'Josh.1.2.5',
    surfaceText: 'הַיַּרְדֵּן',
    lemma: 'יַרְדֵּן',
    transliteration: 'hayyardēn',
    lemmaTranslit: 'yardēn',
    morph: 'HTd+Np',
    strong: 'H3383',
    language: 'hebrew',
    position: 5,
    gloss: 'the Jordan',
  },
];

export const joshua1_2_translation: VerseTranslation = {
  verseRef: 'Josh.1.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Moses my servant is dead; now arise, cross over this Jordan',
      spans: [
        { tokenIds: ['Josh.1.2.0'], targetSlice: [0, 5], confidence: 'high' },
        { tokenIds: ['Josh.1.2.1'], targetSlice: [6, 16], confidence: 'high' },
        { tokenIds: ['Josh.1.2.2'], targetSlice: [17, 24], confidence: 'high' },
        { tokenIds: ['Josh.1.2.3'], targetSlice: [30, 35], confidence: 'high' },
        { tokenIds: ['Josh.1.2.4'], targetSlice: [37, 47], confidence: 'high' },
        { tokenIds: ['Josh.1.2.5'], targetSlice: [53, 59], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Moses my servant is dead. Now then, arise and cross over this Jordan',
      spans: [
        { tokenIds: ['Josh.1.2.0', 'Josh.1.2.1'], targetSlice: [0, 16], confidence: 'high' },
        { tokenIds: ['Josh.1.2.2'], targetSlice: [17, 24], confidence: 'high' },
        { tokenIds: ['Josh.1.2.3'], targetSlice: [36, 41], confidence: 'high' },
        { tokenIds: ['Josh.1.2.4', 'Josh.1.2.5'], targetSlice: [46, 68], confidence: 'high' },
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

export const joshua1_2_verse = {
  ref: 'Josh.1.2',
  sourceTokens: joshua1_2_tokens,
  translation: joshua1_2_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:5 – No man shall stand before you all the days of your life
 * ──────────────────────────────────────────────────────────── */

export const joshua1_5_tokens: SourceToken[] = [
  {
    id: 'Josh.1.5.0',
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
    id: 'Josh.1.5.1',
    surfaceText: 'יִתְיַצֵּב',
    lemma: 'יָצַב',
    transliteration: 'yiṯyaṣṣēḇ',
    lemmaTranslit: 'yāṣaḇ',
    morph: 'HVtI3ms',
    strong: 'H3320',
    language: 'hebrew',
    position: 1,
    gloss: 'shall stand',
  },
  {
    id: 'Josh.1.5.2',
    surfaceText: 'אִישׁ',
    lemma: 'אִישׁ',
    transliteration: "ʾîš",
    lemmaTranslit: "ʾîš",
    morph: 'HNcmsa',
    strong: 'H376',
    language: 'hebrew',
    position: 2,
    gloss: 'a man',
  },
  {
    id: 'Josh.1.5.3',
    surfaceText: 'לְפָנֶיךָ',
    lemma: 'פָּנִים',
    transliteration: 'lěp̄ānêḵā',
    lemmaTranslit: 'pānîm',
    morph: 'HR+Ncmpc+Sp2ms',
    strong: 'H6440',
    language: 'hebrew',
    position: 3,
    gloss: 'before you',
  },
  {
    id: 'Josh.1.5.4',
    surfaceText: 'אֶעֶזְבֶךָּ',
    lemma: 'עָזַב',
    transliteration: "ʾeʿezḇekkā",
    lemmaTranslit: "ʿāzaḇ",
    morph: 'HVqI1cs+Sp2ms',
    strong: 'H5800',
    language: 'hebrew',
    position: 4,
    gloss: 'I will leave you',
  },
  {
    id: 'Josh.1.5.5',
    surfaceText: 'אַרְפֶּךָ',
    lemma: 'רָפָה',
    transliteration: "ʾarpěkkā",
    lemmaTranslit: 'rāp̄āh',
    morph: 'HVhI1cs+Sp2ms',
    strong: 'H7503',
    language: 'hebrew',
    position: 5,
    gloss: 'I will forsake you',
  },
];

export const joshua1_5_translation: VerseTranslation = {
  verseRef: 'Josh.1.5',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'No man shall stand before you all the days of your life; I will not leave you nor forsake you',
      spans: [
        { tokenIds: ['Josh.1.5.0'], targetSlice: [0, 2], confidence: 'high' },
        { tokenIds: ['Josh.1.5.1'], targetSlice: [7, 17], confidence: 'high' },
        { tokenIds: ['Josh.1.5.2'], targetSlice: [3, 6], confidence: 'high' },
        { tokenIds: ['Josh.1.5.3'], targetSlice: [18, 28], confidence: 'high' },
        { tokenIds: ['Josh.1.5.4'], targetSlice: [62, 78], confidence: 'high' },
        { tokenIds: ['Josh.1.5.5'], targetSlice: [83, 95], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'No one will be able to stand against you all the days of your life. I will never leave you nor forsake you.',
      spans: [
        { tokenIds: ['Josh.1.5.0', 'Josh.1.5.1', 'Josh.1.5.2'], targetSlice: [0, 38], confidence: 'high' },
        { tokenIds: ['Josh.1.5.3'], targetSlice: [39, 50], confidence: 'high' },
        { tokenIds: ['Josh.1.5.4', 'Josh.1.5.5'], targetSlice: [66, 107], confidence: 'high' },
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

export const joshua1_5_verse = {
  ref: 'Josh.1.5',
  sourceTokens: joshua1_5_tokens,
  translation: joshua1_5_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:7 – Only be strong and very courageous
 * ──────────────────────────────────────────────────────────── */

export const joshua1_7_tokens: SourceToken[] = [
  {
    id: 'Josh.1.7.0',
    surfaceText: 'רַק',
    lemma: 'רַק',
    transliteration: 'raq',
    lemmaTranslit: 'raq',
    morph: 'HD',
    strong: 'H7535',
    language: 'hebrew',
    position: 0,
    gloss: 'only',
  },
  {
    id: 'Josh.1.7.1',
    surfaceText: 'חֲזַק',
    lemma: 'חָזַק',
    transliteration: 'ḥăzaq',
    lemmaTranslit: 'ḥāzaq',
    morph: 'HVqv2ms',
    strong: 'H2388',
    language: 'hebrew',
    position: 1,
    gloss: 'be strong',
  },
  {
    id: 'Josh.1.7.2',
    surfaceText: 'וֶאֱמָץ',
    lemma: 'אָמֵץ',
    transliteration: "weʾĕmāṣ",
    lemmaTranslit: "ʾāmēṣ",
    morph: 'HC+Vqv2ms',
    strong: 'H553',
    language: 'hebrew',
    position: 2,
    gloss: 'and be courageous',
  },
  {
    id: 'Josh.1.7.3',
    surfaceText: 'מְאֹד',
    lemma: 'מְאֹד',
    transliteration: "měʾōḏ",
    lemmaTranslit: "měʾōḏ",
    morph: 'HD',
    strong: 'H3966',
    language: 'hebrew',
    position: 3,
    gloss: 'very',
  },
  {
    id: 'Josh.1.7.4',
    surfaceText: 'לִשְׁמֹר',
    lemma: 'שָׁמַר',
    transliteration: 'lišmōr',
    lemmaTranslit: 'šāmar',
    morph: 'HR+Vqc',
    strong: 'H8104',
    language: 'hebrew',
    position: 4,
    gloss: 'to observe',
  },
  {
    id: 'Josh.1.7.5',
    surfaceText: 'הַתּוֹרָה',
    lemma: 'תּוֹרָה',
    transliteration: 'hattôrāh',
    lemmaTranslit: 'tôrāh',
    morph: 'HTd+Ncfsa',
    strong: 'H8451',
    language: 'hebrew',
    position: 5,
    gloss: 'the law',
  },
];

export const joshua1_7_translation: VerseTranslation = {
  verseRef: 'Josh.1.7',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Only be strong and very courageous to observe to do according to all the law',
      spans: [
        { tokenIds: ['Josh.1.7.0'], targetSlice: [0, 4], confidence: 'high' },
        { tokenIds: ['Josh.1.7.1'], targetSlice: [5, 14], confidence: 'high' },
        { tokenIds: ['Josh.1.7.2'], targetSlice: [15, 33], confidence: 'high' },
        { tokenIds: ['Josh.1.7.3'], targetSlice: [19, 23], confidence: 'high' },
        { tokenIds: ['Josh.1.7.4'], targetSlice: [34, 44], confidence: 'high' },
        { tokenIds: ['Josh.1.7.5'], targetSlice: [69, 76], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Only be strong and very courageous, being careful to do according to all the law',
      spans: [
        { tokenIds: ['Josh.1.7.0'], targetSlice: [0, 4], confidence: 'high' },
        { tokenIds: ['Josh.1.7.1', 'Josh.1.7.2', 'Josh.1.7.3'], targetSlice: [5, 33], confidence: 'high' },
        { tokenIds: ['Josh.1.7.4'], targetSlice: [35, 50], confidence: 'high' },
        { tokenIds: ['Josh.1.7.5'], targetSlice: [73, 80], confidence: 'high' },
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

export const joshua1_7_verse = {
  ref: 'Josh.1.7',
  sourceTokens: joshua1_7_tokens,
  translation: joshua1_7_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:8 – This Book of the Law shall not depart from your mouth
 * ──────────────────────────────────────────────────────────── */

export const joshua1_8_tokens: SourceToken[] = [
  {
    id: 'Josh.1.8.0',
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
    id: 'Josh.1.8.1',
    surfaceText: 'יָמוּשׁ',
    lemma: 'מוּשׁ',
    transliteration: 'yāmûš',
    lemmaTranslit: 'mûš',
    morph: 'HVqI3ms',
    strong: 'H4185',
    language: 'hebrew',
    position: 1,
    gloss: 'shall depart',
  },
  {
    id: 'Josh.1.8.2',
    surfaceText: 'סֵפֶר',
    lemma: 'סֵפֶר',
    transliteration: 'sēp̄er',
    lemmaTranslit: 'sēp̄er',
    morph: 'HNcmsc',
    strong: 'H5612',
    language: 'hebrew',
    position: 2,
    gloss: 'the book of',
  },
  {
    id: 'Josh.1.8.3',
    surfaceText: 'הַתּוֹרָה',
    lemma: 'תּוֹרָה',
    transliteration: 'hattôrāh',
    lemmaTranslit: 'tôrāh',
    morph: 'HTd+Ncfsa',
    strong: 'H8451',
    language: 'hebrew',
    position: 3,
    gloss: 'the law',
  },
  {
    id: 'Josh.1.8.4',
    surfaceText: 'מִפִּיךָ',
    lemma: 'פֶּה',
    transliteration: 'mippîḵā',
    lemmaTranslit: 'peh',
    morph: 'HR+Ncmsc+Sp2ms',
    strong: 'H6310',
    language: 'hebrew',
    position: 4,
    gloss: 'from your mouth',
  },
  {
    id: 'Josh.1.8.5',
    surfaceText: 'וְהָגִיתָ',
    lemma: 'הָגָה',
    transliteration: 'wěhāḡîṯā',
    lemmaTranslit: 'hāḡāh',
    morph: 'HC+Vqq2ms',
    strong: 'H1897',
    language: 'hebrew',
    position: 5,
    gloss: 'and you shall meditate',
  },
];

export const joshua1_8_translation: VerseTranslation = {
  verseRef: 'Josh.1.8',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'This Book of the Law shall not depart from your mouth, and you shall meditate on it day and night',
      spans: [
        { tokenIds: ['Josh.1.8.0'], targetSlice: [30, 33], confidence: 'high' },
        { tokenIds: ['Josh.1.8.1'], targetSlice: [34, 44], confidence: 'high' },
        { tokenIds: ['Josh.1.8.2'], targetSlice: [5, 9], confidence: 'high' },
        { tokenIds: ['Josh.1.8.3'], targetSlice: [17, 24], confidence: 'high' },
        { tokenIds: ['Josh.1.8.4'], targetSlice: [45, 60], confidence: 'high' },
        { tokenIds: ['Josh.1.8.5'], targetSlice: [62, 82], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'This Book of the Law shall not depart from your mouth, but you shall meditate on it day and night',
      spans: [
        { tokenIds: ['Josh.1.8.0', 'Josh.1.8.1'], targetSlice: [30, 44], confidence: 'high' },
        { tokenIds: ['Josh.1.8.2', 'Josh.1.8.3'], targetSlice: [5, 24], confidence: 'high' },
        { tokenIds: ['Josh.1.8.4'], targetSlice: [45, 60], confidence: 'high' },
        { tokenIds: ['Josh.1.8.5'], targetSlice: [66, 97], confidence: 'high' },
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

export const joshua1_8_verse = {
  ref: 'Josh.1.8',
  sourceTokens: joshua1_8_tokens,
  translation: joshua1_8_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:9 – Have I not commanded you? Be strong and courageous.
 * ──────────────────────────────────────────────────────────── */

export const joshua1_9_tokens: SourceToken[] = [
  {
    id: 'Josh.1.9.0',
    surfaceText: 'הֲלוֹא',
    lemma: 'לֹא',
    transliteration: "hălôʾ",
    lemmaTranslit: "lōʾ",
    morph: 'HIa+Tn',
    strong: 'H3808',
    language: 'hebrew',
    position: 0,
    gloss: 'have I not',
  },
  {
    id: 'Josh.1.9.1',
    surfaceText: 'צִוִּיתִיךָ',
    lemma: 'צָוָה',
    transliteration: 'ṣiwwîṯîḵā',
    lemmaTranslit: 'ṣāwāh',
    morph: 'HVpi1cs+Sp2ms',
    strong: 'H6680',
    language: 'hebrew',
    position: 1,
    gloss: 'commanded you',
  },
  {
    id: 'Josh.1.9.2',
    surfaceText: 'חֲזַק',
    lemma: 'חָזַק',
    transliteration: 'ḥăzaq',
    lemmaTranslit: 'ḥāzaq',
    morph: 'HVqv2ms',
    strong: 'H2388',
    language: 'hebrew',
    position: 2,
    gloss: 'be strong',
  },
  {
    id: 'Josh.1.9.3',
    surfaceText: 'וֶאֱמָץ',
    lemma: 'אָמֵץ',
    transliteration: "weʾĕmāṣ",
    lemmaTranslit: "ʾāmēṣ",
    morph: 'HC+Vqv2ms',
    strong: 'H553',
    language: 'hebrew',
    position: 3,
    gloss: 'and be courageous',
  },
  {
    id: 'Josh.1.9.4',
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
    id: 'Josh.1.9.5',
    surfaceText: 'אֱלֹהֶיךָ',
    lemma: 'אֱלֹהִים',
    transliteration: "ʾĕlōheḵā",
    lemmaTranslit: "ʾĕlōhîm",
    morph: 'HNcmpc+Sp2ms',
    strong: 'H430',
    language: 'hebrew',
    position: 5,
    gloss: 'your God',
  },
];

export const joshua1_9_translation: VerseTranslation = {
  verseRef: 'Josh.1.9',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Have I not commanded you? Be strong and courageous. Do not be frightened, for the LORD your God is with you.',
      spans: [
        { tokenIds: ['Josh.1.9.0'], targetSlice: [0, 10], confidence: 'high' },
        { tokenIds: ['Josh.1.9.1'], targetSlice: [11, 24], confidence: 'high' },
        { tokenIds: ['Josh.1.9.2'], targetSlice: [26, 35], confidence: 'high' },
        { tokenIds: ['Josh.1.9.3'], targetSlice: [36, 50], confidence: 'high' },
        { tokenIds: ['Josh.1.9.4'], targetSlice: [84, 92], confidence: 'high' },
        { tokenIds: ['Josh.1.9.5'], targetSlice: [93, 101], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Have I not commanded you? Be strong and courageous! Do not be afraid, for the LORD your God is with you wherever you go.',
      spans: [
        { tokenIds: ['Josh.1.9.0', 'Josh.1.9.1'], targetSlice: [0, 24], confidence: 'high' },
        { tokenIds: ['Josh.1.9.2', 'Josh.1.9.3'], targetSlice: [26, 51], confidence: 'high' },
        { tokenIds: ['Josh.1.9.4', 'Josh.1.9.5'], targetSlice: [75, 120], confidence: 'high' },
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

export const joshua1_9_verse = {
  ref: 'Josh.1.9',
  sourceTokens: joshua1_9_tokens,
  translation: joshua1_9_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Joshua 1:1-18 (God's charge to Joshua)
 * ──────────────────────────────────────────────────────────── */

export const joshua1_1_18_verses = [
  joshua1_1_verse,
  joshua1_2_verse,
  joshua1_5_verse,
  joshua1_7_verse,
  joshua1_8_verse,
  joshua1_9_verse,
];

export default joshua1_1_18_verses;
