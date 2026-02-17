// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 4:1 – Test the spirits
 * ──────────────────────────────────────────────────────────── */

export const john1_4_1_tokens: SourceToken[] = [
  {
    id: '1John.4.1.0',
    language: 'greek',
    text: 'Ἀγαπητοί',
    transliteration: 'Agapētoi',
    lemma: 'ἀγαπητός',
    lemmaTranslit: 'agapētos',
    gloss: 'beloved',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', case: 'vocative' },
    strongs: 'G27',
    position: 0,
  },
  {
    id: '1John.4.1.1',
    language: 'greek',
    text: 'πιστεύετε',
    transliteration: 'pisteuete',
    lemma: 'πιστεύω',
    lemmaTranslit: 'pisteuō',
    gloss: 'believe',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'present', voice: 'active', mood: 'imperative' },
    strongs: 'G4100',
    position: 1,
  },
  {
    id: '1John.4.1.2',
    language: 'greek',
    text: 'παντὶ',
    transliteration: 'panti',
    lemma: 'πᾶς',
    lemmaTranslit: 'pas',
    gloss: 'every',
    morphology: { pos: 'adjective', gender: 'neuter', number: 'singular', case: 'dative' },
    strongs: 'G3956',
    position: 2,
  },
  {
    id: '1John.4.1.3',
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
    id: '1John.4.1.4',
    language: 'greek',
    text: 'δοκιμάζετε',
    transliteration: 'dokimazete',
    lemma: 'δοκιμάζω',
    lemmaTranslit: 'dokimazō',
    gloss: 'test',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'present', voice: 'active', mood: 'imperative' },
    strongs: 'G1381',
    position: 4,
  },
  {
    id: '1John.4.1.5',
    language: 'greek',
    text: 'τὰ',
    transliteration: 'ta',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'neuter', number: 'plural', case: 'accusative' },
    strongs: 'G3588',
    position: 5,
  },
  {
    id: '1John.4.1.6',
    language: 'greek',
    text: 'πνεύματα',
    transliteration: 'pneumata',
    lemma: 'πνεῦμα',
    lemmaTranslit: 'pneuma',
    gloss: 'spirits',
    morphology: { pos: 'noun', gender: 'neuter', number: 'plural', case: 'accusative' },
    strongs: 'G4151',
    position: 6,
  },
];

