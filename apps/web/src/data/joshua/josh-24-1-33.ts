// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 24:14 – Now therefore fear the LORD and serve him
 * ──────────────────────────────────────────────────────────── */

export const joshua24_14_tokens: SourceToken[] = [
  {
    id: 'Josh.24.14.0',
    surfaceText: 'וְעַתָּה',
    lemma: 'עַתָּה',
    transliteration: "wěʿattāh",
    lemmaTranslit: "ʿattāh",
    morph: 'HC+D',
    strong: 'H6258',
    language: 'hebrew',
    position: 0,
    gloss: 'and now',
  },
  {
    id: 'Josh.24.14.1',
    surfaceText: 'יְראוּ',
    lemma: 'יָרֵא',
    transliteration: "yěrʾû",
    lemmaTranslit: "yārēʾ",
    morph: 'HVqv2mp',
    strong: 'H3372',
    language: 'hebrew',
    position: 1,
    gloss: 'fear',
  },
  {
    id: 'Josh.24.14.2',
    surfaceText: 'אֶת',
    lemma: 'אֵת',
    transliteration: "ʾeṯ",
    lemmaTranslit: "ʾēṯ",
    morph: 'HTo',
    strong: 'H853',
    language: 'hebrew',
    position: 2,
    gloss: '(object marker)',
  },
  {
    id: 'Josh.24.14.3',
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
    id: 'Josh.24.14.4',
    surfaceText: 'וְעִבְדוּ',
    lemma: 'עָבַד',
    transliteration: "wěʿiḇdû",
    lemmaTranslit: "ʿāḇaḏ",
    morph: 'HC+Vqv2mp',
    strong: 'H5647',
    language: 'hebrew',
    position: 4,
    gloss: 'and serve',
  },
  {
    id: 'Josh.24.14.5',
    surfaceText: 'בְּתָמִים',
    lemma: 'תָּמִים',
    transliteration: 'běṯāmîm',
    lemmaTranslit: 'tāmîm',
    morph: 'HR+Aampa',
    strong: 'H8549',
    language: 'hebrew',
    position: 5,
    gloss: 'in sincerity',
  },
];

