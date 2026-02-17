// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

// ── Leviticus 19:2 ─────────────────────────────────────────────────
// "You shall be holy, for I the LORD your God am holy"

export const leviticus19_2_tokens: SourceToken[] = [
  {
    id: 'Lev.19.2.0',
    language: 'hebrew',
    text: 'קְדֹשִׁ֣ים',
    transliteration: 'qədōšîm',
    lemma: 'קָדוֹשׁ',
    lemmaTranslit: 'qādôš',
    gloss: 'holy ones',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', rawCode: 'Ampa' },
    strongs: 'H6918',
    position: 0,
  },
  {
    id: 'Lev.19.2.1',
    language: 'hebrew',
    text: 'תִּהְי֔וּ',
    transliteration: 'tihyû',
    lemma: 'הָיָה',
    lemmaTranslit: 'hāyāh',
    gloss: 'you shall be',
    morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi2mp' },
    strongs: 'H1961',
    position: 1,
  },
  {
    id: 'Lev.19.2.2',
    language: 'hebrew',
    text: 'כִּ֣י',
    transliteration: 'kî',
    lemma: 'כִּי',
    lemmaTranslit: 'kî',
    gloss: 'for',
    morphology: { pos: 'conjunction', rawCode: 'Cc' },
    strongs: 'H3588',
    position: 2,
  },
  {
    id: 'Lev.19.2.3',
    language: 'hebrew',
    text: 'קָד֔וֹשׁ',
    transliteration: 'qādôš',
    lemma: 'קָדוֹשׁ',
    lemmaTranslit: 'qādôš',
    gloss: 'holy',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', rawCode: 'Amsa' },
    strongs: 'H6918',
    position: 3,
  },
  {
    id: 'Lev.19.2.4',
    language: 'hebrew',
    text: 'אֲנִ֖י',
    transliteration: "ʾănî",
    lemma: 'אֲנִי',
    lemmaTranslit: "ʾănî",
    gloss: 'I',
    morphology: { pos: 'pronoun', person: '1', number: 'singular', rawCode: 'Pp1cs' },
    strongs: 'H589',
    position: 4,
  },
  {
    id: 'Lev.19.2.5',
    language: 'hebrew',
    text: 'יְהוָ֥ה',
    transliteration: 'yhwh',
    lemma: 'יְהוָה',
    lemmaTranslit: 'yhwh',
    gloss: 'the LORD',
    morphology: { pos: 'noun', rawCode: 'Np' },
    strongs: 'H3068',
    position: 5,
  },
  {
    id: 'Lev.19.2.6',
    language: 'hebrew',
    text: 'אֱלֹהֵיכֶֽם',
    transliteration: "ʾĕlōhêkem",
    lemma: 'אֱלֹהִים',
    lemmaTranslit: "ʾĕlōhîm",
    gloss: 'your God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpc' },
    strongs: 'H430',
    position: 6,
  },
];

