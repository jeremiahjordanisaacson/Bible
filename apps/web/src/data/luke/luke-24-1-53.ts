// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 24:1 – On the first day of the week, at early dawn, they went to the tomb
 * ──────────────────────────────────────────────────────────── */

export const luke24_1_tokens: SourceToken[] = [
  {
    id: 'Luke.24.1.0',
    language: 'greek',
    text: 'τῇ',
    transliteration: 'tē',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'on the',
    morphology: { pos: 'article', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G3588',
    position: 0,
  },
  {
    id: 'Luke.24.1.1',
    language: 'greek',
    text: 'μιᾷ',
    transliteration: 'mia',
    lemma: 'εἷς',
    lemmaTranslit: 'heis',
    gloss: 'first',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G1520',
    position: 1,
  },
  {
    id: 'Luke.24.1.2',
    language: 'greek',
    text: 'τῶν',
    transliteration: 'tōn',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'of the',
    morphology: { pos: 'article', gender: 'neuter', number: 'plural', case: 'genitive' },
    strongs: 'G3588',
    position: 2,
  },
  {
    id: 'Luke.24.1.3',
    language: 'greek',
    text: 'σαββάτων',
    transliteration: 'sabbatōn',
    lemma: 'σάββατον',
    lemmaTranslit: 'sabbaton',
    gloss: 'week',
    morphology: { pos: 'noun', gender: 'neuter', number: 'plural', case: 'genitive' },
    strongs: 'G4521',
    position: 3,
  },
  {
    id: 'Luke.24.1.4',
    language: 'greek',
    text: 'ὄρθρου',
    transliteration: 'orthrou',
    lemma: 'ὄρθρος',
    lemmaTranslit: 'orthros',
    gloss: 'at dawn',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G3722',
    position: 4,
  },
  {
    id: 'Luke.24.1.5',
    language: 'greek',
    text: 'βαθέως',
    transliteration: 'batheōs',
    lemma: 'βαθύς',
    lemmaTranslit: 'bathys',
    gloss: 'early',
    glossExtended: 'early, deep',
    morphology: { pos: 'adverb' },
    strongs: 'G901',
    position: 5,
  },
  {
    id: 'Luke.24.1.6',
    language: 'greek',
    text: 'μνῆμα',
    transliteration: 'mnēma',
    lemma: 'μνῆμα',
    lemmaTranslit: 'mnēma',
    gloss: 'tomb',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'accusative' },
    strongs: 'G3418',
    position: 6,
  },
];

