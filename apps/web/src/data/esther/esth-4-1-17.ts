// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 4:1 – Mordecai tore his clothes
 * ──────────────────────────────────────────────────────────── */

export const esther4_1_tokens: SourceToken[] = [
  {
    id: 'Esth.4.1.0',
    surfaceText: 'וּמָרְדֳּכַי',
    lemma: 'מָרְדֳּכַי',
    transliteration: 'ûmordŏḵay',
    lemmaTranslit: 'mordŏḵay',
    morph: 'HC+Np',
    strong: 'H4782',
    language: 'hebrew',
    position: 0,
    gloss: 'and Mordecai',
  },
  {
    id: 'Esth.4.1.1',
    surfaceText: 'יָדַע',
    lemma: 'יָדַע',
    transliteration: 'yāḏaʿ',
    lemmaTranslit: 'yāḏaʿ',
    morph: 'HVqp3ms',
    strong: 'H3045',
    language: 'hebrew',
    position: 1,
    gloss: 'knew',
  },
  {
    id: 'Esth.4.1.2',
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
    id: 'Esth.4.1.3',
    surfaceText: 'כָּל',
    lemma: 'כֹּל',
    transliteration: 'kāl',
    lemmaTranslit: 'kōl',
    morph: 'HNcmsc',
    strong: 'H3605',
    language: 'hebrew',
    position: 3,
    gloss: 'all',
  },
  {
    id: 'Esth.4.1.4',
    surfaceText: 'אֲשֶׁר',
    lemma: 'אֲשֶׁר',
    transliteration: "ʾăšer",
    lemmaTranslit: "ʾăšer",
    morph: 'HR',
    strong: 'H834',
    language: 'hebrew',
    position: 4,
    gloss: 'that which',
  },
  {
    id: 'Esth.4.1.5',
    surfaceText: 'נַעֲשָׂה',
    lemma: 'עָשָׂה',
    transliteration: "naʿăśāh",
    lemmaTranslit: "ʿāśāh",
    morph: 'HVNp3ms',
    strong: 'H6213',
    language: 'hebrew',
    position: 5,
    gloss: 'had been done',
  },
];

