/**
 * Genesis 8:15-22 - Noah leaves the ark, offers sacrifice, God's promise
 * Hebrew morphological data with study annotations
 */

import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

// Genesis 8:15
export const genesis8_15_tokens: SourceToken[] = [
  { id: 'Gen.8.15.0', language: 'hebrew', text: 'וַיְדַבֵּר', transliteration: 'wayəḏabbēr', lemma: 'דָּבַר', lemmaTranslit: 'dāḇar', gloss: 'And spoke', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'piel', rawCode: 'Vpw3ms' }, strongs: 'H1696', position: 0 },
  { id: 'Gen.8.15.1', language: 'hebrew', text: 'אֱלֹהִים', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H430', position: 1 },
  { id: 'Gen.8.15.2', language: 'hebrew', text: 'אֶל־נֹחַ', transliteration: 'ʾel-nōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'to Noah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 2 },
  { id: 'Gen.8.15.3', language: 'hebrew', text: 'לֵאמֹר', transliteration: 'lēʾmōr', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'saying', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'VqIc' }, strongs: 'H559', position: 3 },
];

export const genesis8_15_translation: VerseTranslation = {
  verseRef: 'Gen.8.15',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And God spoke to Noah, saying:', spans: [{ id: 'Gen.8.15.en.lit.0', text: 'And God spoke to Noah...', position: 0, sourceTokenIds: ['Gen.8.15.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Then God said to Noah,', spans: [{ id: 'Gen.8.15.en.idi.0', text: 'Then God said to Noah...', position: 0, sourceTokenIds: ['Gen.8.15.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis8_15_notes: StudyNote[] = [
  { id: 'Gen.8.15.note.1', verseRef: 'Gen.8.15', sourceTokenIds: ['Gen.8.15.0'], category: 'theological', title: 'God Speaks Again', content: 'This is the first time God speaks after shutting Noah in the ark (7:16). The long silence during the flood now ends with a command of release. Noah waits for God\'s word rather than acting on his own assessment that the earth is dry (v. 13).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 8:16
export const genesis8_16_tokens: SourceToken[] = [
  { id: 'Gen.8.16.0', language: 'hebrew', text: 'צֵא', transliteration: 'ṣēʾ', lemma: 'יָצָא', lemmaTranslit: 'yāṣāʾ', gloss: 'Go out', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', mood: 'imperative', stem: 'qal', rawCode: 'Vqv2ms' }, strongs: 'H3318', position: 0 },
  { id: 'Gen.8.16.1', language: 'hebrew', text: 'מִן־הַתֵּבָה', transliteration: 'min-hattēḇāh', lemma: 'תֵּבָה', lemmaTranslit: 'tēḇāh', gloss: 'from the ark', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8392', position: 1 },
  { id: 'Gen.8.16.2', language: 'hebrew', text: 'אַתָּה', transliteration: 'ʾattāh', lemma: 'אַתָּה', lemmaTranslit: 'ʾattāh', gloss: 'you', morphology: { pos: 'pronoun', person: '2', gender: 'masculine', number: 'singular', rawCode: 'Pp2ms' }, strongs: 'H859', position: 2 },
  { id: 'Gen.8.16.3', language: 'hebrew', text: 'וְאִשְׁתְּךָ', transliteration: 'wəʾištəḵā', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'and your wife', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H802', position: 3 },
  { id: 'Gen.8.16.4', language: 'hebrew', text: 'וּבָנֶיךָ', transliteration: 'ûḇāneyḵā', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'and your sons', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H1121', position: 4 },
  { id: 'Gen.8.16.5', language: 'hebrew', text: 'וּנְשֵׁי־בָנֶיךָ', transliteration: 'ûnəšê-ḇāneyḵā', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'and the wives of your sons', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'construct', rawCode: 'Ncfpc' }, strongs: 'H802', position: 5 },
  { id: 'Gen.8.16.6', language: 'hebrew', text: 'אִתָּךְ', transliteration: 'ʾittāḵ', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: 'with you', morphology: { pos: 'preposition', rawCode: 'Ps2ms' }, strongs: 'H854', position: 6 },
];

export const genesis8_16_translation: VerseTranslation = {
  verseRef: 'Gen.8.16',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: '"Go out from the ark, you and your wife and your sons and the wives of your sons with you."', spans: [{ id: 'Gen.8.16.en.lit.0', text: 'Go out from the ark...', position: 0, sourceTokenIds: ['Gen.8.16.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"Come out of the ark, you and your wife and your sons and their wives."', spans: [{ id: 'Gen.8.16.en.idi.0', text: 'Come out of the ark...', position: 0, sourceTokenIds: ['Gen.8.16.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis8_16_notes: StudyNote[] = [
  { id: 'Gen.8.16.note.1', verseRef: 'Gen.8.16', sourceTokenIds: ['Gen.8.16.2', 'Gen.8.16.3', 'Gen.8.16.4'], category: 'interpretive', title: 'Family Order Changed', content: 'When entering the ark, Noah went with his sons, and wives were mentioned separately (7:7). Now leaving, Noah is paired with his wife. Jewish tradition sees this as permission for marital relations to resume - forbidden during the judgment.', confidence: 'medium', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 8:17
export const genesis8_17_tokens: SourceToken[] = [
  { id: 'Gen.8.17.0', language: 'hebrew', text: 'כָּל־הַחַיָּה', transliteration: 'kāl-haḥayyāh', lemma: 'חַיָּה', lemmaTranslit: 'ḥayyāh', gloss: 'All the living creatures', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H2416', position: 0 },
  { id: 'Gen.8.17.1', language: 'hebrew', text: 'אֲשֶׁר־אִתְּךָ', transliteration: 'ʾăšer-ʾittəḵā', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'which are with you', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 1 },
  { id: 'Gen.8.17.2', language: 'hebrew', text: 'מִכָּל־בָּשָׂר', transliteration: 'mikkāl-bāśār', lemma: 'בָּשָׂר', lemmaTranslit: 'bāśār', gloss: 'of all flesh', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H1320', position: 2 },
  { id: 'Gen.8.17.3', language: 'hebrew', text: 'בָּעוֹף', transliteration: 'bāʿôp̄', lemma: 'עוֹף', lemmaTranslit: 'ʿôp̄', gloss: 'among birds', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H5775', position: 3 },
  { id: 'Gen.8.17.4', language: 'hebrew', text: 'וּבַבְּהֵמָה', transliteration: 'ûḇabbəhēmāh', lemma: 'בְּהֵמָה', lemmaTranslit: 'bəhēmāh', gloss: 'and among livestock', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H929', position: 4 },
  { id: 'Gen.8.17.5', language: 'hebrew', text: 'וּבְכָל־הָרֶמֶשׂ', transliteration: 'ûḇəḵāl-hāremeś', lemma: 'רֶמֶשׂ', lemmaTranslit: 'remeś', gloss: 'and among all creeping things', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H7431', position: 5 },
  { id: 'Gen.8.17.6', language: 'hebrew', text: 'הָרֹמֵשׂ', transliteration: 'hārōmēś', lemma: 'רָמַשׂ', lemmaTranslit: 'rāmaś', gloss: 'that creep', morphology: { pos: 'verb', stem: 'qal', rawCode: 'VqPmsa' }, strongs: 'H7430', position: 6 },
  { id: 'Gen.8.17.7', language: 'hebrew', text: 'עַל־הָאָרֶץ', transliteration: 'ʿal-hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'upon the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 7 },
  { id: 'Gen.8.17.8', language: 'hebrew', text: 'הַיְצֵא', transliteration: 'hayṣēʾ', lemma: 'יָצָא', lemmaTranslit: 'yāṣāʾ', gloss: 'bring out', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', mood: 'imperative', stem: 'hiphil', rawCode: 'Vhv2ms' }, strongs: 'H3318', position: 8 },
  { id: 'Gen.8.17.9', language: 'hebrew', text: 'אִתָּךְ', transliteration: 'ʾittāḵ', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: 'with you', morphology: { pos: 'preposition', rawCode: 'Ps2ms' }, strongs: 'H854', position: 9 },
  { id: 'Gen.8.17.10', language: 'hebrew', text: 'וְשָׁרְצוּ', transliteration: 'wəšārəṣû', lemma: 'שָׁרַץ', lemmaTranslit: 'šāraṣ', gloss: 'and let them swarm', morphology: { pos: 'verb', person: '3', gender: 'common', number: 'plural', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3cp' }, strongs: 'H8317', position: 10 },
  { id: 'Gen.8.17.11', language: 'hebrew', text: 'בָאָרֶץ', transliteration: 'ḇāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'on the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 11 },
  { id: 'Gen.8.17.12', language: 'hebrew', text: 'וּפָרוּ', transliteration: 'ûp̄ārû', lemma: 'פָּרָה', lemmaTranslit: 'pārāh', gloss: 'and be fruitful', morphology: { pos: 'verb', person: '3', gender: 'common', number: 'plural', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3cp' }, strongs: 'H6509', position: 12 },
  { id: 'Gen.8.17.13', language: 'hebrew', text: 'וְרָבוּ', transliteration: 'wərāḇû', lemma: 'רָבָה', lemmaTranslit: 'rāḇāh', gloss: 'and multiply', morphology: { pos: 'verb', person: '3', gender: 'common', number: 'plural', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3cp' }, strongs: 'H7235', position: 13 },
  { id: 'Gen.8.17.14', language: 'hebrew', text: 'עַל־הָאָרֶץ', transliteration: 'ʿal-hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'upon the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 14 },
];

export const genesis8_17_translation: VerseTranslation = {
  verseRef: 'Gen.8.17',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: '"All the living creatures which are with you of all flesh, among birds and among livestock and among all creeping things that creep upon the earth, bring out with you, and let them swarm on the earth and be fruitful and multiply upon the earth."', spans: [{ id: 'Gen.8.17.en.lit.0', text: 'All the living creatures...', position: 0, sourceTokenIds: ['Gen.8.17.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"Bring out every kind of living creature that is with you—the birds, the animals, and all the creatures that move along the ground—so they can multiply on the earth and be fruitful and increase in number."', spans: [{ id: 'Gen.8.17.en.idi.0', text: 'Bring out every kind...', position: 0, sourceTokenIds: ['Gen.8.17.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis8_17_notes: StudyNote[] = [
  { id: 'Gen.8.17.note.1', verseRef: 'Gen.8.17', sourceTokenIds: ['Gen.8.17.12', 'Gen.8.17.13'], category: 'theological', title: 'Be Fruitful and Multiply', content: 'The command paru urevu (פָּרוּ וּרְבוּ) "be fruitful and multiply" echoes Gen 1:22, 28. This is a renewal of creation\'s blessing, reaffirming God\'s purpose for life to fill the earth. The post-flood world receives the same blessing as the original creation.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 8:18
export const genesis8_18_tokens: SourceToken[] = [
  { id: 'Gen.8.18.0', language: 'hebrew', text: 'וַיֵּצֵא', transliteration: 'wayyēṣēʾ', lemma: 'יָצָא', lemmaTranslit: 'yāṣāʾ', gloss: 'And went out', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H3318', position: 0 },
  { id: 'Gen.8.18.1', language: 'hebrew', text: 'נֹחַ', transliteration: 'nōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'Noah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 1 },
  { id: 'Gen.8.18.2', language: 'hebrew', text: 'וּבָנָיו', transliteration: 'ûḇānāyw', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'and his sons', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H1121', position: 2 },
  { id: 'Gen.8.18.3', language: 'hebrew', text: 'וְאִשְׁתּוֹ', transliteration: 'wəʾištô', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'and his wife', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H802', position: 3 },
  { id: 'Gen.8.18.4', language: 'hebrew', text: 'וּנְשֵׁי־בָנָיו', transliteration: 'ûnəšê-ḇānāyw', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'and the wives of his sons', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'construct', rawCode: 'Ncfpc' }, strongs: 'H802', position: 4 },
  { id: 'Gen.8.18.5', language: 'hebrew', text: 'אִתּוֹ', transliteration: 'ʾittô', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: 'with him', morphology: { pos: 'preposition', rawCode: 'Ps3ms' }, strongs: 'H854', position: 5 },
];

export const genesis8_18_translation: VerseTranslation = {
  verseRef: 'Gen.8.18',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And Noah went out, and his sons and his wife and the wives of his sons with him.', spans: [{ id: 'Gen.8.18.en.lit.0', text: 'And Noah went out...', position: 0, sourceTokenIds: ['Gen.8.18.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'So Noah came out, together with his sons and his wife and his sons\' wives.', spans: [{ id: 'Gen.8.18.en.idi.0', text: 'So Noah came out...', position: 0, sourceTokenIds: ['Gen.8.18.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis8_18_notes: StudyNote[] = [];

// Genesis 8:19
export const genesis8_19_tokens: SourceToken[] = [
  { id: 'Gen.8.19.0', language: 'hebrew', text: 'כָּל־הַחַיָּה', transliteration: 'kāl-haḥayyāh', lemma: 'חַיָּה', lemmaTranslit: 'ḥayyāh', gloss: 'All the living creatures', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H2416', position: 0 },
  { id: 'Gen.8.19.1', language: 'hebrew', text: 'כָּל־הָרֶמֶשׂ', transliteration: 'kāl-hāremeś', lemma: 'רֶמֶשׂ', lemmaTranslit: 'remeś', gloss: 'all the creeping things', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H7431', position: 1 },
  { id: 'Gen.8.19.2', language: 'hebrew', text: 'וְכָל־הָעוֹף', transliteration: 'wəḵāl-hāʿôp̄', lemma: 'עוֹף', lemmaTranslit: 'ʿôp̄', gloss: 'and all the birds', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H5775', position: 2 },
  { id: 'Gen.8.19.3', language: 'hebrew', text: 'כֹּל', transliteration: 'kōl', lemma: 'כֹּל', lemmaTranslit: 'kōl', gloss: 'all', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H3605', position: 3 },
  { id: 'Gen.8.19.4', language: 'hebrew', text: 'רוֹמֵשׂ', transliteration: 'rômēś', lemma: 'רָמַשׂ', lemmaTranslit: 'rāmaś', gloss: 'creeping', morphology: { pos: 'verb', stem: 'qal', rawCode: 'VqPmsa' }, strongs: 'H7430', position: 4 },
  { id: 'Gen.8.19.5', language: 'hebrew', text: 'עַל־הָאָרֶץ', transliteration: 'ʿal-hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'upon the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 5 },
  { id: 'Gen.8.19.6', language: 'hebrew', text: 'לְמִשְׁפְּחֹתֵיהֶם', transliteration: 'ləmišpəḥōṯêhem', lemma: 'מִשְׁפָּחָה', lemmaTranslit: 'mišpāḥāh', gloss: 'by their families', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'construct', rawCode: 'Ncfpc' }, strongs: 'H4940', position: 6 },
  { id: 'Gen.8.19.7', language: 'hebrew', text: 'יָצְאוּ', transliteration: 'yāṣəʾû', lemma: 'יָצָא', lemmaTranslit: 'yāṣāʾ', gloss: 'went out', morphology: { pos: 'verb', person: '3', gender: 'common', number: 'plural', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3cp' }, strongs: 'H3318', position: 7 },
  { id: 'Gen.8.19.8', language: 'hebrew', text: 'מִן־הַתֵּבָה', transliteration: 'min-hattēḇāh', lemma: 'תֵּבָה', lemmaTranslit: 'tēḇāh', gloss: 'from the ark', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8392', position: 8 },
];

export const genesis8_19_translation: VerseTranslation = {
  verseRef: 'Gen.8.19',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'All the living creatures, all the creeping things, and all the birds—everything that creeps upon the earth—by their families they went out from the ark.', spans: [{ id: 'Gen.8.19.en.lit.0', text: 'All the living creatures...', position: 0, sourceTokenIds: ['Gen.8.19.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'All the animals and all the creatures that move along the ground and all the birds—everything that moves on land—came out of the ark, one kind after another.', spans: [{ id: 'Gen.8.19.en.idi.0', text: 'All the animals...', position: 0, sourceTokenIds: ['Gen.8.19.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis8_19_notes: StudyNote[] = [
  { id: 'Gen.8.19.note.1', verseRef: 'Gen.8.19', sourceTokenIds: ['Gen.8.19.6'], category: 'lexical', title: 'By Their Families', content: 'Hebrew mishpechot (מִשְׁפְּחֹתֵיהֶם) "by their families/kinds" echoes the creation account where animals were made "according to their kinds" (lemino). The orderly exit reflects the orderly creation - not chaos, but structured diversity.', confidence: 'medium', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 8:20
export const genesis8_20_tokens: SourceToken[] = [
  { id: 'Gen.8.20.0', language: 'hebrew', text: 'וַיִּבֶן', transliteration: 'wayyiḇen', lemma: 'בָּנָה', lemmaTranslit: 'bānāh', gloss: 'And built', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H1129', position: 0 },
  { id: 'Gen.8.20.1', language: 'hebrew', text: 'נֹחַ', transliteration: 'nōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'Noah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 1 },
  { id: 'Gen.8.20.2', language: 'hebrew', text: 'מִזְבֵּחַ', transliteration: 'mizběaḥ', lemma: 'מִזְבֵּחַ', lemmaTranslit: 'mizběaḥ', gloss: 'altar', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H4196', position: 2 },
  { id: 'Gen.8.20.3', language: 'hebrew', text: 'לַיהוָה', transliteration: 'laYHWH', lemma: 'יהוה', lemmaTranslit: 'YHWH', gloss: 'to the LORD', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 3 },
  { id: 'Gen.8.20.4', language: 'hebrew', text: 'וַיִּקַּח', transliteration: 'wayyiqqaḥ', lemma: 'לָקַח', lemmaTranslit: 'lāqaḥ', gloss: 'and he took', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H3947', position: 4 },
  { id: 'Gen.8.20.5', language: 'hebrew', text: 'מִכֹּל', transliteration: 'mikkōl', lemma: 'כֹּל', lemmaTranslit: 'kōl', gloss: 'from all', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H3605', position: 5 },
  { id: 'Gen.8.20.6', language: 'hebrew', text: 'הַבְּהֵמָה', transliteration: 'habbəhēmāh', lemma: 'בְּהֵמָה', lemmaTranslit: 'bəhēmāh', gloss: 'the clean livestock', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H929', position: 6 },
  { id: 'Gen.8.20.7', language: 'hebrew', text: 'הַטְּהֹרָה', transliteration: 'haṭṭəhōrāh', lemma: 'טָהוֹר', lemmaTranslit: 'ṭāhôr', gloss: 'the clean', morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', rawCode: 'Ajfsa' }, strongs: 'H2889', position: 7 },
  { id: 'Gen.8.20.8', language: 'hebrew', text: 'וּמִכֹּל', transliteration: 'ûmikkōl', lemma: 'כֹּל', lemmaTranslit: 'kōl', gloss: 'and from all', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H3605', position: 8 },
  { id: 'Gen.8.20.9', language: 'hebrew', text: 'הָעוֹף', transliteration: 'hāʿôp̄', lemma: 'עוֹף', lemmaTranslit: 'ʿôp̄', gloss: 'the clean birds', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H5775', position: 9 },
  { id: 'Gen.8.20.10', language: 'hebrew', text: 'הַטָּהוֹר', transliteration: 'haṭṭāhôr', lemma: 'טָהוֹר', lemmaTranslit: 'ṭāhôr', gloss: 'the clean', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', rawCode: 'Ajmsa' }, strongs: 'H2889', position: 10 },
  { id: 'Gen.8.20.11', language: 'hebrew', text: 'וַיַּעַל', transliteration: 'wayyaʿal', lemma: 'עָלָה', lemmaTranslit: 'ʿālāh', gloss: 'and he offered up', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H5927', position: 11 },
  { id: 'Gen.8.20.12', language: 'hebrew', text: 'עֹלֹת', transliteration: 'ʿōlōṯ', lemma: 'עֹלָה', lemmaTranslit: 'ʿōlāh', gloss: 'burnt offerings', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Ncfpa' }, strongs: 'H5930', position: 12 },
  { id: 'Gen.8.20.13', language: 'hebrew', text: 'בַּמִּזְבֵּחַ', transliteration: 'bammizběaḥ', lemma: 'מִזְבֵּחַ', lemmaTranslit: 'mizběaḥ', gloss: 'on the altar', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H4196', position: 13 },
];

export const genesis8_20_translation: VerseTranslation = {
  verseRef: 'Gen.8.20',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And Noah built an altar to the LORD, and he took from all the clean livestock and from all the clean birds, and he offered up burnt offerings on the altar.', spans: [{ id: 'Gen.8.20.en.lit.0', text: 'And Noah built an altar...', position: 0, sourceTokenIds: ['Gen.8.20.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Then Noah built an altar to the LORD and, taking some of all the clean animals and clean birds, he sacrificed burnt offerings on it.', spans: [{ id: 'Gen.8.20.en.idi.0', text: 'Then Noah built an altar...', position: 0, sourceTokenIds: ['Gen.8.20.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis8_20_notes: StudyNote[] = [
  { id: 'Gen.8.20.note.1', verseRef: 'Gen.8.20', sourceTokenIds: ['Gen.8.20.0', 'Gen.8.20.2'], category: 'theological', title: 'First Altar', content: 'This is the first explicit mention of an altar (mizbeach) in Scripture, though sacrifice appears in Gen 4. Noah\'s first act after leaving the ark is worship - not building a house for himself but building an altar for God.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.8.20.note.2', verseRef: 'Gen.8.20', sourceTokenIds: ['Gen.8.20.12'], category: 'theological', title: 'Burnt Offerings', content: 'The olah (עֹלָה) "burnt offering" is from the root "to go up" - the whole offering ascends to God in smoke. This is the most complete form of dedication, where nothing is kept back. Noah\'s response to salvation is total consecration.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 8:21
export const genesis8_21_tokens: SourceToken[] = [
  { id: 'Gen.8.21.0', language: 'hebrew', text: 'וַיָּרַח', transliteration: 'wayyāraḥ', lemma: 'רוּחַ', lemmaTranslit: 'rûaḥ', gloss: 'And smelled', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H7306', position: 0 },
  { id: 'Gen.8.21.1', language: 'hebrew', text: 'יְהוָה', transliteration: 'YHWH', lemma: 'יהוה', lemmaTranslit: 'YHWH', gloss: 'the LORD', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 1 },
  { id: 'Gen.8.21.2', language: 'hebrew', text: 'אֶת־רֵיחַ', transliteration: 'ʾeṯ-rêaḥ', lemma: 'רֵיחַ', lemmaTranslit: 'rêaḥ', gloss: 'aroma of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H7381', position: 2 },
  { id: 'Gen.8.21.3', language: 'hebrew', text: 'הַנִּיחֹחַ', transliteration: 'hannîḥōaḥ', lemma: 'נִיחוֹחַ', lemmaTranslit: 'nîḥôaḥ', gloss: 'the soothing', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H5207', position: 3 },
  { id: 'Gen.8.21.4', language: 'hebrew', text: 'וַיֹּאמֶר', transliteration: 'wayyōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'and said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H559', position: 4 },
  { id: 'Gen.8.21.5', language: 'hebrew', text: 'יְהוָה', transliteration: 'YHWH', lemma: 'יהוה', lemmaTranslit: 'YHWH', gloss: 'the LORD', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 5 },
  { id: 'Gen.8.21.6', language: 'hebrew', text: 'אֶל־לִבּוֹ', transliteration: 'ʾel-libbô', lemma: 'לֵב', lemmaTranslit: 'lēḇ', gloss: 'in his heart', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H3820', position: 6 },
  { id: 'Gen.8.21.7', language: 'hebrew', text: 'לֹא־אֹסִף', transliteration: 'lōʾ-ʾōsip̄', lemma: 'יָסַף', lemmaTranslit: 'yāsap̄', gloss: 'not will I again', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhi1cs' }, strongs: 'H3254', position: 7 },
  { id: 'Gen.8.21.8', language: 'hebrew', text: 'לְקַלֵּל', transliteration: 'ləqallēl', lemma: 'קָלַל', lemmaTranslit: 'qālal', gloss: 'curse', morphology: { pos: 'verb', mood: 'infinitive', stem: 'piel', rawCode: 'VpIc' }, strongs: 'H7043', position: 8 },
  { id: 'Gen.8.21.9', language: 'hebrew', text: 'עוֹד', transliteration: 'ʿôḏ', lemma: 'עוֹד', lemmaTranslit: 'ʿôḏ', gloss: 'again', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H5750', position: 9 },
  { id: 'Gen.8.21.10', language: 'hebrew', text: 'אֶת־הָאֲדָמָה', transliteration: 'ʾeṯ-hāʾăḏāmāh', lemma: 'אֲדָמָה', lemmaTranslit: 'ʾăḏāmāh', gloss: 'the ground', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H127', position: 10 },
  { id: 'Gen.8.21.11', language: 'hebrew', text: 'בַּעֲבוּר', transliteration: 'baʿăḇûr', lemma: 'עָבוּר', lemmaTranslit: 'ʿāḇûr', gloss: 'because of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H5668', position: 11 },
  { id: 'Gen.8.21.12', language: 'hebrew', text: 'הָאָדָם', transliteration: 'hāʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'man', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 12 },
  { id: 'Gen.8.21.13', language: 'hebrew', text: 'כִּי', transliteration: 'kî', lemma: 'כִּי', lemmaTranslit: 'kî', gloss: 'for', morphology: { pos: 'conjunction', rawCode: 'Cc' }, strongs: 'H3588', position: 13 },
  { id: 'Gen.8.21.14', language: 'hebrew', text: 'יֵצֶר', transliteration: 'yēṣer', lemma: 'יֵצֶר', lemmaTranslit: 'yēṣer', gloss: 'inclination of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H3336', position: 14 },
  { id: 'Gen.8.21.15', language: 'hebrew', text: 'לֵב', transliteration: 'lēḇ', lemma: 'לֵב', lemmaTranslit: 'lēḇ', gloss: 'heart of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H3820', position: 15 },
  { id: 'Gen.8.21.16', language: 'hebrew', text: 'הָאָדָם', transliteration: 'hāʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'man', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 16 },
  { id: 'Gen.8.21.17', language: 'hebrew', text: 'רַע', transliteration: 'raʿ', lemma: 'רַע', lemmaTranslit: 'raʿ', gloss: 'evil', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', rawCode: 'Ajmsa' }, strongs: 'H7451', position: 17 },
  { id: 'Gen.8.21.18', language: 'hebrew', text: 'מִנְּעֻרָיו', transliteration: 'minnəʿurāyw', lemma: 'נְעוּרִים', lemmaTranslit: 'nəʿûrîm', gloss: 'from his youth', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H5271', position: 18 },
  { id: 'Gen.8.21.19', language: 'hebrew', text: 'וְלֹא־אֹסִף', transliteration: 'wəlōʾ-ʾōsip̄', lemma: 'יָסַף', lemmaTranslit: 'yāsap̄', gloss: 'and not will I again', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhi1cs' }, strongs: 'H3254', position: 19 },
  { id: 'Gen.8.21.20', language: 'hebrew', text: 'עוֹד', transliteration: 'ʿôḏ', lemma: 'עוֹד', lemmaTranslit: 'ʿôḏ', gloss: 'again', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H5750', position: 20 },
  { id: 'Gen.8.21.21', language: 'hebrew', text: 'לְהַכּוֹת', transliteration: 'ləhakkôṯ', lemma: 'נָכָה', lemmaTranslit: 'nāḵāh', gloss: 'to strike', morphology: { pos: 'verb', mood: 'infinitive', stem: 'hiphil', rawCode: 'VhIc' }, strongs: 'H5221', position: 21 },
  { id: 'Gen.8.21.22', language: 'hebrew', text: 'אֶת־כָּל־חַי', transliteration: 'ʾeṯ-kāl-ḥay', lemma: 'חַי', lemmaTranslit: 'ḥay', gloss: 'all living', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', rawCode: 'Ajmsa' }, strongs: 'H2416', position: 22 },
  { id: 'Gen.8.21.23', language: 'hebrew', text: 'כַּאֲשֶׁר', transliteration: 'kaʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'as', morphology: { pos: 'particle', rawCode: 'RTr' }, strongs: 'H834', position: 23 },
  { id: 'Gen.8.21.24', language: 'hebrew', text: 'עָשִׂיתִי', transliteration: 'ʿāśîṯî', lemma: 'עָשָׂה', lemmaTranslit: 'ʿāśāh', gloss: 'I have done', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp1cs' }, strongs: 'H6213', position: 24 },
];

export const genesis8_21_translation: VerseTranslation = {
  verseRef: 'Gen.8.21',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And the LORD smelled the soothing aroma, and the LORD said in his heart, "I will not again curse the ground because of man, for the inclination of the heart of man is evil from his youth; and I will not again strike all living things as I have done."', spans: [{ id: 'Gen.8.21.en.lit.0', text: 'And the LORD smelled...', position: 0, sourceTokenIds: ['Gen.8.21.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'The LORD smelled the pleasing aroma and said in his heart: "Never again will I curse the ground because of humans, even though every inclination of the human heart is evil from childhood. And never again will I destroy all living creatures, as I have done."', spans: [{ id: 'Gen.8.21.en.idi.0', text: 'The LORD smelled...', position: 0, sourceTokenIds: ['Gen.8.21.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis8_21_notes: StudyNote[] = [
  { id: 'Gen.8.21.note.1', verseRef: 'Gen.8.21', sourceTokenIds: ['Gen.8.21.2', 'Gen.8.21.3'], category: 'lexical', title: 'Soothing Aroma', content: 'The phrase reach hanichoach (רֵיחַ הַנִּיחֹחַ) "soothing/pleasing aroma" contains the root nuach (rest), connecting to Noah\'s name again. Noah\'s sacrifice brings "rest" or satisfaction to God. This phrase recurs throughout Leviticus for acceptable offerings.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.8.21.note.2', verseRef: 'Gen.8.21', sourceTokenIds: ['Gen.8.21.14'], category: 'theological', title: 'Inclination of the Heart', content: 'The word yetzer (יֵצֶר) "inclination/imagination" appears in Gen 6:5 as the reason for judgment; now it appears as the reason for mercy. Human nature hasn\'t changed, but God\'s response has. Grace prevails despite ongoing human sinfulness.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 8:22
export const genesis8_22_tokens: SourceToken[] = [
  { id: 'Gen.8.22.0', language: 'hebrew', text: 'עֹד', transliteration: 'ʿōḏ', lemma: 'עוֹד', lemmaTranslit: 'ʿôḏ', gloss: 'While', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H5750', position: 0 },
  { id: 'Gen.8.22.1', language: 'hebrew', text: 'כָּל־יְמֵי', transliteration: 'kāl-yəmê', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'all days of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H3117', position: 1 },
  { id: 'Gen.8.22.2', language: 'hebrew', text: 'הָאָרֶץ', transliteration: 'hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 2 },
  { id: 'Gen.8.22.3', language: 'hebrew', text: 'זֶרַע', transliteration: 'zeraʿ', lemma: 'זֶרַע', lemmaTranslit: 'zeraʿ', gloss: 'seedtime', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H2233', position: 3 },
  { id: 'Gen.8.22.4', language: 'hebrew', text: 'וְקָצִיר', transliteration: 'wəqāṣîr', lemma: 'קָצִיר', lemmaTranslit: 'qāṣîr', gloss: 'and harvest', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H7105', position: 4 },
  { id: 'Gen.8.22.5', language: 'hebrew', text: 'וְקֹר', transliteration: 'wəqōr', lemma: 'קֹר', lemmaTranslit: 'qōr', gloss: 'and cold', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H7120', position: 5 },
  { id: 'Gen.8.22.6', language: 'hebrew', text: 'וָחֹם', transliteration: 'wāḥōm', lemma: 'חֹם', lemmaTranslit: 'ḥōm', gloss: 'and heat', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H2527', position: 6 },
  { id: 'Gen.8.22.7', language: 'hebrew', text: 'וְקַיִץ', transliteration: 'wəqayiṣ', lemma: 'קַיִץ', lemmaTranslit: 'qayiṣ', gloss: 'and summer', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H7019', position: 7 },
  { id: 'Gen.8.22.8', language: 'hebrew', text: 'וָחֹרֶף', transliteration: 'wāḥōrep̄', lemma: 'חֹרֶף', lemmaTranslit: 'ḥōrep̄', gloss: 'and winter', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H2779', position: 8 },
  { id: 'Gen.8.22.9', language: 'hebrew', text: 'וְיוֹם', transliteration: 'wəyôm', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'and day', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3117', position: 9 },
  { id: 'Gen.8.22.10', language: 'hebrew', text: 'וָלַיְלָה', transliteration: 'wālaylāh', lemma: 'לַיְלָה', lemmaTranslit: 'laylāh', gloss: 'and night', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3915', position: 10 },
  { id: 'Gen.8.22.11', language: 'hebrew', text: 'לֹא', transliteration: 'lōʾ', lemma: 'לֹא', lemmaTranslit: 'lōʾ', gloss: 'not', morphology: { pos: 'adverb', rawCode: 'Tn' }, strongs: 'H3808', position: 11 },
  { id: 'Gen.8.22.12', language: 'hebrew', text: 'יִשְׁבֹּתוּ', transliteration: 'yišbōṯû', lemma: 'שָׁבַת', lemmaTranslit: 'šāḇaṯ', gloss: 'shall cease', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi3mp' }, strongs: 'H7673', position: 12 },
];

export const genesis8_22_translation: VerseTranslation = {
  verseRef: 'Gen.8.22',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: '"While all the days of the earth remain, seedtime and harvest, and cold and heat, and summer and winter, and day and night shall not cease."', spans: [{ id: 'Gen.8.22.en.lit.0', text: 'While all the days...', position: 0, sourceTokenIds: ['Gen.8.22.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"As long as the earth endures, seedtime and harvest, cold and heat, summer and winter, day and night will never cease."', spans: [{ id: 'Gen.8.22.en.idi.0', text: 'As long as the earth endures...', position: 0, sourceTokenIds: ['Gen.8.22.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis8_22_notes: StudyNote[] = [
  { id: 'Gen.8.22.note.1', verseRef: 'Gen.8.22', sourceTokenIds: ['Gen.8.22.0', 'Gen.8.22.1', 'Gen.8.22.2'], category: 'theological', title: 'Cosmic Covenant', content: 'This promise establishes the stability of creation as long as the earth exists. The rhythmic pairs (seedtime/harvest, cold/heat, summer/winter, day/night) express the reliable order God maintains. This is the foundation for the explicit covenant in chapter 9.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.8.22.note.2', verseRef: 'Gen.8.22', sourceTokenIds: ['Gen.8.22.12'], category: 'lexical', title: 'Shall Not Cease', content: 'The verb shavat (שָׁבַת) "to cease" is the root of "Sabbath." While humans are to cease from work on the seventh day, God promises that the cycles of nature will never cease. God\'s sustaining work continues perpetually.', confidence: 'medium', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Export all verses
export const genesis8_15_22_verses = [
  { ref: 'Gen.8.15', sourceTokens: genesis8_15_tokens, translation: genesis8_15_translation, notes: genesis8_15_notes },
  { ref: 'Gen.8.16', sourceTokens: genesis8_16_tokens, translation: genesis8_16_translation, notes: genesis8_16_notes },
  { ref: 'Gen.8.17', sourceTokens: genesis8_17_tokens, translation: genesis8_17_translation, notes: genesis8_17_notes },
  { ref: 'Gen.8.18', sourceTokens: genesis8_18_tokens, translation: genesis8_18_translation, notes: genesis8_18_notes },
  { ref: 'Gen.8.19', sourceTokens: genesis8_19_tokens, translation: genesis8_19_translation, notes: genesis8_19_notes },
  { ref: 'Gen.8.20', sourceTokens: genesis8_20_tokens, translation: genesis8_20_translation, notes: genesis8_20_notes },
  { ref: 'Gen.8.21', sourceTokens: genesis8_21_tokens, translation: genesis8_21_translation, notes: genesis8_21_notes },
  { ref: 'Gen.8.22', sourceTokens: genesis8_22_tokens, translation: genesis8_22_translation, notes: genesis8_22_notes },
];
