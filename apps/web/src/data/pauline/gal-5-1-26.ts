// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 5:1 – For freedom Christ has set us free
 * ──────────────────────────────────────────────────────────── */

export const gal5_1_tokens: SourceToken[] = [
  {
    id: 'Gal.5.1.0',
    language: 'greek',
    text: 'Τῇ',
    transliteration: 'Tē',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G3588',
    position: 0,
  },
  {
    id: 'Gal.5.1.1',
    language: 'greek',
    text: 'ἐλευθερίᾳ',
    transliteration: 'eleutheria',
    lemma: 'ἐλευθερία',
    lemmaTranslit: 'eleutheria',
    gloss: 'freedom',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G1657',
    position: 1,
  },
  {
    id: 'Gal.5.1.2',
    language: 'greek',
    text: 'ἡμᾶς',
    transliteration: 'hēmas',
    lemma: 'ἐγώ',
    lemmaTranslit: 'egō',
    gloss: 'us',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'plural', case: 'accusative' },
    strongs: 'G1473',
    position: 2,
  },
  {
    id: 'Gal.5.1.3',
    language: 'greek',
    text: 'Χριστὸς',
    transliteration: 'Christos',
    lemma: 'Χριστός',
    lemmaTranslit: 'Christos',
    gloss: 'Christ',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G5547',
    position: 3,
  },
  {
    id: 'Gal.5.1.4',
    language: 'greek',
    text: 'ἠλευθέρωσεν',
    transliteration: 'ēleutherōsen',
    lemma: 'ἐλευθερόω',
    lemmaTranslit: 'eleutheroō',
    gloss: 'set free',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G1659',
    position: 4,
  },
  {
    id: 'Gal.5.1.5',
    language: 'greek',
    text: 'στήκετε',
    transliteration: 'stēkete',
    lemma: 'στήκω',
    lemmaTranslit: 'stēkō',
    gloss: 'stand firm',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'present', voice: 'active', mood: 'imperative' },
    strongs: 'G4739',
    position: 5,
  },
];

