// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 5:1 – Seeing the crowds, he went up on the mountain
 * ──────────────────────────────────────────────────────────── */

export const matthew5_1_tokens: SourceToken[] = [
  {
    id: 'Matt.5.1.0',
    language: 'greek',
    text: 'Ἰδὼν',
    transliteration: 'Idōn',
    lemma: 'ὁράω',
    lemmaTranslit: 'horaō',
    gloss: 'having seen',
    morphology: { pos: 'verb', gender: 'masculine', number: 'singular', tense: 'aorist', voice: 'active', mood: 'participle', case: 'nominative' },
    strongs: 'G3708',
    position: 0,
  },
  {
    id: 'Matt.5.1.1',
    language: 'greek',
    text: 'τοὺς',
    transliteration: 'tous',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'plural', case: 'accusative' },
    strongs: 'G3588',
    position: 1,
  },
  {
    id: 'Matt.5.1.2',
    language: 'greek',
    text: 'ὄχλους',
    transliteration: 'ochlous',
    lemma: 'ὄχλος',
    lemmaTranslit: 'ochlos',
    gloss: 'crowds',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', case: 'accusative' },
    strongs: 'G3793',
    position: 2,
  },
  {
    id: 'Matt.5.1.3',
    language: 'greek',
    text: 'ἀνέβη',
    transliteration: 'anebē',
    lemma: 'ἀναβαίνω',
    lemmaTranslit: 'anabainō',
    gloss: 'he went up',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G305',
    position: 3,
  },
  {
    id: 'Matt.5.1.4',
    language: 'greek',
    text: 'τὸ',
    transliteration: 'to',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'neuter', number: 'singular', case: 'accusative' },
    strongs: 'G3588',
    position: 4,
  },
  {
    id: 'Matt.5.1.5',
    language: 'greek',
    text: 'ὄρος',
    transliteration: 'oros',
    lemma: 'ὄρος',
    lemmaTranslit: 'oros',
    gloss: 'mountain',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'accusative' },
    strongs: 'G3735',
    position: 5,
  },
];

