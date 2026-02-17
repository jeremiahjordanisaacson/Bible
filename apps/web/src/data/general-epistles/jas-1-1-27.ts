// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 1:2 – Count it all joy when you meet trials
 * ──────────────────────────────────────────────────────────── */

export const jas1_2_tokens: SourceToken[] = [
  {
    id: 'Jas.1.2.0',
    language: 'greek',
    text: 'Πᾶσαν',
    transliteration: 'Pasan',
    lemma: 'πᾶς',
    lemmaTranslit: 'pas',
    gloss: 'all',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G3956',
    position: 0,
  },
  {
    id: 'Jas.1.2.1',
    language: 'greek',
    text: 'χαρὰν',
    transliteration: 'charan',
    lemma: 'χαρά',
    lemmaTranslit: 'chara',
    gloss: 'joy',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G5479',
    position: 1,
  },
  {
    id: 'Jas.1.2.2',
    language: 'greek',
    text: 'ἡγήσασθε',
    transliteration: 'hēgēsasthe',
    lemma: 'ἡγέομαι',
    lemmaTranslit: 'hēgeomai',
    gloss: 'consider',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'aorist', voice: 'middle', mood: 'imperative' },
    strongs: 'G2233',
    position: 2,
  },
  {
    id: 'Jas.1.2.3',
    language: 'greek',
    text: 'πειρασμοῖς',
    transliteration: 'peirasmois',
    lemma: 'πειρασμός',
    lemmaTranslit: 'peirasmos',
    gloss: 'trials',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', case: 'dative' },
    strongs: 'G3986',
    position: 3,
  },
  {
    id: 'Jas.1.2.4',
    language: 'greek',
    text: 'ποικίλοις',
    transliteration: 'poikilois',
    lemma: 'ποικίλος',
    lemmaTranslit: 'poikilos',
    gloss: 'various',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', case: 'dative' },
    strongs: 'G4164',
    position: 4,
  },
];

