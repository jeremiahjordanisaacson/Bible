/**
 * Genesis 8:1-7 - God remembers Noah, the waters recede
 * Hebrew morphological data with study annotations
 */

import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

// Genesis 8:1
export const genesis8_1_tokens: SourceToken[] = [
  { id: 'Gen.8.1.0', language: 'hebrew', text: 'וַיִּזְכֹּר', transliteration: 'wayyizkōr', lemma: 'זָכַר', lemmaTranslit: 'zākhar', gloss: 'And remembered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H2142', position: 0 },
  { id: 'Gen.8.1.1', language: 'hebrew', text: 'אֱלֹהִים', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H430', position: 1 },
  { id: 'Gen.8.1.2', language: 'hebrew', text: 'אֶת־נֹחַ', transliteration: 'ʾeṯ-nōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'Noah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 2 },
  { id: 'Gen.8.1.3', language: 'hebrew', text: 'וְאֵת', transliteration: 'wəʾēṯ', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: 'and', morphology: { pos: 'preposition', rawCode: 'To' }, strongs: 'H853', position: 3 },
  { id: 'Gen.8.1.4', language: 'hebrew', text: 'כָּל־הַחַיָּה', transliteration: 'kāl-haḥayyāh', lemma: 'חַיָּה', lemmaTranslit: 'ḥayyāh', gloss: 'all the living creatures', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H2416', position: 4 },
  { id: 'Gen.8.1.5', language: 'hebrew', text: 'וְאֶת־כָּל־הַבְּהֵמָה', transliteration: 'wəʾeṯ-kāl-habbəhēmāh', lemma: 'בְּהֵמָה', lemmaTranslit: 'bəhēmāh', gloss: 'and all the livestock', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H929', position: 5 },
  { id: 'Gen.8.1.6', language: 'hebrew', text: 'אֲשֶׁר', transliteration: 'ʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'which', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 6 },
  { id: 'Gen.8.1.7', language: 'hebrew', text: 'אִתּוֹ', transliteration: 'ʾittô', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: 'with him', morphology: { pos: 'preposition', rawCode: 'Ps3ms' }, strongs: 'H854', position: 7 },
  { id: 'Gen.8.1.8', language: 'hebrew', text: 'בַּתֵּבָה', transliteration: 'battēḇāh', lemma: 'תֵּבָה', lemmaTranslit: 'tēḇāh', gloss: 'in the ark', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8392', position: 8 },
  { id: 'Gen.8.1.9', language: 'hebrew', text: 'וַיַּעֲבֵר', transliteration: 'wayyaʿăḇēr', lemma: 'עָבַר', lemmaTranslit: 'ʿāḇar', gloss: 'and caused to pass', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H5674', position: 9 },
  { id: 'Gen.8.1.10', language: 'hebrew', text: 'אֱלֹהִים', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H430', position: 10 },
  { id: 'Gen.8.1.11', language: 'hebrew', text: 'רוּחַ', transliteration: 'rûaḥ', lemma: 'רוּחַ', lemmaTranslit: 'rûaḥ', gloss: 'wind/spirit', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H7307', position: 11 },
  { id: 'Gen.8.1.12', language: 'hebrew', text: 'עַל־הָאָרֶץ', transliteration: 'ʿal-hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'over the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 12 },
  { id: 'Gen.8.1.13', language: 'hebrew', text: 'וַיָּשֹׁכּוּ', transliteration: 'wayyāšōkkû', lemma: 'שָׁכַךְ', lemmaTranslit: 'šāḵaḵ', gloss: 'and subsided', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H7918', position: 13 },
  { id: 'Gen.8.1.14', language: 'hebrew', text: 'הַמָּיִם', transliteration: 'hammāyim', lemma: 'מַיִם', lemmaTranslit: 'mayim', gloss: 'the waters', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H4325', position: 14 },
];

export const genesis8_1_translation: VerseTranslation = {
  verseRef: 'Gen.8.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And God remembered Noah and all the living creatures and all the livestock which were with him in the ark, and God caused a wind to pass over the earth, and the waters subsided.', spans: [{ id: 'Gen.8.1.en.lit.0', text: 'And God remembered Noah...', position: 0, sourceTokenIds: ['Gen.8.1.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'But God remembered Noah and all the wild animals and livestock with him in the ark. God sent a wind over the earth, and the waters began to recede.', spans: [{ id: 'Gen.8.1.en.idi.0', text: 'But God remembered Noah...', position: 0, sourceTokenIds: ['Gen.8.1.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis8_1_notes: StudyNote[] = [
  { id: 'Gen.8.1.note.1', verseRef: 'Gen.8.1', sourceTokenIds: ['Gen.8.1.0'], category: 'theological', title: 'Divine Remembrance', content: 'Hebrew zakhar (זָכַר) means more than mental recall; it implies action. When God "remembers," He acts on behalf of those remembered. This theological concept appears throughout Scripture (Gen 19:29, Ex 2:24, Ps 105:42).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.8.1.note.2', verseRef: 'Gen.8.1', sourceTokenIds: ['Gen.8.1.11'], category: 'lexical', title: 'Wind/Spirit', content: 'Hebrew ruach (רוּחַ) can mean "wind," "breath," or "spirit." Here it echoes Gen 1:2 where the ruach of God hovered over the waters. The same agent involved in creation now works in re-creation after the flood.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 8:2
export const genesis8_2_tokens: SourceToken[] = [
  { id: 'Gen.8.2.0', language: 'hebrew', text: 'וַיִּסָּכְרוּ', transliteration: 'wayyissāḵərû', lemma: 'סָכַר', lemmaTranslit: 'sāḵar', gloss: 'And were stopped', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'niphal', rawCode: 'VNw3mp' }, strongs: 'H5534', position: 0 },
  { id: 'Gen.8.2.1', language: 'hebrew', text: 'מַעְיְנֹת', transliteration: 'maʿyənōṯ', lemma: 'מַעְיָן', lemmaTranslit: 'maʿyān', gloss: 'springs of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H4599', position: 1 },
  { id: 'Gen.8.2.2', language: 'hebrew', text: 'תְּהוֹם', transliteration: 'təhôm', lemma: 'תְּהוֹם', lemmaTranslit: 'təhôm', gloss: 'the deep', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8415', position: 2 },
  { id: 'Gen.8.2.3', language: 'hebrew', text: 'וַאֲרֻבֹּת', transliteration: 'waʾărubbōṯ', lemma: 'אֲרֻבָּה', lemmaTranslit: 'ʾărubbāh', gloss: 'and windows of', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'construct', rawCode: 'Ncfpc' }, strongs: 'H699', position: 3 },
  { id: 'Gen.8.2.4', language: 'hebrew', text: 'הַשָּׁמָיִם', transliteration: 'haššāmāyim', lemma: 'שָׁמַיִם', lemmaTranslit: 'šāmayim', gloss: 'the heavens', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H8064', position: 4 },
  { id: 'Gen.8.2.5', language: 'hebrew', text: 'וַיִּכָּלֵא', transliteration: 'wayyikkālēʾ', lemma: 'כָּלָא', lemmaTranslit: 'kālāʾ', gloss: 'and was restrained', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'niphal', rawCode: 'VNw3ms' }, strongs: 'H3607', position: 5 },
  { id: 'Gen.8.2.6', language: 'hebrew', text: 'הַגֶּשֶׁם', transliteration: 'haggešem', lemma: 'גֶּשֶׁם', lemmaTranslit: 'gešem', gloss: 'the rain', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H1653', position: 6 },
  { id: 'Gen.8.2.7', language: 'hebrew', text: 'מִן־הַשָּׁמָיִם', transliteration: 'min-haššāmāyim', lemma: 'שָׁמַיִם', lemmaTranslit: 'šāmayim', gloss: 'from the heavens', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H8064', position: 7 },
];

export const genesis8_2_translation: VerseTranslation = {
  verseRef: 'Gen.8.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And the springs of the deep and the windows of the heavens were stopped, and the rain from the heavens was restrained.', spans: [{ id: 'Gen.8.2.en.lit.0', text: 'And the springs of the deep...', position: 0, sourceTokenIds: ['Gen.8.2.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'The underground springs and the floodgates of the sky were closed, and the rain from the sky stopped.', spans: [{ id: 'Gen.8.2.en.idi.0', text: 'The underground springs...', position: 0, sourceTokenIds: ['Gen.8.2.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis8_2_notes: StudyNote[] = [
  { id: 'Gen.8.2.note.1', verseRef: 'Gen.8.2', sourceTokenIds: ['Gen.8.2.0', 'Gen.8.2.5'], category: 'theological', title: 'Reversal of Judgment', content: 'The stopping of the springs (mayanot tehom) and windows of heaven (arubot hashamayim) reverses the opening described in 7:11. The same cosmic sources that brought judgment are now controlled by God\'s mercy.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 8:3
export const genesis8_3_tokens: SourceToken[] = [
  { id: 'Gen.8.3.0', language: 'hebrew', text: 'וַיָּשֻׁבוּ', transliteration: 'wayyāšuḇû', lemma: 'שׁוּב', lemmaTranslit: 'šûḇ', gloss: 'And returned', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H7725', position: 0 },
  { id: 'Gen.8.3.1', language: 'hebrew', text: 'הַמַּיִם', transliteration: 'hammayim', lemma: 'מַיִם', lemmaTranslit: 'mayim', gloss: 'the waters', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H4325', position: 1 },
  { id: 'Gen.8.3.2', language: 'hebrew', text: 'מֵעַל', transliteration: 'mēʿal', lemma: 'מֵעַל', lemmaTranslit: 'mēʿal', gloss: 'from upon', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H5921', position: 2 },
  { id: 'Gen.8.3.3', language: 'hebrew', text: 'הָאָרֶץ', transliteration: 'hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 3 },
  { id: 'Gen.8.3.4', language: 'hebrew', text: 'הָלוֹךְ', transliteration: 'hālôḵ', lemma: 'הָלַךְ', lemmaTranslit: 'hālaḵ', gloss: 'going', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'VqIa' }, strongs: 'H1980', position: 4 },
  { id: 'Gen.8.3.5', language: 'hebrew', text: 'וָשׁוֹב', transliteration: 'wāšôḇ', lemma: 'שׁוּב', lemmaTranslit: 'šûḇ', gloss: 'and returning', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'VqIa' }, strongs: 'H7725', position: 5 },
  { id: 'Gen.8.3.6', language: 'hebrew', text: 'וַיַּחְסְרוּ', transliteration: 'wayyaḥsərû', lemma: 'חָסֵר', lemmaTranslit: 'ḥāsēr', gloss: 'and decreased', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H2637', position: 6 },
  { id: 'Gen.8.3.7', language: 'hebrew', text: 'הַמַּיִם', transliteration: 'hammayim', lemma: 'מַיִם', lemmaTranslit: 'mayim', gloss: 'the waters', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H4325', position: 7 },
  { id: 'Gen.8.3.8', language: 'hebrew', text: 'מִקְצֵה', transliteration: 'miqqṣēh', lemma: 'קָצֶה', lemmaTranslit: 'qāṣeh', gloss: 'at the end of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H7097', position: 8 },
  { id: 'Gen.8.3.9', language: 'hebrew', text: 'חֲמִשִּׁים', transliteration: 'ḥămiššîm', lemma: 'חֲמִשִּׁים', lemmaTranslit: 'ḥămiššîm', gloss: 'fifty', morphology: { pos: 'numeral', rawCode: 'Acmpa' }, strongs: 'H2572', position: 9 },
  { id: 'Gen.8.3.10', language: 'hebrew', text: 'וּמְאַת', transliteration: 'ûməʾaṯ', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'and hundred', morphology: { pos: 'numeral', rawCode: 'Acfsc' }, strongs: 'H3967', position: 10 },
  { id: 'Gen.8.3.11', language: 'hebrew', text: 'יוֹם', transliteration: 'yôm', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'day', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3117', position: 11 },
];

export const genesis8_3_translation: VerseTranslation = {
  verseRef: 'Gen.8.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And the waters returned from upon the earth, going and returning, and the waters decreased at the end of a hundred and fifty days.', spans: [{ id: 'Gen.8.3.en.lit.0', text: 'And the waters returned...', position: 0, sourceTokenIds: ['Gen.8.3.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'The waters gradually receded from the earth, and at the end of 150 days the water had gone down.', spans: [{ id: 'Gen.8.3.en.idi.0', text: 'The waters gradually receded...', position: 0, sourceTokenIds: ['Gen.8.3.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis8_3_notes: StudyNote[] = [
  { id: 'Gen.8.3.note.1', verseRef: 'Gen.8.3', sourceTokenIds: ['Gen.8.3.4', 'Gen.8.3.5'], category: 'grammatical', title: 'Continuous Action', content: 'The infinitive absolute construction halok washov (הָלוֹךְ וָשׁוֹב) "going and returning" indicates gradual, continuous action. This same construction appears in Gen 8:7 with the raven\'s flight.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 8:4
export const genesis8_4_tokens: SourceToken[] = [
  { id: 'Gen.8.4.0', language: 'hebrew', text: 'וַתָּנַח', transliteration: 'wattānaḥ', lemma: 'נוּחַ', lemmaTranslit: 'nûaḥ', gloss: 'And rested', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3fs' }, strongs: 'H5117', position: 0 },
  { id: 'Gen.8.4.1', language: 'hebrew', text: 'הַתֵּבָה', transliteration: 'hattēḇāh', lemma: 'תֵּבָה', lemmaTranslit: 'tēḇāh', gloss: 'the ark', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8392', position: 1 },
  { id: 'Gen.8.4.2', language: 'hebrew', text: 'בַּחֹדֶשׁ', transliteration: 'baḥōdeš', lemma: 'חֹדֶשׁ', lemmaTranslit: 'ḥōdeš', gloss: 'in the month', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H2320', position: 2 },
  { id: 'Gen.8.4.3', language: 'hebrew', text: 'הַשְּׁבִיעִי', transliteration: 'haššəḇîʿî', lemma: 'שְׁבִיעִי', lemmaTranslit: 'šəḇîʿî', gloss: 'the seventh', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', rawCode: 'Aomsa' }, strongs: 'H7637', position: 3 },
  { id: 'Gen.8.4.4', language: 'hebrew', text: 'בְּשִׁבְעָה־עָשָׂר', transliteration: 'bəšiḇʿāh-ʿāśār', lemma: 'שִׁבְעָה', lemmaTranslit: 'šiḇʿāh', gloss: 'on the seventeenth', morphology: { pos: 'numeral', rawCode: 'Acmsa' }, strongs: 'H7651', position: 4 },
  { id: 'Gen.8.4.5', language: 'hebrew', text: 'יוֹם', transliteration: 'yôm', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'day', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3117', position: 5 },
  { id: 'Gen.8.4.6', language: 'hebrew', text: 'לַחֹדֶשׁ', transliteration: 'laḥōdeš', lemma: 'חֹדֶשׁ', lemmaTranslit: 'ḥōdeš', gloss: 'of the month', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H2320', position: 6 },
  { id: 'Gen.8.4.7', language: 'hebrew', text: 'עַל', transliteration: 'ʿal', lemma: 'עַל', lemmaTranslit: 'ʿal', gloss: 'upon', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H5921', position: 7 },
  { id: 'Gen.8.4.8', language: 'hebrew', text: 'הָרֵי', transliteration: 'hārê', lemma: 'הַר', lemmaTranslit: 'har', gloss: 'mountains of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H2022', position: 8 },
  { id: 'Gen.8.4.9', language: 'hebrew', text: 'אֲרָרָט', transliteration: 'ʾărārāṭ', lemma: 'אֲרָרָט', lemmaTranslit: 'ʾărārāṭ', gloss: 'Ararat', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H780', position: 9 },
];

export const genesis8_4_translation: VerseTranslation = {
  verseRef: 'Gen.8.4',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And the ark rested in the seventh month, on the seventeenth day of the month, upon the mountains of Ararat.', spans: [{ id: 'Gen.8.4.en.lit.0', text: 'And the ark rested...', position: 0, sourceTokenIds: ['Gen.8.4.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'On the seventeenth day of the seventh month, the ark came to rest on the mountains of Ararat.', spans: [{ id: 'Gen.8.4.en.idi.0', text: 'On the seventeenth day...', position: 0, sourceTokenIds: ['Gen.8.4.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis8_4_notes: StudyNote[] = [
  { id: 'Gen.8.4.note.1', verseRef: 'Gen.8.4', sourceTokenIds: ['Gen.8.4.0'], category: 'lexical', title: 'Noah and Rest', content: 'The verb nuach (נוּחַ) "to rest" is from the same root as Noah\'s name (Noach). This wordplay connects Noah with the theme of rest - his father named him hoping he would bring rest (5:29), and now the ark rests.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.8.4.note.2', verseRef: 'Gen.8.4', sourceTokenIds: ['Gen.8.4.9'], category: 'cultural', title: 'Mountains of Ararat', content: 'Ararat refers to the ancient kingdom of Urartu in the Armenian highlands (modern eastern Turkey/Armenia). The text says "mountains" (plural), not a specific peak. The traditional identification with Mount Ararat (Agri Dagi) came later.', confidence: 'medium', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 8:5
export const genesis8_5_tokens: SourceToken[] = [
  { id: 'Gen.8.5.0', language: 'hebrew', text: 'וְהַמַּיִם', transliteration: 'wəhammayim', lemma: 'מַיִם', lemmaTranslit: 'mayim', gloss: 'And the waters', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H4325', position: 0 },
  { id: 'Gen.8.5.1', language: 'hebrew', text: 'הָיוּ', transliteration: 'hāyû', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'were', morphology: { pos: 'verb', person: '3', gender: 'common', number: 'plural', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3cp' }, strongs: 'H1961', position: 1 },
  { id: 'Gen.8.5.2', language: 'hebrew', text: 'הָלוֹךְ', transliteration: 'hālôḵ', lemma: 'הָלַךְ', lemmaTranslit: 'hālaḵ', gloss: 'going', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'VqIa' }, strongs: 'H1980', position: 2 },
  { id: 'Gen.8.5.3', language: 'hebrew', text: 'וְחָסוֹר', transliteration: 'wəḥāsôr', lemma: 'חָסֵר', lemmaTranslit: 'ḥāsēr', gloss: 'and decreasing', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'VqIa' }, strongs: 'H2637', position: 3 },
  { id: 'Gen.8.5.4', language: 'hebrew', text: 'עַד', transliteration: 'ʿaḏ', lemma: 'עַד', lemmaTranslit: 'ʿaḏ', gloss: 'until', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H5704', position: 4 },
  { id: 'Gen.8.5.5', language: 'hebrew', text: 'הַחֹדֶשׁ', transliteration: 'haḥōdeš', lemma: 'חֹדֶשׁ', lemmaTranslit: 'ḥōdeš', gloss: 'the month', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H2320', position: 5 },
  { id: 'Gen.8.5.6', language: 'hebrew', text: 'הָעֲשִׂירִי', transliteration: 'hāʿăśîrî', lemma: 'עֲשִׂירִי', lemmaTranslit: 'ʿăśîrî', gloss: 'the tenth', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', rawCode: 'Aomsa' }, strongs: 'H6224', position: 6 },
  { id: 'Gen.8.5.7', language: 'hebrew', text: 'בָּעֲשִׂירִי', transliteration: 'bāʿăśîrî', lemma: 'עֲשִׂירִי', lemmaTranslit: 'ʿăśîrî', gloss: 'in the tenth', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', rawCode: 'Aomsa' }, strongs: 'H6224', position: 7 },
  { id: 'Gen.8.5.8', language: 'hebrew', text: 'בְּאֶחָד', transliteration: 'bəʾeḥāḏ', lemma: 'אֶחָד', lemmaTranslit: 'ʾeḥāḏ', gloss: 'on the first', morphology: { pos: 'numeral', rawCode: 'Acmsa' }, strongs: 'H259', position: 8 },
  { id: 'Gen.8.5.9', language: 'hebrew', text: 'לַחֹדֶשׁ', transliteration: 'laḥōdeš', lemma: 'חֹדֶשׁ', lemmaTranslit: 'ḥōdeš', gloss: 'of the month', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H2320', position: 9 },
  { id: 'Gen.8.5.10', language: 'hebrew', text: 'נִרְאוּ', transliteration: 'nirʾû', lemma: 'רָאָה', lemmaTranslit: 'rāʾāh', gloss: 'were seen', morphology: { pos: 'verb', person: '3', gender: 'common', number: 'plural', tense: 'perfect', stem: 'niphal', rawCode: 'VNp3cp' }, strongs: 'H7200', position: 10 },
  { id: 'Gen.8.5.11', language: 'hebrew', text: 'רָאשֵׁי', transliteration: 'rāʾšê', lemma: 'רֹאשׁ', lemmaTranslit: 'rōʾš', gloss: 'tops of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H7218', position: 11 },
  { id: 'Gen.8.5.12', language: 'hebrew', text: 'הֶהָרִים', transliteration: 'hehārîm', lemma: 'הַר', lemmaTranslit: 'har', gloss: 'the mountains', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H2022', position: 12 },
];

export const genesis8_5_translation: VerseTranslation = {
  verseRef: 'Gen.8.5',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And the waters were going and decreasing until the tenth month; in the tenth month, on the first of the month, the tops of the mountains were seen.', spans: [{ id: 'Gen.8.5.en.lit.0', text: 'And the waters were going...', position: 0, sourceTokenIds: ['Gen.8.5.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'The waters continued to recede until the tenth month, and on the first day of the tenth month the tops of the mountains became visible.', spans: [{ id: 'Gen.8.5.en.idi.0', text: 'The waters continued to recede...', position: 0, sourceTokenIds: ['Gen.8.5.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis8_5_notes: StudyNote[] = [];

// Genesis 8:6
export const genesis8_6_tokens: SourceToken[] = [
  { id: 'Gen.8.6.0', language: 'hebrew', text: 'וַיְהִי', transliteration: 'wayəhî', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'And it was', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H1961', position: 0 },
  { id: 'Gen.8.6.1', language: 'hebrew', text: 'מִקֵּץ', transliteration: 'miqqēṣ', lemma: 'קֵץ', lemmaTranslit: 'qēṣ', gloss: 'at the end of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H7093', position: 1 },
  { id: 'Gen.8.6.2', language: 'hebrew', text: 'אַרְבָּעִים', transliteration: 'ʾarbaʿîm', lemma: 'אַרְבָּעִים', lemmaTranslit: 'ʾarbaʿîm', gloss: 'forty', morphology: { pos: 'numeral', rawCode: 'Acmpa' }, strongs: 'H705', position: 2 },
  { id: 'Gen.8.6.3', language: 'hebrew', text: 'יוֹם', transliteration: 'yôm', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'day', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3117', position: 3 },
  { id: 'Gen.8.6.4', language: 'hebrew', text: 'וַיִּפְתַּח', transliteration: 'wayyip̄taḥ', lemma: 'פָּתַח', lemmaTranslit: 'pātaḥ', gloss: 'and opened', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H6605', position: 4 },
  { id: 'Gen.8.6.5', language: 'hebrew', text: 'נֹחַ', transliteration: 'nōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'Noah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 5 },
  { id: 'Gen.8.6.6', language: 'hebrew', text: 'אֶת־חַלּוֹן', transliteration: 'ʾeṯ-ḥallôn', lemma: 'חַלּוֹן', lemmaTranslit: 'ḥallôn', gloss: 'window of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H2474', position: 6 },
  { id: 'Gen.8.6.7', language: 'hebrew', text: 'הַתֵּבָה', transliteration: 'hattēḇāh', lemma: 'תֵּבָה', lemmaTranslit: 'tēḇāh', gloss: 'the ark', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8392', position: 7 },
  { id: 'Gen.8.6.8', language: 'hebrew', text: 'אֲשֶׁר', transliteration: 'ʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'which', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 8 },
  { id: 'Gen.8.6.9', language: 'hebrew', text: 'עָשָׂה', transliteration: 'ʿāśāh', lemma: 'עָשָׂה', lemmaTranslit: 'ʿāśāh', gloss: 'he had made', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H6213', position: 9 },
];

export const genesis8_6_translation: VerseTranslation = {
  verseRef: 'Gen.8.6',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And it was at the end of forty days, and Noah opened the window of the ark which he had made.', spans: [{ id: 'Gen.8.6.en.lit.0', text: 'And it was at the end...', position: 0, sourceTokenIds: ['Gen.8.6.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'After forty days Noah opened the window of the ark he had made.', spans: [{ id: 'Gen.8.6.en.idi.0', text: 'After forty days...', position: 0, sourceTokenIds: ['Gen.8.6.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis8_6_notes: StudyNote[] = [
  { id: 'Gen.8.6.note.1', verseRef: 'Gen.8.6', sourceTokenIds: ['Gen.8.6.2'], category: 'theological', title: 'Forty Days', content: 'The number forty is significant in Scripture as a period of testing or transition: forty days of rain (7:12), Moses on Sinai (Ex 24:18), Israel in the wilderness (40 years), Jesus\' temptation (Matt 4:2). Here it marks the waiting period after the mountains appeared.', confidence: 'medium', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 8:7
export const genesis8_7_tokens: SourceToken[] = [
  { id: 'Gen.8.7.0', language: 'hebrew', text: 'וַיְשַׁלַּח', transliteration: 'wayəšallaḥ', lemma: 'שָׁלַח', lemmaTranslit: 'šālaḥ', gloss: 'And he sent out', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'piel', rawCode: 'Vpw3ms' }, strongs: 'H7971', position: 0 },
  { id: 'Gen.8.7.1', language: 'hebrew', text: 'אֶת־הָעֹרֵב', transliteration: 'ʾeṯ-hāʿōrēḇ', lemma: 'עֹרֵב', lemmaTranslit: 'ʿōrēḇ', gloss: 'the raven', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H6158', position: 1 },
  { id: 'Gen.8.7.2', language: 'hebrew', text: 'וַיֵּצֵא', transliteration: 'wayyēṣēʾ', lemma: 'יָצָא', lemmaTranslit: 'yāṣāʾ', gloss: 'and it went out', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H3318', position: 2 },
  { id: 'Gen.8.7.3', language: 'hebrew', text: 'יָצוֹא', transliteration: 'yāṣôʾ', lemma: 'יָצָא', lemmaTranslit: 'yāṣāʾ', gloss: 'going out', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'VqIa' }, strongs: 'H3318', position: 3 },
  { id: 'Gen.8.7.4', language: 'hebrew', text: 'וָשׁוֹב', transliteration: 'wāšôḇ', lemma: 'שׁוּב', lemmaTranslit: 'šûḇ', gloss: 'and returning', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'VqIa' }, strongs: 'H7725', position: 4 },
  { id: 'Gen.8.7.5', language: 'hebrew', text: 'עַד־יְבֹשֶׁת', transliteration: 'ʿaḏ-yəḇōšeṯ', lemma: 'יָבֵשׁ', lemmaTranslit: 'yāḇēš', gloss: 'until drying up', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'VqIc' }, strongs: 'H3001', position: 5 },
  { id: 'Gen.8.7.6', language: 'hebrew', text: 'הַמַּיִם', transliteration: 'hammayim', lemma: 'מַיִם', lemmaTranslit: 'mayim', gloss: 'the waters', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H4325', position: 6 },
  { id: 'Gen.8.7.7', language: 'hebrew', text: 'מֵעַל', transliteration: 'mēʿal', lemma: 'מֵעַל', lemmaTranslit: 'mēʿal', gloss: 'from upon', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H5921', position: 7 },
  { id: 'Gen.8.7.8', language: 'hebrew', text: 'הָאָרֶץ', transliteration: 'hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 8 },
];

export const genesis8_7_translation: VerseTranslation = {
  verseRef: 'Gen.8.7',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And he sent out the raven, and it went out, going out and returning, until the drying up of the waters from upon the earth.', spans: [{ id: 'Gen.8.7.en.lit.0', text: 'And he sent out the raven...', position: 0, sourceTokenIds: ['Gen.8.7.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'He sent out a raven, and it kept flying back and forth until the water had dried up from the earth.', spans: [{ id: 'Gen.8.7.en.idi.0', text: 'He sent out a raven...', position: 0, sourceTokenIds: ['Gen.8.7.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis8_7_notes: StudyNote[] = [
  { id: 'Gen.8.7.note.1', verseRef: 'Gen.8.7', sourceTokenIds: ['Gen.8.7.1'], category: 'cultural', title: 'The Raven', content: 'The raven (orev) is an unclean bird (Lev 11:15) but also one that God uses for His purposes (1 Kings 17:4-6). Its ability to feed on carrion made it suitable for finding if carcasses were exposed. The raven\'s inconclusive mission contrasts with the dove\'s definitive results.', confidence: 'medium', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Export all verses
export const genesis8_1_7_verses = [
  { ref: 'Gen.8.1', sourceTokens: genesis8_1_tokens, translation: genesis8_1_translation, notes: genesis8_1_notes },
  { ref: 'Gen.8.2', sourceTokens: genesis8_2_tokens, translation: genesis8_2_translation, notes: genesis8_2_notes },
  { ref: 'Gen.8.3', sourceTokens: genesis8_3_tokens, translation: genesis8_3_translation, notes: genesis8_3_notes },
  { ref: 'Gen.8.4', sourceTokens: genesis8_4_tokens, translation: genesis8_4_translation, notes: genesis8_4_notes },
  { ref: 'Gen.8.5', sourceTokens: genesis8_5_tokens, translation: genesis8_5_translation, notes: genesis8_5_notes },
  { ref: 'Gen.8.6', sourceTokens: genesis8_6_tokens, translation: genesis8_6_translation, notes: genesis8_6_notes },
  { ref: 'Gen.8.7', sourceTokens: genesis8_7_tokens, translation: genesis8_7_translation, notes: genesis8_7_notes },
];
