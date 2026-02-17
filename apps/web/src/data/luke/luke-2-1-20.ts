// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 2:1 – A decree went out from Caesar Augustus
 * ──────────────────────────────────────────────────────────── */

export const luke2_1_tokens: SourceToken[] = [
  {
    id: 'Luke.2.1.0',
    language: 'greek',
    text: 'ἐξῆλθεν',
    transliteration: 'exēlthen',
    lemma: 'ἐξέρχομαι',
    lemmaTranslit: 'exerchomai',
    gloss: 'went out',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G1831',
    position: 0,
  },
  {
    id: 'Luke.2.1.1',
    language: 'greek',
    text: 'δόγμα',
    transliteration: 'dogma',
    lemma: 'δόγμα',
    lemmaTranslit: 'dogma',
    gloss: 'a decree',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'nominative' },
    strongs: 'G1378',
    position: 1,
  },
  {
    id: 'Luke.2.1.2',
    language: 'greek',
    text: 'παρὰ',
    transliteration: 'para',
    lemma: 'παρά',
    lemmaTranslit: 'para',
    gloss: 'from',
    morphology: { pos: 'preposition' },
    strongs: 'G3844',
    position: 2,
  },
  {
    id: 'Luke.2.1.3',
    language: 'greek',
    text: 'Καίσαρος',
    transliteration: 'Kaisaros',
    lemma: 'Καῖσαρ',
    lemmaTranslit: 'Kaisar',
    gloss: 'Caesar',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G2541',
    position: 3,
  },
  {
    id: 'Luke.2.1.4',
    language: 'greek',
    text: 'Αὐγούστου',
    transliteration: 'Augoustou',
    lemma: 'Αὔγουστος',
    lemmaTranslit: 'Augoustos',
    gloss: 'Augustus',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G828',
    position: 4,
  },
];

