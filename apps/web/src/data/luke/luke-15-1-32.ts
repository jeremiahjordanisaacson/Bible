// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 15:2 – This man receives sinners and eats with them
 * ──────────────────────────────────────────────────────────── */

export const luke15_2_tokens: SourceToken[] = [
  {
    id: 'Luke.15.2.0',
    language: 'greek',
    text: 'οὗτος',
    transliteration: 'houtos',
    lemma: 'οὗτος',
    lemmaTranslit: 'houtos',
    gloss: 'this man',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3778',
    position: 0,
  },
  {
    id: 'Luke.15.2.1',
    language: 'greek',
    text: 'ἁμαρτωλοὺς',
    transliteration: 'hamartōlous',
    lemma: 'ἁμαρτωλός',
    lemmaTranslit: 'hamartōlos',
    gloss: 'sinners',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', case: 'accusative' },
    strongs: 'G268',
    position: 1,
  },
  {
    id: 'Luke.15.2.2',
    language: 'greek',
    text: 'προσδέχεται',
    transliteration: 'prosdechetai',
    lemma: 'προσδέχομαι',
    lemmaTranslit: 'prosdechomai',
    gloss: 'receives',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'middle', mood: 'indicative' },
    strongs: 'G4327',
    position: 2,
  },
  {
    id: 'Luke.15.2.3',
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
    id: 'Luke.15.2.4',
    language: 'greek',
    text: 'συνεσθίει',
    transliteration: 'synesthiei',
    lemma: 'συνεσθίω',
    lemmaTranslit: 'synesthiō',
    gloss: 'eats with',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G4906',
    position: 4,
  },
  {
    id: 'Luke.15.2.5',
    language: 'greek',
    text: 'αὐτοῖς',
    transliteration: 'autois',
    lemma: 'αὐτός',
    lemmaTranslit: 'autos',
    gloss: 'them',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'plural', case: 'dative' },
    strongs: 'G846',
    position: 5,
  },
];

