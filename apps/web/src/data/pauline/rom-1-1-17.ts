// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 1:1 – Paul, a servant of Christ Jesus
 * ──────────────────────────────────────────────────────────── */

export const romans1_1_tokens: SourceToken[] = [
  {
    id: 'Rom.1.1.0',
    language: 'greek',
    text: 'Παῦλος',
    transliteration: 'Paulos',
    lemma: 'Παῦλος',
    lemmaTranslit: 'Paulos',
    gloss: 'Paul',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3972',
    position: 0,
  },
  {
    id: 'Rom.1.1.1',
    language: 'greek',
    text: 'δοῦλος',
    transliteration: 'doulos',
    lemma: 'δοῦλος',
    lemmaTranslit: 'doulos',
    gloss: 'servant',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G1401',
    position: 1,
  },
  {
    id: 'Rom.1.1.2',
    language: 'greek',
    text: 'Χριστοῦ',
    transliteration: 'Christou',
    lemma: 'Χριστός',
    lemmaTranslit: 'Christos',
    gloss: 'of Christ',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G5547',
    position: 2,
  },
  {
    id: 'Rom.1.1.3',
    language: 'greek',
    text: 'Ἰησοῦ',
    transliteration: 'Iēsou',
    lemma: 'Ἰησοῦς',
    lemmaTranslit: 'Iēsous',
    gloss: 'Jesus',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G2424',
    position: 3,
  },
  {
    id: 'Rom.1.1.4',
    language: 'greek',
    text: 'κλητὸς',
    transliteration: 'klētos',
    lemma: 'κλητός',
    lemmaTranslit: 'klētos',
    gloss: 'called',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G2822',
    position: 4,
  },
  {
    id: 'Rom.1.1.5',
    language: 'greek',
    text: 'ἀπόστολος',
    transliteration: 'apostolos',
    lemma: 'ἀπόστολος',
    lemmaTranslit: 'apostolos',
    gloss: 'apostle',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G652',
    position: 5,
  },
];

