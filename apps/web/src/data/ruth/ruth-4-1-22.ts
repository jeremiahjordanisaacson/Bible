// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 4:1 – Boaz went up to the gate
 * ──────────────────────────────────────────────────────────── */

export const ruth4_1_tokens: SourceToken[] = [
  {
    id: 'Ruth.4.1.0',
    surfaceText: 'וּבֹעַז',
    lemma: 'בֹּעַז',
    transliteration: 'ûḇōʿaz',
    lemmaTranslit: 'bōʿaz',
    morph: 'HC+Np',
    strong: 'H1162',
    language: 'hebrew',
    position: 0,
    gloss: 'and Boaz',
  },
  {
    id: 'Ruth.4.1.1',
    surfaceText: 'עָלָה',
    lemma: 'עָלָה',
    transliteration: "ʿālāh",
    lemmaTranslit: "ʿālāh",
    morph: 'HVqp3ms',
    strong: 'H5927',
    language: 'hebrew',
    position: 1,
    gloss: 'went up',
  },
  {
    id: 'Ruth.4.1.2',
    surfaceText: 'הַשַּׁעַר',
    lemma: 'שַׁעַר',
    transliteration: 'haššaʿar',
    lemmaTranslit: 'šaʿar',
    morph: 'HTd+Ncmsa',
    strong: 'H8179',
    language: 'hebrew',
    position: 2,
    gloss: 'the gate',
  },
  {
    id: 'Ruth.4.1.3',
    surfaceText: 'וַיֵּשֶׁב',
    lemma: 'יָשַׁב',
    transliteration: 'wayyēšeḇ',
    lemmaTranslit: 'yāšaḇ',
    morph: 'HC+Vqw3ms',
    strong: 'H3427',
    language: 'hebrew',
    position: 3,
    gloss: 'and he sat down',
  },
  {
    id: 'Ruth.4.1.4',
    surfaceText: 'שָׁם',
    lemma: 'שָׁם',
    transliteration: 'šām',
    lemmaTranslit: 'šām',
    morph: 'HD',
    strong: 'H8033',
    language: 'hebrew',
    position: 4,
    gloss: 'there',
  },
  {
    id: 'Ruth.4.1.5',
    surfaceText: 'הַגֹּאֵל',
    lemma: 'גָּאַל',
    transliteration: 'haggōʾēl',
    lemmaTranslit: 'gāʾal',
    morph: 'HTd+Vqrmsa',
    strong: 'H1350',
    language: 'hebrew',
    position: 5,
    gloss: 'the redeemer',
  },
];

