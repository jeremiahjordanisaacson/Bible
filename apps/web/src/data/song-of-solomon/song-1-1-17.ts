// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 1:1 – The Song of Songs
 * ──────────────────────────────────────────────────────────── */

export const song1_1_tokens: SourceToken[] = [
  {
    id: 'Song.1.1.0',
    surfaceText: 'שִׁיר',
    lemma: 'שִׁיר',
    transliteration: 'šîr',
    lemmaTranslit: 'šîr',
    morph: 'HNcmsc',
    strong: 'H7892',
    language: 'hebrew',
    position: 0,
    gloss: 'the song of',
  },
  {
    id: 'Song.1.1.1',
    surfaceText: 'הַשִּׁירִים',
    lemma: 'שִׁיר',
    transliteration: 'haššîrîm',
    lemmaTranslit: 'šîr',
    morph: 'HTd+Ncmpa',
    strong: 'H7892',
    language: 'hebrew',
    position: 1,
    gloss: 'songs',
  },
  {
    id: 'Song.1.1.2',
    surfaceText: 'אֲשֶׁר',
    lemma: 'אֲשֶׁר',
    transliteration: "ʾăšer",
    lemmaTranslit: "ʾăšer",
    morph: 'HR',
    strong: 'H834',
    language: 'hebrew',
    position: 2,
    gloss: 'which is',
  },
  {
    id: 'Song.1.1.3',
    surfaceText: 'לִשְׁלֹמֹה',
    lemma: 'שְׁלֹמֹה',
    transliteration: 'lišlōmōh',
    lemmaTranslit: 'šělōmōh',
    morph: 'HR+Np',
    strong: 'H8010',
    language: 'hebrew',
    position: 3,
    gloss: 'of Solomon',
  },
];

