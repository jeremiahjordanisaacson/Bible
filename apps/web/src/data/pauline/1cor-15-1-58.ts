// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 15:3 – Christ died for our sins
 * ──────────────────────────────────────────────────────────── */

export const corinthians1_15_3_tokens: SourceToken[] = [
  {
    id: '1Cor.15.3.0',
    language: 'greek',
    text: 'Χριστὸς',
    transliteration: 'Christos',
    lemma: 'Χριστός',
    lemmaTranslit: 'Christos',
    gloss: 'Christ',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G5547',
    position: 0,
  },
  {
    id: '1Cor.15.3.1',
    language: 'greek',
    text: 'ἀπέθανεν',
    transliteration: 'apethanen',
    lemma: 'ἀποθνῄσκω',
    lemmaTranslit: 'apothnēskō',
    gloss: 'died',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G599',
    position: 1,
  },
  {
    id: '1Cor.15.3.2',
    language: 'greek',
    text: 'ὑπὲρ',
    transliteration: 'hyper',
    lemma: 'ὑπέρ',
    lemmaTranslit: 'hyper',
    gloss: 'for',
    morphology: { pos: 'preposition' },
    strongs: 'G5228',
    position: 2,
  },
  {
    id: '1Cor.15.3.3',
    language: 'greek',
    text: 'ἁμαρτιῶν',
    transliteration: 'hamartiōn',
    lemma: 'ἁμαρτία',
    lemmaTranslit: 'hamartia',
    gloss: 'sins',
    morphology: { pos: 'noun', gender: 'feminine', number: 'plural', case: 'genitive' },
    strongs: 'G266',
    position: 3,
  },
  {
    id: '1Cor.15.3.4',
    language: 'greek',
    text: 'κατὰ',
    transliteration: 'kata',
    lemma: 'κατά',
    lemmaTranslit: 'kata',
    gloss: 'according to',
    morphology: { pos: 'preposition' },
    strongs: 'G2596',
    position: 4,
  },
  {
    id: '1Cor.15.3.5',
    language: 'greek',
    text: 'τὰς',
    transliteration: 'tas',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'feminine', number: 'plural', case: 'accusative' },
    strongs: 'G3588',
    position: 5,
  },
  {
    id: '1Cor.15.3.6',
    language: 'greek',
    text: 'γραφάς',
    transliteration: 'graphas',
    lemma: 'γραφή',
    lemmaTranslit: 'graphē',
    gloss: 'Scriptures',
    morphology: { pos: 'noun', gender: 'feminine', number: 'plural', case: 'accusative' },
    strongs: 'G1124',
    position: 6,
  },
];

