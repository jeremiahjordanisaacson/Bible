// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ════════════════════════════════════════════════════════════
 * John 17:1-26 — The High Priestly Prayer
 * Six key verses from Jesus' prayer before the crucifixion
 * ════════════════════════════════════════════════════════════ */

/* ────────────────────────────────────────────────────────────
 * Verse 17:1 – Father, the hour has come
 * ──────────────────────────────────────────────────────────── */

export const john17_1_tokens: SourceToken[] = [
  {
    id: 'John.17.1.0',
    language: 'greek',
    text: 'πάτερ',
    transliteration: 'pater',
    lemma: 'πατήρ',
    lemmaTranslit: 'patēr',
    gloss: 'Father',
    morphology: { pos: 'noun', case: 'vocative', number: 'singular', gender: 'masculine' },
    strongs: 'G3962',
    position: 0,
  },
  {
    id: 'John.17.1.1',
    language: 'greek',
    text: 'ἐλήλυθεν',
    transliteration: 'elēlythen',
    lemma: 'ἔρχομαι',
    lemmaTranslit: 'erchomai',
    gloss: 'has come',
    morphology: { pos: 'verb', tense: 'perfect', voice: 'active', mood: 'indicative', person: '3rd', number: 'singular' },
    strongs: 'G2064',
    position: 1,
  },
  {
    id: 'John.17.1.2',
    language: 'greek',
    text: 'ἡ',
    transliteration: 'hē',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', case: 'nominative', number: 'singular', gender: 'feminine' },
    strongs: 'G3588',
    position: 2,
  },
  {
    id: 'John.17.1.3',
    language: 'greek',
    text: 'ὥρα',
    transliteration: 'hōra',
    lemma: 'ὥρα',
    lemmaTranslit: 'hōra',
    gloss: 'hour',
    morphology: { pos: 'noun', case: 'nominative', number: 'singular', gender: 'feminine' },
    strongs: 'G5610',
    position: 3,
  },
  {
    id: 'John.17.1.4',
    language: 'greek',
    text: 'δόξασόν',
    transliteration: 'doxason',
    lemma: 'δοξάζω',
    lemmaTranslit: 'doxazō',
    gloss: 'glorify',
    morphology: { pos: 'verb', tense: 'aorist', voice: 'active', mood: 'imperative', person: '2nd', number: 'singular' },
    strongs: 'G1392',
    position: 4,
  },
  {
    id: 'John.17.1.5',
    language: 'greek',
    text: 'σου',
    transliteration: 'sou',
    lemma: 'σύ',
    lemmaTranslit: 'sy',
    gloss: 'your',
    morphology: { pos: 'pronoun', case: 'genitive', number: 'singular', person: '2nd' },
    strongs: 'G4771',
    position: 5,
  },
  {
    id: 'John.17.1.6',
    language: 'greek',
    text: 'τὸν',
    transliteration: 'ton',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', case: 'accusative', number: 'singular', gender: 'masculine' },
    strongs: 'G3588',
    position: 6,
  },
  {
    id: 'John.17.1.7',
    language: 'greek',
    text: 'υἱόν',
    transliteration: 'huion',
    lemma: 'υἱός',
    lemmaTranslit: 'huios',
    gloss: 'Son',
    morphology: { pos: 'noun', case: 'accusative', number: 'singular', gender: 'masculine' },
    strongs: 'G5207',
    position: 7,
  },
];

