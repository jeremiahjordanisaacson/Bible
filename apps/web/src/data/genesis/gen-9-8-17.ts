/**
 * Genesis 9:8-17 - The Rainbow Covenant
 * Hebrew morphological data with study annotations
 */

import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

// Genesis 9:8
export const genesis9_8_tokens: SourceToken[] = [
  { id: 'Gen.9.8.0', language: 'hebrew', text: 'וַיֹּ֤אמֶר', transliteration: 'wayyōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'And said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H559', position: 0 },
  { id: 'Gen.9.8.1', language: 'hebrew', text: 'אֱלֹהִים֙', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H430', position: 1 },
  { id: 'Gen.9.8.2', language: 'hebrew', text: 'אֶל־נֹ֔חַ', transliteration: 'ʾel-nōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'to Noah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 2 },
  { id: 'Gen.9.8.3', language: 'hebrew', text: 'וְאֶל־בָּנָ֥יו', transliteration: 'wəʾel-bānāyw', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'and to his sons', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H1121', position: 3 },
  { id: 'Gen.9.8.4', language: 'hebrew', text: 'אִתּ֖וֹ', transliteration: 'ʾittô', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: 'with him', morphology: { pos: 'preposition', rawCode: 'Ps3ms' }, strongs: 'H854', position: 4 },
  { id: 'Gen.9.8.5', language: 'hebrew', text: 'לֵאמֹֽר', transliteration: 'lēʾmōr', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'saying', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'VqIc' }, strongs: 'H559', position: 5 },
];

export const genesis9_8_translation: VerseTranslation = {
  verseRef: 'Gen.9.8',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And God said to Noah and to his sons with him, saying:', spans: [{ id: 'Gen.9.8.en.lit.0', text: 'And God said to Noah...', position: 0, sourceTokenIds: ['Gen.9.8.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Then God said to Noah and to his sons with him:', spans: [{ id: 'Gen.9.8.en.idi.0', text: 'Then God said to Noah...', position: 0, sourceTokenIds: ['Gen.9.8.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis9_8_notes: StudyNote[] = [];

// Genesis 9:9
export const genesis9_9_tokens: SourceToken[] = [
  { id: 'Gen.9.9.0', language: 'hebrew', text: 'וַאֲנִ֕י', transliteration: 'waʾănî', lemma: 'אֲנִי', lemmaTranslit: 'ʾănî', gloss: 'And I', morphology: { pos: 'pronoun', person: '1', gender: 'common', number: 'singular', rawCode: 'Pp1cs' }, strongs: 'H589', position: 0 },
  { id: 'Gen.9.9.1', language: 'hebrew', text: 'הִנְנִ֥י', transliteration: 'hinnənî', lemma: 'הִנֵּה', lemmaTranslit: 'hinnēh', gloss: 'behold I', morphology: { pos: 'particle', rawCode: 'Td' }, strongs: 'H2009', position: 1 },
  { id: 'Gen.9.9.2', language: 'hebrew', text: 'מֵקִ֛ים', transliteration: 'mēqîm', lemma: 'קוּם', lemmaTranslit: 'qûm', gloss: 'am establishing', morphology: { pos: 'verb', tense: 'participle', stem: 'hiphil', rawCode: 'VhPmsc' }, strongs: 'H6965', position: 2 },
  { id: 'Gen.9.9.3', language: 'hebrew', text: 'אֶת־בְּרִיתִ֖י', transliteration: 'ʾeṯ-bərîṯî', lemma: 'בְּרִית', lemmaTranslit: 'bərîṯ', gloss: 'my covenant', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H1285', position: 3 },
  { id: 'Gen.9.9.4', language: 'hebrew', text: 'אִתְּכֶ֑ם', transliteration: 'ʾittəḵem', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: 'with you', morphology: { pos: 'preposition', rawCode: 'Ps2mp' }, strongs: 'H854', position: 4 },
  { id: 'Gen.9.9.5', language: 'hebrew', text: 'וְאֶֽת־זַרְעֲכֶ֖ם', transliteration: 'wəʾeṯ-zarʿăḵem', lemma: 'זֶרַע', lemmaTranslit: 'zeraʿ', gloss: 'and with your offspring', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H2233', position: 5 },
  { id: 'Gen.9.9.6', language: 'hebrew', text: 'אַחֲרֵיכֶֽם', transliteration: 'ʾaḥărêḵem', lemma: 'אַחַר', lemmaTranslit: 'ʾaḥar', gloss: 'after you', morphology: { pos: 'preposition', rawCode: 'RPs2mp' }, strongs: 'H310', position: 6 },
];

export const genesis9_9_translation: VerseTranslation = {
  verseRef: 'Gen.9.9',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: '"And I, behold I am establishing my covenant with you and with your offspring after you,"', spans: [{ id: 'Gen.9.9.en.lit.0', text: 'And I, behold I am establishing...', position: 0, sourceTokenIds: ['Gen.9.9.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"I now establish my covenant with you and with your descendants after you"', spans: [{ id: 'Gen.9.9.en.idi.0', text: 'I now establish my covenant...', position: 0, sourceTokenIds: ['Gen.9.9.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis9_9_notes: StudyNote[] = [
  { id: 'Gen.9.9.note.1', verseRef: 'Gen.9.9', sourceTokenIds: ['Gen.9.9.3'], category: 'theological', title: 'Covenant (Berit)', content: 'This is the first explicit covenant ceremony in Scripture, though berit was mentioned in 6:18. The Noahic covenant is unique: it\'s unconditional, universal (all humanity and creation), and perpetual. No human response is required for its continuation.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 9:10
export const genesis9_10_tokens: SourceToken[] = [
  { id: 'Gen.9.10.0', language: 'hebrew', text: 'וְאֵ֨ת', transliteration: 'wəʾēṯ', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: 'and with', morphology: { pos: 'particle', rawCode: 'To' }, strongs: 'H853', position: 0 },
  { id: 'Gen.9.10.1', language: 'hebrew', text: 'כָּל־נֶ֤פֶשׁ', transliteration: 'kāl-nep̄eš', lemma: 'נֶפֶשׁ', lemmaTranslit: 'nep̄eš', gloss: 'every living creature', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H5315', position: 1 },
  { id: 'Gen.9.10.2', language: 'hebrew', text: 'הַחַיָּה֙', transliteration: 'haḥayyāh', lemma: 'חַי', lemmaTranslit: 'ḥay', gloss: 'the living', morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', rawCode: 'Ajfsa' }, strongs: 'H2416', position: 2 },
  { id: 'Gen.9.10.3', language: 'hebrew', text: 'אֲשֶׁ֣ר', transliteration: 'ʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'that', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 3 },
  { id: 'Gen.9.10.4', language: 'hebrew', text: 'אִתְּכֶ֔ם', transliteration: 'ʾittəḵem', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: 'with you', morphology: { pos: 'preposition', rawCode: 'Ps2mp' }, strongs: 'H854', position: 4 },
  { id: 'Gen.9.10.5', language: 'hebrew', text: 'בָּע֧וֹף', transliteration: 'bāʿôp̄', lemma: 'עוֹף', lemmaTranslit: 'ʿôp̄', gloss: 'the birds', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H5775', position: 5 },
  { id: 'Gen.9.10.6', language: 'hebrew', text: 'בַּבְּהֵמָ֛ה', transliteration: 'babbəhēmāh', lemma: 'בְּהֵמָה', lemmaTranslit: 'bəhēmāh', gloss: 'the livestock', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H929', position: 6 },
  { id: 'Gen.9.10.7', language: 'hebrew', text: 'וּבְכָל־חַיַּ֥ת', transliteration: 'ûḇəḵāl-ḥayyaṯ', lemma: 'חַיָּה', lemmaTranslit: 'ḥayyāh', gloss: 'and every beast of', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H2416', position: 7 },
  { id: 'Gen.9.10.8', language: 'hebrew', text: 'הָאָ֖רֶץ', transliteration: 'hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 8 },
  { id: 'Gen.9.10.9', language: 'hebrew', text: 'אִתְּכֶ֑ם', transliteration: 'ʾittəḵem', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: 'with you', morphology: { pos: 'preposition', rawCode: 'Ps2mp' }, strongs: 'H854', position: 9 },
  { id: 'Gen.9.10.10', language: 'hebrew', text: 'מִכֹּל֙', transliteration: 'mikkōl', lemma: 'כֹּל', lemmaTranslit: 'kōl', gloss: 'from all', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H3605', position: 10 },
  { id: 'Gen.9.10.11', language: 'hebrew', text: 'יֹצְאֵ֣י', transliteration: 'yōṣəʾê', lemma: 'יָצָא', lemmaTranslit: 'yāṣāʾ', gloss: 'those coming out of', morphology: { pos: 'verb', tense: 'participle', stem: 'qal', rawCode: 'VqPmpc' }, strongs: 'H3318', position: 11 },
  { id: 'Gen.9.10.12', language: 'hebrew', text: 'הַתֵּבָ֔ה', transliteration: 'hattēḇāh', lemma: 'תֵּבָה', lemmaTranslit: 'tēḇāh', gloss: 'the ark', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8392', position: 12 },
  { id: 'Gen.9.10.13', language: 'hebrew', text: 'לְכֹ֖ל', transliteration: 'ləḵōl', lemma: 'כֹּל', lemmaTranslit: 'kōl', gloss: 'to every', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H3605', position: 13 },
  { id: 'Gen.9.10.14', language: 'hebrew', text: 'חַיַּ֥ת', transliteration: 'ḥayyaṯ', lemma: 'חַיָּה', lemmaTranslit: 'ḥayyāh', gloss: 'beast of', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H2416', position: 14 },
  { id: 'Gen.9.10.15', language: 'hebrew', text: 'הָאָֽרֶץ', transliteration: 'hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 15 },
];

export const genesis9_10_translation: VerseTranslation = {
  verseRef: 'Gen.9.10',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: '"and with every living creature that is with you: the birds, the livestock, and every beast of the earth with you—from all those coming out of the ark to every beast of the earth."', spans: [{ id: 'Gen.9.10.en.lit.0', text: 'and with every living creature...', position: 0, sourceTokenIds: ['Gen.9.10.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"and with every living creature that was with you—the birds, the livestock and all the wild animals, all those that came out of the ark with you—every living creature on earth."', spans: [{ id: 'Gen.9.10.en.idi.0', text: 'and with every living creature...', position: 0, sourceTokenIds: ['Gen.9.10.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis9_10_notes: StudyNote[] = [
  { id: 'Gen.9.10.note.1', verseRef: 'Gen.9.10', sourceTokenIds: ['Gen.9.10.1', 'Gen.9.10.2'], category: 'theological', title: 'Cosmic Covenant', content: 'The Noahic covenant includes all creation - birds, livestock, wild animals. This cosmic scope anticipates the eschatological restoration when all creation will be renewed (Rom 8:19-22). God\'s redemptive purposes encompass the entire created order.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 9:11
export const genesis9_11_tokens: SourceToken[] = [
  { id: 'Gen.9.11.0', language: 'hebrew', text: 'וַהֲקִמֹתִ֤י', transliteration: 'wahăqimōṯî', lemma: 'קוּם', lemmaTranslit: 'qûm', gloss: 'And I establish', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'perfect', stem: 'hiphil', rawCode: 'Vhp1cs' }, strongs: 'H6965', position: 0 },
  { id: 'Gen.9.11.1', language: 'hebrew', text: 'אֶת־בְּרִיתִי֙', transliteration: 'ʾeṯ-bərîṯî', lemma: 'בְּרִית', lemmaTranslit: 'bərîṯ', gloss: 'my covenant', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H1285', position: 1 },
  { id: 'Gen.9.11.2', language: 'hebrew', text: 'אִתְּכֶ֔ם', transliteration: 'ʾittəḵem', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: 'with you', morphology: { pos: 'preposition', rawCode: 'Ps2mp' }, strongs: 'H854', position: 2 },
  { id: 'Gen.9.11.3', language: 'hebrew', text: 'וְלֹֽא־יִכָּרֵ֧ת', transliteration: 'wəlōʾ-yikkārēṯ', lemma: 'כָּרַת', lemmaTranslit: 'kāraṯ', gloss: 'and not shall be cut off', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'niphal', rawCode: 'VNi3ms' }, strongs: 'H3772', position: 3 },
  { id: 'Gen.9.11.4', language: 'hebrew', text: 'כָּל־בָּשָׂ֛ר', transliteration: 'kāl-bāśār', lemma: 'בָּשָׂר', lemmaTranslit: 'bāśār', gloss: 'all flesh', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H1320', position: 4 },
  { id: 'Gen.9.11.5', language: 'hebrew', text: 'ע֖וֹד', transliteration: 'ʿôḏ', lemma: 'עוֹד', lemmaTranslit: 'ʿôḏ', gloss: 'again', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H5750', position: 5 },
  { id: 'Gen.9.11.6', language: 'hebrew', text: 'מִמֵּ֣י', transliteration: 'mimmê', lemma: 'מַיִם', lemmaTranslit: 'mayim', gloss: 'by the waters of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H4325', position: 6 },
  { id: 'Gen.9.11.7', language: 'hebrew', text: 'הַמַּבּ֑וּל', transliteration: 'hammabbûl', lemma: 'מַבּוּל', lemmaTranslit: 'mabbûl', gloss: 'the flood', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3999', position: 7 },
  { id: 'Gen.9.11.8', language: 'hebrew', text: 'וְלֹֽא־יִהְיֶ֥ה', transliteration: 'wəlōʾ-yihyeh', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'and not shall there be', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi3ms' }, strongs: 'H1961', position: 8 },
  { id: 'Gen.9.11.9', language: 'hebrew', text: 'ע֤וֹד', transliteration: 'ʿôḏ', lemma: 'עוֹד', lemmaTranslit: 'ʿôḏ', gloss: 'again', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H5750', position: 9 },
  { id: 'Gen.9.11.10', language: 'hebrew', text: 'מַבּוּל֙', transliteration: 'mabbûl', lemma: 'מַבּוּל', lemmaTranslit: 'mabbûl', gloss: 'a flood', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3999', position: 10 },
  { id: 'Gen.9.11.11', language: 'hebrew', text: 'לְשַׁחֵ֖ת', transliteration: 'ləšaḥēṯ', lemma: 'שָׁחַת', lemmaTranslit: 'šāḥaṯ', gloss: 'to destroy', morphology: { pos: 'verb', mood: 'infinitive', stem: 'piel', rawCode: 'VpIc' }, strongs: 'H7843', position: 11 },
  { id: 'Gen.9.11.12', language: 'hebrew', text: 'הָאָֽרֶץ', transliteration: 'hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 12 },
];

export const genesis9_11_translation: VerseTranslation = {
  verseRef: 'Gen.9.11',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: '"And I establish my covenant with you: never again shall all flesh be cut off by the waters of the flood, and never again shall there be a flood to destroy the earth."', spans: [{ id: 'Gen.9.11.en.lit.0', text: 'And I establish my covenant...', position: 0, sourceTokenIds: ['Gen.9.11.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"I establish my covenant with you: Never again will all life be destroyed by the waters of a flood; never again will there be a flood to destroy the earth."', spans: [{ id: 'Gen.9.11.en.idi.0', text: 'I establish my covenant...', position: 0, sourceTokenIds: ['Gen.9.11.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis9_11_notes: StudyNote[] = [
  { id: 'Gen.9.11.note.1', verseRef: 'Gen.9.11', sourceTokenIds: ['Gen.9.11.7', 'Gen.9.11.10'], category: 'lexical', title: 'The Flood (Mabbul)', content: 'Hebrew mabbul (מַבּוּל) appears only for Noah\'s flood (12x in Genesis) and once in Ps 29:10. It\'s not the common word for flood. This unique term may derive from roots meaning "to flow" or "to destroy," emphasizing the cosmic catastrophe\'s uniqueness.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 9:12
export const genesis9_12_tokens: SourceToken[] = [
  { id: 'Gen.9.12.0', language: 'hebrew', text: 'וַיֹּ֣אמֶר', transliteration: 'wayyōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'And said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H559', position: 0 },
  { id: 'Gen.9.12.1', language: 'hebrew', text: 'אֱלֹהִ֗ים', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H430', position: 1 },
  { id: 'Gen.9.12.2', language: 'hebrew', text: 'זֹ֤את', transliteration: 'zōʾṯ', lemma: 'זֹאת', lemmaTranslit: 'zōʾṯ', gloss: 'This', morphology: { pos: 'pronoun', rawCode: 'Pdxfs' }, strongs: 'H2063', position: 2 },
  { id: 'Gen.9.12.3', language: 'hebrew', text: 'אוֹת־הַבְּרִית֙', transliteration: 'ʾôṯ-habbərîṯ', lemma: 'בְּרִית', lemmaTranslit: 'bərîṯ', gloss: 'sign of the covenant', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H1285', position: 3 },
  { id: 'Gen.9.12.4', language: 'hebrew', text: 'אֲשֶׁר־אֲנִ֣י', transliteration: 'ʾăšer-ʾănî', lemma: 'אֲנִי', lemmaTranslit: 'ʾănî', gloss: 'which I', morphology: { pos: 'pronoun', person: '1', gender: 'common', number: 'singular', rawCode: 'Pp1cs' }, strongs: 'H589', position: 4 },
  { id: 'Gen.9.12.5', language: 'hebrew', text: 'נֹתֵ֗ן', transliteration: 'nōṯēn', lemma: 'נָתַן', lemmaTranslit: 'nāṯan', gloss: 'am giving', morphology: { pos: 'verb', tense: 'participle', stem: 'qal', rawCode: 'VqPmsc' }, strongs: 'H5414', position: 5 },
  { id: 'Gen.9.12.6', language: 'hebrew', text: 'בֵּינִי֙', transliteration: 'bênî', lemma: 'בֵּין', lemmaTranslit: 'bên', gloss: 'between me', morphology: { pos: 'preposition', rawCode: 'RPs1cs' }, strongs: 'H996', position: 6 },
  { id: 'Gen.9.12.7', language: 'hebrew', text: 'וּבֵ֣ינֵיכֶ֔ם', transliteration: 'ûḇênêḵem', lemma: 'בֵּין', lemmaTranslit: 'bên', gloss: 'and between you', morphology: { pos: 'preposition', rawCode: 'RPs2mp' }, strongs: 'H996', position: 7 },
  { id: 'Gen.9.12.8', language: 'hebrew', text: 'וּבֵ֛ין', transliteration: 'ûḇên', lemma: 'בֵּין', lemmaTranslit: 'bên', gloss: 'and between', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H996', position: 8 },
  { id: 'Gen.9.12.9', language: 'hebrew', text: 'כָּל־נֶ֥פֶשׁ', transliteration: 'kāl-nep̄eš', lemma: 'נֶפֶשׁ', lemmaTranslit: 'nep̄eš', gloss: 'every living creature', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H5315', position: 9 },
  { id: 'Gen.9.12.10', language: 'hebrew', text: 'חַיָּ֖ה', transliteration: 'ḥayyāh', lemma: 'חַי', lemmaTranslit: 'ḥay', gloss: 'living', morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', rawCode: 'Ajfsa' }, strongs: 'H2416', position: 10 },
  { id: 'Gen.9.12.11', language: 'hebrew', text: 'אֲשֶׁ֣ר', transliteration: 'ʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'that', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 11 },
  { id: 'Gen.9.12.12', language: 'hebrew', text: 'אִתְּכֶ֑ם', transliteration: 'ʾittəḵem', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: 'with you', morphology: { pos: 'preposition', rawCode: 'Ps2mp' }, strongs: 'H854', position: 12 },
  { id: 'Gen.9.12.13', language: 'hebrew', text: 'לְדֹרֹ֖ת', transliteration: 'ləḏōrōṯ', lemma: 'דּוֹר', lemmaTranslit: 'dôr', gloss: 'for generations', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H1755', position: 13 },
  { id: 'Gen.9.12.14', language: 'hebrew', text: 'עוֹלָֽם', transliteration: 'ʿôlām', lemma: 'עוֹלָם', lemmaTranslit: 'ʿôlām', gloss: 'eternal', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H5769', position: 14 },
];

export const genesis9_12_translation: VerseTranslation = {
  verseRef: 'Gen.9.12',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And God said, "This is the sign of the covenant which I am giving between me and between you and between every living creature that is with you, for generations eternal:"', spans: [{ id: 'Gen.9.12.en.lit.0', text: 'And God said...', position: 0, sourceTokenIds: ['Gen.9.12.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'And God said, "This is the sign of the covenant I am making between me and you and every living creature with you, a covenant for all generations to come:"', spans: [{ id: 'Gen.9.12.en.idi.0', text: 'And God said...', position: 0, sourceTokenIds: ['Gen.9.12.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis9_12_notes: StudyNote[] = [
  { id: 'Gen.9.12.note.1', verseRef: 'Gen.9.12', sourceTokenIds: ['Gen.9.12.3'], category: 'theological', title: 'Sign (Ot)', content: 'The Hebrew ot (אוֹת) means a visible sign or token. Covenant signs appear throughout Scripture: circumcision for Abraham (Gen 17:11), Sabbath for Israel (Ex 31:13-17). The rainbow is unique as a natural phenomenon made into a divine reminder.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.9.12.note.2', verseRef: 'Gen.9.12', sourceTokenIds: ['Gen.9.12.13', 'Gen.9.12.14'], category: 'lexical', title: 'Eternal Generations', content: 'The phrase ledorot olam (לְדֹרֹת עוֹלָם) "for eternal generations" emphasizes the perpetual nature of this covenant. Unlike Mosaic covenants tied to Israel, this covenant endures as long as the earth exists (cf. 8:22).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 9:13
export const genesis9_13_tokens: SourceToken[] = [
  { id: 'Gen.9.13.0', language: 'hebrew', text: 'אֶת־קַשְׁתִּ֕י', transliteration: 'ʾeṯ-qaštî', lemma: 'קֶשֶׁת', lemmaTranslit: 'qešeṯ', gloss: 'My bow', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H7198', position: 0 },
  { id: 'Gen.9.13.1', language: 'hebrew', text: 'נָתַ֖תִּי', transliteration: 'nāṯattî', lemma: 'נָתַן', lemmaTranslit: 'nāṯan', gloss: 'I have set', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp1cs' }, strongs: 'H5414', position: 1 },
  { id: 'Gen.9.13.2', language: 'hebrew', text: 'בֶּֽעָנָ֑ן', transliteration: 'beʿānān', lemma: 'עָנָן', lemmaTranslit: 'ʿānān', gloss: 'in the cloud', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H6051', position: 2 },
  { id: 'Gen.9.13.3', language: 'hebrew', text: 'וְהָֽיְתָה֙', transliteration: 'wəhāyəṯāh', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'and it shall be', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3fs' }, strongs: 'H1961', position: 3 },
  { id: 'Gen.9.13.4', language: 'hebrew', text: 'לְא֣וֹת', transliteration: 'ləʾôṯ', lemma: 'אוֹת', lemmaTranslit: 'ʾôṯ', gloss: 'for a sign of', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H226', position: 4 },
  { id: 'Gen.9.13.5', language: 'hebrew', text: 'בְּרִ֔ית', transliteration: 'bərîṯ', lemma: 'בְּרִית', lemmaTranslit: 'bərîṯ', gloss: 'covenant', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H1285', position: 5 },
  { id: 'Gen.9.13.6', language: 'hebrew', text: 'בֵּינִ֖י', transliteration: 'bênî', lemma: 'בֵּין', lemmaTranslit: 'bên', gloss: 'between me', morphology: { pos: 'preposition', rawCode: 'RPs1cs' }, strongs: 'H996', position: 6 },
  { id: 'Gen.9.13.7', language: 'hebrew', text: 'וּבֵ֥ין', transliteration: 'ûḇên', lemma: 'בֵּין', lemmaTranslit: 'bên', gloss: 'and between', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H996', position: 7 },
  { id: 'Gen.9.13.8', language: 'hebrew', text: 'הָאָֽרֶץ', transliteration: 'hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 8 },
];

export const genesis9_13_translation: VerseTranslation = {
  verseRef: 'Gen.9.13',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: '"My bow I have set in the cloud, and it shall be for a sign of covenant between me and between the earth."', spans: [{ id: 'Gen.9.13.en.lit.0', text: 'My bow I have set...', position: 0, sourceTokenIds: ['Gen.9.13.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"I have set my rainbow in the clouds, and it will be the sign of the covenant between me and the earth."', spans: [{ id: 'Gen.9.13.en.idi.0', text: 'I have set my rainbow...', position: 0, sourceTokenIds: ['Gen.9.13.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis9_13_notes: StudyNote[] = [
  { id: 'Gen.9.13.note.1', verseRef: 'Gen.9.13', sourceTokenIds: ['Gen.9.13.0'], category: 'lexical', title: 'My Bow (Qashti)', content: 'Hebrew qesheth (קֶשֶׁת) is the ordinary word for a battle bow. Ancient Near Eastern imagery depicted gods with bows as weapons. By placing His "bow" in the sky pointed upward (not toward earth), God symbolically disarms His weapon of judgment. The rainbow reminds God of His covenant of peace.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 9:14-17 (abbreviated for space - similar structure)
export const genesis9_14_tokens: SourceToken[] = [
  { id: 'Gen.9.14.0', language: 'hebrew', text: 'וְהָיָ֕ה', transliteration: 'wəhāyāh', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'And it shall be', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H1961', position: 0 },
  { id: 'Gen.9.14.1', language: 'hebrew', text: 'בְּעַֽנְנִ֥י', transliteration: 'bəʿanənî', lemma: 'עָנָן', lemmaTranslit: 'ʿānān', gloss: 'when I bring clouds', morphology: { pos: 'verb', mood: 'infinitive', stem: 'piel', rawCode: 'VpIc' }, strongs: 'H6049', position: 1 },
  { id: 'Gen.9.14.2', language: 'hebrew', text: 'עָנָ֖ן', transliteration: 'ʿānān', lemma: 'עָנָן', lemmaTranslit: 'ʿānān', gloss: 'a cloud', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H6051', position: 2 },
  { id: 'Gen.9.14.3', language: 'hebrew', text: 'עַל־הָאָ֑רֶץ', transliteration: 'ʿal-hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'over the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 3 },
  { id: 'Gen.9.14.4', language: 'hebrew', text: 'וְנִרְאֲתָ֥ה', transliteration: 'wənirʾăṯāh', lemma: 'רָאָה', lemmaTranslit: 'rāʾāh', gloss: 'and is seen', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'perfect', stem: 'niphal', rawCode: 'VNp3fs' }, strongs: 'H7200', position: 4 },
  { id: 'Gen.9.14.5', language: 'hebrew', text: 'הַקֶּ֖שֶׁת', transliteration: 'haqqešeṯ', lemma: 'קֶשֶׁת', lemmaTranslit: 'qešeṯ', gloss: 'the bow', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H7198', position: 5 },
  { id: 'Gen.9.14.6', language: 'hebrew', text: 'בֶּעָנָֽן', transliteration: 'beʿānān', lemma: 'עָנָן', lemmaTranslit: 'ʿānān', gloss: 'in the cloud', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H6051', position: 6 },
];

export const genesis9_14_translation: VerseTranslation = {
  verseRef: 'Gen.9.14',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: '"And it shall be when I bring clouds over the earth, and the bow is seen in the cloud,"', spans: [{ id: 'Gen.9.14.en.lit.0', text: 'And it shall be...', position: 0, sourceTokenIds: ['Gen.9.14.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"Whenever I bring clouds over the earth and the rainbow appears in the clouds,"', spans: [{ id: 'Gen.9.14.en.idi.0', text: 'Whenever I bring clouds...', position: 0, sourceTokenIds: ['Gen.9.14.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis9_14_notes: StudyNote[] = [];

export const genesis9_15_tokens: SourceToken[] = [
  { id: 'Gen.9.15.0', language: 'hebrew', text: 'וְזָכַרְתִּ֣י', transliteration: 'wəzāḵartî', lemma: 'זָכַר', lemmaTranslit: 'zāḵar', gloss: 'and I will remember', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp1cs' }, strongs: 'H2142', position: 0 },
  { id: 'Gen.9.15.1', language: 'hebrew', text: 'אֶת־בְּרִיתִ֗י', transliteration: 'ʾeṯ-bərîṯî', lemma: 'בְּרִית', lemmaTranslit: 'bərîṯ', gloss: 'my covenant', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H1285', position: 1 },
  { id: 'Gen.9.15.2', language: 'hebrew', text: 'אֲשֶׁ֤ר', transliteration: 'ʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'which', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 2 },
  { id: 'Gen.9.15.3', language: 'hebrew', text: 'בֵּינִי֙', transliteration: 'bênî', lemma: 'בֵּין', lemmaTranslit: 'bên', gloss: 'between me', morphology: { pos: 'preposition', rawCode: 'RPs1cs' }, strongs: 'H996', position: 3 },
  { id: 'Gen.9.15.4', language: 'hebrew', text: 'וּבֵ֣ינֵיכֶ֔ם', transliteration: 'ûḇênêḵem', lemma: 'בֵּין', lemmaTranslit: 'bên', gloss: 'and between you', morphology: { pos: 'preposition', rawCode: 'RPs2mp' }, strongs: 'H996', position: 4 },
  { id: 'Gen.9.15.5', language: 'hebrew', text: 'וּבֵ֛ין', transliteration: 'ûḇên', lemma: 'בֵּין', lemmaTranslit: 'bên', gloss: 'and between', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H996', position: 5 },
  { id: 'Gen.9.15.6', language: 'hebrew', text: 'כָּל־נֶ֥פֶשׁ', transliteration: 'kāl-nep̄eš', lemma: 'נֶפֶשׁ', lemmaTranslit: 'nep̄eš', gloss: 'every living creature', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H5315', position: 6 },
  { id: 'Gen.9.15.7', language: 'hebrew', text: 'חַיָּ֖ה', transliteration: 'ḥayyāh', lemma: 'חַי', lemmaTranslit: 'ḥay', gloss: 'living', morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', rawCode: 'Ajfsa' }, strongs: 'H2416', position: 7 },
  { id: 'Gen.9.15.8', language: 'hebrew', text: 'בְּכָל־בָּשָׂ֑ר', transliteration: 'bəḵāl-bāśār', lemma: 'בָּשָׂר', lemmaTranslit: 'bāśār', gloss: 'of all flesh', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H1320', position: 8 },
  { id: 'Gen.9.15.9', language: 'hebrew', text: 'וְלֹֽא־יִהְיֶ֨ה', transliteration: 'wəlōʾ-yihyeh', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'and not shall be', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi3ms' }, strongs: 'H1961', position: 9 },
  { id: 'Gen.9.15.10', language: 'hebrew', text: 'ע֤וֹד', transliteration: 'ʿôḏ', lemma: 'עוֹד', lemmaTranslit: 'ʿôḏ', gloss: 'again', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H5750', position: 10 },
  { id: 'Gen.9.15.11', language: 'hebrew', text: 'הַמַּ֙יִם֙', transliteration: 'hammayim', lemma: 'מַיִם', lemmaTranslit: 'mayim', gloss: 'the waters', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H4325', position: 11 },
  { id: 'Gen.9.15.12', language: 'hebrew', text: 'לְמַבּ֔וּל', transliteration: 'ləmabbûl', lemma: 'מַבּוּל', lemmaTranslit: 'mabbûl', gloss: 'for a flood', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3999', position: 12 },
  { id: 'Gen.9.15.13', language: 'hebrew', text: 'לְשַׁחֵ֖ת', transliteration: 'ləšaḥēṯ', lemma: 'שָׁחַת', lemmaTranslit: 'šāḥaṯ', gloss: 'to destroy', morphology: { pos: 'verb', mood: 'infinitive', stem: 'piel', rawCode: 'VpIc' }, strongs: 'H7843', position: 13 },
  { id: 'Gen.9.15.14', language: 'hebrew', text: 'כָּל־בָּשָֽׂר', transliteration: 'kāl-bāśār', lemma: 'בָּשָׂר', lemmaTranslit: 'bāśār', gloss: 'all flesh', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H1320', position: 14 },
];

export const genesis9_15_translation: VerseTranslation = {
  verseRef: 'Gen.9.15',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: '"I will remember my covenant which is between me and between you and between every living creature of all flesh; and the waters shall not again be for a flood to destroy all flesh."', spans: [{ id: 'Gen.9.15.en.lit.0', text: 'I will remember my covenant...', position: 0, sourceTokenIds: ['Gen.9.15.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"I will remember my covenant between me and you and all living creatures of every kind. Never again will the waters become a flood to destroy all life."', spans: [{ id: 'Gen.9.15.en.idi.0', text: 'I will remember my covenant...', position: 0, sourceTokenIds: ['Gen.9.15.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis9_15_notes: StudyNote[] = [
  { id: 'Gen.9.15.note.1', verseRef: 'Gen.9.15', sourceTokenIds: ['Gen.9.15.0'], category: 'theological', title: 'God Remembers', content: 'Just as God "remembered" Noah to end the flood (8:1), He will "remember" His covenant. Divine remembering is not a cognitive function (as if God could forget) but a relational and active commitment - God acts on His promises.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const genesis9_16_tokens: SourceToken[] = [
  { id: 'Gen.9.16.0', language: 'hebrew', text: 'וְהָיְתָ֥ה', transliteration: 'wəhāyəṯāh', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'And shall be', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3fs' }, strongs: 'H1961', position: 0 },
  { id: 'Gen.9.16.1', language: 'hebrew', text: 'הַקֶּ֖שֶׁת', transliteration: 'haqqešeṯ', lemma: 'קֶשֶׁת', lemmaTranslit: 'qešeṯ', gloss: 'the bow', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H7198', position: 1 },
  { id: 'Gen.9.16.2', language: 'hebrew', text: 'בֶּֽעָנָ֑ן', transliteration: 'beʿānān', lemma: 'עָנָן', lemmaTranslit: 'ʿānān', gloss: 'in the cloud', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H6051', position: 2 },
  { id: 'Gen.9.16.3', language: 'hebrew', text: 'וּרְאִיתִ֗יהָ', transliteration: 'ûrəʾîṯîhā', lemma: 'רָאָה', lemmaTranslit: 'rāʾāh', gloss: 'and I will see it', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp1cs' }, strongs: 'H7200', position: 3 },
  { id: 'Gen.9.16.4', language: 'hebrew', text: 'לִזְכֹּר֙', transliteration: 'lizəkōr', lemma: 'זָכַר', lemmaTranslit: 'zāḵar', gloss: 'to remember', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'VqIc' }, strongs: 'H2142', position: 4 },
  { id: 'Gen.9.16.5', language: 'hebrew', text: 'בְּרִ֣ית', transliteration: 'bərîṯ', lemma: 'בְּרִית', lemmaTranslit: 'bərîṯ', gloss: 'covenant', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H1285', position: 5 },
  { id: 'Gen.9.16.6', language: 'hebrew', text: 'עוֹלָ֔ם', transliteration: 'ʿôlām', lemma: 'עוֹלָם', lemmaTranslit: 'ʿôlām', gloss: 'everlasting', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H5769', position: 6 },
  { id: 'Gen.9.16.7', language: 'hebrew', text: 'בֵּ֣ין', transliteration: 'bên', lemma: 'בֵּין', lemmaTranslit: 'bên', gloss: 'between', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H996', position: 7 },
  { id: 'Gen.9.16.8', language: 'hebrew', text: 'אֱלֹהִ֔ים', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H430', position: 8 },
  { id: 'Gen.9.16.9', language: 'hebrew', text: 'וּבֵין֙', transliteration: 'ûḇên', lemma: 'בֵּין', lemmaTranslit: 'bên', gloss: 'and between', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H996', position: 9 },
  { id: 'Gen.9.16.10', language: 'hebrew', text: 'כָּל־נֶ֣פֶשׁ', transliteration: 'kāl-nep̄eš', lemma: 'נֶפֶשׁ', lemmaTranslit: 'nep̄eš', gloss: 'every living creature', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H5315', position: 10 },
  { id: 'Gen.9.16.11', language: 'hebrew', text: 'חַיָּ֔ה', transliteration: 'ḥayyāh', lemma: 'חַי', lemmaTranslit: 'ḥay', gloss: 'living', morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', rawCode: 'Ajfsa' }, strongs: 'H2416', position: 11 },
  { id: 'Gen.9.16.12', language: 'hebrew', text: 'בְּכָל־בָּשָׂ֖ר', transliteration: 'bəḵāl-bāśār', lemma: 'בָּשָׂר', lemmaTranslit: 'bāśār', gloss: 'of all flesh', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H1320', position: 12 },
  { id: 'Gen.9.16.13', language: 'hebrew', text: 'אֲשֶׁ֥ר', transliteration: 'ʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'that is', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 13 },
  { id: 'Gen.9.16.14', language: 'hebrew', text: 'עַל־הָאָֽרֶץ', transliteration: 'ʿal-hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'on the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 14 },
];

export const genesis9_16_translation: VerseTranslation = {
  verseRef: 'Gen.9.16',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: '"And the bow shall be in the cloud, and I will see it, to remember the everlasting covenant between God and between every living creature of all flesh that is on the earth."', spans: [{ id: 'Gen.9.16.en.lit.0', text: 'And the bow shall be...', position: 0, sourceTokenIds: ['Gen.9.16.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"Whenever the rainbow appears in the clouds, I will see it and remember the everlasting covenant between God and all living creatures of every kind on the earth."', spans: [{ id: 'Gen.9.16.en.idi.0', text: 'Whenever the rainbow appears...', position: 0, sourceTokenIds: ['Gen.9.16.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis9_16_notes: StudyNote[] = [
  { id: 'Gen.9.16.note.1', verseRef: 'Gen.9.16', sourceTokenIds: ['Gen.9.16.5', 'Gen.9.16.6'], category: 'theological', title: 'Everlasting Covenant', content: 'The phrase berit olam (בְּרִית עוֹלָם) "everlasting covenant" appears here for the first time. It will later describe God\'s covenants with Abraham (Gen 17:7), the Sabbath (Ex 31:16), and the priesthood (Num 25:13). This covenant anchors all subsequent divine-human relationships.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const genesis9_17_tokens: SourceToken[] = [
  { id: 'Gen.9.17.0', language: 'hebrew', text: 'וַיֹּ֥אמֶר', transliteration: 'wayyōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'And said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H559', position: 0 },
  { id: 'Gen.9.17.1', language: 'hebrew', text: 'אֱלֹהִ֖ים', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H430', position: 1 },
  { id: 'Gen.9.17.2', language: 'hebrew', text: 'אֶל־נֹ֑חַ', transliteration: 'ʾel-nōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'to Noah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 2 },
  { id: 'Gen.9.17.3', language: 'hebrew', text: 'זֹ֤את', transliteration: 'zōʾṯ', lemma: 'זֹאת', lemmaTranslit: 'zōʾṯ', gloss: 'This', morphology: { pos: 'pronoun', rawCode: 'Pdxfs' }, strongs: 'H2063', position: 3 },
  { id: 'Gen.9.17.4', language: 'hebrew', text: 'אוֹת־הַבְּרִית֙', transliteration: 'ʾôṯ-habbərîṯ', lemma: 'בְּרִית', lemmaTranslit: 'bərîṯ', gloss: 'sign of the covenant', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H1285', position: 4 },
  { id: 'Gen.9.17.5', language: 'hebrew', text: 'אֲשֶׁ֣ר', transliteration: 'ʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'which', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 5 },
  { id: 'Gen.9.17.6', language: 'hebrew', text: 'הֲקִמֹ֔תִי', transliteration: 'hăqimōṯî', lemma: 'קוּם', lemmaTranslit: 'qûm', gloss: 'I have established', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'perfect', stem: 'hiphil', rawCode: 'Vhp1cs' }, strongs: 'H6965', position: 6 },
  { id: 'Gen.9.17.7', language: 'hebrew', text: 'בֵּינִ֔י', transliteration: 'bênî', lemma: 'בֵּין', lemmaTranslit: 'bên', gloss: 'between me', morphology: { pos: 'preposition', rawCode: 'RPs1cs' }, strongs: 'H996', position: 7 },
  { id: 'Gen.9.17.8', language: 'hebrew', text: 'וּבֵ֖ין', transliteration: 'ûḇên', lemma: 'בֵּין', lemmaTranslit: 'bên', gloss: 'and between', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H996', position: 8 },
  { id: 'Gen.9.17.9', language: 'hebrew', text: 'כָּל־בָּשָׂ֥ר', transliteration: 'kāl-bāśār', lemma: 'בָּשָׂר', lemmaTranslit: 'bāśār', gloss: 'all flesh', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H1320', position: 9 },
  { id: 'Gen.9.17.10', language: 'hebrew', text: 'אֲשֶׁ֖ר', transliteration: 'ʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'that is', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 10 },
  { id: 'Gen.9.17.11', language: 'hebrew', text: 'עַל־הָאָֽרֶץ', transliteration: 'ʿal-hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'on the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 11 },
];

export const genesis9_17_translation: VerseTranslation = {
  verseRef: 'Gen.9.17',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And God said to Noah, "This is the sign of the covenant which I have established between me and between all flesh that is on the earth."', spans: [{ id: 'Gen.9.17.en.lit.0', text: 'And God said to Noah...', position: 0, sourceTokenIds: ['Gen.9.17.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'So God said to Noah, "This is the sign of the covenant I have established between me and all life on the earth."', spans: [{ id: 'Gen.9.17.en.idi.0', text: 'So God said to Noah...', position: 0, sourceTokenIds: ['Gen.9.17.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis9_17_notes: StudyNote[] = [];

// Export all verses
export const genesis9_8_17_verses = [
  { ref: 'Gen.9.8', sourceTokens: genesis9_8_tokens, translation: genesis9_8_translation, notes: genesis9_8_notes },
  { ref: 'Gen.9.9', sourceTokens: genesis9_9_tokens, translation: genesis9_9_translation, notes: genesis9_9_notes },
  { ref: 'Gen.9.10', sourceTokens: genesis9_10_tokens, translation: genesis9_10_translation, notes: genesis9_10_notes },
  { ref: 'Gen.9.11', sourceTokens: genesis9_11_tokens, translation: genesis9_11_translation, notes: genesis9_11_notes },
  { ref: 'Gen.9.12', sourceTokens: genesis9_12_tokens, translation: genesis9_12_translation, notes: genesis9_12_notes },
  { ref: 'Gen.9.13', sourceTokens: genesis9_13_tokens, translation: genesis9_13_translation, notes: genesis9_13_notes },
  { ref: 'Gen.9.14', sourceTokens: genesis9_14_tokens, translation: genesis9_14_translation, notes: genesis9_14_notes },
  { ref: 'Gen.9.15', sourceTokens: genesis9_15_tokens, translation: genesis9_15_translation, notes: genesis9_15_notes },
  { ref: 'Gen.9.16', sourceTokens: genesis9_16_tokens, translation: genesis9_16_translation, notes: genesis9_16_notes },
  { ref: 'Gen.9.17', sourceTokens: genesis9_17_tokens, translation: genesis9_17_translation, notes: genesis9_17_notes },
];
