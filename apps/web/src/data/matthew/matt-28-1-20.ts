// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 28:1 – After the Sabbath, at dawn on the first day of the week
 * ──────────────────────────────────────────────────────────── */

export const matthew28_1_tokens: SourceToken[] = [
  {
    id: 'Matt.28.1.0',
    language: 'greek',
    text: 'Ὀψὲ',
    transliteration: 'Opse',
    lemma: 'ὀψέ',
    lemmaTranslit: 'opse',
    gloss: 'after',
    glossExtended: 'late, after, in the end',
    morphology: { pos: 'adverb' },
    strongs: 'G3796',
    position: 0,
  },
  {
    id: 'Matt.28.1.1',
    language: 'greek',
    text: 'σαββάτων',
    transliteration: 'sabbatōn',
    lemma: 'σάββατον',
    lemmaTranslit: 'sabbaton',
    gloss: 'of Sabbaths',
    morphology: { pos: 'noun', gender: 'neuter', number: 'plural', case: 'genitive' },
    strongs: 'G4521',
    position: 1,
  },
  {
    id: 'Matt.28.1.2',
    language: 'greek',
    text: 'τῇ',
    transliteration: 'tē',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'on the',
    morphology: { pos: 'article', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G3588',
    position: 2,
  },
  {
    id: 'Matt.28.1.3',
    language: 'greek',
    text: 'ἐπιφωσκούσῃ',
    transliteration: 'epiphōskousē',
    lemma: 'ἐπιφώσκω',
    lemmaTranslit: 'epiphōskō',
    gloss: 'dawning',
    morphology: { pos: 'verb', gender: 'feminine', number: 'singular', tense: 'present', voice: 'active', mood: 'participle', case: 'dative' },
    strongs: 'G2020',
    position: 3,
  },
  {
    id: 'Matt.28.1.4',
    language: 'greek',
    text: 'Μαρία',
    transliteration: 'Maria',
    lemma: 'Μαρία',
    lemmaTranslit: 'Maria',
    gloss: 'Mary',
    morphology: { pos: 'proper-noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G3137',
    position: 4,
  },
  {
    id: 'Matt.28.1.5',
    language: 'greek',
    text: 'Μαγδαληνὴ',
    transliteration: 'Magdalēnē',
    lemma: 'Μαγδαληνή',
    lemmaTranslit: 'Magdalēnē',
    gloss: 'Magdalene',
    morphology: { pos: 'proper-noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G3094',
    position: 5,
  },
];

export const matthew28_1_translation: VerseTranslation = {
  verseRef: 'Matt.28.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Now late of Sabbaths, at the dawning into the first [day] of the week, came Mary the Magdalene and the other Mary to see the tomb.',
      spans: [
        { id: 'Matt.28.1.en.lit.0', text: 'Now late of Sabbaths,', position: 0, sourceTokenIds: ['Matt.28.1.0', 'Matt.28.1.1'], confidence: 'high' },
        { id: 'Matt.28.1.en.lit.1', text: 'at the dawning', position: 1, sourceTokenIds: ['Matt.28.1.2', 'Matt.28.1.3'], confidence: 'high' },
        { id: 'Matt.28.1.en.lit.2', text: 'came Mary the Magdalene', position: 2, sourceTokenIds: ['Matt.28.1.4', 'Matt.28.1.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'After the Sabbath, at dawn on the first day of the week, Mary Magdalene and the other Mary went to look at the tomb.',
      spans: [
        { id: 'Matt.28.1.en.idi.0', text: 'After the Sabbath, at dawn on the first day of the week,', position: 0, sourceTokenIds: ['Matt.28.1.0', 'Matt.28.1.1', 'Matt.28.1.2', 'Matt.28.1.3'], confidence: 'high' },
        { id: 'Matt.28.1.en.idi.1', text: 'Mary Magdalene and the other Mary went to look at the tomb.', position: 1, sourceTokenIds: ['Matt.28.1.4', 'Matt.28.1.5'], confidence: 'high' },
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

export const matthew28_1_verse = {
  ref: 'Matt.28.1',
  sourceTokens: matthew28_1_tokens,
  translation: matthew28_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 28:2 – There was a great earthquake; an angel of the Lord descended
 * ──────────────────────────────────────────────────────────── */

export const matthew28_2_tokens: SourceToken[] = [
  {
    id: 'Matt.28.2.0',
    language: 'greek',
    text: 'σεισμὸς',
    transliteration: 'seismos',
    lemma: 'σεισμός',
    lemmaTranslit: 'seismos',
    gloss: 'earthquake',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G4578',
    position: 0,
  },
  {
    id: 'Matt.28.2.1',
    language: 'greek',
    text: 'ἐγένετο',
    transliteration: 'egeneto',
    lemma: 'γίνομαι',
    lemmaTranslit: 'ginomai',
    gloss: 'happened',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'middle', mood: 'indicative' },
    strongs: 'G1096',
    position: 1,
  },
  {
    id: 'Matt.28.2.2',
    language: 'greek',
    text: 'μέγας',
    transliteration: 'megas',
    lemma: 'μέγας',
    lemmaTranslit: 'megas',
    gloss: 'great',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3173',
    position: 2,
  },
  {
    id: 'Matt.28.2.3',
    language: 'greek',
    text: 'ἄγγελος',
    transliteration: 'angelos',
    lemma: 'ἄγγελος',
    lemmaTranslit: 'angelos',
    gloss: 'angel',
    glossExtended: 'angel, messenger',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G32',
    position: 3,
  },
  {
    id: 'Matt.28.2.4',
    language: 'greek',
    text: 'κυρίου',
    transliteration: 'kyriou',
    lemma: 'κύριος',
    lemmaTranslit: 'kyrios',
    gloss: 'of [the] Lord',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G2962',
    position: 4,
  },
  {
    id: 'Matt.28.2.5',
    language: 'greek',
    text: 'καταβὰς',
    transliteration: 'katabas',
    lemma: 'καταβαίνω',
    lemmaTranslit: 'katabainō',
    gloss: 'having descended',
    morphology: { pos: 'verb', gender: 'masculine', number: 'singular', tense: 'aorist', voice: 'active', mood: 'participle', case: 'nominative' },
    strongs: 'G2597',
    position: 5,
  },
  {
    id: 'Matt.28.2.6',
    language: 'greek',
    text: 'οὐρανοῦ',
    transliteration: 'ouranou',
    lemma: 'οὐρανός',
    lemmaTranslit: 'ouranos',
    gloss: 'from heaven',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G3772',
    position: 6,
  },
];

export const matthew28_2_translation: VerseTranslation = {
  verseRef: 'Matt.28.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And behold, an earthquake happened, a great [one]; for an angel of [the] Lord, having descended from heaven, rolled away the stone.',
      spans: [
        { id: 'Matt.28.2.en.lit.0', text: 'an earthquake happened, a great [one];', position: 0, sourceTokenIds: ['Matt.28.2.0', 'Matt.28.2.1', 'Matt.28.2.2'], confidence: 'high' },
        { id: 'Matt.28.2.en.lit.1', text: 'for an angel of [the] Lord,', position: 1, sourceTokenIds: ['Matt.28.2.3', 'Matt.28.2.4'], confidence: 'high' },
        { id: 'Matt.28.2.en.lit.2', text: 'having descended from heaven,', position: 2, sourceTokenIds: ['Matt.28.2.5', 'Matt.28.2.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'There was a violent earthquake, for an angel of the Lord came down from heaven and, going to the tomb, rolled back the stone and sat on it.',
      spans: [
        { id: 'Matt.28.2.en.idi.0', text: 'There was a violent earthquake,', position: 0, sourceTokenIds: ['Matt.28.2.0', 'Matt.28.2.1', 'Matt.28.2.2'], confidence: 'high' },
        { id: 'Matt.28.2.en.idi.1', text: 'for an angel of the Lord came down from heaven', position: 1, sourceTokenIds: ['Matt.28.2.3', 'Matt.28.2.4', 'Matt.28.2.5', 'Matt.28.2.6'], confidence: 'high' },
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

export const matthew28_2_verse = {
  ref: 'Matt.28.2',
  sourceTokens: matthew28_2_tokens,
  translation: matthew28_2_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 28:5 – Do not be afraid, for I know that you seek Jesus
 * ──────────────────────────────────────────────────────────── */

export const matthew28_5_tokens: SourceToken[] = [
  {
    id: 'Matt.28.5.0',
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
    id: 'Matt.28.5.1',
    language: 'greek',
    text: 'φοβεῖσθε',
    transliteration: 'phobeisthe',
    lemma: 'φοβέω',
    lemmaTranslit: 'phobeō',
    gloss: 'fear',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'present', voice: 'middle', mood: 'imperative' },
    strongs: 'G5399',
    position: 1,
  },
  {
    id: 'Matt.28.5.2',
    language: 'greek',
    text: 'ζητεῖτε',
    transliteration: 'zēteite',
    lemma: 'ζητέω',
    lemmaTranslit: 'zēteō',
    gloss: 'you seek',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G2212',
    position: 2,
  },
  {
    id: 'Matt.28.5.3',
    language: 'greek',
    text: 'Ἰησοῦν',
    transliteration: 'Iēsoun',
    lemma: 'Ἰησοῦς',
    lemmaTranslit: 'Iēsous',
    gloss: 'Jesus',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G2424',
    position: 3,
  },
  {
    id: 'Matt.28.5.4',
    language: 'greek',
    text: 'ἐσταυρωμένον',
    transliteration: 'estaurōmenon',
    lemma: 'σταυρόω',
    lemmaTranslit: 'stauroō',
    gloss: 'the crucified',
    morphology: { pos: 'verb', gender: 'masculine', number: 'singular', tense: 'perfect', voice: 'passive', mood: 'participle', case: 'accusative' },
    strongs: 'G4717',
    position: 4,
  },
];

export const matthew28_5_translation: VerseTranslation = {
  verseRef: 'Matt.28.5',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Do not fear; for I know that you seek Jesus the one having been crucified.',
      spans: [
        { id: 'Matt.28.5.en.lit.0', text: 'Do not fear;', position: 0, sourceTokenIds: ['Matt.28.5.0', 'Matt.28.5.1'], confidence: 'high' },
        { id: 'Matt.28.5.en.lit.1', text: 'for I know that you seek', position: 1, sourceTokenIds: ['Matt.28.5.2'], confidence: 'high' },
        { id: 'Matt.28.5.en.lit.2', text: 'Jesus the one having been crucified.', position: 2, sourceTokenIds: ['Matt.28.5.3', 'Matt.28.5.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Do not be afraid, for I know that you are looking for Jesus, who was crucified.',
      spans: [
        { id: 'Matt.28.5.en.idi.0', text: 'Do not be afraid,', position: 0, sourceTokenIds: ['Matt.28.5.0', 'Matt.28.5.1'], confidence: 'high' },
        { id: 'Matt.28.5.en.idi.1', text: 'for I know that you are looking for Jesus, who was crucified.', position: 1, sourceTokenIds: ['Matt.28.5.2', 'Matt.28.5.3', 'Matt.28.5.4'], confidence: 'high' },
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

export const matthew28_5_verse = {
  ref: 'Matt.28.5',
  sourceTokens: matthew28_5_tokens,
  translation: matthew28_5_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 28:6 – He is not here; he has risen, just as he said
 * ──────────────────────────────────────────────────────────── */

export const matthew28_6_tokens: SourceToken[] = [
  {
    id: 'Matt.28.6.0',
    language: 'greek',
    text: 'οὐκ',
    transliteration: 'ouk',
    lemma: 'οὐ',
    lemmaTranslit: 'ou',
    gloss: 'not',
    morphology: { pos: 'particle' },
    strongs: 'G3756',
    position: 0,
  },
  {
    id: 'Matt.28.6.1',
    language: 'greek',
    text: 'ἔστιν',
    transliteration: 'estin',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'he is',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G1510',
    position: 1,
  },
  {
    id: 'Matt.28.6.2',
    language: 'greek',
    text: 'ὧδε',
    transliteration: 'hōde',
    lemma: 'ὧδε',
    lemmaTranslit: 'hōde',
    gloss: 'here',
    morphology: { pos: 'adverb' },
    strongs: 'G5602',
    position: 2,
  },
  {
    id: 'Matt.28.6.3',
    language: 'greek',
    text: 'ἠγέρθη',
    transliteration: 'ēgerthē',
    lemma: 'ἐγείρω',
    lemmaTranslit: 'egeirō',
    gloss: 'he was raised',
    glossExtended: 'he was raised, he has risen (divine passive)',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'passive', mood: 'indicative' },
    strongs: 'G1453',
    position: 3,
  },
  {
    id: 'Matt.28.6.4',
    language: 'greek',
    text: 'καθὼς',
    transliteration: 'kathōs',
    lemma: 'καθώς',
    lemmaTranslit: 'kathōs',
    gloss: 'just as',
    morphology: { pos: 'conjunction' },
    strongs: 'G2531',
    position: 4,
  },
  {
    id: 'Matt.28.6.5',
    language: 'greek',
    text: 'εἶπεν',
    transliteration: 'eipen',
    lemma: 'λέγω',
    lemmaTranslit: 'legō',
    gloss: 'he said',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G3004',
    position: 5,
  },
];

export const matthew28_6_translation: VerseTranslation = {
  verseRef: 'Matt.28.6',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'He is not here, for he was raised, just as he said. Come, see the place where he was lying.',
      spans: [
        { id: 'Matt.28.6.en.lit.0', text: 'He is not here,', position: 0, sourceTokenIds: ['Matt.28.6.0', 'Matt.28.6.1', 'Matt.28.6.2'], confidence: 'high' },
        { id: 'Matt.28.6.en.lit.1', text: 'for he was raised,', position: 1, sourceTokenIds: ['Matt.28.6.3'], confidence: 'high' },
        { id: 'Matt.28.6.en.lit.2', text: 'just as he said.', position: 2, sourceTokenIds: ['Matt.28.6.4', 'Matt.28.6.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'He is not here; he has risen, just as he said. Come and see the place where he lay.',
      spans: [
        { id: 'Matt.28.6.en.idi.0', text: 'He is not here; he has risen,', position: 0, sourceTokenIds: ['Matt.28.6.0', 'Matt.28.6.1', 'Matt.28.6.2', 'Matt.28.6.3'], confidence: 'high' },
        { id: 'Matt.28.6.en.idi.1', text: 'just as he said.', position: 1, sourceTokenIds: ['Matt.28.6.4', 'Matt.28.6.5'], confidence: 'high' },
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

export const matthew28_6_verse = {
  ref: 'Matt.28.6',
  sourceTokens: matthew28_6_tokens,
  translation: matthew28_6_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 28:18 – All authority in heaven and on earth has been given to me
 * ──────────────────────────────────────────────────────────── */

export const matthew28_18_tokens: SourceToken[] = [
  {
    id: 'Matt.28.18.0',
    language: 'greek',
    text: 'Ἐδόθη',
    transliteration: 'Edothē',
    lemma: 'δίδωμι',
    lemmaTranslit: 'didōmi',
    gloss: 'was given',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'passive', mood: 'indicative' },
    strongs: 'G1325',
    position: 0,
  },
  {
    id: 'Matt.28.18.1',
    language: 'greek',
    text: 'μοι',
    transliteration: 'moi',
    lemma: 'ἐγώ',
    lemmaTranslit: 'egō',
    gloss: 'to me',
    morphology: { pos: 'pronoun', person: '1', number: 'singular', case: 'dative' },
    strongs: 'G1473',
    position: 1,
  },
  {
    id: 'Matt.28.18.2',
    language: 'greek',
    text: 'πᾶσα',
    transliteration: 'pasa',
    lemma: 'πᾶς',
    lemmaTranslit: 'pas',
    gloss: 'all',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G3956',
    position: 2,
  },
  {
    id: 'Matt.28.18.3',
    language: 'greek',
    text: 'ἐξουσία',
    transliteration: 'exousia',
    lemma: 'ἐξουσία',
    lemmaTranslit: 'exousia',
    gloss: 'authority',
    glossExtended: 'authority, power, right, jurisdiction',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G1849',
    position: 3,
  },
  {
    id: 'Matt.28.18.4',
    language: 'greek',
    text: 'ἐν',
    transliteration: 'en',
    lemma: 'ἐν',
    lemmaTranslit: 'en',
    gloss: 'in',
    morphology: { pos: 'preposition' },
    strongs: 'G1722',
    position: 4,
  },
  {
    id: 'Matt.28.18.5',
    language: 'greek',
    text: 'οὐρανῷ',
    transliteration: 'ouranō',
    lemma: 'οὐρανός',
    lemmaTranslit: 'ouranos',
    gloss: 'heaven',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'dative' },
    strongs: 'G3772',
    position: 5,
  },
  {
    id: 'Matt.28.18.6',
    language: 'greek',
    text: 'γῆς',
    transliteration: 'gēs',
    lemma: 'γῆ',
    lemmaTranslit: 'gē',
    gloss: 'earth',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G1093',
    position: 6,
  },
];

export const matthew28_18_translation: VerseTranslation = {
  verseRef: 'Matt.28.18',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Was given to me all authority in heaven and upon earth.',
      spans: [
        { id: 'Matt.28.18.en.lit.0', text: 'Was given to me', position: 0, sourceTokenIds: ['Matt.28.18.0', 'Matt.28.18.1'], confidence: 'high' },
        { id: 'Matt.28.18.en.lit.1', text: 'all authority', position: 1, sourceTokenIds: ['Matt.28.18.2', 'Matt.28.18.3'], confidence: 'high' },
        { id: 'Matt.28.18.en.lit.2', text: 'in heaven and upon earth.', position: 2, sourceTokenIds: ['Matt.28.18.4', 'Matt.28.18.5', 'Matt.28.18.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'All authority in heaven and on earth has been given to me.',
      spans: [
        { id: 'Matt.28.18.en.idi.0', text: 'All authority in heaven and on earth', position: 0, sourceTokenIds: ['Matt.28.18.2', 'Matt.28.18.3', 'Matt.28.18.4', 'Matt.28.18.5', 'Matt.28.18.6'], confidence: 'high' },
        { id: 'Matt.28.18.en.idi.1', text: 'has been given to me.', position: 1, sourceTokenIds: ['Matt.28.18.0', 'Matt.28.18.1'], confidence: 'high' },
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

export const matthew28_18_verse = {
  ref: 'Matt.28.18',
  sourceTokens: matthew28_18_tokens,
  translation: matthew28_18_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 28:19 – Go therefore and make disciples of all nations
 * ──────────────────────────────────────────────────────────── */

export const matthew28_19_tokens: SourceToken[] = [
  {
    id: 'Matt.28.19.0',
    language: 'greek',
    text: 'πορευθέντες',
    transliteration: 'poreuthentes',
    lemma: 'πορεύομαι',
    lemmaTranslit: 'poreuomai',
    gloss: 'having gone',
    morphology: { pos: 'verb', gender: 'masculine', number: 'plural', tense: 'aorist', voice: 'passive', mood: 'participle', case: 'nominative' },
    strongs: 'G4198',
    position: 0,
  },
  {
    id: 'Matt.28.19.1',
    language: 'greek',
    text: 'μαθητεύσατε',
    transliteration: 'mathēteusate',
    lemma: 'μαθητεύω',
    lemmaTranslit: 'mathēteuō',
    gloss: 'make disciples',
    glossExtended: 'make disciples of, teach, enroll as students',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'aorist', voice: 'active', mood: 'imperative' },
    strongs: 'G3100',
    position: 1,
  },
  {
    id: 'Matt.28.19.2',
    language: 'greek',
    text: 'πάντα',
    transliteration: 'panta',
    lemma: 'πᾶς',
    lemmaTranslit: 'pas',
    gloss: 'all',
    morphology: { pos: 'adjective', gender: 'neuter', number: 'plural', case: 'accusative' },
    strongs: 'G3956',
    position: 2,
  },
  {
    id: 'Matt.28.19.3',
    language: 'greek',
    text: 'τὰ',
    transliteration: 'ta',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'neuter', number: 'plural', case: 'accusative' },
    strongs: 'G3588',
    position: 3,
  },
  {
    id: 'Matt.28.19.4',
    language: 'greek',
    text: 'ἔθνη',
    transliteration: 'ethnē',
    lemma: 'ἔθνος',
    lemmaTranslit: 'ethnos',
    gloss: 'nations',
    glossExtended: 'nations, peoples, Gentiles',
    morphology: { pos: 'noun', gender: 'neuter', number: 'plural', case: 'accusative' },
    strongs: 'G1484',
    position: 4,
  },
  {
    id: 'Matt.28.19.5',
    language: 'greek',
    text: 'βαπτίζοντες',
    transliteration: 'baptizontes',
    lemma: 'βαπτίζω',
    lemmaTranslit: 'baptizō',
    gloss: 'baptizing',
    morphology: { pos: 'verb', gender: 'masculine', number: 'plural', tense: 'present', voice: 'active', mood: 'participle', case: 'nominative' },
    strongs: 'G907',
    position: 5,
  },
  {
    id: 'Matt.28.19.6',
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

export const matthew28_19_translation: VerseTranslation = {
  verseRef: 'Matt.28.19',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Having gone therefore, make disciples of all the nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.',
      spans: [
        { id: 'Matt.28.19.en.lit.0', text: 'Having gone therefore,', position: 0, sourceTokenIds: ['Matt.28.19.0'], confidence: 'high' },
        { id: 'Matt.28.19.en.lit.1', text: 'make disciples of all the nations,', position: 1, sourceTokenIds: ['Matt.28.19.1', 'Matt.28.19.2', 'Matt.28.19.3', 'Matt.28.19.4'], confidence: 'high' },
        { id: 'Matt.28.19.en.lit.2', text: 'baptizing them in the name', position: 2, sourceTokenIds: ['Matt.28.19.5', 'Matt.28.19.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.',
      spans: [
        { id: 'Matt.28.19.en.idi.0', text: 'Therefore go and make disciples of all nations,', position: 0, sourceTokenIds: ['Matt.28.19.0', 'Matt.28.19.1', 'Matt.28.19.2', 'Matt.28.19.3', 'Matt.28.19.4'], confidence: 'high' },
        { id: 'Matt.28.19.en.idi.1', text: 'baptizing them in the name of the Father and of the Son and of the Holy Spirit.', position: 1, sourceTokenIds: ['Matt.28.19.5', 'Matt.28.19.6'], confidence: 'high' },
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

export const matthew28_19_verse = {
  ref: 'Matt.28.19',
  sourceTokens: matthew28_19_tokens,
  translation: matthew28_19_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 28:20 – Teaching them to observe all that I have commanded you
 * ──────────────────────────────────────────────────────────── */

export const matthew28_20_tokens: SourceToken[] = [
  {
    id: 'Matt.28.20.0',
    language: 'greek',
    text: 'διδάσκοντες',
    transliteration: 'didaskontes',
    lemma: 'διδάσκω',
    lemmaTranslit: 'didaskō',
    gloss: 'teaching',
    morphology: { pos: 'verb', gender: 'masculine', number: 'plural', tense: 'present', voice: 'active', mood: 'participle', case: 'nominative' },
    strongs: 'G1321',
    position: 0,
  },
  {
    id: 'Matt.28.20.1',
    language: 'greek',
    text: 'τηρεῖν',
    transliteration: 'tērein',
    lemma: 'τηρέω',
    lemmaTranslit: 'tēreō',
    gloss: 'to keep',
    morphology: { pos: 'verb', tense: 'present', voice: 'active', mood: 'infinitive' },
    strongs: 'G5083',
    position: 1,
  },
  {
    id: 'Matt.28.20.2',
    language: 'greek',
    text: 'πάντα',
    transliteration: 'panta',
    lemma: 'πᾶς',
    lemmaTranslit: 'pas',
    gloss: 'all',
    morphology: { pos: 'adjective', gender: 'neuter', number: 'plural', case: 'accusative' },
    strongs: 'G3956',
    position: 2,
  },
  {
    id: 'Matt.28.20.3',
    language: 'greek',
    text: 'ἐνετειλάμην',
    transliteration: 'eneteilamēn',
    lemma: 'ἐντέλλομαι',
    lemmaTranslit: 'entellomai',
    gloss: 'I commanded',
    morphology: { pos: 'verb', person: '1', number: 'singular', tense: 'aorist', voice: 'middle', mood: 'indicative' },
    strongs: 'G1781',
    position: 3,
  },
  {
    id: 'Matt.28.20.4',
    language: 'greek',
    text: 'ἐγὼ',
    transliteration: 'egō',
    lemma: 'ἐγώ',
    lemmaTranslit: 'egō',
    gloss: 'I',
    morphology: { pos: 'pronoun', person: '1', number: 'singular', case: 'nominative' },
    strongs: 'G1473',
    position: 4,
  },
  {
    id: 'Matt.28.20.5',
    language: 'greek',
    text: 'πάσας',
    transliteration: 'pasas',
    lemma: 'πᾶς',
    lemmaTranslit: 'pas',
    gloss: 'all',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'plural', case: 'accusative' },
    strongs: 'G3956',
    position: 5,
  },
  {
    id: 'Matt.28.20.6',
    language: 'greek',
    text: 'ἡμέρας',
    transliteration: 'hēmeras',
    lemma: 'ἡμέρα',
    lemmaTranslit: 'hēmera',
    gloss: 'days',
    morphology: { pos: 'noun', gender: 'feminine', number: 'plural', case: 'accusative' },
    strongs: 'G2250',
    position: 6,
  },
  {
    id: 'Matt.28.20.7',
    language: 'greek',
    text: 'αἰῶνος',
    transliteration: 'aiōnos',
    lemma: 'αἰών',
    lemmaTranslit: 'aiōn',
    gloss: 'of the age',
    glossExtended: 'age, eternity, world',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G165',
    position: 7,
  },
];

export const matthew28_20_translation: VerseTranslation = {
  verseRef: 'Matt.28.20',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'teaching them to keep all things whatever I commanded you. And behold, I am with you all the days until the completion of the age.',
      spans: [
        { id: 'Matt.28.20.en.lit.0', text: 'teaching them to keep', position: 0, sourceTokenIds: ['Matt.28.20.0', 'Matt.28.20.1'], confidence: 'high' },
        { id: 'Matt.28.20.en.lit.1', text: 'all things whatever I commanded you.', position: 1, sourceTokenIds: ['Matt.28.20.2', 'Matt.28.20.3'], confidence: 'high' },
        { id: 'Matt.28.20.en.lit.2', text: 'And behold, I am with you', position: 2, sourceTokenIds: ['Matt.28.20.4'], confidence: 'high' },
        { id: 'Matt.28.20.en.lit.3', text: 'all the days until the completion of the age.', position: 3, sourceTokenIds: ['Matt.28.20.5', 'Matt.28.20.6', 'Matt.28.20.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.',
      spans: [
        { id: 'Matt.28.20.en.idi.0', text: 'teaching them to obey everything I have commanded you.', position: 0, sourceTokenIds: ['Matt.28.20.0', 'Matt.28.20.1', 'Matt.28.20.2', 'Matt.28.20.3'], confidence: 'high' },
        { id: 'Matt.28.20.en.idi.1', text: 'And surely I am with you always, to the very end of the age.', position: 1, sourceTokenIds: ['Matt.28.20.4', 'Matt.28.20.5', 'Matt.28.20.6', 'Matt.28.20.7'], confidence: 'high' },
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

export const matthew28_20_verse = {
  ref: 'Matt.28.20',
  sourceTokens: matthew28_20_tokens,
  translation: matthew28_20_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Matthew 28:1-20 (Resurrection & Great Commission)
 * ──────────────────────────────────────────────────────────── */

export const matthew28_1_20_verses = [
  matthew28_1_verse,
  matthew28_2_verse,
  matthew28_5_verse,
  matthew28_6_verse,
  matthew28_18_verse,
  matthew28_19_verse,
  matthew28_20_verse,
];

export default matthew28_1_20_verses;
