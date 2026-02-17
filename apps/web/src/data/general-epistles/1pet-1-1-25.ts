// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 1:3 – Born again to a living hope
 * ──────────────────────────────────────────────────────────── */

export const peter1_1_3_tokens: SourceToken[] = [
  {
    id: '1Pet.1.3.0',
    language: 'greek',
    text: 'Εὐλογητὸς',
    transliteration: 'Eulogētos',
    lemma: 'εὐλογητός',
    lemmaTranslit: 'eulogētos',
    gloss: 'blessed',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G2128',
    position: 0,
  },
  {
    id: '1Pet.1.3.1',
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
    id: '1Pet.1.3.2',
    language: 'greek',
    text: 'θεὸς',
    transliteration: 'theos',
    lemma: 'θεός',
    lemmaTranslit: 'theos',
    gloss: 'God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G2316',
    position: 2,
  },
  {
    id: '1Pet.1.3.3',
    language: 'greek',
    text: 'ἀναγεννήσας',
    transliteration: 'anagennēsas',
    lemma: 'ἀναγεννάω',
    lemmaTranslit: 'anagennaō',
    gloss: 'having caused to be born again',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'participle' },
    strongs: 'G313',
    position: 3,
  },
  {
    id: '1Pet.1.3.4',
    language: 'greek',
    text: 'ἐλπίδα',
    transliteration: 'elpida',
    lemma: 'ἐλπίς',
    lemmaTranslit: 'elpis',
    gloss: 'hope',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G1680',
    position: 4,
  },
  {
    id: '1Pet.1.3.5',
    language: 'greek',
    text: 'ζῶσαν',
    transliteration: 'zōsan',
    lemma: 'ζάω',
    lemmaTranslit: 'zaō',
    gloss: 'living',
    morphology: { pos: 'verb', number: 'singular', tense: 'present', voice: 'active', mood: 'participle' },
    strongs: 'G2198',
    position: 5,
  },
];

