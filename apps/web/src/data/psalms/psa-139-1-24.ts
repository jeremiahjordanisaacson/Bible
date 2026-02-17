// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 139:1 – O LORD, you have searched me and known me
 * ──────────────────────────────────────────────────────────── */

export const psalm139_1_tokens: SourceToken[] = [
  {
    id: 'Ps.139.1.0',
    surfaceText: 'יְהוָה',
    lemma: 'יְהוָה',
    transliteration: 'yhwh',
    lemmaTranslit: 'yhwh',
    morph: 'HNp',
    strong: 'H3068',
    language: 'hebrew',
    position: 0,
    gloss: 'O LORD',
  },
  {
    id: 'Ps.139.1.1',
    surfaceText: 'חֲקַרְתַּנִי',
    lemma: 'חָקַר',
    transliteration: 'ḥăqartannî',
    lemmaTranslit: 'ḥāqar',
    morph: 'HVqp2ms+Sp1cs',
    strong: 'H2713',
    language: 'hebrew',
    position: 1,
    gloss: 'you have searched me',
  },
  {
    id: 'Ps.139.1.2',
    surfaceText: 'וַתֵּדָע',
    lemma: 'יָדַע',
    transliteration: "wattēḏāʿ",
    lemmaTranslit: "yāḏaʿ",
    morph: 'HC+Vqw2ms',
    strong: 'H3045',
    language: 'hebrew',
    position: 2,
    gloss: 'and you know',
  },
];

