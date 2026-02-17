// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 6:27 – Work for food that endures to eternal life
 * ──────────────────────────────────────────────────────────── */

export const john6_27_tokens: SourceToken[] = [
  {
    id: 'John.6.27.0',
    language: 'greek',
    text: 'ἐργάζεσθε',
    transliteration: 'ergazesthe',
    lemma: 'ἐργάζομαι',
    lemmaTranslit: 'ergazomai',
    gloss: 'work for',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'present', voice: 'middle', mood: 'imperative' },
    strongs: 'G2038',
    position: 0,
  },
  {
    id: 'John.6.27.1',
    language: 'greek',
    text: 'τὴν',
    transliteration: 'tēn',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G3588',
    position: 1,
  },
  {
    id: 'John.6.27.2',
    language: 'greek',
    text: 'βρῶσιν',
    transliteration: 'brōsin',
    lemma: 'βρῶσις',
    lemmaTranslit: 'brōsis',
    gloss: 'food',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G1035',
    position: 2,
  },
  {
    id: 'John.6.27.3',
    language: 'greek',
    text: 'μένουσαν',
    transliteration: 'menousan',
    lemma: 'μένω',
    lemmaTranslit: 'menō',
    gloss: 'enduring',
    morphology: { pos: 'verb', tense: 'present', voice: 'active', mood: 'participle', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G3306',
    position: 3,
  },
  {
    id: 'John.6.27.4',
    language: 'greek',
    text: 'ζωὴν',
    transliteration: 'zōēn',
    lemma: 'ζωή',
    lemmaTranslit: 'zōē',
    gloss: 'life',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G2222',
    position: 4,
  },
  {
    id: 'John.6.27.5',
    language: 'greek',
    text: 'αἰώνιον',
    transliteration: 'aiōnion',
    lemma: 'αἰώνιος',
    lemmaTranslit: 'aiōnios',
    gloss: 'eternal',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G166',
    position: 5,
  },
];