export const jas1_2_translation: VerseTranslation = {
  verseRef: 'Jas.1.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'All joy consider it, my brothers, when you fall into various trials.',
      spans: [
        { id: 'Jas.1.2.en.lit.0', text: 'All joy', position: 0, sourceTokenIds: ['Jas.1.2.0', 'Jas.1.2.1'], confidence: 'high' },
        { id: 'Jas.1.2.en.lit.1', text: 'consider it, my brothers,', position: 1, sourceTokenIds: ['Jas.1.2.2'], confidence: 'high' },
        { id: 'Jas.1.2.en.lit.2', text: 'when you fall into various trials.', position: 2, sourceTokenIds: ['Jas.1.2.3', 'Jas.1.2.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Count it all joy, my brothers, when you meet trials of various kinds.',
      spans: [
        { id: 'Jas.1.2.en.idi.0', text: 'Count it all joy, my brothers,', position: 0, sourceTokenIds: ['Jas.1.2.0', 'Jas.1.2.1', 'Jas.1.2.2'], confidence: 'high' },
        { id: 'Jas.1.2.en.idi.1', text: 'when you meet trials of various kinds.', position: 1, sourceTokenIds: ['Jas.1.2.3', 'Jas.1.2.4'], confidence: 'high' },
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

export const jas1_2_notes: StudyNote[] = [
  {
    id: 'Jas.1.2.note.1',
    verseRef: 'Jas.1.2',
    sourceTokenIds: ['Jas.1.2.3'],
    category: 'lexical',
    title: "πειρασμός (peirasmos) — Trial / Temptation",
    content: "The Greek noun πειρασμός (peirasmos, G3986) encompasses both \"trial\" (external hardship) and \"temptation\" (internal enticement to sin). James uses the same word in two senses within this chapter: in v.2 it denotes external trials that test faith and produce endurance, while in v.13-14 it shifts to inner temptation driven by desire. This dual meaning is central to James's pastoral theology — God allows trials (v.2-4) but never authors temptation (v.13). The dative plural πειρασμοῖς here carries an instrumental sense: trials are the means by which faith is refined.",
    confidence: 'high',
    authorType: 'ai',
    metadata: {
      generatedAt: new Date().toISOString(),
      engineId: 'open-bible-notes',
    },
  },
];

export const jas1_2_verse = {
  ref: 'Jas.1.2',
  sourceTokens: jas1_2_tokens,
  translation: jas1_2_translation,
  notes: jas1_2_notes,
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:5 – If any lacks wisdom, let him ask God
 * ──────────────────────────────────────────────────────────── */

export const jas1_5_tokens: SourceToken[] = [
  {
    id: 'Jas.1.5.0',
    language: 'greek',
    text: 'λείπεται',
    transliteration: 'leipetai',
    lemma: 'λείπω',
    lemmaTranslit: 'leipō',
    gloss: 'lacks',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'passive', mood: 'indicative' },
    strongs: 'G3007',
    position: 0,
  },
  {
    id: 'Jas.1.5.1',
    language: 'greek',
    text: 'σοφίας',
    transliteration: 'sophias',
    lemma: 'σοφία',
    lemmaTranslit: 'sophia',
    gloss: 'wisdom',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G4678',
    position: 1,
  },
  {
    id: 'Jas.1.5.2',
    language: 'greek',
    text: 'αἰτείτω',
    transliteration: 'aiteitō',
    lemma: 'αἰτέω',
    lemmaTranslit: 'aiteō',
    gloss: 'let him ask',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'imperative' },
    strongs: 'G154',
    position: 2,
  },
  {
    id: 'Jas.1.5.3',
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
    id: 'Jas.1.5.4',
    language: 'greek',
    text: 'διδόντος',
    transliteration: 'didontos',
    lemma: 'δίδωμι',
    lemmaTranslit: 'didōmi',
    gloss: 'who gives',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'participle' },
    strongs: 'G1325',
    position: 4,
  },
  {
    id: 'Jas.1.5.5',
    language: 'greek',
    text: 'ἁπλῶς',
    transliteration: 'haplōs',
    lemma: 'ἁπλῶς',
    lemmaTranslit: 'haplōs',
    gloss: 'generously',
    morphology: { pos: 'adverb' },
    strongs: 'G574',
    position: 5,
  },
];

export const jas1_5_translation: VerseTranslation = {
  verseRef: 'Jas.1.5',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'But if any of you lacks wisdom, let him ask from God, who gives to all generously and without reproach.',
      spans: [
        { id: 'Jas.1.5.en.lit.0', text: 'But if any of you lacks wisdom,', position: 0, sourceTokenIds: ['Jas.1.5.0', 'Jas.1.5.1'], confidence: 'high' },
        { id: 'Jas.1.5.en.lit.1', text: 'let him ask from God,', position: 1, sourceTokenIds: ['Jas.1.5.2', 'Jas.1.5.3'], confidence: 'high' },
        { id: 'Jas.1.5.en.lit.2', text: 'who gives to all generously and without reproach.', position: 2, sourceTokenIds: ['Jas.1.5.4', 'Jas.1.5.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'If any of you lacks wisdom, let him ask God, who gives generously to all without finding fault.',
      spans: [
        { id: 'Jas.1.5.en.idi.0', text: 'If any of you lacks wisdom,', position: 0, sourceTokenIds: ['Jas.1.5.0', 'Jas.1.5.1'], confidence: 'high' },
        { id: 'Jas.1.5.en.idi.1', text: 'let him ask God,', position: 1, sourceTokenIds: ['Jas.1.5.2', 'Jas.1.5.3'], confidence: 'high' },
        { id: 'Jas.1.5.en.idi.2', text: 'who gives generously to all without finding fault.', position: 2, sourceTokenIds: ['Jas.1.5.4', 'Jas.1.5.5'], confidence: 'high' },
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

export const jas1_5_verse = {
  ref: 'Jas.1.5',
  sourceTokens: jas1_5_tokens,
  translation: jas1_5_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:12 – Blessed is the man who remains steadfast
 * ──────────────────────────────────────────────────────────── */

export const jas1_12_tokens: SourceToken[] = [
  {
    id: 'Jas.1.12.0',
    language: 'greek',
    text: 'Μακάριος',
    transliteration: 'Makarios',
    lemma: 'μακάριος',
    lemmaTranslit: 'makarios',
    gloss: 'blessed',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3107',
    position: 0,
  },
  {
    id: 'Jas.1.12.1',
    language: 'greek',
    text: 'ἀνὴρ',
    transliteration: 'anēr',
    lemma: 'ἀνήρ',
    lemmaTranslit: 'anēr',
    gloss: 'man',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G435',
    position: 1,
  },
  {
    id: 'Jas.1.12.2',
    language: 'greek',
    text: 'ὑπομένει',
    transliteration: 'hupomenei',
    lemma: 'ὑπομένω',
    lemmaTranslit: 'hupomenō',
    gloss: 'endures',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G5278',
    position: 2,
  },
  {
    id: 'Jas.1.12.3',
    language: 'greek',
    text: 'πειρασμόν',
    transliteration: 'peirasmon',
    lemma: 'πειρασμός',
    lemmaTranslit: 'peirasmos',
    gloss: 'trial',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G3986',
    position: 3,
  },
];

export const jas1_12_translation: VerseTranslation = {
  verseRef: 'Jas.1.12',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Blessed is the man who endures trial, for having been approved he will receive the crown of life.',
      spans: [
        { id: 'Jas.1.12.en.lit.0', text: 'Blessed is the man', position: 0, sourceTokenIds: ['Jas.1.12.0', 'Jas.1.12.1'], confidence: 'high' },
        { id: 'Jas.1.12.en.lit.1', text: 'who endures trial,', position: 1, sourceTokenIds: ['Jas.1.12.2', 'Jas.1.12.3'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Blessed is the man who remains steadfast under trial, for when he has stood the test he will receive the crown of life.',
      spans: [
        { id: 'Jas.1.12.en.idi.0', text: 'Blessed is the man who remains steadfast under trial,', position: 0, sourceTokenIds: ['Jas.1.12.0', 'Jas.1.12.1', 'Jas.1.12.2', 'Jas.1.12.3'], confidence: 'high' },
        { id: 'Jas.1.12.en.idi.1', text: 'for when he has stood the test he will receive the crown of life.', position: 1, sourceTokenIds: [], confidence: 'medium' },
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

export const jas1_12_verse = {
  ref: 'Jas.1.12',
  sourceTokens: jas1_12_tokens,
  translation: jas1_12_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:17 – Every good and perfect gift is from above
 * ──────────────────────────────────────────────────────────── */

export const jas1_17_tokens: SourceToken[] = [
  {
    id: 'Jas.1.17.0',
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
    id: 'Jas.1.17.1',
    language: 'greek',
    text: 'δόσις',
    transliteration: 'dosis',
    lemma: 'δόσις',
    lemmaTranslit: 'dosis',
    gloss: 'gift / act of giving',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G1394',
    position: 1,
  },
  {
    id: 'Jas.1.17.2',
    language: 'greek',
    text: 'ἀγαθὴ',
    transliteration: 'agathē',
    lemma: 'ἀγαθός',
    lemmaTranslit: 'agathos',
    gloss: 'good',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G18',
    position: 2,
  },
  {
    id: 'Jas.1.17.3',
    language: 'greek',
    text: 'δώρημα',
    transliteration: 'dōrēma',
    lemma: 'δώρημα',
    lemmaTranslit: 'dōrēma',
    gloss: 'gift',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'nominative' },
    strongs: 'G1434',
    position: 3,
  },
  {
    id: 'Jas.1.17.4',
    language: 'greek',
    text: 'τέλειον',
    transliteration: 'teleion',
    lemma: 'τέλειος',
    lemmaTranslit: 'teleios',
    gloss: 'perfect',
    morphology: { pos: 'adjective', gender: 'neuter', number: 'singular', case: 'nominative' },
    strongs: 'G5046',
    position: 4,
  },
  {
    id: 'Jas.1.17.5',
    language: 'greek',
    text: 'ἄνωθέν',
    transliteration: 'anōthen',
    lemma: 'ἄνωθεν',
    lemmaTranslit: 'anōthen',
    gloss: 'from above',
    morphology: { pos: 'adverb' },
    strongs: 'G509',
    position: 5,
  },
];

export const jas1_17_translation: VerseTranslation = {
  verseRef: 'Jas.1.17',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Every good act of giving and every perfect gift is from above, coming down from the Father of lights.',
      spans: [
        { id: 'Jas.1.17.en.lit.0', text: 'Every good act of giving', position: 0, sourceTokenIds: ['Jas.1.17.0', 'Jas.1.17.1', 'Jas.1.17.2'], confidence: 'high' },
        { id: 'Jas.1.17.en.lit.1', text: 'and every perfect gift', position: 1, sourceTokenIds: ['Jas.1.17.3', 'Jas.1.17.4'], confidence: 'high' },
        { id: 'Jas.1.17.en.lit.2', text: 'is from above,', position: 2, sourceTokenIds: ['Jas.1.17.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Every good gift and every perfect gift is from above, coming down from the Father of lights.',
      spans: [
        { id: 'Jas.1.17.en.idi.0', text: 'Every good gift and every perfect gift', position: 0, sourceTokenIds: ['Jas.1.17.0', 'Jas.1.17.1', 'Jas.1.17.2', 'Jas.1.17.3', 'Jas.1.17.4'], confidence: 'high' },
        { id: 'Jas.1.17.en.idi.1', text: 'is from above, coming down from the Father of lights.', position: 1, sourceTokenIds: ['Jas.1.17.5'], confidence: 'high' },
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

export const jas1_17_verse = {
  ref: 'Jas.1.17',
  sourceTokens: jas1_17_tokens,
  translation: jas1_17_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:22 – Be doers of the word, not hearers only
 * ──────────────────────────────────────────────────────────── */

export const jas1_22_tokens: SourceToken[] = [
  {
    id: 'Jas.1.22.0',
    language: 'greek',
    text: 'Γίνεσθε',
    transliteration: 'Ginesthe',
    lemma: 'γίνομαι',
    lemmaTranslit: 'ginomai',
    gloss: 'become / be',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'present', voice: 'middle', mood: 'imperative' },
    strongs: 'G1096',
    position: 0,
  },
  {
    id: 'Jas.1.22.1',
    language: 'greek',
    text: 'ποιηταὶ',
    transliteration: 'poiētai',
    lemma: 'ποιητής',
    lemmaTranslit: 'poiētēs',
    gloss: 'doers',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', case: 'nominative' },
    strongs: 'G4163',
    position: 1,
  },
  {
    id: 'Jas.1.22.2',
    language: 'greek',
    text: 'λόγου',
    transliteration: 'logou',
    lemma: 'λόγος',
    lemmaTranslit: 'logos',
    gloss: 'of the word',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G3056',
    position: 2,
  },
  {
    id: 'Jas.1.22.3',
    language: 'greek',
    text: 'ἀκροαταὶ',
    transliteration: 'akroatai',
    lemma: 'ἀκροατής',
    lemmaTranslit: 'akroatēs',
    gloss: 'hearers',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', case: 'nominative' },
    strongs: 'G202',
    position: 3,
  },
  {
    id: 'Jas.1.22.4',
    language: 'greek',
    text: 'μόνον',
    transliteration: 'monon',
    lemma: 'μόνος',
    lemmaTranslit: 'monos',
    gloss: 'only',
    morphology: { pos: 'adjective', gender: 'neuter', number: 'singular', case: 'accusative' },
    strongs: 'G3441',
    position: 4,
  },
];

export const jas1_22_translation: VerseTranslation = {
  verseRef: 'Jas.1.22',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'But become doers of the word, and not hearers only, deceiving yourselves.',
      spans: [
        { id: 'Jas.1.22.en.lit.0', text: 'But become doers', position: 0, sourceTokenIds: ['Jas.1.22.0', 'Jas.1.22.1'], confidence: 'high' },
        { id: 'Jas.1.22.en.lit.1', text: 'of the word,', position: 1, sourceTokenIds: ['Jas.1.22.2'], confidence: 'high' },
        { id: 'Jas.1.22.en.lit.2', text: 'and not hearers only,', position: 2, sourceTokenIds: ['Jas.1.22.3', 'Jas.1.22.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'But be doers of the word, and not hearers only, deceiving yourselves.',
      spans: [
        { id: 'Jas.1.22.en.idi.0', text: 'But be doers of the word,', position: 0, sourceTokenIds: ['Jas.1.22.0', 'Jas.1.22.1', 'Jas.1.22.2'], confidence: 'high' },
        { id: 'Jas.1.22.en.idi.1', text: 'and not hearers only, deceiving yourselves.', position: 1, sourceTokenIds: ['Jas.1.22.3', 'Jas.1.22.4'], confidence: 'high' },
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

export const jas1_22_notes: StudyNote[] = [
  {
    id: 'Jas.1.22.note.1',
    verseRef: 'Jas.1.22',
    sourceTokenIds: ['Jas.1.22.1', 'Jas.1.22.2'],
    category: 'theological',
    title: "ποιηταὶ λόγου — Doers of the Word",
    content: "James's exhortation γίνεσθε ποιηταὶ λόγου (\"become doers of the word\") is the epistle's central imperative. The noun ποιητής (poiētēs, G4163) means \"one who does or makes\" — not passive reception but active obedience. The contrast with ἀκροατής (akroatēs, \"hearer\") draws on the Jewish distinction between hearing Torah (שׁמע) and doing it. James insists that authentic faith expresses itself in concrete action (cf. 2:14-26), anticipating his argument that faith without works is dead.",
    confidence: 'high',
    authorType: 'ai',
    metadata: {
      generatedAt: new Date().toISOString(),
      engineId: 'open-bible-notes',
    },
  },
];

export const jas1_22_verse = {
  ref: 'Jas.1.22',
  sourceTokens: jas1_22_tokens,
  translation: jas1_22_translation,
  notes: jas1_22_notes,
};

/* ────────────────────────────────────────────────────────────
 * Verse 1:27 – Pure religion: visit orphans and widows
 * ──────────────────────────────────────────────────────────── */

export const jas1_27_tokens: SourceToken[] = [
  {
    id: 'Jas.1.27.0',
    language: 'greek',
    text: 'θρησκεία',
    transliteration: 'thrēskeia',
    lemma: 'θρησκεία',
    lemmaTranslit: 'thrēskeia',
    gloss: 'religion',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G2356',
    position: 0,
  },
  {
    id: 'Jas.1.27.1',
    language: 'greek',
    text: 'καθαρὰ',
    transliteration: 'kathara',
    lemma: 'καθαρός',
    lemmaTranslit: 'katharos',
    gloss: 'pure',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G2513',
    position: 1,
  },
  {
    id: 'Jas.1.27.2',
    language: 'greek',
    text: 'ἀμίαντος',
    transliteration: 'amiantos',
    lemma: 'ἀμίαντος',
    lemmaTranslit: 'amiantos',
    gloss: 'undefiled',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G283',
    position: 2,
  },
  {
    id: 'Jas.1.27.3',
    language: 'greek',
    text: 'ἐπισκέπτεσθαι',
    transliteration: 'episkeptesthai',
    lemma: 'ἐπισκέπτομαι',
    lemmaTranslit: 'episkeptomai',
    gloss: 'to visit',
    morphology: { pos: 'verb', tense: 'present', voice: 'middle', mood: 'infinitive' },
    strongs: 'G1980',
    position: 3,
  },
  {
    id: 'Jas.1.27.4',
    language: 'greek',
    text: 'ὀρφανοὺς',
    transliteration: 'orphanous',
    lemma: 'ὀρφανός',
    lemmaTranslit: 'orphanos',
    gloss: 'orphans',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', case: 'accusative' },
    strongs: 'G3737',
    position: 4,
  },
  {
    id: 'Jas.1.27.5',
    language: 'greek',
    text: 'χήρας',
    transliteration: 'chēras',
    lemma: 'χήρα',
    lemmaTranslit: 'chēra',
    gloss: 'widows',
    morphology: { pos: 'noun', gender: 'feminine', number: 'plural', case: 'accusative' },
    strongs: 'G5503',
    position: 5,
  },
];

export const jas1_27_translation: VerseTranslation = {
  verseRef: 'Jas.1.27',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Religion pure and undefiled before God and the Father is this: to visit orphans and widows in their affliction.',
      spans: [
        { id: 'Jas.1.27.en.lit.0', text: 'Religion pure and undefiled', position: 0, sourceTokenIds: ['Jas.1.27.0', 'Jas.1.27.1', 'Jas.1.27.2'], confidence: 'high' },
        { id: 'Jas.1.27.en.lit.1', text: 'before God and the Father is this: to visit', position: 1, sourceTokenIds: ['Jas.1.27.3'], confidence: 'high' },
        { id: 'Jas.1.27.en.lit.2', text: 'orphans and widows in their affliction.', position: 2, sourceTokenIds: ['Jas.1.27.4', 'Jas.1.27.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Religion that is pure and undefiled before God the Father is this: to visit orphans and widows in their affliction and to keep oneself unstained from the world.',
      spans: [
        { id: 'Jas.1.27.en.idi.0', text: 'Religion that is pure and undefiled before God the Father is this:', position: 0, sourceTokenIds: ['Jas.1.27.0', 'Jas.1.27.1', 'Jas.1.27.2'], confidence: 'high' },
        { id: 'Jas.1.27.en.idi.1', text: 'to visit orphans and widows in their affliction', position: 1, sourceTokenIds: ['Jas.1.27.3', 'Jas.1.27.4', 'Jas.1.27.5'], confidence: 'high' },
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

export const jas1_27_verse = {
  ref: 'Jas.1.27',
  sourceTokens: jas1_27_tokens,
  translation: jas1_27_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Export combined verses
 * ──────────────────────────────────────────────────────────── */

export const james1_1_27_verses = [
  jas1_2_verse,
  jas1_5_verse,
  jas1_12_verse,
  jas1_17_verse,
  jas1_22_verse,
  jas1_27_verse,
];

export default james1_1_27_verses;