export const joshua24_14_translation: VerseTranslation = {
  verseRef: 'Josh.24.14',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And now, fear the LORD and serve him in sincerity and in faithfulness',
      spans: [
        { tokenIds: ['Josh.24.14.0'], targetSlice: [0, 7], confidence: 'high' },
        { tokenIds: ['Josh.24.14.1'], targetSlice: [9, 13], confidence: 'high' },
        { tokenIds: ['Josh.24.14.3'], targetSlice: [14, 22], confidence: 'high' },
        { tokenIds: ['Josh.24.14.4'], targetSlice: [27, 32], confidence: 'high' },
        { tokenIds: ['Josh.24.14.5'], targetSlice: [40, 59], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Now therefore fear the LORD and serve him in sincerity and in faithfulness',
      spans: [
        { tokenIds: ['Josh.24.14.0'], targetSlice: [0, 13], confidence: 'high' },
        { tokenIds: ['Josh.24.14.1', 'Josh.24.14.3'], targetSlice: [14, 27], confidence: 'high' },
        { tokenIds: ['Josh.24.14.4', 'Josh.24.14.5'], targetSlice: [32, 73], confidence: 'high' },
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

export const joshua24_14_verse = {
  ref: 'Josh.24.14',
  sourceTokens: joshua24_14_tokens,
  translation: joshua24_14_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 24:15 – Choose this day whom you will serve
 * ──────────────────────────────────────────────────────────── */

export const joshua24_15_tokens: SourceToken[] = [
  {
    id: 'Josh.24.15.0',
    surfaceText: 'בַּחֲרוּ',
    lemma: 'בָּחַר',
    transliteration: 'baḥărû',
    lemmaTranslit: 'bāḥar',
    morph: 'HVqv2mp',
    strong: 'H977',
    language: 'hebrew',
    position: 0,
    gloss: 'choose',
  },
  {
    id: 'Josh.24.15.1',
    surfaceText: 'לָכֶם',
    lemma: 'לְ',
    transliteration: 'lāḵem',
    lemmaTranslit: 'lě',
    morph: 'HR+Sp2mp',
    strong: 'H0',
    language: 'hebrew',
    position: 1,
    gloss: 'for yourselves',
  },
  {
    id: 'Josh.24.15.2',
    surfaceText: 'הַיּוֹם',
    lemma: 'יוֹם',
    transliteration: 'hayyôm',
    lemmaTranslit: 'yôm',
    morph: 'HTd+Ncmsa',
    strong: 'H3117',
    language: 'hebrew',
    position: 2,
    gloss: 'this day',
  },
  {
    id: 'Josh.24.15.3',
    surfaceText: 'אֶת־מִי',
    lemma: 'מִי',
    transliteration: "ʾeṯ-mî",
    lemmaTranslit: 'mî',
    morph: 'HTo+Hpi',
    strong: 'H4310',
    language: 'hebrew',
    position: 3,
    gloss: 'whom',
  },
  {
    id: 'Josh.24.15.4',
    surfaceText: 'תַּעֲבֹדוּן',
    lemma: 'עָבַד',
    transliteration: "taʿăḇōḏûn",
    lemmaTranslit: "ʿāḇaḏ",
    morph: 'HVqI2mp',
    strong: 'H5647',
    language: 'hebrew',
    position: 4,
    gloss: 'you will serve',
  },
  {
    id: 'Josh.24.15.5',
    surfaceText: 'וְאָנֹכִי',
    lemma: 'אָנֹכִי',
    transliteration: "wěʾānōḵî",
    lemmaTranslit: "ʾānōḵî",
    morph: 'HC+Pp1cs',
    strong: 'H595',
    language: 'hebrew',
    position: 5,
    gloss: 'but as for me',
  },
  {
    id: 'Josh.24.15.6',
    surfaceText: 'וּבֵיתִי',
    lemma: 'בַּיִת',
    transliteration: 'ûḇêṯî',
    lemmaTranslit: 'bayiṯ',
    morph: 'HC+Ncmsc+Sp1cs',
    strong: 'H1004',
    language: 'hebrew',
    position: 6,
    gloss: 'and my house',
  },
  {
    id: 'Josh.24.15.7',
    surfaceText: 'נַעֲבֹד',
    lemma: 'עָבַד',
    transliteration: "naʿăḇōḏ",
    lemmaTranslit: "ʿāḇaḏ",
    morph: 'HVqI1cp',
    strong: 'H5647',
    language: 'hebrew',
    position: 7,
    gloss: 'we will serve',
  },
];

export const joshua24_15_translation: VerseTranslation = {
  verseRef: 'Josh.24.15',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Choose for yourselves this day whom you will serve; but as for me and my house, we will serve the LORD',
      spans: [
        { tokenIds: ['Josh.24.15.0'], targetSlice: [0, 6], confidence: 'high' },
        { tokenIds: ['Josh.24.15.1'], targetSlice: [7, 21], confidence: 'high' },
        { tokenIds: ['Josh.24.15.2'], targetSlice: [22, 30], confidence: 'high' },
        { tokenIds: ['Josh.24.15.3'], targetSlice: [31, 35], confidence: 'high' },
        { tokenIds: ['Josh.24.15.4'], targetSlice: [36, 50], confidence: 'high' },
        { tokenIds: ['Josh.24.15.5'], targetSlice: [56, 70], confidence: 'high' },
        { tokenIds: ['Josh.24.15.6'], targetSlice: [75, 83], confidence: 'high' },
        { tokenIds: ['Josh.24.15.7'], targetSlice: [85, 98], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Choose this day whom you will serve. But as for me and my household, we will serve the LORD.',
      spans: [
        { tokenIds: ['Josh.24.15.0', 'Josh.24.15.2'], targetSlice: [0, 15], confidence: 'high' },
        { tokenIds: ['Josh.24.15.3', 'Josh.24.15.4'], targetSlice: [16, 35], confidence: 'high' },
        { tokenIds: ['Josh.24.15.5', 'Josh.24.15.6', 'Josh.24.15.7'], targetSlice: [37, 93], confidence: 'high' },
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

export const joshua24_15_verse = {
  ref: 'Josh.24.15',
  sourceTokens: joshua24_15_tokens,
  translation: joshua24_15_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 24:16 – The people answered: Far be it from us to forsake the LORD
 * ──────────────────────────────────────────────────────────── */

export const joshua24_16_tokens: SourceToken[] = [
  {
    id: 'Josh.24.16.0',
    surfaceText: 'וַיַּעַן',
    lemma: 'עָנָה',
    transliteration: 'wayyaʿan',
    lemmaTranslit: 'ʿānāh',
    morph: 'HC+Vqw3ms',
    strong: 'H6030',
    language: 'hebrew',
    position: 0,
    gloss: 'and answered',
  },
  {
    id: 'Josh.24.16.1',
    surfaceText: 'הָעָם',
    lemma: 'עַם',
    transliteration: 'hāʿām',
    lemmaTranslit: 'ʿam',
    morph: 'HTd+Ncmsa',
    strong: 'H5971',
    language: 'hebrew',
    position: 1,
    gloss: 'the people',
  },
  {
    id: 'Josh.24.16.2',
    surfaceText: 'חָלִילָה',
    lemma: 'חָלִילָה',
    transliteration: 'ḥālîlāh',
    lemmaTranslit: 'ḥālîlāh',
    morph: 'HIj',
    strong: 'H2486',
    language: 'hebrew',
    position: 2,
    gloss: 'far be it',
  },
  {
    id: 'Josh.24.16.3',
    surfaceText: 'לָּנוּ',
    lemma: 'לְ',
    transliteration: 'lānû',
    lemmaTranslit: 'lě',
    morph: 'HR+Sp1cp',
    strong: 'H0',
    language: 'hebrew',
    position: 3,
    gloss: 'from us',
  },
  {
    id: 'Josh.24.16.4',
    surfaceText: 'מֵעֲזֹב',
    lemma: 'עָזַב',
    transliteration: "mēʿăzōḇ",
    lemmaTranslit: "ʿāzaḇ",
    morph: 'HR+Vqc',
    strong: 'H5800',
    language: 'hebrew',
    position: 4,
    gloss: 'to forsake',
  },
  {
    id: 'Josh.24.16.5',
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

export const joshua24_16_translation: VerseTranslation = {
  verseRef: 'Josh.24.16',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And the people answered and said, Far be it from us to forsake the LORD',
      spans: [
        { tokenIds: ['Josh.24.16.0'], targetSlice: [0, 22], confidence: 'high' },
        { tokenIds: ['Josh.24.16.1'], targetSlice: [4, 14], confidence: 'high' },
        { tokenIds: ['Josh.24.16.2'], targetSlice: [28, 38], confidence: 'high' },
        { tokenIds: ['Josh.24.16.3'], targetSlice: [39, 46], confidence: 'high' },
        { tokenIds: ['Josh.24.16.4'], targetSlice: [47, 57], confidence: 'high' },
        { tokenIds: ['Josh.24.16.5'], targetSlice: [58, 66], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "Then the people answered, \"Far be it from us that we should forsake the LORD\"",
      spans: [
        { tokenIds: ['Josh.24.16.0', 'Josh.24.16.1'], targetSlice: [0, 26], confidence: 'high' },
        { tokenIds: ['Josh.24.16.2', 'Josh.24.16.3'], targetSlice: [28, 51], confidence: 'high' },
        { tokenIds: ['Josh.24.16.4', 'Josh.24.16.5'], targetSlice: [52, 76], confidence: 'high' },
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

export const joshua24_16_verse = {
  ref: 'Josh.24.16',
  sourceTokens: joshua24_16_tokens,
  translation: joshua24_16_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 24:23 – Put away the foreign gods that are among you
 * ──────────────────────────────────────────────────────────── */

export const joshua24_23_tokens: SourceToken[] = [
  {
    id: 'Josh.24.23.0',
    surfaceText: 'הָסִירוּ',
    lemma: 'סוּר',
    transliteration: 'hāsîrû',
    lemmaTranslit: 'sûr',
    morph: 'HVhv2mp',
    strong: 'H5493',
    language: 'hebrew',
    position: 0,
    gloss: 'put away',
  },
  {
    id: 'Josh.24.23.1',
    surfaceText: 'אֱלֹהֵי',
    lemma: 'אֱלֹהִים',
    transliteration: "ʾĕlōhê",
    lemmaTranslit: "ʾĕlōhîm",
    morph: 'HNcmpc',
    strong: 'H430',
    language: 'hebrew',
    position: 1,
    gloss: 'the gods of',
  },
  {
    id: 'Josh.24.23.2',
    surfaceText: 'הַנֵּכָר',
    lemma: 'נֵכָר',
    transliteration: 'hannēḵār',
    lemmaTranslit: 'nēḵār',
    morph: 'HTd+Ncmsa',
    strong: 'H5236',
    language: 'hebrew',
    position: 2,
    gloss: 'the foreign',
  },
  {
    id: 'Josh.24.23.3',
    surfaceText: 'וְהַטּוּ',
    lemma: 'נָטָה',
    transliteration: 'wěhaṭṭû',
    lemmaTranslit: 'nāṭāh',
    morph: 'HC+Vhv2mp',
    strong: 'H5186',
    language: 'hebrew',
    position: 3,
    gloss: 'and incline',
  },
  {
    id: 'Josh.24.23.4',
    surfaceText: 'לְבַבְכֶם',
    lemma: 'לֵבָב',
    transliteration: 'lěḇaḇḵem',
    lemmaTranslit: 'lēḇāḇ',
    morph: 'HNcmsc+Sp2mp',
    strong: 'H3824',
    language: 'hebrew',
    position: 4,
    gloss: 'your heart',
  },
  {
    id: 'Josh.24.23.5',
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

export const joshua24_23_translation: VerseTranslation = {
  verseRef: 'Josh.24.23',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Put away the foreign gods that are among you and incline your heart to the LORD God of Israel',
      spans: [
        { tokenIds: ['Josh.24.23.0'], targetSlice: [0, 8], confidence: 'high' },
        { tokenIds: ['Josh.24.23.1', 'Josh.24.23.2'], targetSlice: [9, 27], confidence: 'high' },
        { tokenIds: ['Josh.24.23.3'], targetSlice: [53, 60], confidence: 'high' },
        { tokenIds: ['Josh.24.23.4'], targetSlice: [61, 71], confidence: 'high' },
        { tokenIds: ['Josh.24.23.5'], targetSlice: [79, 87], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Put away the foreign gods that are among you and turn your hearts to the LORD, the God of Israel.',
      spans: [
        { tokenIds: ['Josh.24.23.0'], targetSlice: [0, 8], confidence: 'high' },
        { tokenIds: ['Josh.24.23.1', 'Josh.24.23.2'], targetSlice: [9, 27], confidence: 'high' },
        { tokenIds: ['Josh.24.23.3', 'Josh.24.23.4'], targetSlice: [49, 65], confidence: 'high' },
        { tokenIds: ['Josh.24.23.5'], targetSlice: [73, 97], confidence: 'high' },
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

export const joshua24_23_verse = {
  ref: 'Josh.24.23',
  sourceTokens: joshua24_23_tokens,
  translation: joshua24_23_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 24:24 – The LORD our God we will serve
 * ──────────────────────────────────────────────────────────── */

export const joshua24_24_tokens: SourceToken[] = [
  {
    id: 'Josh.24.24.0',
    surfaceText: 'יְהוָה',
    lemma: 'יְהוָה',
    transliteration: 'yhwh',
    lemmaTranslit: 'yhwh',
    morph: 'HNp',
    strong: 'H3068',
    language: 'hebrew',
    position: 0,
    gloss: 'the LORD',
  },
  {
    id: 'Josh.24.24.1',
    surfaceText: 'אֱלֹהֵינוּ',
    lemma: 'אֱלֹהִים',
    transliteration: "ʾĕlōhênû",
    lemmaTranslit: "ʾĕlōhîm",
    morph: 'HNcmpc+Sp1cp',
    strong: 'H430',
    language: 'hebrew',
    position: 1,
    gloss: 'our God',
  },
  {
    id: 'Josh.24.24.2',
    surfaceText: 'נַעֲבֹד',
    lemma: 'עָבַד',
    transliteration: "naʿăḇōḏ",
    lemmaTranslit: "ʿāḇaḏ",
    morph: 'HVqI1cp',
    strong: 'H5647',
    language: 'hebrew',
    position: 2,
    gloss: 'we will serve',
  },
  {
    id: 'Josh.24.24.3',
    surfaceText: 'וּבְקוֹלוֹ',
    lemma: 'קוֹל',
    transliteration: 'ûḇěqôlô',
    lemmaTranslit: 'qôl',
    morph: 'HC+HR+Ncmsc+Sp3ms',
    strong: 'H6963',
    language: 'hebrew',
    position: 3,
    gloss: 'and his voice',
  },
  {
    id: 'Josh.24.24.4',
    surfaceText: 'נִשְׁמָע',
    lemma: 'שָׁמַע',
    transliteration: "nišmāʿ",
    lemmaTranslit: "šāmaʿ",
    morph: 'HVqI1cp',
    strong: 'H8085',
    language: 'hebrew',
    position: 4,
    gloss: 'we will obey',
  },
];

export const joshua24_24_translation: VerseTranslation = {
  verseRef: 'Josh.24.24',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'The LORD our God we will serve, and his voice we will obey',
      spans: [
        { tokenIds: ['Josh.24.24.0'], targetSlice: [0, 8], confidence: 'high' },
        { tokenIds: ['Josh.24.24.1'], targetSlice: [9, 17], confidence: 'high' },
        { tokenIds: ['Josh.24.24.2'], targetSlice: [18, 31], confidence: 'high' },
        { tokenIds: ['Josh.24.24.3'], targetSlice: [37, 46], confidence: 'high' },
        { tokenIds: ['Josh.24.24.4'], targetSlice: [47, 60], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'We will serve the LORD our God and obey his voice.',
      spans: [
        { tokenIds: ['Josh.24.24.2'], targetSlice: [0, 13], confidence: 'high' },
        { tokenIds: ['Josh.24.24.0', 'Josh.24.24.1'], targetSlice: [14, 31], confidence: 'high' },
        { tokenIds: ['Josh.24.24.3', 'Josh.24.24.4'], targetSlice: [36, 50], confidence: 'high' },
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

export const joshua24_24_verse = {
  ref: 'Josh.24.24',
  sourceTokens: joshua24_24_tokens,
  translation: joshua24_24_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 24:25 – So Joshua made a covenant with the people that day
 * ──────────────────────────────────────────────────────────── */

export const joshua24_25_tokens: SourceToken[] = [
  {
    id: 'Josh.24.25.0',
    surfaceText: 'וַיִּכְרֹת',
    lemma: 'כָּרַת',
    transliteration: 'wayyiḵrōṯ',
    lemmaTranslit: 'kāraṯ',
    morph: 'HC+Vqw3ms',
    strong: 'H3772',
    language: 'hebrew',
    position: 0,
    gloss: 'and he cut',
  },
  {
    id: 'Josh.24.25.1',
    surfaceText: 'יְהוֹשֻׁעַ',
    lemma: 'יְהוֹשֻׁעַ',
    transliteration: "yěhôšuaʿ",
    lemmaTranslit: "yěhôšuaʿ",
    morph: 'HNp',
    strong: 'H3091',
    language: 'hebrew',
    position: 1,
    gloss: 'Joshua',
  },
  {
    id: 'Josh.24.25.2',
    surfaceText: 'בְּרִית',
    lemma: 'בְּרִית',
    transliteration: 'běrîṯ',
    lemmaTranslit: 'běrîṯ',
    morph: 'HNcfsa',
    strong: 'H1285',
    language: 'hebrew',
    position: 2,
    gloss: 'a covenant',
  },
  {
    id: 'Josh.24.25.3',
    surfaceText: 'לָעָם',
    lemma: 'עַם',
    transliteration: 'lāʿām',
    lemmaTranslit: 'ʿam',
    morph: 'HR+Ncmsa',
    strong: 'H5971',
    language: 'hebrew',
    position: 3,
    gloss: 'for the people',
  },
  {
    id: 'Josh.24.25.4',
    surfaceText: 'בִּשְׁכֶם',
    lemma: 'שְׁכֶם',
    transliteration: 'bišḵem',
    lemmaTranslit: 'šěḵem',
    morph: 'HR+Np',
    strong: 'H7927',
    language: 'hebrew',
    position: 4,
    gloss: 'at Shechem',
  },
];

export const joshua24_25_translation: VerseTranslation = {
  verseRef: 'Josh.24.25',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And Joshua cut a covenant for the people that day at Shechem',
      spans: [
        { tokenIds: ['Josh.24.25.0'], targetSlice: [0, 17], confidence: 'high' },
        { tokenIds: ['Josh.24.25.1'], targetSlice: [4, 10], confidence: 'high' },
        { tokenIds: ['Josh.24.25.2'], targetSlice: [18, 28], confidence: 'high' },
        { tokenIds: ['Josh.24.25.3'], targetSlice: [29, 43], confidence: 'high' },
        { tokenIds: ['Josh.24.25.4'], targetSlice: [53, 63], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'So Joshua made a covenant with the people that day at Shechem.',
      spans: [
        { tokenIds: ['Josh.24.25.0', 'Josh.24.25.1'], targetSlice: [0, 14], confidence: 'high' },
        { tokenIds: ['Josh.24.25.2'], targetSlice: [20, 30], confidence: 'high' },
        { tokenIds: ['Josh.24.25.3', 'Josh.24.25.4'], targetSlice: [31, 62], confidence: 'high' },
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

export const joshua24_25_verse = {
  ref: 'Josh.24.25',
  sourceTokens: joshua24_25_tokens,
  translation: joshua24_25_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 24:31 – Israel served the LORD all the days of Joshua
 * ──────────────────────────────────────────────────────────── */

export const joshua24_31_tokens: SourceToken[] = [
  {
    id: 'Josh.24.31.0',
    surfaceText: 'וַיַּעֲבֹד',
    lemma: 'עָבַד',
    transliteration: "wayyaʿăḇōḏ",
    lemmaTranslit: "ʿāḇaḏ",
    morph: 'HC+Vqw3ms',
    strong: 'H5647',
    language: 'hebrew',
    position: 0,
    gloss: 'and served',
  },
  {
    id: 'Josh.24.31.1',
    surfaceText: 'יִשְׂרָאֵל',
    lemma: 'יִשְׂרָאֵל',
    transliteration: "yiśrāʾēl",
    lemmaTranslit: "yiśrāʾēl",
    morph: 'HNp',
    strong: 'H3478',
    language: 'hebrew',
    position: 1,
    gloss: 'Israel',
  },
  {
    id: 'Josh.24.31.2',
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
    id: 'Josh.24.31.3',
    surfaceText: 'כֹּל',
    lemma: 'כֹּל',
    transliteration: 'kōl',
    lemmaTranslit: 'kōl',
    morph: 'HNcmsc',
    strong: 'H3605',
    language: 'hebrew',
    position: 3,
    gloss: 'all',
  },
  {
    id: 'Josh.24.31.4',
    surfaceText: 'יְמֵי',
    lemma: 'יוֹם',
    transliteration: 'yěmê',
    lemmaTranslit: 'yôm',
    morph: 'HNcmpc',
    strong: 'H3117',
    language: 'hebrew',
    position: 4,
    gloss: 'the days of',
  },
  {
    id: 'Josh.24.31.5',
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

export const joshua24_31_translation: VerseTranslation = {
  verseRef: 'Josh.24.31',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And Israel served the LORD all the days of Joshua',
      spans: [
        { tokenIds: ['Josh.24.31.0'], targetSlice: [0, 16], confidence: 'high' },
        { tokenIds: ['Josh.24.31.1'], targetSlice: [4, 10], confidence: 'high' },
        { tokenIds: ['Josh.24.31.2'], targetSlice: [18, 26], confidence: 'high' },
        { tokenIds: ['Josh.24.31.3'], targetSlice: [27, 30], confidence: 'high' },
        { tokenIds: ['Josh.24.31.4'], targetSlice: [31, 43], confidence: 'high' },
        { tokenIds: ['Josh.24.31.5'], targetSlice: [47, 53], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "Israel served the LORD throughout the lifetime of Joshua.",
      spans: [
        { tokenIds: ['Josh.24.31.0', 'Josh.24.31.1'], targetSlice: [0, 13], confidence: 'high' },
        { tokenIds: ['Josh.24.31.2'], targetSlice: [21, 29], confidence: 'high' },
        { tokenIds: ['Josh.24.31.3', 'Josh.24.31.4', 'Josh.24.31.5'], targetSlice: [30, 56], confidence: 'high' },
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

export const joshua24_31_verse = {
  ref: 'Josh.24.31',
  sourceTokens: joshua24_31_tokens,
  translation: joshua24_31_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Joshua 24:1-33 (Covenant at Shechem)
 * ──────────────────────────────────────────────────────────── */

export const joshua24_1_33_verses = [
  joshua24_14_verse,
  joshua24_15_verse,
  joshua24_16_verse,
  joshua24_23_verse,
  joshua24_24_verse,
  joshua24_25_verse,
  joshua24_31_verse,
];

export default joshua24_1_33_verses;
