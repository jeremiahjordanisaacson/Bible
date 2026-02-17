// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 10:33 – We are going up to Jerusalem, and the Son of Man will be delivered
 * ──────────────────────────────────────────────────────────── */

export const mark10_33_tokens: SourceToken[] = [
  {
    id: 'Mark.10.33.0',
    language: 'greek',
    text: 'ἀναβαίνομεν',
    transliteration: 'anabainomen',
    lemma: 'ἀναβαίνω',
    lemmaTranslit: 'anabainō',
    gloss: 'we are going up',
    morphology: { pos: 'verb', person: '1', number: 'plural', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G305',
    position: 0,
  },
  {
    id: 'Mark.10.33.1',
    language: 'greek',
    text: 'εἰς',
    transliteration: 'eis',
    lemma: 'εἰς',
    lemmaTranslit: 'eis',
    gloss: 'to',
    morphology: { pos: 'preposition' },
    strongs: 'G1519',
    position: 1,
  },
  {
    id: 'Mark.10.33.2',
    language: 'greek',
    text: 'Ἱεροσόλυμα',
    transliteration: 'Hierosolyma',
    lemma: 'Ἱεροσόλυμα',
    lemmaTranslit: 'Hierosolyma',
    gloss: 'Jerusalem',
    morphology: { pos: 'proper-noun', gender: 'neuter', number: 'plural', case: 'accusative' },
    strongs: 'G2414',
    position: 2,
  },
  {
    id: 'Mark.10.33.3',
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
    id: 'Mark.10.33.4',
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
    id: 'Mark.10.33.5',
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
    id: 'Mark.10.33.6',
    language: 'greek',
    text: 'ἀνθρώπου',
    transliteration: 'anthrōpou',
    lemma: 'ἄνθρωπος',
    lemmaTranslit: 'anthrōpos',
    gloss: 'Man',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G444',
    position: 6,
  },
  {
    id: 'Mark.10.33.7',
    language: 'greek',
    text: 'παραδοθήσεται',
    transliteration: 'paradothēsetai',
    lemma: 'παραδίδωμι',
    lemmaTranslit: 'paradidōmi',
    gloss: 'will be delivered',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'future', voice: 'passive', mood: 'indicative' },
    strongs: 'G3860',
    position: 7,
  },
];

