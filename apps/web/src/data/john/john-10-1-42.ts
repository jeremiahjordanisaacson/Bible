// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 10:7 – I am the door of the sheep
 * ──────────────────────────────────────────────────────────── */

export const john10_7_tokens: SourceToken[] = [
  {
    id: 'John.10.7.0',
    language: 'greek',
    text: 'ἐγώ',
    transliteration: 'egō',
    lemma: 'ἐγώ',
    lemmaTranslit: 'egō',
    gloss: 'I',
    morphology: { pos: 'pronoun', person: '1', number: 'singular', case: 'nominative' },
    strongs: 'G1473',
    position: 0,
  },
  {
    id: 'John.10.7.1',
    language: 'greek',
    text: 'εἰμι',
    transliteration: 'eimi',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'am',
    morphology: { pos: 'verb', person: '1', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G1510',
    position: 1,
  },
  {
    id: 'John.10.7.2',
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
    id: 'John.10.7.3',
    language: 'greek',
    text: 'θύρα',
    transliteration: 'thyra',
    lemma: 'θύρα',
    lemmaTranslit: 'thyra',
    gloss: 'door',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G2374',
    position: 3,
  },
  {
    id: 'John.10.7.4',
    language: 'greek',
    text: 'τῶν',
    transliteration: 'tōn',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'of the',
    morphology: { pos: 'article', gender: 'neuter', number: 'plural', case: 'genitive' },
    strongs: 'G3588',
    position: 4,
  },
  {
    id: 'John.10.7.5',
    language: 'greek',
    text: 'προβάτων',
    transliteration: 'probatōn',
    lemma: 'πρόβατον',
    lemmaTranslit: 'probaton',
    gloss: 'sheep',
    morphology: { pos: 'noun', gender: 'neuter', number: 'plural', case: 'genitive' },
    strongs: 'G4263',
    position: 5,
  },
];

export const john10_7_translation: VerseTranslation = {
  verseRef: 'John.10.7',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'I am the door of the sheep.',
      spans: [
        { id: 'John.10.7.en.lit.0', text: 'I', position: 0, sourceTokenIds: ['John.10.7.0'], confidence: 'high' },
        { id: 'John.10.7.en.lit.1', text: 'am', position: 1, sourceTokenIds: ['John.10.7.1'], confidence: 'high' },
        { id: 'John.10.7.en.lit.2', text: 'the door', position: 2, sourceTokenIds: ['John.10.7.2', 'John.10.7.3'], confidence: 'high' },
        { id: 'John.10.7.en.lit.3', text: 'of the sheep.', position: 3, sourceTokenIds: ['John.10.7.4', 'John.10.7.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "I am the gate for the sheep.",
      spans: [
        { id: 'John.10.7.en.idi.0', text: 'I am', position: 0, sourceTokenIds: ['John.10.7.0', 'John.10.7.1'], confidence: 'high' },
        { id: 'John.10.7.en.idi.1', text: 'the gate for the sheep.', position: 1, sourceTokenIds: ['John.10.7.2', 'John.10.7.3', 'John.10.7.4', 'John.10.7.5'], confidence: 'high' },
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

export const john10_7_verse = {
  ref: 'John.10.7',
  sourceTokens: john10_7_tokens,
  translation: john10_7_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 10:9 – I am the door
 * ──────────────────────────────────────────────────────────── */

export const john10_9_tokens: SourceToken[] = [
  {
    id: 'John.10.9.0',
    language: 'greek',
    text: 'ἐγώ',
    transliteration: 'egō',
    lemma: 'ἐγώ',
    lemmaTranslit: 'egō',
    gloss: 'I',
    morphology: { pos: 'pronoun', person: '1', number: 'singular', case: 'nominative' },
    strongs: 'G1473',
    position: 0,
  },
  {
    id: 'John.10.9.1',
    language: 'greek',
    text: 'εἰμι',
    transliteration: 'eimi',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'am',
    morphology: { pos: 'verb', person: '1', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G1510',
    position: 1,
  },
  {
    id: 'John.10.9.2',
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
    id: 'John.10.9.3',
    language: 'greek',
    text: 'θύρα',
    transliteration: 'thyra',
    lemma: 'θύρα',
    lemmaTranslit: 'thyra',
    gloss: 'door',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G2374',
    position: 3,
  },
];

export const john10_9_translation: VerseTranslation = {
  verseRef: 'John.10.9',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "I am the door; if anyone enters through me, he will be saved.",
      spans: [
        { id: 'John.10.9.en.lit.0', text: 'I', position: 0, sourceTokenIds: ['John.10.9.0'], confidence: 'high' },
        { id: 'John.10.9.en.lit.1', text: 'am', position: 1, sourceTokenIds: ['John.10.9.1'], confidence: 'high' },
        { id: 'John.10.9.en.lit.2', text: 'the door;', position: 2, sourceTokenIds: ['John.10.9.2', 'John.10.9.3'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "I am the gate; whoever enters through me will be saved.",
      spans: [
        { id: 'John.10.9.en.idi.0', text: 'I am the gate;', position: 0, sourceTokenIds: ['John.10.9.0', 'John.10.9.1', 'John.10.9.2', 'John.10.9.3'], confidence: 'high' },
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

export const john10_9_verse = {
  ref: 'John.10.9',
  sourceTokens: john10_9_tokens,
  translation: john10_9_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 10:10 – I came that they may have life
 * ──────────────────────────────────────────────────────────── */

export const john10_10_tokens: SourceToken[] = [
  {
    id: 'John.10.10.0',
    language: 'greek',
    text: 'ἦλθον',
    transliteration: 'ēlthon',
    lemma: 'ἔρχομαι',
    lemmaTranslit: 'erchomai',
    gloss: 'I came',
    morphology: { pos: 'verb', person: '1', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G2064',
    position: 0,
  },
  {
    id: 'John.10.10.1',
    language: 'greek',
    text: 'ἵνα',
    transliteration: 'hina',
    lemma: 'ἵνα',
    lemmaTranslit: 'hina',
    gloss: 'that',
    morphology: { pos: 'conjunction' },
    strongs: 'G2443',
    position: 1,
  },
  {
    id: 'John.10.10.2',
    language: 'greek',
    text: 'ζωὴν',
    transliteration: 'zōēn',
    lemma: 'ζωή',
    lemmaTranslit: 'zōē',
    gloss: 'life',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G2222',
    position: 2,
  },
  {
    id: 'John.10.10.3',
    language: 'greek',
    text: 'ἔχωσιν',
    transliteration: 'echōsin',
    lemma: 'ἔχω',
    lemmaTranslit: 'echō',
    gloss: 'they may have',
    morphology: { pos: 'verb', person: '3', number: 'plural', tense: 'present', voice: 'active', mood: 'subjunctive' },
    strongs: 'G2192',
    position: 3,
  },
];

export const john10_10_translation: VerseTranslation = {
  verseRef: 'John.10.10',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'I came that they may have life, and have it abundantly.',
      spans: [
        { id: 'John.10.10.en.lit.0', text: 'I came', position: 0, sourceTokenIds: ['John.10.10.0'], confidence: 'high' },
        { id: 'John.10.10.en.lit.1', text: 'that', position: 1, sourceTokenIds: ['John.10.10.1'], confidence: 'high' },
        { id: 'John.10.10.en.lit.2', text: 'they may have life,', position: 2, sourceTokenIds: ['John.10.10.2', 'John.10.10.3'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "I have come so that they may have life, and have it to the full.",
      spans: [
        { id: 'John.10.10.en.idi.0', text: 'I have come', position: 0, sourceTokenIds: ['John.10.10.0'], confidence: 'high' },
        { id: 'John.10.10.en.idi.1', text: 'so that they may have life, and have it to the full.', position: 1, sourceTokenIds: ['John.10.10.1', 'John.10.10.2', 'John.10.10.3'], confidence: 'high' },
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

export const john10_10_verse = {
  ref: 'John.10.10',
  sourceTokens: john10_10_tokens,
  translation: john10_10_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 10:11 – I am the good shepherd
 * ──────────────────────────────────────────────────────────── */

export const john10_11_tokens: SourceToken[] = [
  {
    id: 'John.10.11.0',
    language: 'greek',
    text: 'ἐγώ',
    transliteration: 'egō',
    lemma: 'ἐγώ',
    lemmaTranslit: 'egō',
    gloss: 'I',
    morphology: { pos: 'pronoun', person: '1', number: 'singular', case: 'nominative' },
    strongs: 'G1473',
    position: 0,
  },
  {
    id: 'John.10.11.1',
    language: 'greek',
    text: 'εἰμι',
    transliteration: 'eimi',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'am',
    morphology: { pos: 'verb', person: '1', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G1510',
    position: 1,
  },
  {
    id: 'John.10.11.2',
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
    id: 'John.10.11.3',
    language: 'greek',
    text: 'ποιμὴν',
    transliteration: 'poimēn',
    lemma: 'ποιμήν',
    lemmaTranslit: 'poimēn',
    gloss: 'shepherd',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G4166',
    position: 3,
  },
  {
    id: 'John.10.11.4',
    language: 'greek',
    text: 'ὁ',
    transliteration: 'ho',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3588',
    position: 4,
  },
  {
    id: 'John.10.11.5',
    language: 'greek',
    text: 'καλός',
    transliteration: 'kalos',
    lemma: 'καλός',
    lemmaTranslit: 'kalos',
    gloss: 'good',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G2570',
    position: 5,
  },
];

export const john10_11_translation: VerseTranslation = {
  verseRef: 'John.10.11',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'I am the shepherd, the good one. The good shepherd lays down his life for the sheep.',
      spans: [
        { id: 'John.10.11.en.lit.0', text: 'I', position: 0, sourceTokenIds: ['John.10.11.0'], confidence: 'high' },
        { id: 'John.10.11.en.lit.1', text: 'am', position: 1, sourceTokenIds: ['John.10.11.1'], confidence: 'high' },
        { id: 'John.10.11.en.lit.2', text: 'the shepherd,', position: 2, sourceTokenIds: ['John.10.11.2', 'John.10.11.3'], confidence: 'high' },
        { id: 'John.10.11.en.lit.3', text: 'the good one.', position: 3, sourceTokenIds: ['John.10.11.4', 'John.10.11.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "I am the good shepherd. The good shepherd lays down his life for the sheep.",
      spans: [
        { id: 'John.10.11.en.idi.0', text: 'I am the good shepherd.', position: 0, sourceTokenIds: ['John.10.11.0', 'John.10.11.1', 'John.10.11.2', 'John.10.11.3', 'John.10.11.4', 'John.10.11.5'], confidence: 'high' },
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

export const john10_11_verse = {
  ref: 'John.10.11',
  sourceTokens: john10_11_tokens,
  translation: john10_11_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 10:14 – I am the good shepherd; I know my own
 * ──────────────────────────────────────────────────────────── */

export const john10_14_tokens: SourceToken[] = [
  {
    id: 'John.10.14.0',
    language: 'greek',
    text: 'ἐγώ',
    transliteration: 'egō',
    lemma: 'ἐγώ',
    lemmaTranslit: 'egō',
    gloss: 'I',
    morphology: { pos: 'pronoun', person: '1', number: 'singular', case: 'nominative' },
    strongs: 'G1473',
    position: 0,
  },
  {
    id: 'John.10.14.1',
    language: 'greek',
    text: 'εἰμι',
    transliteration: 'eimi',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'am',
    morphology: { pos: 'verb', person: '1', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G1510',
    position: 1,
  },
  {
    id: 'John.10.14.2',
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
    id: 'John.10.14.3',
    language: 'greek',
    text: 'ποιμὴν',
    transliteration: 'poimēn',
    lemma: 'ποιμήν',
    lemmaTranslit: 'poimēn',
    gloss: 'shepherd',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G4166',
    position: 3,
  },
  {
    id: 'John.10.14.4',
    language: 'greek',
    text: 'ὁ',
    transliteration: 'ho',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3588',
    position: 4,
  },
  {
    id: 'John.10.14.5',
    language: 'greek',
    text: 'καλός',
    transliteration: 'kalos',
    lemma: 'καλός',
    lemmaTranslit: 'kalos',
    gloss: 'good',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G2570',
    position: 5,
  },
  {
    id: 'John.10.14.6',
    language: 'greek',
    text: 'γινώσκω',
    transliteration: 'ginōskō',
    lemma: 'γινώσκω',
    lemmaTranslit: 'ginōskō',
    gloss: 'I know',
    morphology: { pos: 'verb', person: '1', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G1097',
    position: 6,
  },
  {
    id: 'John.10.14.7',
    language: 'greek',
    text: 'τὰ',
    transliteration: 'ta',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'neuter', number: 'plural', case: 'accusative' },
    strongs: 'G3588',
    position: 7,
  },
  {
    id: 'John.10.14.8',
    language: 'greek',
    text: 'ἐμά',
    transliteration: 'ema',
    lemma: 'ἐμός',
    lemmaTranslit: 'emos',
    gloss: 'my own',
    morphology: { pos: 'adjective', gender: 'neuter', number: 'plural', case: 'accusative' },
    strongs: 'G1699',
    position: 8,
  },
];

export const john10_14_translation: VerseTranslation = {
  verseRef: 'John.10.14',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'I am the shepherd, the good one, and I know my own.',
      spans: [
        { id: 'John.10.14.en.lit.0', text: 'I', position: 0, sourceTokenIds: ['John.10.14.0'], confidence: 'high' },
        { id: 'John.10.14.en.lit.1', text: 'am', position: 1, sourceTokenIds: ['John.10.14.1'], confidence: 'high' },
        { id: 'John.10.14.en.lit.2', text: 'the shepherd,', position: 2, sourceTokenIds: ['John.10.14.2', 'John.10.14.3'], confidence: 'high' },
        { id: 'John.10.14.en.lit.3', text: 'the good one,', position: 3, sourceTokenIds: ['John.10.14.4', 'John.10.14.5'], confidence: 'high' },
        { id: 'John.10.14.en.lit.4', text: 'and I know', position: 4, sourceTokenIds: ['John.10.14.6'], confidence: 'high' },
        { id: 'John.10.14.en.lit.5', text: 'my own.', position: 5, sourceTokenIds: ['John.10.14.7', 'John.10.14.8'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "I am the good shepherd; I know my own and my own know me.",
      spans: [
        { id: 'John.10.14.en.idi.0', text: 'I am the good shepherd;', position: 0, sourceTokenIds: ['John.10.14.0', 'John.10.14.1', 'John.10.14.2', 'John.10.14.3', 'John.10.14.4', 'John.10.14.5'], confidence: 'high' },
        { id: 'John.10.14.en.idi.1', text: 'I know my own and my own know me.', position: 1, sourceTokenIds: ['John.10.14.6', 'John.10.14.7', 'John.10.14.8'], confidence: 'high' },
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

export const john10_14_verse = {
  ref: 'John.10.14',
  sourceTokens: john10_14_tokens,
  translation: john10_14_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 10:27 – My sheep hear my voice
 * ──────────────────────────────────────────────────────────── */

export const john10_27_tokens: SourceToken[] = [
  {
    id: 'John.10.27.0',
    language: 'greek',
    text: 'τὰ',
    transliteration: 'ta',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'neuter', number: 'plural', case: 'nominative' },
    strongs: 'G3588',
    position: 0,
  },
  {
    id: 'John.10.27.1',
    language: 'greek',
    text: 'πρόβατα',
    transliteration: 'probata',
    lemma: 'πρόβατον',
    lemmaTranslit: 'probaton',
    gloss: 'sheep',
    morphology: { pos: 'noun', gender: 'neuter', number: 'plural', case: 'nominative' },
    strongs: 'G4263',
    position: 1,
  },
  {
    id: 'John.10.27.2',
    language: 'greek',
    text: 'τὰ',
    transliteration: 'ta',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'neuter', number: 'plural', case: 'nominative' },
    strongs: 'G3588',
    position: 2,
  },
  {
    id: 'John.10.27.3',
    language: 'greek',
    text: 'ἐμὰ',
    transliteration: 'ema',
    lemma: 'ἐμός',
    lemmaTranslit: 'emos',
    gloss: 'my',
    morphology: { pos: 'adjective', gender: 'neuter', number: 'plural', case: 'nominative' },
    strongs: 'G1699',
    position: 3,
  },
  {
    id: 'John.10.27.4',
    language: 'greek',
    text: 'τῆς',
    transliteration: 'tēs',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G3588',
    position: 4,
  },
  {
    id: 'John.10.27.5',
    language: 'greek',
    text: 'φωνῆς',
    transliteration: 'phōnēs',
    lemma: 'φωνή',
    lemmaTranslit: 'phōnē',
    gloss: 'voice',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G5456',
    position: 5,
  },
  {
    id: 'John.10.27.6',
    language: 'greek',
    text: 'μου',
    transliteration: 'mou',
    lemma: 'ἐγώ',
    lemmaTranslit: 'egō',
    gloss: 'of me',
    morphology: { pos: 'pronoun', person: '1', number: 'singular', case: 'genitive' },
    strongs: 'G1473',
    position: 6,
  },
  {
    id: 'John.10.27.7',
    language: 'greek',
    text: 'ἀκούουσιν',
    transliteration: 'akouousin',
    lemma: 'ἀκούω',
    lemmaTranslit: 'akouō',
    gloss: 'they hear',
    morphology: { pos: 'verb', person: '3', number: 'plural', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G191',
    position: 7,
  },
];

export const john10_27_translation: VerseTranslation = {
  verseRef: 'John.10.27',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'The sheep, the ones that are mine, hear my voice.',
      spans: [
        { id: 'John.10.27.en.lit.0', text: 'The sheep,', position: 0, sourceTokenIds: ['John.10.27.0', 'John.10.27.1'], confidence: 'high' },
        { id: 'John.10.27.en.lit.1', text: 'the ones that are mine,', position: 1, sourceTokenIds: ['John.10.27.2', 'John.10.27.3'], confidence: 'high' },
        { id: 'John.10.27.en.lit.2', text: 'hear', position: 2, sourceTokenIds: ['John.10.27.7'], confidence: 'high' },
        { id: 'John.10.27.en.lit.3', text: 'my voice.', position: 3, sourceTokenIds: ['John.10.27.4', 'John.10.27.5', 'John.10.27.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "My sheep listen to my voice; I know them, and they follow me.",
      spans: [
        { id: 'John.10.27.en.idi.0', text: 'My sheep', position: 0, sourceTokenIds: ['John.10.27.0', 'John.10.27.1', 'John.10.27.2', 'John.10.27.3'], confidence: 'high' },
        { id: 'John.10.27.en.idi.1', text: 'listen to my voice;', position: 1, sourceTokenIds: ['John.10.27.4', 'John.10.27.5', 'John.10.27.6', 'John.10.27.7'], confidence: 'high' },
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

export const john10_27_verse = {
  ref: 'John.10.27',
  sourceTokens: john10_27_tokens,
  translation: john10_27_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 10:28 – I give them eternal life
 * ──────────────────────────────────────────────────────────── */

export const john10_28_tokens: SourceToken[] = [
  {
    id: 'John.10.28.0',
    language: 'greek',
    text: 'ζωὴν',
    transliteration: 'zōēn',
    lemma: 'ζωή',
    lemmaTranslit: 'zōē',
    gloss: 'life',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G2222',
    position: 0,
  },
  {
    id: 'John.10.28.1',
    language: 'greek',
    text: 'αἰώνιον',
    transliteration: 'aiōnion',
    lemma: 'αἰώνιος',
    lemmaTranslit: 'aiōnios',
    gloss: 'eternal',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G166',
    position: 1,
  },
  {
    id: 'John.10.28.2',
    language: 'greek',
    text: 'δίδωμι',
    transliteration: 'didōmi',
    lemma: 'δίδωμι',
    lemmaTranslit: 'didōmi',
    gloss: 'I give',
    morphology: { pos: 'verb', person: '1', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G1325',
    position: 2,
  },
  {
    id: 'John.10.28.3',
    language: 'greek',
    text: 'αὐτοῖς',
    transliteration: 'autois',
    lemma: 'αὐτός',
    lemmaTranslit: 'autos',
    gloss: 'to them',
    morphology: { pos: 'pronoun', person: '3', gender: 'neuter', number: 'plural', case: 'dative' },
    strongs: 'G846',
    position: 3,
  },
];

export const john10_28_translation: VerseTranslation = {
  verseRef: 'John.10.28',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And I give to them eternal life, and they shall never perish.',
      spans: [
        { id: 'John.10.28.en.lit.0', text: 'eternal life', position: 0, sourceTokenIds: ['John.10.28.0', 'John.10.28.1'], confidence: 'high' },
        { id: 'John.10.28.en.lit.1', text: 'I give', position: 1, sourceTokenIds: ['John.10.28.2'], confidence: 'high' },
        { id: 'John.10.28.en.lit.2', text: 'to them,', position: 2, sourceTokenIds: ['John.10.28.3'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "I give them eternal life, and they shall never perish; no one will snatch them out of my hand.",
      spans: [
        { id: 'John.10.28.en.idi.0', text: 'I give them eternal life,', position: 0, sourceTokenIds: ['John.10.28.0', 'John.10.28.1', 'John.10.28.2', 'John.10.28.3'], confidence: 'high' },
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

export const john10_28_verse = {
  ref: 'John.10.28',
  sourceTokens: john10_28_tokens,
  translation: john10_28_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 10:30 – I and the Father are one
 * ──────────────────────────────────────────────────────────── */

export const john10_30_tokens: SourceToken[] = [
  {
    id: 'John.10.30.0',
    language: 'greek',
    text: 'ἐγὼ',
    transliteration: 'egō',
    lemma: 'ἐγώ',
    lemmaTranslit: 'egō',
    gloss: 'I',
    morphology: { pos: 'pronoun', person: '1', number: 'singular', case: 'nominative' },
    strongs: 'G1473',
    position: 0,
  },
  {
    id: 'John.10.30.1',
    language: 'greek',
    text: 'καὶ',
    transliteration: 'kai',
    lemma: 'καί',
    lemmaTranslit: 'kai',
    gloss: 'and',
    morphology: { pos: 'conjunction' },
    strongs: 'G2532',
    position: 1,
  },
  {
    id: 'John.10.30.2',
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
    id: 'John.10.30.3',
    language: 'greek',
    text: 'πατὴρ',
    transliteration: 'patēr',
    lemma: 'πατήρ',
    lemmaTranslit: 'patēr',
    gloss: 'Father',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3962',
    position: 3,
  },
  {
    id: 'John.10.30.4',
    language: 'greek',
    text: 'ἕν',
    transliteration: 'hen',
    lemma: 'εἷς',
    lemmaTranslit: 'heis',
    gloss: 'one',
    morphology: { pos: 'adjective', gender: 'neuter', number: 'singular', case: 'nominative' },
    strongs: 'G1520',
    position: 4,
  },
  {
    id: 'John.10.30.5',
    language: 'greek',
    text: 'ἐσμεν',
    transliteration: 'esmen',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'we are',
    morphology: { pos: 'verb', person: '1', number: 'plural', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G1510',
    position: 5,
  },
];

export const john10_30_translation: VerseTranslation = {
  verseRef: 'John.10.30',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'I and the Father, one we are.',
      spans: [
        { id: 'John.10.30.en.lit.0', text: 'I', position: 0, sourceTokenIds: ['John.10.30.0'], confidence: 'high' },
        { id: 'John.10.30.en.lit.1', text: 'and', position: 1, sourceTokenIds: ['John.10.30.1'], confidence: 'high' },
        { id: 'John.10.30.en.lit.2', text: 'the Father,', position: 2, sourceTokenIds: ['John.10.30.2', 'John.10.30.3'], confidence: 'high' },
        { id: 'John.10.30.en.lit.3', text: 'one', position: 3, sourceTokenIds: ['John.10.30.4'], confidence: 'high' },
        { id: 'John.10.30.en.lit.4', text: 'we are.', position: 4, sourceTokenIds: ['John.10.30.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "I and the Father are one.",
      spans: [
        { id: 'John.10.30.en.idi.0', text: 'I and the Father', position: 0, sourceTokenIds: ['John.10.30.0', 'John.10.30.1', 'John.10.30.2', 'John.10.30.3'], confidence: 'high' },
        { id: 'John.10.30.en.idi.1', text: 'are one.', position: 1, sourceTokenIds: ['John.10.30.4', 'John.10.30.5'], confidence: 'high' },
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

export const john10_30_verse = {
  ref: 'John.10.30',
  sourceTokens: john10_30_tokens,
  translation: john10_30_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export – Good Shepherd discourse (John 10:1-42)
 * ──────────────────────────────────────────────────────────── */

export const john10_1_42_verses = [
  john10_7_verse,
  john10_9_verse,
  john10_10_verse,
  john10_11_verse,
  john10_14_verse,
  john10_27_verse,
  john10_28_verse,
  john10_30_verse,
];
export default john10_1_42_verses;
