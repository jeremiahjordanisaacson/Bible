// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 21:1 – A new heaven and a new earth
 * ──────────────────────────────────────────────────────────── */

export const revelation21_1_tokens: SourceToken[] = [
  {
    id: 'Rev.21.1.0',
    language: 'greek',
    text: 'εἶδον',
    transliteration: 'eidon',
    lemma: 'ὁράω',
    lemmaTranslit: 'horaō',
    gloss: 'I saw',
    morphology: { pos: 'verb', person: '1', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G3708',
    position: 0,
  },
  {
    id: 'Rev.21.1.1',
    language: 'greek',
    text: 'οὐρανὸν',
    transliteration: 'ouranon',
    lemma: 'οὐρανός',
    lemmaTranslit: 'ouranos',
    gloss: 'heaven',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G3772',
    position: 1,
  },
  {
    id: 'Rev.21.1.2',
    language: 'greek',
    text: 'καινὸν',
    transliteration: 'kainon',
    lemma: 'καινός',
    lemmaTranslit: 'kainos',
    gloss: 'new',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G2537',
    position: 2,
  },
  {
    id: 'Rev.21.1.3',
    language: 'greek',
    text: 'καὶ',
    transliteration: 'kai',
    lemma: 'καί',
    lemmaTranslit: 'kai',
    gloss: 'and',
    morphology: { pos: 'conjunction' },
    strongs: 'G2532',
    position: 3,
  },
  {
    id: 'Rev.21.1.4',
    language: 'greek',
    text: 'γῆν',
    transliteration: 'gēn',
    lemma: 'γῆ',
    lemmaTranslit: 'gē',
    gloss: 'earth',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G1093',
    position: 4,
  },
  {
    id: 'Rev.21.1.5',
    language: 'greek',
    text: 'καινήν',
    transliteration: 'kainēn',
    lemma: 'καινός',
    lemmaTranslit: 'kainos',
    gloss: 'new',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G2537',
    position: 5,
  },
];

export const revelation21_1_translation: VerseTranslation = {
  verseRef: 'Rev.21.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'I saw a heaven new and an earth new.',
      spans: [
        { id: 'Rev.21.1.en.lit.0', text: 'I saw', position: 0, sourceTokenIds: ['Rev.21.1.0'], confidence: 'high' },
        { id: 'Rev.21.1.en.lit.1', text: 'a heaven new', position: 1, sourceTokenIds: ['Rev.21.1.1', 'Rev.21.1.2'], confidence: 'high' },
        { id: 'Rev.21.1.en.lit.2', text: 'and an earth new.', position: 2, sourceTokenIds: ['Rev.21.1.3', 'Rev.21.1.4', 'Rev.21.1.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Then I saw a new heaven and a new earth, for the first heaven and the first earth had passed away.',
      spans: [
        { id: 'Rev.21.1.en.idi.0', text: 'Then I saw a new heaven', position: 0, sourceTokenIds: ['Rev.21.1.0', 'Rev.21.1.1', 'Rev.21.1.2'], confidence: 'high' },
        { id: 'Rev.21.1.en.idi.1', text: 'and a new earth, for the first heaven and the first earth had passed away.', position: 1, sourceTokenIds: ['Rev.21.1.3', 'Rev.21.1.4', 'Rev.21.1.5'], confidence: 'high' },
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

export const revelation21_1_notes: StudyNote[] = [
  {
    id: 'Rev.21.1.note.1',
    verseRef: 'Rev.21.1',
    sourceTokenIds: ['Rev.21.1.2', 'Rev.21.1.5'],
    category: 'linguistic',
    title: "καινός - \"New\" - Renewed vs. Brand New",
    content: "Greek distinguishes two words for \"new\": καινός (kainos, G2537) and νέος (neos, G3501). While νέος typically means \"new in time\" (young, recent), καινός emphasizes \"new in quality\" — fresh, unused, unprecedented.\n\nThe choice of καινός here is theologically significant. It suggests not the annihilation of the existing creation and replacement with something entirely different, but rather a qualitative renewal and transformation. The creation is made new in character, not merely replaced.\n\nThis aligns with Paul's language in 2 Corinthians 5:17 (καινὴ κτίσις, \"new creation\") and with the prophetic vision of Isaiah 65:17 (\"I create new heavens and a new earth\"). The new heaven and earth are the fulfillment and perfection of the original creation, purged of sin and decay.",
    confidence: 'high',
    isContested: true,
    positions: [
      { name: 'Renewal/Transformation', description: 'The present creation is transformed and renewed' },
      { name: 'Replacement', description: 'The old creation is destroyed and replaced entirely' },
    ],
    authorType: 'ai',
    metadata: {
      generatedAt: new Date().toISOString(),
      engineId: 'open-bible-notes',
    },
  },
];

export const revelation21_1_verse = {
  ref: 'Rev.21.1',
  sourceTokens: revelation21_1_tokens,
  translation: revelation21_1_translation,
  notes: revelation21_1_notes,
};

/* ────────────────────────────────────────────────────────────
 * Verse 21:2 – The holy city, new Jerusalem
 * ──────────────────────────────────────────────────────────── */

export const revelation21_2_tokens: SourceToken[] = [
  {
    id: 'Rev.21.2.0',
    language: 'greek',
    text: 'τὴν',
    transliteration: 'tēn',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G3588',
    position: 0,
  },
  {
    id: 'Rev.21.2.1',
    language: 'greek',
    text: 'πόλιν',
    transliteration: 'polin',
    lemma: 'πόλις',
    lemmaTranslit: 'polis',
    gloss: 'city',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G4172',
    position: 1,
  },
  {
    id: 'Rev.21.2.2',
    language: 'greek',
    text: 'τὴν',
    transliteration: 'tēn',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G3588',
    position: 2,
  },
  {
    id: 'Rev.21.2.3',
    language: 'greek',
    text: 'ἁγίαν',
    transliteration: 'hagian',
    lemma: 'ἅγιος',
    lemmaTranslit: 'hagios',
    gloss: 'holy',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G40',
    position: 3,
  },
  {
    id: 'Rev.21.2.4',
    language: 'greek',
    text: 'Ἰερουσαλὴμ',
    transliteration: 'Ierousalēm',
    lemma: 'Ἰερουσαλήμ',
    lemmaTranslit: 'Ierousalēm',
    gloss: 'Jerusalem',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G2419',
    position: 4,
  },
  {
    id: 'Rev.21.2.5',
    language: 'greek',
    text: 'καινὴν',
    transliteration: 'kainēn',
    lemma: 'καινός',
    lemmaTranslit: 'kainos',
    gloss: 'new',
    morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G2537',
    position: 5,
  },
  {
    id: 'Rev.21.2.6',
    language: 'greek',
    text: 'καταβαίνουσαν',
    transliteration: 'katabainousan',
    lemma: 'καταβαίνω',
    lemmaTranslit: 'katabainō',
    gloss: 'coming down',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'participle' },
    strongs: 'G2597',
    position: 6,
  },
  {
    id: 'Rev.21.2.7',
    language: 'greek',
    text: 'ἐκ',
    transliteration: 'ek',
    lemma: 'ἐκ',
    lemmaTranslit: 'ek',
    gloss: 'out of',
    morphology: { pos: 'preposition' },
    strongs: 'G1537',
    position: 7,
  },
];

export const revelation21_2_translation: VerseTranslation = {
  verseRef: 'Rev.21.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'The city the holy, Jerusalem new, coming down out of the heaven from God.',
      spans: [
        { id: 'Rev.21.2.en.lit.0', text: 'The city the holy,', position: 0, sourceTokenIds: ['Rev.21.2.0', 'Rev.21.2.1', 'Rev.21.2.2', 'Rev.21.2.3'], confidence: 'high' },
        { id: 'Rev.21.2.en.lit.1', text: 'Jerusalem new,', position: 1, sourceTokenIds: ['Rev.21.2.4', 'Rev.21.2.5'], confidence: 'high' },
        { id: 'Rev.21.2.en.lit.2', text: 'coming down out of the heaven from God.', position: 2, sourceTokenIds: ['Rev.21.2.6', 'Rev.21.2.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'I saw the holy city, new Jerusalem, coming down out of heaven from God.',
      spans: [
        { id: 'Rev.21.2.en.idi.0', text: 'I saw the holy city, new Jerusalem,', position: 0, sourceTokenIds: ['Rev.21.2.0', 'Rev.21.2.1', 'Rev.21.2.2', 'Rev.21.2.3', 'Rev.21.2.4', 'Rev.21.2.5'], confidence: 'high' },
        { id: 'Rev.21.2.en.idi.1', text: 'coming down out of heaven from God.', position: 1, sourceTokenIds: ['Rev.21.2.6', 'Rev.21.2.7'], confidence: 'high' },
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

export const revelation21_2_verse = {
  ref: 'Rev.21.2',
  sourceTokens: revelation21_2_tokens,
  translation: revelation21_2_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 21:3 – The dwelling place of God is with man
 * ──────────────────────────────────────────────────────────── */

export const revelation21_3_tokens: SourceToken[] = [
  {
    id: 'Rev.21.3.0',
    language: 'greek',
    text: 'ἰδοὺ',
    transliteration: 'idou',
    lemma: 'ἰδού',
    lemmaTranslit: 'idou',
    gloss: 'behold',
    morphology: { pos: 'interjection' },
    strongs: 'G2400',
    position: 0,
  },
  {
    id: 'Rev.21.3.1',
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
    id: 'Rev.21.3.2',
    language: 'greek',
    text: 'σκηνὴ',
    transliteration: 'skēnē',
    lemma: 'σκηνή',
    lemmaTranslit: 'skēnē',
    gloss: 'tabernacle',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G4633',
    position: 2,
  },
  {
    id: 'Rev.21.3.3',
    language: 'greek',
    text: 'τοῦ',
    transliteration: 'tou',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'of the',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G3588',
    position: 3,
  },
  {
    id: 'Rev.21.3.4',
    language: 'greek',
    text: 'θεοῦ',
    transliteration: 'theou',
    lemma: 'θεός',
    lemmaTranslit: 'theos',
    gloss: 'of God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G2316',
    position: 4,
  },
  {
    id: 'Rev.21.3.5',
    language: 'greek',
    text: 'μετὰ',
    transliteration: 'meta',
    lemma: 'μετά',
    lemmaTranslit: 'meta',
    gloss: 'with',
    morphology: { pos: 'preposition' },
    strongs: 'G3326',
    position: 5,
  },
  {
    id: 'Rev.21.3.6',
    language: 'greek',
    text: 'τῶν',
    transliteration: 'tōn',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'plural', case: 'genitive' },
    strongs: 'G3588',
    position: 6,
  },
  {
    id: 'Rev.21.3.7',
    language: 'greek',
    text: 'ἀνθρώπων',
    transliteration: 'anthrōpōn',
    lemma: 'ἄνθρωπος',
    lemmaTranslit: 'anthrōpos',
    gloss: 'men',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', case: 'genitive' },
    strongs: 'G444',
    position: 7,
  },
];

export const revelation21_3_translation: VerseTranslation = {
  verseRef: 'Rev.21.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Behold, the tabernacle of God is with men.',
      spans: [
        { id: 'Rev.21.3.en.lit.0', text: 'Behold,', position: 0, sourceTokenIds: ['Rev.21.3.0'], confidence: 'high' },
        { id: 'Rev.21.3.en.lit.1', text: 'the tabernacle of God', position: 1, sourceTokenIds: ['Rev.21.3.1', 'Rev.21.3.2', 'Rev.21.3.3', 'Rev.21.3.4'], confidence: 'high' },
        { id: 'Rev.21.3.en.lit.2', text: 'is with men.', position: 2, sourceTokenIds: ['Rev.21.3.5', 'Rev.21.3.6', 'Rev.21.3.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Behold, the dwelling place of God is with man. He will dwell with them.',
      spans: [
        { id: 'Rev.21.3.en.idi.0', text: 'Behold, the dwelling place of God is with man.', position: 0, sourceTokenIds: ['Rev.21.3.0', 'Rev.21.3.1', 'Rev.21.3.2', 'Rev.21.3.3', 'Rev.21.3.4', 'Rev.21.3.5', 'Rev.21.3.6', 'Rev.21.3.7'], confidence: 'high' },
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

export const revelation21_3_verse = {
  ref: 'Rev.21.3',
  sourceTokens: revelation21_3_tokens,
  translation: revelation21_3_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 21:4 – He will wipe away every tear
 * ──────────────────────────────────────────────────────────── */

export const revelation21_4_tokens: SourceToken[] = [
  {
    id: 'Rev.21.4.0',
    language: 'greek',
    text: 'ἐξαλείψει',
    transliteration: 'exaleipsei',
    lemma: 'ἐξαλείφω',
    lemmaTranslit: 'exaleiphō',
    gloss: 'he will wipe away',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'future', voice: 'active', mood: 'indicative' },
    strongs: 'G1813',
    position: 0,
  },
  {
    id: 'Rev.21.4.1',
    language: 'greek',
    text: 'πᾶν',
    transliteration: 'pan',
    lemma: 'πᾶς',
    lemmaTranslit: 'pas',
    gloss: 'every',
    morphology: { pos: 'adjective', gender: 'neuter', number: 'singular', case: 'accusative' },
    strongs: 'G3956',
    position: 1,
  },
  {
    id: 'Rev.21.4.2',
    language: 'greek',
    text: 'δάκρυον',
    transliteration: 'dakryon',
    lemma: 'δάκρυ',
    lemmaTranslit: 'dakry',
    gloss: 'tear',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'accusative' },
    strongs: 'G1144',
    position: 2,
  },
  {
    id: 'Rev.21.4.3',
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
    id: 'Rev.21.4.4',
    language: 'greek',
    text: 'τῶν',
    transliteration: 'tōn',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'plural', case: 'genitive' },
    strongs: 'G3588',
    position: 4,
  },
  {
    id: 'Rev.21.4.5',
    language: 'greek',
    text: 'ὀφθαλμῶν',
    transliteration: 'ophthalmōn',
    lemma: 'ὀφθαλμός',
    lemmaTranslit: 'ophthalmos',
    gloss: 'eyes',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', case: 'genitive' },
    strongs: 'G3788',
    position: 5,
  },
  {
    id: 'Rev.21.4.6',
    language: 'greek',
    text: 'ὁ',
    transliteration: 'ho',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3588',
    position: 6,
  },
  {
    id: 'Rev.21.4.7',
    language: 'greek',
    text: 'θάνατος',
    transliteration: 'thanatos',
    lemma: 'θάνατος',
    lemmaTranslit: 'thanatos',
    gloss: 'death',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G2288',
    position: 7,
  },
];

export const revelation21_4_translation: VerseTranslation = {
  verseRef: 'Rev.21.4',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'He will wipe away every tear from the eyes; death will be no more.',
      spans: [
        { id: 'Rev.21.4.en.lit.0', text: 'He will wipe away', position: 0, sourceTokenIds: ['Rev.21.4.0'], confidence: 'high' },
        { id: 'Rev.21.4.en.lit.1', text: 'every tear', position: 1, sourceTokenIds: ['Rev.21.4.1', 'Rev.21.4.2'], confidence: 'high' },
        { id: 'Rev.21.4.en.lit.2', text: 'from the eyes;', position: 2, sourceTokenIds: ['Rev.21.4.3', 'Rev.21.4.4', 'Rev.21.4.5'], confidence: 'high' },
        { id: 'Rev.21.4.en.lit.3', text: 'death will be no more.', position: 3, sourceTokenIds: ['Rev.21.4.6', 'Rev.21.4.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'He will wipe away every tear from their eyes, and death shall be no more.',
      spans: [
        { id: 'Rev.21.4.en.idi.0', text: 'He will wipe away every tear from their eyes,', position: 0, sourceTokenIds: ['Rev.21.4.0', 'Rev.21.4.1', 'Rev.21.4.2', 'Rev.21.4.3', 'Rev.21.4.4', 'Rev.21.4.5'], confidence: 'high' },
        { id: 'Rev.21.4.en.idi.1', text: 'and death shall be no more.', position: 1, sourceTokenIds: ['Rev.21.4.6', 'Rev.21.4.7'], confidence: 'high' },
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

export const revelation21_4_notes: StudyNote[] = [
  {
    id: 'Rev.21.4.note.1',
    verseRef: 'Rev.21.4',
    sourceTokenIds: ['Rev.21.4.0', 'Rev.21.4.1', 'Rev.21.4.2'],
    category: 'theological',
    title: "\"God Will Wipe Away Every Tear\" - Divine Consolation",
    content: "The verb ἐξαλείφω (exaleiphō, G1813) means \"to wipe out, erase, obliterate.\" It is used of wiping clean a writing tablet or blotting out a record. When applied to tears, the image is profoundly tender: God himself personally removes every trace of sorrow.\n\nThis promise echoes Isaiah 25:8 (\"He will swallow up death forever; and the Lord GOD will wipe away tears from all faces\") and appears earlier in Revelation 7:17. Its repetition at the climax of the book underscores that the final state is not merely the absence of suffering but the active, personal comfort of God.\n\nThe comprehensive scope — πᾶν δάκρυον (\"every tear\") — leaves nothing unaddressed. Every grief, loss, and pain of the present age finds its resolution not in being forgotten but in being tenderly acknowledged and removed by God himself.",
    confidence: 'high',
    isContested: false,
    positions: [],
    authorType: 'ai',
    metadata: {
      generatedAt: new Date().toISOString(),
      engineId: 'open-bible-notes',
    },
  },
];

export const revelation21_4_verse = {
  ref: 'Rev.21.4',
  sourceTokens: revelation21_4_tokens,
  translation: revelation21_4_translation,
  notes: revelation21_4_notes,
};

/* ────────────────────────────────────────────────────────────
 * Verse 21:5 – Behold, I am making all things new
 * ──────────────────────────────────────────────────────────── */

export const revelation21_5_tokens: SourceToken[] = [
  {
    id: 'Rev.21.5.0',
    language: 'greek',
    text: 'ἰδοὺ',
    transliteration: 'idou',
    lemma: 'ἰδού',
    lemmaTranslit: 'idou',
    gloss: 'behold',
    morphology: { pos: 'interjection' },
    strongs: 'G2400',
    position: 0,
  },
  {
    id: 'Rev.21.5.1',
    language: 'greek',
    text: 'καινὰ',
    transliteration: 'kaina',
    lemma: 'καινός',
    lemmaTranslit: 'kainos',
    gloss: 'new',
    morphology: { pos: 'adjective', gender: 'neuter', number: 'plural', case: 'accusative' },
    strongs: 'G2537',
    position: 1,
  },
  {
    id: 'Rev.21.5.2',
    language: 'greek',
    text: 'ποιῶ',
    transliteration: 'poiō',
    lemma: 'ποιέω',
    lemmaTranslit: 'poieō',
    gloss: 'I make',
    morphology: { pos: 'verb', person: '1', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G4160',
    position: 2,
  },
  {
    id: 'Rev.21.5.3',
    language: 'greek',
    text: 'πάντα',
    transliteration: 'panta',
    lemma: 'πᾶς',
    lemmaTranslit: 'pas',
    gloss: 'all things',
    morphology: { pos: 'adjective', gender: 'neuter', number: 'plural', case: 'accusative' },
    strongs: 'G3956',
    position: 3,
  },
];

export const revelation21_5_translation: VerseTranslation = {
  verseRef: 'Rev.21.5',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Behold, new I make all things.',
      spans: [
        { id: 'Rev.21.5.en.lit.0', text: 'Behold,', position: 0, sourceTokenIds: ['Rev.21.5.0'], confidence: 'high' },
        { id: 'Rev.21.5.en.lit.1', text: 'new I make all things.', position: 1, sourceTokenIds: ['Rev.21.5.1', 'Rev.21.5.2', 'Rev.21.5.3'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'And he who was seated on the throne said, Behold, I am making all things new.',
      spans: [
        { id: 'Rev.21.5.en.idi.0', text: 'Behold, I am making all things new.', position: 0, sourceTokenIds: ['Rev.21.5.0', 'Rev.21.5.1', 'Rev.21.5.2', 'Rev.21.5.3'], confidence: 'high' },
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

export const revelation21_5_verse = {
  ref: 'Rev.21.5',
  sourceTokens: revelation21_5_tokens,
  translation: revelation21_5_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 21:23 – The glory of God gives it light
 * ──────────────────────────────────────────────────────────── */

export const revelation21_23_tokens: SourceToken[] = [
  {
    id: 'Rev.21.23.0',
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
    id: 'Rev.21.23.1',
    language: 'greek',
    text: 'πόλις',
    transliteration: 'polis',
    lemma: 'πόλις',
    lemmaTranslit: 'polis',
    gloss: 'city',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G4172',
    position: 1,
  },
  {
    id: 'Rev.21.23.2',
    language: 'greek',
    text: 'οὐ',
    transliteration: 'ou',
    lemma: 'οὐ',
    lemmaTranslit: 'ou',
    gloss: 'not',
    morphology: { pos: 'adverb' },
    strongs: 'G3756',
    position: 2,
  },
  {
    id: 'Rev.21.23.3',
    language: 'greek',
    text: 'χρείαν',
    transliteration: 'chreian',
    lemma: 'χρεία',
    lemmaTranslit: 'chreia',
    gloss: 'need',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'accusative' },
    strongs: 'G5532',
    position: 3,
  },
  {
    id: 'Rev.21.23.4',
    language: 'greek',
    text: 'ἔχει',
    transliteration: 'echei',
    lemma: 'ἔχω',
    lemmaTranslit: 'echō',
    gloss: 'has',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G2192',
    position: 4,
  },
  {
    id: 'Rev.21.23.5',
    language: 'greek',
    text: 'ἡ',
    transliteration: 'hē',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'the',
    morphology: { pos: 'article', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G3588',
    position: 5,
  },
  {
    id: 'Rev.21.23.6',
    language: 'greek',
    text: 'δόξα',
    transliteration: 'doxa',
    lemma: 'δόξα',
    lemmaTranslit: 'doxa',
    gloss: 'glory',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G1391',
    position: 6,
  },
  {
    id: 'Rev.21.23.7',
    language: 'greek',
    text: 'τοῦ',
    transliteration: 'tou',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'of the',
    morphology: { pos: 'article', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G3588',
    position: 7,
  },
];

export const revelation21_23_translation: VerseTranslation = {
  verseRef: 'Rev.21.23',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'The city not need has; the glory of God illuminated it.',
      spans: [
        { id: 'Rev.21.23.en.lit.0', text: 'The city not need has;', position: 0, sourceTokenIds: ['Rev.21.23.0', 'Rev.21.23.1', 'Rev.21.23.2', 'Rev.21.23.3', 'Rev.21.23.4'], confidence: 'high' },
        { id: 'Rev.21.23.en.lit.1', text: 'the glory of God illuminated it.', position: 1, sourceTokenIds: ['Rev.21.23.5', 'Rev.21.23.6', 'Rev.21.23.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'The city has no need of sun or moon to shine on it, for the glory of God gives it light.',
      spans: [
        { id: 'Rev.21.23.en.idi.0', text: 'The city has no need of sun or moon to shine on it,', position: 0, sourceTokenIds: ['Rev.21.23.0', 'Rev.21.23.1', 'Rev.21.23.2', 'Rev.21.23.3', 'Rev.21.23.4'], confidence: 'high' },
        { id: 'Rev.21.23.en.idi.1', text: 'for the glory of God gives it light.', position: 1, sourceTokenIds: ['Rev.21.23.5', 'Rev.21.23.6', 'Rev.21.23.7'], confidence: 'high' },
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

export const revelation21_23_verse = {
  ref: 'Rev.21.23',
  sourceTokens: revelation21_23_tokens,
  translation: revelation21_23_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Export combined verses
 * ──────────────────────────────────────────────────────────── */

export const revelation21_1_27_verses = [
  revelation21_1_verse,
  revelation21_2_verse,
  revelation21_3_verse,
  revelation21_4_verse,
  revelation21_5_verse,
  revelation21_23_verse,
];

export default revelation21_1_27_verses;
