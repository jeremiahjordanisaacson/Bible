// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 20:1 – On the first day of the week
 * ──────────────────────────────────────────────────────────── */

export const john20_1_tokens: SourceToken[] = [
  {
    id: 'John.20.1.0',
    language: 'greek',
    text: 'τῇ',
    transliteration: 'tē',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G3588',
    position: 0,
  },
  {
    id: 'John.20.1.1',
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
    id: 'John.20.1.2',
    language: 'greek',
    text: 'σαββάτων',
    transliteration: 'sabbatōn',
    lemma: 'σάββατον',
    lemmaTranslit: 'sabbaton',
    gloss: 'of the week',
    morphology: { pos: 'noun', gender: 'neuter', number: 'plural', case: 'genitive' },
    strongs: 'G4521',
    position: 2,
  },
  {
    id: 'John.20.1.3',
    language: 'greek',
    text: 'Μαρία',
    transliteration: 'Maria',
    lemma: 'Μαρία',
    lemmaTranslit: 'Maria',
    gloss: 'Mary',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G3137',
    position: 3,
  },
  {
    id: 'John.20.1.4',
    language: 'greek',
    text: 'Μαγδαληνή',
    transliteration: 'Magdalēnē',
    lemma: 'Μαγδαληνή',
    lemmaTranslit: 'Magdalēnē',
    gloss: 'Magdalene',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G3094',
    position: 4,
  },
  {
    id: 'John.20.1.5',
    language: 'greek',
    text: 'ἔρχεται',
    transliteration: 'erchetai',
    lemma: 'ἔρχομαι',
    lemmaTranslit: 'erchomai',
    gloss: 'comes',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'middle', mood: 'indicative' },
    strongs: 'G2064',
    position: 5,
  },
];