export const luke2_1_translation: VerseTranslation = {
  verseRef: 'Luke.2.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'There went out a decree from Caesar Augustus to register all the inhabited earth.',
      spans: [
        { id: 'Luke.2.1.en.lit.0', text: 'There went out', position: 0, sourceTokenIds: ['Luke.2.1.0'], confidence: 'high' },
        { id: 'Luke.2.1.en.lit.1', text: 'a decree', position: 1, sourceTokenIds: ['Luke.2.1.1'], confidence: 'high' },
        { id: 'Luke.2.1.en.lit.2', text: 'from Caesar Augustus.', position: 2, sourceTokenIds: ['Luke.2.1.2', 'Luke.2.1.3', 'Luke.2.1.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'In those days Caesar Augustus issued a decree that a census should be taken of the entire Roman world.',
      spans: [
        { id: 'Luke.2.1.en.idi.0', text: 'Caesar Augustus issued', position: 0, sourceTokenIds: ['Luke.2.1.0', 'Luke.2.1.3', 'Luke.2.1.4'], confidence: 'high' },
        { id: 'Luke.2.1.en.idi.1', text: 'a decree that a census should be taken of the entire Roman world.', position: 1, sourceTokenIds: ['Luke.2.1.1', 'Luke.2.1.2'], confidence: 'high' },
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

export const luke2_1_verse = {
  ref: 'Luke.2.1',
  sourceTokens: luke2_1_tokens,
  translation: luke2_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 2:4 – Joseph also went up from Galilee to the city of David
 * ──────────────────────────────────────────────────────────── */

export const luke2_4_tokens: SourceToken[] = [
  {
    id: 'Luke.2.4.0',
    language: 'greek',
    text: 'ἀνέβη',
    transliteration: 'anebē',
    lemma: 'ἀναβαίνω',
    lemmaTranslit: 'anabainō',
    gloss: 'went up',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G305',
    position: 0,
  },
  {
    id: 'Luke.2.4.1',
    language: 'greek',
    text: 'Ἰωσὴφ',
    transliteration: 'Iōsēph',
    lemma: 'Ἰωσήφ',
    lemmaTranslit: 'Iōsēph',
    gloss: 'Joseph',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G2501',
    position: 1,
  },
  {
    id: 'Luke.2.4.2',
    language: 'greek',
    text: 'ἀπὸ',
    transliteration: 'apo',
    lemma: 'ἀπό',
    lemmaTranslit: 'apo',
    gloss: 'from',
    morphology: { pos: 'preposition' },
    strongs: 'G575',
    position: 2,
  },
  {
    id: 'Luke.2.4.3',
    language: 'greek',
    text: 'Γαλιλαίας',
    transliteration: 'Galilaias',
    lemma: 'Γαλιλαία',
    lemmaTranslit: 'Galilaia',
    gloss: 'Galilee',
    morphology: { pos: 'proper-noun', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G1056',
    position: 3,
  },
  {
    id: 'Luke.2.4.4',
    language: 'greek',
    text: 'εἰς',
    transliteration: 'eis',
    lemma: 'εἰς',
    lemmaTranslit: 'eis',
    gloss: 'to',
    morphology: { pos: 'preposition' },
    strongs: 'G1519',
    position: 4,
  },
  {
    id: 'Luke.2.4.5',
    language: 'greek',
    text: 'πόλιν',
    transliteration: 'polin',
    lemma: 'πόλις',
    lemmaTranslit: 'polis',
    gloss: 'city',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G4172',
    position: 5,
  },
  {
    id: 'Luke.2.4.6',
    language: 'greek',
    text: 'Δαυίδ',
    transliteration: 'Dauid',
    lemma: 'Δαυίδ',
    lemmaTranslit: 'Dauid',
    gloss: 'of David',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G1138',
    position: 6,
  },
];

export const luke2_4_translation: VerseTranslation = {
  verseRef: 'Luke.2.4',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And went up also Joseph from Galilee, out of the city of Nazareth, into Judea, to the city of David, which is called Bethlehem.',
      spans: [
        { id: 'Luke.2.4.en.lit.0', text: 'And went up also Joseph', position: 0, sourceTokenIds: ['Luke.2.4.0', 'Luke.2.4.1'], confidence: 'high' },
        { id: 'Luke.2.4.en.lit.1', text: 'from Galilee', position: 1, sourceTokenIds: ['Luke.2.4.2', 'Luke.2.4.3'], confidence: 'high' },
        { id: 'Luke.2.4.en.lit.2', text: 'to the city of David.', position: 2, sourceTokenIds: ['Luke.2.4.4', 'Luke.2.4.5', 'Luke.2.4.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'So Joseph also went up from the town of Nazareth in Galilee to Judea, to Bethlehem the town of David, because he belonged to the house and line of David.',
      spans: [
        { id: 'Luke.2.4.en.idi.0', text: 'So Joseph also went up', position: 0, sourceTokenIds: ['Luke.2.4.0', 'Luke.2.4.1'], confidence: 'high' },
        { id: 'Luke.2.4.en.idi.1', text: 'from Galilee', position: 1, sourceTokenIds: ['Luke.2.4.2', 'Luke.2.4.3'], confidence: 'high' },
        { id: 'Luke.2.4.en.idi.2', text: 'to Bethlehem the town of David.', position: 2, sourceTokenIds: ['Luke.2.4.4', 'Luke.2.4.5', 'Luke.2.4.6'], confidence: 'high' },
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

export const luke2_4_verse = {
  ref: 'Luke.2.4',
  sourceTokens: luke2_4_tokens,
  translation: luke2_4_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 2:7 – She gave birth to her firstborn son
 * ──────────────────────────────────────────────────────────── */

export const luke2_7_tokens: SourceToken[] = [
  {
    id: 'Luke.2.7.0',
    language: 'greek',
    text: 'ἔτεκεν',
    transliteration: 'eteken',
    lemma: 'τίκτω',
    lemmaTranslit: 'tiktō',
    gloss: 'she gave birth',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G5088',
    position: 0,
  },
  {
    id: 'Luke.2.7.1',
    language: 'greek',
    text: 'τὸν',
    transliteration: 'ton',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G3588',
    position: 1,
  },
  {
    id: 'Luke.2.7.2',
    language: 'greek',
    text: 'υἱὸν',
    transliteration: 'huion',
    lemma: 'υἱός',
    lemmaTranslit: 'huios',
    gloss: 'son',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G5207',
    position: 2,
  },
  {
    id: 'Luke.2.7.3',
    language: 'greek',
    text: 'πρωτότοκον',
    transliteration: 'prōtotokon',
    lemma: 'πρωτότοκος',
    lemmaTranslit: 'prōtotokos',
    gloss: 'firstborn',
    glossExtended: 'firstborn, preeminent one',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G4416',
    position: 3,
  },
  {
    id: 'Luke.2.7.4',
    language: 'greek',
    text: 'ἐσπαργάνωσεν',
    transliteration: 'esparganōsen',
    lemma: 'σπαργανόω',
    lemmaTranslit: 'sparganoō',
    gloss: 'wrapped in cloths',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G4683',
    position: 4,
  },
  {
    id: 'Luke.2.7.5',
    language: 'greek',
    text: 'ἀνέκλινεν',
    transliteration: 'aneklinen',
    lemma: 'ἀνακλίνω',
    lemmaTranslit: 'anaklinō',
    gloss: 'laid',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G347',
    position: 5,
  },
  {
    id: 'Luke.2.7.6',
    language: 'greek',
    text: 'φάτνῃ',
    transliteration: 'phatnē',
    lemma: 'φάτνη',
    lemmaTranslit: 'phatnē',
    gloss: 'manger',
    glossExtended: 'manger, feeding trough',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G5336',
    position: 6,
  },
];

export const luke2_7_translation: VerseTranslation = {
  verseRef: 'Luke.2.7',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And she bore the son of her, the firstborn, and wrapped him in cloths, and laid him in a manger.',
      spans: [
        { id: 'Luke.2.7.en.lit.0', text: 'And she bore', position: 0, sourceTokenIds: ['Luke.2.7.0'], confidence: 'high' },
        { id: 'Luke.2.7.en.lit.1', text: 'the son of her, the firstborn,', position: 1, sourceTokenIds: ['Luke.2.7.1', 'Luke.2.7.2', 'Luke.2.7.3'], confidence: 'high' },
        { id: 'Luke.2.7.en.lit.2', text: 'and wrapped him in cloths,', position: 2, sourceTokenIds: ['Luke.2.7.4'], confidence: 'high' },
        { id: 'Luke.2.7.en.lit.3', text: 'and laid him in a manger.', position: 3, sourceTokenIds: ['Luke.2.7.5', 'Luke.2.7.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'She gave birth to her firstborn, a son. She wrapped him in cloths and placed him in a manger, because there was no guest room available for them.',
      spans: [
        { id: 'Luke.2.7.en.idi.0', text: 'She gave birth to her firstborn, a son.', position: 0, sourceTokenIds: ['Luke.2.7.0', 'Luke.2.7.1', 'Luke.2.7.2', 'Luke.2.7.3'], confidence: 'high' },
        { id: 'Luke.2.7.en.idi.1', text: 'She wrapped him in cloths', position: 1, sourceTokenIds: ['Luke.2.7.4'], confidence: 'high' },
        { id: 'Luke.2.7.en.idi.2', text: 'and placed him in a manger.', position: 2, sourceTokenIds: ['Luke.2.7.5', 'Luke.2.7.6'], confidence: 'high' },
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

export const luke2_7_verse = {
  ref: 'Luke.2.7',
  sourceTokens: luke2_7_tokens,
  translation: luke2_7_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 2:8 – Shepherds living out in the fields, keeping watch by night
 * ──────────────────────────────────────────────────────────── */

export const luke2_8_tokens: SourceToken[] = [
  {
    id: 'Luke.2.8.0',
    language: 'greek',
    text: 'ποιμένες',
    transliteration: 'poimenes',
    lemma: 'ποιμήν',
    lemmaTranslit: 'poimēn',
    gloss: 'shepherds',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', case: 'nominative' },
    strongs: 'G4166',
    position: 0,
  },
  {
    id: 'Luke.2.8.1',
    language: 'greek',
    text: 'ἦσαν',
    transliteration: 'ēsan',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'were',
    morphology: { pos: 'verb', person: '3', number: 'plural', tense: 'imperfect', voice: 'active', mood: 'indicative' },
    strongs: 'G1510',
    position: 1,
  },
  {
    id: 'Luke.2.8.2',
    language: 'greek',
    text: 'ἀγραυλοῦντες',
    transliteration: 'agraulountes',
    lemma: 'ἀγραυλέω',
    lemmaTranslit: 'agrauleō',
    gloss: 'living in the fields',
    morphology: { pos: 'verb', tense: 'present', voice: 'active', mood: 'participle', gender: 'masculine', number: 'plural', case: 'nominative' },
    strongs: 'G63',
    position: 2,
  },
  {
    id: 'Luke.2.8.3',
    language: 'greek',
    text: 'φυλάσσοντες',
    transliteration: 'phylassontes',
    lemma: 'φυλάσσω',
    lemmaTranslit: 'phylassō',
    gloss: 'keeping watch',
    morphology: { pos: 'verb', tense: 'present', voice: 'active', mood: 'participle', gender: 'masculine', number: 'plural', case: 'nominative' },
    strongs: 'G5442',
    position: 3,
  },
  {
    id: 'Luke.2.8.4',
    language: 'greek',
    text: 'φυλακὰς',
    transliteration: 'phylakas',
    lemma: 'φυλακή',
    lemmaTranslit: 'phylakē',
    gloss: 'watches',
    morphology: { pos: 'noun', gender: 'feminine', number: 'plural', case: 'accusative' },
    strongs: 'G5438',
    position: 4,
  },
  {
    id: 'Luke.2.8.5',
    language: 'greek',
    text: 'τῆς',
    transliteration: 'tēs',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'of the',
    morphology: { pos: 'article', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G3588',
    position: 5,
  },
  {
    id: 'Luke.2.8.6',
    language: 'greek',
    text: 'νυκτός',
    transliteration: 'nyktos',
    lemma: 'νύξ',
    lemmaTranslit: 'nyx',
    gloss: 'night',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G3571',
    position: 6,
  },
];

export const luke2_8_translation: VerseTranslation = {
  verseRef: 'Luke.2.8',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And shepherds were in the same region living in the fields and keeping watches of the night over their flock.',
      spans: [
        { id: 'Luke.2.8.en.lit.0', text: 'And shepherds were', position: 0, sourceTokenIds: ['Luke.2.8.0', 'Luke.2.8.1'], confidence: 'high' },
        { id: 'Luke.2.8.en.lit.1', text: 'living in the fields', position: 1, sourceTokenIds: ['Luke.2.8.2'], confidence: 'high' },
        { id: 'Luke.2.8.en.lit.2', text: 'and keeping watches of the night over their flock.', position: 2, sourceTokenIds: ['Luke.2.8.3', 'Luke.2.8.4', 'Luke.2.8.5', 'Luke.2.8.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'And there were shepherds living out in the fields nearby, keeping watch over their flocks at night.',
      spans: [
        { id: 'Luke.2.8.en.idi.0', text: 'And there were shepherds living out in the fields nearby,', position: 0, sourceTokenIds: ['Luke.2.8.0', 'Luke.2.8.1', 'Luke.2.8.2'], confidence: 'high' },
        { id: 'Luke.2.8.en.idi.1', text: 'keeping watch over their flocks at night.', position: 1, sourceTokenIds: ['Luke.2.8.3', 'Luke.2.8.4', 'Luke.2.8.5', 'Luke.2.8.6'], confidence: 'high' },
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

export const luke2_8_verse = {
  ref: 'Luke.2.8',
  sourceTokens: luke2_8_tokens,
  translation: luke2_8_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 2:10 – I bring you good news of great joy
 * ──────────────────────────────────────────────────────────── */

export const luke2_10_tokens: SourceToken[] = [
  {
    id: 'Luke.2.10.0',
    language: 'greek',
    text: 'εὐαγγελίζομαι',
    transliteration: 'euangelizomai',
    lemma: 'εὐαγγελίζω',
    lemmaTranslit: 'euangelizō',
    gloss: 'I bring good news',
    glossExtended: 'to announce good news, preach the gospel',
    morphology: { pos: 'verb', person: '1', number: 'singular', tense: 'present', voice: 'middle', mood: 'indicative' },
    strongs: 'G2097',
    position: 0,
  },
  {
    id: 'Luke.2.10.1',
    language: 'greek',
    text: 'ὑμῖν',
    transliteration: 'hymin',
    lemma: 'σύ',
    lemmaTranslit: 'sy',
    gloss: 'to you',
    morphology: { pos: 'pronoun', person: '2', number: 'plural', case: 'dative' },
    strongs: 'G4771',
    position: 1,
  },
  {
    id: 'Luke.2.10.2',
    language: 'greek',
    text: 'χαρὰν',
    transliteration: 'charan',
    lemma: 'χαρά',
    lemmaTranslit: 'chara',
    gloss: 'joy',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G5479',
    position: 2,
  },
  {
    id: 'Luke.2.10.3',
    language: 'greek',
    text: 'μεγάλην',
    transliteration: 'megalēn',
    lemma: 'μέγας',
    lemmaTranslit: 'megas',
    gloss: 'great',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G3173',
    position: 3,
  },
];

export const luke2_10_translation: VerseTranslation = {
  verseRef: 'Luke.2.10',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Do not fear, for behold, I bring good news to you of great joy which shall be for all the people.',
      spans: [
        { id: 'Luke.2.10.en.lit.0', text: 'I bring good news', position: 0, sourceTokenIds: ['Luke.2.10.0'], confidence: 'high' },
        { id: 'Luke.2.10.en.lit.1', text: 'to you', position: 1, sourceTokenIds: ['Luke.2.10.1'], confidence: 'high' },
        { id: 'Luke.2.10.en.lit.2', text: 'of great joy.', position: 2, sourceTokenIds: ['Luke.2.10.2', 'Luke.2.10.3'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "Do not be afraid. I bring you good news that will cause great joy for all the people.",
      spans: [
        { id: 'Luke.2.10.en.idi.0', text: 'I bring you good news', position: 0, sourceTokenIds: ['Luke.2.10.0', 'Luke.2.10.1'], confidence: 'high' },
        { id: 'Luke.2.10.en.idi.1', text: 'that will cause great joy for all the people.', position: 1, sourceTokenIds: ['Luke.2.10.2', 'Luke.2.10.3'], confidence: 'high' },
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

export const luke2_10_verse = {
  ref: 'Luke.2.10',
  sourceTokens: luke2_10_tokens,
  translation: luke2_10_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 2:11 – Today a Savior has been born to you; he is Christ the Lord
 * ──────────────────────────────────────────────────────────── */

export const luke2_11_tokens: SourceToken[] = [
  {
    id: 'Luke.2.11.0',
    language: 'greek',
    text: 'ἐτέχθη',
    transliteration: 'etechthē',
    lemma: 'τίκτω',
    lemmaTranslit: 'tiktō',
    gloss: 'was born',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'passive', mood: 'indicative' },
    strongs: 'G5088',
    position: 0,
  },
  {
    id: 'Luke.2.11.1',
    language: 'greek',
    text: 'ὑμῖν',
    transliteration: 'hymin',
    lemma: 'σύ',
    lemmaTranslit: 'sy',
    gloss: 'to you',
    morphology: { pos: 'pronoun', person: '2', number: 'plural', case: 'dative' },
    strongs: 'G4771',
    position: 1,
  },
  {
    id: 'Luke.2.11.2',
    language: 'greek',
    text: 'σήμερον',
    transliteration: 'sēmeron',
    lemma: 'σήμερον',
    lemmaTranslit: 'sēmeron',
    gloss: 'today',
    morphology: { pos: 'adverb' },
    strongs: 'G4594',
    position: 2,
  },
  {
    id: 'Luke.2.11.3',
    language: 'greek',
    text: 'σωτήρ',
    transliteration: 'sōtēr',
    lemma: 'σωτήρ',
    lemmaTranslit: 'sōtēr',
    gloss: 'Savior',
    glossExtended: 'Savior, deliverer, preserver',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G4990',
    position: 3,
  },
  {
    id: 'Luke.2.11.4',
    language: 'greek',
    text: 'ὅς',
    transliteration: 'hos',
    lemma: 'ὅς',
    lemmaTranslit: 'hos',
    gloss: 'who',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3739',
    position: 4,
  },
  {
    id: 'Luke.2.11.5',
    language: 'greek',
    text: 'ἐστιν',
    transliteration: 'estin',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'is',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G1510',
    position: 5,
  },
  {
    id: 'Luke.2.11.6',
    language: 'greek',
    text: 'Χριστὸς',
    transliteration: 'Christos',
    lemma: 'Χριστός',
    lemmaTranslit: 'Christos',
    gloss: 'Christ',
    glossExtended: 'Christ, Anointed One, Messiah',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G5547',
    position: 6,
  },
  {
    id: 'Luke.2.11.7',
    language: 'greek',
    text: 'κύριος',
    transliteration: 'kyrios',
    lemma: 'κύριος',
    lemmaTranslit: 'kyrios',
    gloss: 'Lord',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G2962',
    position: 7,
  },
];

export const luke2_11_translation: VerseTranslation = {
  verseRef: 'Luke.2.11',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'For was born to you today a Savior, who is Christ the Lord, in the city of David.',
      spans: [
        { id: 'Luke.2.11.en.lit.0', text: 'For was born to you today', position: 0, sourceTokenIds: ['Luke.2.11.0', 'Luke.2.11.1', 'Luke.2.11.2'], confidence: 'high' },
        { id: 'Luke.2.11.en.lit.1', text: 'a Savior,', position: 1, sourceTokenIds: ['Luke.2.11.3'], confidence: 'high' },
        { id: 'Luke.2.11.en.lit.2', text: 'who is Christ the Lord.', position: 2, sourceTokenIds: ['Luke.2.11.4', 'Luke.2.11.5', 'Luke.2.11.6', 'Luke.2.11.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "Today in the town of David a Savior has been born to you; he is the Messiah, the Lord.",
      spans: [
        { id: 'Luke.2.11.en.idi.0', text: 'Today a Savior has been born to you;', position: 0, sourceTokenIds: ['Luke.2.11.0', 'Luke.2.11.1', 'Luke.2.11.2', 'Luke.2.11.3'], confidence: 'high' },
        { id: 'Luke.2.11.en.idi.1', text: 'he is the Messiah, the Lord.', position: 1, sourceTokenIds: ['Luke.2.11.4', 'Luke.2.11.5', 'Luke.2.11.6', 'Luke.2.11.7'], confidence: 'high' },
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

export const luke2_11_verse = {
  ref: 'Luke.2.11',
  sourceTokens: luke2_11_tokens,
  translation: luke2_11_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 2:13 – A multitude of the heavenly host praising God
 * ──────────────────────────────────────────────────────────── */

export const luke2_13_tokens: SourceToken[] = [
  {
    id: 'Luke.2.13.0',
    language: 'greek',
    text: 'πλῆθος',
    transliteration: 'plēthos',
    lemma: 'πλῆθος',
    lemmaTranslit: 'plēthos',
    gloss: 'multitude',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'nominative' },
    strongs: 'G4128',
    position: 0,
  },
  {
    id: 'Luke.2.13.1',
    language: 'greek',
    text: 'στρατιᾶς',
    transliteration: 'stratias',
    lemma: 'στρατιά',
    lemmaTranslit: 'stratia',
    gloss: 'host',
    glossExtended: 'host, army, military force',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G4756',
    position: 1,
  },
  {
    id: 'Luke.2.13.2',
    language: 'greek',
    text: 'οὐρανίου',
    transliteration: 'ouraniou',
    lemma: 'οὐράνιος',
    lemmaTranslit: 'ouranios',
    gloss: 'heavenly',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G3770',
    position: 2,
  },
  {
    id: 'Luke.2.13.3',
    language: 'greek',
    text: 'αἰνούντων',
    transliteration: 'ainountōn',
    lemma: 'αἰνέω',
    lemmaTranslit: 'aineō',
    gloss: 'praising',
    morphology: { pos: 'verb', tense: 'present', voice: 'active', mood: 'participle', gender: 'masculine', number: 'plural', case: 'genitive' },
    strongs: 'G134',
    position: 3,
  },
  {
    id: 'Luke.2.13.4',
    language: 'greek',
    text: 'τὸν',
    transliteration: 'ton',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G3588',
    position: 4,
  },
  {
    id: 'Luke.2.13.5',
    language: 'greek',
    text: 'θεόν',
    transliteration: 'theon',
    lemma: 'θεός',
    lemmaTranslit: 'theos',
    gloss: 'God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G2316',
    position: 5,
  },
];

export const luke2_13_translation: VerseTranslation = {
  verseRef: 'Luke.2.13',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And suddenly there was with the angel a multitude of the heavenly host praising God and saying:',
      spans: [
        { id: 'Luke.2.13.en.lit.0', text: 'a multitude', position: 0, sourceTokenIds: ['Luke.2.13.0'], confidence: 'high' },
        { id: 'Luke.2.13.en.lit.1', text: 'of the heavenly host', position: 1, sourceTokenIds: ['Luke.2.13.1', 'Luke.2.13.2'], confidence: 'high' },
        { id: 'Luke.2.13.en.lit.2', text: 'praising God.', position: 2, sourceTokenIds: ['Luke.2.13.3', 'Luke.2.13.4', 'Luke.2.13.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Suddenly a great company of the heavenly host appeared with the angel, praising God and saying:',
      spans: [
        { id: 'Luke.2.13.en.idi.0', text: 'a great company of the heavenly host appeared,', position: 0, sourceTokenIds: ['Luke.2.13.0', 'Luke.2.13.1', 'Luke.2.13.2'], confidence: 'high' },
        { id: 'Luke.2.13.en.idi.1', text: 'praising God and saying:', position: 1, sourceTokenIds: ['Luke.2.13.3', 'Luke.2.13.4', 'Luke.2.13.5'], confidence: 'high' },
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

export const luke2_13_verse = {
  ref: 'Luke.2.13',
  sourceTokens: luke2_13_tokens,
  translation: luke2_13_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 2:14 – Glory to God in the highest, and on earth peace
 * ──────────────────────────────────────────────────────────── */

export const luke2_14_tokens: SourceToken[] = [
  {
    id: 'Luke.2.14.0',
    language: 'greek',
    text: 'δόξα',
    transliteration: 'doxa',
    lemma: 'δόξα',
    lemmaTranslit: 'doxa',
    gloss: 'glory',
    glossExtended: 'glory, splendor, majesty',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G1391',
    position: 0,
  },
  {
    id: 'Luke.2.14.1',
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
    id: 'Luke.2.14.2',
    language: 'greek',
    text: 'ὑψίστοις',
    transliteration: 'hypsistois',
    lemma: 'ὕψιστος',
    lemmaTranslit: 'hypsistos',
    gloss: 'the highest',
    glossExtended: 'highest, most exalted',
    morphology: { pos: 'adjective', gender: 'neuter', number: 'plural', case: 'dative' },
    strongs: 'G5310',
    position: 2,
  },
  {
    id: 'Luke.2.14.3',
    language: 'greek',
    text: 'εἰρήνη',
    transliteration: 'eirēnē',
    lemma: 'εἰρήνη',
    lemmaTranslit: 'eirēnē',
    gloss: 'peace',
    glossExtended: 'peace, harmony, tranquility',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G1515',
    position: 3,
  },
  {
    id: 'Luke.2.14.4',
    language: 'greek',
    text: 'ἐπὶ',
    transliteration: 'epi',
    lemma: 'ἐπί',
    lemmaTranslit: 'epi',
    gloss: 'on',
    morphology: { pos: 'preposition' },
    strongs: 'G1909',
    position: 4,
  },
  {
    id: 'Luke.2.14.5',
    language: 'greek',
    text: 'γῆς',
    transliteration: 'gēs',
    lemma: 'γῆ',
    lemmaTranslit: 'gē',
    gloss: 'earth',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G1093',
    position: 5,
  },
];

export const luke2_14_translation: VerseTranslation = {
  verseRef: 'Luke.2.14',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Glory in the highest to God, and on earth peace among men of goodwill.',
      spans: [
        { id: 'Luke.2.14.en.lit.0', text: 'Glory in the highest', position: 0, sourceTokenIds: ['Luke.2.14.0', 'Luke.2.14.1', 'Luke.2.14.2'], confidence: 'high' },
        { id: 'Luke.2.14.en.lit.1', text: 'and peace on earth.', position: 1, sourceTokenIds: ['Luke.2.14.3', 'Luke.2.14.4', 'Luke.2.14.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Glory to God in the highest heaven, and on earth peace to those on whom his favor rests.',
      spans: [
        { id: 'Luke.2.14.en.idi.0', text: 'Glory to God in the highest heaven,', position: 0, sourceTokenIds: ['Luke.2.14.0', 'Luke.2.14.1', 'Luke.2.14.2'], confidence: 'high' },
        { id: 'Luke.2.14.en.idi.1', text: 'and on earth peace to those on whom his favor rests.', position: 1, sourceTokenIds: ['Luke.2.14.3', 'Luke.2.14.4', 'Luke.2.14.5'], confidence: 'high' },
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

export const luke2_14_verse = {
  ref: 'Luke.2.14',
  sourceTokens: luke2_14_tokens,
  translation: luke2_14_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Luke 2:1-20 (Birth of Jesus)
 * ──────────────────────────────────────────────────────────── */

export const luke2_1_20_verses = [
  luke2_1_verse,
  luke2_4_verse,
  luke2_7_verse,
  luke2_8_verse,
  luke2_10_verse,
  luke2_11_verse,
  luke2_13_verse,
  luke2_14_verse,
];

export default luke2_1_20_verses;
