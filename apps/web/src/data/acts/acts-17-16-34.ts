// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ════════════════════════════════════════════════════════════
 * Acts 17:16-34 — Paul at Athens / the Areopagus
 * Six key verses from Paul's address to the Athenian philosophers
 * ════════════════════════════════════════════════════════════ */

/* ────────────────────────────────────────────────────────────
 * Verse 17:16 – His spirit was provoked within him
 * ──────────────────────────────────────────────────────────── */

export const acts17_16_tokens: SourceToken[] = [
  {
    id: 'Acts.17.16.0',
    language: 'greek',
    text: 'παρωξύνετο',
    transliteration: 'parōxyneto',
    lemma: 'παροξύνω',
    lemmaTranslit: 'paroxyno',
    gloss: 'was provoked',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'imperfect', voice: 'passive', mood: 'indicative' },
    strongs: 'G3947',
    position: 0,
  },
  {
    id: 'Acts.17.16.1',
    language: 'greek',
    text: 'τὸ',
    transliteration: 'to',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'neuter', number: 'singular', case: 'nominative' },
    strongs: 'G3588',
    position: 1,
  },
  {
    id: 'Acts.17.16.2',
    language: 'greek',
    text: 'πνεῦμα',
    transliteration: 'pneuma',
    lemma: 'πνεῦμα',
    lemmaTranslit: 'pneuma',
    gloss: 'spirit',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'nominative' },
    strongs: 'G4151',
    position: 2,
  },
  {
    id: 'Acts.17.16.3',
    language: 'greek',
    text: 'αὐτοῦ',
    transliteration: 'autou',
    lemma: 'αὐτός',
    lemmaTranslit: 'autos',
    gloss: 'his',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G846',
    position: 3,
  },
  {
    id: 'Acts.17.16.4',
    language: 'greek',
    text: 'κατείδωλον',
    transliteration: 'kateidōlon',
    lemma: 'κατείδωλος',
    lemmaTranslit: 'kateidōlos',
    gloss: 'full of idols',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G2712',
    position: 4,
  },
  {
    id: 'Acts.17.16.5',
    language: 'greek',
    text: 'τὴν',
    transliteration: 'tēn',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G3588',
    position: 5,
  },
  {
    id: 'Acts.17.16.6',
    language: 'greek',
    text: 'πόλιν',
    transliteration: 'polin',
    lemma: 'πόλις',
    lemmaTranslit: 'polis',
    gloss: 'city',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G4172',
    position: 6,
  },
];

