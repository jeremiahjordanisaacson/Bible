// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 30:2 – and return to the LORD your God
 * ──────────────────────────────────────────────────────────── */

export const deuteronomy30_2_tokens: SourceToken[] = [
  {
    id: 'Deut.30.2.0',
    language: 'hebrew',
    text: 'וְשַׁבְתָּ',
    transliteration: 'wəšaḇtā',
    lemma: 'שׁוּב',
    lemmaTranslit: 'šûḇ',
    gloss: 'and you return',
    morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp2ms' },
    strongs: 'H7725',
    position: 0,
  },
  {
    id: 'Deut.30.2.1',
    language: 'hebrew',
    text: 'עַד',
    transliteration: "ʿaḏ",
    lemma: 'עַד',
    lemmaTranslit: "ʿaḏ",
    gloss: 'unto',
    morphology: { pos: 'preposition', rawCode: 'R' },
    strongs: 'H5704',
    position: 1,
  },
  {
    id: 'Deut.30.2.2',
    language: 'hebrew',
    text: 'יְהוָה',
    transliteration: 'YHWH',
    lemma: 'יהוה',
    lemmaTranslit: 'YHWH',
    gloss: 'the LORD',
    morphology: { pos: 'noun_proper', rawCode: 'Np' },
    strongs: 'H3068',
    position: 2,
  },
  {
    id: 'Deut.30.2.3',
    language: 'hebrew',
    text: 'אֱלֹהֶיךָ',
    transliteration: "ʾĕlōheḵā",
    lemma: 'אֱלֹהִים',
    lemmaTranslit: "ʾĕlōhîm",
    gloss: 'your God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpc' },
    strongs: 'H430',
    position: 3,
  },
  {
    id: 'Deut.30.2.4',
    language: 'hebrew',
    text: 'וְשָׁמַעְתָּ',
    transliteration: "wəšāmaʿtā",
    lemma: 'שָׁמַע',
    lemmaTranslit: "šāmaʿ",
    gloss: 'and you obey',
    morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp2ms' },
    strongs: 'H8085',
    position: 4,
  },
  {
    id: 'Deut.30.2.5',
    language: 'hebrew',
    text: 'בְקֹלוֹ',
    transliteration: 'bəqōlô',
    lemma: 'קוֹל',
    lemmaTranslit: 'qôl',
    gloss: 'his voice',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsc' },
    strongs: 'H6963',
    position: 5,
  },
];

