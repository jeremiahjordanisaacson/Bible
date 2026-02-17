// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 8:1 – All the people gathered as one man
 * ──────────────────────────────────────────────────────────── */

export const nehemiah8_1_tokens: SourceToken[] = [
  {
    id: 'Neh.8.1.0',
    surfaceText: 'וַיֵּאָסְפוּ',
    lemma: 'אָסַף',
    transliteration: 'wayyēʾāsěp̄û',
    lemmaTranslit: "ʾāsap̄",
    morph: 'HC+VnI3mp',
    strong: 'H622',
    language: 'hebrew',
    position: 0,
    gloss: 'and gathered',
  },
  {
    id: 'Neh.8.1.1',
    surfaceText: 'כָל',
    lemma: 'כֹּל',
    transliteration: 'ḵāl',
    lemmaTranslit: 'kōl',
    morph: 'HNcmsc',
    strong: 'H3605',
    language: 'hebrew',
    position: 1,
    gloss: 'all',
  },
  {
    id: 'Neh.8.1.2',
    surfaceText: 'הָעָם',
    lemma: 'עַם',
    transliteration: "hāʿām",
    lemmaTranslit: "ʿam",
    morph: 'HTd+Ncmsa',
    strong: 'H5971',
    language: 'hebrew',
    position: 2,
    gloss: 'the people',
  },
  {
    id: 'Neh.8.1.3',
    surfaceText: 'כְּאִישׁ',
    lemma: 'אִישׁ',
    transliteration: "kěʾîš",
    lemmaTranslit: "ʾîš",
    morph: 'HR+Ncmsa',
    strong: 'H376',
    language: 'hebrew',
    position: 3,
    gloss: 'as one man',
  },
  {
    id: 'Neh.8.1.4',
    surfaceText: 'אֶחָד',
    lemma: 'אֶחָד',
    transliteration: "ʾeḥāḏ",
    lemmaTranslit: "ʾeḥāḏ",
    morph: 'HAcmsa',
    strong: 'H259',
    language: 'hebrew',
    position: 4,
    gloss: 'one',
  },
  {
    id: 'Neh.8.1.5',
    surfaceText: 'עֶזְרָא',
    lemma: 'עֶזְרָא',
    transliteration: "ʿezrāʾ",
    lemmaTranslit: "ʿezrāʾ",
    morph: 'HNp',
    strong: 'H5830',
    language: 'hebrew',
    position: 5,
    gloss: 'Ezra',
  },
];

