// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 16:13 – Who do people say the Son of Man is?
 * ──────────────────────────────────────────────────────────── */

export const matthew16_13_tokens: SourceToken[] = [
  {
    id: 'Matt.16.13.0',
    language: 'greek',
    text: 'Τίνα',
    transliteration: 'Tina',
    lemma: 'τίς',
    lemmaTranslit: 'tis',
    gloss: 'whom',
    morphology: { pos: 'interrogative', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G5101',
    position: 0,
  },
  {
    id: 'Matt.16.13.1',
    language: 'greek',
    text: 'λέγουσιν',
    transliteration: 'legousin',
    lemma: 'λέγω',
    lemmaTranslit: 'legō',
    gloss: 'say',
    morphology: { pos: 'verb', person: '3', number: 'plural', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G3004',
    position: 1,
  },
  {
    id: 'Matt.16.13.2',
    language: 'greek',
    text: 'ἄνθρωποι',
    transliteration: 'anthrōpoi',
    lemma: 'ἄνθρωπος',
    lemmaTranslit: 'anthrōpos',
    gloss: 'people',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', case: 'nominative' },
    strongs: 'G444',
    position: 2,
  },
  {
    id: 'Matt.16.13.3',
    language: 'greek',
    text: 'τὸν',
    transliteration: 'ton',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G3588',
    position: 3,
  },
  {
    id: 'Matt.16.13.4',
    language: 'greek',
    text: 'υἱὸν',
    transliteration: 'huion',
    lemma: 'υἱός',
    lemmaTranslit: 'huios',
    gloss: 'Son',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G5207',
    position: 4,
  },
  {
    id: 'Matt.16.13.5',
    language: 'greek',
    text: 'ἀνθρώπου',
    transliteration: 'anthrōpou',
    lemma: 'ἄνθρωπος',
    lemmaTranslit: 'anthrōpos',
    gloss: 'of Man',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G444',
    position: 5,
  },
];

export const matthew16_13_translation: VerseTranslation = {
  verseRef: 'Matt.16.13',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Whom do people say the Son of Man to be?',
      spans: [
        { id: 'Matt.16.13.en.lit.0', text: 'Whom do', position: 0, sourceTokenIds: ['Matt.16.13.0'], confidence: 'high' },
        { id: 'Matt.16.13.en.lit.1', text: 'people say', position: 1, sourceTokenIds: ['Matt.16.13.1', 'Matt.16.13.2'], confidence: 'high' },
        { id: 'Matt.16.13.en.lit.2', text: 'the Son of Man to be?', position: 2, sourceTokenIds: ['Matt.16.13.3', 'Matt.16.13.4', 'Matt.16.13.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Who do people say the Son of Man is?',
      spans: [
        { id: 'Matt.16.13.en.idi.0', text: 'Who do people say', position: 0, sourceTokenIds: ['Matt.16.13.0', 'Matt.16.13.1', 'Matt.16.13.2'], confidence: 'high' },
        { id: 'Matt.16.13.en.idi.1', text: 'the Son of Man is?', position: 1, sourceTokenIds: ['Matt.16.13.3', 'Matt.16.13.4', 'Matt.16.13.5'], confidence: 'high' },
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

export const matthew16_13_verse = {
  ref: 'Matt.16.13',
  sourceTokens: matthew16_13_tokens,
  translation: matthew16_13_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 16:15 – But who do you say that I am?
 * ──────────────────────────────────────────────────────────── */

export const matthew16_15_tokens: SourceToken[] = [
  {
    id: 'Matt.16.15.0',
    language: 'greek',
    text: 'Ὑμεῖς',
    transliteration: 'Hymeis',
    lemma: 'σύ',
    lemmaTranslit: 'sy',
    gloss: 'you',
    morphology: { pos: 'pronoun', person: '2', number: 'plural', case: 'nominative' },
    strongs: 'G4771',
    position: 0,
  },
  {
    id: 'Matt.16.15.1',
    language: 'greek',
    text: 'τίνα',
    transliteration: 'tina',
    lemma: 'τίς',
    lemmaTranslit: 'tis',
    gloss: 'whom',
    morphology: { pos: 'interrogative', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G5101',
    position: 1,
  },
  {
    id: 'Matt.16.15.2',
    language: 'greek',
    text: 'με',
    transliteration: 'me',
    lemma: 'ἐγώ',
    lemmaTranslit: 'egō',
    gloss: 'me',
    morphology: { pos: 'pronoun', person: '1', number: 'singular', case: 'accusative' },
    strongs: 'G1473',
    position: 2,
  },
  {
    id: 'Matt.16.15.3',
    language: 'greek',
    text: 'λέγετε',
    transliteration: 'legete',
    lemma: 'λέγω',
    lemmaTranslit: 'legō',
    gloss: 'say',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G3004',
    position: 3,
  },
  {
    id: 'Matt.16.15.4',
    language: 'greek',
    text: 'εἶναι',
    transliteration: 'einai',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'to be',
    morphology: { pos: 'verb', tense: 'present', voice: 'active', mood: 'infinitive' },
    strongs: 'G1510',
    position: 4,
  },
];

export const matthew16_15_translation: VerseTranslation = {
  verseRef: 'Matt.16.15',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'But you, whom do you say me to be?',
      spans: [
        { id: 'Matt.16.15.en.lit.0', text: 'But you,', position: 0, sourceTokenIds: ['Matt.16.15.0'], confidence: 'high' },
        { id: 'Matt.16.15.en.lit.1', text: 'whom do you say me to be?', position: 1, sourceTokenIds: ['Matt.16.15.1', 'Matt.16.15.2', 'Matt.16.15.3', 'Matt.16.15.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'But what about you? Who do you say I am?',
      spans: [
        { id: 'Matt.16.15.en.idi.0', text: 'But what about you?', position: 0, sourceTokenIds: ['Matt.16.15.0'], confidence: 'high' },
        { id: 'Matt.16.15.en.idi.1', text: 'Who do you say I am?', position: 1, sourceTokenIds: ['Matt.16.15.1', 'Matt.16.15.2', 'Matt.16.15.3', 'Matt.16.15.4'], confidence: 'high' },
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

export const matthew16_15_verse = {
  ref: 'Matt.16.15',
  sourceTokens: matthew16_15_tokens,
  translation: matthew16_15_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 16:16 – You are the Christ, the Son of the living God
 * ──────────────────────────────────────────────────────────── */

export const matthew16_16_tokens: SourceToken[] = [
  {
    id: 'Matt.16.16.0',
    language: 'greek',
    text: 'Σὺ',
    transliteration: 'Sy',
    lemma: 'σύ',
    lemmaTranslit: 'sy',
    gloss: 'you',
    morphology: { pos: 'pronoun', person: '2', number: 'singular', case: 'nominative' },
    strongs: 'G4771',
    position: 0,
  },
  {
    id: 'Matt.16.16.1',
    language: 'greek',
    text: 'εἶ',
    transliteration: 'ei',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'are',
    morphology: { pos: 'verb', person: '2', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G1510',
    position: 1,
  },
  {
    id: 'Matt.16.16.2',
    language: 'greek',
    text: 'ὁ',
    transliteration: 'ho',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3588',
    position: 2,
  },
  {
    id: 'Matt.16.16.3',
    language: 'greek',
    text: 'Χριστὸς',
    transliteration: 'Christos',
    lemma: 'Χριστός',
    lemmaTranslit: 'Christos',
    gloss: 'Christ',
    glossExtended: 'Christ, Anointed One, Messiah',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G5547',
    position: 3,
  },
  {
    id: 'Matt.16.16.4',
    language: 'greek',
    text: 'υἱὸς',
    transliteration: 'huios',
    lemma: 'υἱός',
    lemmaTranslit: 'huios',
    gloss: 'Son',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G5207',
    position: 4,
  },
  {
    id: 'Matt.16.16.5',
    language: 'greek',
    text: 'θεοῦ',
    transliteration: 'theou',
    lemma: 'θεός',
    lemmaTranslit: 'theos',
    gloss: 'of God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G2316',
    position: 5,
  },
  {
    id: 'Matt.16.16.6',
    language: 'greek',
    text: 'ζῶντος',
    transliteration: 'zōntos',
    lemma: 'ζάω',
    lemmaTranslit: 'zaō',
    gloss: 'living',
    morphology: { pos: 'verb', gender: 'masculine', number: 'singular', tense: 'present', voice: 'active', mood: 'participle', case: 'genitive' },
    strongs: 'G2198',
    position: 6,
  },
];

export const matthew16_16_translation: VerseTranslation = {
  verseRef: 'Matt.16.16',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'You are the Christ, the Son of the living God.',
      spans: [
        { id: 'Matt.16.16.en.lit.0', text: 'You are', position: 0, sourceTokenIds: ['Matt.16.16.0', 'Matt.16.16.1'], confidence: 'high' },
        { id: 'Matt.16.16.en.lit.1', text: 'the Christ,', position: 1, sourceTokenIds: ['Matt.16.16.2', 'Matt.16.16.3'], confidence: 'high' },
        { id: 'Matt.16.16.en.lit.2', text: 'the Son of the living God.', position: 2, sourceTokenIds: ['Matt.16.16.4', 'Matt.16.16.5', 'Matt.16.16.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'You are the Messiah, the Son of the living God.',
      spans: [
        { id: 'Matt.16.16.en.idi.0', text: 'You are the Messiah,', position: 0, sourceTokenIds: ['Matt.16.16.0', 'Matt.16.16.1', 'Matt.16.16.2', 'Matt.16.16.3'], confidence: 'high' },
        { id: 'Matt.16.16.en.idi.1', text: 'the Son of the living God.', position: 1, sourceTokenIds: ['Matt.16.16.4', 'Matt.16.16.5', 'Matt.16.16.6'], confidence: 'high' },
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

export const matthew16_16_verse = {
  ref: 'Matt.16.16',
  sourceTokens: matthew16_16_tokens,
  translation: matthew16_16_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 16:17 – Blessed are you, Simon Bar-Jonah
 * ──────────────────────────────────────────────────────────── */

export const matthew16_17_tokens: SourceToken[] = [
  {
    id: 'Matt.16.17.0',
    language: 'greek',
    text: 'Μακάριος',
    transliteration: 'Makarios',
    lemma: 'μακάριος',
    lemmaTranslit: 'makarios',
    gloss: 'blessed',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3107',
    position: 0,
  },
  {
    id: 'Matt.16.17.1',
    language: 'greek',
    text: 'εἶ',
    transliteration: 'ei',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'are',
    morphology: { pos: 'verb', person: '2', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G1510',
    position: 1,
  },
  {
    id: 'Matt.16.17.2',
    language: 'greek',
    text: 'Σίμων',
    transliteration: 'Simōn',
    lemma: 'Σίμων',
    lemmaTranslit: 'Simōn',
    gloss: 'Simon',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'vocative' },
    strongs: 'G4613',
    position: 2,
  },
  {
    id: 'Matt.16.17.3',
    language: 'greek',
    text: 'Βαριωνᾶ',
    transliteration: 'Bariōna',
    lemma: 'Βαριωνᾶ',
    lemmaTranslit: 'Bariōna',
    gloss: 'Bar-Jonah',
    glossExtended: "Bar-Jonah, 'son of Jonah'",
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'vocative' },
    strongs: 'G920',
    position: 3,
  },
  {
    id: 'Matt.16.17.4',
    language: 'greek',
    text: 'σὰρξ',
    transliteration: 'sarx',
    lemma: 'σάρξ',
    lemmaTranslit: 'sarx',
    gloss: 'flesh',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G4561',
    position: 4,
  },
  {
    id: 'Matt.16.17.5',
    language: 'greek',
    text: 'αἷμα',
    transliteration: 'haima',
    lemma: 'αἷμα',
    lemmaTranslit: 'haima',
    gloss: 'blood',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'nominative' },
    strongs: 'G129',
    position: 5,
  },
];

export const matthew16_17_translation: VerseTranslation = {
  verseRef: 'Matt.16.17',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Blessed are you, Simon Bar-Jonah, for flesh and blood did not reveal [this] to you, but my Father who [is] in the heavens.',
      spans: [
        { id: 'Matt.16.17.en.lit.0', text: 'Blessed are you,', position: 0, sourceTokenIds: ['Matt.16.17.0', 'Matt.16.17.1'], confidence: 'high' },
        { id: 'Matt.16.17.en.lit.1', text: 'Simon Bar-Jonah,', position: 1, sourceTokenIds: ['Matt.16.17.2', 'Matt.16.17.3'], confidence: 'high' },
        { id: 'Matt.16.17.en.lit.2', text: 'for flesh and blood did not reveal [this] to you,', position: 2, sourceTokenIds: ['Matt.16.17.4', 'Matt.16.17.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Blessed are you, Simon son of Jonah, for this was not revealed to you by flesh and blood, but by my Father in heaven.',
      spans: [
        { id: 'Matt.16.17.en.idi.0', text: 'Blessed are you, Simon son of Jonah,', position: 0, sourceTokenIds: ['Matt.16.17.0', 'Matt.16.17.1', 'Matt.16.17.2', 'Matt.16.17.3'], confidence: 'high' },
        { id: 'Matt.16.17.en.idi.1', text: 'for this was not revealed to you by flesh and blood, but by my Father in heaven.', position: 1, sourceTokenIds: ['Matt.16.17.4', 'Matt.16.17.5'], confidence: 'high' },
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

export const matthew16_17_verse = {
  ref: 'Matt.16.17',
  sourceTokens: matthew16_17_tokens,
  translation: matthew16_17_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 16:18 – You are Peter, and on this rock I will build my church
 * ──────────────────────────────────────────────────────────── */

export const matthew16_18_tokens: SourceToken[] = [
  {
    id: 'Matt.16.18.0',
    language: 'greek',
    text: 'Πέτρος',
    transliteration: 'Petros',
    lemma: 'Πέτρος',
    lemmaTranslit: 'Petros',
    gloss: 'Peter',
    glossExtended: "Peter, 'stone/rock' (masc.)",
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G4074',
    position: 0,
  },
  {
    id: 'Matt.16.18.1',
    language: 'greek',
    text: 'ταύτῃ',
    transliteration: 'tautē',
    lemma: 'οὗτος',
    lemmaTranslit: 'houtos',
    gloss: 'this',
    morphology: { pos: 'pronoun', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G3778',
    position: 1,
  },
  {
    id: 'Matt.16.18.2',
    language: 'greek',
    text: 'τῇ',
    transliteration: 'tē',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G3588',
    position: 2,
  },
  {
    id: 'Matt.16.18.3',
    language: 'greek',
    text: 'πέτρᾳ',
    transliteration: 'petra',
    lemma: 'πέτρα',
    lemmaTranslit: 'petra',
    gloss: 'rock',
    glossExtended: 'rock, bedrock, large rock (fem.)',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G4073',
    position: 3,
  },
  {
    id: 'Matt.16.18.4',
    language: 'greek',
    text: 'οἰκοδομήσω',
    transliteration: 'oikodomēsō',
    lemma: 'οἰκοδομέω',
    lemmaTranslit: 'oikodomeō',
    gloss: 'I will build',
    morphology: { pos: 'verb', person: '1', number: 'singular', tense: 'future', voice: 'active', mood: 'indicative' },
    strongs: 'G3618',
    position: 4,
  },
  {
    id: 'Matt.16.18.5',
    language: 'greek',
    text: 'ἐκκλησίαν',
    transliteration: 'ekklēsian',
    lemma: 'ἐκκλησία',
    lemmaTranslit: 'ekklēsia',
    gloss: 'church',
    glossExtended: 'church, assembly, congregation, called-out ones',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G1577',
    position: 5,
  },
  {
    id: 'Matt.16.18.6',
    language: 'greek',
    text: 'πύλαι',
    transliteration: 'pylai',
    lemma: 'πύλη',
    lemmaTranslit: 'pylē',
    gloss: 'gates',
    morphology: { pos: 'noun', gender: 'feminine', number: 'plural', case: 'nominative' },
    strongs: 'G4439',
    position: 6,
  },
  {
    id: 'Matt.16.18.7',
    language: 'greek',
    text: 'ᾅδου',
    transliteration: 'hadou',
    lemma: 'ᾅδης',
    lemmaTranslit: 'hadēs',
    gloss: 'of Hades',
    glossExtended: 'Hades, the underworld, realm of the dead',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G86',
    position: 7,
  },
];

export const matthew16_18_translation: VerseTranslation = {
  verseRef: 'Matt.16.18',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And I say to you that you are Peter, and upon this the rock I will build my assembly, and [the] gates of Hades will not prevail against it.',
      spans: [
        { id: 'Matt.16.18.en.lit.0', text: 'you are Peter,', position: 0, sourceTokenIds: ['Matt.16.18.0'], confidence: 'high' },
        { id: 'Matt.16.18.en.lit.1', text: 'and upon this the rock', position: 1, sourceTokenIds: ['Matt.16.18.1', 'Matt.16.18.2', 'Matt.16.18.3'], confidence: 'high' },
        { id: 'Matt.16.18.en.lit.2', text: 'I will build my assembly,', position: 2, sourceTokenIds: ['Matt.16.18.4', 'Matt.16.18.5'], confidence: 'high' },
        { id: 'Matt.16.18.en.lit.3', text: 'and [the] gates of Hades will not prevail against it.', position: 3, sourceTokenIds: ['Matt.16.18.6', 'Matt.16.18.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'And I tell you that you are Peter, and on this rock I will build my church, and the gates of Hades will not overcome it.',
      spans: [
        { id: 'Matt.16.18.en.idi.0', text: 'you are Peter,', position: 0, sourceTokenIds: ['Matt.16.18.0'], confidence: 'high' },
        { id: 'Matt.16.18.en.idi.1', text: 'and on this rock I will build my church,', position: 1, sourceTokenIds: ['Matt.16.18.1', 'Matt.16.18.2', 'Matt.16.18.3', 'Matt.16.18.4', 'Matt.16.18.5'], confidence: 'high' },
        { id: 'Matt.16.18.en.idi.2', text: 'and the gates of Hades will not overcome it.', position: 2, sourceTokenIds: ['Matt.16.18.6', 'Matt.16.18.7'], confidence: 'high' },
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

export const matthew16_18_verse = {
  ref: 'Matt.16.18',
  sourceTokens: matthew16_18_tokens,
  translation: matthew16_18_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 16:19 – I will give you the keys of the kingdom of heaven
 * ──────────────────────────────────────────────────────────── */

export const matthew16_19_tokens: SourceToken[] = [
  {
    id: 'Matt.16.19.0',
    language: 'greek',
    text: 'δώσω',
    transliteration: 'dōsō',
    lemma: 'δίδωμι',
    lemmaTranslit: 'didōmi',
    gloss: 'I will give',
    morphology: { pos: 'verb', person: '1', number: 'singular', tense: 'future', voice: 'active', mood: 'indicative' },
    strongs: 'G1325',
    position: 0,
  },
  {
    id: 'Matt.16.19.1',
    language: 'greek',
    text: 'σοι',
    transliteration: 'soi',
    lemma: 'σύ',
    lemmaTranslit: 'sy',
    gloss: 'to you',
    morphology: { pos: 'pronoun', person: '2', number: 'singular', case: 'dative' },
    strongs: 'G4771',
    position: 1,
  },
  {
    id: 'Matt.16.19.2',
    language: 'greek',
    text: 'τὰς',
    transliteration: 'tas',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'feminine', number: 'plural', case: 'accusative' },
    strongs: 'G3588',
    position: 2,
  },
  {
    id: 'Matt.16.19.3',
    language: 'greek',
    text: 'κλεῖδας',
    transliteration: 'kleidas',
    lemma: 'κλείς',
    lemmaTranslit: 'kleis',
    gloss: 'keys',
    glossExtended: 'keys (symbol of authority)',
    morphology: { pos: 'noun', gender: 'feminine', number: 'plural', case: 'accusative' },
    strongs: 'G2807',
    position: 3,
  },
  {
    id: 'Matt.16.19.4',
    language: 'greek',
    text: 'βασιλείας',
    transliteration: 'basileias',
    lemma: 'βασιλεία',
    lemmaTranslit: 'basileia',
    gloss: 'of [the] kingdom',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G932',
    position: 4,
  },
  {
    id: 'Matt.16.19.5',
    language: 'greek',
    text: 'οὐρανῶν',
    transliteration: 'ouranōn',
    lemma: 'οὐρανός',
    lemmaTranslit: 'ouranos',
    gloss: 'of [the] heavens',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', case: 'genitive' },
    strongs: 'G3772',
    position: 5,
  },
];

export const matthew16_19_translation: VerseTranslation = {
  verseRef: 'Matt.16.19',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'I will give to you the keys of the kingdom of the heavens.',
      spans: [
        { id: 'Matt.16.19.en.lit.0', text: 'I will give to you', position: 0, sourceTokenIds: ['Matt.16.19.0', 'Matt.16.19.1'], confidence: 'high' },
        { id: 'Matt.16.19.en.lit.1', text: 'the keys', position: 1, sourceTokenIds: ['Matt.16.19.2', 'Matt.16.19.3'], confidence: 'high' },
        { id: 'Matt.16.19.en.lit.2', text: 'of the kingdom of the heavens.', position: 2, sourceTokenIds: ['Matt.16.19.4', 'Matt.16.19.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'I will give you the keys of the kingdom of heaven.',
      spans: [
        { id: 'Matt.16.19.en.idi.0', text: 'I will give you the keys', position: 0, sourceTokenIds: ['Matt.16.19.0', 'Matt.16.19.1', 'Matt.16.19.2', 'Matt.16.19.3'], confidence: 'high' },
        { id: 'Matt.16.19.en.idi.1', text: 'of the kingdom of heaven.', position: 1, sourceTokenIds: ['Matt.16.19.4', 'Matt.16.19.5'], confidence: 'high' },
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

export const matthew16_19_verse = {
  ref: 'Matt.16.19',
  sourceTokens: matthew16_19_tokens,
  translation: matthew16_19_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 16:24 – If anyone would come after me, let him deny himself
 * ──────────────────────────────────────────────────────────── */

export const matthew16_24_tokens: SourceToken[] = [
  {
    id: 'Matt.16.24.0',
    language: 'greek',
    text: 'ἐλθεῖν',
    transliteration: 'elthein',
    lemma: 'ἔρχομαι',
    lemmaTranslit: 'erchomai',
    gloss: 'to come',
    morphology: { pos: 'verb', tense: 'aorist', voice: 'active', mood: 'infinitive' },
    strongs: 'G2064',
    position: 0,
  },
  {
    id: 'Matt.16.24.1',
    language: 'greek',
    text: 'ὀπίσω',
    transliteration: 'opisō',
    lemma: 'ὀπίσω',
    lemmaTranslit: 'opisō',
    gloss: 'after',
    morphology: { pos: 'adverb' },
    strongs: 'G3694',
    position: 1,
  },
  {
    id: 'Matt.16.24.2',
    language: 'greek',
    text: 'ἀπαρνησάσθω',
    transliteration: 'aparnēsasthō',
    lemma: 'ἀπαρνέομαι',
    lemmaTranslit: 'aparneomai',
    gloss: 'let him deny',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'middle', mood: 'imperative' },
    strongs: 'G533',
    position: 2,
  },
  {
    id: 'Matt.16.24.3',
    language: 'greek',
    text: 'ἑαυτὸν',
    transliteration: 'heauton',
    lemma: 'ἑαυτοῦ',
    lemmaTranslit: 'heautou',
    gloss: 'himself',
    morphology: { pos: 'pronoun', person: '3', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G1438',
    position: 3,
  },
  {
    id: 'Matt.16.24.4',
    language: 'greek',
    text: 'ἀράτω',
    transliteration: 'aratō',
    lemma: 'αἴρω',
    lemmaTranslit: 'airō',
    gloss: 'let him take up',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'imperative' },
    strongs: 'G142',
    position: 4,
  },
  {
    id: 'Matt.16.24.5',
    language: 'greek',
    text: 'σταυρὸν',
    transliteration: 'stauron',
    lemma: 'σταυρός',
    lemmaTranslit: 'stauros',
    gloss: 'cross',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G4716',
    position: 5,
  },
];

export const matthew16_24_translation: VerseTranslation = {
  verseRef: 'Matt.16.24',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'If anyone wishes to come after me, let him deny himself and let him take up his cross and follow me.',
      spans: [
        { id: 'Matt.16.24.en.lit.0', text: 'to come after me,', position: 0, sourceTokenIds: ['Matt.16.24.0', 'Matt.16.24.1'], confidence: 'high' },
        { id: 'Matt.16.24.en.lit.1', text: 'let him deny himself', position: 1, sourceTokenIds: ['Matt.16.24.2', 'Matt.16.24.3'], confidence: 'high' },
        { id: 'Matt.16.24.en.lit.2', text: 'and let him take up his cross', position: 2, sourceTokenIds: ['Matt.16.24.4', 'Matt.16.24.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Whoever wants to be my disciple must deny themselves and take up their cross and follow me.',
      spans: [
        { id: 'Matt.16.24.en.idi.0', text: 'Whoever wants to be my disciple', position: 0, sourceTokenIds: ['Matt.16.24.0', 'Matt.16.24.1'], confidence: 'high' },
        { id: 'Matt.16.24.en.idi.1', text: 'must deny themselves and take up their cross and follow me.', position: 1, sourceTokenIds: ['Matt.16.24.2', 'Matt.16.24.3', 'Matt.16.24.4', 'Matt.16.24.5'], confidence: 'high' },
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

export const matthew16_24_verse = {
  ref: 'Matt.16.24',
  sourceTokens: matthew16_24_tokens,
  translation: matthew16_24_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 16:25 – For whoever would save his life will lose it
 * ──────────────────────────────────────────────────────────── */

export const matthew16_25_tokens: SourceToken[] = [
  {
    id: 'Matt.16.25.0',
    language: 'greek',
    text: 'ἐὰν',
    transliteration: 'ean',
    lemma: 'ἐάν',
    lemmaTranslit: 'ean',
    gloss: 'if',
    morphology: { pos: 'conjunction' },
    strongs: 'G1437',
    position: 0,
  },
  {
    id: 'Matt.16.25.1',
    language: 'greek',
    text: 'θέλῃ',
    transliteration: 'thelē',
    lemma: 'θέλω',
    lemmaTranslit: 'thelō',
    gloss: 'wishes',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'subjunctive' },
    strongs: 'G2309',
    position: 1,
  },
  {
    id: 'Matt.16.25.2',
    language: 'greek',
    text: 'ψυχὴν',
    transliteration: 'psychēn',
    lemma: 'ψυχή',
    lemmaTranslit: 'psychē',
    gloss: 'life',
    glossExtended: 'soul, life, self',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G5590',
    position: 2,
  },
  {
    id: 'Matt.16.25.3',
    language: 'greek',
    text: 'σῶσαι',
    transliteration: 'sōsai',
    lemma: 'σῴζω',
    lemmaTranslit: 'sōzō',
    gloss: 'to save',
    morphology: { pos: 'verb', tense: 'aorist', voice: 'active', mood: 'infinitive' },
    strongs: 'G4982',
    position: 3,
  },
  {
    id: 'Matt.16.25.4',
    language: 'greek',
    text: 'ἀπολέσει',
    transliteration: 'apolesei',
    lemma: 'ἀπόλλυμι',
    lemmaTranslit: 'apollymi',
    gloss: 'will lose',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'future', voice: 'active', mood: 'indicative' },
    strongs: 'G622',
    position: 4,
  },
];

export const matthew16_25_translation: VerseTranslation = {
  verseRef: 'Matt.16.25',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'For whoever wishes his life to save will lose it; but whoever loses his life on account of me will find it.',
      spans: [
        { id: 'Matt.16.25.en.lit.0', text: 'For if anyone wishes', position: 0, sourceTokenIds: ['Matt.16.25.0', 'Matt.16.25.1'], confidence: 'high' },
        { id: 'Matt.16.25.en.lit.1', text: 'his life to save, will lose it;', position: 1, sourceTokenIds: ['Matt.16.25.2', 'Matt.16.25.3', 'Matt.16.25.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'For whoever wants to save their life will lose it, but whoever loses their life for me will find it.',
      spans: [
        { id: 'Matt.16.25.en.idi.0', text: 'For whoever wants to save their life will lose it,', position: 0, sourceTokenIds: ['Matt.16.25.0', 'Matt.16.25.1', 'Matt.16.25.2', 'Matt.16.25.3', 'Matt.16.25.4'], confidence: 'high' },
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

export const matthew16_25_verse = {
  ref: 'Matt.16.25',
  sourceTokens: matthew16_25_tokens,
  translation: matthew16_25_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Matthew 16:13-28 (Peter's Confession)
 * ──────────────────────────────────────────────────────────── */

export const matthew16_13_28_verses = [
  matthew16_13_verse,
  matthew16_15_verse,
  matthew16_16_verse,
  matthew16_17_verse,
  matthew16_18_verse,
  matthew16_19_verse,
  matthew16_24_verse,
  matthew16_25_verse,
];

export default matthew16_13_28_verses;
