/**
 * Sample data for John 1:1-5, 18 (Greek)
 * Source: SBLGNT (Society of Biblical Literature Greek New Testament) - CC BY 4.0
 */

import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';
import { extendedJohnVerses } from './sample-john-extended';

// John 1:1 Source Tokens
export const john1_1_tokens: SourceToken[] = [
  {
    id: 'John.1.1.0',
    language: 'greek',
    text: 'Ἐν',
    transliteration: 'En',
    lemma: 'ἐν',
    lemmaTranslit: 'en',
    gloss: 'In',
    morphology: { pos: 'preposition', rawCode: 'P' },
    strongs: 'G1722',
    position: 0,
  },
  {
    id: 'John.1.1.1',
    language: 'greek',
    text: 'ἀρχῇ',
    transliteration: 'archē',
    lemma: 'ἀρχή',
    lemmaTranslit: 'archē',
    gloss: 'beginning',
    glossExtended: 'beginning, origin, first principle',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'dative', rawCode: 'N-DSF' },
    strongs: 'G746',
    position: 1,
    lexiconRefs: [{ lexicon: 'strongs', entryId: 'G746' }],
  },
  {
    id: 'John.1.1.2',
    language: 'greek',
    text: 'ἦν',
    transliteration: 'ēn',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'was',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'imperfect', voice: 'active', mood: 'indicative', rawCode: 'V-IAI-3S' },
    strongs: 'G1510',
    position: 2,
  },
  {
    id: 'John.1.1.3',
    language: 'greek',
    text: 'ὁ',
    transliteration: 'ho',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'nominative', rawCode: 'T-NSM' },
    strongs: 'G3588',
    position: 3,
  },
  {
    id: 'John.1.1.4',
    language: 'greek',
    text: 'λόγος',
    transliteration: 'logos',
    lemma: 'λόγος',
    lemmaTranslit: 'logos',
    gloss: 'Word',
    glossExtended: 'word, reason, speech, account, divine Word',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative', rawCode: 'N-NSM' },
    strongs: 'G3056',
    position: 4,
    lexiconRefs: [{ lexicon: 'strongs', entryId: 'G3056' }, { lexicon: 'bdag', entryId: 'λόγος' }],
  },
  {
    id: 'John.1.1.5',
    language: 'greek',
    text: 'καὶ',
    transliteration: 'kai',
    lemma: 'καί',
    lemmaTranslit: 'kai',
    gloss: 'and',
    morphology: { pos: 'conjunction', rawCode: 'CONJ' },
    strongs: 'G2532',
    position: 5,
  },
  {
    id: 'John.1.1.6',
    language: 'greek',
    text: 'ὁ',
    transliteration: 'ho',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'nominative', rawCode: 'T-NSM' },
    strongs: 'G3588',
    position: 6,
  },
  {
    id: 'John.1.1.7',
    language: 'greek',
    text: 'λόγος',
    transliteration: 'logos',
    lemma: 'λόγος',
    lemmaTranslit: 'logos',
    gloss: 'Word',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative', rawCode: 'N-NSM' },
    strongs: 'G3056',
    position: 7,
  },
  {
    id: 'John.1.1.8',
    language: 'greek',
    text: 'ἦν',
    transliteration: 'ēn',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'was',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'imperfect', voice: 'active', mood: 'indicative', rawCode: 'V-IAI-3S' },
    strongs: 'G1510',
    position: 8,
  },
  {
    id: 'John.1.1.9',
    language: 'greek',
    text: 'πρὸς',
    transliteration: 'pros',
    lemma: 'πρός',
    lemmaTranslit: 'pros',
    gloss: 'with',
    glossExtended: 'to, toward, with (face-to-face relationship)',
    morphology: { pos: 'preposition', rawCode: 'PREP' },
    strongs: 'G4314',
    position: 9,
  },
  {
    id: 'John.1.1.10',
    language: 'greek',
    text: 'τὸν',
    transliteration: 'ton',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'accusative', rawCode: 'T-ASM' },
    strongs: 'G3588',
    position: 10,
  },
  {
    id: 'John.1.1.11',
    language: 'greek',
    text: 'θεόν',
    transliteration: 'theon',
    lemma: 'θεός',
    lemmaTranslit: 'theos',
    gloss: 'God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'accusative', rawCode: 'N-ASM' },
    strongs: 'G2316',
    position: 11,
    lexiconRefs: [{ lexicon: 'strongs', entryId: 'G2316' }],
  },
  {
    id: 'John.1.1.12',
    language: 'greek',
    text: 'καὶ',
    transliteration: 'kai',
    lemma: 'καί',
    lemmaTranslit: 'kai',
    gloss: 'and',
    morphology: { pos: 'conjunction', rawCode: 'CONJ' },
    strongs: 'G2532',
    position: 12,
  },
  {
    id: 'John.1.1.13',
    language: 'greek',
    text: 'θεὸς',
    transliteration: 'theos',
    lemma: 'θεός',
    lemmaTranslit: 'theos',
    gloss: 'God',
    glossExtended: 'God, divine (anarthrous - without article)',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative', rawCode: 'N-NSM' },
    strongs: 'G2316',
    position: 13,
  },
  {
    id: 'John.1.1.14',
    language: 'greek',
    text: 'ἦν',
    transliteration: 'ēn',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'was',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'imperfect', voice: 'active', mood: 'indicative', rawCode: 'V-IAI-3S' },
    strongs: 'G1510',
    position: 14,
  },
  {
    id: 'John.1.1.15',
    language: 'greek',
    text: 'ὁ',
    transliteration: 'ho',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'nominative', rawCode: 'T-NSM' },
    strongs: 'G3588',
    position: 15,
  },
  {
    id: 'John.1.1.16',
    language: 'greek',
    text: 'λόγος',
    transliteration: 'logos',
    lemma: 'λόγος',
    lemmaTranslit: 'logos',
    gloss: 'Word',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative', rawCode: 'N-NSM' },
    strongs: 'G3056',
    position: 16,
  },
];

