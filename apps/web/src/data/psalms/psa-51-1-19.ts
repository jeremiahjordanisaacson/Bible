// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 51:1 – Have mercy on me, O God
 * ──────────────────────────────────────────────────────────── */

export const psalm51_1_tokens: SourceToken[] = [
  {
    id: 'Ps.51.1.0',
    surfaceText: 'חָנֵּנִי',
    lemma: 'חָנַן',
    transliteration: 'ḥānnēnî',
    lemmaTranslit: 'ḥānan',
    morph: 'HVqv2ms+Sp1cs',
    strong: 'H2603',
    language: 'hebrew',
    position: 0,
    gloss: 'have mercy on me',
  },
  {
    id: 'Ps.51.1.1',
    surfaceText: 'אֱלֹהִים',
    lemma: 'אֱלֹהִים',
    transliteration: "ʾĕlōhîm",
    lemmaTranslit: "ʾĕlōhîm",
    morph: 'HNcmpa',
    strong: 'H430',
    language: 'hebrew',
    position: 1,
    gloss: 'O God',
  },
  {
    id: 'Ps.51.1.2',
    surfaceText: 'כְּחַסְדֶּךָ',
    lemma: 'חֶסֶד',
    transliteration: 'kěḥasděḵā',
    lemmaTranslit: 'ḥeseḏ',
    morph: 'HR+Ncmsc+Sp2ms',
    strong: 'H2617',
    language: 'hebrew',
    position: 2,
    gloss: 'according to your lovingkindness',
  },
  {
    id: 'Ps.51.1.3',
    surfaceText: 'מְחֵה',
    lemma: 'מָחָה',
    transliteration: 'měḥēh',
    lemmaTranslit: 'māḥāh',
    morph: 'HVqv2ms',
    strong: 'H4229',
    language: 'hebrew',
    position: 3,
    gloss: 'blot out',
  },
  {
    id: 'Ps.51.1.4',
    surfaceText: 'פְשָׁעָי',
    lemma: 'פֶּשַׁע',
    transliteration: "p̄ěšāʿāy",
    lemmaTranslit: "pešaʿ",
    morph: 'HNcmpc+Sp1cs',
    strong: 'H6588',
    language: 'hebrew',
    position: 4,
    gloss: 'my transgressions',
  },
];