export const romans1_1_translation: VerseTranslation = {
  verseRef: 'Rom.1.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Paul, a servant of Christ Jesus, a called apostle, set apart for the gospel of God.',
      spans: [
        { id: 'Rom.1.1.en.lit.0', text: 'Paul, a servant', position: 0, sourceTokenIds: ['Rom.1.1.0', 'Rom.1.1.1'], confidence: 'high' },
        { id: 'Rom.1.1.en.lit.1', text: 'of Christ Jesus,', position: 1, sourceTokenIds: ['Rom.1.1.2', 'Rom.1.1.3'], confidence: 'high' },
        { id: 'Rom.1.1.en.lit.2', text: 'a called apostle, set apart for the gospel of God.', position: 2, sourceTokenIds: ['Rom.1.1.4', 'Rom.1.1.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Paul, a servant of Christ Jesus, called to be an apostle, set apart for the gospel of God.',
      spans: [
        { id: 'Rom.1.1.en.idi.0', text: 'Paul, a servant of Christ Jesus,', position: 0, sourceTokenIds: ['Rom.1.1.0', 'Rom.1.1.1', 'Rom.1.1.2', 'Rom.1.1.3'], confidence: 'high' },
        { id: 'Rom.1.1.en.idi.1', text: 'called to be an apostle, set apart for the gospel of God.', position: 1, sourceTokenIds: ['Rom.1.1.4', 'Rom.1.1.5'], confidence: 'high' },
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

export const romans1_1_notes: StudyNote[] = [
  { id: 'Rom.1.1.note.1', verseRef: 'Rom.1.1', sourceTokenIds: ['Rom.1.1.5'], category: 'theological', title: 'εὐαγγέλιον — Gospel', content: "εὐαγγέλιον (euangelion) means \"good news\" and carried political overtones in the Roman world, where it announced imperial victories or a new emperor's accession. Paul deliberately co-opts this term: the true good news is not Caesar's but God's — the saving power of God revealed in the death and resurrection of Jesus Christ (cf. Rom 1:16).", confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const romans1_1_verse = {
  ref: 'Rom.1.1',
  sourceTokens: romans1_1_tokens,
  translation: romans1_1_translation,
  notes: romans1_1_notes,
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:4 – Declared Son of God in power
 * ──────────────────────────────────────────────────────────── */

export const romans1_4_tokens: SourceToken[] = [
  {
    id: 'Rom.1.4.0',
    language: 'greek',
    text: 'ὁρισθέντος',
    transliteration: 'horisthentos',
    lemma: 'ὁρίζω',
    lemmaTranslit: 'horizō',
    gloss: 'declared',
    morphology: { pos: 'verb', tense: 'aorist', voice: 'passive', mood: 'participle' },
    strongs: 'G3724',
    position: 0,
  },
  {
    id: 'Rom.1.4.1',
    language: 'greek',
    text: 'υἱοῦ',
    transliteration: 'huiou',
    lemma: 'υἱός',
    lemmaTranslit: 'huios',
    gloss: 'Son',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G5207',
    position: 1,
  },
  {
    id: 'Rom.1.4.2',
    language: 'greek',
    text: 'θεοῦ',
    transliteration: 'theou',
    lemma: 'θεός',
    lemmaTranslit: 'theos',
    gloss: 'of God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G2316',
    position: 2,
  },
  {
    id: 'Rom.1.4.3',
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
    id: 'Rom.1.4.4',
    language: 'greek',
    text: 'δυνάμει',
    transliteration: 'dynamei',
    lemma: 'δύναμις',
    lemmaTranslit: 'dynamis',
    gloss: 'power',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G1411',
    position: 4,
  },
  {
    id: 'Rom.1.4.5',
    language: 'greek',
    text: 'ἀναστάσεως',
    transliteration: 'anastaseōs',
    lemma: 'ἀνάστασις',
    lemmaTranslit: 'anastasis',
    gloss: 'resurrection',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G386',
    position: 5,
  },
];

export const romans1_4_translation: VerseTranslation = {
  verseRef: 'Rom.1.4',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Having been declared Son of God in power according to the Spirit of holiness by resurrection from the dead.',
      spans: [
        { id: 'Rom.1.4.en.lit.0', text: 'Having been declared Son of God', position: 0, sourceTokenIds: ['Rom.1.4.0', 'Rom.1.4.1', 'Rom.1.4.2'], confidence: 'high' },
        { id: 'Rom.1.4.en.lit.1', text: 'in power', position: 1, sourceTokenIds: ['Rom.1.4.3', 'Rom.1.4.4'], confidence: 'high' },
        { id: 'Rom.1.4.en.lit.2', text: 'by resurrection from the dead.', position: 2, sourceTokenIds: ['Rom.1.4.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Declared to be the Son of God in power according to the Spirit of holiness by his resurrection from the dead.',
      spans: [
        { id: 'Rom.1.4.en.idi.0', text: 'Declared to be the Son of God in power', position: 0, sourceTokenIds: ['Rom.1.4.0', 'Rom.1.4.1', 'Rom.1.4.2', 'Rom.1.4.3', 'Rom.1.4.4'], confidence: 'high' },
        { id: 'Rom.1.4.en.idi.1', text: 'by his resurrection from the dead.', position: 1, sourceTokenIds: ['Rom.1.4.5'], confidence: 'high' },
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

export const romans1_4_verse = {
  ref: 'Rom.1.4',
  sourceTokens: romans1_4_tokens,
  translation: romans1_4_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:7 – Grace and peace to the beloved in Rome
 * ──────────────────────────────────────────────────────────── */

export const romans1_7_tokens: SourceToken[] = [
  {
    id: 'Rom.1.7.0',
    language: 'greek',
    text: 'πᾶσιν',
    transliteration: 'pasin',
    lemma: 'πᾶς',
    lemmaTranslit: 'pas',
    gloss: 'to all',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', case: 'dative' },
    strongs: 'G3956',
    position: 0,
  },
  {
    id: 'Rom.1.7.1',
    language: 'greek',
    text: 'ἀγαπητοῖς',
    transliteration: 'agapētois',
    lemma: 'ἀγαπητός',
    lemmaTranslit: 'agapētos',
    gloss: 'beloved',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', case: 'dative' },
    strongs: 'G27',
    position: 1,
  },
  {
    id: 'Rom.1.7.2',
    language: 'greek',
    text: 'θεοῦ',
    transliteration: 'theou',
    lemma: 'θεός',
    lemmaTranslit: 'theos',
    gloss: 'of God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G2316',
    position: 2,
  },
  {
    id: 'Rom.1.7.3',
    language: 'greek',
    text: 'κλητοῖς',
    transliteration: 'klētois',
    lemma: 'κλητός',
    lemmaTranslit: 'klētos',
    gloss: 'called',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', case: 'dative' },
    strongs: 'G2822',
    position: 3,
  },
  {
    id: 'Rom.1.7.4',
    language: 'greek',
    text: 'ἁγίοις',
    transliteration: 'hagiois',
    lemma: 'ἅγιος',
    lemmaTranslit: 'hagios',
    gloss: 'saints',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', case: 'dative' },
    strongs: 'G40',
    position: 4,
  },
  {
    id: 'Rom.1.7.5',
    language: 'greek',
    text: 'χάρις',
    transliteration: 'charis',
    lemma: 'χάρις',
    lemmaTranslit: 'charis',
    gloss: 'grace',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G5485',
    position: 5,
  },
];

export const romans1_7_translation: VerseTranslation = {
  verseRef: 'Rom.1.7',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'To all the beloved of God in Rome, called saints: grace to you and peace.',
      spans: [
        { id: 'Rom.1.7.en.lit.0', text: 'To all the beloved of God,', position: 0, sourceTokenIds: ['Rom.1.7.0', 'Rom.1.7.1', 'Rom.1.7.2'], confidence: 'high' },
        { id: 'Rom.1.7.en.lit.1', text: 'called saints:', position: 1, sourceTokenIds: ['Rom.1.7.3', 'Rom.1.7.4'], confidence: 'high' },
        { id: 'Rom.1.7.en.lit.2', text: 'grace to you and peace.', position: 2, sourceTokenIds: ['Rom.1.7.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'To all those in Rome who are loved by God and called to be saints: Grace to you and peace.',
      spans: [
        { id: 'Rom.1.7.en.idi.0', text: 'To all those in Rome who are loved by God', position: 0, sourceTokenIds: ['Rom.1.7.0', 'Rom.1.7.1', 'Rom.1.7.2'], confidence: 'high' },
        { id: 'Rom.1.7.en.idi.1', text: 'and called to be saints:', position: 1, sourceTokenIds: ['Rom.1.7.3', 'Rom.1.7.4'], confidence: 'high' },
        { id: 'Rom.1.7.en.idi.2', text: 'Grace to you and peace.', position: 2, sourceTokenIds: ['Rom.1.7.5'], confidence: 'high' },
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

export const romans1_7_verse = {
  ref: 'Rom.1.7',
  sourceTokens: romans1_7_tokens,
  translation: romans1_7_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:16 – The power of God for salvation
 * ──────────────────────────────────────────────────────────── */

export const romans1_16_tokens: SourceToken[] = [
  {
    id: 'Rom.1.16.0',
    language: 'greek',
    text: 'ἐπαισχύνομαι',
    transliteration: 'epaischynomai',
    lemma: 'ἐπαισχύνομαι',
    lemmaTranslit: 'epaischynomai',
    gloss: 'I am ashamed',
    morphology: { pos: 'verb', person: '1', number: 'singular', tense: 'present', voice: 'middle/passive', mood: 'indicative' },
    strongs: 'G1870',
    position: 0,
  },
  {
    id: 'Rom.1.16.1',
    language: 'greek',
    text: 'εὐαγγέλιον',
    transliteration: 'euangelion',
    lemma: 'εὐαγγέλιον',
    lemmaTranslit: 'euangelion',
    gloss: 'gospel',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'accusative' },
    strongs: 'G2098',
    position: 1,
  },
  {
    id: 'Rom.1.16.2',
    language: 'greek',
    text: 'δύναμις',
    transliteration: 'dynamis',
    lemma: 'δύναμις',
    lemmaTranslit: 'dynamis',
    gloss: 'power',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G1411',
    position: 2,
  },
  {
    id: 'Rom.1.16.3',
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
    id: 'Rom.1.16.4',
    language: 'greek',
    text: 'σωτηρίαν',
    transliteration: 'sōtērian',
    lemma: 'σωτηρία',
    lemmaTranslit: 'sōtēria',
    gloss: 'salvation',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G4991',
    position: 4,
  },
  {
    id: 'Rom.1.16.5',
    language: 'greek',
    text: 'πιστεύοντι',
    transliteration: 'pisteuonti',
    lemma: 'πιστεύω',
    lemmaTranslit: 'pisteuō',
    gloss: 'to the one believing',
    morphology: { pos: 'verb', number: 'singular', case: 'dative', tense: 'present', voice: 'active', mood: 'participle' },
    strongs: 'G4100',
    position: 5,
  },
];

export const romans1_16_translation: VerseTranslation = {
  verseRef: 'Rom.1.16',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'For not I am ashamed of the gospel, for power of God it is unto salvation to everyone the one believing.',
      spans: [
        { id: 'Rom.1.16.en.lit.0', text: 'For not I am ashamed of the gospel,', position: 0, sourceTokenIds: ['Rom.1.16.0', 'Rom.1.16.1'], confidence: 'high' },
        { id: 'Rom.1.16.en.lit.1', text: 'for power of God it is', position: 1, sourceTokenIds: ['Rom.1.16.2', 'Rom.1.16.3'], confidence: 'high' },
        { id: 'Rom.1.16.en.lit.2', text: 'unto salvation to everyone the one believing.', position: 2, sourceTokenIds: ['Rom.1.16.4', 'Rom.1.16.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'For I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes.',
      spans: [
        { id: 'Rom.1.16.en.idi.0', text: 'For I am not ashamed of the gospel,', position: 0, sourceTokenIds: ['Rom.1.16.0', 'Rom.1.16.1'], confidence: 'high' },
        { id: 'Rom.1.16.en.idi.1', text: 'for it is the power of God for salvation', position: 1, sourceTokenIds: ['Rom.1.16.2', 'Rom.1.16.3', 'Rom.1.16.4'], confidence: 'high' },
        { id: 'Rom.1.16.en.idi.2', text: 'to everyone who believes.', position: 2, sourceTokenIds: ['Rom.1.16.5'], confidence: 'high' },
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

export const romans1_16_verse = {
  ref: 'Rom.1.16',
  sourceTokens: romans1_16_tokens,
  translation: romans1_16_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:17 – The righteousness of God revealed by faith
 * ──────────────────────────────────────────────────────────── */

export const romans1_17_tokens: SourceToken[] = [
  {
    id: 'Rom.1.17.0',
    language: 'greek',
    text: 'δικαιοσύνη',
    transliteration: 'dikaiosynē',
    lemma: 'δικαιοσύνη',
    lemmaTranslit: 'dikaiosynē',
    gloss: 'righteousness',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G1343',
    position: 0,
  },
  {
    id: 'Rom.1.17.1',
    language: 'greek',
    text: 'θεοῦ',
    transliteration: 'theou',
    lemma: 'θεός',
    lemmaTranslit: 'theos',
    gloss: 'of God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G2316',
    position: 1,
  },
  {
    id: 'Rom.1.17.2',
    language: 'greek',
    text: 'ἀποκαλύπτεται',
    transliteration: 'apokalyptetai',
    lemma: 'ἀποκαλύπτω',
    lemmaTranslit: 'apokalyptō',
    gloss: 'is revealed',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'passive', mood: 'indicative' },
    strongs: 'G601',
    position: 2,
  },
  {
    id: 'Rom.1.17.3',
    language: 'greek',
    text: 'ἐκ',
    transliteration: 'ek',
    lemma: 'ἐκ',
    lemmaTranslit: 'ek',
    gloss: 'from',
    morphology: { pos: 'preposition' },
    strongs: 'G1537',
    position: 3,
  },
  {
    id: 'Rom.1.17.4',
    language: 'greek',
    text: 'πίστεως',
    transliteration: 'pisteōs',
    lemma: 'πίστις',
    lemmaTranslit: 'pistis',
    gloss: 'faith',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G4102',
    position: 4,
  },
  {
    id: 'Rom.1.17.5',
    language: 'greek',
    text: 'πίστιν',
    transliteration: 'pistin',
    lemma: 'πίστις',
    lemmaTranslit: 'pistis',
    gloss: 'faith',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G4102',
    position: 5,
  },
  {
    id: 'Rom.1.17.6',
    language: 'greek',
    text: 'δίκαιος',
    transliteration: 'dikaios',
    lemma: 'δίκαιος',
    lemmaTranslit: 'dikaios',
    gloss: 'righteous',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G1342',
    position: 6,
  },
];

export const romans1_17_translation: VerseTranslation = {
  verseRef: 'Rom.1.17',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'For righteousness of God in it is revealed from faith to faith, as it has been written: The righteous one from faith shall live.',
      spans: [
        { id: 'Rom.1.17.en.lit.0', text: 'For righteousness of God', position: 0, sourceTokenIds: ['Rom.1.17.0', 'Rom.1.17.1'], confidence: 'high' },
        { id: 'Rom.1.17.en.lit.1', text: 'in it is revealed', position: 1, sourceTokenIds: ['Rom.1.17.2'], confidence: 'high' },
        { id: 'Rom.1.17.en.lit.2', text: 'from faith to faith,', position: 2, sourceTokenIds: ['Rom.1.17.3', 'Rom.1.17.4', 'Rom.1.17.5'], confidence: 'high' },
        { id: 'Rom.1.17.en.lit.3', text: 'The righteous one from faith shall live.', position: 3, sourceTokenIds: ['Rom.1.17.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'For in it the righteousness of God is revealed from faith for faith, as it is written: "The righteous shall live by faith."',
      spans: [
        { id: 'Rom.1.17.en.idi.0', text: 'For in it the righteousness of God is revealed', position: 0, sourceTokenIds: ['Rom.1.17.0', 'Rom.1.17.1', 'Rom.1.17.2'], confidence: 'high' },
        { id: 'Rom.1.17.en.idi.1', text: 'from faith for faith,', position: 1, sourceTokenIds: ['Rom.1.17.3', 'Rom.1.17.4', 'Rom.1.17.5'], confidence: 'high' },
        { id: 'Rom.1.17.en.idi.2', text: 'as it is written: "The righteous shall live by faith."', position: 2, sourceTokenIds: ['Rom.1.17.6'], confidence: 'high' },
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

export const romans1_17_notes: StudyNote[] = [
  { id: 'Rom.1.17.note.1', verseRef: 'Rom.1.17', sourceTokenIds: ['Rom.1.17.0'], category: 'theological', title: 'δικαιοσύνη — Righteousness', content: "δικαιοσύνη θεοῦ (dikaiosynē theou) is the theological heart of Romans. It can be understood as God's own righteousness, the righteous status God grants to believers, or God's saving activity. Paul quotes Habakkuk 2:4 to show that this righteousness is received by faith — a theme that becomes the foundation of Reformation theology (sola fide).", confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const romans1_17_verse = {
  ref: 'Rom.1.17',
  sourceTokens: romans1_17_tokens,
  translation: romans1_17_translation,
  notes: romans1_17_notes,
};

/* ────────────────────────────────────────────────────────────
 * Export combined verses
 * ──────────────────────────────────────────────────────────── */

export const romans1_1_17_verses = [
  romans1_1_verse,
  romans1_4_verse,
  romans1_7_verse,
  romans1_16_verse,
  romans1_17_verse,
];

export default romans1_1_17_verses;
