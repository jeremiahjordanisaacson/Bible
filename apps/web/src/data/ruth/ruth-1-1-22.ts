// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 1:1 – In the days when the judges ruled
 * ──────────────────────────────────────────────────────────── */

export const ruth1_1_tokens: SourceToken[] = [
  {
    id: 'Ruth.1.1.0',
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
    id: 'Ruth.1.1.1',
    surfaceText: 'בִּימֵי',
    lemma: 'יוֹם',
    transliteration: 'bîmê',
    lemmaTranslit: 'yôm',
    morph: 'HR+Ncmpc',
    strong: 'H3117',
    language: 'hebrew',
    position: 1,
    gloss: 'in the days of',
  },
  {
    id: 'Ruth.1.1.2',
    surfaceText: 'שְׁפֹט',
    lemma: 'שָׁפַט',
    transliteration: 'šěp̄ōṭ',
    lemmaTranslit: 'šāp̄aṭ',
    morph: 'HVqc',
    strong: 'H8199',
    language: 'hebrew',
    position: 2,
    gloss: 'judging',
  },
  {
    id: 'Ruth.1.1.3',
    surfaceText: 'הַשֹּׁפְטִים',
    lemma: 'שָׁפַט',
    transliteration: 'haššōp̄ěṭîm',
    lemmaTranslit: 'šāp̄aṭ',
    morph: 'HTd+Vqrmpa',
    strong: 'H8199',
    language: 'hebrew',
    position: 3,
    gloss: 'the judges',
  },
  {
    id: 'Ruth.1.1.4',
    surfaceText: 'רָעָב',
    lemma: 'רָעָב',
    transliteration: 'rāʿāḇ',
    lemmaTranslit: 'rāʿāḇ',
    morph: 'HNcmsa',
    strong: 'H7458',
    language: 'hebrew',
    position: 4,
    gloss: 'a famine',
  },
  {
    id: 'Ruth.1.1.5',
    surfaceText: 'בָּאָרֶץ',
    lemma: 'אֶרֶץ',
    transliteration: 'bāʾāreṣ',
    lemmaTranslit: 'ʾereṣ',
    morph: 'HR+Ncfsa',
    strong: 'H776',
    language: 'hebrew',
    position: 5,
    gloss: 'in the land',
  },
];

