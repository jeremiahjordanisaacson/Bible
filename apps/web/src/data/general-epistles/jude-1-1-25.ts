// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 1:1 – Jude, a servant of Jesus Christ
 * ──────────────────────────────────────────────────────────── */

export const jude1_1_tokens: SourceToken[] = [
  {
    id: 'Jude.1.1.0',
    language: 'greek',
    text: 'Ἰούδας',
    transliteration: 'Ioudas',
    lemma: 'Ἰούδας',
    lemmaTranslit: 'Ioudas',
    gloss: 'Jude',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G2455',
    position: 0,
  },
  {
    id: 'Jude.1.1.1',
    language: 'greek',
    text: 'Ἰησοῦ',
    transliteration: 'Iēsou',
    lemma: 'Ἰησοῦς',
    lemmaTranslit: 'Iēsous',
    gloss: 'of Jesus',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G2424',
    position: 1,
  },
  {
    id: 'Jude.1.1.2',
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
    id: 'Jude.1.1.3',
    language: 'greek',
    text: 'δοῦλος',
    transliteration: 'doulos',
    lemma: 'δοῦλος',
    lemmaTranslit: 'doulos',
    gloss: 'servant / slave',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G1401',
    position: 3,
  },
  {
    id: 'Jude.1.1.4',
    language: 'greek',
    text: 'ἀδελφὸς',
    transliteration: 'adelphos',
    lemma: 'ἀδελφός',
    lemmaTranslit: 'adelphos',
    gloss: 'brother',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G80',
    position: 4,
  },
  {
    id: 'Jude.1.1.5',
    language: 'greek',
    text: 'Ἰακώβου',
    transliteration: 'Iakōbou',
    lemma: 'Ἰάκωβος',
    lemmaTranslit: 'Iakōbos',
    gloss: 'of James',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G2385',
    position: 5,
  },
  {
    id: 'Jude.1.1.6',
    language: 'greek',
    text: 'κλητοῖς',
    transliteration: 'klētois',
    lemma: 'κλητός',
    lemmaTranslit: 'klētos',
    gloss: 'to the called',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', case: 'dative' },
    strongs: 'G2822',
    position: 6,
  },
];