export const esther4_1_translation: VerseTranslation = {
  verseRef: 'Esth.4.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And Mordecai knew all that had been done, and Mordecai tore his clothes and put on sackcloth',
      spans: [
        { tokenIds: ['Esth.4.1.0'], targetSlice: [0, 14], confidence: 'high' },
        { tokenIds: ['Esth.4.1.1'], targetSlice: [15, 19], confidence: 'high' },
        { tokenIds: ['Esth.4.1.2'], targetSlice: [20, 23], confidence: 'high' },
        { tokenIds: ['Esth.4.1.3'], targetSlice: [20, 23], confidence: 'high' },
        { tokenIds: ['Esth.4.1.4'], targetSlice: [24, 28], confidence: 'high' },
        { tokenIds: ['Esth.4.1.5'], targetSlice: [29, 42], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "When Mordecai learned of all that had been done, he tore his clothes, put on sackcloth and ashes",
      spans: [
        { tokenIds: ['Esth.4.1.0', 'Esth.4.1.1'], targetSlice: [0, 22], confidence: 'high' },
        { tokenIds: ['Esth.4.1.2', 'Esth.4.1.3', 'Esth.4.1.4', 'Esth.4.1.5'], targetSlice: [23, 47], confidence: 'high' },
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

export const esther4_1_verse = {
  ref: 'Esth.4.1',
  sourceTokens: esther4_1_tokens,
  translation: esther4_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 4:3 – Great mourning among the Jews
 * ──────────────────────────────────────────────────────────── */

export const esther4_3_tokens: SourceToken[] = [
  {
    id: 'Esth.4.3.0',
    surfaceText: 'אֵבֶל',
    lemma: 'אֵבֶל',
    transliteration: "ʾēḇel",
    lemmaTranslit: "ʾēḇel",
    morph: 'HNcmsa',
    strong: 'H60',
    language: 'hebrew',
    position: 0,
    gloss: 'mourning',
  },
  {
    id: 'Esth.4.3.1',
    surfaceText: 'גָּדוֹל',
    lemma: 'גָּדוֹל',
    transliteration: 'gāḏôl',
    lemmaTranslit: 'gāḏôl',
    morph: 'HAamsa',
    strong: 'H1419',
    language: 'hebrew',
    position: 1,
    gloss: 'great',
  },
  {
    id: 'Esth.4.3.2',
    surfaceText: 'לַיְּהוּדִים',
    lemma: 'יְהוּדִי',
    transliteration: 'layyěhûḏîm',
    lemmaTranslit: 'yěhûḏî',
    morph: 'HR+Ngmpa',
    strong: 'H3064',
    language: 'hebrew',
    position: 2,
    gloss: 'among the Jews',
  },
  {
    id: 'Esth.4.3.3',
    surfaceText: 'וְצוֹם',
    lemma: 'צוֹם',
    transliteration: 'wěṣôm',
    lemmaTranslit: 'ṣôm',
    morph: 'HC+Ncmsa',
    strong: 'H6685',
    language: 'hebrew',
    position: 3,
    gloss: 'and fasting',
  },
  {
    id: 'Esth.4.3.4',
    surfaceText: 'וּבְכִי',
    lemma: 'בְּכִי',
    transliteration: 'ûḇěḵî',
    lemmaTranslit: 'běḵî',
    morph: 'HC+Ncmsa',
    strong: 'H1065',
    language: 'hebrew',
    position: 4,
    gloss: 'and weeping',
  },
  {
    id: 'Esth.4.3.5',
    surfaceText: 'וּמִסְפֵּד',
    lemma: 'מִסְפֵּד',
    transliteration: 'ûmispēḏ',
    lemmaTranslit: 'mispēḏ',
    morph: 'HC+Ncmsa',
    strong: 'H4553',
    language: 'hebrew',
    position: 5,
    gloss: 'and lamentation',
  },
];

export const esther4_3_translation: VerseTranslation = {
  verseRef: 'Esth.4.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'There was great mourning among the Jews, and fasting and weeping and lamentation',
      spans: [
        { tokenIds: ['Esth.4.3.0'], targetSlice: [10, 18], confidence: 'high' },
        { tokenIds: ['Esth.4.3.1'], targetSlice: [4, 9], confidence: 'high' },
        { tokenIds: ['Esth.4.3.2'], targetSlice: [19, 38], confidence: 'high' },
        { tokenIds: ['Esth.4.3.3'], targetSlice: [44, 51], confidence: 'high' },
        { tokenIds: ['Esth.4.3.4'], targetSlice: [56, 63], confidence: 'high' },
        { tokenIds: ['Esth.4.3.5'], targetSlice: [68, 80], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "In every province there was great mourning among the Jews, with fasting, weeping, and wailing",
      spans: [
        { tokenIds: ['Esth.4.3.0', 'Esth.4.3.1'], targetSlice: [24, 38], confidence: 'high' },
        { tokenIds: ['Esth.4.3.2'], targetSlice: [39, 53], confidence: 'high' },
        { tokenIds: ['Esth.4.3.3', 'Esth.4.3.4', 'Esth.4.3.5'], targetSlice: [55, 93], confidence: 'high' },
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

export const esther4_3_verse = {
  ref: 'Esth.4.3',
  sourceTokens: esther4_3_tokens,
  translation: esther4_3_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 4:8 – To go in to the king to plead for her people
 * ──────────────────────────────────────────────────────────── */

export const esther4_8_tokens: SourceToken[] = [
  {
    id: 'Esth.4.8.0',
    surfaceText: 'לְהִתְחַנֶּן',
    lemma: 'חָנַן',
    transliteration: 'lěhiṯḥannēn',
    lemmaTranslit: 'ḥānan',
    morph: 'HR+VtI',
    strong: 'H2603',
    language: 'hebrew',
    position: 0,
    gloss: 'to plead',
  },
  {
    id: 'Esth.4.8.1',
    surfaceText: 'לוֹ',
    lemma: 'לְ',
    transliteration: 'lô',
    lemmaTranslit: 'lě',
    morph: 'HR+Sp3ms',
    strong: 'H3807',
    language: 'hebrew',
    position: 1,
    gloss: 'before him',
  },
  {
    id: 'Esth.4.8.2',
    surfaceText: 'וּלְבַקֵּשׁ',
    lemma: 'בָּקַשׁ',
    transliteration: 'ûlěḇaqqēš',
    lemmaTranslit: 'bāqaš',
    morph: 'HC+HR+VpI',
    strong: 'H1245',
    language: 'hebrew',
    position: 2,
    gloss: 'and to make request',
  },
  {
    id: 'Esth.4.8.3',
    surfaceText: 'מִלְּפָנָיו',
    lemma: 'פָּנִים',
    transliteration: 'millěp̄ānāyw',
    lemmaTranslit: 'pānîm',
    morph: 'HR+Ncmpc+Sp3ms',
    strong: 'H6440',
    language: 'hebrew',
    position: 3,
    gloss: 'before him',
  },
  {
    id: 'Esth.4.8.4',
    surfaceText: 'עַל',
    lemma: 'עַל',
    transliteration: "ʿal",
    lemmaTranslit: "ʿal",
    morph: 'HR',
    strong: 'H5921',
    language: 'hebrew',
    position: 4,
    gloss: 'for',
  },
  {
    id: 'Esth.4.8.5',
    surfaceText: 'עַמָּהּ',
    lemma: 'עַם',
    transliteration: "ʿammāh",
    lemmaTranslit: "ʿam",
    morph: 'HNcmsc+Sp3fs',
    strong: 'H5971',
    language: 'hebrew',
    position: 5,
    gloss: 'her people',
  },
];

export const esther4_8_translation: VerseTranslation = {
  verseRef: 'Esth.4.8',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'To plead before him and to make request before him for her people',
      spans: [
        { tokenIds: ['Esth.4.8.0'], targetSlice: [0, 7], confidence: 'high' },
        { tokenIds: ['Esth.4.8.1'], targetSlice: [8, 18], confidence: 'high' },
        { tokenIds: ['Esth.4.8.2'], targetSlice: [23, 38], confidence: 'high' },
        { tokenIds: ['Esth.4.8.3'], targetSlice: [39, 49], confidence: 'high' },
        { tokenIds: ['Esth.4.8.4'], targetSlice: [50, 53], confidence: 'high' },
        { tokenIds: ['Esth.4.8.5'], targetSlice: [54, 64], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "To go into the king's presence to beg for mercy and plead with him for her people",
      spans: [
        { tokenIds: ['Esth.4.8.0', 'Esth.4.8.1'], targetSlice: [0, 35], confidence: 'high' },
        { tokenIds: ['Esth.4.8.2', 'Esth.4.8.3'], targetSlice: [36, 54], confidence: 'high' },
        { tokenIds: ['Esth.4.8.4', 'Esth.4.8.5'], targetSlice: [59, 81], confidence: 'high' },
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

export const esther4_8_verse = {
  ref: 'Esth.4.8',
  sourceTokens: esther4_8_tokens,
  translation: esther4_8_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 4:13 – Do not think in your heart that you will escape
 * ──────────────────────────────────────────────────────────── */

export const esther4_13_tokens: SourceToken[] = [
  {
    id: 'Esth.4.13.0',
    surfaceText: 'אַל',
    lemma: 'אַל',
    transliteration: "ʾal",
    lemmaTranslit: "ʾal",
    morph: 'HTn',
    strong: 'H408',
    language: 'hebrew',
    position: 0,
    gloss: 'do not',
  },
  {
    id: 'Esth.4.13.1',
    surfaceText: 'תְּדַמִּי',
    lemma: 'דָּמָה',
    transliteration: 'těḏammî',
    lemmaTranslit: 'dāmāh',
    morph: 'HVpI2fs',
    strong: 'H1819',
    language: 'hebrew',
    position: 1,
    gloss: 'think',
  },
  {
    id: 'Esth.4.13.2',
    surfaceText: 'בְנַפְשֵׁךְ',
    lemma: 'נֶפֶשׁ',
    transliteration: 'běnap̄šēḵ',
    lemmaTranslit: 'nep̄eš',
    morph: 'HR+Ncfsc+Sp2fs',
    strong: 'H5315',
    language: 'hebrew',
    position: 2,
    gloss: 'in your heart',
  },
  {
    id: 'Esth.4.13.3',
    surfaceText: 'לְהִמָּלֵט',
    lemma: 'מָלַט',
    transliteration: 'lěhimmālēṭ',
    lemmaTranslit: 'mālaṭ',
    morph: 'HR+VnI',
    strong: 'H4422',
    language: 'hebrew',
    position: 3,
    gloss: 'to escape',
  },
  {
    id: 'Esth.4.13.4',
    surfaceText: 'בֵּית',
    lemma: 'בַּיִת',
    transliteration: 'bêṯ',
    lemmaTranslit: 'bayiṯ',
    morph: 'HNcmsc',
    strong: 'H1004',
    language: 'hebrew',
    position: 4,
    gloss: 'in the house of',
  },
  {
    id: 'Esth.4.13.5',
    surfaceText: 'הַמֶּלֶךְ',
    lemma: 'מֶלֶךְ',
    transliteration: 'hammeleḵ',
    lemmaTranslit: 'meleḵ',
    morph: 'HTd+Ncmsa',
    strong: 'H4428',
    language: 'hebrew',
    position: 5,
    gloss: 'the king',
  },
];

export const esther4_13_translation: VerseTranslation = {
  verseRef: 'Esth.4.13',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "Do not think in your heart that you will escape in the king's house more than all the Jews",
      spans: [
        { tokenIds: ['Esth.4.13.0'], targetSlice: [0, 6], confidence: 'high' },
        { tokenIds: ['Esth.4.13.1'], targetSlice: [7, 12], confidence: 'high' },
        { tokenIds: ['Esth.4.13.2'], targetSlice: [13, 26], confidence: 'high' },
        { tokenIds: ['Esth.4.13.3'], targetSlice: [36, 42], confidence: 'high' },
        { tokenIds: ['Esth.4.13.4'], targetSlice: [46, 51], confidence: 'high' },
        { tokenIds: ['Esth.4.13.5'], targetSlice: [56, 60], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "Do not think that because you are in the king's house you alone of all the Jews will escape",
      spans: [
        { tokenIds: ['Esth.4.13.0', 'Esth.4.13.1'], targetSlice: [0, 12], confidence: 'high' },
        { tokenIds: ['Esth.4.13.2'], targetSlice: [13, 26], confidence: 'high' },
        { tokenIds: ['Esth.4.13.3', 'Esth.4.13.4', 'Esth.4.13.5'], targetSlice: [27, 91], confidence: 'high' },
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

export const esther4_13_verse = {
  ref: 'Esth.4.13',
  sourceTokens: esther4_13_tokens,
  translation: esther4_13_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 4:14 – For such a time as this
 * ──────────────────────────────────────────────────────────── */

export const esther4_14_tokens: SourceToken[] = [
  {
    id: 'Esth.4.14.0',
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
    id: 'Esth.4.14.1',
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
    id: 'Esth.4.14.2',
    surfaceText: 'לְעֵת',
    lemma: 'עֵת',
    transliteration: "lěʿēṯ",
    lemmaTranslit: "ʿēṯ",
    morph: 'HR+Ncfsa',
    strong: 'H6256',
    language: 'hebrew',
    position: 2,
    gloss: 'for a time',
  },
  {
    id: 'Esth.4.14.3',
    surfaceText: 'כָּזֹאת',
    lemma: 'זֹאת',
    transliteration: 'kāzōʾṯ',
    lemmaTranslit: 'zōʾṯ',
    morph: 'HR+Pdfs',
    strong: 'H2063',
    language: 'hebrew',
    position: 3,
    gloss: 'such as this',
  },
  {
    id: 'Esth.4.14.4',
    surfaceText: 'הִגַּעַתְּ',
    lemma: 'נָגַע',
    transliteration: 'higgaʿat',
    lemmaTranslit: 'nāḡaʿ',
    morph: 'HVhp2fs',
    strong: 'H5060',
    language: 'hebrew',
    position: 4,
    gloss: 'you have come',
  },
  {
    id: 'Esth.4.14.5',
    surfaceText: 'לַמַּלְכוּת',
    lemma: 'מַלְכוּת',
    transliteration: 'lammalḵûṯ',
    lemmaTranslit: 'malḵûṯ',
    morph: 'HR+Ncfsa',
    strong: 'H4438',
    language: 'hebrew',
    position: 5,
    gloss: 'to the kingdom',
  },
];

export const esther4_14_translation: VerseTranslation = {
  verseRef: 'Esth.4.14',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'For if you remain silent at this time, relief and deliverance will arise for the Jews from another place, and who knows whether you have not come to the kingdom for such a time as this?',
      spans: [
        { tokenIds: ['Esth.4.14.0'], targetSlice: [0, 3], confidence: 'high' },
        { tokenIds: ['Esth.4.14.1'], targetSlice: [4, 6], confidence: 'high' },
        { tokenIds: ['Esth.4.14.2'], targetSlice: [164, 174], confidence: 'high' },
        { tokenIds: ['Esth.4.14.3'], targetSlice: [175, 186], confidence: 'high' },
        { tokenIds: ['Esth.4.14.4'], targetSlice: [139, 153], confidence: 'high' },
        { tokenIds: ['Esth.4.14.5'], targetSlice: [154, 168], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "For if you remain silent at this time, relief and deliverance for the Jews will arise from another place. And who knows but that you have come to your royal position for such a time as this?",
      spans: [
        { tokenIds: ['Esth.4.14.0', 'Esth.4.14.1'], targetSlice: [0, 6], confidence: 'high' },
        { tokenIds: ['Esth.4.14.2', 'Esth.4.14.3'], targetSlice: [168, 189], confidence: 'high' },
        { tokenIds: ['Esth.4.14.4', 'Esth.4.14.5'], targetSlice: [138, 167], confidence: 'high' },
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

export const esther4_14_verse = {
  ref: 'Esth.4.14',
  sourceTokens: esther4_14_tokens,
  translation: esther4_14_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 4:16 – If I perish, I perish
 * ──────────────────────────────────────────────────────────── */

export const esther4_16_tokens: SourceToken[] = [
  {
    id: 'Esth.4.16.0',
    surfaceText: 'וְכַאֲשֶׁר',
    lemma: 'אֲשֶׁר',
    transliteration: "wěḵaʾăšer",
    lemmaTranslit: "ʾăšer",
    morph: 'HC+HR',
    strong: 'H834',
    language: 'hebrew',
    position: 0,
    gloss: 'and if',
  },
  {
    id: 'Esth.4.16.1',
    surfaceText: 'אָבַדְתִּי',
    lemma: 'אָבַד',
    transliteration: "ʾāḇaḏtî",
    lemmaTranslit: "ʾāḇaḏ",
    morph: 'HVqp1cs',
    strong: 'H6',
    language: 'hebrew',
    position: 1,
    gloss: 'I perish',
  },
  {
    id: 'Esth.4.16.2',
    surfaceText: 'אָבָדְתִּי',
    lemma: 'אָבַד',
    transliteration: "ʾāḇāḏtî",
    lemmaTranslit: "ʾāḇaḏ",
    morph: 'HVqp1cs',
    strong: 'H6',
    language: 'hebrew',
    position: 2,
    gloss: 'I perish',
  },
  {
    id: 'Esth.4.16.3',
    surfaceText: 'צוּמוּ',
    lemma: 'צוּם',
    transliteration: 'ṣûmû',
    lemmaTranslit: 'ṣûm',
    morph: 'HVqv2mp',
    strong: 'H6684',
    language: 'hebrew',
    position: 3,
    gloss: 'fast',
  },
  {
    id: 'Esth.4.16.4',
    surfaceText: 'עָלַי',
    lemma: 'עַל',
    transliteration: "ʿālay",
    lemmaTranslit: "ʿal",
    morph: 'HR+Sp1cs',
    strong: 'H5921',
    language: 'hebrew',
    position: 4,
    gloss: 'for me',
  },
  {
    id: 'Esth.4.16.5',
    surfaceText: 'הַמֶּלֶךְ',
    lemma: 'מֶלֶךְ',
    transliteration: 'hammeleḵ',
    lemmaTranslit: 'meleḵ',
    morph: 'HTd+Ncmsa',
    strong: 'H4428',
    language: 'hebrew',
    position: 5,
    gloss: 'the king',
  },
];

export const esther4_16_translation: VerseTranslation = {
  verseRef: 'Esth.4.16',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Fast for me, and do not eat or drink for three days; and if I perish, I perish',
      spans: [
        { tokenIds: ['Esth.4.16.0'], targetSlice: [57, 63], confidence: 'high' },
        { tokenIds: ['Esth.4.16.1'], targetSlice: [64, 72], confidence: 'high' },
        { tokenIds: ['Esth.4.16.2'], targetSlice: [74, 82], confidence: 'high' },
        { tokenIds: ['Esth.4.16.3'], targetSlice: [0, 4], confidence: 'high' },
        { tokenIds: ['Esth.4.16.4'], targetSlice: [5, 11], confidence: 'high' },
        { tokenIds: ['Esth.4.16.5'], targetSlice: [45, 52], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "Fast for me. Do not eat or drink for three days, night or day. Then I will go to the king, even though it is against the law. And if I perish, I perish.",
      spans: [
        { tokenIds: ['Esth.4.16.3', 'Esth.4.16.4'], targetSlice: [0, 11], confidence: 'high' },
        { tokenIds: ['Esth.4.16.5'], targetSlice: [80, 88], confidence: 'high' },
        { tokenIds: ['Esth.4.16.0', 'Esth.4.16.1', 'Esth.4.16.2'], targetSlice: [126, 153], confidence: 'high' },
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

export const esther4_16_verse = {
  ref: 'Esth.4.16',
  sourceTokens: esther4_16_tokens,
  translation: esther4_16_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Esther 4:1-17 ("For such a time as this")
 * ──────────────────────────────────────────────────────────── */

export const esther4_1_17_verses = [
  esther4_1_verse,
  esther4_3_verse,
  esther4_8_verse,
  esther4_13_verse,
  esther4_14_verse,
  esther4_16_verse,
];

export default esther4_1_17_verses;
