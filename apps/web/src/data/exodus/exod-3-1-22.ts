// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ------------------------------------------------------------------ */
/*  Exodus 3:1 – Moses keeping the flock of Jethro                   */
/* ------------------------------------------------------------------ */

export const exodus3_1_tokens: SourceToken[] = [
  {
    id: 'Exod.3.1.0',
    reference: 'Exod.3.1',
    language: 'hebrew',
    surfaceText: 'וּמֹשֶׁה',
    lemma: 'מֹשֶׁה',
    transliteration: "mōšeh",
    lemmaTranslit: "mōšeh",
    strongs: 'H4872',
    gloss: 'Moses',
    morphology: { pos: 'noun_proper', gender: 'masculine', number: 'singular', rawCode: 'Np' },
    position: 0,
  },
  {
    id: 'Exod.3.1.1',
    reference: 'Exod.3.1',
    language: 'hebrew',
    surfaceText: 'הָיָה',
    lemma: 'הָיָה',
    transliteration: 'hāyāh',
    lemmaTranslit: 'hāyāh',
    strongs: 'H1961',
    gloss: 'was',
    morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' },
    position: 1,
  },
  {
    id: 'Exod.3.1.2',
    reference: 'Exod.3.1',
    language: 'hebrew',
    surfaceText: 'רֹעֶה',
    lemma: 'רָעָה',
    transliteration: "rōʿeh",
    lemmaTranslit: "rāʿāh",
    strongs: 'H7462',
    gloss: 'keeping',
    morphology: { pos: 'verb', gender: 'masculine', number: 'singular', tense: 'participle', stem: 'qal', rawCode: 'Vqrmsa' },
    position: 2,
  },
  {
    id: 'Exod.3.1.3',
    reference: 'Exod.3.1',
    language: 'hebrew',
    surfaceText: 'אֶת־צֹאן',
    lemma: 'צֹאן',
    transliteration: "ṣōʾn",
    lemmaTranslit: "ṣōʾn",
    strongs: 'H6629',
    gloss: 'flock',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', rawCode: 'Ncfsa' },
    position: 3,
  },
  {
    id: 'Exod.3.1.4',
    reference: 'Exod.3.1',
    language: 'hebrew',
    surfaceText: 'יִתְרוֹ',
    lemma: 'יִתְרוֹ',
    transliteration: 'yiṯrô',
    lemmaTranslit: 'yiṯrô',
    strongs: 'H3503',
    gloss: 'Jethro',
    morphology: { pos: 'noun_proper', gender: 'masculine', number: 'singular', rawCode: 'Np' },
    position: 4,
  },
  {
    id: 'Exod.3.1.5',
    reference: 'Exod.3.1',
    language: 'hebrew',
    surfaceText: 'חֹרֵבָה',
    lemma: 'חֹרֵב',
    transliteration: 'ḥōrēḇ',
    lemmaTranslit: 'ḥōrēḇ',
    strongs: 'H2722',
    gloss: 'Horeb',
    morphology: { pos: 'noun_proper', gender: 'masculine', number: 'singular', rawCode: 'Np' },
    position: 5,
  },
];

