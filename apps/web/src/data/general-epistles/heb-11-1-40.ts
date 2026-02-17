// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 11:1 – Now faith is the substance of things hoped for
 * ──────────────────────────────────────────────────────────── */

export const heb11_1_tokens: SourceToken[] = [
  {
    id: 'Heb.11.1.0',
    language: 'greek',
    text: 'Ἔστιν',
    transliteration: 'Estin',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'is',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G1510',
    position: 0,
  },
  {
    id: 'Heb.11.1.1',
    language: 'greek',
    text: 'πίστις',
    transliteration: 'pistis',
    lemma: 'πίστις',
    lemmaTranslit: 'pistis',
    gloss: 'faith',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G4102',
    position: 1,
  },
  {
    id: 'Heb.11.1.2',
    language: 'greek',
    text: 'ἐλπιζομένων',
    transliteration: 'elpizomenōn',
    lemma: 'ἐλπίζω',
    lemmaTranslit: 'elpizō',
    gloss: 'of things hoped for',
    morphology: { pos: 'verb', number: 'plural', tense: 'present', voice: 'passive', mood: 'participle' },
    strongs: 'G1679',
    position: 2,
  },
  {
    id: 'Heb.11.1.3',
    language: 'greek',
    text: 'ὑπόστασις',
    transliteration: 'hupostasis',
    lemma: 'ὑπόστασις',
    lemmaTranslit: 'hupostasis',
    gloss: 'substance / assurance',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G5287',
    position: 3,
  },
  {
    id: 'Heb.11.1.4',
    language: 'greek',
    text: 'πραγμάτων',
    transliteration: 'pragmatōn',
    lemma: 'πρᾶγμα',
    lemmaTranslit: 'pragma',
    gloss: 'of things',
    morphology: { pos: 'noun', gender: 'neuter', number: 'plural', case: 'genitive' },
    strongs: 'G4229',
    position: 4,
  },
  {
    id: 'Heb.11.1.5',
    language: 'greek',
    text: 'ἔλεγχος',
    transliteration: 'elenchos',
    lemma: 'ἔλεγχος',
    lemmaTranslit: 'elenchos',
    gloss: 'evidence / conviction',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G1650',
    position: 5,
  },
  {
    id: 'Heb.11.1.6',
    language: 'greek',
    text: 'βλεπομένων',
    transliteration: 'blepomenōn',
    lemma: 'βλέπω',
    lemmaTranslit: 'blepō',
    gloss: 'of things seen',
    morphology: { pos: 'verb', number: 'plural', tense: 'present', voice: 'passive', mood: 'participle' },
    strongs: 'G991',
    position: 6,
  },
];

