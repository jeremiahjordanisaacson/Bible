/**
 * Extended sample data for John 1:4-5 (Greek)
 * Source: SBLGNT (Society of Biblical Literature Greek New Testament) - CC BY 4.0
 */

import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

// John 1:4 - In him was life
export const john1_4_tokens: SourceToken[] = [
  {
    id: 'John.1.4.0',
    language: 'greek',
    text: 'ἐν',
    transliteration: 'en',
    lemma: 'ἐν',
    lemmaTranslit: 'en',
    gloss: 'In',
    morphology: { pos: 'preposition', rawCode: 'PREP' },
    strongs: 'G1722',
    position: 0,
  },
  {
    id: 'John.1.4.1',
    language: 'greek',
    text: 'αὐτῷ',
    transliteration: 'autō',
    lemma: 'αὐτός',
    lemmaTranslit: 'autos',
    gloss: 'him',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'singular', case: 'dative', rawCode: 'P-DSM' },
    strongs: 'G846',
    position: 1,
  },
  {
    id: 'John.1.4.2',
    language: 'greek',
    text: 'ζωὴ',
    transliteration: 'zōē',
    lemma: 'ζωή',
    lemmaTranslit: 'zōē',
    gloss: 'life',
    glossExtended: 'life (especially spiritual/eternal life)',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative', rawCode: 'N-NSF' },
    strongs: 'G2222',
    position: 2,
    lexiconRefs: [{ lexicon: 'strongs', entryId: 'G2222' }, { lexicon: 'bdag', entryId: 'ζωή' }],
  },
  {
    id: 'John.1.4.3',
    language: 'greek',
    text: 'ἦν',
    transliteration: 'ēn',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'was',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'imperfect', voice: 'active', mood: 'indicative', rawCode: 'V-IAI-3S' },
    strongs: 'G1510',
    position: 3,
  },
  {
    id: 'John.1.4.4',
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
    id: 'John.1.4.5',
    language: 'greek',
    text: 'ἡ',
    transliteration: 'hē',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'feminine', number: 'singular', case: 'nominative', rawCode: 'T-NSF' },
    strongs: 'G3588',
    position: 5,
  },
  {
    id: 'John.1.4.6',
    language: 'greek',
    text: 'ζωὴ',
    transliteration: 'zōē',
    lemma: 'ζωή',
    lemmaTranslit: 'zōē',
    gloss: 'life',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative', rawCode: 'N-NSF' },
    strongs: 'G2222',
    position: 6,
  },
  {
    id: 'John.1.4.7',
    language: 'greek',
    text: 'ἦν',
    transliteration: 'ēn',
    lemma: 'εἰμί',
    lemmaTranslit: 'eimi',
    gloss: 'was',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'imperfect', voice: 'active', mood: 'indicative', rawCode: 'V-IAI-3S' },
    strongs: 'G1510',
    position: 7,
  },
  {
    id: 'John.1.4.8',
    language: 'greek',
    text: 'τὸ',
    transliteration: 'to',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'neuter', number: 'singular', case: 'nominative', rawCode: 'T-NSN' },
    strongs: 'G3588',
    position: 8,
  },
  {
    id: 'John.1.4.9',
    language: 'greek',
    text: 'φῶς',
    transliteration: 'phōs',
    lemma: 'φῶς',
    lemmaTranslit: 'phōs',
    gloss: 'light',
    glossExtended: 'light (physical and metaphorical - truth, revelation)',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'nominative', rawCode: 'N-NSN' },
    strongs: 'G5457',
    position: 9,
    lexiconRefs: [{ lexicon: 'strongs', entryId: 'G5457' }],
  },
  {
    id: 'John.1.4.10',
    language: 'greek',
    text: 'τῶν',
    transliteration: 'tōn',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'of the',
    morphology: { pos: 'article', gender: 'masculine', number: 'plural', case: 'genitive', rawCode: 'T-GPM' },
    strongs: 'G3588',
    position: 10,
  },
  {
    id: 'John.1.4.11',
    language: 'greek',
    text: 'ἀνθρώπων',
    transliteration: 'anthrōpōn',
    lemma: 'ἄνθρωπος',
    lemmaTranslit: 'anthrōpos',
    gloss: 'of men',
    glossExtended: 'human beings, people, mankind',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', case: 'genitive', rawCode: 'N-GPM' },
    strongs: 'G444',
    position: 11,
  },
];

