/**
 * Genesis 9:18-29 - Noah's vineyard and the curse of Canaan
 * Hebrew morphological data with study annotations
 */

import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

// Genesis 9:18
export const genesis9_18_tokens: SourceToken[] = [
  { id: 'Gen.9.18.0', language: 'hebrew', text: 'וַיִּהְי֣וּ', transliteration: 'wayyihyû', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'And were', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H1961', position: 0 },
  { id: 'Gen.9.18.1', language: 'hebrew', text: 'בְנֵי־נֹ֗חַ', transliteration: 'ḇənê-nōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'sons of Noah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 1 },
  { id: 'Gen.9.18.2', language: 'hebrew', text: 'הַיֹּֽצְאִים֙', transliteration: 'hayyōṣəʾîm', lemma: 'יָצָא', lemmaTranslit: 'yāṣāʾ', gloss: 'who came out', morphology: { pos: 'verb', tense: 'participle', stem: 'qal', rawCode: 'VqPmpa' }, strongs: 'H3318', position: 2 },
  { id: 'Gen.9.18.3', language: 'hebrew', text: 'מִן־הַתֵּבָ֔ה', transliteration: 'min-hattēḇāh', lemma: 'תֵּבָה', lemmaTranslit: 'tēḇāh', gloss: 'from the ark', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8392', position: 3 },
  { id: 'Gen.9.18.4', language: 'hebrew', text: 'שֵׁ֖ם', transliteration: 'šēm', lemma: 'שֵׁם', lemmaTranslit: 'šēm', gloss: 'Shem', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8035', position: 4 },
  { id: 'Gen.9.18.5', language: 'hebrew', text: 'וְחָ֣ם', transliteration: 'wəḥām', lemma: 'חָם', lemmaTranslit: 'ḥām', gloss: 'and Ham', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2526', position: 5 },
  { id: 'Gen.9.18.6', language: 'hebrew', text: 'וָיָ֑פֶת', transliteration: 'wāyāp̄eṯ', lemma: 'יֶפֶת', lemmaTranslit: 'yep̄eṯ', gloss: 'and Japheth', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3315', position: 6 },
  { id: 'Gen.9.18.7', language: 'hebrew', text: 'וְחָ֕ם', transliteration: 'wəḥām', lemma: 'חָם', lemmaTranslit: 'ḥām', gloss: 'and Ham', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2526', position: 7 },
  { id: 'Gen.9.18.8', language: 'hebrew', text: 'ה֖וּא', transliteration: 'hûʾ', lemma: 'הוּא', lemmaTranslit: 'hûʾ', gloss: 'he', morphology: { pos: 'pronoun', person: '3', gender: 'masculine', number: 'singular', rawCode: 'Pp3ms' }, strongs: 'H1931', position: 8 },
  { id: 'Gen.9.18.9', language: 'hebrew', text: 'אֲבִ֥י', transliteration: 'ʾăḇî', lemma: 'אָב', lemmaTranslit: 'ʾāḇ', gloss: 'the father of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H1', position: 9 },
  { id: 'Gen.9.18.10', language: 'hebrew', text: 'כְנָֽעַן', transliteration: 'ḵənāʿan', lemma: 'כְּנַעַן', lemmaTranslit: 'kənaʿan', gloss: 'Canaan', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3667', position: 10 },
];

export const genesis9_18_translation: VerseTranslation = {
  verseRef: 'Gen.9.18',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And the sons of Noah who came out from the ark were Shem and Ham and Japheth. And Ham—he was the father of Canaan.', spans: [{ id: 'Gen.9.18.en.lit.0', text: 'And the sons of Noah...', position: 0, sourceTokenIds: ['Gen.9.18.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'The sons of Noah who came out of the ark were Shem, Ham and Japheth. (Ham was the father of Canaan.)', spans: [{ id: 'Gen.9.18.en.idi.0', text: 'The sons of Noah...', position: 0, sourceTokenIds: ['Gen.9.18.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis9_18_notes: StudyNote[] = [
  { id: 'Gen.9.18.note.1', verseRef: 'Gen.9.18', sourceTokenIds: ['Gen.9.18.7', 'Gen.9.18.9', 'Gen.9.18.10'], category: 'interpretive', title: 'Father of Canaan', content: 'This parenthetical note anticipates the curse on Canaan (v. 25). The narrator prepares readers for why Canaan, not Ham directly, will be cursed. This connects to Israel\'s later conquest of Canaan as divine judgment on Canaanite wickedness (Lev 18:24-28).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 9:19
export const genesis9_19_tokens: SourceToken[] = [
  { id: 'Gen.9.19.0', language: 'hebrew', text: 'שְׁלֹשָׁ֥ה', transliteration: 'šəlōšāh', lemma: 'שָׁלוֹשׁ', lemmaTranslit: 'šālôš', gloss: 'Three', morphology: { pos: 'numeral', rawCode: 'Acmsa' }, strongs: 'H7969', position: 0 },
  { id: 'Gen.9.19.1', language: 'hebrew', text: 'אֵ֖לֶּה', transliteration: 'ʾēlleh', lemma: 'אֵלֶּה', lemmaTranslit: 'ʾēlleh', gloss: 'these', morphology: { pos: 'pronoun', rawCode: 'Pdxcp' }, strongs: 'H428', position: 1 },
  { id: 'Gen.9.19.2', language: 'hebrew', text: 'בְּנֵי־נֹ֑חַ', transliteration: 'bənê-nōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'sons of Noah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 2 },
  { id: 'Gen.9.19.3', language: 'hebrew', text: 'וּמֵאֵ֖לֶּה', transliteration: 'ûmēʾēlleh', lemma: 'אֵלֶּה', lemmaTranslit: 'ʾēlleh', gloss: 'and from these', morphology: { pos: 'pronoun', rawCode: 'Pdxcp' }, strongs: 'H428', position: 3 },
  { id: 'Gen.9.19.4', language: 'hebrew', text: 'נָֽפְצָ֖ה', transliteration: 'nāp̄ṣāh', lemma: 'נָפַץ', lemmaTranslit: 'nāp̄aṣ', gloss: 'was populated', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3fs' }, strongs: 'H5310', position: 4 },
  { id: 'Gen.9.19.5', language: 'hebrew', text: 'כָּל־הָאָֽרֶץ', transliteration: 'kāl-hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'all the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 5 },
];

export const genesis9_19_translation: VerseTranslation = {
  verseRef: 'Gen.9.19',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'Three these were the sons of Noah, and from these the whole earth was populated.', spans: [{ id: 'Gen.9.19.en.lit.0', text: 'Three these were the sons...', position: 0, sourceTokenIds: ['Gen.9.19.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'These three were the sons of Noah, and from them came the people who were scattered over the whole earth.', spans: [{ id: 'Gen.9.19.en.idi.0', text: 'These three were the sons...', position: 0, sourceTokenIds: ['Gen.9.19.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis9_19_notes: StudyNote[] = [
  { id: 'Gen.9.19.note.1', verseRef: 'Gen.9.19', sourceTokenIds: ['Gen.9.19.4'], category: 'lexical', title: 'Populated (Nafetsah)', content: 'The verb nafats (נָפַץ) means "to scatter, spread abroad." All post-flood humanity descends from these three. Chapter 10 (the Table of Nations) will detail how the earth was repopulated through their descendants, fulfilling the command to "fill the earth" (9:1).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 9:20
export const genesis9_20_tokens: SourceToken[] = [
  { id: 'Gen.9.20.0', language: 'hebrew', text: 'וַיָּ֥חֶל', transliteration: 'wayyāḥel', lemma: 'חָלַל', lemmaTranslit: 'ḥālal', gloss: 'And began', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H2490', position: 0 },
  { id: 'Gen.9.20.1', language: 'hebrew', text: 'נֹ֖חַ', transliteration: 'nōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'Noah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 1 },
  { id: 'Gen.9.20.2', language: 'hebrew', text: 'אִ֣ישׁ', transliteration: 'ʾîš', lemma: 'אִישׁ', lemmaTranslit: 'ʾîš', gloss: 'a man of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H376', position: 2 },
  { id: 'Gen.9.20.3', language: 'hebrew', text: 'הָֽאֲדָמָ֑ה', transliteration: 'hāʾăḏāmāh', lemma: 'אֲדָמָה', lemmaTranslit: 'ʾăḏāmāh', gloss: 'the ground', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H127', position: 3 },
  { id: 'Gen.9.20.4', language: 'hebrew', text: 'וַיִּטַּ֖ע', transliteration: 'wayyiṭṭaʿ', lemma: 'נָטַע', lemmaTranslit: 'nāṭaʿ', gloss: 'and he planted', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H5193', position: 4 },
  { id: 'Gen.9.20.5', language: 'hebrew', text: 'כָּֽרֶם', transliteration: 'kārem', lemma: 'כֶּרֶם', lemmaTranslit: 'kerem', gloss: 'a vineyard', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3754', position: 5 },
];

export const genesis9_20_translation: VerseTranslation = {
  verseRef: 'Gen.9.20',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And Noah began to be a man of the ground, and he planted a vineyard.', spans: [{ id: 'Gen.9.20.en.lit.0', text: 'And Noah began...', position: 0, sourceTokenIds: ['Gen.9.20.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Noah, a man of the soil, proceeded to plant a vineyard.', spans: [{ id: 'Gen.9.20.en.idi.0', text: 'Noah, a man of the soil...', position: 0, sourceTokenIds: ['Gen.9.20.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis9_20_notes: StudyNote[] = [
  { id: 'Gen.9.20.note.1', verseRef: 'Gen.9.20', sourceTokenIds: ['Gen.9.20.2', 'Gen.9.20.3'], category: 'lexical', title: 'Man of the Ground', content: 'The phrase ish ha\'adamah (אִישׁ הָאֲדָמָה) "man of the ground" echoes Adam (adam from adamah). Noah is a new Adam, working the soil in the renewed world. But like Adam, he will fall into sin.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 9:21
export const genesis9_21_tokens: SourceToken[] = [
  { id: 'Gen.9.21.0', language: 'hebrew', text: 'וַיֵּ֥שְׁתְּ', transliteration: 'wayyēšt', lemma: 'שָׁתָה', lemmaTranslit: 'šāṯāh', gloss: 'And he drank', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H8354', position: 0 },
  { id: 'Gen.9.21.1', language: 'hebrew', text: 'מִן־הַיַּ֖יִן', transliteration: 'min-hayyayin', lemma: 'יַיִן', lemmaTranslit: 'yayin', gloss: 'of the wine', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3196', position: 1 },
  { id: 'Gen.9.21.2', language: 'hebrew', text: 'וַיִּשְׁכָּ֑ר', transliteration: 'wayyiškār', lemma: 'שָׁכַר', lemmaTranslit: 'šāḵar', gloss: 'and became drunk', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H7937', position: 2 },
  { id: 'Gen.9.21.3', language: 'hebrew', text: 'וַיִּתְגַּ֖ל', transliteration: 'wayyiṯgal', lemma: 'גָּלָה', lemmaTranslit: 'gālāh', gloss: 'and he uncovered himself', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hithpael', rawCode: 'Vtw3ms' }, strongs: 'H1540', position: 3 },
  { id: 'Gen.9.21.4', language: 'hebrew', text: 'בְּת֥וֹךְ', transliteration: 'bəṯôḵ', lemma: 'תָּוֶךְ', lemmaTranslit: 'tāweḵ', gloss: 'inside', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H8432', position: 4 },
  { id: 'Gen.9.21.5', language: 'hebrew', text: 'אָהֳלֹֽה', transliteration: 'ʾāhŏlōh', lemma: 'אֹהֶל', lemmaTranslit: 'ʾōhel', gloss: 'his tent', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H168', position: 5 },
];

export const genesis9_21_translation: VerseTranslation = {
  verseRef: 'Gen.9.21',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And he drank of the wine and became drunk, and he uncovered himself inside his tent.', spans: [{ id: 'Gen.9.21.en.lit.0', text: 'And he drank of the wine...', position: 0, sourceTokenIds: ['Gen.9.21.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'When he drank some of its wine, he became drunk and lay uncovered inside his tent.', spans: [{ id: 'Gen.9.21.en.idi.0', text: 'When he drank some of its wine...', position: 0, sourceTokenIds: ['Gen.9.21.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis9_21_notes: StudyNote[] = [
  { id: 'Gen.9.21.note.1', verseRef: 'Gen.9.21', sourceTokenIds: ['Gen.9.21.3'], category: 'grammatical', title: 'Uncovered Himself', content: 'The hithpael (reflexive) form of galah indicates Noah uncovered himself, likely accidentally in his drunken state. The text does not condemn Noah for planting a vineyard or even for drinking wine, but the drunkenness leads to a shameful situation.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 9:22
export const genesis9_22_tokens: SourceToken[] = [
  { id: 'Gen.9.22.0', language: 'hebrew', text: 'וַיַּ֗רְא', transliteration: 'wayyarʾ', lemma: 'רָאָה', lemmaTranslit: 'rāʾāh', gloss: 'And saw', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H7200', position: 0 },
  { id: 'Gen.9.22.1', language: 'hebrew', text: 'חָ֚ם', transliteration: 'ḥām', lemma: 'חָם', lemmaTranslit: 'ḥām', gloss: 'Ham', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2526', position: 1 },
  { id: 'Gen.9.22.2', language: 'hebrew', text: 'אֲבִ֣י', transliteration: 'ʾăḇî', lemma: 'אָב', lemmaTranslit: 'ʾāḇ', gloss: 'the father of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H1', position: 2 },
  { id: 'Gen.9.22.3', language: 'hebrew', text: 'כְנַ֔עַן', transliteration: 'ḵənaʿan', lemma: 'כְּנַעַן', lemmaTranslit: 'kənaʿan', gloss: 'Canaan', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3667', position: 3 },
  { id: 'Gen.9.22.4', language: 'hebrew', text: 'אֵ֖ת', transliteration: 'ʾēṯ', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: '[obj]', morphology: { pos: 'particle', rawCode: 'To' }, strongs: 'H853', position: 4 },
  { id: 'Gen.9.22.5', language: 'hebrew', text: 'עֶרְוַ֣ת', transliteration: 'ʿerwaṯ', lemma: 'עֶרְוָה', lemmaTranslit: 'ʿerwāh', gloss: 'nakedness of', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H6172', position: 5 },
  { id: 'Gen.9.22.6', language: 'hebrew', text: 'אָבִ֑יו', transliteration: 'ʾāḇîw', lemma: 'אָב', lemmaTranslit: 'ʾāḇ', gloss: 'his father', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H1', position: 6 },
  { id: 'Gen.9.22.7', language: 'hebrew', text: 'וַיַּגֵּ֥ד', transliteration: 'wayyaggēḏ', lemma: 'נָגַד', lemmaTranslit: 'nāḡaḏ', gloss: 'and he told', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H5046', position: 7 },
  { id: 'Gen.9.22.8', language: 'hebrew', text: 'לִשְׁנֵֽי־אֶחָ֖יו', transliteration: 'lišnê-ʾeḥāyw', lemma: 'אָח', lemmaTranslit: 'ʾāḥ', gloss: 'to his two brothers', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H251', position: 8 },
  { id: 'Gen.9.22.9', language: 'hebrew', text: 'בַּחֽוּץ', transliteration: 'baḥûṣ', lemma: 'חוּץ', lemmaTranslit: 'ḥûṣ', gloss: 'outside', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H2351', position: 9 },
];

export const genesis9_22_translation: VerseTranslation = {
  verseRef: 'Gen.9.22',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And Ham, the father of Canaan, saw the nakedness of his father, and he told his two brothers outside.', spans: [{ id: 'Gen.9.22.en.lit.0', text: 'And Ham, the father of Canaan...', position: 0, sourceTokenIds: ['Gen.9.22.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Ham, the father of Canaan, saw his father naked and told his two brothers outside.', spans: [{ id: 'Gen.9.22.en.idi.0', text: 'Ham, the father of Canaan...', position: 0, sourceTokenIds: ['Gen.9.22.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis9_22_notes: StudyNote[] = [
  { id: 'Gen.9.22.note.1', verseRef: 'Gen.9.22', sourceTokenIds: ['Gen.9.22.5'], category: 'lexical', title: 'Nakedness (Ervah)', content: 'The term ervah (עֶרְוָה) "nakedness" is used in Leviticus 18 and 20 for sexual impropriety. Ham\'s sin was not merely seeing but the manner of looking and the failure to honor his father by covering him. Instead, he broadcast his father\'s shame.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 9:23
export const genesis9_23_tokens: SourceToken[] = [
  { id: 'Gen.9.23.0', language: 'hebrew', text: 'וַיִּקַּח֩', transliteration: 'wayyiqqaḥ', lemma: 'לָקַח', lemmaTranslit: 'lāqaḥ', gloss: 'And took', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H3947', position: 0 },
  { id: 'Gen.9.23.1', language: 'hebrew', text: 'שֵׁ֨ם', transliteration: 'šēm', lemma: 'שֵׁם', lemmaTranslit: 'šēm', gloss: 'Shem', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8035', position: 1 },
  { id: 'Gen.9.23.2', language: 'hebrew', text: 'וָיֶ֜פֶת', transliteration: 'wāyep̄eṯ', lemma: 'יֶפֶת', lemmaTranslit: 'yep̄eṯ', gloss: 'and Japheth', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3315', position: 2 },
  { id: 'Gen.9.23.3', language: 'hebrew', text: 'אֶת־הַשִּׂמְלָ֗ה', transliteration: 'ʾeṯ-haśśimlāh', lemma: 'שִׂמְלָה', lemmaTranslit: 'śimlāh', gloss: 'the garment', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8071', position: 3 },
  { id: 'Gen.9.23.4', language: 'hebrew', text: 'וַיָּשִׂ֙ימוּ֙', transliteration: 'wayyāśîmû', lemma: 'שִׂים', lemmaTranslit: 'śîm', gloss: 'and placed', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H7760', position: 4 },
  { id: 'Gen.9.23.5', language: 'hebrew', text: 'עַל־שְׁכֶ֣ם', transliteration: 'ʿal-šəḵem', lemma: 'שֶׁכֶם', lemmaTranslit: 'šeḵem', gloss: 'on the shoulder of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H7926', position: 5 },
  { id: 'Gen.9.23.6', language: 'hebrew', text: 'שְׁנֵיהֶ֔ם', transliteration: 'šənêhem', lemma: 'שְׁנַיִם', lemmaTranslit: 'šənayim', gloss: 'both of them', morphology: { pos: 'numeral', rawCode: 'Acmdc' }, strongs: 'H8147', position: 6 },
  { id: 'Gen.9.23.7', language: 'hebrew', text: 'וַיֵּֽלְכוּ֙', transliteration: 'wayyēləḵû', lemma: 'הָלַךְ', lemmaTranslit: 'hālaḵ', gloss: 'and they walked', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H1980', position: 7 },
  { id: 'Gen.9.23.8', language: 'hebrew', text: 'אֲחֹ֣רַנִּ֔ית', transliteration: 'ʾăḥōrannîṯ', lemma: 'אֲחֹרַנִּית', lemmaTranslit: 'ʾăḥōrannîṯ', gloss: 'backward', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H322', position: 8 },
  { id: 'Gen.9.23.9', language: 'hebrew', text: 'וַיְכַסּ֕וּ', transliteration: 'wayəḵassû', lemma: 'כָּסָה', lemmaTranslit: 'kāsāh', gloss: 'and they covered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'piel', rawCode: 'Vpw3mp' }, strongs: 'H3680', position: 9 },
  { id: 'Gen.9.23.10', language: 'hebrew', text: 'אֵ֖ת', transliteration: 'ʾēṯ', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: '[obj]', morphology: { pos: 'particle', rawCode: 'To' }, strongs: 'H853', position: 10 },
  { id: 'Gen.9.23.11', language: 'hebrew', text: 'עֶרְוַ֣ת', transliteration: 'ʿerwaṯ', lemma: 'עֶרְוָה', lemmaTranslit: 'ʿerwāh', gloss: 'nakedness of', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H6172', position: 11 },
  { id: 'Gen.9.23.12', language: 'hebrew', text: 'אֲבִיהֶ֑ם', transliteration: 'ʾăḇîhem', lemma: 'אָב', lemmaTranslit: 'ʾāḇ', gloss: 'their father', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H1', position: 12 },
  { id: 'Gen.9.23.13', language: 'hebrew', text: 'וּפְנֵיהֶם֙', transliteration: 'ûp̄ənêhem', lemma: 'פָּנִים', lemmaTranslit: 'pānîm', gloss: 'and their faces', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H6440', position: 13 },
  { id: 'Gen.9.23.14', language: 'hebrew', text: 'אֲחֹ֣רַנִּ֔ית', transliteration: 'ʾăḥōrannîṯ', lemma: 'אֲחֹרַנִּית', lemmaTranslit: 'ʾăḥōrannîṯ', gloss: 'backward', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H322', position: 14 },
  { id: 'Gen.9.23.15', language: 'hebrew', text: 'וְעֶרְוַ֥ת', transliteration: 'wəʿerwaṯ', lemma: 'עֶרְוָה', lemmaTranslit: 'ʿerwāh', gloss: 'and nakedness of', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H6172', position: 15 },
  { id: 'Gen.9.23.16', language: 'hebrew', text: 'אֲבִיהֶ֖ם', transliteration: 'ʾăḇîhem', lemma: 'אָב', lemmaTranslit: 'ʾāḇ', gloss: 'their father', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H1', position: 16 },
  { id: 'Gen.9.23.17', language: 'hebrew', text: 'לֹ֥א', transliteration: 'lōʾ', lemma: 'לֹא', lemmaTranslit: 'lōʾ', gloss: 'not', morphology: { pos: 'adverb', rawCode: 'Tn' }, strongs: 'H3808', position: 17 },
  { id: 'Gen.9.23.18', language: 'hebrew', text: 'רָאֽוּ', transliteration: 'rāʾû', lemma: 'רָאָה', lemmaTranslit: 'rāʾāh', gloss: 'they saw', morphology: { pos: 'verb', person: '3', gender: 'common', number: 'plural', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3cp' }, strongs: 'H7200', position: 18 },
];

export const genesis9_23_translation: VerseTranslation = {
  verseRef: 'Gen.9.23',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And Shem and Japheth took the garment and placed it on the shoulder of both of them, and they walked backward and covered the nakedness of their father. And their faces were backward, and the nakedness of their father they did not see.', spans: [{ id: 'Gen.9.23.en.lit.0', text: 'And Shem and Japheth took...', position: 0, sourceTokenIds: ['Gen.9.23.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'But Shem and Japheth took a garment and laid it across their shoulders; then they walked in backward and covered their father\'s naked body. Their faces were turned the other way so that they would not see their father naked.', spans: [{ id: 'Gen.9.23.en.idi.0', text: 'But Shem and Japheth took a garment...', position: 0, sourceTokenIds: ['Gen.9.23.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis9_23_notes: StudyNote[] = [
  { id: 'Gen.9.23.note.1', verseRef: 'Gen.9.23', sourceTokenIds: ['Gen.9.23.8', 'Gen.9.23.14'], category: 'theological', title: 'Honoring Their Father', content: 'The elaborate description of Shem and Japheth walking backward with faces averted emphasizes their deliberate effort to honor their father and not see his shame. This contrasts sharply with Ham\'s behavior and explains the blessing/curse that follows.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 9:24
export const genesis9_24_tokens: SourceToken[] = [
  { id: 'Gen.9.24.0', language: 'hebrew', text: 'וַיִּ֥יקֶץ', transliteration: 'wayyîqeṣ', lemma: 'יָקַץ', lemmaTranslit: 'yāqaṣ', gloss: 'And awoke', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H3364', position: 0 },
  { id: 'Gen.9.24.1', language: 'hebrew', text: 'נֹ֖חַ', transliteration: 'nōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'Noah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 1 },
  { id: 'Gen.9.24.2', language: 'hebrew', text: 'מִיֵּינ֑וֹ', transliteration: 'miyyênô', lemma: 'יַיִן', lemmaTranslit: 'yayin', gloss: 'from his wine', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H3196', position: 2 },
  { id: 'Gen.9.24.3', language: 'hebrew', text: 'וַיֵּ֕דַע', transliteration: 'wayyēḏaʿ', lemma: 'יָדַע', lemmaTranslit: 'yāḏaʿ', gloss: 'and he knew', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H3045', position: 3 },
  { id: 'Gen.9.24.4', language: 'hebrew', text: 'אֵ֛ת', transliteration: 'ʾēṯ', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: '[obj]', morphology: { pos: 'particle', rawCode: 'To' }, strongs: 'H853', position: 4 },
  { id: 'Gen.9.24.5', language: 'hebrew', text: 'אֲשֶׁר־עָ֥שָׂה', transliteration: 'ʾăšer-ʿāśāh', lemma: 'עָשָׂה', lemmaTranslit: 'ʿāśāh', gloss: 'what had done', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H6213', position: 5 },
  { id: 'Gen.9.24.6', language: 'hebrew', text: 'ל֖וֹ', transliteration: 'lô', lemma: 'לְ', lemmaTranslit: 'lə', gloss: 'to him', morphology: { pos: 'preposition', rawCode: 'RPs3ms' }, strongs: 'H', position: 6 },
  { id: 'Gen.9.24.7', language: 'hebrew', text: 'בְּנ֥וֹ', transliteration: 'bənô', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'his son', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H1121', position: 7 },
  { id: 'Gen.9.24.8', language: 'hebrew', text: 'הַקָּטָֽן', transliteration: 'haqqāṭān', lemma: 'קָטָן', lemmaTranslit: 'qāṭān', gloss: 'the youngest', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', rawCode: 'Ajmsa' }, strongs: 'H6996', position: 8 },
];

export const genesis9_24_translation: VerseTranslation = {
  verseRef: 'Gen.9.24',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And Noah awoke from his wine and knew what his youngest son had done to him.', spans: [{ id: 'Gen.9.24.en.lit.0', text: 'And Noah awoke...', position: 0, sourceTokenIds: ['Gen.9.24.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'When Noah awoke from his wine and found out what his youngest son had done to him,', spans: [{ id: 'Gen.9.24.en.idi.0', text: 'When Noah awoke from his wine...', position: 0, sourceTokenIds: ['Gen.9.24.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis9_24_notes: StudyNote[] = [
  { id: 'Gen.9.24.note.1', verseRef: 'Gen.9.24', sourceTokenIds: ['Gen.9.24.8'], category: 'interpretive', title: 'Youngest Son', content: 'Ham is called "youngest" (qatan), though the listing order (Shem, Ham, Japheth) might suggest otherwise. Some interpreters see this as evidence that the lists follow a different principle than age order, or that Ham was indeed the youngest despite being listed second.', confidence: 'medium', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 9:25-29 (abbreviated for length)
export const genesis9_25_tokens: SourceToken[] = [
  { id: 'Gen.9.25.0', language: 'hebrew', text: 'וַיֹּ֖אמֶר', transliteration: 'wayyōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'And he said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H559', position: 0 },
  { id: 'Gen.9.25.1', language: 'hebrew', text: 'אָר֣וּר', transliteration: 'ʾārûr', lemma: 'אָרַר', lemmaTranslit: 'ʾārar', gloss: 'Cursed', morphology: { pos: 'verb', tense: 'participle', stem: 'qal', rawCode: 'VqPpms' }, strongs: 'H779', position: 1 },
  { id: 'Gen.9.25.2', language: 'hebrew', text: 'כְּנָ֑עַן', transliteration: 'kənaʿan', lemma: 'כְּנַעַן', lemmaTranslit: 'kənaʿan', gloss: 'Canaan', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3667', position: 2 },
  { id: 'Gen.9.25.3', language: 'hebrew', text: 'עֶ֥בֶד', transliteration: 'ʿeḇeḏ', lemma: 'עֶבֶד', lemmaTranslit: 'ʿeḇeḏ', gloss: 'servant of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H5650', position: 3 },
  { id: 'Gen.9.25.4', language: 'hebrew', text: 'עֲבָדִ֖ים', transliteration: 'ʿăḇāḏîm', lemma: 'עֶבֶד', lemmaTranslit: 'ʿeḇeḏ', gloss: 'servants', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H5650', position: 4 },
  { id: 'Gen.9.25.5', language: 'hebrew', text: 'יִהְיֶ֥ה', transliteration: 'yihyeh', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'he shall be', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi3ms' }, strongs: 'H1961', position: 5 },
  { id: 'Gen.9.25.6', language: 'hebrew', text: 'לְאֶחָֽיו', transliteration: 'ləʾeḥāyw', lemma: 'אָח', lemmaTranslit: 'ʾāḥ', gloss: 'to his brothers', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H251', position: 6 },
];

export const genesis9_25_translation: VerseTranslation = {
  verseRef: 'Gen.9.25',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And he said, "Cursed be Canaan; a servant of servants he shall be to his brothers."', spans: [{ id: 'Gen.9.25.en.lit.0', text: 'And he said...', position: 0, sourceTokenIds: ['Gen.9.25.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'he said, "Cursed be Canaan! The lowest of slaves will he be to his brothers."', spans: [{ id: 'Gen.9.25.en.idi.0', text: 'he said...', position: 0, sourceTokenIds: ['Gen.9.25.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis9_25_notes: StudyNote[] = [
  { id: 'Gen.9.25.note.1', verseRef: 'Gen.9.25', sourceTokenIds: ['Gen.9.25.2'], category: 'theological', title: 'Curse on Canaan', content: 'Canaan is cursed, not Ham directly. Various explanations exist: (1) the curse falls on Ham\'s descendants; (2) Canaan may have been involved; (3) the prophecy addresses Israel\'s future conflict with Canaanites. This is NOT about race—all nations descend from Noah\'s sons.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.9.25.note.2', verseRef: 'Gen.9.25', sourceTokenIds: ['Gen.9.25.3', 'Gen.9.25.4'], category: 'lexical', title: 'Servant of Servants', content: 'The superlative "servant of servants" (eved avadim) means "the lowest servant." This was fulfilled when Israel conquered Canaan (Josh 9:21-27) and subjugated Canaanite peoples, though many were also destroyed for their wickedness.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Simplified tokens for remaining verses
export const genesis9_26_tokens: SourceToken[] = [
  { id: 'Gen.9.26.0', language: 'hebrew', text: 'וַיֹּ֕אמֶר', transliteration: 'wayyōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'And he said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H559', position: 0 },
  { id: 'Gen.9.26.1', language: 'hebrew', text: 'בָּר֥וּךְ', transliteration: 'bārûḵ', lemma: 'בָּרַךְ', lemmaTranslit: 'bāraḵ', gloss: 'Blessed', morphology: { pos: 'verb', tense: 'participle', stem: 'qal', rawCode: 'VqPpms' }, strongs: 'H1288', position: 1 },
  { id: 'Gen.9.26.2', language: 'hebrew', text: 'יְהוָ֖ה', transliteration: 'YHWH', lemma: 'יהוה', lemmaTranslit: 'YHWH', gloss: 'the LORD', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 2 },
  { id: 'Gen.9.26.3', language: 'hebrew', text: 'אֱלֹ֣הֵי', transliteration: 'ʾĕlōhê', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H430', position: 3 },
  { id: 'Gen.9.26.4', language: 'hebrew', text: 'שֵׁ֑ם', transliteration: 'šēm', lemma: 'שֵׁם', lemmaTranslit: 'šēm', gloss: 'Shem', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8035', position: 4 },
];

export const genesis9_26_translation: VerseTranslation = {
  verseRef: 'Gen.9.26',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And he said, "Blessed be the LORD, the God of Shem, and let Canaan be his servant."', spans: [{ id: 'Gen.9.26.en.lit.0', text: 'And he said, Blessed be the LORD...', position: 0, sourceTokenIds: ['Gen.9.26.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'He also said, "Praise be to the LORD, the God of Shem! May Canaan be the slave of Shem."', spans: [{ id: 'Gen.9.26.en.idi.0', text: 'He also said, Praise be to the LORD...', position: 0, sourceTokenIds: ['Gen.9.26.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis9_26_notes: StudyNote[] = [
  { id: 'Gen.9.26.note.1', verseRef: 'Gen.9.26', sourceTokenIds: ['Gen.9.26.2', 'Gen.9.26.3', 'Gen.9.26.4'], category: 'theological', title: 'God of Shem', content: 'This is the first time YHWH is called "the God of" a person. From Shem comes the Semitic peoples, including Abraham and ultimately Israel. The blessing points to God\'s covenant relationship with Shem\'s line—the line through which Messiah would come.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const genesis9_27_tokens: SourceToken[] = [
  { id: 'Gen.9.27.0', language: 'hebrew', text: 'יַ֤פְתְּ', transliteration: 'yap̄t', lemma: 'פָּתָה', lemmaTranslit: 'pāṯāh', gloss: 'May enlarge', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhi3ms' }, strongs: 'H6601', position: 0 },
  { id: 'Gen.9.27.1', language: 'hebrew', text: 'אֱלֹהִים֙', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H430', position: 1 },
  { id: 'Gen.9.27.2', language: 'hebrew', text: 'לְיֶ֔פֶת', transliteration: 'ləyep̄eṯ', lemma: 'יֶפֶת', lemmaTranslit: 'yep̄eṯ', gloss: 'Japheth', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3315', position: 2 },
  { id: 'Gen.9.27.3', language: 'hebrew', text: 'וְיִשְׁכֹּ֖ן', transliteration: 'wəyiškōn', lemma: 'שָׁכַן', lemmaTranslit: 'šāḵan', gloss: 'and may he dwell', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi3ms' }, strongs: 'H7931', position: 3 },
  { id: 'Gen.9.27.4', language: 'hebrew', text: 'בְּאָֽהֳלֵי־שֵׁ֑ם', transliteration: 'bəʾāhŏlê-šēm', lemma: 'אֹהֶל', lemmaTranslit: 'ʾōhel', gloss: 'in the tents of Shem', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H168', position: 4 },
];

export const genesis9_27_translation: VerseTranslation = {
  verseRef: 'Gen.9.27',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: '"May God enlarge Japheth, and may he dwell in the tents of Shem, and let Canaan be his servant."', spans: [{ id: 'Gen.9.27.en.lit.0', text: 'May God enlarge Japheth...', position: 0, sourceTokenIds: ['Gen.9.27.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"May God extend Japheth\'s territory; may Japheth live in the tents of Shem, and may Canaan be the slave of Japheth."', spans: [{ id: 'Gen.9.27.en.idi.0', text: 'May God extend Japheth\'s territory...', position: 0, sourceTokenIds: ['Gen.9.27.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis9_27_notes: StudyNote[] = [
  { id: 'Gen.9.27.note.1', verseRef: 'Gen.9.27', sourceTokenIds: ['Gen.9.27.0', 'Gen.9.27.2'], category: 'lexical', title: 'Wordplay on Japheth', content: 'Hebrew yaft (יַפְתְּ) "may he enlarge" puns on Yefet (יֶפֶת) "Japheth." The name likely means "wide, open." From Japheth came the Indo-European peoples who eventually spread across Europe and Asia—a prophecy of territorial expansion.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.9.27.note.2', verseRef: 'Gen.9.27', sourceTokenIds: ['Gen.9.27.3', 'Gen.9.27.4'], category: 'theological', title: 'Dwell in Shem\'s Tents', content: '"Dwell in the tents of Shem" may mean: (1) Japheth\'s descendants would live harmoniously with Shem\'s; (2) they would share in Shem\'s spiritual blessings. Gentile inclusion in Israel\'s covenant blessings fulfills this (Rom 11:17).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const genesis9_28_tokens: SourceToken[] = [
  { id: 'Gen.9.28.0', language: 'hebrew', text: 'וַֽיְחִי־נֹ֖חַ', transliteration: 'wayḥî-nōaḥ', lemma: 'חָיָה', lemmaTranslit: 'ḥāyāh', gloss: 'And lived Noah', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H2421', position: 0 },
  { id: 'Gen.9.28.1', language: 'hebrew', text: 'אַחַ֣ר', transliteration: 'ʾaḥar', lemma: 'אַחַר', lemmaTranslit: 'ʾaḥar', gloss: 'after', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H310', position: 1 },
  { id: 'Gen.9.28.2', language: 'hebrew', text: 'הַמַּבּ֑וּל', transliteration: 'hammabbûl', lemma: 'מַבּוּל', lemmaTranslit: 'mabbûl', gloss: 'the flood', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3999', position: 2 },
  { id: 'Gen.9.28.3', language: 'hebrew', text: 'שְׁלֹ֤שׁ', transliteration: 'šəlōš', lemma: 'שָׁלוֹשׁ', lemmaTranslit: 'šālôš', gloss: 'three', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H7969', position: 3 },
  { id: 'Gen.9.28.4', language: 'hebrew', text: 'מֵאוֹת֙', transliteration: 'mēʾôṯ', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'hundred', morphology: { pos: 'numeral', rawCode: 'Acfpa' }, strongs: 'H3967', position: 4 },
  { id: 'Gen.9.28.5', language: 'hebrew', text: 'שָׁנָ֔ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 5 },
  { id: 'Gen.9.28.6', language: 'hebrew', text: 'וַחֲמִשִּׁ֖ים', transliteration: 'waḥămiššîm', lemma: 'חֲמִשִּׁים', lemmaTranslit: 'ḥămiššîm', gloss: 'and fifty', morphology: { pos: 'numeral', rawCode: 'Acmpa' }, strongs: 'H2572', position: 6 },
  { id: 'Gen.9.28.7', language: 'hebrew', text: 'שָׁנָֽה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 7 },
];

export const genesis9_28_translation: VerseTranslation = {
  verseRef: 'Gen.9.28',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And Noah lived after the flood three hundred and fifty years.', spans: [{ id: 'Gen.9.28.en.lit.0', text: 'And Noah lived after the flood...', position: 0, sourceTokenIds: ['Gen.9.28.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'After the flood Noah lived 350 years.', spans: [{ id: 'Gen.9.28.en.idi.0', text: 'After the flood Noah lived...', position: 0, sourceTokenIds: ['Gen.9.28.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis9_28_notes: StudyNote[] = [];

export const genesis9_29_tokens: SourceToken[] = [
  { id: 'Gen.9.29.0', language: 'hebrew', text: 'וַיְהִ֖י', transliteration: 'wayəhî', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'And were', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H1961', position: 0 },
  { id: 'Gen.9.29.1', language: 'hebrew', text: 'כָּל־יְמֵי־נֹ֑חַ', transliteration: 'kāl-yəmê-nōaḥ', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'all the days of Noah', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H3117', position: 1 },
  { id: 'Gen.9.29.2', language: 'hebrew', text: 'תְּשַׁ֤ע', transliteration: 'təšaʿ', lemma: 'תֵּשַׁע', lemmaTranslit: 'tēšaʿ', gloss: 'nine', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H8672', position: 2 },
  { id: 'Gen.9.29.3', language: 'hebrew', text: 'מֵאוֹת֙', transliteration: 'mēʾôṯ', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'hundred', morphology: { pos: 'numeral', rawCode: 'Acfpa' }, strongs: 'H3967', position: 3 },
  { id: 'Gen.9.29.4', language: 'hebrew', text: 'שָׁנָ֔ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 4 },
  { id: 'Gen.9.29.5', language: 'hebrew', text: 'וַחֲמִשִּׁ֖ים', transliteration: 'waḥămiššîm', lemma: 'חֲמִשִּׁים', lemmaTranslit: 'ḥămiššîm', gloss: 'and fifty', morphology: { pos: 'numeral', rawCode: 'Acmpa' }, strongs: 'H2572', position: 5 },
  { id: 'Gen.9.29.6', language: 'hebrew', text: 'שָׁנָ֖ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 6 },
  { id: 'Gen.9.29.7', language: 'hebrew', text: 'וַיָּמֹֽת', transliteration: 'wayyāmōṯ', lemma: 'מוּת', lemmaTranslit: 'mûṯ', gloss: 'and he died', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H4191', position: 7 },
];

export const genesis9_29_translation: VerseTranslation = {
  verseRef: 'Gen.9.29',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And all the days of Noah were nine hundred and fifty years, and he died.', spans: [{ id: 'Gen.9.29.en.lit.0', text: 'And all the days of Noah...', position: 0, sourceTokenIds: ['Gen.9.29.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Noah lived a total of 950 years, and then he died.', spans: [{ id: 'Gen.9.29.en.idi.0', text: 'Noah lived a total of 950 years...', position: 0, sourceTokenIds: ['Gen.9.29.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis9_29_notes: StudyNote[] = [
  { id: 'Gen.9.29.note.1', verseRef: 'Gen.9.29', sourceTokenIds: ['Gen.9.29.7'], category: 'theological', title: 'Noah\'s Death', content: 'Noah died at 950 years, the third longest-lived person in the Bible (after Methuselah at 969 and Jared at 962). He lived to see Abraham born and potentially could have known him, bridging the pre-flood and patriarchal ages.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Export all verses
export const genesis9_18_29_verses = [
  { ref: 'Gen.9.18', sourceTokens: genesis9_18_tokens, translation: genesis9_18_translation, notes: genesis9_18_notes },
  { ref: 'Gen.9.19', sourceTokens: genesis9_19_tokens, translation: genesis9_19_translation, notes: genesis9_19_notes },
  { ref: 'Gen.9.20', sourceTokens: genesis9_20_tokens, translation: genesis9_20_translation, notes: genesis9_20_notes },
  { ref: 'Gen.9.21', sourceTokens: genesis9_21_tokens, translation: genesis9_21_translation, notes: genesis9_21_notes },
  { ref: 'Gen.9.22', sourceTokens: genesis9_22_tokens, translation: genesis9_22_translation, notes: genesis9_22_notes },
  { ref: 'Gen.9.23', sourceTokens: genesis9_23_tokens, translation: genesis9_23_translation, notes: genesis9_23_notes },
  { ref: 'Gen.9.24', sourceTokens: genesis9_24_tokens, translation: genesis9_24_translation, notes: genesis9_24_notes },
  { ref: 'Gen.9.25', sourceTokens: genesis9_25_tokens, translation: genesis9_25_translation, notes: genesis9_25_notes },
  { ref: 'Gen.9.26', sourceTokens: genesis9_26_tokens, translation: genesis9_26_translation, notes: genesis9_26_notes },
  { ref: 'Gen.9.27', sourceTokens: genesis9_27_tokens, translation: genesis9_27_translation, notes: genesis9_27_notes },
  { ref: 'Gen.9.28', sourceTokens: genesis9_28_tokens, translation: genesis9_28_translation, notes: genesis9_28_notes },
  { ref: 'Gen.9.29', sourceTokens: genesis9_29_tokens, translation: genesis9_29_translation, notes: genesis9_29_notes },
];