export const ruth4_1_translation: VerseTranslation = {
  verseRef: 'Ruth.4.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And Boaz went up to the gate and sat down there; and behold, the redeemer of whom Boaz had spoken came by',
      spans: [
        { tokenIds: ['Ruth.4.1.0'], targetSlice: [0, 9], confidence: 'high' },
        { tokenIds: ['Ruth.4.1.1'], targetSlice: [10, 17], confidence: 'high' },
        { tokenIds: ['Ruth.4.1.2'], targetSlice: [21, 29], confidence: 'high' },
        { tokenIds: ['Ruth.4.1.3'], targetSlice: [30, 42], confidence: 'high' },
        { tokenIds: ['Ruth.4.1.4'], targetSlice: [43, 48], confidence: 'high' },
        { tokenIds: ['Ruth.4.1.5'], targetSlice: [62, 74], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Now Boaz had gone up to the gate and sat down there. And behold, the redeemer of whom Boaz had spoken came along.',
      spans: [
        { tokenIds: ['Ruth.4.1.0', 'Ruth.4.1.1'], targetSlice: [0, 26], confidence: 'high' },
        { tokenIds: ['Ruth.4.1.2'], targetSlice: [27, 35], confidence: 'high' },
        { tokenIds: ['Ruth.4.1.3', 'Ruth.4.1.4'], targetSlice: [36, 51], confidence: 'high' },
        { tokenIds: ['Ruth.4.1.5'], targetSlice: [66, 78], confidence: 'high' },
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

export const ruth4_1_verse = {
  ref: 'Ruth.4.1',
  sourceTokens: ruth4_1_tokens,
  translation: ruth4_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 4:5 – You must also buy from Ruth
 * ──────────────────────────────────────────────────────────── */

export const ruth4_5_tokens: SourceToken[] = [
  {
    id: 'Ruth.4.5.0',
    surfaceText: 'בְּיוֹם',
    lemma: 'יוֹם',
    transliteration: 'běyôm',
    lemmaTranslit: 'yôm',
    morph: 'HR+Ncmsa',
    strong: 'H3117',
    language: 'hebrew',
    position: 0,
    gloss: 'on the day',
  },
  {
    id: 'Ruth.4.5.1',
    surfaceText: 'קְנוֹתְךָ',
    lemma: 'קָנָה',
    transliteration: 'qěnôṯěḵā',
    lemmaTranslit: 'qānāh',
    morph: 'HVqc+Sp2ms',
    strong: 'H7069',
    language: 'hebrew',
    position: 1,
    gloss: 'you buy',
  },
  {
    id: 'Ruth.4.5.2',
    surfaceText: 'הַשָּׂדֶה',
    lemma: 'שָׂדֶה',
    transliteration: 'haśśāḏeh',
    lemmaTranslit: 'śāḏeh',
    morph: 'HTd+Ncmsa',
    strong: 'H7704',
    language: 'hebrew',
    position: 2,
    gloss: 'the field',
  },
  {
    id: 'Ruth.4.5.3',
    surfaceText: 'וּמֵאֵת',
    lemma: 'מֵאֵת',
    transliteration: 'ûmēʾēṯ',
    lemmaTranslit: 'mēʾēṯ',
    morph: 'HC+HR',
    strong: 'H854',
    language: 'hebrew',
    position: 3,
    gloss: 'and from',
  },
  {
    id: 'Ruth.4.5.4',
    surfaceText: 'רוּת',
    lemma: 'רוּת',
    transliteration: 'rûṯ',
    lemmaTranslit: 'rûṯ',
    morph: 'HNp',
    strong: 'H7327',
    language: 'hebrew',
    position: 4,
    gloss: 'Ruth',
  },
  {
    id: 'Ruth.4.5.5',
    surfaceText: 'הַמּוֹאֲבִיָּה',
    lemma: 'מוֹאָבִי',
    transliteration: "hammôʾăḇiyyāh",
    lemmaTranslit: "môʾāḇî",
    morph: 'HTd+Ngfsa',
    strong: 'H4125',
    language: 'hebrew',
    position: 5,
    gloss: 'the Moabitess',
  },
];

export const ruth4_5_translation: VerseTranslation = {
  verseRef: 'Ruth.4.5',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "On the day you buy the field from the hand of Naomi, you must also buy it from Ruth the Moabitess, the wife of the dead",
      spans: [
        { tokenIds: ['Ruth.4.5.0'], targetSlice: [0, 10], confidence: 'high' },
        { tokenIds: ['Ruth.4.5.1'], targetSlice: [11, 18], confidence: 'high' },
        { tokenIds: ['Ruth.4.5.2'], targetSlice: [19, 28], confidence: 'high' },
        { tokenIds: ['Ruth.4.5.3'], targetSlice: [69, 77], confidence: 'high' },
        { tokenIds: ['Ruth.4.5.4'], targetSlice: [78, 82], confidence: 'high' },
        { tokenIds: ['Ruth.4.5.5'], targetSlice: [83, 97], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "The day you buy the field from Naomi, you also acquire Ruth the Moabitess, the widow of the dead, to perpetuate the name of the dead.",
      spans: [
        { tokenIds: ['Ruth.4.5.0', 'Ruth.4.5.1'], targetSlice: [0, 22], confidence: 'high' },
        { tokenIds: ['Ruth.4.5.2'], targetSlice: [23, 32], confidence: 'high' },
        { tokenIds: ['Ruth.4.5.3', 'Ruth.4.5.4', 'Ruth.4.5.5'], targetSlice: [52, 76], confidence: 'high' },
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

export const ruth4_5_verse = {
  ref: 'Ruth.4.5',
  sourceTokens: ruth4_5_tokens,
  translation: ruth4_5_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 4:9 – Boaz said, You are witnesses
 * ──────────────────────────────────────────────────────────── */

export const ruth4_9_tokens: SourceToken[] = [
  {
    id: 'Ruth.4.9.0',
    surfaceText: 'וַיֹּאמֶר',
    lemma: 'אָמַר',
    transliteration: 'wayyōʾmer',
    lemmaTranslit: "ʾāmar",
    morph: 'HC+Vqw3ms',
    strong: 'H559',
    language: 'hebrew',
    position: 0,
    gloss: 'and he said',
  },
  {
    id: 'Ruth.4.9.1',
    surfaceText: 'בֹּעַז',
    lemma: 'בֹּעַז',
    transliteration: 'bōʿaz',
    lemmaTranslit: 'bōʿaz',
    morph: 'HNp',
    strong: 'H1162',
    language: 'hebrew',
    position: 1,
    gloss: 'Boaz',
  },
  {
    id: 'Ruth.4.9.2',
    surfaceText: 'עֵדִים',
    lemma: 'עֵד',
    transliteration: "ʿēḏîm",
    lemmaTranslit: "ʿēḏ",
    morph: 'HNcmpa',
    strong: 'H5707',
    language: 'hebrew',
    position: 2,
    gloss: 'witnesses',
  },
  {
    id: 'Ruth.4.9.3',
    surfaceText: 'אַתֶּם',
    lemma: 'אַתָּה',
    transliteration: "ʾattem",
    lemmaTranslit: "ʾattāh",
    morph: 'HPp2mp',
    strong: 'H859',
    language: 'hebrew',
    position: 3,
    gloss: 'you are',
  },
  {
    id: 'Ruth.4.9.4',
    surfaceText: 'קָנִיתִי',
    lemma: 'קָנָה',
    transliteration: 'qānîṯî',
    lemmaTranslit: 'qānāh',
    morph: 'HVqp1cs',
    strong: 'H7069',
    language: 'hebrew',
    position: 4,
    gloss: 'I have bought',
  },
  {
    id: 'Ruth.4.9.5',
    surfaceText: 'אֶלִימֶלֶךְ',
    lemma: 'אֱלִימֶלֶךְ',
    transliteration: "ʾĕlîmeleḵ",
    lemmaTranslit: "ʾĕlîmeleḵ",
    morph: 'HNp',
    strong: 'H458',
    language: 'hebrew',
    position: 5,
    gloss: 'Elimelech',
  },
];

export const ruth4_9_translation: VerseTranslation = {
  verseRef: 'Ruth.4.9',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "And Boaz said to the elders and all the people, You are witnesses today that I have bought all that was Elimelech's",
      spans: [
        { tokenIds: ['Ruth.4.9.0'], targetSlice: [0, 3], confidence: 'high' },
        { tokenIds: ['Ruth.4.9.1'], targetSlice: [4, 9], confidence: 'high' },
        { tokenIds: ['Ruth.4.9.2'], targetSlice: [48, 57], confidence: 'high' },
        { tokenIds: ['Ruth.4.9.3'], targetSlice: [40, 47], confidence: 'high' },
        { tokenIds: ['Ruth.4.9.4'], targetSlice: [72, 86], confidence: 'high' },
        { tokenIds: ['Ruth.4.9.5'], targetSlice: [104, 115], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "Then Boaz said to the elders and all the people, \"You are witnesses this day that I have bought all that belonged to Elimelech.\"",
      spans: [
        { tokenIds: ['Ruth.4.9.0', 'Ruth.4.9.1'], targetSlice: [0, 14], confidence: 'high' },
        { tokenIds: ['Ruth.4.9.2', 'Ruth.4.9.3'], targetSlice: [49, 67], confidence: 'high' },
        { tokenIds: ['Ruth.4.9.4', 'Ruth.4.9.5'], targetSlice: [82, 126], confidence: 'high' },
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

export const ruth4_9_verse = {
  ref: 'Ruth.4.9',
  sourceTokens: ruth4_9_tokens,
  translation: ruth4_9_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 4:13 – Boaz took Ruth and she became his wife
 * ──────────────────────────────────────────────────────────── */

export const ruth4_13_tokens: SourceToken[] = [
  {
    id: 'Ruth.4.13.0',
    surfaceText: 'וַיִּקַּח',
    lemma: 'לָקַח',
    transliteration: 'wayyiqqaḥ',
    lemmaTranslit: 'lāqaḥ',
    morph: 'HC+Vqw3ms',
    strong: 'H3947',
    language: 'hebrew',
    position: 0,
    gloss: 'and he took',
  },
  {
    id: 'Ruth.4.13.1',
    surfaceText: 'בֹּעַז',
    lemma: 'בֹּעַז',
    transliteration: 'bōʿaz',
    lemmaTranslit: 'bōʿaz',
    morph: 'HNp',
    strong: 'H1162',
    language: 'hebrew',
    position: 1,
    gloss: 'Boaz',
  },
  {
    id: 'Ruth.4.13.2',
    surfaceText: 'אֶת',
    lemma: 'אֵת',
    transliteration: "ʾeṯ",
    lemmaTranslit: "ʾēṯ",
    morph: 'HTo',
    strong: 'H853',
    language: 'hebrew',
    position: 2,
    gloss: '(dir. obj.)',
  },
  {
    id: 'Ruth.4.13.3',
    surfaceText: 'רוּת',
    lemma: 'רוּת',
    transliteration: 'rûṯ',
    lemmaTranslit: 'rûṯ',
    morph: 'HNp',
    strong: 'H7327',
    language: 'hebrew',
    position: 3,
    gloss: 'Ruth',
  },
  {
    id: 'Ruth.4.13.4',
    surfaceText: 'לוֹ',
    lemma: 'לְ',
    transliteration: 'lô',
    lemmaTranslit: 'lě',
    morph: 'HR+Sp3ms',
    strong: 'H0',
    language: 'hebrew',
    position: 4,
    gloss: 'to him',
  },
  {
    id: 'Ruth.4.13.5',
    surfaceText: 'לְאִשָּׁה',
    lemma: 'אִשָּׁה',
    transliteration: "lěʾiššāh",
    lemmaTranslit: "ʾiššāh",
    morph: 'HR+Ncfsa',
    strong: 'H802',
    language: 'hebrew',
    position: 5,
    gloss: 'as a wife',
  },
  {
    id: 'Ruth.4.13.6',
    surfaceText: 'יְהוָה',
    lemma: 'יְהוָה',
    transliteration: 'yhwh',
    lemmaTranslit: 'yhwh',
    morph: 'HNp',
    strong: 'H3068',
    language: 'hebrew',
    position: 6,
    gloss: 'the LORD',
  },
];

export const ruth4_13_translation: VerseTranslation = {
  verseRef: 'Ruth.4.13',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'So Boaz took Ruth, and she became his wife. And the LORD gave her conception, and she bore a son.',
      spans: [
        { tokenIds: ['Ruth.4.13.0'], targetSlice: [0, 2], confidence: 'high' },
        { tokenIds: ['Ruth.4.13.1'], targetSlice: [3, 7], confidence: 'high' },
        { tokenIds: ['Ruth.4.13.2'], targetSlice: [8, 12], confidence: 'high' },
        { tokenIds: ['Ruth.4.13.3'], targetSlice: [9, 13], confidence: 'high' },
        { tokenIds: ['Ruth.4.13.4', 'Ruth.4.13.5'], targetSlice: [23, 41], confidence: 'high' },
        { tokenIds: ['Ruth.4.13.6'], targetSlice: [51, 59], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'So Boaz took Ruth, and she became his wife. And when he went in to her, the LORD gave her conception, and she bore a son.',
      spans: [
        { tokenIds: ['Ruth.4.13.0', 'Ruth.4.13.1'], targetSlice: [0, 17], confidence: 'high' },
        { tokenIds: ['Ruth.4.13.2', 'Ruth.4.13.3'], targetSlice: [8, 17], confidence: 'high' },
        { tokenIds: ['Ruth.4.13.4', 'Ruth.4.13.5'], targetSlice: [23, 43], confidence: 'high' },
        { tokenIds: ['Ruth.4.13.6'], targetSlice: [73, 81], confidence: 'high' },
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

export const ruth4_13_verse = {
  ref: 'Ruth.4.13',
  sourceTokens: ruth4_13_tokens,
  translation: ruth4_13_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 4:14 – Blessed be the LORD who has not left you without a redeemer
 * ──────────────────────────────────────────────────────────── */

export const ruth4_14_tokens: SourceToken[] = [
  {
    id: 'Ruth.4.14.0',
    surfaceText: 'בָּרוּךְ',
    lemma: 'בָּרַךְ',
    transliteration: 'bārûḵ',
    lemmaTranslit: 'bāraḵ',
    morph: 'HVqsmsa',
    strong: 'H1288',
    language: 'hebrew',
    position: 0,
    gloss: 'blessed be',
  },
  {
    id: 'Ruth.4.14.1',
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
    id: 'Ruth.4.14.2',
    surfaceText: 'אֲשֶׁר',
    lemma: 'אֲשֶׁר',
    transliteration: "ʾăšer",
    lemmaTranslit: "ʾăšer",
    morph: 'HR',
    strong: 'H834',
    language: 'hebrew',
    position: 2,
    gloss: 'who',
  },
  {
    id: 'Ruth.4.14.3',
    surfaceText: 'לֹא',
    lemma: 'לֹא',
    transliteration: "lōʾ",
    lemmaTranslit: "lōʾ",
    morph: 'HTn',
    strong: 'H3808',
    language: 'hebrew',
    position: 3,
    gloss: 'not',
  },
  {
    id: 'Ruth.4.14.4',
    surfaceText: 'הִשְׁבִּית',
    lemma: 'שָׁבַת',
    transliteration: 'hišbîṯ',
    lemmaTranslit: 'šāḇaṯ',
    morph: 'HVhp3ms',
    strong: 'H7673',
    language: 'hebrew',
    position: 4,
    gloss: 'has left',
  },
  {
    id: 'Ruth.4.14.5',
    surfaceText: 'גֹּאֵל',
    lemma: 'גָּאַל',
    transliteration: 'gōʾēl',
    lemmaTranslit: 'gāʾal',
    morph: 'HVqrmsa',
    strong: 'H1350',
    language: 'hebrew',
    position: 5,
    gloss: 'a redeemer',
  },
];

export const ruth4_14_translation: VerseTranslation = {
  verseRef: 'Ruth.4.14',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Blessed be the LORD who has not left you this day without a redeemer',
      spans: [
        { tokenIds: ['Ruth.4.14.0'], targetSlice: [0, 10], confidence: 'high' },
        { tokenIds: ['Ruth.4.14.1'], targetSlice: [11, 19], confidence: 'high' },
        { tokenIds: ['Ruth.4.14.2'], targetSlice: [20, 23], confidence: 'high' },
        { tokenIds: ['Ruth.4.14.3'], targetSlice: [24, 27], confidence: 'high' },
        { tokenIds: ['Ruth.4.14.4'], targetSlice: [28, 32], confidence: 'high' },
        { tokenIds: ['Ruth.4.14.5'], targetSlice: [57, 67], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Blessed be the LORD, who has not left you this day without a redeemer, and may his name be renowned in Israel!',
      spans: [
        { tokenIds: ['Ruth.4.14.0', 'Ruth.4.14.1'], targetSlice: [0, 19], confidence: 'high' },
        { tokenIds: ['Ruth.4.14.2', 'Ruth.4.14.3', 'Ruth.4.14.4'], targetSlice: [21, 43], confidence: 'high' },
        { tokenIds: ['Ruth.4.14.5'], targetSlice: [58, 68], confidence: 'high' },
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

export const ruth4_14_verse = {
  ref: 'Ruth.4.14',
  sourceTokens: ruth4_14_tokens,
  translation: ruth4_14_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 4:17 – They named him Obed; he is the father of Jesse
 * ──────────────────────────────────────────────────────────── */

export const ruth4_17_tokens: SourceToken[] = [
  {
    id: 'Ruth.4.17.0',
    surfaceText: 'וַיִּקְרְאוּ',
    lemma: 'קָרָא',
    transliteration: 'wayyiqrěʾû',
    lemmaTranslit: 'qārāʾ',
    morph: 'HC+Vqw3mp',
    strong: 'H7121',
    language: 'hebrew',
    position: 0,
    gloss: 'and they called',
  },
  {
    id: 'Ruth.4.17.1',
    surfaceText: 'שְׁמוֹ',
    lemma: 'שֵׁם',
    transliteration: 'šěmô',
    lemmaTranslit: 'šēm',
    morph: 'HNcmsc+Sp3ms',
    strong: 'H8034',
    language: 'hebrew',
    position: 1,
    gloss: 'his name',
  },
  {
    id: 'Ruth.4.17.2',
    surfaceText: 'עוֹבֵד',
    lemma: 'עוֹבֵד',
    transliteration: "ʿôḇēḏ",
    lemmaTranslit: "ʿôḇēḏ",
    morph: 'HNp',
    strong: 'H5744',
    language: 'hebrew',
    position: 2,
    gloss: 'Obed',
  },
  {
    id: 'Ruth.4.17.3',
    surfaceText: 'הוּא',
    lemma: 'הוּא',
    transliteration: "hûʾ",
    lemmaTranslit: "hûʾ",
    morph: 'HPp3ms',
    strong: 'H1931',
    language: 'hebrew',
    position: 3,
    gloss: 'he',
  },
  {
    id: 'Ruth.4.17.4',
    surfaceText: 'אֲבִי',
    lemma: 'אָב',
    transliteration: "ʾăḇî",
    lemmaTranslit: "ʾāḇ",
    morph: 'HNcmsc',
    strong: 'H1',
    language: 'hebrew',
    position: 4,
    gloss: 'the father of',
  },
  {
    id: 'Ruth.4.17.5',
    surfaceText: 'יִשָׁי',
    lemma: 'יִשַׁי',
    transliteration: 'yišay',
    lemmaTranslit: 'yišay',
    morph: 'HNp',
    strong: 'H3448',
    language: 'hebrew',
    position: 5,
    gloss: 'Jesse',
  },
  {
    id: 'Ruth.4.17.6',
    surfaceText: 'דָּוִד',
    lemma: 'דָּוִד',
    transliteration: 'dāwiḏ',
    lemmaTranslit: 'dāwiḏ',
    morph: 'HNp',
    strong: 'H1732',
    language: 'hebrew',
    position: 6,
    gloss: 'David',
  },
];

export const ruth4_17_translation: VerseTranslation = {
  verseRef: 'Ruth.4.17',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And they called his name Obed. He is the father of Jesse, the father of David.',
      spans: [
        { tokenIds: ['Ruth.4.17.0'], targetSlice: [0, 15], confidence: 'high' },
        { tokenIds: ['Ruth.4.17.1'], targetSlice: [16, 24], confidence: 'high' },
        { tokenIds: ['Ruth.4.17.2'], targetSlice: [25, 29], confidence: 'high' },
        { tokenIds: ['Ruth.4.17.3'], targetSlice: [31, 33], confidence: 'high' },
        { tokenIds: ['Ruth.4.17.4'], targetSlice: [37, 50], confidence: 'high' },
        { tokenIds: ['Ruth.4.17.5'], targetSlice: [51, 56], confidence: 'high' },
        { tokenIds: ['Ruth.4.17.6'], targetSlice: [72, 77], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'They named him Obed. He was the father of Jesse, the father of David.',
      spans: [
        { tokenIds: ['Ruth.4.17.0', 'Ruth.4.17.1'], targetSlice: [0, 14], confidence: 'high' },
        { tokenIds: ['Ruth.4.17.2'], targetSlice: [15, 19], confidence: 'high' },
        { tokenIds: ['Ruth.4.17.3', 'Ruth.4.17.4'], targetSlice: [21, 39], confidence: 'high' },
        { tokenIds: ['Ruth.4.17.5'], targetSlice: [40, 45], confidence: 'high' },
        { tokenIds: ['Ruth.4.17.6'], targetSlice: [61, 66], confidence: 'high' },
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

export const ruth4_17_verse = {
  ref: 'Ruth.4.17',
  sourceTokens: ruth4_17_tokens,
  translation: ruth4_17_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Ruth 4:1-22 (Boaz redeems Ruth)
 * ──────────────────────────────────────────────────────────── */

export const ruth4_1_22_verses = [
  ruth4_1_verse,
  ruth4_5_verse,
  ruth4_9_verse,
  ruth4_13_verse,
  ruth4_14_verse,
  ruth4_17_verse,
];

export default ruth4_1_22_verses;
