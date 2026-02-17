// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 3:3 – Unless one is born again
 * ──────────────────────────────────────────────────────────── */

export const john3_3_tokens: SourceToken[] = [
  {
    id: 'John.3.3.0',
    language: 'greek',
    text: 'ἐὰν',
    transliteration: 'ean',
    lemma: 'ἐάν',
    lemmaTranslit: 'ean',
    gloss: 'unless',
    morphology: { pos: 'conjunction' },
    strongs: 'G1437',
    position: 0,
  },
  {
    id: 'John.3.3.1',
    language: 'greek',
    text: 'μή',
    transliteration: 'mē',
    lemma: 'μή',
    lemmaTranslit: 'mē',
    gloss: 'not',
    morphology: { pos: 'adverb' },
    strongs: 'G3361',
    position: 1,
  },
  {
    id: 'John.3.3.2',
    language: 'greek',
    text: 'τις',
    transliteration: 'tis',
    lemma: 'τις',
    lemmaTranslit: 'tis',
    gloss: 'someone',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G5100',
    position: 2,
  },
  {
    id: 'John.3.3.3',
    language: 'greek',
    text: 'γεννηθῇ',
    transliteration: 'gennēthē',
    lemma: 'γεννάω',
    lemmaTranslit: 'gennaō',
    gloss: 'is born',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'passive', mood: 'subjunctive' },
    strongs: 'G1080',
    position: 3,
  },
  {
    id: 'John.3.3.4',
    language: 'greek',
    text: 'ἄνωθεν',
    transliteration: 'anōthen',
    lemma: 'ἄνωθεν',
    lemmaTranslit: 'anōthen',
    gloss: 'again / from above',
    morphology: { pos: 'adverb' },
    strongs: 'G509',
    position: 4,
  },
];

export const john3_3_translation: VerseTranslation = {
  verseRef: 'John.3.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Unless someone is born from above, he cannot see the kingdom of God.',
      spans: [
        { id: 'John.3.3.en.lit.0', text: 'Unless', position: 0, sourceTokenIds: ['John.3.3.0', 'John.3.3.1'], confidence: 'high' },
        { id: 'John.3.3.en.lit.1', text: 'someone', position: 1, sourceTokenIds: ['John.3.3.2'], confidence: 'high' },
        { id: 'John.3.3.en.lit.2', text: 'is born from above,', position: 2, sourceTokenIds: ['John.3.3.3', 'John.3.3.4'], confidence: 'medium' },
      ],
      overallConfidence: 'medium',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'No one can see the kingdom of God unless they are born again.',
      spans: [
        { id: 'John.3.3.en.idi.0', text: 'No one can see the kingdom of God', position: 0, sourceTokenIds: ['John.3.3.0', 'John.3.3.1', 'John.3.3.2'], confidence: 'high' },
        { id: 'John.3.3.en.idi.1', text: 'unless they are born again.', position: 1, sourceTokenIds: ['John.3.3.3', 'John.3.3.4'], confidence: 'medium' },
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

export const john3_3_verse = {
  ref: 'John.3.3',
  sourceTokens: john3_3_tokens,
  translation: john3_3_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 3:5 – Born of water and the Spirit
 * ──────────────────────────────────────────────────────────── */

export const john3_5_tokens: SourceToken[] = [
  {
    id: 'John.3.5.0',
    language: 'greek',
    text: 'γεννηθῇ',
    transliteration: 'gennēthē',
    lemma: 'γεννάω',
    lemmaTranslit: 'gennaō',
    gloss: 'is born',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'passive', mood: 'subjunctive' },
    strongs: 'G1080',
    position: 0,
  },
  {
    id: 'John.3.5.1',
    language: 'greek',
    text: 'ἐξ',
    transliteration: 'ex',
    lemma: 'ἐκ',
    lemmaTranslit: 'ek',
    gloss: 'of',
    morphology: { pos: 'preposition' },
    strongs: 'G1537',
    position: 1,
  },
  {
    id: 'John.3.5.2',
    language: 'greek',
    text: 'ὕδατος',
    transliteration: 'hydatos',
    lemma: 'ὕδωρ',
    lemmaTranslit: 'hydōr',
    gloss: 'water',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'genitive' },
    strongs: 'G5204',
    position: 2,
  },
  {
    id: 'John.3.5.3',
    language: 'greek',
    text: 'καὶ',
    transliteration: 'kai',
    lemma: 'καί',
    lemmaTranslit: 'kai',
    gloss: 'and',
    morphology: { pos: 'conjunction' },
    strongs: 'G2532',
    position: 3,
  },
  {
    id: 'John.3.5.4',
    language: 'greek',
    text: 'πνεύματος',
    transliteration: 'pneumatos',
    lemma: 'πνεῦμα',
    lemmaTranslit: 'pneuma',
    gloss: 'Spirit',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'genitive' },
    strongs: 'G4151',
    position: 4,
  },
];

