// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ——————————————————————————————————————————————
 * Verse 15:1
 * —————————————————————————————————————————————— */
export const exodus15_1_tokens: SourceToken[] = [
  {
    id: 'Exod.15.1.1',
    surfaceText: 'שִׁיר',
    language: 'hebrew',
    transliteration: "šîr",
    gloss: 'sang',
    strongNumber: 'H7891',
    lemma: 'שִׁיר',
    lemmaTranslit: "šîr",
    morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' },
    position: 1,
  },
  {
    id: 'Exod.15.1.2',
    surfaceText: 'מֹשֶׁה',
    language: 'hebrew',
    transliteration: "mōšeh",
    gloss: 'Moses',
    strongNumber: 'H4872',
    lemma: 'מֹשֶׁה',
    lemmaTranslit: "mōšeh",
    morphology: { pos: 'noun_proper', gender: 'masculine', number: 'singular', rawCode: 'Np' },
    position: 2,
  },
  {
    id: 'Exod.15.1.3',
    surfaceText: 'יִשְׂרָאֵל',
    language: 'hebrew',
    transliteration: "yiśrāʾēl",
    gloss: 'Israel',
    strongNumber: 'H3478',
    lemma: 'יִשְׂרָאֵל',
    lemmaTranslit: "yiśrāʾēl",
    morphology: { pos: 'noun_proper', gender: 'masculine', number: 'singular', rawCode: 'Np' },
    position: 3,
  },
  {
    id: 'Exod.15.1.4',
    surfaceText: 'אָשִׁירָה',
    language: 'hebrew',
    transliteration: "ʾāšîrāh",
    gloss: 'I will sing',
    strongNumber: 'H7891',
    lemma: 'שִׁיר',
    lemmaTranslit: "šîr",
    morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi1cs' },
    position: 4,
  },
  {
    id: 'Exod.15.1.5',
    surfaceText: 'יְהוָה',
    language: 'hebrew',
    transliteration: 'yhwh',
    gloss: 'the LORD',
    strongNumber: 'H3068',
    lemma: 'יְהוָה',
    lemmaTranslit: 'yhwh',
    morphology: { pos: 'noun_proper', gender: 'masculine', number: 'singular', rawCode: 'Np' },
    position: 5,
  },
  {
    id: 'Exod.15.1.6',
    surfaceText: 'גָּאָה',
    language: 'hebrew',
    transliteration: "gāʾāh",
    gloss: 'triumphed',
    strongNumber: 'H1342',
    lemma: 'גָּאָה',
    lemmaTranslit: "gāʾāh",
    morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' },
    position: 6,
  },
  {
    id: 'Exod.15.1.7',
    surfaceText: 'סוּס',
    language: 'hebrew',
    transliteration: 'sûs',
    gloss: 'horse',
    strongNumber: 'H5483',
    lemma: 'סוּס',
    lemmaTranslit: 'sûs',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncms' },
    position: 7,
  },
];

