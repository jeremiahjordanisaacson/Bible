/**
 * Genesis 9:1-7 - God blesses Noah, new covenant stipulations
 * Hebrew morphological data with study annotations
 */

import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

// Genesis 9:1
export const genesis9_1_tokens: SourceToken[] = [
  { id: 'Gen.9.1.0', language: 'hebrew', text: 'וַיְבָ֣רֶךְ', transliteration: 'wayəḇāreḵ', lemma: 'בָּרַךְ', lemmaTranslit: 'bāraḵ', gloss: 'And blessed', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'piel', rawCode: 'Vpw3ms' }, strongs: 'H1288', position: 0 },
  { id: 'Gen.9.1.1', language: 'hebrew', text: 'אֱלֹהִ֔ים', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H430', position: 1 },
  { id: 'Gen.9.1.2', language: 'hebrew', text: 'אֶת־נֹ֖חַ', transliteration: 'ʾeṯ-nōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'Noah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 2 },
  { id: 'Gen.9.1.3', language: 'hebrew', text: 'וְאֶת־בָּנָ֑יו', transliteration: 'wəʾeṯ-bānāyw', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'and his sons', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H1121', position: 3 },
  { id: 'Gen.9.1.4', language: 'hebrew', text: 'וַיֹּ֧אמֶר', transliteration: 'wayyōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'and said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H559', position: 4 },
  { id: 'Gen.9.1.5', language: 'hebrew', text: 'לָהֶ֛ם', transliteration: 'lāhem', lemma: 'לְ', lemmaTranslit: 'lə', gloss: 'to them', morphology: { pos: 'preposition', rawCode: 'RPs3mp' }, strongs: 'H', position: 5 },
  { id: 'Gen.9.1.6', language: 'hebrew', text: 'פְּר֥וּ', transliteration: 'pərû', lemma: 'פָּרָה', lemmaTranslit: 'pārāh', gloss: 'Be fruitful', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'plural', mood: 'imperative', stem: 'qal', rawCode: 'Vqv2mp' }, strongs: 'H6509', position: 6 },
  { id: 'Gen.9.1.7', language: 'hebrew', text: 'וּרְב֖וּ', transliteration: 'ûrəḇû', lemma: 'רָבָה', lemmaTranslit: 'rāḇāh', gloss: 'and multiply', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'plural', mood: 'imperative', stem: 'qal', rawCode: 'Vqv2mp' }, strongs: 'H7235', position: 7 },
  { id: 'Gen.9.1.8', language: 'hebrew', text: 'וּמִלְא֥וּ', transliteration: 'ûmilʾû', lemma: 'מָלֵא', lemmaTranslit: 'mālēʾ', gloss: 'and fill', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'plural', mood: 'imperative', stem: 'qal', rawCode: 'Vqv2mp' }, strongs: 'H4390', position: 8 },
  { id: 'Gen.9.1.9', language: 'hebrew', text: 'אֶת־הָאָֽרֶץ', transliteration: 'ʾeṯ-hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 9 },
];