export const corinthians1_15_3_translation: VerseTranslation = {
  verseRef: '1Cor.15.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "That Christ died for our sins according to the Scriptures.",
      spans: [
        { id: '1Cor.15.3.en.lit.0', text: 'That Christ died', position: 0, sourceTokenIds: ['1Cor.15.3.0', '1Cor.15.3.1'], confidence: 'high' },
        { id: '1Cor.15.3.en.lit.1', text: 'for our sins', position: 1, sourceTokenIds: ['1Cor.15.3.2', '1Cor.15.3.3'], confidence: 'high' },
        { id: '1Cor.15.3.en.lit.2', text: 'according to the Scriptures.', position: 2, sourceTokenIds: ['1Cor.15.3.4', '1Cor.15.3.5', '1Cor.15.3.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "Christ died for our sins in accordance with the Scriptures.",
      spans: [
        { id: '1Cor.15.3.en.idi.0', text: 'Christ died for our sins', position: 0, sourceTokenIds: ['1Cor.15.3.0', '1Cor.15.3.1', '1Cor.15.3.2', '1Cor.15.3.3'], confidence: 'high' },
        { id: '1Cor.15.3.en.idi.1', text: 'in accordance with the Scriptures.', position: 1, sourceTokenIds: ['1Cor.15.3.4', '1Cor.15.3.5', '1Cor.15.3.6'], confidence: 'high' },
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


export const corinthians1_15_3_verse = {
  ref: '1Cor.15.3',
  sourceTokens: corinthians1_15_3_tokens,
  translation: corinthians1_15_3_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 15:4 – Buried and raised on the third day
 * ──────────────────────────────────────────────────────────── */

export const corinthians1_15_4_tokens: SourceToken[] = [
  {
    id: '1Cor.15.4.0',
    language: 'greek',
    text: 'ἐτάφη',
    transliteration: 'etaphē',
    lemma: 'θάπτω',
    lemmaTranslit: 'thaptō',
    gloss: 'was buried',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'passive', mood: 'indicative' },
    strongs: 'G2290',
    position: 0,
  },
  {
    id: '1Cor.15.4.1',
    language: 'greek',
    text: 'ἐγήγερται',
    transliteration: 'egēgertai',
    lemma: 'ἐγείρω',
    lemmaTranslit: 'egeirō',
    gloss: 'has been raised',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'perfect', voice: 'passive', mood: 'indicative' },
    strongs: 'G1453',
    position: 1,
  },
  {
    id: '1Cor.15.4.2',
    language: 'greek',
    text: 'τρίτῃ',
    transliteration: 'tritē',
    lemma: 'τρίτος',
    lemmaTranslit: 'tritos',
    gloss: 'third',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G5154',
    position: 2,
  },
  {
    id: '1Cor.15.4.3',
    language: 'greek',
    text: 'ἡμέρᾳ',
    transliteration: 'hēmera',
    lemma: 'ἡμέρα',
    lemmaTranslit: 'hēmera',
    gloss: 'day',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G2250',
    position: 3,
  },
  {
    id: '1Cor.15.4.4',
    language: 'greek',
    text: 'γραφάς',
    transliteration: 'graphas',
    lemma: 'γραφή',
    lemmaTranslit: 'graphē',
    gloss: 'Scriptures',
    morphology: { pos: 'noun', gender: 'feminine', number: 'plural', case: 'accusative' },
    strongs: 'G1124',
    position: 4,
  },
];

export const corinthians1_15_4_translation: VerseTranslation = {
  verseRef: '1Cor.15.4',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "And that he was buried, and that he has been raised on the third day according to the Scriptures.",
      spans: [
        { id: '1Cor.15.4.en.lit.0', text: 'And that he was buried,', position: 0, sourceTokenIds: ['1Cor.15.4.0'], confidence: 'high' },
        { id: '1Cor.15.4.en.lit.1', text: 'and that he has been raised on the third day', position: 1, sourceTokenIds: ['1Cor.15.4.1', '1Cor.15.4.2', '1Cor.15.4.3'], confidence: 'high' },
        { id: '1Cor.15.4.en.lit.2', text: 'according to the Scriptures.', position: 2, sourceTokenIds: ['1Cor.15.4.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "He was buried, and he was raised on the third day according to the Scriptures.",
      spans: [
        { id: '1Cor.15.4.en.idi.0', text: 'He was buried,', position: 0, sourceTokenIds: ['1Cor.15.4.0'], confidence: 'high' },
        { id: '1Cor.15.4.en.idi.1', text: 'and he was raised on the third day', position: 1, sourceTokenIds: ['1Cor.15.4.1', '1Cor.15.4.2', '1Cor.15.4.3'], confidence: 'high' },
        { id: '1Cor.15.4.en.idi.2', text: 'according to the Scriptures.', position: 2, sourceTokenIds: ['1Cor.15.4.4'], confidence: 'high' },
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


export const corinthians1_15_4_verse = {
  ref: '1Cor.15.4',
  sourceTokens: corinthians1_15_4_tokens,
  translation: corinthians1_15_4_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 15:20 – Christ raised as firstfruits
 * ──────────────────────────────────────────────────────────── */

export const corinthians1_15_20_tokens: SourceToken[] = [
  {
    id: '1Cor.15.20.0',
    language: 'greek',
    text: 'νυνὶ',
    transliteration: 'nyni',
    lemma: 'νυνί',
    lemmaTranslit: 'nyni',
    gloss: 'but now',
    morphology: { pos: 'adverb' },
    strongs: 'G3570',
    position: 0,
  },
  {
    id: '1Cor.15.20.1',
    language: 'greek',
    text: 'Χριστὸς',
    transliteration: 'Christos',
    lemma: 'Χριστός',
    lemmaTranslit: 'Christos',
    gloss: 'Christ',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G5547',
    position: 1,
  },
  {
    id: '1Cor.15.20.2',
    language: 'greek',
    text: 'ἐγήγερται',
    transliteration: 'egēgertai',
    lemma: 'ἐγείρω',
    lemmaTranslit: 'egeirō',
    gloss: 'has been raised',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'perfect', voice: 'passive', mood: 'indicative' },
    strongs: 'G1453',
    position: 2,
  },
  {
    id: '1Cor.15.20.3',
    language: 'greek',
    text: 'νεκρῶν',
    transliteration: 'nekrōn',
    lemma: 'νεκρός',
    lemmaTranslit: 'nekros',
    gloss: 'of the dead',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', case: 'genitive' },
    strongs: 'G3498',
    position: 3,
  },
  {
    id: '1Cor.15.20.4',
    language: 'greek',
    text: 'ἀπαρχὴ',
    transliteration: 'aparchē',
    lemma: 'ἀπαρχή',
    lemmaTranslit: 'aparchē',
    gloss: 'firstfruits',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G536',
    position: 4,
  },
  {
    id: '1Cor.15.20.5',
    language: 'greek',
    text: 'κεκοιμημένων',
    transliteration: 'kekoimēmenōn',
    lemma: 'κοιμάω',
    lemmaTranslit: 'koimaō',
    gloss: 'of those who have fallen asleep',
    morphology: { pos: 'verb', person: '3', number: 'plural', tense: 'perfect', voice: 'passive', mood: 'participle' },
    strongs: 'G2837',
    position: 5,
  },
];

export const corinthians1_15_20_translation: VerseTranslation = {
  verseRef: '1Cor.15.20',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "But now Christ has been raised from the dead, the firstfruits of those having fallen asleep.",
      spans: [
        { id: '1Cor.15.20.en.lit.0', text: 'But now Christ has been raised', position: 0, sourceTokenIds: ['1Cor.15.20.0', '1Cor.15.20.1', '1Cor.15.20.2'], confidence: 'high' },
        { id: '1Cor.15.20.en.lit.1', text: 'from the dead,', position: 1, sourceTokenIds: ['1Cor.15.20.3'], confidence: 'high' },
        { id: '1Cor.15.20.en.lit.2', text: 'the firstfruits of those having fallen asleep.', position: 2, sourceTokenIds: ['1Cor.15.20.4', '1Cor.15.20.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "But in fact Christ has been raised from the dead, the firstfruits of those who have fallen asleep.",
      spans: [
        { id: '1Cor.15.20.en.idi.0', text: 'But in fact Christ has been raised from the dead,', position: 0, sourceTokenIds: ['1Cor.15.20.0', '1Cor.15.20.1', '1Cor.15.20.2', '1Cor.15.20.3'], confidence: 'high' },
        { id: '1Cor.15.20.en.idi.1', text: 'the firstfruits of those who have fallen asleep.', position: 1, sourceTokenIds: ['1Cor.15.20.4', '1Cor.15.20.5'], confidence: 'high' },
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


export const corinthians1_15_20_verse = {
  ref: '1Cor.15.20',
  sourceTokens: corinthians1_15_20_tokens,
  translation: corinthians1_15_20_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 15:42 – Resurrection of the dead
 * ──────────────────────────────────────────────────────────── */

export const corinthians1_15_42_tokens: SourceToken[] = [
  {
    id: '1Cor.15.42.0',
    language: 'greek',
    text: 'ἀνάστασις',
    transliteration: 'anastasis',
    lemma: 'ἀνάστασις',
    lemmaTranslit: 'anastasis',
    gloss: 'resurrection',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G386',
    position: 0,
  },
  {
    id: '1Cor.15.42.1',
    language: 'greek',
    text: 'νεκρῶν',
    transliteration: 'nekrōn',
    lemma: 'νεκρός',
    lemmaTranslit: 'nekros',
    gloss: 'of the dead',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', case: 'genitive' },
    strongs: 'G3498',
    position: 1,
  },
  {
    id: '1Cor.15.42.2',
    language: 'greek',
    text: 'σπείρεται',
    transliteration: 'speiretai',
    lemma: 'σπείρω',
    lemmaTranslit: 'speirō',
    gloss: 'is sown',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'passive', mood: 'indicative' },
    strongs: 'G4687',
    position: 2,
  },
  {
    id: '1Cor.15.42.3',
    language: 'greek',
    text: 'φθορᾷ',
    transliteration: 'phthora',
    lemma: 'φθορά',
    lemmaTranslit: 'phthora',
    gloss: 'corruption',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G5356',
    position: 3,
  },
  {
    id: '1Cor.15.42.4',
    language: 'greek',
    text: 'ἐγείρεται',
    transliteration: 'egeiretai',
    lemma: 'ἐγείρω',
    lemmaTranslit: 'egeirō',
    gloss: 'is raised',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'passive', mood: 'indicative' },
    strongs: 'G1453',
    position: 4,
  },
  {
    id: '1Cor.15.42.5',
    language: 'greek',
    text: 'ἀφθαρσίᾳ',
    transliteration: 'aphtharsia',
    lemma: 'ἀφθαρσία',
    lemmaTranslit: 'aphtharsia',
    gloss: 'imperishability',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G861',
    position: 5,
  },
];

export const corinthians1_15_42_translation: VerseTranslation = {
  verseRef: '1Cor.15.42',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "So also is the resurrection of the dead. It is sown in corruption, it is raised in incorruption.",
      spans: [
        { id: '1Cor.15.42.en.lit.0', text: 'So also is the resurrection of the dead.', position: 0, sourceTokenIds: ['1Cor.15.42.0', '1Cor.15.42.1'], confidence: 'high' },
        { id: '1Cor.15.42.en.lit.1', text: 'It is sown in corruption,', position: 1, sourceTokenIds: ['1Cor.15.42.2', '1Cor.15.42.3'], confidence: 'high' },
        { id: '1Cor.15.42.en.lit.2', text: 'it is raised in incorruption.', position: 2, sourceTokenIds: ['1Cor.15.42.4', '1Cor.15.42.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "So it is with the resurrection of the dead. What is sown perishable is raised imperishable.",
      spans: [
        { id: '1Cor.15.42.en.idi.0', text: 'So it is with the resurrection of the dead.', position: 0, sourceTokenIds: ['1Cor.15.42.0', '1Cor.15.42.1'], confidence: 'high' },
        { id: '1Cor.15.42.en.idi.1', text: 'What is sown perishable is raised imperishable.', position: 1, sourceTokenIds: ['1Cor.15.42.2', '1Cor.15.42.3', '1Cor.15.42.4', '1Cor.15.42.5'], confidence: 'high' },
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

export const corinthians1_15_42_notes: StudyNote[] = [
  { id: '1Cor.15.42.note.1', verseRef: '1Cor.15.42', sourceTokenIds: ['1Cor.15.42.0'], category: 'theological', title: "ἀνάστασις — Resurrection", content: "ἀνάστασις (anastasis), literally \"a standing up again,\" denotes bodily resurrection rather than mere spiritual survival. Paul employs the seed-harvest metaphor to argue that the resurrection body, while continuous with the mortal body, is qualitatively transformed — sown in corruption (phthora) but raised in incorruption (aphtharsia). This eschatological transformation is central to Paul’s entire argument in 1 Corinthians 15.", confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const corinthians1_15_42_verse = {
  ref: '1Cor.15.42',
  sourceTokens: corinthians1_15_42_tokens,
  translation: corinthians1_15_42_translation,
  notes: corinthians1_15_42_notes,
};

/* ────────────────────────────────────────────────────────────
 * Verse 15:51 – A mystery revealed
 * ──────────────────────────────────────────────────────────── */

export const corinthians1_15_51_tokens: SourceToken[] = [
  {
    id: '1Cor.15.51.0',
    language: 'greek',
    text: 'μυστήριον',
    transliteration: 'mystērion',
    lemma: 'μυστήριον',
    lemmaTranslit: 'mystērion',
    gloss: 'mystery',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'accusative' },
    strongs: 'G3466',
    position: 0,
  },
  {
    id: '1Cor.15.51.1',
    language: 'greek',
    text: 'πάντες',
    transliteration: 'pantes',
    lemma: 'πᾶς',
    lemmaTranslit: 'pas',
    gloss: 'all',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', case: 'nominative' },
    strongs: 'G3956',
    position: 1,
  },
  {
    id: '1Cor.15.51.2',
    language: 'greek',
    text: 'κοιμηθησόμεθα',
    transliteration: 'koimēthēsometha',
    lemma: 'κοιμάω',
    lemmaTranslit: 'koimaō',
    gloss: 'we shall sleep',
    morphology: { pos: 'verb', person: '1', number: 'plural', tense: 'future', voice: 'passive', mood: 'indicative' },
    strongs: 'G2837',
    position: 2,
  },
  {
    id: '1Cor.15.51.3',
    language: 'greek',
    text: 'ἀλλαγησόμεθα',
    transliteration: 'allagēsometha',
    lemma: 'ἀλλάσσω',
    lemmaTranslit: 'allassō',
    gloss: 'we shall be changed',
    morphology: { pos: 'verb', person: '1', number: 'plural', tense: 'future', voice: 'passive', mood: 'indicative' },
    strongs: 'G236',
    position: 3,
  },
];

export const corinthians1_15_51_translation: VerseTranslation = {
  verseRef: '1Cor.15.51',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "Behold, I tell you a mystery: we shall not all sleep, but we shall all be changed.",
      spans: [
        { id: '1Cor.15.51.en.lit.0', text: 'Behold, I tell you a mystery:', position: 0, sourceTokenIds: ['1Cor.15.51.0'], confidence: 'high' },
        { id: '1Cor.15.51.en.lit.1', text: 'we shall not all sleep,', position: 1, sourceTokenIds: ['1Cor.15.51.1', '1Cor.15.51.2'], confidence: 'high' },
        { id: '1Cor.15.51.en.lit.2', text: 'but we shall all be changed.', position: 2, sourceTokenIds: ['1Cor.15.51.3'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "Behold! I tell you a mystery. We shall not all sleep, but we shall all be changed.",
      spans: [
        { id: '1Cor.15.51.en.idi.0', text: 'Behold! I tell you a mystery.', position: 0, sourceTokenIds: ['1Cor.15.51.0'], confidence: 'high' },
        { id: '1Cor.15.51.en.idi.1', text: 'We shall not all sleep,', position: 1, sourceTokenIds: ['1Cor.15.51.1', '1Cor.15.51.2'], confidence: 'high' },
        { id: '1Cor.15.51.en.idi.2', text: 'but we shall all be changed.', position: 2, sourceTokenIds: ['1Cor.15.51.3'], confidence: 'high' },
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


export const corinthians1_15_51_verse = {
  ref: '1Cor.15.51',
  sourceTokens: corinthians1_15_51_tokens,
  translation: corinthians1_15_51_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 15:55 – Death, where is your sting?
 * ──────────────────────────────────────────────────────────── */

export const corinthians1_15_55_tokens: SourceToken[] = [
  {
    id: '1Cor.15.55.0',
    language: 'greek',
    text: 'θάνατε',
    transliteration: 'thanate',
    lemma: 'θάνατος',
    lemmaTranslit: 'thanatos',
    gloss: 'O death',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'vocative' },
    strongs: 'G2288',
    position: 0,
  },
  {
    id: '1Cor.15.55.1',
    language: 'greek',
    text: 'ποῦ',
    transliteration: 'pou',
    lemma: 'ποῦ',
    lemmaTranslit: 'pou',
    gloss: 'where',
    morphology: { pos: 'adverb' },
    strongs: 'G4226',
    position: 1,
  },
  {
    id: '1Cor.15.55.2',
    language: 'greek',
    text: 'νῖκος',
    transliteration: 'nikos',
    lemma: 'νῖκος',
    lemmaTranslit: 'nikos',
    gloss: 'victory',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'nominative' },
    strongs: 'G3534',
    position: 2,
  },
  {
    id: '1Cor.15.55.3',
    language: 'greek',
    text: 'κέντρον',
    transliteration: 'kentron',
    lemma: 'κέντρον',
    lemmaTranslit: 'kentron',
    gloss: 'sting',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'nominative' },
    strongs: 'G2759',
    position: 3,
  },
];

export const corinthians1_15_55_translation: VerseTranslation = {
  verseRef: '1Cor.15.55',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "Where, O death, is your victory? Where, O death, is your sting?",
      spans: [
        { id: '1Cor.15.55.en.lit.0', text: 'Where, O death, is your victory?', position: 0, sourceTokenIds: ['1Cor.15.55.0', '1Cor.15.55.1', '1Cor.15.55.2'], confidence: 'high' },
        { id: '1Cor.15.55.en.lit.1', text: 'Where, O death, is your sting?', position: 1, sourceTokenIds: ['1Cor.15.55.3'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "O death, where is your victory? O death, where is your sting?",
      spans: [
        { id: '1Cor.15.55.en.idi.0', text: 'O death, where is your victory?', position: 0, sourceTokenIds: ['1Cor.15.55.0', '1Cor.15.55.1', '1Cor.15.55.2'], confidence: 'high' },
        { id: '1Cor.15.55.en.idi.1', text: 'O death, where is your sting?', position: 1, sourceTokenIds: ['1Cor.15.55.3'], confidence: 'high' },
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


export const corinthians1_15_55_verse = {
  ref: '1Cor.15.55',
  sourceTokens: corinthians1_15_55_tokens,
  translation: corinthians1_15_55_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Export combined verses
 * ──────────────────────────────────────────────────────────── */

export const corinthians1_15_1_58_verses = [
  corinthians1_15_3_verse,
  corinthians1_15_4_verse,
  corinthians1_15_20_verse,
  corinthians1_15_42_verse,
  corinthians1_15_51_verse,
  corinthians1_15_55_verse,
];

export default corinthians1_15_1_58_verses;
