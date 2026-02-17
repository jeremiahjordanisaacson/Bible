// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 1:1 – Beginning of the gospel of Jesus Christ, Son of God
 * ──────────────────────────────────────────────────────────── */

export const mark1_1_tokens: SourceToken[] = [
  {
    id: 'Mark.1.1.0',
    language: 'greek',
    text: 'Ἀρχή',
    transliteration: 'Archē',
    lemma: 'ἀρχή',
    lemmaTranslit: 'archē',
    gloss: 'beginning',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G746',
    position: 0,
  },
  {
    id: 'Mark.1.1.1',
    language: 'greek',
    text: 'τοῦ',
    transliteration: 'tou',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'neuter', number: 'singular', case: 'genitive' },
    strongs: 'G3588',
    position: 1,
  },
  {
    id: 'Mark.1.1.2',
    language: 'greek',
    text: 'εὐαγγελίου',
    transliteration: 'euangeliou',
    lemma: 'εὐαγγέλιον',
    lemmaTranslit: 'euangelion',
    gloss: 'gospel',
    glossExtended: 'gospel, good news',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'genitive' },
    strongs: 'G2098',
    position: 2,
  },
  {
    id: 'Mark.1.1.3',
    language: 'greek',
    text: 'Ἰησοῦ',
    transliteration: 'Iēsou',
    lemma: 'Ἰησοῦς',
    lemmaTranslit: 'Iēsous',
    gloss: 'of Jesus',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G2424',
    position: 3,
  },
  {
    id: 'Mark.1.1.4',
    language: 'greek',
    text: 'Χριστοῦ',
    transliteration: 'Christou',
    lemma: 'Χριστός',
    lemmaTranslit: 'Christos',
    gloss: 'of Christ',
    glossExtended: 'Christ, Anointed One, Messiah',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G5547',
    position: 4,
  },
  {
    id: 'Mark.1.1.5',
    language: 'greek',
    text: 'υἱοῦ',
    transliteration: 'huiou',
    lemma: 'υἱός',
    lemmaTranslit: 'huios',
    gloss: 'Son',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G5207',
    position: 5,
  },
  {
    id: 'Mark.1.1.6',
    language: 'greek',
    text: 'θεοῦ',
    transliteration: 'theou',
    lemma: 'θεός',
    lemmaTranslit: 'theos',
    gloss: 'of God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G2316',
    position: 6,
  },
];