export const exodus15_1_translation: VerseTranslation = {
  verseRef: 'Exod.15.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Then sang Moses and the children of Israel this song to the LORD, and spoke saying: I will sing to the LORD, for he has triumphed gloriously; the horse and his rider he has thrown into the sea.',
      spans: [
        { tokenIds: ['Exod.15.1.1'], text: 'sang', confidence: 'high' },
        { tokenIds: ['Exod.15.1.2'], text: 'Moses', confidence: 'high' },
        { tokenIds: ['Exod.15.1.3'], text: 'Israel', confidence: 'high' },
        { tokenIds: ['Exod.15.1.4'], text: 'I will sing', confidence: 'high' },
        { tokenIds: ['Exod.15.1.5'], text: 'the LORD', confidence: 'high' },
        { tokenIds: ['Exod.15.1.6'], text: 'triumphed', confidence: 'high' },
        { tokenIds: ['Exod.15.1.7'], text: 'horse', confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Then Moses and the Israelites sang this song to the LORD: I will sing to the LORD, for he has triumphed gloriously; horse and rider he has hurled into the sea.',
      spans: [
        { tokenIds: ['Exod.15.1.1'], text: 'sang', confidence: 'high' },
        { tokenIds: ['Exod.15.1.2'], text: 'Moses', confidence: 'high' },
        { tokenIds: ['Exod.15.1.3'], text: 'the Israelites', confidence: 'high' },
        { tokenIds: ['Exod.15.1.4'], text: 'I will sing', confidence: 'high' },
        { tokenIds: ['Exod.15.1.5'], text: 'the LORD', confidence: 'high' },
        { tokenIds: ['Exod.15.1.6'], text: 'triumphed gloriously', confidence: 'high' },
        { tokenIds: ['Exod.15.1.7'], text: 'horse', confidence: 'high' },
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

export const exodus15_1_verse = {
  ref: 'Exod.15.1',
  sourceTokens: exodus15_1_tokens,
  translation: exodus15_1_translation,
  notes: [] as StudyNote[],
};

/* ——————————————————————————————————————————————
 * Verse 15:2
 * —————————————————————————————————————————————— */
export const exodus15_2_tokens: SourceToken[] = [
  {
    id: 'Exod.15.2.1',
    surfaceText: 'עָזִּי',
    language: 'hebrew',
    transliteration: "ʿozzî",
    gloss: 'my strength',
    strongNumber: 'H5797',
    lemma: 'עֹז',
    lemmaTranslit: "ʿōz",
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', suffix: '1cs', rawCode: 'Ncmsc+S1cs' },
    position: 1,
  },
  {
    id: 'Exod.15.2.2',
    surfaceText: 'זִמְרָת',
    language: 'hebrew',
    transliteration: 'zimrāṯ',
    gloss: 'song',
    strongNumber: 'H2176',
    lemma: 'זִמְרָה',
    lemmaTranslit: 'zimrāh',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' },
    position: 2,
  },
  {
    id: 'Exod.15.2.3',
    surfaceText: 'יְשׁוּעָה',
    language: 'hebrew',
    transliteration: "yešûʿāh",
    gloss: 'salvation',
    strongNumber: 'H3444',
    lemma: 'יְשׁוּעָה',
    lemmaTranslit: "yešûʿāh",
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', rawCode: 'Ncfsa' },
    position: 3,
  },
  {
    id: 'Exod.15.2.4',
    surfaceText: 'אֵל',
    language: 'hebrew',
    transliteration: "ʾēl",
    gloss: 'God',
    strongNumber: 'H410',
    lemma: 'אֵל',
    lemmaTranslit: "ʾēl",
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsa' },
    position: 4,
  },
];

export const exodus15_2_translation: VerseTranslation = {
  verseRef: 'Exod.15.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'The LORD is my strength and song, and he has become my salvation; this is my God, and I will praise him.',
      spans: [
        { tokenIds: ['Exod.15.2.1'], text: 'my strength', confidence: 'high' },
        { tokenIds: ['Exod.15.2.2'], text: 'song', confidence: 'high' },
        { tokenIds: ['Exod.15.2.3'], text: 'my salvation', confidence: 'high' },
        { tokenIds: ['Exod.15.2.4'], text: 'my God', confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'The LORD is my strength and my song; he has become my salvation. He is my God, and I will praise him.',
      spans: [
        { tokenIds: ['Exod.15.2.1'], text: 'my strength', confidence: 'high' },
        { tokenIds: ['Exod.15.2.2'], text: 'my song', confidence: 'high' },
        { tokenIds: ['Exod.15.2.3'], text: 'my salvation', confidence: 'high' },
        { tokenIds: ['Exod.15.2.4'], text: 'my God', confidence: 'high' },
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

export const exodus15_2_verse = {
  ref: 'Exod.15.2',
  sourceTokens: exodus15_2_tokens,
  translation: exodus15_2_translation,
  notes: [] as StudyNote[],
};

/* ——————————————————————————————————————————————
 * Verse 15:3
 * —————————————————————————————————————————————— */
export const exodus15_3_tokens: SourceToken[] = [
  {
    id: 'Exod.15.3.1',
    surfaceText: 'יְהוָה',
    language: 'hebrew',
    transliteration: 'yhwh',
    gloss: 'the LORD',
    strongNumber: 'H3068',
    lemma: 'יְהוָה',
    lemmaTranslit: 'yhwh',
    morphology: { pos: 'noun_proper', gender: 'masculine', number: 'singular', rawCode: 'Np' },
    position: 1,
  },
  {
    id: 'Exod.15.3.2',
    surfaceText: 'אִישׁ',
    language: 'hebrew',
    transliteration: "ʾîš",
    gloss: 'man',
    strongNumber: 'H376',
    lemma: 'אִישׁ',
    lemmaTranslit: "ʾîš",
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsa' },
    position: 2,
  },
  {
    id: 'Exod.15.3.3',
    surfaceText: 'מִלְחָמָה',
    language: 'hebrew',
    transliteration: 'milḥāmāh',
    gloss: 'war',
    strongNumber: 'H4421',
    lemma: 'מִלְחָמָה',
    lemmaTranslit: 'milḥāmāh',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', rawCode: 'Ncfsa' },
    position: 3,
  },
  {
    id: 'Exod.15.3.4',
    surfaceText: 'שֵׁם',
    language: 'hebrew',
    transliteration: 'šēm',
    gloss: 'name',
    strongNumber: 'H8034',
    lemma: 'שֵׁם',
    lemmaTranslit: 'šēm',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsa' },
    position: 4,
  },
];

export const exodus15_3_translation: VerseTranslation = {
  verseRef: 'Exod.15.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'The LORD is a man of war; the LORD is his name.',
      spans: [
        { tokenIds: ['Exod.15.3.1'], text: 'the LORD', confidence: 'high' },
        { tokenIds: ['Exod.15.3.2'], text: 'a man', confidence: 'high' },
        { tokenIds: ['Exod.15.3.3'], text: 'of war', confidence: 'high' },
        { tokenIds: ['Exod.15.3.4'], text: 'his name', confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'The LORD is a warrior; the LORD is his name.',
      spans: [
        { tokenIds: ['Exod.15.3.1'], text: 'the LORD', confidence: 'high' },
        { tokenIds: ['Exod.15.3.2', 'Exod.15.3.3'], text: 'a warrior', confidence: 'high' },
        { tokenIds: ['Exod.15.3.4'], text: 'his name', confidence: 'high' },
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

export const exodus15_3_verse = {
  ref: 'Exod.15.3',
  sourceTokens: exodus15_3_tokens,
  translation: exodus15_3_translation,
  notes: [] as StudyNote[],
};

/* ——————————————————————————————————————————————
 * Verse 15:6
 * —————————————————————————————————————————————— */
export const exodus15_6_tokens: SourceToken[] = [
  {
    id: 'Exod.15.6.1',
    surfaceText: 'יָמִין',
    language: 'hebrew',
    transliteration: 'yāmîn',
    gloss: 'right hand',
    strongNumber: 'H3225',
    lemma: 'יָמִין',
    lemmaTranslit: 'yāmîn',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', rawCode: 'Ncfsa' },
    position: 1,
  },
  {
    id: 'Exod.15.6.2',
    surfaceText: 'יְהוָה',
    language: 'hebrew',
    transliteration: 'yhwh',
    gloss: 'the LORD',
    strongNumber: 'H3068',
    lemma: 'יְהוָה',
    lemmaTranslit: 'yhwh',
    morphology: { pos: 'noun_proper', gender: 'masculine', number: 'singular', rawCode: 'Np' },
    position: 2,
  },
  {
    id: 'Exod.15.6.3',
    surfaceText: 'כֹּחַ',
    language: 'hebrew',
    transliteration: 'kōaḥ',
    gloss: 'power',
    strongNumber: 'H3581',
    lemma: 'כֹּחַ',
    lemmaTranslit: 'kōaḥ',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsa' },
    position: 3,
  },
  {
    id: 'Exod.15.6.4',
    surfaceText: 'נֶאְדָּרִי',
    language: 'hebrew',
    transliteration: "neʾdārî",
    gloss: 'glorious',
    strongNumber: 'H142',
    lemma: 'אָדַר',
    lemmaTranslit: "ʾāḏar",
    morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'participle', stem: 'niphal', rawCode: 'Vnpfs' },
    position: 4,
  },
  {
    id: 'Exod.15.6.5',
    surfaceText: 'אוֹיֵב',
    language: 'hebrew',
    transliteration: "ʾôyēḇ",
    gloss: 'enemy',
    strongNumber: 'H341',
    lemma: 'אוֹיֵב',
    lemmaTranslit: "ʾôyēḇ",
    morphology: { pos: 'verb', tense: 'participle', stem: 'qal', rawCode: 'Vqrmsa' },
    position: 5,
  },
];

export const exodus15_6_translation: VerseTranslation = {
  verseRef: 'Exod.15.6',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Your right hand, O LORD, is glorious in power; your right hand, O LORD, shatters the enemy.',
      spans: [
        { tokenIds: ['Exod.15.6.1'], text: 'your right hand', confidence: 'high' },
        { tokenIds: ['Exod.15.6.2'], text: 'O LORD', confidence: 'high' },
        { tokenIds: ['Exod.15.6.3'], text: 'in power', confidence: 'high' },
        { tokenIds: ['Exod.15.6.4'], text: 'glorious', confidence: 'high' },
        { tokenIds: ['Exod.15.6.5'], text: 'the enemy', confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Your right hand, LORD, is majestic in power. Your right hand, LORD, shatters the enemy.',
      spans: [
        { tokenIds: ['Exod.15.6.1'], text: 'your right hand', confidence: 'high' },
        { tokenIds: ['Exod.15.6.2'], text: 'LORD', confidence: 'high' },
        { tokenIds: ['Exod.15.6.3'], text: 'in power', confidence: 'high' },
        { tokenIds: ['Exod.15.6.4'], text: 'majestic', confidence: 'high' },
        { tokenIds: ['Exod.15.6.5'], text: 'the enemy', confidence: 'high' },
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

export const exodus15_6_verse = {
  ref: 'Exod.15.6',
  sourceTokens: exodus15_6_tokens,
  translation: exodus15_6_translation,
  notes: [] as StudyNote[],
};

/* ——————————————————————————————————————————————
 * Verse 15:11
 * —————————————————————————————————————————————— */
export const exodus15_11_tokens: SourceToken[] = [
  {
    id: 'Exod.15.11.1',
    surfaceText: 'כָּמֹכָה',
    language: 'hebrew',
    transliteration: 'kāmōḵāh',
    gloss: 'like you',
    strongNumber: 'H3644',
    lemma: 'כָּמוֹ',
    lemmaTranslit: 'kāmô',
    morphology: { pos: 'preposition', suffix: '2ms', rawCode: 'Pp+S2ms' },
    position: 1,
  },
  {
    id: 'Exod.15.11.2',
    surfaceText: 'אֵלִם',
    language: 'hebrew',
    transliteration: "ʾēlim",
    gloss: 'gods',
    strongNumber: 'H410',
    lemma: 'אֵל',
    lemmaTranslit: "ʾēl",
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' },
    position: 2,
  },
  {
    id: 'Exod.15.11.3',
    surfaceText: 'יְהוָה',
    language: 'hebrew',
    transliteration: 'yhwh',
    gloss: 'the LORD',
    strongNumber: 'H3068',
    lemma: 'יְהוָה',
    lemmaTranslit: 'yhwh',
    morphology: { pos: 'noun_proper', gender: 'masculine', number: 'singular', rawCode: 'Np' },
    position: 3,
  },
  {
    id: 'Exod.15.11.4',
    surfaceText: 'קֹדֶשׁ',
    language: 'hebrew',
    transliteration: 'qōḏeš',
    gloss: 'holiness',
    strongNumber: 'H6944',
    lemma: 'קֹדֶשׁ',
    lemmaTranslit: 'qōḏeš',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsa' },
    position: 4,
  },
  {
    id: 'Exod.15.11.5',
    surfaceText: 'נוֹרָא',
    language: 'hebrew',
    transliteration: "nôrāʾ",
    gloss: 'awesome',
    strongNumber: 'H3372',
    lemma: 'יָרֵא',
    lemmaTranslit: "yārēʾ",
    morphology: { pos: 'verb', tense: 'participle', stem: 'niphal', rawCode: 'Vnpmsa' },
    position: 5,
  },
  {
    id: 'Exod.15.11.6',
    surfaceText: 'תְהִלֹּת',
    language: 'hebrew',
    transliteration: 'tehillōṯ',
    gloss: 'praises',
    strongNumber: 'H8416',
    lemma: 'תְּהִלָּה',
    lemmaTranslit: 'tehillāh',
    morphology: { pos: 'noun', gender: 'feminine', number: 'plural', rawCode: 'Ncfpa' },
    position: 6,
  },
  {
    id: 'Exod.15.11.7',
    surfaceText: 'פֶּלֶא',
    language: 'hebrew',
    transliteration: "peleʾ",
    gloss: 'wonder',
    strongNumber: 'H6382',
    lemma: 'פֶּלֶא',
    lemmaTranslit: "peleʾ",
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsa' },
    position: 7,
  },
];

export const exodus15_11_translation: VerseTranslation = {
  verseRef: 'Exod.15.11',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Who is like you among the gods, O LORD? Who is like you, glorious in holiness, awesome in praises, doing wonders?',
      spans: [
        { tokenIds: ['Exod.15.11.1'], text: 'like you', confidence: 'high' },
        { tokenIds: ['Exod.15.11.2'], text: 'among the gods', confidence: 'high' },
        { tokenIds: ['Exod.15.11.3'], text: 'O LORD', confidence: 'high' },
        { tokenIds: ['Exod.15.11.4'], text: 'in holiness', confidence: 'high' },
        { tokenIds: ['Exod.15.11.5'], text: 'awesome', confidence: 'high' },
        { tokenIds: ['Exod.15.11.6'], text: 'in praises', confidence: 'high' },
        { tokenIds: ['Exod.15.11.7'], text: 'wonders', confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Who among the gods is like you, LORD? Who is like you — majestic in holiness, awesome in glory, working wonders?',
      spans: [
        { tokenIds: ['Exod.15.11.1'], text: 'like you', confidence: 'high' },
        { tokenIds: ['Exod.15.11.2'], text: 'among the gods', confidence: 'high' },
        { tokenIds: ['Exod.15.11.3'], text: 'LORD', confidence: 'high' },
        { tokenIds: ['Exod.15.11.4'], text: 'in holiness', confidence: 'high' },
        { tokenIds: ['Exod.15.11.5'], text: 'awesome in glory', confidence: 'high' },
        { tokenIds: ['Exod.15.11.6'], text: 'in glory', confidence: 'high' },
        { tokenIds: ['Exod.15.11.7'], text: 'wonders', confidence: 'high' },
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

export const exodus15_11_verse = {
  ref: 'Exod.15.11',
  sourceTokens: exodus15_11_tokens,
  translation: exodus15_11_translation,
  notes: [] as StudyNote[],
};

/* ——————————————————————————————————————————————
 * Verse 15:18
 * —————————————————————————————————————————————— */
export const exodus15_18_tokens: SourceToken[] = [
  {
    id: 'Exod.15.18.1',
    surfaceText: 'יְהוָה',
    language: 'hebrew',
    transliteration: 'yhwh',
    gloss: 'the LORD',
    strongNumber: 'H3068',
    lemma: 'יְהוָה',
    lemmaTranslit: 'yhwh',
    morphology: { pos: 'noun_proper', gender: 'masculine', number: 'singular', rawCode: 'Np' },
    position: 1,
  },
  {
    id: 'Exod.15.18.2',
    surfaceText: 'מָלַךְ',
    language: 'hebrew',
    transliteration: 'mālaḵ',
    gloss: 'reigns',
    strongNumber: 'H4427',
    lemma: 'מָלַךְ',
    lemmaTranslit: 'mālaḵ',
    morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi3ms' },
    position: 2,
  },
  {
    id: 'Exod.15.18.3',
    surfaceText: 'עוֹלָם',
    language: 'hebrew',
    transliteration: "ʿôlām",
    gloss: 'forever',
    strongNumber: 'H5769',
    lemma: 'עוֹלָם',
    lemmaTranslit: "ʿôlām",
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsa' },
    position: 3,
  },
  {
    id: 'Exod.15.18.4',
    surfaceText: 'וָעֶד',
    language: 'hebrew',
    transliteration: "wāʿeḏ",
    gloss: 'and ever',
    strongNumber: 'H5703',
    lemma: 'עַד',
    lemmaTranslit: "ʿaḏ",
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsa' },
    position: 4,
  },
];

export const exodus15_18_translation: VerseTranslation = {
  verseRef: 'Exod.15.18',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'The LORD shall reign forever and ever.',
      spans: [
        { tokenIds: ['Exod.15.18.1'], text: 'the LORD', confidence: 'high' },
        { tokenIds: ['Exod.15.18.2'], text: 'shall reign', confidence: 'high' },
        { tokenIds: ['Exod.15.18.3'], text: 'forever', confidence: 'high' },
        { tokenIds: ['Exod.15.18.4'], text: 'and ever', confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'The LORD reigns for ever and ever.',
      spans: [
        { tokenIds: ['Exod.15.18.1'], text: 'the LORD', confidence: 'high' },
        { tokenIds: ['Exod.15.18.2'], text: 'reigns', confidence: 'high' },
        { tokenIds: ['Exod.15.18.3', 'Exod.15.18.4'], text: 'for ever and ever', confidence: 'high' },
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

export const exodus15_18_verse = {
  ref: 'Exod.15.18',
  sourceTokens: exodus15_18_tokens,
  translation: exodus15_18_translation,
  notes: [] as StudyNote[],
};

/* ——————————————————————————————————————————————
 * Collected export
 * —————————————————————————————————————————————— */
export const exodus15_1_21_verses = [
  exodus15_1_verse,
  exodus15_2_verse,
  exodus15_3_verse,
  exodus15_6_verse,
  exodus15_11_verse,
  exodus15_18_verse,
];

export default exodus15_1_21_verses;
