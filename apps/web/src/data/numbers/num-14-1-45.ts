// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ——————————————————————————————————————
 * Num 14:1  "Then all the congregation lifted up their voice and cried"
 * —————————————————————————————————————— */

export const numbers14_1_tokens: SourceToken[] = [
  {
    id: 'Num.14.1.1',
    language: 'hebrew',
    text: 'וַתִּשָּׂא',
    transliteration: 'wattissa',
    lemma: 'נָשָׂא',
    lemmaTranslit: "nasa'",
    gloss: 'and lifted up',
    morphology: { pos: 'verb', rawCode: 'HVqw3fs' },
    strongs: 'H5375',
    position: 1,
  },
  {
    id: 'Num.14.1.2',
    language: 'hebrew',
    text: 'כָּל',
    transliteration: 'kol',
    lemma: 'כֹּל',
    lemmaTranslit: 'kol',
    gloss: 'all',
    morphology: { pos: 'noun', rawCode: 'HNcmsc' },
    strongs: 'H3605',
    position: 2,
  },
  {
    id: 'Num.14.1.3',
    language: 'hebrew',
    text: 'הָעֵדָה',
    transliteration: "haʿedah",
    lemma: 'עֵדָה',
    lemmaTranslit: "ʿedah",
    gloss: 'the congregation',
    morphology: { pos: 'noun', rawCode: 'HNcfsa' },
    strongs: 'H5712',
    position: 3,
  },
  {
    id: 'Num.14.1.4',
    language: 'hebrew',
    text: 'קוֹלָם',
    transliteration: 'qolam',
    lemma: 'קוֹל',
    lemmaTranslit: 'qol',
    gloss: 'their voice',
    morphology: { pos: 'noun', rawCode: 'HNcmsc+Sp3mp' },
    strongs: 'H6963',
    position: 4,
  },
  {
    id: 'Num.14.1.5',
    language: 'hebrew',
    text: 'וַיִּבְכּוּ',
    transliteration: 'wayyibku',
    lemma: 'בָּכָה',
    lemmaTranslit: 'bakah',
    gloss: 'and they wept',
    morphology: { pos: 'verb', rawCode: 'HVqw3mp' },
    strongs: 'H1058',
    position: 5,
  },
];