export const john6_27_translation: VerseTranslation = {
  verseRef: 'John.6.27',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Work not for the food that perishes, but for the food enduring to life eternal.',
      spans: [
        { id: 'John.6.27.en.lit.0', text: 'Work for', position: 0, sourceTokenIds: ['John.6.27.0'], confidence: 'high' },
        { id: 'John.6.27.en.lit.1', text: 'the food', position: 1, sourceTokenIds: ['John.6.27.1', 'John.6.27.2'], confidence: 'high' },
        { id: 'John.6.27.en.lit.2', text: 'enduring to life eternal.', position: 2, sourceTokenIds: ['John.6.27.3', 'John.6.27.4', 'John.6.27.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Do not work for food that spoils, but for food that endures to eternal life.',
      spans: [
        { id: 'John.6.27.en.idi.0', text: 'Do not work for food that spoils, but for food that endures to eternal life.', position: 0, sourceTokenIds: ['John.6.27.0', 'John.6.27.1', 'John.6.27.2', 'John.6.27.3', 'John.6.27.4', 'John.6.27.5'], confidence: 'high' },
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

export const john6_27_verse = {
  ref: 'John.6.27',
  sourceTokens: john6_27_tokens,
  translation: john6_27_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 6:35 – I am the bread of life
 * ──────────────────────────────────────────────────────────── */

export const john6_35_tokens: SourceToken[] = [
  {
    id: 'John.6.35.0',
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
    id: 'John.6.35.1',
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
    id: 'John.6.35.2',
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
    id: 'John.6.35.3',
    language: 'greek',
    text: 'ἄρτος',
    transliteration: 'artos',
    lemma: 'ἄρτος',
    lemmaTranslit: 'artos',
    gloss: 'bread',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G740',
    position: 3,
  },
  {
    id: 'John.6.35.4',
    language: 'greek',
    text: 'τῆς',
    transliteration: 'tēs',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'of the',
    morphology: { pos: 'article', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G3588',
    position: 4,
  },
  {
    id: 'John.6.35.5',
    language: 'greek',
    text: 'ζωῆς',
    transliteration: 'zōēs',
    lemma: 'ζωή',
    lemmaTranslit: 'zōē',
    gloss: 'of life',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G2222',
    position: 5,
  },
];

export const john6_35_translation: VerseTranslation = {
  verseRef: 'John.6.35',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'I am the bread of life.',
      spans: [
        { id: 'John.6.35.en.lit.0', text: 'I am', position: 0, sourceTokenIds: ['John.6.35.0', 'John.6.35.1'], confidence: 'high' },
        { id: 'John.6.35.en.lit.1', text: 'the bread of life.', position: 1, sourceTokenIds: ['John.6.35.2', 'John.6.35.3', 'John.6.35.4', 'John.6.35.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'I am the bread of life. Whoever comes to me will never go hungry.',
      spans: [
        { id: 'John.6.35.en.idi.0', text: 'I am the bread of life.', position: 0, sourceTokenIds: ['John.6.35.0', 'John.6.35.1', 'John.6.35.2', 'John.6.35.3', 'John.6.35.4', 'John.6.35.5'], confidence: 'high' },
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

export const john6_35_verse = {
  ref: 'John.6.35',
  sourceTokens: john6_35_tokens,
  translation: john6_35_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 6:40 – Everyone who looks to the Son and believes
 * ──────────────────────────────────────────────────────────── */

export const john6_40_tokens: SourceToken[] = [
  {
    id: 'John.6.40.0',
    language: 'greek',
    text: 'πᾶς',
    transliteration: 'pas',
    lemma: 'πᾶς',
    lemmaTranslit: 'pas',
    gloss: 'everyone',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3956',
    position: 0,
  },
  {
    id: 'John.6.40.1',
    language: 'greek',
    text: 'ὁ',
    transliteration: 'ho',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the one',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3588',
    position: 1,
  },
  {
    id: 'John.6.40.2',
    language: 'greek',
    text: 'θεωρῶν',
    transliteration: 'theōrōn',
    lemma: 'θεωρέω',
    lemmaTranslit: 'theōreō',
    gloss: 'beholding',
    morphology: { pos: 'verb', tense: 'present', voice: 'active', mood: 'participle', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G2334',
    position: 2,
  },
  {
    id: 'John.6.40.3',
    language: 'greek',
    text: 'πιστεύων',
    transliteration: 'pisteuōn',
    lemma: 'πιστεύω',
    lemmaTranslit: 'pisteuō',
    gloss: 'believing',
    morphology: { pos: 'verb', tense: 'present', voice: 'active', mood: 'participle', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G4100',
    position: 3,
  },
  {
    id: 'John.6.40.4',
    language: 'greek',
    text: 'ζωὴν',
    transliteration: 'zōēn',
    lemma: 'ζωή',
    lemmaTranslit: 'zōē',
    gloss: 'life',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G2222',
    position: 4,
  },
  {
    id: 'John.6.40.5',
    language: 'greek',
    text: 'αἰώνιον',
    transliteration: 'aiōnion',
    lemma: 'αἰώνιος',
    lemmaTranslit: 'aiōnios',
    gloss: 'eternal',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G166',
    position: 5,
  },
];

export const john6_40_translation: VerseTranslation = {
  verseRef: 'John.6.40',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Everyone the one beholding the Son and believing in him should have life eternal.',
      spans: [
        { id: 'John.6.40.en.lit.0', text: 'Everyone the one beholding', position: 0, sourceTokenIds: ['John.6.40.0', 'John.6.40.1', 'John.6.40.2'], confidence: 'high' },
        { id: 'John.6.40.en.lit.1', text: 'and believing', position: 1, sourceTokenIds: ['John.6.40.3'], confidence: 'high' },
        { id: 'John.6.40.en.lit.2', text: 'life eternal.', position: 2, sourceTokenIds: ['John.6.40.4', 'John.6.40.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "Everyone who looks to the Son and believes in him shall have eternal life, and I will raise them up at the last day.",
      spans: [
        { id: 'John.6.40.en.idi.0', text: 'Everyone who looks to the Son and believes in him shall have eternal life.', position: 0, sourceTokenIds: ['John.6.40.0', 'John.6.40.1', 'John.6.40.2', 'John.6.40.3', 'John.6.40.4', 'John.6.40.5'], confidence: 'high' },
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

export const john6_40_verse = {
  ref: 'John.6.40',
  sourceTokens: john6_40_tokens,
  translation: john6_40_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 6:44 – No one can come unless the Father draws him
 * ──────────────────────────────────────────────────────────── */

export const john6_44_tokens: SourceToken[] = [
  {
    id: 'John.6.44.0',
    language: 'greek',
    text: 'οὐδεὶς',
    transliteration: 'oudeis',
    lemma: 'οὐδείς',
    lemmaTranslit: 'oudeis',
    gloss: 'no one',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3762',
    position: 0,
  },
  {
    id: 'John.6.44.1',
    language: 'greek',
    text: 'δύναται',
    transliteration: 'dynatai',
    lemma: 'δύναμαι',
    lemmaTranslit: 'dynamai',
    gloss: 'is able',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'middle', mood: 'indicative' },
    strongs: 'G1410',
    position: 1,
  },
  {
    id: 'John.6.44.2',
    language: 'greek',
    text: 'ἐλθεῖν',
    transliteration: 'elthein',
    lemma: 'ἔρχομαι',
    lemmaTranslit: 'erchomai',
    gloss: 'to come',
    morphology: { pos: 'verb', tense: 'aorist', voice: 'active', mood: 'infinitive' },
    strongs: 'G2064',
    position: 2,
  },
  {
    id: 'John.6.44.3',
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
    id: 'John.6.44.4',
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
    id: 'John.6.44.5',
    language: 'greek',
    text: 'ἑλκύσῃ',
    transliteration: 'helkysē',
    lemma: 'ἑλκύω',
    lemmaTranslit: 'helkyō',
    gloss: 'draws',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'subjunctive' },
    strongs: 'G1670',
    position: 5,
  },
];

export const john6_44_translation: VerseTranslation = {
  verseRef: 'John.6.44',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'No one is able to come to me unless the Father who sent me draws him.',
      spans: [
        { id: 'John.6.44.en.lit.0', text: 'No one is able', position: 0, sourceTokenIds: ['John.6.44.0', 'John.6.44.1'], confidence: 'high' },
        { id: 'John.6.44.en.lit.1', text: 'to come', position: 1, sourceTokenIds: ['John.6.44.2'], confidence: 'high' },
        { id: 'John.6.44.en.lit.2', text: 'the Father draws him.', position: 2, sourceTokenIds: ['John.6.44.3', 'John.6.44.4', 'John.6.44.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'No one can come to me unless the Father who sent me draws them.',
      spans: [
        { id: 'John.6.44.en.idi.0', text: 'No one can come to me unless the Father who sent me draws them.', position: 0, sourceTokenIds: ['John.6.44.0', 'John.6.44.1', 'John.6.44.2', 'John.6.44.3', 'John.6.44.4', 'John.6.44.5'], confidence: 'high' },
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

export const john6_44_verse = {
  ref: 'John.6.44',
  sourceTokens: john6_44_tokens,
  translation: john6_44_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 6:48 – I am the bread of life
 * ──────────────────────────────────────────────────────────── */

export const john6_48_tokens: SourceToken[] = [
  {
    id: 'John.6.48.0',
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
    id: 'John.6.48.1',
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
    id: 'John.6.48.2',
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
    id: 'John.6.48.3',
    language: 'greek',
    text: 'ἄρτος',
    transliteration: 'artos',
    lemma: 'ἄρτος',
    lemmaTranslit: 'artos',
    gloss: 'bread',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G740',
    position: 3,
  },
  {
    id: 'John.6.48.4',
    language: 'greek',
    text: 'τῆς',
    transliteration: 'tēs',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'of the',
    morphology: { pos: 'article', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G3588',
    position: 4,
  },
  {
    id: 'John.6.48.5',
    language: 'greek',
    text: 'ζωῆς',
    transliteration: 'zōēs',
    lemma: 'ζωή',
    lemmaTranslit: 'zōē',
    gloss: 'of life',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G2222',
    position: 5,
  },
];

export const john6_48_translation: VerseTranslation = {
  verseRef: 'John.6.48',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'I am the bread of life.',
      spans: [
        { id: 'John.6.48.en.lit.0', text: 'I am', position: 0, sourceTokenIds: ['John.6.48.0', 'John.6.48.1'], confidence: 'high' },
        { id: 'John.6.48.en.lit.1', text: 'the bread of life.', position: 1, sourceTokenIds: ['John.6.48.2', 'John.6.48.3', 'John.6.48.4', 'John.6.48.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'I am the bread of life.',
      spans: [
        { id: 'John.6.48.en.idi.0', text: 'I am the bread of life.', position: 0, sourceTokenIds: ['John.6.48.0', 'John.6.48.1', 'John.6.48.2', 'John.6.48.3', 'John.6.48.4', 'John.6.48.5'], confidence: 'high' },
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

export const john6_48_verse = {
  ref: 'John.6.48',
  sourceTokens: john6_48_tokens,
  translation: john6_48_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 6:51 – I am the living bread that came down from heaven
 * ──────────────────────────────────────────────────────────── */

export const john6_51_tokens: SourceToken[] = [
  {
    id: 'John.6.51.0',
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
    id: 'John.6.51.1',
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
    id: 'John.6.51.2',
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
    id: 'John.6.51.3',
    language: 'greek',
    text: 'ἄρτος',
    transliteration: 'artos',
    lemma: 'ἄρτος',
    lemmaTranslit: 'artos',
    gloss: 'bread',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G740',
    position: 3,
  },
  {
    id: 'John.6.51.4',
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
    id: 'John.6.51.5',
    language: 'greek',
    text: 'ζῶν',
    transliteration: 'zōn',
    lemma: 'ζάω',
    lemmaTranslit: 'zaō',
    gloss: 'living',
    morphology: { pos: 'verb', tense: 'present', voice: 'active', mood: 'participle', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G2198',
    position: 5,
  },
];

export const john6_51_translation: VerseTranslation = {
  verseRef: 'John.6.51',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'I am the bread, the living one, the one having come down out of heaven.',
      spans: [
        { id: 'John.6.51.en.lit.0', text: 'I am', position: 0, sourceTokenIds: ['John.6.51.0', 'John.6.51.1'], confidence: 'high' },
        { id: 'John.6.51.en.lit.1', text: 'the bread', position: 1, sourceTokenIds: ['John.6.51.2', 'John.6.51.3'], confidence: 'high' },
        { id: 'John.6.51.en.lit.2', text: 'the living one', position: 2, sourceTokenIds: ['John.6.51.4', 'John.6.51.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'I am the living bread that came down from heaven.',
      spans: [
        { id: 'John.6.51.en.idi.0', text: 'I am the living bread that came down from heaven.', position: 0, sourceTokenIds: ['John.6.51.0', 'John.6.51.1', 'John.6.51.2', 'John.6.51.3', 'John.6.51.4', 'John.6.51.5'], confidence: 'high' },
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

export const john6_51_verse = {
  ref: 'John.6.51',
  sourceTokens: john6_51_tokens,
  translation: john6_51_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 6:63 – The Spirit gives life; the flesh counts for nothing
 * ──────────────────────────────────────────────────────────── */

export const john6_63_tokens: SourceToken[] = [
  {
    id: 'John.6.63.0',
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
    id: 'John.6.63.1',
    language: 'greek',
    text: 'πνεῦμά',
    transliteration: 'pneuma',
    lemma: 'πνεῦμα',
    lemmaTranslit: 'pneuma',
    gloss: 'Spirit',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'nominative' },
    strongs: 'G4151',
    position: 1,
  },
  {
    id: 'John.6.63.2',
    language: 'greek',
    text: 'ἐστιν',
    transliteration: 'estin',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'is',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G1510',
    position: 2,
  },
  {
    id: 'John.6.63.3',
    language: 'greek',
    text: 'τὸ',
    transliteration: 'to',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the thing',
    morphology: { pos: 'article', gender: 'neuter', number: 'singular', case: 'nominative' },
    strongs: 'G3588',
    position: 3,
  },
  {
    id: 'John.6.63.4',
    language: 'greek',
    text: 'ζῳοποιοῦν',
    transliteration: 'zōopoioun',
    lemma: 'ζῳοποιέω',
    lemmaTranslit: 'zōopoieō',
    gloss: 'giving life',
    morphology: { pos: 'verb', tense: 'present', voice: 'active', mood: 'participle', gender: 'neuter', number: 'singular', case: 'nominative' },
    strongs: 'G2227',
    position: 4,
  },
];

export const john6_63_translation: VerseTranslation = {
  verseRef: 'John.6.63',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'The Spirit is the one giving life; the flesh profits nothing.',
      spans: [
        { id: 'John.6.63.en.lit.0', text: 'The Spirit', position: 0, sourceTokenIds: ['John.6.63.0', 'John.6.63.1'], confidence: 'high' },
        { id: 'John.6.63.en.lit.1', text: 'is', position: 1, sourceTokenIds: ['John.6.63.2'], confidence: 'high' },
        { id: 'John.6.63.en.lit.2', text: 'the one giving life.', position: 2, sourceTokenIds: ['John.6.63.3', 'John.6.63.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'The Spirit gives life; the flesh counts for nothing.',
      spans: [
        { id: 'John.6.63.en.idi.0', text: 'The Spirit gives life;', position: 0, sourceTokenIds: ['John.6.63.0', 'John.6.63.1', 'John.6.63.2', 'John.6.63.3', 'John.6.63.4'], confidence: 'high' },
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

export const john6_63_verse = {
  ref: 'John.6.63',
  sourceTokens: john6_63_tokens,
  translation: john6_63_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 6:68 – Lord, to whom shall we go?
 * ──────────────────────────────────────────────────────────── */

export const john6_68_tokens: SourceToken[] = [
  {
    id: 'John.6.68.0',
    language: 'greek',
    text: 'κύριε',
    transliteration: 'kyrie',
    lemma: 'κύριος',
    lemmaTranslit: 'kyrios',
    gloss: 'Lord',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'vocative' },
    strongs: 'G2962',
    position: 0,
  },
  {
    id: 'John.6.68.1',
    language: 'greek',
    text: 'πρὸς',
    transliteration: 'pros',
    lemma: 'πρός',
    lemmaTranslit: 'pros',
    gloss: 'to',
    morphology: { pos: 'preposition' },
    strongs: 'G4314',
    position: 1,
  },
  {
    id: 'John.6.68.2',
    language: 'greek',
    text: 'τίνα',
    transliteration: 'tina',
    lemma: 'τίς',
    lemmaTranslit: 'tis',
    gloss: 'whom',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G5101',
    position: 2,
  },
  {
    id: 'John.6.68.3',
    language: 'greek',
    text: 'ἀπελευσόμεθα',
    transliteration: 'apeleusometha',
    lemma: 'ἀπέρχομαι',
    lemmaTranslit: 'aperchomai',
    gloss: 'shall we go',
    morphology: { pos: 'verb', person: '1', number: 'plural', tense: 'future', voice: 'middle', mood: 'indicative' },
    strongs: 'G565',
    position: 3,
  },
  {
    id: 'John.6.68.4',
    language: 'greek',
    text: 'ῥήματα',
    transliteration: 'rhēmata',
    lemma: 'ῥῆμα',
    lemmaTranslit: 'rhēma',
    gloss: 'words',
    morphology: { pos: 'noun', gender: 'neuter', number: 'plural', case: 'accusative' },
    strongs: 'G4487',
    position: 4,
  },
  {
    id: 'John.6.68.5',
    language: 'greek',
    text: 'ζωῆς',
    transliteration: 'zōēs',
    lemma: 'ζωή',
    lemmaTranslit: 'zōē',
    gloss: 'of life',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G2222',
    position: 5,
  },
  {
    id: 'John.6.68.6',
    language: 'greek',
    text: 'αἰωνίου',
    transliteration: 'aiōniou',
    lemma: 'αἰώνιος',
    lemmaTranslit: 'aiōnios',
    gloss: 'eternal',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G166',
    position: 6,
  },
];

export const john6_68_translation: VerseTranslation = {
  verseRef: 'John.6.68',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Lord, to whom shall we go? You have words of life eternal.',
      spans: [
        { id: 'John.6.68.en.lit.0', text: 'Lord,', position: 0, sourceTokenIds: ['John.6.68.0'], confidence: 'high' },
        { id: 'John.6.68.en.lit.1', text: 'to whom shall we go?', position: 1, sourceTokenIds: ['John.6.68.1', 'John.6.68.2', 'John.6.68.3'], confidence: 'high' },
        { id: 'John.6.68.en.lit.2', text: 'words of life eternal.', position: 2, sourceTokenIds: ['John.6.68.4', 'John.6.68.5', 'John.6.68.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Lord, to whom shall we go? You have the words of eternal life.',
      spans: [
        { id: 'John.6.68.en.idi.0', text: 'Lord, to whom shall we go?', position: 0, sourceTokenIds: ['John.6.68.0', 'John.6.68.1', 'John.6.68.2', 'John.6.68.3'], confidence: 'high' },
        { id: 'John.6.68.en.idi.1', text: 'You have the words of eternal life.', position: 1, sourceTokenIds: ['John.6.68.4', 'John.6.68.5', 'John.6.68.6'], confidence: 'high' },
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

export const john6_68_verse = {
  ref: 'John.6.68',
  sourceTokens: john6_68_tokens,
  translation: john6_68_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Export combined verses
 * ──────────────────────────────────────────────────────────── */

export const john6_22_71_verses = [
  john6_27_verse,
  john6_35_verse,
  john6_40_verse,
  john6_44_verse,
  john6_48_verse,
  john6_51_verse,
  john6_63_verse,
  john6_68_verse,
];

export default john6_22_71_verses;
