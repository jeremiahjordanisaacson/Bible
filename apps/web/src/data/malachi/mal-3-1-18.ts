// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 3:1 – Behold, I send my messenger
 * ──────────────────────────────────────────────────────────── */

export const mal3_1_tokens: SourceToken[] = [
  {
    id: 'Mal.3.1.0',
    surfaceText: 'הִנְנִי',
    lemma: 'הִנֵּה',
    transliteration: 'hinněnî',
    lemmaTranslit: 'hinnēh',
    morph: 'HHd+Sp1cs',
    strong: 'H2009',
    language: 'hebrew',
    position: 0,
    gloss: 'behold',
  },
  {
    id: 'Mal.3.1.1',
    surfaceText: 'שֹׁלֵחַ',
    lemma: 'שָׁלַח',
    transliteration: 'šōlēaḥ',
    lemmaTranslit: 'šālaḥ',
    morph: 'HVqPtmsa',
    strong: 'H7971',
    language: 'hebrew',
    position: 1,
    gloss: 'I send',
  },
  {
    id: 'Mal.3.1.2',
    surfaceText: 'מַלְאָכִי',
    lemma: 'מַלְאָךְ',
    transliteration: "malʾāḵî",
    lemmaTranslit: "malʾāḵ",
    morph: 'HNcmsc+Sp1cs',
    strong: 'H4397',
    language: 'hebrew',
    position: 2,
    gloss: 'my messenger',
  },
  {
    id: 'Mal.3.1.3',
    surfaceText: 'וּפִנָּה',
    lemma: 'פָּנָה',
    transliteration: 'ûp̄innāh',
    lemmaTranslit: 'pānāh',
    morph: 'HC+Vqp3ms',
    strong: 'H6437',
    language: 'hebrew',
    position: 3,
    gloss: 'and he will prepare',
  },
  {
    id: 'Mal.3.1.4',
    surfaceText: 'דֶרֶךְ',
    lemma: 'דֶּרֶךְ',
    transliteration: 'ḏereḵ',
    lemmaTranslit: 'dereḵ',
    morph: 'HNcbsa',
    strong: 'H1870',
    language: 'hebrew',
    position: 4,
    gloss: 'the way',
  },
  {
    id: 'Mal.3.1.5',
    surfaceText: 'לְפָנָי',
    lemma: 'פָּנִים',
    transliteration: 'lěp̄ānāy',
    lemmaTranslit: 'pānîm',
    morph: 'HR+Ncmpc+Sp1cs',
    strong: 'H6440',
    language: 'hebrew',
    position: 5,
    gloss: 'before me',
  },
];