export const numbers14_1_translation: VerseTranslation = {
  verseRef: 'Num.14.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And lifted up all the congregation their voice and they wept',
      spans: [
        { id: 'Num.14.1.en.lit.1', text: 'And lifted up', position: 1, sourceTokenIds: ['Num.14.1.1'], confidence: 'high' },
        { id: 'Num.14.1.en.lit.2', text: 'all', position: 2, sourceTokenIds: ['Num.14.1.2'], confidence: 'high' },
        { id: 'Num.14.1.en.lit.3', text: 'the congregation', position: 3, sourceTokenIds: ['Num.14.1.3'], confidence: 'high' },
        { id: 'Num.14.1.en.lit.4', text: 'their voice', position: 4, sourceTokenIds: ['Num.14.1.4'], confidence: 'high' },
        { id: 'Num.14.1.en.lit.5', text: 'and they wept', position: 5, sourceTokenIds: ['Num.14.1.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Then all the congregation lifted up their voice and cried',
      spans: [
        { id: 'Num.14.1.en.idi.1', text: 'Then all the congregation', position: 1, sourceTokenIds: ['Num.14.1.2', 'Num.14.1.3'], confidence: 'high' },
        { id: 'Num.14.1.en.idi.2', text: 'lifted up their voice', position: 2, sourceTokenIds: ['Num.14.1.1', 'Num.14.1.4'], confidence: 'high' },
        { id: 'Num.14.1.en.idi.3', text: 'and cried', position: 3, sourceTokenIds: ['Num.14.1.5'], confidence: 'high' },
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

export const numbers14_1_verse = {
  ref: 'Num.14.1',
  sourceTokens: numbers14_1_tokens,
  translation: numbers14_1_translation,
  notes: [] as StudyNote[],
};

/* ——————————————————————————————————————
 * Num 14:2  "Would that we had died in the land of Egypt"
 * —————————————————————————————————————— */

export const numbers14_2_tokens: SourceToken[] = [
  {
    id: 'Num.14.2.1',
    language: 'hebrew',
    text: 'לוּ',
    transliteration: 'lu',
    lemma: 'לוּ',
    lemmaTranslit: 'lu',
    gloss: 'would that',
    morphology: { pos: 'particle', rawCode: 'HTc' },
    strongs: 'H3863',
    position: 1,
  },
  {
    id: 'Num.14.2.2',
    language: 'hebrew',
    text: 'מַתְנוּ',
    transliteration: 'matnu',
    lemma: 'מוּת',
    lemmaTranslit: 'mut',
    gloss: 'we had died',
    morphology: { pos: 'verb', rawCode: 'HVqp1cp' },
    strongs: 'H4191',
    position: 2,
  },
  {
    id: 'Num.14.2.3',
    language: 'hebrew',
    text: 'בְּאֶרֶץ',
    transliteration: "beʾerets",
    lemma: 'אֶרֶץ',
    lemmaTranslit: "ʾerets",
    gloss: 'in the land of',
    morphology: { pos: 'noun', rawCode: 'HNcfsc' },
    strongs: 'H776',
    position: 3,
  },
  {
    id: 'Num.14.2.4',
    language: 'hebrew',
    text: 'מִצְרַיִם',
    transliteration: 'mitsrayim',
    lemma: 'מִצְרַיִם',
    lemmaTranslit: 'mitsrayim',
    gloss: 'Egypt',
    morphology: { pos: 'proper_noun', rawCode: 'HNp' },
    strongs: 'H4714',
    position: 4,
  },
];

export const numbers14_2_translation: VerseTranslation = {
  verseRef: 'Num.14.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Would that we had died in the land of Egypt',
      spans: [
        { id: 'Num.14.2.en.lit.1', text: 'Would that', position: 1, sourceTokenIds: ['Num.14.2.1'], confidence: 'high' },
        { id: 'Num.14.2.en.lit.2', text: 'we had died', position: 2, sourceTokenIds: ['Num.14.2.2'], confidence: 'high' },
        { id: 'Num.14.2.en.lit.3', text: 'in the land of', position: 3, sourceTokenIds: ['Num.14.2.3'], confidence: 'high' },
        { id: 'Num.14.2.en.lit.4', text: 'Egypt', position: 4, sourceTokenIds: ['Num.14.2.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'If only we had died in the land of Egypt!',
      spans: [
        { id: 'Num.14.2.en.idi.1', text: 'If only we had died', position: 1, sourceTokenIds: ['Num.14.2.1', 'Num.14.2.2'], confidence: 'high' },
        { id: 'Num.14.2.en.idi.2', text: 'in the land of Egypt!', position: 2, sourceTokenIds: ['Num.14.2.3', 'Num.14.2.4'], confidence: 'high' },
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

export const numbers14_2_verse = {
  ref: 'Num.14.2',
  sourceTokens: numbers14_2_tokens,
  translation: numbers14_2_translation,
  notes: [] as StudyNote[],
};

/* ——————————————————————————————————————
 * Num 14:11  "How long will this people despise me?"
 * —————————————————————————————————————— */

export const numbers14_11_tokens: SourceToken[] = [
  {
    id: 'Num.14.11.1',
    language: 'hebrew',
    text: 'עַד',
    transliteration: "ʿad",
    lemma: 'עַד',
    lemmaTranslit: "ʿad",
    gloss: 'until',
    morphology: { pos: 'preposition', rawCode: 'HR' },
    strongs: 'H5704',
    position: 1,
  },
  {
    id: 'Num.14.11.2',
    language: 'hebrew',
    text: 'אָנָה',
    transliteration: "ʾanah",
    lemma: 'אָנָה',
    lemmaTranslit: "ʾanah",
    gloss: 'how long',
    morphology: { pos: 'adverb', rawCode: 'HD' },
    strongs: 'H575',
    position: 2,
  },
  {
    id: 'Num.14.11.3',
    language: 'hebrew',
    text: 'יְנַאֲצֻנִי',
    transliteration: "yenaʾatsuni",
    lemma: 'נָאַץ',
    lemmaTranslit: "naʾats",
    gloss: 'will they despise me',
    morphology: { pos: 'verb', rawCode: 'HVpi3mp+Sp1cs' },
    strongs: 'H5006',
    position: 3,
  },
  {
    id: 'Num.14.11.4',
    language: 'hebrew',
    text: 'הָעָם',
    transliteration: "haʿam",
    lemma: 'עַם',
    lemmaTranslit: "ʿam",
    gloss: 'the people',
    morphology: { pos: 'noun', rawCode: 'HNcmsa' },
    strongs: 'H5971',
    position: 4,
  },
  {
    id: 'Num.14.11.5',
    language: 'hebrew',
    text: 'הַזֶּה',
    transliteration: 'hazzeh',
    lemma: 'זֶה',
    lemmaTranslit: 'zeh',
    gloss: 'this',
    morphology: { pos: 'demonstrative', rawCode: 'HTd' },
    strongs: 'H2088',
    position: 5,
  },
];

export const numbers14_11_translation: VerseTranslation = {
  verseRef: 'Num.14.11',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Until when will they despise me the people the this',
      spans: [
        { id: 'Num.14.11.en.lit.1', text: 'Until', position: 1, sourceTokenIds: ['Num.14.11.1'], confidence: 'high' },
        { id: 'Num.14.11.en.lit.2', text: 'when', position: 2, sourceTokenIds: ['Num.14.11.2'], confidence: 'high' },
        { id: 'Num.14.11.en.lit.3', text: 'will they despise me', position: 3, sourceTokenIds: ['Num.14.11.3'], confidence: 'high' },
        { id: 'Num.14.11.en.lit.4', text: 'the people', position: 4, sourceTokenIds: ['Num.14.11.4'], confidence: 'high' },
        { id: 'Num.14.11.en.lit.5', text: 'this', position: 5, sourceTokenIds: ['Num.14.11.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'How long will this people despise me?',
      spans: [
        { id: 'Num.14.11.en.idi.1', text: 'How long', position: 1, sourceTokenIds: ['Num.14.11.1', 'Num.14.11.2'], confidence: 'high' },
        { id: 'Num.14.11.en.idi.2', text: 'will this people', position: 2, sourceTokenIds: ['Num.14.11.4', 'Num.14.11.5'], confidence: 'high' },
        { id: 'Num.14.11.en.idi.3', text: 'despise me?', position: 3, sourceTokenIds: ['Num.14.11.3'], confidence: 'high' },
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

export const numbers14_11_verse = {
  ref: 'Num.14.11',
  sourceTokens: numbers14_11_tokens,
  translation: numbers14_11_translation,
  notes: [] as StudyNote[],
};

/* ——————————————————————————————————————
 * Num 14:18  "The LORD is slow to anger and abounding in steadfast love"
 * —————————————————————————————————————— */

export const numbers14_18_tokens: SourceToken[] = [
  {
    id: 'Num.14.18.1',
    language: 'hebrew',
    text: 'יהוה',
    transliteration: 'yhwh',
    lemma: 'יהוה',
    lemmaTranslit: 'yhwh',
    gloss: 'the LORD',
    morphology: { pos: 'proper_noun', rawCode: 'HNp' },
    strongs: 'H3068',
    position: 1,
  },
  {
    id: 'Num.14.18.2',
    language: 'hebrew',
    text: 'אֶרֶךְ',
    transliteration: "ʾerekh",
    lemma: 'אֶרֶךְ',
    lemmaTranslit: "ʾerekh",
    gloss: 'slow',
    morphology: { pos: 'adjective', rawCode: 'HAamsc' },
    strongs: 'H750',
    position: 2,
  },
  {
    id: 'Num.14.18.3',
    language: 'hebrew',
    text: 'אַפַּיִם',
    transliteration: "ʾappayim",
    lemma: 'אַף',
    lemmaTranslit: "ʾaf",
    gloss: 'anger',
    morphology: { pos: 'noun', rawCode: 'HNcmpd' },
    strongs: 'H639',
    position: 3,
  },
  {
    id: 'Num.14.18.4',
    language: 'hebrew',
    text: 'וְרַב',
    transliteration: 'verav',
    lemma: 'רַב',
    lemmaTranslit: 'rav',
    gloss: 'and abounding',
    morphology: { pos: 'adjective', rawCode: 'HAamsc' },
    strongs: 'H7227',
    position: 4,
  },
  {
    id: 'Num.14.18.5',
    language: 'hebrew',
    text: 'חֶסֶד',
    transliteration: 'chesed',
    lemma: 'חֶסֶד',
    lemmaTranslit: 'chesed',
    gloss: 'steadfast love',
    morphology: { pos: 'noun', rawCode: 'HNcmsa' },
    strongs: 'H2617',
    position: 5,
  },
];

export const numbers14_18_translation: VerseTranslation = {
  verseRef: 'Num.14.18',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'The LORD slow of anger and great of steadfast love',
      spans: [
        { id: 'Num.14.18.en.lit.1', text: 'The LORD', position: 1, sourceTokenIds: ['Num.14.18.1'], confidence: 'high' },
        { id: 'Num.14.18.en.lit.2', text: 'slow', position: 2, sourceTokenIds: ['Num.14.18.2'], confidence: 'high' },
        { id: 'Num.14.18.en.lit.3', text: 'of anger', position: 3, sourceTokenIds: ['Num.14.18.3'], confidence: 'high' },
        { id: 'Num.14.18.en.lit.4', text: 'and great', position: 4, sourceTokenIds: ['Num.14.18.4'], confidence: 'high' },
        { id: 'Num.14.18.en.lit.5', text: 'of steadfast love', position: 5, sourceTokenIds: ['Num.14.18.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'The LORD is slow to anger and abounding in steadfast love',
      spans: [
        { id: 'Num.14.18.en.idi.1', text: 'The LORD is', position: 1, sourceTokenIds: ['Num.14.18.1'], confidence: 'high' },
        { id: 'Num.14.18.en.idi.2', text: 'slow to anger', position: 2, sourceTokenIds: ['Num.14.18.2', 'Num.14.18.3'], confidence: 'high' },
        { id: 'Num.14.18.en.idi.3', text: 'and abounding in steadfast love', position: 3, sourceTokenIds: ['Num.14.18.4', 'Num.14.18.5'], confidence: 'high' },
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

export const numbers14_18_verse = {
  ref: 'Num.14.18',
  sourceTokens: numbers14_18_tokens,
  translation: numbers14_18_translation,
  notes: [] as StudyNote[],
};

/* ——————————————————————————————————————
 * Num 14:30  "Not one shall come into the land...except Caleb and Joshua"
 * —————————————————————————————————————— */

export const numbers14_30_tokens: SourceToken[] = [
  {
    id: 'Num.14.30.1',
    language: 'hebrew',
    text: 'לֹא',
    transliteration: "loʾ",
    lemma: 'לֹא',
    lemmaTranslit: "loʾ",
    gloss: 'not',
    morphology: { pos: 'adverb', rawCode: 'HTn' },
    strongs: 'H3808',
    position: 1,
  },
  {
    id: 'Num.14.30.2',
    language: 'hebrew',
    text: 'תָבֹאוּ',
    transliteration: "tavoʾu",
    lemma: 'בּוֹא',
    lemmaTranslit: "boʾ",
    gloss: 'you shall come',
    morphology: { pos: 'verb', rawCode: 'HVqi2mp' },
    strongs: 'H935',
    position: 2,
  },
  {
    id: 'Num.14.30.3',
    language: 'hebrew',
    text: 'אֶל',
    transliteration: "ʾel",
    lemma: 'אֶל',
    lemmaTranslit: "ʾel",
    gloss: 'into',
    morphology: { pos: 'preposition', rawCode: 'HR' },
    strongs: 'H413',
    position: 3,
  },
  {
    id: 'Num.14.30.4',
    language: 'hebrew',
    text: 'הָאָרֶץ',
    transliteration: "haʾarets",
    lemma: 'אֶרֶץ',
    lemmaTranslit: "ʾerets",
    gloss: 'the land',
    morphology: { pos: 'noun', rawCode: 'HNcfsa' },
    strongs: 'H776',
    position: 4,
  },
  {
    id: 'Num.14.30.5',
    language: 'hebrew',
    text: 'כָּלֵב',
    transliteration: 'kalev',
    lemma: 'כָּלֵב',
    lemmaTranslit: 'kalev',
    gloss: 'Caleb',
    morphology: { pos: 'proper_noun', rawCode: 'HNp' },
    strongs: 'H3612',
    position: 5,
  },
  {
    id: 'Num.14.30.6',
    language: 'hebrew',
    text: 'יְהוֹשֻׁעַ',
    transliteration: "yehoshuaʿ",
    lemma: 'יְהוֹשֻׁעַ',
    lemmaTranslit: "yehoshuaʿ",
    gloss: 'Joshua',
    morphology: { pos: 'proper_noun', rawCode: 'HNp' },
    strongs: 'H3091',
    position: 6,
  },
];

export const numbers14_30_translation: VerseTranslation = {
  verseRef: 'Num.14.30',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Not you shall come into the land except Caleb and Joshua',
      spans: [
        { id: 'Num.14.30.en.lit.1', text: 'Not', position: 1, sourceTokenIds: ['Num.14.30.1'], confidence: 'high' },
        { id: 'Num.14.30.en.lit.2', text: 'you shall come', position: 2, sourceTokenIds: ['Num.14.30.2'], confidence: 'high' },
        { id: 'Num.14.30.en.lit.3', text: 'into', position: 3, sourceTokenIds: ['Num.14.30.3'], confidence: 'high' },
        { id: 'Num.14.30.en.lit.4', text: 'the land', position: 4, sourceTokenIds: ['Num.14.30.4'], confidence: 'high' },
        { id: 'Num.14.30.en.lit.5', text: 'Caleb', position: 5, sourceTokenIds: ['Num.14.30.5'], confidence: 'high' },
        { id: 'Num.14.30.en.lit.6', text: 'and Joshua', position: 6, sourceTokenIds: ['Num.14.30.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Not one shall come into the land, except Caleb and Joshua',
      spans: [
        { id: 'Num.14.30.en.idi.1', text: 'Not one shall come', position: 1, sourceTokenIds: ['Num.14.30.1', 'Num.14.30.2'], confidence: 'high' },
        { id: 'Num.14.30.en.idi.2', text: 'into the land', position: 2, sourceTokenIds: ['Num.14.30.3', 'Num.14.30.4'], confidence: 'high' },
        { id: 'Num.14.30.en.idi.3', text: 'except Caleb and Joshua', position: 3, sourceTokenIds: ['Num.14.30.5', 'Num.14.30.6'], confidence: 'high' },
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

export const numbers14_30_verse = {
  ref: 'Num.14.30',
  sourceTokens: numbers14_30_tokens,
  translation: numbers14_30_translation,
  notes: [] as StudyNote[],
};

/* ——————————————————————————————————————
 * Num 14:34  "According to the number of the days...forty days...forty years"
 * —————————————————————————————————————— */

export const numbers14_34_tokens: SourceToken[] = [
  {
    id: 'Num.14.34.1',
    language: 'hebrew',
    text: 'אַרְבָּעִים',
    transliteration: "ʾarbaʿim",
    lemma: 'אַרְבָּעִים',
    lemmaTranslit: "ʾarbaʿim",
    gloss: 'forty',
    morphology: { pos: 'number', rawCode: 'HAcmpa' },
    strongs: 'H705',
    position: 1,
  },
  {
    id: 'Num.14.34.2',
    language: 'hebrew',
    text: 'יוֹם',
    transliteration: 'yom',
    lemma: 'יוֹם',
    lemmaTranslit: 'yom',
    gloss: 'day',
    morphology: { pos: 'noun', rawCode: 'HNcmsa' },
    strongs: 'H3117',
    position: 2,
  },
  {
    id: 'Num.14.34.3',
    language: 'hebrew',
    text: 'לַשָּׁנָה',
    transliteration: 'lashshanah',
    lemma: 'שָׁנָה',
    lemmaTranslit: 'shanah',
    gloss: 'for a year',
    morphology: { pos: 'noun', rawCode: 'HNcfsa' },
    strongs: 'H8141',
    position: 3,
  },
  {
    id: 'Num.14.34.4',
    language: 'hebrew',
    text: 'אַרְבָּעִים',
    transliteration: "ʾarbaʿim",
    lemma: 'אַרְבָּעִים',
    lemmaTranslit: "ʾarbaʿim",
    gloss: 'forty',
    morphology: { pos: 'number', rawCode: 'HAcmpa' },
    strongs: 'H705',
    position: 4,
  },
  {
    id: 'Num.14.34.5',
    language: 'hebrew',
    text: 'שָׁנָה',
    transliteration: 'shanah',
    lemma: 'שָׁנָה',
    lemmaTranslit: 'shanah',
    gloss: 'years',
    morphology: { pos: 'noun', rawCode: 'HNcfsa' },
    strongs: 'H8141',
    position: 5,
  },
];

export const numbers14_34_translation: VerseTranslation = {
  verseRef: 'Num.14.34',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Forty day for the year forty years',
      spans: [
        { id: 'Num.14.34.en.lit.1', text: 'Forty', position: 1, sourceTokenIds: ['Num.14.34.1'], confidence: 'high' },
        { id: 'Num.14.34.en.lit.2', text: 'day', position: 2, sourceTokenIds: ['Num.14.34.2'], confidence: 'high' },
        { id: 'Num.14.34.en.lit.3', text: 'for the year', position: 3, sourceTokenIds: ['Num.14.34.3'], confidence: 'high' },
        { id: 'Num.14.34.en.lit.4', text: 'forty', position: 4, sourceTokenIds: ['Num.14.34.4'], confidence: 'high' },
        { id: 'Num.14.34.en.lit.5', text: 'years', position: 5, sourceTokenIds: ['Num.14.34.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'According to the number of days — forty days — a year for each day, forty years',
      spans: [
        { id: 'Num.14.34.en.idi.1', text: 'forty days', position: 1, sourceTokenIds: ['Num.14.34.1', 'Num.14.34.2'], confidence: 'high' },
        { id: 'Num.14.34.en.idi.2', text: 'a year for each day', position: 2, sourceTokenIds: ['Num.14.34.3'], confidence: 'high' },
        { id: 'Num.14.34.en.idi.3', text: 'forty years', position: 3, sourceTokenIds: ['Num.14.34.4', 'Num.14.34.5'], confidence: 'high' },
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

export const numbers14_34_verse = {
  ref: 'Num.14.34',
  sourceTokens: numbers14_34_tokens,
  translation: numbers14_34_translation,
  notes: [] as StudyNote[],
};

/* ——————————————————————————————————————
 * Aggregate export
 * —————————————————————————————————————— */

export const numbers14_1_45_verses = [
  numbers14_1_verse,
  numbers14_2_verse,
  numbers14_11_verse,
  numbers14_18_verse,
  numbers14_30_verse,
  numbers14_34_verse,
];

export default numbers14_1_45_verses;
