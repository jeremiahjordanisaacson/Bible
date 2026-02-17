// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ════════════════════════════════════════════════════════════
 * Acts 2:1-47 — The Day of Pentecost
 * Eight key verses from the birth of the church
 * ════════════════════════════════════════════════════════════ */

/* ────────────────────────────────────────────────────────────
 * Verse 2:1 – When the day of Pentecost had fully come
 * ──────────────────────────────────────────────────────────── */

export const acts2_1_tokens: SourceToken[] = [
  {
    id: 'Acts.2.1.0',
    language: 'greek',
    text: 'ἐν',
    transliteration: 'en',
    lemma: 'ἐν',
    lemmaTranslit: 'en',
    gloss: 'in / when',
    morphology: { pos: 'preposition' },
    strongs: 'G1722',
    position: 0,
  },
  {
    id: 'Acts.2.1.1',
    language: 'greek',
    text: 'τῷ',
    transliteration: 'tō',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'neuter', number: 'singular', case: 'dative' },
    strongs: 'G3588',
    position: 1,
  },
  {
    id: 'Acts.2.1.2',
    language: 'greek',
    text: 'συμπληροῦσθαι',
    transliteration: 'symplērousthai',
    lemma: 'συμπληρόω',
    lemmaTranslit: 'symplēroō',
    gloss: 'to be fulfilled',
    morphology: { pos: 'verb', tense: 'present', voice: 'passive', mood: 'infinitive' },
    strongs: 'G4845',
    position: 2,
  },
  {
    id: 'Acts.2.1.3',
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
    id: 'Acts.2.1.4',
    language: 'greek',
    text: 'ἡμέραν',
    transliteration: 'hēmeran',
    lemma: 'ἡμέρα',
    lemmaTranslit: 'hēmera',
    gloss: 'day',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G2250',
    position: 4,
  },
  {
    id: 'Acts.2.1.5',
    language: 'greek',
    text: 'Πεντηκοστῆς',
    transliteration: 'Pentēkostēs',
    lemma: 'πεντηκοστή',
    lemmaTranslit: 'pentēkostē',
    gloss: 'of Pentecost',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G4005',
    position: 5,
  },
];

