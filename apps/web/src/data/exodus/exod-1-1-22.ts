// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

// ──────────────────────────────────────────────
// Exodus 1:1 — These are the names of the sons of Israel
// ──────────────────────────────────────────────

export const exodus1_1_tokens: SourceToken[] = [
  {
    id: 'Exod.1.1.0',
    language: 'hebrew',
    text: 'וְאֵ֗לֶּה',
    transliteration: "wəʾēlleh",
    lemma: 'אֵלֶּה',
    lemmaTranslit: "ʾēlleh",
    gloss: 'And these',
    morphology: { pos: 'pronoun', rawCode: 'Pd' },
    strongs: 'H428',
    position: 0,
  },
  {
    id: 'Exod.1.1.1',
    language: 'hebrew',
    text: 'שְׁמוֹת',
    transliteration: 'šəmōṯ',
    lemma: 'שֵׁם',
    lemmaTranslit: 'šēm',
    gloss: 'names of',
    morphology: { pos: 'noun', rawCode: 'Ncmpc' },
    strongs: 'H8034',
    position: 1,
  },
  {
    id: 'Exod.1.1.2',
    language: 'hebrew',
    text: 'בְּנֵי',
    transliteration: 'bənē',
    lemma: 'בֵּן',
    lemmaTranslit: 'bēn',
    gloss: 'sons of',
    morphology: { pos: 'noun', rawCode: 'Ncmpc' },
    strongs: 'H1121',
    position: 2,
  },
  {
    id: 'Exod.1.1.3',
    language: 'hebrew',
    text: 'יִשְׂרָאֵל',
    transliteration: "yiśrāʾēl",
    lemma: 'יִשְׂרָאֵל',
    lemmaTranslit: "yiśrāʾēl",
    gloss: 'Israel',
    morphology: { pos: 'proper_noun', rawCode: 'Np' },
    strongs: 'H3478',
    position: 3,
  },
  {
    id: 'Exod.1.1.4',
    language: 'hebrew',
    text: 'הַבָּאִים',
    transliteration: "habbāʾîm",
    lemma: 'בּוֹא',
    lemmaTranslit: "bōʾ",
    gloss: 'who came',
    morphology: { pos: 'verb', rawCode: 'Vqrmpa' },
    strongs: 'H935',
    position: 4,
  },
  {
    id: 'Exod.1.1.5',
    language: 'hebrew',
    text: 'מִצְרָֽיְמָה',
    transliteration: 'miṣrāyəmāh',
    lemma: 'מִצְרַיִם',
    lemmaTranslit: 'miṣrayim',
    gloss: 'to Egypt',
    morphology: { pos: 'proper_noun', rawCode: 'Np' },
    strongs: 'H4714',
    position: 5,
  },
];

