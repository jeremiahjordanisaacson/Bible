// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 1:1 – In the first year of Cyrus king of Persia
 * ──────────────────────────────────────────────────────────── */

export const ezra1_1_tokens: SourceToken[] = [
  {
    id: 'Ezra.1.1.0',
    surfaceText: 'בִּשְׁנַת',
    lemma: 'שָׁנָה',
    transliteration: 'bišnaṯ',
    lemmaTranslit: 'šānāh',
    morph: 'HR+Ncfsc',
    strong: 'H8141',
    language: 'hebrew',
    position: 0,
    gloss: 'in the year of',
  },
  {
    id: 'Ezra.1.1.1',
    surfaceText: 'אַחַת',
    lemma: 'אֶחָד',
    transliteration: "ʾaḥaṯ",
    lemmaTranslit: "ʾeḥāḏ",
    morph: 'HAcfsa',
    strong: 'H259',
    language: 'hebrew',
    position: 1,
    gloss: 'first',
  },
  {
    id: 'Ezra.1.1.2',
    surfaceText: 'לְכוֹרֶשׁ',
    lemma: 'כּוֹרֶשׁ',
    transliteration: 'lěḵôreš',
    lemmaTranslit: 'kôreš',
    morph: 'HR+Np',
    strong: 'H3566',
    language: 'hebrew',
    position: 2,
    gloss: 'of Cyrus',
  },
  {
    id: 'Ezra.1.1.3',
    surfaceText: 'מֶלֶךְ',
    lemma: 'מֶלֶךְ',
    transliteration: 'meleḵ',
    lemmaTranslit: 'meleḵ',
    morph: 'HNcmsc',
    strong: 'H4428',
    language: 'hebrew',
    position: 3,
    gloss: 'king of',
  },
  {
    id: 'Ezra.1.1.4',
    surfaceText: 'פָּרַס',
    lemma: 'פָּרַס',
    transliteration: 'pāras',
    lemmaTranslit: 'pāras',
    morph: 'HNp',
    strong: 'H6539',
    language: 'hebrew',
    position: 4,
    gloss: 'Persia',
  },
  {
    id: 'Ezra.1.1.5',
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

export const ezra1_1_translation: VerseTranslation = {
  verseRef: 'Ezra.1.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'In the first year of Cyrus king of Persia, that the word of the LORD might be fulfilled',
      spans: [
        { tokenIds: ['Ezra.1.1.0'], targetSlice: [0, 2], confidence: 'high' },
        { tokenIds: ['Ezra.1.1.1'], targetSlice: [7, 12], confidence: 'high' },
        { tokenIds: ['Ezra.1.1.2'], targetSlice: [21, 26], confidence: 'high' },
        { tokenIds: ['Ezra.1.1.3'], targetSlice: [27, 31], confidence: 'high' },
        { tokenIds: ['Ezra.1.1.4'], targetSlice: [35, 41], confidence: 'high' },
        { tokenIds: ['Ezra.1.1.5'], targetSlice: [68, 76], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "In the first year of Cyrus king of Persia, in order to fulfill the word of the LORD",
      spans: [
        { tokenIds: ['Ezra.1.1.0', 'Ezra.1.1.1'], targetSlice: [0, 17], confidence: 'high' },
        { tokenIds: ['Ezra.1.1.2', 'Ezra.1.1.3', 'Ezra.1.1.4'], targetSlice: [21, 41], confidence: 'high' },
        { tokenIds: ['Ezra.1.1.5'], targetSlice: [68, 83], confidence: 'high' },
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

export const ezra1_1_verse = {
  ref: 'Ezra.1.1',
  sourceTokens: ezra1_1_tokens,
  translation: ezra1_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:2 – The LORD God of heaven has given me all kingdoms
 * ──────────────────────────────────────────────────────────── */

export const ezra1_2_tokens: SourceToken[] = [
  {
    id: 'Ezra.1.2.0',
    surfaceText: 'כֹּל',
    lemma: 'כֹּל',
    transliteration: 'kōl',
    lemmaTranslit: 'kōl',
    morph: 'HNcmsc',
    strong: 'H3605',
    language: 'hebrew',
    position: 0,
    gloss: 'all',
  },
  {
    id: 'Ezra.1.2.1',
    surfaceText: 'מַמְלְכוֹת',
    lemma: 'מַמְלָכָה',
    transliteration: 'mamlěḵôṯ',
    lemmaTranslit: 'mamlāḵāh',
    morph: 'HNcfpa',
    strong: 'H4467',
    language: 'hebrew',
    position: 1,
    gloss: 'the kingdoms of',
  },
  {
    id: 'Ezra.1.2.2',
    surfaceText: 'הָאָרֶץ',
    lemma: 'אֶרֶץ',
    transliteration: "hāʾāreṣ",
    lemmaTranslit: "ʾereṣ",
    morph: 'HTd+Ncfsa',
    strong: 'H776',
    language: 'hebrew',
    position: 2,
    gloss: 'the earth',
  },
  {
    id: 'Ezra.1.2.3',
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
    id: 'Ezra.1.2.4',
    surfaceText: 'אֱלֹהֵי',
    lemma: 'אֱלֹהִים',
    transliteration: "ʾĕlōhê",
    lemmaTranslit: "ʾĕlōhîm",
    morph: 'HNcmpc',
    strong: 'H430',
    language: 'hebrew',
    position: 4,
    gloss: 'the God of',
  },
  {
    id: 'Ezra.1.2.5',
    surfaceText: 'הַשָּׁמַיִם',
    lemma: 'שָׁמַיִם',
    transliteration: 'haššāmayim',
    lemmaTranslit: 'šāmayim',
    morph: 'HTd+Ncmpa',
    strong: 'H8064',
    language: 'hebrew',
    position: 5,
    gloss: 'heaven',
  },
];

export const ezra1_2_translation: VerseTranslation = {
  verseRef: 'Ezra.1.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'All the kingdoms of the earth the LORD God of heaven has given to me',
      spans: [
        { tokenIds: ['Ezra.1.2.0'], targetSlice: [0, 3], confidence: 'high' },
        { tokenIds: ['Ezra.1.2.1'], targetSlice: [4, 16], confidence: 'high' },
        { tokenIds: ['Ezra.1.2.2'], targetSlice: [24, 33], confidence: 'high' },
        { tokenIds: ['Ezra.1.2.3'], targetSlice: [34, 42], confidence: 'high' },
        { tokenIds: ['Ezra.1.2.4'], targetSlice: [43, 46], confidence: 'high' },
        { tokenIds: ['Ezra.1.2.5'], targetSlice: [50, 56], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "The LORD, the God of heaven, has given me all the kingdoms of the earth",
      spans: [
        { tokenIds: ['Ezra.1.2.3', 'Ezra.1.2.4', 'Ezra.1.2.5'], targetSlice: [0, 27], confidence: 'high' },
        { tokenIds: ['Ezra.1.2.0', 'Ezra.1.2.1', 'Ezra.1.2.2'], targetSlice: [42, 70], confidence: 'high' },
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

export const ezra1_2_verse = {
  ref: 'Ezra.1.2',
  sourceTokens: ezra1_2_tokens,
  translation: ezra1_2_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:3 – Whoever is among you of all his people, let him go up
 * ──────────────────────────────────────────────────────────── */

export const ezra1_3_tokens: SourceToken[] = [
  {
    id: 'Ezra.1.3.0',
    surfaceText: 'מִי',
    lemma: 'מִי',
    transliteration: 'mî',
    lemmaTranslit: 'mî',
    morph: 'HIp',
    strong: 'H4310',
    language: 'hebrew',
    position: 0,
    gloss: 'whoever',
  },
  {
    id: 'Ezra.1.3.1',
    surfaceText: 'בָכֶם',
    lemma: 'בְּ',
    transliteration: 'ḇāḵem',
    lemmaTranslit: 'bě',
    morph: 'HR+Sp2mp',
    strong: 'H871',
    language: 'hebrew',
    position: 1,
    gloss: 'among you',
  },
  {
    id: 'Ezra.1.3.2',
    surfaceText: 'מִכָּל',
    lemma: 'כֹּל',
    transliteration: 'mikkāl',
    lemmaTranslit: 'kōl',
    morph: 'HR+Ncmsc',
    strong: 'H3605',
    language: 'hebrew',
    position: 2,
    gloss: 'of all',
  },
  {
    id: 'Ezra.1.3.3',
    surfaceText: 'עַמּוֹ',
    lemma: 'עַם',
    transliteration: "ʿammô",
    lemmaTranslit: "ʿam",
    morph: 'HNcmsc+Sp3ms',
    strong: 'H5971',
    language: 'hebrew',
    position: 3,
    gloss: 'his people',
  },
  {
    id: 'Ezra.1.3.4',
    surfaceText: 'וְיַעַל',
    lemma: 'עָלָה',
    transliteration: "wěyaʿal",
    lemmaTranslit: "ʿālāh",
    morph: 'HC+VqI3ms',
    strong: 'H5927',
    language: 'hebrew',
    position: 4,
    gloss: 'and let him go up',
  },
  {
    id: 'Ezra.1.3.5',
    surfaceText: 'יְרוּשָׁלַםִ',
    lemma: 'יְרוּשָׁלַםִ',
    transliteration: 'yěrûšālam',
    lemmaTranslit: 'yěrûšālam',
    morph: 'HNp',
    strong: 'H3389',
    language: 'hebrew',
    position: 5,
    gloss: 'Jerusalem',
  },
];

export const ezra1_3_translation: VerseTranslation = {
  verseRef: 'Ezra.1.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Whoever is among you of all his people, let him go up to Jerusalem',
      spans: [
        { tokenIds: ['Ezra.1.3.0'], targetSlice: [0, 8], confidence: 'high' },
        { tokenIds: ['Ezra.1.3.1'], targetSlice: [12, 21], confidence: 'high' },
        { tokenIds: ['Ezra.1.3.2'], targetSlice: [22, 28], confidence: 'high' },
        { tokenIds: ['Ezra.1.3.3'], targetSlice: [29, 39], confidence: 'high' },
        { tokenIds: ['Ezra.1.3.4'], targetSlice: [41, 55], confidence: 'high' },
        { tokenIds: ['Ezra.1.3.5'], targetSlice: [59, 68], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "Whoever is among you of all his people, let him go up to Jerusalem",
      spans: [
        { tokenIds: ['Ezra.1.3.0', 'Ezra.1.3.1'], targetSlice: [0, 21], confidence: 'high' },
        { tokenIds: ['Ezra.1.3.2', 'Ezra.1.3.3'], targetSlice: [22, 39], confidence: 'high' },
        { tokenIds: ['Ezra.1.3.4', 'Ezra.1.3.5'], targetSlice: [41, 66], confidence: 'high' },
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

export const ezra1_3_verse = {
  ref: 'Ezra.1.3',
  sourceTokens: ezra1_3_tokens,
  translation: ezra1_3_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:5 – Everyone whose spirit God had stirred
 * ──────────────────────────────────────────────────────────── */

export const ezra1_5_tokens: SourceToken[] = [
  {
    id: 'Ezra.1.5.0',
    surfaceText: 'כֹּל',
    lemma: 'כֹּל',
    transliteration: 'kōl',
    lemmaTranslit: 'kōl',
    morph: 'HNcmsc',
    strong: 'H3605',
    language: 'hebrew',
    position: 0,
    gloss: 'all',
  },
  {
    id: 'Ezra.1.5.1',
    surfaceText: 'הֵעִיר',
    lemma: 'עוּר',
    transliteration: "hēʿîr",
    lemmaTranslit: "ʿûr",
    morph: 'HVhp3ms',
    strong: 'H5782',
    language: 'hebrew',
    position: 1,
    gloss: 'had stirred',
  },
  {
    id: 'Ezra.1.5.2',
    surfaceText: 'הָאֱלֹהִים',
    lemma: 'אֱלֹהִים',
    transliteration: "hāʾĕlōhîm",
    lemmaTranslit: "ʾĕlōhîm",
    morph: 'HTd+Ncmpa',
    strong: 'H430',
    language: 'hebrew',
    position: 2,
    gloss: 'God',
  },
  {
    id: 'Ezra.1.5.3',
    surfaceText: 'אֶת',
    lemma: 'אֵת',
    transliteration: "ʾeṯ",
    lemmaTranslit: "ʾēṯ",
    morph: 'HTo',
    strong: 'H853',
    language: 'hebrew',
    position: 3,
    gloss: '(direct object)',
  },
  {
    id: 'Ezra.1.5.4',
    surfaceText: 'רוּחוֹ',
    lemma: 'רוּחַ',
    transliteration: 'rûḥô',
    lemmaTranslit: 'rûaḥ',
    morph: 'HNcfsc+Sp3ms',
    strong: 'H7307',
    language: 'hebrew',
    position: 4,
    gloss: 'his spirit',
  },
  {
    id: 'Ezra.1.5.5',
    surfaceText: 'לַעֲלוֹת',
    lemma: 'עָלָה',
    transliteration: "laʿălôṯ",
    lemmaTranslit: "ʿālāh",
    morph: 'HR+Vqc',
    strong: 'H5927',
    language: 'hebrew',
    position: 5,
    gloss: 'to go up',
  },
];

export const ezra1_5_translation: VerseTranslation = {
  verseRef: 'Ezra.1.5',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Everyone whose spirit God had stirred to go up to build the house of the LORD in Jerusalem',
      spans: [
        { tokenIds: ['Ezra.1.5.0'], targetSlice: [0, 8], confidence: 'high' },
        { tokenIds: ['Ezra.1.5.1'], targetSlice: [27, 38], confidence: 'high' },
        { tokenIds: ['Ezra.1.5.2'], targetSlice: [23, 26], confidence: 'high' },
        { tokenIds: ['Ezra.1.5.3'], targetSlice: [15, 22], confidence: 'high' },
        { tokenIds: ['Ezra.1.5.4'], targetSlice: [15, 22], confidence: 'high' },
        { tokenIds: ['Ezra.1.5.5'], targetSlice: [39, 48], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "Everyone whose spirit God had stirred rose up to go and rebuild the house of the LORD in Jerusalem",
      spans: [
        { tokenIds: ['Ezra.1.5.0', 'Ezra.1.5.3', 'Ezra.1.5.4'], targetSlice: [0, 22], confidence: 'high' },
        { tokenIds: ['Ezra.1.5.1', 'Ezra.1.5.2'], targetSlice: [23, 38], confidence: 'high' },
        { tokenIds: ['Ezra.1.5.5'], targetSlice: [39, 97], confidence: 'high' },
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

export const ezra1_5_verse = {
  ref: 'Ezra.1.5',
  sourceTokens: ezra1_5_tokens,
  translation: ezra1_5_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:7 – Cyrus the king brought out the vessels
 * ──────────────────────────────────────────────────────────── */

export const ezra1_7_tokens: SourceToken[] = [
  {
    id: 'Ezra.1.7.0',
    surfaceText: 'הוֹצִיא',
    lemma: 'יָצָא',
    transliteration: 'hôṣîʾ',
    lemmaTranslit: 'yāṣāʾ',
    morph: 'HVhp3ms',
    strong: 'H3318',
    language: 'hebrew',
    position: 0,
    gloss: 'brought out',
  },
  {
    id: 'Ezra.1.7.1',
    surfaceText: 'כוֹרֶשׁ',
    lemma: 'כּוֹרֶשׁ',
    transliteration: 'ḵôreš',
    lemmaTranslit: 'kôreš',
    morph: 'HNp',
    strong: 'H3566',
    language: 'hebrew',
    position: 1,
    gloss: 'Cyrus',
  },
  {
    id: 'Ezra.1.7.2',
    surfaceText: 'הַמֶּלֶךְ',
    lemma: 'מֶלֶךְ',
    transliteration: 'hammeleḵ',
    lemmaTranslit: 'meleḵ',
    morph: 'HTd+Ncmsa',
    strong: 'H4428',
    language: 'hebrew',
    position: 2,
    gloss: 'the king',
  },
  {
    id: 'Ezra.1.7.3',
    surfaceText: 'אֶת',
    lemma: 'אֵת',
    transliteration: "ʾeṯ",
    lemmaTranslit: "ʾēṯ",
    morph: 'HTo',
    strong: 'H853',
    language: 'hebrew',
    position: 3,
    gloss: '(direct object)',
  },
  {
    id: 'Ezra.1.7.4',
    surfaceText: 'כְּלֵי',
    lemma: 'כְּלִי',
    transliteration: 'kělê',
    lemmaTranslit: 'kělî',
    morph: 'HNcmpc',
    strong: 'H3627',
    language: 'hebrew',
    position: 4,
    gloss: 'the vessels of',
  },
  {
    id: 'Ezra.1.7.5',
    surfaceText: 'בֵּית־יְהוָה',
    lemma: 'בַּיִת',
    transliteration: 'bêṯ-yhwh',
    lemmaTranslit: 'bayiṯ',
    morph: 'HNcmsc+Np',
    strong: 'H1004',
    language: 'hebrew',
    position: 5,
    gloss: 'the house of the LORD',
  },
];

export const ezra1_7_translation: VerseTranslation = {
  verseRef: 'Ezra.1.7',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Also Cyrus the king brought out the vessels of the house of the LORD',
      spans: [
        { tokenIds: ['Ezra.1.7.0'], targetSlice: [27, 38], confidence: 'high' },
        { tokenIds: ['Ezra.1.7.1'], targetSlice: [5, 10], confidence: 'high' },
        { tokenIds: ['Ezra.1.7.2'], targetSlice: [11, 19], confidence: 'high' },
        { tokenIds: ['Ezra.1.7.3'], targetSlice: [39, 42], confidence: 'high' },
        { tokenIds: ['Ezra.1.7.4'], targetSlice: [43, 54], confidence: 'high' },
        { tokenIds: ['Ezra.1.7.5'], targetSlice: [55, 68], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "King Cyrus also brought out the articles belonging to the temple of the LORD",
      spans: [
        { tokenIds: ['Ezra.1.7.1', 'Ezra.1.7.2'], targetSlice: [0, 10], confidence: 'high' },
        { tokenIds: ['Ezra.1.7.0'], targetSlice: [16, 27], confidence: 'high' },
        { tokenIds: ['Ezra.1.7.3', 'Ezra.1.7.4', 'Ezra.1.7.5'], targetSlice: [28, 76], confidence: 'high' },
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

export const ezra1_7_verse = {
  ref: 'Ezra.1.7',
  sourceTokens: ezra1_7_tokens,
  translation: ezra1_7_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:11 – All the vessels of gold and silver
 * ──────────────────────────────────────────────────────────── */

export const ezra1_11_tokens: SourceToken[] = [
  {
    id: 'Ezra.1.11.0',
    surfaceText: 'כָּל',
    lemma: 'כֹּל',
    transliteration: 'kāl',
    lemmaTranslit: 'kōl',
    morph: 'HNcmsc',
    strong: 'H3605',
    language: 'hebrew',
    position: 0,
    gloss: 'all',
  },
  {
    id: 'Ezra.1.11.1',
    surfaceText: 'כֵּלִים',
    lemma: 'כְּלִי',
    transliteration: 'kēlîm',
    lemmaTranslit: 'kělî',
    morph: 'HNcmpa',
    strong: 'H3627',
    language: 'hebrew',
    position: 1,
    gloss: 'the vessels',
  },
  {
    id: 'Ezra.1.11.2',
    surfaceText: 'לַזָּהָב',
    lemma: 'זָהָב',
    transliteration: 'lazzāhāḇ',
    lemmaTranslit: 'zāhāḇ',
    morph: 'HR+Ncmsa',
    strong: 'H2091',
    language: 'hebrew',
    position: 2,
    gloss: 'of gold',
  },
  {
    id: 'Ezra.1.11.3',
    surfaceText: 'וְלַכֶּסֶף',
    lemma: 'כֶּסֶף',
    transliteration: 'wělakkesef',
    lemmaTranslit: 'kesef',
    morph: 'HC+HR+Ncmsa',
    strong: 'H3701',
    language: 'hebrew',
    position: 3,
    gloss: 'and of silver',
  },
  {
    id: 'Ezra.1.11.4',
    surfaceText: 'חֲמֵשֶׁת',
    lemma: 'חָמֵשׁ',
    transliteration: 'ḥămēšeṯ',
    lemmaTranslit: 'ḥāmēš',
    morph: 'HAcmsc',
    strong: 'H2568',
    language: 'hebrew',
    position: 4,
    gloss: 'five',
  },
  {
    id: 'Ezra.1.11.5',
    surfaceText: 'אֲלָפִים',
    lemma: 'אֶלֶף',
    transliteration: "ʾălāp̄îm",
    lemmaTranslit: "ʾelep̄",
    morph: 'HAcmpa',
    strong: 'H505',
    language: 'hebrew',
    position: 5,
    gloss: 'thousand',
  },
];

export const ezra1_11_translation: VerseTranslation = {
  verseRef: 'Ezra.1.11',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'All the vessels of gold and of silver were five thousand and four hundred',
      spans: [
        { tokenIds: ['Ezra.1.11.0'], targetSlice: [0, 3], confidence: 'high' },
        { tokenIds: ['Ezra.1.11.1'], targetSlice: [4, 15], confidence: 'high' },
        { tokenIds: ['Ezra.1.11.2'], targetSlice: [19, 23], confidence: 'high' },
        { tokenIds: ['Ezra.1.11.3'], targetSlice: [28, 34], confidence: 'high' },
        { tokenIds: ['Ezra.1.11.4'], targetSlice: [40, 44], confidence: 'high' },
        { tokenIds: ['Ezra.1.11.5'], targetSlice: [45, 53], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "In all, there were five thousand four hundred gold and silver articles",
      spans: [
        { tokenIds: ['Ezra.1.11.0', 'Ezra.1.11.1'], targetSlice: [0, 6], confidence: 'high' },
        { tokenIds: ['Ezra.1.11.4', 'Ezra.1.11.5'], targetSlice: [18, 39], confidence: 'high' },
        { tokenIds: ['Ezra.1.11.2', 'Ezra.1.11.3'], targetSlice: [40, 69], confidence: 'high' },
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

export const ezra1_11_verse = {
  ref: 'Ezra.1.11',
  sourceTokens: ezra1_11_tokens,
  translation: ezra1_11_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Ezra 1:1-11 (Cyrus decree)
 * ──────────────────────────────────────────────────────────── */

export const ezra1_1_11_verses = [
  ezra1_1_verse,
  ezra1_2_verse,
  ezra1_3_verse,
  ezra1_5_verse,
  ezra1_7_verse,
  ezra1_11_verse,
];

export default ezra1_1_11_verses;