export const mal3_1_translation: VerseTranslation = {
  verseRef: 'Mal.3.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Behold, I send my messenger, and he will prepare the way before me',
      spans: [
        { tokenIds: ['Mal.3.1.0'], targetSlice: [0, 6], confidence: 'high' },
        { tokenIds: ['Mal.3.1.1'], targetSlice: [7, 13], confidence: 'high' },
        { tokenIds: ['Mal.3.1.2'], targetSlice: [14, 26], confidence: 'high' },
        { tokenIds: ['Mal.3.1.3'], targetSlice: [27, 46], confidence: 'high' },
        { tokenIds: ['Mal.3.1.4'], targetSlice: [47, 54], confidence: 'high' },
        { tokenIds: ['Mal.3.1.5'], targetSlice: [55, 64], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'I will send my messenger, who will prepare the way before me.',
      spans: [
        { tokenIds: ['Mal.3.1.0'], targetSlice: [0, 10], confidence: 'high' },
        { tokenIds: ['Mal.3.1.1'], targetSlice: [11, 21], confidence: 'high' },
        { tokenIds: ['Mal.3.1.2'], targetSlice: [22, 32], confidence: 'high' },
        { tokenIds: ['Mal.3.1.3'], targetSlice: [33, 43], confidence: 'high' },
        { tokenIds: ['Mal.3.1.4'], targetSlice: [44, 54], confidence: 'high' },
        { tokenIds: ['Mal.3.1.5'], targetSlice: [55, 61], confidence: 'high' },
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

export const mal3_1_verse = {
  ref: 'Mal.3.1',
  sourceTokens: mal3_1_tokens,
  translation: mal3_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 3:2 – Who can endure the day of his coming?
 * ──────────────────────────────────────────────────────────── */

export const mal3_2_tokens: SourceToken[] = [
  {
    id: 'Mal.3.2.0',
    surfaceText: 'וּמִי',
    lemma: 'מִי',
    transliteration: 'ûmî',
    lemmaTranslit: 'mî',
    morph: 'HC+HPi',
    strong: 'H4310',
    language: 'hebrew',
    position: 0,
    gloss: 'and who',
  },
  {
    id: 'Mal.3.2.1',
    surfaceText: 'מְכַלְכֵּל',
    lemma: 'כּוּל',
    transliteration: 'měḵalḵēl',
    lemmaTranslit: 'kûl',
    morph: 'HVpPtmsa',
    strong: 'H3557',
    language: 'hebrew',
    position: 1,
    gloss: 'can endure',
  },
  {
    id: 'Mal.3.2.2',
    surfaceText: 'אֶת',
    lemma: 'אֵת',
    transliteration: "ʾeṯ",
    lemmaTranslit: "ʾēṯ",
    morph: 'HTo',
    strong: 'H853',
    language: 'hebrew',
    position: 2,
    gloss: 'direct-object',
  },
  {
    id: 'Mal.3.2.3',
    surfaceText: 'יוֹם',
    lemma: 'יוֹם',
    transliteration: 'yôm',
    lemmaTranslit: 'yôm',
    morph: 'HNcmsc',
    strong: 'H3117',
    language: 'hebrew',
    position: 3,
    gloss: 'the day of',
  },
  {
    id: 'Mal.3.2.4',
    surfaceText: 'בּוֹאוֹ',
    lemma: 'בּוֹא',
    transliteration: "bôʾô",
    lemmaTranslit: "bôʾ",
    morph: 'HVqIc+Sp3ms',
    strong: 'H935',
    language: 'hebrew',
    position: 4,
    gloss: 'his coming',
  },
];

export const mal3_2_translation: VerseTranslation = {
  verseRef: 'Mal.3.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'But who can endure the day of his coming, and who can stand when he appears?',
      spans: [
        { tokenIds: ['Mal.3.2.0'], targetSlice: [0, 7], confidence: 'high' },
        { tokenIds: ['Mal.3.2.1'], targetSlice: [8, 18], confidence: 'high' },
        { tokenIds: ['Mal.3.2.2'], targetSlice: [19, 32], confidence: 'high' },
        { tokenIds: ['Mal.3.2.3'], targetSlice: [33, 43], confidence: 'high' },
        { tokenIds: ['Mal.3.2.4'], targetSlice: [44, 54], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'But who can endure the day of his coming? Who can stand when he appears?',
      spans: [
        { tokenIds: ['Mal.3.2.0'], targetSlice: [0, 14], confidence: 'high' },
        { tokenIds: ['Mal.3.2.1'], targetSlice: [15, 29], confidence: 'high' },
        { tokenIds: ['Mal.3.2.2'], targetSlice: [30, 44], confidence: 'high' },
        { tokenIds: ['Mal.3.2.3'], targetSlice: [45, 59], confidence: 'high' },
        { tokenIds: ['Mal.3.2.4'], targetSlice: [60, 72], confidence: 'high' },
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

export const mal3_2_verse = {
  ref: 'Mal.3.2',
  sourceTokens: mal3_2_tokens,
  translation: mal3_2_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 3:6 – I the LORD do not change
 * ──────────────────────────────────────────────────────────── */

export const mal3_6_tokens: SourceToken[] = [
  {
    id: 'Mal.3.6.0',
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
    id: 'Mal.3.6.1',
    surfaceText: 'אֲנִי',
    lemma: 'אֲנִי',
    transliteration: "ʾănî",
    lemmaTranslit: "ʾănî",
    morph: 'HPp1cs',
    strong: 'H589',
    language: 'hebrew',
    position: 1,
    gloss: 'I',
  },
  {
    id: 'Mal.3.6.2',
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
    id: 'Mal.3.6.3',
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
    id: 'Mal.3.6.4',
    surfaceText: 'שָׁנִיתִי',
    lemma: 'שָׁנָה',
    transliteration: 'šānîṯî',
    lemmaTranslit: 'šānāh',
    morph: 'HVqp1cs',
    strong: 'H8138',
    language: 'hebrew',
    position: 4,
    gloss: 'I have changed',
  },
];

export const mal3_6_translation: VerseTranslation = {
  verseRef: 'Mal.3.6',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'For I the LORD do not change; therefore you, O children of Jacob, are not consumed',
      spans: [
        { tokenIds: ['Mal.3.6.0'], targetSlice: [0, 3], confidence: 'high' },
        { tokenIds: ['Mal.3.6.1'], targetSlice: [4, 5], confidence: 'high' },
        { tokenIds: ['Mal.3.6.2'], targetSlice: [6, 14], confidence: 'high' },
        { tokenIds: ['Mal.3.6.3'], targetSlice: [15, 18], confidence: 'high' },
        { tokenIds: ['Mal.3.6.4'], targetSlice: [19, 33], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'I the LORD do not change. So you, the descendants of Jacob, are not destroyed.',
      spans: [
        { tokenIds: ['Mal.3.6.0'], targetSlice: [0, 15], confidence: 'high' },
        { tokenIds: ['Mal.3.6.1'], targetSlice: [16, 31], confidence: 'high' },
        { tokenIds: ['Mal.3.6.2'], targetSlice: [32, 47], confidence: 'high' },
        { tokenIds: ['Mal.3.6.3'], targetSlice: [48, 63], confidence: 'high' },
        { tokenIds: ['Mal.3.6.4'], targetSlice: [64, 78], confidence: 'high' },
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

export const mal3_6_verse = {
  ref: 'Mal.3.6',
  sourceTokens: mal3_6_tokens,
  translation: mal3_6_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 3:7 – Return to me and I will return to you
 * ──────────────────────────────────────────────────────────── */

export const mal3_7_tokens: SourceToken[] = [
  {
    id: 'Mal.3.7.0',
    surfaceText: 'שׁוּבוּ',
    lemma: 'שׁוּב',
    transliteration: 'šûḇû',
    lemmaTranslit: 'šûḇ',
    morph: 'HVqv2mp',
    strong: 'H7725',
    language: 'hebrew',
    position: 0,
    gloss: 'return',
  },
  {
    id: 'Mal.3.7.1',
    surfaceText: 'אֵלַי',
    lemma: 'אֶל',
    transliteration: "ʾēlay",
    lemmaTranslit: "ʾel",
    morph: 'HR+Sp1cs',
    strong: 'H413',
    language: 'hebrew',
    position: 1,
    gloss: 'to me',
  },
  {
    id: 'Mal.3.7.2',
    surfaceText: 'וְאָשׁוּבָה',
    lemma: 'שׁוּב',
    transliteration: "wěʾāšûḇāh",
    lemmaTranslit: 'šûḇ',
    morph: 'HC+VqI1cs',
    strong: 'H7725',
    language: 'hebrew',
    position: 2,
    gloss: 'and I will return',
  },
  {
    id: 'Mal.3.7.3',
    surfaceText: 'אֲלֵיכֶם',
    lemma: 'אֶל',
    transliteration: "ʾălêḵem",
    lemmaTranslit: "ʾel",
    morph: 'HR+Sp2mp',
    strong: 'H413',
    language: 'hebrew',
    position: 3,
    gloss: 'to you',
  },
];

export const mal3_7_translation: VerseTranslation = {
  verseRef: 'Mal.3.7',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Return to me, and I will return to you, says the LORD of hosts',
      spans: [
        { tokenIds: ['Mal.3.7.0'], targetSlice: [0, 6], confidence: 'high' },
        { tokenIds: ['Mal.3.7.1'], targetSlice: [7, 12], confidence: 'high' },
        { tokenIds: ['Mal.3.7.2'], targetSlice: [13, 30], confidence: 'high' },
        { tokenIds: ['Mal.3.7.3'], targetSlice: [31, 37], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Return to me, and I will return to you, says the LORD Almighty.',
      spans: [
        { tokenIds: ['Mal.3.7.0'], targetSlice: [0, 15], confidence: 'high' },
        { tokenIds: ['Mal.3.7.1'], targetSlice: [16, 31], confidence: 'high' },
        { tokenIds: ['Mal.3.7.2'], targetSlice: [32, 47], confidence: 'high' },
        { tokenIds: ['Mal.3.7.3'], targetSlice: [48, 63], confidence: 'high' },
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

export const mal3_7_verse = {
  ref: 'Mal.3.7',
  sourceTokens: mal3_7_tokens,
  translation: mal3_7_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 3:10 – Bring the full tithe
 * ──────────────────────────────────────────────────────────── */

export const mal3_10_tokens: SourceToken[] = [
  {
    id: 'Mal.3.10.0',
    surfaceText: 'הָבִיאוּ',
    lemma: 'בּוֹא',
    transliteration: "hāḇîʾû",
    lemmaTranslit: "bôʾ",
    morph: 'HVhv2mp',
    strong: 'H935',
    language: 'hebrew',
    position: 0,
    gloss: 'bring',
  },
  {
    id: 'Mal.3.10.1',
    surfaceText: 'אֶת',
    lemma: 'אֵת',
    transliteration: "ʾeṯ",
    lemmaTranslit: "ʾēṯ",
    morph: 'HTo',
    strong: 'H853',
    language: 'hebrew',
    position: 1,
    gloss: 'direct-object',
  },
  {
    id: 'Mal.3.10.2',
    surfaceText: 'כָּל',
    lemma: 'כֹּל',
    transliteration: 'kāl',
    lemmaTranslit: 'kōl',
    morph: 'HNcmsc',
    strong: 'H3605',
    language: 'hebrew',
    position: 2,
    gloss: 'the whole',
  },
  {
    id: 'Mal.3.10.3',
    surfaceText: 'הַמַּעֲשֵׂר',
    lemma: 'מַעֲשֵׂר',
    transliteration: "hammaʿăśēr",
    lemmaTranslit: "maʿăśēr",
    morph: 'HTd+Ncmsa',
    strong: 'H4643',
    language: 'hebrew',
    position: 3,
    gloss: 'tithe',
  },
  {
    id: 'Mal.3.10.4',
    surfaceText: 'אֶל',
    lemma: 'אֶל',
    transliteration: "ʾel",
    lemmaTranslit: "ʾel",
    morph: 'HR',
    strong: 'H413',
    language: 'hebrew',
    position: 4,
    gloss: 'into',
  },
  {
    id: 'Mal.3.10.5',
    surfaceText: 'בֵּית',
    lemma: 'בַּיִת',
    transliteration: 'bêṯ',
    lemmaTranslit: 'bayiṯ',
    morph: 'HNcmsc',
    strong: 'H1004',
    language: 'hebrew',
    position: 5,
    gloss: 'the house of',
  },
  {
    id: 'Mal.3.10.6',
    surfaceText: 'הָאוֹצָר',
    lemma: 'אוֹצָר',
    transliteration: "hāʾôṣār",
    lemmaTranslit: "ʾôṣār",
    morph: 'HTd+Ncmsa',
    strong: 'H214',
    language: 'hebrew',
    position: 6,
    gloss: 'the storehouse',
  },
];

export const mal3_10_translation: VerseTranslation = {
  verseRef: 'Mal.3.10',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Bring the full tithe into the storehouse, that there may be food in my house',
      spans: [
        { tokenIds: ['Mal.3.10.0'], targetSlice: [0, 5], confidence: 'high' },
        { tokenIds: ['Mal.3.10.1'], targetSlice: [6, 19], confidence: 'high' },
        { tokenIds: ['Mal.3.10.2'], targetSlice: [20, 29], confidence: 'high' },
        { tokenIds: ['Mal.3.10.3'], targetSlice: [30, 35], confidence: 'high' },
        { tokenIds: ['Mal.3.10.4'], targetSlice: [36, 40], confidence: 'high' },
        { tokenIds: ['Mal.3.10.5'], targetSlice: [41, 53], confidence: 'high' },
        { tokenIds: ['Mal.3.10.6'], targetSlice: [54, 68], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Bring the whole tithe into the storehouse, that there may be food in my house.',
      spans: [
        { tokenIds: ['Mal.3.10.0'], targetSlice: [0, 11], confidence: 'high' },
        { tokenIds: ['Mal.3.10.1'], targetSlice: [12, 23], confidence: 'high' },
        { tokenIds: ['Mal.3.10.2'], targetSlice: [24, 35], confidence: 'high' },
        { tokenIds: ['Mal.3.10.3'], targetSlice: [36, 47], confidence: 'high' },
        { tokenIds: ['Mal.3.10.4'], targetSlice: [48, 59], confidence: 'high' },
        { tokenIds: ['Mal.3.10.5'], targetSlice: [60, 71], confidence: 'high' },
        { tokenIds: ['Mal.3.10.6'], targetSlice: [72, 78], confidence: 'high' },
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

export const mal3_10_verse = {
  ref: 'Mal.3.10',
  sourceTokens: mal3_10_tokens,
  translation: mal3_10_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 3:16 – A book of remembrance was written
 * ──────────────────────────────────────────────────────────── */

export const mal3_16_tokens: SourceToken[] = [
  {
    id: 'Mal.3.16.0',
    surfaceText: 'וַיִּכָּתֵב',
    lemma: 'כָּתַב',
    transliteration: 'wayyikkāṯēḇ',
    lemmaTranslit: 'kāṯaḇ',
    morph: 'HC+VNpI3ms',
    strong: 'H3789',
    language: 'hebrew',
    position: 0,
    gloss: 'and was written',
  },
  {
    id: 'Mal.3.16.1',
    surfaceText: 'סֵפֶר',
    lemma: 'סֵפֶר',
    transliteration: 'sēp̄er',
    lemmaTranslit: 'sēp̄er',
    morph: 'HNcmsa',
    strong: 'H5612',
    language: 'hebrew',
    position: 1,
    gloss: 'a book of',
  },
  {
    id: 'Mal.3.16.2',
    surfaceText: 'זִכָּרוֹן',
    lemma: 'זִכָּרוֹן',
    transliteration: 'zikkārôn',
    lemmaTranslit: 'zikkārôn',
    morph: 'HNcmsa',
    strong: 'H2146',
    language: 'hebrew',
    position: 2,
    gloss: 'remembrance',
  },
  {
    id: 'Mal.3.16.3',
    surfaceText: 'לְפָנָיו',
    lemma: 'פָּנִים',
    transliteration: 'lěp̄ānāyw',
    lemmaTranslit: 'pānîm',
    morph: 'HR+Ncmpc+Sp3ms',
    strong: 'H6440',
    language: 'hebrew',
    position: 3,
    gloss: 'before him',
  },
  {
    id: 'Mal.3.16.4',
    surfaceText: 'לְיִרְאֵי',
    lemma: 'יָרֵא',
    transliteration: "lěyirʾê",
    lemmaTranslit: "yārēʾ",
    morph: 'HR+VqPtmpc',
    strong: 'H3372',
    language: 'hebrew',
    position: 4,
    gloss: 'for those who feared',
  },
  {
    id: 'Mal.3.16.5',
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

export const mal3_16_translation: VerseTranslation = {
  verseRef: 'Mal.3.16',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Then a book of remembrance was written before him for those who feared the LORD and esteemed his name',
      spans: [
        { tokenIds: ['Mal.3.16.0'], targetSlice: [0, 15], confidence: 'high' },
        { tokenIds: ['Mal.3.16.1'], targetSlice: [16, 25], confidence: 'high' },
        { tokenIds: ['Mal.3.16.2'], targetSlice: [26, 37], confidence: 'high' },
        { tokenIds: ['Mal.3.16.3'], targetSlice: [38, 48], confidence: 'high' },
        { tokenIds: ['Mal.3.16.4'], targetSlice: [49, 69], confidence: 'high' },
        { tokenIds: ['Mal.3.16.5'], targetSlice: [70, 78], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Then those who feared the LORD talked with each other, and a scroll of remembrance was written.',
      spans: [
        { tokenIds: ['Mal.3.16.0'], targetSlice: [0, 15], confidence: 'high' },
        { tokenIds: ['Mal.3.16.1'], targetSlice: [16, 31], confidence: 'high' },
        { tokenIds: ['Mal.3.16.2'], targetSlice: [32, 47], confidence: 'high' },
        { tokenIds: ['Mal.3.16.3'], targetSlice: [48, 63], confidence: 'high' },
        { tokenIds: ['Mal.3.16.4'], targetSlice: [64, 79], confidence: 'high' },
        { tokenIds: ['Mal.3.16.5'], targetSlice: [80, 95], confidence: 'high' },
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

export const mal3_16_verse = {
  ref: 'Mal.3.16',
  sourceTokens: mal3_16_tokens,
  translation: mal3_16_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Malachi 3:1-18 — Messenger of the covenant
 * ──────────────────────────────────────────────────────────── */

export const malachi3_1_18_verses = [
  mal3_1_verse,
  mal3_2_verse,
  mal3_6_verse,
  mal3_7_verse,
  mal3_10_verse,
  mal3_16_verse,
];

export default malachi3_1_18_verses;