export const ruth1_1_translation: VerseTranslation = {
  verseRef: 'Ruth.1.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And it was in the days when the judges ruled, there was a famine in the land',
      spans: [
        { tokenIds: ['Ruth.1.1.0'], targetSlice: [0, 10], confidence: 'high' },
        { tokenIds: ['Ruth.1.1.1'], targetSlice: [11, 25], confidence: 'high' },
        { tokenIds: ['Ruth.1.1.2'], targetSlice: [31, 36], confidence: 'high' },
        { tokenIds: ['Ruth.1.1.3'], targetSlice: [26, 36], confidence: 'high' },
        { tokenIds: ['Ruth.1.1.4'], targetSlice: [53, 59], confidence: 'high' },
        { tokenIds: ['Ruth.1.1.5'], targetSlice: [63, 75], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'In the days when the judges ruled, there was a famine in the land',
      spans: [
        { tokenIds: ['Ruth.1.1.0', 'Ruth.1.1.1'], targetSlice: [0, 14], confidence: 'high' },
        { tokenIds: ['Ruth.1.1.2', 'Ruth.1.1.3'], targetSlice: [20, 33], confidence: 'high' },
        { tokenIds: ['Ruth.1.1.4'], targetSlice: [49, 55], confidence: 'high' },
        { tokenIds: ['Ruth.1.1.5'], targetSlice: [56, 65], confidence: 'high' },
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

export const ruth1_1_verse = {
  ref: 'Ruth.1.1',
  sourceTokens: ruth1_1_tokens,
  translation: ruth1_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:6 – She had heard that the LORD had visited his people
 * ──────────────────────────────────────────────────────────── */

export const ruth1_6_tokens: SourceToken[] = [
  {
    id: 'Ruth.1.6.0',
    surfaceText: 'וַתָּקָם',
    lemma: 'קוּם',
    transliteration: 'wattāqām',
    lemmaTranslit: 'qûm',
    morph: 'HC+Vqw3fs',
    strong: 'H6965',
    language: 'hebrew',
    position: 0,
    gloss: 'and she arose',
  },
  {
    id: 'Ruth.1.6.1',
    surfaceText: 'כִּי',
    lemma: 'כִּי',
    transliteration: 'kî',
    lemmaTranslit: 'kî',
    morph: 'HC',
    strong: 'H3588',
    language: 'hebrew',
    position: 1,
    gloss: 'for',
  },
  {
    id: 'Ruth.1.6.2',
    surfaceText: 'שָׁמְעָה',
    lemma: 'שָׁמַע',
    transliteration: "šāměʿāh",
    lemmaTranslit: "šāmaʿ",
    morph: 'HVqp3fs',
    strong: 'H8085',
    language: 'hebrew',
    position: 2,
    gloss: 'she had heard',
  },
  {
    id: 'Ruth.1.6.3',
    surfaceText: 'פָקַד',
    lemma: 'פָּקַד',
    transliteration: 'p̄āqaḏ',
    lemmaTranslit: 'pāqaḏ',
    morph: 'HVqp3ms',
    strong: 'H6485',
    language: 'hebrew',
    position: 3,
    gloss: 'had visited',
  },
  {
    id: 'Ruth.1.6.4',
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
    id: 'Ruth.1.6.5',
    surfaceText: 'עַמּוֹ',
    lemma: 'עַם',
    transliteration: "ʿammô",
    lemmaTranslit: "ʿam",
    morph: 'HNcmsc+Sp3ms',
    strong: 'H5971',
    language: 'hebrew',
    position: 5,
    gloss: 'his people',
  },
];

export const ruth1_6_translation: VerseTranslation = {
  verseRef: 'Ruth.1.6',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And she arose, for she had heard that the LORD had visited his people by giving them bread',
      spans: [
        { tokenIds: ['Ruth.1.6.0'], targetSlice: [0, 13], confidence: 'high' },
        { tokenIds: ['Ruth.1.6.1'], targetSlice: [15, 18], confidence: 'high' },
        { tokenIds: ['Ruth.1.6.2'], targetSlice: [19, 33], confidence: 'high' },
        { tokenIds: ['Ruth.1.6.3'], targetSlice: [43, 54], confidence: 'high' },
        { tokenIds: ['Ruth.1.6.4'], targetSlice: [39, 47], confidence: 'high' },
        { tokenIds: ['Ruth.1.6.5'], targetSlice: [55, 65], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'She arose to return, for she had heard that the LORD had visited his people and given them food',
      spans: [
        { tokenIds: ['Ruth.1.6.0'], targetSlice: [0, 18], confidence: 'high' },
        { tokenIds: ['Ruth.1.6.1', 'Ruth.1.6.2'], targetSlice: [20, 38], confidence: 'high' },
        { tokenIds: ['Ruth.1.6.3', 'Ruth.1.6.4'], targetSlice: [44, 62], confidence: 'high' },
        { tokenIds: ['Ruth.1.6.5'], targetSlice: [63, 73], confidence: 'high' },
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

export const ruth1_6_verse = {
  ref: 'Ruth.1.6',
  sourceTokens: ruth1_6_tokens,
  translation: ruth1_6_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:8 – Go, return each to her mother's house
 * ──────────────────────────────────────────────────────────── */

export const ruth1_8_tokens: SourceToken[] = [
  {
    id: 'Ruth.1.8.0',
    surfaceText: 'לֵכְנָה',
    lemma: 'הָלַךְ',
    transliteration: 'lēḵnāh',
    lemmaTranslit: 'hālaḵ',
    morph: 'HVqv2fp',
    strong: 'H1980',
    language: 'hebrew',
    position: 0,
    gloss: 'go',
  },
  {
    id: 'Ruth.1.8.1',
    surfaceText: 'שֹׁבְנָה',
    lemma: 'שׁוּב',
    transliteration: 'šōḇnāh',
    lemmaTranslit: 'šûḇ',
    morph: 'HVqv2fp',
    strong: 'H7725',
    language: 'hebrew',
    position: 1,
    gloss: 'return',
  },
  {
    id: 'Ruth.1.8.2',
    surfaceText: 'אִשָּׁה',
    lemma: 'אִשָּׁה',
    transliteration: "ʾiššāh",
    lemmaTranslit: "ʾiššāh",
    morph: 'HNcfsa',
    strong: 'H802',
    language: 'hebrew',
    position: 2,
    gloss: 'each',
  },
  {
    id: 'Ruth.1.8.3',
    surfaceText: 'לְבֵית',
    lemma: 'בַּיִת',
    transliteration: 'lěḇêṯ',
    lemmaTranslit: 'bayiṯ',
    morph: 'HR+Ncmsc',
    strong: 'H1004',
    language: 'hebrew',
    position: 3,
    gloss: 'to the house of',
  },
  {
    id: 'Ruth.1.8.4',
    surfaceText: 'אִמָּהּ',
    lemma: 'אֵם',
    transliteration: "ʾimmāh",
    lemmaTranslit: "ʾēm",
    morph: 'HNcfsc+Sp3fs',
    strong: 'H517',
    language: 'hebrew',
    position: 4,
    gloss: "her mother",
  },
  {
    id: 'Ruth.1.8.5',
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

export const ruth1_8_translation: VerseTranslation = {
  verseRef: 'Ruth.1.8',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "Go, return each to her mother's house; may the LORD deal kindly with you",
      spans: [
        { tokenIds: ['Ruth.1.8.0'], targetSlice: [0, 2], confidence: 'high' },
        { tokenIds: ['Ruth.1.8.1'], targetSlice: [4, 10], confidence: 'high' },
        { tokenIds: ['Ruth.1.8.2'], targetSlice: [11, 15], confidence: 'high' },
        { tokenIds: ['Ruth.1.8.3'], targetSlice: [23, 28], confidence: 'high' },
        { tokenIds: ['Ruth.1.8.4'], targetSlice: [16, 28], confidence: 'high' },
        { tokenIds: ['Ruth.1.8.5'], targetSlice: [46, 54], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "Go, return each of you to her mother's house. May the LORD deal kindly with you, as you have dealt with the dead and with me.",
      spans: [
        { tokenIds: ['Ruth.1.8.0', 'Ruth.1.8.1'], targetSlice: [0, 10], confidence: 'high' },
        { tokenIds: ['Ruth.1.8.2'], targetSlice: [11, 22], confidence: 'high' },
        { tokenIds: ['Ruth.1.8.3', 'Ruth.1.8.4'], targetSlice: [26, 43], confidence: 'high' },
        { tokenIds: ['Ruth.1.8.5'], targetSlice: [49, 57], confidence: 'high' },
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

export const ruth1_8_verse = {
  ref: 'Ruth.1.8',
  sourceTokens: ruth1_8_tokens,
  translation: ruth1_8_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:14 – Ruth clung to her
 * ──────────────────────────────────────────────────────────── */

export const ruth1_14_tokens: SourceToken[] = [
  {
    id: 'Ruth.1.14.0',
    surfaceText: 'וַתִּשֶּׂנָה',
    lemma: 'נָשָׂא',
    transliteration: 'wattiśśenāh',
    lemmaTranslit: 'nāśāʾ',
    morph: 'HC+Vqw3fp',
    strong: 'H5375',
    language: 'hebrew',
    position: 0,
    gloss: 'and they lifted up',
  },
  {
    id: 'Ruth.1.14.1',
    surfaceText: 'קוֹלָן',
    lemma: 'קוֹל',
    transliteration: 'qôlān',
    lemmaTranslit: 'qôl',
    morph: 'HNcmsc+Sp3fp',
    strong: 'H6963',
    language: 'hebrew',
    position: 1,
    gloss: 'their voice',
  },
  {
    id: 'Ruth.1.14.2',
    surfaceText: 'עָרְפָּה',
    lemma: 'עָרְפָּה',
    transliteration: "ʿorpāh",
    lemmaTranslit: "ʿorpāh",
    morph: 'HNp',
    strong: 'H6204',
    language: 'hebrew',
    position: 2,
    gloss: 'Orpah',
  },
  {
    id: 'Ruth.1.14.3',
    surfaceText: 'וְרוּת',
    lemma: 'רוּת',
    transliteration: 'wěrûṯ',
    lemmaTranslit: 'rûṯ',
    morph: 'HC+Np',
    strong: 'H7327',
    language: 'hebrew',
    position: 3,
    gloss: 'and Ruth',
  },
  {
    id: 'Ruth.1.14.4',
    surfaceText: 'דָּבְקָה',
    lemma: 'דָּבַק',
    transliteration: 'dāḇěqāh',
    lemmaTranslit: 'dāḇaq',
    morph: 'HVqp3fs',
    strong: 'H1692',
    language: 'hebrew',
    position: 4,
    gloss: 'clung',
  },
  {
    id: 'Ruth.1.14.5',
    surfaceText: 'בָּהּ',
    lemma: 'בְּ',
    transliteration: 'bāh',
    lemmaTranslit: 'bě',
    morph: 'HR+Sp3fs',
    strong: 'H0',
    language: 'hebrew',
    position: 5,
    gloss: 'to her',
  },
];

export const ruth1_14_translation: VerseTranslation = {
  verseRef: 'Ruth.1.14',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And they lifted up their voice and wept again; and Orpah kissed her mother-in-law, but Ruth clung to her',
      spans: [
        { tokenIds: ['Ruth.1.14.0'], targetSlice: [0, 22], confidence: 'high' },
        { tokenIds: ['Ruth.1.14.1'], targetSlice: [23, 33], confidence: 'high' },
        { tokenIds: ['Ruth.1.14.2'], targetSlice: [51, 56], confidence: 'high' },
        { tokenIds: ['Ruth.1.14.3'], targetSlice: [87, 91], confidence: 'high' },
        { tokenIds: ['Ruth.1.14.4'], targetSlice: [92, 97], confidence: 'high' },
        { tokenIds: ['Ruth.1.14.5'], targetSlice: [98, 104], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'They wept aloud again. Orpah kissed her mother-in-law goodbye, but Ruth clung to her.',
      spans: [
        { tokenIds: ['Ruth.1.14.0', 'Ruth.1.14.1'], targetSlice: [0, 21], confidence: 'high' },
        { tokenIds: ['Ruth.1.14.2'], targetSlice: [23, 28], confidence: 'high' },
        { tokenIds: ['Ruth.1.14.3', 'Ruth.1.14.4', 'Ruth.1.14.5'], targetSlice: [61, 85], confidence: 'high' },
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

export const ruth1_14_verse = {
  ref: 'Ruth.1.14',
  sourceTokens: ruth1_14_tokens,
  translation: ruth1_14_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:16 – "Where you go I will go"
 * ──────────────────────────────────────────────────────────── */

export const ruth1_16_tokens: SourceToken[] = [
  {
    id: 'Ruth.1.16.0',
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
    id: 'Ruth.1.16.1',
    surfaceText: 'אֶל',
    lemma: 'אֶל',
    transliteration: "ʾel",
    lemmaTranslit: "ʾel",
    morph: 'HR',
    strong: 'H413',
    language: 'hebrew',
    position: 1,
    gloss: 'to',
  },
  {
    id: 'Ruth.1.16.2',
    surfaceText: 'אֲשֶׁר',
    lemma: 'אֲשֶׁר',
    transliteration: "ʾăšer",
    lemmaTranslit: "ʾăšer",
    morph: 'HR',
    strong: 'H834',
    language: 'hebrew',
    position: 2,
    gloss: 'where',
  },
  {
    id: 'Ruth.1.16.3',
    surfaceText: 'תֵּלְכִי',
    lemma: 'הָלַךְ',
    transliteration: 'tēlěḵî',
    lemmaTranslit: 'hālaḵ',
    morph: 'HVqI2fs',
    strong: 'H1980',
    language: 'hebrew',
    position: 3,
    gloss: 'you go',
  },
  {
    id: 'Ruth.1.16.4',
    surfaceText: 'אֵלֵךְ',
    lemma: 'הָלַךְ',
    transliteration: "ʾēlēḵ",
    lemmaTranslit: 'hālaḵ',
    morph: 'HVqI1cs',
    strong: 'H1980',
    language: 'hebrew',
    position: 4,
    gloss: 'I will go',
  },
  {
    id: 'Ruth.1.16.5',
    surfaceText: 'עַמֵּךְ',
    lemma: 'עַם',
    transliteration: "ʿammēḵ",
    lemmaTranslit: "ʿam",
    morph: 'HNcmsc+Sp2fs',
    strong: 'H5971',
    language: 'hebrew',
    position: 5,
    gloss: 'your people',
  },
  {
    id: 'Ruth.1.16.6',
    surfaceText: 'עַמִּי',
    lemma: 'עַם',
    transliteration: "ʿammî",
    lemmaTranslit: "ʿam",
    morph: 'HNcmsc+Sp1cs',
    strong: 'H5971',
    language: 'hebrew',
    position: 6,
    gloss: 'my people',
  },
  {
    id: 'Ruth.1.16.7',
    surfaceText: 'וֵאלֹהַיִךְ',
    lemma: 'אֱלֹהִים',
    transliteration: "wēʾlōhayiḵ",
    lemmaTranslit: "ʾĕlōhîm",
    morph: 'HC+Ncmpc+Sp2fs',
    strong: 'H430',
    language: 'hebrew',
    position: 7,
    gloss: 'and your God',
  },
];

export const ruth1_16_translation: VerseTranslation = {
  verseRef: 'Ruth.1.16',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "Do not urge me to leave you. For where you go I will go, and where you lodge I will lodge. Your people shall be my people, and your God my God.",
      spans: [
        { tokenIds: ['Ruth.1.16.0'], targetSlice: [27, 30], confidence: 'high' },
        { tokenIds: ['Ruth.1.16.1', 'Ruth.1.16.2'], targetSlice: [31, 36], confidence: 'high' },
        { tokenIds: ['Ruth.1.16.3'], targetSlice: [37, 43], confidence: 'high' },
        { tokenIds: ['Ruth.1.16.4'], targetSlice: [44, 54], confidence: 'high' },
        { tokenIds: ['Ruth.1.16.5'], targetSlice: [91, 102], confidence: 'high' },
        { tokenIds: ['Ruth.1.16.6'], targetSlice: [112, 121], confidence: 'high' },
        { tokenIds: ['Ruth.1.16.7'], targetSlice: [127, 136], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "Do not urge me to leave you or to turn back from you. Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God.",
      spans: [
        { tokenIds: ['Ruth.1.16.0'], targetSlice: [52, 55], confidence: 'high' },
        { tokenIds: ['Ruth.1.16.1', 'Ruth.1.16.2', 'Ruth.1.16.3'], targetSlice: [56, 68], confidence: 'high' },
        { tokenIds: ['Ruth.1.16.4'], targetSlice: [69, 79], confidence: 'high' },
        { tokenIds: ['Ruth.1.16.5', 'Ruth.1.16.6'], targetSlice: [112, 143], confidence: 'high' },
        { tokenIds: ['Ruth.1.16.7'], targetSlice: [148, 160], confidence: 'high' },
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

export const ruth1_16_verse = {
  ref: 'Ruth.1.16',
  sourceTokens: ruth1_16_tokens,
  translation: ruth1_16_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:22 – So Naomi returned
 * ──────────────────────────────────────────────────────────── */

export const ruth1_22_tokens: SourceToken[] = [
  {
    id: 'Ruth.1.22.0',
    surfaceText: 'וַתָּשָׁב',
    lemma: 'שׁוּב',
    transliteration: 'wattāšāḇ',
    lemmaTranslit: 'šûḇ',
    morph: 'HC+Vqw3fs',
    strong: 'H7725',
    language: 'hebrew',
    position: 0,
    gloss: 'and she returned',
  },
  {
    id: 'Ruth.1.22.1',
    surfaceText: 'נָעֳמִי',
    lemma: 'נָעֳמִי',
    transliteration: "noʿŏmî",
    lemmaTranslit: "noʿŏmî",
    morph: 'HNp',
    strong: 'H5281',
    language: 'hebrew',
    position: 1,
    gloss: 'Naomi',
  },
  {
    id: 'Ruth.1.22.2',
    surfaceText: 'וְרוּת',
    lemma: 'רוּת',
    transliteration: 'wěrûṯ',
    lemmaTranslit: 'rûṯ',
    morph: 'HC+Np',
    strong: 'H7327',
    language: 'hebrew',
    position: 2,
    gloss: 'and Ruth',
  },
  {
    id: 'Ruth.1.22.3',
    surfaceText: 'הַמּוֹאֲבִיָּה',
    lemma: 'מוֹאָבִי',
    transliteration: "hammôʾăḇiyyāh",
    lemmaTranslit: "môʾāḇî",
    morph: 'HTd+Ngfsa',
    strong: 'H4125',
    language: 'hebrew',
    position: 3,
    gloss: 'the Moabitess',
  },
  {
    id: 'Ruth.1.22.4',
    surfaceText: 'מִשְּׂדֵי',
    lemma: 'שָׂדֶה',
    transliteration: 'miśśěḏê',
    lemmaTranslit: 'śāḏeh',
    morph: 'HR+Ncmpc',
    strong: 'H7704',
    language: 'hebrew',
    position: 4,
    gloss: 'from the fields of',
  },
  {
    id: 'Ruth.1.22.5',
    surfaceText: 'מוֹאָב',
    lemma: 'מוֹאָב',
    transliteration: "môʾāḇ",
    lemmaTranslit: "môʾāḇ",
    morph: 'HNp',
    strong: 'H4124',
    language: 'hebrew',
    position: 5,
    gloss: 'Moab',
  },
];

export const ruth1_22_translation: VerseTranslation = {
  verseRef: 'Ruth.1.22',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'So Naomi returned, and Ruth the Moabitess her daughter-in-law with her, from the fields of Moab',
      spans: [
        { tokenIds: ['Ruth.1.22.0'], targetSlice: [0, 2], confidence: 'high' },
        { tokenIds: ['Ruth.1.22.1'], targetSlice: [3, 8], confidence: 'high' },
        { tokenIds: ['Ruth.1.22.2'], targetSlice: [24, 28], confidence: 'high' },
        { tokenIds: ['Ruth.1.22.3'], targetSlice: [29, 43], confidence: 'high' },
        { tokenIds: ['Ruth.1.22.4'], targetSlice: [74, 88], confidence: 'high' },
        { tokenIds: ['Ruth.1.22.5'], targetSlice: [89, 93], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'So Naomi returned from the country of Moab, and Ruth the Moabitess, her daughter-in-law, with her.',
      spans: [
        { tokenIds: ['Ruth.1.22.0', 'Ruth.1.22.1'], targetSlice: [0, 19], confidence: 'high' },
        { tokenIds: ['Ruth.1.22.2', 'Ruth.1.22.3'], targetSlice: [46, 65], confidence: 'high' },
        { tokenIds: ['Ruth.1.22.4', 'Ruth.1.22.5'], targetSlice: [20, 44], confidence: 'high' },
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

export const ruth1_22_verse = {
  ref: 'Ruth.1.22',
  sourceTokens: ruth1_22_tokens,
  translation: ruth1_22_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Ruth 1:1-22 (Ruth and Naomi)
 * ──────────────────────────────────────────────────────────── */

export const ruth1_1_22_verses = [
  ruth1_1_verse,
  ruth1_6_verse,
  ruth1_8_verse,
  ruth1_14_verse,
  ruth1_16_verse,
  ruth1_22_verse,
];

export default ruth1_1_22_verses;