export const psalm51_1_translation: VerseTranslation = {
  verseRef: 'Ps.51.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Have mercy on me, O God, according to your lovingkindness; blot out my transgressions',
      spans: [
        { tokenIds: ['Ps.51.1.0'], targetSlice: [0, 16], confidence: 'high' },
        { tokenIds: ['Ps.51.1.1'], targetSlice: [17, 22], confidence: 'high' },
        { tokenIds: ['Ps.51.1.2'], targetSlice: [23, 55], confidence: 'high' },
        { tokenIds: ['Ps.51.1.3'], targetSlice: [56, 64], confidence: 'high' },
        { tokenIds: ['Ps.51.1.4'], targetSlice: [65, 82], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Have mercy on me, O God, according to your unfailing love; blot out my transgressions.',
      spans: [
        { tokenIds: ['Ps.51.1.0'], targetSlice: [0, 17], confidence: 'high' },
        { tokenIds: ['Ps.51.1.1'], targetSlice: [18, 35], confidence: 'high' },
        { tokenIds: ['Ps.51.1.2'], targetSlice: [36, 53], confidence: 'high' },
        { tokenIds: ['Ps.51.1.3'], targetSlice: [54, 71], confidence: 'high' },
        { tokenIds: ['Ps.51.1.4'], targetSlice: [72, 86], confidence: 'high' },
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

export const psalm51_1_verse = {
  ref: 'Ps.51.1',
  sourceTokens: psalm51_1_tokens,
  translation: psalm51_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 51:2 – Wash me thoroughly from my iniquity
 * ──────────────────────────────────────────────────────────── */

export const psalm51_2_tokens: SourceToken[] = [
  {
    id: 'Ps.51.2.0',
    surfaceText: 'כַּבְּסֵנִי',
    lemma: 'כָּבַס',
    transliteration: 'kabběsēnî',
    lemmaTranslit: 'kāḇas',
    morph: 'HVpv2ms+Sp1cs',
    strong: 'H3526',
    language: 'hebrew',
    position: 0,
    gloss: 'wash me',
  },
  {
    id: 'Ps.51.2.1',
    surfaceText: 'מֵעֲוֹנִי',
    lemma: 'עָוֹן',
    transliteration: "mēʿăwōnî",
    lemmaTranslit: "ʿāwōn",
    morph: 'HR+Ncmsc+Sp1cs',
    strong: 'H5771',
    language: 'hebrew',
    position: 1,
    gloss: 'from my iniquity',
  },
  {
    id: 'Ps.51.2.2',
    surfaceText: 'וּמֵחַטָּאתִי',
    lemma: 'חַטָּאת',
    transliteration: "ûmēḥaṭṭāʾṯî",
    lemmaTranslit: "ḥaṭṭāʾṯ",
    morph: 'HC+HR+Ncfsc+Sp1cs',
    strong: 'H2403',
    language: 'hebrew',
    position: 2,
    gloss: 'and from my sin',
  },
  {
    id: 'Ps.51.2.3',
    surfaceText: 'טַהֲרֵנִי',
    lemma: 'טָהֵר',
    transliteration: 'ṭahărēnî',
    lemmaTranslit: 'ṭāhēr',
    morph: 'HVpv2ms+Sp1cs',
    strong: 'H2891',
    language: 'hebrew',
    position: 3,
    gloss: 'cleanse me',
  },
];

export const psalm51_2_translation: VerseTranslation = {
  verseRef: 'Ps.51.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Wash me thoroughly from my iniquity and cleanse me from my sin',
      spans: [
        { tokenIds: ['Ps.51.2.0'], targetSlice: [0, 7], confidence: 'high' },
        { tokenIds: ['Ps.51.2.1'], targetSlice: [8, 24], confidence: 'high' },
        { tokenIds: ['Ps.51.2.2'], targetSlice: [25, 40], confidence: 'high' },
        { tokenIds: ['Ps.51.2.3'], targetSlice: [41, 51], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Wash away all my iniquity and cleanse me from my sin.',
      spans: [
        { tokenIds: ['Ps.51.2.0'], targetSlice: [0, 13], confidence: 'high' },
        { tokenIds: ['Ps.51.2.1'], targetSlice: [14, 27], confidence: 'high' },
        { tokenIds: ['Ps.51.2.2'], targetSlice: [28, 41], confidence: 'high' },
        { tokenIds: ['Ps.51.2.3'], targetSlice: [42, 53], confidence: 'high' },
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

export const psalm51_2_verse = {
  ref: 'Ps.51.2',
  sourceTokens: psalm51_2_tokens,
  translation: psalm51_2_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 51:7 – Purge me with hyssop and I shall be clean
 * ──────────────────────────────────────────────────────────── */

export const psalm51_7_tokens: SourceToken[] = [
  {
    id: 'Ps.51.7.0',
    surfaceText: 'תְּחַטְּאֵנִי',
    lemma: 'חָטָא',
    transliteration: "těḥaṭṭěʾēnî",
    lemmaTranslit: "ḥāṭāʾ",
    morph: 'HVpI2ms+Sp1cs',
    strong: 'H2398',
    language: 'hebrew',
    position: 0,
    gloss: 'purge me',
  },
  {
    id: 'Ps.51.7.1',
    surfaceText: 'בְאֵזוֹב',
    lemma: 'אֵזוֹב',
    transliteration: "ḇěʾēzôḇ",
    lemmaTranslit: "ʾēzôḇ",
    morph: 'HR+Ncmsa',
    strong: 'H231',
    language: 'hebrew',
    position: 1,
    gloss: 'with hyssop',
  },
  {
    id: 'Ps.51.7.2',
    surfaceText: 'וְאֶטְהָר',
    lemma: 'טָהֵר',
    transliteration: "wěʾeṭhār",
    lemmaTranslit: 'ṭāhēr',
    morph: 'HC+VqI1cs',
    strong: 'H2891',
    language: 'hebrew',
    position: 2,
    gloss: 'and I shall be clean',
  },
  {
    id: 'Ps.51.7.3',
    surfaceText: 'תְּכַבְּסֵנִי',
    lemma: 'כָּבַס',
    transliteration: 'těḵabběsēnî',
    lemmaTranslit: 'kāḇas',
    morph: 'HVpI2ms+Sp1cs',
    strong: 'H3526',
    language: 'hebrew',
    position: 3,
    gloss: 'wash me',
  },
  {
    id: 'Ps.51.7.4',
    surfaceText: 'אַלְבִּין',
    lemma: 'לָבַן',
    transliteration: "ʾalbîn",
    lemmaTranslit: 'lāḇan',
    morph: 'HVhI1cs',
    strong: 'H3835',
    language: 'hebrew',
    position: 4,
    gloss: 'I shall be whiter',
  },
  {
    id: 'Ps.51.7.5',
    surfaceText: 'מִשֶּׁלֶג',
    lemma: 'שֶׁלֶג',
    transliteration: 'miššeleg',
    lemmaTranslit: 'šeleg',
    morph: 'HR+Ncmsa',
    strong: 'H7950',
    language: 'hebrew',
    position: 5,
    gloss: 'than snow',
  },
];

export const psalm51_7_translation: VerseTranslation = {
  verseRef: 'Ps.51.7',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Purge me with hyssop and I shall be clean; wash me and I shall be whiter than snow',
      spans: [
        { tokenIds: ['Ps.51.7.0'], targetSlice: [0, 8], confidence: 'high' },
        { tokenIds: ['Ps.51.7.1'], targetSlice: [9, 20], confidence: 'high' },
        { tokenIds: ['Ps.51.7.2'], targetSlice: [21, 41], confidence: 'high' },
        { tokenIds: ['Ps.51.7.3'], targetSlice: [42, 49], confidence: 'high' },
        { tokenIds: ['Ps.51.7.4'], targetSlice: [50, 67], confidence: 'high' },
        { tokenIds: ['Ps.51.7.5'], targetSlice: [68, 77], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Cleanse me with hyssop, and I will be clean; wash me, and I will be whiter than snow.',
      spans: [
        { tokenIds: ['Ps.51.7.0'], targetSlice: [0, 14], confidence: 'high' },
        { tokenIds: ['Ps.51.7.1'], targetSlice: [15, 29], confidence: 'high' },
        { tokenIds: ['Ps.51.7.2'], targetSlice: [30, 44], confidence: 'high' },
        { tokenIds: ['Ps.51.7.3'], targetSlice: [45, 59], confidence: 'high' },
        { tokenIds: ['Ps.51.7.4'], targetSlice: [60, 74], confidence: 'high' },
        { tokenIds: ['Ps.51.7.5'], targetSlice: [75, 85], confidence: 'high' },
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

export const psalm51_7_verse = {
  ref: 'Ps.51.7',
  sourceTokens: psalm51_7_tokens,
  translation: psalm51_7_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 51:10 – Create in me a clean heart
 * ──────────────────────────────────────────────────────────── */

export const psalm51_10_tokens: SourceToken[] = [
  {
    id: 'Ps.51.10.0',
    surfaceText: 'לֵב',
    lemma: 'לֵב',
    transliteration: 'lēḇ',
    lemmaTranslit: 'lēḇ',
    morph: 'HNcmsa',
    strong: 'H3820',
    language: 'hebrew',
    position: 0,
    gloss: 'a heart',
  },
  {
    id: 'Ps.51.10.1',
    surfaceText: 'טָהוֹר',
    lemma: 'טָהוֹר',
    transliteration: 'ṭāhôr',
    lemmaTranslit: 'ṭāhôr',
    morph: 'HAamsa',
    strong: 'H2889',
    language: 'hebrew',
    position: 1,
    gloss: 'clean',
  },
  {
    id: 'Ps.51.10.2',
    surfaceText: 'בְּרָא',
    lemma: 'בָּרָא',
    transliteration: "běrāʾ",
    lemmaTranslit: "bārāʾ",
    morph: 'HVqv2ms',
    strong: 'H1254',
    language: 'hebrew',
    position: 2,
    gloss: 'create',
  },
  {
    id: 'Ps.51.10.3',
    surfaceText: 'לִי',
    lemma: 'לְ',
    transliteration: 'lî',
    lemmaTranslit: 'lě',
    morph: 'HR+Sp1cs',
    strong: 'H0',
    language: 'hebrew',
    position: 3,
    gloss: 'for me',
  },
  {
    id: 'Ps.51.10.4',
    surfaceText: 'אֱלֹהִים',
    lemma: 'אֱלֹהִים',
    transliteration: "ʾĕlōhîm",
    lemmaTranslit: "ʾĕlōhîm",
    morph: 'HNcmpa',
    strong: 'H430',
    language: 'hebrew',
    position: 4,
    gloss: 'O God',
  },
  {
    id: 'Ps.51.10.5',
    surfaceText: 'רוּחַ',
    lemma: 'רוּחַ',
    transliteration: 'rûaḥ',
    lemmaTranslit: 'rûaḥ',
    morph: 'HNcbsa',
    strong: 'H7307',
    language: 'hebrew',
    position: 5,
    gloss: 'a spirit',
  },
  {
    id: 'Ps.51.10.6',
    surfaceText: 'נָכוֹן',
    lemma: 'כּוּן',
    transliteration: 'nāḵôn',
    lemmaTranslit: 'kûn',
    morph: 'HVNPtmsa',
    strong: 'H3559',
    language: 'hebrew',
    position: 6,
    gloss: 'steadfast',
  },
];

export const psalm51_10_translation: VerseTranslation = {
  verseRef: 'Ps.51.10',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Create in me a clean heart, O God, and renew a steadfast spirit within me',
      spans: [
        { tokenIds: ['Ps.51.10.0'], targetSlice: [0, 7], confidence: 'high' },
        { tokenIds: ['Ps.51.10.1'], targetSlice: [8, 13], confidence: 'high' },
        { tokenIds: ['Ps.51.10.2'], targetSlice: [14, 20], confidence: 'high' },
        { tokenIds: ['Ps.51.10.3'], targetSlice: [21, 27], confidence: 'high' },
        { tokenIds: ['Ps.51.10.4'], targetSlice: [28, 33], confidence: 'high' },
        { tokenIds: ['Ps.51.10.5'], targetSlice: [34, 42], confidence: 'high' },
        { tokenIds: ['Ps.51.10.6'], targetSlice: [43, 52], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Create in me a pure heart, O God, and renew a steadfast spirit within me.',
      spans: [
        { tokenIds: ['Ps.51.10.0'], targetSlice: [0, 10], confidence: 'high' },
        { tokenIds: ['Ps.51.10.1'], targetSlice: [11, 21], confidence: 'high' },
        { tokenIds: ['Ps.51.10.2'], targetSlice: [22, 32], confidence: 'high' },
        { tokenIds: ['Ps.51.10.3'], targetSlice: [33, 43], confidence: 'high' },
        { tokenIds: ['Ps.51.10.4'], targetSlice: [44, 54], confidence: 'high' },
        { tokenIds: ['Ps.51.10.5'], targetSlice: [55, 65], confidence: 'high' },
        { tokenIds: ['Ps.51.10.6'], targetSlice: [66, 73], confidence: 'high' },
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

export const psalm51_10_verse = {
  ref: 'Ps.51.10',
  sourceTokens: psalm51_10_tokens,
  translation: psalm51_10_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 51:12 – Restore to me the joy of your salvation
 * ──────────────────────────────────────────────────────────── */

export const psalm51_12_tokens: SourceToken[] = [
  {
    id: 'Ps.51.12.0',
    surfaceText: 'הָשִׁיבָה',
    lemma: 'שׁוּב',
    transliteration: 'hāšîḇāh',
    lemmaTranslit: 'šûḇ',
    morph: 'HVhv2ms',
    strong: 'H7725',
    language: 'hebrew',
    position: 0,
    gloss: 'restore',
  },
  {
    id: 'Ps.51.12.1',
    surfaceText: 'לִּי',
    lemma: 'לְ',
    transliteration: 'llî',
    lemmaTranslit: 'lě',
    morph: 'HR+Sp1cs',
    strong: 'H0',
    language: 'hebrew',
    position: 1,
    gloss: 'to me',
  },
  {
    id: 'Ps.51.12.2',
    surfaceText: 'שְׂשׂוֹן',
    lemma: 'שָׂשׂוֹן',
    transliteration: 'śěśôn',
    lemmaTranslit: 'śāśôn',
    morph: 'HNcmsa',
    strong: 'H8342',
    language: 'hebrew',
    position: 2,
    gloss: 'the joy of',
  },
  {
    id: 'Ps.51.12.3',
    surfaceText: 'יִשְׁעֶךָ',
    lemma: 'יֵשַׁע',
    transliteration: "yišʿeḵā",
    lemmaTranslit: "yēšaʿ",
    morph: 'HNcmsc+Sp2ms',
    strong: 'H3468',
    language: 'hebrew',
    position: 3,
    gloss: 'your salvation',
  },
  {
    id: 'Ps.51.12.4',
    surfaceText: 'רוּחַ',
    lemma: 'רוּחַ',
    transliteration: 'rûaḥ',
    lemmaTranslit: 'rûaḥ',
    morph: 'HNcbsa',
    strong: 'H7307',
    language: 'hebrew',
    position: 4,
    gloss: 'a spirit',
  },
  {
    id: 'Ps.51.12.5',
    surfaceText: 'נְדִיבָה',
    lemma: 'נָדִיב',
    transliteration: 'něḏîḇāh',
    lemmaTranslit: 'nāḏîḇ',
    morph: 'HAafsa',
    strong: 'H5082',
    language: 'hebrew',
    position: 5,
    gloss: 'willing',
  },
];

export const psalm51_12_translation: VerseTranslation = {
  verseRef: 'Ps.51.12',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Restore to me the joy of your salvation, and sustain me with a willing spirit',
      spans: [
        { tokenIds: ['Ps.51.12.0'], targetSlice: [0, 7], confidence: 'high' },
        { tokenIds: ['Ps.51.12.1'], targetSlice: [8, 13], confidence: 'high' },
        { tokenIds: ['Ps.51.12.2'], targetSlice: [14, 24], confidence: 'high' },
        { tokenIds: ['Ps.51.12.3'], targetSlice: [25, 39], confidence: 'high' },
        { tokenIds: ['Ps.51.12.4'], targetSlice: [40, 48], confidence: 'high' },
        { tokenIds: ['Ps.51.12.5'], targetSlice: [49, 56], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Restore to me the joy of your salvation and grant me a willing spirit, to sustain me.',
      spans: [
        { tokenIds: ['Ps.51.12.0'], targetSlice: [0, 14], confidence: 'high' },
        { tokenIds: ['Ps.51.12.1'], targetSlice: [15, 29], confidence: 'high' },
        { tokenIds: ['Ps.51.12.2'], targetSlice: [30, 44], confidence: 'high' },
        { tokenIds: ['Ps.51.12.3'], targetSlice: [45, 59], confidence: 'high' },
        { tokenIds: ['Ps.51.12.4'], targetSlice: [60, 74], confidence: 'high' },
        { tokenIds: ['Ps.51.12.5'], targetSlice: [75, 85], confidence: 'high' },
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

export const psalm51_12_verse = {
  ref: 'Ps.51.12',
  sourceTokens: psalm51_12_tokens,
  translation: psalm51_12_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 51:17 – The sacrifices of God are a broken spirit
 * ──────────────────────────────────────────────────────────── */

export const psalm51_17_tokens: SourceToken[] = [
  {
    id: 'Ps.51.17.0',
    surfaceText: 'זִבְחֵי',
    lemma: 'זֶבַח',
    transliteration: 'ziḇḥê',
    lemmaTranslit: 'zeḇaḥ',
    morph: 'HNcmpc',
    strong: 'H2077',
    language: 'hebrew',
    position: 0,
    gloss: 'the sacrifices of',
  },
  {
    id: 'Ps.51.17.1',
    surfaceText: 'אֱלֹהִים',
    lemma: 'אֱלֹהִים',
    transliteration: "ʾĕlōhîm",
    lemmaTranslit: "ʾĕlōhîm",
    morph: 'HNcmpa',
    strong: 'H430',
    language: 'hebrew',
    position: 1,
    gloss: 'God',
  },
  {
    id: 'Ps.51.17.2',
    surfaceText: 'רוּחַ',
    lemma: 'רוּחַ',
    transliteration: 'rûaḥ',
    lemmaTranslit: 'rûaḥ',
    morph: 'HNcbsa',
    strong: 'H7307',
    language: 'hebrew',
    position: 2,
    gloss: 'a spirit',
  },
  {
    id: 'Ps.51.17.3',
    surfaceText: 'נִשְׁבָּרָה',
    lemma: 'שָׁבַר',
    transliteration: 'nišbārāh',
    lemmaTranslit: 'šāḇar',
    morph: 'HVNp3fs',
    strong: 'H7665',
    language: 'hebrew',
    position: 3,
    gloss: 'broken',
  },
  {
    id: 'Ps.51.17.4',
    surfaceText: 'לֵב',
    lemma: 'לֵב',
    transliteration: 'lēḇ',
    lemmaTranslit: 'lēḇ',
    morph: 'HNcmsa',
    strong: 'H3820',
    language: 'hebrew',
    position: 4,
    gloss: 'a heart',
  },
  {
    id: 'Ps.51.17.5',
    surfaceText: 'נִשְׁבָּר',
    lemma: 'שָׁבַר',
    transliteration: 'nišbār',
    lemmaTranslit: 'šāḇar',
    morph: 'HVNPtmsa',
    strong: 'H7665',
    language: 'hebrew',
    position: 5,
    gloss: 'broken',
  },
];

export const psalm51_17_translation: VerseTranslation = {
  verseRef: 'Ps.51.17',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'The sacrifices of God are a broken spirit; a broken and contrite heart, O God, you will not despise',
      spans: [
        { tokenIds: ['Ps.51.17.0'], targetSlice: [0, 17], confidence: 'high' },
        { tokenIds: ['Ps.51.17.1'], targetSlice: [18, 21], confidence: 'high' },
        { tokenIds: ['Ps.51.17.2'], targetSlice: [22, 30], confidence: 'high' },
        { tokenIds: ['Ps.51.17.3'], targetSlice: [31, 37], confidence: 'high' },
        { tokenIds: ['Ps.51.17.4'], targetSlice: [38, 45], confidence: 'high' },
        { tokenIds: ['Ps.51.17.5'], targetSlice: [46, 52], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'My sacrifice, O God, is a broken spirit; a broken and contrite heart you will not despise.',
      spans: [
        { tokenIds: ['Ps.51.17.0'], targetSlice: [0, 15], confidence: 'high' },
        { tokenIds: ['Ps.51.17.1'], targetSlice: [16, 31], confidence: 'high' },
        { tokenIds: ['Ps.51.17.2'], targetSlice: [32, 47], confidence: 'high' },
        { tokenIds: ['Ps.51.17.3'], targetSlice: [48, 63], confidence: 'high' },
        { tokenIds: ['Ps.51.17.4'], targetSlice: [64, 79], confidence: 'high' },
        { tokenIds: ['Ps.51.17.5'], targetSlice: [80, 90], confidence: 'high' },
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

export const psalm51_17_verse = {
  ref: 'Ps.51.17',
  sourceTokens: psalm51_17_tokens,
  translation: psalm51_17_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Psalm 51:1-19 — David's penitence
 * ──────────────────────────────────────────────────────────── */

export const psalm51_1_19_verses = [
  psalm51_1_verse,
  psalm51_2_verse,
  psalm51_7_verse,
  psalm51_10_verse,
  psalm51_12_verse,
  psalm51_17_verse,
];

export default psalm51_1_19_verses;
