// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 19:17 – Carrying his own cross
 * ──────────────────────────────────────────────────────────── */

export const john19_17_tokens: SourceToken[] = [
  {
    id: 'John.19.17.0',
    language: 'greek',
    text: 'βαστάζων',
    transliteration: 'bastazōn',
    lemma: 'βαστάζω',
    lemmaTranslit: 'bastazō',
    gloss: 'carrying',
    morphology: { pos: 'verb', tense: 'present', voice: 'active', mood: 'participle', case: 'nominative', number: 'singular', gender: 'masculine' },
    strongs: 'G0941',
    position: 0,
  },
  {
    id: 'John.19.17.1',
    language: 'greek',
    text: 'ἑαυτῷ',
    transliteration: 'heautō',
    lemma: 'ἑαυτοῦ',
    lemmaTranslit: 'heautou',
    gloss: 'for himself',
    morphology: { pos: 'pronoun', case: 'dative', number: 'singular', gender: 'masculine', person: '3rd' },
    strongs: 'G1438',
    position: 1,
  },
  {
    id: 'John.19.17.2',
    language: 'greek',
    text: 'τὸν',
    transliteration: 'ton',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', case: 'accusative', number: 'singular', gender: 'masculine' },
    strongs: 'G3588',
    position: 2,
  },
  {
    id: 'John.19.17.3',
    language: 'greek',
    text: 'σταυρόν',
    transliteration: 'stauron',
    lemma: 'σταυρός',
    lemmaTranslit: 'stauros',
    gloss: 'cross',
    morphology: { pos: 'noun', case: 'accusative', number: 'singular', gender: 'masculine' },
    strongs: 'G4716',
    position: 3,
  },
  {
    id: 'John.19.17.4',
    language: 'greek',
    text: 'ἐξῆλθεν',
    transliteration: 'exēlthen',
    lemma: 'ἐξέρχομαι',
    lemmaTranslit: 'exerchomai',
    gloss: 'he went out',
    morphology: { pos: 'verb', tense: 'aorist', voice: 'active', mood: 'indicative', person: '3rd', number: 'singular' },
    strongs: 'G1831',
    position: 4,
  },
];

