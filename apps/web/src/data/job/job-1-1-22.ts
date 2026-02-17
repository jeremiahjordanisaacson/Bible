// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 1:1 – There was a man in the land of Uz
 * ──────────────────────────────────────────────────────────── */

export const job1_1_tokens: SourceToken[] = [
  {
    id: 'Job.1.1.0',
    surfaceText: 'אִישׁ',
    lemma: 'אִישׁ',
    transliteration: "ʾîš",
    lemmaTranslit: "ʾîš",
    morph: 'HNcmsa',
    strong: 'H376',
    language: 'hebrew',
    position: 0,
    gloss: 'a man',
  },
  {
    id: 'Job.1.1.1',
    surfaceText: 'הָיָה',
    lemma: 'הָיָה',
    transliteration: 'hāyāh',
    lemmaTranslit: 'hāyāh',
    morph: 'HVqp3ms',
    strong: 'H1961',
    language: 'hebrew',
    position: 1,
    gloss: 'was',
  },
  {
    id: 'Job.1.1.2',
    surfaceText: 'בְּאֶרֶץ',
    lemma: 'אֶרֶץ',
    transliteration: "běʾereṣ",
    lemmaTranslit: "ʾereṣ",
    morph: 'HR+Ncfsa',
    strong: 'H776',
    language: 'hebrew',
    position: 2,
    gloss: 'in the land of',
  },
  {
    id: 'Job.1.1.3',
    surfaceText: 'עוּץ',
    lemma: 'עוּץ',
    transliteration: "ʿûṣ",
    lemmaTranslit: "ʿûṣ",
    morph: 'HNp',
    strong: 'H5780',
    language: 'hebrew',
    position: 3,
    gloss: 'Uz',
  },
  {
    id: 'Job.1.1.4',
    surfaceText: 'שְׁמוֹ',
    lemma: 'שֵׁם',
    transliteration: 'šěmô',
    lemmaTranslit: 'šēm',
    morph: 'HNcmsc+Sp3ms',
    strong: 'H8034',
    language: 'hebrew',
    position: 4,
    gloss: 'his name',
  },
  {
    id: 'Job.1.1.5',
    surfaceText: 'אִיּוֹב',
    lemma: 'אִיּוֹב',
    transliteration: "ʾiyyôḇ",
    lemmaTranslit: "ʾiyyôḇ",
    morph: 'HNp',
    strong: 'H347',
    language: 'hebrew',
    position: 5,
    gloss: 'Job',
  },
];

