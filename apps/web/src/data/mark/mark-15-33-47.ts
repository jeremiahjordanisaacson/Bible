// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 15:33 – Darkness came over the whole land
 * ──────────────────────────────────────────────────────────── */

export const mark15_33_tokens: SourceToken[] = [
  {
    id: 'Mark.15.33.0',
    language: 'greek',
    text: 'σκότος',
    transliteration: 'skotos',
    lemma: 'σκότος',
    lemmaTranslit: 'skotos',
    gloss: 'darkness',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'nominative' },
    strongs: 'G4655',
    position: 0,
  },
  {
    id: 'Mark.15.33.1',
    language: 'greek',
    text: 'ἐγένετο',
    transliteration: 'egeneto',
    lemma: 'γίνομαι',
    lemmaTranslit: 'ginomai',
    gloss: 'came',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'middle', mood: 'indicative' },
    strongs: 'G1096',
    position: 1,
  },
  {
    id: 'Mark.15.33.2',
    language: 'greek',
    text: "ἐφ'",
    transliteration: 'eph',
    lemma: 'ἐπί',
    lemmaTranslit: 'epi',
    gloss: 'over',
    morphology: { pos: 'preposition' },
    strongs: 'G1909',
    position: 2,
  },
  {
    id: 'Mark.15.33.3',
    language: 'greek',
    text: 'ὅλην',
    transliteration: 'holēn',
    lemma: 'ὅλος',
    lemmaTranslit: 'holos',
    gloss: 'whole',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G3650',
    position: 3,
  },
  {
    id: 'Mark.15.33.4',
    language: 'greek',
    text: 'τὴν',
    transliteration: 'tēn',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G3588',
    position: 4,
  },
  {
    id: 'Mark.15.33.5',
    language: 'greek',
    text: 'γῆν',
    transliteration: 'gēn',
    lemma: 'γῆ',
    lemmaTranslit: 'gē',
    gloss: 'land',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G1093',
    position: 5,
  },
];