// John 1:2 Source Tokens
export const john1_2_tokens: SourceToken[] = [
  {
    id: 'John.1.2.0',
    language: 'greek',
    text: 'οὗτος',
    transliteration: 'houtos',
    lemma: 'οὗτος',
    lemmaTranslit: 'houtos',
    gloss: 'This one',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'singular', case: 'nominative', rawCode: 'D-NSM' },
    strongs: 'G3778',
    position: 0,
  },
  {
    id: 'John.1.2.1',
    language: 'greek',
    text: 'ἦν',
    transliteration: 'ēn',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'was',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'imperfect', voice: 'active', mood: 'indicative', rawCode: 'V-IAI-3S' },
    strongs: 'G1510',
    position: 1,
  },
  {
    id: 'John.1.2.2',
    language: 'greek',
    text: 'ἐν',
    transliteration: 'en',
    lemma: 'ἐν',
    lemmaTranslit: 'en',
    gloss: 'in',
    morphology: { pos: 'preposition', rawCode: 'PREP' },
    strongs: 'G1722',
    position: 2,
  },
  {
    id: 'John.1.2.3',
    language: 'greek',
    text: 'ἀρχῇ',
    transliteration: 'archē',
    lemma: 'ἀρχή',
    lemmaTranslit: 'archē',
    gloss: 'beginning',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'dative', rawCode: 'N-DSF' },
    strongs: 'G746',
    position: 3,
  },
  {
    id: 'John.1.2.4',
    language: 'greek',
    text: 'πρὸς',
    transliteration: 'pros',
    lemma: 'πρός',
    lemmaTranslit: 'pros',
    gloss: 'with',
    morphology: { pos: 'preposition', rawCode: 'PREP' },
    strongs: 'G4314',
    position: 4,
  },
  {
    id: 'John.1.2.5',
    language: 'greek',
    text: 'τὸν',
    transliteration: 'ton',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'accusative', rawCode: 'T-ASM' },
    strongs: 'G3588',
    position: 5,
  },
  {
    id: 'John.1.2.6',
    language: 'greek',
    text: 'θεόν',
    transliteration: 'theon',
    lemma: 'θεός',
    lemmaTranslit: 'theos',
    gloss: 'God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'accusative', rawCode: 'N-ASM' },
    strongs: 'G2316',
    position: 6,
  },
];