export const deuteronomy30_2_translation: VerseTranslation = {
  verseRef: 'Deut.30.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'and you return unto the LORD your God and you obey his voice',
      spans: [
        { id: 'Deut.30.2.en.lit.0', text: 'and you return', position: 0, sourceTokenIds: ['Deut.30.2.0'], confidence: 'high' },
        { id: 'Deut.30.2.en.lit.1', text: 'unto the LORD your God', position: 1, sourceTokenIds: ['Deut.30.2.1', 'Deut.30.2.2', 'Deut.30.2.3'], confidence: 'high' },
        { id: 'Deut.30.2.en.lit.2', text: 'and you obey his voice', position: 2, sourceTokenIds: ['Deut.30.2.4', 'Deut.30.2.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'and return to the LORD your God and obey his voice',
      spans: [
        { id: 'Deut.30.2.en.idi.0', text: 'and return to the LORD your God', position: 0, sourceTokenIds: ['Deut.30.2.0', 'Deut.30.2.1', 'Deut.30.2.2', 'Deut.30.2.3'], confidence: 'high' },
        { id: 'Deut.30.2.en.idi.1', text: 'and obey his voice', position: 1, sourceTokenIds: ['Deut.30.2.4', 'Deut.30.2.5'], confidence: 'high' },
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

export const deuteronomy30_2_verse = {
  ref: 'Deut.30.2',
  sourceTokens: deuteronomy30_2_tokens,
  translation: deuteronomy30_2_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 30:6 – And the LORD your God will circumcise your heart
 * ──────────────────────────────────────────────────────────── */

export const deuteronomy30_6_tokens: SourceToken[] = [
  {
    id: 'Deut.30.6.0',
    language: 'hebrew',
    text: 'וּמָל',
    transliteration: 'ûmāl',
    lemma: 'מוּל',
    lemmaTranslit: 'mûl',
    gloss: 'and will circumcise',
    morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' },
    strongs: 'H4135',
    position: 0,
  },
  {
    id: 'Deut.30.6.1',
    language: 'hebrew',
    text: 'יְהוָה',
    transliteration: 'YHWH',
    lemma: 'יהוה',
    lemmaTranslit: 'YHWH',
    gloss: 'the LORD',
    morphology: { pos: 'noun_proper', rawCode: 'Np' },
    strongs: 'H3068',
    position: 1,
  },
  {
    id: 'Deut.30.6.2',
    language: 'hebrew',
    text: 'אֱלֹהֶיךָ',
    transliteration: "ʾĕlōheḵā",
    lemma: 'אֱלֹהִים',
    lemmaTranslit: "ʾĕlōhîm",
    gloss: 'your God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpc' },
    strongs: 'H430',
    position: 2,
  },
  {
    id: 'Deut.30.6.3',
    language: 'hebrew',
    text: 'אֶת',
    transliteration: "ʾēṯ",
    lemma: 'אֵת',
    lemmaTranslit: "ʾēṯ",
    gloss: '[obj]',
    morphology: { pos: 'particle', rawCode: 'To' },
    strongs: 'H853',
    position: 3,
  },
  {
    id: 'Deut.30.6.4',
    language: 'hebrew',
    text: 'לְבָבְךָ',
    transliteration: 'ləḇāḇəḵā',
    lemma: 'לֵבָב',
    lemmaTranslit: 'lēḇāḇ',
    gloss: 'your heart',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsc' },
    strongs: 'H3824',
    position: 4,
  },
];

export const deuteronomy30_6_translation: VerseTranslation = {
  verseRef: 'Deut.30.6',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And will circumcise the LORD your God [obj] your heart',
      spans: [
        { id: 'Deut.30.6.en.lit.0', text: 'And will circumcise', position: 0, sourceTokenIds: ['Deut.30.6.0'], confidence: 'high' },
        { id: 'Deut.30.6.en.lit.1', text: 'the LORD your God', position: 1, sourceTokenIds: ['Deut.30.6.1', 'Deut.30.6.2'], confidence: 'high' },
        { id: 'Deut.30.6.en.lit.2', text: 'your heart', position: 2, sourceTokenIds: ['Deut.30.6.3', 'Deut.30.6.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'And the LORD your God will circumcise your heart',
      spans: [
        { id: 'Deut.30.6.en.idi.0', text: 'And the LORD your God', position: 0, sourceTokenIds: ['Deut.30.6.0', 'Deut.30.6.1', 'Deut.30.6.2'], confidence: 'high' },
        { id: 'Deut.30.6.en.idi.1', text: 'will circumcise your heart', position: 1, sourceTokenIds: ['Deut.30.6.0', 'Deut.30.6.3', 'Deut.30.6.4'], confidence: 'high' },
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

export const deuteronomy30_6_verse = {
  ref: 'Deut.30.6',
  sourceTokens: deuteronomy30_6_tokens,
  translation: deuteronomy30_6_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 30:11 – For this commandment is not too hard for you
 * ──────────────────────────────────────────────────────────── */

export const deuteronomy30_11_tokens: SourceToken[] = [
  {
    id: 'Deut.30.11.0',
    language: 'hebrew',
    text: 'כִּי',
    transliteration: 'kî',
    lemma: 'כִּי',
    lemmaTranslit: 'kî',
    gloss: 'For',
    morphology: { pos: 'conjunction', rawCode: 'Cc' },
    strongs: 'H3588',
    position: 0,
  },
  {
    id: 'Deut.30.11.1',
    language: 'hebrew',
    text: 'הַמִּצְוָה',
    transliteration: 'hammiṣwāh',
    lemma: 'מִצְוָה',
    lemmaTranslit: 'miṣwāh',
    gloss: 'the commandment',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', rawCode: 'Ncfsa' },
    strongs: 'H4687',
    position: 1,
  },
  {
    id: 'Deut.30.11.2',
    language: 'hebrew',
    text: 'הַזֹּאת',
    transliteration: "hazzōʾṯ",
    lemma: 'זֹאת',
    lemmaTranslit: "zōʾṯ",
    gloss: 'this',
    morphology: { pos: 'pronoun', rawCode: 'Pdxfs' },
    strongs: 'H2063',
    position: 2,
  },
  {
    id: 'Deut.30.11.3',
    language: 'hebrew',
    text: 'לֹא',
    transliteration: "lōʾ",
    lemma: 'לֹא',
    lemmaTranslit: "lōʾ",
    gloss: 'not',
    morphology: { pos: 'adverb', rawCode: 'D' },
    strongs: 'H3808',
    position: 3,
  },
  {
    id: 'Deut.30.11.4',
    language: 'hebrew',
    text: 'נִפְלֵאת',
    transliteration: "nip̄lēʾṯ",
    lemma: 'פָּלָא',
    lemmaTranslit: "pālāʾ",
    gloss: 'too hard',
    morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'participle', stem: 'niphal', rawCode: 'Vnptfs' },
    strongs: 'H6381',
    position: 4,
  },
  {
    id: 'Deut.30.11.5',
    language: 'hebrew',
    text: 'מִמְּךָ',
    transliteration: 'mimməḵā',
    lemma: 'מִן',
    lemmaTranslit: 'min',
    gloss: 'for you',
    morphology: { pos: 'preposition', rawCode: 'R' },
    strongs: 'H4480',
    position: 5,
  },
];

export const deuteronomy30_11_translation: VerseTranslation = {
  verseRef: 'Deut.30.11',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'For the commandment this not too hard for you',
      spans: [
        { id: 'Deut.30.11.en.lit.0', text: 'For', position: 0, sourceTokenIds: ['Deut.30.11.0'], confidence: 'high' },
        { id: 'Deut.30.11.en.lit.1', text: 'the commandment this', position: 1, sourceTokenIds: ['Deut.30.11.1', 'Deut.30.11.2'], confidence: 'high' },
        { id: 'Deut.30.11.en.lit.2', text: 'not too hard', position: 2, sourceTokenIds: ['Deut.30.11.3', 'Deut.30.11.4'], confidence: 'high' },
        { id: 'Deut.30.11.en.lit.3', text: 'for you', position: 3, sourceTokenIds: ['Deut.30.11.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'For this commandment is not too hard for you',
      spans: [
        { id: 'Deut.30.11.en.idi.0', text: 'For this commandment', position: 0, sourceTokenIds: ['Deut.30.11.0', 'Deut.30.11.1', 'Deut.30.11.2'], confidence: 'high' },
        { id: 'Deut.30.11.en.idi.1', text: 'is not too hard for you', position: 1, sourceTokenIds: ['Deut.30.11.3', 'Deut.30.11.4', 'Deut.30.11.5'], confidence: 'high' },
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

export const deuteronomy30_11_verse = {
  ref: 'Deut.30.11',
  sourceTokens: deuteronomy30_11_tokens,
  translation: deuteronomy30_11_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 30:14 – But the word is very near you
 * ──────────────────────────────────────────────────────────── */

export const deuteronomy30_14_tokens: SourceToken[] = [
  {
    id: 'Deut.30.14.0',
    language: 'hebrew',
    text: 'כִּי',
    transliteration: 'kî',
    lemma: 'כִּי',
    lemmaTranslit: 'kî',
    gloss: 'But',
    morphology: { pos: 'conjunction', rawCode: 'Cc' },
    strongs: 'H3588',
    position: 0,
  },
  {
    id: 'Deut.30.14.1',
    language: 'hebrew',
    text: 'קָרוֹב',
    transliteration: 'qārôḇ',
    lemma: 'קָרוֹב',
    lemmaTranslit: 'qārôḇ',
    gloss: 'near',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', rawCode: 'Aomsa' },
    strongs: 'H7138',
    position: 1,
  },
  {
    id: 'Deut.30.14.2',
    language: 'hebrew',
    text: 'הַדָּבָר',
    transliteration: 'haddāḇār',
    lemma: 'דָּבָר',
    lemmaTranslit: 'dāḇār',
    gloss: 'the word',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsa' },
    strongs: 'H1697',
    position: 2,
  },
  {
    id: 'Deut.30.14.3',
    language: 'hebrew',
    text: 'מְאֹד',
    transliteration: "məʾōḏ",
    lemma: 'מְאֹד',
    lemmaTranslit: "məʾōḏ",
    gloss: 'very',
    morphology: { pos: 'adverb', rawCode: 'D' },
    strongs: 'H3966',
    position: 3,
  },
  {
    id: 'Deut.30.14.4',
    language: 'hebrew',
    text: 'בְּפִיךָ',
    transliteration: 'bəp̄îḵā',
    lemma: 'פֶּה',
    lemmaTranslit: 'peh',
    gloss: 'in your mouth',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsc' },
    strongs: 'H6310',
    position: 4,
  },
  {
    id: 'Deut.30.14.5',
    language: 'hebrew',
    text: 'וּבִלְבָבְךָ',
    transliteration: 'ûḇilḇāḇəḵā',
    lemma: 'לֵבָב',
    lemmaTranslit: 'lēḇāḇ',
    gloss: 'and in your heart',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsc' },
    strongs: 'H3824',
    position: 5,
  },
];

export const deuteronomy30_14_translation: VerseTranslation = {
  verseRef: 'Deut.30.14',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'But near the word very in your mouth and in your heart',
      spans: [
        { id: 'Deut.30.14.en.lit.0', text: 'But', position: 0, sourceTokenIds: ['Deut.30.14.0'], confidence: 'high' },
        { id: 'Deut.30.14.en.lit.1', text: 'near', position: 1, sourceTokenIds: ['Deut.30.14.1'], confidence: 'high' },
        { id: 'Deut.30.14.en.lit.2', text: 'the word very', position: 2, sourceTokenIds: ['Deut.30.14.2', 'Deut.30.14.3'], confidence: 'high' },
        { id: 'Deut.30.14.en.lit.3', text: 'in your mouth and in your heart', position: 3, sourceTokenIds: ['Deut.30.14.4', 'Deut.30.14.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'But the word is very near you, in your mouth and in your heart',
      spans: [
        { id: 'Deut.30.14.en.idi.0', text: 'But the word is very near you,', position: 0, sourceTokenIds: ['Deut.30.14.0', 'Deut.30.14.1', 'Deut.30.14.2', 'Deut.30.14.3'], confidence: 'high' },
        { id: 'Deut.30.14.en.idi.1', text: 'in your mouth and in your heart', position: 1, sourceTokenIds: ['Deut.30.14.4', 'Deut.30.14.5'], confidence: 'high' },
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

export const deuteronomy30_14_verse = {
  ref: 'Deut.30.14',
  sourceTokens: deuteronomy30_14_tokens,
  translation: deuteronomy30_14_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 30:19 – I have set before you life and death; choose life
 * ──────────────────────────────────────────────────────────── */

export const deuteronomy30_19_tokens: SourceToken[] = [
  {
    id: 'Deut.30.19.0',
    language: 'hebrew',
    text: 'נָתַתִּי',
    transliteration: 'nāṯattî',
    lemma: 'נָתַן',
    lemmaTranslit: 'nāṯan',
    gloss: 'I have set',
    morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp1cs' },
    strongs: 'H5414',
    position: 0,
  },
  {
    id: 'Deut.30.19.1',
    language: 'hebrew',
    text: 'לְפָנֶיךָ',
    transliteration: 'ləp̄āneḵā',
    lemma: 'פָּנִים',
    lemmaTranslit: 'pānîm',
    gloss: 'before you',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpc' },
    strongs: 'H6440',
    position: 1,
  },
  {
    id: 'Deut.30.19.2',
    language: 'hebrew',
    text: 'הַחַיִּים',
    transliteration: 'haḥayyîm',
    lemma: 'חַי',
    lemmaTranslit: 'ḥay',
    gloss: 'life',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' },
    strongs: 'H2416',
    position: 2,
  },
  {
    id: 'Deut.30.19.3',
    language: 'hebrew',
    text: 'וְהַמָּוֶת',
    transliteration: 'wəhammāweṯ',
    lemma: 'מָוֶת',
    lemmaTranslit: 'māweṯ',
    gloss: 'and death',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsa' },
    strongs: 'H4194',
    position: 3,
  },
  {
    id: 'Deut.30.19.4',
    language: 'hebrew',
    text: 'הַבְּרָכָה',
    transliteration: 'habbərāḵāh',
    lemma: 'בְּרָכָה',
    lemmaTranslit: 'bərāḵāh',
    gloss: 'blessing',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', rawCode: 'Ncfsa' },
    strongs: 'H1293',
    position: 4,
  },
  {
    id: 'Deut.30.19.5',
    language: 'hebrew',
    text: 'וְהַקְּלָלָה',
    transliteration: 'wəhaqqəlālāh',
    lemma: 'קְלָלָה',
    lemmaTranslit: 'qəlālāh',
    gloss: 'and cursing',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', rawCode: 'Ncfsa' },
    strongs: 'H7045',
    position: 5,
  },
  {
    id: 'Deut.30.19.6',
    language: 'hebrew',
    text: 'וּבָחַרְתָּ',
    transliteration: 'ûḇāḥartā',
    lemma: 'בָּחַר',
    lemmaTranslit: 'bāḥar',
    gloss: 'therefore choose',
    morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp2ms' },
    strongs: 'H977',
    position: 6,
  },
  {
    id: 'Deut.30.19.7',
    language: 'hebrew',
    text: 'בַּחַיִּים',
    transliteration: 'baḥayyîm',
    lemma: 'חַי',
    lemmaTranslit: 'ḥay',
    gloss: 'life',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' },
    strongs: 'H2416',
    position: 7,
  },
];

export const deuteronomy30_19_translation: VerseTranslation = {
  verseRef: 'Deut.30.19',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'I have set before you life and death, blessing and cursing; therefore choose life',
      spans: [
        { id: 'Deut.30.19.en.lit.0', text: 'I have set', position: 0, sourceTokenIds: ['Deut.30.19.0'], confidence: 'high' },
        { id: 'Deut.30.19.en.lit.1', text: 'before you', position: 1, sourceTokenIds: ['Deut.30.19.1'], confidence: 'high' },
        { id: 'Deut.30.19.en.lit.2', text: 'life and death,', position: 2, sourceTokenIds: ['Deut.30.19.2', 'Deut.30.19.3'], confidence: 'high' },
        { id: 'Deut.30.19.en.lit.3', text: 'blessing and cursing;', position: 3, sourceTokenIds: ['Deut.30.19.4', 'Deut.30.19.5'], confidence: 'high' },
        { id: 'Deut.30.19.en.lit.4', text: 'therefore choose life', position: 4, sourceTokenIds: ['Deut.30.19.6', 'Deut.30.19.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'I have set before you life and death, blessing and cursing; therefore choose life',
      spans: [
        { id: 'Deut.30.19.en.idi.0', text: 'I have set before you', position: 0, sourceTokenIds: ['Deut.30.19.0', 'Deut.30.19.1'], confidence: 'high' },
        { id: 'Deut.30.19.en.idi.1', text: 'life and death, blessing and cursing;', position: 1, sourceTokenIds: ['Deut.30.19.2', 'Deut.30.19.3', 'Deut.30.19.4', 'Deut.30.19.5'], confidence: 'high' },
        { id: 'Deut.30.19.en.idi.2', text: 'therefore choose life', position: 2, sourceTokenIds: ['Deut.30.19.6', 'Deut.30.19.7'], confidence: 'high' },
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

export const deuteronomy30_19_verse = {
  ref: 'Deut.30.19',
  sourceTokens: deuteronomy30_19_tokens,
  translation: deuteronomy30_19_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 30:20 – loving the LORD your God, obeying his voice
 * ──────────────────────────────────────────────────────────── */

export const deuteronomy30_20_tokens: SourceToken[] = [
  {
    id: 'Deut.30.20.0',
    language: 'hebrew',
    text: 'לְאַהֲבָה',
    transliteration: "ləʾahăḇāh",
    lemma: 'אָהַב',
    lemmaTranslit: "ʾāhaḇ",
    gloss: 'to love',
    morphology: { pos: 'verb', tense: 'infinitive', stem: 'qal', rawCode: 'Vqc' },
    strongs: 'H157',
    position: 0,
  },
  {
    id: 'Deut.30.20.1',
    language: 'hebrew',
    text: 'אֶת',
    transliteration: "ʾēṯ",
    lemma: 'אֵת',
    lemmaTranslit: "ʾēṯ",
    gloss: '[obj]',
    morphology: { pos: 'particle', rawCode: 'To' },
    strongs: 'H853',
    position: 1,
  },
  {
    id: 'Deut.30.20.2',
    language: 'hebrew',
    text: 'יְהוָה',
    transliteration: 'YHWH',
    lemma: 'יהוה',
    lemmaTranslit: 'YHWH',
    gloss: 'the LORD',
    morphology: { pos: 'noun_proper', rawCode: 'Np' },
    strongs: 'H3068',
    position: 2,
  },
  {
    id: 'Deut.30.20.3',
    language: 'hebrew',
    text: 'אֱלֹהֶיךָ',
    transliteration: "ʾĕlōheḵā",
    lemma: 'אֱלֹהִים',
    lemmaTranslit: "ʾĕlōhîm",
    gloss: 'your God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpc' },
    strongs: 'H430',
    position: 3,
  },
  {
    id: 'Deut.30.20.4',
    language: 'hebrew',
    text: 'לִשְׁמֹעַ',
    transliteration: "lišmōaʿ",
    lemma: 'שָׁמַע',
    lemmaTranslit: "šāmaʿ",
    gloss: 'to obey',
    morphology: { pos: 'verb', tense: 'infinitive', stem: 'qal', rawCode: 'Vqc' },
    strongs: 'H8085',
    position: 4,
  },
  {
    id: 'Deut.30.20.5',
    language: 'hebrew',
    text: 'בְּקֹלוֹ',
    transliteration: 'bəqōlô',
    lemma: 'קוֹל',
    lemmaTranslit: 'qôl',
    gloss: 'his voice',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsc' },
    strongs: 'H6963',
    position: 5,
  },
  {
    id: 'Deut.30.20.6',
    language: 'hebrew',
    text: 'וּלְדָבְקָה־בוֹ',
    transliteration: 'ûləḏāḇəqāh-bô',
    lemma: 'דָּבַק',
    lemmaTranslit: 'dāḇaq',
    gloss: 'and to cling to him',
    morphology: { pos: 'verb', tense: 'infinitive', stem: 'qal', rawCode: 'Vqc' },
    strongs: 'H1692',
    position: 6,
  },
];

export const deuteronomy30_20_translation: VerseTranslation = {
  verseRef: 'Deut.30.20',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'to love the LORD your God, to obey his voice and to cling to him',
      spans: [
        { id: 'Deut.30.20.en.lit.0', text: 'to love', position: 0, sourceTokenIds: ['Deut.30.20.0'], confidence: 'high' },
        { id: 'Deut.30.20.en.lit.1', text: 'the LORD your God,', position: 1, sourceTokenIds: ['Deut.30.20.1', 'Deut.30.20.2', 'Deut.30.20.3'], confidence: 'high' },
        { id: 'Deut.30.20.en.lit.2', text: 'to obey his voice', position: 2, sourceTokenIds: ['Deut.30.20.4', 'Deut.30.20.5'], confidence: 'high' },
        { id: 'Deut.30.20.en.lit.3', text: 'and to cling to him', position: 3, sourceTokenIds: ['Deut.30.20.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'loving the LORD your God, obeying his voice and holding fast to him',
      spans: [
        { id: 'Deut.30.20.en.idi.0', text: 'loving the LORD your God,', position: 0, sourceTokenIds: ['Deut.30.20.0', 'Deut.30.20.1', 'Deut.30.20.2', 'Deut.30.20.3'], confidence: 'high' },
        { id: 'Deut.30.20.en.idi.1', text: 'obeying his voice', position: 1, sourceTokenIds: ['Deut.30.20.4', 'Deut.30.20.5'], confidence: 'high' },
        { id: 'Deut.30.20.en.idi.2', text: 'and holding fast to him', position: 2, sourceTokenIds: ['Deut.30.20.6'], confidence: 'high' },
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

export const deuteronomy30_20_verse = {
  ref: 'Deut.30.20',
  sourceTokens: deuteronomy30_20_tokens,
  translation: deuteronomy30_20_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export
 * ──────────────────────────────────────────────────────────── */

export const deuteronomy30_1_20_verses = [
  deuteronomy30_2_verse,
  deuteronomy30_6_verse,
  deuteronomy30_11_verse,
  deuteronomy30_14_verse,
  deuteronomy30_19_verse,
  deuteronomy30_20_verse,
];

export default deuteronomy30_1_20_verses;
