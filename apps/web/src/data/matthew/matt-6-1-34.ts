// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 6:9 – Our Father in heaven, hallowed be your name
 * ──────────────────────────────────────────────────────────── */

export const matthew6_9_tokens: SourceToken[] = [
  {
    id: 'Matt.6.9.0',
    language: 'greek',
    text: 'Πάτερ',
    transliteration: 'Pater',
    lemma: 'πατήρ',
    lemmaTranslit: 'patēr',
    gloss: 'Father',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'vocative' },
    strongs: 'G3962',
    position: 0,
  },
  {
    id: 'Matt.6.9.1',
    language: 'greek',
    text: 'ἡμῶν',
    transliteration: 'hēmōn',
    lemma: 'ἐγώ',
    lemmaTranslit: 'egō',
    gloss: 'of us',
    morphology: { pos: 'pronoun', person: '1', number: 'plural', case: 'genitive' },
    strongs: 'G1473',
    position: 1,
  },
  {
    id: 'Matt.6.9.2',
    language: 'greek',
    text: 'ὁ',
    transliteration: 'ho',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the [one]',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3588',
    position: 2,
  },
  {
    id: 'Matt.6.9.3',
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
    id: 'Matt.6.9.4',
    language: 'greek',
    text: 'τοῖς',
    transliteration: 'tois',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'plural', case: 'dative' },
    strongs: 'G3588',
    position: 4,
  },
  {
    id: 'Matt.6.9.5',
    language: 'greek',
    text: 'οὐρανοῖς',
    transliteration: 'ouranois',
    lemma: 'οὐρανός',
    lemmaTranslit: 'ouranos',
    gloss: 'heavens',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', case: 'dative' },
    strongs: 'G3772',
    position: 5,
  },
  {
    id: 'Matt.6.9.6',
    language: 'greek',
    text: 'ἁγιασθήτω',
    transliteration: 'hagiasthētō',
    lemma: 'ἁγιάζω',
    lemmaTranslit: 'hagiazō',
    gloss: 'let it be hallowed',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'passive', mood: 'imperative' },
    strongs: 'G37',
    position: 6,
  },
  {
    id: 'Matt.6.9.7',
    language: 'greek',
    text: 'ὄνομά',
    transliteration: 'onoma',
    lemma: 'ὄνομα',
    lemmaTranslit: 'onoma',
    gloss: 'name',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'nominative' },
    strongs: 'G3686',
    position: 7,
  },
];