export const leviticus19_2_translation: VerseTranslation = {
  verseRef: 'Lev.19.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Holy ones you shall be, for holy I, the LORD, your God.',
      spans: [
        { id: 'Lev.19.2.en.lit.0', text: 'Holy ones', position: 0, sourceTokenIds: ['Lev.19.2.0'], confidence: 'high' },
        { id: 'Lev.19.2.en.lit.1', text: 'you shall be,', position: 1, sourceTokenIds: ['Lev.19.2.1'], confidence: 'high' },
        { id: 'Lev.19.2.en.lit.2', text: 'for', position: 2, sourceTokenIds: ['Lev.19.2.2'], confidence: 'high' },
        { id: 'Lev.19.2.en.lit.3', text: 'holy', position: 3, sourceTokenIds: ['Lev.19.2.3'], confidence: 'high' },
        { id: 'Lev.19.2.en.lit.4', text: 'I,', position: 4, sourceTokenIds: ['Lev.19.2.4'], confidence: 'high' },
        { id: 'Lev.19.2.en.lit.5', text: 'the LORD,', position: 5, sourceTokenIds: ['Lev.19.2.5'], confidence: 'high' },
        { id: 'Lev.19.2.en.lit.6', text: 'your God.', position: 6, sourceTokenIds: ['Lev.19.2.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'You shall be holy, for I the LORD your God am holy.',
      spans: [
        { id: 'Lev.19.2.en.idi.0', text: 'You shall be holy,', position: 0, sourceTokenIds: ['Lev.19.2.0', 'Lev.19.2.1'], confidence: 'high' },
        { id: 'Lev.19.2.en.idi.1', text: 'for', position: 1, sourceTokenIds: ['Lev.19.2.2'], confidence: 'high' },
        { id: 'Lev.19.2.en.idi.2', text: 'I the LORD your God', position: 2, sourceTokenIds: ['Lev.19.2.4', 'Lev.19.2.5', 'Lev.19.2.6'], confidence: 'high' },
        { id: 'Lev.19.2.en.idi.3', text: 'am holy.', position: 3, sourceTokenIds: ['Lev.19.2.3'], confidence: 'high' },
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

export const leviticus19_2_verse = {
  ref: 'Lev.19.2',
  sourceTokens: leviticus19_2_tokens,
  translation: leviticus19_2_translation,
  notes: [] as StudyNote[],
};

// ── Leviticus 19:3 ─────────────────────────────────────────────────
// "Every one of you shall revere his mother and his father"

export const leviticus19_3_tokens: SourceToken[] = [
  {
    id: 'Lev.19.3.0',
    language: 'hebrew',
    text: 'אִ֣ישׁ',
    transliteration: "ʾîš",
    lemma: 'אִישׁ',
    lemmaTranslit: "ʾîš",
    gloss: 'each man',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsa' },
    strongs: 'H376',
    position: 0,
  },
  {
    id: 'Lev.19.3.1',
    language: 'hebrew',
    text: 'אִמּ֤וֹ',
    transliteration: "ʾimmô",
    lemma: 'אֵם',
    lemmaTranslit: "ʾēm",
    gloss: 'his mother',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', rawCode: 'Ncfsc' },
    strongs: 'H517',
    position: 1,
  },
  {
    id: 'Lev.19.3.2',
    language: 'hebrew',
    text: 'וְאָבִיו֙',
    transliteration: "wəʾāḇîw",
    lemma: 'אָב',
    lemmaTranslit: "ʾāḇ",
    gloss: 'and his father',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsc' },
    strongs: 'H1',
    position: 2,
  },
  {
    id: 'Lev.19.3.3',
    language: 'hebrew',
    text: 'תִּירָ֔אוּ',
    transliteration: "tîrāʾû",
    lemma: 'יָרֵא',
    lemmaTranslit: "yārēʾ",
    gloss: 'you shall fear',
    morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi2mp' },
    strongs: 'H3372',
    position: 3,
  },
];

export const leviticus19_3_translation: VerseTranslation = {
  verseRef: 'Lev.19.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Each man his mother and his father you shall fear.',
      spans: [
        { id: 'Lev.19.3.en.lit.0', text: 'Each man', position: 0, sourceTokenIds: ['Lev.19.3.0'], confidence: 'high' },
        { id: 'Lev.19.3.en.lit.1', text: 'his mother', position: 1, sourceTokenIds: ['Lev.19.3.1'], confidence: 'high' },
        { id: 'Lev.19.3.en.lit.2', text: 'and his father', position: 2, sourceTokenIds: ['Lev.19.3.2'], confidence: 'high' },
        { id: 'Lev.19.3.en.lit.3', text: 'you shall fear.', position: 3, sourceTokenIds: ['Lev.19.3.3'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Every one of you shall revere his mother and his father.',
      spans: [
        { id: 'Lev.19.3.en.idi.0', text: 'Every one of you shall revere', position: 0, sourceTokenIds: ['Lev.19.3.0', 'Lev.19.3.3'], confidence: 'high' },
        { id: 'Lev.19.3.en.idi.1', text: 'his mother', position: 1, sourceTokenIds: ['Lev.19.3.1'], confidence: 'high' },
        { id: 'Lev.19.3.en.idi.2', text: 'and his father.', position: 2, sourceTokenIds: ['Lev.19.3.2'], confidence: 'high' },
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

export const leviticus19_3_verse = {
  ref: 'Lev.19.3',
  sourceTokens: leviticus19_3_tokens,
  translation: leviticus19_3_translation,
  notes: [] as StudyNote[],
};

// ── Leviticus 19:11 ────────────────────────────────────────────────
// "You shall not steal; you shall not deal falsely"

export const leviticus19_11_tokens: SourceToken[] = [
  {
    id: 'Lev.19.11.0',
    language: 'hebrew',
    text: 'לֹ֖א',
    transliteration: "lōʾ",
    lemma: 'לֹא',
    lemmaTranslit: "lōʾ",
    gloss: 'not',
    morphology: { pos: 'particle', rawCode: 'Tn' },
    strongs: 'H3808',
    position: 0,
  },
  {
    id: 'Lev.19.11.1',
    language: 'hebrew',
    text: 'תִּגְנֹ֑בוּ',
    transliteration: 'tignōḇû',
    lemma: 'גָּנַב',
    lemmaTranslit: 'gānaḇ',
    gloss: 'you shall steal',
    morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi2mp' },
    strongs: 'H1589',
    position: 1,
  },
  {
    id: 'Lev.19.11.2',
    language: 'hebrew',
    text: 'וְלֹא',
    transliteration: "wəlōʾ",
    lemma: 'לֹא',
    lemmaTranslit: "lōʾ",
    gloss: 'and not',
    morphology: { pos: 'particle', rawCode: 'Tn' },
    strongs: 'H3808',
    position: 2,
  },
  {
    id: 'Lev.19.11.3',
    language: 'hebrew',
    text: 'תְכַחֲשׁ֥וּ',
    transliteration: 'təḵaḥăšû',
    lemma: 'כָּחַשׁ',
    lemmaTranslit: 'kāḥaš',
    gloss: 'you shall deal falsely',
    morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'piel', rawCode: 'Vpi2mp' },
    strongs: 'H3584',
    position: 3,
  },
];

export const leviticus19_11_translation: VerseTranslation = {
  verseRef: 'Lev.19.11',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Not you shall steal, and not you shall deal falsely.',
      spans: [
        { id: 'Lev.19.11.en.lit.0', text: 'Not', position: 0, sourceTokenIds: ['Lev.19.11.0'], confidence: 'high' },
        { id: 'Lev.19.11.en.lit.1', text: 'you shall steal,', position: 1, sourceTokenIds: ['Lev.19.11.1'], confidence: 'high' },
        { id: 'Lev.19.11.en.lit.2', text: 'and not', position: 2, sourceTokenIds: ['Lev.19.11.2'], confidence: 'high' },
        { id: 'Lev.19.11.en.lit.3', text: 'you shall deal falsely.', position: 3, sourceTokenIds: ['Lev.19.11.3'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'You shall not steal; you shall not deal falsely.',
      spans: [
        { id: 'Lev.19.11.en.idi.0', text: 'You shall not steal;', position: 0, sourceTokenIds: ['Lev.19.11.0', 'Lev.19.11.1'], confidence: 'high' },
        { id: 'Lev.19.11.en.idi.1', text: 'you shall not deal falsely.', position: 1, sourceTokenIds: ['Lev.19.11.2', 'Lev.19.11.3'], confidence: 'high' },
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

export const leviticus19_11_verse = {
  ref: 'Lev.19.11',
  sourceTokens: leviticus19_11_tokens,
  translation: leviticus19_11_translation,
  notes: [] as StudyNote[],
};

// ── Leviticus 19:14 ────────────────────────────────────────────────
// "You shall not curse the deaf or put a stumbling block before the blind"

export const leviticus19_14_tokens: SourceToken[] = [
  {
    id: 'Lev.19.14.0',
    language: 'hebrew',
    text: 'לֹא',
    transliteration: "lōʾ",
    lemma: 'לֹא',
    lemmaTranslit: "lōʾ",
    gloss: 'not',
    morphology: { pos: 'particle', rawCode: 'Tn' },
    strongs: 'H3808',
    position: 0,
  },
  {
    id: 'Lev.19.14.1',
    language: 'hebrew',
    text: 'תְקַלֵּ֣ל',
    transliteration: 'təqallēl',
    lemma: 'קָלַל',
    lemmaTranslit: 'qālal',
    gloss: 'you shall curse',
    morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'piel', rawCode: 'Vpi2ms' },
    strongs: 'H7043',
    position: 1,
  },
  {
    id: 'Lev.19.14.2',
    language: 'hebrew',
    text: 'חֵרֵ֔שׁ',
    transliteration: 'ḥērēš',
    lemma: 'חֵרֵשׁ',
    lemmaTranslit: 'ḥērēš',
    gloss: 'a deaf one',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', rawCode: 'Amsa' },
    strongs: 'H2795',
    position: 2,
  },
  {
    id: 'Lev.19.14.3',
    language: 'hebrew',
    text: 'וְלִפְנֵ֣י',
    transliteration: 'wəlip̄nê',
    lemma: 'פָּנִים',
    lemmaTranslit: 'pānîm',
    gloss: 'and before',
    morphology: { pos: 'preposition', rawCode: 'R' },
    strongs: 'H6440',
    position: 3,
  },
  {
    id: 'Lev.19.14.4',
    language: 'hebrew',
    text: 'עִוֵּ֔ר',
    transliteration: "ʿiwwēr",
    lemma: 'עִוֵּר',
    lemmaTranslit: "ʿiwwēr",
    gloss: 'a blind one',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', rawCode: 'Amsa' },
    strongs: 'H5787',
    position: 4,
  },
  {
    id: 'Lev.19.14.5',
    language: 'hebrew',
    text: 'לֹ֥א',
    transliteration: "lōʾ",
    lemma: 'לֹא',
    lemmaTranslit: "lōʾ",
    gloss: 'not',
    morphology: { pos: 'particle', rawCode: 'Tn' },
    strongs: 'H3808',
    position: 5,
  },
  {
    id: 'Lev.19.14.6',
    language: 'hebrew',
    text: 'תִתֵּ֖ן',
    transliteration: 'tittēn',
    lemma: 'נָתַן',
    lemmaTranslit: 'nāṯan',
    gloss: 'you shall put',
    morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi2ms' },
    strongs: 'H5414',
    position: 6,
  },
  {
    id: 'Lev.19.14.7',
    language: 'hebrew',
    text: 'מִכְשֹׁ֑ל',
    transliteration: 'miḵšōl',
    lemma: 'מִכְשׁוֹל',
    lemmaTranslit: 'miḵšōl',
    gloss: 'a stumbling block',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsa' },
    strongs: 'H4383',
    position: 7,
  },
];

export const leviticus19_14_translation: VerseTranslation = {
  verseRef: 'Lev.19.14',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Not you shall curse a deaf one, and before a blind one not you shall put a stumbling block.',
      spans: [
        { id: 'Lev.19.14.en.lit.0', text: 'Not', position: 0, sourceTokenIds: ['Lev.19.14.0'], confidence: 'high' },
        { id: 'Lev.19.14.en.lit.1', text: 'you shall curse', position: 1, sourceTokenIds: ['Lev.19.14.1'], confidence: 'high' },
        { id: 'Lev.19.14.en.lit.2', text: 'a deaf one,', position: 2, sourceTokenIds: ['Lev.19.14.2'], confidence: 'high' },
        { id: 'Lev.19.14.en.lit.3', text: 'and before', position: 3, sourceTokenIds: ['Lev.19.14.3'], confidence: 'high' },
        { id: 'Lev.19.14.en.lit.4', text: 'a blind one', position: 4, sourceTokenIds: ['Lev.19.14.4'], confidence: 'high' },
        { id: 'Lev.19.14.en.lit.5', text: 'not', position: 5, sourceTokenIds: ['Lev.19.14.5'], confidence: 'high' },
        { id: 'Lev.19.14.en.lit.6', text: 'you shall put', position: 6, sourceTokenIds: ['Lev.19.14.6'], confidence: 'high' },
        { id: 'Lev.19.14.en.lit.7', text: 'a stumbling block.', position: 7, sourceTokenIds: ['Lev.19.14.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'You shall not curse the deaf or put a stumbling block before the blind.',
      spans: [
        { id: 'Lev.19.14.en.idi.0', text: 'You shall not curse the deaf', position: 0, sourceTokenIds: ['Lev.19.14.0', 'Lev.19.14.1', 'Lev.19.14.2'], confidence: 'high' },
        { id: 'Lev.19.14.en.idi.1', text: 'or put a stumbling block', position: 1, sourceTokenIds: ['Lev.19.14.5', 'Lev.19.14.6', 'Lev.19.14.7'], confidence: 'high' },
        { id: 'Lev.19.14.en.idi.2', text: 'before the blind.', position: 2, sourceTokenIds: ['Lev.19.14.3', 'Lev.19.14.4'], confidence: 'high' },
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

export const leviticus19_14_verse = {
  ref: 'Lev.19.14',
  sourceTokens: leviticus19_14_tokens,
  translation: leviticus19_14_translation,
  notes: [] as StudyNote[],
};

// ── Leviticus 19:17 ────────────────────────────────────────────────
// "You shall not hate your brother in your heart"

export const leviticus19_17_tokens: SourceToken[] = [
  {
    id: 'Lev.19.17.0',
    language: 'hebrew',
    text: 'לֹא',
    transliteration: "lōʾ",
    lemma: 'לֹא',
    lemmaTranslit: "lōʾ",
    gloss: 'not',
    morphology: { pos: 'particle', rawCode: 'Tn' },
    strongs: 'H3808',
    position: 0,
  },
  {
    id: 'Lev.19.17.1',
    language: 'hebrew',
    text: 'תִשְׂנָ֥א',
    transliteration: "tiśnāʾ",
    lemma: 'שָׂנֵא',
    lemmaTranslit: "śānēʾ",
    gloss: 'you shall hate',
    morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi2ms' },
    strongs: 'H8130',
    position: 1,
  },
  {
    id: 'Lev.19.17.2',
    language: 'hebrew',
    text: 'אֶת',
    transliteration: "ʾeṯ",
    lemma: 'אֵת',
    lemmaTranslit: "ʾēṯ",
    gloss: '(obj.)',
    morphology: { pos: 'particle', rawCode: 'Po' },
    strongs: 'H853',
    position: 2,
  },
  {
    id: 'Lev.19.17.3',
    language: 'hebrew',
    text: 'אָחִ֖יךָ',
    transliteration: "ʾāḥîḵā",
    lemma: 'אָח',
    lemmaTranslit: "ʾāḥ",
    gloss: 'your brother',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsc' },
    strongs: 'H251',
    position: 3,
  },
  {
    id: 'Lev.19.17.4',
    language: 'hebrew',
    text: 'בִּלְבָבֶ֑ךָ',
    transliteration: 'bilḇāḇeḵā',
    lemma: 'לֵבָב',
    lemmaTranslit: 'lēḇāḇ',
    gloss: 'in your heart',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsc' },
    strongs: 'H3824',
    position: 4,
  },
];

export const leviticus19_17_translation: VerseTranslation = {
  verseRef: 'Lev.19.17',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Not you shall hate your brother in your heart.',
      spans: [
        { id: 'Lev.19.17.en.lit.0', text: 'Not', position: 0, sourceTokenIds: ['Lev.19.17.0'], confidence: 'high' },
        { id: 'Lev.19.17.en.lit.1', text: 'you shall hate', position: 1, sourceTokenIds: ['Lev.19.17.1'], confidence: 'high' },
        { id: 'Lev.19.17.en.lit.2', text: '(obj.)', position: 2, sourceTokenIds: ['Lev.19.17.2'], confidence: 'high' },
        { id: 'Lev.19.17.en.lit.3', text: 'your brother', position: 3, sourceTokenIds: ['Lev.19.17.3'], confidence: 'high' },
        { id: 'Lev.19.17.en.lit.4', text: 'in your heart.', position: 4, sourceTokenIds: ['Lev.19.17.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'You shall not hate your brother in your heart.',
      spans: [
        { id: 'Lev.19.17.en.idi.0', text: 'You shall not hate', position: 0, sourceTokenIds: ['Lev.19.17.0', 'Lev.19.17.1'], confidence: 'high' },
        { id: 'Lev.19.17.en.idi.1', text: 'your brother', position: 1, sourceTokenIds: ['Lev.19.17.2', 'Lev.19.17.3'], confidence: 'high' },
        { id: 'Lev.19.17.en.idi.2', text: 'in your heart.', position: 2, sourceTokenIds: ['Lev.19.17.4'], confidence: 'high' },
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

export const leviticus19_17_verse = {
  ref: 'Lev.19.17',
  sourceTokens: leviticus19_17_tokens,
  translation: leviticus19_17_translation,
  notes: [] as StudyNote[],
};

// ── Leviticus 19:18 ────────────────────────────────────────────────
// "You shall love your neighbor as yourself; I am the LORD"

export const leviticus19_18_tokens: SourceToken[] = [
  {
    id: 'Lev.19.18.0',
    language: 'hebrew',
    text: 'וְאָהַבְתָּ֥',
    transliteration: "wəʾāhaḇtā",
    lemma: 'אָהַב',
    lemmaTranslit: "ʾāhaḇ",
    gloss: 'and you shall love',
    morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp2ms' },
    strongs: 'H157',
    position: 0,
  },
  {
    id: 'Lev.19.18.1',
    language: 'hebrew',
    text: 'לְרֵעֲךָ֖',
    transliteration: "lərēʿăḵā",
    lemma: 'רֵעַ',
    lemmaTranslit: "rēaʿ",
    gloss: 'your neighbor',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsc' },
    strongs: 'H7453',
    position: 1,
  },
  {
    id: 'Lev.19.18.2',
    language: 'hebrew',
    text: 'כָּמ֑וֹךָ',
    transliteration: 'kāmôḵā',
    lemma: 'כָּמוֹ',
    lemmaTranslit: 'kāmô',
    gloss: 'as yourself',
    morphology: { pos: 'preposition', rawCode: 'R' },
    strongs: 'H3644',
    position: 2,
  },
  {
    id: 'Lev.19.18.3',
    language: 'hebrew',
    text: 'אֲנִ֖י',
    transliteration: "ʾănî",
    lemma: 'אֲנִי',
    lemmaTranslit: "ʾănî",
    gloss: 'I',
    morphology: { pos: 'pronoun', person: '1', number: 'singular', rawCode: 'Pp1cs' },
    strongs: 'H589',
    position: 3,
  },
  {
    id: 'Lev.19.18.4',
    language: 'hebrew',
    text: 'יְהוָֽה',
    transliteration: 'yhwh',
    lemma: 'יְהוָה',
    lemmaTranslit: 'yhwh',
    gloss: 'the LORD',
    morphology: { pos: 'noun', rawCode: 'Np' },
    strongs: 'H3068',
    position: 4,
  },
];

export const leviticus19_18_translation: VerseTranslation = {
  verseRef: 'Lev.19.18',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And you shall love your neighbor as yourself; I the LORD.',
      spans: [
        { id: 'Lev.19.18.en.lit.0', text: 'And you shall love', position: 0, sourceTokenIds: ['Lev.19.18.0'], confidence: 'high' },
        { id: 'Lev.19.18.en.lit.1', text: 'your neighbor', position: 1, sourceTokenIds: ['Lev.19.18.1'], confidence: 'high' },
        { id: 'Lev.19.18.en.lit.2', text: 'as yourself;', position: 2, sourceTokenIds: ['Lev.19.18.2'], confidence: 'high' },
        { id: 'Lev.19.18.en.lit.3', text: 'I', position: 3, sourceTokenIds: ['Lev.19.18.3'], confidence: 'high' },
        { id: 'Lev.19.18.en.lit.4', text: 'the LORD.', position: 4, sourceTokenIds: ['Lev.19.18.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'You shall love your neighbor as yourself; I am the LORD.',
      spans: [
        { id: 'Lev.19.18.en.idi.0', text: 'You shall love', position: 0, sourceTokenIds: ['Lev.19.18.0'], confidence: 'high' },
        { id: 'Lev.19.18.en.idi.1', text: 'your neighbor', position: 1, sourceTokenIds: ['Lev.19.18.1'], confidence: 'high' },
        { id: 'Lev.19.18.en.idi.2', text: 'as yourself;', position: 2, sourceTokenIds: ['Lev.19.18.2'], confidence: 'high' },
        { id: 'Lev.19.18.en.idi.3', text: 'I am the LORD.', position: 3, sourceTokenIds: ['Lev.19.18.3', 'Lev.19.18.4'], confidence: 'high' },
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

export const leviticus19_18_verse = {
  ref: 'Lev.19.18',
  sourceTokens: leviticus19_18_tokens,
  translation: leviticus19_18_translation,
  notes: [] as StudyNote[],
};

// ── Collected export ───────────────────────────────────────────────

export const leviticus19_1_18_verses = [
  leviticus19_2_verse,
  leviticus19_3_verse,
  leviticus19_11_verse,
  leviticus19_14_verse,
  leviticus19_17_verse,
  leviticus19_18_verse,
];

export default leviticus19_1_18_verses;
