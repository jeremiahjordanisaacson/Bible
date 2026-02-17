// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 1:1 – The proverbs of Solomon
 * ──────────────────────────────────────────────────────────── */

export const prov1_1_tokens: SourceToken[] = [
  {
    id: 'Prov.1.1.0',
    surfaceText: 'מִשְׁלֵי',
    lemma: 'מָשָׁל',
    transliteration: 'mišlê',
    lemmaTranslit: 'māšāl',
    morph: 'HNcmpc',
    strong: 'H4912',
    language: 'hebrew',
    position: 0,
    gloss: 'the proverbs of',
  },
  {
    id: 'Prov.1.1.1',
    surfaceText: 'שְׁלֹמֹה',
    lemma: 'שְׁלֹמֹה',
    transliteration: 'šělōmōh',
    lemmaTranslit: 'šělōmōh',
    morph: 'HNp',
    strong: 'H8010',
    language: 'hebrew',
    position: 1,
    gloss: 'Solomon',
  },
  {
    id: 'Prov.1.1.2',
    surfaceText: 'בֶּן',
    lemma: 'בֵּן',
    transliteration: 'ben',
    lemmaTranslit: 'bēn',
    morph: 'HNcmsc',
    strong: 'H1121',
    language: 'hebrew',
    position: 2,
    gloss: 'son of',
  },
  {
    id: 'Prov.1.1.3',
    surfaceText: 'דָּוִד',
    lemma: 'דָּוִד',
    transliteration: 'dāwiḏ',
    lemmaTranslit: 'dāwiḏ',
    morph: 'HNp',
    strong: 'H1732',
    language: 'hebrew',
    position: 3,
    gloss: 'David',
  },
  {
    id: 'Prov.1.1.4',
    surfaceText: 'מֶלֶךְ',
    lemma: 'מֶלֶךְ',
    transliteration: 'meleḵ',
    lemmaTranslit: 'meleḵ',
    morph: 'HNcmsc',
    strong: 'H4428',
    language: 'hebrew',
    position: 4,
    gloss: 'king of',
  },
  {
    id: 'Prov.1.1.5',
    surfaceText: 'יִשְׂרָאֵל',
    lemma: 'יִשְׂרָאֵל',
    transliteration: "yiśrāʾēl",
    lemmaTranslit: "yiśrāʾēl",
    morph: 'HNp',
    strong: 'H3478',
    language: 'hebrew',
    position: 5,
    gloss: 'Israel',
  },
];