export const mark1_1_translation: VerseTranslation = {
  verseRef: 'Mark.1.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Beginning of the gospel of Jesus Christ, Son of God.',
      spans: [
        { id: 'Mark.1.1.en.lit.0', text: 'Beginning', position: 0, sourceTokenIds: ['Mark.1.1.0'], confidence: 'high' },
        { id: 'Mark.1.1.en.lit.1', text: 'of the gospel', position: 1, sourceTokenIds: ['Mark.1.1.1', 'Mark.1.1.2'], confidence: 'high' },
        { id: 'Mark.1.1.en.lit.2', text: 'of Jesus Christ,', position: 2, sourceTokenIds: ['Mark.1.1.3', 'Mark.1.1.4'], confidence: 'high' },
        { id: 'Mark.1.1.en.lit.3', text: 'Son of God.', position: 3, sourceTokenIds: ['Mark.1.1.5', 'Mark.1.1.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'The beginning of the good news about Jesus the Messiah, the Son of God.',
      spans: [
        { id: 'Mark.1.1.en.idi.0', text: 'The beginning of the good news', position: 0, sourceTokenIds: ['Mark.1.1.0', 'Mark.1.1.1', 'Mark.1.1.2'], confidence: 'high' },
        { id: 'Mark.1.1.en.idi.1', text: 'about Jesus the Messiah,', position: 1, sourceTokenIds: ['Mark.1.1.3', 'Mark.1.1.4'], confidence: 'high' },
        { id: 'Mark.1.1.en.idi.2', text: 'the Son of God.', position: 2, sourceTokenIds: ['Mark.1.1.5', 'Mark.1.1.6'], confidence: 'high' },
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

export const mark1_1_verse = {
  ref: 'Mark.1.1',
  sourceTokens: mark1_1_tokens,
  translation: mark1_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:3 – A voice crying in the wilderness
 * ──────────────────────────────────────────────────────────── */

export const mark1_3_tokens: SourceToken[] = [
  {
    id: 'Mark.1.3.0',
    language: 'greek',
    text: 'φωνὴ',
    transliteration: 'phōnē',
    lemma: 'φωνή',
    lemmaTranslit: 'phōnē',
    gloss: 'voice',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G5456',
    position: 0,
  },
  {
    id: 'Mark.1.3.1',
    language: 'greek',
    text: 'βοῶντος',
    transliteration: 'boōntos',
    lemma: 'βοάω',
    lemmaTranslit: 'boaō',
    gloss: 'of one crying',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'participle' },
    strongs: 'G994',
    position: 1,
  },
  {
    id: 'Mark.1.3.2',
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
    id: 'Mark.1.3.3',
    language: 'greek',
    text: 'τῇ',
    transliteration: 'tē',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G3588',
    position: 3,
  },
  {
    id: 'Mark.1.3.4',
    language: 'greek',
    text: 'ἐρήμῳ',
    transliteration: 'erēmō',
    lemma: 'ἔρημος',
    lemmaTranslit: 'erēmos',
    gloss: 'wilderness',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G2048',
    position: 4,
  },
];

export const mark1_3_translation: VerseTranslation = {
  verseRef: 'Mark.1.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "A voice of one crying in the wilderness: 'Prepare the way of the Lord, make straight his paths.'",
      spans: [
        { id: 'Mark.1.3.en.lit.0', text: 'A voice', position: 0, sourceTokenIds: ['Mark.1.3.0'], confidence: 'high' },
        { id: 'Mark.1.3.en.lit.1', text: 'of one crying', position: 1, sourceTokenIds: ['Mark.1.3.1'], confidence: 'high' },
        { id: 'Mark.1.3.en.lit.2', text: 'in the wilderness:', position: 2, sourceTokenIds: ['Mark.1.3.2', 'Mark.1.3.3', 'Mark.1.3.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "A voice of one calling in the wilderness, 'Prepare the way for the Lord, make straight paths for him.'",
      spans: [
        { id: 'Mark.1.3.en.idi.0', text: 'A voice of one calling', position: 0, sourceTokenIds: ['Mark.1.3.0', 'Mark.1.3.1'], confidence: 'high' },
        { id: 'Mark.1.3.en.idi.1', text: "in the wilderness, 'Prepare the way for the Lord, make straight paths for him.'", position: 1, sourceTokenIds: ['Mark.1.3.2', 'Mark.1.3.3', 'Mark.1.3.4'], confidence: 'high' },
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

export const mark1_3_verse = {
  ref: 'Mark.1.3',
  sourceTokens: mark1_3_tokens,
  translation: mark1_3_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:8 – I baptized you with water, but he will baptize you with the Holy Spirit
 * ──────────────────────────────────────────────────────────── */

export const mark1_8_tokens: SourceToken[] = [
  {
    id: 'Mark.1.8.0',
    language: 'greek',
    text: 'ἐγὼ',
    transliteration: 'egō',
    lemma: 'ἐγώ',
    lemmaTranslit: 'egō',
    gloss: 'I',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G1473',
    position: 0,
  },
  {
    id: 'Mark.1.8.1',
    language: 'greek',
    text: 'ἐβάπτισα',
    transliteration: 'ebaptisa',
    lemma: 'βαπτίζω',
    lemmaTranslit: 'baptizō',
    gloss: 'baptized',
    morphology: { pos: 'verb', person: '1', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G907',
    position: 1,
  },
  {
    id: 'Mark.1.8.2',
    language: 'greek',
    text: 'ὕδατι',
    transliteration: 'hydati',
    lemma: 'ὕδωρ',
    lemmaTranslit: 'hydōr',
    gloss: 'with water',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'dative' },
    strongs: 'G5204',
    position: 2,
  },
  {
    id: 'Mark.1.8.3',
    language: 'greek',
    text: 'αὐτὸς',
    transliteration: 'autos',
    lemma: 'αὐτός',
    lemmaTranslit: 'autos',
    gloss: 'he',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G846',
    position: 3,
  },
  {
    id: 'Mark.1.8.4',
    language: 'greek',
    text: 'βαπτίσει',
    transliteration: 'baptisei',
    lemma: 'βαπτίζω',
    lemmaTranslit: 'baptizō',
    gloss: 'will baptize',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'future', voice: 'active', mood: 'indicative' },
    strongs: 'G907',
    position: 4,
  },
  {
    id: 'Mark.1.8.5',
    language: 'greek',
    text: 'πνεύματι',
    transliteration: 'pneumati',
    lemma: 'πνεῦμα',
    lemmaTranslit: 'pneuma',
    gloss: 'with Spirit',
    glossExtended: 'Spirit, breath, wind',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'dative' },
    strongs: 'G4151',
    position: 5,
  },
  {
    id: 'Mark.1.8.6',
    language: 'greek',
    text: 'ἁγίῳ',
    transliteration: 'hagiō',
    lemma: 'ἅγιος',
    lemmaTranslit: 'hagios',
    gloss: 'Holy',
    morphology: { pos: 'adjective', gender: 'neuter', number: 'singular', case: 'dative' },
    strongs: 'G40',
    position: 6,
  },
];

export const mark1_8_translation: VerseTranslation = {
  verseRef: 'Mark.1.8',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'I baptized you with water, but he will baptize you with Spirit Holy.',
      spans: [
        { id: 'Mark.1.8.en.lit.0', text: 'I baptized', position: 0, sourceTokenIds: ['Mark.1.8.0', 'Mark.1.8.1'], confidence: 'high' },
        { id: 'Mark.1.8.en.lit.1', text: 'with water,', position: 1, sourceTokenIds: ['Mark.1.8.2'], confidence: 'high' },
        { id: 'Mark.1.8.en.lit.2', text: 'but he will baptize', position: 2, sourceTokenIds: ['Mark.1.8.3', 'Mark.1.8.4'], confidence: 'high' },
        { id: 'Mark.1.8.en.lit.3', text: 'with Spirit Holy.', position: 3, sourceTokenIds: ['Mark.1.8.5', 'Mark.1.8.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'I baptize you with water, but he will baptize you with the Holy Spirit.',
      spans: [
        { id: 'Mark.1.8.en.idi.0', text: 'I baptize you with water,', position: 0, sourceTokenIds: ['Mark.1.8.0', 'Mark.1.8.1', 'Mark.1.8.2'], confidence: 'high' },
        { id: 'Mark.1.8.en.idi.1', text: 'but he will baptize you with the Holy Spirit.', position: 1, sourceTokenIds: ['Mark.1.8.3', 'Mark.1.8.4', 'Mark.1.8.5', 'Mark.1.8.6'], confidence: 'high' },
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

export const mark1_8_verse = {
  ref: 'Mark.1.8',
  sourceTokens: mark1_8_tokens,
  translation: mark1_8_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:11 – You are my beloved Son, in you I am well pleased
 * ──────────────────────────────────────────────────────────── */

export const mark1_11_tokens: SourceToken[] = [
  {
    id: 'Mark.1.11.0',
    language: 'greek',
    text: 'σὺ',
    transliteration: 'sy',
    lemma: 'σύ',
    lemmaTranslit: 'sy',
    gloss: 'you',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G4771',
    position: 0,
  },
  {
    id: 'Mark.1.11.1',
    language: 'greek',
    text: 'εἶ',
    transliteration: 'ei',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'are',
    morphology: { pos: 'verb', person: '2', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G1510',
    position: 1,
  },
  {
    id: 'Mark.1.11.2',
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
    id: 'Mark.1.11.3',
    language: 'greek',
    text: 'υἱός',
    transliteration: 'huios',
    lemma: 'υἱός',
    lemmaTranslit: 'huios',
    gloss: 'Son',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G5207',
    position: 3,
  },
  {
    id: 'Mark.1.11.4',
    language: 'greek',
    text: 'μου',
    transliteration: 'mou',
    lemma: 'ἐγώ',
    lemmaTranslit: 'egō',
    gloss: 'my',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G1473',
    position: 4,
  },
  {
    id: 'Mark.1.11.5',
    language: 'greek',
    text: 'ὁ',
    transliteration: 'ho',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3588',
    position: 5,
  },
  {
    id: 'Mark.1.11.6',
    language: 'greek',
    text: 'ἀγαπητός',
    transliteration: 'agapētos',
    lemma: 'ἀγαπητός',
    lemmaTranslit: 'agapētos',
    gloss: 'beloved',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G27',
    position: 6,
  },
  {
    id: 'Mark.1.11.7',
    language: 'greek',
    text: 'εὐδόκησα',
    transliteration: 'eudokēsa',
    lemma: 'εὐδοκέω',
    lemmaTranslit: 'eudokeō',
    gloss: 'I am well pleased',
    morphology: { pos: 'verb', person: '1', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G2106',
    position: 7,
  },
];

export const mark1_11_translation: VerseTranslation = {
  verseRef: 'Mark.1.11',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'You are the Son of me, the beloved; in you I am well pleased.',
      spans: [
        { id: 'Mark.1.11.en.lit.0', text: 'You are', position: 0, sourceTokenIds: ['Mark.1.11.0', 'Mark.1.11.1'], confidence: 'high' },
        { id: 'Mark.1.11.en.lit.1', text: 'the Son of me,', position: 1, sourceTokenIds: ['Mark.1.11.2', 'Mark.1.11.3', 'Mark.1.11.4'], confidence: 'high' },
        { id: 'Mark.1.11.en.lit.2', text: 'the beloved;', position: 2, sourceTokenIds: ['Mark.1.11.5', 'Mark.1.11.6'], confidence: 'high' },
        { id: 'Mark.1.11.en.lit.3', text: 'in you I am well pleased.', position: 3, sourceTokenIds: ['Mark.1.11.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'You are my beloved Son; with you I am well pleased.',
      spans: [
        { id: 'Mark.1.11.en.idi.0', text: 'You are my beloved Son;', position: 0, sourceTokenIds: ['Mark.1.11.0', 'Mark.1.11.1', 'Mark.1.11.2', 'Mark.1.11.3', 'Mark.1.11.4', 'Mark.1.11.5', 'Mark.1.11.6'], confidence: 'high' },
        { id: 'Mark.1.11.en.idi.1', text: 'with you I am well pleased.', position: 1, sourceTokenIds: ['Mark.1.11.7'], confidence: 'high' },
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

export const mark1_11_verse = {
  ref: 'Mark.1.11',
  sourceTokens: mark1_11_tokens,
  translation: mark1_11_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:17 – Come after me, and I will make you fishers of men
 * ──────────────────────────────────────────────────────────── */

export const mark1_17_tokens: SourceToken[] = [
  {
    id: 'Mark.1.17.0',
    language: 'greek',
    text: 'δεῦτε',
    transliteration: 'deute',
    lemma: 'δεῦτε',
    lemmaTranslit: 'deute',
    gloss: 'come',
    morphology: { pos: 'adverb' },
    strongs: 'G1205',
    position: 0,
  },
  {
    id: 'Mark.1.17.1',
    language: 'greek',
    text: 'ὀπίσω',
    transliteration: 'opisō',
    lemma: 'ὀπίσω',
    lemmaTranslit: 'opisō',
    gloss: 'after',
    morphology: { pos: 'adverb' },
    strongs: 'G3694',
    position: 1,
  },
  {
    id: 'Mark.1.17.2',
    language: 'greek',
    text: 'μου',
    transliteration: 'mou',
    lemma: 'ἐγώ',
    lemmaTranslit: 'egō',
    gloss: 'me',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G1473',
    position: 2,
  },
  {
    id: 'Mark.1.17.3',
    language: 'greek',
    text: 'ἁλιεῖς',
    transliteration: 'halieis',
    lemma: 'ἁλιεύς',
    lemmaTranslit: 'halieus',
    gloss: 'fishers',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', case: 'accusative' },
    strongs: 'G231',
    position: 3,
  },
  {
    id: 'Mark.1.17.4',
    language: 'greek',
    text: 'ἀνθρώπων',
    transliteration: 'anthrōpōn',
    lemma: 'ἄνθρωπος',
    lemmaTranslit: 'anthrōpos',
    gloss: 'of men',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', case: 'genitive' },
    strongs: 'G444',
    position: 4,
  },
];

export const mark1_17_translation: VerseTranslation = {
  verseRef: 'Mark.1.17',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Come after me, and I will make you to become fishers of men.',
      spans: [
        { id: 'Mark.1.17.en.lit.0', text: 'Come after me,', position: 0, sourceTokenIds: ['Mark.1.17.0', 'Mark.1.17.1', 'Mark.1.17.2'], confidence: 'high' },
        { id: 'Mark.1.17.en.lit.1', text: 'and I will make you to become fishers', position: 1, sourceTokenIds: ['Mark.1.17.3'], confidence: 'high' },
        { id: 'Mark.1.17.en.lit.2', text: 'of men.', position: 2, sourceTokenIds: ['Mark.1.17.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "Follow me, and I will make you fishers of people.",
      spans: [
        { id: 'Mark.1.17.en.idi.0', text: 'Follow me,', position: 0, sourceTokenIds: ['Mark.1.17.0', 'Mark.1.17.1', 'Mark.1.17.2'], confidence: 'high' },
        { id: 'Mark.1.17.en.idi.1', text: 'and I will make you fishers of people.', position: 1, sourceTokenIds: ['Mark.1.17.3', 'Mark.1.17.4'], confidence: 'high' },
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

export const mark1_17_verse = {
  ref: 'Mark.1.17',
  sourceTokens: mark1_17_tokens,
  translation: mark1_17_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:19 – He saw James the son of Zebedee and John his brother
 * ──────────────────────────────────────────────────────────── */

export const mark1_19_tokens: SourceToken[] = [
  {
    id: 'Mark.1.19.0',
    language: 'greek',
    text: 'εἶδεν',
    transliteration: 'eiden',
    lemma: 'ὁράω',
    lemmaTranslit: 'horaō',
    gloss: 'he saw',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G3708',
    position: 0,
  },
  {
    id: 'Mark.1.19.1',
    language: 'greek',
    text: 'Ἰάκωβον',
    transliteration: 'Iakōbon',
    lemma: 'Ἰάκωβος',
    lemmaTranslit: 'Iakōbos',
    gloss: 'James',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G2385',
    position: 1,
  },
  {
    id: 'Mark.1.19.2',
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
    id: 'Mark.1.19.3',
    language: 'greek',
    text: 'Ζεβεδαίου',
    transliteration: 'Zebedaiou',
    lemma: 'Ζεβεδαῖος',
    lemmaTranslit: 'Zebedaios',
    gloss: 'of Zebedee',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G2199',
    position: 3,
  },
  {
    id: 'Mark.1.19.4',
    language: 'greek',
    text: 'Ἰωάννην',
    transliteration: 'Iōannēn',
    lemma: 'Ἰωάννης',
    lemmaTranslit: 'Iōannēs',
    gloss: 'John',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G2491',
    position: 4,
  },
];

export const mark1_19_translation: VerseTranslation = {
  verseRef: 'Mark.1.19',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And he saw James the [son] of Zebedee and John his brother.',
      spans: [
        { id: 'Mark.1.19.en.lit.0', text: 'And he saw', position: 0, sourceTokenIds: ['Mark.1.19.0'], confidence: 'high' },
        { id: 'Mark.1.19.en.lit.1', text: 'James the [son] of Zebedee', position: 1, sourceTokenIds: ['Mark.1.19.1', 'Mark.1.19.2', 'Mark.1.19.3'], confidence: 'high' },
        { id: 'Mark.1.19.en.lit.2', text: 'and John his brother.', position: 2, sourceTokenIds: ['Mark.1.19.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'He saw James son of Zebedee and his brother John.',
      spans: [
        { id: 'Mark.1.19.en.idi.0', text: 'He saw', position: 0, sourceTokenIds: ['Mark.1.19.0'], confidence: 'high' },
        { id: 'Mark.1.19.en.idi.1', text: 'James son of Zebedee', position: 1, sourceTokenIds: ['Mark.1.19.1', 'Mark.1.19.2', 'Mark.1.19.3'], confidence: 'high' },
        { id: 'Mark.1.19.en.idi.2', text: 'and his brother John.', position: 2, sourceTokenIds: ['Mark.1.19.4'], confidence: 'high' },
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

export const mark1_19_verse = {
  ref: 'Mark.1.19',
  sourceTokens: mark1_19_tokens,
  translation: mark1_19_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Mark 1:1-20 (Beginning of gospel, baptism, first disciples)
 * ──────────────────────────────────────────────────────────── */

export const mark1_1_20_verses = [
  mark1_1_verse,
  mark1_3_verse,
  mark1_8_verse,
  mark1_11_verse,
  mark1_17_verse,
  mark1_19_verse,
];

export default mark1_1_20_verses;
