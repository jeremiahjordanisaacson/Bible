// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 2:1 – Jonah prayed to the LORD from the belly of the fish
 * ──────────────────────────────────────────────────────────── */

export const jonah2_1_tokens: SourceToken[] = [
  {
    id: 'Jonah.2.1.0',
    surfaceText: 'וַיִּתְפַּלֵּל',
    lemma: 'פָּלַל',
    transliteration: 'wayyiṯpallēl',
    lemmaTranslit: 'pālal',
    morph: 'HC+VtI3ms',
    strong: 'H6419',
    language: 'hebrew',
    position: 0,
    gloss: 'and prayed',
  },
  {
    id: 'Jonah.2.1.1',
    surfaceText: 'יוֹנָה',
    lemma: 'יוֹנָה',
    transliteration: 'yônāh',
    lemmaTranslit: 'yônāh',
    morph: 'HNp',
    strong: 'H3124',
    language: 'hebrew',
    position: 1,
    gloss: 'Jonah',
  },
  {
    id: 'Jonah.2.1.2',
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
    id: 'Jonah.2.1.3',
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
    id: 'Jonah.2.1.4',
    surfaceText: 'אֱלֹהָיו',
    lemma: 'אֱלֹהִים',
    transliteration: "ʾĕlōhāyw",
    lemmaTranslit: "ʾĕlōhîm",
    morph: 'HNcmpc+Sp3ms',
    strong: 'H430',
    language: 'hebrew',
    position: 4,
    gloss: 'his God',
  },
  {
    id: 'Jonah.2.1.5',
    surfaceText: 'מִמְּעֵי',
    lemma: 'מֵעֶה',
    transliteration: "mimmĕʿê",
    lemmaTranslit: "mēʿeh",
    morph: 'HR+Ncmpc',
    strong: 'H4578',
    language: 'hebrew',
    position: 5,
    gloss: 'from the belly of',
  },
  {
    id: 'Jonah.2.1.6',
    surfaceText: 'הַדָּגָה',
    lemma: 'דָּגָה',
    transliteration: 'haddāgāh',
    lemmaTranslit: 'dāgāh',
    morph: 'HTd+Ncfsa',
    strong: 'H1710',
    language: 'hebrew',
    position: 6,
    gloss: 'the fish',
  },
];