export const job1_1_translation: VerseTranslation = {
  verseRef: 'Job.1.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'A man there was in the land of Uz; his name was Job',
      spans: [
        { tokenIds: ['Job.1.1.0'], targetSlice: [0, 5], confidence: 'high' },
        { tokenIds: ['Job.1.1.1'], targetSlice: [12, 15], confidence: 'high' },
        { tokenIds: ['Job.1.1.2'], targetSlice: [16, 31], confidence: 'high' },
        { tokenIds: ['Job.1.1.3'], targetSlice: [32, 34], confidence: 'high' },
        { tokenIds: ['Job.1.1.4'], targetSlice: [36, 44], confidence: 'high' },
        { tokenIds: ['Job.1.1.5'], targetSlice: [49, 52], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'There was a man in the land of Uz whose name was Job.',
      spans: [
        { tokenIds: ['Job.1.1.0', 'Job.1.1.1'], targetSlice: [0, 16], confidence: 'high' },
        { tokenIds: ['Job.1.1.2', 'Job.1.1.3'], targetSlice: [17, 34], confidence: 'high' },
        { tokenIds: ['Job.1.1.4', 'Job.1.1.5'], targetSlice: [35, 53], confidence: 'high' },
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

export const job1_1_verse = {
  ref: 'Job.1.1',
  sourceTokens: job1_1_tokens,
  translation: job1_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:6 – The sons of God came to present themselves
 * ──────────────────────────────────────────────────────────── */

export const job1_6_tokens: SourceToken[] = [
  {
    id: 'Job.1.6.0',
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
    id: 'Job.1.6.1',
    surfaceText: 'הַיּוֹם',
    lemma: 'יוֹם',
    transliteration: 'hayyôm',
    lemmaTranslit: 'yôm',
    morph: 'HTd+Ncmsa',
    strong: 'H3117',
    language: 'hebrew',
    position: 1,
    gloss: 'the day',
  },
  {
    id: 'Job.1.6.2',
    surfaceText: 'בְּנֵי',
    lemma: 'בֵּן',
    transliteration: 'běnê',
    lemmaTranslit: 'bēn',
    morph: 'HNcmpc',
    strong: 'H1121',
    language: 'hebrew',
    position: 2,
    gloss: 'sons of',
  },
  {
    id: 'Job.1.6.3',
    surfaceText: 'הָאֱלֹהִים',
    lemma: 'אֱלֹהִים',
    transliteration: "hāʾĕlōhîm",
    lemmaTranslit: "ʾĕlōhîm",
    morph: 'HTd+Ncmpa',
    strong: 'H430',
    language: 'hebrew',
    position: 3,
    gloss: 'God',
  },
  {
    id: 'Job.1.6.4',
    surfaceText: 'לְהִתְיַצֵּב',
    lemma: 'יָצַב',
    transliteration: 'lěhiṯyaṣṣēḇ',
    lemmaTranslit: 'yāṣaḇ',
    morph: 'HR+VtI',
    strong: 'H3320',
    language: 'hebrew',
    position: 4,
    gloss: 'to present themselves',
  },
];

export const job1_6_translation: VerseTranslation = {
  verseRef: 'Job.1.6',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And it was the day, and the sons of God came to present themselves before the LORD',
      spans: [
        { tokenIds: ['Job.1.6.0'], targetSlice: [0, 10], confidence: 'high' },
        { tokenIds: ['Job.1.6.1'], targetSlice: [11, 18], confidence: 'high' },
        { tokenIds: ['Job.1.6.2'], targetSlice: [28, 35], confidence: 'high' },
        { tokenIds: ['Job.1.6.3'], targetSlice: [36, 39], confidence: 'high' },
        { tokenIds: ['Job.1.6.4'], targetSlice: [48, 70], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'One day the sons of God came to present themselves before the LORD.',
      spans: [
        { tokenIds: ['Job.1.6.0', 'Job.1.6.1'], targetSlice: [0, 7], confidence: 'high' },
        { tokenIds: ['Job.1.6.2', 'Job.1.6.3'], targetSlice: [8, 25], confidence: 'high' },
        { tokenIds: ['Job.1.6.4'], targetSlice: [26, 65], confidence: 'high' },
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

export const job1_6_verse = {
  ref: 'Job.1.6',
  sourceTokens: job1_6_tokens,
  translation: job1_6_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:8 – Have you considered my servant Job?
 * ──────────────────────────────────────────────────────────── */

export const job1_8_tokens: SourceToken[] = [
  {
    id: 'Job.1.8.0',
    surfaceText: 'הֲשַׂמְתָּ',
    lemma: 'שִׂים',
    transliteration: 'hăśamtā',
    lemmaTranslit: 'śîm',
    morph: 'HIr+Vqp2ms',
    strong: 'H7760',
    language: 'hebrew',
    position: 0,
    gloss: 'have you set',
  },
  {
    id: 'Job.1.8.1',
    surfaceText: 'לִבְּךָ',
    lemma: 'לֵב',
    transliteration: 'libběḵā',
    lemmaTranslit: 'lēḇ',
    morph: 'HNcmsc+Sp2ms',
    strong: 'H3820',
    language: 'hebrew',
    position: 1,
    gloss: 'your heart',
  },
  {
    id: 'Job.1.8.2',
    surfaceText: 'עַל',
    lemma: 'עַל',
    transliteration: "ʿal",
    lemmaTranslit: "ʿal",
    morph: 'HR',
    strong: 'H5921',
    language: 'hebrew',
    position: 2,
    gloss: 'upon',
  },
  {
    id: 'Job.1.8.3',
    surfaceText: 'עַבְדִּי',
    lemma: 'עֶבֶד',
    transliteration: "ʿaḇdî",
    lemmaTranslit: "ʿeḇeḏ",
    morph: 'HNcmsc+Sp1cs',
    strong: 'H5650',
    language: 'hebrew',
    position: 3,
    gloss: 'my servant',
  },
  {
    id: 'Job.1.8.4',
    surfaceText: 'אִיּוֹב',
    lemma: 'אִיּוֹב',
    transliteration: "ʾiyyôḇ",
    lemmaTranslit: "ʾiyyôḇ",
    morph: 'HNp',
    strong: 'H347',
    language: 'hebrew',
    position: 4,
    gloss: 'Job',
  },
];

export const job1_8_translation: VerseTranslation = {
  verseRef: 'Job.1.8',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Have you set your heart upon my servant Job?',
      spans: [
        { tokenIds: ['Job.1.8.0'], targetSlice: [0, 12], confidence: 'high' },
        { tokenIds: ['Job.1.8.1'], targetSlice: [13, 23], confidence: 'high' },
        { tokenIds: ['Job.1.8.2'], targetSlice: [24, 28], confidence: 'high' },
        { tokenIds: ['Job.1.8.3'], targetSlice: [29, 39], confidence: 'high' },
        { tokenIds: ['Job.1.8.4'], targetSlice: [40, 43], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Have you considered my servant Job?',
      spans: [
        { tokenIds: ['Job.1.8.0', 'Job.1.8.1'], targetSlice: [0, 19], confidence: 'high' },
        { tokenIds: ['Job.1.8.2', 'Job.1.8.3'], targetSlice: [20, 30], confidence: 'high' },
        { tokenIds: ['Job.1.8.4'], targetSlice: [31, 34], confidence: 'high' },
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

export const job1_8_verse = {
  ref: 'Job.1.8',
  sourceTokens: job1_8_tokens,
  translation: job1_8_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:12 – All that he has is in your power
 * ──────────────────────────────────────────────────────────── */

export const job1_12_tokens: SourceToken[] = [
  {
    id: 'Job.1.12.0',
    surfaceText: 'כָּל',
    lemma: 'כֹּל',
    transliteration: 'kāl',
    lemmaTranslit: 'kōl',
    morph: 'HNcmsa',
    strong: 'H3605',
    language: 'hebrew',
    position: 0,
    gloss: 'all',
  },
  {
    id: 'Job.1.12.1',
    surfaceText: 'אֲשֶׁר',
    lemma: 'אֲשֶׁר',
    transliteration: "ʾăšer",
    lemmaTranslit: "ʾăšer",
    morph: 'HR',
    strong: 'H834',
    language: 'hebrew',
    position: 1,
    gloss: 'that',
  },
  {
    id: 'Job.1.12.2',
    surfaceText: 'לוֹ',
    lemma: 'לְ',
    transliteration: 'lô',
    lemmaTranslit: 'lě',
    morph: 'HR+Sp3ms',
    strong: 'H0',
    language: 'hebrew',
    position: 2,
    gloss: 'he has',
  },
  {
    id: 'Job.1.12.3',
    surfaceText: 'בְּיָדֶךָ',
    lemma: 'יָד',
    transliteration: 'běyāḏeḵā',
    lemmaTranslit: 'yāḏ',
    morph: 'HR+Ncfsc+Sp2ms',
    strong: 'H3027',
    language: 'hebrew',
    position: 3,
    gloss: 'in your hand',
  },
];

export const job1_12_translation: VerseTranslation = {
  verseRef: 'Job.1.12',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'All that he has is in your hand',
      spans: [
        { tokenIds: ['Job.1.12.0'], targetSlice: [0, 3], confidence: 'high' },
        { tokenIds: ['Job.1.12.1'], targetSlice: [4, 8], confidence: 'high' },
        { tokenIds: ['Job.1.12.2'], targetSlice: [9, 15], confidence: 'high' },
        { tokenIds: ['Job.1.12.3'], targetSlice: [19, 31], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Everything he has is in your power.',
      spans: [
        { tokenIds: ['Job.1.12.0', 'Job.1.12.1', 'Job.1.12.2'], targetSlice: [0, 21], confidence: 'high' },
        { tokenIds: ['Job.1.12.3'], targetSlice: [22, 34], confidence: 'high' },
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

export const job1_12_verse = {
  ref: 'Job.1.12',
  sourceTokens: job1_12_tokens,
  translation: job1_12_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:21 – The LORD gave and the LORD has taken away
 * ──────────────────────────────────────────────────────────── */

export const job1_21_tokens: SourceToken[] = [
  {
    id: 'Job.1.21.0',
    surfaceText: 'יְהוָה',
    lemma: 'יְהוָה',
    transliteration: 'yhwh',
    lemmaTranslit: 'yhwh',
    morph: 'HNp',
    strong: 'H3068',
    language: 'hebrew',
    position: 0,
    gloss: 'the LORD',
  },
  {
    id: 'Job.1.21.1',
    surfaceText: 'נָתַן',
    lemma: 'נָתַן',
    transliteration: 'nāṯan',
    lemmaTranslit: 'nāṯan',
    morph: 'HVqp3ms',
    strong: 'H5414',
    language: 'hebrew',
    position: 1,
    gloss: 'gave',
  },
  {
    id: 'Job.1.21.2',
    surfaceText: 'וַיהוָה',
    lemma: 'יְהוָה',
    transliteration: 'wayhwh',
    lemmaTranslit: 'yhwh',
    morph: 'HC+Np',
    strong: 'H3068',
    language: 'hebrew',
    position: 2,
    gloss: 'and the LORD',
  },
  {
    id: 'Job.1.21.3',
    surfaceText: 'לָקָח',
    lemma: 'לָקַח',
    transliteration: 'lāqāḥ',
    lemmaTranslit: 'lāqaḥ',
    morph: 'HVqp3ms',
    strong: 'H3947',
    language: 'hebrew',
    position: 3,
    gloss: 'has taken away',
  },
  {
    id: 'Job.1.21.4',
    surfaceText: 'שֵׁם',
    lemma: 'שֵׁם',
    transliteration: 'šēm',
    lemmaTranslit: 'šēm',
    morph: 'HNcmsc',
    strong: 'H8034',
    language: 'hebrew',
    position: 4,
    gloss: 'the name of',
  },
  {
    id: 'Job.1.21.5',
    surfaceText: 'מְבֹרָךְ',
    lemma: 'בָּרַךְ',
    transliteration: 'měḇōrāḵ',
    lemmaTranslit: 'bāraḵ',
    morph: 'HVPrmsa',
    strong: 'H1288',
    language: 'hebrew',
    position: 5,
    gloss: 'blessed',
  },
];

export const job1_21_translation: VerseTranslation = {
  verseRef: 'Job.1.21',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'The LORD gave and the LORD has taken away; blessed be the name of the LORD',
      spans: [
        { tokenIds: ['Job.1.21.0'], targetSlice: [0, 8], confidence: 'high' },
        { tokenIds: ['Job.1.21.1'], targetSlice: [9, 13], confidence: 'high' },
        { tokenIds: ['Job.1.21.2'], targetSlice: [18, 26], confidence: 'high' },
        { tokenIds: ['Job.1.21.3'], targetSlice: [27, 41], confidence: 'high' },
        { tokenIds: ['Job.1.21.4'], targetSlice: [56, 68], confidence: 'high' },
        { tokenIds: ['Job.1.21.5'], targetSlice: [43, 50], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'The LORD gave and the LORD has taken away; blessed be the name of the LORD.',
      spans: [
        { tokenIds: ['Job.1.21.0', 'Job.1.21.1'], targetSlice: [0, 13], confidence: 'high' },
        { tokenIds: ['Job.1.21.2', 'Job.1.21.3'], targetSlice: [14, 41], confidence: 'high' },
        { tokenIds: ['Job.1.21.4', 'Job.1.21.5'], targetSlice: [43, 74], confidence: 'high' },
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

export const job1_21_verse = {
  ref: 'Job.1.21',
  sourceTokens: job1_21_tokens,
  translation: job1_21_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:22 – In all this Job did not sin
 * ──────────────────────────────────────────────────────────── */

export const job1_22_tokens: SourceToken[] = [
  {
    id: 'Job.1.22.0',
    surfaceText: 'בְּכָל',
    lemma: 'כֹּל',
    transliteration: 'běḵāl',
    lemmaTranslit: 'kōl',
    morph: 'HR+Ncmsa',
    strong: 'H3605',
    language: 'hebrew',
    position: 0,
    gloss: 'in all',
  },
  {
    id: 'Job.1.22.1',
    surfaceText: 'זֹאת',
    lemma: 'זֹאת',
    transliteration: "zōʾṯ",
    lemmaTranslit: "zōʾṯ",
    morph: 'HPdfs',
    strong: 'H2063',
    language: 'hebrew',
    position: 1,
    gloss: 'this',
  },
  {
    id: 'Job.1.22.2',
    surfaceText: 'לֹא',
    lemma: 'לֹא',
    transliteration: "lōʾ",
    lemmaTranslit: "lōʾ",
    morph: 'HTn',
    strong: 'H3808',
    language: 'hebrew',
    position: 2,
    gloss: 'not',
  },
  {
    id: 'Job.1.22.3',
    surfaceText: 'חָטָא',
    lemma: 'חָטָא',
    transliteration: "ḥāṭāʾ",
    lemmaTranslit: "ḥāṭāʾ",
    morph: 'HVqp3ms',
    strong: 'H2398',
    language: 'hebrew',
    position: 3,
    gloss: 'did sin',
  },
  {
    id: 'Job.1.22.4',
    surfaceText: 'אִיּוֹב',
    lemma: 'אִיּוֹב',
    transliteration: "ʾiyyôḇ",
    lemmaTranslit: "ʾiyyôḇ",
    morph: 'HNp',
    strong: 'H347',
    language: 'hebrew',
    position: 4,
    gloss: 'Job',
  },
];

export const job1_22_translation: VerseTranslation = {
  verseRef: 'Job.1.22',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'In all this Job did not sin nor charge God with wrongdoing',
      spans: [
        { tokenIds: ['Job.1.22.0'], targetSlice: [0, 6], confidence: 'high' },
        { tokenIds: ['Job.1.22.1'], targetSlice: [7, 11], confidence: 'high' },
        { tokenIds: ['Job.1.22.2'], targetSlice: [20, 23], confidence: 'high' },
        { tokenIds: ['Job.1.22.3'], targetSlice: [24, 27], confidence: 'high' },
        { tokenIds: ['Job.1.22.4'], targetSlice: [12, 15], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'In all this, Job did not sin or charge God with wrongdoing.',
      spans: [
        { tokenIds: ['Job.1.22.0', 'Job.1.22.1'], targetSlice: [0, 11], confidence: 'high' },
        { tokenIds: ['Job.1.22.4'], targetSlice: [13, 16], confidence: 'high' },
        { tokenIds: ['Job.1.22.2', 'Job.1.22.3'], targetSlice: [17, 27], confidence: 'high' },
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

export const job1_22_verse = {
  ref: 'Job.1.22',
  sourceTokens: job1_22_tokens,
  translation: job1_22_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Job 1:1-22 (Job's testing)
 * ──────────────────────────────────────────────────────────── */

export const job1_1_22_verses = [
  job1_1_verse,
  job1_6_verse,
  job1_8_verse,
  job1_12_verse,
  job1_21_verse,
  job1_22_verse,
];

export default job1_1_22_verses;