export const peter1_1_3_translation: VerseTranslation = {
  verseRef: '1Pet.1.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Blessed be the God and Father of our Lord Jesus Christ, who according to his great mercy begot us again unto a living hope.',
      spans: [
        { id: '1Pet.1.3.en.lit.0', text: 'Blessed be the God', position: 0, sourceTokenIds: ['1Pet.1.3.0', '1Pet.1.3.1', '1Pet.1.3.2'], confidence: 'high' },
        { id: '1Pet.1.3.en.lit.1', text: 'who begot us again', position: 1, sourceTokenIds: ['1Pet.1.3.3'], confidence: 'high' },
        { id: '1Pet.1.3.en.lit.2', text: 'unto a living hope.', position: 2, sourceTokenIds: ['1Pet.1.3.4', '1Pet.1.3.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Blessed be the God and Father of our Lord Jesus Christ! According to his great mercy, he has caused us to be born again to a living hope.',
      spans: [
        { id: '1Pet.1.3.en.idi.0', text: 'Blessed be the God and Father of our Lord Jesus Christ!', position: 0, sourceTokenIds: ['1Pet.1.3.0', '1Pet.1.3.1', '1Pet.1.3.2'], confidence: 'high' },
        { id: '1Pet.1.3.en.idi.1', text: 'According to his great mercy, he has caused us to be born again', position: 1, sourceTokenIds: ['1Pet.1.3.3'], confidence: 'high' },
        { id: '1Pet.1.3.en.idi.2', text: 'to a living hope.', position: 2, sourceTokenIds: ['1Pet.1.3.4', '1Pet.1.3.5'], confidence: 'high' },
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

export const peter1_1_3_notes: StudyNote[] = [
  {
    id: '1Pet.1.3.note.1',
    verseRef: '1Pet.1.3',
    sourceTokenIds: ['1Pet.1.3.4', '1Pet.1.3.5'],
    category: 'lexical',
    title: "ἐλπίδα ζῶσαν (elpida zōsan) — Living Hope",
    content: "The phrase ἐλπίδα ζῶσαν (\"living hope\") is unique to 1 Peter. The adjective ζῶσαν (from ζάω, G2198) is a present active participle — this hope is not static but actively alive, dynamic, and growing. Peter contrasts it with the perishable inheritance of this world. Grounded in Christ's resurrection (v.3b), this hope participates in the life of the risen Lord. The modifier \"living\" distinguishes Christian hope from mere wishful thinking; it is a hope that has been made alive by God's act of regeneration (ἀναγεννάω).",
    confidence: 'high',
    authorType: 'ai',
    metadata: {
      generatedAt: new Date().toISOString(),
      engineId: 'open-bible-notes',
    },
  },
];

export const peter1_1_3_verse = {
  ref: '1Pet.1.3',
  sourceTokens: peter1_1_3_tokens,
  translation: peter1_1_3_translation,
  notes: peter1_1_3_notes,
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:6 – In this you rejoice, though grieved by trials
 * ──────────────────────────────────────────────────────────── */

export const peter1_1_6_tokens: SourceToken[] = [
  {
    id: '1Pet.1.6.0',
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
    id: '1Pet.1.6.1',
    language: 'greek',
    text: 'ᾧ',
    transliteration: 'hō',
    lemma: 'ὅς',
    lemmaTranslit: 'hos',
    gloss: 'which',
    morphology: { pos: 'pronoun', gender: 'neuter', number: 'singular', case: 'dative' },
    strongs: 'G3739',
    position: 1,
  },
  {
    id: '1Pet.1.6.2',
    language: 'greek',
    text: 'ἀγαλλιᾶσθε',
    transliteration: 'agalliasthe',
    lemma: 'ἀγαλλιάω',
    lemmaTranslit: 'agalliaō',
    gloss: 'you rejoice',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'present', voice: 'middle', mood: 'indicative' },
    strongs: 'G21',
    position: 2,
  },
  {
    id: '1Pet.1.6.3',
    language: 'greek',
    text: 'λυπηθέντες',
    transliteration: 'lupēthentes',
    lemma: 'λυπέω',
    lemmaTranslit: 'lupeō',
    gloss: 'having been grieved',
    morphology: { pos: 'verb', number: 'plural', tense: 'aorist', voice: 'passive', mood: 'participle' },
    strongs: 'G3076',
    position: 3,
  },
  {
    id: '1Pet.1.6.4',
    language: 'greek',
    text: 'πειρασμοῖς',
    transliteration: 'peirasmois',
    lemma: 'πειρασμός',
    lemmaTranslit: 'peirasmos',
    gloss: 'by trials',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', case: 'dative' },
    strongs: 'G3986',
    position: 4,
  },
  {
    id: '1Pet.1.6.5',
    language: 'greek',
    text: 'ποικίλοις',
    transliteration: 'poikilois',
    lemma: 'ποικίλος',
    lemmaTranslit: 'poikilos',
    gloss: 'various',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', case: 'dative' },
    strongs: 'G4164',
    position: 5,
  },
];

export const peter1_1_6_translation: VerseTranslation = {
  verseRef: '1Pet.1.6',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'In which you rejoice greatly, though now for a little while, if necessary, having been grieved by various trials.',
      spans: [
        { id: '1Pet.1.6.en.lit.0', text: 'In which you rejoice greatly,', position: 0, sourceTokenIds: ['1Pet.1.6.0', '1Pet.1.6.1', '1Pet.1.6.2'], confidence: 'high' },
        { id: '1Pet.1.6.en.lit.1', text: 'having been grieved', position: 1, sourceTokenIds: ['1Pet.1.6.3'], confidence: 'high' },
        { id: '1Pet.1.6.en.lit.2', text: 'by various trials.', position: 2, sourceTokenIds: ['1Pet.1.6.4', '1Pet.1.6.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'In this you rejoice, though now for a little while you have been grieved by various trials.',
      spans: [
        { id: '1Pet.1.6.en.idi.0', text: 'In this you rejoice,', position: 0, sourceTokenIds: ['1Pet.1.6.0', '1Pet.1.6.1', '1Pet.1.6.2'], confidence: 'high' },
        { id: '1Pet.1.6.en.idi.1', text: 'though now for a little while you have been grieved by various trials.', position: 1, sourceTokenIds: ['1Pet.1.6.3', '1Pet.1.6.4', '1Pet.1.6.5'], confidence: 'high' },
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

export const peter1_1_6_verse = {
  ref: '1Pet.1.6',
  sourceTokens: peter1_1_6_tokens,
  translation: peter1_1_6_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:8 – Though you have not seen him, you love him
 * ──────────────────────────────────────────────────────────── */

export const peter1_1_8_tokens: SourceToken[] = [
  {
    id: '1Pet.1.8.0',
    language: 'greek',
    text: 'ὃν',
    transliteration: 'hon',
    lemma: 'ὅς',
    lemmaTranslit: 'hos',
    gloss: 'whom',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G3739',
    position: 0,
  },
  {
    id: '1Pet.1.8.1',
    language: 'greek',
    text: 'οὐκ',
    transliteration: 'ouk',
    lemma: 'οὐ',
    lemmaTranslit: 'ou',
    gloss: 'not',
    morphology: { pos: 'adverb' },
    strongs: 'G3756',
    position: 1,
  },
  {
    id: '1Pet.1.8.2',
    language: 'greek',
    text: 'ἰδόντες',
    transliteration: 'idontes',
    lemma: 'ὁράω',
    lemmaTranslit: 'horaō',
    gloss: 'having seen',
    morphology: { pos: 'verb', number: 'plural', tense: 'aorist', voice: 'active', mood: 'participle' },
    strongs: 'G3708',
    position: 2,
  },
  {
    id: '1Pet.1.8.3',
    language: 'greek',
    text: 'ἀγαπᾶτε',
    transliteration: 'agapate',
    lemma: 'ἀγαπάω',
    lemmaTranslit: 'agapaō',
    gloss: 'you love',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G25',
    position: 3,
  },
];

export const peter1_1_8_translation: VerseTranslation = {
  verseRef: '1Pet.1.8',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Whom not having seen you love; in whom now not seeing yet believing you rejoice with joy inexpressible.',
      spans: [
        { id: '1Pet.1.8.en.lit.0', text: 'Whom not having seen', position: 0, sourceTokenIds: ['1Pet.1.8.0', '1Pet.1.8.1', '1Pet.1.8.2'], confidence: 'high' },
        { id: '1Pet.1.8.en.lit.1', text: 'you love;', position: 1, sourceTokenIds: ['1Pet.1.8.3'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Though you have not seen him, you love him. Though you do not now see him, you believe in him and rejoice with joy that is inexpressible.',
      spans: [
        { id: '1Pet.1.8.en.idi.0', text: 'Though you have not seen him, you love him.', position: 0, sourceTokenIds: ['1Pet.1.8.0', '1Pet.1.8.1', '1Pet.1.8.2', '1Pet.1.8.3'], confidence: 'high' },
        { id: '1Pet.1.8.en.idi.1', text: 'Though you do not now see him, you believe in him and rejoice with joy that is inexpressible.', position: 1, sourceTokenIds: [], confidence: 'medium' },
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

export const peter1_1_8_verse = {
  ref: '1Pet.1.8',
  sourceTokens: peter1_1_8_tokens,
  translation: peter1_1_8_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:13 – Set your hope fully on the grace
 * ──────────────────────────────────────────────────────────── */

export const peter1_1_13_tokens: SourceToken[] = [
  {
    id: '1Pet.1.13.0',
    language: 'greek',
    text: 'τελείως',
    transliteration: 'teleiōs',
    lemma: 'τελείως',
    lemmaTranslit: 'teleiōs',
    gloss: 'fully / completely',
    morphology: { pos: 'adverb' },
    strongs: 'G5049',
    position: 0,
  },
  {
    id: '1Pet.1.13.1',
    language: 'greek',
    text: 'ἐλπίσατε',
    transliteration: 'elpisate',
    lemma: 'ἐλπίζω',
    lemmaTranslit: 'elpizō',
    gloss: 'set your hope',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'aorist', voice: 'active', mood: 'imperative' },
    strongs: 'G1679',
    position: 1,
  },
  {
    id: '1Pet.1.13.2',
    language: 'greek',
    text: 'ἐπὶ',
    transliteration: 'epi',
    lemma: 'ἐπί',
    lemmaTranslit: 'epi',
    gloss: 'upon',
    morphology: { pos: 'preposition' },
    strongs: 'G1909',
    position: 2,
  },
  {
    id: '1Pet.1.13.3',
    language: 'greek',
    text: 'τὴν',
    transliteration: 'tēn',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G3588',
    position: 3,
  },
  {
    id: '1Pet.1.13.4',
    language: 'greek',
    text: 'χάριν',
    transliteration: 'charin',
    lemma: 'χάρις',
    lemmaTranslit: 'charis',
    gloss: 'grace',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G5485',
    position: 4,
  },
];

export const peter1_1_13_translation: VerseTranslation = {
  verseRef: '1Pet.1.13',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Therefore, girding up the loins of your mind, being sober, hope completely upon the grace being brought to you at the revelation of Jesus Christ.',
      spans: [
        { id: '1Pet.1.13.en.lit.0', text: 'hope completely', position: 0, sourceTokenIds: ['1Pet.1.13.0', '1Pet.1.13.1'], confidence: 'high' },
        { id: '1Pet.1.13.en.lit.1', text: 'upon the grace', position: 1, sourceTokenIds: ['1Pet.1.13.2', '1Pet.1.13.3', '1Pet.1.13.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Therefore, preparing your minds for action and being sober-minded, set your hope fully on the grace that will be brought to you at the revelation of Jesus Christ.',
      spans: [
        { id: '1Pet.1.13.en.idi.0', text: 'set your hope fully', position: 0, sourceTokenIds: ['1Pet.1.13.0', '1Pet.1.13.1'], confidence: 'high' },
        { id: '1Pet.1.13.en.idi.1', text: 'on the grace that will be brought to you', position: 1, sourceTokenIds: ['1Pet.1.13.2', '1Pet.1.13.3', '1Pet.1.13.4'], confidence: 'high' },
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

export const peter1_1_13_verse = {
  ref: '1Pet.1.13',
  sourceTokens: peter1_1_13_tokens,
  translation: peter1_1_13_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:18 – Ransomed not with perishable things
 * ──────────────────────────────────────────────────────────── */

export const peter1_1_18_tokens: SourceToken[] = [
  {
    id: '1Pet.1.18.0',
    language: 'greek',
    text: 'ἐλυτρώθητε',
    transliteration: 'elutrōthēte',
    lemma: 'λυτρόω',
    lemmaTranslit: 'lutroō',
    gloss: 'you were ransomed',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'aorist', voice: 'passive', mood: 'indicative' },
    strongs: 'G3084',
    position: 0,
  },
  {
    id: '1Pet.1.18.1',
    language: 'greek',
    text: 'φθαρτοῖς',
    transliteration: 'phthartois',
    lemma: 'φθαρτός',
    lemmaTranslit: 'phthartos',
    gloss: 'perishable',
    morphology: { pos: 'adjective', gender: 'neuter', number: 'plural', case: 'dative' },
    strongs: 'G5349',
    position: 1,
  },
  {
    id: '1Pet.1.18.2',
    language: 'greek',
    text: 'ἀργυρίῳ',
    transliteration: 'arguriō',
    lemma: 'ἀργύριον',
    lemmaTranslit: 'argurion',
    gloss: 'silver',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'dative' },
    strongs: 'G694',
    position: 2,
  },
  {
    id: '1Pet.1.18.3',
    language: 'greek',
    text: 'χρυσίῳ',
    transliteration: 'chrusiō',
    lemma: 'χρυσίον',
    lemmaTranslit: 'chrusion',
    gloss: 'gold',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'dative' },
    strongs: 'G5553',
    position: 3,
  },
];

export const peter1_1_18_translation: VerseTranslation = {
  verseRef: '1Pet.1.18',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Knowing that not with perishable things, silver or gold, were you ransomed from your futile way of life inherited from your fathers.',
      spans: [
        { id: '1Pet.1.18.en.lit.0', text: 'were you ransomed', position: 0, sourceTokenIds: ['1Pet.1.18.0'], confidence: 'high' },
        { id: '1Pet.1.18.en.lit.1', text: 'not with perishable things,', position: 1, sourceTokenIds: ['1Pet.1.18.1'], confidence: 'high' },
        { id: '1Pet.1.18.en.lit.2', text: 'silver or gold,', position: 2, sourceTokenIds: ['1Pet.1.18.2', '1Pet.1.18.3'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'You were ransomed from your empty way of life, not with perishable things such as silver or gold.',
      spans: [
        { id: '1Pet.1.18.en.idi.0', text: 'You were ransomed', position: 0, sourceTokenIds: ['1Pet.1.18.0'], confidence: 'high' },
        { id: '1Pet.1.18.en.idi.1', text: 'not with perishable things such as silver or gold.', position: 1, sourceTokenIds: ['1Pet.1.18.1', '1Pet.1.18.2', '1Pet.1.18.3'], confidence: 'high' },
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

export const peter1_1_18_verse = {
  ref: '1Pet.1.18',
  sourceTokens: peter1_1_18_tokens,
  translation: peter1_1_18_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:23 – Born again of imperishable seed through the word of God
 * ──────────────────────────────────────────────────────────── */

export const peter1_1_23_tokens: SourceToken[] = [
  {
    id: '1Pet.1.23.0',
    language: 'greek',
    text: 'ἀναγεγεννημένοι',
    transliteration: 'anagegennēmenoi',
    lemma: 'ἀναγεννάω',
    lemmaTranslit: 'anagennaō',
    gloss: 'having been born again',
    morphology: { pos: 'verb', number: 'plural', tense: 'perfect', voice: 'passive', mood: 'participle' },
    strongs: 'G313',
    position: 0,
  },
  {
    id: '1Pet.1.23.1',
    language: 'greek',
    text: 'σπορᾶς',
    transliteration: 'sporas',
    lemma: 'σπορά',
    lemmaTranslit: 'spora',
    gloss: 'of seed',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G4701',
    position: 1,
  },
  {
    id: '1Pet.1.23.2',
    language: 'greek',
    text: 'ἀφθάρτου',
    transliteration: 'aphthartou',
    lemma: 'ἄφθαρτος',
    lemmaTranslit: 'aphthartos',
    gloss: 'imperishable',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G862',
    position: 2,
  },
  {
    id: '1Pet.1.23.3',
    language: 'greek',
    text: 'λόγου',
    transliteration: 'logou',
    lemma: 'λόγος',
    lemmaTranslit: 'logos',
    gloss: 'of the word',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G3056',
    position: 3,
  },
  {
    id: '1Pet.1.23.4',
    language: 'greek',
    text: 'ζῶντος',
    transliteration: 'zōntos',
    lemma: 'ζάω',
    lemmaTranslit: 'zaō',
    gloss: 'living',
    morphology: { pos: 'verb', number: 'singular', tense: 'present', voice: 'active', mood: 'participle' },
    strongs: 'G2198',
    position: 4,
  },
  {
    id: '1Pet.1.23.5',
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

export const peter1_1_23_translation: VerseTranslation = {
  verseRef: '1Pet.1.23',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Having been born again not of perishable seed but of imperishable, through the living and abiding word of God.',
      spans: [
        { id: '1Pet.1.23.en.lit.0', text: 'Having been born again', position: 0, sourceTokenIds: ['1Pet.1.23.0'], confidence: 'high' },
        { id: '1Pet.1.23.en.lit.1', text: 'of imperishable seed,', position: 1, sourceTokenIds: ['1Pet.1.23.1', '1Pet.1.23.2'], confidence: 'high' },
        { id: '1Pet.1.23.en.lit.2', text: 'through the living word of God.', position: 2, sourceTokenIds: ['1Pet.1.23.3', '1Pet.1.23.4', '1Pet.1.23.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'You have been born again, not of perishable seed but of imperishable, through the living and abiding word of God.',
      spans: [
        { id: '1Pet.1.23.en.idi.0', text: 'You have been born again, not of perishable seed but of imperishable,', position: 0, sourceTokenIds: ['1Pet.1.23.0', '1Pet.1.23.1', '1Pet.1.23.2'], confidence: 'high' },
        { id: '1Pet.1.23.en.idi.1', text: 'through the living and abiding word of God.', position: 1, sourceTokenIds: ['1Pet.1.23.3', '1Pet.1.23.4', '1Pet.1.23.5'], confidence: 'high' },
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

export const peter1_1_23_notes: StudyNote[] = [
  {
    id: '1Pet.1.23.note.1',
    verseRef: '1Pet.1.23',
    sourceTokenIds: ['1Pet.1.23.3', '1Pet.1.23.4', '1Pet.1.23.5'],
    category: 'theological',
    title: "λόγου ζῶντος θεοῦ — The Living Word of God as Imperishable Seed",
    content: "Peter describes the agent of regeneration as the λόγος ζῶντος θεοῦ (\"living word of God\"). The genitive σπορᾶς ἀφθάρτου (\"of imperishable seed\") contrasts with the φθαρτός (\"perishable\") things of v.18. The word of God is the imperishable seed that produces imperishable life. The participial form ζῶντος (\"living\") echoes the ζῶσαν (\"living\") hope of v.3, creating an inclusio around the passage: the living word produces a living hope. This theology of the word parallels Isaiah 40:6-8, which Peter quotes in vv.24-25.",
    confidence: 'high',
    authorType: 'ai',
    metadata: {
      generatedAt: new Date().toISOString(),
      engineId: 'open-bible-notes',
    },
  },
];

export const peter1_1_23_verse = {
  ref: '1Pet.1.23',
  sourceTokens: peter1_1_23_tokens,
  translation: peter1_1_23_translation,
  notes: peter1_1_23_notes,
};

/* ────────────────────────────────────────────────────────────
 * Export combined verses
 * ──────────────────────────────────────────────────────────── */

export const peter1_1_1_25_verses = [
  peter1_1_3_verse,
  peter1_1_6_verse,
  peter1_1_8_verse,
  peter1_1_13_verse,
  peter1_1_18_verse,
  peter1_1_23_verse,
];

export default peter1_1_1_25_verses;
