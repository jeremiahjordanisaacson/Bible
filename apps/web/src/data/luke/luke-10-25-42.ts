// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 10:25 – Teacher, what shall I do to inherit eternal life?
 * ──────────────────────────────────────────────────────────── */

export const luke10_25_tokens: SourceToken[] = [
  {
    id: 'Luke.10.25.0',
    language: 'greek',
    text: 'Διδάσκαλε',
    transliteration: 'Didaskale',
    lemma: 'διδάσκαλος',
    lemmaTranslit: 'didaskalos',
    gloss: 'Teacher',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'vocative' },
    strongs: 'G1320',
    position: 0,
  },
  {
    id: 'Luke.10.25.1',
    language: 'greek',
    text: 'τί',
    transliteration: 'ti',
    lemma: 'τίς',
    lemmaTranslit: 'tis',
    gloss: 'what',
    morphology: { pos: 'pronoun', gender: 'neuter', number: 'singular', case: 'accusative' },
    strongs: 'G5101',
    position: 1,
  },
  {
    id: 'Luke.10.25.2',
    language: 'greek',
    text: 'ποιήσας',
    transliteration: 'poiēsas',
    lemma: 'ποιέω',
    lemmaTranslit: 'poieō',
    gloss: 'having done',
    morphology: { pos: 'verb', gender: 'masculine', number: 'singular', tense: 'aorist', voice: 'active', mood: 'participle', case: 'nominative' },
    strongs: 'G4160',
    position: 2,
  },
  {
    id: 'Luke.10.25.3',
    language: 'greek',
    text: 'ζωὴν',
    transliteration: 'zōēn',
    lemma: 'ζωή',
    lemmaTranslit: 'zōē',
    gloss: 'life',
    glossExtended: 'life, eternal life',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G2222',
    position: 3,
  },
  {
    id: 'Luke.10.25.4',
    language: 'greek',
    text: 'αἰώνιον',
    transliteration: 'aiōnion',
    lemma: 'αἰώνιος',
    lemmaTranslit: 'aiōnios',
    gloss: 'eternal',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G166',
    position: 4,
  },
  {
    id: 'Luke.10.25.5',
    language: 'greek',
    text: 'κληρονομήσω',
    transliteration: 'klēronomēsō',
    lemma: 'κληρονομέω',
    lemmaTranslit: 'klēronomeō',
    gloss: 'shall I inherit',
    morphology: { pos: 'verb', person: '1', number: 'singular', tense: 'future', voice: 'active', mood: 'indicative' },
    strongs: 'G2816',
    position: 5,
  },
];