export const jonah2_1_translation: VerseTranslation = {
  verseRef: 'Jonah.2.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And Jonah prayed to the LORD his God from the belly of the fish',
      spans: [
        { tokenIds: ['Jonah.2.1.0'], targetSlice: [0, 10], confidence: 'high' },
        { tokenIds: ['Jonah.2.1.1'], targetSlice: [11, 16], confidence: 'high' },
        { tokenIds: ['Jonah.2.1.2'], targetSlice: [17, 19], confidence: 'high' },
        { tokenIds: ['Jonah.2.1.3'], targetSlice: [20, 28], confidence: 'high' },
        { tokenIds: ['Jonah.2.1.4'], targetSlice: [29, 36], confidence: 'high' },
        { tokenIds: ['Jonah.2.1.5'], targetSlice: [37, 54], confidence: 'high' },
        { tokenIds: ['Jonah.2.1.6'], targetSlice: [55, 63], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'From inside the fish Jonah prayed to the LORD his God.',
      spans: [
        { tokenIds: ['Jonah.2.1.0'], targetSlice: [0, 7], confidence: 'high' },
        { tokenIds: ['Jonah.2.1.1'], targetSlice: [8, 15], confidence: 'high' },
        { tokenIds: ['Jonah.2.1.2'], targetSlice: [16, 23], confidence: 'high' },
        { tokenIds: ['Jonah.2.1.3'], targetSlice: [24, 31], confidence: 'high' },
        { tokenIds: ['Jonah.2.1.4'], targetSlice: [32, 39], confidence: 'high' },
        { tokenIds: ['Jonah.2.1.5'], targetSlice: [40, 47], confidence: 'high' },
        { tokenIds: ['Jonah.2.1.6'], targetSlice: [48, 54], confidence: 'high' },
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

export const jonah2_1_verse = {
  ref: 'Jonah.2.1',
  sourceTokens: jonah2_1_tokens,
  translation: jonah2_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 2:2 – I called out of my distress to the LORD
 * ──────────────────────────────────────────────────────────── */

export const jonah2_2_tokens: SourceToken[] = [
  {
    id: 'Jonah.2.2.0',
    surfaceText: 'קָרָאתִי',
    lemma: 'קָרָא',
    transliteration: "qārāʾṯî",
    lemmaTranslit: "qārāʾ",
    morph: 'HVqp1cs',
    strong: 'H7121',
    language: 'hebrew',
    position: 0,
    gloss: 'I called',
  },
  {
    id: 'Jonah.2.2.1',
    surfaceText: 'מִצָּרָה',
    lemma: 'צָרָה',
    transliteration: 'miṣṣārāh',
    lemmaTranslit: 'ṣārāh',
    morph: 'HR+Ncfsa',
    strong: 'H6869',
    language: 'hebrew',
    position: 1,
    gloss: 'out of my distress',
  },
  {
    id: 'Jonah.2.2.2',
    surfaceText: 'לִּי',
    lemma: 'לְ',
    transliteration: 'llî',
    lemmaTranslit: 'lě',
    morph: 'HR+Sp1cs',
    strong: 'H0',
    language: 'hebrew',
    position: 2,
    gloss: 'to me',
  },
  {
    id: 'Jonah.2.2.3',
    surfaceText: 'אֶל',
    lemma: 'אֶל',
    transliteration: "ʾel",
    lemmaTranslit: "ʾel",
    morph: 'HR',
    strong: 'H413',
    language: 'hebrew',
    position: 3,
    gloss: 'to',
  },
  {
    id: 'Jonah.2.2.4',
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
    id: 'Jonah.2.2.5',
    surfaceText: 'וַיַּעֲנֵנִי',
    lemma: 'עָנָה',
    transliteration: "wayyaʿănēnî",
    lemmaTranslit: "ʿānāh",
    morph: 'HC+VqI3ms+Sp1cs',
    strong: 'H6030',
    language: 'hebrew',
    position: 5,
    gloss: 'and he answered me',
  },
];

export const jonah2_2_translation: VerseTranslation = {
  verseRef: 'Jonah.2.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'I called to the LORD out of my distress, and he answered me',
      spans: [
        { tokenIds: ['Jonah.2.2.0'], targetSlice: [0, 8], confidence: 'high' },
        { tokenIds: ['Jonah.2.2.1'], targetSlice: [9, 27], confidence: 'high' },
        { tokenIds: ['Jonah.2.2.2'], targetSlice: [28, 33], confidence: 'high' },
        { tokenIds: ['Jonah.2.2.3'], targetSlice: [34, 36], confidence: 'high' },
        { tokenIds: ['Jonah.2.2.4'], targetSlice: [37, 45], confidence: 'high' },
        { tokenIds: ['Jonah.2.2.5'], targetSlice: [46, 64], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'In my distress I called to the LORD, and he answered me.',
      spans: [
        { tokenIds: ['Jonah.2.2.0'], targetSlice: [0, 9], confidence: 'high' },
        { tokenIds: ['Jonah.2.2.1'], targetSlice: [10, 19], confidence: 'high' },
        { tokenIds: ['Jonah.2.2.2'], targetSlice: [20, 29], confidence: 'high' },
        { tokenIds: ['Jonah.2.2.3'], targetSlice: [30, 39], confidence: 'high' },
        { tokenIds: ['Jonah.2.2.4'], targetSlice: [40, 49], confidence: 'high' },
        { tokenIds: ['Jonah.2.2.5'], targetSlice: [50, 56], confidence: 'high' },
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

export const jonah2_2_verse = {
  ref: 'Jonah.2.2',
  sourceTokens: jonah2_2_tokens,
  translation: jonah2_2_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 2:3 – You cast me into the deep
 * ──────────────────────────────────────────────────────────── */

export const jonah2_3_tokens: SourceToken[] = [
  {
    id: 'Jonah.2.3.0',
    surfaceText: 'וַתַּשְׁלִיכֵנִי',
    lemma: 'שָׁלַךְ',
    transliteration: 'wattašlîḵēnî',
    lemmaTranslit: 'šālaḵ',
    morph: 'HC+VhI2ms+Sp1cs',
    strong: 'H7993',
    language: 'hebrew',
    position: 0,
    gloss: 'you cast me',
  },
  {
    id: 'Jonah.2.3.1',
    surfaceText: 'מְצוּלָה',
    lemma: 'מְצוּלָה',
    transliteration: 'měṣûlāh',
    lemmaTranslit: 'měṣûlāh',
    morph: 'HNcfsa',
    strong: 'H4688',
    language: 'hebrew',
    position: 1,
    gloss: 'into the deep',
  },
  {
    id: 'Jonah.2.3.2',
    surfaceText: 'בִּלְבַב',
    lemma: 'לֵבָב',
    transliteration: 'bilḇaḇ',
    lemmaTranslit: 'lēḇāḇ',
    morph: 'HR+Ncmsc',
    strong: 'H3824',
    language: 'hebrew',
    position: 2,
    gloss: 'in the heart of',
  },
  {
    id: 'Jonah.2.3.3',
    surfaceText: 'יַמִּים',
    lemma: 'יָם',
    transliteration: 'yammîm',
    lemmaTranslit: 'yām',
    morph: 'HNcmpa',
    strong: 'H3220',
    language: 'hebrew',
    position: 3,
    gloss: 'the seas',
  },
];

export const jonah2_3_translation: VerseTranslation = {
  verseRef: 'Jonah.2.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'You cast me into the deep, into the heart of the seas, and the flood surrounded me',
      spans: [
        { tokenIds: ['Jonah.2.3.0'], targetSlice: [0, 11], confidence: 'high' },
        { tokenIds: ['Jonah.2.3.1'], targetSlice: [12, 25], confidence: 'high' },
        { tokenIds: ['Jonah.2.3.2'], targetSlice: [26, 41], confidence: 'high' },
        { tokenIds: ['Jonah.2.3.3'], targetSlice: [42, 50], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'You hurled me into the depths, into the very heart of the seas.',
      spans: [
        { tokenIds: ['Jonah.2.3.0'], targetSlice: [0, 15], confidence: 'high' },
        { tokenIds: ['Jonah.2.3.1'], targetSlice: [16, 31], confidence: 'high' },
        { tokenIds: ['Jonah.2.3.2'], targetSlice: [32, 47], confidence: 'high' },
        { tokenIds: ['Jonah.2.3.3'], targetSlice: [48, 63], confidence: 'high' },
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

export const jonah2_3_verse = {
  ref: 'Jonah.2.3',
  sourceTokens: jonah2_3_tokens,
  translation: jonah2_3_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 2:6 – You brought up my life from the pit
 * ──────────────────────────────────────────────────────────── */

export const jonah2_6_tokens: SourceToken[] = [
  {
    id: 'Jonah.2.6.0',
    surfaceText: 'וַתַּעַל',
    lemma: 'עָלָה',
    transliteration: "wattaʿal",
    lemmaTranslit: "ʿālāh",
    morph: 'HC+VhI2ms',
    strong: 'H5927',
    language: 'hebrew',
    position: 0,
    gloss: 'and you brought up',
  },
  {
    id: 'Jonah.2.6.1',
    surfaceText: 'מִשַּׁחַת',
    lemma: 'שַׁחַת',
    transliteration: 'miššaḥaṯ',
    lemmaTranslit: 'šaḥaṯ',
    morph: 'HR+Ncfsa',
    strong: 'H7845',
    language: 'hebrew',
    position: 1,
    gloss: 'from the pit',
  },
  {
    id: 'Jonah.2.6.2',
    surfaceText: 'חַיַּי',
    lemma: 'חַי',
    transliteration: 'ḥayyay',
    lemmaTranslit: 'ḥay',
    morph: 'HNcmpc+Sp1cs',
    strong: 'H2416',
    language: 'hebrew',
    position: 2,
    gloss: 'my life',
  },
  {
    id: 'Jonah.2.6.3',
    surfaceText: 'יְהוָה',
    lemma: 'יְהוָה',
    transliteration: 'yhwh',
    lemmaTranslit: 'yhwh',
    morph: 'HNp',
    strong: 'H3068',
    language: 'hebrew',
    position: 3,
    gloss: 'O LORD',
  },
  {
    id: 'Jonah.2.6.4',
    surfaceText: 'אֱלֹהָי',
    lemma: 'אֱלֹהִים',
    transliteration: "ʾĕlōhāy",
    lemmaTranslit: "ʾĕlōhîm",
    morph: 'HNcmpc+Sp1cs',
    strong: 'H430',
    language: 'hebrew',
    position: 4,
    gloss: 'my God',
  },
];

export const jonah2_6_translation: VerseTranslation = {
  verseRef: 'Jonah.2.6',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'You brought up my life from the pit, O LORD my God',
      spans: [
        { tokenIds: ['Jonah.2.6.0'], targetSlice: [0, 18], confidence: 'high' },
        { tokenIds: ['Jonah.2.6.1'], targetSlice: [19, 31], confidence: 'high' },
        { tokenIds: ['Jonah.2.6.2'], targetSlice: [32, 39], confidence: 'high' },
        { tokenIds: ['Jonah.2.6.3'], targetSlice: [40, 46], confidence: 'high' },
        { tokenIds: ['Jonah.2.6.4'], targetSlice: [47, 53], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'But you, LORD my God, brought my life up from the pit.',
      spans: [
        { tokenIds: ['Jonah.2.6.0'], targetSlice: [0, 10], confidence: 'high' },
        { tokenIds: ['Jonah.2.6.1'], targetSlice: [11, 21], confidence: 'high' },
        { tokenIds: ['Jonah.2.6.2'], targetSlice: [22, 32], confidence: 'high' },
        { tokenIds: ['Jonah.2.6.3'], targetSlice: [33, 43], confidence: 'high' },
        { tokenIds: ['Jonah.2.6.4'], targetSlice: [44, 54], confidence: 'high' },
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

export const jonah2_6_verse = {
  ref: 'Jonah.2.6',
  sourceTokens: jonah2_6_tokens,
  translation: jonah2_6_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 2:7 – When my life was fainting, I remembered the LORD
 * ──────────────────────────────────────────────────────────── */

export const jonah2_7_tokens: SourceToken[] = [
  {
    id: 'Jonah.2.7.0',
    surfaceText: 'בְּהִתְעַטֵּף',
    lemma: 'עָטַף',
    transliteration: "běhiṯʿaṭṭēp̄",
    lemmaTranslit: "ʿāṭap̄",
    morph: 'HR+VtIc',
    strong: 'H5848',
    language: 'hebrew',
    position: 0,
    gloss: 'when was fainting',
  },
  {
    id: 'Jonah.2.7.1',
    surfaceText: 'עָלַי',
    lemma: 'עַל',
    transliteration: "ʿālay",
    lemmaTranslit: "ʿal",
    morph: 'HR+Sp1cs',
    strong: 'H5921',
    language: 'hebrew',
    position: 1,
    gloss: 'upon me',
  },
  {
    id: 'Jonah.2.7.2',
    surfaceText: 'נַפְשִׁי',
    lemma: 'נֶפֶשׁ',
    transliteration: 'nap̄šî',
    lemmaTranslit: 'nep̄eš',
    morph: 'HNcfsc+Sp1cs',
    strong: 'H5315',
    language: 'hebrew',
    position: 2,
    gloss: 'my soul',
  },
  {
    id: 'Jonah.2.7.3',
    surfaceText: 'אֶת',
    lemma: 'אֵת',
    transliteration: "ʾeṯ",
    lemmaTranslit: "ʾēṯ",
    morph: 'HTo',
    strong: 'H853',
    language: 'hebrew',
    position: 3,
    gloss: 'direct-object',
  },
  {
    id: 'Jonah.2.7.4',
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
    id: 'Jonah.2.7.5',
    surfaceText: 'זָכָרְתִּי',
    lemma: 'זָכַר',
    transliteration: 'zāḵārtî',
    lemmaTranslit: 'zāḵar',
    morph: 'HVqp1cs',
    strong: 'H2142',
    language: 'hebrew',
    position: 5,
    gloss: 'I remembered',
  },
];

export const jonah2_7_translation: VerseTranslation = {
  verseRef: 'Jonah.2.7',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'When my life was fainting away, I remembered the LORD',
      spans: [
        { tokenIds: ['Jonah.2.7.0'], targetSlice: [0, 17], confidence: 'high' },
        { tokenIds: ['Jonah.2.7.1'], targetSlice: [18, 25], confidence: 'high' },
        { tokenIds: ['Jonah.2.7.2'], targetSlice: [26, 33], confidence: 'high' },
        { tokenIds: ['Jonah.2.7.3'], targetSlice: [34, 47], confidence: 'high' },
        { tokenIds: ['Jonah.2.7.4'], targetSlice: [48, 56], confidence: 'high' },
        { tokenIds: ['Jonah.2.7.5'], targetSlice: [57, 69], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'When my life was ebbing away, I remembered you, LORD.',
      spans: [
        { tokenIds: ['Jonah.2.7.0'], targetSlice: [0, 8], confidence: 'high' },
        { tokenIds: ['Jonah.2.7.1'], targetSlice: [9, 17], confidence: 'high' },
        { tokenIds: ['Jonah.2.7.2'], targetSlice: [18, 26], confidence: 'high' },
        { tokenIds: ['Jonah.2.7.3'], targetSlice: [27, 35], confidence: 'high' },
        { tokenIds: ['Jonah.2.7.4'], targetSlice: [36, 44], confidence: 'high' },
        { tokenIds: ['Jonah.2.7.5'], targetSlice: [45, 53], confidence: 'high' },
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

export const jonah2_7_verse = {
  ref: 'Jonah.2.7',
  sourceTokens: jonah2_7_tokens,
  translation: jonah2_7_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 2:9 – Salvation belongs to the LORD
 * ──────────────────────────────────────────────────────────── */

export const jonah2_9_tokens: SourceToken[] = [
  {
    id: 'Jonah.2.9.0',
    surfaceText: 'וַאֲנִי',
    lemma: 'אֲנִי',
    transliteration: "waʾănî",
    lemmaTranslit: "ʾănî",
    morph: 'HC+Pp1cs',
    strong: 'H589',
    language: 'hebrew',
    position: 0,
    gloss: 'but I',
  },
  {
    id: 'Jonah.2.9.1',
    surfaceText: 'בְּקוֹל',
    lemma: 'קוֹל',
    transliteration: 'běqôl',
    lemmaTranslit: 'qôl',
    morph: 'HR+Ncmsa',
    strong: 'H6963',
    language: 'hebrew',
    position: 1,
    gloss: 'with the voice of',
  },
  {
    id: 'Jonah.2.9.2',
    surfaceText: 'תּוֹדָה',
    lemma: 'תּוֹדָה',
    transliteration: 'tôḏāh',
    lemmaTranslit: 'tôḏāh',
    morph: 'HNcfsa',
    strong: 'H8426',
    language: 'hebrew',
    position: 2,
    gloss: 'thanksgiving',
  },
  {
    id: 'Jonah.2.9.3',
    surfaceText: 'אֶזְבְּחָה',
    lemma: 'זָבַח',
    transliteration: "ʾezběḥāh",
    lemmaTranslit: 'zāḇaḥ',
    morph: 'HVqI1cs',
    strong: 'H2076',
    language: 'hebrew',
    position: 3,
    gloss: 'I will sacrifice',
  },
  {
    id: 'Jonah.2.9.4',
    surfaceText: 'לָּךְ',
    lemma: 'לְ',
    transliteration: 'llāḵ',
    lemmaTranslit: 'lě',
    morph: 'HR+Sp2ms',
    strong: 'H0',
    language: 'hebrew',
    position: 4,
    gloss: 'to you',
  },
  {
    id: 'Jonah.2.9.5',
    surfaceText: 'יְשׁוּעָתָה',
    lemma: 'יְשׁוּעָה',
    transliteration: "yěšûʿāṯāh",
    lemmaTranslit: "yěšûʿāh",
    morph: 'HNcfsa',
    strong: 'H3444',
    language: 'hebrew',
    position: 5,
    gloss: 'salvation',
  },
  {
    id: 'Jonah.2.9.6',
    surfaceText: 'לַיהוָה',
    lemma: 'יְהוָה',
    transliteration: 'layhwh',
    lemmaTranslit: 'yhwh',
    morph: 'HR+Np',
    strong: 'H3068',
    language: 'hebrew',
    position: 6,
    gloss: 'belongs to the LORD',
  },
];

export const jonah2_9_translation: VerseTranslation = {
  verseRef: 'Jonah.2.9',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'But I with the voice of thanksgiving will sacrifice to you. Salvation belongs to the LORD!',
      spans: [
        { tokenIds: ['Jonah.2.9.0'], targetSlice: [0, 5], confidence: 'high' },
        { tokenIds: ['Jonah.2.9.1'], targetSlice: [6, 23], confidence: 'high' },
        { tokenIds: ['Jonah.2.9.2'], targetSlice: [24, 36], confidence: 'high' },
        { tokenIds: ['Jonah.2.9.3'], targetSlice: [37, 53], confidence: 'high' },
        { tokenIds: ['Jonah.2.9.4'], targetSlice: [54, 60], confidence: 'high' },
        { tokenIds: ['Jonah.2.9.5'], targetSlice: [61, 70], confidence: 'high' },
        { tokenIds: ['Jonah.2.9.6'], targetSlice: [71, 90], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'But I, with shouts of grateful praise, will sacrifice to you. Salvation comes from the LORD.',
      spans: [
        { tokenIds: ['Jonah.2.9.0'], targetSlice: [0, 13], confidence: 'high' },
        { tokenIds: ['Jonah.2.9.1'], targetSlice: [14, 27], confidence: 'high' },
        { tokenIds: ['Jonah.2.9.2'], targetSlice: [28, 41], confidence: 'high' },
        { tokenIds: ['Jonah.2.9.3'], targetSlice: [42, 55], confidence: 'high' },
        { tokenIds: ['Jonah.2.9.4'], targetSlice: [56, 69], confidence: 'high' },
        { tokenIds: ['Jonah.2.9.5'], targetSlice: [70, 83], confidence: 'high' },
        { tokenIds: ['Jonah.2.9.6'], targetSlice: [84, 92], confidence: 'high' },
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

export const jonah2_9_verse = {
  ref: 'Jonah.2.9',
  sourceTokens: jonah2_9_tokens,
  translation: jonah2_9_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Jonah 2:1-10 — Jonah's prayer
 * ──────────────────────────────────────────────────────────── */

export const jonah2_1_10_verses = [
  jonah2_1_verse,
  jonah2_2_verse,
  jonah2_3_verse,
  jonah2_6_verse,
  jonah2_7_verse,
  jonah2_9_verse,
];

export default jonah2_1_10_verses;
