/**
 * Genesis 5:1-8 - Hebrew morphological data
 * The book of the generations of Adam - Adam to Enosh
 * Source: Open Hebrew Bible (Tanach.us) - Public Domain
 */

import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

// Genesis 5:1 - This is the book of the generations of Adam
export const genesis5_1_tokens: SourceToken[] = [
  { id: 'Gen.5.1.0', language: 'hebrew', text: 'זֶ֣ה', transliteration: 'zeh', lemma: 'זֶה', lemmaTranslit: 'zeh', gloss: 'This', morphology: { pos: 'pronoun', rawCode: 'Pd' }, strongs: 'H2088', position: 0 },
  { id: 'Gen.5.1.1', language: 'hebrew', text: 'סֵ֔פֶר', transliteration: 'sēp̄er', lemma: 'סֵפֶר', lemmaTranslit: 'sēp̄er', gloss: 'is the book of', glossExtended: 'book, scroll, document', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H5612', position: 1 },
  { id: 'Gen.5.1.2', language: 'hebrew', text: 'תּוֹלְדֹ֖ת', transliteration: 'tôləḏōṯ', lemma: 'תּוֹלֵדָה', lemmaTranslit: 'tôlēḏāh', gloss: 'the generations of', glossExtended: 'generations, history, descendants', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'construct', rawCode: 'Ncfpc' }, strongs: 'H8435', position: 2 },
  { id: 'Gen.5.1.3', language: 'hebrew', text: 'אָדָ֑ם', transliteration: 'ʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'Adam', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H121', position: 3 },
  { id: 'Gen.5.1.4', language: 'hebrew', text: 'בְּי֗וֹם', transliteration: 'bəyôm', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'In the day', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3117', position: 4 },
  { id: 'Gen.5.1.5', language: 'hebrew', text: 'בְּרֹ֤א', transliteration: 'bərōʾ', lemma: 'בָּרָא', lemmaTranslit: 'bārāʾ', gloss: 'created', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'Vqc' }, strongs: 'H1254', position: 5 },
  { id: 'Gen.5.1.6', language: 'hebrew', text: 'אֱלֹהִים֙', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H430', position: 6 },
  { id: 'Gen.5.1.7', language: 'hebrew', text: 'אָדָ֔ם', transliteration: 'ʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'man', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 7 },
  { id: 'Gen.5.1.8', language: 'hebrew', text: 'בִּדְמ֥וּת', transliteration: 'biḏmûṯ', lemma: 'דְּמוּת', lemmaTranslit: 'dəmûṯ', gloss: 'in the likeness of', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H1823', position: 8 },
  { id: 'Gen.5.1.9', language: 'hebrew', text: 'אֱלֹהִ֖ים', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H430', position: 9 },
  { id: 'Gen.5.1.10', language: 'hebrew', text: 'עָשָׂ֥ה', transliteration: 'ʿāśāh', lemma: 'עָשָׂה', lemmaTranslit: 'ʿāśāh', gloss: 'he made', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H6213', position: 10 },
  { id: 'Gen.5.1.11', language: 'hebrew', text: 'אֹתֽוֹ', transliteration: 'ʾōṯô', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: 'him', morphology: { pos: 'preposition', rawCode: 'To' }, strongs: 'H853', position: 11 },
];

export const genesis5_1_translation: VerseTranslation = {
  verseRef: 'Gen.5.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'This is the book of the generations of Adam. In the day God created man, in the likeness of God he made him.', spans: [{ id: 'Gen.5.1.en.lit.0', text: 'This is the book of the generations of Adam...', position: 0, sourceTokenIds: ['Gen.5.1.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'This is the book of the generations of Adam. When God created man, he made him in the likeness of God.', spans: [{ id: 'Gen.5.1.en.idi.0', text: 'This is the book of the generations of Adam...', position: 0, sourceTokenIds: ['Gen.5.1.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis5_1_notes: StudyNote[] = [
  { id: 'Gen.5.1.note.1', verseRef: 'Gen.5.1', sourceTokenIds: ['Gen.5.1.1', 'Gen.5.1.2'], category: 'lexical', title: 'Book of Generations (tôləḏōṯ)', content: 'This is the second tôləḏōṯ formula in Genesis (cf. 2:4). It structures Genesis and begins the official genealogical record from Adam to Noah.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.5.1.note.2', verseRef: 'Gen.5.1', sourceTokenIds: ['Gen.5.1.8'], category: 'theological', title: 'Likeness of God (dəmûṯ)', content: 'The chapter begins by restating that humanity bears God\'s likeness—this dignity persists despite the fall and is transmitted through the generations (cf. v.3).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 5:2 - Male and female he created them
export const genesis5_2_tokens: SourceToken[] = [
  { id: 'Gen.5.2.0', language: 'hebrew', text: 'זָכָ֥ר', transliteration: 'zāḵār', lemma: 'זָכָר', lemmaTranslit: 'zāḵār', gloss: 'Male', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H2145', position: 0 },
  { id: 'Gen.5.2.1', language: 'hebrew', text: 'וּנְקֵבָ֖ה', transliteration: 'ûnəqēḇāh', lemma: 'נְקֵבָה', lemmaTranslit: 'nəqēḇāh', gloss: 'and female', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H5347', position: 1 },
  { id: 'Gen.5.2.2', language: 'hebrew', text: 'בְּרָאָ֑ם', transliteration: 'bərāʾām', lemma: 'בָּרָא', lemmaTranslit: 'bārāʾ', gloss: 'he created them', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H1254', position: 2 },
  { id: 'Gen.5.2.3', language: 'hebrew', text: 'וַיְבָ֣רֶךְ', transliteration: 'wayḇāreḵ', lemma: 'בָּרַךְ', lemmaTranslit: 'bāraḵ', gloss: 'and he blessed', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'piel', rawCode: 'Vpw3ms' }, strongs: 'H1288', position: 3 },
  { id: 'Gen.5.2.4', language: 'hebrew', text: 'אֹתָ֗ם', transliteration: 'ʾōṯām', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: 'them', morphology: { pos: 'preposition', rawCode: 'To' }, strongs: 'H853', position: 4 },
  { id: 'Gen.5.2.5', language: 'hebrew', text: 'וַיִּקְרָ֤א', transliteration: 'wayyiqrāʾ', lemma: 'קָרָא', lemmaTranslit: 'qārāʾ', gloss: 'and he called', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H7121', position: 5 },
  { id: 'Gen.5.2.6', language: 'hebrew', text: 'אֶת־שְׁמָם֙', transliteration: 'ʾeṯ-šəmām', lemma: 'שֵׁם', lemmaTranslit: 'šēm', gloss: 'their name', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H8034', position: 6 },
  { id: 'Gen.5.2.7', language: 'hebrew', text: 'אָדָ֔ם', transliteration: 'ʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'Adam', glossExtended: 'man, mankind', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 7 },
  { id: 'Gen.5.2.8', language: 'hebrew', text: 'בְּי֖וֹם', transliteration: 'bəyôm', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'in the day', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3117', position: 8 },
  { id: 'Gen.5.2.9', language: 'hebrew', text: 'הִבָּֽרְאָֽם', transliteration: 'hibbārəʾām', lemma: 'בָּרָא', lemmaTranslit: 'bārāʾ', gloss: 'they were created', morphology: { pos: 'verb', mood: 'infinitive', stem: 'niphal', rawCode: 'Vnc' }, strongs: 'H1254', position: 9 },
];

export const genesis5_2_translation: VerseTranslation = {
  verseRef: 'Gen.5.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'Male and female he created them, and he blessed them and called their name Adam in the day they were created.', spans: [{ id: 'Gen.5.2.en.lit.0', text: 'Male and female he created them...', position: 0, sourceTokenIds: ['Gen.5.2.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Male and female he created them, and he blessed them and named them Man when they were created.', spans: [{ id: 'Gen.5.2.en.idi.0', text: 'Male and female he created them...', position: 0, sourceTokenIds: ['Gen.5.2.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis5_2_notes: StudyNote[] = [
  { id: 'Gen.5.2.note.1', verseRef: 'Gen.5.2', sourceTokenIds: ['Gen.5.2.7'], category: 'lexical', title: 'Named Them Adam', content: 'God named them both "Adam" (man/humanity)—the collective name emphasizes human unity as male and female together bearing God\'s image.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 5:3 - Adam lived 130 years, begot Seth
export const genesis5_3_tokens: SourceToken[] = [
  { id: 'Gen.5.3.0', language: 'hebrew', text: 'וַֽיְחִ֣י', transliteration: 'wayḥî', lemma: 'חָיָה', lemmaTranslit: 'ḥāyāh', gloss: 'And lived', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H2421', position: 0 },
  { id: 'Gen.5.3.1', language: 'hebrew', text: 'אָדָ֗ם', transliteration: 'ʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'Adam', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H121', position: 1 },
  { id: 'Gen.5.3.2', language: 'hebrew', text: 'שְׁלֹשִׁ֤ים', transliteration: 'šəlōšîm', lemma: 'שְׁלֹשִׁים', lemmaTranslit: 'šəlōšîm', gloss: 'thirty', morphology: { pos: 'numeral', rawCode: 'Acmpa' }, strongs: 'H7970', position: 2 },
  { id: 'Gen.5.3.3', language: 'hebrew', text: 'וּמְאַת֙', transliteration: 'ûməʾaṯ', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'and a hundred', morphology: { pos: 'numeral', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Acfsa' }, strongs: 'H3967', position: 3 },
  { id: 'Gen.5.3.4', language: 'hebrew', text: 'שָׁנָ֔ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 4 },
  { id: 'Gen.5.3.5', language: 'hebrew', text: 'וַיּ֥וֹלֶד', transliteration: 'wayyôleḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'and he fathered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H3205', position: 5 },
  { id: 'Gen.5.3.6', language: 'hebrew', text: 'בִּדְמוּת֖וֹ', transliteration: 'biḏmûṯô', lemma: 'דְּמוּת', lemmaTranslit: 'dəmûṯ', gloss: 'in his likeness', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H1823', position: 6 },
  { id: 'Gen.5.3.7', language: 'hebrew', text: 'כְּצַלְמ֑וֹ', transliteration: 'kəṣalmô', lemma: 'צֶלֶם', lemmaTranslit: 'ṣelem', gloss: 'according to his image', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H6754', position: 7 },
  { id: 'Gen.5.3.8', language: 'hebrew', text: 'וַיִּקְרָ֥א', transliteration: 'wayyiqrāʾ', lemma: 'קָרָא', lemmaTranslit: 'qārāʾ', gloss: 'and he called', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H7121', position: 8 },
  { id: 'Gen.5.3.9', language: 'hebrew', text: 'אֶת־שְׁמ֖וֹ', transliteration: 'ʾeṯ-šəmô', lemma: 'שֵׁם', lemmaTranslit: 'šēm', gloss: 'his name', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H8034', position: 9 },
  { id: 'Gen.5.3.10', language: 'hebrew', text: 'שֵֽׁת', transliteration: 'šēṯ', lemma: 'שֵׁת', lemmaTranslit: 'šēṯ', gloss: 'Seth', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8352', position: 10 },
];

export const genesis5_3_translation: VerseTranslation = {
  verseRef: 'Gen.5.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And lived Adam thirty and a hundred years, and he fathered in his likeness, according to his image, and called his name Seth.', spans: [{ id: 'Gen.5.3.en.lit.0', text: 'And lived Adam thirty and a hundred years...', position: 0, sourceTokenIds: ['Gen.5.3.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'When Adam had lived 130 years, he fathered a son in his own likeness, after his image, and named him Seth.', spans: [{ id: 'Gen.5.3.en.idi.0', text: 'When Adam had lived 130 years...', position: 0, sourceTokenIds: ['Gen.5.3.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis5_3_notes: StudyNote[] = [
  { id: 'Gen.5.3.note.1', verseRef: 'Gen.5.3', sourceTokenIds: ['Gen.5.3.6', 'Gen.5.3.7'], category: 'theological', title: 'In His Likeness, Image', content: 'Seth is born in Adam\'s likeness and image—echoing God\'s creation of Adam (v.1). The image of God is transmitted through human reproduction, but now includes the effects of the fall.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 5:4 - Adam's days after Seth, sons and daughters
export const genesis5_4_tokens: SourceToken[] = [
  { id: 'Gen.5.4.0', language: 'hebrew', text: 'וַיִּֽהְי֣וּ', transliteration: 'wayyihyû', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'And were', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H1961', position: 0 },
  { id: 'Gen.5.4.1', language: 'hebrew', text: 'יְמֵי־אָדָ֗ם', transliteration: 'yəmê-ʾāḏām', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'the days of Adam', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H3117', position: 1 },
  { id: 'Gen.5.4.2', language: 'hebrew', text: 'אַֽחֲרֵי֙', transliteration: 'ʾaḥărê', lemma: 'אַחַר', lemmaTranslit: 'ʾaḥar', gloss: 'after', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H310', position: 2 },
  { id: 'Gen.5.4.3', language: 'hebrew', text: 'הוֹלִיד֣וֹ', transliteration: 'hôlîḏô', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'he fathered', morphology: { pos: 'verb', mood: 'infinitive', stem: 'hiphil', rawCode: 'Vhc' }, strongs: 'H3205', position: 3 },
  { id: 'Gen.5.4.4', language: 'hebrew', text: 'אֶת־שֵׁ֔ת', transliteration: 'ʾeṯ-šēṯ', lemma: 'שֵׁת', lemmaTranslit: 'šēṯ', gloss: 'Seth', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8352', position: 4 },
  { id: 'Gen.5.4.5', language: 'hebrew', text: 'שְׁמֹנֶ֥ה', transliteration: 'šəmōneh', lemma: 'שְׁמֹנֶה', lemmaTranslit: 'šəmōneh', gloss: 'eight', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H8083', position: 5 },
  { id: 'Gen.5.4.6', language: 'hebrew', text: 'מֵאֹ֖ת', transliteration: 'mēʾōṯ', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'hundred', morphology: { pos: 'numeral', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Acfpa' }, strongs: 'H3967', position: 6 },
  { id: 'Gen.5.4.7', language: 'hebrew', text: 'שָׁנָ֑ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 7 },
  { id: 'Gen.5.4.8', language: 'hebrew', text: 'וַיּ֥וֹלֶד', transliteration: 'wayyôleḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'and he fathered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H3205', position: 8 },
  { id: 'Gen.5.4.9', language: 'hebrew', text: 'בָּנִ֖ים', transliteration: 'bānîm', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'sons', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H1121', position: 9 },
  { id: 'Gen.5.4.10', language: 'hebrew', text: 'וּבָנֽוֹת', transliteration: 'ûḇānôṯ', lemma: 'בַּת', lemmaTranslit: 'baṯ', gloss: 'and daughters', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Ncfpa' }, strongs: 'H1323', position: 10 },
];

export const genesis5_4_translation: VerseTranslation = {
  verseRef: 'Gen.5.4',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And were the days of Adam after he fathered Seth eight hundred years, and he fathered sons and daughters.', spans: [{ id: 'Gen.5.4.en.lit.0', text: 'And were the days of Adam after he fathered Seth...', position: 0, sourceTokenIds: ['Gen.5.4.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'The days of Adam after he fathered Seth were 800 years; and he had other sons and daughters.', spans: [{ id: 'Gen.5.4.en.idi.0', text: 'The days of Adam after he fathered Seth were 800 years...', position: 0, sourceTokenIds: ['Gen.5.4.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis5_4_notes: StudyNote[] = [];

// Genesis 5:5 - Adam lived 930 years, then he died
export const genesis5_5_tokens: SourceToken[] = [
  { id: 'Gen.5.5.0', language: 'hebrew', text: 'וַיִּֽהְי֞וּ', transliteration: 'wayyihyû', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'And were', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H1961', position: 0 },
  { id: 'Gen.5.5.1', language: 'hebrew', text: 'כָּל־יְמֵ֤י', transliteration: 'kāl-yəmê', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'all the days of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H3117', position: 1 },
  { id: 'Gen.5.5.2', language: 'hebrew', text: 'אָדָם֙', transliteration: 'ʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'Adam', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H121', position: 2 },
  { id: 'Gen.5.5.3', language: 'hebrew', text: 'אֲשֶׁר־חַ֔י', transliteration: 'ʾăšer-ḥay', lemma: 'חָיָה', lemmaTranslit: 'ḥāyāh', gloss: 'that he lived', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H2421', position: 3 },
  { id: 'Gen.5.5.4', language: 'hebrew', text: 'תְּשַׁ֤ע', transliteration: 'təšaʿ', lemma: 'תֵּשַׁע', lemmaTranslit: 'tēšaʿ', gloss: 'nine', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H8672', position: 4 },
  { id: 'Gen.5.5.5', language: 'hebrew', text: 'מֵאוֹת֙', transliteration: 'mēʾôṯ', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'hundred', morphology: { pos: 'numeral', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Acfpa' }, strongs: 'H3967', position: 5 },
  { id: 'Gen.5.5.6', language: 'hebrew', text: 'שָׁנָ֔ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 6 },
  { id: 'Gen.5.5.7', language: 'hebrew', text: 'וּשְׁלֹשִׁ֖ים', transliteration: 'ûšəlōšîm', lemma: 'שְׁלֹשִׁים', lemmaTranslit: 'šəlōšîm', gloss: 'and thirty', morphology: { pos: 'numeral', rawCode: 'Acmpa' }, strongs: 'H7970', position: 7 },
  { id: 'Gen.5.5.8', language: 'hebrew', text: 'שָׁנָ֑ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 8 },
  { id: 'Gen.5.5.9', language: 'hebrew', text: 'וַיָּמֹֽת', transliteration: 'wayyāmōṯ', lemma: 'מוּת', lemmaTranslit: 'mûṯ', gloss: 'and he died', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H4191', position: 9 },
];

export const genesis5_5_translation: VerseTranslation = {
  verseRef: 'Gen.5.5',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And were all the days of Adam that he lived nine hundred years and thirty years, and he died.', spans: [{ id: 'Gen.5.5.en.lit.0', text: 'And were all the days of Adam...', position: 0, sourceTokenIds: ['Gen.5.5.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Thus all the days that Adam lived were 930 years, and he died.', spans: [{ id: 'Gen.5.5.en.idi.0', text: 'Thus all the days that Adam lived were 930 years...', position: 0, sourceTokenIds: ['Gen.5.5.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis5_5_notes: StudyNote[] = [
  { id: 'Gen.5.5.note.1', verseRef: 'Gen.5.5', sourceTokenIds: ['Gen.5.5.9'], category: 'theological', title: '"And He Died"', content: 'The refrain "and he died" (wayyāmōṯ) echoes through the chapter like a funeral bell, fulfilling God\'s warning in 2:17 and demonstrating death\'s universal reign until Enoch (v.24).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 5:6 - Seth lived 105 years, begot Enosh
export const genesis5_6_tokens: SourceToken[] = [
  { id: 'Gen.5.6.0', language: 'hebrew', text: 'וַֽיְחִי־שֵׁ֕ת', transliteration: 'wayḥî-šēṯ', lemma: 'חָיָה', lemmaTranslit: 'ḥāyāh', gloss: 'And lived Seth', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H2421', position: 0 },
  { id: 'Gen.5.6.1', language: 'hebrew', text: 'חָמֵ֥שׁ', transliteration: 'ḥāmēš', lemma: 'חָמֵשׁ', lemmaTranslit: 'ḥāmēš', gloss: 'five', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H2568', position: 1 },
  { id: 'Gen.5.6.2', language: 'hebrew', text: 'שָׁנִ֖ים', transliteration: 'šānîm', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Ncfpa' }, strongs: 'H8141', position: 2 },
  { id: 'Gen.5.6.3', language: 'hebrew', text: 'וּמְאַ֣ת', transliteration: 'ûməʾaṯ', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'and a hundred', morphology: { pos: 'numeral', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Acfsa' }, strongs: 'H3967', position: 3 },
  { id: 'Gen.5.6.4', language: 'hebrew', text: 'שָׁנָ֑ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 4 },
  { id: 'Gen.5.6.5', language: 'hebrew', text: 'וַיּ֖וֹלֶד', transliteration: 'wayyôleḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'and he fathered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H3205', position: 5 },
  { id: 'Gen.5.6.6', language: 'hebrew', text: 'אֶת־אֱנֽוֹשׁ', transliteration: 'ʾeṯ-ʾĕnôš', lemma: 'אֱנוֹשׁ', lemmaTranslit: 'ʾĕnôš', gloss: 'Enosh', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H583', position: 6 },
];

export const genesis5_6_translation: VerseTranslation = {
  verseRef: 'Gen.5.6',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And lived Seth five years and a hundred years, and he fathered Enosh.', spans: [{ id: 'Gen.5.6.en.lit.0', text: 'And lived Seth five years and a hundred years...', position: 0, sourceTokenIds: ['Gen.5.6.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'When Seth had lived 105 years, he fathered Enosh.', spans: [{ id: 'Gen.5.6.en.idi.0', text: 'When Seth had lived 105 years...', position: 0, sourceTokenIds: ['Gen.5.6.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis5_6_notes: StudyNote[] = [];

// Genesis 5:7 - Seth lived after Enosh 807 years
export const genesis5_7_tokens: SourceToken[] = [
  { id: 'Gen.5.7.0', language: 'hebrew', text: 'וַֽיְחִי־שֵׁ֗ת', transliteration: 'wayḥî-šēṯ', lemma: 'חָיָה', lemmaTranslit: 'ḥāyāh', gloss: 'And lived Seth', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H2421', position: 0 },
  { id: 'Gen.5.7.1', language: 'hebrew', text: 'אַֽחֲרֵי֙', transliteration: 'ʾaḥărê', lemma: 'אַחַר', lemmaTranslit: 'ʾaḥar', gloss: 'after', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H310', position: 1 },
  { id: 'Gen.5.7.2', language: 'hebrew', text: 'הוֹלִיד֣וֹ', transliteration: 'hôlîḏô', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'he fathered', morphology: { pos: 'verb', mood: 'infinitive', stem: 'hiphil', rawCode: 'Vhc' }, strongs: 'H3205', position: 2 },
  { id: 'Gen.5.7.3', language: 'hebrew', text: 'אֶת־אֱנ֔וֹשׁ', transliteration: 'ʾeṯ-ʾĕnôš', lemma: 'אֱנוֹשׁ', lemmaTranslit: 'ʾĕnôš', gloss: 'Enosh', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H583', position: 3 },
  { id: 'Gen.5.7.4', language: 'hebrew', text: 'שֶׁ֥בַע', transliteration: 'šeḇaʿ', lemma: 'שֶׁבַע', lemmaTranslit: 'šeḇaʿ', gloss: 'seven', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H7651', position: 4 },
  { id: 'Gen.5.7.5', language: 'hebrew', text: 'שָׁנִ֖ים', transliteration: 'šānîm', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Ncfpa' }, strongs: 'H8141', position: 5 },
  { id: 'Gen.5.7.6', language: 'hebrew', text: 'וּשְׁמֹנֶ֥ה', transliteration: 'ûšəmōneh', lemma: 'שְׁמֹנֶה', lemmaTranslit: 'šəmōneh', gloss: 'and eight', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H8083', position: 6 },
  { id: 'Gen.5.7.7', language: 'hebrew', text: 'מֵא֖וֹת', transliteration: 'mēʾôṯ', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'hundred', morphology: { pos: 'numeral', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Acfpa' }, strongs: 'H3967', position: 7 },
  { id: 'Gen.5.7.8', language: 'hebrew', text: 'שָׁנָ֑ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 8 },
  { id: 'Gen.5.7.9', language: 'hebrew', text: 'וַיּ֥וֹלֶד', transliteration: 'wayyôleḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'and he fathered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H3205', position: 9 },
  { id: 'Gen.5.7.10', language: 'hebrew', text: 'בָּנִ֖ים', transliteration: 'bānîm', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'sons', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H1121', position: 10 },
  { id: 'Gen.5.7.11', language: 'hebrew', text: 'וּבָנֽוֹת', transliteration: 'ûḇānôṯ', lemma: 'בַּת', lemmaTranslit: 'baṯ', gloss: 'and daughters', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Ncfpa' }, strongs: 'H1323', position: 11 },
];

export const genesis5_7_translation: VerseTranslation = {
  verseRef: 'Gen.5.7',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And lived Seth after he fathered Enosh seven years and eight hundred years, and he fathered sons and daughters.', spans: [{ id: 'Gen.5.7.en.lit.0', text: 'And lived Seth after he fathered Enosh...', position: 0, sourceTokenIds: ['Gen.5.7.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Seth lived after he fathered Enosh 807 years and had other sons and daughters.', spans: [{ id: 'Gen.5.7.en.idi.0', text: 'Seth lived after he fathered Enosh 807 years...', position: 0, sourceTokenIds: ['Gen.5.7.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis5_7_notes: StudyNote[] = [];

// Genesis 5:8 - Seth lived 912 years, then died
export const genesis5_8_tokens: SourceToken[] = [
  { id: 'Gen.5.8.0', language: 'hebrew', text: 'וַיִּֽהְי֣וּ', transliteration: 'wayyihyû', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'And were', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H1961', position: 0 },
  { id: 'Gen.5.8.1', language: 'hebrew', text: 'כָּל־יְמֵי־שֵׁ֗ת', transliteration: 'kāl-yəmê-šēṯ', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'all the days of Seth', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H3117', position: 1 },
  { id: 'Gen.5.8.2', language: 'hebrew', text: 'שְׁתֵּ֤ים', transliteration: 'štêm', lemma: 'שְׁנַיִם', lemmaTranslit: 'šənayim', gloss: 'two', morphology: { pos: 'numeral', gender: 'feminine', number: 'dual', rawCode: 'Acfda' }, strongs: 'H8147', position: 2 },
  { id: 'Gen.5.8.3', language: 'hebrew', text: 'עֶשְׂרֵה֙', transliteration: 'ʿeśrēh', lemma: 'עֶשֶׂר', lemmaTranslit: 'ʿeśer', gloss: 'ten', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H6240', position: 3 },
  { id: 'Gen.5.8.4', language: 'hebrew', text: 'שָׁנָ֔ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 4 },
  { id: 'Gen.5.8.5', language: 'hebrew', text: 'וּתְשַׁ֥ע', transliteration: 'ûṯəšaʿ', lemma: 'תֵּשַׁע', lemmaTranslit: 'tēšaʿ', gloss: 'and nine', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H8672', position: 5 },
  { id: 'Gen.5.8.6', language: 'hebrew', text: 'מֵא֖וֹת', transliteration: 'mēʾôṯ', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'hundred', morphology: { pos: 'numeral', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Acfpa' }, strongs: 'H3967', position: 6 },
  { id: 'Gen.5.8.7', language: 'hebrew', text: 'שָׁנָ֑ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 7 },
  { id: 'Gen.5.8.8', language: 'hebrew', text: 'וַיָּמֹֽת', transliteration: 'wayyāmōṯ', lemma: 'מוּת', lemmaTranslit: 'mûṯ', gloss: 'and he died', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H4191', position: 8 },
];

export const genesis5_8_translation: VerseTranslation = {
  verseRef: 'Gen.5.8',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And were all the days of Seth two-ten years and nine hundred years, and he died.', spans: [{ id: 'Gen.5.8.en.lit.0', text: 'And were all the days of Seth...', position: 0, sourceTokenIds: ['Gen.5.8.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Thus all the days of Seth were 912 years, and he died.', spans: [{ id: 'Gen.5.8.en.idi.0', text: 'Thus all the days of Seth were 912 years...', position: 0, sourceTokenIds: ['Gen.5.8.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis5_8_notes: StudyNote[] = [];

// Export verse structures
export const genesis5_1_verse = { ref: 'Gen.5.1', sourceTokens: genesis5_1_tokens, translation: genesis5_1_translation, notes: genesis5_1_notes };
export const genesis5_2_verse = { ref: 'Gen.5.2', sourceTokens: genesis5_2_tokens, translation: genesis5_2_translation, notes: genesis5_2_notes };
export const genesis5_3_verse = { ref: 'Gen.5.3', sourceTokens: genesis5_3_tokens, translation: genesis5_3_translation, notes: genesis5_3_notes };
export const genesis5_4_verse = { ref: 'Gen.5.4', sourceTokens: genesis5_4_tokens, translation: genesis5_4_translation, notes: genesis5_4_notes };
export const genesis5_5_verse = { ref: 'Gen.5.5', sourceTokens: genesis5_5_tokens, translation: genesis5_5_translation, notes: genesis5_5_notes };
export const genesis5_6_verse = { ref: 'Gen.5.6', sourceTokens: genesis5_6_tokens, translation: genesis5_6_translation, notes: genesis5_6_notes };
export const genesis5_7_verse = { ref: 'Gen.5.7', sourceTokens: genesis5_7_tokens, translation: genesis5_7_translation, notes: genesis5_7_notes };
export const genesis5_8_verse = { ref: 'Gen.5.8', sourceTokens: genesis5_8_tokens, translation: genesis5_8_translation, notes: genesis5_8_notes };

// Combined export
export const genesis5_1_8_verses = [
  genesis5_1_verse,
  genesis5_2_verse,
  genesis5_3_verse,
  genesis5_4_verse,
  genesis5_5_verse,
  genesis5_6_verse,
  genesis5_7_verse,
  genesis5_8_verse,
];

export default genesis5_1_8_verses;