export const mark10_33_translation: VerseTranslation = {
  verseRef: 'Mark.10.33',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Behold, we are going up to Jerusalem, and the Son of Man will be delivered to the chief priests and the scribes.',
      spans: [
        { id: 'Mark.10.33.en.lit.0', text: 'we are going up', position: 0, sourceTokenIds: ['Mark.10.33.0'], confidence: 'high' },
        { id: 'Mark.10.33.en.lit.1', text: 'to Jerusalem,', position: 1, sourceTokenIds: ['Mark.10.33.1', 'Mark.10.33.2'], confidence: 'high' },
        { id: 'Mark.10.33.en.lit.2', text: 'and the Son of Man', position: 2, sourceTokenIds: ['Mark.10.33.3', 'Mark.10.33.4', 'Mark.10.33.5', 'Mark.10.33.6'], confidence: 'high' },
        { id: 'Mark.10.33.en.lit.3', text: 'will be delivered to the chief priests and the scribes.', position: 3, sourceTokenIds: ['Mark.10.33.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'We are going up to Jerusalem, and the Son of Man will be handed over to the chief priests and the teachers of the law.',
      spans: [
        { id: 'Mark.10.33.en.idi.0', text: 'We are going up to Jerusalem,', position: 0, sourceTokenIds: ['Mark.10.33.0', 'Mark.10.33.1', 'Mark.10.33.2'], confidence: 'high' },
        { id: 'Mark.10.33.en.idi.1', text: 'and the Son of Man will be handed over to the chief priests and the teachers of the law.', position: 1, sourceTokenIds: ['Mark.10.33.3', 'Mark.10.33.4', 'Mark.10.33.5', 'Mark.10.33.6', 'Mark.10.33.7'], confidence: 'high' },
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

export const mark10_33_verse = {
  ref: 'Mark.10.33',
  sourceTokens: mark10_33_tokens,
  translation: mark10_33_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 10:38 – Can you drink the cup that I drink?
 * ──────────────────────────────────────────────────────────── */

export const mark10_38_tokens: SourceToken[] = [
  {
    id: 'Mark.10.38.0',
    language: 'greek',
    text: 'δύνασθε',
    transliteration: 'dynasthe',
    lemma: 'δύναμαι',
    lemmaTranslit: 'dynamai',
    gloss: 'are you able',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'present', voice: 'middle', mood: 'indicative' },
    strongs: 'G1410',
    position: 0,
  },
  {
    id: 'Mark.10.38.1',
    language: 'greek',
    text: 'πιεῖν',
    transliteration: 'piein',
    lemma: 'πίνω',
    lemmaTranslit: 'pinō',
    gloss: 'to drink',
    morphology: { pos: 'verb', tense: 'aorist', voice: 'active', mood: 'infinitive' },
    strongs: 'G4095',
    position: 1,
  },
  {
    id: 'Mark.10.38.2',
    language: 'greek',
    text: 'τὸ',
    transliteration: 'to',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'neuter', number: 'singular', case: 'accusative' },
    strongs: 'G3588',
    position: 2,
  },
  {
    id: 'Mark.10.38.3',
    language: 'greek',
    text: 'ποτήριον',
    transliteration: 'potērion',
    lemma: 'ποτήριον',
    lemmaTranslit: 'potērion',
    gloss: 'cup',
    glossExtended: 'cup, a drinking vessel; figuratively, one\'s allotted portion',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'accusative' },
    strongs: 'G4221',
    position: 3,
  },
  {
    id: 'Mark.10.38.4',
    language: 'greek',
    text: 'ὃ',
    transliteration: 'ho',
    lemma: 'ὅς',
    lemmaTranslit: 'hos',
    gloss: 'which',
    morphology: { pos: 'pronoun', gender: 'neuter', number: 'singular', case: 'accusative' },
    strongs: 'G3739',
    position: 4,
  },
  {
    id: 'Mark.10.38.5',
    language: 'greek',
    text: 'ἐγὼ',
    transliteration: 'egō',
    lemma: 'ἐγώ',
    lemmaTranslit: 'egō',
    gloss: 'I',
    morphology: { pos: 'pronoun', person: '1', number: 'singular', case: 'nominative' },
    strongs: 'G1473',
    position: 5,
  },
  {
    id: 'Mark.10.38.6',
    language: 'greek',
    text: 'πίνω',
    transliteration: 'pinō',
    lemma: 'πίνω',
    lemmaTranslit: 'pinō',
    gloss: 'drink',
    morphology: { pos: 'verb', person: '1', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G4095',
    position: 6,
  },
];

export const mark10_38_translation: VerseTranslation = {
  verseRef: 'Mark.10.38',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Are you able to drink the cup which I drink?',
      spans: [
        { id: 'Mark.10.38.en.lit.0', text: 'Are you able', position: 0, sourceTokenIds: ['Mark.10.38.0'], confidence: 'high' },
        { id: 'Mark.10.38.en.lit.1', text: 'to drink', position: 1, sourceTokenIds: ['Mark.10.38.1'], confidence: 'high' },
        { id: 'Mark.10.38.en.lit.2', text: 'the cup', position: 2, sourceTokenIds: ['Mark.10.38.2', 'Mark.10.38.3'], confidence: 'high' },
        { id: 'Mark.10.38.en.lit.3', text: 'which I drink?', position: 3, sourceTokenIds: ['Mark.10.38.4', 'Mark.10.38.5', 'Mark.10.38.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Can you drink the cup that I drink?',
      spans: [
        { id: 'Mark.10.38.en.idi.0', text: 'Can you drink', position: 0, sourceTokenIds: ['Mark.10.38.0', 'Mark.10.38.1'], confidence: 'high' },
        { id: 'Mark.10.38.en.idi.1', text: 'the cup that I drink?', position: 1, sourceTokenIds: ['Mark.10.38.2', 'Mark.10.38.3', 'Mark.10.38.4', 'Mark.10.38.5', 'Mark.10.38.6'], confidence: 'high' },
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

export const mark10_38_verse = {
  ref: 'Mark.10.38',
  sourceTokens: mark10_38_tokens,
  translation: mark10_38_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 10:43 – Whoever wants to become great among you must be your servant
 * ──────────────────────────────────────────────────────────── */

export const mark10_43_tokens: SourceToken[] = [
  {
    id: 'Mark.10.43.0',
    language: 'greek',
    text: 'ὃς',
    transliteration: 'hos',
    lemma: 'ὅς',
    lemmaTranslit: 'hos',
    gloss: 'whoever',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3739',
    position: 0,
  },
  {
    id: 'Mark.10.43.1',
    language: 'greek',
    text: 'θέλῃ',
    transliteration: 'thelē',
    lemma: 'θέλω',
    lemmaTranslit: 'thelō',
    gloss: 'wants',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'subjunctive' },
    strongs: 'G2309',
    position: 1,
  },
  {
    id: 'Mark.10.43.2',
    language: 'greek',
    text: 'μέγας',
    transliteration: 'megas',
    lemma: 'μέγας',
    lemmaTranslit: 'megas',
    gloss: 'great',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3173',
    position: 2,
  },
  {
    id: 'Mark.10.43.3',
    language: 'greek',
    text: 'γενέσθαι',
    transliteration: 'genesthai',
    lemma: 'γίνομαι',
    lemmaTranslit: 'ginomai',
    gloss: 'to become',
    morphology: { pos: 'verb', tense: 'aorist', voice: 'middle', mood: 'infinitive' },
    strongs: 'G1096',
    position: 3,
  },
  {
    id: 'Mark.10.43.4',
    language: 'greek',
    text: 'ἔσται',
    transliteration: 'estai',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'will be',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'future', voice: 'middle', mood: 'indicative' },
    strongs: 'G1510',
    position: 4,
  },
  {
    id: 'Mark.10.43.5',
    language: 'greek',
    text: 'διάκονος',
    transliteration: 'diakonos',
    lemma: 'διάκονος',
    lemmaTranslit: 'diakonos',
    gloss: 'servant',
    glossExtended: 'servant, minister, deacon; one who serves',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G1249',
    position: 5,
  },
];

export const mark10_43_translation: VerseTranslation = {
  verseRef: 'Mark.10.43',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'But whoever wants to become great among you will be your servant.',
      spans: [
        { id: 'Mark.10.43.en.lit.0', text: 'whoever wants', position: 0, sourceTokenIds: ['Mark.10.43.0', 'Mark.10.43.1'], confidence: 'high' },
        { id: 'Mark.10.43.en.lit.1', text: 'great to become', position: 1, sourceTokenIds: ['Mark.10.43.2', 'Mark.10.43.3'], confidence: 'high' },
        { id: 'Mark.10.43.en.lit.2', text: 'will be your servant.', position: 2, sourceTokenIds: ['Mark.10.43.4', 'Mark.10.43.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Whoever wants to become great among you must be your servant.',
      spans: [
        { id: 'Mark.10.43.en.idi.0', text: 'Whoever wants to become great among you', position: 0, sourceTokenIds: ['Mark.10.43.0', 'Mark.10.43.1', 'Mark.10.43.2', 'Mark.10.43.3'], confidence: 'high' },
        { id: 'Mark.10.43.en.idi.1', text: 'must be your servant.', position: 1, sourceTokenIds: ['Mark.10.43.4', 'Mark.10.43.5'], confidence: 'high' },
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

export const mark10_43_verse = {
  ref: 'Mark.10.43',
  sourceTokens: mark10_43_tokens,
  translation: mark10_43_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 10:45 – The Son of Man came not to be served but to serve, and to give his life as a ransom for many
 * ──────────────────────────────────────────────────────────── */

export const mark10_45_tokens: SourceToken[] = [
  {
    id: 'Mark.10.45.0',
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
    id: 'Mark.10.45.1',
    language: 'greek',
    text: 'υἱὸς',
    transliteration: 'huios',
    lemma: 'υἱός',
    lemmaTranslit: 'huios',
    gloss: 'Son',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G5207',
    position: 1,
  },
  {
    id: 'Mark.10.45.2',
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
    id: 'Mark.10.45.3',
    language: 'greek',
    text: 'ἀνθρώπου',
    transliteration: 'anthrōpou',
    lemma: 'ἄνθρωπος',
    lemmaTranslit: 'anthrōpos',
    gloss: 'Man',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G444',
    position: 3,
  },
  {
    id: 'Mark.10.45.4',
    language: 'greek',
    text: 'διακονῆσαι',
    transliteration: 'diakonēsai',
    lemma: 'διακονέω',
    lemmaTranslit: 'diakoneō',
    gloss: 'to serve',
    morphology: { pos: 'verb', tense: 'aorist', voice: 'active', mood: 'infinitive' },
    strongs: 'G1247',
    position: 4,
  },
  {
    id: 'Mark.10.45.5',
    language: 'greek',
    text: 'λύτρον',
    transliteration: 'lytron',
    lemma: 'λύτρον',
    lemmaTranslit: 'lytron',
    gloss: 'ransom',
    glossExtended: 'ransom, price of release, redemption payment',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'accusative' },
    strongs: 'G3083',
    position: 5,
  },
  {
    id: 'Mark.10.45.6',
    language: 'greek',
    text: 'ἀντὶ',
    transliteration: 'anti',
    lemma: 'ἀντί',
    lemmaTranslit: 'anti',
    gloss: 'for',
    glossExtended: 'for, in place of, instead of',
    morphology: { pos: 'preposition' },
    strongs: 'G473',
    position: 6,
  },
  {
    id: 'Mark.10.45.7',
    language: 'greek',
    text: 'πολλῶν',
    transliteration: 'pollōn',
    lemma: 'πολύς',
    lemmaTranslit: 'polys',
    gloss: 'many',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', case: 'genitive' },
    strongs: 'G4183',
    position: 7,
  },
];

export const mark10_45_translation: VerseTranslation = {
  verseRef: 'Mark.10.45',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'For even the Son of Man came not to be served but to serve, and to give his life a ransom for many.',
      spans: [
        { id: 'Mark.10.45.en.lit.0', text: 'the Son of Man', position: 0, sourceTokenIds: ['Mark.10.45.0', 'Mark.10.45.1', 'Mark.10.45.2', 'Mark.10.45.3'], confidence: 'high' },
        { id: 'Mark.10.45.en.lit.1', text: 'to serve,', position: 1, sourceTokenIds: ['Mark.10.45.4'], confidence: 'high' },
        { id: 'Mark.10.45.en.lit.2', text: 'a ransom', position: 2, sourceTokenIds: ['Mark.10.45.5'], confidence: 'high' },
        { id: 'Mark.10.45.en.lit.3', text: 'for many.', position: 3, sourceTokenIds: ['Mark.10.45.6', 'Mark.10.45.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many.',
      spans: [
        { id: 'Mark.10.45.en.idi.0', text: 'For even the Son of Man did not come to be served, but to serve,', position: 0, sourceTokenIds: ['Mark.10.45.0', 'Mark.10.45.1', 'Mark.10.45.2', 'Mark.10.45.3', 'Mark.10.45.4'], confidence: 'high' },
        { id: 'Mark.10.45.en.idi.1', text: 'and to give his life as a ransom for many.', position: 1, sourceTokenIds: ['Mark.10.45.5', 'Mark.10.45.6', 'Mark.10.45.7'], confidence: 'high' },
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

export const mark10_45_verse = {
  ref: 'Mark.10.45',
  sourceTokens: mark10_45_tokens,
  translation: mark10_45_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 10:47 – Jesus, Son of David, have mercy on me!
 * ──────────────────────────────────────────────────────────── */

export const mark10_47_tokens: SourceToken[] = [
  {
    id: 'Mark.10.47.0',
    language: 'greek',
    text: 'Ἰησοῦ',
    transliteration: 'Iēsou',
    lemma: 'Ἰησοῦς',
    lemmaTranslit: 'Iēsous',
    gloss: 'Jesus',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'vocative' },
    strongs: 'G2424',
    position: 0,
  },
  {
    id: 'Mark.10.47.1',
    language: 'greek',
    text: 'υἱὲ',
    transliteration: 'huie',
    lemma: 'υἱός',
    lemmaTranslit: 'huios',
    gloss: 'Son',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'vocative' },
    strongs: 'G5207',
    position: 1,
  },
  {
    id: 'Mark.10.47.2',
    language: 'greek',
    text: 'Δαυίδ',
    transliteration: 'Dauid',
    lemma: 'Δαυίδ',
    lemmaTranslit: 'Dauid',
    gloss: 'of David',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G1138',
    position: 2,
  },
  {
    id: 'Mark.10.47.3',
    language: 'greek',
    text: 'ἐλέησόν',
    transliteration: 'eleēson',
    lemma: 'ἐλεέω',
    lemmaTranslit: 'eleeō',
    gloss: 'have mercy on',
    morphology: { pos: 'verb', person: '2', number: 'singular', tense: 'aorist', voice: 'active', mood: 'imperative' },
    strongs: 'G1653',
    position: 3,
  },
  {
    id: 'Mark.10.47.4',
    language: 'greek',
    text: 'με',
    transliteration: 'me',
    lemma: 'ἐγώ',
    lemmaTranslit: 'egō',
    gloss: 'me',
    morphology: { pos: 'pronoun', person: '1', number: 'singular', case: 'accusative' },
    strongs: 'G1473',
    position: 4,
  },
];

export const mark10_47_translation: VerseTranslation = {
  verseRef: 'Mark.10.47',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Jesus, Son of David, have mercy on me!',
      spans: [
        { id: 'Mark.10.47.en.lit.0', text: 'Jesus,', position: 0, sourceTokenIds: ['Mark.10.47.0'], confidence: 'high' },
        { id: 'Mark.10.47.en.lit.1', text: 'Son of David,', position: 1, sourceTokenIds: ['Mark.10.47.1', 'Mark.10.47.2'], confidence: 'high' },
        { id: 'Mark.10.47.en.lit.2', text: 'have mercy on me!', position: 2, sourceTokenIds: ['Mark.10.47.3', 'Mark.10.47.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Jesus, Son of David, have mercy on me!',
      spans: [
        { id: 'Mark.10.47.en.idi.0', text: 'Jesus, Son of David,', position: 0, sourceTokenIds: ['Mark.10.47.0', 'Mark.10.47.1', 'Mark.10.47.2'], confidence: 'high' },
        { id: 'Mark.10.47.en.idi.1', text: 'have mercy on me!', position: 1, sourceTokenIds: ['Mark.10.47.3', 'Mark.10.47.4'], confidence: 'high' },
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

export const mark10_47_verse = {
  ref: 'Mark.10.47',
  sourceTokens: mark10_47_tokens,
  translation: mark10_47_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 10:52 – Your faith has saved you
 * ──────────────────────────────────────────────────────────── */

export const mark10_52_tokens: SourceToken[] = [
  {
    id: 'Mark.10.52.0',
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
    id: 'Mark.10.52.1',
    language: 'greek',
    text: 'πίστις',
    transliteration: 'pistis',
    lemma: 'πίστις',
    lemmaTranslit: 'pistis',
    gloss: 'faith',
    glossExtended: 'faith, belief, trust, confidence',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G4102',
    position: 1,
  },
  {
    id: 'Mark.10.52.2',
    language: 'greek',
    text: 'σου',
    transliteration: 'sou',
    lemma: 'σύ',
    lemmaTranslit: 'sy',
    gloss: 'your',
    morphology: { pos: 'pronoun', person: '2', number: 'singular', case: 'genitive' },
    strongs: 'G4771',
    position: 2,
  },
  {
    id: 'Mark.10.52.3',
    language: 'greek',
    text: 'σέσωκέν',
    transliteration: 'sesōken',
    lemma: 'σῴζω',
    lemmaTranslit: 'sōzō',
    gloss: 'has saved',
    glossExtended: 'has saved, has healed, has made well',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'perfect', voice: 'active', mood: 'indicative' },
    strongs: 'G4982',
    position: 3,
  },
  {
    id: 'Mark.10.52.4',
    language: 'greek',
    text: 'σε',
    transliteration: 'se',
    lemma: 'σύ',
    lemmaTranslit: 'sy',
    gloss: 'you',
    morphology: { pos: 'pronoun', person: '2', number: 'singular', case: 'accusative' },
    strongs: 'G4771',
    position: 4,
  },
];

export const mark10_52_translation: VerseTranslation = {
  verseRef: 'Mark.10.52',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'The faith of you has saved you.',
      spans: [
        { id: 'Mark.10.52.en.lit.0', text: 'The faith of you', position: 0, sourceTokenIds: ['Mark.10.52.0', 'Mark.10.52.1', 'Mark.10.52.2'], confidence: 'high' },
        { id: 'Mark.10.52.en.lit.1', text: 'has saved you.', position: 1, sourceTokenIds: ['Mark.10.52.3', 'Mark.10.52.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Your faith has healed you.',
      spans: [
        { id: 'Mark.10.52.en.idi.0', text: 'Your faith', position: 0, sourceTokenIds: ['Mark.10.52.0', 'Mark.10.52.1', 'Mark.10.52.2'], confidence: 'high' },
        { id: 'Mark.10.52.en.idi.1', text: 'has healed you.', position: 1, sourceTokenIds: ['Mark.10.52.3', 'Mark.10.52.4'], confidence: 'high' },
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

export const mark10_52_verse = {
  ref: 'Mark.10.52',
  sourceTokens: mark10_52_tokens,
  translation: mark10_52_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Mark 10:32-52 (Ransom for many & Bartimaeus)
 * ──────────────────────────────────────────────────────────── */

export const mark10_32_52_verses = [
  mark10_33_verse,
  mark10_38_verse,
  mark10_43_verse,
  mark10_45_verse,
  mark10_47_verse,
  mark10_52_verse,
];

export default mark10_32_52_verses;
