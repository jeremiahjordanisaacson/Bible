/**
 * Genesis 4:17-26 - Hebrew morphological data
 * Cain's descendants, Lamech's boast, Seth and Enosh
 * Source: Open Hebrew Bible (Tanach.us) - Public Domain
 */

import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

// Genesis 4:17 - Cain knew his wife, built a city
export const genesis4_17_tokens: SourceToken[] = [
  { id: 'Gen.4.17.0', language: 'hebrew', text: 'וַיֵּ֤דַע', transliteration: 'wayyēḏaʿ', lemma: 'יָדַע', lemmaTranslit: 'yāḏaʿ', gloss: 'And knew', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H3045', position: 0 },
  { id: 'Gen.4.17.1', language: 'hebrew', text: 'קַ֙יִן֙', transliteration: 'qayin', lemma: 'קַיִן', lemmaTranslit: 'qayin', gloss: 'Cain', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H7014', position: 1 },
  { id: 'Gen.4.17.2', language: 'hebrew', text: 'אֶת־אִשְׁתּ֔וֹ', transliteration: 'ʾeṯ-ʾištô', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'his wife', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H802', position: 2 },
  { id: 'Gen.4.17.3', language: 'hebrew', text: 'וַתַּ֖הַר', transliteration: 'wattahar', lemma: 'הָרָה', lemmaTranslit: 'hārāh', gloss: 'and she conceived', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3fs' }, strongs: 'H2029', position: 3 },
  { id: 'Gen.4.17.4', language: 'hebrew', text: 'וַתֵּ֣לֶד', transliteration: 'wattēleḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'and bore', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3fs' }, strongs: 'H3205', position: 4 },
  { id: 'Gen.4.17.5', language: 'hebrew', text: 'אֶת־חֲנ֑וֹךְ', transliteration: 'ʾeṯ-ḥănôḵ', lemma: 'חֲנוֹךְ', lemmaTranslit: 'ḥănôḵ', gloss: 'Enoch', glossExtended: 'dedicated, initiated', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2585', position: 5 },
  { id: 'Gen.4.17.6', language: 'hebrew', text: 'וַֽיְהִי֙', transliteration: 'wayəhî', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'And he was', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H1961', position: 6 },
  { id: 'Gen.4.17.7', language: 'hebrew', text: 'בֹּ֣נֶה', transliteration: 'bōneh', lemma: 'בָּנָה', lemmaTranslit: 'bānāh', gloss: 'building', morphology: { pos: 'verb', mood: 'participle', stem: 'qal', rawCode: 'Vqrms' }, strongs: 'H1129', position: 7 },
  { id: 'Gen.4.17.8', language: 'hebrew', text: 'עִ֔יר', transliteration: 'ʿîr', lemma: 'עִיר', lemmaTranslit: 'ʿîr', gloss: 'a city', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H5892', position: 8 },
  { id: 'Gen.4.17.9', language: 'hebrew', text: 'וַיִּקְרָא֙', transliteration: 'wayyiqrāʾ', lemma: 'קָרָא', lemmaTranslit: 'qārāʾ', gloss: 'and he called', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H7121', position: 9 },
  { id: 'Gen.4.17.10', language: 'hebrew', text: 'שֵׁ֣ם', transliteration: 'šēm', lemma: 'שֵׁם', lemmaTranslit: 'šēm', gloss: 'the name of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H8034', position: 10 },
  { id: 'Gen.4.17.11', language: 'hebrew', text: 'הָעִ֔יר', transliteration: 'hāʿîr', lemma: 'עִיר', lemmaTranslit: 'ʿîr', gloss: 'the city', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H5892', position: 11 },
  { id: 'Gen.4.17.12', language: 'hebrew', text: 'כְּשֵׁ֖ם', transliteration: 'kəšēm', lemma: 'שֵׁם', lemmaTranslit: 'šēm', gloss: 'after the name of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H8034', position: 12 },
  { id: 'Gen.4.17.13', language: 'hebrew', text: 'בְּנ֥וֹ', transliteration: 'bənô', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'his son', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H1121', position: 13 },
  { id: 'Gen.4.17.14', language: 'hebrew', text: 'חֲנֽוֹךְ', transliteration: 'ḥănôḵ', lemma: 'חֲנוֹךְ', lemmaTranslit: 'ḥănôḵ', gloss: 'Enoch', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2585', position: 14 },
];

export const genesis4_17_translation: VerseTranslation = {
  verseRef: 'Gen.4.17',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And knew Cain his wife, and she conceived and bore Enoch. And he was building a city, and he called the name of the city after the name of his son, Enoch.', spans: [{ id: 'Gen.4.17.en.lit.0', text: 'And knew Cain his wife...', position: 0, sourceTokenIds: ['Gen.4.17.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Cain knew his wife, and she conceived and bore Enoch. When he built a city, he called the name of the city after the name of his son, Enoch.', spans: [{ id: 'Gen.4.17.en.idi.0', text: 'Cain knew his wife, and she conceived...', position: 0, sourceTokenIds: ['Gen.4.17.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis4_17_notes: StudyNote[] = [
  { id: 'Gen.4.17.note.1', verseRef: 'Gen.4.17', sourceTokenIds: ['Gen.4.17.5', 'Gen.4.17.14'], category: 'lexical', title: 'Enoch (ḥănôḵ)', content: 'Enoch means "dedicated" or "initiated." The city-builder Cain dedicates his civilization to his son\'s name, establishing his legacy apart from God.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.4.17.note.2', verseRef: 'Gen.4.17', sourceTokenIds: ['Gen.4.17.8'], category: 'cultural', title: 'First City', content: 'The first city is built by the murderer Cain—civilization arises from the cursed line. This sets a narrative pattern: human achievement often accompanies moral decline.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 4:18 - Genealogy: Enoch to Lamech
export const genesis4_18_tokens: SourceToken[] = [
  { id: 'Gen.4.18.0', language: 'hebrew', text: 'וַיִּוָּלֵ֤ד', transliteration: 'wayyiwwālēḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'And was born', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'niphal', rawCode: 'Vnw3ms' }, strongs: 'H3205', position: 0 },
  { id: 'Gen.4.18.1', language: 'hebrew', text: 'לַֽחֲנוֹךְ֙', transliteration: 'laḥănôḵ', lemma: 'חֲנוֹךְ', lemmaTranslit: 'ḥănôḵ', gloss: 'to Enoch', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2585', position: 1 },
  { id: 'Gen.4.18.2', language: 'hebrew', text: 'אֶת־עִירָ֔ד', transliteration: 'ʾeṯ-ʿîrāḏ', lemma: 'עִירָד', lemmaTranslit: 'ʿîrāḏ', gloss: 'Irad', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5897', position: 2 },
  { id: 'Gen.4.18.3', language: 'hebrew', text: 'וְעִירָ֕ד', transliteration: 'wəʿîrāḏ', lemma: 'עִירָד', lemmaTranslit: 'ʿîrāḏ', gloss: 'and Irad', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5897', position: 3 },
  { id: 'Gen.4.18.4', language: 'hebrew', text: 'יָלַ֖ד', transliteration: 'yālaḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'fathered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H3205', position: 4 },
  { id: 'Gen.4.18.5', language: 'hebrew', text: 'אֶת־מְחֽוּיָאֵ֑ל', transliteration: 'ʾeṯ-məḥûyāʾēl', lemma: 'מְחוּיָאֵל', lemmaTranslit: 'məḥûyāʾēl', gloss: 'Mehujael', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H4232', position: 5 },
  { id: 'Gen.4.18.6', language: 'hebrew', text: 'וּמְחִיָּיאֵ֗ל', transliteration: 'ûməḥîyyāʾēl', lemma: 'מְחִיָּיאֵל', lemmaTranslit: 'məḥîyyāʾēl', gloss: 'and Mehujael', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H4232', position: 6 },
  { id: 'Gen.4.18.7', language: 'hebrew', text: 'יָלַד֙', transliteration: 'yālaḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'fathered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H3205', position: 7 },
  { id: 'Gen.4.18.8', language: 'hebrew', text: 'אֶת־מְתֽוּשָׁאֵ֔ל', transliteration: 'ʾeṯ-məṯûšāʾēl', lemma: 'מְתוּשָׁאֵל', lemmaTranslit: 'məṯûšāʾēl', gloss: 'Methushael', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H4967', position: 8 },
  { id: 'Gen.4.18.9', language: 'hebrew', text: 'וּמְתוּשָׁאֵ֖ל', transliteration: 'ûməṯûšāʾēl', lemma: 'מְתוּשָׁאֵל', lemmaTranslit: 'məṯûšāʾēl', gloss: 'and Methushael', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H4967', position: 9 },
  { id: 'Gen.4.18.10', language: 'hebrew', text: 'יָלַ֥ד', transliteration: 'yālaḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'fathered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H3205', position: 10 },
  { id: 'Gen.4.18.11', language: 'hebrew', text: 'אֶת־לָֽמֶךְ', transliteration: 'ʾeṯ-lāmeḵ', lemma: 'לֶמֶךְ', lemmaTranslit: 'lemeḵ', gloss: 'Lamech', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3929', position: 11 },
];

export const genesis4_18_translation: VerseTranslation = {
  verseRef: 'Gen.4.18',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And was born to Enoch Irad, and Irad fathered Mehujael, and Mehujael fathered Methushael, and Methushael fathered Lamech.', spans: [{ id: 'Gen.4.18.en.lit.0', text: 'And was born to Enoch Irad...', position: 0, sourceTokenIds: ['Gen.4.18.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'To Enoch was born Irad, and Irad fathered Mehujael, and Mehujael fathered Methushael, and Methushael fathered Lamech.', spans: [{ id: 'Gen.4.18.en.idi.0', text: 'To Enoch was born Irad...', position: 0, sourceTokenIds: ['Gen.4.18.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis4_18_notes: StudyNote[] = [
  { id: 'Gen.4.18.note.1', verseRef: 'Gen.4.18', sourceTokenIds: ['Gen.4.18.11'], category: 'interpretive', title: 'Seven Generations', content: 'Lamech is seventh from Adam through Cain. Seven signifies completion—the Cainite line reaches its climax in Lamech\'s violent boast (vv.23-24).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 4:19 - Lamech takes two wives
export const genesis4_19_tokens: SourceToken[] = [
  { id: 'Gen.4.19.0', language: 'hebrew', text: 'וַיִּֽקַּֽח־ל֥וֹ', transliteration: 'wayyiqqaḥ-lô', lemma: 'לָקַח', lemmaTranslit: 'lāqaḥ', gloss: 'And took for himself', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H3947', position: 0 },
  { id: 'Gen.4.19.1', language: 'hebrew', text: 'לֶ֖מֶךְ', transliteration: 'lemeḵ', lemma: 'לֶמֶךְ', lemmaTranslit: 'lemeḵ', gloss: 'Lamech', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3929', position: 1 },
  { id: 'Gen.4.19.2', language: 'hebrew', text: 'שְׁתֵּ֣י', transliteration: 'štê', lemma: 'שְׁנַיִם', lemmaTranslit: 'šənayim', gloss: 'two', morphology: { pos: 'numeral', gender: 'feminine', number: 'dual', state: 'construct', rawCode: 'Acfdc' }, strongs: 'H8147', position: 2 },
  { id: 'Gen.4.19.3', language: 'hebrew', text: 'נָשִׁ֑ים', transliteration: 'nāšîm', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'wives', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Ncfpa' }, strongs: 'H802', position: 3 },
  { id: 'Gen.4.19.4', language: 'hebrew', text: 'שֵׁ֤ם', transliteration: 'šēm', lemma: 'שֵׁם', lemmaTranslit: 'šēm', gloss: 'the name of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H8034', position: 4 },
  { id: 'Gen.4.19.5', language: 'hebrew', text: 'הָֽאַחַת֙', transliteration: 'hāʾaḥaṯ', lemma: 'אֶחָד', lemmaTranslit: 'ʾeḥāḏ', gloss: 'the one', morphology: { pos: 'numeral', gender: 'feminine', number: 'singular', rawCode: 'Acfsa' }, strongs: 'H259', position: 5 },
  { id: 'Gen.4.19.6', language: 'hebrew', text: 'עָדָ֔ה', transliteration: 'ʿāḏāh', lemma: 'עָדָה', lemmaTranslit: 'ʿāḏāh', gloss: 'Adah', glossExtended: 'ornament', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5711', position: 6 },
  { id: 'Gen.4.19.7', language: 'hebrew', text: 'וְשֵׁ֥ם', transliteration: 'wəšēm', lemma: 'שֵׁם', lemmaTranslit: 'šēm', gloss: 'and the name of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H8034', position: 7 },
  { id: 'Gen.4.19.8', language: 'hebrew', text: 'הַשֵּׁנִ֖ית', transliteration: 'haššēnîṯ', lemma: 'שֵׁנִי', lemmaTranslit: 'šēnî', gloss: 'the second', morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Aofsa' }, strongs: 'H8145', position: 8 },
  { id: 'Gen.4.19.9', language: 'hebrew', text: 'צִלָּֽה', transliteration: 'ṣillāh', lemma: 'צִלָּה', lemmaTranslit: 'ṣillāh', gloss: 'Zillah', glossExtended: 'shade', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H6741', position: 9 },
];

export const genesis4_19_translation: VerseTranslation = {
  verseRef: 'Gen.4.19',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And took for himself Lamech two wives; the name of the one was Adah, and the name of the second was Zillah.', spans: [{ id: 'Gen.4.19.en.lit.0', text: 'And took for himself Lamech two wives...', position: 0, sourceTokenIds: ['Gen.4.19.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'And Lamech took two wives. The name of the one was Adah, and the name of the other Zillah.', spans: [{ id: 'Gen.4.19.en.idi.0', text: 'And Lamech took two wives...', position: 0, sourceTokenIds: ['Gen.4.19.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis4_19_notes: StudyNote[] = [
  { id: 'Gen.4.19.note.1', verseRef: 'Gen.4.19', sourceTokenIds: ['Gen.4.19.2', 'Gen.4.19.3'], category: 'theological', title: 'First Polygamy', content: 'Lamech is the first recorded polygamist, departing from God\'s design of one man and one woman (2:24). This marks another step in the moral decline of Cain\'s line.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 4:20 - Jabal, father of tent-dwellers
export const genesis4_20_tokens: SourceToken[] = [
  { id: 'Gen.4.20.0', language: 'hebrew', text: 'וַתֵּ֥לֶד', transliteration: 'wattēleḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'And bore', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3fs' }, strongs: 'H3205', position: 0 },
  { id: 'Gen.4.20.1', language: 'hebrew', text: 'עָדָ֖ה', transliteration: 'ʿāḏāh', lemma: 'עָדָה', lemmaTranslit: 'ʿāḏāh', gloss: 'Adah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5711', position: 1 },
  { id: 'Gen.4.20.2', language: 'hebrew', text: 'אֶת־יָבָ֑ל', transliteration: 'ʾeṯ-yāḇāl', lemma: 'יָבָל', lemmaTranslit: 'yāḇāl', gloss: 'Jabal', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2989', position: 2 },
  { id: 'Gen.4.20.3', language: 'hebrew', text: 'ה֣וּא', transliteration: 'hûʾ', lemma: 'הוּא', lemmaTranslit: 'hûʾ', gloss: 'he', morphology: { pos: 'pronoun', person: '3', gender: 'masculine', number: 'singular', rawCode: 'Pp3ms' }, strongs: 'H1931', position: 3 },
  { id: 'Gen.4.20.4', language: 'hebrew', text: 'הָיָ֔ה', transliteration: 'hāyāh', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'was', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H1961', position: 4 },
  { id: 'Gen.4.20.5', language: 'hebrew', text: 'אֲבִ֕י', transliteration: 'ʾăḇî', lemma: 'אָב', lemmaTranslit: 'ʾāḇ', gloss: 'the father of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H1', position: 5 },
  { id: 'Gen.4.20.6', language: 'hebrew', text: 'יֹשֵׁ֥ב', transliteration: 'yōšēḇ', lemma: 'יָשַׁב', lemmaTranslit: 'yāšaḇ', gloss: 'those who dwell in', morphology: { pos: 'verb', mood: 'participle', stem: 'qal', rawCode: 'Vqrms' }, strongs: 'H3427', position: 6 },
  { id: 'Gen.4.20.7', language: 'hebrew', text: 'אֹ֖הֶל', transliteration: 'ʾōhel', lemma: 'אֹהֶל', lemmaTranslit: 'ʾōhel', gloss: 'tents', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H168', position: 7 },
  { id: 'Gen.4.20.8', language: 'hebrew', text: 'וּמִקְנֶֽה', transliteration: 'ûmiqneh', lemma: 'מִקְנֶה', lemmaTranslit: 'miqneh', gloss: 'and livestock', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H4735', position: 8 },
];

export const genesis4_20_translation: VerseTranslation = {
  verseRef: 'Gen.4.20',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And bore Adah Jabal; he was the father of those who dwell in tents and livestock.', spans: [{ id: 'Gen.4.20.en.lit.0', text: 'And bore Adah Jabal...', position: 0, sourceTokenIds: ['Gen.4.20.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Adah bore Jabal; he was the father of those who dwell in tents and have livestock.', spans: [{ id: 'Gen.4.20.en.idi.0', text: 'Adah bore Jabal...', position: 0, sourceTokenIds: ['Gen.4.20.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis4_20_notes: StudyNote[] = [
  { id: 'Gen.4.20.note.1', verseRef: 'Gen.4.20', sourceTokenIds: ['Gen.4.20.5'], category: 'idiom', title: 'Father of', content: '"Father of" (ʾăḇî) here means "originator" or "founder" of a craft or lifestyle, not biological father of all such people.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 4:21 - Jubal, father of musicians
export const genesis4_21_tokens: SourceToken[] = [
  { id: 'Gen.4.21.0', language: 'hebrew', text: 'וְשֵׁ֥ם', transliteration: 'wəšēm', lemma: 'שֵׁם', lemmaTranslit: 'šēm', gloss: 'And the name of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H8034', position: 0 },
  { id: 'Gen.4.21.1', language: 'hebrew', text: 'אָחִ֖יו', transliteration: 'ʾāḥîw', lemma: 'אָח', lemmaTranslit: 'ʾāḥ', gloss: 'his brother', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H251', position: 1 },
  { id: 'Gen.4.21.2', language: 'hebrew', text: 'יוּבָ֑ל', transliteration: 'yûḇāl', lemma: 'יוּבָל', lemmaTranslit: 'yûḇāl', gloss: 'Jubal', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3106', position: 2 },
  { id: 'Gen.4.21.3', language: 'hebrew', text: 'ה֣וּא', transliteration: 'hûʾ', lemma: 'הוּא', lemmaTranslit: 'hûʾ', gloss: 'he', morphology: { pos: 'pronoun', person: '3', gender: 'masculine', number: 'singular', rawCode: 'Pp3ms' }, strongs: 'H1931', position: 3 },
  { id: 'Gen.4.21.4', language: 'hebrew', text: 'הָיָ֔ה', transliteration: 'hāyāh', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'was', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H1961', position: 4 },
  { id: 'Gen.4.21.5', language: 'hebrew', text: 'אֲבִ֕י', transliteration: 'ʾăḇî', lemma: 'אָב', lemmaTranslit: 'ʾāḇ', gloss: 'the father of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H1', position: 5 },
  { id: 'Gen.4.21.6', language: 'hebrew', text: 'כָּל־תֹּפֵ֥שׂ', transliteration: 'kāl-tōp̄ēś', lemma: 'תָּפַשׂ', lemmaTranslit: 'tāp̄aś', gloss: 'all who handle', morphology: { pos: 'verb', mood: 'participle', stem: 'qal', rawCode: 'Vqrms' }, strongs: 'H8610', position: 6 },
  { id: 'Gen.4.21.7', language: 'hebrew', text: 'כִּנּ֖וֹר', transliteration: 'kinnôr', lemma: 'כִּנּוֹר', lemmaTranslit: 'kinnôr', gloss: 'lyre', glossExtended: 'stringed instrument', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3658', position: 7 },
  { id: 'Gen.4.21.8', language: 'hebrew', text: 'וְעוּגָֽב', transliteration: 'wəʿûḡāḇ', lemma: 'עוּגָב', lemmaTranslit: 'ʿûḡāḇ', gloss: 'and pipe', glossExtended: 'wind instrument, flute', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H5748', position: 8 },
];

export const genesis4_21_translation: VerseTranslation = {
  verseRef: 'Gen.4.21',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And the name of his brother was Jubal; he was the father of all who handle lyre and pipe.', spans: [{ id: 'Gen.4.21.en.lit.0', text: 'And the name of his brother was Jubal...', position: 0, sourceTokenIds: ['Gen.4.21.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'His brother\'s name was Jubal; he was the father of all those who play the lyre and pipe.', spans: [{ id: 'Gen.4.21.en.idi.0', text: 'His brother\'s name was Jubal...', position: 0, sourceTokenIds: ['Gen.4.21.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis4_21_notes: StudyNote[] = [
  { id: 'Gen.4.21.note.1', verseRef: 'Gen.4.21', sourceTokenIds: ['Gen.4.21.7', 'Gen.4.21.8'], category: 'cultural', title: 'Music Instruments', content: 'The kinnôr (lyre/harp) and ʿûḡāḇ (pipe/flute) represent stringed and wind instruments—the foundation of musical culture. Music is part of human civilization even in the fallen line.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 4:22 - Tubal-Cain, forger of metals
export const genesis4_22_tokens: SourceToken[] = [
  { id: 'Gen.4.22.0', language: 'hebrew', text: 'וְצִלָּ֣ה', transliteration: 'wəṣillāh', lemma: 'צִלָּה', lemmaTranslit: 'ṣillāh', gloss: 'And Zillah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H6741', position: 0 },
  { id: 'Gen.4.22.1', language: 'hebrew', text: 'גַם־הִ֗וא', transliteration: 'ḡam-hîʾ', lemma: 'הִיא', lemmaTranslit: 'hîʾ', gloss: 'also she', morphology: { pos: 'pronoun', person: '3', gender: 'feminine', number: 'singular', rawCode: 'Pp3fs' }, strongs: 'H1931', position: 1 },
  { id: 'Gen.4.22.2', language: 'hebrew', text: 'יָֽלְדָה֙', transliteration: 'yāləḏāh', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'bore', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3fs' }, strongs: 'H3205', position: 2 },
  { id: 'Gen.4.22.3', language: 'hebrew', text: 'אֶת־תּ֣וּבַל', transliteration: 'ʾeṯ-tûḇal', lemma: 'תּוּבַל', lemmaTranslit: 'tûḇal', gloss: 'Tubal', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8423', position: 3 },
  { id: 'Gen.4.22.4', language: 'hebrew', text: 'קַ֔יִן', transliteration: 'qayin', lemma: 'קַיִן', lemmaTranslit: 'qayin', gloss: 'Cain', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H7014', position: 4 },
  { id: 'Gen.4.22.5', language: 'hebrew', text: 'לֹטֵ֕שׁ', transliteration: 'lōṭēš', lemma: 'לָטַשׁ', lemmaTranslit: 'lāṭaš', gloss: 'a forger', glossExtended: 'to hammer, sharpen, forge', morphology: { pos: 'verb', mood: 'participle', stem: 'qal', rawCode: 'Vqrms' }, strongs: 'H3913', position: 5 },
  { id: 'Gen.4.22.6', language: 'hebrew', text: 'כָּל־חֹרֵ֥שׁ', transliteration: 'kāl-ḥōrēš', lemma: 'חָרַשׁ', lemmaTranslit: 'ḥāraš', gloss: 'all who work', morphology: { pos: 'verb', mood: 'participle', stem: 'qal', rawCode: 'Vqrms' }, strongs: 'H2790', position: 6 },
  { id: 'Gen.4.22.7', language: 'hebrew', text: 'נְחֹ֖שֶׁת', transliteration: 'nəḥōšeṯ', lemma: 'נְחֹשֶׁת', lemmaTranslit: 'nəḥōšeṯ', gloss: 'bronze', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H5178', position: 7 },
  { id: 'Gen.4.22.8', language: 'hebrew', text: 'וּבַרְזֶ֑ל', transliteration: 'ûḇarzel', lemma: 'בַּרְזֶל', lemmaTranslit: 'barzel', gloss: 'and iron', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H1270', position: 8 },
  { id: 'Gen.4.22.9', language: 'hebrew', text: 'וַֽאֲח֥וֹת', transliteration: 'waʾăḥôṯ', lemma: 'אָחוֹת', lemmaTranslit: 'ʾāḥôṯ', gloss: 'and the sister of', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H269', position: 9 },
  { id: 'Gen.4.22.10', language: 'hebrew', text: 'תּֽוּבַל־קַ֖יִן', transliteration: 'tûḇal-qayin', lemma: 'תּוּבַל קַיִן', lemmaTranslit: 'tûḇal qayin', gloss: 'Tubal-Cain', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8423', position: 10 },
  { id: 'Gen.4.22.11', language: 'hebrew', text: 'נַעֲמָֽה', transliteration: 'naʿămāh', lemma: 'נַעֲמָה', lemmaTranslit: 'naʿămāh', gloss: 'Naamah', glossExtended: 'pleasant', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5279', position: 11 },
];

export const genesis4_22_translation: VerseTranslation = {
  verseRef: 'Gen.4.22',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And Zillah also she bore Tubal-Cain, a forger of all who work bronze and iron. And the sister of Tubal-Cain was Naamah.', spans: [{ id: 'Gen.4.22.en.lit.0', text: 'And Zillah also she bore Tubal-Cain...', position: 0, sourceTokenIds: ['Gen.4.22.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Zillah also bore Tubal-cain; he was the forger of all instruments of bronze and iron. The sister of Tubal-cain was Naamah.', spans: [{ id: 'Gen.4.22.en.idi.0', text: 'Zillah also bore Tubal-cain...', position: 0, sourceTokenIds: ['Gen.4.22.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis4_22_notes: StudyNote[] = [
  { id: 'Gen.4.22.note.1', verseRef: 'Gen.4.22', sourceTokenIds: ['Gen.4.22.3', 'Gen.4.22.4'], category: 'lexical', title: 'Tubal-Cain', content: 'Tubal-Cain\'s name may relate to "Tubal" (a region in Anatolia) and Cain. He is the ancestor of metalworkers—both tools and weapons come from this line.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 4:23 - Lamech's boast
export const genesis4_23_tokens: SourceToken[] = [
  { id: 'Gen.4.23.0', language: 'hebrew', text: 'וַיֹּ֨אמֶר', transliteration: 'wayyōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'And said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H559', position: 0 },
  { id: 'Gen.4.23.1', language: 'hebrew', text: 'לֶ֜מֶךְ', transliteration: 'lemeḵ', lemma: 'לֶמֶךְ', lemmaTranslit: 'lemeḵ', gloss: 'Lamech', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3929', position: 1 },
  { id: 'Gen.4.23.2', language: 'hebrew', text: 'לְנָשָׁ֗יו', transliteration: 'lənāšāyw', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'to his wives', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'construct', rawCode: 'Ncfpc' }, strongs: 'H802', position: 2 },
  { id: 'Gen.4.23.3', language: 'hebrew', text: 'עָדָ֤ה', transliteration: 'ʿāḏāh', lemma: 'עָדָה', lemmaTranslit: 'ʿāḏāh', gloss: 'Adah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5711', position: 3 },
  { id: 'Gen.4.23.4', language: 'hebrew', text: 'וְצִלָּה֙', transliteration: 'wəṣillāh', lemma: 'צִלָּה', lemmaTranslit: 'ṣillāh', gloss: 'and Zillah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H6741', position: 4 },
  { id: 'Gen.4.23.5', language: 'hebrew', text: 'שְׁמַ֣עַן', transliteration: 'šəmaʿan', lemma: 'שָׁמַע', lemmaTranslit: 'šāmaʿ', gloss: 'hear', morphology: { pos: 'verb', person: '2', gender: 'feminine', number: 'plural', mood: 'imperative', stem: 'qal', rawCode: 'Vqv2fp' }, strongs: 'H8085', position: 5 },
  { id: 'Gen.4.23.6', language: 'hebrew', text: 'קוֹלִ֔י', transliteration: 'qôlî', lemma: 'קוֹל', lemmaTranslit: 'qôl', gloss: 'my voice', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H6963', position: 6 },
  { id: 'Gen.4.23.7', language: 'hebrew', text: 'נְשֵׁ֣י', transliteration: 'nəšê', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'wives of', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'construct', rawCode: 'Ncfpc' }, strongs: 'H802', position: 7 },
  { id: 'Gen.4.23.8', language: 'hebrew', text: 'לֶ֔מֶךְ', transliteration: 'lemeḵ', lemma: 'לֶמֶךְ', lemmaTranslit: 'lemeḵ', gloss: 'Lamech', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3929', position: 8 },
  { id: 'Gen.4.23.9', language: 'hebrew', text: 'הַאְזֵ֖נָּה', transliteration: 'haʾzēnnāh', lemma: 'אָזַן', lemmaTranslit: 'ʾāzan', gloss: 'listen', glossExtended: 'give ear to', morphology: { pos: 'verb', person: '2', gender: 'feminine', number: 'plural', mood: 'imperative', stem: 'hiphil', rawCode: 'Vhv2fp' }, strongs: 'H238', position: 9 },
  { id: 'Gen.4.23.10', language: 'hebrew', text: 'אִמְרָתִ֑י', transliteration: 'ʾimrāṯî', lemma: 'אִמְרָה', lemmaTranslit: 'ʾimrāh', gloss: 'my saying', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H565', position: 10 },
  { id: 'Gen.4.23.11', language: 'hebrew', text: 'כִּ֣י', transliteration: 'kî', lemma: 'כִּי', lemmaTranslit: 'kî', gloss: 'For', morphology: { pos: 'conjunction', rawCode: 'Cc' }, strongs: 'H3588', position: 11 },
  { id: 'Gen.4.23.12', language: 'hebrew', text: 'אִ֤ישׁ', transliteration: 'ʾîš', lemma: 'אִישׁ', lemmaTranslit: 'ʾîš', gloss: 'a man', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H376', position: 12 },
  { id: 'Gen.4.23.13', language: 'hebrew', text: 'הָרַ֙גְתִּי֙', transliteration: 'hāraḡtî', lemma: 'הָרַג', lemmaTranslit: 'hāraḡ', gloss: 'I have killed', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp1cs' }, strongs: 'H2026', position: 13 },
  { id: 'Gen.4.23.14', language: 'hebrew', text: 'לְפִצְעִ֔י', transliteration: 'ləp̄iṣʿî', lemma: 'פֶּצַע', lemmaTranslit: 'peṣaʿ', gloss: 'for my wound', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H6482', position: 14 },
  { id: 'Gen.4.23.15', language: 'hebrew', text: 'וְיֶ֖לֶד', transliteration: 'wəyeleḏ', lemma: 'יֶלֶד', lemmaTranslit: 'yeleḏ', gloss: 'and a young man', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3206', position: 15 },
  { id: 'Gen.4.23.16', language: 'hebrew', text: 'לְחַבֻּרָתִֽי', transliteration: 'ləḥabburaṯî', lemma: 'חַבּוּרָה', lemmaTranslit: 'ḥabbûrāh', gloss: 'for my stripe', glossExtended: 'blow, wound, stripe', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H2250', position: 16 },
];

export const genesis4_23_translation: VerseTranslation = {
  verseRef: 'Gen.4.23',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And said Lamech to his wives: Adah and Zillah, hear my voice; wives of Lamech, listen to my saying; for a man I have killed for my wound, and a young man for my stripe.', spans: [{ id: 'Gen.4.23.en.lit.0', text: 'And said Lamech to his wives...', position: 0, sourceTokenIds: ['Gen.4.23.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Lamech said to his wives: "Adah and Zillah, hear my voice; you wives of Lamech, listen to what I say: I have killed a man for wounding me, a young man for striking me."', spans: [{ id: 'Gen.4.23.en.idi.0', text: 'Lamech said to his wives...', position: 0, sourceTokenIds: ['Gen.4.23.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis4_23_notes: StudyNote[] = [
  { id: 'Gen.4.23.note.1', verseRef: 'Gen.4.23', sourceTokenIds: [], category: 'interpretive', title: 'Song of Lamech', content: 'This is the first recorded poem/song in Scripture. Its poetic structure (parallelism, elevated language) makes Lamech\'s violent boast even more chilling.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 4:24 - Seventy-sevenfold
export const genesis4_24_tokens: SourceToken[] = [
  { id: 'Gen.4.24.0', language: 'hebrew', text: 'כִּ֥י', transliteration: 'kî', lemma: 'כִּי', lemmaTranslit: 'kî', gloss: 'If', morphology: { pos: 'conjunction', rawCode: 'Cc' }, strongs: 'H3588', position: 0 },
  { id: 'Gen.4.24.1', language: 'hebrew', text: 'שִׁבְעָתַ֖יִם', transliteration: 'šiḇʿāṯayim', lemma: 'שִׁבְעָתַיִם', lemmaTranslit: 'šiḇʿāṯayim', gloss: 'sevenfold', morphology: { pos: 'numeral', rawCode: 'Acfda' }, strongs: 'H7659', position: 1 },
  { id: 'Gen.4.24.2', language: 'hebrew', text: 'יֻקַּם־קָ֑יִן', transliteration: 'yuqqam-qāyin', lemma: 'נָקַם', lemmaTranslit: 'nāqam', gloss: 'is avenged Cain', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hophal', rawCode: 'Vhu3ms' }, strongs: 'H5358', position: 2 },
  { id: 'Gen.4.24.3', language: 'hebrew', text: 'וְלֶ֖מֶךְ', transliteration: 'wəlemeḵ', lemma: 'לֶמֶךְ', lemmaTranslit: 'lemeḵ', gloss: 'then Lamech', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3929', position: 3 },
  { id: 'Gen.4.24.4', language: 'hebrew', text: 'שִׁבְעִ֥ים', transliteration: 'šiḇʿîm', lemma: 'שִׁבְעִים', lemmaTranslit: 'šiḇʿîm', gloss: 'seventy', morphology: { pos: 'numeral', rawCode: 'Acmpa' }, strongs: 'H7657', position: 4 },
  { id: 'Gen.4.24.5', language: 'hebrew', text: 'וְשִׁבְעָֽה', transliteration: 'wəšiḇʿāh', lemma: 'שֶׁבַע', lemmaTranslit: 'šeḇaʿ', gloss: 'and seven', morphology: { pos: 'numeral', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Acfsa' }, strongs: 'H7651', position: 5 },
];

export const genesis4_24_translation: VerseTranslation = {
  verseRef: 'Gen.4.24',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'If sevenfold is avenged Cain, then Lamech seventy and seven.', spans: [{ id: 'Gen.4.24.en.lit.0', text: 'If sevenfold is avenged Cain...', position: 0, sourceTokenIds: ['Gen.4.24.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"If Cain\'s revenge is sevenfold, then Lamech\'s is seventy-sevenfold."', spans: [{ id: 'Gen.4.24.en.idi.0', text: '"If Cain\'s revenge is sevenfold..."', position: 0, sourceTokenIds: ['Gen.4.24.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis4_24_notes: StudyNote[] = [
  { id: 'Gen.4.24.note.1', verseRef: 'Gen.4.24', sourceTokenIds: ['Gen.4.24.4', 'Gen.4.24.5'], category: 'cross-reference', title: 'Seventy-seven Inverted', content: 'Lamech perverts God\'s protective vengeance (v.15) into unlimited personal retaliation. Jesus inverts this with limitless forgiveness: "seventy times seven" (Matt 18:22).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 4:25 - Seth born
export const genesis4_25_tokens: SourceToken[] = [
  { id: 'Gen.4.25.0', language: 'hebrew', text: 'וַיֵּ֨דַע', transliteration: 'wayyēḏaʿ', lemma: 'יָדַע', lemmaTranslit: 'yāḏaʿ', gloss: 'And knew', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H3045', position: 0 },
  { id: 'Gen.4.25.1', language: 'hebrew', text: 'אָדָ֥ם', transliteration: 'ʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'Adam', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H121', position: 1 },
  { id: 'Gen.4.25.2', language: 'hebrew', text: 'ע֛וֹד', transliteration: 'ʿôḏ', lemma: 'עוֹד', lemmaTranslit: 'ʿôḏ', gloss: 'again', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H5750', position: 2 },
  { id: 'Gen.4.25.3', language: 'hebrew', text: 'אֶת־אִשְׁתּ֖וֹ', transliteration: 'ʾeṯ-ʾištô', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'his wife', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H802', position: 3 },
  { id: 'Gen.4.25.4', language: 'hebrew', text: 'וַתֵּ֣לֶד', transliteration: 'wattēleḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'and she bore', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3fs' }, strongs: 'H3205', position: 4 },
  { id: 'Gen.4.25.5', language: 'hebrew', text: 'בֵּ֗ן', transliteration: 'bēn', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'a son', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H1121', position: 5 },
  { id: 'Gen.4.25.6', language: 'hebrew', text: 'וַתִּקְרָ֤א', transliteration: 'wattiqrāʾ', lemma: 'קָרָא', lemmaTranslit: 'qārāʾ', gloss: 'and she called', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3fs' }, strongs: 'H7121', position: 6 },
  { id: 'Gen.4.25.7', language: 'hebrew', text: 'אֶת־שְׁמוֹ֙', transliteration: 'ʾeṯ-šəmô', lemma: 'שֵׁם', lemmaTranslit: 'šēm', gloss: 'his name', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H8034', position: 7 },
  { id: 'Gen.4.25.8', language: 'hebrew', text: 'שֵׁ֔ת', transliteration: 'šēṯ', lemma: 'שֵׁת', lemmaTranslit: 'šēṯ', gloss: 'Seth', glossExtended: 'appointed', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8352', position: 8 },
  { id: 'Gen.4.25.9', language: 'hebrew', text: 'כִּ֣י', transliteration: 'kî', lemma: 'כִּי', lemmaTranslit: 'kî', gloss: 'for', morphology: { pos: 'conjunction', rawCode: 'Cc' }, strongs: 'H3588', position: 9 },
  { id: 'Gen.4.25.10', language: 'hebrew', text: 'שָֽׁת־לִ֤י', transliteration: 'šāṯ-lî', lemma: 'שִׁית', lemmaTranslit: 'šîṯ', gloss: 'appointed for me', glossExtended: 'to set, put, appoint', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H7896', position: 10 },
  { id: 'Gen.4.25.11', language: 'hebrew', text: 'אֱלֹהִים֙', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H430', position: 11 },
  { id: 'Gen.4.25.12', language: 'hebrew', text: 'זֶ֣רַע', transliteration: 'zeraʿ', lemma: 'זֶרַע', lemmaTranslit: 'zeraʿ', gloss: 'offspring', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H2233', position: 12 },
  { id: 'Gen.4.25.13', language: 'hebrew', text: 'אַחֵ֔ר', transliteration: 'ʾaḥēr', lemma: 'אַחֵר', lemmaTranslit: 'ʾaḥēr', gloss: 'another', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Aamsa' }, strongs: 'H312', position: 13 },
  { id: 'Gen.4.25.14', language: 'hebrew', text: 'תַּ֣חַת', transliteration: 'taḥaṯ', lemma: 'תַּחַת', lemmaTranslit: 'taḥaṯ', gloss: 'instead of', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H8478', position: 14 },
  { id: 'Gen.4.25.15', language: 'hebrew', text: 'הֶ֔בֶל', transliteration: 'heḇel', lemma: 'הֶבֶל', lemmaTranslit: 'heḇel', gloss: 'Abel', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H1893', position: 15 },
  { id: 'Gen.4.25.16', language: 'hebrew', text: 'כִּ֥י', transliteration: 'kî', lemma: 'כִּי', lemmaTranslit: 'kî', gloss: 'for', morphology: { pos: 'conjunction', rawCode: 'Cc' }, strongs: 'H3588', position: 16 },
  { id: 'Gen.4.25.17', language: 'hebrew', text: 'הֲרָג֖וֹ', transliteration: 'hărāḡô', lemma: 'הָרַג', lemmaTranslit: 'hāraḡ', gloss: 'killed him', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H2026', position: 17 },
  { id: 'Gen.4.25.18', language: 'hebrew', text: 'קָֽיִן', transliteration: 'qāyin', lemma: 'קַיִן', lemmaTranslit: 'qayin', gloss: 'Cain', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H7014', position: 18 },
];

export const genesis4_25_translation: VerseTranslation = {
  verseRef: 'Gen.4.25',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And knew Adam again his wife, and she bore a son, and she called his name Seth, for "appointed for me God offspring another instead of Abel, for killed him Cain."', spans: [{ id: 'Gen.4.25.en.lit.0', text: 'And knew Adam again his wife...', position: 0, sourceTokenIds: ['Gen.4.25.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'And Adam knew his wife again, and she bore a son and called his name Seth, for she said, "God has appointed for me another offspring instead of Abel, for Cain killed him."', spans: [{ id: 'Gen.4.25.en.idi.0', text: 'And Adam knew his wife again...', position: 0, sourceTokenIds: ['Gen.4.25.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis4_25_notes: StudyNote[] = [
  { id: 'Gen.4.25.note.1', verseRef: 'Gen.4.25', sourceTokenIds: ['Gen.4.25.8', 'Gen.4.25.10'], category: 'lexical', title: 'Seth (šēṯ)', content: 'Seth\'s name plays on the verb šîṯ (to set, appoint). He replaces Abel as the godly line through which the "seed of the woman" promise will come.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.4.25.note.2', verseRef: 'Gen.4.25', sourceTokenIds: ['Gen.4.25.12'], category: 'cross-reference', title: 'Another Offspring (zeraʿ)', content: 'The word "offspring/seed" (zeraʿ) connects to 3:15—the seed of the woman. Seth\'s line will lead to the Messiah (Luke 3:38).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 4:26 - Enosh, calling on YHWH
export const genesis4_26_tokens: SourceToken[] = [
  { id: 'Gen.4.26.0', language: 'hebrew', text: 'וּלְשֵׁ֤ת', transliteration: 'ûləšēṯ', lemma: 'שֵׁת', lemmaTranslit: 'šēṯ', gloss: 'And to Seth', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8352', position: 0 },
  { id: 'Gen.4.26.1', language: 'hebrew', text: 'גַּם־ה֛וּא', transliteration: 'ḡam-hûʾ', lemma: 'הוּא', lemmaTranslit: 'hûʾ', gloss: 'also to him', morphology: { pos: 'pronoun', person: '3', gender: 'masculine', number: 'singular', rawCode: 'Pp3ms' }, strongs: 'H1931', position: 1 },
  { id: 'Gen.4.26.2', language: 'hebrew', text: 'יֻלַּד־בֵּ֖ן', transliteration: 'yullad-bēn', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'was born a son', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'pual', rawCode: 'Vup3ms' }, strongs: 'H3205', position: 2 },
  { id: 'Gen.4.26.3', language: 'hebrew', text: 'וַיִּקְרָ֥א', transliteration: 'wayyiqrāʾ', lemma: 'קָרָא', lemmaTranslit: 'qārāʾ', gloss: 'and he called', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H7121', position: 3 },
  { id: 'Gen.4.26.4', language: 'hebrew', text: 'אֶת־שְׁמ֖וֹ', transliteration: 'ʾeṯ-šəmô', lemma: 'שֵׁם', lemmaTranslit: 'šēm', gloss: 'his name', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H8034', position: 4 },
  { id: 'Gen.4.26.5', language: 'hebrew', text: 'אֱנ֑וֹשׁ', transliteration: 'ʾĕnôš', lemma: 'אֱנוֹשׁ', lemmaTranslit: 'ʾĕnôš', gloss: 'Enosh', glossExtended: 'man (mortal)', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H583', position: 5 },
  { id: 'Gen.4.26.6', language: 'hebrew', text: 'אָ֣ז', transliteration: 'ʾāz', lemma: 'אָז', lemmaTranslit: 'ʾāz', gloss: 'Then', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H227', position: 6 },
  { id: 'Gen.4.26.7', language: 'hebrew', text: 'הוּחַ֔ל', transliteration: 'hûḥal', lemma: 'חָלַל', lemmaTranslit: 'ḥālal', gloss: 'began', glossExtended: 'to begin, profane', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'hophal', rawCode: 'Vhp3ms' }, strongs: 'H2490', position: 7 },
  { id: 'Gen.4.26.8', language: 'hebrew', text: 'לִקְרֹ֖א', transliteration: 'liqrōʾ', lemma: 'קָרָא', lemmaTranslit: 'qārāʾ', gloss: 'to call', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'Vqc' }, strongs: 'H7121', position: 8 },
  { id: 'Gen.4.26.9', language: 'hebrew', text: 'בְּשֵׁ֥ם', transliteration: 'bəšēm', lemma: 'שֵׁם', lemmaTranslit: 'šēm', gloss: 'on the name of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H8034', position: 9 },
  { id: 'Gen.4.26.10', language: 'hebrew', text: 'יְהוָֽה', transliteration: 'yhwh', lemma: 'יְהוָה', lemmaTranslit: 'yhwh', gloss: 'YHWH', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 10 },
];

export const genesis4_26_translation: VerseTranslation = {
  verseRef: 'Gen.4.26',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And to Seth also to him was born a son, and he called his name Enosh. Then began to call on the name of YHWH.', spans: [{ id: 'Gen.4.26.en.lit.0', text: 'And to Seth also to him was born a son...', position: 0, sourceTokenIds: ['Gen.4.26.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'To Seth also a son was born, and he called his name Enosh. At that time people began to call upon the name of the LORD.', spans: [{ id: 'Gen.4.26.en.idi.0', text: 'To Seth also a son was born...', position: 0, sourceTokenIds: ['Gen.4.26.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis4_26_notes: StudyNote[] = [
  { id: 'Gen.4.26.note.1', verseRef: 'Gen.4.26', sourceTokenIds: ['Gen.4.26.5'], category: 'lexical', title: 'Enosh (ʾĕnôš)', content: 'Enosh means "man" (mortal, frail). Unlike ʾāḏām (man from earth), ʾĕnôš emphasizes human weakness and mortality.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.4.26.note.2', verseRef: 'Gen.4.26', sourceTokenIds: ['Gen.4.26.7', 'Gen.4.26.8', 'Gen.4.26.9', 'Gen.4.26.10'], category: 'theological', title: 'Calling on YHWH', content: 'The phrase "call on the name of YHWH" marks the beginning of corporate worship. While Cain\'s line developed civilization without God, Seth\'s line turned to worship.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Export verse structures
export const genesis4_17_verse = { ref: 'Gen.4.17', sourceTokens: genesis4_17_tokens, translation: genesis4_17_translation, notes: genesis4_17_notes };
export const genesis4_18_verse = { ref: 'Gen.4.18', sourceTokens: genesis4_18_tokens, translation: genesis4_18_translation, notes: genesis4_18_notes };
export const genesis4_19_verse = { ref: 'Gen.4.19', sourceTokens: genesis4_19_tokens, translation: genesis4_19_translation, notes: genesis4_19_notes };
export const genesis4_20_verse = { ref: 'Gen.4.20', sourceTokens: genesis4_20_tokens, translation: genesis4_20_translation, notes: genesis4_20_notes };
export const genesis4_21_verse = { ref: 'Gen.4.21', sourceTokens: genesis4_21_tokens, translation: genesis4_21_translation, notes: genesis4_21_notes };
export const genesis4_22_verse = { ref: 'Gen.4.22', sourceTokens: genesis4_22_tokens, translation: genesis4_22_translation, notes: genesis4_22_notes };
export const genesis4_23_verse = { ref: 'Gen.4.23', sourceTokens: genesis4_23_tokens, translation: genesis4_23_translation, notes: genesis4_23_notes };
export const genesis4_24_verse = { ref: 'Gen.4.24', sourceTokens: genesis4_24_tokens, translation: genesis4_24_translation, notes: genesis4_24_notes };
export const genesis4_25_verse = { ref: 'Gen.4.25', sourceTokens: genesis4_25_tokens, translation: genesis4_25_translation, notes: genesis4_25_notes };
export const genesis4_26_verse = { ref: 'Gen.4.26', sourceTokens: genesis4_26_tokens, translation: genesis4_26_translation, notes: genesis4_26_notes };

// Combined export
export const genesis4_17_26_verses = [
  genesis4_17_verse,
  genesis4_18_verse,
  genesis4_19_verse,
  genesis4_20_verse,
  genesis4_21_verse,
  genesis4_22_verse,
  genesis4_23_verse,
  genesis4_24_verse,
  genesis4_25_verse,
  genesis4_26_verse,
];

export default genesis4_17_26_verses;