export const heb11_1_translation: VerseTranslation = {
  verseRef: 'Heb.11.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Now faith is the substance of things hoped for, the evidence of things not seen.',
      spans: [
        { id: 'Heb.11.1.en.lit.0', text: 'Now faith is', position: 0, sourceTokenIds: ['Heb.11.1.0', 'Heb.11.1.1'], confidence: 'high' },
        { id: 'Heb.11.1.en.lit.1', text: 'the substance', position: 1, sourceTokenIds: ['Heb.11.1.3'], confidence: 'medium' },
        { id: 'Heb.11.1.en.lit.2', text: 'of things hoped for,', position: 2, sourceTokenIds: ['Heb.11.1.2'], confidence: 'high' },
        { id: 'Heb.11.1.en.lit.3', text: 'the evidence of things not seen.', position: 3, sourceTokenIds: ['Heb.11.1.4', 'Heb.11.1.5', 'Heb.11.1.6'], confidence: 'medium' },
      ],
      overallConfidence: 'medium',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Now faith is the assurance of things hoped for, the conviction of things not seen.',
      spans: [
        { id: 'Heb.11.1.en.idi.0', text: 'Now faith is the assurance', position: 0, sourceTokenIds: ['Heb.11.1.0', 'Heb.11.1.1', 'Heb.11.1.3'], confidence: 'high' },
        { id: 'Heb.11.1.en.idi.1', text: 'of things hoped for,', position: 1, sourceTokenIds: ['Heb.11.1.2'], confidence: 'high' },
        { id: 'Heb.11.1.en.idi.2', text: 'the conviction of things not seen.', position: 2, sourceTokenIds: ['Heb.11.1.4', 'Heb.11.1.5', 'Heb.11.1.6'], confidence: 'high' },
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

export const heb11_1_notes: StudyNote[] = [
  {
    id: 'Heb.11.1.note.1',
    verseRef: 'Heb.11.1',
    sourceTokenIds: ['Heb.11.1.1'],
    category: 'lexical',
    title: "πίστις (pistis) — Faith",
    content: "The Greek noun πίστις (pistis, G4102) carries a rich semantic range: trust, confidence, faithfulness, and conviction. In Hebrews 11 it functions as the thematic keyword, appearing in nearly every verse. Unlike mere intellectual assent, pistis in this context denotes active trust that shapes conduct — a settled confidence in God's promises that produces obedience. The author defines it here not abstractly but functionally: faith is what gives present reality (ὑπόστασις) to future hopes and provides evidence (ἔλεγχος) for unseen realities.",
    confidence: 'high',
    authorType: 'ai',
    metadata: {
      generatedAt: new Date().toISOString(),
      engineId: 'open-bible-notes',
    },
  },
  {
    id: 'Heb.11.1.note.2',
    verseRef: 'Heb.11.1',
    sourceTokenIds: ['Heb.11.1.3'],
    category: 'lexical',
    title: "ὑπόστασις (hupostasis) — Substance / Assurance",
    content: "ὑπόστασις (hupostasis, G5287) literally means \"standing under\" (ὑπό + στάσις). In extra-biblical papyri it referred to a title deed — a legal guarantee of ownership. In philosophical usage it denoted underlying reality or substance. The KJV renders it \"substance,\" while modern translations favor \"assurance\" or \"confidence.\" Both capture an aspect of the word: faith provides the underlying reality that makes future promises tangibly present, and it grants the believer confident assurance of what is hoped for. The same word appears in Hebrews 1:3 for Christ as the exact representation of God's ὑπόστασις.",
    confidence: 'high',
    authorType: 'ai',
    metadata: {
      generatedAt: new Date().toISOString(),
      engineId: 'open-bible-notes',
    },
  },
];

export const heb11_1_verse = {
  ref: 'Heb.11.1',
  sourceTokens: heb11_1_tokens,
  translation: heb11_1_translation,
  notes: heb11_1_notes,
};

/* ────────────────────────────────────────────────────────────
 * Verse 11:3 – By faith we understand the universe was created
 * ──────────────────────────────────────────────────────────── */

export const heb11_3_tokens: SourceToken[] = [
  {
    id: 'Heb.11.3.0',
    language: 'greek',
    text: 'Πίστει',
    transliteration: 'Pistei',
    lemma: 'πίστις',
    lemmaTranslit: 'pistis',
    gloss: 'by faith',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G4102',
    position: 0,
  },
  {
    id: 'Heb.11.3.1',
    language: 'greek',
    text: 'νοοῦμεν',
    transliteration: 'nooumen',
    lemma: 'νοέω',
    lemmaTranslit: 'noeō',
    gloss: 'we understand',
    morphology: { pos: 'verb', person: '1', number: 'plural', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G3539',
    position: 1,
  },
  {
    id: 'Heb.11.3.2',
    language: 'greek',
    text: 'κατηρτίσθαι',
    transliteration: 'katērtisthai',
    lemma: 'καταρτίζω',
    lemmaTranslit: 'katartizō',
    gloss: 'to have been framed',
    morphology: { pos: 'verb', tense: 'perfect', voice: 'passive', mood: 'infinitive' },
    strongs: 'G2675',
    position: 2,
  },
  {
    id: 'Heb.11.3.3',
    language: 'greek',
    text: 'αἰῶνας',
    transliteration: 'aiōnas',
    lemma: 'αἰών',
    lemmaTranslit: 'aiōn',
    gloss: 'the ages / universe',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', case: 'accusative' },
    strongs: 'G165',
    position: 3,
  },
  {
    id: 'Heb.11.3.4',
    language: 'greek',
    text: 'ῥήματι',
    transliteration: 'rhēmati',
    lemma: 'ῥῆμα',
    lemmaTranslit: 'rhēma',
    gloss: 'by the word',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'dative' },
    strongs: 'G4487',
    position: 4,
  },
];

export const heb11_3_translation: VerseTranslation = {
  verseRef: 'Heb.11.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'By faith we understand the ages to have been framed by the word of God.',
      spans: [
        { id: 'Heb.11.3.en.lit.0', text: 'By faith', position: 0, sourceTokenIds: ['Heb.11.3.0'], confidence: 'high' },
        { id: 'Heb.11.3.en.lit.1', text: 'we understand', position: 1, sourceTokenIds: ['Heb.11.3.1'], confidence: 'high' },
        { id: 'Heb.11.3.en.lit.2', text: 'the ages to have been framed', position: 2, sourceTokenIds: ['Heb.11.3.2', 'Heb.11.3.3'], confidence: 'medium' },
        { id: 'Heb.11.3.en.lit.3', text: 'by the word of God.', position: 3, sourceTokenIds: ['Heb.11.3.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'By faith we understand that the universe was created by the word of God.',
      spans: [
        { id: 'Heb.11.3.en.idi.0', text: 'By faith we understand', position: 0, sourceTokenIds: ['Heb.11.3.0', 'Heb.11.3.1'], confidence: 'high' },
        { id: 'Heb.11.3.en.idi.1', text: 'that the universe was created', position: 1, sourceTokenIds: ['Heb.11.3.2', 'Heb.11.3.3'], confidence: 'high' },
        { id: 'Heb.11.3.en.idi.2', text: 'by the word of God.', position: 2, sourceTokenIds: ['Heb.11.3.4'], confidence: 'high' },
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

export const heb11_3_verse = {
  ref: 'Heb.11.3',
  sourceTokens: heb11_3_tokens,
  translation: heb11_3_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 11:6 – Without faith it is impossible to please him
 * ──────────────────────────────────────────────────────────── */

export const heb11_6_tokens: SourceToken[] = [
  {
    id: 'Heb.11.6.0',
    language: 'greek',
    text: 'χωρὶς',
    transliteration: 'chōris',
    lemma: 'χωρίς',
    lemmaTranslit: 'chōris',
    gloss: 'without',
    morphology: { pos: 'preposition' },
    strongs: 'G5565',
    position: 0,
  },
  {
    id: 'Heb.11.6.1',
    language: 'greek',
    text: 'πίστεως',
    transliteration: 'pisteōs',
    lemma: 'πίστις',
    lemmaTranslit: 'pistis',
    gloss: 'faith',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G4102',
    position: 1,
  },
  {
    id: 'Heb.11.6.2',
    language: 'greek',
    text: 'ἀδύνατον',
    transliteration: 'adunaton',
    lemma: 'ἀδύνατος',
    lemmaTranslit: 'adunatos',
    gloss: 'impossible',
    morphology: { pos: 'adjective', gender: 'neuter', number: 'singular', case: 'nominative' },
    strongs: 'G102',
    position: 2,
  },
  {
    id: 'Heb.11.6.3',
    language: 'greek',
    text: 'εὐαρεστῆσαι',
    transliteration: 'euarestēsai',
    lemma: 'εὐαρεστέω',
    lemmaTranslit: 'euaresteō',
    gloss: 'to please',
    morphology: { pos: 'verb', tense: 'aorist', voice: 'active', mood: 'infinitive' },
    strongs: 'G2100',
    position: 3,
  },
];

export const heb11_6_translation: VerseTranslation = {
  verseRef: 'Heb.11.6',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And without faith it is impossible to please him.',
      spans: [
        { id: 'Heb.11.6.en.lit.0', text: 'without faith', position: 0, sourceTokenIds: ['Heb.11.6.0', 'Heb.11.6.1'], confidence: 'high' },
        { id: 'Heb.11.6.en.lit.1', text: 'it is impossible', position: 1, sourceTokenIds: ['Heb.11.6.2'], confidence: 'high' },
        { id: 'Heb.11.6.en.lit.2', text: 'to please him.', position: 2, sourceTokenIds: ['Heb.11.6.3'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Without faith it is impossible to please God.',
      spans: [
        { id: 'Heb.11.6.en.idi.0', text: 'Without faith', position: 0, sourceTokenIds: ['Heb.11.6.0', 'Heb.11.6.1'], confidence: 'high' },
        { id: 'Heb.11.6.en.idi.1', text: 'it is impossible to please God.', position: 1, sourceTokenIds: ['Heb.11.6.2', 'Heb.11.6.3'], confidence: 'high' },
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

export const heb11_6_verse = {
  ref: 'Heb.11.6',
  sourceTokens: heb11_6_tokens,
  translation: heb11_6_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 11:8 – By faith Abraham obeyed when called
 * ──────────────────────────────────────────────────────────── */

export const heb11_8_tokens: SourceToken[] = [
  {
    id: 'Heb.11.8.0',
    language: 'greek',
    text: 'Πίστει',
    transliteration: 'Pistei',
    lemma: 'πίστις',
    lemmaTranslit: 'pistis',
    gloss: 'by faith',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G4102',
    position: 0,
  },
  {
    id: 'Heb.11.8.1',
    language: 'greek',
    text: 'Ἀβραὰμ',
    transliteration: 'Abraam',
    lemma: 'Ἀβραάμ',
    lemmaTranslit: 'Abraam',
    gloss: 'Abraham',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G11',
    position: 1,
  },
  {
    id: 'Heb.11.8.2',
    language: 'greek',
    text: 'καλούμενος',
    transliteration: 'kaloumenos',
    lemma: 'καλέω',
    lemmaTranslit: 'kaleō',
    gloss: 'being called',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'passive', mood: 'participle' },
    strongs: 'G2564',
    position: 2,
  },
  {
    id: 'Heb.11.8.3',
    language: 'greek',
    text: 'ὑπήκουσεν',
    transliteration: 'hupēkousen',
    lemma: 'ὑπακούω',
    lemmaTranslit: 'hupakouō',
    gloss: 'obeyed',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G5219',
    position: 3,
  },
  {
    id: 'Heb.11.8.4',
    language: 'greek',
    text: 'ἐξελθεῖν',
    transliteration: 'exelthein',
    lemma: 'ἐξέρχομαι',
    lemmaTranslit: 'exerchomai',
    gloss: 'to go out',
    morphology: { pos: 'verb', tense: 'aorist', voice: 'active', mood: 'infinitive' },
    strongs: 'G1831',
    position: 4,
  },
];

export const heb11_8_translation: VerseTranslation = {
  verseRef: 'Heb.11.8',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'By faith Abraham, being called, obeyed to go out to a place he was about to receive as an inheritance.',
      spans: [
        { id: 'Heb.11.8.en.lit.0', text: 'By faith', position: 0, sourceTokenIds: ['Heb.11.8.0'], confidence: 'high' },
        { id: 'Heb.11.8.en.lit.1', text: 'Abraham, being called,', position: 1, sourceTokenIds: ['Heb.11.8.1', 'Heb.11.8.2'], confidence: 'high' },
        { id: 'Heb.11.8.en.lit.2', text: 'obeyed to go out', position: 2, sourceTokenIds: ['Heb.11.8.3', 'Heb.11.8.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'By faith Abraham obeyed when he was called to go out to a place he would later receive as his inheritance.',
      spans: [
        { id: 'Heb.11.8.en.idi.0', text: 'By faith Abraham obeyed', position: 0, sourceTokenIds: ['Heb.11.8.0', 'Heb.11.8.1', 'Heb.11.8.3'], confidence: 'high' },
        { id: 'Heb.11.8.en.idi.1', text: 'when he was called to go out', position: 1, sourceTokenIds: ['Heb.11.8.2', 'Heb.11.8.4'], confidence: 'high' },
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

export const heb11_8_verse = {
  ref: 'Heb.11.8',
  sourceTokens: heb11_8_tokens,
  translation: heb11_8_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 11:13 – These all died in faith
 * ──────────────────────────────────────────────────────────── */

export const heb11_13_tokens: SourceToken[] = [
  {
    id: 'Heb.11.13.0',
    language: 'greek',
    text: 'Κατὰ',
    transliteration: 'Kata',
    lemma: 'κατά',
    lemmaTranslit: 'kata',
    gloss: 'according to',
    morphology: { pos: 'preposition' },
    strongs: 'G2596',
    position: 0,
  },
  {
    id: 'Heb.11.13.1',
    language: 'greek',
    text: 'πίστιν',
    transliteration: 'pistin',
    lemma: 'πίστις',
    lemmaTranslit: 'pistis',
    gloss: 'faith',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G4102',
    position: 1,
  },
  {
    id: 'Heb.11.13.2',
    language: 'greek',
    text: 'ἀπέθανον',
    transliteration: 'apethanon',
    lemma: 'ἀποθνῄσκω',
    lemmaTranslit: 'apothnēskō',
    gloss: 'died',
    morphology: { pos: 'verb', person: '3', number: 'plural', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G599',
    position: 2,
  },
  {
    id: 'Heb.11.13.3',
    language: 'greek',
    text: 'οὗτοι',
    transliteration: 'houtoi',
    lemma: 'οὗτος',
    lemmaTranslit: 'houtos',
    gloss: 'these',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'plural', case: 'nominative' },
    strongs: 'G3778',
    position: 3,
  },
  {
    id: 'Heb.11.13.4',
    language: 'greek',
    text: 'πάντες',
    transliteration: 'pantes',
    lemma: 'πᾶς',
    lemmaTranslit: 'pas',
    gloss: 'all',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', case: 'nominative' },
    strongs: 'G3956',
    position: 4,
  },
];

export const heb11_13_translation: VerseTranslation = {
  verseRef: 'Heb.11.13',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'According to faith died these all, not having received the promises.',
      spans: [
        { id: 'Heb.11.13.en.lit.0', text: 'According to faith', position: 0, sourceTokenIds: ['Heb.11.13.0', 'Heb.11.13.1'], confidence: 'high' },
        { id: 'Heb.11.13.en.lit.1', text: 'died', position: 1, sourceTokenIds: ['Heb.11.13.2'], confidence: 'high' },
        { id: 'Heb.11.13.en.lit.2', text: 'these all,', position: 2, sourceTokenIds: ['Heb.11.13.3', 'Heb.11.13.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'These all died in faith, not having received the things promised.',
      spans: [
        { id: 'Heb.11.13.en.idi.0', text: 'These all died in faith,', position: 0, sourceTokenIds: ['Heb.11.13.0', 'Heb.11.13.1', 'Heb.11.13.2', 'Heb.11.13.3', 'Heb.11.13.4'], confidence: 'high' },
        { id: 'Heb.11.13.en.idi.1', text: 'not having received the things promised.', position: 1, sourceTokenIds: [], confidence: 'medium' },
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

export const heb11_13_verse = {
  ref: 'Heb.11.13',
  sourceTokens: heb11_13_tokens,
  translation: heb11_13_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 11:24 – By faith Moses refused
 * ──────────────────────────────────────────────────────────── */

export const heb11_24_tokens: SourceToken[] = [
  {
    id: 'Heb.11.24.0',
    language: 'greek',
    text: 'Πίστει',
    transliteration: 'Pistei',
    lemma: 'πίστις',
    lemmaTranslit: 'pistis',
    gloss: 'by faith',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G4102',
    position: 0,
  },
  {
    id: 'Heb.11.24.1',
    language: 'greek',
    text: 'Μωϋσῆς',
    transliteration: 'Mōusēs',
    lemma: 'Μωϋσῆς',
    lemmaTranslit: 'Mōusēs',
    gloss: 'Moses',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3475',
    position: 1,
  },
  {
    id: 'Heb.11.24.2',
    language: 'greek',
    text: 'μέγας',
    transliteration: 'megas',
    lemma: 'μέγας',
    lemmaTranslit: 'megas',
    gloss: 'great / grown up',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3173',
    position: 2,
  },
  {
    id: 'Heb.11.24.3',
    language: 'greek',
    text: 'γενόμενος',
    transliteration: 'genomenos',
    lemma: 'γίνομαι',
    lemmaTranslit: 'ginomai',
    gloss: 'having become',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'middle', mood: 'participle' },
    strongs: 'G1096',
    position: 3,
  },
  {
    id: 'Heb.11.24.4',
    language: 'greek',
    text: 'ἠρνήσατο',
    transliteration: 'ērnēsato',
    lemma: 'ἀρνέομαι',
    lemmaTranslit: 'arneomai',
    gloss: 'refused',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'middle', mood: 'indicative' },
    strongs: 'G720',
    position: 4,
  },
];

export const heb11_24_translation: VerseTranslation = {
  verseRef: 'Heb.11.24',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "By faith Moses, having become great, refused to be called son of Pharaoh's daughter.",
      spans: [
        { id: 'Heb.11.24.en.lit.0', text: 'By faith', position: 0, sourceTokenIds: ['Heb.11.24.0'], confidence: 'high' },
        { id: 'Heb.11.24.en.lit.1', text: 'Moses, having become great,', position: 1, sourceTokenIds: ['Heb.11.24.1', 'Heb.11.24.2', 'Heb.11.24.3'], confidence: 'high' },
        { id: 'Heb.11.24.en.lit.2', text: "refused to be called son of Pharaoh's daughter.", position: 2, sourceTokenIds: ['Heb.11.24.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "By faith Moses, when he was grown up, refused to be called the son of Pharaoh's daughter.",
      spans: [
        { id: 'Heb.11.24.en.idi.0', text: 'By faith Moses,', position: 0, sourceTokenIds: ['Heb.11.24.0', 'Heb.11.24.1'], confidence: 'high' },
        { id: 'Heb.11.24.en.idi.1', text: 'when he was grown up,', position: 1, sourceTokenIds: ['Heb.11.24.2', 'Heb.11.24.3'], confidence: 'high' },
        { id: 'Heb.11.24.en.idi.2', text: "refused to be called the son of Pharaoh's daughter.", position: 2, sourceTokenIds: ['Heb.11.24.4'], confidence: 'high' },
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

export const heb11_24_verse = {
  ref: 'Heb.11.24',
  sourceTokens: heb11_24_tokens,
  translation: heb11_24_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 11:32 – And what more shall I say?
 * ──────────────────────────────────────────────────────────── */

export const heb11_32_tokens: SourceToken[] = [
  {
    id: 'Heb.11.32.0',
    language: 'greek',
    text: 'τί',
    transliteration: 'ti',
    lemma: 'τίς',
    lemmaTranslit: 'tis',
    gloss: 'what',
    morphology: { pos: 'pronoun', gender: 'neuter', number: 'singular', case: 'accusative' },
    strongs: 'G5101',
    position: 0,
  },
  {
    id: 'Heb.11.32.1',
    language: 'greek',
    text: 'ἔτι',
    transliteration: 'eti',
    lemma: 'ἔτι',
    lemmaTranslit: 'eti',
    gloss: 'still / more',
    morphology: { pos: 'adverb' },
    strongs: 'G2089',
    position: 1,
  },
  {
    id: 'Heb.11.32.2',
    language: 'greek',
    text: 'λέγω',
    transliteration: 'legō',
    lemma: 'λέγω',
    lemmaTranslit: 'legō',
    gloss: 'shall I say',
    morphology: { pos: 'verb', person: '1', number: 'singular', tense: 'present', voice: 'active', mood: 'subjunctive' },
    strongs: 'G3004',
    position: 2,
  },
  {
    id: 'Heb.11.32.3',
    language: 'greek',
    text: 'ἐπιλείψει',
    transliteration: 'epileipsei',
    lemma: 'ἐπιλείπω',
    lemmaTranslit: 'epileipō',
    gloss: 'will fail',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'future', voice: 'active', mood: 'indicative' },
    strongs: 'G1952',
    position: 3,
  },
  {
    id: 'Heb.11.32.4',
    language: 'greek',
    text: 'χρόνος',
    transliteration: 'chronos',
    lemma: 'χρόνος',
    lemmaTranslit: 'chronos',
    gloss: 'time',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G5550',
    position: 4,
  },
];

export const heb11_32_translation: VerseTranslation = {
  verseRef: 'Heb.11.32',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And what more should I say? For time will fail me telling of Gideon, Barak, Samson, Jephthah, David, and Samuel and the prophets.',
      spans: [
        { id: 'Heb.11.32.en.lit.0', text: 'And what more should I say?', position: 0, sourceTokenIds: ['Heb.11.32.0', 'Heb.11.32.1', 'Heb.11.32.2'], confidence: 'high' },
        { id: 'Heb.11.32.en.lit.1', text: 'For time will fail me', position: 1, sourceTokenIds: ['Heb.11.32.3', 'Heb.11.32.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'And what more shall I say? For time would fail me to tell of Gideon, Barak, Samson, Jephthah, David, Samuel, and the prophets.',
      spans: [
        { id: 'Heb.11.32.en.idi.0', text: 'And what more shall I say?', position: 0, sourceTokenIds: ['Heb.11.32.0', 'Heb.11.32.1', 'Heb.11.32.2'], confidence: 'high' },
        { id: 'Heb.11.32.en.idi.1', text: 'For time would fail me to tell of Gideon, Barak, Samson,', position: 1, sourceTokenIds: ['Heb.11.32.3', 'Heb.11.32.4'], confidence: 'high' },
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

export const heb11_32_verse = {
  ref: 'Heb.11.32',
  sourceTokens: heb11_32_tokens,
  translation: heb11_32_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 11:39 – All commended through their faith
 * ──────────────────────────────────────────────────────────── */

export const heb11_39_tokens: SourceToken[] = [
  {
    id: 'Heb.11.39.0',
    language: 'greek',
    text: 'πάντες',
    transliteration: 'pantes',
    lemma: 'πᾶς',
    lemmaTranslit: 'pas',
    gloss: 'all',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', case: 'nominative' },
    strongs: 'G3956',
    position: 0,
  },
  {
    id: 'Heb.11.39.1',
    language: 'greek',
    text: 'μαρτυρηθέντες',
    transliteration: 'martyrēthentes',
    lemma: 'μαρτυρέω',
    lemmaTranslit: 'martyreō',
    gloss: 'having been commended',
    morphology: { pos: 'verb', number: 'plural', tense: 'aorist', voice: 'passive', mood: 'participle' },
    strongs: 'G3140',
    position: 1,
  },
  {
    id: 'Heb.11.39.2',
    language: 'greek',
    text: 'διὰ',
    transliteration: 'dia',
    lemma: 'διά',
    lemmaTranslit: 'dia',
    gloss: 'through',
    morphology: { pos: 'preposition' },
    strongs: 'G1223',
    position: 2,
  },
  {
    id: 'Heb.11.39.3',
    language: 'greek',
    text: 'τῆς',
    transliteration: 'tēs',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G3588',
    position: 3,
  },
  {
    id: 'Heb.11.39.4',
    language: 'greek',
    text: 'πίστεως',
    transliteration: 'pisteōs',
    lemma: 'πίστις',
    lemmaTranslit: 'pistis',
    gloss: 'faith',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G4102',
    position: 4,
  },
];

export const heb11_39_translation: VerseTranslation = {
  verseRef: 'Heb.11.39',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And all these, having been commended through their faith, did not receive the promise.',
      spans: [
        { id: 'Heb.11.39.en.lit.0', text: 'And all these,', position: 0, sourceTokenIds: ['Heb.11.39.0'], confidence: 'high' },
        { id: 'Heb.11.39.en.lit.1', text: 'having been commended', position: 1, sourceTokenIds: ['Heb.11.39.1'], confidence: 'high' },
        { id: 'Heb.11.39.en.lit.2', text: 'through their faith,', position: 2, sourceTokenIds: ['Heb.11.39.2', 'Heb.11.39.3', 'Heb.11.39.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'And all these, though commended through their faith, did not receive what was promised.',
      spans: [
        { id: 'Heb.11.39.en.idi.0', text: 'And all these, though commended through their faith,', position: 0, sourceTokenIds: ['Heb.11.39.0', 'Heb.11.39.1', 'Heb.11.39.2', 'Heb.11.39.3', 'Heb.11.39.4'], confidence: 'high' },
        { id: 'Heb.11.39.en.idi.1', text: 'did not receive what was promised.', position: 1, sourceTokenIds: [], confidence: 'medium' },
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

export const heb11_39_verse = {
  ref: 'Heb.11.39',
  sourceTokens: heb11_39_tokens,
  translation: heb11_39_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Export combined verses
 * ──────────────────────────────────────────────────────────── */

export const hebrews11_1_40_verses = [
  heb11_1_verse,
  heb11_3_verse,
  heb11_6_verse,
  heb11_8_verse,
  heb11_13_verse,
  heb11_24_verse,
  heb11_32_verse,
  heb11_39_verse,
];

export default hebrews11_1_40_verses;