export const acts17_16_translation: VerseTranslation = {
  verseRef: 'Acts.17.16',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'His spirit was being provoked within him as he beheld the city being full of idols.',
      spans: [
        { id: 'Acts.17.16.en.lit.0', text: 'was being provoked', position: 0, sourceTokenIds: ['Acts.17.16.0'], confidence: 'high' },
        { id: 'Acts.17.16.en.lit.1', text: 'his spirit', position: 1, sourceTokenIds: ['Acts.17.16.1', 'Acts.17.16.2', 'Acts.17.16.3'], confidence: 'high' },
        { id: 'Acts.17.16.en.lit.2', text: 'full of idols the city', position: 2, sourceTokenIds: ['Acts.17.16.4', 'Acts.17.16.5', 'Acts.17.16.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'His spirit was provoked within him as he saw that the city was full of idols.',
      spans: [
        { id: 'Acts.17.16.en.idi.0', text: 'His spirit was provoked within him', position: 0, sourceTokenIds: ['Acts.17.16.0', 'Acts.17.16.1', 'Acts.17.16.2', 'Acts.17.16.3'], confidence: 'high' },
        { id: 'Acts.17.16.en.idi.1', text: 'as he saw the city was full of idols.', position: 1, sourceTokenIds: ['Acts.17.16.4', 'Acts.17.16.5', 'Acts.17.16.6'], confidence: 'high' },
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

export const acts17_16_verse = {
  ref: 'Acts.17.16',
  sourceTokens: acts17_16_tokens,
  translation: acts17_16_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 17:22 – Paul stood in the midst of the Areopagus
 * ──────────────────────────────────────────────────────────── */

export const acts17_22_tokens: SourceToken[] = [
  {
    id: 'Acts.17.22.0',
    language: 'greek',
    text: 'σταθεὶς',
    transliteration: 'statheis',
    lemma: 'ἵστημι',
    lemmaTranslit: 'histēmi',
    gloss: 'having stood',
    morphology: { pos: 'verb', tense: 'aorist', voice: 'passive', mood: 'participle', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G2476',
    position: 0,
  },
  {
    id: 'Acts.17.22.1',
    language: 'greek',
    text: 'Παῦλος',
    transliteration: 'Paulos',
    lemma: 'Παῦλος',
    lemmaTranslit: 'Paulos',
    gloss: 'Paul',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3972',
    position: 1,
  },
  {
    id: 'Acts.17.22.2',
    language: 'greek',
    text: 'ἐν',
    transliteration: 'en',
    lemma: 'ἐν',
    lemmaTranslit: 'en',
    gloss: 'in',
    morphology: { pos: 'preposition' },
    strongs: 'G1722',
    position: 2,
  },
  {
    id: 'Acts.17.22.3',
    language: 'greek',
    text: 'μέσῳ',
    transliteration: 'mesō',
    lemma: 'μέσος',
    lemmaTranslit: 'mesos',
    gloss: 'the midst',
    morphology: { pos: 'adjective', gender: 'neuter', number: 'singular', case: 'dative' },
    strongs: 'G3319',
    position: 3,
  },
  {
    id: 'Acts.17.22.4',
    language: 'greek',
    text: 'Ἀρείου',
    transliteration: 'Areiou',
    lemma: 'Ἄρειος',
    lemmaTranslit: 'Areios',
    gloss: 'of Ares',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G697',
    position: 4,
  },
  {
    id: 'Acts.17.22.5',
    language: 'greek',
    text: 'πάγου',
    transliteration: 'pagou',
    lemma: 'πάγος',
    lemmaTranslit: 'pagos',
    gloss: 'hill',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G697',
    position: 5,
  },
];

export const acts17_22_translation: VerseTranslation = {
  verseRef: 'Acts.17.22',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And Paul, having stood in the midst of the Areopagus, said.',
      spans: [
        { id: 'Acts.17.22.en.lit.0', text: 'having stood', position: 0, sourceTokenIds: ['Acts.17.22.0'], confidence: 'high' },
        { id: 'Acts.17.22.en.lit.1', text: 'Paul', position: 1, sourceTokenIds: ['Acts.17.22.1'], confidence: 'high' },
        { id: 'Acts.17.22.en.lit.2', text: 'in the midst of the Areopagus', position: 2, sourceTokenIds: ['Acts.17.22.2', 'Acts.17.22.3', 'Acts.17.22.4', 'Acts.17.22.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Paul stood in the middle of the Areopagus and said.',
      spans: [
        { id: 'Acts.17.22.en.idi.0', text: 'Paul stood in the middle of the Areopagus', position: 0, sourceTokenIds: ['Acts.17.22.0', 'Acts.17.22.1', 'Acts.17.22.2', 'Acts.17.22.3', 'Acts.17.22.4', 'Acts.17.22.5'], confidence: 'high' },
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

export const acts17_22_verse = {
  ref: 'Acts.17.22',
  sourceTokens: acts17_22_tokens,
  translation: acts17_22_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 17:23 – To the unknown God
 * ──────────────────────────────────────────────────────────── */

export const acts17_23_tokens: SourceToken[] = [
  {
    id: 'Acts.17.23.0',
    language: 'greek',
    text: 'ἀγνώστῳ',
    transliteration: 'agnōstō',
    lemma: 'ἄγνωστος',
    lemmaTranslit: 'agnōstos',
    gloss: 'unknown',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'dative' },
    strongs: 'G57',
    position: 0,
  },
  {
    id: 'Acts.17.23.1',
    language: 'greek',
    text: 'θεῷ',
    transliteration: 'theō',
    lemma: 'θεός',
    lemmaTranslit: 'theos',
    gloss: 'to God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'dative' },
    strongs: 'G2316',
    position: 1,
  },
  {
    id: 'Acts.17.23.2',
    language: 'greek',
    text: 'ὃ',
    transliteration: 'ho',
    lemma: 'ὅς',
    lemmaTranslit: 'hos',
    gloss: 'what',
    morphology: { pos: 'pronoun', gender: 'neuter', number: 'singular', case: 'accusative' },
    strongs: 'G3739',
    position: 2,
  },
  {
    id: 'Acts.17.23.3',
    language: 'greek',
    text: 'ἀγνοοῦντες',
    transliteration: 'agnoountes',
    lemma: 'ἀγνοέω',
    lemmaTranslit: 'agnoeō',
    gloss: 'not knowing',
    morphology: { pos: 'verb', tense: 'present', voice: 'active', mood: 'participle', gender: 'masculine', number: 'plural', case: 'nominative' },
    strongs: 'G50',
    position: 3,
  },
  {
    id: 'Acts.17.23.4',
    language: 'greek',
    text: 'εὐσεβεῖτε',
    transliteration: 'eusebeite',
    lemma: 'εὐσεβέω',
    lemmaTranslit: 'eusebeō',
    gloss: 'you worship',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G2151',
    position: 4,
  },
  {
    id: 'Acts.17.23.5',
    language: 'greek',
    text: 'καταγγέλλω',
    transliteration: 'katangellō',
    lemma: 'καταγγέλλω',
    lemmaTranslit: 'katangellō',
    gloss: 'I proclaim',
    morphology: { pos: 'verb', person: '1', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G2605',
    position: 5,
  },
];

export const acts17_23_translation: VerseTranslation = {
  verseRef: 'Acts.17.23',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'To an unknown God. What therefore not knowing you worship, this I proclaim to you.',
      spans: [
        { id: 'Acts.17.23.en.lit.0', text: 'To an unknown God', position: 0, sourceTokenIds: ['Acts.17.23.0', 'Acts.17.23.1'], confidence: 'high' },
        { id: 'Acts.17.23.en.lit.1', text: 'What not knowing you worship,', position: 1, sourceTokenIds: ['Acts.17.23.2', 'Acts.17.23.3', 'Acts.17.23.4'], confidence: 'high' },
        { id: 'Acts.17.23.en.lit.2', text: 'this I proclaim to you.', position: 2, sourceTokenIds: ['Acts.17.23.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "\"To the unknown God.\" What you worship as unknown, this I proclaim to you.",
      spans: [
        { id: 'Acts.17.23.en.idi.0', text: '"To the unknown God."', position: 0, sourceTokenIds: ['Acts.17.23.0', 'Acts.17.23.1'], confidence: 'high' },
        { id: 'Acts.17.23.en.idi.1', text: 'What you worship as unknown, this I proclaim to you.', position: 1, sourceTokenIds: ['Acts.17.23.2', 'Acts.17.23.3', 'Acts.17.23.4', 'Acts.17.23.5'], confidence: 'high' },
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

export const acts17_23_notes: StudyNote[] = [
  { id: 'Acts.17.23.note.1', verseRef: 'Acts.17.23', sourceTokenIds: ['Acts.17.23.0', 'Acts.17.23.1'], category: 'historical', title: "To an Unknown God (agnōstō theō)", content: "The inscription ΑΓΝΩΣΤΩ ΘΕΩΙ ('To an unknown God') reflects a documented Athenian practice of hedging against divine offense. Pausanias and Diogenes Laertius mention altars to 'unknown gods' in Athens. Paul seizes this cultural point of contact to introduce the God of Israel—not as one deity among many, but as the Creator who is knowable through revelation.", confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const acts17_23_verse = {
  ref: 'Acts.17.23',
  sourceTokens: acts17_23_tokens,
  translation: acts17_23_translation,
  notes: acts17_23_notes,
};

/* ────────────────────────────────────────────────────────────
 * Verse 17:24 – The God who made the world and everything in it
 * ──────────────────────────────────────────────────────────── */

export const acts17_24_tokens: SourceToken[] = [
  {
    id: 'Acts.17.24.0',
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
    id: 'Acts.17.24.1',
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
    id: 'Acts.17.24.2',
    language: 'greek',
    text: 'ποιήσας',
    transliteration: 'poiēsas',
    lemma: 'ποιέω',
    lemmaTranslit: 'poieō',
    gloss: 'having made',
    morphology: { pos: 'verb', tense: 'aorist', voice: 'active', mood: 'participle', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G4160',
    position: 2,
  },
  {
    id: 'Acts.17.24.3',
    language: 'greek',
    text: 'τὸν',
    transliteration: 'ton',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G3588',
    position: 3,
  },
  {
    id: 'Acts.17.24.4',
    language: 'greek',
    text: 'κόσμον',
    transliteration: 'kosmon',
    lemma: 'κόσμος',
    lemmaTranslit: 'kosmos',
    gloss: 'world',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G2889',
    position: 4,
  },
  {
    id: 'Acts.17.24.5',
    language: 'greek',
    text: 'πάντα',
    transliteration: 'panta',
    lemma: 'πᾶς',
    lemmaTranslit: 'pas',
    gloss: 'all things',
    morphology: { pos: 'adjective', gender: 'neuter', number: 'plural', case: 'accusative' },
    strongs: 'G3956',
    position: 5,
  },
];

export const acts17_24_translation: VerseTranslation = {
  verseRef: 'Acts.17.24',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'The God the one having made the world and all things in it.',
      spans: [
        { id: 'Acts.17.24.en.lit.0', text: 'The God', position: 0, sourceTokenIds: ['Acts.17.24.0', 'Acts.17.24.1'], confidence: 'high' },
        { id: 'Acts.17.24.en.lit.1', text: 'having made', position: 1, sourceTokenIds: ['Acts.17.24.2'], confidence: 'high' },
        { id: 'Acts.17.24.en.lit.2', text: 'the world', position: 2, sourceTokenIds: ['Acts.17.24.3', 'Acts.17.24.4'], confidence: 'high' },
        { id: 'Acts.17.24.en.lit.3', text: 'and all things in it', position: 3, sourceTokenIds: ['Acts.17.24.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'The God who made the world and everything in it is the Lord of heaven and earth.',
      spans: [
        { id: 'Acts.17.24.en.idi.0', text: 'The God who made the world and everything in it', position: 0, sourceTokenIds: ['Acts.17.24.0', 'Acts.17.24.1', 'Acts.17.24.2', 'Acts.17.24.3', 'Acts.17.24.4', 'Acts.17.24.5'], confidence: 'high' },
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

export const acts17_24_verse = {
  ref: 'Acts.17.24',
  sourceTokens: acts17_24_tokens,
  translation: acts17_24_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 17:28 – In him we live and move and have our being
 * ──────────────────────────────────────────────────────────── */

export const acts17_28_tokens: SourceToken[] = [
  {
    id: 'Acts.17.28.0',
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
    id: 'Acts.17.28.1',
    language: 'greek',
    text: 'αὐτῷ',
    transliteration: 'autō',
    lemma: 'αὐτός',
    lemmaTranslit: 'autos',
    gloss: 'him',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'singular', case: 'dative' },
    strongs: 'G846',
    position: 1,
  },
  {
    id: 'Acts.17.28.2',
    language: 'greek',
    text: 'ζῶμεν',
    transliteration: 'zōmen',
    lemma: 'ζάω',
    lemmaTranslit: 'zaō',
    gloss: 'we live',
    morphology: { pos: 'verb', person: '1', number: 'plural', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G2198',
    position: 2,
  },
  {
    id: 'Acts.17.28.3',
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
    id: 'Acts.17.28.4',
    language: 'greek',
    text: 'κινούμεθα',
    transliteration: 'kinoumetha',
    lemma: 'κινέω',
    lemmaTranslit: 'kineō',
    gloss: 'we move',
    morphology: { pos: 'verb', person: '1', number: 'plural', tense: 'present', voice: 'passive', mood: 'indicative' },
    strongs: 'G2795',
    position: 4,
  },
  {
    id: 'Acts.17.28.5',
    language: 'greek',
    text: 'καὶ',
    transliteration: 'kai',
    lemma: 'καί',
    lemmaTranslit: 'kai',
    gloss: 'and',
    morphology: { pos: 'conjunction' },
    strongs: 'G2532',
    position: 5,
  },
  {
    id: 'Acts.17.28.6',
    language: 'greek',
    text: 'ἐσμέν',
    transliteration: 'esmen',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'we are',
    morphology: { pos: 'verb', person: '1', number: 'plural', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G1510',
    position: 6,
  },
];

export const acts17_28_translation: VerseTranslation = {
  verseRef: 'Acts.17.28',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'For in him we live and move and are.',
      spans: [
        { id: 'Acts.17.28.en.lit.0', text: 'in him', position: 0, sourceTokenIds: ['Acts.17.28.0', 'Acts.17.28.1'], confidence: 'high' },
        { id: 'Acts.17.28.en.lit.1', text: 'we live', position: 1, sourceTokenIds: ['Acts.17.28.2'], confidence: 'high' },
        { id: 'Acts.17.28.en.lit.2', text: 'and move', position: 2, sourceTokenIds: ['Acts.17.28.3', 'Acts.17.28.4'], confidence: 'high' },
        { id: 'Acts.17.28.en.lit.3', text: 'and are', position: 3, sourceTokenIds: ['Acts.17.28.5', 'Acts.17.28.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'For in him we live and move and have our being.',
      spans: [
        { id: 'Acts.17.28.en.idi.0', text: 'For in him we live and move and have our being.', position: 0, sourceTokenIds: ['Acts.17.28.0', 'Acts.17.28.1', 'Acts.17.28.2', 'Acts.17.28.3', 'Acts.17.28.4', 'Acts.17.28.5', 'Acts.17.28.6'], confidence: 'high' },
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

export const acts17_28_notes: StudyNote[] = [
  { id: 'Acts.17.28.note.1', verseRef: 'Acts.17.28', sourceTokenIds: ['Acts.17.28.0', 'Acts.17.28.1', 'Acts.17.28.2', 'Acts.17.28.4', 'Acts.17.28.6'], category: 'interpretive', title: "In Him We Live and Move and Are", content: "Paul quotes a phrase attributed to the Cretan poet Epimenides ('in him we live and move and are') and follows it with a line from Aratus's Phaenomena ('for we are also his offspring'). By citing pagan poets, Paul demonstrates that even Greek thinkers intuited humanity's dependence on a transcendent Creator. The triad ζῶμεν ... κινούμεθα ... ἐσμέν ('we live ... we move ... we are') moves from biological existence to purposeful activity to ontological being, affirming that all of life is sustained in God.", confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const acts17_28_verse = {
  ref: 'Acts.17.28',
  sourceTokens: acts17_28_tokens,
  translation: acts17_28_translation,
  notes: acts17_28_notes,
};

/* ────────────────────────────────────────────────────────────
 * Verse 17:30 – God now commands all people to repent
 * ──────────────────────────────────────────────────────────── */

export const acts17_30_tokens: SourceToken[] = [
  {
    id: 'Acts.17.30.0',
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
    id: 'Acts.17.30.1',
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
    id: 'Acts.17.30.2',
    language: 'greek',
    text: 'νῦν',
    transliteration: 'nyn',
    lemma: 'νῦν',
    lemmaTranslit: 'nyn',
    gloss: 'now',
    morphology: { pos: 'adverb' },
    strongs: 'G3568',
    position: 2,
  },
  {
    id: 'Acts.17.30.3',
    language: 'greek',
    text: 'παραγγέλλει',
    transliteration: 'parangellei',
    lemma: 'παραγγέλλω',
    lemmaTranslit: 'parangellō',
    gloss: 'commands',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G3853',
    position: 3,
  },
  {
    id: 'Acts.17.30.4',
    language: 'greek',
    text: 'πᾶσιν',
    transliteration: 'pasin',
    lemma: 'πᾶς',
    lemmaTranslit: 'pas',
    gloss: 'all',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', case: 'dative' },
    strongs: 'G3956',
    position: 4,
  },
  {
    id: 'Acts.17.30.5',
    language: 'greek',
    text: 'πανταχοῦ',
    transliteration: 'pantachou',
    lemma: 'πανταχοῦ',
    lemmaTranslit: 'pantachou',
    gloss: 'everywhere',
    morphology: { pos: 'adverb' },
    strongs: 'G3837',
    position: 5,
  },
  {
    id: 'Acts.17.30.6',
    language: 'greek',
    text: 'μετανοεῖν',
    transliteration: 'metanoein',
    lemma: 'μετανοέω',
    lemmaTranslit: 'metanoeō',
    gloss: 'to repent',
    morphology: { pos: 'verb', tense: 'present', voice: 'active', mood: 'infinitive' },
    strongs: 'G3340',
    position: 6,
  },
];

export const acts17_30_translation: VerseTranslation = {
  verseRef: 'Acts.17.30',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'God now commands all people everywhere to repent.',
      spans: [
        { id: 'Acts.17.30.en.lit.0', text: 'God', position: 0, sourceTokenIds: ['Acts.17.30.0', 'Acts.17.30.1'], confidence: 'high' },
        { id: 'Acts.17.30.en.lit.1', text: 'now commands', position: 1, sourceTokenIds: ['Acts.17.30.2', 'Acts.17.30.3'], confidence: 'high' },
        { id: 'Acts.17.30.en.lit.2', text: 'all people everywhere', position: 2, sourceTokenIds: ['Acts.17.30.4', 'Acts.17.30.5'], confidence: 'high' },
        { id: 'Acts.17.30.en.lit.3', text: 'to repent', position: 3, sourceTokenIds: ['Acts.17.30.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'But now God commands all people everywhere to repent.',
      spans: [
        { id: 'Acts.17.30.en.idi.0', text: 'But now God commands all people everywhere to repent.', position: 0, sourceTokenIds: ['Acts.17.30.0', 'Acts.17.30.1', 'Acts.17.30.2', 'Acts.17.30.3', 'Acts.17.30.4', 'Acts.17.30.5', 'Acts.17.30.6'], confidence: 'high' },
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

export const acts17_30_verse = {
  ref: 'Acts.17.30',
  sourceTokens: acts17_30_tokens,
  translation: acts17_30_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Export combined verses
 * ──────────────────────────────────────────────────────────── */

export const acts17_16_34_verses = [
  acts17_16_verse,
  acts17_22_verse,
  acts17_23_verse,
  acts17_24_verse,
  acts17_28_verse,
  acts17_30_verse,
];

export default acts17_16_34_verses;
