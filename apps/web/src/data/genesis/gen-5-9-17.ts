/**
 * Genesis 5:9-17 - Hebrew morphological data
 * Genealogy: Enosh to Mahalalel
 * Source: Open Hebrew Bible (Tanach.us) - Public Domain
 */

import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

// Genesis 5:9 - Enosh lived 90 years, begot Kenan
export const genesis5_9_tokens: SourceToken[] = [
  { id: 'Gen.5.9.0', language: 'hebrew', text: 'וַֽיְחִ֥י', transliteration: 'wayḥî', lemma: 'חָיָה', lemmaTranslit: 'ḥāyāh', gloss: 'And lived', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H2421', position: 0 },
  { id: 'Gen.5.9.1', language: 'hebrew', text: 'אֱנ֖וֹשׁ', transliteration: 'ʾĕnôš', lemma: 'אֱנוֹשׁ', lemmaTranslit: 'ʾĕnôš', gloss: 'Enosh', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H583', position: 1 },
  { id: 'Gen.5.9.2', language: 'hebrew', text: 'תִּשְׁעִ֣ים', transliteration: 'tišʿîm', lemma: 'תִּשְׁעִים', lemmaTranslit: 'tišʿîm', gloss: 'ninety', morphology: { pos: 'numeral', rawCode: 'Acmpa' }, strongs: 'H8673', position: 2 },
  { id: 'Gen.5.9.3', language: 'hebrew', text: 'שָׁנָ֑ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 3 },
  { id: 'Gen.5.9.4', language: 'hebrew', text: 'וַיּ֖וֹלֶד', transliteration: 'wayyôleḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'and he fathered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H3205', position: 4 },
  { id: 'Gen.5.9.5', language: 'hebrew', text: 'אֶת־קֵינָֽן', transliteration: 'ʾeṯ-qênān', lemma: 'קֵינָן', lemmaTranslit: 'qênān', gloss: 'Kenan', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H7018', position: 5 },
];

export const genesis5_9_translation: VerseTranslation = {
  verseRef: 'Gen.5.9',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And lived Enosh ninety years, and he fathered Kenan.', spans: [{ id: 'Gen.5.9.en.lit.0', text: 'And lived Enosh ninety years...', position: 0, sourceTokenIds: ['Gen.5.9.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'When Enosh had lived 90 years, he fathered Kenan.', spans: [{ id: 'Gen.5.9.en.idi.0', text: 'When Enosh had lived 90 years...', position: 0, sourceTokenIds: ['Gen.5.9.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis5_9_notes: StudyNote[] = [];

// Genesis 5:10 - Enosh lived after Kenan 815 years
export const genesis5_10_tokens: SourceToken[] = [
  { id: 'Gen.5.10.0', language: 'hebrew', text: 'וַֽיְחִי־אֱנ֗וֹשׁ', transliteration: 'wayḥî-ʾĕnôš', lemma: 'חָיָה', lemmaTranslit: 'ḥāyāh', gloss: 'And lived Enosh', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H2421', position: 0 },
  { id: 'Gen.5.10.1', language: 'hebrew', text: 'אַֽחֲרֵי֙', transliteration: 'ʾaḥărê', lemma: 'אַחַר', lemmaTranslit: 'ʾaḥar', gloss: 'after', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H310', position: 1 },
  { id: 'Gen.5.10.2', language: 'hebrew', text: 'הוֹלִיד֣וֹ', transliteration: 'hôlîḏô', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'he fathered', morphology: { pos: 'verb', mood: 'infinitive', stem: 'hiphil', rawCode: 'Vhc' }, strongs: 'H3205', position: 2 },
  { id: 'Gen.5.10.3', language: 'hebrew', text: 'אֶת־קֵינָ֔ן', transliteration: 'ʾeṯ-qênān', lemma: 'קֵינָן', lemmaTranslit: 'qênān', gloss: 'Kenan', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H7018', position: 3 },
  { id: 'Gen.5.10.4', language: 'hebrew', text: 'חֲמֵ֥שׁ', transliteration: 'ḥămēš', lemma: 'חָמֵשׁ', lemmaTranslit: 'ḥāmēš', gloss: 'five', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H2568', position: 4 },
  { id: 'Gen.5.10.5', language: 'hebrew', text: 'עֶשְׂרֵ֛ה', transliteration: 'ʿeśrēh', lemma: 'עֶשֶׂר', lemmaTranslit: 'ʿeśer', gloss: 'ten', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H6240', position: 5 },
  { id: 'Gen.5.10.6', language: 'hebrew', text: 'שָׁנָ֖ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 6 },
  { id: 'Gen.5.10.7', language: 'hebrew', text: 'וּשְׁמֹנֶ֥ה', transliteration: 'ûšəmōneh', lemma: 'שְׁמֹנֶה', lemmaTranslit: 'šəmōneh', gloss: 'and eight', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H8083', position: 7 },
  { id: 'Gen.5.10.8', language: 'hebrew', text: 'מֵא֖וֹת', transliteration: 'mēʾôṯ', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'hundred', morphology: { pos: 'numeral', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Acfpa' }, strongs: 'H3967', position: 8 },
  { id: 'Gen.5.10.9', language: 'hebrew', text: 'שָׁנָ֑ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 9 },
  { id: 'Gen.5.10.10', language: 'hebrew', text: 'וַיּ֥וֹלֶד', transliteration: 'wayyôleḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'and he fathered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H3205', position: 10 },
  { id: 'Gen.5.10.11', language: 'hebrew', text: 'בָּנִ֖ים', transliteration: 'bānîm', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'sons', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H1121', position: 11 },
  { id: 'Gen.5.10.12', language: 'hebrew', text: 'וּבָנֽוֹת', transliteration: 'ûḇānôṯ', lemma: 'בַּת', lemmaTranslit: 'baṯ', gloss: 'and daughters', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Ncfpa' }, strongs: 'H1323', position: 12 },
];

export const genesis5_10_translation: VerseTranslation = {
  verseRef: 'Gen.5.10',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And lived Enosh after he fathered Kenan fifteen years and eight hundred years, and he fathered sons and daughters.', spans: [{ id: 'Gen.5.10.en.lit.0', text: 'And lived Enosh after he fathered Kenan...', position: 0, sourceTokenIds: ['Gen.5.10.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Enosh lived after he fathered Kenan 815 years and had other sons and daughters.', spans: [{ id: 'Gen.5.10.en.idi.0', text: 'Enosh lived after he fathered Kenan 815 years...', position: 0, sourceTokenIds: ['Gen.5.10.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis5_10_notes: StudyNote[] = [];

// Genesis 5:11 - Enosh lived 905 years, then died
export const genesis5_11_tokens: SourceToken[] = [
  { id: 'Gen.5.11.0', language: 'hebrew', text: 'וַיִּֽהְי֣וּ', transliteration: 'wayyihyû', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'And were', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H1961', position: 0 },
  { id: 'Gen.5.11.1', language: 'hebrew', text: 'כָּל־יְמֵ֣י', transliteration: 'kāl-yəmê', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'all the days of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H3117', position: 1 },
  { id: 'Gen.5.11.2', language: 'hebrew', text: 'אֱנ֔וֹשׁ', transliteration: 'ʾĕnôš', lemma: 'אֱנוֹשׁ', lemmaTranslit: 'ʾĕnôš', gloss: 'Enosh', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H583', position: 2 },
  { id: 'Gen.5.11.3', language: 'hebrew', text: 'חָמֵ֥שׁ', transliteration: 'ḥāmēš', lemma: 'חָמֵשׁ', lemmaTranslit: 'ḥāmēš', gloss: 'five', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H2568', position: 3 },
  { id: 'Gen.5.11.4', language: 'hebrew', text: 'שָׁנִ֖ים', transliteration: 'šānîm', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Ncfpa' }, strongs: 'H8141', position: 4 },
  { id: 'Gen.5.11.5', language: 'hebrew', text: 'וּתְשַׁ֥ע', transliteration: 'ûṯəšaʿ', lemma: 'תֵּשַׁע', lemmaTranslit: 'tēšaʿ', gloss: 'and nine', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H8672', position: 5 },
  { id: 'Gen.5.11.6', language: 'hebrew', text: 'מֵא֖וֹת', transliteration: 'mēʾôṯ', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'hundred', morphology: { pos: 'numeral', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Acfpa' }, strongs: 'H3967', position: 6 },
  { id: 'Gen.5.11.7', language: 'hebrew', text: 'שָׁנָ֑ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 7 },
  { id: 'Gen.5.11.8', language: 'hebrew', text: 'וַיָּמֹֽת', transliteration: 'wayyāmōṯ', lemma: 'מוּת', lemmaTranslit: 'mûṯ', gloss: 'and he died', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H4191', position: 8 },
];

export const genesis5_11_translation: VerseTranslation = {
  verseRef: 'Gen.5.11',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And were all the days of Enosh five years and nine hundred years, and he died.', spans: [{ id: 'Gen.5.11.en.lit.0', text: 'And were all the days of Enosh...', position: 0, sourceTokenIds: ['Gen.5.11.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Thus all the days of Enosh were 905 years, and he died.', spans: [{ id: 'Gen.5.11.en.idi.0', text: 'Thus all the days of Enosh were 905 years...', position: 0, sourceTokenIds: ['Gen.5.11.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis5_11_notes: StudyNote[] = [];

// Genesis 5:12 - Kenan lived 70 years, begot Mahalalel
export const genesis5_12_tokens: SourceToken[] = [
  { id: 'Gen.5.12.0', language: 'hebrew', text: 'וַֽיְחִ֥י', transliteration: 'wayḥî', lemma: 'חָיָה', lemmaTranslit: 'ḥāyāh', gloss: 'And lived', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H2421', position: 0 },
  { id: 'Gen.5.12.1', language: 'hebrew', text: 'קֵינָ֖ן', transliteration: 'qênān', lemma: 'קֵינָן', lemmaTranslit: 'qênān', gloss: 'Kenan', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H7018', position: 1 },
  { id: 'Gen.5.12.2', language: 'hebrew', text: 'שִׁבְעִ֣ים', transliteration: 'šiḇʿîm', lemma: 'שִׁבְעִים', lemmaTranslit: 'šiḇʿîm', gloss: 'seventy', morphology: { pos: 'numeral', rawCode: 'Acmpa' }, strongs: 'H7657', position: 2 },
  { id: 'Gen.5.12.3', language: 'hebrew', text: 'שָׁנָ֑ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 3 },
  { id: 'Gen.5.12.4', language: 'hebrew', text: 'וַיּ֖וֹלֶד', transliteration: 'wayyôleḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'and he fathered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H3205', position: 4 },
  { id: 'Gen.5.12.5', language: 'hebrew', text: 'אֶת־מַֽהֲלַלְאֵֽל', transliteration: 'ʾeṯ-mahălalʾēl', lemma: 'מַהֲלַלְאֵל', lemmaTranslit: 'mahălalʾēl', gloss: 'Mahalalel', glossExtended: 'praise of God', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H4111', position: 5 },
];

export const genesis5_12_translation: VerseTranslation = {
  verseRef: 'Gen.5.12',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And lived Kenan seventy years, and he fathered Mahalalel.', spans: [{ id: 'Gen.5.12.en.lit.0', text: 'And lived Kenan seventy years...', position: 0, sourceTokenIds: ['Gen.5.12.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'When Kenan had lived 70 years, he fathered Mahalalel.', spans: [{ id: 'Gen.5.12.en.idi.0', text: 'When Kenan had lived 70 years...', position: 0, sourceTokenIds: ['Gen.5.12.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis5_12_notes: StudyNote[] = [
  { id: 'Gen.5.12.note.1', verseRef: 'Gen.5.12', sourceTokenIds: ['Gen.5.12.5'], category: 'lexical', title: 'Mahalalel', content: 'Mahalalel means "praise of God" (from halal, to praise). This name in Seth\'s line reflects the worship that began in Enosh\'s time (4:26).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 5:13 - Kenan lived after Mahalalel 840 years
export const genesis5_13_tokens: SourceToken[] = [
  { id: 'Gen.5.13.0', language: 'hebrew', text: 'וַיְחִ֣י', transliteration: 'wayḥî', lemma: 'חָיָה', lemmaTranslit: 'ḥāyāh', gloss: 'And lived', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H2421', position: 0 },
  { id: 'Gen.5.13.1', language: 'hebrew', text: 'קֵינָ֗ן', transliteration: 'qênān', lemma: 'קֵינָן', lemmaTranslit: 'qênān', gloss: 'Kenan', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H7018', position: 1 },
  { id: 'Gen.5.13.2', language: 'hebrew', text: 'אַֽחֲרֵי֙', transliteration: 'ʾaḥărê', lemma: 'אַחַר', lemmaTranslit: 'ʾaḥar', gloss: 'after', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H310', position: 2 },
  { id: 'Gen.5.13.3', language: 'hebrew', text: 'הוֹלִיד֣וֹ', transliteration: 'hôlîḏô', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'he fathered', morphology: { pos: 'verb', mood: 'infinitive', stem: 'hiphil', rawCode: 'Vhc' }, strongs: 'H3205', position: 3 },
  { id: 'Gen.5.13.4', language: 'hebrew', text: 'אֶת־מַֽהֲלַלְאֵ֔ל', transliteration: 'ʾeṯ-mahălalʾēl', lemma: 'מַהֲלַלְאֵל', lemmaTranslit: 'mahălalʾēl', gloss: 'Mahalalel', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H4111', position: 4 },
  { id: 'Gen.5.13.5', language: 'hebrew', text: 'אַרְבָּעִ֥ים', transliteration: 'ʾarbāʿîm', lemma: 'אַרְבָּעִים', lemmaTranslit: 'ʾarbaʿîm', gloss: 'forty', morphology: { pos: 'numeral', rawCode: 'Acmpa' }, strongs: 'H705', position: 5 },
  { id: 'Gen.5.13.6', language: 'hebrew', text: 'שָׁנָ֖ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 6 },
  { id: 'Gen.5.13.7', language: 'hebrew', text: 'וּשְׁמֹנֶ֥ה', transliteration: 'ûšəmōneh', lemma: 'שְׁמֹנֶה', lemmaTranslit: 'šəmōneh', gloss: 'and eight', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H8083', position: 7 },
  { id: 'Gen.5.13.8', language: 'hebrew', text: 'מֵא֖וֹת', transliteration: 'mēʾôṯ', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'hundred', morphology: { pos: 'numeral', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Acfpa' }, strongs: 'H3967', position: 8 },
  { id: 'Gen.5.13.9', language: 'hebrew', text: 'שָׁנָ֑ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 9 },
  { id: 'Gen.5.13.10', language: 'hebrew', text: 'וַיּ֥וֹלֶד', transliteration: 'wayyôleḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'and he fathered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H3205', position: 10 },
  { id: 'Gen.5.13.11', language: 'hebrew', text: 'בָּנִ֖ים', transliteration: 'bānîm', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'sons', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H1121', position: 11 },
  { id: 'Gen.5.13.12', language: 'hebrew', text: 'וּבָנֽוֹת', transliteration: 'ûḇānôṯ', lemma: 'בַּת', lemmaTranslit: 'baṯ', gloss: 'and daughters', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Ncfpa' }, strongs: 'H1323', position: 12 },
];

export const genesis5_13_translation: VerseTranslation = {
  verseRef: 'Gen.5.13',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And lived Kenan after he fathered Mahalalel forty years and eight hundred years, and he fathered sons and daughters.', spans: [{ id: 'Gen.5.13.en.lit.0', text: 'And lived Kenan after he fathered Mahalalel...', position: 0, sourceTokenIds: ['Gen.5.13.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Kenan lived after he fathered Mahalalel 840 years and had other sons and daughters.', spans: [{ id: 'Gen.5.13.en.idi.0', text: 'Kenan lived after he fathered Mahalalel 840 years...', position: 0, sourceTokenIds: ['Gen.5.13.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis5_13_notes: StudyNote[] = [];

// Genesis 5:14 - Kenan lived 910 years, then died
export const genesis5_14_tokens: SourceToken[] = [
  { id: 'Gen.5.14.0', language: 'hebrew', text: 'וַיִּֽהְי֣וּ', transliteration: 'wayyihyû', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'And were', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H1961', position: 0 },
  { id: 'Gen.5.14.1', language: 'hebrew', text: 'כָּל־יְמֵ֣י', transliteration: 'kāl-yəmê', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'all the days of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H3117', position: 1 },
  { id: 'Gen.5.14.2', language: 'hebrew', text: 'קֵינָ֔ן', transliteration: 'qênān', lemma: 'קֵינָן', lemmaTranslit: 'qênān', gloss: 'Kenan', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H7018', position: 2 },
  { id: 'Gen.5.14.3', language: 'hebrew', text: 'עֶ֥שֶׂר', transliteration: 'ʿeśer', lemma: 'עֶשֶׂר', lemmaTranslit: 'ʿeśer', gloss: 'ten', morphology: { pos: 'numeral', rawCode: 'Acmsa' }, strongs: 'H6235', position: 3 },
  { id: 'Gen.5.14.4', language: 'hebrew', text: 'שָׁנִ֖ים', transliteration: 'šānîm', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Ncfpa' }, strongs: 'H8141', position: 4 },
  { id: 'Gen.5.14.5', language: 'hebrew', text: 'וּתְשַׁ֥ע', transliteration: 'ûṯəšaʿ', lemma: 'תֵּשַׁע', lemmaTranslit: 'tēšaʿ', gloss: 'and nine', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H8672', position: 5 },
  { id: 'Gen.5.14.6', language: 'hebrew', text: 'מֵא֖וֹת', transliteration: 'mēʾôṯ', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'hundred', morphology: { pos: 'numeral', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Acfpa' }, strongs: 'H3967', position: 6 },
  { id: 'Gen.5.14.7', language: 'hebrew', text: 'שָׁנָ֑ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 7 },
  { id: 'Gen.5.14.8', language: 'hebrew', text: 'וַיָּמֹֽת', transliteration: 'wayyāmōṯ', lemma: 'מוּת', lemmaTranslit: 'mûṯ', gloss: 'and he died', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H4191', position: 8 },
];

export const genesis5_14_translation: VerseTranslation = {
  verseRef: 'Gen.5.14',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And were all the days of Kenan ten years and nine hundred years, and he died.', spans: [{ id: 'Gen.5.14.en.lit.0', text: 'And were all the days of Kenan...', position: 0, sourceTokenIds: ['Gen.5.14.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Thus all the days of Kenan were 910 years, and he died.', spans: [{ id: 'Gen.5.14.en.idi.0', text: 'Thus all the days of Kenan were 910 years...', position: 0, sourceTokenIds: ['Gen.5.14.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis5_14_notes: StudyNote[] = [];

// Genesis 5:15 - Mahalalel lived 65 years, begot Jared
export const genesis5_15_tokens: SourceToken[] = [
  { id: 'Gen.5.15.0', language: 'hebrew', text: 'וַֽיְחִ֣י', transliteration: 'wayḥî', lemma: 'חָיָה', lemmaTranslit: 'ḥāyāh', gloss: 'And lived', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H2421', position: 0 },
  { id: 'Gen.5.15.1', language: 'hebrew', text: 'מַֽהֲלַלְאֵ֔ל', transliteration: 'mahălalʾēl', lemma: 'מַהֲלַלְאֵל', lemmaTranslit: 'mahălalʾēl', gloss: 'Mahalalel', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H4111', position: 1 },
  { id: 'Gen.5.15.2', language: 'hebrew', text: 'חָמֵ֥שׁ', transliteration: 'ḥāmēš', lemma: 'חָמֵשׁ', lemmaTranslit: 'ḥāmēš', gloss: 'five', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H2568', position: 2 },
  { id: 'Gen.5.15.3', language: 'hebrew', text: 'שָׁנִ֖ים', transliteration: 'šānîm', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Ncfpa' }, strongs: 'H8141', position: 3 },
  { id: 'Gen.5.15.4', language: 'hebrew', text: 'וְשִׁשִּׁ֣ים', transliteration: 'wəšiššîm', lemma: 'שִׁשִּׁים', lemmaTranslit: 'šiššîm', gloss: 'and sixty', morphology: { pos: 'numeral', rawCode: 'Acmpa' }, strongs: 'H8346', position: 4 },
  { id: 'Gen.5.15.5', language: 'hebrew', text: 'שָׁנָ֑ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 5 },
  { id: 'Gen.5.15.6', language: 'hebrew', text: 'וַיּ֖וֹלֶד', transliteration: 'wayyôleḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'and he fathered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H3205', position: 6 },
  { id: 'Gen.5.15.7', language: 'hebrew', text: 'אֶת־יָֽרֶד', transliteration: 'ʾeṯ-yāreḏ', lemma: 'יֶרֶד', lemmaTranslit: 'yereḏ', gloss: 'Jared', glossExtended: 'descent', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3382', position: 7 },
];

export const genesis5_15_translation: VerseTranslation = {
  verseRef: 'Gen.5.15',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And lived Mahalalel five years and sixty years, and he fathered Jared.', spans: [{ id: 'Gen.5.15.en.lit.0', text: 'And lived Mahalalel five years and sixty years...', position: 0, sourceTokenIds: ['Gen.5.15.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'When Mahalalel had lived 65 years, he fathered Jared.', spans: [{ id: 'Gen.5.15.en.idi.0', text: 'When Mahalalel had lived 65 years...', position: 0, sourceTokenIds: ['Gen.5.15.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis5_15_notes: StudyNote[] = [];

// Genesis 5:16 - Mahalalel lived after Jared 830 years
export const genesis5_16_tokens: SourceToken[] = [
  { id: 'Gen.5.16.0', language: 'hebrew', text: 'וַֽיְחִ֣י', transliteration: 'wayḥî', lemma: 'חָיָה', lemmaTranslit: 'ḥāyāh', gloss: 'And lived', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H2421', position: 0 },
  { id: 'Gen.5.16.1', language: 'hebrew', text: 'מַֽהֲלַלְאֵ֗ל', transliteration: 'mahălalʾēl', lemma: 'מַהֲלַלְאֵל', lemmaTranslit: 'mahălalʾēl', gloss: 'Mahalalel', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H4111', position: 1 },
  { id: 'Gen.5.16.2', language: 'hebrew', text: 'אַֽחֲרֵי֙', transliteration: 'ʾaḥărê', lemma: 'אַחַר', lemmaTranslit: 'ʾaḥar', gloss: 'after', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H310', position: 2 },
  { id: 'Gen.5.16.3', language: 'hebrew', text: 'הוֹלִיד֣וֹ', transliteration: 'hôlîḏô', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'he fathered', morphology: { pos: 'verb', mood: 'infinitive', stem: 'hiphil', rawCode: 'Vhc' }, strongs: 'H3205', position: 3 },
  { id: 'Gen.5.16.4', language: 'hebrew', text: 'אֶת־יֶ֔רֶד', transliteration: 'ʾeṯ-yereḏ', lemma: 'יֶרֶד', lemmaTranslit: 'yereḏ', gloss: 'Jared', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3382', position: 4 },
  { id: 'Gen.5.16.5', language: 'hebrew', text: 'שְׁלֹשִׁ֥ים', transliteration: 'šəlōšîm', lemma: 'שְׁלֹשִׁים', lemmaTranslit: 'šəlōšîm', gloss: 'thirty', morphology: { pos: 'numeral', rawCode: 'Acmpa' }, strongs: 'H7970', position: 5 },
  { id: 'Gen.5.16.6', language: 'hebrew', text: 'שָׁנָ֖ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 6 },
  { id: 'Gen.5.16.7', language: 'hebrew', text: 'וּשְׁמֹנֶ֥ה', transliteration: 'ûšəmōneh', lemma: 'שְׁמֹנֶה', lemmaTranslit: 'šəmōneh', gloss: 'and eight', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H8083', position: 7 },
  { id: 'Gen.5.16.8', language: 'hebrew', text: 'מֵא֖וֹת', transliteration: 'mēʾôṯ', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'hundred', morphology: { pos: 'numeral', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Acfpa' }, strongs: 'H3967', position: 8 },
  { id: 'Gen.5.16.9', language: 'hebrew', text: 'שָׁנָ֑ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 9 },
  { id: 'Gen.5.16.10', language: 'hebrew', text: 'וַיּ֥וֹלֶד', transliteration: 'wayyôleḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'and he fathered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H3205', position: 10 },
  { id: 'Gen.5.16.11', language: 'hebrew', text: 'בָּנִ֖ים', transliteration: 'bānîm', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'sons', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H1121', position: 11 },
  { id: 'Gen.5.16.12', language: 'hebrew', text: 'וּבָנֽוֹת', transliteration: 'ûḇānôṯ', lemma: 'בַּת', lemmaTranslit: 'baṯ', gloss: 'and daughters', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Ncfpa' }, strongs: 'H1323', position: 12 },
];

export const genesis5_16_translation: VerseTranslation = {
  verseRef: 'Gen.5.16',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And lived Mahalalel after he fathered Jared thirty years and eight hundred years, and he fathered sons and daughters.', spans: [{ id: 'Gen.5.16.en.lit.0', text: 'And lived Mahalalel after he fathered Jared...', position: 0, sourceTokenIds: ['Gen.5.16.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Mahalalel lived after he fathered Jared 830 years and had other sons and daughters.', spans: [{ id: 'Gen.5.16.en.idi.0', text: 'Mahalalel lived after he fathered Jared 830 years...', position: 0, sourceTokenIds: ['Gen.5.16.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis5_16_notes: StudyNote[] = [];

// Genesis 5:17 - Mahalalel lived 895 years, then died
export const genesis5_17_tokens: SourceToken[] = [
  { id: 'Gen.5.17.0', language: 'hebrew', text: 'וַיִּֽהְי֣וּ', transliteration: 'wayyihyû', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'And were', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H1961', position: 0 },
  { id: 'Gen.5.17.1', language: 'hebrew', text: 'כָּל־יְמֵ֣י', transliteration: 'kāl-yəmê', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'all the days of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H3117', position: 1 },
  { id: 'Gen.5.17.2', language: 'hebrew', text: 'מַהֲלַלְאֵ֗ל', transliteration: 'mahălalʾēl', lemma: 'מַהֲלַלְאֵל', lemmaTranslit: 'mahălalʾēl', gloss: 'Mahalalel', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H4111', position: 2 },
  { id: 'Gen.5.17.3', language: 'hebrew', text: 'חָמֵ֤שׁ', transliteration: 'ḥāmēš', lemma: 'חָמֵשׁ', lemmaTranslit: 'ḥāmēš', gloss: 'five', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H2568', position: 3 },
  { id: 'Gen.5.17.4', language: 'hebrew', text: 'וְתִשְׁעִים֙', transliteration: 'wəṯišʿîm', lemma: 'תִּשְׁעִים', lemmaTranslit: 'tišʿîm', gloss: 'and ninety', morphology: { pos: 'numeral', rawCode: 'Acmpa' }, strongs: 'H8673', position: 4 },
  { id: 'Gen.5.17.5', language: 'hebrew', text: 'שָׁנָ֔ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 5 },
  { id: 'Gen.5.17.6', language: 'hebrew', text: 'וּשְׁמֹנֶ֥ה', transliteration: 'ûšəmōneh', lemma: 'שְׁמֹנֶה', lemmaTranslit: 'šəmōneh', gloss: 'and eight', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H8083', position: 6 },
  { id: 'Gen.5.17.7', language: 'hebrew', text: 'מֵא֖וֹת', transliteration: 'mēʾôṯ', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'hundred', morphology: { pos: 'numeral', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Acfpa' }, strongs: 'H3967', position: 7 },
  { id: 'Gen.5.17.8', language: 'hebrew', text: 'שָׁנָ֑ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 8 },
  { id: 'Gen.5.17.9', language: 'hebrew', text: 'וַיָּמֹֽת', transliteration: 'wayyāmōṯ', lemma: 'מוּת', lemmaTranslit: 'mûṯ', gloss: 'and he died', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H4191', position: 9 },
];

export const genesis5_17_translation: VerseTranslation = {
  verseRef: 'Gen.5.17',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And were all the days of Mahalalel five and ninety years and eight hundred years, and he died.', spans: [{ id: 'Gen.5.17.en.lit.0', text: 'And were all the days of Mahalalel...', position: 0, sourceTokenIds: ['Gen.5.17.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Thus all the days of Mahalalel were 895 years, and he died.', spans: [{ id: 'Gen.5.17.en.idi.0', text: 'Thus all the days of Mahalalel were 895 years...', position: 0, sourceTokenIds: ['Gen.5.17.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis5_17_notes: StudyNote[] = [];

// Export verse structures
export const genesis5_9_verse = { ref: 'Gen.5.9', sourceTokens: genesis5_9_tokens, translation: genesis5_9_translation, notes: genesis5_9_notes };
export const genesis5_10_verse = { ref: 'Gen.5.10', sourceTokens: genesis5_10_tokens, translation: genesis5_10_translation, notes: genesis5_10_notes };
export const genesis5_11_verse = { ref: 'Gen.5.11', sourceTokens: genesis5_11_tokens, translation: genesis5_11_translation, notes: genesis5_11_notes };
export const genesis5_12_verse = { ref: 'Gen.5.12', sourceTokens: genesis5_12_tokens, translation: genesis5_12_translation, notes: genesis5_12_notes };
export const genesis5_13_verse = { ref: 'Gen.5.13', sourceTokens: genesis5_13_tokens, translation: genesis5_13_translation, notes: genesis5_13_notes };
export const genesis5_14_verse = { ref: 'Gen.5.14', sourceTokens: genesis5_14_tokens, translation: genesis5_14_translation, notes: genesis5_14_notes };
export const genesis5_15_verse = { ref: 'Gen.5.15', sourceTokens: genesis5_15_tokens, translation: genesis5_15_translation, notes: genesis5_15_notes };
export const genesis5_16_verse = { ref: 'Gen.5.16', sourceTokens: genesis5_16_tokens, translation: genesis5_16_translation, notes: genesis5_16_notes };
export const genesis5_17_verse = { ref: 'Gen.5.17', sourceTokens: genesis5_17_tokens, translation: genesis5_17_translation, notes: genesis5_17_notes };

// Combined export
export const genesis5_9_17_verses = [
  genesis5_9_verse,
  genesis5_10_verse,
  genesis5_11_verse,
  genesis5_12_verse,
  genesis5_13_verse,
  genesis5_14_verse,
  genesis5_15_verse,
  genesis5_16_verse,
  genesis5_17_verse,
];

export default genesis5_9_17_verses;
