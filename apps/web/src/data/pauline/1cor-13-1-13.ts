// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 13:1 – Speaking in tongues without love
 * ──────────────────────────────────────────────────────────── */

export const corinthians1_13_1_tokens: SourceToken[] = [
  {
    id: '1Cor.13.1.0',
    language: 'greek',
    text: 'Ἐὰν',
    transliteration: 'Ean',
    lemma: 'ἐάν',
    lemmaTranslit: 'ean',
    gloss: 'if',
    morphology: { pos: 'conjunction' },
    strongs: 'G1437',
    position: 0,
  },
  {
    id: '1Cor.13.1.1',
    language: 'greek',
    text: 'λαλῶ',
    transliteration: 'lalō',
    lemma: 'λαλέω',
    lemmaTranslit: 'laleō',
    gloss: 'I speak',
    morphology: { pos: 'verb', person: '1', number: 'singular', tense: 'present', voice: 'active', mood: 'subjunctive' },
    strongs: 'G2980',
    position: 1,
  },
  {
    id: '1Cor.13.1.2',
    language: 'greek',
    text: 'γλώσσαις',
    transliteration: 'glōssais',
    lemma: 'γλῶσσα',
    lemmaTranslit: 'glōssa',
    gloss: 'in tongues',
    morphology: { pos: 'noun', gender: 'feminine', number: 'plural', case: 'dative' },
    strongs: 'G1100',
    position: 2,
  },
  {
    id: '1Cor.13.1.3',
    language: 'greek',
    text: 'ἀνθρώπων',
    transliteration: 'anthrōpōn',
    lemma: 'ἄνθρωπος',
    lemmaTranslit: 'anthrōpos',
    gloss: 'of men',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', case: 'genitive' },
    strongs: 'G444',
    position: 3,
  },
  {
    id: '1Cor.13.1.4',
    language: 'greek',
    text: 'ἀγγέλων',
    transliteration: 'angelōn',
    lemma: 'ἄγγελος',
    lemmaTranslit: 'angelos',
    gloss: 'of angels',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', case: 'genitive' },
    strongs: 'G32',
    position: 4,
  },
  {
    id: '1Cor.13.1.5',
    language: 'greek',
    text: 'ἀγάπην',
    transliteration: 'agapēn',
    lemma: 'ἀγάπη',
    lemmaTranslit: 'agapē',
    gloss: 'love',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G26',
    position: 5,
  },
  {
    id: '1Cor.13.1.6',
    language: 'greek',
    text: 'χαλκὸς',
    transliteration: 'chalkos',
    lemma: 'χαλκός',
    lemmaTranslit: 'chalkos',
    gloss: 'bronze/gong',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G5475',
    position: 6,
  },
];

