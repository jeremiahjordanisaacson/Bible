// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 2:1 – If there is any encouragement in Christ
 * ──────────────────────────────────────────────────────────── */

export const phil2_1_tokens: SourceToken[] = [
  {
    id: 'Phil.2.1.0',
    language: 'greek',
    text: 'εἴ',
    transliteration: 'ei',
    lemma: 'εἰ',
    lemmaTranslit: 'ei',
    gloss: 'if',
    morphology: { pos: 'conjunction' },
    strongs: 'G1487',
    position: 0,
  },
  {
    id: 'Phil.2.1.1',
    language: 'greek',
    text: 'τις',
    transliteration: 'tis',
    lemma: 'τις',
    lemmaTranslit: 'tis',
    gloss: 'any',
    morphology: { pos: 'pronoun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G5100',
    position: 1,
  },
  {
    id: 'Phil.2.1.2',
    language: 'greek',
    text: 'παράκλησις',
    transliteration: 'paraklēsis',
    lemma: 'παράκλησις',
    lemmaTranslit: 'paraklēsis',
    gloss: 'encouragement',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G3874',
    position: 2,
  },
  {
    id: 'Phil.2.1.3',
    language: 'greek',
    text: 'ἐν',
    transliteration: 'en',
    lemma: 'ἐν',
    lemmaTranslit: 'en',
    gloss: 'in',
    morphology: { pos: 'preposition' },
    strongs: 'G1722',
    position: 3,
  },
  {
    id: 'Phil.2.1.4',
    language: 'greek',
    text: 'Χριστῷ',
    transliteration: 'Christō',
    lemma: 'Χριστός',
    lemmaTranslit: 'Christos',
    gloss: 'Christ',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'dative' },
    strongs: 'G5547',
    position: 4,
  },
];

