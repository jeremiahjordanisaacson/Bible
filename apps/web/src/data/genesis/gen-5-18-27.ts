/**
 * Genesis 5:18-27 - Hebrew morphological data
 * Genealogy: Jared to Methuselah (including Enoch who walked with God)
 * Source: Open Hebrew Bible (Tanach.us) - Public Domain
 */

import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

// Genesis 5:18 - Jared lived 162 years, begot Enoch
export const genesis5_18_tokens: SourceToken[] = [
  { id: 'Gen.5.18.0', language: 'hebrew', text: 'וַֽיְחִי־יֶ֕רֶד', transliteration: 'wayḥî-yereḏ', lemma: 'חָיָה', lemmaTranslit: 'ḥāyāh', gloss: 'And lived Jared', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H2421', position: 0 },
  { id: 'Gen.5.18.1', language: 'hebrew', text: 'שְׁתַּ֧יִם', transliteration: 'štayim', lemma: 'שְׁנַיִם', lemmaTranslit: 'šənayim', gloss: 'two', morphology: { pos: 'numeral', gender: 'feminine', number: 'dual', rawCode: 'Acfda' }, strongs: 'H8147', position: 1 },
  { id: 'Gen.5.18.2', language: 'hebrew', text: 'וְשִׁשִּׁ֛ים', transliteration: 'wəšiššîm', lemma: 'שִׁשִּׁים', lemmaTranslit: 'šiššîm', gloss: 'and sixty', morphology: { pos: 'numeral', rawCode: 'Acmpa' }, strongs: 'H8346', position: 2 },
  { id: 'Gen.5.18.3', language: 'hebrew', text: 'שָׁנָ֖ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 3 },
  { id: 'Gen.5.18.4', language: 'hebrew', text: 'וּמְאַ֣ת', transliteration: 'ûməʾaṯ', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'and a hundred', morphology: { pos: 'numeral', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Acfsa' }, strongs: 'H3967', position: 4 },
  { id: 'Gen.5.18.5', language: 'hebrew', text: 'שָׁנָ֑ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 5 },
  { id: 'Gen.5.18.6', language: 'hebrew', text: 'וַיּ֖וֹלֶד', transliteration: 'wayyôleḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'and he fathered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H3205', position: 6 },
  { id: 'Gen.5.18.7', language: 'hebrew', text: 'אֶת־חֲנֽוֹךְ', transliteration: 'ʾeṯ-ḥănôḵ', lemma: 'חֲנוֹךְ', lemmaTranslit: 'ḥănôḵ', gloss: 'Enoch', glossExtended: 'dedicated, initiated', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2585', position: 7 },
];

export const genesis5_18_translation: VerseTranslation = {
  verseRef: 'Gen.5.18',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And lived Jared two and sixty years and a hundred years, and he fathered Enoch.', spans: [{ id: 'Gen.5.18.en.lit.0', text: 'And lived Jared two and sixty years...', position: 0, sourceTokenIds: ['Gen.5.18.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'When Jared had lived 162 years, he fathered Enoch.', spans: [{ id: 'Gen.5.18.en.idi.0', text: 'When Jared had lived 162 years...', position: 0, sourceTokenIds: ['Gen.5.18.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis5_18_notes: StudyNote[] = [
  { id: 'Gen.5.18.note.1', verseRef: 'Gen.5.18', sourceTokenIds: ['Gen.5.18.7'], category: 'cross-reference', title: 'Enoch in Seth\'s Line', content: 'This is the godly Enoch (not Cain\'s son, 4:17). Enoch means "dedicated"—he lived up to his name through intimate walk with God.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 5:19 - Jared lived after Enoch 800 years
export const genesis5_19_tokens: SourceToken[] = [
  { id: 'Gen.5.19.0', language: 'hebrew', text: 'וַֽיְחִי־יֶ֗רֶד', transliteration: 'wayḥî-yereḏ', lemma: 'חָיָה', lemmaTranslit: 'ḥāyāh', gloss: 'And lived Jared', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H2421', position: 0 },
  { id: 'Gen.5.19.1', language: 'hebrew', text: 'אַֽחֲרֵי֙', transliteration: 'ʾaḥărê', lemma: 'אַחַר', lemmaTranslit: 'ʾaḥar', gloss: 'after', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H310', position: 1 },
  { id: 'Gen.5.19.2', language: 'hebrew', text: 'הוֹלִיד֣וֹ', transliteration: 'hôlîḏô', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'he fathered', morphology: { pos: 'verb', mood: 'infinitive', stem: 'hiphil', rawCode: 'Vhc' }, strongs: 'H3205', position: 2 },
  { id: 'Gen.5.19.3', language: 'hebrew', text: 'אֶת־חֲנ֔וֹךְ', transliteration: 'ʾeṯ-ḥănôḵ', lemma: 'חֲנוֹךְ', lemmaTranslit: 'ḥănôḵ', gloss: 'Enoch', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2585', position: 3 },
  { id: 'Gen.5.19.4', language: 'hebrew', text: 'שְׁמֹנֶ֥ה', transliteration: 'šəmōneh', lemma: 'שְׁמֹנֶה', lemmaTranslit: 'šəmōneh', gloss: 'eight', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H8083', position: 4 },
  { id: 'Gen.5.19.5', language: 'hebrew', text: 'מֵא֖וֹת', transliteration: 'mēʾôṯ', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'hundred', morphology: { pos: 'numeral', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Acfpa' }, strongs: 'H3967', position: 5 },
  { id: 'Gen.5.19.6', language: 'hebrew', text: 'שָׁנָ֑ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 6 },
  { id: 'Gen.5.19.7', language: 'hebrew', text: 'וַיּ֥וֹלֶד', transliteration: 'wayyôleḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'and he fathered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H3205', position: 7 },
  { id: 'Gen.5.19.8', language: 'hebrew', text: 'בָּנִ֖ים', transliteration: 'bānîm', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'sons', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H1121', position: 8 },
  { id: 'Gen.5.19.9', language: 'hebrew', text: 'וּבָנֽוֹת', transliteration: 'ûḇānôṯ', lemma: 'בַּת', lemmaTranslit: 'baṯ', gloss: 'and daughters', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Ncfpa' }, strongs: 'H1323', position: 9 },
];

export const genesis5_19_translation: VerseTranslation = {
  verseRef: 'Gen.5.19',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And lived Jared after he fathered Enoch eight hundred years, and he fathered sons and daughters.', spans: [{ id: 'Gen.5.19.en.lit.0', text: 'And lived Jared after he fathered Enoch...', position: 0, sourceTokenIds: ['Gen.5.19.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Jared lived after he fathered Enoch 800 years and had other sons and daughters.', spans: [{ id: 'Gen.5.19.en.idi.0', text: 'Jared lived after he fathered Enoch 800 years...', position: 0, sourceTokenIds: ['Gen.5.19.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis5_19_notes: StudyNote[] = [];

// Genesis 5:20 - Jared lived 962 years, then died
export const genesis5_20_tokens: SourceToken[] = [
  { id: 'Gen.5.20.0', language: 'hebrew', text: 'וַיִּֽהְי֣וּ', transliteration: 'wayyihyû', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'And were', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H1961', position: 0 },
  { id: 'Gen.5.20.1', language: 'hebrew', text: 'כָּל־יְמֵי־יֶ֗רֶד', transliteration: 'kāl-yəmê-yereḏ', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'all the days of Jared', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H3117', position: 1 },
  { id: 'Gen.5.20.2', language: 'hebrew', text: 'שְׁתַּ֤יִם', transliteration: 'štayim', lemma: 'שְׁנַיִם', lemmaTranslit: 'šənayim', gloss: 'two', morphology: { pos: 'numeral', gender: 'feminine', number: 'dual', rawCode: 'Acfda' }, strongs: 'H8147', position: 2 },
  { id: 'Gen.5.20.3', language: 'hebrew', text: 'וְשִׁשִּׁים֙', transliteration: 'wəšiššîm', lemma: 'שִׁשִּׁים', lemmaTranslit: 'šiššîm', gloss: 'and sixty', morphology: { pos: 'numeral', rawCode: 'Acmpa' }, strongs: 'H8346', position: 3 },
  { id: 'Gen.5.20.4', language: 'hebrew', text: 'שָׁנָ֔ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 4 },
  { id: 'Gen.5.20.5', language: 'hebrew', text: 'וּתְשַׁ֥ע', transliteration: 'ûṯəšaʿ', lemma: 'תֵּשַׁע', lemmaTranslit: 'tēšaʿ', gloss: 'and nine', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H8672', position: 5 },
  { id: 'Gen.5.20.6', language: 'hebrew', text: 'מֵא֖וֹת', transliteration: 'mēʾôṯ', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'hundred', morphology: { pos: 'numeral', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Acfpa' }, strongs: 'H3967', position: 6 },
  { id: 'Gen.5.20.7', language: 'hebrew', text: 'שָׁנָ֑ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 7 },
  { id: 'Gen.5.20.8', language: 'hebrew', text: 'וַיָּמֹֽת', transliteration: 'wayyāmōṯ', lemma: 'מוּת', lemmaTranslit: 'mûṯ', gloss: 'and he died', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H4191', position: 8 },
];

export const genesis5_20_translation: VerseTranslation = {
  verseRef: 'Gen.5.20',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And were all the days of Jared two and sixty years and nine hundred years, and he died.', spans: [{ id: 'Gen.5.20.en.lit.0', text: 'And were all the days of Jared...', position: 0, sourceTokenIds: ['Gen.5.20.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Thus all the days of Jared were 962 years, and he died.', spans: [{ id: 'Gen.5.20.en.idi.0', text: 'Thus all the days of Jared were 962 years...', position: 0, sourceTokenIds: ['Gen.5.20.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis5_20_notes: StudyNote[] = [];

// Genesis 5:21 - Enoch lived 65 years, begot Methuselah
export const genesis5_21_tokens: SourceToken[] = [
  { id: 'Gen.5.21.0', language: 'hebrew', text: 'וַֽיְחִ֣י', transliteration: 'wayḥî', lemma: 'חָיָה', lemmaTranslit: 'ḥāyāh', gloss: 'And lived', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H2421', position: 0 },
  { id: 'Gen.5.21.1', language: 'hebrew', text: 'חֲנ֔וֹךְ', transliteration: 'ḥănôḵ', lemma: 'חֲנוֹךְ', lemmaTranslit: 'ḥănôḵ', gloss: 'Enoch', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2585', position: 1 },
  { id: 'Gen.5.21.2', language: 'hebrew', text: 'חָמֵ֥שׁ', transliteration: 'ḥāmēš', lemma: 'חָמֵשׁ', lemmaTranslit: 'ḥāmēš', gloss: 'five', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H2568', position: 2 },
  { id: 'Gen.5.21.3', language: 'hebrew', text: 'וְשִׁשִּׁ֖ים', transliteration: 'wəšiššîm', lemma: 'שִׁשִּׁים', lemmaTranslit: 'šiššîm', gloss: 'and sixty', morphology: { pos: 'numeral', rawCode: 'Acmpa' }, strongs: 'H8346', position: 3 },
  { id: 'Gen.5.21.4', language: 'hebrew', text: 'שָׁנָ֑ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 4 },
  { id: 'Gen.5.21.5', language: 'hebrew', text: 'וַיּ֖וֹלֶד', transliteration: 'wayyôleḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'and he fathered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H3205', position: 5 },
  { id: 'Gen.5.21.6', language: 'hebrew', text: 'אֶת־מְתוּשָֽׁלַח', transliteration: 'ʾeṯ-məṯûšālaḥ', lemma: 'מְתוּשֶׁלַח', lemmaTranslit: 'məṯûšelaḥ', gloss: 'Methuselah', glossExtended: 'man of the javelin, or his death shall send', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H4968', position: 6 },
];

export const genesis5_21_translation: VerseTranslation = {
  verseRef: 'Gen.5.21',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And lived Enoch five and sixty years, and he fathered Methuselah.', spans: [{ id: 'Gen.5.21.en.lit.0', text: 'And lived Enoch five and sixty years...', position: 0, sourceTokenIds: ['Gen.5.21.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'When Enoch had lived 65 years, he fathered Methuselah.', spans: [{ id: 'Gen.5.21.en.idi.0', text: 'When Enoch had lived 65 years...', position: 0, sourceTokenIds: ['Gen.5.21.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis5_21_notes: StudyNote[] = [
  { id: 'Gen.5.21.note.1', verseRef: 'Gen.5.21', sourceTokenIds: ['Gen.5.21.6'], category: 'lexical', title: 'Methuselah', content: 'Methuselah\'s name may mean "man of the javelin" or prophetically "his death shall send/bring." He died the year of the flood (969 years after Adam year 687 = flood year 1656).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 5:22 - Enoch walked with God 300 years
export const genesis5_22_tokens: SourceToken[] = [
  { id: 'Gen.5.22.0', language: 'hebrew', text: 'וַיִּתְהַלֵּ֨ךְ', transliteration: 'wayyiṯhallēḵ', lemma: 'הָלַךְ', lemmaTranslit: 'hālaḵ', gloss: 'And walked', glossExtended: 'to walk (hithpael: walked about with)', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hithpael', rawCode: 'Vtw3ms' }, strongs: 'H1980', position: 0 },
  { id: 'Gen.5.22.1', language: 'hebrew', text: 'חֲנ֜וֹךְ', transliteration: 'ḥănôḵ', lemma: 'חֲנוֹךְ', lemmaTranslit: 'ḥănôḵ', gloss: 'Enoch', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2585', position: 1 },
  { id: 'Gen.5.22.2', language: 'hebrew', text: 'אֶת־הָֽאֱלֹהִ֗ים', transliteration: 'ʾeṯ-hāʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'with God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H430', position: 2 },
  { id: 'Gen.5.22.3', language: 'hebrew', text: 'אַֽחֲרֵי֙', transliteration: 'ʾaḥărê', lemma: 'אַחַר', lemmaTranslit: 'ʾaḥar', gloss: 'after', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H310', position: 3 },
  { id: 'Gen.5.22.4', language: 'hebrew', text: 'הוֹלִיד֣וֹ', transliteration: 'hôlîḏô', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'he fathered', morphology: { pos: 'verb', mood: 'infinitive', stem: 'hiphil', rawCode: 'Vhc' }, strongs: 'H3205', position: 4 },
  { id: 'Gen.5.22.5', language: 'hebrew', text: 'אֶת־מְתוּשֶׁ֔לַח', transliteration: 'ʾeṯ-məṯûšelaḥ', lemma: 'מְתוּשֶׁלַח', lemmaTranslit: 'məṯûšelaḥ', gloss: 'Methuselah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H4968', position: 5 },
  { id: 'Gen.5.22.6', language: 'hebrew', text: 'שְׁלֹ֥שׁ', transliteration: 'šəlōš', lemma: 'שָׁלֹשׁ', lemmaTranslit: 'šālōš', gloss: 'three', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H7969', position: 6 },
  { id: 'Gen.5.22.7', language: 'hebrew', text: 'מֵא֖וֹת', transliteration: 'mēʾôṯ', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'hundred', morphology: { pos: 'numeral', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Acfpa' }, strongs: 'H3967', position: 7 },
  { id: 'Gen.5.22.8', language: 'hebrew', text: 'שָׁנָ֑ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 8 },
  { id: 'Gen.5.22.9', language: 'hebrew', text: 'וַיּ֥וֹלֶד', transliteration: 'wayyôleḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'and he fathered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H3205', position: 9 },
  { id: 'Gen.5.22.10', language: 'hebrew', text: 'בָּנִ֖ים', transliteration: 'bānîm', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'sons', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H1121', position: 10 },
  { id: 'Gen.5.22.11', language: 'hebrew', text: 'וּבָנֽוֹת', transliteration: 'ûḇānôṯ', lemma: 'בַּת', lemmaTranslit: 'baṯ', gloss: 'and daughters', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Ncfpa' }, strongs: 'H1323', position: 11 },
];

export const genesis5_22_translation: VerseTranslation = {
  verseRef: 'Gen.5.22',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And walked Enoch with God after he fathered Methuselah three hundred years, and he fathered sons and daughters.', spans: [{ id: 'Gen.5.22.en.lit.0', text: 'And walked Enoch with God...', position: 0, sourceTokenIds: ['Gen.5.22.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Enoch walked with God after he fathered Methuselah 300 years and had other sons and daughters.', spans: [{ id: 'Gen.5.22.en.idi.0', text: 'Enoch walked with God after he fathered Methuselah...', position: 0, sourceTokenIds: ['Gen.5.22.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis5_22_notes: StudyNote[] = [
  { id: 'Gen.5.22.note.1', verseRef: 'Gen.5.22', sourceTokenIds: ['Gen.5.22.0', 'Gen.5.22.2'], category: 'theological', title: 'Walked with God (hithallek)', content: 'The hithpael of hālaḵ means continuous, habitual walking—intimate fellowship with God. Only said of Enoch (5:22,24) and Noah (6:9). Enoch\'s walk began when Methuselah was born—perhaps a prophetic word awakened his spiritual life.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 5:23 - Enoch lived 365 years
export const genesis5_23_tokens: SourceToken[] = [
  { id: 'Gen.5.23.0', language: 'hebrew', text: 'וַיְהִ֖י', transliteration: 'wayəhî', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'And were', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H1961', position: 0 },
  { id: 'Gen.5.23.1', language: 'hebrew', text: 'כָּל־יְמֵ֣י', transliteration: 'kāl-yəmê', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'all the days of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H3117', position: 1 },
  { id: 'Gen.5.23.2', language: 'hebrew', text: 'חֲנ֑וֹךְ', transliteration: 'ḥănôḵ', lemma: 'חֲנוֹךְ', lemmaTranslit: 'ḥănôḵ', gloss: 'Enoch', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2585', position: 2 },
  { id: 'Gen.5.23.3', language: 'hebrew', text: 'חָמֵ֤שׁ', transliteration: 'ḥāmēš', lemma: 'חָמֵשׁ', lemmaTranslit: 'ḥāmēš', gloss: 'five', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H2568', position: 3 },
  { id: 'Gen.5.23.4', language: 'hebrew', text: 'וְשִׁשִּׁים֙', transliteration: 'wəšiššîm', lemma: 'שִׁשִּׁים', lemmaTranslit: 'šiššîm', gloss: 'and sixty', morphology: { pos: 'numeral', rawCode: 'Acmpa' }, strongs: 'H8346', position: 4 },
  { id: 'Gen.5.23.5', language: 'hebrew', text: 'שָׁנָ֔ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 5 },
  { id: 'Gen.5.23.6', language: 'hebrew', text: 'וּשְׁלֹ֥שׁ', transliteration: 'ûšəlōš', lemma: 'שָׁלֹשׁ', lemmaTranslit: 'šālōš', gloss: 'and three', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H7969', position: 6 },
  { id: 'Gen.5.23.7', language: 'hebrew', text: 'מֵא֖וֹת', transliteration: 'mēʾôṯ', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'hundred', morphology: { pos: 'numeral', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Acfpa' }, strongs: 'H3967', position: 7 },
  { id: 'Gen.5.23.8', language: 'hebrew', text: 'שָׁנָֽה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 8 },
];

export const genesis5_23_translation: VerseTranslation = {
  verseRef: 'Gen.5.23',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And were all the days of Enoch five and sixty years and three hundred years.', spans: [{ id: 'Gen.5.23.en.lit.0', text: 'And were all the days of Enoch...', position: 0, sourceTokenIds: ['Gen.5.23.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Thus all the days of Enoch were 365 years.', spans: [{ id: 'Gen.5.23.en.idi.0', text: 'Thus all the days of Enoch were 365 years...', position: 0, sourceTokenIds: ['Gen.5.23.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis5_23_notes: StudyNote[] = [
  { id: 'Gen.5.23.note.1', verseRef: 'Gen.5.23', sourceTokenIds: [], category: 'interpretive', title: '365 Years', content: 'Enoch\'s 365 years is the shortest lifespan in the chapter and equals the number of days in a solar year. Some see symbolic significance: his life was "complete" in God\'s eyes.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 5:24 - Enoch walked with God; he was not, for God took him
export const genesis5_24_tokens: SourceToken[] = [
  { id: 'Gen.5.24.0', language: 'hebrew', text: 'וַיִּתְהַלֵּ֥ךְ', transliteration: 'wayyiṯhallēḵ', lemma: 'הָלַךְ', lemmaTranslit: 'hālaḵ', gloss: 'And walked', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hithpael', rawCode: 'Vtw3ms' }, strongs: 'H1980', position: 0 },
  { id: 'Gen.5.24.1', language: 'hebrew', text: 'חֲנ֖וֹךְ', transliteration: 'ḥănôḵ', lemma: 'חֲנוֹךְ', lemmaTranslit: 'ḥănôḵ', gloss: 'Enoch', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2585', position: 1 },
  { id: 'Gen.5.24.2', language: 'hebrew', text: 'אֶת־הָֽאֱלֹהִ֑ים', transliteration: 'ʾeṯ-hāʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'with God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H430', position: 2 },
  { id: 'Gen.5.24.3', language: 'hebrew', text: 'וְאֵינֶ֕נּוּ', transliteration: 'wəʾênennû', lemma: 'אַיִן', lemmaTranslit: 'ʾayin', gloss: 'and he was not', glossExtended: 'there is not, he was not', morphology: { pos: 'particle', rawCode: 'Tn' }, strongs: 'H369', position: 3 },
  { id: 'Gen.5.24.4', language: 'hebrew', text: 'כִּֽי־לָקַ֥ח', transliteration: 'kî-lāqaḥ', lemma: 'לָקַח', lemmaTranslit: 'lāqaḥ', gloss: 'for took', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H3947', position: 4 },
  { id: 'Gen.5.24.5', language: 'hebrew', text: 'אֹת֖וֹ', transliteration: 'ʾōṯô', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: 'him', morphology: { pos: 'preposition', rawCode: 'To' }, strongs: 'H853', position: 5 },
  { id: 'Gen.5.24.6', language: 'hebrew', text: 'אֱלֹהִֽים', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H430', position: 6 },
];

export const genesis5_24_translation: VerseTranslation = {
  verseRef: 'Gen.5.24',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And walked Enoch with God, and he was not, for took him God.', spans: [{ id: 'Gen.5.24.en.lit.0', text: 'And walked Enoch with God...', position: 0, sourceTokenIds: ['Gen.5.24.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Enoch walked with God, and he was not, for God took him.', spans: [{ id: 'Gen.5.24.en.idi.0', text: 'Enoch walked with God, and he was not...', position: 0, sourceTokenIds: ['Gen.5.24.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis5_24_notes: StudyNote[] = [
  { id: 'Gen.5.24.note.1', verseRef: 'Gen.5.24', sourceTokenIds: ['Gen.5.24.3', 'Gen.5.24.4'], category: 'theological', title: 'God Took Him', content: 'Enoch did not die—"he was not" (ʾênennû) "for God took him" (lāqaḥ). This is translated (Heb 11:5), not death. Enoch and Elijah (2 Kgs 2:11) are the only two taken without dying.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.5.24.note.2', verseRef: 'Gen.5.24', sourceTokenIds: [], category: 'cross-reference', title: 'New Testament on Enoch', content: 'Hebrews 11:5 says Enoch "was taken up so that he should not see death...because he had pleased God." Jude 14-15 quotes Enoch\'s prophecy of judgment.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 5:25 - Methuselah lived 187 years, begot Lamech
export const genesis5_25_tokens: SourceToken[] = [
  { id: 'Gen.5.25.0', language: 'hebrew', text: 'וַיְחִ֣י', transliteration: 'wayḥî', lemma: 'חָיָה', lemmaTranslit: 'ḥāyāh', gloss: 'And lived', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H2421', position: 0 },
  { id: 'Gen.5.25.1', language: 'hebrew', text: 'מְתוּשֶׁ֔לַח', transliteration: 'məṯûšelaḥ', lemma: 'מְתוּשֶׁלַח', lemmaTranslit: 'məṯûšelaḥ', gloss: 'Methuselah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H4968', position: 1 },
  { id: 'Gen.5.25.2', language: 'hebrew', text: 'שֶׁ֧בַע', transliteration: 'šeḇaʿ', lemma: 'שֶׁבַע', lemmaTranslit: 'šeḇaʿ', gloss: 'seven', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H7651', position: 2 },
  { id: 'Gen.5.25.3', language: 'hebrew', text: 'וּשְׁמֹנִ֛ים', transliteration: 'ûšəmōnîm', lemma: 'שְׁמֹנִים', lemmaTranslit: 'šəmōnîm', gloss: 'and eighty', morphology: { pos: 'numeral', rawCode: 'Acmpa' }, strongs: 'H8084', position: 3 },
  { id: 'Gen.5.25.4', language: 'hebrew', text: 'שָׁנָ֖ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 4 },
  { id: 'Gen.5.25.5', language: 'hebrew', text: 'וּמְאַ֣ת', transliteration: 'ûməʾaṯ', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'and a hundred', morphology: { pos: 'numeral', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Acfsa' }, strongs: 'H3967', position: 5 },
  { id: 'Gen.5.25.6', language: 'hebrew', text: 'שָׁנָ֑ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 6 },
  { id: 'Gen.5.25.7', language: 'hebrew', text: 'וַיּ֖וֹלֶד', transliteration: 'wayyôleḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'and he fathered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H3205', position: 7 },
  { id: 'Gen.5.25.8', language: 'hebrew', text: 'אֶת־לָֽמֶךְ', transliteration: 'ʾeṯ-lāmeḵ', lemma: 'לֶמֶךְ', lemmaTranslit: 'lemeḵ', gloss: 'Lamech', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3929', position: 8 },
];

export const genesis5_25_translation: VerseTranslation = {
  verseRef: 'Gen.5.25',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And lived Methuselah seven and eighty years and a hundred years, and he fathered Lamech.', spans: [{ id: 'Gen.5.25.en.lit.0', text: 'And lived Methuselah seven and eighty years...', position: 0, sourceTokenIds: ['Gen.5.25.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'When Methuselah had lived 187 years, he fathered Lamech.', spans: [{ id: 'Gen.5.25.en.idi.0', text: 'When Methuselah had lived 187 years...', position: 0, sourceTokenIds: ['Gen.5.25.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis5_25_notes: StudyNote[] = [
  { id: 'Gen.5.25.note.1', verseRef: 'Gen.5.25', sourceTokenIds: ['Gen.5.25.8'], category: 'cross-reference', title: 'Lamech in Seth\'s Line', content: 'This is the godly Lamech, father of Noah—not the violent Lamech of Cain\'s line (4:23-24). The contrast between the two Lamechs highlights the divergent trajectories of the two lines.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 5:26 - Methuselah lived after Lamech 782 years
export const genesis5_26_tokens: SourceToken[] = [
  { id: 'Gen.5.26.0', language: 'hebrew', text: 'וַיְחִ֣י', transliteration: 'wayḥî', lemma: 'חָיָה', lemmaTranslit: 'ḥāyāh', gloss: 'And lived', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H2421', position: 0 },
  { id: 'Gen.5.26.1', language: 'hebrew', text: 'מְתוּשֶׁ֗לַח', transliteration: 'məṯûšelaḥ', lemma: 'מְתוּשֶׁלַח', lemmaTranslit: 'məṯûšelaḥ', gloss: 'Methuselah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H4968', position: 1 },
  { id: 'Gen.5.26.2', language: 'hebrew', text: 'אַֽחֲרֵי֙', transliteration: 'ʾaḥărê', lemma: 'אַחַר', lemmaTranslit: 'ʾaḥar', gloss: 'after', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H310', position: 2 },
  { id: 'Gen.5.26.3', language: 'hebrew', text: 'הוֹלִיד֣וֹ', transliteration: 'hôlîḏô', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'he fathered', morphology: { pos: 'verb', mood: 'infinitive', stem: 'hiphil', rawCode: 'Vhc' }, strongs: 'H3205', position: 3 },
  { id: 'Gen.5.26.4', language: 'hebrew', text: 'אֶת־לֶ֔מֶךְ', transliteration: 'ʾeṯ-lemeḵ', lemma: 'לֶמֶךְ', lemmaTranslit: 'lemeḵ', gloss: 'Lamech', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3929', position: 4 },
  { id: 'Gen.5.26.5', language: 'hebrew', text: 'שְׁתַּ֤יִם', transliteration: 'štayim', lemma: 'שְׁנַיִם', lemmaTranslit: 'šənayim', gloss: 'two', morphology: { pos: 'numeral', gender: 'feminine', number: 'dual', rawCode: 'Acfda' }, strongs: 'H8147', position: 5 },
  { id: 'Gen.5.26.6', language: 'hebrew', text: 'וּשְׁמוֹנִים֙', transliteration: 'ûšəmônîm', lemma: 'שְׁמֹנִים', lemmaTranslit: 'šəmōnîm', gloss: 'and eighty', morphology: { pos: 'numeral', rawCode: 'Acmpa' }, strongs: 'H8084', position: 6 },
  { id: 'Gen.5.26.7', language: 'hebrew', text: 'שָׁנָ֔ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 7 },
  { id: 'Gen.5.26.8', language: 'hebrew', text: 'וּשְׁבַ֥ע', transliteration: 'ûšəḇaʿ', lemma: 'שֶׁבַע', lemmaTranslit: 'šeḇaʿ', gloss: 'and seven', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H7651', position: 8 },
  { id: 'Gen.5.26.9', language: 'hebrew', text: 'מֵא֖וֹת', transliteration: 'mēʾôṯ', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'hundred', morphology: { pos: 'numeral', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Acfpa' }, strongs: 'H3967', position: 9 },
  { id: 'Gen.5.26.10', language: 'hebrew', text: 'שָׁנָ֑ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 10 },
  { id: 'Gen.5.26.11', language: 'hebrew', text: 'וַיּ֥וֹלֶד', transliteration: 'wayyôleḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'and he fathered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H3205', position: 11 },
  { id: 'Gen.5.26.12', language: 'hebrew', text: 'בָּנִ֖ים', transliteration: 'bānîm', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'sons', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H1121', position: 12 },
  { id: 'Gen.5.26.13', language: 'hebrew', text: 'וּבָנֽוֹת', transliteration: 'ûḇānôṯ', lemma: 'בַּת', lemmaTranslit: 'baṯ', gloss: 'and daughters', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Ncfpa' }, strongs: 'H1323', position: 13 },
];

export const genesis5_26_translation: VerseTranslation = {
  verseRef: 'Gen.5.26',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And lived Methuselah after he fathered Lamech two and eighty years and seven hundred years, and he fathered sons and daughters.', spans: [{ id: 'Gen.5.26.en.lit.0', text: 'And lived Methuselah after he fathered Lamech...', position: 0, sourceTokenIds: ['Gen.5.26.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Methuselah lived after he fathered Lamech 782 years and had other sons and daughters.', spans: [{ id: 'Gen.5.26.en.idi.0', text: 'Methuselah lived after he fathered Lamech 782 years...', position: 0, sourceTokenIds: ['Gen.5.26.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis5_26_notes: StudyNote[] = [];

// Genesis 5:27 - Methuselah lived 969 years, then died
export const genesis5_27_tokens: SourceToken[] = [
  { id: 'Gen.5.27.0', language: 'hebrew', text: 'וַיִּהְי֣וּ', transliteration: 'wayyihyû', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'And were', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H1961', position: 0 },
  { id: 'Gen.5.27.1', language: 'hebrew', text: 'כָּל־יְמֵ֣י', transliteration: 'kāl-yəmê', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'all the days of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H3117', position: 1 },
  { id: 'Gen.5.27.2', language: 'hebrew', text: 'מְתוּשֶׁ֗לַח', transliteration: 'məṯûšelaḥ', lemma: 'מְתוּשֶׁלַח', lemmaTranslit: 'məṯûšelaḥ', gloss: 'Methuselah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H4968', position: 2 },
  { id: 'Gen.5.27.3', language: 'hebrew', text: 'תֵּ֤שַׁע', transliteration: 'tēšaʿ', lemma: 'תֵּשַׁע', lemmaTranslit: 'tēšaʿ', gloss: 'nine', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H8672', position: 3 },
  { id: 'Gen.5.27.4', language: 'hebrew', text: 'וְשִׁשִּׁים֙', transliteration: 'wəšiššîm', lemma: 'שִׁשִּׁים', lemmaTranslit: 'šiššîm', gloss: 'and sixty', morphology: { pos: 'numeral', rawCode: 'Acmpa' }, strongs: 'H8346', position: 4 },
  { id: 'Gen.5.27.5', language: 'hebrew', text: 'שָׁנָ֔ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 5 },
  { id: 'Gen.5.27.6', language: 'hebrew', text: 'וּתְשַׁ֥ע', transliteration: 'ûṯəšaʿ', lemma: 'תֵּשַׁע', lemmaTranslit: 'tēšaʿ', gloss: 'and nine', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H8672', position: 6 },
  { id: 'Gen.5.27.7', language: 'hebrew', text: 'מֵא֖וֹת', transliteration: 'mēʾôṯ', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'hundred', morphology: { pos: 'numeral', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Acfpa' }, strongs: 'H3967', position: 7 },
  { id: 'Gen.5.27.8', language: 'hebrew', text: 'שָׁנָ֑ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 8 },
  { id: 'Gen.5.27.9', language: 'hebrew', text: 'וַיָּמֹֽת', transliteration: 'wayyāmōṯ', lemma: 'מוּת', lemmaTranslit: 'mûṯ', gloss: 'and he died', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H4191', position: 9 },
];

export const genesis5_27_translation: VerseTranslation = {
  verseRef: 'Gen.5.27',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And were all the days of Methuselah nine and sixty years and nine hundred years, and he died.', spans: [{ id: 'Gen.5.27.en.lit.0', text: 'And were all the days of Methuselah...', position: 0, sourceTokenIds: ['Gen.5.27.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Thus all the days of Methuselah were 969 years, and he died.', spans: [{ id: 'Gen.5.27.en.idi.0', text: 'Thus all the days of Methuselah were 969 years...', position: 0, sourceTokenIds: ['Gen.5.27.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis5_27_notes: StudyNote[] = [
  { id: 'Gen.5.27.note.1', verseRef: 'Gen.5.27', sourceTokenIds: [], category: 'interpretive', title: 'Longest Life in Scripture', content: 'Methuselah\'s 969 years is the longest recorded human lifespan. By the genealogical calculations, he died the year of the flood—perhaps his death was the signal that judgment had come.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Export verse structures
export const genesis5_18_verse = { ref: 'Gen.5.18', sourceTokens: genesis5_18_tokens, translation: genesis5_18_translation, notes: genesis5_18_notes };
export const genesis5_19_verse = { ref: 'Gen.5.19', sourceTokens: genesis5_19_tokens, translation: genesis5_19_translation, notes: genesis5_19_notes };
export const genesis5_20_verse = { ref: 'Gen.5.20', sourceTokens: genesis5_20_tokens, translation: genesis5_20_translation, notes: genesis5_20_notes };
export const genesis5_21_verse = { ref: 'Gen.5.21', sourceTokens: genesis5_21_tokens, translation: genesis5_21_translation, notes: genesis5_21_notes };
export const genesis5_22_verse = { ref: 'Gen.5.22', sourceTokens: genesis5_22_tokens, translation: genesis5_22_translation, notes: genesis5_22_notes };
export const genesis5_23_verse = { ref: 'Gen.5.23', sourceTokens: genesis5_23_tokens, translation: genesis5_23_translation, notes: genesis5_23_notes };
export const genesis5_24_verse = { ref: 'Gen.5.24', sourceTokens: genesis5_24_tokens, translation: genesis5_24_translation, notes: genesis5_24_notes };
export const genesis5_25_verse = { ref: 'Gen.5.25', sourceTokens: genesis5_25_tokens, translation: genesis5_25_translation, notes: genesis5_25_notes };
export const genesis5_26_verse = { ref: 'Gen.5.26', sourceTokens: genesis5_26_tokens, translation: genesis5_26_translation, notes: genesis5_26_notes };
export const genesis5_27_verse = { ref: 'Gen.5.27', sourceTokens: genesis5_27_tokens, translation: genesis5_27_translation, notes: genesis5_27_notes };

// Combined export
export const genesis5_18_27_verses = [
  genesis5_18_verse,
  genesis5_19_verse,
  genesis5_20_verse,
  genesis5_21_verse,
  genesis5_22_verse,
  genesis5_23_verse,
  genesis5_24_verse,
  genesis5_25_verse,
  genesis5_26_verse,
  genesis5_27_verse,
];

export default genesis5_18_27_verses;
