// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 16:1 – Mary Magdalene, Mary the mother of James, and Salome bought spices
 * ──────────────────────────────────────────────────────────── */

export const mark16_1_tokens: SourceToken[] = [
  {
    id: 'Mark.16.1.0',
    language: 'greek',
    text: 'Μαρία',
    transliteration: 'Maria',
    lemma: 'Μαρία',
    lemmaTranslit: 'Maria',
    gloss: 'Mary',
    morphology: { pos: 'proper-noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G3137',
    position: 0,
  },
  {
    id: 'Mark.16.1.1',
    language: 'greek',
    text: 'ἡ',
    transliteration: 'hē',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G3588',
    position: 1,
  },
  {
    id: 'Mark.16.1.2',
    language: 'greek',
    text: 'Μαγδαληνή',
    transliteration: 'Magdalēnē',
    lemma: 'Μαγδαληνή',
    lemmaTranslit: 'Magdalēnē',
    gloss: 'Magdalene',
    morphology: { pos: 'proper-noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G3094',
    position: 2,
  },
  {
    id: 'Mark.16.1.3',
    language: 'greek',
    text: 'ἠγόρασαν',
    transliteration: 'ēgorasan',
    lemma: 'ἀγοράζω',
    lemmaTranslit: 'agorazō',
    gloss: 'bought',
    morphology: { pos: 'verb', person: '3', number: 'plural', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G59',
    position: 3,
  },
  {
    id: 'Mark.16.1.4',
    language: 'greek',
    text: 'ἀρώματα',
    transliteration: 'arōmata',
    lemma: 'ἄρωμα',
    lemmaTranslit: 'arōma',
    gloss: 'spices',
    glossExtended: 'spices, aromatic substances',
    morphology: { pos: 'noun', gender: 'neuter', number: 'plural', case: 'accusative' },
    strongs: 'G759',
    position: 4,
  },
];

export const mark16_1_translation: VerseTranslation = {
  verseRef: 'Mark.16.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And Mary the Magdalene and Mary the [mother] of James and Salome bought spices, that having come they might anoint him.',
      spans: [
        { id: 'Mark.16.1.en.lit.0', text: 'Mary the Magdalene', position: 0, sourceTokenIds: ['Mark.16.1.0', 'Mark.16.1.1', 'Mark.16.1.2'], confidence: 'high' },
        { id: 'Mark.16.1.en.lit.1', text: 'bought spices', position: 1, sourceTokenIds: ['Mark.16.1.3', 'Mark.16.1.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'When the Sabbath was over, Mary Magdalene, Mary the mother of James, and Salome bought spices so that they might go to anoint him.',
      spans: [
        { id: 'Mark.16.1.en.idi.0', text: 'Mary Magdalene, Mary the mother of James, and Salome', position: 0, sourceTokenIds: ['Mark.16.1.0', 'Mark.16.1.1', 'Mark.16.1.2'], confidence: 'high' },
        { id: 'Mark.16.1.en.idi.1', text: 'bought spices so that they might go to anoint him.', position: 1, sourceTokenIds: ['Mark.16.1.3', 'Mark.16.1.4'], confidence: 'high' },
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

export const mark16_1_verse = {
  ref: 'Mark.16.1',
  sourceTokens: mark16_1_tokens,
  translation: mark16_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 16:2 – Very early on the first day of the week they came to the tomb
 * ──────────────────────────────────────────────────────────── */

export const mark16_2_tokens: SourceToken[] = [
  {
    id: 'Mark.16.2.0',
    language: 'greek',
    text: 'λίαν',
    transliteration: 'lian',
    lemma: 'λίαν',
    lemmaTranslit: 'lian',
    gloss: 'very',
    morphology: { pos: 'adverb' },
    strongs: 'G3029',
    position: 0,
  },
  {
    id: 'Mark.16.2.1',
    language: 'greek',
    text: 'πρωΐ',
    transliteration: 'prōi',
    lemma: 'πρωΐ',
    lemmaTranslit: 'prōi',
    gloss: 'early',
    morphology: { pos: 'adverb' },
    strongs: 'G4404',
    position: 1,
  },
  {
    id: 'Mark.16.2.2',
    language: 'greek',
    text: 'τῇ',
    transliteration: 'tē',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'on the',
    morphology: { pos: 'article', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G3588',
    position: 2,
  },
  {
    id: 'Mark.16.2.3',
    language: 'greek',
    text: 'μιᾷ',
    transliteration: 'mia',
    lemma: 'εἷς',
    lemmaTranslit: 'heis',
    gloss: 'first',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G1520',
    position: 3,
  },
  {
    id: 'Mark.16.2.4',
    language: 'greek',
    text: 'σαββάτων',
    transliteration: 'sabbatōn',
    lemma: 'σάββατον',
    lemmaTranslit: 'sabbaton',
    gloss: 'of the week',
    morphology: { pos: 'noun', gender: 'neuter', number: 'plural', case: 'genitive' },
    strongs: 'G4521',
    position: 4,
  },
  {
    id: 'Mark.16.2.5',
    language: 'greek',
    text: 'ἔρχονται',
    transliteration: 'erchontai',
    lemma: 'ἔρχομαι',
    lemmaTranslit: 'erchomai',
    gloss: 'they come',
    morphology: { pos: 'verb', person: '3', number: 'plural', tense: 'present', voice: 'middle', mood: 'indicative' },
    strongs: 'G2064',
    position: 5,
  },
  {
    id: 'Mark.16.2.6',
    language: 'greek',
    text: 'μνημεῖον',
    transliteration: 'mnēmeion',
    lemma: 'μνημεῖον',
    lemmaTranslit: 'mnēmeion',
    gloss: 'tomb',
    glossExtended: 'tomb, memorial, monument',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'accusative' },
    strongs: 'G3419',
    position: 6,
  },
];

export const mark16_2_translation: VerseTranslation = {
  verseRef: 'Mark.16.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And very early on the first [day] of the week they come to the tomb, the sun having risen.',
      spans: [
        { id: 'Mark.16.2.en.lit.0', text: 'very early', position: 0, sourceTokenIds: ['Mark.16.2.0', 'Mark.16.2.1'], confidence: 'high' },
        { id: 'Mark.16.2.en.lit.1', text: 'on the first of the week', position: 1, sourceTokenIds: ['Mark.16.2.2', 'Mark.16.2.3', 'Mark.16.2.4'], confidence: 'high' },
        { id: 'Mark.16.2.en.lit.2', text: 'they come to the tomb', position: 2, sourceTokenIds: ['Mark.16.2.5', 'Mark.16.2.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Very early on the first day of the week, just after sunrise, they were on their way to the tomb.',
      spans: [
        { id: 'Mark.16.2.en.idi.0', text: 'Very early on the first day of the week, just after sunrise,', position: 0, sourceTokenIds: ['Mark.16.2.0', 'Mark.16.2.1', 'Mark.16.2.2', 'Mark.16.2.3', 'Mark.16.2.4'], confidence: 'high' },
        { id: 'Mark.16.2.en.idi.1', text: 'they were on their way to the tomb.', position: 1, sourceTokenIds: ['Mark.16.2.5', 'Mark.16.2.6'], confidence: 'high' },
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

export const mark16_2_verse = {
  ref: 'Mark.16.2',
  sourceTokens: mark16_2_tokens,
  translation: mark16_2_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 16:3 – Who will roll away the stone for us?
 * ──────────────────────────────────────────────────────────── */

export const mark16_3_tokens: SourceToken[] = [
  {
    id: 'Mark.16.3.0',
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
    id: 'Mark.16.3.1',
    language: 'greek',
    text: 'ἀποκυλίσει',
    transliteration: 'apokylisei',
    lemma: 'ἀποκυλίω',
    lemmaTranslit: 'apokyliō',
    gloss: 'will roll away',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'future', voice: 'active', mood: 'indicative' },
    strongs: 'G617',
    position: 1,
  },
  {
    id: 'Mark.16.3.2',
    language: 'greek',
    text: 'ἡμῖν',
    transliteration: 'hēmin',
    lemma: 'ἐγώ',
    lemmaTranslit: 'egō',
    gloss: 'for us',
    morphology: { pos: 'pronoun', person: '1', number: 'plural', case: 'dative' },
    strongs: 'G1473',
    position: 2,
  },
  {
    id: 'Mark.16.3.3',
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
    id: 'Mark.16.3.4',
    language: 'greek',
    text: 'λίθον',
    transliteration: 'lithon',
    lemma: 'λίθος',
    lemmaTranslit: 'lithos',
    gloss: 'stone',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G3037',
    position: 4,
  },
];

export const mark16_3_translation: VerseTranslation = {
  verseRef: 'Mark.16.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And they were saying to one another, "Who will roll away for us the stone from the door of the tomb?"',
      spans: [
        { id: 'Mark.16.3.en.lit.0', text: 'Who', position: 0, sourceTokenIds: ['Mark.16.3.0'], confidence: 'high' },
        { id: 'Mark.16.3.en.lit.1', text: 'will roll away', position: 1, sourceTokenIds: ['Mark.16.3.1'], confidence: 'high' },
        { id: 'Mark.16.3.en.lit.2', text: 'for us the stone', position: 2, sourceTokenIds: ['Mark.16.3.2', 'Mark.16.3.3', 'Mark.16.3.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "They asked each other, \"Who will roll the stone away from the entrance of the tomb?\"",
      spans: [
        { id: 'Mark.16.3.en.idi.0', text: 'Who will roll the stone away', position: 0, sourceTokenIds: ['Mark.16.3.0', 'Mark.16.3.1', 'Mark.16.3.3', 'Mark.16.3.4'], confidence: 'high' },
        { id: 'Mark.16.3.en.idi.1', text: 'from the entrance of the tomb?', position: 1, sourceTokenIds: ['Mark.16.3.2'], confidence: 'high' },
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

export const mark16_3_verse = {
  ref: 'Mark.16.3',
  sourceTokens: mark16_3_tokens,
  translation: mark16_3_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 16:4 – They saw that the stone had been rolled away
 * ──────────────────────────────────────────────────────────── */

export const mark16_4_tokens: SourceToken[] = [
  {
    id: 'Mark.16.4.0',
    language: 'greek',
    text: 'ἀνακεκύλισται',
    transliteration: 'anakekylistai',
    lemma: 'ἀποκυλίω',
    lemmaTranslit: 'apokyliō',
    gloss: 'has been rolled away',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'perfect', voice: 'passive', mood: 'indicative' },
    strongs: 'G617',
    position: 0,
  },
  {
    id: 'Mark.16.4.1',
    language: 'greek',
    text: 'ὁ',
    transliteration: 'ho',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3588',
    position: 1,
  },
  {
    id: 'Mark.16.4.2',
    language: 'greek',
    text: 'λίθος',
    transliteration: 'lithos',
    lemma: 'λίθος',
    lemmaTranslit: 'lithos',
    gloss: 'stone',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3037',
    position: 2,
  },
  {
    id: 'Mark.16.4.3',
    language: 'greek',
    text: 'ἦν',
    transliteration: 'ēn',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'was',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'imperfect', voice: 'active', mood: 'indicative' },
    strongs: 'G1510',
    position: 3,
  },
  {
    id: 'Mark.16.4.4',
    language: 'greek',
    text: 'γὰρ',
    transliteration: 'gar',
    lemma: 'γάρ',
    lemmaTranslit: 'gar',
    gloss: 'for',
    morphology: { pos: 'conjunction' },
    strongs: 'G1063',
    position: 4,
  },
  {
    id: 'Mark.16.4.5',
    language: 'greek',
    text: 'μέγας',
    transliteration: 'megas',
    lemma: 'μέγας',
    lemmaTranslit: 'megas',
    gloss: 'great',
    glossExtended: 'great, large',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3173',
    position: 5,
  },
  {
    id: 'Mark.16.4.6',
    language: 'greek',
    text: 'σφόδρα',
    transliteration: 'sphodra',
    lemma: 'σφόδρα',
    lemmaTranslit: 'sphodra',
    gloss: 'very',
    glossExtended: 'very, exceedingly',
    morphology: { pos: 'adverb' },
    strongs: 'G4970',
    position: 6,
  },
];

export const mark16_4_translation: VerseTranslation = {
  verseRef: 'Mark.16.4',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And having looked up, they see that the stone has been rolled away; for it was very great.',
      spans: [
        { id: 'Mark.16.4.en.lit.0', text: 'has been rolled away', position: 0, sourceTokenIds: ['Mark.16.4.0'], confidence: 'high' },
        { id: 'Mark.16.4.en.lit.1', text: 'the stone', position: 1, sourceTokenIds: ['Mark.16.4.1', 'Mark.16.4.2'], confidence: 'high' },
        { id: 'Mark.16.4.en.lit.2', text: 'it was for very great', position: 2, sourceTokenIds: ['Mark.16.4.3', 'Mark.16.4.4', 'Mark.16.4.5', 'Mark.16.4.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'But when they looked up, they saw that the stone, which was very large, had been rolled away.',
      spans: [
        { id: 'Mark.16.4.en.idi.0', text: 'the stone had been rolled away', position: 0, sourceTokenIds: ['Mark.16.4.0', 'Mark.16.4.1', 'Mark.16.4.2'], confidence: 'high' },
        { id: 'Mark.16.4.en.idi.1', text: 'which was very large', position: 1, sourceTokenIds: ['Mark.16.4.3', 'Mark.16.4.4', 'Mark.16.4.5', 'Mark.16.4.6'], confidence: 'high' },
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

export const mark16_4_verse = {
  ref: 'Mark.16.4',
  sourceTokens: mark16_4_tokens,
  translation: mark16_4_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 16:5 – They saw a young man sitting on the right side, dressed in a white robe
 * ──────────────────────────────────────────────────────────── */

export const mark16_5_tokens: SourceToken[] = [
  {
    id: 'Mark.16.5.0',
    language: 'greek',
    text: 'εἶδον',
    transliteration: 'eidon',
    lemma: 'ὁράω',
    lemmaTranslit: 'horaō',
    gloss: 'they saw',
    morphology: { pos: 'verb', person: '3', number: 'plural', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G3708',
    position: 0,
  },
  {
    id: 'Mark.16.5.1',
    language: 'greek',
    text: 'νεανίσκον',
    transliteration: 'neaniskon',
    lemma: 'νεανίσκος',
    lemmaTranslit: 'neaniskos',
    gloss: 'young man',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G3495',
    position: 1,
  },
  {
    id: 'Mark.16.5.2',
    language: 'greek',
    text: 'καθήμενον',
    transliteration: 'kathēmenon',
    lemma: 'κάθημαι',
    lemmaTranslit: 'kathēmai',
    gloss: 'sitting',
    morphology: { pos: 'verb', gender: 'masculine', number: 'singular', tense: 'present', voice: 'middle', mood: 'participle', case: 'accusative' },
    strongs: 'G2521',
    position: 2,
  },
  {
    id: 'Mark.16.5.3',
    language: 'greek',
    text: 'περιβεβλημένον',
    transliteration: 'peribeblēmenon',
    lemma: 'περιβάλλω',
    lemmaTranslit: 'periballō',
    gloss: 'dressed in',
    glossExtended: 'clothed in, wrapped in',
    morphology: { pos: 'verb', gender: 'masculine', number: 'singular', tense: 'perfect', voice: 'middle', mood: 'participle', case: 'accusative' },
    strongs: 'G4016',
    position: 3,
  },
  {
    id: 'Mark.16.5.4',
    language: 'greek',
    text: 'στολὴν',
    transliteration: 'stolēn',
    lemma: 'στολή',
    lemmaTranslit: 'stolē',
    gloss: 'robe',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G4749',
    position: 4,
  },
  {
    id: 'Mark.16.5.5',
    language: 'greek',
    text: 'λευκήν',
    transliteration: 'leukēn',
    lemma: 'λευκός',
    lemmaTranslit: 'leukos',
    gloss: 'white',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G3022',
    position: 5,
  },
];

export const mark16_5_translation: VerseTranslation = {
  verseRef: 'Mark.16.5',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And having entered into the tomb, they saw a young man sitting on the right side, clothed in a white robe; and they were amazed.',
      spans: [
        { id: 'Mark.16.5.en.lit.0', text: 'they saw a young man', position: 0, sourceTokenIds: ['Mark.16.5.0', 'Mark.16.5.1'], confidence: 'high' },
        { id: 'Mark.16.5.en.lit.1', text: 'sitting', position: 1, sourceTokenIds: ['Mark.16.5.2'], confidence: 'high' },
        { id: 'Mark.16.5.en.lit.2', text: 'clothed in a white robe', position: 2, sourceTokenIds: ['Mark.16.5.3', 'Mark.16.5.4', 'Mark.16.5.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'As they entered the tomb, they saw a young man dressed in a white robe sitting on the right side, and they were alarmed.',
      spans: [
        { id: 'Mark.16.5.en.idi.0', text: 'they saw a young man', position: 0, sourceTokenIds: ['Mark.16.5.0', 'Mark.16.5.1'], confidence: 'high' },
        { id: 'Mark.16.5.en.idi.1', text: 'dressed in a white robe sitting on the right side', position: 1, sourceTokenIds: ['Mark.16.5.2', 'Mark.16.5.3', 'Mark.16.5.4', 'Mark.16.5.5'], confidence: 'high' },
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

export const mark16_5_verse = {
  ref: 'Mark.16.5',
  sourceTokens: mark16_5_tokens,
  translation: mark16_5_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 16:6 – He has risen! He is not here.
 * ──────────────────────────────────────────────────────────── */

export const mark16_6_tokens: SourceToken[] = [
  {
    id: 'Mark.16.6.0',
    language: 'greek',
    text: 'ἠγέρθη',
    transliteration: 'ēgerthē',
    lemma: 'ἐγείρω',
    lemmaTranslit: 'egeirō',
    gloss: 'he has risen',
    glossExtended: 'he was raised, he has risen',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'passive', mood: 'indicative' },
    strongs: 'G1453',
    position: 0,
  },
  {
    id: 'Mark.16.6.1',
    language: 'greek',
    text: 'οὐκ',
    transliteration: 'ouk',
    lemma: 'οὐ',
    lemmaTranslit: 'ou',
    gloss: 'not',
    morphology: { pos: 'adverb' },
    strongs: 'G3756',
    position: 1,
  },
  {
    id: 'Mark.16.6.2',
    language: 'greek',
    text: 'ἔστιν',
    transliteration: 'estin',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'he is',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G1510',
    position: 2,
  },
  {
    id: 'Mark.16.6.3',
    language: 'greek',
    text: 'ὧδε',
    transliteration: 'hōde',
    lemma: 'ὧδε',
    lemmaTranslit: 'hōde',
    gloss: 'here',
    morphology: { pos: 'adverb' },
    strongs: 'G5602',
    position: 3,
  },
  {
    id: 'Mark.16.6.4',
    language: 'greek',
    text: 'ἴδε',
    transliteration: 'ide',
    lemma: 'ἴδε',
    lemmaTranslit: 'ide',
    gloss: 'see',
    glossExtended: 'see, behold, look',
    morphology: { pos: 'verb', person: '2', number: 'singular', tense: 'aorist', voice: 'active', mood: 'imperative' },
    strongs: 'G2396',
    position: 4,
  },
  {
    id: 'Mark.16.6.5',
    language: 'greek',
    text: 'ὁ',
    transliteration: 'ho',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3588',
    position: 5,
  },
  {
    id: 'Mark.16.6.6',
    language: 'greek',
    text: 'τόπος',
    transliteration: 'topos',
    lemma: 'τόπος',
    lemmaTranslit: 'topos',
    gloss: 'place',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G5117',
    position: 6,
  },
];

export const mark16_6_translation: VerseTranslation = {
  verseRef: 'Mark.16.6',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "\"Do not be amazed. You seek Jesus the Nazarene, the one having been crucified. He was raised; he is not here. See the place where they laid him.\"",
      spans: [
        { id: 'Mark.16.6.en.lit.0', text: 'He was raised', position: 0, sourceTokenIds: ['Mark.16.6.0'], confidence: 'high' },
        { id: 'Mark.16.6.en.lit.1', text: 'not he is here', position: 1, sourceTokenIds: ['Mark.16.6.1', 'Mark.16.6.2', 'Mark.16.6.3'], confidence: 'high' },
        { id: 'Mark.16.6.en.lit.2', text: 'see the place', position: 2, sourceTokenIds: ['Mark.16.6.4', 'Mark.16.6.5', 'Mark.16.6.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "\"Don't be alarmed,\" he said. \"You are looking for Jesus the Nazarene, who was crucified. He has risen! He is not here. See the place where they laid him.\"",
      spans: [
        { id: 'Mark.16.6.en.idi.0', text: 'He has risen!', position: 0, sourceTokenIds: ['Mark.16.6.0'], confidence: 'high' },
        { id: 'Mark.16.6.en.idi.1', text: 'He is not here.', position: 1, sourceTokenIds: ['Mark.16.6.1', 'Mark.16.6.2', 'Mark.16.6.3'], confidence: 'high' },
        { id: 'Mark.16.6.en.idi.2', text: 'See the place where they laid him.', position: 2, sourceTokenIds: ['Mark.16.6.4', 'Mark.16.6.5', 'Mark.16.6.6'], confidence: 'high' },
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

export const mark16_6_verse = {
  ref: 'Mark.16.6',
  sourceTokens: mark16_6_tokens,
  translation: mark16_6_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 16:7 – Go, tell his disciples and Peter
 * ──────────────────────────────────────────────────────────── */

export const mark16_7_tokens: SourceToken[] = [
  {
    id: 'Mark.16.7.0',
    language: 'greek',
    text: 'ὑπάγετε',
    transliteration: 'hypagete',
    lemma: 'ὑπάγω',
    lemmaTranslit: 'hypagō',
    gloss: 'go',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'present', voice: 'active', mood: 'imperative' },
    strongs: 'G5217',
    position: 0,
  },
  {
    id: 'Mark.16.7.1',
    language: 'greek',
    text: 'εἴπατε',
    transliteration: 'eipate',
    lemma: 'λέγω',
    lemmaTranslit: 'legō',
    gloss: 'tell',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'aorist', voice: 'active', mood: 'imperative' },
    strongs: 'G3004',
    position: 1,
  },
  {
    id: 'Mark.16.7.2',
    language: 'greek',
    text: 'τοῖς',
    transliteration: 'tois',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'plural', case: 'dative' },
    strongs: 'G3588',
    position: 2,
  },
  {
    id: 'Mark.16.7.3',
    language: 'greek',
    text: 'μαθηταῖς',
    transliteration: 'mathētais',
    lemma: 'μαθητής',
    lemmaTranslit: 'mathētēs',
    gloss: 'disciples',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', case: 'dative' },
    strongs: 'G3101',
    position: 3,
  },
  {
    id: 'Mark.16.7.4',
    language: 'greek',
    text: 'αὐτοῦ',
    transliteration: 'autou',
    lemma: 'αὐτός',
    lemmaTranslit: 'autos',
    gloss: 'his',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G846',
    position: 4,
  },
  {
    id: 'Mark.16.7.5',
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
    id: 'Mark.16.7.6',
    language: 'greek',
    text: 'τῷ',
    transliteration: 'tō',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'to',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'dative' },
    strongs: 'G3588',
    position: 6,
  },
  {
    id: 'Mark.16.7.7',
    language: 'greek',
    text: 'Πέτρῳ',
    transliteration: 'Petrō',
    lemma: 'Πέτρος',
    lemmaTranslit: 'Petros',
    gloss: 'Peter',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'dative' },
    strongs: 'G4074',
    position: 7,
  },
];

export const mark16_7_translation: VerseTranslation = {
  verseRef: 'Mark.16.7',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: "\"But go, tell his disciples and Peter that he goes before you into Galilee; there you will see him, just as he told you.\"",
      spans: [
        { id: 'Mark.16.7.en.lit.0', text: 'go, tell', position: 0, sourceTokenIds: ['Mark.16.7.0', 'Mark.16.7.1'], confidence: 'high' },
        { id: 'Mark.16.7.en.lit.1', text: 'the disciples his', position: 1, sourceTokenIds: ['Mark.16.7.2', 'Mark.16.7.3', 'Mark.16.7.4'], confidence: 'high' },
        { id: 'Mark.16.7.en.lit.2', text: 'and to Peter', position: 2, sourceTokenIds: ['Mark.16.7.5', 'Mark.16.7.6', 'Mark.16.7.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "\"But go, tell his disciples and Peter, 'He is going ahead of you into Galilee. There you will see him, just as he told you.'\"",
      spans: [
        { id: 'Mark.16.7.en.idi.0', text: 'go, tell', position: 0, sourceTokenIds: ['Mark.16.7.0', 'Mark.16.7.1'], confidence: 'high' },
        { id: 'Mark.16.7.en.idi.1', text: 'his disciples', position: 1, sourceTokenIds: ['Mark.16.7.2', 'Mark.16.7.3', 'Mark.16.7.4'], confidence: 'high' },
        { id: 'Mark.16.7.en.idi.2', text: 'and Peter', position: 2, sourceTokenIds: ['Mark.16.7.5', 'Mark.16.7.6', 'Mark.16.7.7'], confidence: 'high' },
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

export const mark16_7_verse = {
  ref: 'Mark.16.7',
  sourceTokens: mark16_7_tokens,
  translation: mark16_7_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 16:8 – They went out and fled from the tomb, trembling and astonished
 * ──────────────────────────────────────────────────────────── */

export const mark16_8_tokens: SourceToken[] = [
  {
    id: 'Mark.16.8.0',
    language: 'greek',
    text: 'ἐξελθοῦσαι',
    transliteration: 'exelthousai',
    lemma: 'ἐξέρχομαι',
    lemmaTranslit: 'exerchomai',
    gloss: 'having gone out',
    morphology: { pos: 'verb', gender: 'feminine', number: 'plural', tense: 'aorist', voice: 'active', mood: 'participle', case: 'nominative' },
    strongs: 'G1831',
    position: 0,
  },
  {
    id: 'Mark.16.8.1',
    language: 'greek',
    text: 'ἔφυγον',
    transliteration: 'ephygon',
    lemma: 'φεύγω',
    lemmaTranslit: 'pheugō',
    gloss: 'they fled',
    morphology: { pos: 'verb', person: '3', number: 'plural', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G5343',
    position: 1,
  },
  {
    id: 'Mark.16.8.2',
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
    id: 'Mark.16.8.3',
    language: 'greek',
    text: 'τοῦ',
    transliteration: 'tou',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'neuter', number: 'singular', case: 'genitive' },
    strongs: 'G3588',
    position: 3,
  },
  {
    id: 'Mark.16.8.4',
    language: 'greek',
    text: 'μνημείου',
    transliteration: 'mnēmeiou',
    lemma: 'μνημεῖον',
    lemmaTranslit: 'mnēmeion',
    gloss: 'tomb',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'genitive' },
    strongs: 'G3419',
    position: 4,
  },
  {
    id: 'Mark.16.8.5',
    language: 'greek',
    text: 'τρόμος',
    transliteration: 'tromos',
    lemma: 'τρόμος',
    lemmaTranslit: 'tromos',
    gloss: 'trembling',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G5156',
    position: 5,
  },
  {
    id: 'Mark.16.8.6',
    language: 'greek',
    text: 'ἔκστασις',
    transliteration: 'ekstasis',
    lemma: 'ἔκστασις',
    lemmaTranslit: 'ekstasis',
    gloss: 'astonishment',
    glossExtended: 'astonishment, amazement, trance',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G1611',
    position: 6,
  },
];

export const mark16_8_translation: VerseTranslation = {
  verseRef: 'Mark.16.8',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And having gone out they fled from the tomb; for trembling and astonishment had seized them, and they said nothing to anyone, for they were afraid.',
      spans: [
        { id: 'Mark.16.8.en.lit.0', text: 'having gone out they fled', position: 0, sourceTokenIds: ['Mark.16.8.0', 'Mark.16.8.1'], confidence: 'high' },
        { id: 'Mark.16.8.en.lit.1', text: 'from the tomb', position: 1, sourceTokenIds: ['Mark.16.8.2', 'Mark.16.8.3', 'Mark.16.8.4'], confidence: 'high' },
        { id: 'Mark.16.8.en.lit.2', text: 'trembling and astonishment', position: 2, sourceTokenIds: ['Mark.16.8.5', 'Mark.16.8.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Trembling and bewildered, the women went out and fled from the tomb. They said nothing to anyone, because they were afraid.',
      spans: [
        { id: 'Mark.16.8.en.idi.0', text: 'the women went out and fled', position: 0, sourceTokenIds: ['Mark.16.8.0', 'Mark.16.8.1'], confidence: 'high' },
        { id: 'Mark.16.8.en.idi.1', text: 'from the tomb', position: 1, sourceTokenIds: ['Mark.16.8.2', 'Mark.16.8.3', 'Mark.16.8.4'], confidence: 'high' },
        { id: 'Mark.16.8.en.idi.2', text: 'Trembling and bewildered', position: 2, sourceTokenIds: ['Mark.16.8.5', 'Mark.16.8.6'], confidence: 'high' },
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

export const mark16_8_verse = {
  ref: 'Mark.16.8',
  sourceTokens: mark16_8_tokens,
  translation: mark16_8_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Mark 16:1-8 (Empty Tomb)
 * ──────────────────────────────────────────────────────────── */

export const mark16_1_8_verses = [
  mark16_1_verse,
  mark16_2_verse,
  mark16_3_verse,
  mark16_4_verse,
  mark16_5_verse,
  mark16_6_verse,
  mark16_7_verse,
  mark16_8_verse,
];

export default mark16_1_8_verses;