export const luke10_25_translation: VerseTranslation = {
  verseRef: 'Luke.10.25',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Teacher, what having done, life eternal shall I inherit?',
      spans: [
        { id: 'Luke.10.25.en.lit.0', text: 'Teacher,', position: 0, sourceTokenIds: ['Luke.10.25.0'], confidence: 'high' },
        { id: 'Luke.10.25.en.lit.1', text: 'what having done,', position: 1, sourceTokenIds: ['Luke.10.25.1', 'Luke.10.25.2'], confidence: 'high' },
        { id: 'Luke.10.25.en.lit.2', text: 'life eternal shall I inherit?', position: 2, sourceTokenIds: ['Luke.10.25.3', 'Luke.10.25.4', 'Luke.10.25.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Teacher, what must I do to inherit eternal life?',
      spans: [
        { id: 'Luke.10.25.en.idi.0', text: 'Teacher,', position: 0, sourceTokenIds: ['Luke.10.25.0'], confidence: 'high' },
        { id: 'Luke.10.25.en.idi.1', text: 'what must I do', position: 1, sourceTokenIds: ['Luke.10.25.1', 'Luke.10.25.2'], confidence: 'high' },
        { id: 'Luke.10.25.en.idi.2', text: 'to inherit eternal life?', position: 2, sourceTokenIds: ['Luke.10.25.3', 'Luke.10.25.4', 'Luke.10.25.5'], confidence: 'high' },
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

export const luke10_25_verse = {
  ref: 'Luke.10.25',
  sourceTokens: luke10_25_tokens,
  translation: luke10_25_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 10:27 – You shall love the Lord your God with all your heart
 * ──────────────────────────────────────────────────────────── */

export const luke10_27_tokens: SourceToken[] = [
  {
    id: 'Luke.10.27.0',
    language: 'greek',
    text: 'ἀγαπήσεις',
    transliteration: 'agapēseis',
    lemma: 'ἀγαπάω',
    lemmaTranslit: 'agapaō',
    gloss: 'you shall love',
    glossExtended: 'love unconditionally, love with commitment',
    morphology: { pos: 'verb', person: '2', number: 'singular', tense: 'future', voice: 'active', mood: 'indicative' },
    strongs: 'G25',
    position: 0,
  },
  {
    id: 'Luke.10.27.1',
    language: 'greek',
    text: 'κύριον',
    transliteration: 'kyrion',
    lemma: 'κύριος',
    lemmaTranslit: 'kyrios',
    gloss: 'Lord',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G2962',
    position: 1,
  },
  {
    id: 'Luke.10.27.2',
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
    id: 'Luke.10.27.3',
    language: 'greek',
    text: 'θεόν',
    transliteration: 'theon',
    lemma: 'θεός',
    lemmaTranslit: 'theos',
    gloss: 'God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G2316',
    position: 3,
  },
  {
    id: 'Luke.10.27.4',
    language: 'greek',
    text: 'σου',
    transliteration: 'sou',
    lemma: 'σύ',
    lemmaTranslit: 'sy',
    gloss: 'your',
    morphology: { pos: 'pronoun', person: '2', number: 'singular', case: 'genitive' },
    strongs: 'G4771',
    position: 4,
  },
  {
    id: 'Luke.10.27.5',
    language: 'greek',
    text: 'ἐξ',
    transliteration: 'ex',
    lemma: 'ἐκ',
    lemmaTranslit: 'ek',
    gloss: 'with',
    morphology: { pos: 'preposition' },
    strongs: 'G1537',
    position: 5,
  },
  {
    id: 'Luke.10.27.6',
    language: 'greek',
    text: 'ὅλης',
    transliteration: 'holēs',
    lemma: 'ὅλος',
    lemmaTranslit: 'holos',
    gloss: 'all',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G3650',
    position: 6,
  },
];

export const luke10_27_translation: VerseTranslation = {
  verseRef: 'Luke.10.27',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'You shall love [the] Lord the God of you out of all your heart.',
      spans: [
        { id: 'Luke.10.27.en.lit.0', text: 'You shall love', position: 0, sourceTokenIds: ['Luke.10.27.0'], confidence: 'high' },
        { id: 'Luke.10.27.en.lit.1', text: '[the] Lord the God of you', position: 1, sourceTokenIds: ['Luke.10.27.1', 'Luke.10.27.2', 'Luke.10.27.3', 'Luke.10.27.4'], confidence: 'high' },
        { id: 'Luke.10.27.en.lit.2', text: 'out of all your heart.', position: 2, sourceTokenIds: ['Luke.10.27.5', 'Luke.10.27.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'You shall love the Lord your God with all your heart.',
      spans: [
        { id: 'Luke.10.27.en.idi.0', text: 'You shall love', position: 0, sourceTokenIds: ['Luke.10.27.0'], confidence: 'high' },
        { id: 'Luke.10.27.en.idi.1', text: 'the Lord your God', position: 1, sourceTokenIds: ['Luke.10.27.1', 'Luke.10.27.2', 'Luke.10.27.3', 'Luke.10.27.4'], confidence: 'high' },
        { id: 'Luke.10.27.en.idi.2', text: 'with all your heart.', position: 2, sourceTokenIds: ['Luke.10.27.5', 'Luke.10.27.6'], confidence: 'high' },
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

export const luke10_27_verse = {
  ref: 'Luke.10.27',
  sourceTokens: luke10_27_tokens,
  translation: luke10_27_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 10:33 – A Samaritan, as he journeyed, came…and had compassion
 * ──────────────────────────────────────────────────────────── */

export const luke10_33_tokens: SourceToken[] = [
  {
    id: 'Luke.10.33.0',
    language: 'greek',
    text: 'Σαμαρίτης',
    transliteration: 'Samaritēs',
    lemma: 'Σαμαρίτης',
    lemmaTranslit: 'Samaritēs',
    gloss: 'Samaritan',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G4541',
    position: 0,
  },
  {
    id: 'Luke.10.33.1',
    language: 'greek',
    text: 'ὁδεύων',
    transliteration: 'hodeuōn',
    lemma: 'ὁδεύω',
    lemmaTranslit: 'hodeuō',
    gloss: 'journeying',
    morphology: { pos: 'verb', gender: 'masculine', number: 'singular', tense: 'present', voice: 'active', mood: 'participle', case: 'nominative' },
    strongs: 'G3593',
    position: 1,
  },
  {
    id: 'Luke.10.33.2',
    language: 'greek',
    text: 'ἦλθεν',
    transliteration: 'ēlthen',
    lemma: 'ἔρχομαι',
    lemmaTranslit: 'erchomai',
    gloss: 'came',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G2064',
    position: 2,
  },
  {
    id: 'Luke.10.33.3',
    language: 'greek',
    text: 'ἰδὼν',
    transliteration: 'idōn',
    lemma: 'ὁράω',
    lemmaTranslit: 'horaō',
    gloss: 'having seen',
    morphology: { pos: 'verb', gender: 'masculine', number: 'singular', tense: 'aorist', voice: 'active', mood: 'participle', case: 'nominative' },
    strongs: 'G3708',
    position: 3,
  },
  {
    id: 'Luke.10.33.4',
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
    id: 'Luke.10.33.5',
    language: 'greek',
    text: 'ἐσπλαγχνίσθη',
    transliteration: 'esplanchnisthē',
    lemma: 'σπλαγχνίζομαι',
    lemmaTranslit: 'splanchnizomai',
    gloss: 'had compassion',
    glossExtended: 'moved with compassion, felt deep pity',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'passive', mood: 'indicative' },
    strongs: 'G4697',
    position: 5,
  },
];

export const luke10_33_translation: VerseTranslation = {
  verseRef: 'Luke.10.33',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'But a certain Samaritan, journeying, came to him, and having seen him, had compassion.',
      spans: [
        { id: 'Luke.10.33.en.lit.0', text: 'But a certain Samaritan, journeying,', position: 0, sourceTokenIds: ['Luke.10.33.0', 'Luke.10.33.1'], confidence: 'high' },
        { id: 'Luke.10.33.en.lit.1', text: 'came to him,', position: 1, sourceTokenIds: ['Luke.10.33.2'], confidence: 'high' },
        { id: 'Luke.10.33.en.lit.2', text: 'and having seen him, had compassion.', position: 2, sourceTokenIds: ['Luke.10.33.3', 'Luke.10.33.4', 'Luke.10.33.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'But a Samaritan, as he traveled, came where the man was; and when he saw him, he took pity on him.',
      spans: [
        { id: 'Luke.10.33.en.idi.0', text: 'But a Samaritan, as he traveled,', position: 0, sourceTokenIds: ['Luke.10.33.0', 'Luke.10.33.1'], confidence: 'high' },
        { id: 'Luke.10.33.en.idi.1', text: 'came where the man was;', position: 1, sourceTokenIds: ['Luke.10.33.2'], confidence: 'high' },
        { id: 'Luke.10.33.en.idi.2', text: 'and when he saw him, he took pity on him.', position: 2, sourceTokenIds: ['Luke.10.33.3', 'Luke.10.33.4', 'Luke.10.33.5'], confidence: 'high' },
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

export const luke10_33_verse = {
  ref: 'Luke.10.33',
  sourceTokens: luke10_33_tokens,
  translation: luke10_33_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 10:37 – Go and do likewise
 * ──────────────────────────────────────────────────────────── */

export const luke10_37_tokens: SourceToken[] = [
  {
    id: 'Luke.10.37.0',
    language: 'greek',
    text: 'πορεύου',
    transliteration: 'poreuou',
    lemma: 'πορεύομαι',
    lemmaTranslit: 'poreuomai',
    gloss: 'go',
    morphology: { pos: 'verb', person: '2', number: 'singular', tense: 'present', voice: 'middle', mood: 'imperative' },
    strongs: 'G4198',
    position: 0,
  },
  {
    id: 'Luke.10.37.1',
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
    id: 'Luke.10.37.2',
    language: 'greek',
    text: 'σὺ',
    transliteration: 'sy',
    lemma: 'σύ',
    lemmaTranslit: 'sy',
    gloss: 'you',
    morphology: { pos: 'pronoun', person: '2', number: 'singular', case: 'nominative' },
    strongs: 'G4771',
    position: 2,
  },
  {
    id: 'Luke.10.37.3',
    language: 'greek',
    text: 'ποίει',
    transliteration: 'poiei',
    lemma: 'ποιέω',
    lemmaTranslit: 'poieō',
    gloss: 'do',
    morphology: { pos: 'verb', person: '2', number: 'singular', tense: 'present', voice: 'active', mood: 'imperative' },
    strongs: 'G4160',
    position: 3,
  },
  {
    id: 'Luke.10.37.4',
    language: 'greek',
    text: 'ὁμοίως',
    transliteration: 'homoiōs',
    lemma: 'ὁμοίως',
    lemmaTranslit: 'homoiōs',
    gloss: 'likewise',
    morphology: { pos: 'adverb' },
    strongs: 'G3668',
    position: 4,
  },
];

export const luke10_37_translation: VerseTranslation = {
  verseRef: 'Luke.10.37',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Go, and you do likewise.',
      spans: [
        { id: 'Luke.10.37.en.lit.0', text: 'Go,', position: 0, sourceTokenIds: ['Luke.10.37.0'], confidence: 'high' },
        { id: 'Luke.10.37.en.lit.1', text: 'and you', position: 1, sourceTokenIds: ['Luke.10.37.1', 'Luke.10.37.2'], confidence: 'high' },
        { id: 'Luke.10.37.en.lit.2', text: 'do likewise.', position: 2, sourceTokenIds: ['Luke.10.37.3', 'Luke.10.37.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Go and do likewise.',
      spans: [
        { id: 'Luke.10.37.en.idi.0', text: 'Go', position: 0, sourceTokenIds: ['Luke.10.37.0'], confidence: 'high' },
        { id: 'Luke.10.37.en.idi.1', text: 'and do likewise.', position: 1, sourceTokenIds: ['Luke.10.37.1', 'Luke.10.37.2', 'Luke.10.37.3', 'Luke.10.37.4'], confidence: 'high' },
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

export const luke10_37_verse = {
  ref: 'Luke.10.37',
  sourceTokens: luke10_37_tokens,
  translation: luke10_37_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 10:41 – Martha, Martha, you are anxious and troubled about many things
 * ──────────────────────────────────────────────────────────── */

export const luke10_41_tokens: SourceToken[] = [
  {
    id: 'Luke.10.41.0',
    language: 'greek',
    text: 'Μάρθα',
    transliteration: 'Martha',
    lemma: 'Μάρθα',
    lemmaTranslit: 'Martha',
    gloss: 'Martha',
    morphology: { pos: 'proper-noun', gender: 'feminine', number: 'singular', case: 'vocative' },
    strongs: 'G3136',
    position: 0,
  },
  {
    id: 'Luke.10.41.1',
    language: 'greek',
    text: 'Μάρθα',
    transliteration: 'Martha',
    lemma: 'Μάρθα',
    lemmaTranslit: 'Martha',
    gloss: 'Martha',
    morphology: { pos: 'proper-noun', gender: 'feminine', number: 'singular', case: 'vocative' },
    strongs: 'G3136',
    position: 1,
  },
  {
    id: 'Luke.10.41.2',
    language: 'greek',
    text: 'μεριμνᾷς',
    transliteration: 'merimnas',
    lemma: 'μεριμνάω',
    lemmaTranslit: 'merimnaō',
    gloss: 'you are anxious',
    morphology: { pos: 'verb', person: '2', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G3309',
    position: 2,
  },
  {
    id: 'Luke.10.41.3',
    language: 'greek',
    text: 'καὶ',
    transliteration: 'kai',
    lemma: 'καί',
    lemmaTranslit: 'kai',
    gloss: 'and',
    morphology: { pos: 'conjunction' },
    strongs: 'G2532',
    position: 3,
  },
  {
    id: 'Luke.10.41.4',
    language: 'greek',
    text: 'θορυβάζῃ',
    transliteration: 'thorybazē',
    lemma: 'θορυβάζω',
    lemmaTranslit: 'thorybazō',
    gloss: 'you are troubled',
    morphology: { pos: 'verb', person: '2', number: 'singular', tense: 'present', voice: 'passive', mood: 'indicative' },
    strongs: 'G2350',
    position: 4,
  },
  {
    id: 'Luke.10.41.5',
    language: 'greek',
    text: 'περὶ',
    transliteration: 'peri',
    lemma: 'περί',
    lemmaTranslit: 'peri',
    gloss: 'about',
    morphology: { pos: 'preposition' },
    strongs: 'G4012',
    position: 5,
  },
  {
    id: 'Luke.10.41.6',
    language: 'greek',
    text: 'πολλά',
    transliteration: 'polla',
    lemma: 'πολύς',
    lemmaTranslit: 'polys',
    gloss: 'many things',
    morphology: { pos: 'adjective', gender: 'neuter', number: 'plural', case: 'accusative' },
    strongs: 'G4183',
    position: 6,
  },
];

export const luke10_41_translation: VerseTranslation = {
  verseRef: 'Luke.10.41',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Martha, Martha, you are anxious and troubled about many things.',
      spans: [
        { id: 'Luke.10.41.en.lit.0', text: 'Martha, Martha,', position: 0, sourceTokenIds: ['Luke.10.41.0', 'Luke.10.41.1'], confidence: 'high' },
        { id: 'Luke.10.41.en.lit.1', text: 'you are anxious and troubled', position: 1, sourceTokenIds: ['Luke.10.41.2', 'Luke.10.41.3', 'Luke.10.41.4'], confidence: 'high' },
        { id: 'Luke.10.41.en.lit.2', text: 'about many things.', position: 2, sourceTokenIds: ['Luke.10.41.5', 'Luke.10.41.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Martha, Martha, you are worried and upset about many things.',
      spans: [
        { id: 'Luke.10.41.en.idi.0', text: 'Martha, Martha,', position: 0, sourceTokenIds: ['Luke.10.41.0', 'Luke.10.41.1'], confidence: 'high' },
        { id: 'Luke.10.41.en.idi.1', text: 'you are worried and upset', position: 1, sourceTokenIds: ['Luke.10.41.2', 'Luke.10.41.3', 'Luke.10.41.4'], confidence: 'high' },
        { id: 'Luke.10.41.en.idi.2', text: 'about many things.', position: 2, sourceTokenIds: ['Luke.10.41.5', 'Luke.10.41.6'], confidence: 'high' },
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

export const luke10_41_verse = {
  ref: 'Luke.10.41',
  sourceTokens: luke10_41_tokens,
  translation: luke10_41_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 10:42 – Mary has chosen the good portion
 * ──────────────────────────────────────────────────────────── */

export const luke10_42_tokens: SourceToken[] = [
  {
    id: 'Luke.10.42.0',
    language: 'greek',
    text: 'Μαριὰμ',
    transliteration: 'Mariam',
    lemma: 'Μαριάμ',
    lemmaTranslit: 'Mariam',
    gloss: 'Mary',
    morphology: { pos: 'proper-noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G3137',
    position: 0,
  },
  {
    id: 'Luke.10.42.1',
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
    id: 'Luke.10.42.2',
    language: 'greek',
    text: 'ἀγαθὴν',
    transliteration: 'agathēn',
    lemma: 'ἀγαθός',
    lemmaTranslit: 'agathos',
    gloss: 'good',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G18',
    position: 2,
  },
  {
    id: 'Luke.10.42.3',
    language: 'greek',
    text: 'μερίδα',
    transliteration: 'merida',
    lemma: 'μερίς',
    lemmaTranslit: 'meris',
    gloss: 'portion',
    glossExtended: 'portion, share, part',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G3310',
    position: 3,
  },
  {
    id: 'Luke.10.42.4',
    language: 'greek',
    text: 'ἐξελέξατο',
    transliteration: 'exelexato',
    lemma: 'ἐκλέγομαι',
    lemmaTranslit: 'eklegomai',
    gloss: 'has chosen',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'middle', mood: 'indicative' },
    strongs: 'G1586',
    position: 4,
  },
];

export const luke10_42_translation: VerseTranslation = {
  verseRef: 'Luke.10.42',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Mary the good portion has chosen, which shall not be taken away from her.',
      spans: [
        { id: 'Luke.10.42.en.lit.0', text: 'Mary', position: 0, sourceTokenIds: ['Luke.10.42.0'], confidence: 'high' },
        { id: 'Luke.10.42.en.lit.1', text: 'the good portion', position: 1, sourceTokenIds: ['Luke.10.42.1', 'Luke.10.42.2', 'Luke.10.42.3'], confidence: 'high' },
        { id: 'Luke.10.42.en.lit.2', text: 'has chosen, which shall not be taken away from her.', position: 2, sourceTokenIds: ['Luke.10.42.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Mary has chosen what is better, and it will not be taken away from her.',
      spans: [
        { id: 'Luke.10.42.en.idi.0', text: 'Mary has chosen', position: 0, sourceTokenIds: ['Luke.10.42.0', 'Luke.10.42.4'], confidence: 'high' },
        { id: 'Luke.10.42.en.idi.1', text: 'what is better, and it will not be taken away from her.', position: 1, sourceTokenIds: ['Luke.10.42.1', 'Luke.10.42.2', 'Luke.10.42.3'], confidence: 'high' },
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

export const luke10_42_verse = {
  ref: 'Luke.10.42',
  sourceTokens: luke10_42_tokens,
  translation: luke10_42_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Luke 10:25-42 (Good Samaritan & Mary and Martha)
 * ──────────────────────────────────────────────────────────── */

export const luke10_25_42_verses = [
  luke10_25_verse,
  luke10_27_verse,
  luke10_33_verse,
  luke10_37_verse,
  luke10_41_verse,
  luke10_42_verse,
];

export default luke10_25_42_verses;