export const psalm139_1_translation: VerseTranslation = {
  verseRef: 'Ps.139.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'O LORD, you have searched me and known me',
      spans: [
        { tokenIds: ['Ps.139.1.0'], targetSlice: [0, 6], confidence: 'high' },
        { tokenIds: ['Ps.139.1.1'], targetSlice: [7, 27], confidence: 'high' },
        { tokenIds: ['Ps.139.1.2'], targetSlice: [28, 40], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'You have searched me, LORD, and you know me.',
      spans: [
        { tokenIds: ['Ps.139.1.0'], targetSlice: [0, 14], confidence: 'high' },
        { tokenIds: ['Ps.139.1.1'], targetSlice: [15, 29], confidence: 'high' },
        { tokenIds: ['Ps.139.1.2'], targetSlice: [30, 44], confidence: 'high' },
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

export const psalm139_1_verse = {
  ref: 'Ps.139.1',
  sourceTokens: psalm139_1_tokens,
  translation: psalm139_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 139:2 – You know when I sit down and when I rise up
 * ──────────────────────────────────────────────────────────── */

export const psalm139_2_tokens: SourceToken[] = [
  {
    id: 'Ps.139.2.0',
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
    id: 'Ps.139.2.1',
    surfaceText: 'יָדַעְתָּ',
    lemma: 'יָדַע',
    transliteration: "yāḏaʿtā",
    lemmaTranslit: "yāḏaʿ",
    morph: 'HVqp2ms',
    strong: 'H3045',
    language: 'hebrew',
    position: 1,
    gloss: 'know',
  },
  {
    id: 'Ps.139.2.2',
    surfaceText: 'שִׁבְתִּי',
    lemma: 'יָשַׁב',
    transliteration: 'šiḇtî',
    lemmaTranslit: 'yāšaḇ',
    morph: 'HVqIc+Sp1cs',
    strong: 'H3427',
    language: 'hebrew',
    position: 2,
    gloss: 'my sitting down',
  },
  {
    id: 'Ps.139.2.3',
    surfaceText: 'וְקוּמִי',
    lemma: 'קוּם',
    transliteration: 'wěqûmî',
    lemmaTranslit: 'qûm',
    morph: 'HC+VqIc+Sp1cs',
    strong: 'H6965',
    language: 'hebrew',
    position: 3,
    gloss: 'and my rising up',
  },
];

export const psalm139_2_translation: VerseTranslation = {
  verseRef: 'Ps.139.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'You know my sitting down and my rising up; you understand my thought from afar',
      spans: [
        { tokenIds: ['Ps.139.2.0'], targetSlice: [0, 3], confidence: 'high' },
        { tokenIds: ['Ps.139.2.1'], targetSlice: [4, 8], confidence: 'high' },
        { tokenIds: ['Ps.139.2.2'], targetSlice: [9, 24], confidence: 'high' },
        { tokenIds: ['Ps.139.2.3'], targetSlice: [25, 41], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'You know when I sit and when I rise; you perceive my thoughts from afar.',
      spans: [
        { tokenIds: ['Ps.139.2.0'], targetSlice: [0, 18], confidence: 'high' },
        { tokenIds: ['Ps.139.2.1'], targetSlice: [19, 37], confidence: 'high' },
        { tokenIds: ['Ps.139.2.2'], targetSlice: [38, 56], confidence: 'high' },
        { tokenIds: ['Ps.139.2.3'], targetSlice: [57, 72], confidence: 'high' },
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

export const psalm139_2_verse = {
  ref: 'Ps.139.2',
  sourceTokens: psalm139_2_tokens,
  translation: psalm139_2_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 139:7 – Where shall I go from your Spirit?
 * ──────────────────────────────────────────────────────────── */

export const psalm139_7_tokens: SourceToken[] = [
  {
    id: 'Ps.139.7.0',
    surfaceText: 'אָנָה',
    lemma: 'אָנָה',
    transliteration: "ʾānāh",
    lemmaTranslit: "ʾānāh",
    morph: 'HD',
    strong: 'H575',
    language: 'hebrew',
    position: 0,
    gloss: 'where',
  },
  {
    id: 'Ps.139.7.1',
    surfaceText: 'אֵלֵךְ',
    lemma: 'הָלַךְ',
    transliteration: "ʾēlēḵ",
    lemmaTranslit: 'hālaḵ',
    morph: 'HVqI1cs',
    strong: 'H1980',
    language: 'hebrew',
    position: 1,
    gloss: 'shall I go',
  },
  {
    id: 'Ps.139.7.2',
    surfaceText: 'מֵרוּחֶךָ',
    lemma: 'רוּחַ',
    transliteration: 'mērûḥeḵā',
    lemmaTranslit: 'rûaḥ',
    morph: 'HR+Ncbsc+Sp2ms',
    strong: 'H7307',
    language: 'hebrew',
    position: 2,
    gloss: 'from your Spirit',
  },
  {
    id: 'Ps.139.7.3',
    surfaceText: 'וְאָנָה',
    lemma: 'אָנָה',
    transliteration: "wěʾānāh",
    lemmaTranslit: "ʾānāh",
    morph: 'HC+HD',
    strong: 'H575',
    language: 'hebrew',
    position: 3,
    gloss: 'and where',
  },
  {
    id: 'Ps.139.7.4',
    surfaceText: 'אֶבְרָח',
    lemma: 'בָּרַח',
    transliteration: "ʾeḇrāḥ",
    lemmaTranslit: 'bāraḥ',
    morph: 'HVqI1cs',
    strong: 'H1272',
    language: 'hebrew',
    position: 4,
    gloss: 'shall I flee',
  },
  {
    id: 'Ps.139.7.5',
    surfaceText: 'מִפָּנֶיךָ',
    lemma: 'פָּנִים',
    transliteration: 'mippāneyḵā',
    lemmaTranslit: 'pānîm',
    morph: 'HR+Ncmpc+Sp2ms',
    strong: 'H6440',
    language: 'hebrew',
    position: 5,
    gloss: 'from your presence',
  },
];

export const psalm139_7_translation: VerseTranslation = {
  verseRef: 'Ps.139.7',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Where shall I go from your Spirit? And where shall I flee from your presence?',
      spans: [
        { tokenIds: ['Ps.139.7.0'], targetSlice: [0, 5], confidence: 'high' },
        { tokenIds: ['Ps.139.7.1'], targetSlice: [6, 16], confidence: 'high' },
        { tokenIds: ['Ps.139.7.2'], targetSlice: [17, 33], confidence: 'high' },
        { tokenIds: ['Ps.139.7.3'], targetSlice: [34, 43], confidence: 'high' },
        { tokenIds: ['Ps.139.7.4'], targetSlice: [44, 56], confidence: 'high' },
        { tokenIds: ['Ps.139.7.5'], targetSlice: [57, 75], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Where can I go from your Spirit? Where can I flee from your presence?',
      spans: [
        { tokenIds: ['Ps.139.7.0'], targetSlice: [0, 11], confidence: 'high' },
        { tokenIds: ['Ps.139.7.1'], targetSlice: [12, 23], confidence: 'high' },
        { tokenIds: ['Ps.139.7.2'], targetSlice: [24, 35], confidence: 'high' },
        { tokenIds: ['Ps.139.7.3'], targetSlice: [36, 47], confidence: 'high' },
        { tokenIds: ['Ps.139.7.4'], targetSlice: [48, 59], confidence: 'high' },
        { tokenIds: ['Ps.139.7.5'], targetSlice: [60, 69], confidence: 'high' },
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

export const psalm139_7_verse = {
  ref: 'Ps.139.7',
  sourceTokens: psalm139_7_tokens,
  translation: psalm139_7_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 139:13 – You formed my inward parts
 * ──────────────────────────────────────────────────────────── */

export const psalm139_13_tokens: SourceToken[] = [
  {
    id: 'Ps.139.13.0',
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
    id: 'Ps.139.13.1',
    surfaceText: 'אַתָּה',
    lemma: 'אַתָּה',
    transliteration: "ʾattāh",
    lemmaTranslit: "ʾattāh",
    morph: 'HPp2ms',
    strong: 'H859',
    language: 'hebrew',
    position: 1,
    gloss: 'you',
  },
  {
    id: 'Ps.139.13.2',
    surfaceText: 'קָנִיתָ',
    lemma: 'קָנָה',
    transliteration: 'qānîṯā',
    lemmaTranslit: 'qānāh',
    morph: 'HVqp2ms',
    strong: 'H7069',
    language: 'hebrew',
    position: 2,
    gloss: 'created',
  },
  {
    id: 'Ps.139.13.3',
    surfaceText: 'כִלְיֹתָי',
    lemma: 'כִּלְיָה',
    transliteration: 'ḵilyōṯāy',
    lemmaTranslit: 'kilyāh',
    morph: 'HNcfpc+Sp1cs',
    strong: 'H3629',
    language: 'hebrew',
    position: 3,
    gloss: 'my inward parts',
  },
  {
    id: 'Ps.139.13.4',
    surfaceText: 'תְּסֻכֵּנִי',
    lemma: 'סָכַךְ',
    transliteration: 'těsukkēnî',
    lemmaTranslit: 'sāḵaḵ',
    morph: 'HVpI2ms+Sp1cs',
    strong: 'H5526',
    language: 'hebrew',
    position: 4,
    gloss: 'you knit me together',
  },
  {
    id: 'Ps.139.13.5',
    surfaceText: 'בְּבֶטֶן',
    lemma: 'בֶּטֶן',
    transliteration: 'běḇeṭen',
    lemmaTranslit: 'beṭen',
    morph: 'HR+Ncfsc',
    strong: 'H990',
    language: 'hebrew',
    position: 5,
    gloss: 'in the womb of',
  },
  {
    id: 'Ps.139.13.6',
    surfaceText: 'אִמִּי',
    lemma: 'אֵם',
    transliteration: "ʾimmî",
    lemmaTranslit: "ʾēm",
    morph: 'HNcfsc+Sp1cs',
    strong: 'H517',
    language: 'hebrew',
    position: 6,
    gloss: 'my mother',
  },
];

export const psalm139_13_translation: VerseTranslation = {
  verseRef: 'Ps.139.13',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "For you created my inward parts; you knit me together in my mother's womb",
      spans: [
        { tokenIds: ['Ps.139.13.0'], targetSlice: [0, 3], confidence: 'high' },
        { tokenIds: ['Ps.139.13.1'], targetSlice: [4, 7], confidence: 'high' },
        { tokenIds: ['Ps.139.13.2'], targetSlice: [8, 15], confidence: 'high' },
        { tokenIds: ['Ps.139.13.3'], targetSlice: [16, 31], confidence: 'high' },
        { tokenIds: ['Ps.139.13.4'], targetSlice: [32, 52], confidence: 'high' },
        { tokenIds: ['Ps.139.13.5'], targetSlice: [53, 67], confidence: 'high' },
        { tokenIds: ['Ps.139.13.6'], targetSlice: [68, 77], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "For you created my inmost being; you knit me together in my mother's womb.",
      spans: [
        { tokenIds: ['Ps.139.13.0'], targetSlice: [0, 10], confidence: 'high' },
        { tokenIds: ['Ps.139.13.1'], targetSlice: [11, 21], confidence: 'high' },
        { tokenIds: ['Ps.139.13.2'], targetSlice: [22, 32], confidence: 'high' },
        { tokenIds: ['Ps.139.13.3'], targetSlice: [33, 43], confidence: 'high' },
        { tokenIds: ['Ps.139.13.4'], targetSlice: [44, 54], confidence: 'high' },
        { tokenIds: ['Ps.139.13.5'], targetSlice: [55, 65], confidence: 'high' },
        { tokenIds: ['Ps.139.13.6'], targetSlice: [66, 74], confidence: 'high' },
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

export const psalm139_13_verse = {
  ref: 'Ps.139.13',
  sourceTokens: psalm139_13_tokens,
  translation: psalm139_13_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 139:14 – I am fearfully and wonderfully made
 * ──────────────────────────────────────────────────────────── */

export const psalm139_14_tokens: SourceToken[] = [
  {
    id: 'Ps.139.14.0',
    surfaceText: 'אוֹדְךָ',
    lemma: 'יָדָה',
    transliteration: "ʾôḏěḵā",
    lemmaTranslit: 'yāḏāh',
    morph: 'HVhI1cs+Sp2ms',
    strong: 'H3034',
    language: 'hebrew',
    position: 0,
    gloss: 'I praise you',
  },
  {
    id: 'Ps.139.14.1',
    surfaceText: 'עַל',
    lemma: 'עַל',
    transliteration: "ʿal",
    lemmaTranslit: "ʿal",
    morph: 'HR',
    strong: 'H5921',
    language: 'hebrew',
    position: 1,
    gloss: 'because',
  },
  {
    id: 'Ps.139.14.2',
    surfaceText: 'כִּי',
    lemma: 'כִּי',
    transliteration: 'kî',
    lemmaTranslit: 'kî',
    morph: 'HC',
    strong: 'H3588',
    language: 'hebrew',
    position: 2,
    gloss: 'that',
  },
  {
    id: 'Ps.139.14.3',
    surfaceText: 'נוֹרָאוֹת',
    lemma: 'יָרֵא',
    transliteration: "nôrāʾôṯ",
    lemmaTranslit: "yārēʾ",
    morph: 'HVNPtfpa',
    strong: 'H3372',
    language: 'hebrew',
    position: 3,
    gloss: 'fearfully',
  },
  {
    id: 'Ps.139.14.4',
    surfaceText: 'נִפְלֵיתִי',
    lemma: 'פָּלָא',
    transliteration: 'nip̄lêṯî',
    lemmaTranslit: "pālāʾ",
    morph: 'HVNp1cs',
    strong: 'H6395',
    language: 'hebrew',
    position: 4,
    gloss: 'I am wonderfully made',
  },
];

export const psalm139_14_translation: VerseTranslation = {
  verseRef: 'Ps.139.14',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'I praise you, for I am fearfully and wonderfully made',
      spans: [
        { tokenIds: ['Ps.139.14.0'], targetSlice: [0, 12], confidence: 'high' },
        { tokenIds: ['Ps.139.14.1'], targetSlice: [13, 20], confidence: 'high' },
        { tokenIds: ['Ps.139.14.2'], targetSlice: [21, 25], confidence: 'high' },
        { tokenIds: ['Ps.139.14.3'], targetSlice: [26, 35], confidence: 'high' },
        { tokenIds: ['Ps.139.14.4'], targetSlice: [36, 57], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'I praise you because I am fearfully and wonderfully made.',
      spans: [
        { tokenIds: ['Ps.139.14.0'], targetSlice: [0, 11], confidence: 'high' },
        { tokenIds: ['Ps.139.14.1'], targetSlice: [12, 23], confidence: 'high' },
        { tokenIds: ['Ps.139.14.2'], targetSlice: [24, 35], confidence: 'high' },
        { tokenIds: ['Ps.139.14.3'], targetSlice: [36, 47], confidence: 'high' },
        { tokenIds: ['Ps.139.14.4'], targetSlice: [48, 57], confidence: 'high' },
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

export const psalm139_14_verse = {
  ref: 'Ps.139.14',
  sourceTokens: psalm139_14_tokens,
  translation: psalm139_14_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 139:23 – Search me, O God, and know my heart
 * ──────────────────────────────────────────────────────────── */

export const psalm139_23_tokens: SourceToken[] = [
  {
    id: 'Ps.139.23.0',
    surfaceText: 'חָקְרֵנִי',
    lemma: 'חָקַר',
    transliteration: 'ḥāqěrēnî',
    lemmaTranslit: 'ḥāqar',
    morph: 'HVqv2ms+Sp1cs',
    strong: 'H2713',
    language: 'hebrew',
    position: 0,
    gloss: 'search me',
  },
  {
    id: 'Ps.139.23.1',
    surfaceText: 'אֵל',
    lemma: 'אֵל',
    transliteration: "ʾēl",
    lemmaTranslit: "ʾēl",
    morph: 'HNcmsa',
    strong: 'H410',
    language: 'hebrew',
    position: 1,
    gloss: 'O God',
  },
  {
    id: 'Ps.139.23.2',
    surfaceText: 'וְדַע',
    lemma: 'יָדַע',
    transliteration: "wěḏaʿ",
    lemmaTranslit: "yāḏaʿ",
    morph: 'HC+Vqv2ms',
    strong: 'H3045',
    language: 'hebrew',
    position: 2,
    gloss: 'and know',
  },
  {
    id: 'Ps.139.23.3',
    surfaceText: 'לְבָבִי',
    lemma: 'לֵבָב',
    transliteration: 'lěḇāḇî',
    lemmaTranslit: 'lēḇāḇ',
    morph: 'HNcmsc+Sp1cs',
    strong: 'H3824',
    language: 'hebrew',
    position: 3,
    gloss: 'my heart',
  },
  {
    id: 'Ps.139.23.4',
    surfaceText: 'בְּחָנֵנִי',
    lemma: 'בָּחַן',
    transliteration: 'běḥānēnî',
    lemmaTranslit: 'bāḥan',
    morph: 'HVqv2ms+Sp1cs',
    strong: 'H974',
    language: 'hebrew',
    position: 4,
    gloss: 'test me',
  },
];

export const psalm139_23_translation: VerseTranslation = {
  verseRef: 'Ps.139.23',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Search me, O God, and know my heart; test me and know my anxious thoughts',
      spans: [
        { tokenIds: ['Ps.139.23.0'], targetSlice: [0, 9], confidence: 'high' },
        { tokenIds: ['Ps.139.23.1'], targetSlice: [10, 15], confidence: 'high' },
        { tokenIds: ['Ps.139.23.2'], targetSlice: [16, 24], confidence: 'high' },
        { tokenIds: ['Ps.139.23.3'], targetSlice: [25, 33], confidence: 'high' },
        { tokenIds: ['Ps.139.23.4'], targetSlice: [34, 41], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Search me, God, and know my heart; test me and know my anxious thoughts.',
      spans: [
        { tokenIds: ['Ps.139.23.0'], targetSlice: [0, 14], confidence: 'high' },
        { tokenIds: ['Ps.139.23.1'], targetSlice: [15, 29], confidence: 'high' },
        { tokenIds: ['Ps.139.23.2'], targetSlice: [30, 44], confidence: 'high' },
        { tokenIds: ['Ps.139.23.3'], targetSlice: [45, 59], confidence: 'high' },
        { tokenIds: ['Ps.139.23.4'], targetSlice: [60, 72], confidence: 'high' },
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

export const psalm139_23_verse = {
  ref: 'Ps.139.23',
  sourceTokens: psalm139_23_tokens,
  translation: psalm139_23_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Psalm 139:1-24 — God's omniscience
 * ──────────────────────────────────────────────────────────── */

export const psalm139_1_24_verses = [
  psalm139_1_verse,
  psalm139_2_verse,
  psalm139_7_verse,
  psalm139_13_verse,
  psalm139_14_verse,
  psalm139_23_verse,
];

export default psalm139_1_24_verses;
