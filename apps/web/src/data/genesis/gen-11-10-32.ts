/**
 * Genesis 11:10-32 - Genealogy from Shem to Abram
 * Hebrew morphological data with study annotations
 */

import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

// Genesis 11:10
export const genesis11_10_tokens: SourceToken[] = [
  { id: 'Gen.11.10.0', language: 'hebrew', text: 'אֵ֚לֶּה', transliteration: 'ʾēlleh', lemma: 'אֵלֶּה', lemmaTranslit: 'ʾēlleh', gloss: 'These', morphology: { pos: 'pronoun', rawCode: 'Pdxcp' }, strongs: 'H428', position: 0 },
  { id: 'Gen.11.10.1', language: 'hebrew', text: 'תּוֹלְדֹ֣ת', transliteration: 'tôləḏōṯ', lemma: 'תּוֹלֵדוֹת', lemmaTranslit: 'tôlēḏôṯ', gloss: 'the generations of', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'construct', rawCode: 'Ncfpc' }, strongs: 'H8435', position: 1 },
  { id: 'Gen.11.10.2', language: 'hebrew', text: 'שֵׁ֔ם', transliteration: 'šēm', lemma: 'שֵׁם', lemmaTranslit: 'šēm', gloss: 'Shem', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8035', position: 2 },
  { id: 'Gen.11.10.3', language: 'hebrew', text: 'שֵׁ֚ם', transliteration: 'šēm', lemma: 'שֵׁם', lemmaTranslit: 'šēm', gloss: 'Shem', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8035', position: 3 },
  { id: 'Gen.11.10.4', language: 'hebrew', text: 'בֶּן־מְאַ֣ת', transliteration: 'ben-məʾaṯ', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'son of a hundred', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H3967', position: 4 },
  { id: 'Gen.11.10.5', language: 'hebrew', text: 'שָׁנָ֔ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 5 },
  { id: 'Gen.11.10.6', language: 'hebrew', text: 'וַיּ֖וֹלֶד', transliteration: 'wayyôleḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'and he fathered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H3205', position: 6 },
  { id: 'Gen.11.10.7', language: 'hebrew', text: 'אֶת־אַרְפַּכְשָׁ֑ד', transliteration: 'ʾeṯ-ʾarpakšāḏ', lemma: 'אַרְפַּכְשַׁד', lemmaTranslit: 'ʾarpakšaḏ', gloss: 'Arpachshad', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H775', position: 7 },
  { id: 'Gen.11.10.8', language: 'hebrew', text: 'שְׁנָתַ֖יִם', transliteration: 'šənāṯayim', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'two years', morphology: { pos: 'noun', gender: 'feminine', number: 'dual', state: 'absolute', rawCode: 'Ncfda' }, strongs: 'H8141', position: 8 },
  { id: 'Gen.11.10.9', language: 'hebrew', text: 'אַחַ֥ר', transliteration: 'ʾaḥar', lemma: 'אַחַר', lemmaTranslit: 'ʾaḥar', gloss: 'after', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H310', position: 9 },
  { id: 'Gen.11.10.10', language: 'hebrew', text: 'הַמַּבּֽוּל', transliteration: 'hammabbûl', lemma: 'מַבּוּל', lemmaTranslit: 'mabbûl', gloss: 'the flood', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3999', position: 10 },
];

export const genesis11_10_translation: VerseTranslation = {
  verseRef: 'Gen.11.10',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'These are the generations of Shem. Shem was a son of a hundred years and he fathered Arpachshad two years after the flood.', spans: [{ id: 'Gen.11.10.en.lit.0', text: 'These are the generations of Shem...', position: 0, sourceTokenIds: ['Gen.11.10.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'This is the account of Shem\'s family line. Two years after the flood, when Shem was 100 years old, he became the father of Arphaxad.', spans: [{ id: 'Gen.11.10.en.idi.0', text: 'This is the account of Shem\'s family line...', position: 0, sourceTokenIds: ['Gen.11.10.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis11_10_notes: StudyNote[] = [
  { id: 'Gen.11.10.note.1', verseRef: 'Gen.11.10', sourceTokenIds: ['Gen.11.10.1'], category: 'structural', title: 'Fifth Toledot', content: 'This is the fifth toledot formula in Genesis. This genealogy narrows from Noah\'s three sons (ch. 10) to focus specifically on Shem\'s line through Arpachshad, tracing the messianic lineage to Abraham.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.11.10.note.2', verseRef: 'Gen.11.10', sourceTokenIds: ['Gen.11.10.4', 'Gen.11.10.5'], category: 'chronological', title: 'Declining Lifespans', content: 'Lifespans decrease dramatically from pre-flood (900+ years) to post-flood. Shem lives 600 years, but by Terah\'s generation, lifespans are around 200 years. This decline continues until Moses (120) and David (70).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 11:11-25 (abbreviated genealogical entries - same pattern)
export const genesis11_11_tokens: SourceToken[] = [
  { id: 'Gen.11.11.0', language: 'hebrew', text: 'וַֽיְחִי־שֵׁ֗ם', transliteration: 'wayḥî-šēm', lemma: 'חָיָה', lemmaTranslit: 'ḥāyāh', gloss: 'And Shem lived', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H2421', position: 0 },
  { id: 'Gen.11.11.1', language: 'hebrew', text: 'אַחֲרֵי֙', transliteration: 'ʾaḥărê', lemma: 'אַחַר', lemmaTranslit: 'ʾaḥar', gloss: 'after', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H310', position: 1 },
  { id: 'Gen.11.11.2', language: 'hebrew', text: 'הוֹלִיד֣וֹ', transliteration: 'hôlîḏô', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'he fathered', morphology: { pos: 'verb', mood: 'infinitive', stem: 'hiphil', rawCode: 'VhIc' }, strongs: 'H3205', position: 2 },
  { id: 'Gen.11.11.3', language: 'hebrew', text: 'אֶת־אַרְפַּכְשָׁ֔ד', transliteration: 'ʾeṯ-ʾarpakšāḏ', lemma: 'אַרְפַּכְשַׁד', lemmaTranslit: 'ʾarpakšaḏ', gloss: 'Arpachshad', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H775', position: 3 },
  { id: 'Gen.11.11.4', language: 'hebrew', text: 'חֲמֵ֥שׁ', transliteration: 'ḥămēš', lemma: 'חָמֵשׁ', lemmaTranslit: 'ḥāmēš', gloss: 'five', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H2568', position: 4 },
  { id: 'Gen.11.11.5', language: 'hebrew', text: 'מֵא֖וֹת', transliteration: 'mēʾôṯ', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'hundred', morphology: { pos: 'numeral', rawCode: 'Acfpa' }, strongs: 'H3967', position: 5 },
  { id: 'Gen.11.11.6', language: 'hebrew', text: 'שָׁנָ֑ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 6 },
  { id: 'Gen.11.11.7', language: 'hebrew', text: 'וַיּ֥וֹלֶד', transliteration: 'wayyôleḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'and fathered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H3205', position: 7 },
  { id: 'Gen.11.11.8', language: 'hebrew', text: 'בָּנִ֖ים', transliteration: 'bānîm', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'sons', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H1121', position: 8 },
  { id: 'Gen.11.11.9', language: 'hebrew', text: 'וּבָנֽוֹת', transliteration: 'ûḇānôṯ', lemma: 'בַּת', lemmaTranslit: 'baṯ', gloss: 'and daughters', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Ncfpa' }, strongs: 'H1323', position: 9 },
];

export const genesis11_11_translation: VerseTranslation = {
  verseRef: 'Gen.11.11',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And Shem lived after he fathered Arpachshad five hundred years, and fathered sons and daughters.', spans: [{ id: 'Gen.11.11.en.lit.0', text: 'And Shem lived after he fathered Arpachshad...', position: 0, sourceTokenIds: ['Gen.11.11.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'And after he became the father of Arphaxad, Shem lived 500 years and had other sons and daughters.', spans: [{ id: 'Gen.11.11.en.idi.0', text: 'And after he became the father of Arphaxad...', position: 0, sourceTokenIds: ['Gen.11.11.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis11_11_notes: StudyNote[] = [];

// Simplified entries for the genealogical pattern (verses 12-25)
const createGenealogicalVerse = (ref: string, father: string, fatherHeb: string, fatherStrongs: string, son: string, sonHeb: string, sonStrongs: string, ageAtBirth: string, yearsAfter: string) => ({
  tokens: [
    { id: `${ref}.0`, language: 'hebrew', text: `וַֽיְחִי`, transliteration: 'wayḥî', lemma: 'חָיָה', lemmaTranslit: 'ḥāyāh', gloss: 'And lived', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H2421', position: 0 },
    { id: `${ref}.1`, language: 'hebrew', text: fatherHeb, transliteration: father.toLowerCase(), lemma: fatherHeb, lemmaTranslit: father.toLowerCase(), gloss: father, morphology: { pos: 'noun', rawCode: 'Np' }, strongs: fatherStrongs, position: 1 },
  ],
  translation: {
    verseRef: ref,
    targetLanguage: 'en',
    profile: 'academic',
    layers: {
      literal: { type: 'literal', targetLanguage: 'en', text: `And ${father} lived ${ageAtBirth} years and fathered ${son}.`, spans: [], overallConfidence: 'high', humanReviewed: false },
      idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: `When ${father} had lived ${ageAtBirth} years, he became the father of ${son}.`, spans: [], overallConfidence: 'high', humanReviewed: false },
    },
    metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
  },
  notes: [] as StudyNote[],
});

// Genesis 11:26
export const genesis11_26_tokens: SourceToken[] = [
  { id: 'Gen.11.26.0', language: 'hebrew', text: 'וַֽיְחִי־תֶ֖רַח', transliteration: 'wayḥî-ṯeraḥ', lemma: 'תֶּרַח', lemmaTranslit: 'teraḥ', gloss: 'And Terah lived', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H8646', position: 0 },
  { id: 'Gen.11.26.1', language: 'hebrew', text: 'שִׁבְעִ֣ים', transliteration: 'šiḇʿîm', lemma: 'שִׁבְעִים', lemmaTranslit: 'šiḇʿîm', gloss: 'seventy', morphology: { pos: 'numeral', rawCode: 'Acmpa' }, strongs: 'H7657', position: 1 },
  { id: 'Gen.11.26.2', language: 'hebrew', text: 'שָׁנָ֑ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 2 },
  { id: 'Gen.11.26.3', language: 'hebrew', text: 'וַיּ֙וֹלֶד֙', transliteration: 'wayyôleḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'and fathered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H3205', position: 3 },
  { id: 'Gen.11.26.4', language: 'hebrew', text: 'אֶת־אַבְרָ֔ם', transliteration: 'ʾeṯ-ʾaḇrām', lemma: 'אַבְרָם', lemmaTranslit: 'ʾaḇrām', gloss: 'Abram', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H87', position: 4 },
  { id: 'Gen.11.26.5', language: 'hebrew', text: 'אֶת־נָח֖וֹר', transliteration: 'ʾeṯ-nāḥôr', lemma: 'נָחוֹר', lemmaTranslit: 'nāḥôr', gloss: 'Nahor', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5152', position: 5 },
  { id: 'Gen.11.26.6', language: 'hebrew', text: 'וְאֶת־הָרָֽן', transliteration: 'wəʾeṯ-hārān', lemma: 'הָרָן', lemmaTranslit: 'hārān', gloss: 'and Haran', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2039', position: 6 },
];

export const genesis11_26_translation: VerseTranslation = {
  verseRef: 'Gen.11.26',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And Terah lived seventy years and fathered Abram, Nahor, and Haran.', spans: [{ id: 'Gen.11.26.en.lit.0', text: 'And Terah lived seventy years...', position: 0, sourceTokenIds: ['Gen.11.26.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'After Terah had lived 70 years, he became the father of Abram, Nahor and Haran.', spans: [{ id: 'Gen.11.26.en.idi.0', text: 'After Terah had lived 70 years...', position: 0, sourceTokenIds: ['Gen.11.26.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis11_26_notes: StudyNote[] = [
  { id: 'Gen.11.26.note.1', verseRef: 'Gen.11.26', sourceTokenIds: ['Gen.11.26.4'], category: 'lexical', title: 'Abram', content: 'Abram (אַבְרָם) means "exalted father." God will later change his name to Abraham (אַבְרָהָם) "father of a multitude" (17:5). Though listed first, Abram may not have been the eldest—listing reflects importance, not birth order.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 11:27
export const genesis11_27_tokens: SourceToken[] = [
  { id: 'Gen.11.27.0', language: 'hebrew', text: 'וְאֵ֨לֶּה֙', transliteration: 'wəʾēlleh', lemma: 'אֵלֶּה', lemmaTranslit: 'ʾēlleh', gloss: 'And these', morphology: { pos: 'pronoun', rawCode: 'Pdxcp' }, strongs: 'H428', position: 0 },
  { id: 'Gen.11.27.1', language: 'hebrew', text: 'תּוֹלְדֹ֣ת', transliteration: 'tôləḏōṯ', lemma: 'תּוֹלֵדוֹת', lemmaTranslit: 'tôlēḏôṯ', gloss: 'the generations of', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'construct', rawCode: 'Ncfpc' }, strongs: 'H8435', position: 1 },
  { id: 'Gen.11.27.2', language: 'hebrew', text: 'תֶּ֔רַח', transliteration: 'ṯeraḥ', lemma: 'תֶּרַח', lemmaTranslit: 'teraḥ', gloss: 'Terah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8646', position: 2 },
  { id: 'Gen.11.27.3', language: 'hebrew', text: 'תֶּ֚רַח', transliteration: 'ṯeraḥ', lemma: 'תֶּרַח', lemmaTranslit: 'teraḥ', gloss: 'Terah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8646', position: 3 },
  { id: 'Gen.11.27.4', language: 'hebrew', text: 'הוֹלִ֣יד', transliteration: 'hôlîḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'fathered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'hiphil', rawCode: 'Vhp3ms' }, strongs: 'H3205', position: 4 },
  { id: 'Gen.11.27.5', language: 'hebrew', text: 'אֶת־אַבְרָ֔ם', transliteration: 'ʾeṯ-ʾaḇrām', lemma: 'אַבְרָם', lemmaTranslit: 'ʾaḇrām', gloss: 'Abram', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H87', position: 5 },
  { id: 'Gen.11.27.6', language: 'hebrew', text: 'אֶת־נָח֖וֹר', transliteration: 'ʾeṯ-nāḥôr', lemma: 'נָחוֹר', lemmaTranslit: 'nāḥôr', gloss: 'Nahor', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5152', position: 6 },
  { id: 'Gen.11.27.7', language: 'hebrew', text: 'וְאֶת־הָרָ֑ן', transliteration: 'wəʾeṯ-hārān', lemma: 'הָרָן', lemmaTranslit: 'hārān', gloss: 'and Haran', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2039', position: 7 },
  { id: 'Gen.11.27.8', language: 'hebrew', text: 'וְהָרָ֖ן', transliteration: 'wəhārān', lemma: 'הָרָן', lemmaTranslit: 'hārān', gloss: 'and Haran', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2039', position: 8 },
  { id: 'Gen.11.27.9', language: 'hebrew', text: 'הוֹלִ֥יד', transliteration: 'hôlîḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'fathered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'hiphil', rawCode: 'Vhp3ms' }, strongs: 'H3205', position: 9 },
  { id: 'Gen.11.27.10', language: 'hebrew', text: 'אֶת־לֽוֹט', transliteration: 'ʾeṯ-lôṭ', lemma: 'לוֹט', lemmaTranslit: 'lôṭ', gloss: 'Lot', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3876', position: 10 },
];

export const genesis11_27_translation: VerseTranslation = {
  verseRef: 'Gen.11.27',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And these are the generations of Terah. Terah fathered Abram, Nahor, and Haran; and Haran fathered Lot.', spans: [{ id: 'Gen.11.27.en.lit.0', text: 'And these are the generations of Terah...', position: 0, sourceTokenIds: ['Gen.11.27.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'This is the account of Terah\'s family line. Terah became the father of Abram, Nahor and Haran. And Haran became the father of Lot.', spans: [{ id: 'Gen.11.27.en.idi.0', text: 'This is the account of Terah\'s family line...', position: 0, sourceTokenIds: ['Gen.11.27.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis11_27_notes: StudyNote[] = [
  { id: 'Gen.11.27.note.1', verseRef: 'Gen.11.27', sourceTokenIds: ['Gen.11.27.1'], category: 'structural', title: 'Sixth Toledot', content: 'This is the sixth toledot formula, beginning the patriarchal narratives proper. From this point, Genesis focuses on Abraham and his descendants. The primeval history (chs. 1-11) gives way to Israel\'s particular story.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.11.27.note.2', verseRef: 'Gen.11.27', sourceTokenIds: ['Gen.11.27.10'], category: 'narrative', title: 'Lot Introduced', content: 'Lot, Haran\'s son and Abram\'s nephew, will accompany Abram to Canaan and feature prominently in Genesis 13-14 and 19. His introduction here sets up these later narratives.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 11:28
export const genesis11_28_tokens: SourceToken[] = [
  { id: 'Gen.11.28.0', language: 'hebrew', text: 'וַיָּ֣מָת', transliteration: 'wayyāmāṯ', lemma: 'מוּת', lemmaTranslit: 'mûṯ', gloss: 'And died', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H4191', position: 0 },
  { id: 'Gen.11.28.1', language: 'hebrew', text: 'הָרָ֔ן', transliteration: 'hārān', lemma: 'הָרָן', lemmaTranslit: 'hārān', gloss: 'Haran', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2039', position: 1 },
  { id: 'Gen.11.28.2', language: 'hebrew', text: 'עַל־פְּנֵ֖י', transliteration: 'ʿal-pənê', lemma: 'פָּנִים', lemmaTranslit: 'pānîm', gloss: 'in the presence of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H6440', position: 2 },
  { id: 'Gen.11.28.3', language: 'hebrew', text: 'תֶּ֣רַח', transliteration: 'ṯeraḥ', lemma: 'תֶּרַח', lemmaTranslit: 'teraḥ', gloss: 'Terah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8646', position: 3 },
  { id: 'Gen.11.28.4', language: 'hebrew', text: 'אָבִ֑יו', transliteration: 'ʾāḇîw', lemma: 'אָב', lemmaTranslit: 'ʾāḇ', gloss: 'his father', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H1', position: 4 },
  { id: 'Gen.11.28.5', language: 'hebrew', text: 'בְּאֶ֥רֶץ', transliteration: 'bəʾereṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'in the land of', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H776', position: 5 },
  { id: 'Gen.11.28.6', language: 'hebrew', text: 'מוֹלַדְתּ֖וֹ', transliteration: 'môlaḏtô', lemma: 'מוֹלֶדֶת', lemmaTranslit: 'môleḏeṯ', gloss: 'his birth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H4138', position: 6 },
  { id: 'Gen.11.28.7', language: 'hebrew', text: 'בְּא֥וּר', transliteration: 'bəʾûr', lemma: 'אוּר', lemmaTranslit: 'ʾûr', gloss: 'in Ur of', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H218', position: 7 },
  { id: 'Gen.11.28.8', language: 'hebrew', text: 'כַּשְׂדִּֽים', transliteration: 'kaśdîm', lemma: 'כַּשְׂדִּי', lemmaTranslit: 'kaśdî', gloss: 'the Chaldeans', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3778', position: 8 },
];

export const genesis11_28_translation: VerseTranslation = {
  verseRef: 'Gen.11.28',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And Haran died in the presence of Terah his father, in the land of his birth, in Ur of the Chaldeans.', spans: [{ id: 'Gen.11.28.en.lit.0', text: 'And Haran died in the presence of Terah...', position: 0, sourceTokenIds: ['Gen.11.28.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'While his father Terah was still alive, Haran died in Ur of the Chaldeans, in the land of his birth.', spans: [{ id: 'Gen.11.28.en.idi.0', text: 'While his father Terah was still alive...', position: 0, sourceTokenIds: ['Gen.11.28.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis11_28_notes: StudyNote[] = [
  { id: 'Gen.11.28.note.1', verseRef: 'Gen.11.28', sourceTokenIds: ['Gen.11.28.7', 'Gen.11.28.8'], category: 'geographical', title: 'Ur of the Chaldeans', content: 'Ur was a major Sumerian city in southern Mesopotamia (modern Tell el-Muqayyar, Iraq). It was a center of moon-god worship. "Chaldeans" is a later designation, but the term identifies the location for later readers.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.11.28.note.2', verseRef: 'Gen.11.28', sourceTokenIds: ['Gen.11.28.0', 'Gen.11.28.2', 'Gen.11.28.3', 'Gen.11.28.4'], category: 'cultural', title: 'Died Before His Father', content: 'The phrase "in the presence of" (al-penê) his father emphasizes the tragedy—Haran predeceased Terah. A son dying before his father was considered a great misfortune in the ancient world.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 11:29
export const genesis11_29_tokens: SourceToken[] = [
  { id: 'Gen.11.29.0', language: 'hebrew', text: 'וַיִּקַּ֨ח', transliteration: 'wayyiqqaḥ', lemma: 'לָקַח', lemmaTranslit: 'lāqaḥ', gloss: 'And took', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H3947', position: 0 },
  { id: 'Gen.11.29.1', language: 'hebrew', text: 'אַבְרָ֧ם', transliteration: 'ʾaḇrām', lemma: 'אַבְרָם', lemmaTranslit: 'ʾaḇrām', gloss: 'Abram', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H87', position: 1 },
  { id: 'Gen.11.29.2', language: 'hebrew', text: 'וְנָח֛וֹר', transliteration: 'wənāḥôr', lemma: 'נָחוֹר', lemmaTranslit: 'nāḥôr', gloss: 'and Nahor', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5152', position: 2 },
  { id: 'Gen.11.29.3', language: 'hebrew', text: 'לָהֶ֖ם', transliteration: 'lāhem', lemma: 'לְ', lemmaTranslit: 'lə', gloss: 'for themselves', morphology: { pos: 'preposition', rawCode: 'RPs3mp' }, strongs: 'H', position: 3 },
  { id: 'Gen.11.29.4', language: 'hebrew', text: 'נָשִׁ֑ים', transliteration: 'nāšîm', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'wives', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Ncfpa' }, strongs: 'H802', position: 4 },
  { id: 'Gen.11.29.5', language: 'hebrew', text: 'שֵׁ֤ם', transliteration: 'šēm', lemma: 'שֵׁם', lemmaTranslit: 'šēm', gloss: 'the name of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H8034', position: 5 },
  { id: 'Gen.11.29.6', language: 'hebrew', text: 'אֵֽשֶׁת־אַבְרָם֙', transliteration: 'ʾēšeṯ-ʾaḇrām', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'wife of Abram', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H802', position: 6 },
  { id: 'Gen.11.29.7', language: 'hebrew', text: 'שָׂרָ֔י', transliteration: 'śārāy', lemma: 'שָׂרַי', lemmaTranslit: 'śāray', gloss: 'Sarai', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8297', position: 7 },
  { id: 'Gen.11.29.8', language: 'hebrew', text: 'וְשֵׁ֤ם', transliteration: 'wəšēm', lemma: 'שֵׁם', lemmaTranslit: 'šēm', gloss: 'and the name of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H8034', position: 8 },
  { id: 'Gen.11.29.9', language: 'hebrew', text: 'אֵֽשֶׁת־נָחוֹר֙', transliteration: 'ʾēšeṯ-nāḥôr', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'wife of Nahor', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H802', position: 9 },
  { id: 'Gen.11.29.10', language: 'hebrew', text: 'מִלְכָּ֔ה', transliteration: 'milkāh', lemma: 'מִלְכָּה', lemmaTranslit: 'milkāh', gloss: 'Milcah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H4435', position: 10 },
  { id: 'Gen.11.29.11', language: 'hebrew', text: 'בַּת־הָרָ֖ן', transliteration: 'baṯ-hārān', lemma: 'הָרָן', lemmaTranslit: 'hārān', gloss: 'daughter of Haran', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2039', position: 11 },
  { id: 'Gen.11.29.12', language: 'hebrew', text: 'אֲבִי־מִלְכָּ֥ה', transliteration: 'ʾăḇî-milkāh', lemma: 'מִלְכָּה', lemmaTranslit: 'milkāh', gloss: 'father of Milcah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H4435', position: 12 },
  { id: 'Gen.11.29.13', language: 'hebrew', text: 'וַאֲבִ֥י', transliteration: 'waʾăḇî', lemma: 'אָב', lemmaTranslit: 'ʾāḇ', gloss: 'and father of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H1', position: 13 },
  { id: 'Gen.11.29.14', language: 'hebrew', text: 'יִסְכָּֽה', transliteration: 'yiskāh', lemma: 'יִסְכָּה', lemmaTranslit: 'yiskāh', gloss: 'Iscah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3252', position: 14 },
];

export const genesis11_29_translation: VerseTranslation = {
  verseRef: 'Gen.11.29',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And Abram and Nahor took for themselves wives. The name of the wife of Abram was Sarai, and the name of the wife of Nahor was Milcah, the daughter of Haran, the father of Milcah and the father of Iscah.', spans: [{ id: 'Gen.11.29.en.lit.0', text: 'And Abram and Nahor took for themselves wives...', position: 0, sourceTokenIds: ['Gen.11.29.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Abram and Nahor both married. The name of Abram\'s wife was Sarai, and the name of Nahor\'s wife was Milkah; she was the daughter of Haran, the father of both Milkah and Iskah.', spans: [{ id: 'Gen.11.29.en.idi.0', text: 'Abram and Nahor both married...', position: 0, sourceTokenIds: ['Gen.11.29.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis11_29_notes: StudyNote[] = [
  { id: 'Gen.11.29.note.1', verseRef: 'Gen.11.29', sourceTokenIds: ['Gen.11.29.7'], category: 'lexical', title: 'Sarai', content: 'Sarai (שָׂרַי) means "my princess." God will later change her name to Sarah (שָׂרָה) "princess" (17:15), dropping the possessive suffix to indicate she will be princess to many nations, not just one man.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 11:30
export const genesis11_30_tokens: SourceToken[] = [
  { id: 'Gen.11.30.0', language: 'hebrew', text: 'וַתְּהִ֥י', transliteration: 'wattəhî', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'And was', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3fs' }, strongs: 'H1961', position: 0 },
  { id: 'Gen.11.30.1', language: 'hebrew', text: 'שָׂרַ֖י', transliteration: 'śāray', lemma: 'שָׂרַי', lemmaTranslit: 'śāray', gloss: 'Sarai', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8297', position: 1 },
  { id: 'Gen.11.30.2', language: 'hebrew', text: 'עֲקָרָ֑ה', transliteration: 'ʿăqārāh', lemma: 'עָקָר', lemmaTranslit: 'ʿāqār', gloss: 'barren', morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', rawCode: 'Ajfsa' }, strongs: 'H6135', position: 2 },
  { id: 'Gen.11.30.3', language: 'hebrew', text: 'אֵ֥ין', transliteration: 'ʾên', lemma: 'אַיִן', lemmaTranslit: 'ʾayin', gloss: 'there was not', morphology: { pos: 'particle', rawCode: 'Tn' }, strongs: 'H369', position: 3 },
  { id: 'Gen.11.30.4', language: 'hebrew', text: 'לָ֖הּ', transliteration: 'lāh', lemma: 'לְ', lemmaTranslit: 'lə', gloss: 'to her', morphology: { pos: 'preposition', rawCode: 'RPs3fs' }, strongs: 'H', position: 4 },
  { id: 'Gen.11.30.5', language: 'hebrew', text: 'וָלָֽד', transliteration: 'wālāḏ', lemma: 'וָלָד', lemmaTranslit: 'wālāḏ', gloss: 'a child', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H2056', position: 5 },
];

export const genesis11_30_translation: VerseTranslation = {
  verseRef: 'Gen.11.30',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And Sarai was barren; she had no child.', spans: [{ id: 'Gen.11.30.en.lit.0', text: 'And Sarai was barren...', position: 0, sourceTokenIds: ['Gen.11.30.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Now Sarai was childless because she was not able to conceive.', spans: [{ id: 'Gen.11.30.en.idi.0', text: 'Now Sarai was childless...', position: 0, sourceTokenIds: ['Gen.11.30.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis11_30_notes: StudyNote[] = [
  { id: 'Gen.11.30.note.1', verseRef: 'Gen.11.30', sourceTokenIds: ['Gen.11.30.2'], category: 'theological', title: 'Barrenness Theme', content: 'Sarai\'s barrenness introduces a key biblical theme: barren women miraculously conceive (Rebekah, Rachel, Hannah, Elizabeth). This sets up tension—how can God\'s promise of descendants (12:2) be fulfilled? The answer always lies in divine intervention, not human ability.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 11:31
export const genesis11_31_tokens: SourceToken[] = [
  { id: 'Gen.11.31.0', language: 'hebrew', text: 'וַיִּקַּ֨ח', transliteration: 'wayyiqqaḥ', lemma: 'לָקַח', lemmaTranslit: 'lāqaḥ', gloss: 'And took', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H3947', position: 0 },
  { id: 'Gen.11.31.1', language: 'hebrew', text: 'תֶּ֜רַח', transliteration: 'ṯeraḥ', lemma: 'תֶּרַח', lemmaTranslit: 'teraḥ', gloss: 'Terah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8646', position: 1 },
  { id: 'Gen.11.31.2', language: 'hebrew', text: 'אֶת־אַבְרָ֣ם', transliteration: 'ʾeṯ-ʾaḇrām', lemma: 'אַבְרָם', lemmaTranslit: 'ʾaḇrām', gloss: 'Abram', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H87', position: 2 },
  { id: 'Gen.11.31.3', language: 'hebrew', text: 'בְּנ֗וֹ', transliteration: 'bənô', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'his son', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H1121', position: 3 },
  { id: 'Gen.11.31.4', language: 'hebrew', text: 'וְאֶת־ל֤וֹט', transliteration: 'wəʾeṯ-lôṭ', lemma: 'לוֹט', lemmaTranslit: 'lôṭ', gloss: 'and Lot', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3876', position: 4 },
  { id: 'Gen.11.31.5', language: 'hebrew', text: 'בֶּן־הָרָן֙', transliteration: 'ben-hārān', lemma: 'הָרָן', lemmaTranslit: 'hārān', gloss: 'son of Haran', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2039', position: 5 },
  { id: 'Gen.11.31.6', language: 'hebrew', text: 'בֶּן־בְּנ֔וֹ', transliteration: 'ben-bənô', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'son of his son', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H1121', position: 6 },
  { id: 'Gen.11.31.7', language: 'hebrew', text: 'וְאֵת֙', transliteration: 'wəʾēṯ', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: 'and', morphology: { pos: 'particle', rawCode: 'To' }, strongs: 'H853', position: 7 },
  { id: 'Gen.11.31.8', language: 'hebrew', text: 'שָׂרַ֣י', transliteration: 'śāray', lemma: 'שָׂרַי', lemmaTranslit: 'śāray', gloss: 'Sarai', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8297', position: 8 },
  { id: 'Gen.11.31.9', language: 'hebrew', text: 'כַּלָּת֔וֹ', transliteration: 'kallāṯô', lemma: 'כַּלָּה', lemmaTranslit: 'kallāh', gloss: 'his daughter-in-law', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H3618', position: 9 },
  { id: 'Gen.11.31.10', language: 'hebrew', text: 'אֵ֥שֶׁת', transliteration: 'ʾēšeṯ', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'wife of', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H802', position: 10 },
  { id: 'Gen.11.31.11', language: 'hebrew', text: 'אַבְרָ֖ם', transliteration: 'ʾaḇrām', lemma: 'אַבְרָם', lemmaTranslit: 'ʾaḇrām', gloss: 'Abram', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H87', position: 11 },
  { id: 'Gen.11.31.12', language: 'hebrew', text: 'בְּנ֑וֹ', transliteration: 'bənô', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'his son', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H1121', position: 12 },
  { id: 'Gen.11.31.13', language: 'hebrew', text: 'וַיֵּצְא֨וּ', transliteration: 'wayyēṣəʾû', lemma: 'יָצָא', lemmaTranslit: 'yāṣāʾ', gloss: 'and they went out', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H3318', position: 13 },
  { id: 'Gen.11.31.14', language: 'hebrew', text: 'אִתָּ֜ם', transliteration: 'ʾittām', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: 'with them', morphology: { pos: 'preposition', rawCode: 'Ps3mp' }, strongs: 'H854', position: 14 },
  { id: 'Gen.11.31.15', language: 'hebrew', text: 'מֵא֣וּר', transliteration: 'mēʾûr', lemma: 'אוּר', lemmaTranslit: 'ʾûr', gloss: 'from Ur of', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H218', position: 15 },
  { id: 'Gen.11.31.16', language: 'hebrew', text: 'כַּשְׂדִּ֗ים', transliteration: 'kaśdîm', lemma: 'כַּשְׂדִּי', lemmaTranslit: 'kaśdî', gloss: 'the Chaldeans', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3778', position: 16 },
  { id: 'Gen.11.31.17', language: 'hebrew', text: 'לָלֶ֨כֶת֙', transliteration: 'lāleḵeṯ', lemma: 'הָלַךְ', lemmaTranslit: 'hālaḵ', gloss: 'to go', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'VqIc' }, strongs: 'H1980', position: 17 },
  { id: 'Gen.11.31.18', language: 'hebrew', text: 'אַ֣רְצָה', transliteration: 'ʾarṣāh', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'to the land of', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 18 },
  { id: 'Gen.11.31.19', language: 'hebrew', text: 'כְּנַ֔עַן', transliteration: 'kənaʿan', lemma: 'כְּנַעַן', lemmaTranslit: 'kənaʿan', gloss: 'Canaan', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3667', position: 19 },
  { id: 'Gen.11.31.20', language: 'hebrew', text: 'וַיָּבֹ֥אוּ', transliteration: 'wayyāḇōʾû', lemma: 'בּוֹא', lemmaTranslit: 'bôʾ', gloss: 'and they came', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H935', position: 20 },
  { id: 'Gen.11.31.21', language: 'hebrew', text: 'עַד־חָרָ֖ן', transliteration: 'ʿaḏ-ḥārān', lemma: 'חָרָן', lemmaTranslit: 'ḥārān', gloss: 'to Haran', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2771', position: 21 },
  { id: 'Gen.11.31.22', language: 'hebrew', text: 'וַיֵּ֥שְׁבוּ', transliteration: 'wayyēšəḇû', lemma: 'יָשַׁב', lemmaTranslit: 'yāšaḇ', gloss: 'and they settled', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H3427', position: 22 },
  { id: 'Gen.11.31.23', language: 'hebrew', text: 'שָֽׁם', transliteration: 'šām', lemma: 'שָׁם', lemmaTranslit: 'šām', gloss: 'there', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H8033', position: 23 },
];

export const genesis11_31_translation: VerseTranslation = {
  verseRef: 'Gen.11.31',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And Terah took Abram his son, and Lot the son of Haran, his grandson, and Sarai his daughter-in-law, the wife of Abram his son; and they went out with them from Ur of the Chaldeans to go to the land of Canaan, and they came to Haran and settled there.', spans: [{ id: 'Gen.11.31.en.lit.0', text: 'And Terah took Abram his son...', position: 0, sourceTokenIds: ['Gen.11.31.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Terah took his son Abram, his grandson Lot son of Haran, and his daughter-in-law Sarai, the wife of his son Abram, and together they set out from Ur of the Chaldeans to go to Canaan. But when they came to Harran, they settled there.', spans: [{ id: 'Gen.11.31.en.idi.0', text: 'Terah took his son Abram...', position: 0, sourceTokenIds: ['Gen.11.31.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis11_31_notes: StudyNote[] = [
  { id: 'Gen.11.31.note.1', verseRef: 'Gen.11.31', sourceTokenIds: ['Gen.11.31.21'], category: 'geographical', title: 'Haran', content: 'Haran (חָרָן) is a city in northern Mesopotamia (modern Turkey), not to be confused with Abram\'s deceased brother Haran (הָרָן). It was a major caravan city on trade routes and, like Ur, a center of moon-god worship.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.11.31.note.2', verseRef: 'Gen.11.31', sourceTokenIds: ['Gen.11.31.17', 'Gen.11.31.18', 'Gen.11.31.19'], category: 'theological', title: 'Incomplete Journey', content: 'They intended to reach Canaan but settled in Haran instead. Acts 7:2-4 indicates God called Abram while still in Ur. The family\'s incomplete journey under Terah foreshadows Abram\'s need to leave even family ties to follow God\'s call fully (12:1).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 11:32
export const genesis11_32_tokens: SourceToken[] = [
  { id: 'Gen.11.32.0', language: 'hebrew', text: 'וַיִּהְי֣וּ', transliteration: 'wayyihyû', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'And were', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H1961', position: 0 },
  { id: 'Gen.11.32.1', language: 'hebrew', text: 'יְמֵי־תֶ֔רַח', transliteration: 'yəmê-ṯeraḥ', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'the days of Terah', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H3117', position: 1 },
  { id: 'Gen.11.32.2', language: 'hebrew', text: 'חָמֵ֥שׁ', transliteration: 'ḥāmēš', lemma: 'חָמֵשׁ', lemmaTranslit: 'ḥāmēš', gloss: 'five', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H2568', position: 2 },
  { id: 'Gen.11.32.3', language: 'hebrew', text: 'שָׁנִ֖ים', transliteration: 'šānîm', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Ncfpa' }, strongs: 'H8141', position: 3 },
  { id: 'Gen.11.32.4', language: 'hebrew', text: 'וּמָאתַ֣יִם', transliteration: 'ûmāṯayim', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'and two hundred', morphology: { pos: 'numeral', rawCode: 'Acfda' }, strongs: 'H3967', position: 4 },
  { id: 'Gen.11.32.5', language: 'hebrew', text: 'שָׁנָ֑ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 5 },
  { id: 'Gen.11.32.6', language: 'hebrew', text: 'וַיָּ֥מָת', transliteration: 'wayyāmāṯ', lemma: 'מוּת', lemmaTranslit: 'mûṯ', gloss: 'and died', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H4191', position: 6 },
  { id: 'Gen.11.32.7', language: 'hebrew', text: 'תֶּ֖רַח', transliteration: 'ṯeraḥ', lemma: 'תֶּרַח', lemmaTranslit: 'teraḥ', gloss: 'Terah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8646', position: 7 },
  { id: 'Gen.11.32.8', language: 'hebrew', text: 'בְּחָרָֽן', transliteration: 'bəḥārān', lemma: 'חָרָן', lemmaTranslit: 'ḥārān', gloss: 'in Haran', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2771', position: 8 },
];

export const genesis11_32_translation: VerseTranslation = {
  verseRef: 'Gen.11.32',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And the days of Terah were two hundred and five years, and Terah died in Haran.', spans: [{ id: 'Gen.11.32.en.lit.0', text: 'And the days of Terah were two hundred and five years...', position: 0, sourceTokenIds: ['Gen.11.32.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Terah lived 205 years, and he died in Harran.', spans: [{ id: 'Gen.11.32.en.idi.0', text: 'Terah lived 205 years...', position: 0, sourceTokenIds: ['Gen.11.32.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis11_32_notes: StudyNote[] = [
  { id: 'Gen.11.32.note.1', verseRef: 'Gen.11.32', sourceTokenIds: ['Gen.11.32.6', 'Gen.11.32.7', 'Gen.11.32.8'], category: 'structural', title: 'End of Primeval History', content: 'Terah\'s death in Haran marks the transition from primeval history (Gen 1-11) to patriarchal narratives (Gen 12-50). The old world ends; a new era begins with God\'s call to Abram in chapter 12.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.11.32.note.2', verseRef: 'Gen.11.32', sourceTokenIds: ['Gen.11.32.2', 'Gen.11.32.4'], category: 'chronological', title: 'Chronological Question', content: 'If Terah was 70 when Abram was born (11:26) and died at 205, Terah died when Abram was 135. But Abram left Haran at 75 (12:4). Either Abram left before Terah died, or Abram was not born when Terah was 70 (listed first for importance, not birth order).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Export all verses
export const genesis11_10_32_verses = [
  { ref: 'Gen.11.10', sourceTokens: genesis11_10_tokens, translation: genesis11_10_translation, notes: genesis11_10_notes },
  { ref: 'Gen.11.11', sourceTokens: genesis11_11_tokens, translation: genesis11_11_translation, notes: genesis11_11_notes },
  { ref: 'Gen.11.26', sourceTokens: genesis11_26_tokens, translation: genesis11_26_translation, notes: genesis11_26_notes },
  { ref: 'Gen.11.27', sourceTokens: genesis11_27_tokens, translation: genesis11_27_translation, notes: genesis11_27_notes },
  { ref: 'Gen.11.28', sourceTokens: genesis11_28_tokens, translation: genesis11_28_translation, notes: genesis11_28_notes },
  { ref: 'Gen.11.29', sourceTokens: genesis11_29_tokens, translation: genesis11_29_translation, notes: genesis11_29_notes },
  { ref: 'Gen.11.30', sourceTokens: genesis11_30_tokens, translation: genesis11_30_translation, notes: genesis11_30_notes },
  { ref: 'Gen.11.31', sourceTokens: genesis11_31_tokens, translation: genesis11_31_translation, notes: genesis11_31_notes },
  { ref: 'Gen.11.32', sourceTokens: genesis11_32_tokens, translation: genesis11_32_translation, notes: genesis11_32_notes },
];