// John 1:5 - The light shines in the darkness
export const john1_5_tokens: SourceToken[] = [
  {
    id: 'John.1.5.0',
    language: 'greek',
    text: 'καὶ',
    transliteration: 'kai',
    lemma: 'καί',
    lemmaTranslit: 'kai',
    gloss: 'And',
    morphology: { pos: 'conjunction', rawCode: 'CONJ' },
    strongs: 'G2532',
    position: 0,
  },
  {
    id: 'John.1.5.1',
    language: 'greek',
    text: 'τὸ',
    transliteration: 'to',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'neuter', number: 'singular', case: 'nominative', rawCode: 'T-NSN' },
    strongs: 'G3588',
    position: 1,
  },
  {
    id: 'John.1.5.2',
    language: 'greek',
    text: 'φῶς',
    transliteration: 'phōs',
    lemma: 'φῶς',
    lemmaTranslit: 'phōs',
    gloss: 'light',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'nominative', rawCode: 'N-NSN' },
    strongs: 'G5457',
    position: 2,
  },
  {
    id: 'John.1.5.3',
    language: 'greek',
    text: 'ἐν',
    transliteration: 'en',
    lemma: 'ἐν',
    lemmaTranslit: 'en',
    gloss: 'in',
    morphology: { pos: 'preposition', rawCode: 'PREP' },
    strongs: 'G1722',
    position: 3,
  },
  {
    id: 'John.1.5.4',
    language: 'greek',
    text: 'τῇ',
    transliteration: 'tē',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'feminine', number: 'singular', case: 'dative', rawCode: 'T-DSF' },
    strongs: 'G3588',
    position: 4,
  },
  {
    id: 'John.1.5.5',
    language: 'greek',
    text: 'σκοτίᾳ',
    transliteration: 'skotia',
    lemma: 'σκοτία',
    lemmaTranslit: 'skotia',
    gloss: 'darkness',
    glossExtended: 'darkness (physical and metaphorical - evil, ignorance)',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'dative', rawCode: 'N-DSF' },
    strongs: 'G4653',
    position: 5,
    lexiconRefs: [{ lexicon: 'strongs', entryId: 'G4653' }],
  },
  {
    id: 'John.1.5.6',
    language: 'greek',
    text: 'φαίνει',
    transliteration: 'phainei',
    lemma: 'φαίνω',
    lemmaTranslit: 'phainō',
    gloss: 'shines',
    glossExtended: 'shines, gives light, appears',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative', rawCode: 'V-PAI-3S' },
    strongs: 'G5316',
    position: 6,
    lexiconRefs: [{ lexicon: 'strongs', entryId: 'G5316' }],
  },
  {
    id: 'John.1.5.7',
    language: 'greek',
    text: 'καὶ',
    transliteration: 'kai',
    lemma: 'καί',
    lemmaTranslit: 'kai',
    gloss: 'and',
    morphology: { pos: 'conjunction', rawCode: 'CONJ' },
    strongs: 'G2532',
    position: 7,
  },
  {
    id: 'John.1.5.8',
    language: 'greek',
    text: 'ἡ',
    transliteration: 'hē',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'feminine', number: 'singular', case: 'nominative', rawCode: 'T-NSF' },
    strongs: 'G3588',
    position: 8,
  },
  {
    id: 'John.1.5.9',
    language: 'greek',
    text: 'σκοτία',
    transliteration: 'skotia',
    lemma: 'σκοτία',
    lemmaTranslit: 'skotia',
    gloss: 'darkness',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative', rawCode: 'N-NSF' },
    strongs: 'G4653',
    position: 9,
  },
  {
    id: 'John.1.5.10',
    language: 'greek',
    text: 'αὐτὸ',
    transliteration: 'auto',
    lemma: 'αὐτός',
    lemmaTranslit: 'autos',
    gloss: 'it',
    morphology: { pos: 'pronoun', gender: 'neuter', number: 'singular', case: 'accusative', rawCode: 'P-ASN' },
    strongs: 'G846',
    position: 10,
  },
  {
    id: 'John.1.5.11',
    language: 'greek',
    text: 'οὐ',
    transliteration: 'ou',
    lemma: 'οὐ',
    lemmaTranslit: 'ou',
    gloss: 'not',
    morphology: { pos: 'adverb', rawCode: 'ADV-N' },
    strongs: 'G3756',
    position: 11,
  },
  {
    id: 'John.1.5.12',
    language: 'greek',
    text: 'κατέλαβεν',
    transliteration: 'katelaben',
    lemma: 'καταλαμβάνω',
    lemmaTranslit: 'katalambanō',
    gloss: 'overcame',
    glossExtended: 'seized, overtook, comprehended, overcame',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative', rawCode: 'V-2AAI-3S' },
    strongs: 'G2638',
    position: 12,
    lexiconRefs: [{ lexicon: 'strongs', entryId: 'G2638' }, { lexicon: 'bdag', entryId: 'καταλαμβάνω' }],
  },
];