export const john19_17_translation: VerseTranslation = {
  verseRef: 'John.19.17',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Carrying for himself the cross, he went out',
      spans: [
        { sourceIds: ['John.19.17.0'], targetText: 'Carrying', confidence: 'high' },
        { sourceIds: ['John.19.17.1'], targetText: 'for himself', confidence: 'high' },
        { sourceIds: ['John.19.17.2', 'John.19.17.3'], targetText: 'the cross', confidence: 'high' },
        { sourceIds: ['John.19.17.4'], targetText: 'he went out', confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'He went out, carrying his own cross',
      spans: [
        { sourceIds: ['John.19.17.4'], targetText: 'He went out', confidence: 'high' },
        { sourceIds: ['John.19.17.0', 'John.19.17.1'], targetText: 'carrying his own', confidence: 'high' },
        { sourceIds: ['John.19.17.2', 'John.19.17.3'], targetText: 'cross', confidence: 'high' },
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

export const john19_17_verse = {
  ref: 'John.19.17',
  sourceTokens: john19_17_tokens,
  translation: john19_17_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 19:19 – The inscription: Jesus of Nazareth, King of the Jews
 * ──────────────────────────────────────────────────────────── */

export const john19_19_tokens: SourceToken[] = [
  {
    id: 'John.19.19.0',
    language: 'greek',
    text: 'Ἰησοῦς',
    transliteration: 'Iēsous',
    lemma: 'Ἰησοῦς',
    lemmaTranslit: 'Iēsous',
    gloss: 'Jesus',
    morphology: { pos: 'noun', case: 'nominative', number: 'singular', gender: 'masculine' },
    strongs: 'G2424',
    position: 0,
  },
  {
    id: 'John.19.19.1',
    language: 'greek',
    text: 'ὁ',
    transliteration: 'ho',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', case: 'nominative', number: 'singular', gender: 'masculine' },
    strongs: 'G3588',
    position: 1,
  },
  {
    id: 'John.19.19.2',
    language: 'greek',
    text: 'Ναζωραῖος',
    transliteration: 'Nazōraios',
    lemma: 'Ναζωραῖος',
    lemmaTranslit: 'Nazōraios',
    gloss: 'Nazarene',
    morphology: { pos: 'adjective', case: 'nominative', number: 'singular', gender: 'masculine' },
    strongs: 'G3480',
    position: 2,
  },
  {
    id: 'John.19.19.3',
    language: 'greek',
    text: 'ὁ',
    transliteration: 'ho',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', case: 'nominative', number: 'singular', gender: 'masculine' },
    strongs: 'G3588',
    position: 3,
  },
  {
    id: 'John.19.19.4',
    language: 'greek',
    text: 'βασιλεὺς',
    transliteration: 'basileus',
    lemma: 'βασιλεύς',
    lemmaTranslit: 'basileus',
    gloss: 'king',
    morphology: { pos: 'noun', case: 'nominative', number: 'singular', gender: 'masculine' },
    strongs: 'G0935',
    position: 4,
  },
  {
    id: 'John.19.19.5',
    language: 'greek',
    text: 'τῶν',
    transliteration: 'tōn',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'of the',
    morphology: { pos: 'article', case: 'genitive', number: 'plural', gender: 'masculine' },
    strongs: 'G3588',
    position: 5,
  },
  {
    id: 'John.19.19.6',
    language: 'greek',
    text: 'Ἰουδαίων',
    transliteration: 'Ioudaiōn',
    lemma: 'Ἰουδαῖος',
    lemmaTranslit: 'Ioudaios',
    gloss: 'Jews',
    morphology: { pos: 'adjective', case: 'genitive', number: 'plural', gender: 'masculine' },
    strongs: 'G2453',
    position: 6,
  },
];

export const john19_19_translation: VerseTranslation = {
  verseRef: 'John.19.19',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Jesus the Nazarene, the King of the Jews',
      spans: [
        { sourceIds: ['John.19.19.0'], targetText: 'Jesus', confidence: 'high' },
        { sourceIds: ['John.19.19.1', 'John.19.19.2'], targetText: 'the Nazarene', confidence: 'high' },
        { sourceIds: ['John.19.19.3', 'John.19.19.4'], targetText: 'the King', confidence: 'high' },
        { sourceIds: ['John.19.19.5', 'John.19.19.6'], targetText: 'of the Jews', confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Jesus of Nazareth, the King of the Jews',
      spans: [
        { sourceIds: ['John.19.19.0'], targetText: 'Jesus', confidence: 'high' },
        { sourceIds: ['John.19.19.1', 'John.19.19.2'], targetText: 'of Nazareth', confidence: 'high' },
        { sourceIds: ['John.19.19.3', 'John.19.19.4'], targetText: 'the King', confidence: 'high' },
        { sourceIds: ['John.19.19.5', 'John.19.19.6'], targetText: 'of the Jews', confidence: 'high' },
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

export const john19_19_verse = {
  ref: 'John.19.19',
  sourceTokens: john19_19_tokens,
  translation: john19_19_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 19:26 – Woman, behold your son
 * ──────────────────────────────────────────────────────────── */

export const john19_26_tokens: SourceToken[] = [
  {
    id: 'John.19.26.0',
    language: 'greek',
    text: 'γύναι',
    transliteration: 'gunai',
    lemma: 'γυνή',
    lemmaTranslit: 'gunē',
    gloss: 'woman',
    morphology: { pos: 'noun', case: 'vocative', number: 'singular', gender: 'feminine' },
    strongs: 'G1135',
    position: 0,
  },
  {
    id: 'John.19.26.1',
    language: 'greek',
    text: 'ἴδε',
    transliteration: 'ide',
    lemma: 'ἴδε',
    lemmaTranslit: 'ide',
    gloss: 'behold',
    morphology: { pos: 'interjection' },
    strongs: 'G2396',
    position: 1,
  },
  {
    id: 'John.19.26.2',
    language: 'greek',
    text: 'ὁ',
    transliteration: 'ho',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', case: 'nominative', number: 'singular', gender: 'masculine' },
    strongs: 'G3588',
    position: 2,
  },
  {
    id: 'John.19.26.3',
    language: 'greek',
    text: 'υἱός',
    transliteration: 'huios',
    lemma: 'υἱός',
    lemmaTranslit: 'huios',
    gloss: 'son',
    morphology: { pos: 'noun', case: 'nominative', number: 'singular', gender: 'masculine' },
    strongs: 'G5207',
    position: 3,
  },
  {
    id: 'John.19.26.4',
    language: 'greek',
    text: 'σου',
    transliteration: 'sou',
    lemma: 'σύ',
    lemmaTranslit: 'su',
    gloss: 'your',
    morphology: { pos: 'pronoun', case: 'genitive', number: 'singular', person: '2nd' },
    strongs: 'G4771',
    position: 4,
  },
];

export const john19_26_translation: VerseTranslation = {
  verseRef: 'John.19.26',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Woman, behold the son of you',
      spans: [
        { sourceIds: ['John.19.26.0'], targetText: 'Woman', confidence: 'high' },
        { sourceIds: ['John.19.26.1'], targetText: 'behold', confidence: 'high' },
        { sourceIds: ['John.19.26.2', 'John.19.26.3'], targetText: 'the son', confidence: 'high' },
        { sourceIds: ['John.19.26.4'], targetText: 'of you', confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Woman, here is your son',
      spans: [
        { sourceIds: ['John.19.26.0'], targetText: 'Woman', confidence: 'high' },
        { sourceIds: ['John.19.26.1'], targetText: 'here is', confidence: 'high' },
        { sourceIds: ['John.19.26.4', 'John.19.26.2', 'John.19.26.3'], targetText: 'your son', confidence: 'high' },
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

export const john19_26_verse = {
  ref: 'John.19.26',
  sourceTokens: john19_26_tokens,
  translation: john19_26_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 19:28 – I thirst
 * ──────────────────────────────────────────────────────────── */

export const john19_28_tokens: SourceToken[] = [
  {
    id: 'John.19.28.0',
    language: 'greek',
    text: 'εἰδὼς',
    transliteration: 'eidōs',
    lemma: 'οἶδα',
    lemmaTranslit: 'oida',
    gloss: 'knowing',
    morphology: { pos: 'verb', tense: 'perfect', voice: 'active', mood: 'participle', case: 'nominative', number: 'singular', gender: 'masculine' },
    strongs: 'G1492',
    position: 0,
  },
  {
    id: 'John.19.28.1',
    language: 'greek',
    text: 'πάντα',
    transliteration: 'panta',
    lemma: 'πᾶς',
    lemmaTranslit: 'pas',
    gloss: 'all things',
    morphology: { pos: 'adjective', case: 'accusative', number: 'plural', gender: 'neuter' },
    strongs: 'G3956',
    position: 1,
  },
  {
    id: 'John.19.28.2',
    language: 'greek',
    text: 'τετέλεσται',
    transliteration: 'tetelestai',
    lemma: 'τελέω',
    lemmaTranslit: 'teleō',
    gloss: 'has been finished',
    morphology: { pos: 'verb', tense: 'perfect', voice: 'passive', mood: 'indicative', person: '3rd', number: 'singular' },
    strongs: 'G5055',
    position: 2,
  },
  {
    id: 'John.19.28.3',
    language: 'greek',
    text: 'λέγει',
    transliteration: 'legei',
    lemma: 'λέγω',
    lemmaTranslit: 'legō',
    gloss: 'he says',
    morphology: { pos: 'verb', tense: 'present', voice: 'active', mood: 'indicative', person: '3rd', number: 'singular' },
    strongs: 'G3004',
    position: 3,
  },
  {
    id: 'John.19.28.4',
    language: 'greek',
    text: 'Διψῶ',
    transliteration: 'Dipsō',
    lemma: 'διψάω',
    lemmaTranslit: 'dipsaō',
    gloss: 'I thirst',
    morphology: { pos: 'verb', tense: 'present', voice: 'active', mood: 'indicative', person: '1st', number: 'singular' },
    strongs: 'G1372',
    position: 4,
  },
];

export const john19_28_translation: VerseTranslation = {
  verseRef: 'John.19.28',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Knowing that all things have been finished, he says, I thirst',
      spans: [
        { sourceIds: ['John.19.28.0'], targetText: 'Knowing', confidence: 'high' },
        { sourceIds: ['John.19.28.1'], targetText: 'that all things', confidence: 'high' },
        { sourceIds: ['John.19.28.2'], targetText: 'have been finished', confidence: 'high' },
        { sourceIds: ['John.19.28.3'], targetText: 'he says', confidence: 'high' },
        { sourceIds: ['John.19.28.4'], targetText: 'I thirst', confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Knowing that all was now completed, he said, I am thirsty',
      spans: [
        { sourceIds: ['John.19.28.0'], targetText: 'Knowing', confidence: 'high' },
        { sourceIds: ['John.19.28.1', 'John.19.28.2'], targetText: 'that all was now completed', confidence: 'high' },
        { sourceIds: ['John.19.28.3'], targetText: 'he said', confidence: 'high' },
        { sourceIds: ['John.19.28.4'], targetText: 'I am thirsty', confidence: 'high' },
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

export const john19_28_verse = {
  ref: 'John.19.28',
  sourceTokens: john19_28_tokens,
  translation: john19_28_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 19:30 – It is finished
 * ──────────────────────────────────────────────────────────── */

export const john19_30_tokens: SourceToken[] = [
  {
    id: 'John.19.30.0',
    language: 'greek',
    text: 'εἶπεν',
    transliteration: 'eipen',
    lemma: 'εἶπον',
    lemmaTranslit: 'eipon',
    gloss: 'he said',
    morphology: { pos: 'verb', tense: 'aorist', voice: 'active', mood: 'indicative', person: '3rd', number: 'singular' },
    strongs: 'G2036',
    position: 0,
  },
  {
    id: 'John.19.30.1',
    language: 'greek',
    text: 'τετέλεσται',
    transliteration: 'tetelestai',
    lemma: 'τελέω',
    lemmaTranslit: 'teleō',
    gloss: 'it is finished',
    morphology: { pos: 'verb', tense: 'perfect', voice: 'passive', mood: 'indicative', person: '3rd', number: 'singular' },
    strongs: 'G5055',
    position: 1,
  },
  {
    id: 'John.19.30.2',
    language: 'greek',
    text: 'παρέδωκεν',
    transliteration: 'paredōken',
    lemma: 'παραδίδωμι',
    lemmaTranslit: 'paradidōmi',
    gloss: 'he gave up',
    morphology: { pos: 'verb', tense: 'aorist', voice: 'active', mood: 'indicative', person: '3rd', number: 'singular' },
    strongs: 'G3860',
    position: 2,
  },
  {
    id: 'John.19.30.3',
    language: 'greek',
    text: 'τὸ',
    transliteration: 'to',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', case: 'accusative', number: 'singular', gender: 'neuter' },
    strongs: 'G3588',
    position: 3,
  },
  {
    id: 'John.19.30.4',
    language: 'greek',
    text: 'πνεῦμα',
    transliteration: 'pneuma',
    lemma: 'πνεῦμα',
    lemmaTranslit: 'pneuma',
    gloss: 'spirit',
    morphology: { pos: 'noun', case: 'accusative', number: 'singular', gender: 'neuter' },
    strongs: 'G4151',
    position: 4,
  },
];

export const john19_30_translation: VerseTranslation = {
  verseRef: 'John.19.30',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'He said, It is finished, and he gave over the spirit',
      spans: [
        { sourceIds: ['John.19.30.0'], targetText: 'He said', confidence: 'high' },
        { sourceIds: ['John.19.30.1'], targetText: 'It is finished', confidence: 'high' },
        { sourceIds: ['John.19.30.2'], targetText: 'and he gave over', confidence: 'high' },
        { sourceIds: ['John.19.30.3', 'John.19.30.4'], targetText: 'the spirit', confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "It is finished. And he bowed his head and gave up his spirit",
      spans: [
        { sourceIds: ['John.19.30.0', 'John.19.30.1'], targetText: 'It is finished', confidence: 'high' },
        { sourceIds: ['John.19.30.2'], targetText: 'And he bowed his head and gave up', confidence: 'high' },
        { sourceIds: ['John.19.30.3', 'John.19.30.4'], targetText: 'his spirit', confidence: 'high' },
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

export const john19_30_verse = {
  ref: 'John.19.30',
  sourceTokens: john19_30_tokens,
  translation: john19_30_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 19:34 – The piercing: blood and water
 * ──────────────────────────────────────────────────────────── */

export const john19_34_tokens: SourceToken[] = [
  {
    id: 'John.19.34.0',
    language: 'greek',
    text: 'λόγχῃ',
    transliteration: 'lonchē',
    lemma: 'λόγχη',
    lemmaTranslit: 'lonchē',
    gloss: 'with a spear',
    morphology: { pos: 'noun', case: 'dative', number: 'singular', gender: 'feminine' },
    strongs: 'G3057',
    position: 0,
  },
  {
    id: 'John.19.34.1',
    language: 'greek',
    text: 'αὐτοῦ',
    transliteration: 'autou',
    lemma: 'αὐτός',
    lemmaTranslit: 'autos',
    gloss: 'his',
    morphology: { pos: 'pronoun', case: 'genitive', number: 'singular', gender: 'masculine', person: '3rd' },
    strongs: 'G0846',
    position: 1,
  },
  {
    id: 'John.19.34.2',
    language: 'greek',
    text: 'τὴν',
    transliteration: 'tēn',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', case: 'accusative', number: 'singular', gender: 'feminine' },
    strongs: 'G3588',
    position: 2,
  },
  {
    id: 'John.19.34.3',
    language: 'greek',
    text: 'πλευρὰν',
    transliteration: 'pleuran',
    lemma: 'πλευρά',
    lemmaTranslit: 'pleura',
    gloss: 'side',
    morphology: { pos: 'noun', case: 'accusative', number: 'singular', gender: 'feminine' },
    strongs: 'G4125',
    position: 3,
  },
  {
    id: 'John.19.34.4',
    language: 'greek',
    text: 'ἔνυξεν',
    transliteration: 'enyxen',
    lemma: 'νύσσω',
    lemmaTranslit: 'nyssō',
    gloss: 'pierced',
    morphology: { pos: 'verb', tense: 'aorist', voice: 'active', mood: 'indicative', person: '3rd', number: 'singular' },
    strongs: 'G3572',
    position: 4,
  },
  {
    id: 'John.19.34.5',
    language: 'greek',
    text: 'αἷμα',
    transliteration: 'haima',
    lemma: 'αἷμα',
    lemmaTranslit: 'haima',
    gloss: 'blood',
    morphology: { pos: 'noun', case: 'nominative', number: 'singular', gender: 'neuter' },
    strongs: 'G0129',
    position: 5,
  },
  {
    id: 'John.19.34.6',
    language: 'greek',
    text: 'καὶ',
    transliteration: 'kai',
    lemma: 'καί',
    lemmaTranslit: 'kai',
    gloss: 'and',
    morphology: { pos: 'conjunction' },
    strongs: 'G2532',
    position: 6,
  },
  {
    id: 'John.19.34.7',
    language: 'greek',
    text: 'ὕδωρ',
    transliteration: 'hudōr',
    lemma: 'ὕδωρ',
    lemmaTranslit: 'hudōr',
    gloss: 'water',
    morphology: { pos: 'noun', case: 'nominative', number: 'singular', gender: 'neuter' },
    strongs: 'G5204',
    position: 7,
  },
];

export const john19_34_translation: VerseTranslation = {
  verseRef: 'John.19.34',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'With a spear his side he pierced, and blood and water came out',
      spans: [
        { sourceIds: ['John.19.34.0'], targetText: 'With a spear', confidence: 'high' },
        { sourceIds: ['John.19.34.1', 'John.19.34.2', 'John.19.34.3'], targetText: 'his side', confidence: 'high' },
        { sourceIds: ['John.19.34.4'], targetText: 'he pierced', confidence: 'high' },
        { sourceIds: ['John.19.34.5'], targetText: 'and blood', confidence: 'high' },
        { sourceIds: ['John.19.34.6'], targetText: 'and', confidence: 'high' },
        { sourceIds: ['John.19.34.7'], targetText: 'water came out', confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'One of the soldiers pierced his side with a spear, and at once blood and water flowed out',
      spans: [
        { sourceIds: ['John.19.34.0'], targetText: 'with a spear', confidence: 'high' },
        { sourceIds: ['John.19.34.4'], targetText: 'One of the soldiers pierced', confidence: 'high' },
        { sourceIds: ['John.19.34.1', 'John.19.34.2', 'John.19.34.3'], targetText: 'his side', confidence: 'high' },
        { sourceIds: ['John.19.34.5'], targetText: 'and at once blood', confidence: 'high' },
        { sourceIds: ['John.19.34.6'], targetText: 'and', confidence: 'high' },
        { sourceIds: ['John.19.34.7'], targetText: 'water flowed out', confidence: 'high' },
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

export const john19_34_verse = {
  ref: 'John.19.34',
  sourceTokens: john19_34_tokens,
  translation: john19_34_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export – John 19:16-42 (Crucifixion narrative)
 * ──────────────────────────────────────────────────────────── */

export const john19_16_42_verses = [
  john19_17_verse,
  john19_19_verse,
  john19_26_verse,
  john19_28_verse,
  john19_30_verse,
  john19_34_verse,
];

export default john19_16_42_verses;