export const matthew5_1_translation: VerseTranslation = {
  verseRef: 'Matt.5.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And having seen the crowds, he went up on the mountain, and having sat down, his disciples came to him.',
      spans: [
        { id: 'Matt.5.1.en.lit.0', text: 'And having seen the crowds,', position: 0, sourceTokenIds: ['Matt.5.1.0', 'Matt.5.1.1', 'Matt.5.1.2'], confidence: 'high' },
        { id: 'Matt.5.1.en.lit.1', text: 'he went up on the mountain,', position: 1, sourceTokenIds: ['Matt.5.1.3', 'Matt.5.1.4', 'Matt.5.1.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Now when Jesus saw the crowds, he went up on a mountainside and sat down. His disciples came to him.',
      spans: [
        { id: 'Matt.5.1.en.idi.0', text: 'Now when Jesus saw the crowds,', position: 0, sourceTokenIds: ['Matt.5.1.0', 'Matt.5.1.1', 'Matt.5.1.2'], confidence: 'high' },
        { id: 'Matt.5.1.en.idi.1', text: 'he went up on a mountainside and sat down.', position: 1, sourceTokenIds: ['Matt.5.1.3', 'Matt.5.1.4', 'Matt.5.1.5'], confidence: 'high' },
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

export const matthew5_1_verse = {
  ref: 'Matt.5.1',
  sourceTokens: matthew5_1_tokens,
  translation: matthew5_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 5:3 – Blessed are the poor in spirit
 * ──────────────────────────────────────────────────────────── */

export const matthew5_3_tokens: SourceToken[] = [
  {
    id: 'Matt.5.3.0',
    language: 'greek',
    text: 'Μακάριοι',
    transliteration: 'Makarioi',
    lemma: 'μακάριος',
    lemmaTranslit: 'makarios',
    gloss: 'blessed',
    glossExtended: 'blessed, happy, fortunate',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', case: 'nominative' },
    strongs: 'G3107',
    position: 0,
  },
  {
    id: 'Matt.5.3.1',
    language: 'greek',
    text: 'οἱ',
    transliteration: 'hoi',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'plural', case: 'nominative' },
    strongs: 'G3588',
    position: 1,
  },
  {
    id: 'Matt.5.3.2',
    language: 'greek',
    text: 'πτωχοὶ',
    transliteration: 'ptōchoi',
    lemma: 'πτωχός',
    lemmaTranslit: 'ptōchos',
    gloss: 'poor',
    glossExtended: 'poor, destitute, beggarly',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', case: 'nominative' },
    strongs: 'G4434',
    position: 2,
  },
  {
    id: 'Matt.5.3.3',
    language: 'greek',
    text: 'τῷ',
    transliteration: 'tō',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'neuter', number: 'singular', case: 'dative' },
    strongs: 'G3588',
    position: 3,
  },
  {
    id: 'Matt.5.3.4',
    language: 'greek',
    text: 'πνεύματι',
    transliteration: 'pneumati',
    lemma: 'πνεῦμα',
    lemmaTranslit: 'pneuma',
    gloss: 'in spirit',
    glossExtended: 'spirit, breath, wind',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'dative' },
    strongs: 'G4151',
    position: 4,
  },
  {
    id: 'Matt.5.3.5',
    language: 'greek',
    text: 'βασιλεία',
    transliteration: 'basileia',
    lemma: 'βασιλεία',
    lemmaTranslit: 'basileia',
    gloss: 'kingdom',
    glossExtended: 'kingdom, reign, royal power',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G932',
    position: 5,
  },
  {
    id: 'Matt.5.3.6',
    language: 'greek',
    text: 'οὐρανῶν',
    transliteration: 'ouranōn',
    lemma: 'οὐρανός',
    lemmaTranslit: 'ouranos',
    gloss: 'of [the] heavens',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', case: 'genitive' },
    strongs: 'G3772',
    position: 6,
  },
];

export const matthew5_3_translation: VerseTranslation = {
  verseRef: 'Matt.5.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Blessed [are] the poor in the spirit, for theirs is the kingdom of the heavens.',
      spans: [
        { id: 'Matt.5.3.en.lit.0', text: 'Blessed [are]', position: 0, sourceTokenIds: ['Matt.5.3.0'], confidence: 'high' },
        { id: 'Matt.5.3.en.lit.1', text: 'the poor', position: 1, sourceTokenIds: ['Matt.5.3.1', 'Matt.5.3.2'], confidence: 'high' },
        { id: 'Matt.5.3.en.lit.2', text: 'in the spirit,', position: 2, sourceTokenIds: ['Matt.5.3.3', 'Matt.5.3.4'], confidence: 'high' },
        { id: 'Matt.5.3.en.lit.3', text: 'for theirs is the kingdom of the heavens.', position: 3, sourceTokenIds: ['Matt.5.3.5', 'Matt.5.3.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Blessed are the poor in spirit, for theirs is the kingdom of heaven.',
      spans: [
        { id: 'Matt.5.3.en.idi.0', text: 'Blessed are the poor in spirit,', position: 0, sourceTokenIds: ['Matt.5.3.0', 'Matt.5.3.1', 'Matt.5.3.2', 'Matt.5.3.3', 'Matt.5.3.4'], confidence: 'high' },
        { id: 'Matt.5.3.en.idi.1', text: 'for theirs is the kingdom of heaven.', position: 1, sourceTokenIds: ['Matt.5.3.5', 'Matt.5.3.6'], confidence: 'high' },
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

export const matthew5_3_verse = {
  ref: 'Matt.5.3',
  sourceTokens: matthew5_3_tokens,
  translation: matthew5_3_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 5:6 – Blessed are those who hunger and thirst for righteousness
 * ──────────────────────────────────────────────────────────── */

export const matthew5_6_tokens: SourceToken[] = [
  {
    id: 'Matt.5.6.0',
    language: 'greek',
    text: 'Μακάριοι',
    transliteration: 'Makarioi',
    lemma: 'μακάριος',
    lemmaTranslit: 'makarios',
    gloss: 'blessed',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', case: 'nominative' },
    strongs: 'G3107',
    position: 0,
  },
  {
    id: 'Matt.5.6.1',
    language: 'greek',
    text: 'πεινῶντες',
    transliteration: 'peinōntes',
    lemma: 'πεινάω',
    lemmaTranslit: 'peinaō',
    gloss: 'hungering',
    morphology: { pos: 'verb', gender: 'masculine', number: 'plural', tense: 'present', voice: 'active', mood: 'participle', case: 'nominative' },
    strongs: 'G3983',
    position: 1,
  },
  {
    id: 'Matt.5.6.2',
    language: 'greek',
    text: 'καὶ',
    transliteration: 'kai',
    lemma: 'καί',
    lemmaTranslit: 'kai',
    gloss: 'and',
    morphology: { pos: 'conjunction' },
    strongs: 'G2532',
    position: 2,
  },
  {
    id: 'Matt.5.6.3',
    language: 'greek',
    text: 'διψῶντες',
    transliteration: 'dipsōntes',
    lemma: 'διψάω',
    lemmaTranslit: 'dipsaō',
    gloss: 'thirsting',
    morphology: { pos: 'verb', gender: 'masculine', number: 'plural', tense: 'present', voice: 'active', mood: 'participle', case: 'nominative' },
    strongs: 'G1372',
    position: 3,
  },
  {
    id: 'Matt.5.6.4',
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
    id: 'Matt.5.6.5',
    language: 'greek',
    text: 'δικαιοσύνην',
    transliteration: 'dikaiosynēn',
    lemma: 'δικαιοσύνη',
    lemmaTranslit: 'dikaiosynē',
    gloss: 'righteousness',
    glossExtended: 'righteousness, justice, uprightness',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G1343',
    position: 5,
  },
  {
    id: 'Matt.5.6.6',
    language: 'greek',
    text: 'χορτασθήσονται',
    transliteration: 'chortasthēsontai',
    lemma: 'χορτάζω',
    lemmaTranslit: 'chortazō',
    gloss: 'they will be filled',
    morphology: { pos: 'verb', person: '3', number: 'plural', tense: 'future', voice: 'passive', mood: 'indicative' },
    strongs: 'G5526',
    position: 6,
  },
];

export const matthew5_6_translation: VerseTranslation = {
  verseRef: 'Matt.5.6',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Blessed [are] the ones hungering and thirsting for the righteousness, for they will be filled.',
      spans: [
        { id: 'Matt.5.6.en.lit.0', text: 'Blessed [are]', position: 0, sourceTokenIds: ['Matt.5.6.0'], confidence: 'high' },
        { id: 'Matt.5.6.en.lit.1', text: 'the ones hungering and thirsting', position: 1, sourceTokenIds: ['Matt.5.6.1', 'Matt.5.6.2', 'Matt.5.6.3'], confidence: 'high' },
        { id: 'Matt.5.6.en.lit.2', text: 'for the righteousness,', position: 2, sourceTokenIds: ['Matt.5.6.4', 'Matt.5.6.5'], confidence: 'high' },
        { id: 'Matt.5.6.en.lit.3', text: 'for they will be filled.', position: 3, sourceTokenIds: ['Matt.5.6.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Blessed are those who hunger and thirst for righteousness, for they will be filled.',
      spans: [
        { id: 'Matt.5.6.en.idi.0', text: 'Blessed are those who hunger and thirst for righteousness,', position: 0, sourceTokenIds: ['Matt.5.6.0', 'Matt.5.6.1', 'Matt.5.6.2', 'Matt.5.6.3', 'Matt.5.6.4', 'Matt.5.6.5'], confidence: 'high' },
        { id: 'Matt.5.6.en.idi.1', text: 'for they will be filled.', position: 1, sourceTokenIds: ['Matt.5.6.6'], confidence: 'high' },
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

export const matthew5_6_verse = {
  ref: 'Matt.5.6',
  sourceTokens: matthew5_6_tokens,
  translation: matthew5_6_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 5:11 – Blessed are you when people insult you
 * ──────────────────────────────────────────────────────────── */

export const matthew5_11_tokens: SourceToken[] = [
  {
    id: 'Matt.5.11.0',
    language: 'greek',
    text: 'Μακάριοί',
    transliteration: 'Makarioi',
    lemma: 'μακάριος',
    lemmaTranslit: 'makarios',
    gloss: 'blessed',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', case: 'nominative' },
    strongs: 'G3107',
    position: 0,
  },
  {
    id: 'Matt.5.11.1',
    language: 'greek',
    text: 'ἐστε',
    transliteration: 'este',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'you are',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G1510',
    position: 1,
  },
  {
    id: 'Matt.5.11.2',
    language: 'greek',
    text: 'ὅταν',
    transliteration: 'hotan',
    lemma: 'ὅταν',
    lemmaTranslit: 'hotan',
    gloss: 'when',
    morphology: { pos: 'conjunction' },
    strongs: 'G3752',
    position: 2,
  },
  {
    id: 'Matt.5.11.3',
    language: 'greek',
    text: 'ὀνειδίσωσιν',
    transliteration: 'oneidisōsin',
    lemma: 'ὀνειδίζω',
    lemmaTranslit: 'oneidizō',
    gloss: 'they revile',
    morphology: { pos: 'verb', person: '3', number: 'plural', tense: 'aorist', voice: 'active', mood: 'subjunctive' },
    strongs: 'G3679',
    position: 3,
  },
  {
    id: 'Matt.5.11.4',
    language: 'greek',
    text: 'ὑμᾶς',
    transliteration: 'hymas',
    lemma: 'σύ',
    lemmaTranslit: 'sy',
    gloss: 'you',
    morphology: { pos: 'pronoun', person: '2', number: 'plural', case: 'accusative' },
    strongs: 'G4771',
    position: 4,
  },
  {
    id: 'Matt.5.11.5',
    language: 'greek',
    text: 'διώξωσιν',
    transliteration: 'diōxōsin',
    lemma: 'διώκω',
    lemmaTranslit: 'diōkō',
    gloss: 'persecute',
    morphology: { pos: 'verb', person: '3', number: 'plural', tense: 'aorist', voice: 'active', mood: 'subjunctive' },
    strongs: 'G1377',
    position: 5,
  },
];

export const matthew5_11_translation: VerseTranslation = {
  verseRef: 'Matt.5.11',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Blessed are you when they revile you and persecute and say every evil thing against you falsely on account of me.',
      spans: [
        { id: 'Matt.5.11.en.lit.0', text: 'Blessed are you', position: 0, sourceTokenIds: ['Matt.5.11.0', 'Matt.5.11.1'], confidence: 'high' },
        { id: 'Matt.5.11.en.lit.1', text: 'when they revile you and persecute', position: 1, sourceTokenIds: ['Matt.5.11.2', 'Matt.5.11.3', 'Matt.5.11.4', 'Matt.5.11.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Blessed are you when people insult you, persecute you, and falsely say all kinds of evil against you because of me.',
      spans: [
        { id: 'Matt.5.11.en.idi.0', text: 'Blessed are you', position: 0, sourceTokenIds: ['Matt.5.11.0', 'Matt.5.11.1'], confidence: 'high' },
        { id: 'Matt.5.11.en.idi.1', text: 'when people insult you, persecute you,', position: 1, sourceTokenIds: ['Matt.5.11.2', 'Matt.5.11.3', 'Matt.5.11.4', 'Matt.5.11.5'], confidence: 'high' },
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

export const matthew5_11_verse = {
  ref: 'Matt.5.11',
  sourceTokens: matthew5_11_tokens,
  translation: matthew5_11_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 5:17 – Do not think that I have come to abolish the Law
 * ──────────────────────────────────────────────────────────── */

export const matthew5_17_tokens: SourceToken[] = [
  {
    id: 'Matt.5.17.0',
    language: 'greek',
    text: 'Μὴ',
    transliteration: 'Mē',
    lemma: 'μή',
    lemmaTranslit: 'mē',
    gloss: 'not',
    morphology: { pos: 'particle' },
    strongs: 'G3361',
    position: 0,
  },
  {
    id: 'Matt.5.17.1',
    language: 'greek',
    text: 'νομίσητε',
    transliteration: 'nomisēte',
    lemma: 'νομίζω',
    lemmaTranslit: 'nomizō',
    gloss: 'think',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'aorist', voice: 'active', mood: 'subjunctive' },
    strongs: 'G3543',
    position: 1,
  },
  {
    id: 'Matt.5.17.2',
    language: 'greek',
    text: 'ἦλθον',
    transliteration: 'ēlthon',
    lemma: 'ἔρχομαι',
    lemmaTranslit: 'erchomai',
    gloss: 'I came',
    morphology: { pos: 'verb', person: '1', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G2064',
    position: 2,
  },
  {
    id: 'Matt.5.17.3',
    language: 'greek',
    text: 'καταλῦσαι',
    transliteration: 'katalysai',
    lemma: 'καταλύω',
    lemmaTranslit: 'katalyō',
    gloss: 'to abolish',
    glossExtended: 'to destroy, to tear down, to abolish',
    morphology: { pos: 'verb', tense: 'aorist', voice: 'active', mood: 'infinitive' },
    strongs: 'G2647',
    position: 3,
  },
  {
    id: 'Matt.5.17.4',
    language: 'greek',
    text: 'νόμον',
    transliteration: 'nomon',
    lemma: 'νόμος',
    lemmaTranslit: 'nomos',
    gloss: 'law',
    glossExtended: 'law, the Torah, principle',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G3551',
    position: 4,
  },
  {
    id: 'Matt.5.17.5',
    language: 'greek',
    text: 'πληρῶσαι',
    transliteration: 'plērōsai',
    lemma: 'πληρόω',
    lemmaTranslit: 'plēroō',
    gloss: 'to fulfill',
    morphology: { pos: 'verb', tense: 'aorist', voice: 'active', mood: 'infinitive' },
    strongs: 'G4137',
    position: 5,
  },
];

export const matthew5_17_translation: VerseTranslation = {
  verseRef: 'Matt.5.17',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Do not think that I came to abolish the law or the prophets; I came not to abolish but to fulfill.',
      spans: [
        { id: 'Matt.5.17.en.lit.0', text: 'Do not think', position: 0, sourceTokenIds: ['Matt.5.17.0', 'Matt.5.17.1'], confidence: 'high' },
        { id: 'Matt.5.17.en.lit.1', text: 'that I came to abolish the law', position: 1, sourceTokenIds: ['Matt.5.17.2', 'Matt.5.17.3', 'Matt.5.17.4'], confidence: 'high' },
        { id: 'Matt.5.17.en.lit.2', text: 'but to fulfill.', position: 2, sourceTokenIds: ['Matt.5.17.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Do not think that I have come to abolish the Law or the Prophets; I have not come to abolish them but to fulfill them.',
      spans: [
        { id: 'Matt.5.17.en.idi.0', text: 'Do not think that I have come', position: 0, sourceTokenIds: ['Matt.5.17.0', 'Matt.5.17.1', 'Matt.5.17.2'], confidence: 'high' },
        { id: 'Matt.5.17.en.idi.1', text: 'to abolish the Law or the Prophets;', position: 1, sourceTokenIds: ['Matt.5.17.3', 'Matt.5.17.4'], confidence: 'high' },
        { id: 'Matt.5.17.en.idi.2', text: 'I have not come to abolish them but to fulfill them.', position: 2, sourceTokenIds: ['Matt.5.17.5'], confidence: 'high' },
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

export const matthew5_17_verse = {
  ref: 'Matt.5.17',
  sourceTokens: matthew5_17_tokens,
  translation: matthew5_17_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 5:44 – Love your enemies and pray for those who persecute you
 * ──────────────────────────────────────────────────────────── */

export const matthew5_44_tokens: SourceToken[] = [
  {
    id: 'Matt.5.44.0',
    language: 'greek',
    text: 'ἀγαπᾶτε',
    transliteration: 'agapate',
    lemma: 'ἀγαπάω',
    lemmaTranslit: 'agapaō',
    gloss: 'love',
    glossExtended: 'love, cherish (unconditional love)',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'present', voice: 'active', mood: 'imperative' },
    strongs: 'G25',
    position: 0,
  },
  {
    id: 'Matt.5.44.1',
    language: 'greek',
    text: 'τοὺς',
    transliteration: 'tous',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'plural', case: 'accusative' },
    strongs: 'G3588',
    position: 1,
  },
  {
    id: 'Matt.5.44.2',
    language: 'greek',
    text: 'ἐχθροὺς',
    transliteration: 'echthrous',
    lemma: 'ἐχθρός',
    lemmaTranslit: 'echthros',
    gloss: 'enemies',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', case: 'accusative' },
    strongs: 'G2190',
    position: 2,
  },
  {
    id: 'Matt.5.44.3',
    language: 'greek',
    text: 'ὑμῶν',
    transliteration: 'hymōn',
    lemma: 'σύ',
    lemmaTranslit: 'sy',
    gloss: 'of you',
    morphology: { pos: 'pronoun', person: '2', number: 'plural', case: 'genitive' },
    strongs: 'G4771',
    position: 3,
  },
  {
    id: 'Matt.5.44.4',
    language: 'greek',
    text: 'προσεύχεσθε',
    transliteration: 'proseuchesthe',
    lemma: 'προσεύχομαι',
    lemmaTranslit: 'proseuchomai',
    gloss: 'pray',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'present', voice: 'middle', mood: 'imperative' },
    strongs: 'G4336',
    position: 4,
  },
  {
    id: 'Matt.5.44.5',
    language: 'greek',
    text: 'διωκόντων',
    transliteration: 'diōkontōn',
    lemma: 'διώκω',
    lemmaTranslit: 'diōkō',
    gloss: 'persecuting',
    morphology: { pos: 'verb', gender: 'masculine', number: 'plural', tense: 'present', voice: 'active', mood: 'participle', case: 'genitive' },
    strongs: 'G1377',
    position: 5,
  },
];

export const matthew5_44_translation: VerseTranslation = {
  verseRef: 'Matt.5.44',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Love the enemies of you, and pray for the ones persecuting you.',
      spans: [
        { id: 'Matt.5.44.en.lit.0', text: 'Love the enemies of you,', position: 0, sourceTokenIds: ['Matt.5.44.0', 'Matt.5.44.1', 'Matt.5.44.2', 'Matt.5.44.3'], confidence: 'high' },
        { id: 'Matt.5.44.en.lit.1', text: 'and pray for the ones persecuting you.', position: 1, sourceTokenIds: ['Matt.5.44.4', 'Matt.5.44.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Love your enemies and pray for those who persecute you.',
      spans: [
        { id: 'Matt.5.44.en.idi.0', text: 'Love your enemies', position: 0, sourceTokenIds: ['Matt.5.44.0', 'Matt.5.44.1', 'Matt.5.44.2', 'Matt.5.44.3'], confidence: 'high' },
        { id: 'Matt.5.44.en.idi.1', text: 'and pray for those who persecute you.', position: 1, sourceTokenIds: ['Matt.5.44.4', 'Matt.5.44.5'], confidence: 'high' },
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

export const matthew5_44_verse = {
  ref: 'Matt.5.44',
  sourceTokens: matthew5_44_tokens,
  translation: matthew5_44_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 5:45 – That you may be sons of your Father in heaven
 * ──────────────────────────────────────────────────────────── */

export const matthew5_45_tokens: SourceToken[] = [
  {
    id: 'Matt.5.45.0',
    language: 'greek',
    text: 'γένησθε',
    transliteration: 'genēsthe',
    lemma: 'γίνομαι',
    lemmaTranslit: 'ginomai',
    gloss: 'you may become',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'aorist', voice: 'middle', mood: 'subjunctive' },
    strongs: 'G1096',
    position: 0,
  },
  {
    id: 'Matt.5.45.1',
    language: 'greek',
    text: 'υἱοὶ',
    transliteration: 'huioi',
    lemma: 'υἱός',
    lemmaTranslit: 'huios',
    gloss: 'sons',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', case: 'nominative' },
    strongs: 'G5207',
    position: 1,
  },
  {
    id: 'Matt.5.45.2',
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
    id: 'Matt.5.45.3',
    language: 'greek',
    text: 'πατρὸς',
    transliteration: 'patros',
    lemma: 'πατήρ',
    lemmaTranslit: 'patēr',
    gloss: 'Father',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G3962',
    position: 3,
  },
  {
    id: 'Matt.5.45.4',
    language: 'greek',
    text: 'ὑμῶν',
    transliteration: 'hymōn',
    lemma: 'σύ',
    lemmaTranslit: 'sy',
    gloss: 'of you',
    morphology: { pos: 'pronoun', person: '2', number: 'plural', case: 'genitive' },
    strongs: 'G4771',
    position: 4,
  },
  {
    id: 'Matt.5.45.5',
    language: 'greek',
    text: 'οὐρανοῖς',
    transliteration: 'ouranois',
    lemma: 'οὐρανός',
    lemmaTranslit: 'ouranos',
    gloss: 'in [the] heavens',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', case: 'dative' },
    strongs: 'G3772',
    position: 5,
  },
];

export const matthew5_45_translation: VerseTranslation = {
  verseRef: 'Matt.5.45',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'so that you may become sons of your Father the [one] in the heavens, for he makes his sun rise on evil and good.',
      spans: [
        { id: 'Matt.5.45.en.lit.0', text: 'so that you may become sons', position: 0, sourceTokenIds: ['Matt.5.45.0', 'Matt.5.45.1'], confidence: 'high' },
        { id: 'Matt.5.45.en.lit.1', text: 'of your Father the [one] in the heavens,', position: 1, sourceTokenIds: ['Matt.5.45.2', 'Matt.5.45.3', 'Matt.5.45.4', 'Matt.5.45.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'that you may be children of your Father in heaven. He causes his sun to rise on the evil and the good.',
      spans: [
        { id: 'Matt.5.45.en.idi.0', text: 'that you may be children', position: 0, sourceTokenIds: ['Matt.5.45.0', 'Matt.5.45.1'], confidence: 'high' },
        { id: 'Matt.5.45.en.idi.1', text: 'of your Father in heaven.', position: 1, sourceTokenIds: ['Matt.5.45.2', 'Matt.5.45.3', 'Matt.5.45.4', 'Matt.5.45.5'], confidence: 'high' },
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

export const matthew5_45_verse = {
  ref: 'Matt.5.45',
  sourceTokens: matthew5_45_tokens,
  translation: matthew5_45_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 5:48 – Be perfect, as your heavenly Father is perfect
 * ──────────────────────────────────────────────────────────── */

export const matthew5_48_tokens: SourceToken[] = [
  {
    id: 'Matt.5.48.0',
    language: 'greek',
    text: 'Ἔσεσθε',
    transliteration: 'Esesthe',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'you shall be',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'future', voice: 'middle', mood: 'indicative' },
    strongs: 'G1510',
    position: 0,
  },
  {
    id: 'Matt.5.48.1',
    language: 'greek',
    text: 'ὑμεῖς',
    transliteration: 'hymeis',
    lemma: 'σύ',
    lemmaTranslit: 'sy',
    gloss: 'you',
    morphology: { pos: 'pronoun', person: '2', number: 'plural', case: 'nominative' },
    strongs: 'G4771',
    position: 1,
  },
  {
    id: 'Matt.5.48.2',
    language: 'greek',
    text: 'τέλειοι',
    transliteration: 'teleioi',
    lemma: 'τέλειος',
    lemmaTranslit: 'teleios',
    gloss: 'perfect',
    glossExtended: 'perfect, complete, mature, fully developed',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', case: 'nominative' },
    strongs: 'G5046',
    position: 2,
  },
  {
    id: 'Matt.5.48.3',
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
    id: 'Matt.5.48.4',
    language: 'greek',
    text: 'πατὴρ',
    transliteration: 'patēr',
    lemma: 'πατήρ',
    lemmaTranslit: 'patēr',
    gloss: 'Father',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3962',
    position: 4,
  },
  {
    id: 'Matt.5.48.5',
    language: 'greek',
    text: 'οὐράνιος',
    transliteration: 'ouranios',
    lemma: 'οὐράνιος',
    lemmaTranslit: 'ouranios',
    gloss: 'heavenly',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3770',
    position: 5,
  },
  {
    id: 'Matt.5.48.6',
    language: 'greek',
    text: 'τέλειός',
    transliteration: 'teleios',
    lemma: 'τέλειος',
    lemmaTranslit: 'teleios',
    gloss: 'perfect',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G5046',
    position: 6,
  },
];

export const matthew5_48_translation: VerseTranslation = {
  verseRef: 'Matt.5.48',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'You therefore shall be perfect, as your heavenly Father is perfect.',
      spans: [
        { id: 'Matt.5.48.en.lit.0', text: 'You therefore shall be perfect,', position: 0, sourceTokenIds: ['Matt.5.48.0', 'Matt.5.48.1', 'Matt.5.48.2'], confidence: 'high' },
        { id: 'Matt.5.48.en.lit.1', text: 'as your heavenly Father is perfect.', position: 1, sourceTokenIds: ['Matt.5.48.3', 'Matt.5.48.4', 'Matt.5.48.5', 'Matt.5.48.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Be perfect, therefore, as your heavenly Father is perfect.',
      spans: [
        { id: 'Matt.5.48.en.idi.0', text: 'Be perfect, therefore,', position: 0, sourceTokenIds: ['Matt.5.48.0', 'Matt.5.48.1', 'Matt.5.48.2'], confidence: 'high' },
        { id: 'Matt.5.48.en.idi.1', text: 'as your heavenly Father is perfect.', position: 1, sourceTokenIds: ['Matt.5.48.3', 'Matt.5.48.4', 'Matt.5.48.5', 'Matt.5.48.6'], confidence: 'high' },
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

export const matthew5_48_verse = {
  ref: 'Matt.5.48',
  sourceTokens: matthew5_48_tokens,
  translation: matthew5_48_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Matthew 5:1-48 (Beatitudes & Sermon on the Mount Ethics)
 * ──────────────────────────────────────────────────────────── */

export const matthew5_1_48_verses = [
  matthew5_1_verse,
  matthew5_3_verse,
  matthew5_6_verse,
  matthew5_11_verse,
  matthew5_17_verse,
  matthew5_44_verse,
  matthew5_45_verse,
  matthew5_48_verse,
];

export default matthew5_1_48_verses;