export const matthew6_9_translation: VerseTranslation = {
  verseRef: 'Matt.6.9',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Father of us, the [one] in the heavens, let be hallowed the name of you.',
      spans: [
        { id: 'Matt.6.9.en.lit.0', text: 'Father of us,', position: 0, sourceTokenIds: ['Matt.6.9.0', 'Matt.6.9.1'], confidence: 'high' },
        { id: 'Matt.6.9.en.lit.1', text: 'the [one] in the heavens,', position: 1, sourceTokenIds: ['Matt.6.9.2', 'Matt.6.9.3', 'Matt.6.9.4', 'Matt.6.9.5'], confidence: 'high' },
        { id: 'Matt.6.9.en.lit.2', text: 'let be hallowed the name of you.', position: 2, sourceTokenIds: ['Matt.6.9.6', 'Matt.6.9.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Our Father in heaven, hallowed be your name.',
      spans: [
        { id: 'Matt.6.9.en.idi.0', text: 'Our Father in heaven,', position: 0, sourceTokenIds: ['Matt.6.9.0', 'Matt.6.9.1', 'Matt.6.9.2', 'Matt.6.9.3', 'Matt.6.9.4', 'Matt.6.9.5'], confidence: 'high' },
        { id: 'Matt.6.9.en.idi.1', text: 'hallowed be your name.', position: 1, sourceTokenIds: ['Matt.6.9.6', 'Matt.6.9.7'], confidence: 'high' },
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

export const matthew6_9_verse = {
  ref: 'Matt.6.9',
  sourceTokens: matthew6_9_tokens,
  translation: matthew6_9_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 6:10 – Your kingdom come, your will be done
 * ──────────────────────────────────────────────────────────── */

export const matthew6_10_tokens: SourceToken[] = [
  {
    id: 'Matt.6.10.0',
    language: 'greek',
    text: 'ἐλθέτω',
    transliteration: 'elthetō',
    lemma: 'ἔρχομαι',
    lemmaTranslit: 'erchomai',
    gloss: 'let come',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'imperative' },
    strongs: 'G2064',
    position: 0,
  },
  {
    id: 'Matt.6.10.1',
    language: 'greek',
    text: 'ἡ',
    transliteration: 'hē',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G3588',
    position: 1,
  },
  {
    id: 'Matt.6.10.2',
    language: 'greek',
    text: 'βασιλεία',
    transliteration: 'basileia',
    lemma: 'βασιλεία',
    lemmaTranslit: 'basileia',
    gloss: 'kingdom',
    glossExtended: 'kingdom, reign, royal power',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G932',
    position: 2,
  },
  {
    id: 'Matt.6.10.3',
    language: 'greek',
    text: 'σου',
    transliteration: 'sou',
    lemma: 'σύ',
    lemmaTranslit: 'sy',
    gloss: 'of you',
    morphology: { pos: 'pronoun', person: '2', number: 'singular', case: 'genitive' },
    strongs: 'G4771',
    position: 3,
  },
  {
    id: 'Matt.6.10.4',
    language: 'greek',
    text: 'γενηθήτω',
    transliteration: 'genēthētō',
    lemma: 'γίνομαι',
    lemmaTranslit: 'ginomai',
    gloss: 'let be done',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'passive', mood: 'imperative' },
    strongs: 'G1096',
    position: 4,
  },
  {
    id: 'Matt.6.10.5',
    language: 'greek',
    text: 'τὸ',
    transliteration: 'to',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'neuter', number: 'singular', case: 'nominative' },
    strongs: 'G3588',
    position: 5,
  },
  {
    id: 'Matt.6.10.6',
    language: 'greek',
    text: 'θέλημά',
    transliteration: 'thelēma',
    lemma: 'θέλημα',
    lemmaTranslit: 'thelēma',
    gloss: 'will',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'nominative' },
    strongs: 'G2307',
    position: 6,
  },
];

export const matthew6_10_translation: VerseTranslation = {
  verseRef: 'Matt.6.10',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Let come the kingdom of you; let be done the will of you, as in heaven also on earth.',
      spans: [
        { id: 'Matt.6.10.en.lit.0', text: 'Let come the kingdom of you;', position: 0, sourceTokenIds: ['Matt.6.10.0', 'Matt.6.10.1', 'Matt.6.10.2', 'Matt.6.10.3'], confidence: 'high' },
        { id: 'Matt.6.10.en.lit.1', text: 'let be done the will of you, as in heaven also on earth.', position: 1, sourceTokenIds: ['Matt.6.10.4', 'Matt.6.10.5', 'Matt.6.10.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Your kingdom come, your will be done, on earth as it is in heaven.',
      spans: [
        { id: 'Matt.6.10.en.idi.0', text: 'Your kingdom come,', position: 0, sourceTokenIds: ['Matt.6.10.0', 'Matt.6.10.1', 'Matt.6.10.2', 'Matt.6.10.3'], confidence: 'high' },
        { id: 'Matt.6.10.en.idi.1', text: 'your will be done, on earth as it is in heaven.', position: 1, sourceTokenIds: ['Matt.6.10.4', 'Matt.6.10.5', 'Matt.6.10.6'], confidence: 'high' },
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

export const matthew6_10_verse = {
  ref: 'Matt.6.10',
  sourceTokens: matthew6_10_tokens,
  translation: matthew6_10_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 6:11 – Give us today our daily bread
 * ──────────────────────────────────────────────────────────── */

export const matthew6_11_tokens: SourceToken[] = [
  {
    id: 'Matt.6.11.0',
    language: 'greek',
    text: 'Τὸν',
    transliteration: 'Ton',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G3588',
    position: 0,
  },
  {
    id: 'Matt.6.11.1',
    language: 'greek',
    text: 'ἄρτον',
    transliteration: 'arton',
    lemma: 'ἄρτος',
    lemmaTranslit: 'artos',
    gloss: 'bread',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G740',
    position: 1,
  },
  {
    id: 'Matt.6.11.2',
    language: 'greek',
    text: 'ἡμῶν',
    transliteration: 'hēmōn',
    lemma: 'ἐγώ',
    lemmaTranslit: 'egō',
    gloss: 'of us',
    morphology: { pos: 'pronoun', person: '1', number: 'plural', case: 'genitive' },
    strongs: 'G1473',
    position: 2,
  },
  {
    id: 'Matt.6.11.3',
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
    id: 'Matt.6.11.4',
    language: 'greek',
    text: 'ἐπιούσιον',
    transliteration: 'epiousios',
    lemma: 'ἐπιούσιος',
    lemmaTranslit: 'epiousios',
    gloss: 'daily',
    glossExtended: 'daily, for the coming day, necessary for existence (rare and debated word)',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G1967',
    position: 4,
  },
  {
    id: 'Matt.6.11.5',
    language: 'greek',
    text: 'δὸς',
    transliteration: 'dos',
    lemma: 'δίδωμι',
    lemmaTranslit: 'didōmi',
    gloss: 'give',
    morphology: { pos: 'verb', person: '2', number: 'singular', tense: 'aorist', voice: 'active', mood: 'imperative' },
    strongs: 'G1325',
    position: 5,
  },
  {
    id: 'Matt.6.11.6',
    language: 'greek',
    text: 'σήμερον',
    transliteration: 'sēmeron',
    lemma: 'σήμερον',
    lemmaTranslit: 'sēmeron',
    gloss: 'today',
    morphology: { pos: 'adverb' },
    strongs: 'G4594',
    position: 6,
  },
];

export const matthew6_11_translation: VerseTranslation = {
  verseRef: 'Matt.6.11',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'The bread of us, the daily, give us today.',
      spans: [
        { id: 'Matt.6.11.en.lit.0', text: 'The bread of us, the daily,', position: 0, sourceTokenIds: ['Matt.6.11.0', 'Matt.6.11.1', 'Matt.6.11.2', 'Matt.6.11.3', 'Matt.6.11.4'], confidence: 'medium' },
        { id: 'Matt.6.11.en.lit.1', text: 'give us today.', position: 1, sourceTokenIds: ['Matt.6.11.5', 'Matt.6.11.6'], confidence: 'high' },
      ],
      overallConfidence: 'medium',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Give us today our daily bread.',
      spans: [
        { id: 'Matt.6.11.en.idi.0', text: 'Give us today', position: 0, sourceTokenIds: ['Matt.6.11.5', 'Matt.6.11.6'], confidence: 'high' },
        { id: 'Matt.6.11.en.idi.1', text: 'our daily bread.', position: 1, sourceTokenIds: ['Matt.6.11.0', 'Matt.6.11.1', 'Matt.6.11.2', 'Matt.6.11.3', 'Matt.6.11.4'], confidence: 'medium' },
      ],
      overallConfidence: 'medium',
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

export const matthew6_11_verse = {
  ref: 'Matt.6.11',
  sourceTokens: matthew6_11_tokens,
  translation: matthew6_11_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 6:12 – And forgive us our debts, as we also have forgiven our debtors
 * ──────────────────────────────────────────────────────────── */

export const matthew6_12_tokens: SourceToken[] = [
  {
    id: 'Matt.6.12.0',
    language: 'greek',
    text: 'ἄφες',
    transliteration: 'aphes',
    lemma: 'ἀφίημι',
    lemmaTranslit: 'aphiēmi',
    gloss: 'forgive',
    morphology: { pos: 'verb', person: '2', number: 'singular', tense: 'aorist', voice: 'active', mood: 'imperative' },
    strongs: 'G863',
    position: 0,
  },
  {
    id: 'Matt.6.12.1',
    language: 'greek',
    text: 'ἡμῖν',
    transliteration: 'hēmin',
    lemma: 'ἐγώ',
    lemmaTranslit: 'egō',
    gloss: 'to us',
    morphology: { pos: 'pronoun', person: '1', number: 'plural', case: 'dative' },
    strongs: 'G1473',
    position: 1,
  },
  {
    id: 'Matt.6.12.2',
    language: 'greek',
    text: 'τὰ',
    transliteration: 'ta',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'neuter', number: 'plural', case: 'accusative' },
    strongs: 'G3588',
    position: 2,
  },
  {
    id: 'Matt.6.12.3',
    language: 'greek',
    text: 'ὀφειλήματα',
    transliteration: 'opheilēmata',
    lemma: 'ὀφείλημα',
    lemmaTranslit: 'opheilēma',
    gloss: 'debts',
    glossExtended: 'debts, obligations, sins (metaphorical)',
    morphology: { pos: 'noun', gender: 'neuter', number: 'plural', case: 'accusative' },
    strongs: 'G3783',
    position: 3,
  },
  {
    id: 'Matt.6.12.4',
    language: 'greek',
    text: 'ἀφήκαμεν',
    transliteration: 'aphēkamen',
    lemma: 'ἀφίημι',
    lemmaTranslit: 'aphiēmi',
    gloss: 'we have forgiven',
    morphology: { pos: 'verb', person: '1', number: 'plural', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G863',
    position: 4,
  },
  {
    id: 'Matt.6.12.5',
    language: 'greek',
    text: 'ὀφειλέταις',
    transliteration: 'opheiletais',
    lemma: 'ὀφειλέτης',
    lemmaTranslit: 'opheiletēs',
    gloss: 'debtors',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', case: 'dative' },
    strongs: 'G3781',
    position: 5,
  },
];

export const matthew6_12_translation: VerseTranslation = {
  verseRef: 'Matt.6.12',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And forgive us the debts of us, as also we have forgiven the debtors of us.',
      spans: [
        { id: 'Matt.6.12.en.lit.0', text: 'And forgive us', position: 0, sourceTokenIds: ['Matt.6.12.0', 'Matt.6.12.1'], confidence: 'high' },
        { id: 'Matt.6.12.en.lit.1', text: 'the debts of us,', position: 1, sourceTokenIds: ['Matt.6.12.2', 'Matt.6.12.3'], confidence: 'high' },
        { id: 'Matt.6.12.en.lit.2', text: 'as also we have forgiven the debtors of us.', position: 2, sourceTokenIds: ['Matt.6.12.4', 'Matt.6.12.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'And forgive us our debts, as we also have forgiven our debtors.',
      spans: [
        { id: 'Matt.6.12.en.idi.0', text: 'And forgive us our debts,', position: 0, sourceTokenIds: ['Matt.6.12.0', 'Matt.6.12.1', 'Matt.6.12.2', 'Matt.6.12.3'], confidence: 'high' },
        { id: 'Matt.6.12.en.idi.1', text: 'as we also have forgiven our debtors.', position: 1, sourceTokenIds: ['Matt.6.12.4', 'Matt.6.12.5'], confidence: 'high' },
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

export const matthew6_12_verse = {
  ref: 'Matt.6.12',
  sourceTokens: matthew6_12_tokens,
  translation: matthew6_12_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 6:13 – And lead us not into temptation, but deliver us from evil
 * ──────────────────────────────────────────────────────────── */

export const matthew6_13_tokens: SourceToken[] = [
  {
    id: 'Matt.6.13.0',
    language: 'greek',
    text: 'μὴ',
    transliteration: 'mē',
    lemma: 'μή',
    lemmaTranslit: 'mē',
    gloss: 'not',
    morphology: { pos: 'particle' },
    strongs: 'G3361',
    position: 0,
  },
  {
    id: 'Matt.6.13.1',
    language: 'greek',
    text: 'εἰσενέγκῃς',
    transliteration: 'eisenenkēs',
    lemma: 'εἰσφέρω',
    lemmaTranslit: 'eispherō',
    gloss: 'bring [us] into',
    morphology: { pos: 'verb', person: '2', number: 'singular', tense: 'aorist', voice: 'active', mood: 'subjunctive' },
    strongs: 'G1533',
    position: 1,
  },
  {
    id: 'Matt.6.13.2',
    language: 'greek',
    text: 'πειρασμόν',
    transliteration: 'peirasmon',
    lemma: 'πειρασμός',
    lemmaTranslit: 'peirasmos',
    gloss: 'temptation',
    glossExtended: 'temptation, trial, testing',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G3986',
    position: 2,
  },
  {
    id: 'Matt.6.13.3',
    language: 'greek',
    text: 'ῥῦσαι',
    transliteration: 'rhysai',
    lemma: 'ῥύομαι',
    lemmaTranslit: 'rhyomai',
    gloss: 'deliver',
    morphology: { pos: 'verb', person: '2', number: 'singular', tense: 'aorist', voice: 'middle', mood: 'imperative' },
    strongs: 'G4506',
    position: 3,
  },
  {
    id: 'Matt.6.13.4',
    language: 'greek',
    text: 'τοῦ',
    transliteration: 'tou',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G3588',
    position: 4,
  },
  {
    id: 'Matt.6.13.5',
    language: 'greek',
    text: 'πονηροῦ',
    transliteration: 'ponērou',
    lemma: 'πονηρός',
    lemmaTranslit: 'ponēros',
    gloss: 'evil',
    glossExtended: 'evil, the evil one, wicked',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G4190',
    position: 5,
  },
];

export const matthew6_13_translation: VerseTranslation = {
  verseRef: 'Matt.6.13',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And do not bring us into temptation, but deliver us from the evil [one].',
      spans: [
        { id: 'Matt.6.13.en.lit.0', text: 'And do not bring us into temptation,', position: 0, sourceTokenIds: ['Matt.6.13.0', 'Matt.6.13.1', 'Matt.6.13.2'], confidence: 'high' },
        { id: 'Matt.6.13.en.lit.1', text: 'but deliver us from the evil [one].', position: 1, sourceTokenIds: ['Matt.6.13.3', 'Matt.6.13.4', 'Matt.6.13.5'], confidence: 'medium' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'And lead us not into temptation, but deliver us from the evil one.',
      spans: [
        { id: 'Matt.6.13.en.idi.0', text: 'And lead us not into temptation,', position: 0, sourceTokenIds: ['Matt.6.13.0', 'Matt.6.13.1', 'Matt.6.13.2'], confidence: 'high' },
        { id: 'Matt.6.13.en.idi.1', text: 'but deliver us from the evil one.', position: 1, sourceTokenIds: ['Matt.6.13.3', 'Matt.6.13.4', 'Matt.6.13.5'], confidence: 'medium' },
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

export const matthew6_13_verse = {
  ref: 'Matt.6.13',
  sourceTokens: matthew6_13_tokens,
  translation: matthew6_13_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 6:25 – Do not worry about your life
 * ──────────────────────────────────────────────────────────── */

export const matthew6_25_tokens: SourceToken[] = [
  {
    id: 'Matt.6.25.0',
    language: 'greek',
    text: 'μὴ',
    transliteration: 'mē',
    lemma: 'μή',
    lemmaTranslit: 'mē',
    gloss: 'not',
    morphology: { pos: 'particle' },
    strongs: 'G3361',
    position: 0,
  },
  {
    id: 'Matt.6.25.1',
    language: 'greek',
    text: 'μεριμνᾶτε',
    transliteration: 'merimnate',
    lemma: 'μεριμνάω',
    lemmaTranslit: 'merimnaō',
    gloss: 'worry',
    glossExtended: 'be anxious, worry, be concerned',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'present', voice: 'active', mood: 'imperative' },
    strongs: 'G3309',
    position: 1,
  },
  {
    id: 'Matt.6.25.2',
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
    id: 'Matt.6.25.3',
    language: 'greek',
    text: 'ψυχῇ',
    transliteration: 'psychē',
    lemma: 'ψυχή',
    lemmaTranslit: 'psychē',
    gloss: 'life',
    glossExtended: 'soul, life, self, person',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G5590',
    position: 3,
  },
  {
    id: 'Matt.6.25.4',
    language: 'greek',
    text: 'φάγητε',
    transliteration: 'phagēte',
    lemma: 'ἐσθίω',
    lemmaTranslit: 'esthiō',
    gloss: 'you eat',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'aorist', voice: 'active', mood: 'subjunctive' },
    strongs: 'G2068',
    position: 4,
  },
  {
    id: 'Matt.6.25.5',
    language: 'greek',
    text: 'σώματι',
    transliteration: 'sōmati',
    lemma: 'σῶμα',
    lemmaTranslit: 'sōma',
    gloss: 'body',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'dative' },
    strongs: 'G4983',
    position: 5,
  },
];

export const matthew6_25_translation: VerseTranslation = {
  verseRef: 'Matt.6.25',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Do not worry for the life of you, what you should eat, nor for the body of you, what you should wear.',
      spans: [
        { id: 'Matt.6.25.en.lit.0', text: 'Do not worry', position: 0, sourceTokenIds: ['Matt.6.25.0', 'Matt.6.25.1'], confidence: 'high' },
        { id: 'Matt.6.25.en.lit.1', text: 'for the life of you, what you should eat,', position: 1, sourceTokenIds: ['Matt.6.25.2', 'Matt.6.25.3', 'Matt.6.25.4'], confidence: 'high' },
        { id: 'Matt.6.25.en.lit.2', text: 'nor for the body of you, what you should wear.', position: 2, sourceTokenIds: ['Matt.6.25.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Therefore I tell you, do not worry about your life, what you will eat or drink; or about your body, what you will wear.',
      spans: [
        { id: 'Matt.6.25.en.idi.0', text: 'do not worry about your life, what you will eat or drink;', position: 0, sourceTokenIds: ['Matt.6.25.0', 'Matt.6.25.1', 'Matt.6.25.2', 'Matt.6.25.3', 'Matt.6.25.4'], confidence: 'high' },
        { id: 'Matt.6.25.en.idi.1', text: 'or about your body, what you will wear.', position: 1, sourceTokenIds: ['Matt.6.25.5'], confidence: 'high' },
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

export const matthew6_25_verse = {
  ref: 'Matt.6.25',
  sourceTokens: matthew6_25_tokens,
  translation: matthew6_25_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 6:33 – But seek first the kingdom of God and his righteousness
 * ──────────────────────────────────────────────────────────── */

export const matthew6_33_tokens: SourceToken[] = [
  {
    id: 'Matt.6.33.0',
    language: 'greek',
    text: 'ζητεῖτε',
    transliteration: 'zēteite',
    lemma: 'ζητέω',
    lemmaTranslit: 'zēteō',
    gloss: 'seek',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'present', voice: 'active', mood: 'imperative' },
    strongs: 'G2212',
    position: 0,
  },
  {
    id: 'Matt.6.33.1',
    language: 'greek',
    text: 'πρῶτον',
    transliteration: 'prōton',
    lemma: 'πρῶτος',
    lemmaTranslit: 'prōtos',
    gloss: 'first',
    morphology: { pos: 'adverb' },
    strongs: 'G4413',
    position: 1,
  },
  {
    id: 'Matt.6.33.2',
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
    id: 'Matt.6.33.3',
    language: 'greek',
    text: 'βασιλείαν',
    transliteration: 'basileian',
    lemma: 'βασιλεία',
    lemmaTranslit: 'basileia',
    gloss: 'kingdom',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G932',
    position: 3,
  },
  {
    id: 'Matt.6.33.4',
    language: 'greek',
    text: 'δικαιοσύνην',
    transliteration: 'dikaiosynēn',
    lemma: 'δικαιοσύνη',
    lemmaTranslit: 'dikaiosynē',
    gloss: 'righteousness',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G1343',
    position: 4,
  },
  {
    id: 'Matt.6.33.5',
    language: 'greek',
    text: 'αὐτοῦ',
    transliteration: 'autou',
    lemma: 'αὐτός',
    lemmaTranslit: 'autos',
    gloss: 'of him',
    morphology: { pos: 'pronoun', person: '3', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G846',
    position: 5,
  },
];

export const matthew6_33_translation: VerseTranslation = {
  verseRef: 'Matt.6.33',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'But seek first the kingdom and the righteousness of him, and all these things will be added to you.',
      spans: [
        { id: 'Matt.6.33.en.lit.0', text: 'But seek first', position: 0, sourceTokenIds: ['Matt.6.33.0', 'Matt.6.33.1'], confidence: 'high' },
        { id: 'Matt.6.33.en.lit.1', text: 'the kingdom', position: 1, sourceTokenIds: ['Matt.6.33.2', 'Matt.6.33.3'], confidence: 'high' },
        { id: 'Matt.6.33.en.lit.2', text: 'and the righteousness of him,', position: 2, sourceTokenIds: ['Matt.6.33.4', 'Matt.6.33.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'But seek first his kingdom and his righteousness, and all these things will be given to you as well.',
      spans: [
        { id: 'Matt.6.33.en.idi.0', text: 'But seek first his kingdom', position: 0, sourceTokenIds: ['Matt.6.33.0', 'Matt.6.33.1', 'Matt.6.33.2', 'Matt.6.33.3'], confidence: 'high' },
        { id: 'Matt.6.33.en.idi.1', text: 'and his righteousness,', position: 1, sourceTokenIds: ['Matt.6.33.4', 'Matt.6.33.5'], confidence: 'high' },
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

export const matthew6_33_verse = {
  ref: 'Matt.6.33',
  sourceTokens: matthew6_33_tokens,
  translation: matthew6_33_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 6:34 – Do not worry about tomorrow
 * ──────────────────────────────────────────────────────────── */

export const matthew6_34_tokens: SourceToken[] = [
  {
    id: 'Matt.6.34.0',
    language: 'greek',
    text: 'μὴ',
    transliteration: 'mē',
    lemma: 'μή',
    lemmaTranslit: 'mē',
    gloss: 'not',
    morphology: { pos: 'particle' },
    strongs: 'G3361',
    position: 0,
  },
  {
    id: 'Matt.6.34.1',
    language: 'greek',
    text: 'μεριμνήσητε',
    transliteration: 'merimnēsēte',
    lemma: 'μεριμνάω',
    lemmaTranslit: 'merimnaō',
    gloss: 'worry',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'aorist', voice: 'active', mood: 'subjunctive' },
    strongs: 'G3309',
    position: 1,
  },
  {
    id: 'Matt.6.34.2',
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
    id: 'Matt.6.34.3',
    language: 'greek',
    text: 'αὔριον',
    transliteration: 'aurion',
    lemma: 'αὔριον',
    lemmaTranslit: 'aurion',
    gloss: 'tomorrow',
    morphology: { pos: 'adverb' },
    strongs: 'G839',
    position: 3,
  },
  {
    id: 'Matt.6.34.4',
    language: 'greek',
    text: 'ἡμέρᾳ',
    transliteration: 'hēmera',
    lemma: 'ἡμέρα',
    lemmaTranslit: 'hēmera',
    gloss: 'day',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G2250',
    position: 4,
  },
  {
    id: 'Matt.6.34.5',
    language: 'greek',
    text: 'κακία',
    transliteration: 'kakia',
    lemma: 'κακία',
    lemmaTranslit: 'kakia',
    gloss: 'trouble',
    glossExtended: 'evil, trouble, wickedness',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G2549',
    position: 5,
  },
];

export const matthew6_34_translation: VerseTranslation = {
  verseRef: 'Matt.6.34',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Therefore do not worry about the tomorrow, for the tomorrow will worry about itself. Sufficient for the day [is] the evil of it.',
      spans: [
        { id: 'Matt.6.34.en.lit.0', text: 'Therefore do not worry', position: 0, sourceTokenIds: ['Matt.6.34.0', 'Matt.6.34.1'], confidence: 'high' },
        { id: 'Matt.6.34.en.lit.1', text: 'about the tomorrow,', position: 1, sourceTokenIds: ['Matt.6.34.2', 'Matt.6.34.3'], confidence: 'high' },
        { id: 'Matt.6.34.en.lit.2', text: 'Sufficient for the day [is] the evil of it.', position: 2, sourceTokenIds: ['Matt.6.34.4', 'Matt.6.34.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.',
      spans: [
        { id: 'Matt.6.34.en.idi.0', text: 'Therefore do not worry about tomorrow,', position: 0, sourceTokenIds: ['Matt.6.34.0', 'Matt.6.34.1', 'Matt.6.34.2', 'Matt.6.34.3'], confidence: 'high' },
        { id: 'Matt.6.34.en.idi.1', text: 'Each day has enough trouble of its own.', position: 1, sourceTokenIds: ['Matt.6.34.4', 'Matt.6.34.5'], confidence: 'high' },
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

export const matthew6_34_verse = {
  ref: 'Matt.6.34',
  sourceTokens: matthew6_34_tokens,
  translation: matthew6_34_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Matthew 6:1-34 (Lord's Prayer & Do Not Worry)
 * ──────────────────────────────────────────────────────────── */

export const matthew6_1_34_verses = [
  matthew6_9_verse,
  matthew6_10_verse,
  matthew6_11_verse,
  matthew6_12_verse,
  matthew6_13_verse,
  matthew6_25_verse,
  matthew6_33_verse,
  matthew6_34_verse,
];

export default matthew6_1_34_verses;