export const jude1_1_translation: VerseTranslation = {
  verseRef: 'Jude.1.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Jude, a servant of Jesus Christ and brother of James, to the ones called, beloved in God the Father and kept for Jesus Christ.',
      spans: [
        { id: 'Jude.1.1.en.lit.0', text: 'Jude, a servant of Jesus Christ', position: 0, sourceTokenIds: ['Jude.1.1.0', 'Jude.1.1.1', 'Jude.1.1.2', 'Jude.1.1.3'], confidence: 'high' },
        { id: 'Jude.1.1.en.lit.1', text: 'and brother of James,', position: 1, sourceTokenIds: ['Jude.1.1.4', 'Jude.1.1.5'], confidence: 'high' },
        { id: 'Jude.1.1.en.lit.2', text: 'to the ones called,', position: 2, sourceTokenIds: ['Jude.1.1.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Jude, a servant of Jesus Christ and brother of James, to those who are called, beloved in God the Father and kept for Jesus Christ.',
      spans: [
        { id: 'Jude.1.1.en.idi.0', text: 'Jude, a servant of Jesus Christ and brother of James,', position: 0, sourceTokenIds: ['Jude.1.1.0', 'Jude.1.1.1', 'Jude.1.1.2', 'Jude.1.1.3', 'Jude.1.1.4', 'Jude.1.1.5'], confidence: 'high' },
        { id: 'Jude.1.1.en.idi.1', text: 'to those who are called,', position: 1, sourceTokenIds: ['Jude.1.1.6'], confidence: 'high' },
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

export const jude1_1_verse = {
  ref: 'Jude.1.1',
  sourceTokens: jude1_1_tokens,
  translation: jude1_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:3 – Contend for the faith once delivered to the saints
 * ──────────────────────────────────────────────────────────── */

export const jude1_3_tokens: SourceToken[] = [
  {
    id: 'Jude.1.3.0',
    language: 'greek',
    text: 'ἀνάγκην',
    transliteration: 'anankēn',
    lemma: 'ἀνάγκη',
    lemmaTranslit: 'anankē',
    gloss: 'necessity',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G318',
    position: 0,
  },
  {
    id: 'Jude.1.3.1',
    language: 'greek',
    text: 'ἐπαγωνίζεσθαι',
    transliteration: 'epagōnizesthai',
    lemma: 'ἐπαγωνίζομαι',
    lemmaTranslit: 'epagōnizomai',
    gloss: 'to contend earnestly',
    morphology: { pos: 'verb', tense: 'present', voice: 'middle', mood: 'infinitive' },
    strongs: 'G1864',
    position: 1,
  },
  {
    id: 'Jude.1.3.2',
    language: 'greek',
    text: 'τῇ',
    transliteration: 'tē',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G3588',
    position: 2,
  },
  {
    id: 'Jude.1.3.3',
    language: 'greek',
    text: 'ἅπαξ',
    transliteration: 'hapax',
    lemma: 'ἅπαξ',
    lemmaTranslit: 'hapax',
    gloss: 'once for all',
    morphology: { pos: 'adverb' },
    strongs: 'G530',
    position: 3,
  },
  {
    id: 'Jude.1.3.4',
    language: 'greek',
    text: 'παραδοθείσῃ',
    transliteration: 'paradotheisē',
    lemma: 'παραδίδωμι',
    lemmaTranslit: 'paradidōmi',
    gloss: 'having been delivered',
    morphology: { pos: 'verb', number: 'singular', tense: 'aorist', voice: 'passive', mood: 'participle' },
    strongs: 'G3860',
    position: 4,
  },
  {
    id: 'Jude.1.3.5',
    language: 'greek',
    text: 'ἁγίοις',
    transliteration: 'hagiois',
    lemma: 'ἅγιος',
    lemmaTranslit: 'hagios',
    gloss: 'to the saints',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', case: 'dative' },
    strongs: 'G40',
    position: 5,
  },
  {
    id: 'Jude.1.3.6',
    language: 'greek',
    text: 'πίστει',
    transliteration: 'pistei',
    lemma: 'πίστις',
    lemmaTranslit: 'pistis',
    gloss: 'faith',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G4102',
    position: 6,
  },
];

export const jude1_3_translation: VerseTranslation = {
  verseRef: 'Jude.1.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'I had necessity to write to you, exhorting to contend earnestly for the faith once for all delivered to the saints.',
      spans: [
        { id: 'Jude.1.3.en.lit.0', text: 'I had necessity', position: 0, sourceTokenIds: ['Jude.1.3.0'], confidence: 'high' },
        { id: 'Jude.1.3.en.lit.1', text: 'to contend earnestly for the faith', position: 1, sourceTokenIds: ['Jude.1.3.1', 'Jude.1.3.2', 'Jude.1.3.6'], confidence: 'high' },
        { id: 'Jude.1.3.en.lit.2', text: 'once for all delivered to the saints.', position: 2, sourceTokenIds: ['Jude.1.3.3', 'Jude.1.3.4', 'Jude.1.3.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'I found it necessary to write appealing to you to contend for the faith that was once for all delivered to the saints.',
      spans: [
        { id: 'Jude.1.3.en.idi.0', text: 'I found it necessary to write appealing to you', position: 0, sourceTokenIds: ['Jude.1.3.0'], confidence: 'high' },
        { id: 'Jude.1.3.en.idi.1', text: 'to contend for the faith', position: 1, sourceTokenIds: ['Jude.1.3.1', 'Jude.1.3.2', 'Jude.1.3.6'], confidence: 'high' },
        { id: 'Jude.1.3.en.idi.2', text: 'that was once for all delivered to the saints.', position: 2, sourceTokenIds: ['Jude.1.3.3', 'Jude.1.3.4', 'Jude.1.3.5'], confidence: 'high' },
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

export const jude1_3_notes: StudyNote[] = [
  {
    id: 'Jude.1.3.note.1',
    verseRef: 'Jude.1.3',
    sourceTokenIds: ['Jude.1.3.1'],
    category: 'lexical',
    title: "ἐπαγωνίζεσθαι (epagōnizesthai) — Contend Earnestly",
    content: "The verb ἐπαγωνίζομαι (epagōnizomai, G1864) is a NT hapax legomenon — it appears only here in the entire New Testament. The compound form intensifies the simple ἀγωνίζομαι (\"to struggle, contend\") with the prefix ἐπι- (\"upon, for\"). The athletic metaphor evokes the imagery of a contest or struggle: believers are to fight strenuously for the faith. The present middle infinitive suggests continuous, personal engagement — not a one-time battle but an ongoing commitment to defend the apostolic teaching (τῇ πίστει) that was once for all (ἅπαξ) entrusted to the community of saints.",
    confidence: 'high',
    authorType: 'ai',
    metadata: {
      generatedAt: new Date().toISOString(),
      engineId: 'open-bible-notes',
    },
  },
];

export const jude1_3_verse = {
  ref: 'Jude.1.3',
  sourceTokens: jude1_3_tokens,
  translation: jude1_3_translation,
  notes: jude1_3_notes,
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:4 – Certain people have crept in unnoticed
 * ──────────────────────────────────────────────────────────── */

export const jude1_4_tokens: SourceToken[] = [
  {
    id: 'Jude.1.4.0',
    language: 'greek',
    text: 'παρεισέδυσαν',
    transliteration: 'pareisedysan',
    lemma: 'παρεισδύνω',
    lemmaTranslit: 'pareisdunō',
    gloss: 'crept in',
    morphology: { pos: 'verb', person: '3', number: 'plural', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G3921',
    position: 0,
  },
  {
    id: 'Jude.1.4.1',
    language: 'greek',
    text: 'τινες',
    transliteration: 'tines',
    lemma: 'τις',
    lemmaTranslit: 'tis',
    gloss: 'certain people',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'plural', case: 'nominative' },
    strongs: 'G5100',
    position: 1,
  },
  {
    id: 'Jude.1.4.2',
    language: 'greek',
    text: 'ἀσεβεῖς',
    transliteration: 'asebeis',
    lemma: 'ἀσεβής',
    lemmaTranslit: 'asebēs',
    gloss: 'ungodly',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', case: 'nominative' },
    strongs: 'G765',
    position: 2,
  },
  {
    id: 'Jude.1.4.3',
    language: 'greek',
    text: 'χάριτα',
    transliteration: 'charita',
    lemma: 'χάρις',
    lemmaTranslit: 'charis',
    gloss: 'grace',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G5485',
    position: 3,
  },
  {
    id: 'Jude.1.4.4',
    language: 'greek',
    text: 'μετατιθέντες',
    transliteration: 'metatithentes',
    lemma: 'μετατίθημι',
    lemmaTranslit: 'metatithēmi',
    gloss: 'perverting / changing',
    morphology: { pos: 'verb', number: 'plural', tense: 'present', voice: 'active', mood: 'participle' },
    strongs: 'G3346',
    position: 4,
  },
];

export const jude1_4_translation: VerseTranslation = {
  verseRef: 'Jude.1.4',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'For certain people crept in unnoticed, ungodly ones, changing the grace of our God into sensuality.',
      spans: [
        { id: 'Jude.1.4.en.lit.0', text: 'For certain people crept in unnoticed,', position: 0, sourceTokenIds: ['Jude.1.4.0', 'Jude.1.4.1'], confidence: 'high' },
        { id: 'Jude.1.4.en.lit.1', text: 'ungodly ones,', position: 1, sourceTokenIds: ['Jude.1.4.2'], confidence: 'high' },
        { id: 'Jude.1.4.en.lit.2', text: 'changing the grace of our God', position: 2, sourceTokenIds: ['Jude.1.4.3', 'Jude.1.4.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'For certain people have crept in unnoticed, ungodly people who pervert the grace of our God into sensuality.',
      spans: [
        { id: 'Jude.1.4.en.idi.0', text: 'For certain people have crept in unnoticed,', position: 0, sourceTokenIds: ['Jude.1.4.0', 'Jude.1.4.1'], confidence: 'high' },
        { id: 'Jude.1.4.en.idi.1', text: 'ungodly people who pervert the grace of our God into sensuality.', position: 1, sourceTokenIds: ['Jude.1.4.2', 'Jude.1.4.3', 'Jude.1.4.4'], confidence: 'high' },
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

export const jude1_4_verse = {
  ref: 'Jude.1.4',
  sourceTokens: jude1_4_tokens,
  translation: jude1_4_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:20 – Building yourselves up in your most holy faith
 * ──────────────────────────────────────────────────────────── */

export const jude1_20_tokens: SourceToken[] = [
  {
    id: 'Jude.1.20.0',
    language: 'greek',
    text: 'ὑμεῖς',
    transliteration: 'humeis',
    lemma: 'ὑμεῖς',
    lemmaTranslit: 'humeis',
    gloss: 'you',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'plural', case: 'nominative' },
    strongs: 'G5210',
    position: 0,
  },
  {
    id: 'Jude.1.20.1',
    language: 'greek',
    text: 'ἀγαπητοί',
    transliteration: 'agapētoi',
    lemma: 'ἀγαπητός',
    lemmaTranslit: 'agapētos',
    gloss: 'beloved',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', case: 'vocative' },
    strongs: 'G27',
    position: 1,
  },
  {
    id: 'Jude.1.20.2',
    language: 'greek',
    text: 'ἐποικοδομοῦντες',
    transliteration: 'epoikodomountes',
    lemma: 'ἐποικοδομέω',
    lemmaTranslit: 'epoikodomeō',
    gloss: 'building up',
    morphology: { pos: 'verb', number: 'plural', tense: 'present', voice: 'active', mood: 'participle' },
    strongs: 'G2026',
    position: 2,
  },
  {
    id: 'Jude.1.20.3',
    language: 'greek',
    text: 'ἁγιωτάτῃ',
    transliteration: 'hagiōtatē',
    lemma: 'ἅγιος',
    lemmaTranslit: 'hagios',
    gloss: 'most holy',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G40',
    position: 3,
  },
  {
    id: 'Jude.1.20.4',
    language: 'greek',
    text: 'πίστει',
    transliteration: 'pistei',
    lemma: 'πίστις',
    lemmaTranslit: 'pistis',
    gloss: 'faith',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G4102',
    position: 4,
  },
];

export const jude1_20_translation: VerseTranslation = {
  verseRef: 'Jude.1.20',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'But you, beloved, building yourselves up on your most holy faith, praying in the Holy Spirit.',
      spans: [
        { id: 'Jude.1.20.en.lit.0', text: 'But you, beloved,', position: 0, sourceTokenIds: ['Jude.1.20.0', 'Jude.1.20.1'], confidence: 'high' },
        { id: 'Jude.1.20.en.lit.1', text: 'building yourselves up', position: 1, sourceTokenIds: ['Jude.1.20.2'], confidence: 'high' },
        { id: 'Jude.1.20.en.lit.2', text: 'on your most holy faith,', position: 2, sourceTokenIds: ['Jude.1.20.3', 'Jude.1.20.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'But you, beloved, building yourselves up in your most holy faith and praying in the Holy Spirit.',
      spans: [
        { id: 'Jude.1.20.en.idi.0', text: 'But you, beloved,', position: 0, sourceTokenIds: ['Jude.1.20.0', 'Jude.1.20.1'], confidence: 'high' },
        { id: 'Jude.1.20.en.idi.1', text: 'building yourselves up in your most holy faith', position: 1, sourceTokenIds: ['Jude.1.20.2', 'Jude.1.20.3', 'Jude.1.20.4'], confidence: 'high' },
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

export const jude1_20_verse = {
  ref: 'Jude.1.20',
  sourceTokens: jude1_20_tokens,
  translation: jude1_20_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:24 – To him who is able to keep you from stumbling
 * ──────────────────────────────────────────────────────────── */

export const jude1_24_tokens: SourceToken[] = [
  {
    id: 'Jude.1.24.0',
    language: 'greek',
    text: 'Τῷ',
    transliteration: 'Tō',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'to the one',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'dative' },
    strongs: 'G3588',
    position: 0,
  },
  {
    id: 'Jude.1.24.1',
    language: 'greek',
    text: 'δυναμένῳ',
    transliteration: 'dunamenō',
    lemma: 'δύναμαι',
    lemmaTranslit: 'dunamai',
    gloss: 'who is able',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'middle', mood: 'participle' },
    strongs: 'G1410',
    position: 1,
  },
  {
    id: 'Jude.1.24.2',
    language: 'greek',
    text: 'φυλάξαι',
    transliteration: 'phulaxai',
    lemma: 'φυλάσσω',
    lemmaTranslit: 'phulassō',
    gloss: 'to guard / to keep',
    morphology: { pos: 'verb', tense: 'aorist', voice: 'active', mood: 'infinitive' },
    strongs: 'G5442',
    position: 2,
  },
  {
    id: 'Jude.1.24.3',
    language: 'greek',
    text: 'ἀπταίστους',
    transliteration: 'aptaistous',
    lemma: 'ἄπταιστος',
    lemmaTranslit: 'aptaistos',
    gloss: 'without stumbling',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', case: 'accusative' },
    strongs: 'G679',
    position: 3,
  },
  {
    id: 'Jude.1.24.4',
    language: 'greek',
    text: 'στῆσαι',
    transliteration: 'stēsai',
    lemma: 'ἵστημι',
    lemmaTranslit: 'histēmi',
    gloss: 'to present / to stand',
    morphology: { pos: 'verb', tense: 'aorist', voice: 'active', mood: 'infinitive' },
    strongs: 'G2476',
    position: 4,
  },
  {
    id: 'Jude.1.24.5',
    language: 'greek',
    text: 'ἀμώμους',
    transliteration: 'amōmous',
    lemma: 'ἄμωμος',
    lemmaTranslit: 'amōmos',
    gloss: 'blameless',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', case: 'accusative' },
    strongs: 'G299',
    position: 5,
  },
];

export const jude1_24_translation: VerseTranslation = {
  verseRef: 'Jude.1.24',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Now to the one who is able to guard you without stumbling and to present you blameless before the presence of his glory with great joy.',
      spans: [
        { id: 'Jude.1.24.en.lit.0', text: 'Now to the one who is able', position: 0, sourceTokenIds: ['Jude.1.24.0', 'Jude.1.24.1'], confidence: 'high' },
        { id: 'Jude.1.24.en.lit.1', text: 'to guard you without stumbling', position: 1, sourceTokenIds: ['Jude.1.24.2', 'Jude.1.24.3'], confidence: 'high' },
        { id: 'Jude.1.24.en.lit.2', text: 'and to present you blameless', position: 2, sourceTokenIds: ['Jude.1.24.4', 'Jude.1.24.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Now to him who is able to keep you from stumbling and to present you blameless before the presence of his glory with great joy.',
      spans: [
        { id: 'Jude.1.24.en.idi.0', text: 'Now to him who is able to keep you from stumbling', position: 0, sourceTokenIds: ['Jude.1.24.0', 'Jude.1.24.1', 'Jude.1.24.2', 'Jude.1.24.3'], confidence: 'high' },
        { id: 'Jude.1.24.en.idi.1', text: 'and to present you blameless before the presence of his glory with great joy.', position: 1, sourceTokenIds: ['Jude.1.24.4', 'Jude.1.24.5'], confidence: 'high' },
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

export const jude1_24_notes: StudyNote[] = [
  {
    id: 'Jude.1.24.note.1',
    verseRef: 'Jude.1.24',
    sourceTokenIds: ['Jude.1.24.1', 'Jude.1.24.2', 'Jude.1.24.3', 'Jude.1.24.4', 'Jude.1.24.5'],
    category: 'theological',
    title: "The Doxology of Jude (vv.24-25)",
    content: "The doxology of Jude 24-25 is among the most majestic in the NT. It attributes to God two great acts: (1) φυλάξαι ἀπταίστους — \"to keep without stumbling,\" where ἄπταιστος (aptaistos, G679) is another NT hapax, meaning \"sure-footed, without tripping\"; and (2) στῆσαι ἀμώμους — \"to present blameless,\" where ἄμωμος (amōmos, G299) denotes moral purity, often used of sacrificial animals without blemish. The combination expresses both preservation during the journey and perfection at the destination. Verse 25 ascribes to God four attributes: δόξα (glory), μεγαλωσύνη (majesty), κράτος (dominion), and ἐξουσία (authority) — covering the full scope of divine sovereignty across all time.",
    confidence: 'high',
    authorType: 'ai',
    metadata: {
      generatedAt: new Date().toISOString(),
      engineId: 'open-bible-notes',
    },
  },
];

export const jude1_24_verse = {
  ref: 'Jude.1.24',
  sourceTokens: jude1_24_tokens,
  translation: jude1_24_translation,
  notes: jude1_24_notes,
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:25 – To the only God our Savior, glory and majesty
 * ──────────────────────────────────────────────────────────── */

export const jude1_25_tokens: SourceToken[] = [
  {
    id: 'Jude.1.25.0',
    language: 'greek',
    text: 'μόνῳ',
    transliteration: 'monō',
    lemma: 'μόνος',
    lemmaTranslit: 'monos',
    gloss: 'only',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'dative' },
    strongs: 'G3441',
    position: 0,
  },
  {
    id: 'Jude.1.25.1',
    language: 'greek',
    text: 'θεῷ',
    transliteration: 'theō',
    lemma: 'θεός',
    lemmaTranslit: 'theos',
    gloss: 'God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'dative' },
    strongs: 'G2316',
    position: 1,
  },
  {
    id: 'Jude.1.25.2',
    language: 'greek',
    text: 'σωτῆρι',
    transliteration: 'sōtēri',
    lemma: 'σωτήρ',
    lemmaTranslit: 'sōtēr',
    gloss: 'Savior',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'dative' },
    strongs: 'G4990',
    position: 2,
  },
  {
    id: 'Jude.1.25.3',
    language: 'greek',
    text: 'δόξα',
    transliteration: 'doxa',
    lemma: 'δόξα',
    lemmaTranslit: 'doxa',
    gloss: 'glory',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G1391',
    position: 3,
  },
  {
    id: 'Jude.1.25.4',
    language: 'greek',
    text: 'μεγαλωσύνη',
    transliteration: 'megalōsunē',
    lemma: 'μεγαλωσύνη',
    lemmaTranslit: 'megalōsunē',
    gloss: 'majesty',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G3172',
    position: 4,
  },
  {
    id: 'Jude.1.25.5',
    language: 'greek',
    text: 'κράτος',
    transliteration: 'kratos',
    lemma: 'κράτος',
    lemmaTranslit: 'kratos',
    gloss: 'dominion',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'nominative' },
    strongs: 'G2904',
    position: 5,
  },
  {
    id: 'Jude.1.25.6',
    language: 'greek',
    text: 'ἐξουσία',
    transliteration: 'exousia',
    lemma: 'ἐξουσία',
    lemmaTranslit: 'exousia',
    gloss: 'authority',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G1849',
    position: 6,
  },
];

export const jude1_25_translation: VerseTranslation = {
  verseRef: 'Jude.1.25',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'To the only God our Savior, through Jesus Christ our Lord, be glory, majesty, dominion, and authority, before all time and now and forever. Amen.',
      spans: [
        { id: 'Jude.1.25.en.lit.0', text: 'To the only God our Savior,', position: 0, sourceTokenIds: ['Jude.1.25.0', 'Jude.1.25.1', 'Jude.1.25.2'], confidence: 'high' },
        { id: 'Jude.1.25.en.lit.1', text: 'be glory, majesty,', position: 1, sourceTokenIds: ['Jude.1.25.3', 'Jude.1.25.4'], confidence: 'high' },
        { id: 'Jude.1.25.en.lit.2', text: 'dominion, and authority,', position: 2, sourceTokenIds: ['Jude.1.25.5', 'Jude.1.25.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'To the only God, our Savior, through Jesus Christ our Lord, be glory, majesty, dominion, and authority, before all ages and now and forevermore. Amen.',
      spans: [
        { id: 'Jude.1.25.en.idi.0', text: 'To the only God, our Savior, through Jesus Christ our Lord,', position: 0, sourceTokenIds: ['Jude.1.25.0', 'Jude.1.25.1', 'Jude.1.25.2'], confidence: 'high' },
        { id: 'Jude.1.25.en.idi.1', text: 'be glory, majesty, dominion, and authority, before all ages and now and forevermore. Amen.', position: 1, sourceTokenIds: ['Jude.1.25.3', 'Jude.1.25.4', 'Jude.1.25.5', 'Jude.1.25.6'], confidence: 'high' },
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

export const jude1_25_verse = {
  ref: 'Jude.1.25',
  sourceTokens: jude1_25_tokens,
  translation: jude1_25_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Export combined verses
 * ──────────────────────────────────────────────────────────── */

export const jude1_1_25_verses = [
  jude1_1_verse,
  jude1_3_verse,
  jude1_4_verse,
  jude1_20_verse,
  jude1_24_verse,
  jude1_25_verse,
];

export default jude1_1_25_verses;