export const corinthians1_13_1_translation: VerseTranslation = {
  verseRef: '1Cor.13.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "If I speak in the tongues of men and of angels, but have not love, I have become a sounding bronze or a clanging cymbal.",
      spans: [
        { id: '1Cor.13.1.en.lit.0', text: 'If I speak in the tongues', position: 0, sourceTokenIds: ['1Cor.13.1.0', '1Cor.13.1.1', '1Cor.13.1.2'], confidence: 'high' },
        { id: '1Cor.13.1.en.lit.1', text: 'of men and of angels,', position: 1, sourceTokenIds: ['1Cor.13.1.3', '1Cor.13.1.4'], confidence: 'high' },
        { id: '1Cor.13.1.en.lit.2', text: 'but have not love, I have become a sounding bronze or a clanging cymbal.', position: 2, sourceTokenIds: ['1Cor.13.1.5', '1Cor.13.1.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "If I speak in the tongues of men and of angels, but have not love, I am a noisy gong or a clanging cymbal.",
      spans: [
        { id: '1Cor.13.1.en.idi.0', text: 'If I speak in the tongues of men and of angels,', position: 0, sourceTokenIds: ['1Cor.13.1.0', '1Cor.13.1.1', '1Cor.13.1.2', '1Cor.13.1.3', '1Cor.13.1.4'], confidence: 'high' },
        { id: '1Cor.13.1.en.idi.1', text: 'but have not love, I am a noisy gong or a clanging cymbal.', position: 1, sourceTokenIds: ['1Cor.13.1.5', '1Cor.13.1.6'], confidence: 'high' },
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

export const corinthians1_13_1_notes: StudyNote[] = [
  { id: '1Cor.13.1.note.1', verseRef: '1Cor.13.1', sourceTokenIds: ['1Cor.13.1.5'], category: 'lexical', title: "ἀγάπη — Love", content: "ἀγάπη (agapē) is the distinctively Christian term for selfless, unconditional love. Unlike eros (romantic desire) or philia (friendship), agapē describes a love that seeks the good of the other regardless of merit. Paul’s use here introduces the supreme criterion by which all spiritual gifts must be evaluated.", confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const corinthians1_13_1_verse = {
  ref: '1Cor.13.1',
  sourceTokens: corinthians1_13_1_tokens,
  translation: corinthians1_13_1_translation,
  notes: corinthians1_13_1_notes,
};

/* ────────────────────────────────────────────────────────────
 * Verse 13:2 – Prophecy and knowledge without love
 * ──────────────────────────────────────────────────────────── */

export const corinthians1_13_2_tokens: SourceToken[] = [
  {
    id: '1Cor.13.2.0',
    language: 'greek',
    text: 'προφητείαν',
    transliteration: 'prophēteian',
    lemma: 'προφητεία',
    lemmaTranslit: 'prophēteia',
    gloss: 'prophecy',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G4394',
    position: 0,
  },
  {
    id: '1Cor.13.2.1',
    language: 'greek',
    text: 'μυστήρια',
    transliteration: 'mystēria',
    lemma: 'μυστήριον',
    lemmaTranslit: 'mystērion',
    gloss: 'mysteries',
    morphology: { pos: 'noun', gender: 'neuter', number: 'plural', case: 'accusative' },
    strongs: 'G3466',
    position: 1,
  },
  {
    id: '1Cor.13.2.2',
    language: 'greek',
    text: 'γνῶσιν',
    transliteration: 'gnōsin',
    lemma: 'γνῶσις',
    lemmaTranslit: 'gnōsis',
    gloss: 'knowledge',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G1108',
    position: 2,
  },
  {
    id: '1Cor.13.2.3',
    language: 'greek',
    text: 'πίστιν',
    transliteration: 'pistin',
    lemma: 'πίστις',
    lemmaTranslit: 'pistis',
    gloss: 'faith',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G4102',
    position: 3,
  },
  {
    id: '1Cor.13.2.4',
    language: 'greek',
    text: 'ἀγάπην',
    transliteration: 'agapēn',
    lemma: 'ἀγάπη',
    lemmaTranslit: 'agapē',
    gloss: 'love',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G26',
    position: 4,
  },
  {
    id: '1Cor.13.2.5',
    language: 'greek',
    text: 'οὐθέν',
    transliteration: 'outhen',
    lemma: 'οὐδείς',
    lemmaTranslit: 'oudeis',
    gloss: 'nothing',
    morphology: { pos: 'pronoun', gender: 'neuter', number: 'singular', case: 'nominative' },
    strongs: 'G3762',
    position: 5,
  },
];

export const corinthians1_13_2_translation: VerseTranslation = {
  verseRef: '1Cor.13.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "And if I have prophecy and know all the mysteries and all the knowledge, and if I have all the faith so as to remove mountains, but have not love, I am nothing.",
      spans: [
        { id: '1Cor.13.2.en.lit.0', text: 'And if I have prophecy', position: 0, sourceTokenIds: ['1Cor.13.2.0'], confidence: 'high' },
        { id: '1Cor.13.2.en.lit.1', text: 'and know all the mysteries and all the knowledge,', position: 1, sourceTokenIds: ['1Cor.13.2.1', '1Cor.13.2.2'], confidence: 'high' },
        { id: '1Cor.13.2.en.lit.2', text: 'and if I have all the faith so as to remove mountains,', position: 2, sourceTokenIds: ['1Cor.13.2.3'], confidence: 'high' },
        { id: '1Cor.13.2.en.lit.3', text: 'but have not love, I am nothing.', position: 3, sourceTokenIds: ['1Cor.13.2.4', '1Cor.13.2.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "If I have prophetic powers and understand all mysteries and all knowledge, and if I have all faith so as to remove mountains, but have not love, I am nothing.",
      spans: [
        { id: '1Cor.13.2.en.idi.0', text: 'If I have prophetic powers', position: 0, sourceTokenIds: ['1Cor.13.2.0'], confidence: 'high' },
        { id: '1Cor.13.2.en.idi.1', text: 'and understand all mysteries and all knowledge,', position: 1, sourceTokenIds: ['1Cor.13.2.1', '1Cor.13.2.2'], confidence: 'high' },
        { id: '1Cor.13.2.en.idi.2', text: 'and if I have all faith so as to remove mountains,', position: 2, sourceTokenIds: ['1Cor.13.2.3'], confidence: 'high' },
        { id: '1Cor.13.2.en.idi.3', text: 'but have not love, I am nothing.', position: 3, sourceTokenIds: ['1Cor.13.2.4', '1Cor.13.2.5'], confidence: 'high' },
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


export const corinthians1_13_2_verse = {
  ref: '1Cor.13.2',
  sourceTokens: corinthians1_13_2_tokens,
  translation: corinthians1_13_2_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 13:3 – Giving all possessions without love
 * ──────────────────────────────────────────────────────────── */

export const corinthians1_13_3_tokens: SourceToken[] = [
  {
    id: '1Cor.13.3.0',
    language: 'greek',
    text: 'ψωμίσω',
    transliteration: 'psōmisō',
    lemma: 'ψωμίζω',
    lemmaTranslit: 'psōmizō',
    gloss: 'I give away',
    morphology: { pos: 'verb', person: '1', number: 'singular', tense: 'aorist', voice: 'active', mood: 'subjunctive' },
    strongs: 'G5595',
    position: 0,
  },
  {
    id: '1Cor.13.3.1',
    language: 'greek',
    text: 'πάντα',
    transliteration: 'panta',
    lemma: 'πᾶς',
    lemmaTranslit: 'pas',
    gloss: 'all things',
    morphology: { pos: 'adjective', gender: 'neuter', number: 'plural', case: 'accusative' },
    strongs: 'G3956',
    position: 1,
  },
  {
    id: '1Cor.13.3.2',
    language: 'greek',
    text: 'ὑπάρχοντα',
    transliteration: 'hyparchonta',
    lemma: 'ὑπάρχω',
    lemmaTranslit: 'hyparchō',
    gloss: 'possessions',
    morphology: { pos: 'verb', tense: 'present', voice: 'active', mood: 'participle' },
    strongs: 'G5225',
    position: 2,
  },
  {
    id: '1Cor.13.3.3',
    language: 'greek',
    text: 'παραδῶ',
    transliteration: 'paradō',
    lemma: 'παραδίδωμι',
    lemmaTranslit: 'paradidōmi',
    gloss: 'I deliver',
    morphology: { pos: 'verb', person: '1', number: 'singular', tense: 'aorist', voice: 'active', mood: 'subjunctive' },
    strongs: 'G3860',
    position: 3,
  },
  {
    id: '1Cor.13.3.4',
    language: 'greek',
    text: 'σῶμα',
    transliteration: 'sōma',
    lemma: 'σῶμα',
    lemmaTranslit: 'sōma',
    gloss: 'body',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'accusative' },
    strongs: 'G4983',
    position: 4,
  },
  {
    id: '1Cor.13.3.5',
    language: 'greek',
    text: 'ἀγάπην',
    transliteration: 'agapēn',
    lemma: 'ἀγάπη',
    lemmaTranslit: 'agapē',
    gloss: 'love',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G26',
    position: 5,
  },
];

export const corinthians1_13_3_translation: VerseTranslation = {
  verseRef: '1Cor.13.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "And if I give away all my possessions, and if I deliver my body to be burned, but have not love, I am profited nothing.",
      spans: [
        { id: '1Cor.13.3.en.lit.0', text: 'And if I give away all my possessions,', position: 0, sourceTokenIds: ['1Cor.13.3.0', '1Cor.13.3.1', '1Cor.13.3.2'], confidence: 'high' },
        { id: '1Cor.13.3.en.lit.1', text: 'and if I deliver my body to be burned,', position: 1, sourceTokenIds: ['1Cor.13.3.3', '1Cor.13.3.4'], confidence: 'high' },
        { id: '1Cor.13.3.en.lit.2', text: 'but have not love, I am profited nothing.', position: 2, sourceTokenIds: ['1Cor.13.3.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "If I give away all I have, and if I deliver up my body to be burned, but have not love, I gain nothing.",
      spans: [
        { id: '1Cor.13.3.en.idi.0', text: 'If I give away all I have,', position: 0, sourceTokenIds: ['1Cor.13.3.0', '1Cor.13.3.1', '1Cor.13.3.2'], confidence: 'high' },
        { id: '1Cor.13.3.en.idi.1', text: 'and if I deliver up my body to be burned,', position: 1, sourceTokenIds: ['1Cor.13.3.3', '1Cor.13.3.4'], confidence: 'high' },
        { id: '1Cor.13.3.en.idi.2', text: 'but have not love, I gain nothing.', position: 2, sourceTokenIds: ['1Cor.13.3.5'], confidence: 'high' },
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


export const corinthians1_13_3_verse = {
  ref: '1Cor.13.3',
  sourceTokens: corinthians1_13_3_tokens,
  translation: corinthians1_13_3_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 13:4 – Love is patient and kind
 * ──────────────────────────────────────────────────────────── */

export const corinthians1_13_4_tokens: SourceToken[] = [
  {
    id: '1Cor.13.4.0',
    language: 'greek',
    text: 'ἡ',
    transliteration: 'hē',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G3588',
    position: 0,
  },
  {
    id: '1Cor.13.4.1',
    language: 'greek',
    text: 'ἀγάπη',
    transliteration: 'agapē',
    lemma: 'ἀγάπη',
    lemmaTranslit: 'agapē',
    gloss: 'love',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G26',
    position: 1,
  },
  {
    id: '1Cor.13.4.2',
    language: 'greek',
    text: 'μακροθυμεῖ',
    transliteration: 'makrothymei',
    lemma: 'μακροθυμέω',
    lemmaTranslit: 'makrothymeō',
    gloss: 'is patient',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G3114',
    position: 2,
  },
  {
    id: '1Cor.13.4.3',
    language: 'greek',
    text: 'χρηστεύεται',
    transliteration: 'chrēsteuetai',
    lemma: 'χρηστεύομαι',
    lemmaTranslit: 'chrēsteuomai',
    gloss: 'is kind',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'middle', mood: 'indicative' },
    strongs: 'G5541',
    position: 3,
  },
  {
    id: '1Cor.13.4.4',
    language: 'greek',
    text: 'ζηλοῖ',
    transliteration: 'zēloi',
    lemma: 'ζηλόω',
    lemmaTranslit: 'zēloō',
    gloss: 'envies',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G2206',
    position: 4,
  },
  {
    id: '1Cor.13.4.5',
    language: 'greek',
    text: 'περπερεύεται',
    transliteration: 'perpereuetai',
    lemma: 'περπερεύομαι',
    lemmaTranslit: 'perpereuomai',
    gloss: 'boasts',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'middle', mood: 'indicative' },
    strongs: 'G4068',
    position: 5,
  },
];

export const corinthians1_13_4_translation: VerseTranslation = {
  verseRef: '1Cor.13.4',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "The love is patient, is kind; the love does not envy, does not boast.",
      spans: [
        { id: '1Cor.13.4.en.lit.0', text: 'The love is patient,', position: 0, sourceTokenIds: ['1Cor.13.4.0', '1Cor.13.4.1', '1Cor.13.4.2'], confidence: 'high' },
        { id: '1Cor.13.4.en.lit.1', text: 'is kind;', position: 1, sourceTokenIds: ['1Cor.13.4.3'], confidence: 'high' },
        { id: '1Cor.13.4.en.lit.2', text: 'the love does not envy, does not boast.', position: 2, sourceTokenIds: ['1Cor.13.4.4', '1Cor.13.4.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "Love is patient and kind; love does not envy or boast.",
      spans: [
        { id: '1Cor.13.4.en.idi.0', text: 'Love is patient and kind;', position: 0, sourceTokenIds: ['1Cor.13.4.0', '1Cor.13.4.1', '1Cor.13.4.2', '1Cor.13.4.3'], confidence: 'high' },
        { id: '1Cor.13.4.en.idi.1', text: 'love does not envy or boast.', position: 1, sourceTokenIds: ['1Cor.13.4.4', '1Cor.13.4.5'], confidence: 'high' },
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


export const corinthians1_13_4_verse = {
  ref: '1Cor.13.4',
  sourceTokens: corinthians1_13_4_tokens,
  translation: corinthians1_13_4_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 13:5 – Love is not arrogant or rude
 * ──────────────────────────────────────────────────────────── */

export const corinthians1_13_5_tokens: SourceToken[] = [
  {
    id: '1Cor.13.5.0',
    language: 'greek',
    text: 'ἀσχημονεῖ',
    transliteration: 'aschēmonei',
    lemma: 'ἀσχημονέω',
    lemmaTranslit: 'aschēmoneō',
    gloss: 'behaves rudely',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G807',
    position: 0,
  },
  {
    id: '1Cor.13.5.1',
    language: 'greek',
    text: 'ζητεῖ',
    transliteration: 'zētei',
    lemma: 'ζητέω',
    lemmaTranslit: 'zēteō',
    gloss: 'seeks',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G2212',
    position: 1,
  },
  {
    id: '1Cor.13.5.2',
    language: 'greek',
    text: 'ἑαυτῆς',
    transliteration: 'heautēs',
    lemma: 'ἑαυτοῦ',
    lemmaTranslit: 'heautou',
    gloss: 'its own',
    morphology: { pos: 'pronoun', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G1438',
    position: 2,
  },
  {
    id: '1Cor.13.5.3',
    language: 'greek',
    text: 'παροξύνεται',
    transliteration: 'paroxunetai',
    lemma: 'παροξύνω',
    lemmaTranslit: 'paroxunō',
    gloss: 'is provoked',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'passive', mood: 'indicative' },
    strongs: 'G3947',
    position: 3,
  },
  {
    id: '1Cor.13.5.4',
    language: 'greek',
    text: 'λογίζεται',
    transliteration: 'logizetai',
    lemma: 'λογίζομαι',
    lemmaTranslit: 'logizomai',
    gloss: 'reckons',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'middle', mood: 'indicative' },
    strongs: 'G3049',
    position: 4,
  },
  {
    id: '1Cor.13.5.5',
    language: 'greek',
    text: 'κακόν',
    transliteration: 'kakon',
    lemma: 'κακός',
    lemmaTranslit: 'kakos',
    gloss: 'evil',
    morphology: { pos: 'adjective', gender: 'neuter', number: 'singular', case: 'accusative' },
    strongs: 'G2556',
    position: 5,
  },
];

export const corinthians1_13_5_translation: VerseTranslation = {
  verseRef: '1Cor.13.5',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "Does not behave rudely, does not seek the things of itself, is not provoked, does not reckon the evil.",
      spans: [
        { id: '1Cor.13.5.en.lit.0', text: 'Does not behave rudely,', position: 0, sourceTokenIds: ['1Cor.13.5.0'], confidence: 'high' },
        { id: '1Cor.13.5.en.lit.1', text: 'does not seek the things of itself,', position: 1, sourceTokenIds: ['1Cor.13.5.1', '1Cor.13.5.2'], confidence: 'high' },
        { id: '1Cor.13.5.en.lit.2', text: 'is not provoked, does not reckon the evil.', position: 2, sourceTokenIds: ['1Cor.13.5.3', '1Cor.13.5.4', '1Cor.13.5.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "It is not arrogant or rude. It does not insist on its own way; it is not irritable or resentful.",
      spans: [
        { id: '1Cor.13.5.en.idi.0', text: 'It is not arrogant or rude.', position: 0, sourceTokenIds: ['1Cor.13.5.0'], confidence: 'high' },
        { id: '1Cor.13.5.en.idi.1', text: 'It does not insist on its own way;', position: 1, sourceTokenIds: ['1Cor.13.5.1', '1Cor.13.5.2'], confidence: 'high' },
        { id: '1Cor.13.5.en.idi.2', text: 'it is not irritable or resentful.', position: 2, sourceTokenIds: ['1Cor.13.5.3', '1Cor.13.5.4', '1Cor.13.5.5'], confidence: 'high' },
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


export const corinthians1_13_5_verse = {
  ref: '1Cor.13.5',
  sourceTokens: corinthians1_13_5_tokens,
  translation: corinthians1_13_5_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 13:6 – Love rejoices with the truth
 * ──────────────────────────────────────────────────────────── */

export const corinthians1_13_6_tokens: SourceToken[] = [
  {
    id: '1Cor.13.6.0',
    language: 'greek',
    text: 'χαίρει',
    transliteration: 'chairei',
    lemma: 'χαίρω',
    lemmaTranslit: 'chairō',
    gloss: 'rejoices',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G5463',
    position: 0,
  },
  {
    id: '1Cor.13.6.1',
    language: 'greek',
    text: 'ἀδικίᾳ',
    transliteration: 'adikia',
    lemma: 'ἀδικία',
    lemmaTranslit: 'adikia',
    gloss: 'unrighteousness',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G93',
    position: 1,
  },
  {
    id: '1Cor.13.6.2',
    language: 'greek',
    text: 'συγχαίρει',
    transliteration: 'sunchairei',
    lemma: 'συγχαίρω',
    lemmaTranslit: 'sunchairō',
    gloss: 'rejoices with',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G4796',
    position: 2,
  },
  {
    id: '1Cor.13.6.3',
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
    id: '1Cor.13.6.4',
    language: 'greek',
    text: 'ἀληθείᾳ',
    transliteration: 'alētheia',
    lemma: 'ἀλήθεια',
    lemmaTranslit: 'alētheia',
    gloss: 'truth',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G225',
    position: 4,
  },
];

export const corinthians1_13_6_translation: VerseTranslation = {
  verseRef: '1Cor.13.6',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "Does not rejoice at the unrighteousness, but rejoices with the truth.",
      spans: [
        { id: '1Cor.13.6.en.lit.0', text: 'Does not rejoice at the unrighteousness,', position: 0, sourceTokenIds: ['1Cor.13.6.0', '1Cor.13.6.1'], confidence: 'high' },
        { id: '1Cor.13.6.en.lit.1', text: 'but rejoices with the truth.', position: 1, sourceTokenIds: ['1Cor.13.6.2', '1Cor.13.6.3', '1Cor.13.6.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "It does not rejoice at wrongdoing, but rejoices with the truth.",
      spans: [
        { id: '1Cor.13.6.en.idi.0', text: 'It does not rejoice at wrongdoing,', position: 0, sourceTokenIds: ['1Cor.13.6.0', '1Cor.13.6.1'], confidence: 'high' },
        { id: '1Cor.13.6.en.idi.1', text: 'but rejoices with the truth.', position: 1, sourceTokenIds: ['1Cor.13.6.2', '1Cor.13.6.3', '1Cor.13.6.4'], confidence: 'high' },
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


export const corinthians1_13_6_verse = {
  ref: '1Cor.13.6',
  sourceTokens: corinthians1_13_6_tokens,
  translation: corinthians1_13_6_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 13:7 – Love bears all things
 * ──────────────────────────────────────────────────────────── */

export const corinthians1_13_7_tokens: SourceToken[] = [
  {
    id: '1Cor.13.7.0',
    language: 'greek',
    text: 'πάντα',
    transliteration: 'panta',
    lemma: 'πᾶς',
    lemmaTranslit: 'pas',
    gloss: 'all things',
    morphology: { pos: 'adjective', gender: 'neuter', number: 'plural', case: 'accusative' },
    strongs: 'G3956',
    position: 0,
  },
  {
    id: '1Cor.13.7.1',
    language: 'greek',
    text: 'στέγει',
    transliteration: 'stegei',
    lemma: 'στέγω',
    lemmaTranslit: 'stegō',
    gloss: 'bears',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G4722',
    position: 1,
  },
  {
    id: '1Cor.13.7.2',
    language: 'greek',
    text: 'πιστεύει',
    transliteration: 'pisteuei',
    lemma: 'πιστεύω',
    lemmaTranslit: 'pisteuō',
    gloss: 'believes',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G4100',
    position: 2,
  },
  {
    id: '1Cor.13.7.3',
    language: 'greek',
    text: 'ἐλπίζει',
    transliteration: 'elpizei',
    lemma: 'ἐλπίζω',
    lemmaTranslit: 'elpizō',
    gloss: 'hopes',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G1679',
    position: 3,
  },
  {
    id: '1Cor.13.7.4',
    language: 'greek',
    text: 'ὑπομένει',
    transliteration: 'hypomenei',
    lemma: 'ὑπομένω',
    lemmaTranslit: 'hypomenō',
    gloss: 'endures',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G5278',
    position: 4,
  },
];

export const corinthians1_13_7_translation: VerseTranslation = {
  verseRef: '1Cor.13.7',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "All things bears, all things believes, all things hopes, all things endures.",
      spans: [
        { id: '1Cor.13.7.en.lit.0', text: 'All things bears,', position: 0, sourceTokenIds: ['1Cor.13.7.0', '1Cor.13.7.1'], confidence: 'high' },
        { id: '1Cor.13.7.en.lit.1', text: 'all things believes, all things hopes,', position: 1, sourceTokenIds: ['1Cor.13.7.2', '1Cor.13.7.3'], confidence: 'high' },
        { id: '1Cor.13.7.en.lit.2', text: 'all things endures.', position: 2, sourceTokenIds: ['1Cor.13.7.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "Love bears all things, believes all things, hopes all things, endures all things.",
      spans: [
        { id: '1Cor.13.7.en.idi.0', text: 'Love bears all things, believes all things,', position: 0, sourceTokenIds: ['1Cor.13.7.0', '1Cor.13.7.1', '1Cor.13.7.2'], confidence: 'high' },
        { id: '1Cor.13.7.en.idi.1', text: 'hopes all things, endures all things.', position: 1, sourceTokenIds: ['1Cor.13.7.3', '1Cor.13.7.4'], confidence: 'high' },
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


export const corinthians1_13_7_verse = {
  ref: '1Cor.13.7',
  sourceTokens: corinthians1_13_7_tokens,
  translation: corinthians1_13_7_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 13:8 – Love never ends
 * ──────────────────────────────────────────────────────────── */

export const corinthians1_13_8_tokens: SourceToken[] = [
  {
    id: '1Cor.13.8.0',
    language: 'greek',
    text: 'ἡ',
    transliteration: 'hē',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G3588',
    position: 0,
  },
  {
    id: '1Cor.13.8.1',
    language: 'greek',
    text: 'ἀγάπη',
    transliteration: 'agapē',
    lemma: 'ἀγάπη',
    lemmaTranslit: 'agapē',
    gloss: 'love',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G26',
    position: 1,
  },
  {
    id: '1Cor.13.8.2',
    language: 'greek',
    text: 'οὐδέποτε',
    transliteration: 'oudepote',
    lemma: 'οὐδέποτε',
    lemmaTranslit: 'oudepote',
    gloss: 'never',
    morphology: { pos: 'adverb' },
    strongs: 'G3763',
    position: 2,
  },
  {
    id: '1Cor.13.8.3',
    language: 'greek',
    text: 'πίπτει',
    transliteration: 'piptei',
    lemma: 'πίπτω',
    lemmaTranslit: 'piptō',
    gloss: 'falls',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G4098',
    position: 3,
  },
  {
    id: '1Cor.13.8.4',
    language: 'greek',
    text: 'προφητεῖαι',
    transliteration: 'prophēteiai',
    lemma: 'προφητεία',
    lemmaTranslit: 'prophēteia',
    gloss: 'prophecies',
    morphology: { pos: 'noun', gender: 'feminine', number: 'plural', case: 'nominative' },
    strongs: 'G4394',
    position: 4,
  },
  {
    id: '1Cor.13.8.5',
    language: 'greek',
    text: 'καταργηθήσονται',
    transliteration: 'katargēthēsontai',
    lemma: 'καταργέω',
    lemmaTranslit: 'katargeō',
    gloss: 'will be abolished',
    morphology: { pos: 'verb', person: '3', number: 'plural', tense: 'future', voice: 'passive', mood: 'indicative' },
    strongs: 'G2673',
    position: 5,
  },
  {
    id: '1Cor.13.8.6',
    language: 'greek',
    text: 'γλῶσσαι',
    transliteration: 'glōssai',
    lemma: 'γλῶσσα',
    lemmaTranslit: 'glōssa',
    gloss: 'tongues',
    morphology: { pos: 'noun', gender: 'feminine', number: 'plural', case: 'nominative' },
    strongs: 'G1100',
    position: 6,
  },
];

export const corinthians1_13_8_translation: VerseTranslation = {
  verseRef: '1Cor.13.8',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "The love never falls. Whether prophecies, they will be abolished; whether tongues, they will cease.",
      spans: [
        { id: '1Cor.13.8.en.lit.0', text: 'The love never falls.', position: 0, sourceTokenIds: ['1Cor.13.8.0', '1Cor.13.8.1', '1Cor.13.8.2', '1Cor.13.8.3'], confidence: 'high' },
        { id: '1Cor.13.8.en.lit.1', text: 'Whether prophecies, they will be abolished;', position: 1, sourceTokenIds: ['1Cor.13.8.4', '1Cor.13.8.5'], confidence: 'high' },
        { id: '1Cor.13.8.en.lit.2', text: 'whether tongues, they will cease.', position: 2, sourceTokenIds: ['1Cor.13.8.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "Love never ends. As for prophecies, they will pass away; as for tongues, they will cease.",
      spans: [
        { id: '1Cor.13.8.en.idi.0', text: 'Love never ends.', position: 0, sourceTokenIds: ['1Cor.13.8.0', '1Cor.13.8.1', '1Cor.13.8.2', '1Cor.13.8.3'], confidence: 'high' },
        { id: '1Cor.13.8.en.idi.1', text: 'As for prophecies, they will pass away;', position: 1, sourceTokenIds: ['1Cor.13.8.4', '1Cor.13.8.5'], confidence: 'high' },
        { id: '1Cor.13.8.en.idi.2', text: 'as for tongues, they will cease.', position: 2, sourceTokenIds: ['1Cor.13.8.6'], confidence: 'high' },
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

export const corinthians1_13_8_notes: StudyNote[] = [
  { id: '1Cor.13.8.note.1', verseRef: '1Cor.13.8', sourceTokenIds: ['1Cor.13.8.1', '1Cor.13.8.2', '1Cor.13.8.3'], category: 'theological', title: "Love never fails", content: "The declaration that love \"never falls\" (oudepote piptei) uses the present tense to express a timeless truth. While prophecy, tongues, and knowledge are temporary gifts for the present age, agapē participates in the eternal nature of God himself (1 John 4:8). This forms the climactic argument for love’s supremacy over all spiritual gifts.", confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const corinthians1_13_8_verse = {
  ref: '1Cor.13.8',
  sourceTokens: corinthians1_13_8_tokens,
  translation: corinthians1_13_8_translation,
  notes: corinthians1_13_8_notes,
};

/* ────────────────────────────────────────────────────────────
 * Verse 13:9 – We know in part
 * ──────────────────────────────────────────────────────────── */

export const corinthians1_13_9_tokens: SourceToken[] = [
  {
    id: '1Cor.13.9.0',
    language: 'greek',
    text: 'ἐκ',
    transliteration: 'ek',
    lemma: 'ἐκ',
    lemmaTranslit: 'ek',
    gloss: 'from',
    morphology: { pos: 'preposition' },
    strongs: 'G1537',
    position: 0,
  },
  {
    id: '1Cor.13.9.1',
    language: 'greek',
    text: 'μέρους',
    transliteration: 'merous',
    lemma: 'μέρος',
    lemmaTranslit: 'meros',
    gloss: 'part',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'genitive' },
    strongs: 'G3313',
    position: 1,
  },
  {
    id: '1Cor.13.9.2',
    language: 'greek',
    text: 'γινώσκομεν',
    transliteration: 'ginōskomen',
    lemma: 'γινώσκω',
    lemmaTranslit: 'ginōskō',
    gloss: 'we know',
    morphology: { pos: 'verb', person: '1', number: 'plural', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G1097',
    position: 2,
  },
  {
    id: '1Cor.13.9.3',
    language: 'greek',
    text: 'προφητεύομεν',
    transliteration: 'prophēteuomen',
    lemma: 'προφητεύω',
    lemmaTranslit: 'prophēteuō',
    gloss: 'we prophesy',
    morphology: { pos: 'verb', person: '1', number: 'plural', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G4395',
    position: 3,
  },
];

export const corinthians1_13_9_translation: VerseTranslation = {
  verseRef: '1Cor.13.9',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "For from part we know and from part we prophesy.",
      spans: [
        { id: '1Cor.13.9.en.lit.0', text: 'For from part we know', position: 0, sourceTokenIds: ['1Cor.13.9.0', '1Cor.13.9.1', '1Cor.13.9.2'], confidence: 'high' },
        { id: '1Cor.13.9.en.lit.1', text: 'and from part we prophesy.', position: 1, sourceTokenIds: ['1Cor.13.9.3'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "For we know in part and we prophesy in part.",
      spans: [
        { id: '1Cor.13.9.en.idi.0', text: 'For we know in part', position: 0, sourceTokenIds: ['1Cor.13.9.0', '1Cor.13.9.1', '1Cor.13.9.2'], confidence: 'high' },
        { id: '1Cor.13.9.en.idi.1', text: 'and we prophesy in part.', position: 1, sourceTokenIds: ['1Cor.13.9.3'], confidence: 'high' },
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


export const corinthians1_13_9_verse = {
  ref: '1Cor.13.9',
  sourceTokens: corinthians1_13_9_tokens,
  translation: corinthians1_13_9_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 13:10 – When the perfect comes
 * ──────────────────────────────────────────────────────────── */

export const corinthians1_13_10_tokens: SourceToken[] = [
  {
    id: '1Cor.13.10.0',
    language: 'greek',
    text: 'τὸ',
    transliteration: 'to',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'neuter', number: 'singular', case: 'nominative' },
    strongs: 'G3588',
    position: 0,
  },
  {
    id: '1Cor.13.10.1',
    language: 'greek',
    text: 'τέλειον',
    transliteration: 'teleion',
    lemma: 'τέλειος',
    lemmaTranslit: 'teleios',
    gloss: 'perfect',
    morphology: { pos: 'adjective', gender: 'neuter', number: 'singular', case: 'nominative' },
    strongs: 'G5046',
    position: 1,
  },
  {
    id: '1Cor.13.10.2',
    language: 'greek',
    text: 'ἔλθῃ',
    transliteration: 'elthē',
    lemma: 'ἔρχομαι',
    lemmaTranslit: 'erchomai',
    gloss: 'comes',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'subjunctive' },
    strongs: 'G2064',
    position: 2,
  },
  {
    id: '1Cor.13.10.3',
    language: 'greek',
    text: 'μέρους',
    transliteration: 'merous',
    lemma: 'μέρος',
    lemmaTranslit: 'meros',
    gloss: 'part',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'genitive' },
    strongs: 'G3313',
    position: 3,
  },
  {
    id: '1Cor.13.10.4',
    language: 'greek',
    text: 'καταργηθήσεται',
    transliteration: 'katargēthēsetai',
    lemma: 'καταργέω',
    lemmaTranslit: 'katargeō',
    gloss: 'will be abolished',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'future', voice: 'passive', mood: 'indicative' },
    strongs: 'G2673',
    position: 4,
  },
];

export const corinthians1_13_10_translation: VerseTranslation = {
  verseRef: '1Cor.13.10',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "But when the perfect comes, the of part will be abolished.",
      spans: [
        { id: '1Cor.13.10.en.lit.0', text: 'But when the perfect comes,', position: 0, sourceTokenIds: ['1Cor.13.10.0', '1Cor.13.10.1', '1Cor.13.10.2'], confidence: 'high' },
        { id: '1Cor.13.10.en.lit.1', text: 'the of part will be abolished.', position: 1, sourceTokenIds: ['1Cor.13.10.3', '1Cor.13.10.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "But when the perfect comes, the partial will pass away.",
      spans: [
        { id: '1Cor.13.10.en.idi.0', text: 'But when the perfect comes,', position: 0, sourceTokenIds: ['1Cor.13.10.0', '1Cor.13.10.1', '1Cor.13.10.2'], confidence: 'high' },
        { id: '1Cor.13.10.en.idi.1', text: 'the partial will pass away.', position: 1, sourceTokenIds: ['1Cor.13.10.3', '1Cor.13.10.4'], confidence: 'high' },
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


export const corinthians1_13_10_verse = {
  ref: '1Cor.13.10',
  sourceTokens: corinthians1_13_10_tokens,
  translation: corinthians1_13_10_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 13:11 – When I was a child
 * ──────────────────────────────────────────────────────────── */

export const corinthians1_13_11_tokens: SourceToken[] = [
  {
    id: '1Cor.13.11.0',
    language: 'greek',
    text: 'νήπιος',
    transliteration: 'nēpios',
    lemma: 'νήπιος',
    lemmaTranslit: 'nēpios',
    gloss: 'child',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3516',
    position: 0,
  },
  {
    id: '1Cor.13.11.1',
    language: 'greek',
    text: 'ἐλάλουν',
    transliteration: 'elaloun',
    lemma: 'λαλέω',
    lemmaTranslit: 'laleō',
    gloss: 'I was speaking',
    morphology: { pos: 'verb', person: '1', number: 'singular', tense: 'imperfect', voice: 'active', mood: 'indicative' },
    strongs: 'G2980',
    position: 1,
  },
  {
    id: '1Cor.13.11.2',
    language: 'greek',
    text: 'ἐφρόνουν',
    transliteration: 'ephronoun',
    lemma: 'φρονέω',
    lemmaTranslit: 'phroneō',
    gloss: 'I was thinking',
    morphology: { pos: 'verb', person: '1', number: 'singular', tense: 'imperfect', voice: 'active', mood: 'indicative' },
    strongs: 'G5426',
    position: 2,
  },
  {
    id: '1Cor.13.11.3',
    language: 'greek',
    text: 'ἐλογιζόμην',
    transliteration: 'elogizomēn',
    lemma: 'λογίζομαι',
    lemmaTranslit: 'logizomai',
    gloss: 'I was reasoning',
    morphology: { pos: 'verb', person: '1', number: 'singular', tense: 'imperfect', voice: 'middle', mood: 'indicative' },
    strongs: 'G3049',
    position: 3,
  },
  {
    id: '1Cor.13.11.4',
    language: 'greek',
    text: 'κατήργηκα',
    transliteration: 'katērgēka',
    lemma: 'καταργέω',
    lemmaTranslit: 'katargeō',
    gloss: 'I have put away',
    morphology: { pos: 'verb', person: '1', number: 'singular', tense: 'perfect', voice: 'active', mood: 'indicative' },
    strongs: 'G2673',
    position: 4,
  },
];

export const corinthians1_13_11_translation: VerseTranslation = {
  verseRef: '1Cor.13.11',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "When I was a child, I was speaking as a child, I was thinking as a child, I was reasoning as a child. When I became a man, I have put away the things of the child.",
      spans: [
        { id: '1Cor.13.11.en.lit.0', text: 'When I was a child, I was speaking as a child,', position: 0, sourceTokenIds: ['1Cor.13.11.0', '1Cor.13.11.1'], confidence: 'high' },
        { id: '1Cor.13.11.en.lit.1', text: 'I was thinking as a child, I was reasoning as a child.', position: 1, sourceTokenIds: ['1Cor.13.11.2', '1Cor.13.11.3'], confidence: 'high' },
        { id: '1Cor.13.11.en.lit.2', text: 'When I became a man, I have put away the things of the child.', position: 2, sourceTokenIds: ['1Cor.13.11.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "When I was a child, I spoke like a child, I thought like a child, I reasoned like a child. When I became a man, I gave up childish ways.",
      spans: [
        { id: '1Cor.13.11.en.idi.0', text: 'When I was a child, I spoke like a child,', position: 0, sourceTokenIds: ['1Cor.13.11.0', '1Cor.13.11.1'], confidence: 'high' },
        { id: '1Cor.13.11.en.idi.1', text: 'I thought like a child, I reasoned like a child.', position: 1, sourceTokenIds: ['1Cor.13.11.2', '1Cor.13.11.3'], confidence: 'high' },
        { id: '1Cor.13.11.en.idi.2', text: 'When I became a man, I gave up childish ways.', position: 2, sourceTokenIds: ['1Cor.13.11.4'], confidence: 'high' },
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


export const corinthians1_13_11_verse = {
  ref: '1Cor.13.11',
  sourceTokens: corinthians1_13_11_tokens,
  translation: corinthians1_13_11_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 13:12 – Seeing in a mirror dimly
 * ──────────────────────────────────────────────────────────── */

export const corinthians1_13_12_tokens: SourceToken[] = [
  {
    id: '1Cor.13.12.0',
    language: 'greek',
    text: 'βλέπομεν',
    transliteration: 'blepomen',
    lemma: 'βλέπω',
    lemmaTranslit: 'blepō',
    gloss: 'we see',
    morphology: { pos: 'verb', person: '1', number: 'plural', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G991',
    position: 0,
  },
  {
    id: '1Cor.13.12.1',
    language: 'greek',
    text: 'ἐσόπτρου',
    transliteration: 'esoptrou',
    lemma: 'ἔσοπτρον',
    lemmaTranslit: 'esoptron',
    gloss: 'mirror',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'genitive' },
    strongs: 'G2072',
    position: 1,
  },
  {
    id: '1Cor.13.12.2',
    language: 'greek',
    text: 'αἰνίγματι',
    transliteration: 'ainigmati',
    lemma: 'αἴνιγμα',
    lemmaTranslit: 'ainigma',
    gloss: 'riddle/dimly',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'dative' },
    strongs: 'G135',
    position: 2,
  },
  {
    id: '1Cor.13.12.3',
    language: 'greek',
    text: 'πρόσωπον',
    transliteration: 'prosōpon',
    lemma: 'πρόσωπον',
    lemmaTranslit: 'prosōpon',
    gloss: 'face',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'accusative' },
    strongs: 'G4383',
    position: 3,
  },
  {
    id: '1Cor.13.12.4',
    language: 'greek',
    text: 'ἐπιγνώσομαι',
    transliteration: 'epignōsomai',
    lemma: 'ἐπιγινώσκω',
    lemmaTranslit: 'epiginōskō',
    gloss: 'I shall fully know',
    morphology: { pos: 'verb', person: '1', number: 'singular', tense: 'future', voice: 'middle', mood: 'indicative' },
    strongs: 'G1921',
    position: 4,
  },
];

export const corinthians1_13_12_translation: VerseTranslation = {
  verseRef: '1Cor.13.12',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "For now we see through a mirror in a riddle, but then face to face. Now I know from part, but then I shall fully know even as I was fully known.",
      spans: [
        { id: '1Cor.13.12.en.lit.0', text: 'For now we see through a mirror in a riddle,', position: 0, sourceTokenIds: ['1Cor.13.12.0', '1Cor.13.12.1', '1Cor.13.12.2'], confidence: 'high' },
        { id: '1Cor.13.12.en.lit.1', text: 'but then face to face.', position: 1, sourceTokenIds: ['1Cor.13.12.3'], confidence: 'high' },
        { id: '1Cor.13.12.en.lit.2', text: 'Now I know from part, but then I shall fully know even as I was fully known.', position: 2, sourceTokenIds: ['1Cor.13.12.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "For now we see in a mirror dimly, but then face to face. Now I know in part; then I shall know fully, even as I have been fully known.",
      spans: [
        { id: '1Cor.13.12.en.idi.0', text: 'For now we see in a mirror dimly,', position: 0, sourceTokenIds: ['1Cor.13.12.0', '1Cor.13.12.1', '1Cor.13.12.2'], confidence: 'high' },
        { id: '1Cor.13.12.en.idi.1', text: 'but then face to face.', position: 1, sourceTokenIds: ['1Cor.13.12.3'], confidence: 'high' },
        { id: '1Cor.13.12.en.idi.2', text: 'Now I know in part; then I shall know fully, even as I have been fully known.', position: 2, sourceTokenIds: ['1Cor.13.12.4'], confidence: 'high' },
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


export const corinthians1_13_12_verse = {
  ref: '1Cor.13.12',
  sourceTokens: corinthians1_13_12_tokens,
  translation: corinthians1_13_12_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 13:13 – Faith, hope, and love abide
 * ──────────────────────────────────────────────────────────── */

export const corinthians1_13_13_tokens: SourceToken[] = [
  {
    id: '1Cor.13.13.0',
    language: 'greek',
    text: 'πίστις',
    transliteration: 'pistis',
    lemma: 'πίστις',
    lemmaTranslit: 'pistis',
    gloss: 'faith',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G4102',
    position: 0,
  },
  {
    id: '1Cor.13.13.1',
    language: 'greek',
    text: 'ἐλπίς',
    transliteration: 'elpis',
    lemma: 'ἐλπίς',
    lemmaTranslit: 'elpis',
    gloss: 'hope',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G1680',
    position: 1,
  },
  {
    id: '1Cor.13.13.2',
    language: 'greek',
    text: 'ἀγάπη',
    transliteration: 'agapē',
    lemma: 'ἀγάπη',
    lemmaTranslit: 'agapē',
    gloss: 'love',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G26',
    position: 2,
  },
  {
    id: '1Cor.13.13.3',
    language: 'greek',
    text: 'τρία',
    transliteration: 'tria',
    lemma: 'τρεῖς',
    lemmaTranslit: 'treis',
    gloss: 'three',
    morphology: { pos: 'adjective', gender: 'neuter', number: 'plural', case: 'nominative' },
    strongs: 'G5140',
    position: 3,
  },
  {
    id: '1Cor.13.13.4',
    language: 'greek',
    text: 'μένει',
    transliteration: 'menei',
    lemma: 'μένω',
    lemmaTranslit: 'menō',
    gloss: 'abides',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G3306',
    position: 4,
  },
  {
    id: '1Cor.13.13.5',
    language: 'greek',
    text: 'μείζων',
    transliteration: 'meizōn',
    lemma: 'μείζων',
    lemmaTranslit: 'meizōn',
    gloss: 'greatest',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G3187',
    position: 5,
  },
];

export const corinthians1_13_13_translation: VerseTranslation = {
  verseRef: '1Cor.13.13',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "Now abides faith, hope, love, these the three; but the greatest of these is the love.",
      spans: [
        { id: '1Cor.13.13.en.lit.0', text: 'Now abides faith, hope, love,', position: 0, sourceTokenIds: ['1Cor.13.13.0', '1Cor.13.13.1', '1Cor.13.13.2', '1Cor.13.13.4'], confidence: 'high' },
        { id: '1Cor.13.13.en.lit.1', text: 'these the three;', position: 1, sourceTokenIds: ['1Cor.13.13.3'], confidence: 'high' },
        { id: '1Cor.13.13.en.lit.2', text: 'but the greatest of these is the love.', position: 2, sourceTokenIds: ['1Cor.13.13.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "So now faith, hope, and love abide, these three; but the greatest of these is love.",
      spans: [
        { id: '1Cor.13.13.en.idi.0', text: 'So now faith, hope, and love abide, these three;', position: 0, sourceTokenIds: ['1Cor.13.13.0', '1Cor.13.13.1', '1Cor.13.13.2', '1Cor.13.13.3', '1Cor.13.13.4'], confidence: 'high' },
        { id: '1Cor.13.13.en.idi.1', text: 'but the greatest of these is love.', position: 1, sourceTokenIds: ['1Cor.13.13.5'], confidence: 'high' },
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

export const corinthians1_13_13_notes: StudyNote[] = [
  { id: '1Cor.13.13.note.1', verseRef: '1Cor.13.13', sourceTokenIds: ['1Cor.13.13.0', '1Cor.13.13.1', '1Cor.13.13.2'], category: 'theological', title: "Faith, hope, and love", content: "This triad of faith (pistis), hope (elpis), and love (agapē) appears repeatedly in Paul’s letters (cf. 1 Thess 1:3; Col 1:4–5). While all three abide, love is declared \"greatest\" (meizōn) because it alone fully reflects the character of God and will persist unchanged into eternity, whereas faith will become sight and hope will be fulfilled.", confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const corinthians1_13_13_verse = {
  ref: '1Cor.13.13',
  sourceTokens: corinthians1_13_13_tokens,
  translation: corinthians1_13_13_translation,
  notes: corinthians1_13_13_notes,
};

/* ────────────────────────────────────────────────────────────
 * Export combined verses
 * ──────────────────────────────────────────────────────────── */

export const corinthians1_13_1_13_verses = [
  corinthians1_13_1_verse,
  corinthians1_13_2_verse,
  corinthians1_13_3_verse,
  corinthians1_13_4_verse,
  corinthians1_13_5_verse,
  corinthians1_13_6_verse,
  corinthians1_13_7_verse,
  corinthians1_13_8_verse,
  corinthians1_13_9_verse,
  corinthians1_13_10_verse,
  corinthians1_13_11_verse,
  corinthians1_13_12_verse,
  corinthians1_13_13_verse,
];

export default corinthians1_13_1_13_verses;