export const john17_1_translation: VerseTranslation = {
  verseRef: 'John.17.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "Father, the hour has come; glorify your Son",
      spans: [
        { tokenIds: ['John.17.1.0'], text: 'Father', confidence: 'high' },
        { tokenIds: ['John.17.1.2', 'John.17.1.3'], text: 'the hour', confidence: 'high' },
        { tokenIds: ['John.17.1.1'], text: 'has come', confidence: 'high' },
        { tokenIds: ['John.17.1.4'], text: 'glorify', confidence: 'high' },
        { tokenIds: ['John.17.1.5', 'John.17.1.6', 'John.17.1.7'], text: 'your Son', confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "Father, the appointed hour has arrived — glorify your Son",
      spans: [
        { tokenIds: ['John.17.1.0'], text: 'Father', confidence: 'high' },
        { tokenIds: ['John.17.1.1', 'John.17.1.2', 'John.17.1.3'], text: 'the appointed hour has arrived', confidence: 'high' },
        { tokenIds: ['John.17.1.4', 'John.17.1.5', 'John.17.1.6', 'John.17.1.7'], text: 'glorify your Son', confidence: 'high' },
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

export const john17_1_verse = {
  ref: 'John.17.1',
  sourceTokens: john17_1_tokens,
  translation: john17_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 17:3 – This is eternal life, that they know you
 * ──────────────────────────────────────────────────────────── */

export const john17_3_tokens: SourceToken[] = [
  {
    id: 'John.17.3.0',
    language: 'greek',
    text: 'αὕτη',
    transliteration: 'hautē',
    lemma: 'οὗτος',
    lemmaTranslit: 'houtos',
    gloss: 'this',
    morphology: { pos: 'pronoun', case: 'nominative', number: 'singular', gender: 'feminine' },
    strongs: 'G3778',
    position: 0,
  },
  {
    id: 'John.17.3.1',
    language: 'greek',
    text: 'ἐστὶν',
    transliteration: 'estin',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'is',
    morphology: { pos: 'verb', tense: 'present', voice: 'active', mood: 'indicative', person: '3rd', number: 'singular' },
    strongs: 'G1510',
    position: 1,
  },
  {
    id: 'John.17.3.2',
    language: 'greek',
    text: 'ἡ',
    transliteration: 'hē',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', case: 'nominative', number: 'singular', gender: 'feminine' },
    strongs: 'G3588',
    position: 2,
  },
  {
    id: 'John.17.3.3',
    language: 'greek',
    text: 'αἰώνιος',
    transliteration: 'aiōnios',
    lemma: 'αἰώνιος',
    lemmaTranslit: 'aiōnios',
    gloss: 'eternal',
    morphology: { pos: 'adjective', case: 'nominative', number: 'singular', gender: 'feminine' },
    strongs: 'G166',
    position: 3,
  },
  {
    id: 'John.17.3.4',
    language: 'greek',
    text: 'ζωὴ',
    transliteration: 'zōē',
    lemma: 'ζωή',
    lemmaTranslit: 'zōē',
    gloss: 'life',
    morphology: { pos: 'noun', case: 'nominative', number: 'singular', gender: 'feminine' },
    strongs: 'G2222',
    position: 4,
  },
  {
    id: 'John.17.3.5',
    language: 'greek',
    text: 'ἵνα',
    transliteration: 'hina',
    lemma: 'ἵνα',
    lemmaTranslit: 'hina',
    gloss: 'that',
    morphology: { pos: 'conjunction', type: 'subordinating' },
    strongs: 'G2443',
    position: 5,
  },
  {
    id: 'John.17.3.6',
    language: 'greek',
    text: 'γινώσκωσιν',
    transliteration: 'ginōskōsin',
    lemma: 'γινώσκω',
    lemmaTranslit: 'ginōskō',
    gloss: 'they know',
    morphology: { pos: 'verb', tense: 'present', voice: 'active', mood: 'subjunctive', person: '3rd', number: 'plural' },
    strongs: 'G1097',
    position: 6,
  },
];

export const john17_3_translation: VerseTranslation = {
  verseRef: 'John.17.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "This is eternal life, that they may know you",
      spans: [
        { tokenIds: ['John.17.3.0'], text: 'This', confidence: 'high' },
        { tokenIds: ['John.17.3.1'], text: 'is', confidence: 'high' },
        { tokenIds: ['John.17.3.2', 'John.17.3.3', 'John.17.3.4'], text: 'eternal life', confidence: 'high' },
        { tokenIds: ['John.17.3.5'], text: 'that', confidence: 'high' },
        { tokenIds: ['John.17.3.6'], text: 'they may know you', confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "And this is eternal life: to know you, the only true God",
      spans: [
        { tokenIds: ['John.17.3.0', 'John.17.3.1'], text: 'And this is', confidence: 'high' },
        { tokenIds: ['John.17.3.2', 'John.17.3.3', 'John.17.3.4'], text: 'eternal life', confidence: 'high' },
        { tokenIds: ['John.17.3.5', 'John.17.3.6'], text: 'to know you, the only true God', confidence: 'high' },
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

export const john17_3_verse = {
  ref: 'John.17.3',
  sourceTokens: john17_3_tokens,
  translation: john17_3_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 17:11 – Holy Father, keep them in your name
 * ──────────────────────────────────────────────────────────── */

export const john17_11_tokens: SourceToken[] = [
  {
    id: 'John.17.11.0',
    language: 'greek',
    text: 'πάτερ',
    transliteration: 'pater',
    lemma: 'πατήρ',
    lemmaTranslit: 'patēr',
    gloss: 'Father',
    morphology: { pos: 'noun', case: 'vocative', number: 'singular', gender: 'masculine' },
    strongs: 'G3962',
    position: 0,
  },
  {
    id: 'John.17.11.1',
    language: 'greek',
    text: 'ἅγιε',
    transliteration: 'hagie',
    lemma: 'ἅγιος',
    lemmaTranslit: 'hagios',
    gloss: 'holy',
    morphology: { pos: 'adjective', case: 'vocative', number: 'singular', gender: 'masculine' },
    strongs: 'G40',
    position: 1,
  },
  {
    id: 'John.17.11.2',
    language: 'greek',
    text: 'τήρησον',
    transliteration: 'tērēson',
    lemma: 'τηρέω',
    lemmaTranslit: 'tēreō',
    gloss: 'keep',
    morphology: { pos: 'verb', tense: 'aorist', voice: 'active', mood: 'imperative', person: '2nd', number: 'singular' },
    strongs: 'G5083',
    position: 2,
  },
  {
    id: 'John.17.11.3',
    language: 'greek',
    text: 'αὐτοὺς',
    transliteration: 'autous',
    lemma: 'αὐτός',
    lemmaTranslit: 'autos',
    gloss: 'them',
    morphology: { pos: 'pronoun', case: 'accusative', number: 'plural', gender: 'masculine' },
    strongs: 'G846',
    position: 3,
  },
  {
    id: 'John.17.11.4',
    language: 'greek',
    text: 'ἐν',
    transliteration: 'en',
    lemma: 'ἐν',
    lemmaTranslit: 'en',
    gloss: 'in',
    morphology: { pos: 'preposition' },
    strongs: 'G1722',
    position: 4,
  },
  {
    id: 'John.17.11.5',
    language: 'greek',
    text: 'τῷ',
    transliteration: 'tō',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', case: 'dative', number: 'singular', gender: 'neuter' },
    strongs: 'G3588',
    position: 5,
  },
  {
    id: 'John.17.11.6',
    language: 'greek',
    text: 'ὀνόματί',
    transliteration: 'onomati',
    lemma: 'ὄνομα',
    lemmaTranslit: 'onoma',
    gloss: 'name',
    morphology: { pos: 'noun', case: 'dative', number: 'singular', gender: 'neuter' },
    strongs: 'G3686',
    position: 6,
  },
];

export const john17_11_translation: VerseTranslation = {
  verseRef: 'John.17.11',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "Holy Father, keep them in your name",
      spans: [
        { tokenIds: ['John.17.11.0', 'John.17.11.1'], text: 'Holy Father', confidence: 'high' },
        { tokenIds: ['John.17.11.2'], text: 'keep', confidence: 'high' },
        { tokenIds: ['John.17.11.3'], text: 'them', confidence: 'high' },
        { tokenIds: ['John.17.11.4', 'John.17.11.5', 'John.17.11.6'], text: 'in your name', confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "Holy Father, protect them by the power of your name",
      spans: [
        { tokenIds: ['John.17.11.0', 'John.17.11.1'], text: 'Holy Father', confidence: 'high' },
        { tokenIds: ['John.17.11.2', 'John.17.11.3'], text: 'protect them', confidence: 'high' },
        { tokenIds: ['John.17.11.4', 'John.17.11.5', 'John.17.11.6'], text: 'by the power of your name', confidence: 'high' },
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

export const john17_11_verse = {
  ref: 'John.17.11',
  sourceTokens: john17_11_tokens,
  translation: john17_11_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 17:17 – Sanctify them in the truth
 * ──────────────────────────────────────────────────────────── */

export const john17_17_tokens: SourceToken[] = [
  {
    id: 'John.17.17.0',
    language: 'greek',
    text: 'ἁγίασον',
    transliteration: 'hagiason',
    lemma: 'ἁγιάζω',
    lemmaTranslit: 'hagiazō',
    gloss: 'sanctify',
    morphology: { pos: 'verb', tense: 'aorist', voice: 'active', mood: 'imperative', person: '2nd', number: 'singular' },
    strongs: 'G37',
    position: 0,
  },
  {
    id: 'John.17.17.1',
    language: 'greek',
    text: 'αὐτοὺς',
    transliteration: 'autous',
    lemma: 'αὐτός',
    lemmaTranslit: 'autos',
    gloss: 'them',
    morphology: { pos: 'pronoun', case: 'accusative', number: 'plural', gender: 'masculine' },
    strongs: 'G846',
    position: 1,
  },
  {
    id: 'John.17.17.2',
    language: 'greek',
    text: 'ἐν',
    transliteration: 'en',
    lemma: 'ἐν',
    lemmaTranslit: 'en',
    gloss: 'in',
    morphology: { pos: 'preposition' },
    strongs: 'G1722',
    position: 2,
  },
  {
    id: 'John.17.17.3',
    language: 'greek',
    text: 'τῇ',
    transliteration: 'tē',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', case: 'dative', number: 'singular', gender: 'feminine' },
    strongs: 'G3588',
    position: 3,
  },
  {
    id: 'John.17.17.4',
    language: 'greek',
    text: 'ἀληθείᾳ',
    transliteration: 'alētheia',
    lemma: 'ἀλήθεια',
    lemmaTranslit: 'alētheia',
    gloss: 'truth',
    morphology: { pos: 'noun', case: 'dative', number: 'singular', gender: 'feminine' },
    strongs: 'G225',
    position: 4,
  },
];

export const john17_17_translation: VerseTranslation = {
  verseRef: 'John.17.17',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "Sanctify them in the truth",
      spans: [
        { tokenIds: ['John.17.17.0'], text: 'Sanctify', confidence: 'high' },
        { tokenIds: ['John.17.17.1'], text: 'them', confidence: 'high' },
        { tokenIds: ['John.17.17.2', 'John.17.17.3', 'John.17.17.4'], text: 'in the truth', confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "Set them apart by your truth",
      spans: [
        { tokenIds: ['John.17.17.0', 'John.17.17.1'], text: 'Set them apart', confidence: 'high' },
        { tokenIds: ['John.17.17.2', 'John.17.17.3', 'John.17.17.4'], text: 'by your truth', confidence: 'high' },
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

export const john17_17_verse = {
  ref: 'John.17.17',
  sourceTokens: john17_17_tokens,
  translation: john17_17_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 17:21 – That they all may be one
 * ──────────────────────────────────────────────────────────── */

export const john17_21_tokens: SourceToken[] = [
  {
    id: 'John.17.21.0',
    language: 'greek',
    text: 'ἵνα',
    transliteration: 'hina',
    lemma: 'ἵνα',
    lemmaTranslit: 'hina',
    gloss: 'that',
    morphology: { pos: 'conjunction', type: 'subordinating' },
    strongs: 'G2443',
    position: 0,
  },
  {
    id: 'John.17.21.1',
    language: 'greek',
    text: 'πάντες',
    transliteration: 'pantes',
    lemma: 'πᾶς',
    lemmaTranslit: 'pas',
    gloss: 'all',
    morphology: { pos: 'adjective', case: 'nominative', number: 'plural', gender: 'masculine' },
    strongs: 'G3956',
    position: 1,
  },
  {
    id: 'John.17.21.2',
    language: 'greek',
    text: 'ἓν',
    transliteration: 'hen',
    lemma: 'εἷς',
    lemmaTranslit: 'heis',
    gloss: 'one',
    morphology: { pos: 'adjective', case: 'nominative', number: 'singular', gender: 'neuter' },
    strongs: 'G1520',
    position: 2,
  },
  {
    id: 'John.17.21.3',
    language: 'greek',
    text: 'ὦσιν',
    transliteration: 'ōsin',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'may be',
    morphology: { pos: 'verb', tense: 'present', voice: 'active', mood: 'subjunctive', person: '3rd', number: 'plural' },
    strongs: 'G1510',
    position: 3,
  },
];

export const john17_21_translation: VerseTranslation = {
  verseRef: 'John.17.21',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "that they all may be one",
      spans: [
        { tokenIds: ['John.17.21.0'], text: 'that', confidence: 'high' },
        { tokenIds: ['John.17.21.1'], text: 'they all', confidence: 'high' },
        { tokenIds: ['John.17.21.2', 'John.17.21.3'], text: 'may be one', confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "so that all of them may be united as one",
      spans: [
        { tokenIds: ['John.17.21.0'], text: 'so that', confidence: 'high' },
        { tokenIds: ['John.17.21.1'], text: 'all of them', confidence: 'high' },
        { tokenIds: ['John.17.21.2', 'John.17.21.3'], text: 'may be united as one', confidence: 'high' },
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

export const john17_21_verse = {
  ref: 'John.17.21',
  sourceTokens: john17_21_tokens,
  translation: john17_21_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 17:24 – I desire that where I am, they also may be
 * ──────────────────────────────────────────────────────────── */

export const john17_24_tokens: SourceToken[] = [
  {
    id: 'John.17.24.0',
    language: 'greek',
    text: 'θέλω',
    transliteration: 'thelō',
    lemma: 'θέλω',
    lemmaTranslit: 'thelō',
    gloss: 'I desire',
    morphology: { pos: 'verb', tense: 'present', voice: 'active', mood: 'indicative', person: '1st', number: 'singular' },
    strongs: 'G2309',
    position: 0,
  },
  {
    id: 'John.17.24.1',
    language: 'greek',
    text: 'ἵνα',
    transliteration: 'hina',
    lemma: 'ἵνα',
    lemmaTranslit: 'hina',
    gloss: 'that',
    morphology: { pos: 'conjunction', type: 'subordinating' },
    strongs: 'G2443',
    position: 1,
  },
  {
    id: 'John.17.24.2',
    language: 'greek',
    text: 'ὅπου',
    transliteration: 'hopou',
    lemma: 'ὅπου',
    lemmaTranslit: 'hopou',
    gloss: 'where',
    morphology: { pos: 'adverb', type: 'relative' },
    strongs: 'G3699',
    position: 2,
  },
  {
    id: 'John.17.24.3',
    language: 'greek',
    text: 'εἰμὶ',
    transliteration: 'eimi',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'I am',
    morphology: { pos: 'verb', tense: 'present', voice: 'active', mood: 'indicative', person: '1st', number: 'singular' },
    strongs: 'G1510',
    position: 3,
  },
  {
    id: 'John.17.24.4',
    language: 'greek',
    text: 'ἐγὼ',
    transliteration: 'egō',
    lemma: 'ἐγώ',
    lemmaTranslit: 'egō',
    gloss: 'I',
    morphology: { pos: 'pronoun', case: 'nominative', number: 'singular', person: '1st' },
    strongs: 'G1473',
    position: 4,
  },
  {
    id: 'John.17.24.5',
    language: 'greek',
    text: 'κἀκεῖνοι',
    transliteration: 'kakeinoi',
    lemma: 'κἀκεῖνος',
    lemmaTranslit: 'kakeinos',
    gloss: 'they also',
    morphology: { pos: 'pronoun', case: 'nominative', number: 'plural', gender: 'masculine' },
    strongs: 'G2548',
    position: 5,
  },
  {
    id: 'John.17.24.6',
    language: 'greek',
    text: 'ὦσιν',
    transliteration: 'ōsin',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'may be',
    morphology: { pos: 'verb', tense: 'present', voice: 'active', mood: 'subjunctive', person: '3rd', number: 'plural' },
    strongs: 'G1510',
    position: 6,
  },
];

export const john17_24_translation: VerseTranslation = {
  verseRef: 'John.17.24',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "I desire that where I am, they also may be",
      spans: [
        { tokenIds: ['John.17.24.0'], text: 'I desire', confidence: 'high' },
        { tokenIds: ['John.17.24.1'], text: 'that', confidence: 'high' },
        { tokenIds: ['John.17.24.2'], text: 'where', confidence: 'high' },
        { tokenIds: ['John.17.24.3', 'John.17.24.4'], text: 'I am', confidence: 'high' },
        { tokenIds: ['John.17.24.5', 'John.17.24.6'], text: 'they also may be', confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "Father, I want those you have given me to be with me where I am",
      spans: [
        { tokenIds: ['John.17.24.0', 'John.17.24.1'], text: 'Father, I want', confidence: 'high' },
        { tokenIds: ['John.17.24.5'], text: 'those you have given me', confidence: 'high' },
        { tokenIds: ['John.17.24.6', 'John.17.24.2', 'John.17.24.3', 'John.17.24.4'], text: 'to be with me where I am', confidence: 'high' },
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

export const john17_24_verse = {
  ref: 'John.17.24',
  sourceTokens: john17_24_tokens,
  translation: john17_24_translation,
  notes: [] as StudyNote[],
};

/* ════════════════════════════════════════════════════════════
 * Combined export – all six key verses
 * ════════════════════════════════════════════════════════════ */

export const john17_1_26_verses = [
  john17_1_verse,
  john17_3_verse,
  john17_11_verse,
  john17_17_verse,
  john17_21_verse,
  john17_24_verse,
];

export default john17_1_26_verses;