export const luke15_2_translation: VerseTranslation = {
  verseRef: 'Luke.15.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'This man sinners receives and eats with them.',
      spans: [
        { id: 'Luke.15.2.en.lit.0', text: 'This man sinners receives', position: 0, sourceTokenIds: ['Luke.15.2.0', 'Luke.15.2.1', 'Luke.15.2.2'], confidence: 'high' },
        { id: 'Luke.15.2.en.lit.1', text: 'and eats with them.', position: 1, sourceTokenIds: ['Luke.15.2.3', 'Luke.15.2.4', 'Luke.15.2.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'This man welcomes sinners and eats with them.',
      spans: [
        { id: 'Luke.15.2.en.idi.0', text: 'This man welcomes sinners', position: 0, sourceTokenIds: ['Luke.15.2.0', 'Luke.15.2.1', 'Luke.15.2.2'], confidence: 'high' },
        { id: 'Luke.15.2.en.idi.1', text: 'and eats with them.', position: 1, sourceTokenIds: ['Luke.15.2.3', 'Luke.15.2.4', 'Luke.15.2.5'], confidence: 'high' },
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

export const luke15_2_verse = {
  ref: 'Luke.15.2',
  sourceTokens: luke15_2_tokens,
  translation: luke15_2_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 15:4 – What man of you, having a hundred sheep
 * ──────────────────────────────────────────────────────────── */

export const luke15_4_tokens: SourceToken[] = [
  {
    id: 'Luke.15.4.0',
    language: 'greek',
    text: 'ἄνθρωπος',
    transliteration: 'anthrōpos',
    lemma: 'ἄνθρωπος',
    lemmaTranslit: 'anthrōpos',
    gloss: 'man',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G444',
    position: 0,
  },
  {
    id: 'Luke.15.4.1',
    language: 'greek',
    text: 'ἔχων',
    transliteration: 'echōn',
    lemma: 'ἔχω',
    lemmaTranslit: 'echō',
    gloss: 'having',
    morphology: { pos: 'verb', gender: 'masculine', number: 'singular', tense: 'present', voice: 'active', mood: 'participle', case: 'nominative' },
    strongs: 'G2192',
    position: 1,
  },
  {
    id: 'Luke.15.4.2',
    language: 'greek',
    text: 'ἑκατὸν',
    transliteration: 'hekaton',
    lemma: 'ἑκατόν',
    lemmaTranslit: 'hekaton',
    gloss: 'a hundred',
    morphology: { pos: 'adjective' },
    strongs: 'G1540',
    position: 2,
  },
  {
    id: 'Luke.15.4.3',
    language: 'greek',
    text: 'πρόβατα',
    transliteration: 'probata',
    lemma: 'πρόβατον',
    lemmaTranslit: 'probaton',
    gloss: 'sheep',
    morphology: { pos: 'noun', gender: 'neuter', number: 'plural', case: 'accusative' },
    strongs: 'G4263',
    position: 3,
  },
  {
    id: 'Luke.15.4.4',
    language: 'greek',
    text: 'ἀπολέσας',
    transliteration: 'apolesas',
    lemma: 'ἀπόλλυμι',
    lemmaTranslit: 'apollymi',
    gloss: 'having lost',
    morphology: { pos: 'verb', gender: 'masculine', number: 'singular', tense: 'aorist', voice: 'active', mood: 'participle', case: 'nominative' },
    strongs: 'G622',
    position: 4,
  },
  {
    id: 'Luke.15.4.5',
    language: 'greek',
    text: 'ἓν',
    transliteration: 'hen',
    lemma: 'εἷς',
    lemmaTranslit: 'heis',
    gloss: 'one',
    morphology: { pos: 'adjective', gender: 'neuter', number: 'singular', case: 'accusative' },
    strongs: 'G1520',
    position: 5,
  },
];

export const luke15_4_translation: VerseTranslation = {
  verseRef: 'Luke.15.4',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'What man of you, having a hundred sheep and having lost one of them, does not leave the ninety-nine in the wilderness?',
      spans: [
        { id: 'Luke.15.4.en.lit.0', text: 'What man of you, having', position: 0, sourceTokenIds: ['Luke.15.4.0', 'Luke.15.4.1'], confidence: 'high' },
        { id: 'Luke.15.4.en.lit.1', text: 'a hundred sheep and having lost one,', position: 1, sourceTokenIds: ['Luke.15.4.2', 'Luke.15.4.3', 'Luke.15.4.4', 'Luke.15.4.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "Suppose one of you has a hundred sheep and loses one of them. Doesn't he leave the ninety-nine in the open country?",
      spans: [
        { id: 'Luke.15.4.en.idi.0', text: 'Suppose one of you has', position: 0, sourceTokenIds: ['Luke.15.4.0', 'Luke.15.4.1'], confidence: 'high' },
        { id: 'Luke.15.4.en.idi.1', text: 'a hundred sheep and loses one of them.', position: 1, sourceTokenIds: ['Luke.15.4.2', 'Luke.15.4.3', 'Luke.15.4.4', 'Luke.15.4.5'], confidence: 'high' },
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

export const luke15_4_verse = {
  ref: 'Luke.15.4',
  sourceTokens: luke15_4_tokens,
  translation: luke15_4_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 15:6 – Rejoice with me, for I have found my sheep
 * ──────────────────────────────────────────────────────────── */

export const luke15_6_tokens: SourceToken[] = [
  {
    id: 'Luke.15.6.0',
    language: 'greek',
    text: 'συγχάρητέ',
    transliteration: 'syncharēte',
    lemma: 'συγχαίρω',
    lemmaTranslit: 'synchairō',
    gloss: 'rejoice with',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'aorist', voice: 'passive', mood: 'imperative' },
    strongs: 'G4796',
    position: 0,
  },
  {
    id: 'Luke.15.6.1',
    language: 'greek',
    text: 'μοι',
    transliteration: 'moi',
    lemma: 'ἐγώ',
    lemmaTranslit: 'egō',
    gloss: 'me',
    morphology: { pos: 'pronoun', person: '1', number: 'singular', case: 'dative' },
    strongs: 'G1473',
    position: 1,
  },
  {
    id: 'Luke.15.6.2',
    language: 'greek',
    text: 'εὗρον',
    transliteration: 'heuron',
    lemma: 'εὑρίσκω',
    lemmaTranslit: 'heuriskō',
    gloss: 'I have found',
    morphology: { pos: 'verb', person: '1', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G2147',
    position: 2,
  },
  {
    id: 'Luke.15.6.3',
    language: 'greek',
    text: 'τὸ',
    transliteration: 'to',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'neuter', number: 'singular', case: 'accusative' },
    strongs: 'G3588',
    position: 3,
  },
  {
    id: 'Luke.15.6.4',
    language: 'greek',
    text: 'πρόβατόν',
    transliteration: 'probaton',
    lemma: 'πρόβατον',
    lemmaTranslit: 'probaton',
    gloss: 'sheep',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'accusative' },
    strongs: 'G4263',
    position: 4,
  },
  {
    id: 'Luke.15.6.5',
    language: 'greek',
    text: 'μου',
    transliteration: 'mou',
    lemma: 'ἐγώ',
    lemmaTranslit: 'egō',
    gloss: 'my',
    morphology: { pos: 'pronoun', person: '1', number: 'singular', case: 'genitive' },
    strongs: 'G1473',
    position: 5,
  },
  {
    id: 'Luke.15.6.6',
    language: 'greek',
    text: 'τὸ',
    transliteration: 'to',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'neuter', number: 'singular', case: 'accusative' },
    strongs: 'G3588',
    position: 6,
  },
  {
    id: 'Luke.15.6.7',
    language: 'greek',
    text: 'ἀπολωλός',
    transliteration: 'apolōlos',
    lemma: 'ἀπόλλυμι',
    lemmaTranslit: 'apollymi',
    gloss: 'lost',
    morphology: { pos: 'verb', gender: 'neuter', number: 'singular', tense: 'perfect', voice: 'active', mood: 'participle', case: 'accusative' },
    strongs: 'G622',
    position: 7,
  },
];

export const luke15_6_translation: VerseTranslation = {
  verseRef: 'Luke.15.6',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Rejoice with me, for I have found my sheep, the one having been lost.',
      spans: [
        { id: 'Luke.15.6.en.lit.0', text: 'Rejoice with me,', position: 0, sourceTokenIds: ['Luke.15.6.0', 'Luke.15.6.1'], confidence: 'high' },
        { id: 'Luke.15.6.en.lit.1', text: 'for I have found my sheep, the one having been lost.', position: 1, sourceTokenIds: ['Luke.15.6.2', 'Luke.15.6.3', 'Luke.15.6.4', 'Luke.15.6.5', 'Luke.15.6.6', 'Luke.15.6.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Rejoice with me; I have found my lost sheep.',
      spans: [
        { id: 'Luke.15.6.en.idi.0', text: 'Rejoice with me;', position: 0, sourceTokenIds: ['Luke.15.6.0', 'Luke.15.6.1'], confidence: 'high' },
        { id: 'Luke.15.6.en.idi.1', text: 'I have found my lost sheep.', position: 1, sourceTokenIds: ['Luke.15.6.2', 'Luke.15.6.3', 'Luke.15.6.4', 'Luke.15.6.5', 'Luke.15.6.6', 'Luke.15.6.7'], confidence: 'high' },
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

export const luke15_6_verse = {
  ref: 'Luke.15.6',
  sourceTokens: luke15_6_tokens,
  translation: luke15_6_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 15:7 – There will be more joy in heaven over one sinner who repents
 * ──────────────────────────────────────────────────────────── */

export const luke15_7_tokens: SourceToken[] = [
  {
    id: 'Luke.15.7.0',
    language: 'greek',
    text: 'χαρὰ',
    transliteration: 'chara',
    lemma: 'χαρά',
    lemmaTranslit: 'chara',
    gloss: 'joy',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G5479',
    position: 0,
  },
  {
    id: 'Luke.15.7.1',
    language: 'greek',
    text: 'ἐν',
    transliteration: 'en',
    lemma: 'ἐν',
    lemmaTranslit: 'en',
    gloss: 'in',
    morphology: { pos: 'preposition' },
    strongs: 'G1722',
    position: 1,
  },
  {
    id: 'Luke.15.7.2',
    language: 'greek',
    text: 'τῷ',
    transliteration: 'tō',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'dative' },
    strongs: 'G3588',
    position: 2,
  },
  {
    id: 'Luke.15.7.3',
    language: 'greek',
    text: 'οὐρανῷ',
    transliteration: 'ouranō',
    lemma: 'οὐρανός',
    lemmaTranslit: 'ouranos',
    gloss: 'heaven',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'dative' },
    strongs: 'G3772',
    position: 3,
  },
  {
    id: 'Luke.15.7.4',
    language: 'greek',
    text: 'ἐπὶ',
    transliteration: 'epi',
    lemma: 'ἐπί',
    lemmaTranslit: 'epi',
    gloss: 'over',
    morphology: { pos: 'preposition' },
    strongs: 'G1909',
    position: 4,
  },
  {
    id: 'Luke.15.7.5',
    language: 'greek',
    text: 'ἑνὶ',
    transliteration: 'heni',
    lemma: 'εἷς',
    lemmaTranslit: 'heis',
    gloss: 'one',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'dative' },
    strongs: 'G1520',
    position: 5,
  },
  {
    id: 'Luke.15.7.6',
    language: 'greek',
    text: 'ἁμαρτωλῷ',
    transliteration: 'hamartōlō',
    lemma: 'ἁμαρτωλός',
    lemmaTranslit: 'hamartōlos',
    gloss: 'sinner',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'dative' },
    strongs: 'G268',
    position: 6,
  },
  {
    id: 'Luke.15.7.7',
    language: 'greek',
    text: 'μετανοοῦντι',
    transliteration: 'metanoounti',
    lemma: 'μετανοέω',
    lemmaTranslit: 'metanoeō',
    gloss: 'who repents',
    morphology: { pos: 'verb', gender: 'masculine', number: 'singular', tense: 'present', voice: 'active', mood: 'participle', case: 'dative' },
    strongs: 'G3340',
    position: 7,
  },
];

export const luke15_7_translation: VerseTranslation = {
  verseRef: 'Luke.15.7',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'There will be joy in heaven over one sinner repenting.',
      spans: [
        { id: 'Luke.15.7.en.lit.0', text: 'There will be joy in heaven', position: 0, sourceTokenIds: ['Luke.15.7.0', 'Luke.15.7.1', 'Luke.15.7.2', 'Luke.15.7.3'], confidence: 'high' },
        { id: 'Luke.15.7.en.lit.1', text: 'over one sinner repenting.', position: 1, sourceTokenIds: ['Luke.15.7.4', 'Luke.15.7.5', 'Luke.15.7.6', 'Luke.15.7.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'There will be more rejoicing in heaven over one sinner who repents.',
      spans: [
        { id: 'Luke.15.7.en.idi.0', text: 'There will be more rejoicing in heaven', position: 0, sourceTokenIds: ['Luke.15.7.0', 'Luke.15.7.1', 'Luke.15.7.2', 'Luke.15.7.3'], confidence: 'high' },
        { id: 'Luke.15.7.en.idi.1', text: 'over one sinner who repents.', position: 1, sourceTokenIds: ['Luke.15.7.4', 'Luke.15.7.5', 'Luke.15.7.6', 'Luke.15.7.7'], confidence: 'high' },
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

export const luke15_7_verse = {
  ref: 'Luke.15.7',
  sourceTokens: luke15_7_tokens,
  translation: luke15_7_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 15:13 – The younger son gathered all and took a journey
 * ──────────────────────────────────────────────────────────── */

export const luke15_13_tokens: SourceToken[] = [
  {
    id: 'Luke.15.13.0',
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
    id: 'Luke.15.13.1',
    language: 'greek',
    text: 'νεώτερος',
    transliteration: 'neōteros',
    lemma: 'νέος',
    lemmaTranslit: 'neos',
    gloss: 'younger',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3501',
    position: 1,
  },
  {
    id: 'Luke.15.13.2',
    language: 'greek',
    text: 'υἱὸς',
    transliteration: 'huios',
    lemma: 'υἱός',
    lemmaTranslit: 'huios',
    gloss: 'son',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G5207',
    position: 2,
  },
  {
    id: 'Luke.15.13.3',
    language: 'greek',
    text: 'ἀπεδήμησεν',
    transliteration: 'apedēmēsen',
    lemma: 'ἀποδημέω',
    lemmaTranslit: 'apodēmeō',
    gloss: 'took a journey',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G589',
    position: 3,
  },
  {
    id: 'Luke.15.13.4',
    language: 'greek',
    text: 'εἰς',
    transliteration: 'eis',
    lemma: 'εἰς',
    lemmaTranslit: 'eis',
    gloss: 'into',
    morphology: { pos: 'preposition' },
    strongs: 'G1519',
    position: 4,
  },
  {
    id: 'Luke.15.13.5',
    language: 'greek',
    text: 'χώραν',
    transliteration: 'chōran',
    lemma: 'χώρα',
    lemmaTranslit: 'chōra',
    gloss: 'country',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G5561',
    position: 5,
  },
  {
    id: 'Luke.15.13.6',
    language: 'greek',
    text: 'μακράν',
    transliteration: 'makran',
    lemma: 'μακράν',
    lemmaTranslit: 'makran',
    gloss: 'far',
    morphology: { pos: 'adverb' },
    strongs: 'G3112',
    position: 6,
  },
];

export const luke15_13_translation: VerseTranslation = {
  verseRef: 'Luke.15.13',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'The younger son traveled into a far country.',
      spans: [
        { id: 'Luke.15.13.en.lit.0', text: 'The younger son', position: 0, sourceTokenIds: ['Luke.15.13.0', 'Luke.15.13.1', 'Luke.15.13.2'], confidence: 'high' },
        { id: 'Luke.15.13.en.lit.1', text: 'traveled into a far country.', position: 1, sourceTokenIds: ['Luke.15.13.3', 'Luke.15.13.4', 'Luke.15.13.5', 'Luke.15.13.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'The younger son set off for a distant country.',
      spans: [
        { id: 'Luke.15.13.en.idi.0', text: 'The younger son', position: 0, sourceTokenIds: ['Luke.15.13.0', 'Luke.15.13.1', 'Luke.15.13.2'], confidence: 'high' },
        { id: 'Luke.15.13.en.idi.1', text: 'set off for a distant country.', position: 1, sourceTokenIds: ['Luke.15.13.3', 'Luke.15.13.4', 'Luke.15.13.5', 'Luke.15.13.6'], confidence: 'high' },
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

export const luke15_13_verse = {
  ref: 'Luke.15.13',
  sourceTokens: luke15_13_tokens,
  translation: luke15_13_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 15:20 – His father saw him and was filled with compassion
 * ──────────────────────────────────────────────────────────── */

export const luke15_20_tokens: SourceToken[] = [
  {
    id: 'Luke.15.20.0',
    language: 'greek',
    text: 'εἶδεν',
    transliteration: 'eiden',
    lemma: 'ὁράω',
    lemmaTranslit: 'horaō',
    gloss: 'saw',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G3708',
    position: 0,
  },
  {
    id: 'Luke.15.20.1',
    language: 'greek',
    text: 'αὐτὸν',
    transliteration: 'auton',
    lemma: 'αὐτός',
    lemmaTranslit: 'autos',
    gloss: 'him',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G846',
    position: 1,
  },
  {
    id: 'Luke.15.20.2',
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
    id: 'Luke.15.20.3',
    language: 'greek',
    text: 'πατὴρ',
    transliteration: 'patēr',
    lemma: 'πατήρ',
    lemmaTranslit: 'patēr',
    gloss: 'father',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3962',
    position: 3,
  },
  {
    id: 'Luke.15.20.4',
    language: 'greek',
    text: 'ἐσπλαγχνίσθη',
    transliteration: 'esplanchnisthē',
    lemma: 'σπλαγχνίζομαι',
    lemmaTranslit: 'splanchnizomai',
    gloss: 'was filled with compassion',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'passive', mood: 'indicative' },
    strongs: 'G4697',
    position: 4,
  },
  {
    id: 'Luke.15.20.5',
    language: 'greek',
    text: 'ἔδραμεν',
    transliteration: 'edramen',
    lemma: 'τρέχω',
    lemmaTranslit: 'trechō',
    gloss: 'he ran',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G5143',
    position: 5,
  },
  {
    id: 'Luke.15.20.6',
    language: 'greek',
    text: 'κατεφίλησεν',
    transliteration: 'katephilēsen',
    lemma: 'καταφιλέω',
    lemmaTranslit: 'kataphileō',
    gloss: 'kissed',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G2705',
    position: 6,
  },
];

export const luke15_20_translation: VerseTranslation = {
  verseRef: 'Luke.15.20',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'His father saw him and was moved with compassion, and ran and kissed him.',
      spans: [
        { id: 'Luke.15.20.en.lit.0', text: 'His father saw him', position: 0, sourceTokenIds: ['Luke.15.20.0', 'Luke.15.20.1', 'Luke.15.20.2', 'Luke.15.20.3'], confidence: 'high' },
        { id: 'Luke.15.20.en.lit.1', text: 'and was moved with compassion, and ran and kissed him.', position: 1, sourceTokenIds: ['Luke.15.20.4', 'Luke.15.20.5', 'Luke.15.20.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'His father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him.',
      spans: [
        { id: 'Luke.15.20.en.idi.0', text: 'His father saw him and was filled with compassion for him;', position: 0, sourceTokenIds: ['Luke.15.20.0', 'Luke.15.20.1', 'Luke.15.20.2', 'Luke.15.20.3', 'Luke.15.20.4'], confidence: 'high' },
        { id: 'Luke.15.20.en.idi.1', text: 'he ran to his son, threw his arms around him and kissed him.', position: 1, sourceTokenIds: ['Luke.15.20.5', 'Luke.15.20.6'], confidence: 'high' },
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

export const luke15_20_verse = {
  ref: 'Luke.15.20',
  sourceTokens: luke15_20_tokens,
  translation: luke15_20_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 15:24 – This son of mine was dead and is alive again
 * ──────────────────────────────────────────────────────────── */

export const luke15_24_tokens: SourceToken[] = [
  {
    id: 'Luke.15.24.0',
    language: 'greek',
    text: 'οὗτος',
    transliteration: 'houtos',
    lemma: 'οὗτος',
    lemmaTranslit: 'houtos',
    gloss: 'this',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3778',
    position: 0,
  },
  {
    id: 'Luke.15.24.1',
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
    id: 'Luke.15.24.2',
    language: 'greek',
    text: 'υἱός',
    transliteration: 'huios',
    lemma: 'υἱός',
    lemmaTranslit: 'huios',
    gloss: 'son',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G5207',
    position: 2,
  },
  {
    id: 'Luke.15.24.3',
    language: 'greek',
    text: 'μου',
    transliteration: 'mou',
    lemma: 'ἐγώ',
    lemmaTranslit: 'egō',
    gloss: 'my',
    morphology: { pos: 'pronoun', person: '1', number: 'singular', case: 'genitive' },
    strongs: 'G1473',
    position: 3,
  },
  {
    id: 'Luke.15.24.4',
    language: 'greek',
    text: 'νεκρὸς',
    transliteration: 'nekros',
    lemma: 'νεκρός',
    lemmaTranslit: 'nekros',
    gloss: 'dead',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3498',
    position: 4,
  },
  {
    id: 'Luke.15.24.5',
    language: 'greek',
    text: 'ἦν',
    transliteration: 'ēn',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'was',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'imperfect', voice: 'active', mood: 'indicative' },
    strongs: 'G1510',
    position: 5,
  },
  {
    id: 'Luke.15.24.6',
    language: 'greek',
    text: 'ἀνέζησεν',
    transliteration: 'anezēsen',
    lemma: 'ἀναζάω',
    lemmaTranslit: 'anazaō',
    gloss: 'is alive again',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G326',
    position: 6,
  },
];

export const luke15_24_translation: VerseTranslation = {
  verseRef: 'Luke.15.24',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'This son of mine was dead and is alive again.',
      spans: [
        { id: 'Luke.15.24.en.lit.0', text: 'This son of mine', position: 0, sourceTokenIds: ['Luke.15.24.0', 'Luke.15.24.1', 'Luke.15.24.2', 'Luke.15.24.3'], confidence: 'high' },
        { id: 'Luke.15.24.en.lit.1', text: 'was dead and is alive again.', position: 1, sourceTokenIds: ['Luke.15.24.4', 'Luke.15.24.5', 'Luke.15.24.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'For this son of mine was dead and is alive again; he was lost and is found.',
      spans: [
        { id: 'Luke.15.24.en.idi.0', text: 'For this son of mine', position: 0, sourceTokenIds: ['Luke.15.24.0', 'Luke.15.24.1', 'Luke.15.24.2', 'Luke.15.24.3'], confidence: 'high' },
        { id: 'Luke.15.24.en.idi.1', text: 'was dead and is alive again; he was lost and is found.', position: 1, sourceTokenIds: ['Luke.15.24.4', 'Luke.15.24.5', 'Luke.15.24.6'], confidence: 'high' },
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

export const luke15_24_verse = {
  ref: 'Luke.15.24',
  sourceTokens: luke15_24_tokens,
  translation: luke15_24_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 15:32 – We had to celebrate, because this brother of yours was dead
 * ──────────────────────────────────────────────────────────── */

export const luke15_32_tokens: SourceToken[] = [
  {
    id: 'Luke.15.32.0',
    language: 'greek',
    text: 'εὐφρανθῆναι',
    transliteration: 'euphranthēnai',
    lemma: 'εὐφραίνω',
    lemmaTranslit: 'euphrainō',
    gloss: 'to celebrate',
    morphology: { pos: 'verb', tense: 'aorist', voice: 'passive', mood: 'infinitive' },
    strongs: 'G2165',
    position: 0,
  },
  {
    id: 'Luke.15.32.1',
    language: 'greek',
    text: 'ἔδει',
    transliteration: 'edei',
    lemma: 'δεῖ',
    lemmaTranslit: 'dei',
    gloss: 'it was necessary',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'imperfect', voice: 'active', mood: 'indicative' },
    strongs: 'G1163',
    position: 1,
  },
  {
    id: 'Luke.15.32.2',
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
    id: 'Luke.15.32.3',
    language: 'greek',
    text: 'ἀδελφός',
    transliteration: 'adelphos',
    lemma: 'ἀδελφός',
    lemmaTranslit: 'adelphos',
    gloss: 'brother',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G80',
    position: 3,
  },
  {
    id: 'Luke.15.32.4',
    language: 'greek',
    text: 'σου',
    transliteration: 'sou',
    lemma: 'σύ',
    lemmaTranslit: 'sy',
    gloss: 'your',
    morphology: { pos: 'pronoun', person: '2', number: 'singular', case: 'genitive' },
    strongs: 'G4771',
    position: 4,
  },
  {
    id: 'Luke.15.32.5',
    language: 'greek',
    text: 'νεκρὸς',
    transliteration: 'nekros',
    lemma: 'νεκρός',
    lemmaTranslit: 'nekros',
    gloss: 'dead',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3498',
    position: 5,
  },
  {
    id: 'Luke.15.32.6',
    language: 'greek',
    text: 'ἔζησεν',
    transliteration: 'ezēsen',
    lemma: 'ζάω',
    lemmaTranslit: 'zaō',
    gloss: 'is alive',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G2198',
    position: 6,
  },
];

export const luke15_32_translation: VerseTranslation = {
  verseRef: 'Luke.15.32',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'It was necessary to celebrate, for this brother of yours was dead and is alive.',
      spans: [
        { id: 'Luke.15.32.en.lit.0', text: 'It was necessary to celebrate,', position: 0, sourceTokenIds: ['Luke.15.32.0', 'Luke.15.32.1'], confidence: 'high' },
        { id: 'Luke.15.32.en.lit.1', text: 'for this brother of yours was dead and is alive.', position: 1, sourceTokenIds: ['Luke.15.32.2', 'Luke.15.32.3', 'Luke.15.32.4', 'Luke.15.32.5', 'Luke.15.32.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'But we had to celebrate and be glad, because this brother of yours was dead and is alive again.',
      spans: [
        { id: 'Luke.15.32.en.idi.0', text: 'But we had to celebrate and be glad,', position: 0, sourceTokenIds: ['Luke.15.32.0', 'Luke.15.32.1'], confidence: 'high' },
        { id: 'Luke.15.32.en.idi.1', text: 'because this brother of yours was dead and is alive again.', position: 1, sourceTokenIds: ['Luke.15.32.2', 'Luke.15.32.3', 'Luke.15.32.4', 'Luke.15.32.5', 'Luke.15.32.6'], confidence: 'high' },
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

export const luke15_32_verse = {
  ref: 'Luke.15.32',
  sourceTokens: luke15_32_tokens,
  translation: luke15_32_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Luke 15:1-32 (Lost Sheep, Lost Coin & Prodigal Son)
 * ──────────────────────────────────────────────────────────── */

export const luke15_1_32_verses = [
  luke15_2_verse,
  luke15_4_verse,
  luke15_6_verse,
  luke15_7_verse,
  luke15_13_verse,
  luke15_20_verse,
  luke15_24_verse,
  luke15_32_verse,
];

export default luke15_1_32_verses;