// Translation for John 1:4
export const john1_4_translation: VerseTranslation = {
  verseRef: 'John.1.4',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'In him life was, and the life was the light of men.',
      spans: [
        { id: 'John.1.4.en.lit.0', text: 'In him', position: 0, sourceTokenIds: ['John.1.4.0', 'John.1.4.1'], confidence: 'high' },
        { id: 'John.1.4.en.lit.1', text: 'life was,', position: 1, sourceTokenIds: ['John.1.4.2', 'John.1.4.3'], confidence: 'high' },
        { id: 'John.1.4.en.lit.2', text: 'and the life', position: 2, sourceTokenIds: ['John.1.4.4', 'John.1.4.5', 'John.1.4.6'], confidence: 'high' },
        { id: 'John.1.4.en.lit.3', text: 'was the light', position: 3, sourceTokenIds: ['John.1.4.7', 'John.1.4.8', 'John.1.4.9'], confidence: 'high' },
        { id: 'John.1.4.en.lit.4', text: 'of men.', position: 4, sourceTokenIds: ['John.1.4.10', 'John.1.4.11'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'In him was life, and that life was the light of all mankind.',
      spans: [
        { id: 'John.1.4.en.idi.0', text: 'In him was life,', position: 0, sourceTokenIds: ['John.1.4.0', 'John.1.4.1', 'John.1.4.2', 'John.1.4.3'], confidence: 'high' },
        { id: 'John.1.4.en.idi.1', text: 'and that life was the light of all mankind.', position: 1, sourceTokenIds: ['John.1.4.4', 'John.1.4.5', 'John.1.4.6', 'John.1.4.7', 'John.1.4.8', 'John.1.4.9', 'John.1.4.10', 'John.1.4.11'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    literary: {
      type: 'literary',
      targetLanguage: 'en',
      text: 'Life itself dwelt in him—and this life became the illumination of humanity.',
      spans: [
        { id: 'John.1.4.en.lit2.0', text: 'Life itself dwelt in him—', position: 0, sourceTokenIds: ['John.1.4.0', 'John.1.4.1', 'John.1.4.2', 'John.1.4.3'], confidence: 'high' },
        { id: 'John.1.4.en.lit2.1', text: 'and this life became the illumination of humanity.', position: 1, sourceTokenIds: ['John.1.4.4', 'John.1.4.5', 'John.1.4.6', 'John.1.4.7', 'John.1.4.8', 'John.1.4.9', 'John.1.4.10', 'John.1.4.11'], confidence: 'high' },
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

// Translation for John 1:5
export const john1_5_translation: VerseTranslation = {
  verseRef: 'John.1.5',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And the light in the darkness shines, and the darkness it not overcame.',
      spans: [
        { id: 'John.1.5.en.lit.0', text: 'And the light', position: 0, sourceTokenIds: ['John.1.5.0', 'John.1.5.1', 'John.1.5.2'], confidence: 'high' },
        { id: 'John.1.5.en.lit.1', text: 'in the darkness shines,', position: 1, sourceTokenIds: ['John.1.5.3', 'John.1.5.4', 'John.1.5.5', 'John.1.5.6'], confidence: 'high' },
        { id: 'John.1.5.en.lit.2', text: 'and the darkness it not overcame.', position: 2, sourceTokenIds: ['John.1.5.7', 'John.1.5.8', 'John.1.5.9', 'John.1.5.10', 'John.1.5.11', 'John.1.5.12'], confidence: 'medium', alternatives: [{ text: 'not comprehended', reason: 'κατέλαβεν can mean comprehend or overcome' }] },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'The light shines in the darkness, and the darkness has not overcome it.',
      spans: [
        { id: 'John.1.5.en.idi.0', text: 'The light shines in the darkness,', position: 0, sourceTokenIds: ['John.1.5.0', 'John.1.5.1', 'John.1.5.2', 'John.1.5.3', 'John.1.5.4', 'John.1.5.5', 'John.1.5.6'], confidence: 'high' },
        { id: 'John.1.5.en.idi.1', text: 'and the darkness has not overcome it.', position: 1, sourceTokenIds: ['John.1.5.7', 'John.1.5.8', 'John.1.5.9', 'John.1.5.10', 'John.1.5.11', 'John.1.5.12'], confidence: 'medium' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    literary: {
      type: 'literary',
      targetLanguage: 'en',
      text: 'The light blazes on in the darkness—a darkness that could never extinguish it.',
      spans: [
        { id: 'John.1.5.en.lit2.0', text: 'The light blazes on in the darkness—', position: 0, sourceTokenIds: ['John.1.5.0', 'John.1.5.1', 'John.1.5.2', 'John.1.5.3', 'John.1.5.4', 'John.1.5.5', 'John.1.5.6'], confidence: 'high' },
        { id: 'John.1.5.en.lit2.1', text: 'a darkness that could never extinguish it.', position: 1, sourceTokenIds: ['John.1.5.7', 'John.1.5.8', 'John.1.5.9', 'John.1.5.10', 'John.1.5.11', 'John.1.5.12'], confidence: 'medium' },
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

// Study notes for John 1:4
export const john1_4_notes: StudyNote[] = [
  {
    id: 'John.1.4.note.1',
    verseRef: 'John.1.4',
    sourceTokenIds: ['John.1.4.2', 'John.1.4.6'],
    category: 'lexical',
    title: 'ζωή (zōē) - Life in John',
    content: `The Greek word ζωή (zōē, "life") is a key Johannine term, appearing 36 times in John's Gospel.

**Distinction from βίος (bios):**
While Greek has βίος (bios) for physical/biological life, John uses ζωή to emphasize spiritual and eternal life—the quality of life that comes from relationship with God.

**Johannine Usage:**
- "In him was life" (1:4)
- "I am the way, truth, and life" (14:6)
- "I came that they may have life" (10:10)
- "Eternal life" (ζωὴ αἰώνιος) appears 17 times

This verse establishes that the Logos is the source of all life, connecting to the creation theme of Genesis 1.`,
    confidence: 'high',
    authorType: 'ai',
    metadata: { generatedAt: new Date().toISOString() },
  },
  {
    id: 'John.1.4.note.2',
    verseRef: 'John.1.4',
    sourceTokenIds: ['John.1.4.9'],
    category: 'theological',
    title: 'φῶς (phōs) - Light as Revelation',
    content: `The light/darkness motif is central to John's Gospel and connects to broader biblical theology.

**Old Testament Background:**
- God's first creative act: "Let there be light" (Gen 1:3)
- God is light (Ps 27:1; Isa 60:1)
- The servant as "a light for the nations" (Isa 42:6; 49:6)

**Johannine Development:**
John uses φῶς 23 times, developing a dualistic framework:
- Light = truth, life, God, revelation, Christ
- Darkness = falsehood, death, evil, ignorance, Satan

The statement that "life was the light of men" connects salvation (life) with revelation (light). To have Christ's life is to receive illumination about God.`,
    confidence: 'high',
    authorType: 'ai',
    metadata: { generatedAt: new Date().toISOString() },
  },
];

// Study notes for John 1:5
export const john1_5_notes: StudyNote[] = [
  {
    id: 'John.1.5.note.1',
    verseRef: 'John.1.5',
    sourceTokenIds: ['John.1.5.12'],
    category: 'translation-choice',
    title: 'κατέλαβεν - Overcome or Comprehend?',
    content: `The verb κατέλαβεν (katelaben, from καταλαμβάνω) is a famous translation crux with two main options:

**1. "Overcome/Overpower"**
- Suggests the darkness tried to extinguish the light but failed
- Emphasizes the conflict between light and darkness
- NIV: "has not overcome it"
- ESV: "has not overcome it"

**2. "Comprehend/Understand"**
- Suggests the darkness could not grasp or understand the light
- Emphasizes epistemological darkness
- KJV: "comprehended it not"

**Both meanings may be intended:**
John often uses double-meaning words (cf. ἄνωθεν in 3:3—"again" or "from above"). The darkness both:
- Cannot understand the light (intellectual failure)
- Cannot defeat the light (spiritual impotence)

Most modern translations prefer "overcome" as the primary meaning, though the ambiguity enriches the text.`,
    confidence: 'high',
    isContested: true,
    positions: [
      { name: 'Overcome', description: 'Darkness failed to extinguish the light' },
      { name: 'Comprehend', description: 'Darkness failed to understand the light' },
      { name: 'Both', description: 'Intentional double meaning (common in John)' },
    ],
    authorType: 'ai',
    metadata: { generatedAt: new Date().toISOString() },
  },
  {
    id: 'John.1.5.note.2',
    verseRef: 'John.1.5',
    sourceTokenIds: ['John.1.5.6'],
    category: 'lexical',
    title: 'φαίνει - The Light Keeps Shining',
    content: `The verb φαίνει (phainei, "shines") is in the present tense, contrasting with the aorist κατέλαβεν ("overcame/comprehended").

**Tense Significance:**
- Present (φαίνει): continuous, ongoing action—the light keeps shining
- Aorist (κατέλαβεν): point action—the darkness tried but failed

This tense contrast emphasizes:
1. The perpetual, undefeatable nature of the divine light
2. The decisive failure of darkness to overcome it

The light's shining is not a past event but an ongoing reality—relevant to John's readers and to all time.`,
    confidence: 'high',
    authorType: 'ai',
    metadata: { generatedAt: new Date().toISOString() },
  },
];

// Export extended verse data
export const extendedJohnVerses = [
  {
    ref: 'John.1.4',
    sourceTokens: john1_4_tokens,
    translation: john1_4_translation,
    notes: john1_4_notes,
  },
  {
    ref: 'John.1.5',
    sourceTokens: john1_5_tokens,
    translation: john1_5_translation,
    notes: john1_5_notes,
  },
];

export default extendedJohnVerses;