export const nehemiah8_1_translation: VerseTranslation = {
  verseRef: 'Neh.8.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And all the people gathered as one man into the square, and they told Ezra the scribe to bring the Book of the Law',
      spans: [
        { tokenIds: ['Neh.8.1.0'], targetSlice: [0, 3], confidence: 'high' },
        { tokenIds: ['Neh.8.1.1'], targetSlice: [4, 7], confidence: 'high' },
        { tokenIds: ['Neh.8.1.2'], targetSlice: [8, 18], confidence: 'high' },
        { tokenIds: ['Neh.8.1.3'], targetSlice: [19, 21], confidence: 'high' },
        { tokenIds: ['Neh.8.1.4'], targetSlice: [22, 29], confidence: 'high' },
        { tokenIds: ['Neh.8.1.5'], targetSlice: [69, 73], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "All the people came together as one in the square, and they asked Ezra the scribe to bring the Book of the Law of Moses",
      spans: [
        { tokenIds: ['Neh.8.1.0', 'Neh.8.1.1', 'Neh.8.1.2'], targetSlice: [0, 18], confidence: 'high' },
        { tokenIds: ['Neh.8.1.3', 'Neh.8.1.4'], targetSlice: [19, 35], confidence: 'high' },
        { tokenIds: ['Neh.8.1.5'], targetSlice: [65, 69], confidence: 'high' },
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

export const nehemiah8_1_verse = {
  ref: 'Neh.8.1',
  sourceTokens: nehemiah8_1_tokens,
  translation: nehemiah8_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 8:3 – He read from it from morning until midday
 * ──────────────────────────────────────────────────────────── */

export const nehemiah8_3_tokens: SourceToken[] = [
  {
    id: 'Neh.8.3.0',
    surfaceText: 'וַיִּקְרָא',
    lemma: 'קָרָא',
    transliteration: 'wayyiqrāʾ',
    lemmaTranslit: 'qārāʾ',
    morph: 'HC+VqI3ms',
    strong: 'H7121',
    language: 'hebrew',
    position: 0,
    gloss: 'and he read',
  },
  {
    id: 'Neh.8.3.1',
    surfaceText: 'בוֹ',
    lemma: 'בְּ',
    transliteration: 'bô',
    lemmaTranslit: 'bě',
    morph: 'HR+Sp3ms',
    strong: 'H871',
    language: 'hebrew',
    position: 1,
    gloss: 'from it',
  },
  {
    id: 'Neh.8.3.2',
    surfaceText: 'מִן',
    lemma: 'מִן',
    transliteration: 'min',
    lemmaTranslit: 'min',
    morph: 'HR',
    strong: 'H4480',
    language: 'hebrew',
    position: 2,
    gloss: 'from',
  },
  {
    id: 'Neh.8.3.3',
    surfaceText: 'הָאוֹר',
    lemma: 'אוֹר',
    transliteration: "hāʾôr",
    lemmaTranslit: "ʾôr",
    morph: 'HTd+Ncmsa',
    strong: 'H216',
    language: 'hebrew',
    position: 3,
    gloss: 'the light (morning)',
  },
  {
    id: 'Neh.8.3.4',
    surfaceText: 'עַד',
    lemma: 'עַד',
    transliteration: "ʿaḏ",
    lemmaTranslit: "ʿaḏ",
    morph: 'HR',
    strong: 'H5704',
    language: 'hebrew',
    position: 4,
    gloss: 'until',
  },
  {
    id: 'Neh.8.3.5',
    surfaceText: 'מַחֲצִית',
    lemma: 'מַחֲצִית',
    transliteration: 'maḥăṣîṯ',
    lemmaTranslit: 'maḥăṣîṯ',
    morph: 'HNcfsc',
    strong: 'H4276',
    language: 'hebrew',
    position: 5,
    gloss: 'midday',
  },
];

export const nehemiah8_3_translation: VerseTranslation = {
  verseRef: 'Neh.8.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And he read from it before the square from morning until midday, and the ears of all the people were attentive',
      spans: [
        { tokenIds: ['Neh.8.3.0'], targetSlice: [0, 11], confidence: 'high' },
        { tokenIds: ['Neh.8.3.1'], targetSlice: [12, 19], confidence: 'high' },
        { tokenIds: ['Neh.8.3.2'], targetSlice: [37, 41], confidence: 'high' },
        { tokenIds: ['Neh.8.3.3'], targetSlice: [42, 49], confidence: 'high' },
        { tokenIds: ['Neh.8.3.4'], targetSlice: [50, 55], confidence: 'high' },
        { tokenIds: ['Neh.8.3.5'], targetSlice: [56, 62], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "He read it aloud from daybreak till noon, and all the people listened attentively to the Book of the Law",
      spans: [
        { tokenIds: ['Neh.8.3.0', 'Neh.8.3.1'], targetSlice: [0, 18], confidence: 'high' },
        { tokenIds: ['Neh.8.3.2', 'Neh.8.3.3'], targetSlice: [19, 33], confidence: 'high' },
        { tokenIds: ['Neh.8.3.4', 'Neh.8.3.5'], targetSlice: [34, 43], confidence: 'high' },
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

export const nehemiah8_3_verse = {
  ref: 'Neh.8.3',
  sourceTokens: nehemiah8_3_tokens,
  translation: nehemiah8_3_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 8:5 – Ezra opened the book in the sight of all the people
 * ──────────────────────────────────────────────────────────── */

export const nehemiah8_5_tokens: SourceToken[] = [
  {
    id: 'Neh.8.5.0',
    surfaceText: 'וַיִּפְתַּח',
    lemma: 'פָּתַח',
    transliteration: 'wayyip̄taḥ',
    lemmaTranslit: 'pāṯaḥ',
    morph: 'HC+VqI3ms',
    strong: 'H6605',
    language: 'hebrew',
    position: 0,
    gloss: 'and opened',
  },
  {
    id: 'Neh.8.5.1',
    surfaceText: 'עֶזְרָא',
    lemma: 'עֶזְרָא',
    transliteration: "ʿezrāʾ",
    lemmaTranslit: "ʿezrāʾ",
    morph: 'HNp',
    strong: 'H5830',
    language: 'hebrew',
    position: 1,
    gloss: 'Ezra',
  },
  {
    id: 'Neh.8.5.2',
    surfaceText: 'הַסֵּפֶר',
    lemma: 'סֵפֶר',
    transliteration: 'hassēp̄er',
    lemmaTranslit: 'sēp̄er',
    morph: 'HTd+Ncmsa',
    strong: 'H5612',
    language: 'hebrew',
    position: 2,
    gloss: 'the book',
  },
  {
    id: 'Neh.8.5.3',
    surfaceText: 'לְעֵינֵי',
    lemma: 'עַיִן',
    transliteration: "lěʿênê",
    lemmaTranslit: "ʿayin",
    morph: 'HR+Ncfdc',
    strong: 'H5869',
    language: 'hebrew',
    position: 3,
    gloss: 'in the sight of',
  },
  {
    id: 'Neh.8.5.4',
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
    id: 'Neh.8.5.5',
    surfaceText: 'הָעָם',
    lemma: 'עַם',
    transliteration: "hāʿām",
    lemmaTranslit: "ʿam",
    morph: 'HTd+Ncmsa',
    strong: 'H5971',
    language: 'hebrew',
    position: 5,
    gloss: 'the people',
  },
];

export const nehemiah8_5_translation: VerseTranslation = {
  verseRef: 'Neh.8.5',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And Ezra opened the book in the sight of all the people, and when he opened it all the people stood up',
      spans: [
        { tokenIds: ['Neh.8.5.0'], targetSlice: [0, 3], confidence: 'high' },
        { tokenIds: ['Neh.8.5.1'], targetSlice: [4, 8], confidence: 'high' },
        { tokenIds: ['Neh.8.5.2'], targetSlice: [9, 23], confidence: 'high' },
        { tokenIds: ['Neh.8.5.3'], targetSlice: [24, 39], confidence: 'high' },
        { tokenIds: ['Neh.8.5.4'], targetSlice: [43, 46], confidence: 'high' },
        { tokenIds: ['Neh.8.5.5'], targetSlice: [47, 57], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "Ezra opened the book in the sight of all the people, and as he opened it the people all stood up",
      spans: [
        { tokenIds: ['Neh.8.5.0', 'Neh.8.5.1'], targetSlice: [0, 4], confidence: 'high' },
        { tokenIds: ['Neh.8.5.2'], targetSlice: [5, 19], confidence: 'high' },
        { tokenIds: ['Neh.8.5.3', 'Neh.8.5.4', 'Neh.8.5.5'], targetSlice: [20, 51], confidence: 'high' },
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

export const nehemiah8_5_verse = {
  ref: 'Neh.8.5',
  sourceTokens: nehemiah8_5_tokens,
  translation: nehemiah8_5_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 8:6 – Ezra blessed the LORD the great God
 * ──────────────────────────────────────────────────────────── */

export const nehemiah8_6_tokens: SourceToken[] = [
  {
    id: 'Neh.8.6.0',
    surfaceText: 'וַיְבָרֶךְ',
    lemma: 'בָּרַךְ',
    transliteration: 'wayěḇāreḵ',
    lemmaTranslit: 'bāraḵ',
    morph: 'HC+VpI3ms',
    strong: 'H1288',
    language: 'hebrew',
    position: 0,
    gloss: 'and blessed',
  },
  {
    id: 'Neh.8.6.1',
    surfaceText: 'עֶזְרָא',
    lemma: 'עֶזְרָא',
    transliteration: "ʿezrāʾ",
    lemmaTranslit: "ʿezrāʾ",
    morph: 'HNp',
    strong: 'H5830',
    language: 'hebrew',
    position: 1,
    gloss: 'Ezra',
  },
  {
    id: 'Neh.8.6.2',
    surfaceText: 'אֶת',
    lemma: 'אֵת',
    transliteration: "ʾeṯ",
    lemmaTranslit: "ʾēṯ",
    morph: 'HTo',
    strong: 'H853',
    language: 'hebrew',
    position: 2,
    gloss: '(direct object)',
  },
  {
    id: 'Neh.8.6.3',
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
    id: 'Neh.8.6.4',
    surfaceText: 'הָאֱלֹהִים',
    lemma: 'אֱלֹהִים',
    transliteration: "hāʾĕlōhîm",
    lemmaTranslit: "ʾĕlōhîm",
    morph: 'HTd+Ncmpa',
    strong: 'H430',
    language: 'hebrew',
    position: 4,
    gloss: 'God',
  },
  {
    id: 'Neh.8.6.5',
    surfaceText: 'הַגָּדוֹל',
    lemma: 'גָּדוֹל',
    transliteration: 'haggāḏôl',
    lemmaTranslit: 'gāḏôl',
    morph: 'HTd+Aamsa',
    strong: 'H1419',
    language: 'hebrew',
    position: 5,
    gloss: 'the great',
  },
];

export const nehemiah8_6_translation: VerseTranslation = {
  verseRef: 'Neh.8.6',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "And Ezra blessed the LORD the great God, and all the people answered Amen, Amen",
      spans: [
        { tokenIds: ['Neh.8.6.0'], targetSlice: [0, 3], confidence: 'high' },
        { tokenIds: ['Neh.8.6.1'], targetSlice: [4, 8], confidence: 'high' },
        { tokenIds: ['Neh.8.6.2'], targetSlice: [9, 16], confidence: 'high' },
        { tokenIds: ['Neh.8.6.3'], targetSlice: [17, 25], confidence: 'high' },
        { tokenIds: ['Neh.8.6.4'], targetSlice: [30, 33], confidence: 'high' },
        { tokenIds: ['Neh.8.6.5'], targetSlice: [26, 35], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "Ezra praised the LORD, the great God, and all the people lifted their hands and responded, \"Amen! Amen!\"",
      spans: [
        { tokenIds: ['Neh.8.6.0', 'Neh.8.6.1'], targetSlice: [0, 12], confidence: 'high' },
        { tokenIds: ['Neh.8.6.2', 'Neh.8.6.3', 'Neh.8.6.4', 'Neh.8.6.5'], targetSlice: [13, 36], confidence: 'high' },
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

export const nehemiah8_6_verse = {
  ref: 'Neh.8.6',
  sourceTokens: nehemiah8_6_tokens,
  translation: nehemiah8_6_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 8:8 – They read from the book distinctly and gave the sense
 * ──────────────────────────────────────────────────────────── */

export const nehemiah8_8_tokens: SourceToken[] = [
  {
    id: 'Neh.8.8.0',
    surfaceText: 'וַיִּקְרְאוּ',
    lemma: 'קָרָא',
    transliteration: 'wayyiqrěʾû',
    lemmaTranslit: 'qārāʾ',
    morph: 'HC+VqI3mp',
    strong: 'H7121',
    language: 'hebrew',
    position: 0,
    gloss: 'and they read',
  },
  {
    id: 'Neh.8.8.1',
    surfaceText: 'בַסֵּפֶר',
    lemma: 'סֵפֶר',
    transliteration: 'ḇassēp̄er',
    lemmaTranslit: 'sēp̄er',
    morph: 'HR+Ncmsa',
    strong: 'H5612',
    language: 'hebrew',
    position: 1,
    gloss: 'from the book',
  },
  {
    id: 'Neh.8.8.2',
    surfaceText: 'בְּתוֹרַת',
    lemma: 'תּוֹרָה',
    transliteration: 'běṯôraṯ',
    lemmaTranslit: 'tôrāh',
    morph: 'HR+Ncfsc',
    strong: 'H8451',
    language: 'hebrew',
    position: 2,
    gloss: 'of the law of',
  },
  {
    id: 'Neh.8.8.3',
    surfaceText: 'הָאֱלֹהִים',
    lemma: 'אֱלֹהִים',
    transliteration: "hāʾĕlōhîm",
    lemmaTranslit: "ʾĕlōhîm",
    morph: 'HTd+Ncmpa',
    strong: 'H430',
    language: 'hebrew',
    position: 3,
    gloss: 'God',
  },
  {
    id: 'Neh.8.8.4',
    surfaceText: 'מְפֹרָשׁ',
    lemma: 'פָּרַשׁ',
    transliteration: 'měp̄ōrāš',
    lemmaTranslit: 'pāraš',
    morph: 'HVPpms',
    strong: 'H6567',
    language: 'hebrew',
    position: 4,
    gloss: 'distinctly',
  },
  {
    id: 'Neh.8.8.5',
    surfaceText: 'שֶׂכֶל',
    lemma: 'שֶׂכֶל',
    transliteration: 'śeḵel',
    lemmaTranslit: 'śeḵel',
    morph: 'HNcmsa',
    strong: 'H7922',
    language: 'hebrew',
    position: 5,
    gloss: 'the sense',
  },
];

export const nehemiah8_8_translation: VerseTranslation = {
  verseRef: 'Neh.8.8',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And they read from the book of the law of God distinctly and gave the sense, so that they understood the reading',
      spans: [
        { tokenIds: ['Neh.8.8.0'], targetSlice: [0, 13], confidence: 'high' },
        { tokenIds: ['Neh.8.8.1'], targetSlice: [14, 27], confidence: 'high' },
        { tokenIds: ['Neh.8.8.2'], targetSlice: [28, 42], confidence: 'high' },
        { tokenIds: ['Neh.8.8.3'], targetSlice: [46, 49], confidence: 'high' },
        { tokenIds: ['Neh.8.8.4'], targetSlice: [50, 60], confidence: 'high' },
        { tokenIds: ['Neh.8.8.5'], targetSlice: [70, 79], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "They read from the Book of the Law of God, making it clear and giving the meaning so the people understood what was being read",
      spans: [
        { tokenIds: ['Neh.8.8.0', 'Neh.8.8.1'], targetSlice: [0, 13], confidence: 'high' },
        { tokenIds: ['Neh.8.8.2', 'Neh.8.8.3'], targetSlice: [14, 41], confidence: 'high' },
        { tokenIds: ['Neh.8.8.4', 'Neh.8.8.5'], targetSlice: [43, 78], confidence: 'high' },
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

export const nehemiah8_8_verse = {
  ref: 'Neh.8.8',
  sourceTokens: nehemiah8_8_tokens,
  translation: nehemiah8_8_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 8:10 – The joy of the LORD is your strength
 * ──────────────────────────────────────────────────────────── */

export const nehemiah8_10_tokens: SourceToken[] = [
  {
    id: 'Neh.8.10.0',
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
    id: 'Neh.8.10.1',
    surfaceText: 'חֶדְוַת',
    lemma: 'חֶדְוָה',
    transliteration: 'ḥeḏwaṯ',
    lemmaTranslit: 'ḥeḏwāh',
    morph: 'HNcfsc',
    strong: 'H2304',
    language: 'hebrew',
    position: 1,
    gloss: 'the joy of',
  },
  {
    id: 'Neh.8.10.2',
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
    id: 'Neh.8.10.3',
    surfaceText: 'הִיא',
    lemma: 'הוּא',
    transliteration: "hîʾ",
    lemmaTranslit: "hûʾ",
    morph: 'HPp3fs',
    strong: 'H1931',
    language: 'hebrew',
    position: 3,
    gloss: 'is',
  },
  {
    id: 'Neh.8.10.4',
    surfaceText: 'מָעֻזְּכֶם',
    lemma: 'מָעוֹז',
    transliteration: "māʿuzzeḵem",
    lemmaTranslit: "māʿôz",
    morph: 'HNcmsc+Sp2mp',
    strong: 'H4581',
    language: 'hebrew',
    position: 4,
    gloss: 'your strength',
  },
];

export const nehemiah8_10_translation: VerseTranslation = {
  verseRef: 'Neh.8.10',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'For the joy of the LORD is your strength',
      spans: [
        { tokenIds: ['Neh.8.10.0'], targetSlice: [0, 3], confidence: 'high' },
        { tokenIds: ['Neh.8.10.1'], targetSlice: [4, 11], confidence: 'high' },
        { tokenIds: ['Neh.8.10.2'], targetSlice: [15, 23], confidence: 'high' },
        { tokenIds: ['Neh.8.10.3'], targetSlice: [24, 26], confidence: 'high' },
        { tokenIds: ['Neh.8.10.4'], targetSlice: [27, 40], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "Do not grieve, for the joy of the LORD is your strength",
      spans: [
        { tokenIds: ['Neh.8.10.0'], targetSlice: [15, 18], confidence: 'high' },
        { tokenIds: ['Neh.8.10.1', 'Neh.8.10.2'], targetSlice: [19, 38], confidence: 'high' },
        { tokenIds: ['Neh.8.10.3', 'Neh.8.10.4'], targetSlice: [39, 55], confidence: 'high' },
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

export const nehemiah8_10_verse = {
  ref: 'Neh.8.10',
  sourceTokens: nehemiah8_10_tokens,
  translation: nehemiah8_10_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Nehemiah 8:1-18 (Ezra reads the law)
 * ──────────────────────────────────────────────────────────── */

export const nehemiah8_1_18_verses = [
  nehemiah8_1_verse,
  nehemiah8_3_verse,
  nehemiah8_5_verse,
  nehemiah8_6_verse,
  nehemiah8_8_verse,
  nehemiah8_10_verse,
];

export default nehemiah8_1_18_verses;