export const mark15_33_translation: VerseTranslation = {
  verseRef: 'Mark.15.33',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "Darkness came over the whole land.",
      spans: [
        { id: 'Mark.15.33.en.lit.0', text: 'Darkness came', position: 0, sourceTokenIds: ['Mark.15.33.0', 'Mark.15.33.1'], confidence: 'high' },
        { id: 'Mark.15.33.en.lit.1', text: 'over', position: 1, sourceTokenIds: ['Mark.15.33.2'], confidence: 'high' },
        { id: 'Mark.15.33.en.lit.2', text: 'the whole land.', position: 2, sourceTokenIds: ['Mark.15.33.3', 'Mark.15.33.4', 'Mark.15.33.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Darkness came over the whole land.',
      spans: [
        { id: 'Mark.15.33.en.idi.0', text: 'Darkness came over', position: 0, sourceTokenIds: ['Mark.15.33.0', 'Mark.15.33.1', 'Mark.15.33.2'], confidence: 'high' },
        { id: 'Mark.15.33.en.idi.1', text: 'the whole land.', position: 1, sourceTokenIds: ['Mark.15.33.3', 'Mark.15.33.4', 'Mark.15.33.5'], confidence: 'high' },
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

export const mark15_33_verse = {
  ref: 'Mark.15.33',
  sourceTokens: mark15_33_tokens,
  translation: mark15_33_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 15:34 – My God, my God, why have you forsaken me?
 * ──────────────────────────────────────────────────────────── */

export const mark15_34_tokens: SourceToken[] = [
  {
    id: 'Mark.15.34.0',
    language: 'greek',
    text: 'θεέ',
    transliteration: 'thee',
    lemma: 'θεός',
    lemmaTranslit: 'theos',
    gloss: 'God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'vocative' },
    strongs: 'G2316',
    position: 0,
  },
  {
    id: 'Mark.15.34.1',
    language: 'greek',
    text: 'μου',
    transliteration: 'mou',
    lemma: 'ἐγώ',
    lemmaTranslit: 'egō',
    gloss: 'my',
    morphology: { pos: 'pronoun', person: '1', number: 'singular', case: 'genitive' },
    strongs: 'G1473',
    position: 1,
  },
  {
    id: 'Mark.15.34.2',
    language: 'greek',
    text: 'θεέ',
    transliteration: 'thee',
    lemma: 'θεός',
    lemmaTranslit: 'theos',
    gloss: 'God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'vocative' },
    strongs: 'G2316',
    position: 2,
  },
  {
    id: 'Mark.15.34.3',
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
    id: 'Mark.15.34.4',
    language: 'greek',
    text: 'εἰς',
    transliteration: 'eis',
    lemma: 'εἰς',
    lemmaTranslit: 'eis',
    gloss: 'why',
    morphology: { pos: 'preposition' },
    strongs: 'G1519',
    position: 4,
  },
  {
    id: 'Mark.15.34.5',
    language: 'greek',
    text: 'τί',
    transliteration: 'ti',
    lemma: 'τίς',
    lemmaTranslit: 'tis',
    gloss: 'what',
    morphology: { pos: 'pronoun', gender: 'neuter', number: 'singular', case: 'accusative' },
    strongs: 'G5101',
    position: 5,
  },
  {
    id: 'Mark.15.34.6',
    language: 'greek',
    text: 'ἐγκατέλιπές',
    transliteration: 'enkatelipes',
    lemma: 'ἐγκαταλείπω',
    lemmaTranslit: 'enkataleipō',
    gloss: 'have you forsaken',
    morphology: { pos: 'verb', person: '2', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G1459',
    position: 6,
  },
  {
    id: 'Mark.15.34.7',
    language: 'greek',
    text: 'με',
    transliteration: 'me',
    lemma: 'ἐγώ',
    lemmaTranslit: 'egō',
    gloss: 'me',
    morphology: { pos: 'pronoun', person: '1', number: 'singular', case: 'accusative' },
    strongs: 'G1473',
    position: 7,
  },
];

export const mark15_34_translation: VerseTranslation = {
  verseRef: 'Mark.15.34',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'God of me, God of me, unto what have you forsaken me?',
      spans: [
        { id: 'Mark.15.34.en.lit.0', text: 'God of me,', position: 0, sourceTokenIds: ['Mark.15.34.0', 'Mark.15.34.1'], confidence: 'high' },
        { id: 'Mark.15.34.en.lit.1', text: 'God of me,', position: 1, sourceTokenIds: ['Mark.15.34.2', 'Mark.15.34.3'], confidence: 'high' },
        { id: 'Mark.15.34.en.lit.2', text: 'unto what', position: 2, sourceTokenIds: ['Mark.15.34.4', 'Mark.15.34.5'], confidence: 'high' },
        { id: 'Mark.15.34.en.lit.3', text: 'have you forsaken me?', position: 3, sourceTokenIds: ['Mark.15.34.6', 'Mark.15.34.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'My God, my God, why have you forsaken me?',
      spans: [
        { id: 'Mark.15.34.en.idi.0', text: 'My God, my God,', position: 0, sourceTokenIds: ['Mark.15.34.0', 'Mark.15.34.1', 'Mark.15.34.2', 'Mark.15.34.3'], confidence: 'high' },
        { id: 'Mark.15.34.en.idi.1', text: 'why have you forsaken me?', position: 1, sourceTokenIds: ['Mark.15.34.4', 'Mark.15.34.5', 'Mark.15.34.6', 'Mark.15.34.7'], confidence: 'high' },
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

export const mark15_34_verse = {
  ref: 'Mark.15.34',
  sourceTokens: mark15_34_tokens,
  translation: mark15_34_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 15:37 – Jesus cried out with a loud voice and breathed his last
 * ──────────────────────────────────────────────────────────── */

export const mark15_37_tokens: SourceToken[] = [
  {
    id: 'Mark.15.37.0',
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
    id: 'Mark.15.37.1',
    language: 'greek',
    text: 'Ἰησοῦς',
    transliteration: 'Iēsous',
    lemma: 'Ἰησοῦς',
    lemmaTranslit: 'Iēsous',
    gloss: 'Jesus',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G2424',
    position: 1,
  },
  {
    id: 'Mark.15.37.2',
    language: 'greek',
    text: 'ἀφεὶς',
    transliteration: 'apheis',
    lemma: 'ἀφίημι',
    lemmaTranslit: 'aphiēmi',
    gloss: 'having let out',
    morphology: { pos: 'verb', gender: 'masculine', number: 'singular', tense: 'aorist', voice: 'active', mood: 'participle', case: 'nominative' },
    strongs: 'G863',
    position: 2,
  },
  {
    id: 'Mark.15.37.3',
    language: 'greek',
    text: 'φωνὴν',
    transliteration: 'phōnēn',
    lemma: 'φωνή',
    lemmaTranslit: 'phōnē',
    gloss: 'voice',
    glossExtended: 'voice, cry, sound',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G5456',
    position: 3,
  },
  {
    id: 'Mark.15.37.4',
    language: 'greek',
    text: 'μεγάλην',
    transliteration: 'megalēn',
    lemma: 'μέγας',
    lemmaTranslit: 'megas',
    gloss: 'loud',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G3173',
    position: 4,
  },
  {
    id: 'Mark.15.37.5',
    language: 'greek',
    text: 'ἐξέπνευσεν',
    transliteration: 'exepneusen',
    lemma: 'ἐκπνέω',
    lemmaTranslit: 'ekpneō',
    gloss: 'breathed his last',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G1606',
    position: 5,
  },
];

export const mark15_37_translation: VerseTranslation = {
  verseRef: 'Mark.15.37',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'The Jesus, having let out a great voice, breathed out.',
      spans: [
        { id: 'Mark.15.37.en.lit.0', text: 'The Jesus,', position: 0, sourceTokenIds: ['Mark.15.37.0', 'Mark.15.37.1'], confidence: 'high' },
        { id: 'Mark.15.37.en.lit.1', text: 'having let out a great voice,', position: 1, sourceTokenIds: ['Mark.15.37.2', 'Mark.15.37.3', 'Mark.15.37.4'], confidence: 'high' },
        { id: 'Mark.15.37.en.lit.2', text: 'breathed out.', position: 2, sourceTokenIds: ['Mark.15.37.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Jesus cried out with a loud voice and breathed his last.',
      spans: [
        { id: 'Mark.15.37.en.idi.0', text: 'Jesus', position: 0, sourceTokenIds: ['Mark.15.37.0', 'Mark.15.37.1'], confidence: 'high' },
        { id: 'Mark.15.37.en.idi.1', text: 'cried out with a loud voice', position: 1, sourceTokenIds: ['Mark.15.37.2', 'Mark.15.37.3', 'Mark.15.37.4'], confidence: 'high' },
        { id: 'Mark.15.37.en.idi.2', text: 'and breathed his last.', position: 2, sourceTokenIds: ['Mark.15.37.5'], confidence: 'high' },
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

export const mark15_37_verse = {
  ref: 'Mark.15.37',
  sourceTokens: mark15_37_tokens,
  translation: mark15_37_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 15:38 – The curtain of the temple was torn in two
 * ──────────────────────────────────────────────────────────── */

export const mark15_38_tokens: SourceToken[] = [
  {
    id: 'Mark.15.38.0',
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
    id: 'Mark.15.38.1',
    language: 'greek',
    text: 'καταπέτασμα',
    transliteration: 'katapetasma',
    lemma: 'καταπέτασμα',
    lemmaTranslit: 'katapetasma',
    gloss: 'curtain',
    glossExtended: 'curtain, veil of the temple',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'nominative' },
    strongs: 'G2665',
    position: 1,
  },
  {
    id: 'Mark.15.38.2',
    language: 'greek',
    text: 'τοῦ',
    transliteration: 'tou',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'of the',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G3588',
    position: 2,
  },
  {
    id: 'Mark.15.38.3',
    language: 'greek',
    text: 'ναοῦ',
    transliteration: 'naou',
    lemma: 'ναός',
    lemmaTranslit: 'naos',
    gloss: 'temple',
    glossExtended: 'temple, inner sanctuary',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G3485',
    position: 3,
  },
  {
    id: 'Mark.15.38.4',
    language: 'greek',
    text: 'ἐσχίσθη',
    transliteration: 'eschisthē',
    lemma: 'σχίζω',
    lemmaTranslit: 'schizō',
    gloss: 'was torn',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'passive', mood: 'indicative' },
    strongs: 'G4977',
    position: 4,
  },
  {
    id: 'Mark.15.38.5',
    language: 'greek',
    text: 'εἰς',
    transliteration: 'eis',
    lemma: 'εἰς',
    lemmaTranslit: 'eis',
    gloss: 'into',
    morphology: { pos: 'preposition' },
    strongs: 'G1519',
    position: 5,
  },
  {
    id: 'Mark.15.38.6',
    language: 'greek',
    text: 'δύο',
    transliteration: 'dyo',
    lemma: 'δύο',
    lemmaTranslit: 'dyo',
    gloss: 'two',
    morphology: { pos: 'adjective' },
    strongs: 'G1417',
    position: 6,
  },
];

export const mark15_38_translation: VerseTranslation = {
  verseRef: 'Mark.15.38',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'The curtain of the temple was torn into two.',
      spans: [
        { id: 'Mark.15.38.en.lit.0', text: 'The curtain', position: 0, sourceTokenIds: ['Mark.15.38.0', 'Mark.15.38.1'], confidence: 'high' },
        { id: 'Mark.15.38.en.lit.1', text: 'of the temple', position: 1, sourceTokenIds: ['Mark.15.38.2', 'Mark.15.38.3'], confidence: 'high' },
        { id: 'Mark.15.38.en.lit.2', text: 'was torn into two.', position: 2, sourceTokenIds: ['Mark.15.38.4', 'Mark.15.38.5', 'Mark.15.38.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'The curtain of the temple was torn in two.',
      spans: [
        { id: 'Mark.15.38.en.idi.0', text: 'The curtain of the temple', position: 0, sourceTokenIds: ['Mark.15.38.0', 'Mark.15.38.1', 'Mark.15.38.2', 'Mark.15.38.3'], confidence: 'high' },
        { id: 'Mark.15.38.en.idi.1', text: 'was torn in two.', position: 1, sourceTokenIds: ['Mark.15.38.4', 'Mark.15.38.5', 'Mark.15.38.6'], confidence: 'high' },
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

export const mark15_38_verse = {
  ref: 'Mark.15.38',
  sourceTokens: mark15_38_tokens,
  translation: mark15_38_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 15:39 – Truly this man was the Son of God
 * ──────────────────────────────────────────────────────────── */

export const mark15_39_tokens: SourceToken[] = [
  {
    id: 'Mark.15.39.0',
    language: 'greek',
    text: 'ἀληθῶς',
    transliteration: 'alēthōs',
    lemma: 'ἀληθῶς',
    lemmaTranslit: 'alēthōs',
    gloss: 'truly',
    morphology: { pos: 'adverb' },
    strongs: 'G230',
    position: 0,
  },
  {
    id: 'Mark.15.39.1',
    language: 'greek',
    text: 'οὗτος',
    transliteration: 'houtos',
    lemma: 'οὗτος',
    lemmaTranslit: 'houtos',
    gloss: 'this',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3778',
    position: 1,
  },
  {
    id: 'Mark.15.39.2',
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
    id: 'Mark.15.39.3',
    language: 'greek',
    text: 'ἄνθρωπος',
    transliteration: 'anthrōpos',
    lemma: 'ἄνθρωπος',
    lemmaTranslit: 'anthrōpos',
    gloss: 'man',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G444',
    position: 3,
  },
  {
    id: 'Mark.15.39.4',
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
    id: 'Mark.15.39.5',
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

export const mark15_39_translation: VerseTranslation = {
  verseRef: 'Mark.15.39',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Truly this the man [was] Son of God.',
      spans: [
        { id: 'Mark.15.39.en.lit.0', text: 'Truly', position: 0, sourceTokenIds: ['Mark.15.39.0'], confidence: 'high' },
        { id: 'Mark.15.39.en.lit.1', text: 'this the man', position: 1, sourceTokenIds: ['Mark.15.39.1', 'Mark.15.39.2', 'Mark.15.39.3'], confidence: 'high' },
        { id: 'Mark.15.39.en.lit.2', text: '[was] Son of God.', position: 2, sourceTokenIds: ['Mark.15.39.4', 'Mark.15.39.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Truly this man was the Son of God!',
      spans: [
        { id: 'Mark.15.39.en.idi.0', text: 'Truly this man', position: 0, sourceTokenIds: ['Mark.15.39.0', 'Mark.15.39.1', 'Mark.15.39.2', 'Mark.15.39.3'], confidence: 'high' },
        { id: 'Mark.15.39.en.idi.1', text: 'was the Son of God!', position: 1, sourceTokenIds: ['Mark.15.39.4', 'Mark.15.39.5'], confidence: 'high' },
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

export const mark15_39_verse = {
  ref: 'Mark.15.39',
  sourceTokens: mark15_39_tokens,
  translation: mark15_39_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 15:46 – He wrapped him in the linen cloth and laid him in a tomb
 * ──────────────────────────────────────────────────────────── */

export const mark15_46_tokens: SourceToken[] = [
  {
    id: 'Mark.15.46.0',
    language: 'greek',
    text: 'ἐνείλησεν',
    transliteration: 'eneilēsen',
    lemma: 'ἐνειλέω',
    lemmaTranslit: 'eneileō',
    gloss: 'he wrapped',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G1750',
    position: 0,
  },
  {
    id: 'Mark.15.46.1',
    language: 'greek',
    text: 'τῇ',
    transliteration: 'tē',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'in the',
    morphology: { pos: 'article', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G3588',
    position: 1,
  },
  {
    id: 'Mark.15.46.2',
    language: 'greek',
    text: 'σινδόνι',
    transliteration: 'sindoni',
    lemma: 'σινδών',
    lemmaTranslit: 'sindōn',
    gloss: 'linen cloth',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G4616',
    position: 2,
  },
  {
    id: 'Mark.15.46.3',
    language: 'greek',
    text: 'ἔθηκεν',
    transliteration: 'ethēken',
    lemma: 'τίθημι',
    lemmaTranslit: 'tithēmi',
    gloss: 'he laid',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G5087',
    position: 3,
  },
  {
    id: 'Mark.15.46.4',
    language: 'greek',
    text: 'αὐτὸν',
    transliteration: 'auton',
    lemma: 'αὐτός',
    lemmaTranslit: 'autos',
    gloss: 'him',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G846',
    position: 4,
  },
  {
    id: 'Mark.15.46.5',
    language: 'greek',
    text: 'μνημείῳ',
    transliteration: 'mnēmeiō',
    lemma: 'μνημεῖον',
    lemmaTranslit: 'mnēmeion',
    gloss: 'tomb',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'dative' },
    strongs: 'G3419',
    position: 5,
  },
];

export const mark15_46_translation: VerseTranslation = {
  verseRef: 'Mark.15.46',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'He wrapped [him] in the linen cloth and placed him in a tomb.',
      spans: [
        { id: 'Mark.15.46.en.lit.0', text: 'He wrapped [him] in the linen cloth', position: 0, sourceTokenIds: ['Mark.15.46.0', 'Mark.15.46.1', 'Mark.15.46.2'], confidence: 'high' },
        { id: 'Mark.15.46.en.lit.1', text: 'and placed him', position: 1, sourceTokenIds: ['Mark.15.46.3', 'Mark.15.46.4'], confidence: 'high' },
        { id: 'Mark.15.46.en.lit.2', text: 'in a tomb.', position: 2, sourceTokenIds: ['Mark.15.46.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'He wrapped him in the linen cloth and laid him in a tomb.',
      spans: [
        { id: 'Mark.15.46.en.idi.0', text: 'He wrapped him in the linen cloth', position: 0, sourceTokenIds: ['Mark.15.46.0', 'Mark.15.46.1', 'Mark.15.46.2'], confidence: 'high' },
        { id: 'Mark.15.46.en.idi.1', text: 'and laid him in a tomb.', position: 1, sourceTokenIds: ['Mark.15.46.3', 'Mark.15.46.4', 'Mark.15.46.5'], confidence: 'high' },
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

export const mark15_46_verse = {
  ref: 'Mark.15.46',
  sourceTokens: mark15_46_tokens,
  translation: mark15_46_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Mark 15:33-47 (Crucifixion)
 * ──────────────────────────────────────────────────────────── */

export const mark15_33_47_verses = [
  mark15_33_verse,
  mark15_34_verse,
  mark15_37_verse,
  mark15_38_verse,
  mark15_39_verse,
  mark15_46_verse,
];

export default mark15_33_47_verses;