// John 1:3 Source Tokens
export const john1_3_tokens: SourceToken[] = [
  {
    id: 'John.1.3.0',
    language: 'greek',
    text: 'πάντα',
    transliteration: 'panta',
    lemma: 'πᾶς',
    lemmaTranslit: 'pas',
    gloss: 'All things',
    morphology: { pos: 'adjective', gender: 'neuter', number: 'plural', case: 'nominative', rawCode: 'A-NPN' },
    strongs: 'G3956',
    position: 0,
  },
  {
    id: 'John.1.3.1',
    language: 'greek',
    text: "δι'",
    transliteration: "di'",
    lemma: 'διά',
    lemmaTranslit: 'dia',
    gloss: 'through',
    morphology: { pos: 'preposition', rawCode: 'PREP' },
    strongs: 'G1223',
    position: 1,
  },
  {
    id: 'John.1.3.2',
    language: 'greek',
    text: 'αὐτοῦ',
    transliteration: 'autou',
    lemma: 'αὐτός',
    lemmaTranslit: 'autos',
    gloss: 'him',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'singular', case: 'genitive', rawCode: 'P-GSM' },
    strongs: 'G846',
    position: 2,
  },
  {
    id: 'John.1.3.3',
    language: 'greek',
    text: 'ἐγένετο',
    transliteration: 'egeneto',
    lemma: 'γίνομαι',
    lemmaTranslit: 'ginomai',
    gloss: 'came into being',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'middle', mood: 'indicative', rawCode: 'V-2ADI-3S' },
    strongs: 'G1096',
    position: 3,
  },
  {
    id: 'John.1.3.4',
    language: 'greek',
    text: 'καὶ',
    transliteration: 'kai',
    lemma: 'καί',
    lemmaTranslit: 'kai',
    gloss: 'and',
    morphology: { pos: 'conjunction', rawCode: 'CONJ' },
    strongs: 'G2532',
    position: 4,
  },
  {
    id: 'John.1.3.5',
    language: 'greek',
    text: 'χωρὶς',
    transliteration: 'chōris',
    lemma: 'χωρίς',
    lemmaTranslit: 'chōris',
    gloss: 'apart from',
    morphology: { pos: 'preposition', rawCode: 'PREP' },
    strongs: 'G5565',
    position: 5,
  },
  {
    id: 'John.1.3.6',
    language: 'greek',
    text: 'αὐτοῦ',
    transliteration: 'autou',
    lemma: 'αὐτός',
    lemmaTranslit: 'autos',
    gloss: 'him',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'singular', case: 'genitive', rawCode: 'P-GSM' },
    strongs: 'G846',
    position: 6,
  },
  {
    id: 'John.1.3.7',
    language: 'greek',
    text: 'ἐγένετο',
    transliteration: 'egeneto',
    lemma: 'γίνομαι',
    lemmaTranslit: 'ginomai',
    gloss: 'came into being',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'middle', mood: 'indicative', rawCode: 'V-2ADI-3S' },
    strongs: 'G1096',
    position: 7,
  },
  {
    id: 'John.1.3.8',
    language: 'greek',
    text: 'οὐδὲ',
    transliteration: 'oude',
    lemma: 'οὐδέ',
    lemmaTranslit: 'oude',
    gloss: 'not even',
    morphology: { pos: 'adverb', rawCode: 'ADV' },
    strongs: 'G3761',
    position: 8,
  },
  {
    id: 'John.1.3.9',
    language: 'greek',
    text: 'ἕν',
    transliteration: 'hen',
    lemma: 'εἷς',
    lemmaTranslit: 'heis',
    gloss: 'one thing',
    morphology: { pos: 'numeral', gender: 'neuter', number: 'singular', case: 'nominative', rawCode: 'A-NSN' },
    strongs: 'G1520',
    position: 9,
  },
];