export const exodus1_1_translation: VerseTranslation = {
  verseRef: 'Exod.1.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And these are the names of the sons of Israel who came to Egypt',
      spans: [
        { id: 'Exod.1.1.en.lit.0', text: 'And these are the names', position: 0, sourceTokenIds: ['Exod.1.1.0', 'Exod.1.1.1'], confidence: 'high' },
        { id: 'Exod.1.1.en.lit.1', text: 'of the sons of Israel', position: 1, sourceTokenIds: ['Exod.1.1.2', 'Exod.1.1.3'], confidence: 'high' },
        { id: 'Exod.1.1.en.lit.2', text: 'who came to Egypt', position: 2, sourceTokenIds: ['Exod.1.1.4', 'Exod.1.1.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'These are the names of the Israelites who went to Egypt',
      spans: [
        { id: 'Exod.1.1.en.idi.0', text: 'These are the names of the Israelites', position: 0, sourceTokenIds: ['Exod.1.1.0', 'Exod.1.1.1', 'Exod.1.1.2', 'Exod.1.1.3'], confidence: 'high' },
        { id: 'Exod.1.1.en.idi.1', text: 'who went to Egypt', position: 1, sourceTokenIds: ['Exod.1.1.4', 'Exod.1.1.5'], confidence: 'high' },
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

export const exodus1_1_verse = {
  ref: 'Exod.1.1',
  sourceTokens: exodus1_1_tokens,
  translation: exodus1_1_translation,
  notes: [] as StudyNote[],
};

// ──────────────────────────────────────────────
// Exodus 1:7 — The Israelites were fruitful and multiplied
// ──────────────────────────────────────────────

export const exodus1_7_tokens: SourceToken[] = [
  {
    id: 'Exod.1.7.0',
    language: 'hebrew',
    text: 'וּבְנֵי',
    transliteration: 'ūḇənē',
    lemma: 'בֵּן',
    lemmaTranslit: 'bēn',
    gloss: 'And the sons of',
    morphology: { pos: 'noun', rawCode: 'Ncmpc' },
    strongs: 'H1121',
    position: 0,
  },
  {
    id: 'Exod.1.7.1',
    language: 'hebrew',
    text: 'יִשְׂרָאֵל',
    transliteration: "yiśrāʾēl",
    lemma: 'יִשְׂרָאֵל',
    lemmaTranslit: "yiśrāʾēl",
    gloss: 'Israel',
    morphology: { pos: 'proper_noun', rawCode: 'Np' },
    strongs: 'H3478',
    position: 1,
  },
  {
    id: 'Exod.1.7.2',
    language: 'hebrew',
    text: 'פָּרוּ',
    transliteration: 'pārū',
    lemma: 'פָּרָה',
    lemmaTranslit: 'pārāh',
    gloss: 'were fruitful',
    morphology: { pos: 'verb', rawCode: 'Vqp3cp' },
    strongs: 'H6509',
    position: 2,
  },
  {
    id: 'Exod.1.7.3',
    language: 'hebrew',
    text: 'וַיִּשְׁרְצוּ',
    transliteration: 'wayyišrəṣū',
    lemma: 'שָׁרַץ',
    lemmaTranslit: 'šāraṣ',
    gloss: 'and swarmed',
    morphology: { pos: 'verb', rawCode: 'Vqw3mp' },
    strongs: 'H8317',
    position: 3,
  },
  {
    id: 'Exod.1.7.4',
    language: 'hebrew',
    text: 'וַיִּרְבּוּ',
    transliteration: 'wayyirbū',
    lemma: 'רָבָה',
    lemmaTranslit: 'rāḇāh',
    gloss: 'and multiplied',
    morphology: { pos: 'verb', rawCode: 'Vqw3mp' },
    strongs: 'H7235',
    position: 4,
  },
  {
    id: 'Exod.1.7.5',
    language: 'hebrew',
    text: 'וַיַּעַצְמוּ',
    transliteration: "wayyaʿaṣmū",
    lemma: 'עָצַם',
    lemmaTranslit: "ʿāṣam",
    gloss: 'and became mighty',
    morphology: { pos: 'verb', rawCode: 'Vqw3mp' },
    strongs: 'H6105',
    position: 5,
  },
];

export const exodus1_7_translation: VerseTranslation = {
  verseRef: 'Exod.1.7',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And the sons of Israel were fruitful and swarmed and multiplied and became very mighty',
      spans: [
        { id: 'Exod.1.7.en.lit.0', text: 'And the sons of Israel', position: 0, sourceTokenIds: ['Exod.1.7.0', 'Exod.1.7.1'], confidence: 'high' },
        { id: 'Exod.1.7.en.lit.1', text: 'were fruitful and swarmed', position: 1, sourceTokenIds: ['Exod.1.7.2', 'Exod.1.7.3'], confidence: 'high' },
        { id: 'Exod.1.7.en.lit.2', text: 'and multiplied and became very mighty', position: 2, sourceTokenIds: ['Exod.1.7.4', 'Exod.1.7.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'The Israelites were exceedingly fruitful; they multiplied greatly and became very powerful',
      spans: [
        { id: 'Exod.1.7.en.idi.0', text: 'The Israelites were exceedingly fruitful', position: 0, sourceTokenIds: ['Exod.1.7.0', 'Exod.1.7.1', 'Exod.1.7.2', 'Exod.1.7.3'], confidence: 'high' },
        { id: 'Exod.1.7.en.idi.1', text: 'they multiplied greatly and became very powerful', position: 1, sourceTokenIds: ['Exod.1.7.4', 'Exod.1.7.5'], confidence: 'high' },
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

export const exodus1_7_verse = {
  ref: 'Exod.1.7',
  sourceTokens: exodus1_7_tokens,
  translation: exodus1_7_translation,
  notes: [] as StudyNote[],
};

// ──────────────────────────────────────────────
// Exodus 1:8 — A new king arose over Egypt
// ──────────────────────────────────────────────

export const exodus1_8_tokens: SourceToken[] = [
  {
    id: 'Exod.1.8.0',
    language: 'hebrew',
    text: 'וַיָּקָם',
    transliteration: 'wayyāqām',
    lemma: 'קוּם',
    lemmaTranslit: 'qūm',
    gloss: 'And arose',
    morphology: { pos: 'verb', rawCode: 'Vqw3ms' },
    strongs: 'H6965',
    position: 0,
  },
  {
    id: 'Exod.1.8.1',
    language: 'hebrew',
    text: 'מֶלֶךְ',
    transliteration: 'meleḵ',
    lemma: 'מֶלֶךְ',
    lemmaTranslit: 'meleḵ',
    gloss: 'king',
    morphology: { pos: 'noun', rawCode: 'Ncmsa' },
    strongs: 'H4428',
    position: 1,
  },
  {
    id: 'Exod.1.8.2',
    language: 'hebrew',
    text: 'חָדָשׁ',
    transliteration: 'ḥāḏāš',
    lemma: 'חָדָשׁ',
    lemmaTranslit: 'ḥāḏāš',
    gloss: 'new',
    morphology: { pos: 'adjective', rawCode: 'Aamsa' },
    strongs: 'H2319',
    position: 2,
  },
  {
    id: 'Exod.1.8.3',
    language: 'hebrew',
    text: 'עַל',
    transliteration: "ʿal",
    lemma: 'עַל',
    lemmaTranslit: "ʿal",
    gloss: 'over',
    morphology: { pos: 'preposition', rawCode: 'R' },
    strongs: 'H5921',
    position: 3,
  },
  {
    id: 'Exod.1.8.4',
    language: 'hebrew',
    text: 'מִצְרָיִם',
    transliteration: 'miṣrayim',
    lemma: 'מִצְרַיִם',
    lemmaTranslit: 'miṣrayim',
    gloss: 'Egypt',
    morphology: { pos: 'proper_noun', rawCode: 'Np' },
    strongs: 'H4714',
    position: 4,
  },
  {
    id: 'Exod.1.8.5',
    language: 'hebrew',
    text: 'אֲשֶׁר',
    transliteration: "ʾăšer",
    lemma: 'אֲשֶׁר',
    lemmaTranslit: "ʾăšer",
    gloss: 'who',
    morphology: { pos: 'relative', rawCode: 'Tr' },
    strongs: 'H834',
    position: 5,
  },
  {
    id: 'Exod.1.8.6',
    language: 'hebrew',
    text: 'לֹא',
    transliteration: "lōʾ",
    lemma: 'לֹא',
    lemmaTranslit: "lōʾ",
    gloss: 'not',
    morphology: { pos: 'adverb', rawCode: 'D' },
    strongs: 'H3808',
    position: 6,
  },
  {
    id: 'Exod.1.8.7',
    language: 'hebrew',
    text: 'יָדַע',
    transliteration: "yāḏaʿ",
    lemma: 'יָדַע',
    lemmaTranslit: "yāḏaʿ",
    gloss: 'knew',
    morphology: { pos: 'verb', rawCode: 'Vqp3ms' },
    strongs: 'H3045',
    position: 7,
  },
];

export const exodus1_8_translation: VerseTranslation = {
  verseRef: 'Exod.1.8',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And there arose a new king over Egypt who did not know Joseph',
      spans: [
        { id: 'Exod.1.8.en.lit.0', text: 'And there arose a new king', position: 0, sourceTokenIds: ['Exod.1.8.0', 'Exod.1.8.1', 'Exod.1.8.2'], confidence: 'high' },
        { id: 'Exod.1.8.en.lit.1', text: 'over Egypt', position: 1, sourceTokenIds: ['Exod.1.8.3', 'Exod.1.8.4'], confidence: 'high' },
        { id: 'Exod.1.8.en.lit.2', text: 'who did not know Joseph', position: 2, sourceTokenIds: ['Exod.1.8.5', 'Exod.1.8.6', 'Exod.1.8.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Then a new king who did not know about Joseph came to power in Egypt',
      spans: [
        { id: 'Exod.1.8.en.idi.0', text: 'Then a new king', position: 0, sourceTokenIds: ['Exod.1.8.0', 'Exod.1.8.1', 'Exod.1.8.2'], confidence: 'high' },
        { id: 'Exod.1.8.en.idi.1', text: 'who did not know about Joseph', position: 1, sourceTokenIds: ['Exod.1.8.5', 'Exod.1.8.6', 'Exod.1.8.7'], confidence: 'high' },
        { id: 'Exod.1.8.en.idi.2', text: 'came to power in Egypt', position: 2, sourceTokenIds: ['Exod.1.8.3', 'Exod.1.8.4'], confidence: 'high' },
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

export const exodus1_8_verse = {
  ref: 'Exod.1.8',
  sourceTokens: exodus1_8_tokens,
  translation: exodus1_8_translation,
  notes: [] as StudyNote[],
};

// ──────────────────────────────────────────────
// Exodus 1:11 — They set taskmasters over them
// ──────────────────────────────────────────────

export const exodus1_11_tokens: SourceToken[] = [
  {
    id: 'Exod.1.11.0',
    language: 'hebrew',
    text: 'וַיָּשִׂימוּ',
    transliteration: 'wayyāśîmū',
    lemma: 'שׂוּם',
    lemmaTranslit: 'śūm',
    gloss: 'And they set',
    morphology: { pos: 'verb', rawCode: 'Vqw3mp' },
    strongs: 'H7760',
    position: 0,
  },
  {
    id: 'Exod.1.11.1',
    language: 'hebrew',
    text: 'עָלָיו',
    transliteration: "ʿālāyw",
    lemma: 'עַל',
    lemmaTranslit: "ʿal",
    gloss: 'over them',
    morphology: { pos: 'preposition', rawCode: 'R' },
    strongs: 'H5921',
    position: 1,
  },
  {
    id: 'Exod.1.11.2',
    language: 'hebrew',
    text: 'שָׂרֵי',
    transliteration: 'śārē',
    lemma: 'שַׂר',
    lemmaTranslit: 'śar',
    gloss: 'officers of',
    morphology: { pos: 'noun', rawCode: 'Ncmpc' },
    strongs: 'H8269',
    position: 2,
  },
  {
    id: 'Exod.1.11.3',
    language: 'hebrew',
    text: 'מִסִּים',
    transliteration: 'missîm',
    lemma: 'מַס',
    lemmaTranslit: 'mas',
    gloss: 'forced labor',
    morphology: { pos: 'noun', rawCode: 'Ncmpa' },
    strongs: 'H4522',
    position: 3,
  },
  {
    id: 'Exod.1.11.4',
    language: 'hebrew',
    text: 'לְמַעַן',
    transliteration: "ləmaʿan",
    lemma: 'לְמַעַן',
    lemmaTranslit: "ləmaʿan",
    gloss: 'in order to',
    morphology: { pos: 'conjunction', rawCode: 'Tc' },
    strongs: 'H4616',
    position: 4,
  },
  {
    id: 'Exod.1.11.5',
    language: 'hebrew',
    text: 'עַנֹּתוֹ',
    transliteration: "ʿannōṯō",
    lemma: 'עָנָה',
    lemmaTranslit: "ʿānāh",
    gloss: 'afflict him',
    morphology: { pos: 'verb', rawCode: 'Vpc' },
    strongs: 'H6031',
    position: 5,
  },
  {
    id: 'Exod.1.11.6',
    language: 'hebrew',
    text: 'בְּסִבְלֹתָם',
    transliteration: 'bəsiḇlōṯām',
    lemma: 'סְבָלָה',
    lemmaTranslit: 'səḇālāh',
    gloss: 'with their burdens',
    morphology: { pos: 'noun', rawCode: 'Ncfpc' },
    strongs: 'H5450',
    position: 6,
  },
];

export const exodus1_11_translation: VerseTranslation = {
  verseRef: 'Exod.1.11',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And they set over them officers of forced labor in order to afflict them with their burdens',
      spans: [
        { id: 'Exod.1.11.en.lit.0', text: 'And they set over them', position: 0, sourceTokenIds: ['Exod.1.11.0', 'Exod.1.11.1'], confidence: 'high' },
        { id: 'Exod.1.11.en.lit.1', text: 'officers of forced labor', position: 1, sourceTokenIds: ['Exod.1.11.2', 'Exod.1.11.3'], confidence: 'high' },
        { id: 'Exod.1.11.en.lit.2', text: 'in order to afflict them with their burdens', position: 2, sourceTokenIds: ['Exod.1.11.4', 'Exod.1.11.5', 'Exod.1.11.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'So they appointed taskmasters over them to oppress them with forced labor',
      spans: [
        { id: 'Exod.1.11.en.idi.0', text: 'So they appointed taskmasters over them', position: 0, sourceTokenIds: ['Exod.1.11.0', 'Exod.1.11.1', 'Exod.1.11.2', 'Exod.1.11.3'], confidence: 'high' },
        { id: 'Exod.1.11.en.idi.1', text: 'to oppress them with forced labor', position: 1, sourceTokenIds: ['Exod.1.11.4', 'Exod.1.11.5', 'Exod.1.11.6'], confidence: 'high' },
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

export const exodus1_11_verse = {
  ref: 'Exod.1.11',
  sourceTokens: exodus1_11_tokens,
  translation: exodus1_11_translation,
  notes: [] as StudyNote[],
};

// ──────────────────────────────────────────────
// Exodus 1:15 — The king of Egypt spoke to the Hebrew midwives
// ──────────────────────────────────────────────

export const exodus1_15_tokens: SourceToken[] = [
  {
    id: 'Exod.1.15.0',
    language: 'hebrew',
    text: 'וַיֹּאמֶר',
    transliteration: "wayyōʾmer",
    lemma: 'אָמַר',
    lemmaTranslit: "ʾāmar",
    gloss: 'And said',
    morphology: { pos: 'verb', rawCode: 'Vqw3ms' },
    strongs: 'H559',
    position: 0,
  },
  {
    id: 'Exod.1.15.1',
    language: 'hebrew',
    text: 'מֶלֶךְ',
    transliteration: 'meleḵ',
    lemma: 'מֶלֶךְ',
    lemmaTranslit: 'meleḵ',
    gloss: 'king of',
    morphology: { pos: 'noun', rawCode: 'Ncmsc' },
    strongs: 'H4428',
    position: 1,
  },
  {
    id: 'Exod.1.15.2',
    language: 'hebrew',
    text: 'מִצְרַיִם',
    transliteration: 'miṣrayim',
    lemma: 'מִצְרַיִם',
    lemmaTranslit: 'miṣrayim',
    gloss: 'Egypt',
    morphology: { pos: 'proper_noun', rawCode: 'Np' },
    strongs: 'H4714',
    position: 2,
  },
  {
    id: 'Exod.1.15.3',
    language: 'hebrew',
    text: 'לַמְיַלְּדֹת',
    transliteration: 'lamyallədōṯ',
    lemma: 'יָלַד',
    lemmaTranslit: 'yālaḏ',
    gloss: 'to the midwives',
    morphology: { pos: 'noun', rawCode: 'Ncfpa' },
    strongs: 'H3205',
    position: 3,
  },
  {
    id: 'Exod.1.15.4',
    language: 'hebrew',
    text: 'הָעִבְרִיֹּת',
    transliteration: "hāʿiḇriyyōṯ",
    lemma: 'עִבְרִי',
    lemmaTranslit: "ʿiḇrî",
    gloss: 'the Hebrew',
    morphology: { pos: 'adjective', rawCode: 'Agfpa' },
    strongs: 'H5680',
    position: 4,
  },
];

export const exodus1_15_translation: VerseTranslation = {
  verseRef: 'Exod.1.15',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And the king of Egypt said to the Hebrew midwives',
      spans: [
        { id: 'Exod.1.15.en.lit.0', text: 'And the king of Egypt said', position: 0, sourceTokenIds: ['Exod.1.15.0', 'Exod.1.15.1', 'Exod.1.15.2'], confidence: 'high' },
        { id: 'Exod.1.15.en.lit.1', text: 'to the Hebrew midwives', position: 1, sourceTokenIds: ['Exod.1.15.3', 'Exod.1.15.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'The king of Egypt spoke to the Hebrew midwives',
      spans: [
        { id: 'Exod.1.15.en.idi.0', text: 'The king of Egypt spoke', position: 0, sourceTokenIds: ['Exod.1.15.0', 'Exod.1.15.1', 'Exod.1.15.2'], confidence: 'high' },
        { id: 'Exod.1.15.en.idi.1', text: 'to the Hebrew midwives', position: 1, sourceTokenIds: ['Exod.1.15.3', 'Exod.1.15.4'], confidence: 'high' },
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

export const exodus1_15_verse = {
  ref: 'Exod.1.15',
  sourceTokens: exodus1_15_tokens,
  translation: exodus1_15_translation,
  notes: [] as StudyNote[],
};

// ──────────────────────────────────────────────
// Exodus 1:22 — Every son born you shall cast into the Nile
// ──────────────────────────────────────────────

export const exodus1_22_tokens: SourceToken[] = [
  {
    id: 'Exod.1.22.0',
    language: 'hebrew',
    text: 'וַיְצַו',
    transliteration: 'wayṣaw',
    lemma: 'צָוָה',
    lemmaTranslit: 'ṣāwāh',
    gloss: 'And commanded',
    morphology: { pos: 'verb', rawCode: 'Vpw3ms' },
    strongs: 'H6680',
    position: 0,
  },
  {
    id: 'Exod.1.22.1',
    language: 'hebrew',
    text: 'פַּרְעֹה',
    transliteration: "parʿōh",
    lemma: 'פַּרְעֹה',
    lemmaTranslit: "parʿōh",
    gloss: 'Pharaoh',
    morphology: { pos: 'proper_noun', rawCode: 'Np' },
    strongs: 'H6547',
    position: 1,
  },
  {
    id: 'Exod.1.22.2',
    language: 'hebrew',
    text: 'כָּל',
    transliteration: 'kol',
    lemma: 'כֹּל',
    lemmaTranslit: 'kōl',
    gloss: 'every',
    morphology: { pos: 'noun', rawCode: 'Ncmsc' },
    strongs: 'H3605',
    position: 2,
  },
  {
    id: 'Exod.1.22.3',
    language: 'hebrew',
    text: 'הַבֵּן',
    transliteration: 'habbēn',
    lemma: 'בֵּן',
    lemmaTranslit: 'bēn',
    gloss: 'the son',
    morphology: { pos: 'noun', rawCode: 'Ncmsa' },
    strongs: 'H1121',
    position: 3,
  },
  {
    id: 'Exod.1.22.4',
    language: 'hebrew',
    text: 'הַיִּלּוֹד',
    transliteration: 'hayyillōḏ',
    lemma: 'יָלַד',
    lemmaTranslit: 'yālaḏ',
    gloss: 'that is born',
    morphology: { pos: 'verb', rawCode: 'Vqsmsa' },
    strongs: 'H3209',
    position: 4,
  },
  {
    id: 'Exod.1.22.5',
    language: 'hebrew',
    text: 'הַיְאֹרָה',
    transliteration: "hayəʾōrāh",
    lemma: 'יְאוֹר',
    lemmaTranslit: "yəʾōr",
    gloss: 'into the Nile',
    morphology: { pos: 'noun', rawCode: 'Ncmsa' },
    strongs: 'H2975',
    position: 5,
  },
  {
    id: 'Exod.1.22.6',
    language: 'hebrew',
    text: 'תַּשְׁלִיכֻהוּ',
    transliteration: 'tašlîḵuhū',
    lemma: 'שָׁלַךְ',
    lemmaTranslit: 'šālaḵ',
    gloss: 'you shall cast him',
    morphology: { pos: 'verb', rawCode: 'Vhj2mp' },
    strongs: 'H7993',
    position: 6,
  },
];

export const exodus1_22_translation: VerseTranslation = {
  verseRef: 'Exod.1.22',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And Pharaoh commanded all his people: every son that is born into the Nile you shall cast him',
      spans: [
        { id: 'Exod.1.22.en.lit.0', text: 'And Pharaoh commanded', position: 0, sourceTokenIds: ['Exod.1.22.0', 'Exod.1.22.1'], confidence: 'high' },
        { id: 'Exod.1.22.en.lit.1', text: 'every son that is born', position: 1, sourceTokenIds: ['Exod.1.22.2', 'Exod.1.22.3', 'Exod.1.22.4'], confidence: 'high' },
        { id: 'Exod.1.22.en.lit.2', text: 'into the Nile you shall cast him', position: 2, sourceTokenIds: ['Exod.1.22.5', 'Exod.1.22.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Then Pharaoh commanded all his people: Every boy that is born you must throw into the Nile',
      spans: [
        { id: 'Exod.1.22.en.idi.0', text: 'Then Pharaoh commanded all his people', position: 0, sourceTokenIds: ['Exod.1.22.0', 'Exod.1.22.1'], confidence: 'high' },
        { id: 'Exod.1.22.en.idi.1', text: 'Every boy that is born you must throw into the Nile', position: 1, sourceTokenIds: ['Exod.1.22.2', 'Exod.1.22.3', 'Exod.1.22.4', 'Exod.1.22.5', 'Exod.1.22.6'], confidence: 'high' },
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

export const exodus1_22_verse = {
  ref: 'Exod.1.22',
  sourceTokens: exodus1_22_tokens,
  translation: exodus1_22_translation,
  notes: [] as StudyNote[],
};

// ──────────────────────────────────────────────
// Collected export
// ──────────────────────────────────────────────

export const exodus1_1_22_verses = [
  exodus1_1_verse,
  exodus1_7_verse,
  exodus1_8_verse,
  exodus1_11_verse,
  exodus1_15_verse,
  exodus1_22_verse,
];

export default exodus1_1_22_verses;
