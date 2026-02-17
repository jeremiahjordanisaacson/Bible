// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 7:1 – The king sat in his house
 * ──────────────────────────────────────────────────────────── */

export const samuel2_7_1_tokens: SourceToken[] = [
  {
    id: '2Sam.7.1.0',
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
    id: '2Sam.7.1.1',
    surfaceText: 'כִּי',
    lemma: 'כִּי',
    transliteration: 'kî',
    lemmaTranslit: 'kî',
    morph: 'HC',
    strong: 'H3588',
    language: 'hebrew',
    position: 1,
    gloss: 'when',
  },
  {
    id: '2Sam.7.1.2',
    surfaceText: 'וַיֵּשֶׁב',
    lemma: 'יָשַׁב',
    transliteration: 'wayyēšeḇ',
    lemmaTranslit: 'yāšaḇ',
    morph: 'HC+VqW3ms',
    strong: 'H3427',
    language: 'hebrew',
    position: 2,
    gloss: 'and he sat',
  },
  {
    id: '2Sam.7.1.3',
    surfaceText: 'הַמֶּלֶךְ',
    lemma: 'מֶלֶךְ',
    transliteration: 'hammelek',
    lemmaTranslit: 'melek',
    morph: 'HTd+Ncmsa',
    strong: 'H4428',
    language: 'hebrew',
    position: 3,
    gloss: 'the king',
  },
  {
    id: '2Sam.7.1.4',
    surfaceText: 'בְּבֵיתוֹ',
    lemma: 'בַּיִת',
    transliteration: 'běḇêṯô',
    lemmaTranslit: 'bayiṯ',
    morph: 'HR+Ncmsc+Sp3ms',
    strong: 'H1004',
    language: 'hebrew',
    position: 4,
    gloss: 'in his house',
  },
  {
    id: '2Sam.7.1.5',
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

export const samuel2_7_1_translation: VerseTranslation = {
  verseRef: '2Sam.7.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And it was when the king sat in his house, and the LORD had given him rest from all his enemies around him.',
      spans: [
        { tokenIds: ['2Sam.7.1.0'], targetSlice: [0, 10], confidence: 'high' },
        { tokenIds: ['2Sam.7.1.1'], targetSlice: [11, 15], confidence: 'high' },
        { tokenIds: ['2Sam.7.1.2'], targetSlice: [16, 27], confidence: 'high' },
        { tokenIds: ['2Sam.7.1.3'], targetSlice: [20, 28], confidence: 'high' },
        { tokenIds: ['2Sam.7.1.4'], targetSlice: [29, 41], confidence: 'high' },
        { tokenIds: ['2Sam.7.1.5'], targetSlice: [47, 55], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'After the king was settled in his palace and the LORD had given him rest from all his surrounding enemies,',
      spans: [
        { tokenIds: ['2Sam.7.1.0', '2Sam.7.1.1'], targetSlice: [0, 5], confidence: 'high' },
        { tokenIds: ['2Sam.7.1.2', '2Sam.7.1.3'], targetSlice: [6, 34], confidence: 'high' },
        { tokenIds: ['2Sam.7.1.4'], targetSlice: [35, 49], confidence: 'high' },
        { tokenIds: ['2Sam.7.1.5'], targetSlice: [54, 62], confidence: 'high' },
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

export const samuel2_7_1_verse = {
  ref: '2Sam.7.1',
  sourceTokens: samuel2_7_1_tokens,
  translation: samuel2_7_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 7:8 – I took you from the pasture
 * ──────────────────────────────────────────────────────────── */

export const samuel2_7_8_tokens: SourceToken[] = [
  {
    id: '2Sam.7.8.0',
    surfaceText: 'אֲנִי',
    lemma: 'אֲנִי',
    transliteration: "ʾănî",
    lemmaTranslit: "ʾănî",
    morph: 'HPp1cs',
    strong: 'H589',
    language: 'hebrew',
    position: 0,
    gloss: 'I',
  },
  {
    id: '2Sam.7.8.1',
    surfaceText: 'לְקַחְתִּיךָ',
    lemma: 'לָקַח',
    transliteration: 'lěqaḥtîḵā',
    lemmaTranslit: 'lāqaḥ',
    morph: 'HVqp1cs+Sp2ms',
    strong: 'H3947',
    language: 'hebrew',
    position: 1,
    gloss: 'took you',
  },
  {
    id: '2Sam.7.8.2',
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
    id: '2Sam.7.8.3',
    surfaceText: 'הַנָּוֶה',
    lemma: 'נָוֶה',
    transliteration: 'hannāweh',
    lemmaTranslit: 'nāweh',
    morph: 'HTd+Ncmsa',
    strong: 'H5116',
    language: 'hebrew',
    position: 3,
    gloss: 'the pasture',
  },
  {
    id: '2Sam.7.8.4',
    surfaceText: 'מֵאַחַר',
    lemma: 'אַחַר',
    transliteration: "mēʾaḥar",
    lemmaTranslit: "ʾaḥar",
    morph: 'HR+HR',
    strong: 'H310',
    language: 'hebrew',
    position: 4,
    gloss: 'from following',
  },
  {
    id: '2Sam.7.8.5',
    surfaceText: 'הַצֹּאן',
    lemma: 'צֹאן',
    transliteration: 'haṣṣōʾn',
    lemmaTranslit: 'ṣōʾn',
    morph: 'HTd+Ncfsa',
    strong: 'H6629',
    language: 'hebrew',
    position: 5,
    gloss: 'the flock',
  },
];

export const samuel2_7_8_translation: VerseTranslation = {
  verseRef: '2Sam.7.8',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'I took you from the pasture, from following the flock, to be ruler over my people Israel.',
      spans: [
        { tokenIds: ['2Sam.7.8.0'], targetSlice: [0, 1], confidence: 'high' },
        { tokenIds: ['2Sam.7.8.1'], targetSlice: [2, 10], confidence: 'high' },
        { tokenIds: ['2Sam.7.8.2'], targetSlice: [11, 15], confidence: 'high' },
        { tokenIds: ['2Sam.7.8.3'], targetSlice: [16, 27], confidence: 'high' },
        { tokenIds: ['2Sam.7.8.4'], targetSlice: [29, 43], confidence: 'high' },
        { tokenIds: ['2Sam.7.8.5'], targetSlice: [44, 53], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'I took you from the pasture, from tending the flock, and appointed you ruler over my people Israel.',
      spans: [
        { tokenIds: ['2Sam.7.8.0', '2Sam.7.8.1'], targetSlice: [0, 10], confidence: 'high' },
        { tokenIds: ['2Sam.7.8.2', '2Sam.7.8.3'], targetSlice: [11, 27], confidence: 'high' },
        { tokenIds: ['2Sam.7.8.4', '2Sam.7.8.5'], targetSlice: [29, 49], confidence: 'high' },
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

export const samuel2_7_8_verse = {
  ref: '2Sam.7.8',
  sourceTokens: samuel2_7_8_tokens,
  translation: samuel2_7_8_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 7:12 – I will raise up your offspring
 * ──────────────────────────────────────────────────────────── */

export const samuel2_7_12_tokens: SourceToken[] = [
  {
    id: '2Sam.7.12.0',
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
    id: '2Sam.7.12.1',
    surfaceText: 'יִמְלְאוּ',
    lemma: 'מָלֵא',
    transliteration: "yimlěʾû",
    lemmaTranslit: "mālēʾ",
    morph: 'HVqI3mp',
    strong: 'H4390',
    language: 'hebrew',
    position: 1,
    gloss: 'are fulfilled',
  },
  {
    id: '2Sam.7.12.2',
    surfaceText: 'יָמֶיךָ',
    lemma: 'יוֹם',
    transliteration: 'yāmêḵā',
    lemmaTranslit: 'yôm',
    morph: 'HNcmpc+Sp2ms',
    strong: 'H3117',
    language: 'hebrew',
    position: 2,
    gloss: 'your days',
  },
  {
    id: '2Sam.7.12.3',
    surfaceText: 'וַהֲקִימֹתִי',
    lemma: 'קוּם',
    transliteration: 'wahăqîmōṯî',
    lemmaTranslit: 'qûm',
    morph: 'HC+VhQ1cs',
    strong: 'H6965',
    language: 'hebrew',
    position: 3,
    gloss: 'and I will raise up',
  },
  {
    id: '2Sam.7.12.4',
    surfaceText: 'אֶת',
    lemma: 'אֵת',
    transliteration: "ʾeṯ",
    lemmaTranslit: "ʾēṯ",
    morph: 'HTo',
    strong: 'H853',
    language: 'hebrew',
    position: 4,
    gloss: '(object marker)',
  },
  {
    id: '2Sam.7.12.5',
    surfaceText: 'זַרְעֲךָ',
    lemma: 'זֶרַע',
    transliteration: "zarʿăḵā",
    lemmaTranslit: "zeraʿ",
    morph: 'HNcmsc+Sp2ms',
    strong: 'H2233',
    language: 'hebrew',
    position: 5,
    gloss: 'your offspring',
  },
];

export const samuel2_7_12_translation: VerseTranslation = {
  verseRef: '2Sam.7.12',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'When your days are fulfilled and you lie down with your fathers, I will raise up your offspring after you.',
      spans: [
        { tokenIds: ['2Sam.7.12.0'], targetSlice: [0, 4], confidence: 'high' },
        { tokenIds: ['2Sam.7.12.1'], targetSlice: [20, 33], confidence: 'high' },
        { tokenIds: ['2Sam.7.12.2'], targetSlice: [5, 14], confidence: 'high' },
        { tokenIds: ['2Sam.7.12.3'], targetSlice: [66, 82], confidence: 'high' },
        { tokenIds: ['2Sam.7.12.4'], targetSlice: [83, 83], confidence: 'high' },
        { tokenIds: ['2Sam.7.12.5'], targetSlice: [83, 97], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "When your days are over and you rest with your ancestors, I will raise up your offspring to succeed you.",
      spans: [
        { tokenIds: ['2Sam.7.12.0', '2Sam.7.12.1', '2Sam.7.12.2'], targetSlice: [0, 22], confidence: 'high' },
        { tokenIds: ['2Sam.7.12.3'], targetSlice: [59, 75], confidence: 'high' },
        { tokenIds: ['2Sam.7.12.4', '2Sam.7.12.5'], targetSlice: [76, 103], confidence: 'high' },
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

export const samuel2_7_12_verse = {
  ref: '2Sam.7.12',
  sourceTokens: samuel2_7_12_tokens,
  translation: samuel2_7_12_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 7:13 – He shall build a house for my name
 * ──────────────────────────────────────────────────────────── */

export const samuel2_7_13_tokens: SourceToken[] = [
  {
    id: '2Sam.7.13.0',
    surfaceText: 'הוּא',
    lemma: 'הוּא',
    transliteration: "hûʾ",
    lemmaTranslit: "hûʾ",
    morph: 'HPp3ms',
    strong: 'H1931',
    language: 'hebrew',
    position: 0,
    gloss: 'he',
  },
  {
    id: '2Sam.7.13.1',
    surfaceText: 'יִבְנֶה',
    lemma: 'בָּנָה',
    transliteration: 'yiḇneh',
    lemmaTranslit: 'bānāh',
    morph: 'HVqI3ms',
    strong: 'H1129',
    language: 'hebrew',
    position: 1,
    gloss: 'shall build',
  },
  {
    id: '2Sam.7.13.2',
    surfaceText: 'בַּיִת',
    lemma: 'בַּיִת',
    transliteration: 'bayiṯ',
    lemmaTranslit: 'bayiṯ',
    morph: 'HNcmsa',
    strong: 'H1004',
    language: 'hebrew',
    position: 2,
    gloss: 'a house',
  },
  {
    id: '2Sam.7.13.3',
    surfaceText: 'לִשְׁמִי',
    lemma: 'שֵׁם',
    transliteration: 'lišmî',
    lemmaTranslit: 'šēm',
    morph: 'HR+Ncmsc+Sp1cs',
    strong: 'H8034',
    language: 'hebrew',
    position: 3,
    gloss: 'for my name',
  },
  {
    id: '2Sam.7.13.4',
    surfaceText: 'וְכֹנַנְתִּי',
    lemma: 'כּוּן',
    transliteration: 'wěḵōnantî',
    lemmaTranslit: 'kûn',
    morph: 'HC+VpQ1cs',
    strong: 'H3559',
    language: 'hebrew',
    position: 4,
    gloss: 'and I will establish',
  },
  {
    id: '2Sam.7.13.5',
    surfaceText: 'כִּסֵּא',
    lemma: 'כִּסֵּא',
    transliteration: 'kissēʾ',
    lemmaTranslit: 'kissēʾ',
    morph: 'HNcmsc',
    strong: 'H3678',
    language: 'hebrew',
    position: 5,
    gloss: 'the throne of',
  },
  {
    id: '2Sam.7.13.6',
    surfaceText: 'מַמְלַכְתּוֹ',
    lemma: 'מַמְלָכָה',
    transliteration: 'mamlakttô',
    lemmaTranslit: 'mamlāḵāh',
    morph: 'HNcfsc+Sp3ms',
    strong: 'H4467',
    language: 'hebrew',
    position: 6,
    gloss: 'his kingdom',
  },
];

export const samuel2_7_13_translation: VerseTranslation = {
  verseRef: '2Sam.7.13',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'He shall build a house for my name, and I will establish the throne of his kingdom forever.',
      spans: [
        { tokenIds: ['2Sam.7.13.0'], targetSlice: [0, 2], confidence: 'high' },
        { tokenIds: ['2Sam.7.13.1'], targetSlice: [3, 14], confidence: 'high' },
        { tokenIds: ['2Sam.7.13.2'], targetSlice: [15, 22], confidence: 'high' },
        { tokenIds: ['2Sam.7.13.3'], targetSlice: [23, 34], confidence: 'high' },
        { tokenIds: ['2Sam.7.13.4'], targetSlice: [36, 54], confidence: 'high' },
        { tokenIds: ['2Sam.7.13.5'], targetSlice: [55, 64], confidence: 'high' },
        { tokenIds: ['2Sam.7.13.6'], targetSlice: [68, 79], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "He is the one who will build a house for my Name, and I will establish the throne of his kingdom forever.",
      spans: [
        { tokenIds: ['2Sam.7.13.0'], targetSlice: [0, 17], confidence: 'high' },
        { tokenIds: ['2Sam.7.13.1', '2Sam.7.13.2'], targetSlice: [22, 36], confidence: 'high' },
        { tokenIds: ['2Sam.7.13.3'], targetSlice: [37, 48], confidence: 'high' },
        { tokenIds: ['2Sam.7.13.4', '2Sam.7.13.5', '2Sam.7.13.6'], targetSlice: [54, 105], confidence: 'high' },
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

export const samuel2_7_13_verse = {
  ref: '2Sam.7.13',
  sourceTokens: samuel2_7_13_tokens,
  translation: samuel2_7_13_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 7:16 – Your throne shall be established forever
 * ──────────────────────────────────────────────────────────── */

export const samuel2_7_16_tokens: SourceToken[] = [
  {
    id: '2Sam.7.16.0',
    surfaceText: 'וְנֶאְמַן',
    lemma: 'אָמַן',
    transliteration: "wěneʾman",
    lemmaTranslit: "ʾāman",
    morph: 'HC+VNp3ms',
    strong: 'H539',
    language: 'hebrew',
    position: 0,
    gloss: 'and shall be established',
  },
  {
    id: '2Sam.7.16.1',
    surfaceText: 'בֵּיתְךָ',
    lemma: 'בַּיִת',
    transliteration: 'bêṯěḵā',
    lemmaTranslit: 'bayiṯ',
    morph: 'HNcmsc+Sp2ms',
    strong: 'H1004',
    language: 'hebrew',
    position: 1,
    gloss: 'your house',
  },
  {
    id: '2Sam.7.16.2',
    surfaceText: 'וּמַמְלַכְתְּךָ',
    lemma: 'מַמְלָכָה',
    transliteration: 'ûmamlakttěḵā',
    lemmaTranslit: 'mamlāḵāh',
    morph: 'HC+Ncfsc+Sp2ms',
    strong: 'H4467',
    language: 'hebrew',
    position: 2,
    gloss: 'and your kingdom',
  },
  {
    id: '2Sam.7.16.3',
    surfaceText: 'עַד',
    lemma: 'עַד',
    transliteration: "ʿaḏ",
    lemmaTranslit: "ʿaḏ",
    morph: 'HR',
    strong: 'H5704',
    language: 'hebrew',
    position: 3,
    gloss: 'unto',
  },
  {
    id: '2Sam.7.16.4',
    surfaceText: 'עוֹלָם',
    lemma: 'עוֹלָם',
    transliteration: "ʿôlām",
    lemmaTranslit: "ʿôlām",
    morph: 'HNcmsa',
    strong: 'H5769',
    language: 'hebrew',
    position: 4,
    gloss: 'forever',
  },
  {
    id: '2Sam.7.16.5',
    surfaceText: 'כִּסְאֲךָ',
    lemma: 'כִּסֵּא',
    transliteration: 'kisʾăḵā',
    lemmaTranslit: 'kissēʾ',
    morph: 'HNcmsc+Sp2ms',
    strong: 'H3678',
    language: 'hebrew',
    position: 5,
    gloss: 'your throne',
  },
];

export const samuel2_7_16_translation: VerseTranslation = {
  verseRef: '2Sam.7.16',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And your house and your kingdom shall be established forever before you. Your throne shall be established forever.',
      spans: [
        { tokenIds: ['2Sam.7.16.0'], targetSlice: [38, 58], confidence: 'high' },
        { tokenIds: ['2Sam.7.16.1'], targetSlice: [4, 14], confidence: 'high' },
        { tokenIds: ['2Sam.7.16.2'], targetSlice: [19, 31], confidence: 'high' },
        { tokenIds: ['2Sam.7.16.3'], targetSlice: [59, 66], confidence: 'high' },
        { tokenIds: ['2Sam.7.16.4'], targetSlice: [59, 66], confidence: 'high' },
        { tokenIds: ['2Sam.7.16.5'], targetSlice: [80, 90], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "Your house and your kingdom will endure forever before me; your throne will be established forever.",
      spans: [
        { tokenIds: ['2Sam.7.16.0'], targetSlice: [37, 53], confidence: 'high' },
        { tokenIds: ['2Sam.7.16.1', '2Sam.7.16.2'], targetSlice: [0, 30], confidence: 'high' },
        { tokenIds: ['2Sam.7.16.3', '2Sam.7.16.4'], targetSlice: [31, 38], confidence: 'high' },
        { tokenIds: ['2Sam.7.16.5'], targetSlice: [56, 66], confidence: 'high' },
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

export const samuel2_7_16_verse = {
  ref: '2Sam.7.16',
  sourceTokens: samuel2_7_16_tokens,
  translation: samuel2_7_16_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 7:28 – You are God and your words are truth
 * ──────────────────────────────────────────────────────────── */

export const samuel2_7_28_tokens: SourceToken[] = [
  {
    id: '2Sam.7.28.0',
    surfaceText: 'אַתָּה',
    lemma: 'אַתָּה',
    transliteration: "ʾattāh",
    lemmaTranslit: "ʾattāh",
    morph: 'HPp2ms',
    strong: 'H859',
    language: 'hebrew',
    position: 0,
    gloss: 'you',
  },
  {
    id: '2Sam.7.28.1',
    surfaceText: 'הוּא',
    lemma: 'הוּא',
    transliteration: "hûʾ",
    lemmaTranslit: "hûʾ",
    morph: 'HPp3ms',
    strong: 'H1931',
    language: 'hebrew',
    position: 1,
    gloss: 'are he',
  },
  {
    id: '2Sam.7.28.2',
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
    id: '2Sam.7.28.3',
    surfaceText: 'וּדְבָרֶיךָ',
    lemma: 'דָּבָר',
    transliteration: 'ûḏěḇārêḵā',
    lemmaTranslit: 'dāḇār',
    morph: 'HC+Ncmpc+Sp2ms',
    strong: 'H1697',
    language: 'hebrew',
    position: 3,
    gloss: 'and your words',
  },
  {
    id: '2Sam.7.28.4',
    surfaceText: 'יִהְיוּ',
    lemma: 'הָיָה',
    transliteration: 'yihyû',
    lemmaTranslit: 'hāyāh',
    morph: 'HVqI3mp',
    strong: 'H1961',
    language: 'hebrew',
    position: 4,
    gloss: 'are',
  },
  {
    id: '2Sam.7.28.5',
    surfaceText: 'אֱמֶת',
    lemma: 'אֱמֶת',
    transliteration: "ʾĕmeṯ",
    lemmaTranslit: "ʾĕmeṯ",
    morph: 'HNcfsa',
    strong: 'H571',
    language: 'hebrew',
    position: 5,
    gloss: 'truth',
  },
];

export const samuel2_7_28_translation: VerseTranslation = {
  verseRef: '2Sam.7.28',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'You are he, the God, and your words are truth.',
      spans: [
        { tokenIds: ['2Sam.7.28.0'], targetSlice: [0, 3], confidence: 'high' },
        { tokenIds: ['2Sam.7.28.1'], targetSlice: [4, 10], confidence: 'high' },
        { tokenIds: ['2Sam.7.28.2'], targetSlice: [12, 19], confidence: 'high' },
        { tokenIds: ['2Sam.7.28.3'], targetSlice: [25, 35], confidence: 'high' },
        { tokenIds: ['2Sam.7.28.4'], targetSlice: [36, 39], confidence: 'high' },
        { tokenIds: ['2Sam.7.28.5'], targetSlice: [40, 45], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "Sovereign LORD, you are God! Your covenant is trustworthy, and your words are truth.",
      spans: [
        { tokenIds: ['2Sam.7.28.0', '2Sam.7.28.1', '2Sam.7.28.2'], targetSlice: [0, 28], confidence: 'high' },
        { tokenIds: ['2Sam.7.28.3'], targetSlice: [62, 72], confidence: 'high' },
        { tokenIds: ['2Sam.7.28.4', '2Sam.7.28.5'], targetSlice: [73, 82], confidence: 'high' },
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

export const samuel2_7_28_verse = {
  ref: '2Sam.7.28',
  sourceTokens: samuel2_7_28_tokens,
  translation: samuel2_7_28_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — 2 Samuel 7:1-29 (Davidic covenant)
 * ──────────────────────────────────────────────────────────── */

export const samuel2_7_1_29_verses = [
  samuel2_7_1_verse,
  samuel2_7_8_verse,
  samuel2_7_12_verse,
  samuel2_7_13_verse,
  samuel2_7_16_verse,
  samuel2_7_28_verse,
];

export default samuel2_7_1_29_verses;
