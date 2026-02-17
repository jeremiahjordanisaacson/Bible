// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 103:1 – Bless the LORD, O my soul
 * ──────────────────────────────────────────────────────────── */

export const psalm103_1_tokens: SourceToken[] = [
  {
    id: 'Ps.103.1.0',
    surfaceText: 'בָּרְכִי',
    lemma: 'בָּרַךְ',
    transliteration: 'bārěḵî',
    lemmaTranslit: 'bāraḵ',
    morph: 'HVpv2fs',
    strong: 'H1288',
    language: 'hebrew',
    position: 0,
    gloss: 'bless',
  },
  {
    id: 'Ps.103.1.1',
    surfaceText: 'נַפְשִׁי',
    lemma: 'נֶפֶשׁ',
    transliteration: 'nap̄šî',
    lemmaTranslit: 'nep̄eš',
    morph: 'HNcfsc+Sp1cs',
    strong: 'H5315',
    language: 'hebrew',
    position: 1,
    gloss: 'my soul',
  },
  {
    id: 'Ps.103.1.2',
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
    id: 'Ps.103.1.3',
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
    id: 'Ps.103.1.4',
    surfaceText: 'וְכָל',
    lemma: 'כֹּל',
    transliteration: 'wěḵāl',
    lemmaTranslit: 'kōl',
    morph: 'HC+Ncmsc',
    strong: 'H3605',
    language: 'hebrew',
    position: 4,
    gloss: 'and all',
  },
  {
    id: 'Ps.103.1.5',
    surfaceText: 'קְרָבַי',
    lemma: 'קֶרֶב',
    transliteration: 'qěrāḇay',
    lemmaTranslit: 'qereḇ',
    morph: 'HNcmsc+Sp1cs',
    strong: 'H7130',
    language: 'hebrew',
    position: 5,
    gloss: 'within me',
  },
];