// Translation for John 1:1
export const john1_1_translation: VerseTranslation = {
  verseRef: 'John.1.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'In beginning was the Word, and the Word was with the God, and God was the Word.',
      spans: [
        { id: 'John.1.1.en.lit.0', text: 'In beginning', position: 0, sourceTokenIds: ['John.1.1.0', 'John.1.1.1'], confidence: 'high' },
        { id: 'John.1.1.en.lit.1', text: 'was', position: 1, sourceTokenIds: ['John.1.1.2'], confidence: 'high' },
        { id: 'John.1.1.en.lit.2', text: 'the Word,', position: 2, sourceTokenIds: ['John.1.1.3', 'John.1.1.4'], confidence: 'high' },
        { id: 'John.1.1.en.lit.3', text: 'and the Word was', position: 3, sourceTokenIds: ['John.1.1.5', 'John.1.1.6', 'John.1.1.7', 'John.1.1.8'], confidence: 'high' },
        { id: 'John.1.1.en.lit.4', text: 'with the God,', position: 4, sourceTokenIds: ['John.1.1.9', 'John.1.1.10', 'John.1.1.11'], confidence: 'high' },
        { id: 'John.1.1.en.lit.5', text: 'and God was', position: 5, sourceTokenIds: ['John.1.1.12', 'John.1.1.13', 'John.1.1.14'], confidence: 'medium', alternatives: [{ text: 'and the Word was divine', reason: 'Qualitative predicate nominative' }] },
        { id: 'John.1.1.en.lit.6', text: 'the Word.', position: 6, sourceTokenIds: ['John.1.1.15', 'John.1.1.16'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'In the beginning was the Word, and the Word was with God, and the Word was God.',
      spans: [
        { id: 'John.1.1.en.idi.0', text: 'In the beginning was the Word,', position: 0, sourceTokenIds: ['John.1.1.0', 'John.1.1.1', 'John.1.1.2', 'John.1.1.3', 'John.1.1.4'], confidence: 'high' },
        { id: 'John.1.1.en.idi.1', text: 'and the Word was with God,', position: 1, sourceTokenIds: ['John.1.1.5', 'John.1.1.6', 'John.1.1.7', 'John.1.1.8', 'John.1.1.9', 'John.1.1.10', 'John.1.1.11'], confidence: 'high' },
        { id: 'John.1.1.en.idi.2', text: 'and the Word was God.', position: 2, sourceTokenIds: ['John.1.1.12', 'John.1.1.13', 'John.1.1.14', 'John.1.1.15', 'John.1.1.16'], confidence: 'medium' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    literary: {
      type: 'literary',
      targetLanguage: 'en',
      text: 'In the beginning was the Word—the Word present with God, the Word himself divine.',
      spans: [
        { id: 'John.1.1.en.lit2.0', text: 'In the beginning was the Word—', position: 0, sourceTokenIds: ['John.1.1.0', 'John.1.1.1', 'John.1.1.2', 'John.1.1.3', 'John.1.1.4'], confidence: 'high' },
        { id: 'John.1.1.en.lit2.1', text: 'the Word present with God,', position: 1, sourceTokenIds: ['John.1.1.5', 'John.1.1.6', 'John.1.1.7', 'John.1.1.8', 'John.1.1.9', 'John.1.1.10', 'John.1.1.11'], confidence: 'high' },
        { id: 'John.1.1.en.lit2.2', text: 'the Word himself divine.', position: 2, sourceTokenIds: ['John.1.1.12', 'John.1.1.13', 'John.1.1.14', 'John.1.1.15', 'John.1.1.16'], confidence: 'medium' },
      ],
      overallConfidence: 'medium',
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

// Study notes for John 1:1
export const john1_1_notes: StudyNote[] = [
  {
    id: 'John.1.1.note.1',
    verseRef: 'John.1.1',
    sourceTokenIds: ['John.1.1.4', 'John.1.1.7', 'John.1.1.16'],
    category: 'lexical',
    title: 'λόγος (logos) - The Word',
    content: `The Greek word λόγος (logos) carries rich philosophical and theological meaning:

**Greek Philosophy**: In Greek thought, logos meant reason, logic, or the rational principle governing the cosmos. Heraclitus used it for the cosmic order; the Stoics saw it as divine reason permeating all things.

**Jewish Background**: The Hebrew דָּבָר (dabar, "word") was God's creative and powerful word. The Aramaic מֵימְרָא (memra) in the Targums was used as a circumlocution for God's action.

**John's Usage**: John identifies the Logos with Jesus Christ, combining:
- The creative power of God's word (cf. Gen 1)
- The wisdom tradition (Prov 8; Wis 7-9)
- Greek philosophical concepts his audience would know

The choice of logos allowed John to communicate with both Jewish and Greek readers.`,
    confidence: 'high',
    authorType: 'ai',
    metadata: { generatedAt: new Date().toISOString() },
  },
  {
    id: 'John.1.1.note.2',
    verseRef: 'John.1.1',
    sourceTokenIds: ['John.1.1.13'],
    category: 'translation-choice',
    title: 'θεὸς ἦν ὁ λόγος - Anarthrous θεός',
    content: `The final clause presents a famous translation challenge: καὶ θεὸς ἦν ὁ λόγος (kai theos ēn ho logos).

**The Issue**: θεός (theos, "God") lacks the definite article here, while ὁ λόγος (ho logos, "the Word") has it.

**Translation Options**:
1. "The Word was God" - Traditional rendering, treating θεός as a predicate nominative equating Word and God
2. "The Word was divine" - Treating anarthrous θεός as qualitative, emphasizing nature rather than identity
3. "The Word was a god" - Treating it as indefinite (rejected by most scholars as grammatically and contextually unlikely)

**Grammar Note**: In a construction with a predicate nominative and linking verb, the subject takes the article and the predicate does not. The anarthrous θεός is likely qualitative: the Word shares the divine nature.

Most scholars see John asserting both that the Word is distinct from the Father ("with God") and shares fully in the divine nature ("was God").`,
    confidence: 'high',
    isContested: true,
    positions: [
      { name: 'Definite/Identity', description: 'The Word = God (traditional)' },
      { name: 'Qualitative', description: 'The Word is divine in nature' },
    ],
    authorType: 'ai',
    metadata: { generatedAt: new Date().toISOString() },
  },
  {
    id: 'John.1.1.note.3',
    verseRef: 'John.1.1',
    sourceTokenIds: ['John.1.1.9'],
    category: 'lexical',
    title: 'πρός with Accusative - Face-to-Face Relationship',
    content: `The preposition πρός (pros) with the accusative typically means "to" or "toward," but here suggests a face-to-face relationship.

This is significant because it implies:
- Personal distinction between the Word and God
- Close fellowship and communion
- The Word was not merely "with" God as an attribute, but in personal relationship

This nuance supports the later Trinitarian understanding of distinct persons within the Godhead.`,
    confidence: 'high',
    authorType: 'ai',
    metadata: { generatedAt: new Date().toISOString() },
  },
];

// John 1:18 Source Tokens - Famous textual variant location
export const john1_18_tokens: SourceToken[] = [
  {
    id: 'John.1.18.0',
    language: 'greek',
    text: 'θεὸν',
    transliteration: 'theon',
    lemma: 'θεός',
    lemmaTranslit: 'theos',
    gloss: 'God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'accusative', rawCode: 'N-ASM' },
    strongs: 'G2316',
    position: 0,
  },
  {
    id: 'John.1.18.1',
    language: 'greek',
    text: 'οὐδεὶς',
    transliteration: 'oudeis',
    lemma: 'οὐδείς',
    lemmaTranslit: 'oudeis',
    gloss: 'no one',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'nominative', rawCode: 'A-NSM' },
    strongs: 'G3762',
    position: 1,
  },
  {
    id: 'John.1.18.2',
    language: 'greek',
    text: 'ἑώρακεν',
    transliteration: 'heōraken',
    lemma: 'ὁράω',
    lemmaTranslit: 'horaō',
    gloss: 'has seen',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'perfect', voice: 'active', mood: 'indicative', rawCode: 'V-RAI-3S' },
    strongs: 'G3708',
    position: 2,
  },
  {
    id: 'John.1.18.3',
    language: 'greek',
    text: 'πώποτε·',
    transliteration: 'pōpote',
    lemma: 'πώποτε',
    lemmaTranslit: 'pōpote',
    gloss: 'at any time',
    morphology: { pos: 'adverb', rawCode: 'ADV' },
    strongs: 'G4455',
    position: 3,
  },
  // The variant is here: μονογενὴς θεός vs ὁ μονογενὴς υἱός
  {
    id: 'John.1.18.4',
    language: 'greek',
    text: 'μονογενὴς',
    transliteration: 'monogenēs',
    lemma: 'μονογενής',
    lemmaTranslit: 'monogenēs',
    gloss: 'only begotten',
    glossExtended: 'only, unique, one and only',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'nominative', rawCode: 'A-NSM' },
    strongs: 'G3439',
    position: 4,
    lexiconRefs: [{ lexicon: 'strongs', entryId: 'G3439' }, { lexicon: 'bdag', entryId: 'μονογενής' }],
  },
  {
    id: 'John.1.18.5',
    language: 'greek',
    text: 'θεὸς',
    transliteration: 'theos',
    lemma: 'θεός',
    lemmaTranslit: 'theos',
    gloss: 'God',
    glossExtended: 'God (variant: υἱός "Son")',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative', rawCode: 'N-NSM' },
    strongs: 'G2316',
    position: 5,
    lexiconRefs: [{ lexicon: 'strongs', entryId: 'G2316' }],
  },
  {
    id: 'John.1.18.6',
    language: 'greek',
    text: 'ὁ',
    transliteration: 'ho',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the one',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'nominative', rawCode: 'T-NSM' },
    strongs: 'G3588',
    position: 6,
  },
  {
    id: 'John.1.18.7',
    language: 'greek',
    text: 'ὢν',
    transliteration: 'ōn',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'being',
    morphology: { pos: 'verb', number: 'singular', tense: 'present', voice: 'active', mood: 'participle', case: 'nominative', gender: 'masculine', rawCode: 'V-PXP-NSM' },
    strongs: 'G1510',
    position: 7,
  },
  {
    id: 'John.1.18.8',
    language: 'greek',
    text: 'εἰς',
    transliteration: 'eis',
    lemma: 'εἰς',
    lemmaTranslit: 'eis',
    gloss: 'in',
    morphology: { pos: 'preposition', rawCode: 'PREP' },
    strongs: 'G1519',
    position: 8,
  },
  {
    id: 'John.1.18.9',
    language: 'greek',
    text: 'τὸν',
    transliteration: 'ton',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'accusative', rawCode: 'T-ASM' },
    strongs: 'G3588',
    position: 9,
  },
  {
    id: 'John.1.18.10',
    language: 'greek',
    text: 'κόλπον',
    transliteration: 'kolpon',
    lemma: 'κόλπος',
    lemmaTranslit: 'kolpos',
    gloss: 'bosom',
    glossExtended: 'bosom, chest, side (intimate relationship)',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'accusative', rawCode: 'N-ASM' },
    strongs: 'G2859',
    position: 10,
  },
  {
    id: 'John.1.18.11',
    language: 'greek',
    text: 'τοῦ',
    transliteration: 'tou',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'of the',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'genitive', rawCode: 'T-GSM' },
    strongs: 'G3588',
    position: 11,
  },
  {
    id: 'John.1.18.12',
    language: 'greek',
    text: 'πατρὸς',
    transliteration: 'patros',
    lemma: 'πατήρ',
    lemmaTranslit: 'patēr',
    gloss: 'Father',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'genitive', rawCode: 'N-GSM' },
    strongs: 'G3962',
    position: 12,
  },
  {
    id: 'John.1.18.13',
    language: 'greek',
    text: 'ἐκεῖνος',
    transliteration: 'ekeinos',
    lemma: 'ἐκεῖνος',
    lemmaTranslit: 'ekeinos',
    gloss: 'that one',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'singular', case: 'nominative', rawCode: 'D-NSM' },
    strongs: 'G1565',
    position: 13,
  },
  {
    id: 'John.1.18.14',
    language: 'greek',
    text: 'ἐξηγήσατο',
    transliteration: 'exēgēsato',
    lemma: 'ἐξηγέομαι',
    lemmaTranslit: 'exēgeomai',
    gloss: 'has made known',
    glossExtended: 'explained, made known, revealed (root of "exegesis")',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'middle', mood: 'indicative', rawCode: 'V-ADI-3S' },
    strongs: 'G1834',
    position: 14,
  },
];