export const prov1_1_translation: VerseTranslation = {
  verseRef: 'Prov.1.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'The proverbs of Solomon son of David, king of Israel',
      spans: [
        { tokenIds: ['Prov.1.1.0'], targetSlice: [0, 15], confidence: 'high' },
        { tokenIds: ['Prov.1.1.1'], targetSlice: [16, 23], confidence: 'high' },
        { tokenIds: ['Prov.1.1.2'], targetSlice: [24, 30], confidence: 'high' },
        { tokenIds: ['Prov.1.1.3'], targetSlice: [31, 36], confidence: 'high' },
        { tokenIds: ['Prov.1.1.4'], targetSlice: [37, 44], confidence: 'high' },
        { tokenIds: ['Prov.1.1.5'], targetSlice: [45, 51], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'The proverbs of Solomon son of David, king of Israel.',
      spans: [
        { tokenIds: ['Prov.1.1.0'], targetSlice: [0, 8], confidence: 'high' },
        { tokenIds: ['Prov.1.1.1'], targetSlice: [9, 17], confidence: 'high' },
        { tokenIds: ['Prov.1.1.2'], targetSlice: [18, 26], confidence: 'high' },
        { tokenIds: ['Prov.1.1.3'], targetSlice: [27, 35], confidence: 'high' },
        { tokenIds: ['Prov.1.1.4'], targetSlice: [36, 44], confidence: 'high' },
        { tokenIds: ['Prov.1.1.5'], targetSlice: [45, 53], confidence: 'high' },
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

export const prov1_1_verse = {
  ref: 'Prov.1.1',
  sourceTokens: prov1_1_tokens,
  translation: prov1_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:2 – To know wisdom and instruction
 * ──────────────────────────────────────────────────────────── */

export const prov1_2_tokens: SourceToken[] = [
  {
    id: 'Prov.1.2.0',
    surfaceText: 'לָדַעַת',
    lemma: 'יָדַע',
    transliteration: "lāḏaʿaṯ",
    lemmaTranslit: "yāḏaʿ",
    morph: 'HR+VqIc',
    strong: 'H3045',
    language: 'hebrew',
    position: 0,
    gloss: 'to know',
  },
  {
    id: 'Prov.1.2.1',
    surfaceText: 'חָכְמָה',
    lemma: 'חָכְמָה',
    transliteration: 'ḥāḵěmāh',
    lemmaTranslit: 'ḥāḵěmāh',
    morph: 'HNcfsa',
    strong: 'H2451',
    language: 'hebrew',
    position: 1,
    gloss: 'wisdom',
  },
  {
    id: 'Prov.1.2.2',
    surfaceText: 'וּמוּסָר',
    lemma: 'מוּסָר',
    transliteration: 'ûmûsār',
    lemmaTranslit: 'mûsār',
    morph: 'HC+Ncmsa',
    strong: 'H4148',
    language: 'hebrew',
    position: 2,
    gloss: 'and instruction',
  },
];

export const prov1_2_translation: VerseTranslation = {
  verseRef: 'Prov.1.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'To know wisdom and instruction, to understand words of insight',
      spans: [
        { tokenIds: ['Prov.1.2.0'], targetSlice: [0, 7], confidence: 'high' },
        { tokenIds: ['Prov.1.2.1'], targetSlice: [8, 14], confidence: 'high' },
        { tokenIds: ['Prov.1.2.2'], targetSlice: [15, 30], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'For gaining wisdom and instruction; for understanding words of insight.',
      spans: [
        { tokenIds: ['Prov.1.2.0'], targetSlice: [0, 23], confidence: 'high' },
        { tokenIds: ['Prov.1.2.1'], targetSlice: [24, 47], confidence: 'high' },
        { tokenIds: ['Prov.1.2.2'], targetSlice: [48, 71], confidence: 'high' },
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

export const prov1_2_verse = {
  ref: 'Prov.1.2',
  sourceTokens: prov1_2_tokens,
  translation: prov1_2_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:7 – The fear of the LORD is the beginning of knowledge
 * ──────────────────────────────────────────────────────────── */

export const prov1_7_tokens: SourceToken[] = [
  {
    id: 'Prov.1.7.0',
    surfaceText: 'יִרְאַת',
    lemma: 'יִרְאָה',
    transliteration: "yirʾaṯ",
    lemmaTranslit: "yirʾāh",
    morph: 'HNcfsc',
    strong: 'H3374',
    language: 'hebrew',
    position: 0,
    gloss: 'the fear of',
  },
  {
    id: 'Prov.1.7.1',
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
    id: 'Prov.1.7.2',
    surfaceText: 'רֵאשִׁית',
    lemma: 'רֵאשִׁית',
    transliteration: "rēʾšîṯ",
    lemmaTranslit: "rēʾšîṯ",
    morph: 'HNcfsa',
    strong: 'H7225',
    language: 'hebrew',
    position: 2,
    gloss: 'the beginning of',
  },
  {
    id: 'Prov.1.7.3',
    surfaceText: 'דָּעַת',
    lemma: 'דַּעַת',
    transliteration: "dāʿaṯ",
    lemmaTranslit: "daʿaṯ",
    morph: 'HNcfsa',
    strong: 'H1847',
    language: 'hebrew',
    position: 3,
    gloss: 'knowledge',
  },
];

export const prov1_7_translation: VerseTranslation = {
  verseRef: 'Prov.1.7',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'The fear of the LORD is the beginning of knowledge; fools despise wisdom and instruction',
      spans: [
        { tokenIds: ['Prov.1.7.0'], targetSlice: [0, 11], confidence: 'high' },
        { tokenIds: ['Prov.1.7.1'], targetSlice: [12, 20], confidence: 'high' },
        { tokenIds: ['Prov.1.7.2'], targetSlice: [21, 37], confidence: 'high' },
        { tokenIds: ['Prov.1.7.3'], targetSlice: [38, 47], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'The fear of the LORD is the beginning of knowledge, but fools despise wisdom and instruction.',
      spans: [
        { tokenIds: ['Prov.1.7.0'], targetSlice: [0, 23], confidence: 'high' },
        { tokenIds: ['Prov.1.7.1'], targetSlice: [24, 47], confidence: 'high' },
        { tokenIds: ['Prov.1.7.2'], targetSlice: [48, 71], confidence: 'high' },
        { tokenIds: ['Prov.1.7.3'], targetSlice: [72, 93], confidence: 'high' },
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

export const prov1_7_verse = {
  ref: 'Prov.1.7',
  sourceTokens: prov1_7_tokens,
  translation: prov1_7_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:8 – Hear, my son, your father's instruction
 * ──────────────────────────────────────────────────────────── */

export const prov1_8_tokens: SourceToken[] = [
  {
    id: 'Prov.1.8.0',
    surfaceText: 'שְׁמַע',
    lemma: 'שָׁמַע',
    transliteration: "šěmaʿ",
    lemmaTranslit: "šāmaʿ",
    morph: 'HVqv2ms',
    strong: 'H8085',
    language: 'hebrew',
    position: 0,
    gloss: 'hear',
  },
  {
    id: 'Prov.1.8.1',
    surfaceText: 'בְּנִי',
    lemma: 'בֵּן',
    transliteration: 'běnî',
    lemmaTranslit: 'bēn',
    morph: 'HNcmsc+Sp1cs',
    strong: 'H1121',
    language: 'hebrew',
    position: 1,
    gloss: 'my son',
  },
  {
    id: 'Prov.1.8.2',
    surfaceText: 'מוּסַר',
    lemma: 'מוּסָר',
    transliteration: 'mûsar',
    lemmaTranslit: 'mûsār',
    morph: 'HNcmsc',
    strong: 'H4148',
    language: 'hebrew',
    position: 2,
    gloss: 'the instruction of',
  },
  {
    id: 'Prov.1.8.3',
    surfaceText: 'אָבִיךָ',
    lemma: 'אָב',
    transliteration: "ʾāḇîḵā",
    lemmaTranslit: "ʾāḇ",
    morph: 'HNcmsc+Sp2ms',
    strong: 'H1',
    language: 'hebrew',
    position: 3,
    gloss: 'your father',
  },
  {
    id: 'Prov.1.8.4',
    surfaceText: 'תּוֹרַת',
    lemma: 'תּוֹרָה',
    transliteration: 'tôraṯ',
    lemmaTranslit: 'tôrāh',
    morph: 'HNcfsc',
    strong: 'H8451',
    language: 'hebrew',
    position: 4,
    gloss: 'the teaching of',
  },
  {
    id: 'Prov.1.8.5',
    surfaceText: 'אִמֶּךָ',
    lemma: 'אֵם',
    transliteration: "ʾimmeḵā",
    lemmaTranslit: "ʾēm",
    morph: 'HNcfsc+Sp2ms',
    strong: 'H517',
    language: 'hebrew',
    position: 5,
    gloss: 'your mother',
  },
];

export const prov1_8_translation: VerseTranslation = {
  verseRef: 'Prov.1.8',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Hear, my son, the instruction of your father, and do not forsake the teaching of your mother',
      spans: [
        { tokenIds: ['Prov.1.8.0'], targetSlice: [0, 4], confidence: 'high' },
        { tokenIds: ['Prov.1.8.1'], targetSlice: [5, 11], confidence: 'high' },
        { tokenIds: ['Prov.1.8.2'], targetSlice: [12, 30], confidence: 'high' },
        { tokenIds: ['Prov.1.8.3'], targetSlice: [31, 42], confidence: 'high' },
        { tokenIds: ['Prov.1.8.4'], targetSlice: [43, 58], confidence: 'high' },
        { tokenIds: ['Prov.1.8.5'], targetSlice: [59, 70], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "Listen, my son, to your father's instruction and do not forsake your mother's teaching.",
      spans: [
        { tokenIds: ['Prov.1.8.0'], targetSlice: [0, 14], confidence: 'high' },
        { tokenIds: ['Prov.1.8.1'], targetSlice: [15, 29], confidence: 'high' },
        { tokenIds: ['Prov.1.8.2'], targetSlice: [30, 44], confidence: 'high' },
        { tokenIds: ['Prov.1.8.3'], targetSlice: [45, 59], confidence: 'high' },
        { tokenIds: ['Prov.1.8.4'], targetSlice: [60, 74], confidence: 'high' },
        { tokenIds: ['Prov.1.8.5'], targetSlice: [75, 87], confidence: 'high' },
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

export const prov1_8_verse = {
  ref: 'Prov.1.8',
  sourceTokens: prov1_8_tokens,
  translation: prov1_8_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:20 – Wisdom cries aloud in the street
 * ──────────────────────────────────────────────────────────── */

export const prov1_20_tokens: SourceToken[] = [
  {
    id: 'Prov.1.20.0',
    surfaceText: 'חָכְמוֹת',
    lemma: 'חָכְמָה',
    transliteration: 'ḥāḵěmôṯ',
    lemmaTranslit: 'ḥāḵěmāh',
    morph: 'HNcfpa',
    strong: 'H2454',
    language: 'hebrew',
    position: 0,
    gloss: 'wisdom',
  },
  {
    id: 'Prov.1.20.1',
    surfaceText: 'בַּחוּץ',
    lemma: 'חוּץ',
    transliteration: 'baḥûṣ',
    lemmaTranslit: 'ḥûṣ',
    morph: 'HR+Ncmsa',
    strong: 'H2351',
    language: 'hebrew',
    position: 1,
    gloss: 'in the street',
  },
  {
    id: 'Prov.1.20.2',
    surfaceText: 'תָּרֹנָּה',
    lemma: 'רָנַן',
    transliteration: 'tārōnnāh',
    lemmaTranslit: 'rānan',
    morph: 'HVqI3fs',
    strong: 'H7442',
    language: 'hebrew',
    position: 2,
    gloss: 'cries aloud',
  },
  {
    id: 'Prov.1.20.3',
    surfaceText: 'בָּרְחֹבוֹת',
    lemma: 'רְחוֹב',
    transliteration: 'bārěḥōḇôṯ',
    lemmaTranslit: 'rěḥôḇ',
    morph: 'HR+Ncfpa',
    strong: 'H7339',
    language: 'hebrew',
    position: 3,
    gloss: 'in the squares',
  },
];

export const prov1_20_translation: VerseTranslation = {
  verseRef: 'Prov.1.20',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Wisdom cries aloud in the street; in the squares she raises her voice',
      spans: [
        { tokenIds: ['Prov.1.20.0'], targetSlice: [0, 6], confidence: 'high' },
        { tokenIds: ['Prov.1.20.1'], targetSlice: [7, 20], confidence: 'high' },
        { tokenIds: ['Prov.1.20.2'], targetSlice: [21, 32], confidence: 'high' },
        { tokenIds: ['Prov.1.20.3'], targetSlice: [33, 47], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Out in the open wisdom calls aloud, she raises her voice in the public square.',
      spans: [
        { tokenIds: ['Prov.1.20.0'], targetSlice: [0, 19], confidence: 'high' },
        { tokenIds: ['Prov.1.20.1'], targetSlice: [20, 39], confidence: 'high' },
        { tokenIds: ['Prov.1.20.2'], targetSlice: [40, 59], confidence: 'high' },
        { tokenIds: ['Prov.1.20.3'], targetSlice: [60, 78], confidence: 'high' },
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

export const prov1_20_verse = {
  ref: 'Prov.1.20',
  sourceTokens: prov1_20_tokens,
  translation: prov1_20_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:33 – Whoever listens to me will dwell secure
 * ──────────────────────────────────────────────────────────── */

export const prov1_33_tokens: SourceToken[] = [
  {
    id: 'Prov.1.33.0',
    surfaceText: 'וְשֹׁמֵעַ',
    lemma: 'שָׁמַע',
    transliteration: "wěšōmēaʿ",
    lemmaTranslit: "šāmaʿ",
    morph: 'HC+VqPtmsa',
    strong: 'H8085',
    language: 'hebrew',
    position: 0,
    gloss: 'but whoever listens',
  },
  {
    id: 'Prov.1.33.1',
    surfaceText: 'לִי',
    lemma: 'לְ',
    transliteration: 'lî',
    lemmaTranslit: 'lě',
    morph: 'HR+Sp1cs',
    strong: 'H0',
    language: 'hebrew',
    position: 1,
    gloss: 'to me',
  },
  {
    id: 'Prov.1.33.2',
    surfaceText: 'יִשְׁכָּן',
    lemma: 'שָׁכַן',
    transliteration: 'yiškān',
    lemmaTranslit: 'šāḵan',
    morph: 'HVqI3ms',
    strong: 'H7931',
    language: 'hebrew',
    position: 2,
    gloss: 'will dwell',
  },
  {
    id: 'Prov.1.33.3',
    surfaceText: 'בֶּטַח',
    lemma: 'בֶּטַח',
    transliteration: 'beṭaḥ',
    lemmaTranslit: 'beṭaḥ',
    morph: 'HNcmsa',
    strong: 'H983',
    language: 'hebrew',
    position: 3,
    gloss: 'securely',
  },
  {
    id: 'Prov.1.33.4',
    surfaceText: 'וְשַׁאֲנַן',
    lemma: 'שַׁאֲנָן',
    transliteration: "wěšaʾănan",
    lemmaTranslit: "šaʾănān",
    morph: 'HC+Aamsa',
    strong: 'H7600',
    language: 'hebrew',
    position: 4,
    gloss: 'and be at ease',
  },
];

export const prov1_33_translation: VerseTranslation = {
  verseRef: 'Prov.1.33',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'But whoever listens to me will dwell securely and will be at ease from the dread of disaster',
      spans: [
        { tokenIds: ['Prov.1.33.0'], targetSlice: [0, 19], confidence: 'high' },
        { tokenIds: ['Prov.1.33.1'], targetSlice: [20, 25], confidence: 'high' },
        { tokenIds: ['Prov.1.33.2'], targetSlice: [26, 36], confidence: 'high' },
        { tokenIds: ['Prov.1.33.3'], targetSlice: [37, 45], confidence: 'high' },
        { tokenIds: ['Prov.1.33.4'], targetSlice: [46, 60], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'But whoever listens to me will live in safety and be at ease, without fear of harm.',
      spans: [
        { tokenIds: ['Prov.1.33.0'], targetSlice: [0, 16], confidence: 'high' },
        { tokenIds: ['Prov.1.33.1'], targetSlice: [17, 33], confidence: 'high' },
        { tokenIds: ['Prov.1.33.2'], targetSlice: [34, 50], confidence: 'high' },
        { tokenIds: ['Prov.1.33.3'], targetSlice: [51, 67], confidence: 'high' },
        { tokenIds: ['Prov.1.33.4'], targetSlice: [68, 83], confidence: 'high' },
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

export const prov1_33_verse = {
  ref: 'Prov.1.33',
  sourceTokens: prov1_33_tokens,
  translation: prov1_33_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Proverbs 1:1-33 — Beginning of wisdom
 * ──────────────────────────────────────────────────────────── */

export const proverbs1_1_33_verses = [
  prov1_1_verse,
  prov1_2_verse,
  prov1_7_verse,
  prov1_8_verse,
  prov1_20_verse,
  prov1_33_verse,
];

export default proverbs1_1_33_verses;