export const gal5_1_translation: VerseTranslation = {
  verseRef: 'Gal.5.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'For the freedom Christ us set free; stand firm therefore and do not again a yoke of slavery be held.',
      spans: [
        { id: 'Gal.5.1.en.lit.0', text: 'For the freedom', position: 0, sourceTokenIds: ['Gal.5.1.0', 'Gal.5.1.1'], confidence: 'high' },
        { id: 'Gal.5.1.en.lit.1', text: 'Christ us set free;', position: 1, sourceTokenIds: ['Gal.5.1.2', 'Gal.5.1.3', 'Gal.5.1.4'], confidence: 'high' },
        { id: 'Gal.5.1.en.lit.2', text: 'stand firm', position: 2, sourceTokenIds: ['Gal.5.1.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'For freedom Christ has set us free; stand firm and do not submit again to a yoke of slavery.',
      spans: [
        { id: 'Gal.5.1.en.idi.0', text: 'For freedom Christ has set us free;', position: 0, sourceTokenIds: ['Gal.5.1.0', 'Gal.5.1.1', 'Gal.5.1.2', 'Gal.5.1.3', 'Gal.5.1.4'], confidence: 'high' },
        { id: 'Gal.5.1.en.idi.1', text: 'stand firm and do not submit again to a yoke of slavery.', position: 1, sourceTokenIds: ['Gal.5.1.5'], confidence: 'high' },
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

export const gal5_1_notes: StudyNote[] = [
  { id: 'Gal.5.1.note.1', verseRef: 'Gal.5.1', sourceTokenIds: ['Gal.5.1.1'], category: 'lexical', title: 'ἐλευθερία — Freedom', content: "The dative ἐλευθερίᾳ is a dative of purpose or advantage: Christ freed us \"for freedom.\" Paul stresses that liberty is not merely release from the Law but the positive goal of the believer's new life in the Spirit.", confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const gal5_1_verse = {
  ref: 'Gal.5.1',
  sourceTokens: gal5_1_tokens,
  translation: gal5_1_translation,
  notes: gal5_1_notes,
};

/* ────────────────────────────────────────────────────────────
 * Verse 5:13 – Called to freedom, but serve one another
 * ──────────────────────────────────────────────────────────── */

export const gal5_13_tokens: SourceToken[] = [
  {
    id: 'Gal.5.13.0',
    language: 'greek',
    text: 'ἐπ',
    transliteration: 'ep',
    lemma: 'ἐπί',
    lemmaTranslit: 'epi',
    gloss: 'to',
    morphology: { pos: 'preposition' },
    strongs: 'G1909',
    position: 0,
  },
  {
    id: 'Gal.5.13.1',
    language: 'greek',
    text: 'ἐλευθερίᾳ',
    transliteration: 'eleutheria',
    lemma: 'ἐλευθερία',
    lemmaTranslit: 'eleutheria',
    gloss: 'freedom',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G1657',
    position: 1,
  },
  {
    id: 'Gal.5.13.2',
    language: 'greek',
    text: 'ἐκλήθητε',
    transliteration: 'eklēthēte',
    lemma: 'καλέω',
    lemmaTranslit: 'kaleō',
    gloss: 'you were called',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'aorist', voice: 'passive', mood: 'indicative' },
    strongs: 'G2564',
    position: 2,
  },
  {
    id: 'Gal.5.13.3',
    language: 'greek',
    text: 'ἀδελφοί',
    transliteration: 'adelphoi',
    lemma: 'ἀδελφός',
    lemmaTranslit: 'adelphos',
    gloss: 'brothers',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', case: 'vocative' },
    strongs: 'G80',
    position: 3,
  },
  {
    id: 'Gal.5.13.4',
    language: 'greek',
    text: 'δουλεύετε',
    transliteration: 'douleuete',
    lemma: 'δουλεύω',
    lemmaTranslit: 'douleuō',
    gloss: 'serve',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'present', voice: 'active', mood: 'imperative' },
    strongs: 'G1398',
    position: 4,
  },
  {
    id: 'Gal.5.13.5',
    language: 'greek',
    text: 'ἀλλήλοις',
    transliteration: 'allēlois',
    lemma: 'ἀλλήλων',
    lemmaTranslit: 'allēlōn',
    gloss: 'one another',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'plural', case: 'dative' },
    strongs: 'G240',
    position: 5,
  },
];

export const gal5_13_translation: VerseTranslation = {
  verseRef: 'Gal.5.13',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'For to freedom you were called, brothers; only not the freedom for an opportunity to the flesh, but through love serve one another.',
      spans: [
        { id: 'Gal.5.13.en.lit.0', text: 'For to freedom', position: 0, sourceTokenIds: ['Gal.5.13.0', 'Gal.5.13.1'], confidence: 'high' },
        { id: 'Gal.5.13.en.lit.1', text: 'you were called, brothers;', position: 1, sourceTokenIds: ['Gal.5.13.2', 'Gal.5.13.3'], confidence: 'high' },
        { id: 'Gal.5.13.en.lit.2', text: 'through love serve one another.', position: 2, sourceTokenIds: ['Gal.5.13.4', 'Gal.5.13.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'You were called to freedom, brothers. Only do not use your freedom as an opportunity for the flesh, but through love serve one another.',
      spans: [
        { id: 'Gal.5.13.en.idi.0', text: 'You were called to freedom, brothers.', position: 0, sourceTokenIds: ['Gal.5.13.0', 'Gal.5.13.1', 'Gal.5.13.2', 'Gal.5.13.3'], confidence: 'high' },
        { id: 'Gal.5.13.en.idi.1', text: 'Only do not use your freedom as an opportunity for the flesh, but through love serve one another.', position: 1, sourceTokenIds: ['Gal.5.13.4', 'Gal.5.13.5'], confidence: 'high' },
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

export const gal5_13_verse = {
  ref: 'Gal.5.13',
  sourceTokens: gal5_13_tokens,
  translation: gal5_13_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 5:16 – Walk by the Spirit
 * ──────────────────────────────────────────────────────────── */

export const gal5_16_tokens: SourceToken[] = [
  {
    id: 'Gal.5.16.0',
    language: 'greek',
    text: 'πνεύματι',
    transliteration: 'pneumati',
    lemma: 'πνεῦμα',
    lemmaTranslit: 'pneuma',
    gloss: 'Spirit',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'dative' },
    strongs: 'G4151',
    position: 0,
  },
  {
    id: 'Gal.5.16.1',
    language: 'greek',
    text: 'περιπατεῖτε',
    transliteration: 'peripateite',
    lemma: 'περιπατέω',
    lemmaTranslit: 'peripateō',
    gloss: 'walk',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'present', voice: 'active', mood: 'imperative' },
    strongs: 'G4043',
    position: 1,
  },
  {
    id: 'Gal.5.16.2',
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
    id: 'Gal.5.16.3',
    language: 'greek',
    text: 'ἐπιθυμίαν',
    transliteration: 'epithymian',
    lemma: 'ἐπιθυμία',
    lemmaTranslit: 'epithymia',
    gloss: 'desire',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G1939',
    position: 3,
  },
  {
    id: 'Gal.5.16.4',
    language: 'greek',
    text: 'σαρκὸς',
    transliteration: 'sarkos',
    lemma: 'σάρξ',
    lemmaTranslit: 'sarx',
    gloss: 'of the flesh',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G4561',
    position: 4,
  },
  {
    id: 'Gal.5.16.5',
    language: 'greek',
    text: 'τελέσητε',
    transliteration: 'telesēte',
    lemma: 'τελέω',
    lemmaTranslit: 'teleō',
    gloss: 'you will gratify',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'aorist', voice: 'active', mood: 'subjunctive' },
    strongs: 'G5055',
    position: 5,
  },
];

export const gal5_16_translation: VerseTranslation = {
  verseRef: 'Gal.5.16',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'By the Spirit walk, and the desire of the flesh you will by no means fulfill.',
      spans: [
        { id: 'Gal.5.16.en.lit.0', text: 'By the Spirit walk,', position: 0, sourceTokenIds: ['Gal.5.16.0', 'Gal.5.16.1'], confidence: 'high' },
        { id: 'Gal.5.16.en.lit.1', text: 'and', position: 1, sourceTokenIds: ['Gal.5.16.2'], confidence: 'high' },
        { id: 'Gal.5.16.en.lit.2', text: 'the desire of the flesh you will by no means fulfill.', position: 2, sourceTokenIds: ['Gal.5.16.3', 'Gal.5.16.4', 'Gal.5.16.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Walk by the Spirit, and you will not gratify the desires of the flesh.',
      spans: [
        { id: 'Gal.5.16.en.idi.0', text: 'Walk by the Spirit,', position: 0, sourceTokenIds: ['Gal.5.16.0', 'Gal.5.16.1'], confidence: 'high' },
        { id: 'Gal.5.16.en.idi.1', text: 'and you will not gratify the desires of the flesh.', position: 1, sourceTokenIds: ['Gal.5.16.2', 'Gal.5.16.3', 'Gal.5.16.4', 'Gal.5.16.5'], confidence: 'high' },
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

export const gal5_16_verse = {
  ref: 'Gal.5.16',
  sourceTokens: gal5_16_tokens,
  translation: gal5_16_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 5:22 – The fruit of the Spirit
 * ──────────────────────────────────────────────────────────── */

export const gal5_22_tokens: SourceToken[] = [
  {
    id: 'Gal.5.22.0',
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
    id: 'Gal.5.22.1',
    language: 'greek',
    text: 'καρπὸς',
    transliteration: 'karpos',
    lemma: 'καρπός',
    lemmaTranslit: 'karpos',
    gloss: 'fruit',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G2590',
    position: 1,
  },
  {
    id: 'Gal.5.22.2',
    language: 'greek',
    text: 'τοῦ',
    transliteration: 'tou',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'of the',
    morphology: { pos: 'article', gender: 'neuter', number: 'singular', case: 'genitive' },
    strongs: 'G3588',
    position: 2,
  },
  {
    id: 'Gal.5.22.3',
    language: 'greek',
    text: 'πνεύματός',
    transliteration: 'pneumatos',
    lemma: 'πνεῦμα',
    lemmaTranslit: 'pneuma',
    gloss: 'Spirit',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'genitive' },
    strongs: 'G4151',
    position: 3,
  },
  {
    id: 'Gal.5.22.4',
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
    id: 'Gal.5.22.5',
    language: 'greek',
    text: 'χαρά',
    transliteration: 'chara',
    lemma: 'χαρά',
    lemmaTranslit: 'chara',
    gloss: 'joy',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G5479',
    position: 5,
  },
  {
    id: 'Gal.5.22.6',
    language: 'greek',
    text: 'εἰρήνη',
    transliteration: 'eirēnē',
    lemma: 'εἰρήνη',
    lemmaTranslit: 'eirēnē',
    gloss: 'peace',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G1515',
    position: 6,
  },
  {
    id: 'Gal.5.22.7',
    language: 'greek',
    text: 'μακροθυμία',
    transliteration: 'makrothymia',
    lemma: 'μακροθυμία',
    lemmaTranslit: 'makrothymia',
    gloss: 'patience',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G3115',
    position: 7,
  },
];

export const gal5_22_translation: VerseTranslation = {
  verseRef: 'Gal.5.22',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness.',
      spans: [
        { id: 'Gal.5.22.en.lit.0', text: 'But the fruit', position: 0, sourceTokenIds: ['Gal.5.22.0', 'Gal.5.22.1'], confidence: 'high' },
        { id: 'Gal.5.22.en.lit.1', text: 'of the Spirit', position: 1, sourceTokenIds: ['Gal.5.22.2', 'Gal.5.22.3'], confidence: 'high' },
        { id: 'Gal.5.22.en.lit.2', text: 'is love, joy, peace, patience,', position: 2, sourceTokenIds: ['Gal.5.22.4', 'Gal.5.22.5', 'Gal.5.22.6', 'Gal.5.22.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness.',
      spans: [
        { id: 'Gal.5.22.en.idi.0', text: 'But the fruit of the Spirit is', position: 0, sourceTokenIds: ['Gal.5.22.0', 'Gal.5.22.1', 'Gal.5.22.2', 'Gal.5.22.3'], confidence: 'high' },
        { id: 'Gal.5.22.en.idi.1', text: 'love, joy, peace, patience, kindness, goodness, faithfulness.', position: 1, sourceTokenIds: ['Gal.5.22.4', 'Gal.5.22.5', 'Gal.5.22.6', 'Gal.5.22.7'], confidence: 'high' },
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

export const gal5_22_notes: StudyNote[] = [
  { id: 'Gal.5.22.note.1', verseRef: 'Gal.5.22', sourceTokenIds: ['Gal.5.22.1', 'Gal.5.22.2', 'Gal.5.22.3'], category: 'theological', title: 'καρπὸς τοῦ πνεύματος — Fruit of the Spirit', content: "Paul uses the singular καρπός (fruit), not the plural, suggesting these virtues form a unified cluster produced by the Spirit rather than independent achievements. The contrast with the plural \"works\" (ἔργα) of the flesh in v.19 is deliberate.", confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const gal5_22_verse = {
  ref: 'Gal.5.22',
  sourceTokens: gal5_22_tokens,
  translation: gal5_22_translation,
  notes: gal5_22_notes,
};

/* ────────────────────────────────────────────────────────────
 * Verse 5:23 – Gentleness, self-control; against such there is no law
 * ──────────────────────────────────────────────────────────── */

export const gal5_23_tokens: SourceToken[] = [
  {
    id: 'Gal.5.23.0',
    language: 'greek',
    text: 'πραΰτης',
    transliteration: 'prautēs',
    lemma: 'πραΰτης',
    lemmaTranslit: 'prautēs',
    gloss: 'gentleness',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G4240',
    position: 0,
  },
  {
    id: 'Gal.5.23.1',
    language: 'greek',
    text: 'ἐγκράτεια',
    transliteration: 'enkrateia',
    lemma: 'ἐγκράτεια',
    lemmaTranslit: 'enkrateia',
    gloss: 'self-control',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G1466',
    position: 1,
  },
  {
    id: 'Gal.5.23.2',
    language: 'greek',
    text: 'κατὰ',
    transliteration: 'kata',
    lemma: 'κατά',
    lemmaTranslit: 'kata',
    gloss: 'against',
    morphology: { pos: 'preposition' },
    strongs: 'G2596',
    position: 2,
  },
  {
    id: 'Gal.5.23.3',
    language: 'greek',
    text: 'τοιούτων',
    transliteration: 'toioutōn',
    lemma: 'τοιοῦτος',
    lemmaTranslit: 'toioutos',
    gloss: 'such things',
    morphology: { pos: 'pronoun', gender: 'neuter', number: 'plural', case: 'genitive' },
    strongs: 'G5108',
    position: 3,
  },
  {
    id: 'Gal.5.23.4',
    language: 'greek',
    text: 'οὐκ',
    transliteration: 'ouk',
    lemma: 'οὐ',
    lemmaTranslit: 'ou',
    gloss: 'not',
    morphology: { pos: 'adverb' },
    strongs: 'G3756',
    position: 4,
  },
  {
    id: 'Gal.5.23.5',
    language: 'greek',
    text: 'ἔστιν',
    transliteration: 'estin',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'there is',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G1510',
    position: 5,
  },
  {
    id: 'Gal.5.23.6',
    language: 'greek',
    text: 'νόμος',
    transliteration: 'nomos',
    lemma: 'νόμος',
    lemmaTranslit: 'nomos',
    gloss: 'law',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3551',
    position: 6,
  },
];

export const gal5_23_translation: VerseTranslation = {
  verseRef: 'Gal.5.23',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'gentleness, self-control; against such things not there is law.',
      spans: [
        { id: 'Gal.5.23.en.lit.0', text: 'gentleness, self-control;', position: 0, sourceTokenIds: ['Gal.5.23.0', 'Gal.5.23.1'], confidence: 'high' },
        { id: 'Gal.5.23.en.lit.1', text: 'against such things', position: 1, sourceTokenIds: ['Gal.5.23.2', 'Gal.5.23.3'], confidence: 'high' },
        { id: 'Gal.5.23.en.lit.2', text: 'not there is law.', position: 2, sourceTokenIds: ['Gal.5.23.4', 'Gal.5.23.5', 'Gal.5.23.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'gentleness, self-control; against such things there is no law.',
      spans: [
        { id: 'Gal.5.23.en.idi.0', text: 'gentleness, self-control;', position: 0, sourceTokenIds: ['Gal.5.23.0', 'Gal.5.23.1'], confidence: 'high' },
        { id: 'Gal.5.23.en.idi.1', text: 'against such things there is no law.', position: 1, sourceTokenIds: ['Gal.5.23.2', 'Gal.5.23.3', 'Gal.5.23.4', 'Gal.5.23.5', 'Gal.5.23.6'], confidence: 'high' },
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

export const gal5_23_verse = {
  ref: 'Gal.5.23',
  sourceTokens: gal5_23_tokens,
  translation: gal5_23_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 5:25 – Keep in step with the Spirit
 * ──────────────────────────────────────────────────────────── */

export const gal5_25_tokens: SourceToken[] = [
  {
    id: 'Gal.5.25.0',
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
    id: 'Gal.5.25.1',
    language: 'greek',
    text: 'ζῶμεν',
    transliteration: 'zōmen',
    lemma: 'ζάω',
    lemmaTranslit: 'zaō',
    gloss: 'we live',
    morphology: { pos: 'verb', person: '1', number: 'plural', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G2198',
    position: 1,
  },
  {
    id: 'Gal.5.25.2',
    language: 'greek',
    text: 'πνεύματι',
    transliteration: 'pneumati',
    lemma: 'πνεῦμα',
    lemmaTranslit: 'pneuma',
    gloss: 'by the Spirit',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'dative' },
    strongs: 'G4151',
    position: 2,
  },
  {
    id: 'Gal.5.25.3',
    language: 'greek',
    text: 'πνεύματι',
    transliteration: 'pneumati',
    lemma: 'πνεῦμα',
    lemmaTranslit: 'pneuma',
    gloss: 'with the Spirit',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'dative' },
    strongs: 'G4151',
    position: 3,
  },
  {
    id: 'Gal.5.25.4',
    language: 'greek',
    text: 'στοιχῶμεν',
    transliteration: 'stoichōmen',
    lemma: 'στοιχέω',
    lemmaTranslit: 'stoicheō',
    gloss: 'let us walk in step',
    morphology: { pos: 'verb', person: '1', number: 'plural', tense: 'present', voice: 'active', mood: 'subjunctive' },
    strongs: 'G4748',
    position: 4,
  },
];

export const gal5_25_translation: VerseTranslation = {
  verseRef: 'Gal.5.25',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'If we live by the Spirit, by the Spirit also let us walk in step.',
      spans: [
        { id: 'Gal.5.25.en.lit.0', text: 'If we live', position: 0, sourceTokenIds: ['Gal.5.25.0', 'Gal.5.25.1'], confidence: 'high' },
        { id: 'Gal.5.25.en.lit.1', text: 'by the Spirit,', position: 1, sourceTokenIds: ['Gal.5.25.2'], confidence: 'high' },
        { id: 'Gal.5.25.en.lit.2', text: 'by the Spirit also let us walk in step.', position: 2, sourceTokenIds: ['Gal.5.25.3', 'Gal.5.25.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'If we live by the Spirit, let us also keep in step with the Spirit.',
      spans: [
        { id: 'Gal.5.25.en.idi.0', text: 'If we live by the Spirit,', position: 0, sourceTokenIds: ['Gal.5.25.0', 'Gal.5.25.1', 'Gal.5.25.2'], confidence: 'high' },
        { id: 'Gal.5.25.en.idi.1', text: 'let us also keep in step with the Spirit.', position: 1, sourceTokenIds: ['Gal.5.25.3', 'Gal.5.25.4'], confidence: 'high' },
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

export const gal5_25_verse = {
  ref: 'Gal.5.25',
  sourceTokens: gal5_25_tokens,
  translation: gal5_25_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Export combined verses
 * ──────────────────────────────────────────────────────────── */

export const galatians5_1_26_verses = [
  gal5_1_verse,
  gal5_13_verse,
  gal5_16_verse,
  gal5_22_verse,
  gal5_23_verse,
  gal5_25_verse,
];

export default galatians5_1_26_verses;