export const john1_4_1_translation: VerseTranslation = {
  verseRef: '1John.4.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Beloved, do not believe every spirit, but test the spirits whether they are from God.',
      spans: [
        { id: '1John.4.1.en.lit.0', text: 'Beloved,', position: 0, sourceTokenIds: ['1John.4.1.0'], confidence: 'high' },
        { id: '1John.4.1.en.lit.1', text: 'do not believe every spirit,', position: 1, sourceTokenIds: ['1John.4.1.1', '1John.4.1.2', '1John.4.1.3'], confidence: 'high' },
        { id: '1John.4.1.en.lit.2', text: 'but test the spirits', position: 2, sourceTokenIds: ['1John.4.1.4', '1John.4.1.5', '1John.4.1.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Beloved, do not believe every spirit, but test the spirits to see whether they are from God.',
      spans: [
        { id: '1John.4.1.en.idi.0', text: 'Beloved, do not believe every spirit,', position: 0, sourceTokenIds: ['1John.4.1.0', '1John.4.1.1', '1John.4.1.2', '1John.4.1.3'], confidence: 'high' },
        { id: '1John.4.1.en.idi.1', text: 'but test the spirits to see whether they are from God.', position: 1, sourceTokenIds: ['1John.4.1.4', '1John.4.1.5', '1John.4.1.6'], confidence: 'high' },
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

export const john1_4_1_verse = {
  ref: '1John.4.1',
  sourceTokens: john1_4_1_tokens,
  translation: john1_4_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 4:7 – Let us love one another, for love is from God
 * ──────────────────────────────────────────────────────────── */

export const john1_4_7_tokens: SourceToken[] = [
  {
    id: '1John.4.7.0',
    language: 'greek',
    text: 'Ἀγαπητοί',
    transliteration: 'Agapētoi',
    lemma: 'ἀγαπητός',
    lemmaTranslit: 'agapētos',
    gloss: 'beloved',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', case: 'vocative' },
    strongs: 'G27',
    position: 0,
  },
  {
    id: '1John.4.7.1',
    language: 'greek',
    text: 'ἀγαπῶμεν',
    transliteration: 'agapōmen',
    lemma: 'ἀγαπάω',
    lemmaTranslit: 'agapaō',
    gloss: 'let us love',
    morphology: { pos: 'verb', person: '1', number: 'plural', tense: 'present', voice: 'active', mood: 'subjunctive' },
    strongs: 'G25',
    position: 1,
  },
  {
    id: '1John.4.7.2',
    language: 'greek',
    text: 'ἀλλήλους',
    transliteration: 'allēlous',
    lemma: 'ἀλλήλων',
    lemmaTranslit: 'allēlōn',
    gloss: 'one another',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'plural', case: 'accusative' },
    strongs: 'G240',
    position: 2,
  },
  {
    id: '1John.4.7.3',
    language: 'greek',
    text: 'ἡ',
    transliteration: 'hē',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G3588',
    position: 3,
  },
  {
    id: '1John.4.7.4',
    language: 'greek',
    text: 'ἀγάπη',
    transliteration: 'agapē',
    lemma: 'ἀγάπη',
    lemmaTranslit: 'agapē',
    gloss: 'love',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G26',
    position: 4,
  },
  {
    id: '1John.4.7.5',
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

export const john1_4_7_translation: VerseTranslation = {
  verseRef: '1John.4.7',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Beloved, let us love one another, because love is from God.',
      spans: [
        { id: '1John.4.7.en.lit.0', text: 'Beloved, let us love one another,', position: 0, sourceTokenIds: ['1John.4.7.0', '1John.4.7.1', '1John.4.7.2'], confidence: 'high' },
        { id: '1John.4.7.en.lit.1', text: 'because love is from God.', position: 1, sourceTokenIds: ['1John.4.7.3', '1John.4.7.4', '1John.4.7.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Beloved, let us love one another, for love is from God, and whoever loves has been born of God and knows God.',
      spans: [
        { id: '1John.4.7.en.idi.0', text: 'Beloved, let us love one another,', position: 0, sourceTokenIds: ['1John.4.7.0', '1John.4.7.1', '1John.4.7.2'], confidence: 'high' },
        { id: '1John.4.7.en.idi.1', text: 'for love is from God,', position: 1, sourceTokenIds: ['1John.4.7.3', '1John.4.7.4', '1John.4.7.5'], confidence: 'high' },
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

export const john1_4_7_verse = {
  ref: '1John.4.7',
  sourceTokens: john1_4_7_tokens,
  translation: john1_4_7_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 4:8 – God is love
 * ──────────────────────────────────────────────────────────── */

export const john1_4_8_tokens: SourceToken[] = [
  {
    id: '1John.4.8.0',
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
    id: '1John.4.8.1',
    language: 'greek',
    text: 'μὴ',
    transliteration: 'mē',
    lemma: 'μή',
    lemmaTranslit: 'mē',
    gloss: 'not',
    morphology: { pos: 'adverb' },
    strongs: 'G3361',
    position: 1,
  },
  {
    id: '1John.4.8.2',
    language: 'greek',
    text: 'ἀγαπῶν',
    transliteration: 'agapōn',
    lemma: 'ἀγαπάω',
    lemmaTranslit: 'agapaō',
    gloss: 'loving',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'participle' },
    strongs: 'G25',
    position: 2,
  },
  {
    id: '1John.4.8.3',
    language: 'greek',
    text: 'ἔγνω',
    transliteration: 'egnō',
    lemma: 'γινώσκω',
    lemmaTranslit: 'ginōskō',
    gloss: 'knew / has known',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G1097',
    position: 3,
  },
  {
    id: '1John.4.8.4',
    language: 'greek',
    text: 'θεόν',
    transliteration: 'theon',
    lemma: 'θεός',
    lemmaTranslit: 'theos',
    gloss: 'God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G2316',
    position: 4,
  },
  {
    id: '1John.4.8.5',
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
    id: '1John.4.8.6',
    language: 'greek',
    text: 'θεὸς',
    transliteration: 'theos',
    lemma: 'θεός',
    lemmaTranslit: 'theos',
    gloss: 'God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G2316',
    position: 6,
  },
  {
    id: '1John.4.8.7',
    language: 'greek',
    text: 'ἀγάπη',
    transliteration: 'agapē',
    lemma: 'ἀγάπη',
    lemmaTranslit: 'agapē',
    gloss: 'love',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G26',
    position: 7,
  },
];

export const john1_4_8_translation: VerseTranslation = {
  verseRef: '1John.4.8',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'The one not loving did not know God, because God is love.',
      spans: [
        { id: '1John.4.8.en.lit.0', text: 'The one not loving', position: 0, sourceTokenIds: ['1John.4.8.0', '1John.4.8.1', '1John.4.8.2'], confidence: 'high' },
        { id: '1John.4.8.en.lit.1', text: 'did not know God,', position: 1, sourceTokenIds: ['1John.4.8.3', '1John.4.8.4'], confidence: 'high' },
        { id: '1John.4.8.en.lit.2', text: 'because God is love.', position: 2, sourceTokenIds: ['1John.4.8.5', '1John.4.8.6', '1John.4.8.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Anyone who does not love does not know God, because God is love.',
      spans: [
        { id: '1John.4.8.en.idi.0', text: 'Anyone who does not love', position: 0, sourceTokenIds: ['1John.4.8.0', '1John.4.8.1', '1John.4.8.2'], confidence: 'high' },
        { id: '1John.4.8.en.idi.1', text: 'does not know God,', position: 1, sourceTokenIds: ['1John.4.8.3', '1John.4.8.4'], confidence: 'high' },
        { id: '1John.4.8.en.idi.2', text: 'because God is love.', position: 2, sourceTokenIds: ['1John.4.8.5', '1John.4.8.6', '1John.4.8.7'], confidence: 'high' },
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

export const john1_4_8_notes: StudyNote[] = [
  {
    id: '1John.4.8.note.1',
    verseRef: '1John.4.8',
    sourceTokenIds: ['1John.4.8.7', '1John.4.8.6'],
    category: 'theological',
    title: "ὁ θεὸς ἀγάπη ἐστίν — God Is Love",
    content: "The declaration ὁ θεὸς ἀγάπη ἐστίν (\"God is love\") is one of the most profound theological statements in Scripture. Note the word order: the article ὁ with θεός marks it as the subject, while ἀγάπη (G26) without an article functions as a predicate nominative — God is characterized by love, not that love is God. This is an essential attribute statement: love is not merely something God does but something God is. The noun ἀγάπη denotes self-giving, unconditional love — distinct from ἔρως (desire) or φιλία (friendship). John repeats this declaration in v.16, forming the theological center of the epistle.",
    confidence: 'high',
    authorType: 'ai',
    metadata: {
      generatedAt: new Date().toISOString(),
      engineId: 'open-bible-notes',
    },
  },
];

export const john1_4_8_verse = {
  ref: '1John.4.8',
  sourceTokens: john1_4_8_tokens,
  translation: john1_4_8_translation,
  notes: john1_4_8_notes,
};

/* ────────────────────────────────────────────────────────────
 * Verse 4:10 – In this is love: he loved us and sent his Son
 * ──────────────────────────────────────────────────────────── */

export const john1_4_10_tokens: SourceToken[] = [
  {
    id: '1John.4.10.0',
    language: 'greek',
    text: 'ἐν',
    transliteration: 'en',
    lemma: 'ἐν',
    lemmaTranslit: 'en',
    gloss: 'in',
    morphology: { pos: 'preposition' },
    strongs: 'G1722',
    position: 0,
  },
  {
    id: '1John.4.10.1',
    language: 'greek',
    text: 'τούτῳ',
    transliteration: 'toutō',
    lemma: 'οὗτος',
    lemmaTranslit: 'houtos',
    gloss: 'this',
    morphology: { pos: 'pronoun', gender: 'neuter', number: 'singular', case: 'dative' },
    strongs: 'G3778',
    position: 1,
  },
  {
    id: '1John.4.10.2',
    language: 'greek',
    text: 'ἡ',
    transliteration: 'hē',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G3588',
    position: 2,
  },
  {
    id: '1John.4.10.3',
    language: 'greek',
    text: 'ἀγάπη',
    transliteration: 'agapē',
    lemma: 'ἀγάπη',
    lemmaTranslit: 'agapē',
    gloss: 'love',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G26',
    position: 3,
  },
  {
    id: '1John.4.10.4',
    language: 'greek',
    text: 'ἠγάπησεν',
    transliteration: 'ēgapēsen',
    lemma: 'ἀγαπάω',
    lemmaTranslit: 'agapaō',
    gloss: 'he loved',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G25',
    position: 4,
  },
  {
    id: '1John.4.10.5',
    language: 'greek',
    text: 'ἀπέστειλεν',
    transliteration: 'apesteilen',
    lemma: 'ἀποστέλλω',
    lemmaTranslit: 'apostellō',
    gloss: 'sent',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G649',
    position: 5,
  },
  {
    id: '1John.4.10.6',
    language: 'greek',
    text: 'υἱὸν',
    transliteration: 'huion',
    lemma: 'υἱός',
    lemmaTranslit: 'huios',
    gloss: 'Son',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G5207',
    position: 6,
  },
];

export const john1_4_10_translation: VerseTranslation = {
  verseRef: '1John.4.10',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'In this is love, not that we loved God but that he loved us and sent his Son as a propitiation for our sins.',
      spans: [
        { id: '1John.4.10.en.lit.0', text: 'In this is love,', position: 0, sourceTokenIds: ['1John.4.10.0', '1John.4.10.1', '1John.4.10.2', '1John.4.10.3'], confidence: 'high' },
        { id: '1John.4.10.en.lit.1', text: 'he loved us', position: 1, sourceTokenIds: ['1John.4.10.4'], confidence: 'high' },
        { id: '1John.4.10.en.lit.2', text: 'and sent his Son', position: 2, sourceTokenIds: ['1John.4.10.5', '1John.4.10.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'In this is love, not that we have loved God but that he loved us and sent his Son to be the propitiation for our sins.',
      spans: [
        { id: '1John.4.10.en.idi.0', text: 'In this is love,', position: 0, sourceTokenIds: ['1John.4.10.0', '1John.4.10.1', '1John.4.10.2', '1John.4.10.3'], confidence: 'high' },
        { id: '1John.4.10.en.idi.1', text: 'not that we have loved God but that he loved us', position: 1, sourceTokenIds: ['1John.4.10.4'], confidence: 'high' },
        { id: '1John.4.10.en.idi.2', text: 'and sent his Son to be the propitiation for our sins.', position: 2, sourceTokenIds: ['1John.4.10.5', '1John.4.10.6'], confidence: 'high' },
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

export const john1_4_10_verse = {
  ref: '1John.4.10',
  sourceTokens: john1_4_10_tokens,
  translation: john1_4_10_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 4:16 – God is love, and whoever abides in love abides in God
 * ──────────────────────────────────────────────────────────── */

export const john1_4_16_tokens: SourceToken[] = [
  {
    id: '1John.4.16.0',
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
    id: '1John.4.16.1',
    language: 'greek',
    text: 'θεὸς',
    transliteration: 'theos',
    lemma: 'θεός',
    lemmaTranslit: 'theos',
    gloss: 'God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G2316',
    position: 1,
  },
  {
    id: '1John.4.16.2',
    language: 'greek',
    text: 'ἀγάπη',
    transliteration: 'agapē',
    lemma: 'ἀγάπη',
    lemmaTranslit: 'agapē',
    gloss: 'love',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G26',
    position: 2,
  },
  {
    id: '1John.4.16.3',
    language: 'greek',
    text: 'μένων',
    transliteration: 'menōn',
    lemma: 'μένω',
    lemmaTranslit: 'menō',
    gloss: 'abiding',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'participle' },
    strongs: 'G3306',
    position: 3,
  },
  {
    id: '1John.4.16.4',
    language: 'greek',
    text: 'ἀγάπῃ',
    transliteration: 'agapē',
    lemma: 'ἀγάπη',
    lemmaTranslit: 'agapē',
    gloss: 'in love',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G26',
    position: 4,
  },
  {
    id: '1John.4.16.5',
    language: 'greek',
    text: 'μένει',
    transliteration: 'menei',
    lemma: 'μένω',
    lemmaTranslit: 'menō',
    gloss: 'abides',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G3306',
    position: 5,
  },
];

export const john1_4_16_translation: VerseTranslation = {
  verseRef: '1John.4.16',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'God is love, and the one abiding in love abides in God, and God abides in him.',
      spans: [
        { id: '1John.4.16.en.lit.0', text: 'God is love,', position: 0, sourceTokenIds: ['1John.4.16.0', '1John.4.16.1', '1John.4.16.2'], confidence: 'high' },
        { id: '1John.4.16.en.lit.1', text: 'and the one abiding in love', position: 1, sourceTokenIds: ['1John.4.16.3', '1John.4.16.4'], confidence: 'high' },
        { id: '1John.4.16.en.lit.2', text: 'abides in God, and God abides in him.', position: 2, sourceTokenIds: ['1John.4.16.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'God is love, and whoever abides in love abides in God, and God abides in him.',
      spans: [
        { id: '1John.4.16.en.idi.0', text: 'God is love,', position: 0, sourceTokenIds: ['1John.4.16.0', '1John.4.16.1', '1John.4.16.2'], confidence: 'high' },
        { id: '1John.4.16.en.idi.1', text: 'and whoever abides in love abides in God,', position: 1, sourceTokenIds: ['1John.4.16.3', '1John.4.16.4', '1John.4.16.5'], confidence: 'high' },
        { id: '1John.4.16.en.idi.2', text: 'and God abides in him.', position: 2, sourceTokenIds: [], confidence: 'medium' },
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

export const john1_4_16_notes: StudyNote[] = [
  {
    id: '1John.4.16.note.1',
    verseRef: '1John.4.16',
    sourceTokenIds: ['1John.4.16.3', '1John.4.16.4'],
    category: 'theological',
    title: "τελεία ἀγάπη ἔξω βάλλει τὸν φόβον — Perfect Love Casts Out Fear",
    content: "In the immediate context (v.18), John declares ἡ τελεία ἀγάπη ἔξω βάλλει τὸν φόβον (\"perfect love casts out fear\"). The adjective τελεία (from τέλειος, G5046) means \"complete, mature, having reached its goal.\" Love that has been brought to completion — through abiding in God (v.16) — eliminates fear (φόβος, G5401), specifically the fear of judgment. The logic is relational: the one who abides (μένω) in love abides in God (v.16), and since God is love (v.8, v.16), there is no room for fear in that relationship. Fear involves punishment (κόλασιν), but mature love replaces anxiety with confident assurance.",
    confidence: 'high',
    authorType: 'ai',
    metadata: {
      generatedAt: new Date().toISOString(),
      engineId: 'open-bible-notes',
    },
  },
];

export const john1_4_16_verse = {
  ref: '1John.4.16',
  sourceTokens: john1_4_16_tokens,
  translation: john1_4_16_translation,
  notes: john1_4_16_notes,
};

/* ────────────────────────────────────────────────────────────
 * Verse 4:19 – We love because he first loved us
 * ──────────────────────────────────────────────────────────── */

export const john1_4_19_tokens: SourceToken[] = [
  {
    id: '1John.4.19.0',
    language: 'greek',
    text: 'ἡμεῖς',
    transliteration: 'hēmeis',
    lemma: 'ἐγώ',
    lemmaTranslit: 'egō',
    gloss: 'we',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'plural', case: 'nominative' },
    strongs: 'G1473',
    position: 0,
  },
  {
    id: '1John.4.19.1',
    language: 'greek',
    text: 'ἀγαπῶμεν',
    transliteration: 'agapōmen',
    lemma: 'ἀγαπάω',
    lemmaTranslit: 'agapaō',
    gloss: 'love',
    morphology: { pos: 'verb', person: '1', number: 'plural', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G25',
    position: 1,
  },
  {
    id: '1John.4.19.2',
    language: 'greek',
    text: 'αὐτὸς',
    transliteration: 'autos',
    lemma: 'αὐτός',
    lemmaTranslit: 'autos',
    gloss: 'he',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G846',
    position: 2,
  },
  {
    id: '1John.4.19.3',
    language: 'greek',
    text: 'πρῶτος',
    transliteration: 'prōtos',
    lemma: 'πρῶτος',
    lemmaTranslit: 'prōtos',
    gloss: 'first',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G4413',
    position: 3,
  },
  {
    id: '1John.4.19.4',
    language: 'greek',
    text: 'ἠγάπησεν',
    transliteration: 'ēgapēsen',
    lemma: 'ἀγαπάω',
    lemmaTranslit: 'agapaō',
    gloss: 'loved',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G25',
    position: 4,
  },
];

export const john1_4_19_translation: VerseTranslation = {
  verseRef: '1John.4.19',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'We love because he first loved us.',
      spans: [
        { id: '1John.4.19.en.lit.0', text: 'We love', position: 0, sourceTokenIds: ['1John.4.19.0', '1John.4.19.1'], confidence: 'high' },
        { id: '1John.4.19.en.lit.1', text: 'because he first loved us.', position: 1, sourceTokenIds: ['1John.4.19.2', '1John.4.19.3', '1John.4.19.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'We love because he first loved us.',
      spans: [
        { id: '1John.4.19.en.idi.0', text: 'We love', position: 0, sourceTokenIds: ['1John.4.19.0', '1John.4.19.1'], confidence: 'high' },
        { id: '1John.4.19.en.idi.1', text: 'because he first loved us.', position: 1, sourceTokenIds: ['1John.4.19.2', '1John.4.19.3', '1John.4.19.4'], confidence: 'high' },
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

export const john1_4_19_verse = {
  ref: '1John.4.19',
  sourceTokens: john1_4_19_tokens,
  translation: john1_4_19_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Export combined verses
 * ──────────────────────────────────────────────────────────── */

export const john1_4_1_21_verses = [
  john1_4_1_verse,
  john1_4_7_verse,
  john1_4_8_verse,
  john1_4_10_verse,
  john1_4_16_verse,
  john1_4_19_verse,
];

export default john1_4_1_21_verses;