export const genesis9_1_translation: VerseTranslation = {
  verseRef: 'Gen.9.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And God blessed Noah and his sons, and said to them, "Be fruitful and multiply and fill the earth."', spans: [{ id: 'Gen.9.1.en.lit.0', text: 'And God blessed Noah...', position: 0, sourceTokenIds: ['Gen.9.1.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Then God blessed Noah and his sons, saying to them, "Be fruitful and increase in number and fill the earth."', spans: [{ id: 'Gen.9.1.en.idi.0', text: 'Then God blessed Noah...', position: 0, sourceTokenIds: ['Gen.9.1.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis9_1_notes: StudyNote[] = [
  { id: 'Gen.9.1.note.1', verseRef: 'Gen.9.1', sourceTokenIds: ['Gen.9.1.6', 'Gen.9.1.7', 'Gen.9.1.8'], category: 'theological', title: 'Creation Mandate Renewed', content: 'The command "Be fruitful and multiply and fill the earth" (pəru urvu umil\'u) directly echoes God\'s blessing to Adam and Eve (Gen 1:28). This marks a new beginning for humanity - a second creation, though with modifications (see v. 2-4).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 9:2
export const genesis9_2_tokens: SourceToken[] = [
  { id: 'Gen.9.2.0', language: 'hebrew', text: 'וּמוֹרַאֲכֶ֤ם', transliteration: 'ûmôraʾăḵem', lemma: 'מוֹרָא', lemmaTranslit: 'môrāʾ', gloss: 'And the fear of you', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H4172', position: 0 },
  { id: 'Gen.9.2.1', language: 'hebrew', text: 'וְחִתְּכֶם֙', transliteration: 'wəḥittəḵem', lemma: 'חִתִּית', lemmaTranslit: 'ḥittîṯ', gloss: 'and dread of you', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H2844', position: 1 },
  { id: 'Gen.9.2.2', language: 'hebrew', text: 'יִֽהְיֶ֔ה', transliteration: 'yihyeh', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'shall be', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi3ms' }, strongs: 'H1961', position: 2 },
  { id: 'Gen.9.2.3', language: 'hebrew', text: 'עַ֚ל', transliteration: 'ʿal', lemma: 'עַל', lemmaTranslit: 'ʿal', gloss: 'upon', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H5921', position: 3 },
  { id: 'Gen.9.2.4', language: 'hebrew', text: 'כָּל־חַיַּ֣ת', transliteration: 'kāl-ḥayyaṯ', lemma: 'חַיָּה', lemmaTranslit: 'ḥayyāh', gloss: 'all beasts of', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H2416', position: 4 },
  { id: 'Gen.9.2.5', language: 'hebrew', text: 'הָאָ֔רֶץ', transliteration: 'hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 5 },
  { id: 'Gen.9.2.6', language: 'hebrew', text: 'וְעַ֖ל', transliteration: 'wəʿal', lemma: 'עַל', lemmaTranslit: 'ʿal', gloss: 'and upon', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H5921', position: 6 },
  { id: 'Gen.9.2.7', language: 'hebrew', text: 'כָּל־ע֣וֹף', transliteration: 'kāl-ʿôp̄', lemma: 'עוֹף', lemmaTranslit: 'ʿôp̄', gloss: 'all birds of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H5775', position: 7 },
  { id: 'Gen.9.2.8', language: 'hebrew', text: 'הַשָּׁמָ֑יִם', transliteration: 'haššāmāyim', lemma: 'שָׁמַיִם', lemmaTranslit: 'šāmayim', gloss: 'the heavens', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H8064', position: 8 },
  { id: 'Gen.9.2.9', language: 'hebrew', text: 'בְּכֹל֩', transliteration: 'bəḵōl', lemma: 'כֹּל', lemmaTranslit: 'kōl', gloss: 'upon all', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H3605', position: 9 },
  { id: 'Gen.9.2.10', language: 'hebrew', text: 'אֲשֶׁ֨ר', transliteration: 'ʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'that', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 10 },
  { id: 'Gen.9.2.11', language: 'hebrew', text: 'תִּרְמֹ֧שׂ', transliteration: 'tirmoś', lemma: 'רָמַשׂ', lemmaTranslit: 'rāmaś', gloss: 'creeps', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi3fs' }, strongs: 'H7430', position: 11 },
  { id: 'Gen.9.2.12', language: 'hebrew', text: 'הָֽאֲדָמָ֛ה', transliteration: 'hāʾăḏāmāh', lemma: 'אֲדָמָה', lemmaTranslit: 'ʾăḏāmāh', gloss: 'the ground', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H127', position: 12 },
  { id: 'Gen.9.2.13', language: 'hebrew', text: 'וּֽבְכָל־דְּגֵ֥י', transliteration: 'ûḇəḵāl-dəḡê', lemma: 'דָּג', lemmaTranslit: 'dāḡ', gloss: 'and upon all fish of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H1709', position: 13 },
  { id: 'Gen.9.2.14', language: 'hebrew', text: 'הַיָּ֖ם', transliteration: 'hayyām', lemma: 'יָם', lemmaTranslit: 'yām', gloss: 'the sea', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3220', position: 14 },
  { id: 'Gen.9.2.15', language: 'hebrew', text: 'בְּיֶדְכֶ֥ם', transliteration: 'bəyeḏḵem', lemma: 'יָד', lemmaTranslit: 'yāḏ', gloss: 'into your hand', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H3027', position: 15 },
  { id: 'Gen.9.2.16', language: 'hebrew', text: 'נִתָּֽנוּ', transliteration: 'nittānû', lemma: 'נָתַן', lemmaTranslit: 'nāṯan', gloss: 'they are given', morphology: { pos: 'verb', person: '3', gender: 'common', number: 'plural', tense: 'perfect', stem: 'niphal', rawCode: 'VNp3cp' }, strongs: 'H5414', position: 16 },
];

export const genesis9_2_translation: VerseTranslation = {
  verseRef: 'Gen.9.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: '"And the fear of you and the dread of you shall be upon all beasts of the earth and upon all birds of the heavens, upon all that creeps on the ground and upon all fish of the sea; into your hand they are given."', spans: [{ id: 'Gen.9.2.en.lit.0', text: 'And the fear of you...', position: 0, sourceTokenIds: ['Gen.9.2.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"The fear and dread of you will fall on all the beasts of the earth, all the birds in the sky, every creature that moves along the ground, and all the fish in the sea; they are given into your hands."', spans: [{ id: 'Gen.9.2.en.idi.0', text: 'The fear and dread...', position: 0, sourceTokenIds: ['Gen.9.2.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis9_2_notes: StudyNote[] = [
  { id: 'Gen.9.2.note.1', verseRef: 'Gen.9.2', sourceTokenIds: ['Gen.9.2.0', 'Gen.9.2.1'], category: 'theological', title: 'Fear and Dread', content: 'Unlike Eden where humans and animals lived in harmony (Gen 2:19-20), the post-flood world introduces mora and chittit (fear and dread) between humans and animals. This suggests a disruption in the original created order, perhaps anticipating the permission to eat meat (v. 3).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 9:3
export const genesis9_3_tokens: SourceToken[] = [
  { id: 'Gen.9.3.0', language: 'hebrew', text: 'כָּל־רֶ֨מֶשׂ֙', transliteration: 'kāl-remeś', lemma: 'רֶמֶשׂ', lemmaTranslit: 'remeś', gloss: 'Every moving thing', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H7431', position: 0 },
  { id: 'Gen.9.3.1', language: 'hebrew', text: 'אֲשֶׁ֣ר', transliteration: 'ʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'that', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 1 },
  { id: 'Gen.9.3.2', language: 'hebrew', text: 'הוּא־חַ֔י', transliteration: 'hûʾ-ḥay', lemma: 'חַי', lemmaTranslit: 'ḥay', gloss: 'is living', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', rawCode: 'Ajmsa' }, strongs: 'H2416', position: 2 },
  { id: 'Gen.9.3.3', language: 'hebrew', text: 'לָכֶ֥ם', transliteration: 'lāḵem', lemma: 'לְ', lemmaTranslit: 'lə', gloss: 'to you', morphology: { pos: 'preposition', rawCode: 'RPs2mp' }, strongs: 'H', position: 3 },
  { id: 'Gen.9.3.4', language: 'hebrew', text: 'יִהְיֶ֖ה', transliteration: 'yihyeh', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'shall be', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi3ms' }, strongs: 'H1961', position: 4 },
  { id: 'Gen.9.3.5', language: 'hebrew', text: 'לְאָכְלָ֑ה', transliteration: 'ləʾāḵəlāh', lemma: 'אָכְלָה', lemmaTranslit: 'ʾāḵəlāh', gloss: 'for food', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H402', position: 5 },
  { id: 'Gen.9.3.6', language: 'hebrew', text: 'כְּיֶ֣רֶק', transliteration: 'kəyereq', lemma: 'יֶרֶק', lemmaTranslit: 'yereq', gloss: 'as the green', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H3418', position: 6 },
  { id: 'Gen.9.3.7', language: 'hebrew', text: 'עֵ֔שֶׂב', transliteration: 'ʿēśeḇ', lemma: 'עֵשֶׂב', lemmaTranslit: 'ʿēśeḇ', gloss: 'plants', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H6212', position: 7 },
  { id: 'Gen.9.3.8', language: 'hebrew', text: 'נָתַ֥תִּי', transliteration: 'nāṯattî', lemma: 'נָתַן', lemmaTranslit: 'nāṯan', gloss: 'I have given', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp1cs' }, strongs: 'H5414', position: 8 },
  { id: 'Gen.9.3.9', language: 'hebrew', text: 'לָכֶ֖ם', transliteration: 'lāḵem', lemma: 'לְ', lemmaTranslit: 'lə', gloss: 'to you', morphology: { pos: 'preposition', rawCode: 'RPs2mp' }, strongs: 'H', position: 9 },
  { id: 'Gen.9.3.10', language: 'hebrew', text: 'אֶת־כֹּֽל', transliteration: 'ʾeṯ-kōl', lemma: 'כֹּל', lemmaTranslit: 'kōl', gloss: 'all', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3605', position: 10 },
];

export const genesis9_3_translation: VerseTranslation = {
  verseRef: 'Gen.9.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: '"Every moving thing that is living shall be to you for food; as the green plants, I have given to you all."', spans: [{ id: 'Gen.9.3.en.lit.0', text: 'Every moving thing...', position: 0, sourceTokenIds: ['Gen.9.3.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"Everything that lives and moves about will be food for you. Just as I gave you the green plants, I now give you everything."', spans: [{ id: 'Gen.9.3.en.idi.0', text: 'Everything that lives...', position: 0, sourceTokenIds: ['Gen.9.3.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis9_3_notes: StudyNote[] = [
  { id: 'Gen.9.3.note.1', verseRef: 'Gen.9.3', sourceTokenIds: ['Gen.9.3.0', 'Gen.9.3.2', 'Gen.9.3.5'], category: 'theological', title: 'Permission to Eat Meat', content: 'In Gen 1:29-30, only plants were given for food. Now meat is permitted. Whether this represents a concession to human sinfulness or was always God\'s eventual plan is debated. This permission comes with restrictions (v. 4) - blood is prohibited.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 9:4
export const genesis9_4_tokens: SourceToken[] = [
  { id: 'Gen.9.4.0', language: 'hebrew', text: 'אַךְ־בָּשָׂ֕ר', transliteration: 'ʾaḵ-bāśār', lemma: 'בָּשָׂר', lemmaTranslit: 'bāśār', gloss: 'Only flesh', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H1320', position: 0 },
  { id: 'Gen.9.4.1', language: 'hebrew', text: 'בְּנַפְשׁ֥וֹ', transliteration: 'bənap̄šô', lemma: 'נֶפֶשׁ', lemmaTranslit: 'nep̄eš', gloss: 'with its life', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H5315', position: 1 },
  { id: 'Gen.9.4.2', language: 'hebrew', text: 'דָמ֖וֹ', transliteration: 'ḏāmô', lemma: 'דָּם', lemmaTranslit: 'dām', gloss: 'its blood', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H1818', position: 2 },
  { id: 'Gen.9.4.3', language: 'hebrew', text: 'לֹ֥א', transliteration: 'lōʾ', lemma: 'לֹא', lemmaTranslit: 'lōʾ', gloss: 'not', morphology: { pos: 'adverb', rawCode: 'Tn' }, strongs: 'H3808', position: 3 },
  { id: 'Gen.9.4.4', language: 'hebrew', text: 'תֹאכֵֽלוּ', transliteration: 'ṯōʾḵēlû', lemma: 'אָכַל', lemmaTranslit: 'ʾāḵal', gloss: 'shall you eat', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi2mp' }, strongs: 'H398', position: 4 },
];

export const genesis9_4_translation: VerseTranslation = {
  verseRef: 'Gen.9.4',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: '"Only flesh with its life—its blood—you shall not eat."', spans: [{ id: 'Gen.9.4.en.lit.0', text: 'Only flesh with its life...', position: 0, sourceTokenIds: ['Gen.9.4.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"But you must not eat meat that has its lifeblood still in it."', spans: [{ id: 'Gen.9.4.en.idi.0', text: 'But you must not eat meat...', position: 0, sourceTokenIds: ['Gen.9.4.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis9_4_notes: StudyNote[] = [
  { id: 'Gen.9.4.note.1', verseRef: 'Gen.9.4', sourceTokenIds: ['Gen.9.4.1', 'Gen.9.4.2'], category: 'theological', title: 'Blood is Life', content: 'The Hebrew construction "with its nephesh, its blood" equates blood with nephesh (life/soul). This fundamental principle underlies all biblical blood prohibitions (Lev 17:11-14) and the sacrificial system - blood represents life, which belongs to God alone.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.9.4.note.2', verseRef: 'Gen.9.4', sourceTokenIds: ['Gen.9.4.0'], category: 'cultural', title: 'Universal Prohibition', content: 'This command is given to all humanity through Noah, making it a universal moral law, not just a Mosaic regulation. The Jerusalem Council (Acts 15:20, 29) affirmed blood prohibition for Gentile believers, citing this universal Noahic law.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 9:5
export const genesis9_5_tokens: SourceToken[] = [
  { id: 'Gen.9.5.0', language: 'hebrew', text: 'וְאַ֨ךְ', transliteration: 'wəʾaḵ', lemma: 'אַךְ', lemmaTranslit: 'ʾaḵ', gloss: 'And surely', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H389', position: 0 },
  { id: 'Gen.9.5.1', language: 'hebrew', text: 'אֶת־דִּמְכֶ֧ם', transliteration: 'ʾeṯ-dimḵem', lemma: 'דָּם', lemmaTranslit: 'dām', gloss: 'your blood', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H1818', position: 1 },
  { id: 'Gen.9.5.2', language: 'hebrew', text: 'לְנַפְשֹׁתֵיכֶ֖ם', transliteration: 'lənap̄šōṯêḵem', lemma: 'נֶפֶשׁ', lemmaTranslit: 'nep̄eš', gloss: 'for your lives', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'construct', rawCode: 'Ncfpc' }, strongs: 'H5315', position: 2 },
  { id: 'Gen.9.5.3', language: 'hebrew', text: 'אֶדְרֹ֑שׁ', transliteration: 'ʾeḏrōš', lemma: 'דָּרַשׁ', lemmaTranslit: 'dāraš', gloss: 'I will require', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi1cs' }, strongs: 'H1875', position: 3 },
  { id: 'Gen.9.5.4', language: 'hebrew', text: 'מִיַּ֨ד', transliteration: 'miyyaḏ', lemma: 'יָד', lemmaTranslit: 'yāḏ', gloss: 'from the hand of', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H3027', position: 4 },
  { id: 'Gen.9.5.5', language: 'hebrew', text: 'כָּל־חַיָּ֤ה', transliteration: 'kāl-ḥayyāh', lemma: 'חַיָּה', lemmaTranslit: 'ḥayyāh', gloss: 'every beast', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H2416', position: 5 },
  { id: 'Gen.9.5.6', language: 'hebrew', text: 'אֶדְרְשֶׁ֔נּוּ', transliteration: 'ʾeḏrəšennû', lemma: 'דָּרַשׁ', lemmaTranslit: 'dāraš', gloss: 'I will require it', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi1cs' }, strongs: 'H1875', position: 6 },
  { id: 'Gen.9.5.7', language: 'hebrew', text: 'וּמִיַּ֣ד', transliteration: 'ûmiyyaḏ', lemma: 'יָד', lemmaTranslit: 'yāḏ', gloss: 'and from the hand of', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H3027', position: 7 },
  { id: 'Gen.9.5.8', language: 'hebrew', text: 'הָֽאָדָ֗ם', transliteration: 'hāʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'man', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 8 },
  { id: 'Gen.9.5.9', language: 'hebrew', text: 'מִיַּד֙', transliteration: 'miyyaḏ', lemma: 'יָד', lemmaTranslit: 'yāḏ', gloss: 'from the hand of', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H3027', position: 9 },
  { id: 'Gen.9.5.10', language: 'hebrew', text: 'אִ֣ישׁ', transliteration: 'ʾîš', lemma: 'אִישׁ', lemmaTranslit: 'ʾîš', gloss: 'a man', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H376', position: 10 },
  { id: 'Gen.9.5.11', language: 'hebrew', text: 'אָחִ֔יו', transliteration: 'ʾāḥîw', lemma: 'אָח', lemmaTranslit: 'ʾāḥ', gloss: 'his brother', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H251', position: 11 },
  { id: 'Gen.9.5.12', language: 'hebrew', text: 'אֶדְרֹ֖שׁ', transliteration: 'ʾeḏrōš', lemma: 'דָּרַשׁ', lemmaTranslit: 'dāraš', gloss: 'I will require', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi1cs' }, strongs: 'H1875', position: 12 },
  { id: 'Gen.9.5.13', language: 'hebrew', text: 'אֶת־נֶ֥פֶשׁ', transliteration: 'ʾeṯ-nep̄eš', lemma: 'נֶפֶשׁ', lemmaTranslit: 'nep̄eš', gloss: 'the life of', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H5315', position: 13 },
  { id: 'Gen.9.5.14', language: 'hebrew', text: 'הָֽאָדָֽם', transliteration: 'hāʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'man', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 14 },
];

export const genesis9_5_translation: VerseTranslation = {
  verseRef: 'Gen.9.5',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: '"And surely your blood for your lives I will require; from the hand of every beast I will require it, and from the hand of man—from the hand of a man\'s brother—I will require the life of man."', spans: [{ id: 'Gen.9.5.en.lit.0', text: 'And surely your blood...', position: 0, sourceTokenIds: ['Gen.9.5.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"And for your lifeblood I will surely demand an accounting. I will demand an accounting from every animal. And from each human being, too, I will demand an accounting for the life of another human being."', spans: [{ id: 'Gen.9.5.en.idi.0', text: 'And for your lifeblood...', position: 0, sourceTokenIds: ['Gen.9.5.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis9_5_notes: StudyNote[] = [
  { id: 'Gen.9.5.note.1', verseRef: 'Gen.9.5', sourceTokenIds: ['Gen.9.5.3', 'Gen.9.5.6', 'Gen.9.5.12'], category: 'lexical', title: 'I Will Require', content: 'The verb darash (דָּרַשׁ) "require/demand" appears three times, emphasizing God\'s insistence on accountability for bloodshed. God will hold both animals (cf. Ex 21:28-29) and humans responsible for taking human life.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.9.5.note.2', verseRef: 'Gen.9.5', sourceTokenIds: ['Gen.9.5.10', 'Gen.9.5.11'], category: 'theological', title: 'Brother\'s Keeper', content: 'The phrase "a man\'s brother" (ish achiv) echoes Cain\'s murder of Abel (Gen 4:8-10). The blood of Abel cried from the ground; now God formally institutes accountability for murder. We are indeed our brother\'s keeper.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 9:6
export const genesis9_6_tokens: SourceToken[] = [
  { id: 'Gen.9.6.0', language: 'hebrew', text: 'שֹׁפֵךְ֙', transliteration: 'šōp̄ēḵ', lemma: 'שָׁפַךְ', lemmaTranslit: 'šāp̄aḵ', gloss: 'Whoever sheds', morphology: { pos: 'verb', tense: 'participle', stem: 'qal', rawCode: 'VqPmsc' }, strongs: 'H8210', position: 0 },
  { id: 'Gen.9.6.1', language: 'hebrew', text: 'דַּ֣ם', transliteration: 'dam', lemma: 'דָּם', lemmaTranslit: 'dām', gloss: 'blood of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H1818', position: 1 },
  { id: 'Gen.9.6.2', language: 'hebrew', text: 'הָֽאָדָ֔ם', transliteration: 'hāʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'man', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 2 },
  { id: 'Gen.9.6.3', language: 'hebrew', text: 'בָּֽאָדָ֖ם', transliteration: 'bāʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'by man', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 3 },
  { id: 'Gen.9.6.4', language: 'hebrew', text: 'דָּמ֣וֹ', transliteration: 'dāmô', lemma: 'דָּם', lemmaTranslit: 'dām', gloss: 'his blood', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H1818', position: 4 },
  { id: 'Gen.9.6.5', language: 'hebrew', text: 'יִשָּׁפֵ֑ךְ', transliteration: 'yiššāp̄ēḵ', lemma: 'שָׁפַךְ', lemmaTranslit: 'šāp̄aḵ', gloss: 'shall be shed', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'niphal', rawCode: 'VNi3ms' }, strongs: 'H8210', position: 5 },
  { id: 'Gen.9.6.6', language: 'hebrew', text: 'כִּ֚י', transliteration: 'kî', lemma: 'כִּי', lemmaTranslit: 'kî', gloss: 'for', morphology: { pos: 'conjunction', rawCode: 'Cc' }, strongs: 'H3588', position: 6 },
  { id: 'Gen.9.6.7', language: 'hebrew', text: 'בְּצֶ֣לֶם', transliteration: 'bəṣelem', lemma: 'צֶלֶם', lemmaTranslit: 'ṣelem', gloss: 'in the image of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H6754', position: 7 },
  { id: 'Gen.9.6.8', language: 'hebrew', text: 'אֱלֹהִ֔ים', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H430', position: 8 },
  { id: 'Gen.9.6.9', language: 'hebrew', text: 'עָשָׂ֖ה', transliteration: 'ʿāśāh', lemma: 'עָשָׂה', lemmaTranslit: 'ʿāśāh', gloss: 'He made', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H6213', position: 9 },
  { id: 'Gen.9.6.10', language: 'hebrew', text: 'אֶת־הָאָדָֽם', transliteration: 'ʾeṯ-hāʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'man', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 10 },
];

export const genesis9_6_translation: VerseTranslation = {
  verseRef: 'Gen.9.6',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: '"Whoever sheds the blood of man, by man shall his blood be shed, for in the image of God He made man."', spans: [{ id: 'Gen.9.6.en.lit.0', text: 'Whoever sheds the blood...', position: 0, sourceTokenIds: ['Gen.9.6.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"Whoever sheds human blood, by humans shall their blood be shed; for in the image of God has God made mankind."', spans: [{ id: 'Gen.9.6.en.idi.0', text: 'Whoever sheds human blood...', position: 0, sourceTokenIds: ['Gen.9.6.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis9_6_notes: StudyNote[] = [
  { id: 'Gen.9.6.note.1', verseRef: 'Gen.9.6', sourceTokenIds: ['Gen.9.6.0', 'Gen.9.6.1', 'Gen.9.6.2', 'Gen.9.6.3', 'Gen.9.6.4', 'Gen.9.6.5'], category: 'grammatical', title: 'Poetic Chiasm', content: 'The Hebrew forms a perfect chiasm (ABCCBA): shofekh / dam / ha\'adam / ba\'adam / damo / yishafekh. "Whoever sheds / blood of / man / by man / his blood / shall be shed." This literary structure emphasizes reciprocal justice.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.9.6.note.2', verseRef: 'Gen.9.6', sourceTokenIds: ['Gen.9.6.7', 'Gen.9.6.8'], category: 'theological', title: 'Image of God', content: 'The rationale for capital punishment is the imago Dei (image of God). Murder is uniquely heinous because it attacks God\'s image-bearers. This implies human dignity continues after the Fall - the image is marred but not erased.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 9:7
export const genesis9_7_tokens: SourceToken[] = [
  { id: 'Gen.9.7.0', language: 'hebrew', text: 'וְאַתֶּ֖ם', transliteration: 'wəʾattem', lemma: 'אַתֶּם', lemmaTranslit: 'ʾattem', gloss: 'And you', morphology: { pos: 'pronoun', person: '2', gender: 'masculine', number: 'plural', rawCode: 'Pp2mp' }, strongs: 'H859', position: 0 },
  { id: 'Gen.9.7.1', language: 'hebrew', text: 'פְּר֣וּ', transliteration: 'pərû', lemma: 'פָּרָה', lemmaTranslit: 'pārāh', gloss: 'be fruitful', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'plural', mood: 'imperative', stem: 'qal', rawCode: 'Vqv2mp' }, strongs: 'H6509', position: 1 },
  { id: 'Gen.9.7.2', language: 'hebrew', text: 'וּרְב֑וּ', transliteration: 'ûrəḇû', lemma: 'רָבָה', lemmaTranslit: 'rāḇāh', gloss: 'and multiply', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'plural', mood: 'imperative', stem: 'qal', rawCode: 'Vqv2mp' }, strongs: 'H7235', position: 2 },
  { id: 'Gen.9.7.3', language: 'hebrew', text: 'שִׁרְצ֥וּ', transliteration: 'širṣû', lemma: 'שָׁרַץ', lemmaTranslit: 'šāraṣ', gloss: 'swarm', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'plural', mood: 'imperative', stem: 'qal', rawCode: 'Vqv2mp' }, strongs: 'H8317', position: 3 },
  { id: 'Gen.9.7.4', language: 'hebrew', text: 'בָאָ֖רֶץ', transliteration: 'ḇāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'on the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 4 },
  { id: 'Gen.9.7.5', language: 'hebrew', text: 'וּרְבוּ־בָֽהּ', transliteration: 'ûrəḇû-ḇāh', lemma: 'רָבָה', lemmaTranslit: 'rāḇāh', gloss: 'and multiply in it', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'plural', mood: 'imperative', stem: 'qal', rawCode: 'Vqv2mp' }, strongs: 'H7235', position: 5 },
];

export const genesis9_7_translation: VerseTranslation = {
  verseRef: 'Gen.9.7',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: '"And you, be fruitful and multiply; swarm on the earth and multiply in it."', spans: [{ id: 'Gen.9.7.en.lit.0', text: 'And you, be fruitful...', position: 0, sourceTokenIds: ['Gen.9.7.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"As for you, be fruitful and increase in number; multiply on the earth and increase upon it."', spans: [{ id: 'Gen.9.7.en.idi.0', text: 'As for you, be fruitful...', position: 0, sourceTokenIds: ['Gen.9.7.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis9_7_notes: StudyNote[] = [
  { id: 'Gen.9.7.note.1', verseRef: 'Gen.9.7', sourceTokenIds: ['Gen.9.7.1', 'Gen.9.7.2'], category: 'theological', title: 'Inclusio', content: 'The repetition of "be fruitful and multiply" from v. 1 forms an inclusio (bracketing structure) around the covenant stipulations (vv. 2-6). The commands about dominion, diet, and blood are framed by blessing and mandate to fill the earth.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.9.7.note.2', verseRef: 'Gen.9.7', sourceTokenIds: ['Gen.9.7.3'], category: 'lexical', title: 'Swarm (Shirtsu)', content: 'The verb shirtsu (שִׁרְצוּ) "swarm" is usually used of animals (Gen 1:20-21, 7:21). Here applied to humans, it emphasizes explosive multiplication - humanity is to fill the earth abundantly, like the creatures that emerged from the ark.', confidence: 'medium', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Export all verses
export const genesis9_1_7_verses = [
  { ref: 'Gen.9.1', sourceTokens: genesis9_1_tokens, translation: genesis9_1_translation, notes: genesis9_1_notes },
  { ref: 'Gen.9.2', sourceTokens: genesis9_2_tokens, translation: genesis9_2_translation, notes: genesis9_2_notes },
  { ref: 'Gen.9.3', sourceTokens: genesis9_3_tokens, translation: genesis9_3_translation, notes: genesis9_3_notes },
  { ref: 'Gen.9.4', sourceTokens: genesis9_4_tokens, translation: genesis9_4_translation, notes: genesis9_4_notes },
  { ref: 'Gen.9.5', sourceTokens: genesis9_5_tokens, translation: genesis9_5_translation, notes: genesis9_5_notes },
  { ref: 'Gen.9.6', sourceTokens: genesis9_6_tokens, translation: genesis9_6_translation, notes: genesis9_6_notes },
  { ref: 'Gen.9.7', sourceTokens: genesis9_7_tokens, translation: genesis9_7_translation, notes: genesis9_7_notes },
];
