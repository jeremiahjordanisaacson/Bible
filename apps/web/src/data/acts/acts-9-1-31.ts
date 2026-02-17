// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ════════════════════════════════════════════════════════════
 * Acts 9:1-31 — The Conversion of Saul
 * Six key verses from Saul's encounter on the Damascus road
 * ════════════════════════════════════════════════════════════ */

/* ────────────────────────────────────────────────────────────
 * Verse 9:1 – Saul, still breathing threats and murder
 * ──────────────────────────────────────────────────────────── */

export const acts9_1_tokens: SourceToken[] = [
  {
    id: 'Acts.9.1.0',
    language: 'greek',
    text: 'Σαῦλος',
    transliteration: 'Saulos',
    lemma: 'Σαῦλος',
    lemmaTranslit: 'Saulos',
    gloss: 'Saul',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G4569',
    position: 0,
  },
  {
    id: 'Acts.9.1.1',
    language: 'greek',
    text: 'ἔτι',
    transliteration: 'eti',
    lemma: 'ἔτι',
    lemmaTranslit: 'eti',
    gloss: 'still',
    morphology: { pos: 'adverb' },
    strongs: 'G2089',
    position: 1,
  },
  {
    id: 'Acts.9.1.2',
    language: 'greek',
    text: 'ἐμπνέων',
    transliteration: 'empneōn',
    lemma: 'ἐμπνέω',
    lemmaTranslit: 'empneō',
    gloss: 'breathing',
    morphology: { pos: 'verb', tense: 'present', voice: 'active', mood: 'participle', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G1709',
    position: 2,
  },
  {
    id: 'Acts.9.1.3',
    language: 'greek',
    text: 'ἀπειλῆς',
    transliteration: 'apeilēs',
    lemma: 'ἀπειλή',
    lemmaTranslit: 'apeilē',
    gloss: 'threats',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G547',
    position: 3,
  },
  {
    id: 'Acts.9.1.4',
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
    id: 'Acts.9.1.5',
    language: 'greek',
    text: 'φόνου',
    transliteration: 'phonou',
    lemma: 'φόνος',
    lemmaTranslit: 'phonos',
    gloss: 'murder',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G5408',
    position: 5,
  },
  {
    id: 'Acts.9.1.6',
    language: 'greek',
    text: 'μαθητάς',
    transliteration: 'mathētas',
    lemma: 'μαθητής',
    lemmaTranslit: 'mathētēs',
    gloss: 'disciples',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', case: 'accusative' },
    strongs: 'G3101',
    position: 6,
  },
];

export const acts9_1_translation: VerseTranslation = {
  verseRef: 'Acts.9.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'But Saul, still breathing threat and murder against the disciples of the Lord.',
      spans: [
        { id: 'Acts.9.1.en.lit.0', text: 'Saul', position: 0, sourceTokenIds: ['Acts.9.1.0'], confidence: 'high' },
        { id: 'Acts.9.1.en.lit.1', text: 'still breathing', position: 1, sourceTokenIds: ['Acts.9.1.1', 'Acts.9.1.2'], confidence: 'high' },
        { id: 'Acts.9.1.en.lit.2', text: 'threat and murder', position: 2, sourceTokenIds: ['Acts.9.1.3', 'Acts.9.1.4', 'Acts.9.1.5'], confidence: 'high' },
        { id: 'Acts.9.1.en.lit.3', text: 'against the disciples', position: 3, sourceTokenIds: ['Acts.9.1.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Meanwhile, Saul was still breathing threats and murder against the disciples of the Lord.',
      spans: [
        { id: 'Acts.9.1.en.idi.0', text: 'Saul was still breathing threats and murder', position: 0, sourceTokenIds: ['Acts.9.1.0', 'Acts.9.1.1', 'Acts.9.1.2', 'Acts.9.1.3', 'Acts.9.1.4', 'Acts.9.1.5'], confidence: 'high' },
        { id: 'Acts.9.1.en.idi.1', text: 'against the disciples of the Lord.', position: 1, sourceTokenIds: ['Acts.9.1.6'], confidence: 'high' },
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

export const acts9_1_verse = {
  ref: 'Acts.9.1',
  sourceTokens: acts9_1_tokens,
  translation: acts9_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 9:3 – A light from heaven flashed around him
 * ──────────────────────────────────────────────────────────── */

export const acts9_3_tokens: SourceToken[] = [
  {
    id: 'Acts.9.3.0',
    language: 'greek',
    text: 'ἐξαίφνης',
    transliteration: 'exaiphnēs',
    lemma: 'ἐξαίφνης',
    lemmaTranslit: 'exaiphnēs',
    gloss: 'suddenly',
    morphology: { pos: 'adverb' },
    strongs: 'G1810',
    position: 0,
  },
  {
    id: 'Acts.9.3.1',
    language: 'greek',
    text: 'αὐτὸν',
    transliteration: 'auton',
    lemma: 'αὐτός',
    lemmaTranslit: 'autos',
    gloss: 'him',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G846',
    position: 1,
  },
  {
    id: 'Acts.9.3.2',
    language: 'greek',
    text: 'περιήστραψεν',
    transliteration: 'periēstrapsen',
    lemma: 'περιαστράπτω',
    lemmaTranslit: 'periastraptō',
    gloss: 'flashed around',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G4015',
    position: 2,
  },
  {
    id: 'Acts.9.3.3',
    language: 'greek',
    text: 'φῶς',
    transliteration: 'phōs',
    lemma: 'φῶς',
    lemmaTranslit: 'phōs',
    gloss: 'a light',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'nominative' },
    strongs: 'G5457',
    position: 3,
  },
  {
    id: 'Acts.9.3.4',
    language: 'greek',
    text: 'οὐρανοῦ',
    transliteration: 'ouranou',
    lemma: 'οὐρανός',
    lemmaTranslit: 'ouranos',
    gloss: 'from heaven',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G3772',
    position: 4,
  },
];

export const acts9_3_translation: VerseTranslation = {
  verseRef: 'Acts.9.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And suddenly there flashed around him a light from heaven.',
      spans: [
        { id: 'Acts.9.3.en.lit.0', text: 'suddenly', position: 0, sourceTokenIds: ['Acts.9.3.0'], confidence: 'high' },
        { id: 'Acts.9.3.en.lit.1', text: 'flashed around him', position: 1, sourceTokenIds: ['Acts.9.3.1', 'Acts.9.3.2'], confidence: 'high' },
        { id: 'Acts.9.3.en.lit.2', text: 'a light from heaven', position: 2, sourceTokenIds: ['Acts.9.3.3', 'Acts.9.3.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Suddenly a light from heaven flashed around him.',
      spans: [
        { id: 'Acts.9.3.en.idi.0', text: 'Suddenly a light from heaven flashed around him.', position: 0, sourceTokenIds: ['Acts.9.3.0', 'Acts.9.3.1', 'Acts.9.3.2', 'Acts.9.3.3', 'Acts.9.3.4'], confidence: 'high' },
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

export const acts9_3_verse = {
  ref: 'Acts.9.3',
  sourceTokens: acts9_3_tokens,
  translation: acts9_3_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 9:4 – Saul, Saul, why do you persecute me?
 * ──────────────────────────────────────────────────────────── */

export const acts9_4_tokens: SourceToken[] = [
  {
    id: 'Acts.9.4.0',
    language: 'greek',
    text: 'πεσὼν',
    transliteration: 'pesōn',
    lemma: 'πίπτω',
    lemmaTranslit: 'piptō',
    gloss: 'having fallen',
    morphology: { pos: 'verb', tense: 'aorist', voice: 'active', mood: 'participle', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G4098',
    position: 0,
  },
  {
    id: 'Acts.9.4.1',
    language: 'greek',
    text: 'ἤκουσεν',
    transliteration: 'ēkousen',
    lemma: 'ἀκούω',
    lemmaTranslit: 'akouō',
    gloss: 'he heard',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G191',
    position: 1,
  },
  {
    id: 'Acts.9.4.2',
    language: 'greek',
    text: 'φωνὴν',
    transliteration: 'phōnēn',
    lemma: 'φωνή',
    lemmaTranslit: 'phōnē',
    gloss: 'a voice',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G5456',
    position: 2,
  },
  {
    id: 'Acts.9.4.3',
    language: 'greek',
    text: 'Σαοὺλ',
    transliteration: 'Saoul',
    lemma: 'Σαούλ',
    lemmaTranslit: 'Saoul',
    gloss: 'Saul',
    morphology: { pos: 'proper-noun' },
    strongs: 'G4549',
    position: 3,
  },
  {
    id: 'Acts.9.4.4',
    language: 'greek',
    text: 'τί',
    transliteration: 'ti',
    lemma: 'τίς',
    lemmaTranslit: 'tis',
    gloss: 'why',
    morphology: { pos: 'pronoun', gender: 'neuter', number: 'singular', case: 'accusative' },
    strongs: 'G5101',
    position: 4,
  },
  {
    id: 'Acts.9.4.5',
    language: 'greek',
    text: 'διώκεις',
    transliteration: 'diōkeis',
    lemma: 'διώκω',
    lemmaTranslit: 'diōkō',
    gloss: 'do you persecute',
    morphology: { pos: 'verb', person: '2', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G1377',
    position: 5,
  },
];

export const acts9_4_translation: VerseTranslation = {
  verseRef: 'Acts.9.4',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And having fallen to the ground, he heard a voice saying to him, "Saul, Saul, why do you persecute me?"',
      spans: [
        { id: 'Acts.9.4.en.lit.0', text: 'having fallen', position: 0, sourceTokenIds: ['Acts.9.4.0'], confidence: 'high' },
        { id: 'Acts.9.4.en.lit.1', text: 'he heard a voice', position: 1, sourceTokenIds: ['Acts.9.4.1', 'Acts.9.4.2'], confidence: 'high' },
        { id: 'Acts.9.4.en.lit.2', text: 'Saul, Saul,', position: 2, sourceTokenIds: ['Acts.9.4.3'], confidence: 'high' },
        { id: 'Acts.9.4.en.lit.3', text: 'why do you persecute me?', position: 3, sourceTokenIds: ['Acts.9.4.4', 'Acts.9.4.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'He fell to the ground and heard a voice saying, "Saul, Saul, why do you persecute me?"',
      spans: [
        { id: 'Acts.9.4.en.idi.0', text: 'He fell to the ground and heard a voice', position: 0, sourceTokenIds: ['Acts.9.4.0', 'Acts.9.4.1', 'Acts.9.4.2'], confidence: 'high' },
        { id: 'Acts.9.4.en.idi.1', text: '"Saul, Saul, why do you persecute me?"', position: 1, sourceTokenIds: ['Acts.9.4.3', 'Acts.9.4.4', 'Acts.9.4.5'], confidence: 'high' },
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

export const acts9_4_verse = {
  ref: 'Acts.9.4',
  sourceTokens: acts9_4_tokens,
  translation: acts9_4_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 9:5 – Who are you, Lord? I am Jesus
 * ──────────────────────────────────────────────────────────── */

export const acts9_5_tokens: SourceToken[] = [
  {
    id: 'Acts.9.5.0',
    language: 'greek',
    text: 'τίς',
    transliteration: 'tis',
    lemma: 'τίς',
    lemmaTranslit: 'tis',
    gloss: 'who',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G5101',
    position: 0,
  },
  {
    id: 'Acts.9.5.1',
    language: 'greek',
    text: 'εἶ',
    transliteration: 'ei',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'are you',
    morphology: { pos: 'verb', person: '2', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G1510',
    position: 1,
  },
  {
    id: 'Acts.9.5.2',
    language: 'greek',
    text: 'κύριε',
    transliteration: 'kyrie',
    lemma: 'κύριος',
    lemmaTranslit: 'kyrios',
    gloss: 'Lord',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'vocative' },
    strongs: 'G2962',
    position: 2,
  },
  {
    id: 'Acts.9.5.3',
    language: 'greek',
    text: 'ἐγώ',
    transliteration: 'egō',
    lemma: 'ἐγώ',
    lemmaTranslit: 'egō',
    gloss: 'I',
    morphology: { pos: 'pronoun', number: 'singular', case: 'nominative' },
    strongs: 'G1473',
    position: 3,
  },
  {
    id: 'Acts.9.5.4',
    language: 'greek',
    text: 'εἰμι',
    transliteration: 'eimi',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'am',
    morphology: { pos: 'verb', person: '1', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G1510',
    position: 4,
  },
  {
    id: 'Acts.9.5.5',
    language: 'greek',
    text: 'Ἰησοῦς',
    transliteration: 'Iēsous',
    lemma: 'Ἰησοῦς',
    lemmaTranslit: 'Iēsous',
    gloss: 'Jesus',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G2424',
    position: 5,
  },
];

export const acts9_5_translation: VerseTranslation = {
  verseRef: 'Acts.9.5',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Who are you, Lord? And he said, I am Jesus whom you are persecuting.',
      spans: [
        { id: 'Acts.9.5.en.lit.0', text: 'Who are you, Lord?', position: 0, sourceTokenIds: ['Acts.9.5.0', 'Acts.9.5.1', 'Acts.9.5.2'], confidence: 'high' },
        { id: 'Acts.9.5.en.lit.1', text: 'I am Jesus', position: 1, sourceTokenIds: ['Acts.9.5.3', 'Acts.9.5.4', 'Acts.9.5.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: '"Who are you, Lord?" "I am Jesus, whom you are persecuting."',
      spans: [
        { id: 'Acts.9.5.en.idi.0', text: '"Who are you, Lord?"', position: 0, sourceTokenIds: ['Acts.9.5.0', 'Acts.9.5.1', 'Acts.9.5.2'], confidence: 'high' },
        { id: 'Acts.9.5.en.idi.1', text: '"I am Jesus, whom you are persecuting."', position: 1, sourceTokenIds: ['Acts.9.5.3', 'Acts.9.5.4', 'Acts.9.5.5'], confidence: 'high' },
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

export const acts9_5_verse = {
  ref: 'Acts.9.5',
  sourceTokens: acts9_5_tokens,
  translation: acts9_5_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 9:15 – He is a chosen instrument of mine
 * ──────────────────────────────────────────────────────────── */

export const acts9_15_tokens: SourceToken[] = [
  {
    id: 'Acts.9.15.0',
    language: 'greek',
    text: 'σκεῦος',
    transliteration: 'skeuos',
    lemma: 'σκεῦος',
    lemmaTranslit: 'skeuos',
    gloss: 'instrument / vessel',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'nominative' },
    strongs: 'G4632',
    position: 0,
  },
  {
    id: 'Acts.9.15.1',
    language: 'greek',
    text: 'ἐκλογῆς',
    transliteration: 'eklogēs',
    lemma: 'ἐκλογή',
    lemmaTranslit: 'eklogē',
    gloss: 'of choice / election',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G1589',
    position: 1,
  },
  {
    id: 'Acts.9.15.2',
    language: 'greek',
    text: 'ἐστίν',
    transliteration: 'estin',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'is',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G1510',
    position: 2,
  },
  {
    id: 'Acts.9.15.3',
    language: 'greek',
    text: 'μοι',
    transliteration: 'moi',
    lemma: 'ἐγώ',
    lemmaTranslit: 'egō',
    gloss: 'to me',
    morphology: { pos: 'pronoun', number: 'singular', case: 'dative' },
    strongs: 'G1473',
    position: 3,
  },
  {
    id: 'Acts.9.15.4',
    language: 'greek',
    text: 'βαστάσαι',
    transliteration: 'bastasai',
    lemma: 'βαστάζω',
    lemmaTranslit: 'bastazō',
    gloss: 'to carry / bear',
    morphology: { pos: 'verb', tense: 'aorist', voice: 'active', mood: 'infinitive' },
    strongs: 'G941',
    position: 4,
  },
  {
    id: 'Acts.9.15.5',
    language: 'greek',
    text: 'ὄνομά',
    transliteration: 'onoma',
    lemma: 'ὄνομα',
    lemmaTranslit: 'onoma',
    gloss: 'name',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'accusative' },
    strongs: 'G3686',
    position: 5,
  },
];

export const acts9_15_translation: VerseTranslation = {
  verseRef: 'Acts.9.15',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'A vessel of election is this one to me, to carry my name before the Gentiles.',
      spans: [
        { id: 'Acts.9.15.en.lit.0', text: 'a vessel of election', position: 0, sourceTokenIds: ['Acts.9.15.0', 'Acts.9.15.1'], confidence: 'high' },
        { id: 'Acts.9.15.en.lit.1', text: 'is this one to me', position: 1, sourceTokenIds: ['Acts.9.15.2', 'Acts.9.15.3'], confidence: 'high' },
        { id: 'Acts.9.15.en.lit.2', text: 'to carry my name', position: 2, sourceTokenIds: ['Acts.9.15.4', 'Acts.9.15.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'He is a chosen instrument of mine to carry my name before the Gentiles and kings and the children of Israel.',
      spans: [
        { id: 'Acts.9.15.en.idi.0', text: 'He is a chosen instrument of mine', position: 0, sourceTokenIds: ['Acts.9.15.0', 'Acts.9.15.1', 'Acts.9.15.2', 'Acts.9.15.3'], confidence: 'high' },
        { id: 'Acts.9.15.en.idi.1', text: 'to carry my name before the Gentiles', position: 1, sourceTokenIds: ['Acts.9.15.4', 'Acts.9.15.5'], confidence: 'high' },
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

export const acts9_15_notes: StudyNote[] = [
  { id: 'Acts.9.15.note.1', verseRef: 'Acts.9.15', sourceTokenIds: ['Acts.9.15.0', 'Acts.9.15.1'], category: 'lexical', title: "Chosen Instrument (skeuos eklogēs)", content: "The phrase σκεῦος ἐκλογῆς is literally 'vessel of election.' The word skeuos denotes a container or tool—something fashioned for a purpose. Combined with eklogēs (from eklegō, 'to select out'), it conveys divine intentionality: Saul is not merely useful but specifically chosen and set apart by God for apostolic mission.", confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const acts9_15_verse = {
  ref: 'Acts.9.15',
  sourceTokens: acts9_15_tokens,
  translation: acts9_15_translation,
  notes: acts9_15_notes,
};

/* ────────────────────────────────────────────────────────────
 * Verse 9:20 – Immediately he proclaimed Jesus in the synagogues
 * ──────────────────────────────────────────────────────────── */

export const acts9_20_tokens: SourceToken[] = [
  {
    id: 'Acts.9.20.0',
    language: 'greek',
    text: 'εὐθέως',
    transliteration: 'eutheōs',
    lemma: 'εὐθέως',
    lemmaTranslit: 'eutheōs',
    gloss: 'immediately',
    morphology: { pos: 'adverb' },
    strongs: 'G2112',
    position: 0,
  },
  {
    id: 'Acts.9.20.1',
    language: 'greek',
    text: 'ἐκήρυσσεν',
    transliteration: 'ekēryssen',
    lemma: 'κηρύσσω',
    lemmaTranslit: 'kēryssō',
    gloss: 'he was proclaiming',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'imperfect', voice: 'active', mood: 'indicative' },
    strongs: 'G2784',
    position: 1,
  },
  {
    id: 'Acts.9.20.2',
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
    id: 'Acts.9.20.3',
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
    id: 'Acts.9.20.4',
    language: 'greek',
    text: 'συναγωγαῖς',
    transliteration: 'synagōgais',
    lemma: 'συναγωγή',
    lemmaTranslit: 'synagōgē',
    gloss: 'synagogues',
    morphology: { pos: 'noun', gender: 'feminine', number: 'plural', case: 'dative' },
    strongs: 'G4864',
    position: 4,
  },
];

export const acts9_20_translation: VerseTranslation = {
  verseRef: 'Acts.9.20',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And immediately he was proclaiming Jesus in the synagogues, that this one is the Son of God.',
      spans: [
        { id: 'Acts.9.20.en.lit.0', text: 'immediately', position: 0, sourceTokenIds: ['Acts.9.20.0'], confidence: 'high' },
        { id: 'Acts.9.20.en.lit.1', text: 'he was proclaiming', position: 1, sourceTokenIds: ['Acts.9.20.1'], confidence: 'high' },
        { id: 'Acts.9.20.en.lit.2', text: 'Jesus', position: 2, sourceTokenIds: ['Acts.9.20.2', 'Acts.9.20.3'], confidence: 'high' },
        { id: 'Acts.9.20.en.lit.3', text: 'in the synagogues', position: 3, sourceTokenIds: ['Acts.9.20.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Immediately he proclaimed Jesus in the synagogues, saying, "He is the Son of God."',
      spans: [
        { id: 'Acts.9.20.en.idi.0', text: 'Immediately he proclaimed Jesus in the synagogues,', position: 0, sourceTokenIds: ['Acts.9.20.0', 'Acts.9.20.1', 'Acts.9.20.2', 'Acts.9.20.3', 'Acts.9.20.4'], confidence: 'high' },
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

export const acts9_20_verse = {
  ref: 'Acts.9.20',
  sourceTokens: acts9_20_tokens,
  translation: acts9_20_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Export combined verses
 * ──────────────────────────────────────────────────────────── */

export const acts9_1_31_verses = [
  acts9_1_verse,
  acts9_3_verse,
  acts9_4_verse,
  acts9_5_verse,
  acts9_15_verse,
  acts9_20_verse,
];

export default acts9_1_31_verses;