export const psalm103_1_translation: VerseTranslation = {
  verseRef: 'Ps.103.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Bless the LORD, O my soul, and all that is within me, bless his holy name',
      spans: [
        { tokenIds: ['Ps.103.1.0'], targetSlice: [0, 5], confidence: 'high' },
        { tokenIds: ['Ps.103.1.1'], targetSlice: [6, 13], confidence: 'high' },
        { tokenIds: ['Ps.103.1.2'], targetSlice: [14, 27], confidence: 'high' },
        { tokenIds: ['Ps.103.1.3'], targetSlice: [28, 36], confidence: 'high' },
        { tokenIds: ['Ps.103.1.4'], targetSlice: [37, 44], confidence: 'high' },
        { tokenIds: ['Ps.103.1.5'], targetSlice: [45, 54], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Praise the LORD, my soul; all my inmost being, praise his holy name.',
      spans: [
        { tokenIds: ['Ps.103.1.0'], targetSlice: [0, 11], confidence: 'high' },
        { tokenIds: ['Ps.103.1.1'], targetSlice: [12, 23], confidence: 'high' },
        { tokenIds: ['Ps.103.1.2'], targetSlice: [24, 35], confidence: 'high' },
        { tokenIds: ['Ps.103.1.3'], targetSlice: [36, 47], confidence: 'high' },
        { tokenIds: ['Ps.103.1.4'], targetSlice: [48, 59], confidence: 'high' },
        { tokenIds: ['Ps.103.1.5'], targetSlice: [60, 68], confidence: 'high' },
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

export const psalm103_1_verse = {
  ref: 'Ps.103.1',
  sourceTokens: psalm103_1_tokens,
  translation: psalm103_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 103:3 – Who forgives all your iniquities
 * ──────────────────────────────────────────────────────────── */

export const psalm103_3_tokens: SourceToken[] = [
  {
    id: 'Ps.103.3.0',
    surfaceText: 'הַסֹּלֵחַ',
    lemma: 'סָלַח',
    transliteration: 'hassōlēaḥ',
    lemmaTranslit: 'sālaḥ',
    morph: 'HTd+VqPtmsa',
    strong: 'H5545',
    language: 'hebrew',
    position: 0,
    gloss: 'who forgives',
  },
  {
    id: 'Ps.103.3.1',
    surfaceText: 'לְכָל',
    lemma: 'כֹּל',
    transliteration: 'lěḵāl',
    lemmaTranslit: 'kōl',
    morph: 'HR+Ncmsc',
    strong: 'H3605',
    language: 'hebrew',
    position: 1,
    gloss: 'all',
  },
  {
    id: 'Ps.103.3.2',
    surfaceText: 'עֲוֹנֵכִי',
    lemma: 'עָוֹן',
    transliteration: "ʿăwōnēḵî",
    lemmaTranslit: "ʿāwōn",
    morph: 'HNcmpc+Sp2fs',
    strong: 'H5771',
    language: 'hebrew',
    position: 2,
    gloss: 'your iniquities',
  },
  {
    id: 'Ps.103.3.3',
    surfaceText: 'הָרֹפֵא',
    lemma: 'רָפָא',
    transliteration: "hārōp̄ēʾ",
    lemmaTranslit: "rāp̄āʾ",
    morph: 'HTd+VqPtmsa',
    strong: 'H7495',
    language: 'hebrew',
    position: 3,
    gloss: 'who heals',
  },
  {
    id: 'Ps.103.3.4',
    surfaceText: 'תַּחֲלוּאָיְכִי',
    lemma: 'תַּחֲלוּא',
    transliteration: "taḥălûʾāyěḵî",
    lemmaTranslit: "taḥălûʾ",
    morph: 'HNcmpc+Sp2fs',
    strong: 'H8463',
    language: 'hebrew',
    position: 4,
    gloss: 'your diseases',
  },
];

export const psalm103_3_translation: VerseTranslation = {
  verseRef: 'Ps.103.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Who forgives all your iniquities, who heals all your diseases',
      spans: [
        { tokenIds: ['Ps.103.3.0'], targetSlice: [0, 12], confidence: 'high' },
        { tokenIds: ['Ps.103.3.1'], targetSlice: [13, 16], confidence: 'high' },
        { tokenIds: ['Ps.103.3.2'], targetSlice: [17, 32], confidence: 'high' },
        { tokenIds: ['Ps.103.3.3'], targetSlice: [33, 42], confidence: 'high' },
        { tokenIds: ['Ps.103.3.4'], targetSlice: [43, 56], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Who forgives all your sins and heals all your diseases.',
      spans: [
        { tokenIds: ['Ps.103.3.0'], targetSlice: [0, 11], confidence: 'high' },
        { tokenIds: ['Ps.103.3.1'], targetSlice: [12, 23], confidence: 'high' },
        { tokenIds: ['Ps.103.3.2'], targetSlice: [24, 35], confidence: 'high' },
        { tokenIds: ['Ps.103.3.3'], targetSlice: [36, 47], confidence: 'high' },
        { tokenIds: ['Ps.103.3.4'], targetSlice: [48, 55], confidence: 'high' },
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

export const psalm103_3_verse = {
  ref: 'Ps.103.3',
  sourceTokens: psalm103_3_tokens,
  translation: psalm103_3_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 103:8 – The LORD is merciful and gracious
 * ──────────────────────────────────────────────────────────── */

export const psalm103_8_tokens: SourceToken[] = [
  {
    id: 'Ps.103.8.0',
    surfaceText: 'רַחוּם',
    lemma: 'רַחוּם',
    transliteration: 'raḥûm',
    lemmaTranslit: 'raḥûm',
    morph: 'HAamsa',
    strong: 'H7349',
    language: 'hebrew',
    position: 0,
    gloss: 'merciful',
  },
  {
    id: 'Ps.103.8.1',
    surfaceText: 'וְחַנּוּן',
    lemma: 'חַנּוּן',
    transliteration: 'wěḥannûn',
    lemmaTranslit: 'ḥannûn',
    morph: 'HC+Aamsa',
    strong: 'H2587',
    language: 'hebrew',
    position: 1,
    gloss: 'and gracious',
  },
  {
    id: 'Ps.103.8.2',
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
    id: 'Ps.103.8.3',
    surfaceText: 'אֶרֶךְ',
    lemma: 'אָרֵךְ',
    transliteration: "ʾereḵ",
    lemmaTranslit: "ʾārēḵ",
    morph: 'HAamsa',
    strong: 'H750',
    language: 'hebrew',
    position: 3,
    gloss: 'slow',
  },
  {
    id: 'Ps.103.8.4',
    surfaceText: 'אַפַּיִם',
    lemma: 'אַף',
    transliteration: "ʾappayim",
    lemmaTranslit: "ʾap̄",
    morph: 'HNcmda',
    strong: 'H639',
    language: 'hebrew',
    position: 4,
    gloss: 'to anger',
  },
];

export const psalm103_8_translation: VerseTranslation = {
  verseRef: 'Ps.103.8',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'The LORD is merciful and gracious, slow to anger and abounding in steadfast love',
      spans: [
        { tokenIds: ['Ps.103.8.0'], targetSlice: [0, 8], confidence: 'high' },
        { tokenIds: ['Ps.103.8.1'], targetSlice: [9, 21], confidence: 'high' },
        { tokenIds: ['Ps.103.8.2'], targetSlice: [22, 30], confidence: 'high' },
        { tokenIds: ['Ps.103.8.3'], targetSlice: [31, 35], confidence: 'high' },
        { tokenIds: ['Ps.103.8.4'], targetSlice: [36, 44], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'The LORD is compassionate and gracious, slow to anger, abounding in love.',
      spans: [
        { tokenIds: ['Ps.103.8.0'], targetSlice: [0, 14], confidence: 'high' },
        { tokenIds: ['Ps.103.8.1'], targetSlice: [15, 29], confidence: 'high' },
        { tokenIds: ['Ps.103.8.2'], targetSlice: [30, 44], confidence: 'high' },
        { tokenIds: ['Ps.103.8.3'], targetSlice: [45, 59], confidence: 'high' },
        { tokenIds: ['Ps.103.8.4'], targetSlice: [60, 73], confidence: 'high' },
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

export const psalm103_8_verse = {
  ref: 'Ps.103.8',
  sourceTokens: psalm103_8_tokens,
  translation: psalm103_8_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 103:11 – As high as the heavens are above the earth
 * ──────────────────────────────────────────────────────────── */

export const psalm103_11_tokens: SourceToken[] = [
  {
    id: 'Ps.103.11.0',
    surfaceText: 'כִּגְבֹהַּ',
    lemma: 'גָּבַהּ',
    transliteration: 'kigḇōahh',
    lemmaTranslit: 'gāḇahh',
    morph: 'HR+VqIa',
    strong: 'H1361',
    language: 'hebrew',
    position: 0,
    gloss: 'as the height of',
  },
  {
    id: 'Ps.103.11.1',
    surfaceText: 'שָׁמַיִם',
    lemma: 'שָׁמַיִם',
    transliteration: 'šāmayim',
    lemmaTranslit: 'šāmayim',
    morph: 'HNcmpa',
    strong: 'H8064',
    language: 'hebrew',
    position: 1,
    gloss: 'the heavens',
  },
  {
    id: 'Ps.103.11.2',
    surfaceText: 'עַל',
    lemma: 'עַל',
    transliteration: "ʿal",
    lemmaTranslit: "ʿal",
    morph: 'HR',
    strong: 'H5921',
    language: 'hebrew',
    position: 2,
    gloss: 'above',
  },
  {
    id: 'Ps.103.11.3',
    surfaceText: 'הָאָרֶץ',
    lemma: 'אֶרֶץ',
    transliteration: "hāʾāreṣ",
    lemmaTranslit: "ʾereṣ",
    morph: 'HTd+Ncfsa',
    strong: 'H776',
    language: 'hebrew',
    position: 3,
    gloss: 'the earth',
  },
  {
    id: 'Ps.103.11.4',
    surfaceText: 'גָּבַר',
    lemma: 'גָּבַר',
    transliteration: 'gāḇar',
    lemmaTranslit: 'gāḇar',
    morph: 'HVqp3ms',
    strong: 'H1396',
    language: 'hebrew',
    position: 4,
    gloss: 'is great',
  },
  {
    id: 'Ps.103.11.5',
    surfaceText: 'חַסְדּוֹ',
    lemma: 'חֶסֶד',
    transliteration: 'ḥasdô',
    lemmaTranslit: 'ḥeseḏ',
    morph: 'HNcmsc+Sp3ms',
    strong: 'H2617',
    language: 'hebrew',
    position: 5,
    gloss: 'his lovingkindness',
  },
];

export const psalm103_11_translation: VerseTranslation = {
  verseRef: 'Ps.103.11',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'As high as the heavens are above the earth, so great is his lovingkindness toward those who fear him',
      spans: [
        { tokenIds: ['Ps.103.11.0'], targetSlice: [0, 16], confidence: 'high' },
        { tokenIds: ['Ps.103.11.1'], targetSlice: [17, 28], confidence: 'high' },
        { tokenIds: ['Ps.103.11.2'], targetSlice: [29, 34], confidence: 'high' },
        { tokenIds: ['Ps.103.11.3'], targetSlice: [35, 44], confidence: 'high' },
        { tokenIds: ['Ps.103.11.4'], targetSlice: [45, 53], confidence: 'high' },
        { tokenIds: ['Ps.103.11.5'], targetSlice: [54, 72], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'For as high as the heavens are above the earth, so great is his love for those who fear him.',
      spans: [
        { tokenIds: ['Ps.103.11.0'], targetSlice: [0, 15], confidence: 'high' },
        { tokenIds: ['Ps.103.11.1'], targetSlice: [16, 31], confidence: 'high' },
        { tokenIds: ['Ps.103.11.2'], targetSlice: [32, 47], confidence: 'high' },
        { tokenIds: ['Ps.103.11.3'], targetSlice: [48, 63], confidence: 'high' },
        { tokenIds: ['Ps.103.11.4'], targetSlice: [64, 79], confidence: 'high' },
        { tokenIds: ['Ps.103.11.5'], targetSlice: [80, 92], confidence: 'high' },
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

export const psalm103_11_verse = {
  ref: 'Ps.103.11',
  sourceTokens: psalm103_11_tokens,
  translation: psalm103_11_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 103:12 – As far as the east is from the west
 * ──────────────────────────────────────────────────────────── */

export const psalm103_12_tokens: SourceToken[] = [
  {
    id: 'Ps.103.12.0',
    surfaceText: 'כִּרְחֹק',
    lemma: 'רָחַק',
    transliteration: 'kirḥōq',
    lemmaTranslit: 'rāḥaq',
    morph: 'HR+VqIa',
    strong: 'H7368',
    language: 'hebrew',
    position: 0,
    gloss: 'as far as',
  },
  {
    id: 'Ps.103.12.1',
    surfaceText: 'מִזְרָח',
    lemma: 'מִזְרָח',
    transliteration: 'mizrāḥ',
    lemmaTranslit: 'mizrāḥ',
    morph: 'HNcmsa',
    strong: 'H4217',
    language: 'hebrew',
    position: 1,
    gloss: 'the east',
  },
  {
    id: 'Ps.103.12.2',
    surfaceText: 'מִמַּעֲרָב',
    lemma: 'מַעֲרָב',
    transliteration: "mimmaʿărāḇ",
    lemmaTranslit: "maʿărāḇ",
    morph: 'HR+Ncmsa',
    strong: 'H4628',
    language: 'hebrew',
    position: 2,
    gloss: 'from the west',
  },
  {
    id: 'Ps.103.12.3',
    surfaceText: 'הִרְחִיק',
    lemma: 'רָחַק',
    transliteration: 'hirḥîq',
    lemmaTranslit: 'rāḥaq',
    morph: 'HVhp3ms',
    strong: 'H7368',
    language: 'hebrew',
    position: 3,
    gloss: 'he has removed',
  },
  {
    id: 'Ps.103.12.4',
    surfaceText: 'מִמֶּנּוּ',
    lemma: 'מִן',
    transliteration: 'mimmennû',
    lemmaTranslit: 'min',
    morph: 'HR+Sp1cp',
    strong: 'H4480',
    language: 'hebrew',
    position: 4,
    gloss: 'from us',
  },
  {
    id: 'Ps.103.12.5',
    surfaceText: 'פְּשָׁעֵינוּ',
    lemma: 'פֶּשַׁע',
    transliteration: "pěšāʿênû",
    lemmaTranslit: "pešaʿ",
    morph: 'HNcmpc+Sp1cp',
    strong: 'H6588',
    language: 'hebrew',
    position: 5,
    gloss: 'our transgressions',
  },
];

export const psalm103_12_translation: VerseTranslation = {
  verseRef: 'Ps.103.12',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'As far as the east is from the west, so far has he removed our transgressions from us',
      spans: [
        { tokenIds: ['Ps.103.12.0'], targetSlice: [0, 9], confidence: 'high' },
        { tokenIds: ['Ps.103.12.1'], targetSlice: [10, 18], confidence: 'high' },
        { tokenIds: ['Ps.103.12.2'], targetSlice: [19, 32], confidence: 'high' },
        { tokenIds: ['Ps.103.12.3'], targetSlice: [33, 47], confidence: 'high' },
        { tokenIds: ['Ps.103.12.4'], targetSlice: [48, 55], confidence: 'high' },
        { tokenIds: ['Ps.103.12.5'], targetSlice: [56, 74], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'As far as the east is from the west, so far has he removed our transgressions from us.',
      spans: [
        { tokenIds: ['Ps.103.12.0'], targetSlice: [0, 14], confidence: 'high' },
        { tokenIds: ['Ps.103.12.1'], targetSlice: [15, 29], confidence: 'high' },
        { tokenIds: ['Ps.103.12.2'], targetSlice: [30, 44], confidence: 'high' },
        { tokenIds: ['Ps.103.12.3'], targetSlice: [45, 59], confidence: 'high' },
        { tokenIds: ['Ps.103.12.4'], targetSlice: [60, 74], confidence: 'high' },
        { tokenIds: ['Ps.103.12.5'], targetSlice: [75, 86], confidence: 'high' },
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

export const psalm103_12_verse = {
  ref: 'Ps.103.12',
  sourceTokens: psalm103_12_tokens,
  translation: psalm103_12_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 103:22 – Bless the LORD, all his works
 * ──────────────────────────────────────────────────────────── */

export const psalm103_22_tokens: SourceToken[] = [
  {
    id: 'Ps.103.22.0',
    surfaceText: 'בָּרְכוּ',
    lemma: 'בָּרַךְ',
    transliteration: 'bārěḵû',
    lemmaTranslit: 'bāraḵ',
    morph: 'HVpv2mp',
    strong: 'H1288',
    language: 'hebrew',
    position: 0,
    gloss: 'bless',
  },
  {
    id: 'Ps.103.22.1',
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
    id: 'Ps.103.22.2',
    surfaceText: 'כָּל',
    lemma: 'כֹּל',
    transliteration: 'kāl',
    lemmaTranslit: 'kōl',
    morph: 'HNcmsc',
    strong: 'H3605',
    language: 'hebrew',
    position: 2,
    gloss: 'all',
  },
  {
    id: 'Ps.103.22.3',
    surfaceText: 'מַעֲשָׂיו',
    lemma: 'מַעֲשֶׂה',
    transliteration: "maʿăśāyw",
    lemmaTranslit: "maʿăśeh",
    morph: 'HNcmpc+Sp3ms',
    strong: 'H4639',
    language: 'hebrew',
    position: 3,
    gloss: 'his works',
  },
  {
    id: 'Ps.103.22.4',
    surfaceText: 'בָּרְכִי',
    lemma: 'בָּרַךְ',
    transliteration: 'bārěḵî',
    lemmaTranslit: 'bāraḵ',
    morph: 'HVpv2fs',
    strong: 'H1288',
    language: 'hebrew',
    position: 4,
    gloss: 'bless',
  },
  {
    id: 'Ps.103.22.5',
    surfaceText: 'נַפְשִׁי',
    lemma: 'נֶפֶשׁ',
    transliteration: 'nap̄šî',
    lemmaTranslit: 'nep̄eš',
    morph: 'HNcfsc+Sp1cs',
    strong: 'H5315',
    language: 'hebrew',
    position: 5,
    gloss: 'my soul',
  },
];

export const psalm103_22_translation: VerseTranslation = {
  verseRef: 'Ps.103.22',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Bless the LORD, all his works, in all places of his dominion; bless the LORD, O my soul',
      spans: [
        { tokenIds: ['Ps.103.22.0'], targetSlice: [0, 5], confidence: 'high' },
        { tokenIds: ['Ps.103.22.1'], targetSlice: [6, 14], confidence: 'high' },
        { tokenIds: ['Ps.103.22.2'], targetSlice: [15, 18], confidence: 'high' },
        { tokenIds: ['Ps.103.22.3'], targetSlice: [19, 28], confidence: 'high' },
        { tokenIds: ['Ps.103.22.4'], targetSlice: [29, 34], confidence: 'high' },
        { tokenIds: ['Ps.103.22.5'], targetSlice: [35, 42], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Praise the LORD, all his works everywhere in his dominion. Praise the LORD, my soul.',
      spans: [
        { tokenIds: ['Ps.103.22.0'], targetSlice: [0, 14], confidence: 'high' },
        { tokenIds: ['Ps.103.22.1'], targetSlice: [15, 29], confidence: 'high' },
        { tokenIds: ['Ps.103.22.2'], targetSlice: [30, 44], confidence: 'high' },
        { tokenIds: ['Ps.103.22.3'], targetSlice: [45, 59], confidence: 'high' },
        { tokenIds: ['Ps.103.22.4'], targetSlice: [60, 74], confidence: 'high' },
        { tokenIds: ['Ps.103.22.5'], targetSlice: [75, 84], confidence: 'high' },
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

export const psalm103_22_verse = {
  ref: 'Ps.103.22',
  sourceTokens: psalm103_22_tokens,
  translation: psalm103_22_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Psalm 103:1-22 — Bless the LORD
 * ──────────────────────────────────────────────────────────── */

export const psalm103_1_22_verses = [
  psalm103_1_verse,
  psalm103_3_verse,
  psalm103_8_verse,
  psalm103_11_verse,
  psalm103_12_verse,
  psalm103_22_verse,
];

export default psalm103_1_22_verses;