export const phil2_1_translation: VerseTranslation = {
  verseRef: 'Phil.2.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'If therefore any encouragement in Christ, if any consolation of love, if any fellowship of the Spirit.',
      spans: [
        { id: 'Phil.2.1.en.lit.0', text: 'If any encouragement', position: 0, sourceTokenIds: ['Phil.2.1.0', 'Phil.2.1.1', 'Phil.2.1.2'], confidence: 'high' },
        { id: 'Phil.2.1.en.lit.1', text: 'in Christ,', position: 1, sourceTokenIds: ['Phil.2.1.3', 'Phil.2.1.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'So if there is any encouragement in Christ, any comfort from love, any participation in the Spirit.',
      spans: [
        { id: 'Phil.2.1.en.idi.0', text: 'So if there is any encouragement in Christ,', position: 0, sourceTokenIds: ['Phil.2.1.0', 'Phil.2.1.1', 'Phil.2.1.2', 'Phil.2.1.3', 'Phil.2.1.4'], confidence: 'high' },
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

export const phil2_1_verse = {
  ref: 'Phil.2.1',
  sourceTokens: phil2_1_tokens,
  translation: phil2_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 2:3 – Do nothing from selfish ambition
 * ──────────────────────────────────────────────────────────── */

export const phil2_3_tokens: SourceToken[] = [
  {
    id: 'Phil.2.3.0',
    language: 'greek',
    text: 'μηδὲν',
    transliteration: 'mēden',
    lemma: 'μηδείς',
    lemmaTranslit: 'mēdeis',
    gloss: 'nothing',
    morphology: { pos: 'adjective', gender: 'neuter', number: 'singular', case: 'accusative' },
    strongs: 'G3367',
    position: 0,
  },
  {
    id: 'Phil.2.3.1',
    language: 'greek',
    text: 'κατ',
    transliteration: 'kat',
    lemma: 'κατά',
    lemmaTranslit: 'kata',
    gloss: 'according to',
    morphology: { pos: 'preposition' },
    strongs: 'G2596',
    position: 1,
  },
  {
    id: 'Phil.2.3.2',
    language: 'greek',
    text: 'ἐριθείαν',
    transliteration: 'eritheian',
    lemma: 'ἐριθεία',
    lemmaTranslit: 'eritheia',
    gloss: 'selfish ambition',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G2052',
    position: 2,
  },
  {
    id: 'Phil.2.3.3',
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
    id: 'Phil.2.3.4',
    language: 'greek',
    text: 'ταπεινοφροσύνῃ',
    transliteration: 'tapeinophrosynē',
    lemma: 'ταπεινοφροσύνη',
    lemmaTranslit: 'tapeinophrosynē',
    gloss: 'humility',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G5012',
    position: 4,
  },
  {
    id: 'Phil.2.3.5',
    language: 'greek',
    text: 'ἀλλήλους',
    transliteration: 'allēlous',
    lemma: 'ἀλλήλων',
    lemmaTranslit: 'allēlōn',
    gloss: 'one another',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'plural', case: 'accusative' },
    strongs: 'G240',
    position: 5,
  },
  {
    id: 'Phil.2.3.6',
    language: 'greek',
    text: 'ἡγούμενοι',
    transliteration: 'hēgoumenoi',
    lemma: 'ἡγέομαι',
    lemmaTranslit: 'hēgeomai',
    gloss: 'considering',
    morphology: { pos: 'verb', number: 'plural', tense: 'present', voice: 'middle', mood: 'participle', gender: 'masculine', case: 'nominative' },
    strongs: 'G2233',
    position: 6,
  },
  {
    id: 'Phil.2.3.7',
    language: 'greek',
    text: 'ὑπερέχοντας',
    transliteration: 'hyperechontas',
    lemma: 'ὑπερέχω',
    lemmaTranslit: 'hyperechō',
    gloss: 'surpassing',
    morphology: { pos: 'verb', number: 'plural', tense: 'present', voice: 'active', mood: 'participle', gender: 'masculine', case: 'accusative' },
    strongs: 'G5242',
    position: 7,
  },
];

export const phil2_3_translation: VerseTranslation = {
  verseRef: 'Phil.2.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Nothing according to selfish ambition or conceit, but in humility one another considering as surpassing yourselves.',
      spans: [
        { id: 'Phil.2.3.en.lit.0', text: 'Nothing according to selfish ambition', position: 0, sourceTokenIds: ['Phil.2.3.0', 'Phil.2.3.1', 'Phil.2.3.2'], confidence: 'high' },
        { id: 'Phil.2.3.en.lit.1', text: 'but in humility', position: 1, sourceTokenIds: ['Phil.2.3.3', 'Phil.2.3.4'], confidence: 'high' },
        { id: 'Phil.2.3.en.lit.2', text: 'one another considering as surpassing.', position: 2, sourceTokenIds: ['Phil.2.3.5', 'Phil.2.3.6', 'Phil.2.3.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Do nothing from selfish ambition or conceit, but in humility count others more significant than yourselves.',
      spans: [
        { id: 'Phil.2.3.en.idi.0', text: 'Do nothing from selfish ambition or conceit,', position: 0, sourceTokenIds: ['Phil.2.3.0', 'Phil.2.3.1', 'Phil.2.3.2'], confidence: 'high' },
        { id: 'Phil.2.3.en.idi.1', text: 'but in humility count others more significant than yourselves.', position: 1, sourceTokenIds: ['Phil.2.3.3', 'Phil.2.3.4', 'Phil.2.3.5', 'Phil.2.3.6', 'Phil.2.3.7'], confidence: 'high' },
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

export const phil2_3_verse = {
  ref: 'Phil.2.3',
  sourceTokens: phil2_3_tokens,
  translation: phil2_3_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 2:5 – Have this mind among yourselves
 * ──────────────────────────────────────────────────────────── */

export const phil2_5_tokens: SourceToken[] = [
  {
    id: 'Phil.2.5.0',
    language: 'greek',
    text: 'τοῦτο',
    transliteration: 'touto',
    lemma: 'οὗτος',
    lemmaTranslit: 'houtos',
    gloss: 'this',
    morphology: { pos: 'pronoun', gender: 'neuter', number: 'singular', case: 'accusative' },
    strongs: 'G3778',
    position: 0,
  },
  {
    id: 'Phil.2.5.1',
    language: 'greek',
    text: 'φρονεῖτε',
    transliteration: 'phroneite',
    lemma: 'φρονέω',
    lemmaTranslit: 'phroneō',
    gloss: 'think / have this mind',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'present', voice: 'active', mood: 'imperative' },
    strongs: 'G5426',
    position: 1,
  },
  {
    id: 'Phil.2.5.2',
    language: 'greek',
    text: 'ἐν',
    transliteration: 'en',
    lemma: 'ἐν',
    lemmaTranslit: 'en',
    gloss: 'among',
    morphology: { pos: 'preposition' },
    strongs: 'G1722',
    position: 2,
  },
  {
    id: 'Phil.2.5.3',
    language: 'greek',
    text: 'ὑμῖν',
    transliteration: 'hymin',
    lemma: 'ὑμεῖς',
    lemmaTranslit: 'hymeis',
    gloss: 'yourselves',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'plural', case: 'dative' },
    strongs: 'G4771',
    position: 3,
  },
  {
    id: 'Phil.2.5.4',
    language: 'greek',
    text: 'Χριστῷ',
    transliteration: 'Christō',
    lemma: 'Χριστός',
    lemmaTranslit: 'Christos',
    gloss: 'Christ',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'dative' },
    strongs: 'G5547',
    position: 4,
  },
  {
    id: 'Phil.2.5.5',
    language: 'greek',
    text: 'Ἰησοῦ',
    transliteration: 'Iēsou',
    lemma: 'Ἰησοῦς',
    lemmaTranslit: 'Iēsous',
    gloss: 'Jesus',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'dative' },
    strongs: 'G2424',
    position: 5,
  },
];

export const phil2_5_translation: VerseTranslation = {
  verseRef: 'Phil.2.5',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'This think among yourselves, which also in Christ Jesus.',
      spans: [
        { id: 'Phil.2.5.en.lit.0', text: 'This think', position: 0, sourceTokenIds: ['Phil.2.5.0', 'Phil.2.5.1'], confidence: 'high' },
        { id: 'Phil.2.5.en.lit.1', text: 'among yourselves,', position: 1, sourceTokenIds: ['Phil.2.5.2', 'Phil.2.5.3'], confidence: 'high' },
        { id: 'Phil.2.5.en.lit.2', text: 'which also in Christ Jesus.', position: 2, sourceTokenIds: ['Phil.2.5.4', 'Phil.2.5.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Have this mind among yourselves, which is yours in Christ Jesus.',
      spans: [
        { id: 'Phil.2.5.en.idi.0', text: 'Have this mind among yourselves,', position: 0, sourceTokenIds: ['Phil.2.5.0', 'Phil.2.5.1', 'Phil.2.5.2', 'Phil.2.5.3'], confidence: 'high' },
        { id: 'Phil.2.5.en.idi.1', text: 'which is yours in Christ Jesus.', position: 1, sourceTokenIds: ['Phil.2.5.4', 'Phil.2.5.5'], confidence: 'high' },
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

export const phil2_5_verse = {
  ref: 'Phil.2.5',
  sourceTokens: phil2_5_tokens,
  translation: phil2_5_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 2:6 – Being in the form of God
 * ──────────────────────────────────────────────────────────── */

export const phil2_6_tokens: SourceToken[] = [
  {
    id: 'Phil.2.6.0',
    language: 'greek',
    text: 'ὃς',
    transliteration: 'hos',
    lemma: 'ὅς',
    lemmaTranslit: 'hos',
    gloss: 'who',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3739',
    position: 0,
  },
  {
    id: 'Phil.2.6.1',
    language: 'greek',
    text: 'ἐν',
    transliteration: 'en',
    lemma: 'ἐν',
    lemmaTranslit: 'en',
    gloss: 'in',
    morphology: { pos: 'preposition' },
    strongs: 'G1722',
    position: 1,
  },
  {
    id: 'Phil.2.6.2',
    language: 'greek',
    text: 'μορφῇ',
    transliteration: 'morphē',
    lemma: 'μορφή',
    lemmaTranslit: 'morphē',
    gloss: 'form',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G3444',
    position: 2,
  },
  {
    id: 'Phil.2.6.3',
    language: 'greek',
    text: 'θεοῦ',
    transliteration: 'theou',
    lemma: 'θεός',
    lemmaTranslit: 'theos',
    gloss: 'of God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G2316',
    position: 3,
  },
  {
    id: 'Phil.2.6.4',
    language: 'greek',
    text: 'ὑπάρχων',
    transliteration: 'hyparchōn',
    lemma: 'ὑπάρχω',
    lemmaTranslit: 'hyparchō',
    gloss: 'existing',
    morphology: { pos: 'verb', number: 'singular', tense: 'present', voice: 'active', mood: 'participle', gender: 'masculine', case: 'nominative' },
    strongs: 'G5225',
    position: 4,
  },
  {
    id: 'Phil.2.6.5',
    language: 'greek',
    text: 'ἁρπαγμὸν',
    transliteration: 'harpagmon',
    lemma: 'ἁρπαγμός',
    lemmaTranslit: 'harpagmos',
    gloss: 'a thing to be grasped',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G725',
    position: 5,
  },
  {
    id: 'Phil.2.6.6',
    language: 'greek',
    text: 'ἡγήσατο',
    transliteration: 'hēgēsato',
    lemma: 'ἡγέομαι',
    lemmaTranslit: 'hēgeomai',
    gloss: 'considered',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'middle', mood: 'indicative' },
    strongs: 'G2233',
    position: 6,
  },
];

export const phil2_6_translation: VerseTranslation = {
  verseRef: 'Phil.2.6',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Who in the form of God existing, not a thing to be grasped considered the being equal with God.',
      spans: [
        { id: 'Phil.2.6.en.lit.0', text: 'Who', position: 0, sourceTokenIds: ['Phil.2.6.0'], confidence: 'high' },
        { id: 'Phil.2.6.en.lit.1', text: 'in the form of God existing,', position: 1, sourceTokenIds: ['Phil.2.6.1', 'Phil.2.6.2', 'Phil.2.6.3', 'Phil.2.6.4'], confidence: 'high' },
        { id: 'Phil.2.6.en.lit.2', text: 'not a thing to be grasped considered.', position: 2, sourceTokenIds: ['Phil.2.6.5', 'Phil.2.6.6'], confidence: 'medium' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Who, being in the form of God, did not count equality with God a thing to be grasped.',
      spans: [
        { id: 'Phil.2.6.en.idi.0', text: 'Who, being in the form of God,', position: 0, sourceTokenIds: ['Phil.2.6.0', 'Phil.2.6.1', 'Phil.2.6.2', 'Phil.2.6.3', 'Phil.2.6.4'], confidence: 'high' },
        { id: 'Phil.2.6.en.idi.1', text: 'did not count equality with God a thing to be grasped.', position: 1, sourceTokenIds: ['Phil.2.6.5', 'Phil.2.6.6'], confidence: 'high' },
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

export const phil2_6_notes: StudyNote[] = [
  { id: 'Phil.2.6.note.1', verseRef: 'Phil.2.6', sourceTokenIds: ['Phil.2.6.2', 'Phil.2.6.3'], category: 'lexical', title: 'μορφῇ θεοῦ — Form of God', content: "μορφή (morphē) denotes the essential nature or characteristic attributes, not merely outward appearance. \"Form of God\" implies the pre-incarnate Christ shared the very nature and attributes of God, distinct from σχῆμα (outward shape) used in v.8.", confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const phil2_6_verse = {
  ref: 'Phil.2.6',
  sourceTokens: phil2_6_tokens,
  translation: phil2_6_translation,
  notes: phil2_6_notes,
};

/* ────────────────────────────────────────────────────────────
 * Verse 2:7 – He emptied himself
 * ──────────────────────────────────────────────────────────── */

export const phil2_7_tokens: SourceToken[] = [
  {
    id: 'Phil.2.7.0',
    language: 'greek',
    text: 'ἀλλὰ',
    transliteration: 'alla',
    lemma: 'ἀλλά',
    lemmaTranslit: 'alla',
    gloss: 'but',
    morphology: { pos: 'conjunction' },
    strongs: 'G235',
    position: 0,
  },
  {
    id: 'Phil.2.7.1',
    language: 'greek',
    text: 'ἑαυτὸν',
    transliteration: 'heauton',
    lemma: 'ἑαυτοῦ',
    lemmaTranslit: 'heautou',
    gloss: 'himself',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G1438',
    position: 1,
  },
  {
    id: 'Phil.2.7.2',
    language: 'greek',
    text: 'ἐκένωσεν',
    transliteration: 'ekenōsen',
    lemma: 'κενόω',
    lemmaTranslit: 'kenoō',
    gloss: 'emptied',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G2758',
    position: 2,
  },
  {
    id: 'Phil.2.7.3',
    language: 'greek',
    text: 'μορφὴν',
    transliteration: 'morphēn',
    lemma: 'μορφή',
    lemmaTranslit: 'morphē',
    gloss: 'form',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G3444',
    position: 3,
  },
  {
    id: 'Phil.2.7.4',
    language: 'greek',
    text: 'δούλου',
    transliteration: 'doulou',
    lemma: 'δοῦλος',
    lemmaTranslit: 'doulos',
    gloss: 'of a servant',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G1401',
    position: 4,
  },
  {
    id: 'Phil.2.7.5',
    language: 'greek',
    text: 'λαβών',
    transliteration: 'labōn',
    lemma: 'λαμβάνω',
    lemmaTranslit: 'lambanō',
    gloss: 'having taken',
    morphology: { pos: 'verb', number: 'singular', tense: 'aorist', voice: 'active', mood: 'participle', gender: 'masculine', case: 'nominative' },
    strongs: 'G2983',
    position: 5,
  },
  {
    id: 'Phil.2.7.6',
    language: 'greek',
    text: 'ὁμοιώματι',
    transliteration: 'homoiōmati',
    lemma: 'ὁμοίωμα',
    lemmaTranslit: 'homoiōma',
    gloss: 'likeness',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'dative' },
    strongs: 'G3667',
    position: 6,
  },
];

export const phil2_7_translation: VerseTranslation = {
  verseRef: 'Phil.2.7',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'But himself he emptied, the form of a servant having taken, in the likeness of men having become.',
      spans: [
        { id: 'Phil.2.7.en.lit.0', text: 'But himself he emptied,', position: 0, sourceTokenIds: ['Phil.2.7.0', 'Phil.2.7.1', 'Phil.2.7.2'], confidence: 'high' },
        { id: 'Phil.2.7.en.lit.1', text: 'the form of a servant having taken,', position: 1, sourceTokenIds: ['Phil.2.7.3', 'Phil.2.7.4', 'Phil.2.7.5'], confidence: 'high' },
        { id: 'Phil.2.7.en.lit.2', text: 'in the likeness of men having become.', position: 2, sourceTokenIds: ['Phil.2.7.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'But emptied himself, by taking the form of a servant, being born in the likeness of men.',
      spans: [
        { id: 'Phil.2.7.en.idi.0', text: 'But emptied himself,', position: 0, sourceTokenIds: ['Phil.2.7.0', 'Phil.2.7.1', 'Phil.2.7.2'], confidence: 'high' },
        { id: 'Phil.2.7.en.idi.1', text: 'by taking the form of a servant, being born in the likeness of men.', position: 1, sourceTokenIds: ['Phil.2.7.3', 'Phil.2.7.4', 'Phil.2.7.5', 'Phil.2.7.6'], confidence: 'high' },
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

export const phil2_7_notes: StudyNote[] = [
  { id: 'Phil.2.7.note.1', verseRef: 'Phil.2.7', sourceTokenIds: ['Phil.2.7.2'], category: 'theological', title: 'ἐκένωσεν — Emptied Himself', content: "The verb κενόω (kenoō) means to empty or make void. The \"kenosis\" does not mean Christ divested himself of deity but that he set aside the prerogatives of divine glory, voluntarily taking on the limitations of human existence while retaining his divine nature.", confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const phil2_7_verse = {
  ref: 'Phil.2.7',
  sourceTokens: phil2_7_tokens,
  translation: phil2_7_translation,
  notes: phil2_7_notes,
};

/* ────────────────────────────────────────────────────────────
 * Verse 2:8 – Obedient to the point of death
 * ──────────────────────────────────────────────────────────── */

export const phil2_8_tokens: SourceToken[] = [
  {
    id: 'Phil.2.8.0',
    language: 'greek',
    text: 'ἐταπείνωσεν',
    transliteration: 'etapeinōsen',
    lemma: 'ταπεινόω',
    lemmaTranslit: 'tapeinoō',
    gloss: 'he humbled',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G5013',
    position: 0,
  },
  {
    id: 'Phil.2.8.1',
    language: 'greek',
    text: 'ἑαυτὸν',
    transliteration: 'heauton',
    lemma: 'ἑαυτοῦ',
    lemmaTranslit: 'heautou',
    gloss: 'himself',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G1438',
    position: 1,
  },
  {
    id: 'Phil.2.8.2',
    language: 'greek',
    text: 'γενόμενος',
    transliteration: 'genomenos',
    lemma: 'γίνομαι',
    lemmaTranslit: 'ginomai',
    gloss: 'becoming',
    morphology: { pos: 'verb', number: 'singular', tense: 'aorist', voice: 'middle', mood: 'participle', gender: 'masculine', case: 'nominative' },
    strongs: 'G1096',
    position: 2,
  },
  {
    id: 'Phil.2.8.3',
    language: 'greek',
    text: 'ὑπήκοος',
    transliteration: 'hypēkoos',
    lemma: 'ὑπήκοος',
    lemmaTranslit: 'hypēkoos',
    gloss: 'obedient',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G5255',
    position: 3,
  },
  {
    id: 'Phil.2.8.4',
    language: 'greek',
    text: 'μέχρι',
    transliteration: 'mechri',
    lemma: 'μέχρι',
    lemmaTranslit: 'mechri',
    gloss: 'to the point of',
    morphology: { pos: 'preposition' },
    strongs: 'G3360',
    position: 4,
  },
  {
    id: 'Phil.2.8.5',
    language: 'greek',
    text: 'θανάτου',
    transliteration: 'thanatou',
    lemma: 'θάνατος',
    lemmaTranslit: 'thanatos',
    gloss: 'death',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G2288',
    position: 5,
  },
  {
    id: 'Phil.2.8.6',
    language: 'greek',
    text: 'σταυροῦ',
    transliteration: 'staurou',
    lemma: 'σταυρός',
    lemmaTranslit: 'stauros',
    gloss: 'of a cross',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G4716',
    position: 6,
  },
];

export const phil2_8_translation: VerseTranslation = {
  verseRef: 'Phil.2.8',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'He humbled himself, becoming obedient to the point of death, even death of a cross.',
      spans: [
        { id: 'Phil.2.8.en.lit.0', text: 'He humbled himself,', position: 0, sourceTokenIds: ['Phil.2.8.0', 'Phil.2.8.1'], confidence: 'high' },
        { id: 'Phil.2.8.en.lit.1', text: 'becoming obedient', position: 1, sourceTokenIds: ['Phil.2.8.2', 'Phil.2.8.3'], confidence: 'high' },
        { id: 'Phil.2.8.en.lit.2', text: 'to the point of death, even death of a cross.', position: 2, sourceTokenIds: ['Phil.2.8.4', 'Phil.2.8.5', 'Phil.2.8.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'He humbled himself by becoming obedient to the point of death, even death on a cross.',
      spans: [
        { id: 'Phil.2.8.en.idi.0', text: 'He humbled himself by becoming obedient', position: 0, sourceTokenIds: ['Phil.2.8.0', 'Phil.2.8.1', 'Phil.2.8.2', 'Phil.2.8.3'], confidence: 'high' },
        { id: 'Phil.2.8.en.idi.1', text: 'to the point of death, even death on a cross.', position: 1, sourceTokenIds: ['Phil.2.8.4', 'Phil.2.8.5', 'Phil.2.8.6'], confidence: 'high' },
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

export const phil2_8_verse = {
  ref: 'Phil.2.8',
  sourceTokens: phil2_8_tokens,
  translation: phil2_8_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 2:9 – God has highly exalted him
 * ──────────────────────────────────────────────────────────── */

export const phil2_9_tokens: SourceToken[] = [
  {
    id: 'Phil.2.9.0',
    language: 'greek',
    text: 'διὸ',
    transliteration: 'dio',
    lemma: 'διό',
    lemmaTranslit: 'dio',
    gloss: 'therefore',
    morphology: { pos: 'conjunction' },
    strongs: 'G1352',
    position: 0,
  },
  {
    id: 'Phil.2.9.1',
    language: 'greek',
    text: 'καὶ',
    transliteration: 'kai',
    lemma: 'καί',
    lemmaTranslit: 'kai',
    gloss: 'also',
    morphology: { pos: 'conjunction' },
    strongs: 'G2532',
    position: 1,
  },
  {
    id: 'Phil.2.9.2',
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
    id: 'Phil.2.9.3',
    language: 'greek',
    text: 'θεὸς',
    transliteration: 'theos',
    lemma: 'θεός',
    lemmaTranslit: 'theos',
    gloss: 'God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G2316',
    position: 3,
  },
  {
    id: 'Phil.2.9.4',
    language: 'greek',
    text: 'αὐτὸν',
    transliteration: 'auton',
    lemma: 'αὐτός',
    lemmaTranslit: 'autos',
    gloss: 'him',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G846',
    position: 4,
  },
  {
    id: 'Phil.2.9.5',
    language: 'greek',
    text: 'ὑπερύψωσεν',
    transliteration: 'hyperypsōsen',
    lemma: 'ὑπερυψόω',
    lemmaTranslit: 'hyperypsoō',
    gloss: 'highly exalted',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G5251',
    position: 5,
  },
  {
    id: 'Phil.2.9.6',
    language: 'greek',
    text: 'ὄνομα',
    transliteration: 'onoma',
    lemma: 'ὄνομα',
    lemmaTranslit: 'onoma',
    gloss: 'name',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'accusative' },
    strongs: 'G3686',
    position: 6,
  },
];

export const phil2_9_translation: VerseTranslation = {
  verseRef: 'Phil.2.9',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Therefore also God him highly exalted and bestowed on him the name the one above every name.',
      spans: [
        { id: 'Phil.2.9.en.lit.0', text: 'Therefore also', position: 0, sourceTokenIds: ['Phil.2.9.0', 'Phil.2.9.1'], confidence: 'high' },
        { id: 'Phil.2.9.en.lit.1', text: 'God him highly exalted', position: 1, sourceTokenIds: ['Phil.2.9.2', 'Phil.2.9.3', 'Phil.2.9.4', 'Phil.2.9.5'], confidence: 'high' },
        { id: 'Phil.2.9.en.lit.2', text: 'and bestowed the name above every name.', position: 2, sourceTokenIds: ['Phil.2.9.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Therefore God has highly exalted him and bestowed on him the name that is above every name.',
      spans: [
        { id: 'Phil.2.9.en.idi.0', text: 'Therefore God has highly exalted him', position: 0, sourceTokenIds: ['Phil.2.9.0', 'Phil.2.9.1', 'Phil.2.9.2', 'Phil.2.9.3', 'Phil.2.9.4', 'Phil.2.9.5'], confidence: 'high' },
        { id: 'Phil.2.9.en.idi.1', text: 'and bestowed on him the name that is above every name.', position: 1, sourceTokenIds: ['Phil.2.9.6'], confidence: 'high' },
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

export const phil2_9_verse = {
  ref: 'Phil.2.9',
  sourceTokens: phil2_9_tokens,
  translation: phil2_9_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 2:11 – Jesus Christ is Lord
 * ──────────────────────────────────────────────────────────── */

export const phil2_11_tokens: SourceToken[] = [
  {
    id: 'Phil.2.11.0',
    language: 'greek',
    text: 'πᾶσα',
    transliteration: 'pasa',
    lemma: 'πᾶς',
    lemmaTranslit: 'pas',
    gloss: 'every',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G3956',
    position: 0,
  },
  {
    id: 'Phil.2.11.1',
    language: 'greek',
    text: 'γλῶσσα',
    transliteration: 'glōssa',
    lemma: 'γλῶσσα',
    lemmaTranslit: 'glōssa',
    gloss: 'tongue',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G1100',
    position: 1,
  },
  {
    id: 'Phil.2.11.2',
    language: 'greek',
    text: 'ἐξομολογήσηται',
    transliteration: 'exomologēsētai',
    lemma: 'ἐξομολογέω',
    lemmaTranslit: 'exomologeō',
    gloss: 'confess',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'middle', mood: 'subjunctive' },
    strongs: 'G1843',
    position: 2,
  },
  {
    id: 'Phil.2.11.3',
    language: 'greek',
    text: 'κύριος',
    transliteration: 'kyrios',
    lemma: 'κύριος',
    lemmaTranslit: 'kyrios',
    gloss: 'Lord',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G2962',
    position: 3,
  },
  {
    id: 'Phil.2.11.4',
    language: 'greek',
    text: 'Ἰησοῦς',
    transliteration: 'Iēsous',
    lemma: 'Ἰησοῦς',
    lemmaTranslit: 'Iēsous',
    gloss: 'Jesus',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G2424',
    position: 4,
  },
  {
    id: 'Phil.2.11.5',
    language: 'greek',
    text: 'Χριστός',
    transliteration: 'Christos',
    lemma: 'Χριστός',
    lemmaTranslit: 'Christos',
    gloss: 'Christ',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G5547',
    position: 5,
  },
  {
    id: 'Phil.2.11.6',
    language: 'greek',
    text: 'δόξαν',
    transliteration: 'doxan',
    lemma: 'δόξα',
    lemmaTranslit: 'doxa',
    gloss: 'glory',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G1391',
    position: 6,
  },
  {
    id: 'Phil.2.11.7',
    language: 'greek',
    text: 'πατρός',
    transliteration: 'patros',
    lemma: 'πατήρ',
    lemmaTranslit: 'patēr',
    gloss: 'of the Father',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G3962',
    position: 7,
  },
];

export const phil2_11_translation: VerseTranslation = {
  verseRef: 'Phil.2.11',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And every tongue confess that Lord is Jesus Christ, to the glory of God the Father.',
      spans: [
        { id: 'Phil.2.11.en.lit.0', text: 'Every tongue confess', position: 0, sourceTokenIds: ['Phil.2.11.0', 'Phil.2.11.1', 'Phil.2.11.2'], confidence: 'high' },
        { id: 'Phil.2.11.en.lit.1', text: 'that Lord is Jesus Christ,', position: 1, sourceTokenIds: ['Phil.2.11.3', 'Phil.2.11.4', 'Phil.2.11.5'], confidence: 'high' },
        { id: 'Phil.2.11.en.lit.2', text: 'to the glory of God the Father.', position: 2, sourceTokenIds: ['Phil.2.11.6', 'Phil.2.11.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Every tongue confess that Jesus Christ is Lord, to the glory of God the Father.',
      spans: [
        { id: 'Phil.2.11.en.idi.0', text: 'Every tongue confess that Jesus Christ is Lord,', position: 0, sourceTokenIds: ['Phil.2.11.0', 'Phil.2.11.1', 'Phil.2.11.2', 'Phil.2.11.3', 'Phil.2.11.4', 'Phil.2.11.5'], confidence: 'high' },
        { id: 'Phil.2.11.en.idi.1', text: 'to the glory of God the Father.', position: 1, sourceTokenIds: ['Phil.2.11.6', 'Phil.2.11.7'], confidence: 'high' },
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

export const phil2_11_notes: StudyNote[] = [
  { id: 'Phil.2.11.note.1', verseRef: 'Phil.2.11', sourceTokenIds: ['Phil.2.11.3'], category: 'theological', title: 'κύριος — Lord', content: "κύριος (kyrios) is the term used in the LXX to translate the divine name YHWH. The confession \"Jesus Christ is Lord\" thus ascribes to Jesus the divine identity of Israel's God, forming the earliest Christian creedal statement (cf. Romans 10:9).", confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const phil2_11_verse = {
  ref: 'Phil.2.11',
  sourceTokens: phil2_11_tokens,
  translation: phil2_11_translation,
  notes: phil2_11_notes,
};

/* ────────────────────────────────────────────────────────────
 * Export combined verses
 * ──────────────────────────────────────────────────────────── */

export const philippians2_1_30_verses = [
  phil2_1_verse,
  phil2_3_verse,
  phil2_5_verse,
  phil2_6_verse,
  phil2_7_verse,
  phil2_8_verse,
  phil2_9_verse,
  phil2_11_verse,
];

export default philippians2_1_30_verses;