export const john3_5_translation: VerseTranslation = {
  verseRef: 'John.3.5',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Unless someone is born of water and Spirit, he cannot enter the kingdom of God.',
      spans: [
        { id: 'John.3.5.en.lit.0', text: 'is born', position: 0, sourceTokenIds: ['John.3.5.0'], confidence: 'high' },
        { id: 'John.3.5.en.lit.1', text: 'of water', position: 1, sourceTokenIds: ['John.3.5.1', 'John.3.5.2'], confidence: 'high' },
        { id: 'John.3.5.en.lit.2', text: 'and Spirit,', position: 2, sourceTokenIds: ['John.3.5.3', 'John.3.5.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'No one can enter the kingdom of God unless they are born of water and the Spirit.',
      spans: [
        { id: 'John.3.5.en.idi.0', text: 'born of water and the Spirit', position: 0, sourceTokenIds: ['John.3.5.0', 'John.3.5.1', 'John.3.5.2', 'John.3.5.3', 'John.3.5.4'], confidence: 'high' },
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

export const john3_5_verse = {
  ref: 'John.3.5',
  sourceTokens: john3_5_tokens,
  translation: john3_5_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 3:7 – You must be born again
 * ──────────────────────────────────────────────────────────── */

export const john3_7_tokens: SourceToken[] = [
  {
    id: 'John.3.7.0',
    language: 'greek',
    text: 'δεῖ',
    transliteration: 'dei',
    lemma: 'δεῖ',
    lemmaTranslit: 'dei',
    gloss: 'it is necessary',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G1163',
    position: 0,
  },
  {
    id: 'John.3.7.1',
    language: 'greek',
    text: 'ὑμᾶς',
    transliteration: 'hymas',
    lemma: 'ὑμεῖς',
    lemmaTranslit: 'hymeis',
    gloss: 'you',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'plural', case: 'accusative' },
    strongs: 'G4771',
    position: 1,
  },
  {
    id: 'John.3.7.2',
    language: 'greek',
    text: 'γεννηθῆναι',
    transliteration: 'gennēthēnai',
    lemma: 'γεννάω',
    lemmaTranslit: 'gennaō',
    gloss: 'to be born',
    morphology: { pos: 'verb', tense: 'aorist', voice: 'passive', mood: 'infinitive' },
    strongs: 'G1080',
    position: 2,
  },
  {
    id: 'John.3.7.3',
    language: 'greek',
    text: 'ἄνωθεν',
    transliteration: 'anōthen',
    lemma: 'ἄνωθεν',
    lemmaTranslit: 'anōthen',
    gloss: 'again / from above',
    morphology: { pos: 'adverb' },
    strongs: 'G509',
    position: 3,
  },
];

export const john3_7_translation: VerseTranslation = {
  verseRef: 'John.3.7',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'It is necessary for you to be born from above.',
      spans: [
        { id: 'John.3.7.en.lit.0', text: 'It is necessary', position: 0, sourceTokenIds: ['John.3.7.0'], confidence: 'high' },
        { id: 'John.3.7.en.lit.1', text: 'for you', position: 1, sourceTokenIds: ['John.3.7.1'], confidence: 'high' },
        { id: 'John.3.7.en.lit.2', text: 'to be born from above.', position: 2, sourceTokenIds: ['John.3.7.2', 'John.3.7.3'], confidence: 'medium' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'You must be born again.',
      spans: [
        { id: 'John.3.7.en.idi.0', text: 'You must be born again.', position: 0, sourceTokenIds: ['John.3.7.0', 'John.3.7.1', 'John.3.7.2', 'John.3.7.3'], confidence: 'high' },
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

export const john3_7_verse = {
  ref: 'John.3.7',
  sourceTokens: john3_7_tokens,
  translation: john3_7_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 3:14 – As Moses lifted up the serpent
 * ──────────────────────────────────────────────────────────── */

export const john3_14_tokens: SourceToken[] = [
  {
    id: 'John.3.14.0',
    language: 'greek',
    text: 'καθὼς',
    transliteration: 'kathōs',
    lemma: 'καθώς',
    lemmaTranslit: 'kathōs',
    gloss: 'just as',
    morphology: { pos: 'conjunction' },
    strongs: 'G2531',
    position: 0,
  },
  {
    id: 'John.3.14.1',
    language: 'greek',
    text: 'Μωϋσῆς',
    transliteration: 'Mōysēs',
    lemma: 'Μωϋσῆς',
    lemmaTranslit: 'Mōysēs',
    gloss: 'Moses',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3475',
    position: 1,
  },
  {
    id: 'John.3.14.2',
    language: 'greek',
    text: 'ὕψωσεν',
    transliteration: 'hypsōsen',
    lemma: 'ὑψόω',
    lemmaTranslit: 'hypsoō',
    gloss: 'lifted up',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G5312',
    position: 2,
  },
  {
    id: 'John.3.14.3',
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
    id: 'John.3.14.4',
    language: 'greek',
    text: 'ὄφιν',
    transliteration: 'ophin',
    lemma: 'ὄφις',
    lemmaTranslit: 'ophis',
    gloss: 'serpent',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G3789',
    position: 4,
  },
];

export const john3_14_translation: VerseTranslation = {
  verseRef: 'John.3.14',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And just as Moses lifted up the serpent in the wilderness, so must the Son of Man be lifted up.',
      spans: [
        { id: 'John.3.14.en.lit.0', text: 'Just as', position: 0, sourceTokenIds: ['John.3.14.0'], confidence: 'high' },
        { id: 'John.3.14.en.lit.1', text: 'Moses', position: 1, sourceTokenIds: ['John.3.14.1'], confidence: 'high' },
        { id: 'John.3.14.en.lit.2', text: 'lifted up the serpent', position: 2, sourceTokenIds: ['John.3.14.2', 'John.3.14.3', 'John.3.14.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Just as Moses lifted up the snake in the wilderness, so the Son of Man must be lifted up.',
      spans: [
        { id: 'John.3.14.en.idi.0', text: 'Just as Moses lifted up the snake in the wilderness,', position: 0, sourceTokenIds: ['John.3.14.0', 'John.3.14.1', 'John.3.14.2', 'John.3.14.3', 'John.3.14.4'], confidence: 'high' },
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

export const john3_14_verse = {
  ref: 'John.3.14',
  sourceTokens: john3_14_tokens,
  translation: john3_14_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 3:16 – For God so loved the world
 * ──────────────────────────────────────────────────────────── */

export const john3_16_tokens: SourceToken[] = [
  {
    id: 'John.3.16.0',
    language: 'greek',
    text: 'οὕτως',
    transliteration: 'houtōs',
    lemma: 'οὕτως',
    lemmaTranslit: 'houtōs',
    gloss: 'so / in this way',
    morphology: { pos: 'adverb' },
    strongs: 'G3779',
    position: 0,
  },
  {
    id: 'John.3.16.1',
    language: 'greek',
    text: 'γὰρ',
    transliteration: 'gar',
    lemma: 'γάρ',
    lemmaTranslit: 'gar',
    gloss: 'for',
    morphology: { pos: 'conjunction' },
    strongs: 'G1063',
    position: 1,
  },
  {
    id: 'John.3.16.2',
    language: 'greek',
    text: 'ἠγάπησεν',
    transliteration: 'ēgapēsen',
    lemma: 'ἀγαπάω',
    lemmaTranslit: 'agapaō',
    gloss: 'loved',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G25',
    position: 2,
  },
  {
    id: 'John.3.16.3',
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
    id: 'John.3.16.4',
    language: 'greek',
    text: 'θεὸς',
    transliteration: 'theos',
    lemma: 'θεός',
    lemmaTranslit: 'theos',
    gloss: 'God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G2316',
    position: 4,
  },
  {
    id: 'John.3.16.5',
    language: 'greek',
    text: 'τὸν',
    transliteration: 'ton',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G3588',
    position: 5,
  },
  {
    id: 'John.3.16.6',
    language: 'greek',
    text: 'κόσμον',
    transliteration: 'kosmon',
    lemma: 'κόσμος',
    lemmaTranslit: 'kosmos',
    gloss: 'world',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G2889',
    position: 6,
  },
  {
    id: 'John.3.16.7',
    language: 'greek',
    text: 'μονογενῆ',
    transliteration: 'monogenē',
    lemma: 'μονογενής',
    lemmaTranslit: 'monogenēs',
    gloss: 'only begotten',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G3439',
    position: 7,
  },
];

export const john3_16_translation: VerseTranslation = {
  verseRef: 'John.3.16',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'For so loved God the world that the Son, the only begotten, he gave.',
      spans: [
        { id: 'John.3.16.en.lit.0', text: 'For so', position: 0, sourceTokenIds: ['John.3.16.0', 'John.3.16.1'], confidence: 'high' },
        { id: 'John.3.16.en.lit.1', text: 'loved God', position: 1, sourceTokenIds: ['John.3.16.2', 'John.3.16.3', 'John.3.16.4'], confidence: 'high' },
        { id: 'John.3.16.en.lit.2', text: 'the world', position: 2, sourceTokenIds: ['John.3.16.5', 'John.3.16.6'], confidence: 'high' },
        { id: 'John.3.16.en.lit.3', text: 'the only begotten', position: 3, sourceTokenIds: ['John.3.16.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'For God so loved the world that he gave his one and only Son.',
      spans: [
        { id: 'John.3.16.en.idi.0', text: 'For God so loved the world', position: 0, sourceTokenIds: ['John.3.16.0', 'John.3.16.1', 'John.3.16.2', 'John.3.16.3', 'John.3.16.4', 'John.3.16.5', 'John.3.16.6'], confidence: 'high' },
        { id: 'John.3.16.en.idi.1', text: 'that he gave his one and only Son.', position: 1, sourceTokenIds: ['John.3.16.7'], confidence: 'high' },
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

export const john3_16_verse = {
  ref: 'John.3.16',
  sourceTokens: john3_16_tokens,
  translation: john3_16_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 3:17 – God did not send his Son to condemn
 * ──────────────────────────────────────────────────────────── */

export const john3_17_tokens: SourceToken[] = [
  {
    id: 'John.3.17.0',
    language: 'greek',
    text: 'οὐ',
    transliteration: 'ou',
    lemma: 'οὐ',
    lemmaTranslit: 'ou',
    gloss: 'not',
    morphology: { pos: 'adverb' },
    strongs: 'G3756',
    position: 0,
  },
  {
    id: 'John.3.17.1',
    language: 'greek',
    text: 'γὰρ',
    transliteration: 'gar',
    lemma: 'γάρ',
    lemmaTranslit: 'gar',
    gloss: 'for',
    morphology: { pos: 'conjunction' },
    strongs: 'G1063',
    position: 1,
  },
  {
    id: 'John.3.17.2',
    language: 'greek',
    text: 'ἀπέστειλεν',
    transliteration: 'apesteilen',
    lemma: 'ἀποστέλλω',
    lemmaTranslit: 'apostellō',
    gloss: 'sent',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G649',
    position: 2,
  },
  {
    id: 'John.3.17.3',
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
    id: 'John.3.17.4',
    language: 'greek',
    text: 'θεὸς',
    transliteration: 'theos',
    lemma: 'θεός',
    lemmaTranslit: 'theos',
    gloss: 'God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G2316',
    position: 4,
  },
  {
    id: 'John.3.17.5',
    language: 'greek',
    text: 'κρίνῃ',
    transliteration: 'krinē',
    lemma: 'κρίνω',
    lemmaTranslit: 'krinō',
    gloss: 'might judge',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'subjunctive' },
    strongs: 'G2919',
    position: 5,
  },
];

export const john3_17_translation: VerseTranslation = {
  verseRef: 'John.3.17',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'For not sent God the Son into the world that he might judge the world.',
      spans: [
        { id: 'John.3.17.en.lit.0', text: 'For not', position: 0, sourceTokenIds: ['John.3.17.0', 'John.3.17.1'], confidence: 'high' },
        { id: 'John.3.17.en.lit.1', text: 'sent God', position: 1, sourceTokenIds: ['John.3.17.2', 'John.3.17.3', 'John.3.17.4'], confidence: 'high' },
        { id: 'John.3.17.en.lit.2', text: 'that he might judge', position: 2, sourceTokenIds: ['John.3.17.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'For God did not send his Son into the world to condemn the world, but to save the world through him.',
      spans: [
        { id: 'John.3.17.en.idi.0', text: 'For God did not send his Son', position: 0, sourceTokenIds: ['John.3.17.0', 'John.3.17.1', 'John.3.17.2', 'John.3.17.3', 'John.3.17.4'], confidence: 'high' },
        { id: 'John.3.17.en.idi.1', text: 'to condemn the world, but to save the world through him.', position: 1, sourceTokenIds: ['John.3.17.5'], confidence: 'high' },
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

export const john3_17_verse = {
  ref: 'John.3.17',
  sourceTokens: john3_17_tokens,
  translation: john3_17_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 3:18 – Whoever believes is not condemned
 * ──────────────────────────────────────────────────────────── */

export const john3_18_tokens: SourceToken[] = [
  {
    id: 'John.3.18.0',
    language: 'greek',
    text: 'ὁ',
    transliteration: 'ho',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the one',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3588',
    position: 0,
  },
  {
    id: 'John.3.18.1',
    language: 'greek',
    text: 'πιστεύων',
    transliteration: 'pisteuōn',
    lemma: 'πιστεύω',
    lemmaTranslit: 'pisteuō',
    gloss: 'believing',
    morphology: { pos: 'verb', number: 'singular', tense: 'present', voice: 'active', mood: 'participle', gender: 'masculine', case: 'nominative' },
    strongs: 'G4100',
    position: 1,
  },
  {
    id: 'John.3.18.2',
    language: 'greek',
    text: 'οὐ',
    transliteration: 'ou',
    lemma: 'οὐ',
    lemmaTranslit: 'ou',
    gloss: 'not',
    morphology: { pos: 'adverb' },
    strongs: 'G3756',
    position: 2,
  },
  {
    id: 'John.3.18.3',
    language: 'greek',
    text: 'κρίνεται',
    transliteration: 'krinetai',
    lemma: 'κρίνω',
    lemmaTranslit: 'krinō',
    gloss: 'is judged',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'passive', mood: 'indicative' },
    strongs: 'G2919',
    position: 3,
  },
];

export const john3_18_translation: VerseTranslation = {
  verseRef: 'John.3.18',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'The one believing in him is not judged.',
      spans: [
        { id: 'John.3.18.en.lit.0', text: 'The one believing', position: 0, sourceTokenIds: ['John.3.18.0', 'John.3.18.1'], confidence: 'high' },
        { id: 'John.3.18.en.lit.1', text: 'is not judged.', position: 1, sourceTokenIds: ['John.3.18.2', 'John.3.18.3'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Whoever believes in him is not condemned.',
      spans: [
        { id: 'John.3.18.en.idi.0', text: 'Whoever believes in him is not condemned.', position: 0, sourceTokenIds: ['John.3.18.0', 'John.3.18.1', 'John.3.18.2', 'John.3.18.3'], confidence: 'high' },
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

export const john3_18_verse = {
  ref: 'John.3.18',
  sourceTokens: john3_18_tokens,
  translation: john3_18_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 3:36 – Whoever believes in the Son has eternal life
 * ──────────────────────────────────────────────────────────── */

export const john3_36_tokens: SourceToken[] = [
  {
    id: 'John.3.36.0',
    language: 'greek',
    text: 'ὁ',
    transliteration: 'ho',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the one',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3588',
    position: 0,
  },
  {
    id: 'John.3.36.1',
    language: 'greek',
    text: 'πιστεύων',
    transliteration: 'pisteuōn',
    lemma: 'πιστεύω',
    lemmaTranslit: 'pisteuō',
    gloss: 'believing',
    morphology: { pos: 'verb', number: 'singular', tense: 'present', voice: 'active', mood: 'participle', gender: 'masculine', case: 'nominative' },
    strongs: 'G4100',
    position: 1,
  },
  {
    id: 'John.3.36.2',
    language: 'greek',
    text: 'ἔχει',
    transliteration: 'echei',
    lemma: 'ἔχω',
    lemmaTranslit: 'echō',
    gloss: 'has',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G2192',
    position: 2,
  },
  {
    id: 'John.3.36.3',
    language: 'greek',
    text: 'ζωὴν',
    transliteration: 'zōēn',
    lemma: 'ζωή',
    lemmaTranslit: 'zōē',
    gloss: 'life',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G2222',
    position: 3,
  },
  {
    id: 'John.3.36.4',
    language: 'greek',
    text: 'αἰώνιον',
    transliteration: 'aiōnion',
    lemma: 'αἰώνιος',
    lemmaTranslit: 'aiōnios',
    gloss: 'eternal',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G166',
    position: 4,
  },
];

export const john3_36_translation: VerseTranslation = {
  verseRef: 'John.3.36',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'The one believing in the Son has life eternal.',
      spans: [
        { id: 'John.3.36.en.lit.0', text: 'The one believing', position: 0, sourceTokenIds: ['John.3.36.0', 'John.3.36.1'], confidence: 'high' },
        { id: 'John.3.36.en.lit.1', text: 'has', position: 1, sourceTokenIds: ['John.3.36.2'], confidence: 'high' },
        { id: 'John.3.36.en.lit.2', text: 'life eternal.', position: 2, sourceTokenIds: ['John.3.36.3', 'John.3.36.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Whoever believes in the Son has eternal life.',
      spans: [
        { id: 'John.3.36.en.idi.0', text: 'Whoever believes in the Son has eternal life.', position: 0, sourceTokenIds: ['John.3.36.0', 'John.3.36.1', 'John.3.36.2', 'John.3.36.3', 'John.3.36.4'], confidence: 'high' },
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

export const john3_36_verse = {
  ref: 'John.3.36',
  sourceTokens: john3_36_tokens,
  translation: john3_36_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Export combined verses
 * ──────────────────────────────────────────────────────────── */

export const john3_1_36_verses = [
  john3_3_verse,
  john3_5_verse,
  john3_7_verse,
  john3_14_verse,
  john3_16_verse,
  john3_17_verse,
  john3_18_verse,
  john3_36_verse,
];

export default john3_1_36_verses;