export const acts2_1_translation: VerseTranslation = {
  verseRef: 'Acts.2.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And in the fulfilling of the day of Pentecost, they were all together in one place.',
      spans: [
        { id: 'Acts.2.1.en.lit.0', text: 'in the fulfilling', position: 0, sourceTokenIds: ['Acts.2.1.0', 'Acts.2.1.1', 'Acts.2.1.2'], confidence: 'high' },
        { id: 'Acts.2.1.en.lit.1', text: 'of the day', position: 1, sourceTokenIds: ['Acts.2.1.3', 'Acts.2.1.4'], confidence: 'high' },
        { id: 'Acts.2.1.en.lit.2', text: 'of Pentecost', position: 2, sourceTokenIds: ['Acts.2.1.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'When the day of Pentecost had fully come, they were all together in one place.',
      spans: [
        { id: 'Acts.2.1.en.idi.0', text: 'When the day of Pentecost had fully come,', position: 0, sourceTokenIds: ['Acts.2.1.0', 'Acts.2.1.1', 'Acts.2.1.2', 'Acts.2.1.3', 'Acts.2.1.4', 'Acts.2.1.5'], confidence: 'high' },
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

export const acts2_1_verse = {
  ref: 'Acts.2.1',
  sourceTokens: acts2_1_tokens,
  translation: acts2_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 2:2 – Suddenly a sound like a mighty rushing wind
 * ──────────────────────────────────────────────────────────── */

export const acts2_2_tokens: SourceToken[] = [
  {
    id: 'Acts.2.2.0',
    language: 'greek',
    text: 'ἄφνω',
    transliteration: 'aphnō',
    lemma: 'ἄφνω',
    lemmaTranslit: 'aphnō',
    gloss: 'suddenly',
    morphology: { pos: 'adverb' },
    strongs: 'G869',
    position: 0,
  },
  {
    id: 'Acts.2.2.1',
    language: 'greek',
    text: 'ἦχος',
    transliteration: 'ēchos',
    lemma: 'ἦχος',
    lemmaTranslit: 'ēchos',
    gloss: 'a sound',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G2279',
    position: 1,
  },
  {
    id: 'Acts.2.2.2',
    language: 'greek',
    text: 'φερομένης',
    transliteration: 'pheromenēs',
    lemma: 'φέρω',
    lemmaTranslit: 'pherō',
    gloss: 'rushing',
    morphology: { pos: 'verb', tense: 'present', voice: 'passive', mood: 'participle', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G5342',
    position: 2,
  },
  {
    id: 'Acts.2.2.3',
    language: 'greek',
    text: 'πνοῆς',
    transliteration: 'pnoēs',
    lemma: 'πνοή',
    lemmaTranslit: 'pnoē',
    gloss: 'of a wind / breath',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G4157',
    position: 3,
  },
  {
    id: 'Acts.2.2.4',
    language: 'greek',
    text: 'βιαίας',
    transliteration: 'biaias',
    lemma: 'βίαιος',
    lemmaTranslit: 'biaios',
    gloss: 'violent / mighty',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G972',
    position: 4,
  },
];

export const acts2_2_translation: VerseTranslation = {
  verseRef: 'Acts.2.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And suddenly there came from heaven a sound as of a violent rushing wind.',
      spans: [
        { id: 'Acts.2.2.en.lit.0', text: 'suddenly', position: 0, sourceTokenIds: ['Acts.2.2.0'], confidence: 'high' },
        { id: 'Acts.2.2.en.lit.1', text: 'a sound', position: 1, sourceTokenIds: ['Acts.2.2.1'], confidence: 'high' },
        { id: 'Acts.2.2.en.lit.2', text: 'of a violent rushing wind', position: 2, sourceTokenIds: ['Acts.2.2.2', 'Acts.2.2.3', 'Acts.2.2.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Suddenly a sound like a mighty rushing wind came from heaven and filled the whole house.',
      spans: [
        { id: 'Acts.2.2.en.idi.0', text: 'Suddenly a sound like a mighty rushing wind', position: 0, sourceTokenIds: ['Acts.2.2.0', 'Acts.2.2.1', 'Acts.2.2.2', 'Acts.2.2.3', 'Acts.2.2.4'], confidence: 'high' },
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

export const acts2_2_verse = {
  ref: 'Acts.2.2',
  sourceTokens: acts2_2_tokens,
  translation: acts2_2_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 2:3 – Tongues as of fire appeared
 * ──────────────────────────────────────────────────────────── */

export const acts2_3_tokens: SourceToken[] = [
  {
    id: 'Acts.2.3.0',
    language: 'greek',
    text: 'ὤφθησαν',
    transliteration: 'ōphthēsan',
    lemma: 'ὁράω',
    lemmaTranslit: 'horaō',
    gloss: 'appeared',
    morphology: { pos: 'verb', person: '3', number: 'plural', tense: 'aorist', voice: 'passive', mood: 'indicative' },
    strongs: 'G3700',
    position: 0,
  },
  {
    id: 'Acts.2.3.1',
    language: 'greek',
    text: 'γλῶσσαι',
    transliteration: 'glōssai',
    lemma: 'γλῶσσα',
    lemmaTranslit: 'glōssa',
    gloss: 'tongues',
    morphology: { pos: 'noun', gender: 'feminine', number: 'plural', case: 'nominative' },
    strongs: 'G1100',
    position: 1,
  },
  {
    id: 'Acts.2.3.2',
    language: 'greek',
    text: 'ὡσεὶ',
    transliteration: 'hōsei',
    lemma: 'ὡσεί',
    lemmaTranslit: 'hōsei',
    gloss: 'as if / as of',
    morphology: { pos: 'adverb' },
    strongs: 'G5616',
    position: 2,
  },
  {
    id: 'Acts.2.3.3',
    language: 'greek',
    text: 'πυρός',
    transliteration: 'pyros',
    lemma: 'πῦρ',
    lemmaTranslit: 'pyr',
    gloss: 'of fire',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'genitive' },
    strongs: 'G4442',
    position: 3,
  },
  {
    id: 'Acts.2.3.4',
    language: 'greek',
    text: 'διαμεριζόμεναι',
    transliteration: 'diamerizomenai',
    lemma: 'διαμερίζω',
    lemmaTranslit: 'diamerizō',
    gloss: 'distributing themselves',
    morphology: { pos: 'verb', tense: 'present', voice: 'passive', mood: 'participle', gender: 'feminine', number: 'plural', case: 'nominative' },
    strongs: 'G1266',
    position: 4,
  },
];

export const acts2_3_translation: VerseTranslation = {
  verseRef: 'Acts.2.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And there appeared to them tongues as of fire, being distributed, and it sat upon each one of them.',
      spans: [
        { id: 'Acts.2.3.en.lit.0', text: 'appeared', position: 0, sourceTokenIds: ['Acts.2.3.0'], confidence: 'high' },
        { id: 'Acts.2.3.en.lit.1', text: 'tongues', position: 1, sourceTokenIds: ['Acts.2.3.1'], confidence: 'high' },
        { id: 'Acts.2.3.en.lit.2', text: 'as of fire', position: 2, sourceTokenIds: ['Acts.2.3.2', 'Acts.2.3.3'], confidence: 'high' },
        { id: 'Acts.2.3.en.lit.3', text: 'being distributed', position: 3, sourceTokenIds: ['Acts.2.3.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Tongues as of fire appeared, distributed among them, and rested on each one.',
      spans: [
        { id: 'Acts.2.3.en.idi.0', text: 'Tongues as of fire appeared, distributed among them,', position: 0, sourceTokenIds: ['Acts.2.3.0', 'Acts.2.3.1', 'Acts.2.3.2', 'Acts.2.3.3', 'Acts.2.3.4'], confidence: 'high' },
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

export const acts2_3_verse = {
  ref: 'Acts.2.3',
  sourceTokens: acts2_3_tokens,
  translation: acts2_3_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 2:4 – Filled with the Holy Spirit, speaking in tongues
 * ──────────────────────────────────────────────────────────── */

export const acts2_4_tokens: SourceToken[] = [
  {
    id: 'Acts.2.4.0',
    language: 'greek',
    text: 'ἐπλήσθησαν',
    transliteration: 'eplēsthēsan',
    lemma: 'πίμπλημι',
    lemmaTranslit: 'pimplēmi',
    gloss: 'they were filled',
    morphology: { pos: 'verb', person: '3', number: 'plural', tense: 'aorist', voice: 'passive', mood: 'indicative' },
    strongs: 'G4130',
    position: 0,
  },
  {
    id: 'Acts.2.4.1',
    language: 'greek',
    text: 'πνεύματος',
    transliteration: 'pneumatos',
    lemma: 'πνεῦμα',
    lemmaTranslit: 'pneuma',
    gloss: 'Spirit',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'genitive' },
    strongs: 'G4151',
    position: 1,
  },
  {
    id: 'Acts.2.4.2',
    language: 'greek',
    text: 'ἁγίου',
    transliteration: 'hagiou',
    lemma: 'ἅγιος',
    lemmaTranslit: 'hagios',
    gloss: 'Holy',
    morphology: { pos: 'adjective', gender: 'neuter', number: 'singular', case: 'genitive' },
    strongs: 'G40',
    position: 2,
  },
  {
    id: 'Acts.2.4.3',
    language: 'greek',
    text: 'ἤρξαντο',
    transliteration: 'ērxanto',
    lemma: 'ἄρχω',
    lemmaTranslit: 'archō',
    gloss: 'they began',
    morphology: { pos: 'verb', person: '3', number: 'plural', tense: 'aorist', voice: 'middle', mood: 'indicative' },
    strongs: 'G756',
    position: 3,
  },
  {
    id: 'Acts.2.4.4',
    language: 'greek',
    text: 'λαλεῖν',
    transliteration: 'lalein',
    lemma: 'λαλέω',
    lemmaTranslit: 'laleō',
    gloss: 'to speak',
    morphology: { pos: 'verb', tense: 'present', voice: 'active', mood: 'infinitive' },
    strongs: 'G2980',
    position: 4,
  },
  {
    id: 'Acts.2.4.5',
    language: 'greek',
    text: 'ἑτέραις',
    transliteration: 'heterais',
    lemma: 'ἕτερος',
    lemmaTranslit: 'heteros',
    gloss: 'other / different',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'plural', case: 'dative' },
    strongs: 'G2087',
    position: 5,
  },
  {
    id: 'Acts.2.4.6',
    language: 'greek',
    text: 'γλώσσαις',
    transliteration: 'glōssais',
    lemma: 'γλῶσσα',
    lemmaTranslit: 'glōssa',
    gloss: 'tongues / languages',
    morphology: { pos: 'noun', gender: 'feminine', number: 'plural', case: 'dative' },
    strongs: 'G1100',
    position: 6,
  },
];

export const acts2_4_translation: VerseTranslation = {
  verseRef: 'Acts.2.4',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And they were all filled with the Holy Spirit and began to speak in other tongues.',
      spans: [
        { id: 'Acts.2.4.en.lit.0', text: 'they were filled', position: 0, sourceTokenIds: ['Acts.2.4.0'], confidence: 'high' },
        { id: 'Acts.2.4.en.lit.1', text: 'with the Holy Spirit', position: 1, sourceTokenIds: ['Acts.2.4.1', 'Acts.2.4.2'], confidence: 'high' },
        { id: 'Acts.2.4.en.lit.2', text: 'they began to speak', position: 2, sourceTokenIds: ['Acts.2.4.3', 'Acts.2.4.4'], confidence: 'high' },
        { id: 'Acts.2.4.en.lit.3', text: 'in other tongues', position: 3, sourceTokenIds: ['Acts.2.4.5', 'Acts.2.4.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'They were all filled with the Holy Spirit and began to speak in other tongues as the Spirit enabled them.',
      spans: [
        { id: 'Acts.2.4.en.idi.0', text: 'They were all filled with the Holy Spirit', position: 0, sourceTokenIds: ['Acts.2.4.0', 'Acts.2.4.1', 'Acts.2.4.2'], confidence: 'high' },
        { id: 'Acts.2.4.en.idi.1', text: 'and began to speak in other tongues', position: 1, sourceTokenIds: ['Acts.2.4.3', 'Acts.2.4.4', 'Acts.2.4.5', 'Acts.2.4.6'], confidence: 'high' },
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

export const acts2_4_notes: StudyNote[] = [
  { id: 'Acts.2.4.note.1', verseRef: 'Acts.2.4', sourceTokenIds: ['Acts.2.4.5', 'Acts.2.4.6'], category: 'lexical', title: "Other Tongues (heterais glōssais)", content: "The phrase ἑτέραις γλώσσαις ('other tongues') uses heteros, meaning 'different in kind,' rather than allos ('another of the same kind'). In context (vv. 6-11) these are identifiable human languages, not ecstatic speech. The term glōssa can mean both 'tongue' (organ) and 'language.'", confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const acts2_4_verse = {
  ref: 'Acts.2.4',
  sourceTokens: acts2_4_tokens,
  translation: acts2_4_translation,
  notes: acts2_4_notes,
};

/* ────────────────────────────────────────────────────────────
 * Verse 2:14 – Peter stood up with the eleven
 * ──────────────────────────────────────────────────────────── */

export const acts2_14_tokens: SourceToken[] = [
  {
    id: 'Acts.2.14.0',
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
    id: 'Acts.2.14.1',
    language: 'greek',
    text: 'Πέτρος',
    transliteration: 'Petros',
    lemma: 'Πέτρος',
    lemmaTranslit: 'Petros',
    gloss: 'Peter',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G4074',
    position: 1,
  },
  {
    id: 'Acts.2.14.2',
    language: 'greek',
    text: 'σὺν',
    transliteration: 'syn',
    lemma: 'σύν',
    lemmaTranslit: 'syn',
    gloss: 'with',
    morphology: { pos: 'preposition' },
    strongs: 'G4862',
    position: 2,
  },
  {
    id: 'Acts.2.14.3',
    language: 'greek',
    text: 'τοῖς',
    transliteration: 'tois',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'plural', case: 'dative' },
    strongs: 'G3588',
    position: 3,
  },
  {
    id: 'Acts.2.14.4',
    language: 'greek',
    text: 'ἕνδεκα',
    transliteration: 'hendeka',
    lemma: 'ἕνδεκα',
    lemmaTranslit: 'hendeka',
    gloss: 'eleven',
    morphology: { pos: 'adjective' },
    strongs: 'G1733',
    position: 4,
  },
  {
    id: 'Acts.2.14.5',
    language: 'greek',
    text: 'ἐπῆρεν',
    transliteration: 'epēren',
    lemma: 'ἐπαίρω',
    lemmaTranslit: 'epairō',
    gloss: 'lifted up',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G1869',
    position: 5,
  },
];

export const acts2_14_translation: VerseTranslation = {
  verseRef: 'Acts.2.14',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'But having stood, Peter with the eleven lifted up his voice and declared to them.',
      spans: [
        { id: 'Acts.2.14.en.lit.0', text: 'having stood', position: 0, sourceTokenIds: ['Acts.2.14.0'], confidence: 'high' },
        { id: 'Acts.2.14.en.lit.1', text: 'Peter', position: 1, sourceTokenIds: ['Acts.2.14.1'], confidence: 'high' },
        { id: 'Acts.2.14.en.lit.2', text: 'with the eleven', position: 2, sourceTokenIds: ['Acts.2.14.2', 'Acts.2.14.3', 'Acts.2.14.4'], confidence: 'high' },
        { id: 'Acts.2.14.en.lit.3', text: 'lifted up his voice', position: 3, sourceTokenIds: ['Acts.2.14.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Peter stood up with the eleven, raised his voice, and addressed the crowd.',
      spans: [
        { id: 'Acts.2.14.en.idi.0', text: 'Peter stood up with the eleven,', position: 0, sourceTokenIds: ['Acts.2.14.0', 'Acts.2.14.1', 'Acts.2.14.2', 'Acts.2.14.3', 'Acts.2.14.4'], confidence: 'high' },
        { id: 'Acts.2.14.en.idi.1', text: 'raised his voice', position: 1, sourceTokenIds: ['Acts.2.14.5'], confidence: 'high' },
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

export const acts2_14_verse = {
  ref: 'Acts.2.14',
  sourceTokens: acts2_14_tokens,
  translation: acts2_14_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 2:36 – God has made him both Lord and Christ
 * ──────────────────────────────────────────────────────────── */

export const acts2_36_tokens: SourceToken[] = [
  {
    id: 'Acts.2.36.0',
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
    id: 'Acts.2.36.1',
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
    id: 'Acts.2.36.2',
    language: 'greek',
    text: 'ἐποίησεν',
    transliteration: 'epoiēsen',
    lemma: 'ποιέω',
    lemmaTranslit: 'poieō',
    gloss: 'made',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G4160',
    position: 2,
  },
  {
    id: 'Acts.2.36.3',
    language: 'greek',
    text: 'κύριον',
    transliteration: 'kyrion',
    lemma: 'κύριος',
    lemmaTranslit: 'kyrios',
    gloss: 'Lord',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G2962',
    position: 3,
  },
  {
    id: 'Acts.2.36.4',
    language: 'greek',
    text: 'καὶ',
    transliteration: 'kai',
    lemma: 'καί',
    lemmaTranslit: 'kai',
    gloss: 'and',
    morphology: { pos: 'conjunction' },
    strongs: 'G2532',
    position: 4,
  },
  {
    id: 'Acts.2.36.5',
    language: 'greek',
    text: 'χριστόν',
    transliteration: 'christon',
    lemma: 'Χριστός',
    lemmaTranslit: 'Christos',
    gloss: 'Christ / Anointed One',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G5547',
    position: 5,
  },
];

export const acts2_36_translation: VerseTranslation = {
  verseRef: 'Acts.2.36',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'God made him both Lord and Christ, this Jesus whom you crucified.',
      spans: [
        { id: 'Acts.2.36.en.lit.0', text: 'God', position: 0, sourceTokenIds: ['Acts.2.36.0', 'Acts.2.36.1'], confidence: 'high' },
        { id: 'Acts.2.36.en.lit.1', text: 'made', position: 1, sourceTokenIds: ['Acts.2.36.2'], confidence: 'high' },
        { id: 'Acts.2.36.en.lit.2', text: 'Lord and Christ', position: 2, sourceTokenIds: ['Acts.2.36.3', 'Acts.2.36.4', 'Acts.2.36.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'God has made this Jesus, whom you crucified, both Lord and Christ.',
      spans: [
        { id: 'Acts.2.36.en.idi.0', text: 'God has made this Jesus both Lord and Christ.', position: 0, sourceTokenIds: ['Acts.2.36.0', 'Acts.2.36.1', 'Acts.2.36.2', 'Acts.2.36.3', 'Acts.2.36.4', 'Acts.2.36.5'], confidence: 'high' },
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

export const acts2_36_verse = {
  ref: 'Acts.2.36',
  sourceTokens: acts2_36_tokens,
  translation: acts2_36_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 2:38 – Repent and be baptized
 * ──────────────────────────────────────────────────────────── */

export const acts2_38_tokens: SourceToken[] = [
  {
    id: 'Acts.2.38.0',
    language: 'greek',
    text: 'μετανοήσατε',
    transliteration: 'metanoēsate',
    lemma: 'μετανοέω',
    lemmaTranslit: 'metanoeō',
    gloss: 'repent',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'aorist', voice: 'active', mood: 'imperative' },
    strongs: 'G3340',
    position: 0,
  },
  {
    id: 'Acts.2.38.1',
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
    id: 'Acts.2.38.2',
    language: 'greek',
    text: 'βαπτισθήτω',
    transliteration: 'baptisthētō',
    lemma: 'βαπτίζω',
    lemmaTranslit: 'baptizō',
    gloss: 'let be baptized',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'passive', mood: 'imperative' },
    strongs: 'G907',
    position: 2,
  },
  {
    id: 'Acts.2.38.3',
    language: 'greek',
    text: 'ἕκαστος',
    transliteration: 'hekastos',
    lemma: 'ἕκαστος',
    lemmaTranslit: 'hekastos',
    gloss: 'each one',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G1538',
    position: 3,
  },
  {
    id: 'Acts.2.38.4',
    language: 'greek',
    text: 'ὑμῶν',
    transliteration: 'hymōn',
    lemma: 'ὑμεῖς',
    lemmaTranslit: 'hymeis',
    gloss: 'of you',
    morphology: { pos: 'pronoun', number: 'plural', case: 'genitive' },
    strongs: 'G4771',
    position: 4,
  },
  {
    id: 'Acts.2.38.5',
    language: 'greek',
    text: 'ἄφεσιν',
    transliteration: 'aphesin',
    lemma: 'ἄφεσις',
    lemmaTranslit: 'aphesis',
    gloss: 'forgiveness',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G859',
    position: 5,
  },
  {
    id: 'Acts.2.38.6',
    language: 'greek',
    text: 'ἁμαρτιῶν',
    transliteration: 'hamartiōn',
    lemma: 'ἁμαρτία',
    lemmaTranslit: 'hamartia',
    gloss: 'of sins',
    morphology: { pos: 'noun', gender: 'feminine', number: 'plural', case: 'genitive' },
    strongs: 'G266',
    position: 6,
  },
];

export const acts2_38_translation: VerseTranslation = {
  verseRef: 'Acts.2.38',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Repent, and let each one of you be baptized in the name of Jesus Christ for the forgiveness of your sins.',
      spans: [
        { id: 'Acts.2.38.en.lit.0', text: 'Repent', position: 0, sourceTokenIds: ['Acts.2.38.0'], confidence: 'high' },
        { id: 'Acts.2.38.en.lit.1', text: 'and let be baptized', position: 1, sourceTokenIds: ['Acts.2.38.1', 'Acts.2.38.2'], confidence: 'high' },
        { id: 'Acts.2.38.en.lit.2', text: 'each one of you', position: 2, sourceTokenIds: ['Acts.2.38.3', 'Acts.2.38.4'], confidence: 'high' },
        { id: 'Acts.2.38.en.lit.3', text: 'for forgiveness of sins', position: 3, sourceTokenIds: ['Acts.2.38.5', 'Acts.2.38.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins.',
      spans: [
        { id: 'Acts.2.38.en.idi.0', text: 'Repent and be baptized, every one of you,', position: 0, sourceTokenIds: ['Acts.2.38.0', 'Acts.2.38.1', 'Acts.2.38.2', 'Acts.2.38.3', 'Acts.2.38.4'], confidence: 'high' },
        { id: 'Acts.2.38.en.idi.1', text: 'for the forgiveness of your sins.', position: 1, sourceTokenIds: ['Acts.2.38.5', 'Acts.2.38.6'], confidence: 'high' },
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

export const acts2_38_notes: StudyNote[] = [
  { id: 'Acts.2.38.note.1', verseRef: 'Acts.2.38', sourceTokenIds: ['Acts.2.38.0', 'Acts.2.38.2'], category: 'interpretive', title: "Repent and Be Baptized", content: "The imperative metanoēsate is 2nd person plural aorist active ('you all repent'), while baptisthētō is 3rd person singular aorist passive ('let each one be baptized'). The shift in person and number highlights that repentance is a collective call, while baptism is an individual act. The preposition eis before 'forgiveness' (ἄφεσιν) is debated: it may mean 'for the purpose of,' 'because of,' or 'with a view toward' forgiveness.", confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const acts2_38_verse = {
  ref: 'Acts.2.38',
  sourceTokens: acts2_38_tokens,
  translation: acts2_38_translation,
  notes: acts2_38_notes,
};

/* ────────────────────────────────────────────────────────────
 * Verse 2:41 – About three thousand souls were added
 * ──────────────────────────────────────────────────────────── */

export const acts2_41_tokens: SourceToken[] = [
  {
    id: 'Acts.2.41.0',
    language: 'greek',
    text: 'ἀποδεξάμενοι',
    transliteration: 'apodexamenoi',
    lemma: 'ἀποδέχομαι',
    lemmaTranslit: 'apodechomai',
    gloss: 'having received',
    morphology: { pos: 'verb', tense: 'aorist', voice: 'middle', mood: 'participle', gender: 'masculine', number: 'plural', case: 'nominative' },
    strongs: 'G588',
    position: 0,
  },
  {
    id: 'Acts.2.41.1',
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
    id: 'Acts.2.41.2',
    language: 'greek',
    text: 'λόγον',
    transliteration: 'logon',
    lemma: 'λόγος',
    lemmaTranslit: 'logos',
    gloss: 'word',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G3056',
    position: 2,
  },
  {
    id: 'Acts.2.41.3',
    language: 'greek',
    text: 'ἐβαπτίσθησαν',
    transliteration: 'ebaptisthēsan',
    lemma: 'βαπτίζω',
    lemmaTranslit: 'baptizō',
    gloss: 'were baptized',
    morphology: { pos: 'verb', person: '3', number: 'plural', tense: 'aorist', voice: 'passive', mood: 'indicative' },
    strongs: 'G907',
    position: 3,
  },
  {
    id: 'Acts.2.41.4',
    language: 'greek',
    text: 'ψυχαὶ',
    transliteration: 'psychai',
    lemma: 'ψυχή',
    lemmaTranslit: 'psychē',
    gloss: 'souls',
    morphology: { pos: 'noun', gender: 'feminine', number: 'plural', case: 'nominative' },
    strongs: 'G5590',
    position: 4,
  },
  {
    id: 'Acts.2.41.5',
    language: 'greek',
    text: 'τρισχίλιαι',
    transliteration: 'trischiliai',
    lemma: 'τρισχίλιοι',
    lemmaTranslit: 'trischilioi',
    gloss: 'three thousand',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'plural', case: 'nominative' },
    strongs: 'G5153',
    position: 5,
  },
];

export const acts2_41_translation: VerseTranslation = {
  verseRef: 'Acts.2.41',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Those then having received his word were baptized, and there were added in that day about three thousand souls.',
      spans: [
        { id: 'Acts.2.41.en.lit.0', text: 'having received', position: 0, sourceTokenIds: ['Acts.2.41.0'], confidence: 'high' },
        { id: 'Acts.2.41.en.lit.1', text: 'the word', position: 1, sourceTokenIds: ['Acts.2.41.1', 'Acts.2.41.2'], confidence: 'high' },
        { id: 'Acts.2.41.en.lit.2', text: 'were baptized', position: 2, sourceTokenIds: ['Acts.2.41.3'], confidence: 'high' },
        { id: 'Acts.2.41.en.lit.3', text: 'about three thousand souls', position: 3, sourceTokenIds: ['Acts.2.41.4', 'Acts.2.41.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Those who received his word were baptized, and about three thousand souls were added that day.',
      spans: [
        { id: 'Acts.2.41.en.idi.0', text: 'Those who received his word were baptized,', position: 0, sourceTokenIds: ['Acts.2.41.0', 'Acts.2.41.1', 'Acts.2.41.2', 'Acts.2.41.3'], confidence: 'high' },
        { id: 'Acts.2.41.en.idi.1', text: 'about three thousand souls were added that day.', position: 1, sourceTokenIds: ['Acts.2.41.4', 'Acts.2.41.5'], confidence: 'high' },
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

export const acts2_41_verse = {
  ref: 'Acts.2.41',
  sourceTokens: acts2_41_tokens,
  translation: acts2_41_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Export combined verses
 * ──────────────────────────────────────────────────────────── */

export const acts2_1_47_verses = [
  acts2_1_verse,
  acts2_2_verse,
  acts2_3_verse,
  acts2_4_verse,
  acts2_14_verse,
  acts2_36_verse,
  acts2_38_verse,
  acts2_41_verse,
];

export default acts2_1_47_verses;