export const john20_1_translation: VerseTranslation = {
  verseRef: 'John.20.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'On the first [day] of the week, Mary the Magdalene comes to the tomb early, while it is still dark.',
      spans: [
        { id: 'John.20.1.en.lit.0', text: 'On the first [day] of the week,', position: 0, sourceTokenIds: ['John.20.1.0', 'John.20.1.1', 'John.20.1.2'], confidence: 'high' },
        { id: 'John.20.1.en.lit.1', text: 'Mary the Magdalene', position: 1, sourceTokenIds: ['John.20.1.3', 'John.20.1.4'], confidence: 'high' },
        { id: 'John.20.1.en.lit.2', text: 'comes to the tomb early', position: 2, sourceTokenIds: ['John.20.1.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Early on Sunday morning, Mary Magdalene went to the tomb while it was still dark.',
      spans: [
        { id: 'John.20.1.en.idi.0', text: 'Early on Sunday morning,', position: 0, sourceTokenIds: ['John.20.1.0', 'John.20.1.1', 'John.20.1.2'], confidence: 'high' },
        { id: 'John.20.1.en.idi.1', text: 'Mary Magdalene', position: 1, sourceTokenIds: ['John.20.1.3', 'John.20.1.4'], confidence: 'high' },
        { id: 'John.20.1.en.idi.2', text: 'went to the tomb while it was still dark.', position: 2, sourceTokenIds: ['John.20.1.5'], confidence: 'high' },
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

export const john20_1_verse = {
  ref: 'John.20.1',
  sourceTokens: john20_1_tokens,
  translation: john20_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 20:11 – Mary stood weeping at the tomb
 * ──────────────────────────────────────────────────────────── */

export const john20_11_tokens: SourceToken[] = [
  {
    id: 'John.20.11.0',
    language: 'greek',
    text: 'Μαρία',
    transliteration: 'Maria',
    lemma: 'Μαρία',
    lemmaTranslit: 'Maria',
    gloss: 'Mary',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G3137',
    position: 0,
  },
  {
    id: 'John.20.11.1',
    language: 'greek',
    text: 'εἱστήκει',
    transliteration: 'heistēkei',
    lemma: 'ἵστημι',
    lemmaTranslit: 'histēmi',
    gloss: 'had been standing',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'pluperfect', voice: 'active', mood: 'indicative' },
    strongs: 'G2476',
    position: 1,
  },
  {
    id: 'John.20.11.2',
    language: 'greek',
    text: 'πρὸς',
    transliteration: 'pros',
    lemma: 'πρός',
    lemmaTranslit: 'pros',
    gloss: 'at',
    morphology: { pos: 'preposition' },
    strongs: 'G4314',
    position: 2,
  },
  {
    id: 'John.20.11.3',
    language: 'greek',
    text: 'μνημείῳ',
    transliteration: 'mnēmeiō',
    lemma: 'μνημεῖον',
    lemmaTranslit: 'mnēmeion',
    gloss: 'tomb',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'dative' },
    strongs: 'G3419',
    position: 3,
  },
  {
    id: 'John.20.11.4',
    language: 'greek',
    text: 'κλαίουσα',
    transliteration: 'klaiousa',
    lemma: 'κλαίω',
    lemmaTranslit: 'klaiō',
    gloss: 'weeping',
    morphology: { pos: 'participle', gender: 'feminine', number: 'singular', case: 'nominative', tense: 'present', voice: 'active' },
    strongs: 'G2799',
    position: 4,
  },
];

export const john20_11_translation: VerseTranslation = {
  verseRef: 'John.20.11',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'But Mary had been standing at the tomb outside, weeping.',
      spans: [
        { id: 'John.20.11.en.lit.0', text: 'Mary', position: 0, sourceTokenIds: ['John.20.11.0'], confidence: 'high' },
        { id: 'John.20.11.en.lit.1', text: 'had been standing', position: 1, sourceTokenIds: ['John.20.11.1'], confidence: 'high' },
        { id: 'John.20.11.en.lit.2', text: 'at the tomb outside,', position: 2, sourceTokenIds: ['John.20.11.2', 'John.20.11.3'], confidence: 'high' },
        { id: 'John.20.11.en.lit.3', text: 'weeping.', position: 3, sourceTokenIds: ['John.20.11.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Mary stood outside the tomb, crying.',
      spans: [
        { id: 'John.20.11.en.idi.0', text: 'Mary stood', position: 0, sourceTokenIds: ['John.20.11.0', 'John.20.11.1'], confidence: 'high' },
        { id: 'John.20.11.en.idi.1', text: 'outside the tomb,', position: 1, sourceTokenIds: ['John.20.11.2', 'John.20.11.3'], confidence: 'high' },
        { id: 'John.20.11.en.idi.2', text: 'crying.', position: 2, sourceTokenIds: ['John.20.11.4'], confidence: 'high' },
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

export const john20_11_verse = {
  ref: 'John.20.11',
  sourceTokens: john20_11_tokens,
  translation: john20_11_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 20:16 – Jesus said to her, "Mary"
 * ──────────────────────────────────────────────────────────── */

export const john20_16_tokens: SourceToken[] = [
  {
    id: 'John.20.16.0',
    language: 'greek',
    text: 'λέγει',
    transliteration: 'legei',
    lemma: 'λέγω',
    lemmaTranslit: 'legō',
    gloss: 'says',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G3004',
    position: 0,
  },
  {
    id: 'John.20.16.1',
    language: 'greek',
    text: 'αὐτῇ',
    transliteration: 'autē',
    lemma: 'αὐτός',
    lemmaTranslit: 'autos',
    gloss: 'to her',
    morphology: { pos: 'pronoun', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G846',
    position: 1,
  },
  {
    id: 'John.20.16.2',
    language: 'greek',
    text: 'Ἰησοῦς',
    transliteration: 'Iēsous',
    lemma: 'Ἰησοῦς',
    lemmaTranslit: 'Iēsous',
    gloss: 'Jesus',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G2424',
    position: 2,
  },
  {
    id: 'John.20.16.3',
    language: 'greek',
    text: 'Μαριάμ',
    transliteration: 'Mariam',
    lemma: 'Μαριάμ',
    lemmaTranslit: 'Mariam',
    gloss: 'Mary',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'vocative' },
    strongs: 'G3137',
    position: 3,
  },
];

export const john20_16_translation: VerseTranslation = {
  verseRef: 'John.20.16',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "Jesus says to her, \"Mary!\"",
      spans: [
        { id: 'John.20.16.en.lit.0', text: 'Jesus', position: 0, sourceTokenIds: ['John.20.16.2'], confidence: 'high' },
        { id: 'John.20.16.en.lit.1', text: 'says to her,', position: 1, sourceTokenIds: ['John.20.16.0', 'John.20.16.1'], confidence: 'high' },
        { id: 'John.20.16.en.lit.2', text: '"Mary!"', position: 2, sourceTokenIds: ['John.20.16.3'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "Jesus said to her, \"Mary!\"",
      spans: [
        { id: 'John.20.16.en.idi.0', text: 'Jesus said to her,', position: 0, sourceTokenIds: ['John.20.16.0', 'John.20.16.1', 'John.20.16.2'], confidence: 'high' },
        { id: 'John.20.16.en.idi.1', text: '"Mary!"', position: 1, sourceTokenIds: ['John.20.16.3'], confidence: 'high' },
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

export const john20_16_verse = {
  ref: 'John.20.16',
  sourceTokens: john20_16_tokens,
  translation: john20_16_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 20:19 – Jesus came and said, "Peace be with you"
 * ──────────────────────────────────────────────────────────── */

export const john20_19_tokens: SourceToken[] = [
  {
    id: 'John.20.19.0',
    language: 'greek',
    text: 'ἦλθεν',
    transliteration: 'ēlthen',
    lemma: 'ἔρχομαι',
    lemmaTranslit: 'erchomai',
    gloss: 'came',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G2064',
    position: 0,
  },
  {
    id: 'John.20.19.1',
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
    id: 'John.20.19.2',
    language: 'greek',
    text: 'Ἰησοῦς',
    transliteration: 'Iēsous',
    lemma: 'Ἰησοῦς',
    lemmaTranslit: 'Iēsous',
    gloss: 'Jesus',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G2424',
    position: 2,
  },
  {
    id: 'John.20.19.3',
    language: 'greek',
    text: 'εἰρήνη',
    transliteration: 'eirēnē',
    lemma: 'εἰρήνη',
    lemmaTranslit: 'eirēnē',
    gloss: 'peace',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G1515',
    position: 3,
  },
  {
    id: 'John.20.19.4',
    language: 'greek',
    text: 'ὑμῖν',
    transliteration: 'hymin',
    lemma: 'ὑμεῖς',
    lemmaTranslit: 'hymeis',
    gloss: 'to you',
    morphology: { pos: 'pronoun', person: '2', number: 'plural', case: 'dative' },
    strongs: 'G4771',
    position: 4,
  },
];

export const john20_19_translation: VerseTranslation = {
  verseRef: 'John.20.19',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "Jesus came and stood in the midst and says to them, \"Peace to you.\"",
      spans: [
        { id: 'John.20.19.en.lit.0', text: 'Jesus came', position: 0, sourceTokenIds: ['John.20.19.0', 'John.20.19.1', 'John.20.19.2'], confidence: 'high' },
        { id: 'John.20.19.en.lit.1', text: '"Peace to you."', position: 1, sourceTokenIds: ['John.20.19.3', 'John.20.19.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "Jesus came and stood among them and said, \"Peace be with you.\"",
      spans: [
        { id: 'John.20.19.en.idi.0', text: 'Jesus came and stood among them', position: 0, sourceTokenIds: ['John.20.19.0', 'John.20.19.1', 'John.20.19.2'], confidence: 'high' },
        { id: 'John.20.19.en.idi.1', text: '"Peace be with you."', position: 1, sourceTokenIds: ['John.20.19.3', 'John.20.19.4'], confidence: 'high' },
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

export const john20_19_verse = {
  ref: 'John.20.19',
  sourceTokens: john20_19_tokens,
  translation: john20_19_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 20:22 – Receive the Holy Spirit
 * ──────────────────────────────────────────────────────────── */

export const john20_22_tokens: SourceToken[] = [
  {
    id: 'John.20.22.0',
    language: 'greek',
    text: 'λάβετε',
    transliteration: 'labete',
    lemma: 'λαμβάνω',
    lemmaTranslit: 'lambanō',
    gloss: 'receive',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'aorist', voice: 'active', mood: 'imperative' },
    strongs: 'G2983',
    position: 0,
  },
  {
    id: 'John.20.22.1',
    language: 'greek',
    text: 'πνεῦμα',
    transliteration: 'pneuma',
    lemma: 'πνεῦμα',
    lemmaTranslit: 'pneuma',
    gloss: 'spirit',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'accusative' },
    strongs: 'G4151',
    position: 1,
  },
  {
    id: 'John.20.22.2',
    language: 'greek',
    text: 'ἅγιον',
    transliteration: 'hagion',
    lemma: 'ἅγιος',
    lemmaTranslit: 'hagios',
    gloss: 'holy',
    morphology: { pos: 'adjective', gender: 'neuter', number: 'singular', case: 'accusative' },
    strongs: 'G40',
    position: 2,
  },
];

export const john20_22_translation: VerseTranslation = {
  verseRef: 'John.20.22',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Receive the Holy Spirit.',
      spans: [
        { id: 'John.20.22.en.lit.0', text: 'Receive', position: 0, sourceTokenIds: ['John.20.22.0'], confidence: 'high' },
        { id: 'John.20.22.en.lit.1', text: 'the Holy Spirit.', position: 1, sourceTokenIds: ['John.20.22.1', 'John.20.22.2'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Receive the Holy Spirit.',
      spans: [
        { id: 'John.20.22.en.idi.0', text: 'Receive', position: 0, sourceTokenIds: ['John.20.22.0'], confidence: 'high' },
        { id: 'John.20.22.en.idi.1', text: 'the Holy Spirit.', position: 1, sourceTokenIds: ['John.20.22.1', 'John.20.22.2'], confidence: 'high' },
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

export const john20_22_verse = {
  ref: 'John.20.22',
  sourceTokens: john20_22_tokens,
  translation: john20_22_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 20:27 – Do not be unbelieving, but believing
 * ──────────────────────────────────────────────────────────── */

export const john20_27_tokens: SourceToken[] = [
  {
    id: 'John.20.27.0',
    language: 'greek',
    text: 'μὴ',
    transliteration: 'mē',
    lemma: 'μή',
    lemmaTranslit: 'mē',
    gloss: 'not',
    morphology: { pos: 'adverb' },
    strongs: 'G3361',
    position: 0,
  },
  {
    id: 'John.20.27.1',
    language: 'greek',
    text: 'γίνου',
    transliteration: 'ginou',
    lemma: 'γίνομαι',
    lemmaTranslit: 'ginomai',
    gloss: 'become',
    morphology: { pos: 'verb', person: '2', number: 'singular', tense: 'present', voice: 'middle', mood: 'imperative' },
    strongs: 'G1096',
    position: 1,
  },
  {
    id: 'John.20.27.2',
    language: 'greek',
    text: 'ἄπιστος',
    transliteration: 'apistos',
    lemma: 'ἄπιστος',
    lemmaTranslit: 'apistos',
    gloss: 'unbelieving',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G571',
    position: 2,
  },
  {
    id: 'John.20.27.3',
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
    id: 'John.20.27.4',
    language: 'greek',
    text: 'πιστός',
    transliteration: 'pistos',
    lemma: 'πιστός',
    lemmaTranslit: 'pistos',
    gloss: 'believing',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G4103',
    position: 4,
  },
];

export const john20_27_translation: VerseTranslation = {
  verseRef: 'John.20.27',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Do not become unbelieving, but believing.',
      spans: [
        { id: 'John.20.27.en.lit.0', text: 'Do not become', position: 0, sourceTokenIds: ['John.20.27.0', 'John.20.27.1'], confidence: 'high' },
        { id: 'John.20.27.en.lit.1', text: 'unbelieving,', position: 1, sourceTokenIds: ['John.20.27.2'], confidence: 'high' },
        { id: 'John.20.27.en.lit.2', text: 'but believing.', position: 2, sourceTokenIds: ['John.20.27.3', 'John.20.27.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Stop doubting and believe.',
      spans: [
        { id: 'John.20.27.en.idi.0', text: 'Stop doubting', position: 0, sourceTokenIds: ['John.20.27.0', 'John.20.27.1', 'John.20.27.2'], confidence: 'high' },
        { id: 'John.20.27.en.idi.1', text: 'and believe.', position: 1, sourceTokenIds: ['John.20.27.3', 'John.20.27.4'], confidence: 'high' },
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

export const john20_27_verse = {
  ref: 'John.20.27',
  sourceTokens: john20_27_tokens,
  translation: john20_27_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 20:28 – My Lord and my God!
 * ──────────────────────────────────────────────────────────── */

export const john20_28_tokens: SourceToken[] = [
  {
    id: 'John.20.28.0',
    language: 'greek',
    text: 'ὁ',
    transliteration: 'ho',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3588',
    position: 0,
  },
  {
    id: 'John.20.28.1',
    language: 'greek',
    text: 'κύριός',
    transliteration: 'kyrios',
    lemma: 'κύριος',
    lemmaTranslit: 'kyrios',
    gloss: 'Lord',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G2962',
    position: 1,
  },
  {
    id: 'John.20.28.2',
    language: 'greek',
    text: 'μου',
    transliteration: 'mou',
    lemma: 'ἐγώ',
    lemmaTranslit: 'egō',
    gloss: 'of me',
    morphology: { pos: 'pronoun', person: '1', number: 'singular', case: 'genitive' },
    strongs: 'G1473',
    position: 2,
  },
  {
    id: 'John.20.28.3',
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
    id: 'John.20.28.4',
    language: 'greek',
    text: 'ὁ',
    transliteration: 'ho',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3588',
    position: 4,
  },
  {
    id: 'John.20.28.5',
    language: 'greek',
    text: 'θεός',
    transliteration: 'theos',
    lemma: 'θεός',
    lemmaTranslit: 'theos',
    gloss: 'God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G2316',
    position: 5,
  },
  {
    id: 'John.20.28.6',
    language: 'greek',
    text: 'μου',
    transliteration: 'mou',
    lemma: 'ἐγώ',
    lemmaTranslit: 'egō',
    gloss: 'of me',
    morphology: { pos: 'pronoun', person: '1', number: 'singular', case: 'genitive' },
    strongs: 'G1473',
    position: 6,
  },
];

export const john20_28_translation: VerseTranslation = {
  verseRef: 'John.20.28',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'The Lord of me and the God of me!',
      spans: [
        { id: 'John.20.28.en.lit.0', text: 'The Lord of me', position: 0, sourceTokenIds: ['John.20.28.0', 'John.20.28.1', 'John.20.28.2'], confidence: 'high' },
        { id: 'John.20.28.en.lit.1', text: 'and', position: 1, sourceTokenIds: ['John.20.28.3'], confidence: 'high' },
        { id: 'John.20.28.en.lit.2', text: 'the God of me!', position: 2, sourceTokenIds: ['John.20.28.4', 'John.20.28.5', 'John.20.28.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'My Lord and my God!',
      spans: [
        { id: 'John.20.28.en.idi.0', text: 'My Lord', position: 0, sourceTokenIds: ['John.20.28.0', 'John.20.28.1', 'John.20.28.2'], confidence: 'high' },
        { id: 'John.20.28.en.idi.1', text: 'and my God!', position: 1, sourceTokenIds: ['John.20.28.3', 'John.20.28.4', 'John.20.28.5', 'John.20.28.6'], confidence: 'high' },
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

export const john20_28_verse = {
  ref: 'John.20.28',
  sourceTokens: john20_28_tokens,
  translation: john20_28_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 20:31 – These are written so that you may believe
 * ──────────────────────────────────────────────────────────── */

export const john20_31_tokens: SourceToken[] = [
  {
    id: 'John.20.31.0',
    language: 'greek',
    text: 'ταῦτα',
    transliteration: 'tauta',
    lemma: 'οὗτος',
    lemmaTranslit: 'houtos',
    gloss: 'these things',
    morphology: { pos: 'pronoun', gender: 'neuter', number: 'plural', case: 'nominative' },
    strongs: 'G3778',
    position: 0,
  },
  {
    id: 'John.20.31.1',
    language: 'greek',
    text: 'γέγραπται',
    transliteration: 'gegraptai',
    lemma: 'γράφω',
    lemmaTranslit: 'graphō',
    gloss: 'have been written',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'perfect', voice: 'passive', mood: 'indicative' },
    strongs: 'G1125',
    position: 1,
  },
  {
    id: 'John.20.31.2',
    language: 'greek',
    text: 'ἵνα',
    transliteration: 'hina',
    lemma: 'ἵνα',
    lemmaTranslit: 'hina',
    gloss: 'so that',
    morphology: { pos: 'conjunction' },
    strongs: 'G2443',
    position: 2,
  },
  {
    id: 'John.20.31.3',
    language: 'greek',
    text: 'πιστεύητε',
    transliteration: 'pisteuēte',
    lemma: 'πιστεύω',
    lemmaTranslit: 'pisteuō',
    gloss: 'you may believe',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'present', voice: 'active', mood: 'subjunctive' },
    strongs: 'G4100',
    position: 3,
  },
  {
    id: 'John.20.31.4',
    language: 'greek',
    text: 'ὅτι',
    transliteration: 'hoti',
    lemma: 'ὅτι',
    lemmaTranslit: 'hoti',
    gloss: 'that',
    morphology: { pos: 'conjunction' },
    strongs: 'G3754',
    position: 4,
  },
  {
    id: 'John.20.31.5',
    language: 'greek',
    text: 'Ἰησοῦς',
    transliteration: 'Iēsous',
    lemma: 'Ἰησοῦς',
    lemmaTranslit: 'Iēsous',
    gloss: 'Jesus',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G2424',
    position: 5,
  },
  {
    id: 'John.20.31.6',
    language: 'greek',
    text: 'ἐστιν',
    transliteration: 'estin',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'is',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G1510',
    position: 6,
  },
  {
    id: 'John.20.31.7',
    language: 'greek',
    text: 'χριστός',
    transliteration: 'christos',
    lemma: 'χριστός',
    lemmaTranslit: 'christos',
    gloss: 'Christ',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G5547',
    position: 7,
  },
];

export const john20_31_translation: VerseTranslation = {
  verseRef: 'John.20.31',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'But these have been written so that you may believe that Jesus is the Christ, the Son of God.',
      spans: [
        { id: 'John.20.31.en.lit.0', text: 'These have been written', position: 0, sourceTokenIds: ['John.20.31.0', 'John.20.31.1'], confidence: 'high' },
        { id: 'John.20.31.en.lit.1', text: 'so that you may believe', position: 1, sourceTokenIds: ['John.20.31.2', 'John.20.31.3'], confidence: 'high' },
        { id: 'John.20.31.en.lit.2', text: 'that Jesus is the Christ,', position: 2, sourceTokenIds: ['John.20.31.4', 'John.20.31.5', 'John.20.31.6', 'John.20.31.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'These are written so that you may believe that Jesus is the Messiah, the Son of God.',
      spans: [
        { id: 'John.20.31.en.idi.0', text: 'These are written', position: 0, sourceTokenIds: ['John.20.31.0', 'John.20.31.1'], confidence: 'high' },
        { id: 'John.20.31.en.idi.1', text: 'so that you may believe', position: 1, sourceTokenIds: ['John.20.31.2', 'John.20.31.3'], confidence: 'high' },
        { id: 'John.20.31.en.idi.2', text: 'that Jesus is the Messiah, the Son of God.', position: 2, sourceTokenIds: ['John.20.31.4', 'John.20.31.5', 'John.20.31.6', 'John.20.31.7'], confidence: 'high' },
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

export const john20_31_verse = {
  ref: 'John.20.31',
  sourceTokens: john20_31_tokens,
  translation: john20_31_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export – John 20:1-31 (Resurrection & Thomas)
 * ──────────────────────────────────────────────────────────── */

export const john20_1_31_verses = [
  john20_1_verse,
  john20_11_verse,
  john20_16_verse,
  john20_19_verse,
  john20_22_verse,
  john20_27_verse,
  john20_28_verse,
  john20_31_verse,
];

export default john20_1_31_verses;
