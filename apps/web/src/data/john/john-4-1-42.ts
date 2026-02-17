// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 4:10 – If you knew the gift of God
 * ──────────────────────────────────────────────────────────── */

export const john4_10_tokens: SourceToken[] = [
  {
    id: 'John.4.10.0',
    language: 'greek',
    text: 'εἰ',
    transliteration: 'ei',
    lemma: 'εἰ',
    lemmaTranslit: 'ei',
    gloss: 'if',
    morphology: { pos: 'conjunction' },
    strongs: 'G1487',
    position: 0,
  },
  {
    id: 'John.4.10.1',
    language: 'greek',
    text: 'ᾔδεις',
    transliteration: 'ēdeis',
    lemma: 'οἶδα',
    lemmaTranslit: 'oida',
    gloss: 'you knew',
    morphology: { pos: 'verb', person: '2', number: 'singular', tense: 'pluperfect', voice: 'active', mood: 'indicative' },
    strongs: 'G1492',
    position: 1,
  },
  {
    id: 'John.4.10.2',
    language: 'greek',
    text: 'τὴν',
    transliteration: 'tēn',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G3588',
    position: 2,
  },
  {
    id: 'John.4.10.3',
    language: 'greek',
    text: 'δωρεὰν',
    transliteration: 'dōrean',
    lemma: 'δωρεά',
    lemmaTranslit: 'dōrea',
    gloss: 'gift',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G1431',
    position: 3,
  },
  {
    id: 'John.4.10.4',
    language: 'greek',
    text: 'τοῦ',
    transliteration: 'tou',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'of the',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G3588',
    position: 4,
  },
  {
    id: 'John.4.10.5',
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
];

export const john4_10_translation: VerseTranslation = {
  verseRef: 'John.4.10',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'If you knew the gift of God and who it is saying to you, "Give me to drink," you would have asked him.',
      spans: [
        { id: 'John.4.10.en.lit.0', text: 'If you knew', position: 0, sourceTokenIds: ['John.4.10.0', 'John.4.10.1'], confidence: 'high' },
        { id: 'John.4.10.en.lit.1', text: 'the gift of God', position: 1, sourceTokenIds: ['John.4.10.2', 'John.4.10.3', 'John.4.10.4', 'John.4.10.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "If you knew the gift of God and who is asking you for a drink, you would have asked him and he would have given you living water.",
      spans: [
        { id: 'John.4.10.en.idi.0', text: 'If you knew the gift of God', position: 0, sourceTokenIds: ['John.4.10.0', 'John.4.10.1', 'John.4.10.2', 'John.4.10.3', 'John.4.10.4', 'John.4.10.5'], confidence: 'high' },
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

export const john4_10_verse = {
  ref: 'John.4.10',
  sourceTokens: john4_10_tokens,
  translation: john4_10_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 4:14 – A spring of water welling up to eternal life
 * ──────────────────────────────────────────────────────────── */

export const john4_14_tokens: SourceToken[] = [
  {
    id: 'John.4.14.0',
    language: 'greek',
    text: 'τὸ',
    transliteration: 'to',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'neuter', number: 'singular', case: 'nominative' },
    strongs: 'G3588',
    position: 0,
  },
  {
    id: 'John.4.14.1',
    language: 'greek',
    text: 'ὕδωρ',
    transliteration: 'hydōr',
    lemma: 'ὕδωρ',
    lemmaTranslit: 'hydōr',
    gloss: 'water',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'nominative' },
    strongs: 'G5204',
    position: 1,
  },
  {
    id: 'John.4.14.2',
    language: 'greek',
    text: 'γενήσεται',
    transliteration: 'genēsetai',
    lemma: 'γίνομαι',
    lemmaTranslit: 'ginomai',
    gloss: 'will become',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'future', voice: 'middle', mood: 'indicative' },
    strongs: 'G1096',
    position: 2,
  },
  {
    id: 'John.4.14.3',
    language: 'greek',
    text: 'πηγὴ',
    transliteration: 'pēgē',
    lemma: 'πηγή',
    lemmaTranslit: 'pēgē',
    gloss: 'a spring',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G4077',
    position: 3,
  },
  {
    id: 'John.4.14.4',
    language: 'greek',
    text: 'ζωὴν',
    transliteration: 'zōēn',
    lemma: 'ζωή',
    lemmaTranslit: 'zōē',
    gloss: 'life',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G2222',
    position: 4,
  },
  {
    id: 'John.4.14.5',
    language: 'greek',
    text: 'αἰώνιον',
    transliteration: 'aiōnion',
    lemma: 'αἰώνιος',
    lemmaTranslit: 'aiōnios',
    gloss: 'eternal',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G166',
    position: 5,
  },
];

export const john4_14_translation: VerseTranslation = {
  verseRef: 'John.4.14',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'The water will become in him a spring of water welling up to life eternal.',
      spans: [
        { id: 'John.4.14.en.lit.0', text: 'The water', position: 0, sourceTokenIds: ['John.4.14.0', 'John.4.14.1'], confidence: 'high' },
        { id: 'John.4.14.en.lit.1', text: 'will become a spring', position: 1, sourceTokenIds: ['John.4.14.2', 'John.4.14.3'], confidence: 'high' },
        { id: 'John.4.14.en.lit.2', text: 'to life eternal.', position: 2, sourceTokenIds: ['John.4.14.4', 'John.4.14.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'The water I give them will become in them a spring of water welling up to eternal life.',
      spans: [
        { id: 'John.4.14.en.idi.0', text: 'The water will become a spring', position: 0, sourceTokenIds: ['John.4.14.0', 'John.4.14.1', 'John.4.14.2', 'John.4.14.3'], confidence: 'high' },
        { id: 'John.4.14.en.idi.1', text: 'welling up to eternal life.', position: 1, sourceTokenIds: ['John.4.14.4', 'John.4.14.5'], confidence: 'high' },
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

export const john4_14_verse = {
  ref: 'John.4.14',
  sourceTokens: john4_14_tokens,
  translation: john4_14_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 4:23 – True worshipers worship in spirit and truth
 * ──────────────────────────────────────────────────────────── */

export const john4_23_tokens: SourceToken[] = [
  {
    id: 'John.4.23.0',
    language: 'greek',
    text: 'οἱ',
    transliteration: 'hoi',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'plural', case: 'nominative' },
    strongs: 'G3588',
    position: 0,
  },
  {
    id: 'John.4.23.1',
    language: 'greek',
    text: 'ἀληθινοὶ',
    transliteration: 'alēthinoi',
    lemma: 'ἀληθινός',
    lemmaTranslit: 'alēthinos',
    gloss: 'true',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', case: 'nominative' },
    strongs: 'G228',
    position: 1,
  },
  {
    id: 'John.4.23.2',
    language: 'greek',
    text: 'προσκυνηταὶ',
    transliteration: 'proskynētai',
    lemma: 'προσκυνητής',
    lemmaTranslit: 'proskynētēs',
    gloss: 'worshipers',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', case: 'nominative' },
    strongs: 'G4353',
    position: 2,
  },
  {
    id: 'John.4.23.3',
    language: 'greek',
    text: 'πνεύματι',
    transliteration: 'pneumati',
    lemma: 'πνεῦμα',
    lemmaTranslit: 'pneuma',
    gloss: 'spirit',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'dative' },
    strongs: 'G4151',
    position: 3,
  },
  {
    id: 'John.4.23.4',
    language: 'greek',
    text: 'καὶ',
    transliteration: 'kai',
    lemma: 'καί',
    lemmaTranslit: 'kai',
    gloss: 'and',
    morphology: { pos: 'conjunction' },
    strongs: 'G2532',
    position: 4,
  },
  {
    id: 'John.4.23.5',
    language: 'greek',
    text: 'ἀληθείᾳ',
    transliteration: 'alētheia',
    lemma: 'ἀλήθεια',
    lemmaTranslit: 'alētheia',
    gloss: 'truth',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G225',
    position: 5,
  },
];

export const john4_23_translation: VerseTranslation = {
  verseRef: 'John.4.23',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'The true worshipers will worship the Father in spirit and truth.',
      spans: [
        { id: 'John.4.23.en.lit.0', text: 'The true worshipers', position: 0, sourceTokenIds: ['John.4.23.0', 'John.4.23.1', 'John.4.23.2'], confidence: 'high' },
        { id: 'John.4.23.en.lit.1', text: 'in spirit and truth.', position: 1, sourceTokenIds: ['John.4.23.3', 'John.4.23.4', 'John.4.23.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'True worshipers will worship the Father in the Spirit and in truth.',
      spans: [
        { id: 'John.4.23.en.idi.0', text: 'True worshipers will worship the Father', position: 0, sourceTokenIds: ['John.4.23.0', 'John.4.23.1', 'John.4.23.2'], confidence: 'high' },
        { id: 'John.4.23.en.idi.1', text: 'in the Spirit and in truth.', position: 1, sourceTokenIds: ['John.4.23.3', 'John.4.23.4', 'John.4.23.5'], confidence: 'high' },
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

export const john4_23_verse = {
  ref: 'John.4.23',
  sourceTokens: john4_23_tokens,
  translation: john4_23_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 4:24 – God is spirit
 * ──────────────────────────────────────────────────────────── */

export const john4_24_tokens: SourceToken[] = [
  {
    id: 'John.4.24.0',
    language: 'greek',
    text: 'πνεῦμα',
    transliteration: 'pneuma',
    lemma: 'πνεῦμα',
    lemmaTranslit: 'pneuma',
    gloss: 'spirit',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'nominative' },
    strongs: 'G4151',
    position: 0,
  },
  {
    id: 'John.4.24.1',
    language: 'greek',
    text: 'ὁ',
    transliteration: 'ho',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3588',
    position: 1,
  },
  {
    id: 'John.4.24.2',
    language: 'greek',
    text: 'θεός',
    transliteration: 'theos',
    lemma: 'θεός',
    lemmaTranslit: 'theos',
    gloss: 'God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G2316',
    position: 2,
  },
];

export const john4_24_translation: VerseTranslation = {
  verseRef: 'John.4.24',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Spirit is God.',
      spans: [
        { id: 'John.4.24.en.lit.0', text: 'Spirit', position: 0, sourceTokenIds: ['John.4.24.0'], confidence: 'high' },
        { id: 'John.4.24.en.lit.1', text: 'is God.', position: 1, sourceTokenIds: ['John.4.24.1', 'John.4.24.2'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'God is spirit, and his worshipers must worship in the Spirit and in truth.',
      spans: [
        { id: 'John.4.24.en.idi.0', text: 'God is spirit,', position: 0, sourceTokenIds: ['John.4.24.0', 'John.4.24.1', 'John.4.24.2'], confidence: 'high' },
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

export const john4_24_verse = {
  ref: 'John.4.24',
  sourceTokens: john4_24_tokens,
  translation: john4_24_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 4:26 – I am he, the one speaking to you
 * ──────────────────────────────────────────────────────────── */

export const john4_26_tokens: SourceToken[] = [
  {
    id: 'John.4.26.0',
    language: 'greek',
    text: 'ἐγώ',
    transliteration: 'egō',
    lemma: 'ἐγώ',
    lemmaTranslit: 'egō',
    gloss: 'I',
    morphology: { pos: 'pronoun', person: '1', number: 'singular', case: 'nominative' },
    strongs: 'G1473',
    position: 0,
  },
  {
    id: 'John.4.26.1',
    language: 'greek',
    text: 'εἰμι',
    transliteration: 'eimi',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'am',
    morphology: { pos: 'verb', person: '1', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G1510',
    position: 1,
  },
  {
    id: 'John.4.26.2',
    language: 'greek',
    text: 'ὁ',
    transliteration: 'ho',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the one',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3588',
    position: 2,
  },
  {
    id: 'John.4.26.3',
    language: 'greek',
    text: 'λαλῶν',
    transliteration: 'lalōn',
    lemma: 'λαλέω',
    lemmaTranslit: 'laleō',
    gloss: 'speaking',
    morphology: { pos: 'verb', number: 'singular', tense: 'present', voice: 'active', mood: 'participle', gender: 'masculine', case: 'nominative' },
    strongs: 'G2980',
    position: 3,
  },
  {
    id: 'John.4.26.4',
    language: 'greek',
    text: 'σοι',
    transliteration: 'soi',
    lemma: 'σύ',
    lemmaTranslit: 'sy',
    gloss: 'to you',
    morphology: { pos: 'pronoun', person: '2', number: 'singular', case: 'dative' },
    strongs: 'G4771',
    position: 4,
  },
];

export const john4_26_translation: VerseTranslation = {
  verseRef: 'John.4.26',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'I am, the one speaking to you.',
      spans: [
        { id: 'John.4.26.en.lit.0', text: 'I am,', position: 0, sourceTokenIds: ['John.4.26.0', 'John.4.26.1'], confidence: 'high' },
        { id: 'John.4.26.en.lit.1', text: 'the one speaking to you.', position: 1, sourceTokenIds: ['John.4.26.2', 'John.4.26.3', 'John.4.26.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "I, the one speaking to you—I am he.",
      spans: [
        { id: 'John.4.26.en.idi.0', text: 'I, the one speaking to you—I am he.', position: 0, sourceTokenIds: ['John.4.26.0', 'John.4.26.1', 'John.4.26.2', 'John.4.26.3', 'John.4.26.4'], confidence: 'high' },
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

export const john4_26_verse = {
  ref: 'John.4.26',
  sourceTokens: john4_26_tokens,
  translation: john4_26_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 4:42 – This is truly the Savior of the world
 * ──────────────────────────────────────────────────────────── */

export const john4_42_tokens: SourceToken[] = [
  {
    id: 'John.4.42.0',
    language: 'greek',
    text: 'οὗτός',
    transliteration: 'houtos',
    lemma: 'οὗτος',
    lemmaTranslit: 'houtos',
    gloss: 'this one',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3778',
    position: 0,
  },
  {
    id: 'John.4.42.1',
    language: 'greek',
    text: 'ἐστιν',
    transliteration: 'estin',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'is',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G1510',
    position: 1,
  },
  {
    id: 'John.4.42.2',
    language: 'greek',
    text: 'ἀληθῶς',
    transliteration: 'alēthōs',
    lemma: 'ἀληθῶς',
    lemmaTranslit: 'alēthōs',
    gloss: 'truly',
    morphology: { pos: 'adverb' },
    strongs: 'G230',
    position: 2,
  },
  {
    id: 'John.4.42.3',
    language: 'greek',
    text: 'ὁ',
    transliteration: 'ho',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3588',
    position: 3,
  },
  {
    id: 'John.4.42.4',
    language: 'greek',
    text: 'σωτὴρ',
    transliteration: 'sōtēr',
    lemma: 'σωτήρ',
    lemmaTranslit: 'sōtēr',
    gloss: 'Savior',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G4990',
    position: 4,
  },
  {
    id: 'John.4.42.5',
    language: 'greek',
    text: 'τοῦ',
    transliteration: 'tou',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'of the',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G3588',
    position: 5,
  },
  {
    id: 'John.4.42.6',
    language: 'greek',
    text: 'κόσμου',
    transliteration: 'kosmou',
    lemma: 'κόσμος',
    lemmaTranslit: 'kosmos',
    gloss: 'of the world',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G2889',
    position: 6,
  },
];

export const john4_42_translation: VerseTranslation = {
  verseRef: 'John.4.42',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'This one is truly the Savior of the world.',
      spans: [
        { id: 'John.4.42.en.lit.0', text: 'This one is', position: 0, sourceTokenIds: ['John.4.42.0', 'John.4.42.1'], confidence: 'high' },
        { id: 'John.4.42.en.lit.1', text: 'truly', position: 1, sourceTokenIds: ['John.4.42.2'], confidence: 'high' },
        { id: 'John.4.42.en.lit.2', text: 'the Savior of the world.', position: 2, sourceTokenIds: ['John.4.42.3', 'John.4.42.4', 'John.4.42.5', 'John.4.42.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "This man really is the Savior of the world.",
      spans: [
        { id: 'John.4.42.en.idi.0', text: 'This man really is the Savior of the world.', position: 0, sourceTokenIds: ['John.4.42.0', 'John.4.42.1', 'John.4.42.2', 'John.4.42.3', 'John.4.42.4', 'John.4.42.5', 'John.4.42.6'], confidence: 'high' },
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

export const john4_42_verse = {
  ref: 'John.4.42',
  sourceTokens: john4_42_tokens,
  translation: john4_42_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Export combined verses
 * ──────────────────────────────────────────────────────────── */

export const john4_1_42_verses = [
  john4_10_verse,
  john4_14_verse,
  john4_23_verse,
  john4_24_verse,
  john4_26_verse,
  john4_42_verse,
];

export default john4_1_42_verses;