// Translation for John 1:18 (with famous textual variant)
export const john1_18_translation: VerseTranslation = {
  verseRef: 'John.1.18',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'God no one has seen at any time; the only begotten God, the one being in the bosom of the Father, that one has made known.',
      spans: [
        { id: 'John.1.18.en.lit.0', text: 'God', position: 0, sourceTokenIds: ['John.1.18.0'], confidence: 'high' },
        { id: 'John.1.18.en.lit.1', text: 'no one has seen at any time;', position: 1, sourceTokenIds: ['John.1.18.1', 'John.1.18.2', 'John.1.18.3'], confidence: 'high' },
        { id: 'John.1.18.en.lit.2', text: 'the only begotten God,', position: 2, sourceTokenIds: ['John.1.18.4', 'John.1.18.5'], confidence: 'medium', alternatives: [{ text: 'the only begotten Son', reason: 'Byzantine text variant' }] },
        { id: 'John.1.18.en.lit.3', text: 'the one being', position: 3, sourceTokenIds: ['John.1.18.6', 'John.1.18.7'], confidence: 'high' },
        { id: 'John.1.18.en.lit.4', text: 'in the bosom of the Father,', position: 4, sourceTokenIds: ['John.1.18.8', 'John.1.18.9', 'John.1.18.10', 'John.1.18.11', 'John.1.18.12'], confidence: 'high' },
        { id: 'John.1.18.en.lit.5', text: 'that one has made known.', position: 5, sourceTokenIds: ['John.1.18.13', 'John.1.18.14'], confidence: 'high' },
      ],
      overallConfidence: 'medium',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'No one has ever seen God, but the one and only Son, who is himself God and is at the Father\'s side, has made him known.',
      spans: [
        { id: 'John.1.18.en.idi.0', text: 'No one has ever seen God,', position: 0, sourceTokenIds: ['John.1.18.0', 'John.1.18.1', 'John.1.18.2', 'John.1.18.3'], confidence: 'high' },
        { id: 'John.1.18.en.idi.1', text: 'but the one and only Son, who is himself God', position: 1, sourceTokenIds: ['John.1.18.4', 'John.1.18.5', 'John.1.18.6', 'John.1.18.7'], confidence: 'medium' },
        { id: 'John.1.18.en.idi.2', text: 'and is at the Father\'s side,', position: 2, sourceTokenIds: ['John.1.18.8', 'John.1.18.9', 'John.1.18.10', 'John.1.18.11', 'John.1.18.12'], confidence: 'high' },
        { id: 'John.1.18.en.idi.3', text: 'has made him known.', position: 3, sourceTokenIds: ['John.1.18.13', 'John.1.18.14'], confidence: 'high' },
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

// Study notes for John 1:18
export const john1_18_notes: StudyNote[] = [
  {
    id: 'John.1.18.note.1',
    verseRef: 'John.1.18',
    sourceTokenIds: ['John.1.18.4', 'John.1.18.5'],
    category: 'translation-choice',
    title: 'μονογενὴς θεός vs ὁ μονογενὴς υἱός - Major Textual Variant',
    content: `This verse contains one of the most famous and theologically significant textual variants in the New Testament.

**Two Main Readings:**

1. **μονογενὴς θεός** ("only begotten God" / "the unique God")
   - Found in P66, P75, Sinaiticus*, Vaticanus, and other early Alexandrian manuscripts
   - Lectio difficilior (harder reading)
   - Most modern critical texts (NA28, UBS5) follow this reading

2. **ὁ μονογενὴς υἱός** ("the only begotten Son")
   - Found in A, C³, Θ, and most Byzantine manuscripts
   - The Textus Receptus and KJV follow this reading
   - More common Johannine terminology (cf. John 3:16, 18)

**Scholarly Consensus:**
Most textual critics prefer "only begotten God" because:
- It has earlier and better manuscript support
- Scribes would more likely change the unusual "God" to the familiar "Son"
- The phrase is more difficult and thus unlikely to be a scribal addition

**Theological Impact:**
The reading "only begotten God" is a remarkable Christological statement, explicitly affirming the deity of Christ in the Johannine Prologue's climax.`,
    confidence: 'high',
    isContested: true,
    positions: [
      { name: 'μονογενὴς θεός', description: 'Only begotten God - preferred by critical texts (NA28)' },
      { name: 'ὁ μονογενὴς υἱός', description: 'Only begotten Son - Byzantine/TR reading' },
    ],
    authorType: 'ai',
    metadata: { generatedAt: new Date().toISOString() },
  },
  {
    id: 'John.1.18.note.2',
    verseRef: 'John.1.18',
    sourceTokenIds: ['John.1.18.8', 'John.1.18.9', 'John.1.18.10'],
    category: 'lexical',
    title: 'εἰς τὸν κόλπον - In the Bosom/Side',
    content: `The phrase εἰς τὸν κόλπον τοῦ πατρός (eis ton kolpon tou patros) literally means "in the bosom of the Father."

**Meaning:**
- κόλπος (kolpos) refers to the chest or lap
- The phrase indicates intimate fellowship and relationship
- Similar to a child resting on a parent's chest or at a banquet where close friends reclined together

**Significance:**
This imagery conveys:
- The eternal intimate relationship between Father and Son
- Access to the Father's innermost thoughts and purposes
- Authority to reveal the Father

Compare with John 13:23 where the beloved disciple was "in the bosom of Jesus" (ἐν τῷ κόλπῳ τοῦ Ἰησοῦ).`,
    confidence: 'high',
    authorType: 'ai',
    metadata: { generatedAt: new Date().toISOString() },
  },
  {
    id: 'John.1.18.note.3',
    verseRef: 'John.1.18',
    sourceTokenIds: ['John.1.18.14'],
    category: 'lexical',
    title: 'ἐξηγήσατο - Made Known / Exegeted',
    content: `The verb ἐξηγέομαι (exēgeomai) means "to explain," "to make known," or "to interpret."

**Etymology:**
This is the root of our English word "exegesis" (explaining/interpreting texts).

**In Context:**
The Word who was with God from the beginning, who is himself God, has "exegeted" the Father to humanity. Jesus is the definitive interpretation and revelation of who God is.

**Theological Implication:**
The Prologue concludes by declaring that Jesus Christ is the authoritative interpreter of the invisible God. To know Jesus is to know the Father (cf. John 14:9).`,
    confidence: 'high',
    authorType: 'ai',
    metadata: { generatedAt: new Date().toISOString() },
  },
];

// Sample verse data structure
export const johnChapter1Verses = [
  {
    ref: 'John.1.1',
    sourceTokens: john1_1_tokens,
    translation: john1_1_translation,
    notes: john1_1_notes,
  },
  {
    ref: 'John.1.2',
    sourceTokens: john1_2_tokens,
    translation: {
      verseRef: 'John.1.2',
      targetLanguage: 'en',
      profile: 'academic',
      layers: {
        literal: {
          type: 'literal',
          targetLanguage: 'en',
          text: 'This one was in beginning with the God.',
          spans: [
            { id: 'John.1.2.en.lit.0', text: 'This one', position: 0, sourceTokenIds: ['John.1.2.0'], confidence: 'high' },
            { id: 'John.1.2.en.lit.1', text: 'was in beginning', position: 1, sourceTokenIds: ['John.1.2.1', 'John.1.2.2', 'John.1.2.3'], confidence: 'high' },
            { id: 'John.1.2.en.lit.2', text: 'with the God.', position: 2, sourceTokenIds: ['John.1.2.4', 'John.1.2.5', 'John.1.2.6'], confidence: 'high' },
          ],
          overallConfidence: 'high',
          humanReviewed: false,
        },
        idiomatic: {
          type: 'idiomatic',
          targetLanguage: 'en',
          text: 'He was with God in the beginning.',
          spans: [
            { id: 'John.1.2.en.idi.0', text: 'He was with God', position: 0, sourceTokenIds: ['John.1.2.0', 'John.1.2.1', 'John.1.2.4', 'John.1.2.5', 'John.1.2.6'], confidence: 'high' },
            { id: 'John.1.2.en.idi.1', text: 'in the beginning.', position: 1, sourceTokenIds: ['John.1.2.2', 'John.1.2.3'], confidence: 'high' },
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
    },
    notes: [],
  },
  {
    ref: 'John.1.3',
    sourceTokens: john1_3_tokens,
    translation: {
      verseRef: 'John.1.3',
      targetLanguage: 'en',
      profile: 'academic',
      layers: {
        literal: {
          type: 'literal',
          targetLanguage: 'en',
          text: 'All things through him came into being, and apart from him came into being not even one thing.',
          spans: [
            { id: 'John.1.3.en.lit.0', text: 'All things', position: 0, sourceTokenIds: ['John.1.3.0'], confidence: 'high' },
            { id: 'John.1.3.en.lit.1', text: 'through him', position: 1, sourceTokenIds: ['John.1.3.1', 'John.1.3.2'], confidence: 'high' },
            { id: 'John.1.3.en.lit.2', text: 'came into being,', position: 2, sourceTokenIds: ['John.1.3.3'], confidence: 'high' },
            { id: 'John.1.3.en.lit.3', text: 'and apart from him', position: 3, sourceTokenIds: ['John.1.3.4', 'John.1.3.5', 'John.1.3.6'], confidence: 'high' },
            { id: 'John.1.3.en.lit.4', text: 'came into being not even one thing.', position: 4, sourceTokenIds: ['John.1.3.7', 'John.1.3.8', 'John.1.3.9'], confidence: 'high' },
          ],
          overallConfidence: 'high',
          humanReviewed: false,
        },
        idiomatic: {
          type: 'idiomatic',
          targetLanguage: 'en',
          text: 'Through him all things were made; without him nothing was made that has been made.',
          spans: [
            { id: 'John.1.3.en.idi.0', text: 'Through him all things were made;', position: 0, sourceTokenIds: ['John.1.3.0', 'John.1.3.1', 'John.1.3.2', 'John.1.3.3'], confidence: 'high' },
            { id: 'John.1.3.en.idi.1', text: 'without him nothing was made that has been made.', position: 1, sourceTokenIds: ['John.1.3.4', 'John.1.3.5', 'John.1.3.6', 'John.1.3.7', 'John.1.3.8', 'John.1.3.9'], confidence: 'high' },
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
    },
    notes: [],
  },
  // Add verses 4-5 from extended data
  ...extendedJohnVerses,
  // Skip to verse 18 for the famous textual variant
  {
    ref: 'John.1.18',
    sourceTokens: john1_18_tokens,
    translation: john1_18_translation,
    notes: john1_18_notes,
  },
];

export default johnChapter1Verses;