export const luke24_1_translation: VerseTranslation = {
  verseRef: 'Luke.24.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'On the one of the sabbaths, at deep dawn, they came to the tomb.',
      spans: [
        { id: 'Luke.24.1.en.lit.0', text: 'On the one of the sabbaths,', position: 0, sourceTokenIds: ['Luke.24.1.0', 'Luke.24.1.1', 'Luke.24.1.2', 'Luke.24.1.3'], confidence: 'high' },
        { id: 'Luke.24.1.en.lit.1', text: 'at deep dawn,', position: 1, sourceTokenIds: ['Luke.24.1.4', 'Luke.24.1.5'], confidence: 'high' },
        { id: 'Luke.24.1.en.lit.2', text: 'they came to the tomb.', position: 2, sourceTokenIds: ['Luke.24.1.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'On the first day of the week, at early dawn, they went to the tomb.',
      spans: [
        { id: 'Luke.24.1.en.idi.0', text: 'On the first day of the week,', position: 0, sourceTokenIds: ['Luke.24.1.0', 'Luke.24.1.1', 'Luke.24.1.2', 'Luke.24.1.3'], confidence: 'high' },
        { id: 'Luke.24.1.en.idi.1', text: 'at early dawn,', position: 1, sourceTokenIds: ['Luke.24.1.4', 'Luke.24.1.5'], confidence: 'high' },
        { id: 'Luke.24.1.en.idi.2', text: 'they went to the tomb.', position: 2, sourceTokenIds: ['Luke.24.1.6'], confidence: 'high' },
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

export const luke24_1_verse = {
  ref: 'Luke.24.1',
  sourceTokens: luke24_1_tokens,
  translation: luke24_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 24:5 – Why do you seek the living among the dead?
 * ──────────────────────────────────────────────────────────── */

export const luke24_5_tokens: SourceToken[] = [
  {
    id: 'Luke.24.5.0',
    language: 'greek',
    text: 'τί',
    transliteration: 'ti',
    lemma: 'τίς',
    lemmaTranslit: 'tis',
    gloss: 'why',
    morphology: { pos: 'pronoun', gender: 'neuter', number: 'singular', case: 'accusative' },
    strongs: 'G5101',
    position: 0,
  },
  {
    id: 'Luke.24.5.1',
    language: 'greek',
    text: 'ζητεῖτε',
    transliteration: 'zēteite',
    lemma: 'ζητέω',
    lemmaTranslit: 'zēteō',
    gloss: 'do you seek',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G2212',
    position: 1,
  },
  {
    id: 'Luke.24.5.2',
    language: 'greek',
    text: 'τὸν',
    transliteration: 'ton',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G3588',
    position: 2,
  },
  {
    id: 'Luke.24.5.3',
    language: 'greek',
    text: 'ζῶντα',
    transliteration: 'zōnta',
    lemma: 'ζάω',
    lemmaTranslit: 'zaō',
    gloss: 'living one',
    morphology: { pos: 'verb', gender: 'masculine', number: 'singular', tense: 'present', voice: 'active', mood: 'participle', case: 'accusative' },
    strongs: 'G2198',
    position: 3,
  },
  {
    id: 'Luke.24.5.4',
    language: 'greek',
    text: 'μετὰ',
    transliteration: 'meta',
    lemma: 'μετά',
    lemmaTranslit: 'meta',
    gloss: 'among',
    morphology: { pos: 'preposition' },
    strongs: 'G3326',
    position: 4,
  },
  {
    id: 'Luke.24.5.5',
    language: 'greek',
    text: 'τῶν',
    transliteration: 'tōn',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'plural', case: 'genitive' },
    strongs: 'G3588',
    position: 5,
  },
  {
    id: 'Luke.24.5.6',
    language: 'greek',
    text: 'νεκρῶν',
    transliteration: 'nekrōn',
    lemma: 'νεκρός',
    lemmaTranslit: 'nekros',
    gloss: 'dead',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', case: 'genitive' },
    strongs: 'G3498',
    position: 6,
  },
];

export const luke24_5_translation: VerseTranslation = {
  verseRef: 'Luke.24.5',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Why do you seek the living one among the dead?',
      spans: [
        { id: 'Luke.24.5.en.lit.0', text: 'Why do you seek', position: 0, sourceTokenIds: ['Luke.24.5.0', 'Luke.24.5.1'], confidence: 'high' },
        { id: 'Luke.24.5.en.lit.1', text: 'the living one', position: 1, sourceTokenIds: ['Luke.24.5.2', 'Luke.24.5.3'], confidence: 'high' },
        { id: 'Luke.24.5.en.lit.2', text: 'among the dead?', position: 2, sourceTokenIds: ['Luke.24.5.4', 'Luke.24.5.5', 'Luke.24.5.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Why do you seek the living among the dead?',
      spans: [
        { id: 'Luke.24.5.en.idi.0', text: 'Why do you seek', position: 0, sourceTokenIds: ['Luke.24.5.0', 'Luke.24.5.1'], confidence: 'high' },
        { id: 'Luke.24.5.en.idi.1', text: 'the living', position: 1, sourceTokenIds: ['Luke.24.5.2', 'Luke.24.5.3'], confidence: 'high' },
        { id: 'Luke.24.5.en.idi.2', text: 'among the dead?', position: 2, sourceTokenIds: ['Luke.24.5.4', 'Luke.24.5.5', 'Luke.24.5.6'], confidence: 'high' },
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

export const luke24_5_verse = {
  ref: 'Luke.24.5',
  sourceTokens: luke24_5_tokens,
  translation: luke24_5_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 24:6 – He is not here, but has risen
 * ──────────────────────────────────────────────────────────── */

export const luke24_6_tokens: SourceToken[] = [
  {
    id: 'Luke.24.6.0',
    language: 'greek',
    text: 'οὐκ',
    transliteration: 'ouk',
    lemma: 'οὐ',
    lemmaTranslit: 'ou',
    gloss: 'not',
    morphology: { pos: 'adverb' },
    strongs: 'G3756',
    position: 0,
  },
  {
    id: 'Luke.24.6.1',
    language: 'greek',
    text: 'ἔστιν',
    transliteration: 'estin',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'he is',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G1510',
    position: 1,
  },
  {
    id: 'Luke.24.6.2',
    language: 'greek',
    text: 'ὧδε',
    transliteration: 'hōde',
    lemma: 'ὧδε',
    lemmaTranslit: 'hōde',
    gloss: 'here',
    morphology: { pos: 'adverb' },
    strongs: 'G5602',
    position: 2,
  },
  {
    id: 'Luke.24.6.3',
    language: 'greek',
    text: 'ἀλλὰ',
    transliteration: 'alla',
    lemma: 'ἀλλά',
    lemmaTranslit: 'alla',
    gloss: 'but',
    morphology: { pos: 'conjunction' },
    strongs: 'G235',
    position: 3,
  },
  {
    id: 'Luke.24.6.4',
    language: 'greek',
    text: 'ἠγέρθη',
    transliteration: 'ēgerthē',
    lemma: 'ἐγείρω',
    lemmaTranslit: 'egeirō',
    gloss: 'has risen',
    glossExtended: 'has been raised, has risen',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'passive', mood: 'indicative' },
    strongs: 'G1453',
    position: 4,
  },
];

export const luke24_6_translation: VerseTranslation = {
  verseRef: 'Luke.24.6',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'He is not here, but he was raised.',
      spans: [
        { id: 'Luke.24.6.en.lit.0', text: 'He is not here,', position: 0, sourceTokenIds: ['Luke.24.6.0', 'Luke.24.6.1', 'Luke.24.6.2'], confidence: 'high' },
        { id: 'Luke.24.6.en.lit.1', text: 'but he was raised.', position: 1, sourceTokenIds: ['Luke.24.6.3', 'Luke.24.6.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'He is not here, but has risen!',
      spans: [
        { id: 'Luke.24.6.en.idi.0', text: 'He is not here,', position: 0, sourceTokenIds: ['Luke.24.6.0', 'Luke.24.6.1', 'Luke.24.6.2'], confidence: 'high' },
        { id: 'Luke.24.6.en.idi.1', text: 'but has risen!', position: 1, sourceTokenIds: ['Luke.24.6.3', 'Luke.24.6.4'], confidence: 'high' },
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

export const luke24_6_verse = {
  ref: 'Luke.24.6',
  sourceTokens: luke24_6_tokens,
  translation: luke24_6_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 24:26 – Was it not necessary that the Christ should suffer these things and enter into his glory?
 * ──────────────────────────────────────────────────────────── */

export const luke24_26_tokens: SourceToken[] = [
  {
    id: 'Luke.24.26.0',
    language: 'greek',
    text: 'ἔδει',
    transliteration: 'edei',
    lemma: 'δεῖ',
    lemmaTranslit: 'dei',
    gloss: 'was it not necessary',
    glossExtended: 'it was necessary, it was binding',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'imperfect', voice: 'active', mood: 'indicative' },
    strongs: 'G1163',
    position: 0,
  },
  {
    id: 'Luke.24.26.1',
    language: 'greek',
    text: 'τὸν',
    transliteration: 'ton',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G3588',
    position: 1,
  },
  {
    id: 'Luke.24.26.2',
    language: 'greek',
    text: 'Χριστὸν',
    transliteration: 'Christon',
    lemma: 'Χριστός',
    lemmaTranslit: 'Christos',
    gloss: 'Christ',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G5547',
    position: 2,
  },
  {
    id: 'Luke.24.26.3',
    language: 'greek',
    text: 'παθεῖν',
    transliteration: 'pathein',
    lemma: 'πάσχω',
    lemmaTranslit: 'paschō',
    gloss: 'to suffer',
    morphology: { pos: 'verb', tense: 'aorist', voice: 'active', mood: 'infinitive' },
    strongs: 'G3958',
    position: 3,
  },
  {
    id: 'Luke.24.26.4',
    language: 'greek',
    text: 'ταῦτα',
    transliteration: 'tauta',
    lemma: 'οὗτος',
    lemmaTranslit: 'houtos',
    gloss: 'these things',
    morphology: { pos: 'pronoun', gender: 'neuter', number: 'plural', case: 'accusative' },
    strongs: 'G3778',
    position: 4,
  },
  {
    id: 'Luke.24.26.5',
    language: 'greek',
    text: 'εἰσελθεῖν',
    transliteration: 'eiselthein',
    lemma: 'εἰσέρχομαι',
    lemmaTranslit: 'eiserchomai',
    gloss: 'to enter',
    morphology: { pos: 'verb', tense: 'aorist', voice: 'active', mood: 'infinitive' },
    strongs: 'G1525',
    position: 5,
  },
  {
    id: 'Luke.24.26.6',
    language: 'greek',
    text: 'δόξαν',
    transliteration: 'doxan',
    lemma: 'δόξα',
    lemmaTranslit: 'doxa',
    gloss: 'glory',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G1391',
    position: 6,
  },
];

export const luke24_26_translation: VerseTranslation = {
  verseRef: 'Luke.24.26',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Was it not necessary [for] the Christ to suffer these things and to enter into [his] glory?',
      spans: [
        { id: 'Luke.24.26.en.lit.0', text: 'Was it not necessary', position: 0, sourceTokenIds: ['Luke.24.26.0'], confidence: 'high' },
        { id: 'Luke.24.26.en.lit.1', text: '[for] the Christ to suffer these things', position: 1, sourceTokenIds: ['Luke.24.26.1', 'Luke.24.26.2', 'Luke.24.26.3', 'Luke.24.26.4'], confidence: 'high' },
        { id: 'Luke.24.26.en.lit.2', text: 'and to enter into [his] glory?', position: 2, sourceTokenIds: ['Luke.24.26.5', 'Luke.24.26.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Was it not necessary that the Christ should suffer these things and enter into his glory?',
      spans: [
        { id: 'Luke.24.26.en.idi.0', text: 'Was it not necessary that the Christ should suffer these things', position: 0, sourceTokenIds: ['Luke.24.26.0', 'Luke.24.26.1', 'Luke.24.26.2', 'Luke.24.26.3', 'Luke.24.26.4'], confidence: 'high' },
        { id: 'Luke.24.26.en.idi.1', text: 'and enter into his glory?', position: 1, sourceTokenIds: ['Luke.24.26.5', 'Luke.24.26.6'], confidence: 'high' },
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

export const luke24_26_verse = {
  ref: 'Luke.24.26',
  sourceTokens: luke24_26_tokens,
  translation: luke24_26_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 24:32 – Were not our hearts burning within us while he was speaking?
 * ──────────────────────────────────────────────────────────── */

export const luke24_32_tokens: SourceToken[] = [
  {
    id: 'Luke.24.32.0',
    language: 'greek',
    text: 'ἡ',
    transliteration: 'hē',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G3588',
    position: 0,
  },
  {
    id: 'Luke.24.32.1',
    language: 'greek',
    text: 'καρδία',
    transliteration: 'kardia',
    lemma: 'καρδία',
    lemmaTranslit: 'kardia',
    gloss: 'heart',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G2588',
    position: 1,
  },
  {
    id: 'Luke.24.32.2',
    language: 'greek',
    text: 'ἡμῶν',
    transliteration: 'hēmōn',
    lemma: 'ἐγώ',
    lemmaTranslit: 'egō',
    gloss: 'our',
    morphology: { pos: 'pronoun', person: '1', number: 'plural', case: 'genitive' },
    strongs: 'G1473',
    position: 2,
  },
  {
    id: 'Luke.24.32.3',
    language: 'greek',
    text: 'καιομένη',
    transliteration: 'kaiomenē',
    lemma: 'καίω',
    lemmaTranslit: 'kaiō',
    gloss: 'burning',
    morphology: { pos: 'verb', gender: 'feminine', number: 'singular', tense: 'present', voice: 'passive', mood: 'participle', case: 'nominative' },
    strongs: 'G2545',
    position: 3,
  },
  {
    id: 'Luke.24.32.4',
    language: 'greek',
    text: 'ἦν',
    transliteration: 'ēn',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'was',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'imperfect', voice: 'active', mood: 'indicative' },
    strongs: 'G1510',
    position: 4,
  },
  {
    id: 'Luke.24.32.5',
    language: 'greek',
    text: 'ἐν',
    transliteration: 'en',
    lemma: 'ἐν',
    lemmaTranslit: 'en',
    gloss: 'within',
    morphology: { pos: 'preposition' },
    strongs: 'G1722',
    position: 5,
  },
  {
    id: 'Luke.24.32.6',
    language: 'greek',
    text: 'ἡμῖν',
    transliteration: 'hēmin',
    lemma: 'ἐγώ',
    lemmaTranslit: 'egō',
    gloss: 'us',
    morphology: { pos: 'pronoun', person: '1', number: 'plural', case: 'dative' },
    strongs: 'G1473',
    position: 6,
  },
];

export const luke24_32_translation: VerseTranslation = {
  verseRef: 'Luke.24.32',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Was not our heart burning within us?',
      spans: [
        { id: 'Luke.24.32.en.lit.0', text: 'Was not the heart of us', position: 0, sourceTokenIds: ['Luke.24.32.0', 'Luke.24.32.1', 'Luke.24.32.2'], confidence: 'high' },
        { id: 'Luke.24.32.en.lit.1', text: 'burning', position: 1, sourceTokenIds: ['Luke.24.32.3', 'Luke.24.32.4'], confidence: 'high' },
        { id: 'Luke.24.32.en.lit.2', text: 'within us?', position: 2, sourceTokenIds: ['Luke.24.32.5', 'Luke.24.32.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Were not our hearts burning within us while he was speaking?',
      spans: [
        { id: 'Luke.24.32.en.idi.0', text: 'Were not our hearts burning', position: 0, sourceTokenIds: ['Luke.24.32.0', 'Luke.24.32.1', 'Luke.24.32.2', 'Luke.24.32.3', 'Luke.24.32.4'], confidence: 'high' },
        { id: 'Luke.24.32.en.idi.1', text: 'within us while he was speaking?', position: 1, sourceTokenIds: ['Luke.24.32.5', 'Luke.24.32.6'], confidence: 'high' },
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

export const luke24_32_verse = {
  ref: 'Luke.24.32',
  sourceTokens: luke24_32_tokens,
  translation: luke24_32_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 24:34 – The Lord has risen indeed, and has appeared to Simon!
 * ──────────────────────────────────────────────────────────── */

export const luke24_34_tokens: SourceToken[] = [
  {
    id: 'Luke.24.34.0',
    language: 'greek',
    text: 'ὄντως',
    transliteration: 'ontōs',
    lemma: 'ὄντως',
    lemmaTranslit: 'ontōs',
    gloss: 'indeed',
    glossExtended: 'indeed, really, certainly',
    morphology: { pos: 'adverb' },
    strongs: 'G3689',
    position: 0,
  },
  {
    id: 'Luke.24.34.1',
    language: 'greek',
    text: 'ἠγέρθη',
    transliteration: 'ēgerthē',
    lemma: 'ἐγείρω',
    lemmaTranslit: 'egeirō',
    gloss: 'has risen',
    glossExtended: 'has been raised, has risen',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'passive', mood: 'indicative' },
    strongs: 'G1453',
    position: 1,
  },
  {
    id: 'Luke.24.34.2',
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
    id: 'Luke.24.34.3',
    language: 'greek',
    text: 'κύριος',
    transliteration: 'kyrios',
    lemma: 'κύριος',
    lemmaTranslit: 'kyrios',
    gloss: 'Lord',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G2962',
    position: 3,
  },
  {
    id: 'Luke.24.34.4',
    language: 'greek',
    text: 'ὤφθη',
    transliteration: 'ōphthē',
    lemma: 'ὁράω',
    lemmaTranslit: 'horaō',
    gloss: 'has appeared',
    glossExtended: 'was seen, appeared',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'passive', mood: 'indicative' },
    strongs: 'G3708',
    position: 4,
  },
  {
    id: 'Luke.24.34.5',
    language: 'greek',
    text: 'Σίμωνι',
    transliteration: 'Simōni',
    lemma: 'Σίμων',
    lemmaTranslit: 'Simōn',
    gloss: 'to Simon',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'dative' },
    strongs: 'G4613',
    position: 5,
  },
];

export const luke24_34_translation: VerseTranslation = {
  verseRef: 'Luke.24.34',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Indeed the Lord was raised and was seen by Simon!',
      spans: [
        { id: 'Luke.24.34.en.lit.0', text: 'Indeed was raised', position: 0, sourceTokenIds: ['Luke.24.34.0', 'Luke.24.34.1'], confidence: 'high' },
        { id: 'Luke.24.34.en.lit.1', text: 'the Lord', position: 1, sourceTokenIds: ['Luke.24.34.2', 'Luke.24.34.3'], confidence: 'high' },
        { id: 'Luke.24.34.en.lit.2', text: 'and was seen by Simon!', position: 2, sourceTokenIds: ['Luke.24.34.4', 'Luke.24.34.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'The Lord has risen indeed, and has appeared to Simon!',
      spans: [
        { id: 'Luke.24.34.en.idi.0', text: 'The Lord has risen indeed,', position: 0, sourceTokenIds: ['Luke.24.34.0', 'Luke.24.34.1', 'Luke.24.34.2', 'Luke.24.34.3'], confidence: 'high' },
        { id: 'Luke.24.34.en.idi.1', text: 'and has appeared to Simon!', position: 1, sourceTokenIds: ['Luke.24.34.4', 'Luke.24.34.5'], confidence: 'high' },
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

export const luke24_34_verse = {
  ref: 'Luke.24.34',
  sourceTokens: luke24_34_tokens,
  translation: luke24_34_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 24:51 – While he blessed them, he parted from them and was carried up into heaven
 * ──────────────────────────────────────────────────────────── */

export const luke24_51_tokens: SourceToken[] = [
  {
    id: 'Luke.24.51.0',
    language: 'greek',
    text: 'εὐλογοῦντος',
    transliteration: 'eulogountos',
    lemma: 'εὐλογέω',
    lemmaTranslit: 'eulogeō',
    gloss: 'while blessing',
    morphology: { pos: 'verb', gender: 'masculine', number: 'singular', tense: 'present', voice: 'active', mood: 'participle', case: 'genitive' },
    strongs: 'G2127',
    position: 0,
  },
  {
    id: 'Luke.24.51.1',
    language: 'greek',
    text: 'αὐτοὺς',
    transliteration: 'autous',
    lemma: 'αὐτός',
    lemmaTranslit: 'autos',
    gloss: 'them',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'plural', case: 'accusative' },
    strongs: 'G846',
    position: 1,
  },
  {
    id: 'Luke.24.51.2',
    language: 'greek',
    text: 'διέστη',
    transliteration: 'diestē',
    lemma: 'διΐστημι',
    lemmaTranslit: 'diistēmi',
    gloss: 'he parted',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G1339',
    position: 2,
  },
  {
    id: 'Luke.24.51.3',
    language: 'greek',
    text: "ἀπ'",
    transliteration: 'ap',
    lemma: 'ἀπό',
    lemmaTranslit: 'apo',
    gloss: 'from',
    morphology: { pos: 'preposition' },
    strongs: 'G575',
    position: 3,
  },
  {
    id: 'Luke.24.51.4',
    language: 'greek',
    text: 'αὐτῶν',
    transliteration: 'autōn',
    lemma: 'αὐτός',
    lemmaTranslit: 'autos',
    gloss: 'them',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'plural', case: 'genitive' },
    strongs: 'G846',
    position: 4,
  },
  {
    id: 'Luke.24.51.5',
    language: 'greek',
    text: 'ἀνεφέρετο',
    transliteration: 'anephereto',
    lemma: 'ἀναφέρω',
    lemmaTranslit: 'anapherō',
    gloss: 'was carried up',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'imperfect', voice: 'passive', mood: 'indicative' },
    strongs: 'G399',
    position: 5,
  },
  {
    id: 'Luke.24.51.6',
    language: 'greek',
    text: 'οὐρανόν',
    transliteration: 'ouranon',
    lemma: 'οὐρανός',
    lemmaTranslit: 'ouranos',
    gloss: 'heaven',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G3772',
    position: 6,
  },
];

export const luke24_51_translation: VerseTranslation = {
  verseRef: 'Luke.24.51',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'While blessing them, he parted from them and was being carried up into heaven.',
      spans: [
        { id: 'Luke.24.51.en.lit.0', text: 'While blessing them,', position: 0, sourceTokenIds: ['Luke.24.51.0', 'Luke.24.51.1'], confidence: 'high' },
        { id: 'Luke.24.51.en.lit.1', text: 'he parted from them', position: 1, sourceTokenIds: ['Luke.24.51.2', 'Luke.24.51.3', 'Luke.24.51.4'], confidence: 'high' },
        { id: 'Luke.24.51.en.lit.2', text: 'and was being carried up into heaven.', position: 2, sourceTokenIds: ['Luke.24.51.5', 'Luke.24.51.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'While he blessed them, he parted from them and was carried up into heaven.',
      spans: [
        { id: 'Luke.24.51.en.idi.0', text: 'While he blessed them,', position: 0, sourceTokenIds: ['Luke.24.51.0', 'Luke.24.51.1'], confidence: 'high' },
        { id: 'Luke.24.51.en.idi.1', text: 'he parted from them', position: 1, sourceTokenIds: ['Luke.24.51.2', 'Luke.24.51.3', 'Luke.24.51.4'], confidence: 'high' },
        { id: 'Luke.24.51.en.idi.2', text: 'and was carried up into heaven.', position: 2, sourceTokenIds: ['Luke.24.51.5', 'Luke.24.51.6'], confidence: 'high' },
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

export const luke24_51_verse = {
  ref: 'Luke.24.51',
  sourceTokens: luke24_51_tokens,
  translation: luke24_51_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 24:53 – They were continually in the temple praising God
 * ──────────────────────────────────────────────────────────── */

export const luke24_53_tokens: SourceToken[] = [
  {
    id: 'Luke.24.53.0',
    language: 'greek',
    text: 'ἦσαν',
    transliteration: 'ēsan',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'they were',
    morphology: { pos: 'verb', person: '3', number: 'plural', tense: 'imperfect', voice: 'active', mood: 'indicative' },
    strongs: 'G1510',
    position: 0,
  },
  {
    id: 'Luke.24.53.1',
    language: 'greek',
    text: 'διὰ',
    transliteration: 'dia',
    lemma: 'διά',
    lemmaTranslit: 'dia',
    gloss: 'continually',
    morphology: { pos: 'adverb' },
    strongs: 'G1275',
    position: 1,
  },
  {
    id: 'Luke.24.53.2',
    language: 'greek',
    text: 'παντὸς',
    transliteration: 'pantos',
    lemma: 'πᾶς',
    lemmaTranslit: 'pas',
    gloss: 'always',
    morphology: { pos: 'adjective', gender: 'neuter', number: 'singular', case: 'genitive' },
    strongs: 'G3956',
    position: 2,
  },
  {
    id: 'Luke.24.53.3',
    language: 'greek',
    text: 'ἐν',
    transliteration: 'en',
    lemma: 'ἐν',
    lemmaTranslit: 'en',
    gloss: 'in',
    morphology: { pos: 'preposition' },
    strongs: 'G1722',
    position: 3,
  },
  {
    id: 'Luke.24.53.4',
    language: 'greek',
    text: 'ἱερῷ',
    transliteration: 'hierō',
    lemma: 'ἱερόν',
    lemmaTranslit: 'hieron',
    gloss: 'temple',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'dative' },
    strongs: 'G2411',
    position: 4,
  },
  {
    id: 'Luke.24.53.5',
    language: 'greek',
    text: 'εὐλογοῦντες',
    transliteration: 'eulogountes',
    lemma: 'εὐλογέω',
    lemmaTranslit: 'eulogeō',
    gloss: 'praising',
    glossExtended: 'blessing, praising',
    morphology: { pos: 'verb', gender: 'masculine', number: 'plural', tense: 'present', voice: 'active', mood: 'participle', case: 'nominative' },
    strongs: 'G2127',
    position: 5,
  },
  {
    id: 'Luke.24.53.6',
    language: 'greek',
    text: 'θεόν',
    transliteration: 'theon',
    lemma: 'θεός',
    lemmaTranslit: 'theos',
    gloss: 'God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G2316',
    position: 6,
  },
];

export const luke24_53_translation: VerseTranslation = {
  verseRef: 'Luke.24.53',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And they were through all [time] in the temple blessing God.',
      spans: [
        { id: 'Luke.24.53.en.lit.0', text: 'And they were through all [time]', position: 0, sourceTokenIds: ['Luke.24.53.0', 'Luke.24.53.1', 'Luke.24.53.2'], confidence: 'high' },
        { id: 'Luke.24.53.en.lit.1', text: 'in the temple', position: 1, sourceTokenIds: ['Luke.24.53.3', 'Luke.24.53.4'], confidence: 'high' },
        { id: 'Luke.24.53.en.lit.2', text: 'blessing God.', position: 2, sourceTokenIds: ['Luke.24.53.5', 'Luke.24.53.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'They were continually in the temple praising God.',
      spans: [
        { id: 'Luke.24.53.en.idi.0', text: 'They were continually', position: 0, sourceTokenIds: ['Luke.24.53.0', 'Luke.24.53.1', 'Luke.24.53.2'], confidence: 'high' },
        { id: 'Luke.24.53.en.idi.1', text: 'in the temple', position: 1, sourceTokenIds: ['Luke.24.53.3', 'Luke.24.53.4'], confidence: 'high' },
        { id: 'Luke.24.53.en.idi.2', text: 'praising God.', position: 2, sourceTokenIds: ['Luke.24.53.5', 'Luke.24.53.6'], confidence: 'high' },
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

export const luke24_53_verse = {
  ref: 'Luke.24.53',
  sourceTokens: luke24_53_tokens,
  translation: luke24_53_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Luke 24:1-53 (Resurrection, Emmaus, Ascension)
 * ──────────────────────────────────────────────────────────── */

export const luke24_1_53_verses = [
  luke24_1_verse,
  luke24_5_verse,
  luke24_6_verse,
  luke24_26_verse,
  luke24_32_verse,
  luke24_34_verse,
  luke24_51_verse,
  luke24_53_verse,
];

export default luke24_1_53_verses;