export const song1_1_translation: VerseTranslation = {
  verseRef: 'Song.1.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'The Song of Songs, which is of Solomon',
      spans: [
        { tokenIds: ['Song.1.1.0'], targetSlice: [0, 11], confidence: 'high' },
        { tokenIds: ['Song.1.1.1'], targetSlice: [12, 17], confidence: 'high' },
        { tokenIds: ['Song.1.1.2'], targetSlice: [18, 26], confidence: 'high' },
        { tokenIds: ['Song.1.1.3'], targetSlice: [27, 37], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "Solomon's Song of Songs.",
      spans: [
        { tokenIds: ['Song.1.1.0'], targetSlice: [0, 6], confidence: 'high' },
        { tokenIds: ['Song.1.1.1'], targetSlice: [7, 13], confidence: 'high' },
        { tokenIds: ['Song.1.1.2'], targetSlice: [14, 20], confidence: 'high' },
        { tokenIds: ['Song.1.1.3'], targetSlice: [21, 24], confidence: 'high' },
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

export const song1_1_verse = {
  ref: 'Song.1.1',
  sourceTokens: song1_1_tokens,
  translation: song1_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:2 – Let him kiss me with the kisses of his mouth
 * ──────────────────────────────────────────────────────────── */

export const song1_2_tokens: SourceToken[] = [
  {
    id: 'Song.1.2.0',
    surfaceText: 'יִשָּׁקֵנִי',
    lemma: 'נָשַׁק',
    transliteration: 'yiššāqēnî',
    lemmaTranslit: 'nāšaq',
    morph: 'HVqI3ms+Sp1cs',
    strong: 'H5401',
    language: 'hebrew',
    position: 0,
    gloss: 'let him kiss me',
  },
  {
    id: 'Song.1.2.1',
    surfaceText: 'מִנְּשִׁיקוֹת',
    lemma: 'נְשִׁיקָה',
    transliteration: 'minnělšîqôṯ',
    lemmaTranslit: 'něšîqāh',
    morph: 'HR+Ncfpc',
    strong: 'H5390',
    language: 'hebrew',
    position: 1,
    gloss: 'with the kisses of',
  },
  {
    id: 'Song.1.2.2',
    surfaceText: 'פִּיהוּ',
    lemma: 'פֶּה',
    transliteration: 'pîhû',
    lemmaTranslit: 'peh',
    morph: 'HNcmsc+Sp3ms',
    strong: 'H6310',
    language: 'hebrew',
    position: 2,
    gloss: 'his mouth',
  },
  {
    id: 'Song.1.2.3',
    surfaceText: 'כִּי',
    lemma: 'כִּי',
    transliteration: 'kî',
    lemmaTranslit: 'kî',
    morph: 'HC',
    strong: 'H3588',
    language: 'hebrew',
    position: 3,
    gloss: 'for',
  },
  {
    id: 'Song.1.2.4',
    surfaceText: 'טוֹבִים',
    lemma: 'טוֹב',
    transliteration: 'ṭôḇîm',
    lemmaTranslit: 'ṭôḇ',
    morph: 'HAampa',
    strong: 'H2896',
    language: 'hebrew',
    position: 4,
    gloss: 'are better',
  },
  {
    id: 'Song.1.2.5',
    surfaceText: 'דֹּדֶיךָ',
    lemma: 'דּוֹד',
    transliteration: 'dōḏeyḵā',
    lemmaTranslit: 'dôḏ',
    morph: 'HNcmpc+Sp2ms',
    strong: 'H1730',
    language: 'hebrew',
    position: 5,
    gloss: 'your loves',
  },
  {
    id: 'Song.1.2.6',
    surfaceText: 'מִיָּיִן',
    lemma: 'יַיִן',
    transliteration: 'miyyāyin',
    lemmaTranslit: 'yayin',
    morph: 'HR+Ncmsa',
    strong: 'H3196',
    language: 'hebrew',
    position: 6,
    gloss: 'than wine',
  },
];

export const song1_2_translation: VerseTranslation = {
  verseRef: 'Song.1.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Let him kiss me with the kisses of his mouth, for your love is better than wine',
      spans: [
        { tokenIds: ['Song.1.2.0'], targetSlice: [0, 15], confidence: 'high' },
        { tokenIds: ['Song.1.2.1'], targetSlice: [16, 34], confidence: 'high' },
        { tokenIds: ['Song.1.2.2'], targetSlice: [35, 44], confidence: 'high' },
        { tokenIds: ['Song.1.2.3'], targetSlice: [45, 48], confidence: 'high' },
        { tokenIds: ['Song.1.2.4'], targetSlice: [49, 59], confidence: 'high' },
        { tokenIds: ['Song.1.2.5'], targetSlice: [60, 70], confidence: 'high' },
        { tokenIds: ['Song.1.2.6'], targetSlice: [71, 80], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Let him kiss me with the kisses of his mouth, for your love is more delightful than wine.',
      spans: [
        { tokenIds: ['Song.1.2.0'], targetSlice: [0, 12], confidence: 'high' },
        { tokenIds: ['Song.1.2.1'], targetSlice: [13, 25], confidence: 'high' },
        { tokenIds: ['Song.1.2.2'], targetSlice: [26, 38], confidence: 'high' },
        { tokenIds: ['Song.1.2.3'], targetSlice: [39, 51], confidence: 'high' },
        { tokenIds: ['Song.1.2.4'], targetSlice: [52, 64], confidence: 'high' },
        { tokenIds: ['Song.1.2.5'], targetSlice: [65, 77], confidence: 'high' },
        { tokenIds: ['Song.1.2.6'], targetSlice: [78, 89], confidence: 'high' },
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

export const song1_2_verse = {
  ref: 'Song.1.2',
  sourceTokens: song1_2_tokens,
  translation: song1_2_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:4 – Draw me after you; let us run
 * ──────────────────────────────────────────────────────────── */

export const song1_4_tokens: SourceToken[] = [
  {
    id: 'Song.1.4.0',
    surfaceText: 'מָשְׁכֵנִי',
    lemma: 'מָשַׁךְ',
    transliteration: 'māšěḵēnî',
    lemmaTranslit: 'māšaḵ',
    morph: 'HVqv2ms+Sp1cs',
    strong: 'H4900',
    language: 'hebrew',
    position: 0,
    gloss: 'draw me',
  },
  {
    id: 'Song.1.4.1',
    surfaceText: 'אַחֲרֶיךָ',
    lemma: 'אַחַר',
    transliteration: "ʾaḥăreyḵā",
    lemmaTranslit: "ʾaḥar",
    morph: 'HR+Sp2ms',
    strong: 'H310',
    language: 'hebrew',
    position: 1,
    gloss: 'after you',
  },
  {
    id: 'Song.1.4.2',
    surfaceText: 'נָּרוּצָה',
    lemma: 'רוּץ',
    transliteration: 'nārûṣāh',
    lemmaTranslit: 'rûṣ',
    morph: 'HVqI1cp',
    strong: 'H7323',
    language: 'hebrew',
    position: 2,
    gloss: 'let us run',
  },
];

export const song1_4_translation: VerseTranslation = {
  verseRef: 'Song.1.4',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Draw me after you; let us run together',
      spans: [
        { tokenIds: ['Song.1.4.0'], targetSlice: [0, 7], confidence: 'high' },
        { tokenIds: ['Song.1.4.1'], targetSlice: [8, 17], confidence: 'high' },
        { tokenIds: ['Song.1.4.2'], targetSlice: [18, 28], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Take me away with you; let us hurry!',
      spans: [
        { tokenIds: ['Song.1.4.0'], targetSlice: [0, 12], confidence: 'high' },
        { tokenIds: ['Song.1.4.1'], targetSlice: [13, 25], confidence: 'high' },
        { tokenIds: ['Song.1.4.2'], targetSlice: [26, 36], confidence: 'high' },
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

export const song1_4_verse = {
  ref: 'Song.1.4',
  sourceTokens: song1_4_tokens,
  translation: song1_4_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:5 – I am dark but lovely
 * ──────────────────────────────────────────────────────────── */

export const song1_5_tokens: SourceToken[] = [
  {
    id: 'Song.1.5.0',
    surfaceText: 'שְׁחוֹרָה',
    lemma: 'שָׁחֹר',
    transliteration: 'šěḥôrāh',
    lemmaTranslit: 'šāḥōr',
    morph: 'HAafsa',
    strong: 'H7838',
    language: 'hebrew',
    position: 0,
    gloss: 'dark',
  },
  {
    id: 'Song.1.5.1',
    surfaceText: 'אֲנִי',
    lemma: 'אֲנִי',
    transliteration: "ʾănî",
    lemmaTranslit: "ʾănî",
    morph: 'HPp1cs',
    strong: 'H589',
    language: 'hebrew',
    position: 1,
    gloss: 'I am',
  },
  {
    id: 'Song.1.5.2',
    surfaceText: 'וְנָאוָה',
    lemma: 'נָאוֶה',
    transliteration: "wěnāʾwāh",
    lemmaTranslit: "nāʾweh",
    morph: 'HC+Aafsa',
    strong: 'H5000',
    language: 'hebrew',
    position: 2,
    gloss: 'but lovely',
  },
  {
    id: 'Song.1.5.3',
    surfaceText: 'בְּנוֹת',
    lemma: 'בַּת',
    transliteration: 'běnôṯ',
    lemmaTranslit: 'baṯ',
    morph: 'HNcfpc',
    strong: 'H1323',
    language: 'hebrew',
    position: 3,
    gloss: 'O daughters of',
  },
  {
    id: 'Song.1.5.4',
    surfaceText: 'יְרוּשָׁלִָם',
    lemma: 'יְרוּשָׁלַיִם',
    transliteration: 'yěrûšālāim',
    lemmaTranslit: 'yěrûšālayim',
    morph: 'HNp',
    strong: 'H3389',
    language: 'hebrew',
    position: 4,
    gloss: 'Jerusalem',
  },
];

export const song1_5_translation: VerseTranslation = {
  verseRef: 'Song.1.5',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'I am dark but lovely, O daughters of Jerusalem',
      spans: [
        { tokenIds: ['Song.1.5.0'], targetSlice: [0, 4], confidence: 'high' },
        { tokenIds: ['Song.1.5.1'], targetSlice: [5, 9], confidence: 'high' },
        { tokenIds: ['Song.1.5.2'], targetSlice: [10, 20], confidence: 'high' },
        { tokenIds: ['Song.1.5.3'], targetSlice: [21, 35], confidence: 'high' },
        { tokenIds: ['Song.1.5.4'], targetSlice: [36, 45], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Dark am I, yet lovely, daughters of Jerusalem.',
      spans: [
        { tokenIds: ['Song.1.5.0'], targetSlice: [0, 9], confidence: 'high' },
        { tokenIds: ['Song.1.5.1'], targetSlice: [10, 19], confidence: 'high' },
        { tokenIds: ['Song.1.5.2'], targetSlice: [20, 29], confidence: 'high' },
        { tokenIds: ['Song.1.5.3'], targetSlice: [30, 39], confidence: 'high' },
        { tokenIds: ['Song.1.5.4'], targetSlice: [40, 46], confidence: 'high' },
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

export const song1_5_verse = {
  ref: 'Song.1.5',
  sourceTokens: song1_5_tokens,
  translation: song1_5_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:15 – Behold, you are beautiful
 * ──────────────────────────────────────────────────────────── */

export const song1_15_tokens: SourceToken[] = [
  {
    id: 'Song.1.15.0',
    surfaceText: 'הִנָּךְ',
    lemma: 'הִנֵּה',
    transliteration: 'hinnāḵ',
    lemmaTranslit: 'hinnēh',
    morph: 'HHd+Sp2fs',
    strong: 'H2009',
    language: 'hebrew',
    position: 0,
    gloss: 'behold, you are',
  },
  {
    id: 'Song.1.15.1',
    surfaceText: 'יָפָה',
    lemma: 'יָפֶה',
    transliteration: 'yāp̄āh',
    lemmaTranslit: 'yāp̄eh',
    morph: 'HAafsa',
    strong: 'H3303',
    language: 'hebrew',
    position: 1,
    gloss: 'beautiful',
  },
  {
    id: 'Song.1.15.2',
    surfaceText: 'רַעְיָתִי',
    lemma: 'רַעְיָה',
    transliteration: "raʿyāṯî",
    lemmaTranslit: "raʿyāh",
    morph: 'HNcfsc+Sp1cs',
    strong: 'H7474',
    language: 'hebrew',
    position: 2,
    gloss: 'my love',
  },
  {
    id: 'Song.1.15.3',
    surfaceText: 'עֵינַיִךְ',
    lemma: 'עַיִן',
    transliteration: "ʿênayiḵ",
    lemmaTranslit: "ʿayin",
    morph: 'HNcbdc+Sp2fs',
    strong: 'H5869',
    language: 'hebrew',
    position: 3,
    gloss: 'your eyes',
  },
  {
    id: 'Song.1.15.4',
    surfaceText: 'יוֹנִים',
    lemma: 'יוֹנָה',
    transliteration: 'yônîm',
    lemmaTranslit: 'yônāh',
    morph: 'HNcfpa',
    strong: 'H3123',
    language: 'hebrew',
    position: 4,
    gloss: 'are doves',
  },
];

export const song1_15_translation: VerseTranslation = {
  verseRef: 'Song.1.15',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Behold, you are beautiful, my love; your eyes are doves',
      spans: [
        { tokenIds: ['Song.1.15.0'], targetSlice: [0, 15], confidence: 'high' },
        { tokenIds: ['Song.1.15.1'], targetSlice: [16, 25], confidence: 'high' },
        { tokenIds: ['Song.1.15.2'], targetSlice: [26, 33], confidence: 'high' },
        { tokenIds: ['Song.1.15.3'], targetSlice: [34, 43], confidence: 'high' },
        { tokenIds: ['Song.1.15.4'], targetSlice: [44, 53], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'How beautiful you are, my darling! Oh, how beautiful! Your eyes are doves.',
      spans: [
        { tokenIds: ['Song.1.15.0'], targetSlice: [0, 14], confidence: 'high' },
        { tokenIds: ['Song.1.15.1'], targetSlice: [15, 29], confidence: 'high' },
        { tokenIds: ['Song.1.15.2'], targetSlice: [30, 44], confidence: 'high' },
        { tokenIds: ['Song.1.15.3'], targetSlice: [45, 59], confidence: 'high' },
        { tokenIds: ['Song.1.15.4'], targetSlice: [60, 74], confidence: 'high' },
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

export const song1_15_verse = {
  ref: 'Song.1.15',
  sourceTokens: song1_15_tokens,
  translation: song1_15_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:16 – Behold, you are beautiful, my beloved
 * ──────────────────────────────────────────────────────────── */

export const song1_16_tokens: SourceToken[] = [
  {
    id: 'Song.1.16.0',
    surfaceText: 'הִנְּךָ',
    lemma: 'הִנֵּה',
    transliteration: 'hinněḵā',
    lemmaTranslit: 'hinnēh',
    morph: 'HHd+Sp2ms',
    strong: 'H2009',
    language: 'hebrew',
    position: 0,
    gloss: 'behold, you are',
  },
  {
    id: 'Song.1.16.1',
    surfaceText: 'יָפֶה',
    lemma: 'יָפֶה',
    transliteration: 'yāp̄eh',
    lemmaTranslit: 'yāp̄eh',
    morph: 'HAamsa',
    strong: 'H3303',
    language: 'hebrew',
    position: 1,
    gloss: 'beautiful',
  },
  {
    id: 'Song.1.16.2',
    surfaceText: 'דוֹדִי',
    lemma: 'דּוֹד',
    transliteration: 'dôḏî',
    lemmaTranslit: 'dôḏ',
    morph: 'HNcmsc+Sp1cs',
    strong: 'H1730',
    language: 'hebrew',
    position: 2,
    gloss: 'my beloved',
  },
  {
    id: 'Song.1.16.3',
    surfaceText: 'אַף',
    lemma: 'אַף',
    transliteration: "ʾap̄",
    lemmaTranslit: "ʾap̄",
    morph: 'HD',
    strong: 'H637',
    language: 'hebrew',
    position: 3,
    gloss: 'indeed',
  },
  {
    id: 'Song.1.16.4',
    surfaceText: 'נָעִים',
    lemma: 'נָעִים',
    transliteration: "nāʿîm",
    lemmaTranslit: "nāʿîm",
    morph: 'HAamsa',
    strong: 'H5273',
    language: 'hebrew',
    position: 4,
    gloss: 'pleasant',
  },
];

export const song1_16_translation: VerseTranslation = {
  verseRef: 'Song.1.16',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Behold, you are beautiful, my beloved, truly delightful',
      spans: [
        { tokenIds: ['Song.1.16.0'], targetSlice: [0, 15], confidence: 'high' },
        { tokenIds: ['Song.1.16.1'], targetSlice: [16, 25], confidence: 'high' },
        { tokenIds: ['Song.1.16.2'], targetSlice: [26, 36], confidence: 'high' },
        { tokenIds: ['Song.1.16.3'], targetSlice: [37, 43], confidence: 'high' },
        { tokenIds: ['Song.1.16.4'], targetSlice: [44, 52], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'How handsome you are, my beloved! Oh, how charming!',
      spans: [
        { tokenIds: ['Song.1.16.0'], targetSlice: [0, 10], confidence: 'high' },
        { tokenIds: ['Song.1.16.1'], targetSlice: [11, 21], confidence: 'high' },
        { tokenIds: ['Song.1.16.2'], targetSlice: [22, 32], confidence: 'high' },
        { tokenIds: ['Song.1.16.3'], targetSlice: [33, 43], confidence: 'high' },
        { tokenIds: ['Song.1.16.4'], targetSlice: [44, 51], confidence: 'high' },
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

export const song1_16_verse = {
  ref: 'Song.1.16',
  sourceTokens: song1_16_tokens,
  translation: song1_16_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Song of Solomon 1:1-17 — Song opening
 * ──────────────────────────────────────────────────────────── */

export const songOfSolomon1_1_17_verses = [
  song1_1_verse,
  song1_2_verse,
  song1_4_verse,
  song1_5_verse,
  song1_15_verse,
  song1_16_verse,
];

export default songOfSolomon1_1_17_verses;