export const exodus3_1_translation: VerseTranslation = {
  verseRef: 'Exod.3.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And Moses was keeping the flock of Jethro his father-in-law, the priest of Midian, and he led the flock to the far side of the wilderness and came to Horeb, the mountain of God.',
      spans: [
        { tokenIds: ['Exod.3.1.0'], translatedText: 'And Moses', confidence: 'high' },
        { tokenIds: ['Exod.3.1.1'], translatedText: 'was', confidence: 'high' },
        { tokenIds: ['Exod.3.1.2'], translatedText: 'keeping', confidence: 'high' },
        { tokenIds: ['Exod.3.1.3'], translatedText: 'the flock', confidence: 'high' },
        { tokenIds: ['Exod.3.1.4'], translatedText: 'of Jethro', confidence: 'high' },
        { tokenIds: ['Exod.3.1.5'], translatedText: 'to Horeb', confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Now Moses was tending the flock of his father-in-law Jethro, the priest of Midian, and he led the flock to the far side of the wilderness and came to Horeb, the mountain of God.',
      spans: [
        { tokenIds: ['Exod.3.1.0'], translatedText: 'Now Moses', confidence: 'high' },
        { tokenIds: ['Exod.3.1.2'], translatedText: 'was tending', confidence: 'high' },
        { tokenIds: ['Exod.3.1.3'], translatedText: 'the flock', confidence: 'high' },
        { tokenIds: ['Exod.3.1.4'], translatedText: 'of Jethro', confidence: 'high' },
        { tokenIds: ['Exod.3.1.5'], translatedText: 'to Horeb', confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const exodus3_1_verse = {
  ref: 'Exod.3.1',
  sourceTokens: exodus3_1_tokens,
  translation: exodus3_1_translation,
  notes: [] as StudyNote[],
};

/* ------------------------------------------------------------------ */
/*  Exodus 3:2 – Angel of the LORD in fire from the bush              */
/* ------------------------------------------------------------------ */

export const exodus3_2_tokens: SourceToken[] = [
  {
    id: 'Exod.3.2.0',
    reference: 'Exod.3.2',
    language: 'hebrew',
    surfaceText: 'וַיֵּרָא',
    lemma: 'רָאָה',
    transliteration: "wayyērāʾ",
    lemmaTranslit: "rāʾāh",
    strongs: 'H7200',
    gloss: 'appeared',
    morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'niphal', rawCode: 'Vni3ms' },
    position: 0,
  },
  {
    id: 'Exod.3.2.1',
    reference: 'Exod.3.2',
    language: 'hebrew',
    surfaceText: 'מַלְאַךְ',
    lemma: 'מַלְאָךְ',
    transliteration: "malʾāḵ",
    lemmaTranslit: "malʾāḵ",
    strongs: 'H4397',
    gloss: 'angel',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsa' },
    position: 1,
  },
  {
    id: 'Exod.3.2.2',
    reference: 'Exod.3.2',
    language: 'hebrew',
    surfaceText: 'יְהוָה',
    lemma: 'יְהוָה',
    transliteration: 'yhwh',
    lemmaTranslit: 'yhwh',
    strongs: 'H3068',
    gloss: 'LORD',
    morphology: { pos: 'noun_proper', rawCode: 'Np' },
    position: 2,
  },
  {
    id: 'Exod.3.2.3',
    reference: 'Exod.3.2',
    language: 'hebrew',
    surfaceText: 'אֵשׁ',
    lemma: 'אֵשׁ',
    transliteration: "ʾēš",
    lemmaTranslit: "ʾēš",
    strongs: 'H784',
    gloss: 'fire',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', rawCode: 'Ncfsa' },
    position: 3,
  },
  {
    id: 'Exod.3.2.4',
    reference: 'Exod.3.2',
    language: 'hebrew',
    surfaceText: 'הַסְּנֶה',
    lemma: 'סְנֶה',
    transliteration: 'hassǝneh',
    lemmaTranslit: 'sǝneh',
    strongs: 'H5572',
    gloss: 'bush',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' },
    position: 4,
  },
];

export const exodus3_2_translation: VerseTranslation = {
  verseRef: 'Exod.3.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And the angel of the LORD appeared to him in a flame of fire from the midst of the bush, and he looked, and behold, the bush was burning with fire, yet the bush was not consumed.',
      spans: [
        { tokenIds: ['Exod.3.2.0'], translatedText: 'appeared', confidence: 'high' },
        { tokenIds: ['Exod.3.2.1'], translatedText: 'the angel of', confidence: 'high' },
        { tokenIds: ['Exod.3.2.2'], translatedText: 'the LORD', confidence: 'high' },
        { tokenIds: ['Exod.3.2.3'], translatedText: 'of fire', confidence: 'high' },
        { tokenIds: ['Exod.3.2.4'], translatedText: 'the bush', confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'There the angel of the LORD appeared to him in flames of fire from within a bush. Moses saw that though the bush was on fire it did not burn up.',
      spans: [
        { tokenIds: ['Exod.3.2.0'], translatedText: 'appeared', confidence: 'high' },
        { tokenIds: ['Exod.3.2.1'], translatedText: 'the angel of', confidence: 'high' },
        { tokenIds: ['Exod.3.2.2'], translatedText: 'the LORD', confidence: 'high' },
        { tokenIds: ['Exod.3.2.3'], translatedText: 'in flames of fire', confidence: 'high' },
        { tokenIds: ['Exod.3.2.4'], translatedText: 'the bush', confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const exodus3_2_verse = {
  ref: 'Exod.3.2',
  sourceTokens: exodus3_2_tokens,
  translation: exodus3_2_translation,
  notes: [] as StudyNote[],
};

/* ------------------------------------------------------------------ */
/*  Exodus 3:4 – God called to him from the bush                      */
/* ------------------------------------------------------------------ */

export const exodus3_4_tokens: SourceToken[] = [
  {
    id: 'Exod.3.4.0',
    reference: 'Exod.3.4',
    language: 'hebrew',
    surfaceText: 'וַיִּקְרָא',
    lemma: 'קָרָא',
    transliteration: "wayyiqrāʾ",
    lemmaTranslit: "qārāʾ",
    strongs: 'H7121',
    gloss: 'called',
    morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi3ms' },
    position: 0,
  },
  {
    id: 'Exod.3.4.1',
    reference: 'Exod.3.4',
    language: 'hebrew',
    surfaceText: 'אֱלֹהִים',
    lemma: 'אֱלֹהִים',
    transliteration: "ʾĕlōhîm",
    lemmaTranslit: "ʾĕlōhîm",
    strongs: 'H430',
    gloss: 'God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' },
    position: 1,
  },
  {
    id: 'Exod.3.4.2',
    reference: 'Exod.3.4',
    language: 'hebrew',
    surfaceText: 'הַסְּנֶה',
    lemma: 'סְנֶה',
    transliteration: 'hassǝneh',
    lemmaTranslit: 'sǝneh',
    strongs: 'H5572',
    gloss: 'bush',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' },
    position: 2,
  },
  {
    id: 'Exod.3.4.3',
    reference: 'Exod.3.4',
    language: 'hebrew',
    surfaceText: 'מֹשֶׁה',
    lemma: 'מֹשֶׁה',
    transliteration: "mōšeh",
    lemmaTranslit: "mōšeh",
    strongs: 'H4872',
    gloss: 'Moses',
    morphology: { pos: 'noun_proper', gender: 'masculine', number: 'singular', rawCode: 'Np' },
    position: 3,
  },
  {
    id: 'Exod.3.4.4',
    reference: 'Exod.3.4',
    language: 'hebrew',
    surfaceText: 'מֹשֶׁה',
    lemma: 'מֹשֶׁה',
    transliteration: "mōšeh",
    lemmaTranslit: "mōšeh",
    strongs: 'H4872',
    gloss: 'Moses',
    morphology: { pos: 'noun_proper', gender: 'masculine', number: 'singular', rawCode: 'Np' },
    position: 4,
  },
];

export const exodus3_4_translation: VerseTranslation = {
  verseRef: 'Exod.3.4',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And when the LORD saw that he turned aside to see, God called to him from the midst of the bush and said, Moses, Moses! And he said, Here I am.',
      spans: [
        { tokenIds: ['Exod.3.4.0'], translatedText: 'called', confidence: 'high' },
        { tokenIds: ['Exod.3.4.1'], translatedText: 'God', confidence: 'high' },
        { tokenIds: ['Exod.3.4.2'], translatedText: 'the bush', confidence: 'high' },
        { tokenIds: ['Exod.3.4.3', 'Exod.3.4.4'], translatedText: 'Moses, Moses', confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'When the LORD saw that he had gone over to look, God called to him from within the bush, "Moses! Moses!" And Moses said, "Here I am."',
      spans: [
        { tokenIds: ['Exod.3.4.0'], translatedText: 'called', confidence: 'high' },
        { tokenIds: ['Exod.3.4.1'], translatedText: 'God', confidence: 'high' },
        { tokenIds: ['Exod.3.4.2'], translatedText: 'the bush', confidence: 'high' },
        { tokenIds: ['Exod.3.4.3', 'Exod.3.4.4'], translatedText: 'Moses! Moses!', confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const exodus3_4_verse = {
  ref: 'Exod.3.4',
  sourceTokens: exodus3_4_tokens,
  translation: exodus3_4_translation,
  notes: [] as StudyNote[],
};

/* ------------------------------------------------------------------ */
/*  Exodus 3:5 – Holy ground                                          */
/* ------------------------------------------------------------------ */

export const exodus3_5_tokens: SourceToken[] = [
  {
    id: 'Exod.3.5.0',
    reference: 'Exod.3.5',
    language: 'hebrew',
    surfaceText: 'אַל־תִּקְרַב',
    lemma: 'קָרַב',
    transliteration: "ʾal-tiqraḇ",
    lemmaTranslit: 'qāraḇ',
    strongs: 'H7126',
    gloss: 'come near',
    morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi2ms' },
    position: 0,
  },
  {
    id: 'Exod.3.5.1',
    reference: 'Exod.3.5',
    language: 'hebrew',
    surfaceText: 'שַׁל',
    lemma: 'שָׁלַל',
    transliteration: 'šal',
    lemmaTranslit: 'šālal',
    strongs: 'H7953',
    gloss: 'take off',
    morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'imperative', stem: 'qal', rawCode: 'Vqv2ms' },
    position: 1,
  },
  {
    id: 'Exod.3.5.2',
    reference: 'Exod.3.5',
    language: 'hebrew',
    surfaceText: 'נְעָלֶיךָ',
    lemma: 'נַעַל',
    transliteration: "nǝʿāleyḵā",
    lemmaTranslit: "naʿal",
    strongs: 'H5275',
    gloss: 'sandals',
    morphology: { pos: 'noun', gender: 'feminine', number: 'dual', rawCode: 'Ncfdc' },
    position: 2,
  },
  {
    id: 'Exod.3.5.3',
    reference: 'Exod.3.5',
    language: 'hebrew',
    surfaceText: 'הַמָּקוֹם',
    lemma: 'מָקוֹם',
    transliteration: 'hammāqôm',
    lemmaTranslit: 'māqôm',
    strongs: 'H4725',
    gloss: 'place',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' },
    position: 3,
  },
  {
    id: 'Exod.3.5.4',
    reference: 'Exod.3.5',
    language: 'hebrew',
    surfaceText: 'קֹדֶשׁ',
    lemma: 'קֹדֶשׁ',
    transliteration: 'qōḏeš',
    lemmaTranslit: 'qōḏeš',
    strongs: 'H6944',
    gloss: 'holy',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsa' },
    position: 4,
  },
  {
    id: 'Exod.3.5.5',
    reference: 'Exod.3.5',
    language: 'hebrew',
    surfaceText: 'אֲדָמָה',
    lemma: 'אֲדָמָה',
    transliteration: "ʾăḏāmāh",
    lemmaTranslit: "ʾăḏāmāh",
    strongs: 'H127',
    gloss: 'ground',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', rawCode: 'Ncfsa' },
    position: 5,
  },
];

export const exodus3_5_translation: VerseTranslation = {
  verseRef: 'Exod.3.5',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Do not come near here; take off your sandals from your feet, for the place on which you are standing is holy ground.',
      spans: [
        { tokenIds: ['Exod.3.5.0'], translatedText: 'Do not come near', confidence: 'high' },
        { tokenIds: ['Exod.3.5.1'], translatedText: 'take off', confidence: 'high' },
        { tokenIds: ['Exod.3.5.2'], translatedText: 'your sandals', confidence: 'high' },
        { tokenIds: ['Exod.3.5.3'], translatedText: 'the place', confidence: 'high' },
        { tokenIds: ['Exod.3.5.4'], translatedText: 'holy', confidence: 'high' },
        { tokenIds: ['Exod.3.5.5'], translatedText: 'ground', confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: '"Do not come any closer," God said. "Take off your sandals, for the place where you are standing is holy ground."',
      spans: [
        { tokenIds: ['Exod.3.5.0'], translatedText: 'Do not come any closer', confidence: 'high' },
        { tokenIds: ['Exod.3.5.1'], translatedText: 'Take off', confidence: 'high' },
        { tokenIds: ['Exod.3.5.2'], translatedText: 'your sandals', confidence: 'high' },
        { tokenIds: ['Exod.3.5.3'], translatedText: 'the place', confidence: 'high' },
        { tokenIds: ['Exod.3.5.4'], translatedText: 'holy', confidence: 'high' },
        { tokenIds: ['Exod.3.5.5'], translatedText: 'ground', confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const exodus3_5_verse = {
  ref: 'Exod.3.5',
  sourceTokens: exodus3_5_tokens,
  translation: exodus3_5_translation,
  notes: [] as StudyNote[],
};

/* ------------------------------------------------------------------ */
/*  Exodus 3:6 – I am the God of your father                         */
/* ------------------------------------------------------------------ */

export const exodus3_6_tokens: SourceToken[] = [
  {
    id: 'Exod.3.6.0',
    reference: 'Exod.3.6',
    language: 'hebrew',
    surfaceText: 'אָנֹכִי',
    lemma: 'אָנֹכִי',
    transliteration: "ʾānōḵî",
    lemmaTranslit: "ʾānōḵî",
    strongs: 'H595',
    gloss: 'I',
    morphology: { pos: 'pronoun', person: '1', number: 'singular', rawCode: 'Pp1cs' },
    position: 0,
  },
  {
    id: 'Exod.3.6.1',
    reference: 'Exod.3.6',
    language: 'hebrew',
    surfaceText: 'אֱלֹהֵי',
    lemma: 'אֱלֹהִים',
    transliteration: "ʾĕlōhê",
    lemmaTranslit: "ʾĕlōhîm",
    strongs: 'H430',
    gloss: 'God of',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' },
    position: 1,
  },
  {
    id: 'Exod.3.6.2',
    reference: 'Exod.3.6',
    language: 'hebrew',
    surfaceText: 'אָבִיךָ',
    lemma: 'אָב',
    transliteration: "ʾāḇîḵā",
    lemmaTranslit: "ʾāḇ",
    strongs: 'H1',
    gloss: 'your father',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' },
    position: 2,
  },
  {
    id: 'Exod.3.6.3',
    reference: 'Exod.3.6',
    language: 'hebrew',
    surfaceText: 'אַבְרָהָם',
    lemma: 'אַבְרָהָם',
    transliteration: "ʾaḇrāhām",
    lemmaTranslit: "ʾaḇrāhām",
    strongs: 'H85',
    gloss: 'Abraham',
    morphology: { pos: 'noun_proper', gender: 'masculine', number: 'singular', rawCode: 'Np' },
    position: 3,
  },
  {
    id: 'Exod.3.6.4',
    reference: 'Exod.3.6',
    language: 'hebrew',
    surfaceText: 'יִצְחָק',
    lemma: 'יִצְחָק',
    transliteration: 'yiṣḥāq',
    lemmaTranslit: 'yiṣḥāq',
    strongs: 'H3327',
    gloss: 'Isaac',
    morphology: { pos: 'noun_proper', gender: 'masculine', number: 'singular', rawCode: 'Np' },
    position: 4,
  },
  {
    id: 'Exod.3.6.5',
    reference: 'Exod.3.6',
    language: 'hebrew',
    surfaceText: 'יַעֲקֹב',
    lemma: 'יַעֲקֹב',
    transliteration: "yaʿăqōḇ",
    lemmaTranslit: "yaʿăqōḇ",
    strongs: 'H3290',
    gloss: 'Jacob',
    morphology: { pos: 'noun_proper', gender: 'masculine', number: 'singular', rawCode: 'Np' },
    position: 5,
  },
];

export const exodus3_6_translation: VerseTranslation = {
  verseRef: 'Exod.3.6',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'I am the God of your father, the God of Abraham, the God of Isaac, and the God of Jacob.',
      spans: [
        { tokenIds: ['Exod.3.6.0'], translatedText: 'I am', confidence: 'high' },
        { tokenIds: ['Exod.3.6.1'], translatedText: 'the God of', confidence: 'high' },
        { tokenIds: ['Exod.3.6.2'], translatedText: 'your father', confidence: 'high' },
        { tokenIds: ['Exod.3.6.3'], translatedText: 'Abraham', confidence: 'high' },
        { tokenIds: ['Exod.3.6.4'], translatedText: 'Isaac', confidence: 'high' },
        { tokenIds: ['Exod.3.6.5'], translatedText: 'Jacob', confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Then he said, "I am the God of your father, the God of Abraham, the God of Isaac, and the God of Jacob."',
      spans: [
        { tokenIds: ['Exod.3.6.0'], translatedText: 'I am', confidence: 'high' },
        { tokenIds: ['Exod.3.6.1'], translatedText: 'the God of', confidence: 'high' },
        { tokenIds: ['Exod.3.6.2'], translatedText: 'your father', confidence: 'high' },
        { tokenIds: ['Exod.3.6.3'], translatedText: 'Abraham', confidence: 'high' },
        { tokenIds: ['Exod.3.6.4'], translatedText: 'Isaac', confidence: 'high' },
        { tokenIds: ['Exod.3.6.5'], translatedText: 'Jacob', confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const exodus3_6_verse = {
  ref: 'Exod.3.6',
  sourceTokens: exodus3_6_tokens,
  translation: exodus3_6_translation,
  notes: [] as StudyNote[],
};

/* ------------------------------------------------------------------ */
/*  Exodus 3:14 – I AM WHO I AM  (אֶהְיֶה אֲשֶׁר אֶהְיֶה)            */
/* ------------------------------------------------------------------ */

export const exodus3_14_tokens: SourceToken[] = [
  {
    id: 'Exod.3.14.0',
    reference: 'Exod.3.14',
    language: 'hebrew',
    surfaceText: 'אֶהְיֶה',
    lemma: 'הָיָה',
    transliteration: "ʾehyeh",
    lemmaTranslit: 'hāyāh',
    strongs: 'H1961',
    gloss: 'I AM',
    morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi1cs' },
    position: 0,
  },
  {
    id: 'Exod.3.14.1',
    reference: 'Exod.3.14',
    language: 'hebrew',
    surfaceText: 'אֲשֶׁר',
    lemma: 'אֲשֶׁר',
    transliteration: "ʾăšer",
    lemmaTranslit: "ʾăšer",
    strongs: 'H834',
    gloss: 'who/that',
    morphology: { pos: 'particle', rawCode: 'Pr' },
    position: 1,
  },
  {
    id: 'Exod.3.14.2',
    reference: 'Exod.3.14',
    language: 'hebrew',
    surfaceText: 'אֶהְיֶה',
    lemma: 'הָיָה',
    transliteration: "ʾehyeh",
    lemmaTranslit: 'hāyāh',
    strongs: 'H1961',
    gloss: 'I AM',
    morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi1cs' },
    position: 2,
  },
  {
    id: 'Exod.3.14.3',
    reference: 'Exod.3.14',
    language: 'hebrew',
    surfaceText: 'שָׁלַח',
    lemma: 'שָׁלַח',
    transliteration: 'šālaḥ',
    lemmaTranslit: 'šālaḥ',
    strongs: 'H7971',
    gloss: 'sent',
    morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' },
    position: 3,
  },
];

export const exodus3_14_translation: VerseTranslation = {
  verseRef: 'Exod.3.14',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And God said to Moses, I AM WHO I AM. And he said, Thus you shall say to the children of Israel: I AM has sent me to you.',
      spans: [
        { tokenIds: ['Exod.3.14.0'], translatedText: 'I AM', confidence: 'high' },
        { tokenIds: ['Exod.3.14.1'], translatedText: 'WHO', confidence: 'high' },
        { tokenIds: ['Exod.3.14.2'], translatedText: 'I AM', confidence: 'high' },
        { tokenIds: ['Exod.3.14.3'], translatedText: 'has sent', confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'God said to Moses, "I AM WHO I AM. This is what you are to say to the Israelites: I AM has sent me to you."',
      spans: [
        { tokenIds: ['Exod.3.14.0'], translatedText: 'I AM', confidence: 'high' },
        { tokenIds: ['Exod.3.14.1'], translatedText: 'WHO', confidence: 'high' },
        { tokenIds: ['Exod.3.14.2'], translatedText: 'I AM', confidence: 'high' },
        { tokenIds: ['Exod.3.14.3'], translatedText: 'has sent', confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const exodus3_14_verse = {
  ref: 'Exod.3.14',
  sourceTokens: exodus3_14_tokens,
  translation: exodus3_14_translation,
  notes: [] as StudyNote[],
};

/* ------------------------------------------------------------------ */
/*  Aggregate export                                                   */
/* ------------------------------------------------------------------ */

export const exodus3_1_22_verses = [
  exodus3_1_verse,
  exodus3_2_verse,
  exodus3_4_verse,
  exodus3_5_verse,
  exodus3_6_verse,
  exodus3_14_verse,
];

export default exodus3_1_22_verses;
