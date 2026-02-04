/**
 * Genesis 3:20-24 - Hebrew morphological data
 * Naming Eve, garments of skin, expulsion from Eden
 * Source: Open Hebrew Bible (Tanach.us) - Public Domain
 */

import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

// Genesis 3:20 - Adam names his wife Eve
export const genesis3_20_tokens: SourceToken[] = [
  { id: 'Gen.3.20.0', language: 'hebrew', text: 'וַיִּקְרָ֧א', transliteration: 'wayyiqrāʾ', lemma: 'קָרָא', lemmaTranslit: 'qārāʾ', gloss: 'And called', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H7121', position: 0 },
  { id: 'Gen.3.20.1', language: 'hebrew', text: 'הָֽאָדָ֛ם', transliteration: 'hāʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'the man', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 1 },
  { id: 'Gen.3.20.2', language: 'hebrew', text: 'שֵׁ֥ם', transliteration: 'šēm', lemma: 'שֵׁם', lemmaTranslit: 'šēm', gloss: 'the name of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H8034', position: 2 },
  { id: 'Gen.3.20.3', language: 'hebrew', text: 'אִשְׁתּ֖וֹ', transliteration: 'ʾištô', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'his wife', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H802', position: 3 },
  { id: 'Gen.3.20.4', language: 'hebrew', text: 'חַוָּ֑ה', transliteration: 'ḥawwāh', lemma: 'חַוָּה', lemmaTranslit: 'ḥawwāh', gloss: 'Eve', glossExtended: 'Eve (life, living)', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2332', position: 4 },
  { id: 'Gen.3.20.5', language: 'hebrew', text: 'כִּ֛י', transliteration: 'kî', lemma: 'כִּי', lemmaTranslit: 'kî', gloss: 'because', morphology: { pos: 'conjunction', rawCode: 'Cc' }, strongs: 'H3588', position: 5 },
  { id: 'Gen.3.20.6', language: 'hebrew', text: 'הִ֥וא', transliteration: 'hîʾ', lemma: 'הִוא', lemmaTranslit: 'hîʾ', gloss: 'she', morphology: { pos: 'pronoun', person: '3', gender: 'feminine', number: 'singular', rawCode: 'Pp3fs' }, strongs: 'H1931', position: 6 },
  { id: 'Gen.3.20.7', language: 'hebrew', text: 'הָֽיְתָ֖ה', transliteration: 'hāyəṯāh', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'was', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3fs' }, strongs: 'H1961', position: 7 },
  { id: 'Gen.3.20.8', language: 'hebrew', text: 'אֵ֥ם', transliteration: 'ʾēm', lemma: 'אֵם', lemmaTranslit: 'ʾēm', gloss: 'the mother of', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H517', position: 8 },
  { id: 'Gen.3.20.9', language: 'hebrew', text: 'כָּל־חָֽי', transliteration: 'kāl-ḥāy', lemma: 'חַי', lemmaTranslit: 'ḥay', gloss: 'all living', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Aamsa' }, strongs: 'H2416', position: 9 },
];

export const genesis3_20_translation: VerseTranslation = {
  verseRef: 'Gen.3.20',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And called the man the name of his wife Eve, because she was the mother of all living.', spans: [{ id: 'Gen.3.20.en.lit.0', text: 'And called the man the name of his wife Eve...', position: 0, sourceTokenIds: ['Gen.3.20.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'The man called his wife\'s name Eve, because she was the mother of all living.', spans: [{ id: 'Gen.3.20.en.idi.0', text: 'The man called his wife\'s name Eve...', position: 0, sourceTokenIds: ['Gen.3.20.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis3_20_notes: StudyNote[] = [
  { id: 'Gen.3.20.note.1', verseRef: 'Gen.3.20', sourceTokenIds: ['Gen.3.20.4'], category: 'lexical', title: 'Eve (ḥawwāh)', content: 'The name Eve (ḥawwāh) is related to the word for "living" (ḥay). Despite the curse of death, Adam names her "life-giver"—an act of faith.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 3:21 - God makes garments of skin
export const genesis3_21_tokens: SourceToken[] = [
  { id: 'Gen.3.21.0', language: 'hebrew', text: 'וַיַּעַשׂ֩', transliteration: 'wayyaʿaś', lemma: 'עָשָׂה', lemmaTranslit: 'ʿāśāh', gloss: 'And made', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H6213', position: 0 },
  { id: 'Gen.3.21.1', language: 'hebrew', text: 'יְהוָ֨ה', transliteration: 'yhwh', lemma: 'יְהוָה', lemmaTranslit: 'yhwh', gloss: 'YHWH', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 1 },
  { id: 'Gen.3.21.2', language: 'hebrew', text: 'אֱלֹהִ֜ים', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H430', position: 2 },
  { id: 'Gen.3.21.3', language: 'hebrew', text: 'לְאָדָ֧ם', transliteration: 'ləʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'for Adam', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 3 },
  { id: 'Gen.3.21.4', language: 'hebrew', text: 'וּלְאִשְׁתּ֛וֹ', transliteration: 'ûləʾištô', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'and for his wife', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H802', position: 4 },
  { id: 'Gen.3.21.5', language: 'hebrew', text: 'כָּתְנ֥וֹת', transliteration: 'kāṯənôṯ', lemma: 'כֻּתֹּנֶת', lemmaTranslit: 'kuttōneṯ', gloss: 'garments of', glossExtended: 'tunic, coat, robe', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'construct', rawCode: 'Ncfpc' }, strongs: 'H3801', position: 5 },
  { id: 'Gen.3.21.6', language: 'hebrew', text: 'ע֖וֹר', transliteration: 'ʿôr', lemma: 'עוֹר', lemmaTranslit: 'ʿôr', gloss: 'skin', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H5785', position: 6 },
  { id: 'Gen.3.21.7', language: 'hebrew', text: 'וַיַּלְבִּשֵֽׁם', transliteration: 'wayyalbiššēm', lemma: 'לָבַשׁ', lemmaTranslit: 'lāḇaš', gloss: 'and clothed them', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H3847', position: 7 },
];

export const genesis3_21_translation: VerseTranslation = {
  verseRef: 'Gen.3.21',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And made YHWH God for Adam and for his wife garments of skin and clothed them.', spans: [{ id: 'Gen.3.21.en.lit.0', text: 'And made YHWH God for Adam and for his wife...', position: 0, sourceTokenIds: ['Gen.3.21.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'And the LORD God made for Adam and for his wife garments of skins and clothed them.', spans: [{ id: 'Gen.3.21.en.idi.0', text: 'And the LORD God made for Adam and for his wife...', position: 0, sourceTokenIds: ['Gen.3.21.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis3_21_notes: StudyNote[] = [
  { id: 'Gen.3.21.note.1', verseRef: 'Gen.3.21', sourceTokenIds: ['Gen.3.21.5', 'Gen.3.21.6'], category: 'theological', title: 'Divine Provision', content: 'God provides adequate covering—animal skins require death. Many see here a foreshadowing of atonement: God covers sin through sacrifice (cf. Heb 9:22).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 3:22 - Lest he take from the tree of life
export const genesis3_22_tokens: SourceToken[] = [
  { id: 'Gen.3.22.0', language: 'hebrew', text: 'וַיֹּ֣אמֶר', transliteration: 'wayyōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'And said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H559', position: 0 },
  { id: 'Gen.3.22.1', language: 'hebrew', text: 'יְהוָ֣ה', transliteration: 'yhwh', lemma: 'יְהוָה', lemmaTranslit: 'yhwh', gloss: 'YHWH', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 1 },
  { id: 'Gen.3.22.2', language: 'hebrew', text: 'אֱלֹהִ֗ים', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H430', position: 2 },
  { id: 'Gen.3.22.3', language: 'hebrew', text: 'הֵ֤ן', transliteration: 'hēn', lemma: 'הֵן', lemmaTranslit: 'hēn', gloss: 'Behold', morphology: { pos: 'interjection', rawCode: 'Ij' }, strongs: 'H2005', position: 3 },
  { id: 'Gen.3.22.4', language: 'hebrew', text: 'הָֽאָדָם֙', transliteration: 'hāʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'the man', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 4 },
  { id: 'Gen.3.22.5', language: 'hebrew', text: 'הָיָה֙', transliteration: 'hāyāh', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'has become', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H1961', position: 5 },
  { id: 'Gen.3.22.6', language: 'hebrew', text: 'כְּאַחַ֣ד', transliteration: 'kəʾaḥaḏ', lemma: 'אֶחָד', lemmaTranslit: 'ʾeḥāḏ', gloss: 'like one of', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Acmsa' }, strongs: 'H259', position: 6 },
  { id: 'Gen.3.22.7', language: 'hebrew', text: 'מִמֶּ֔נּוּ', transliteration: 'mimmennû', lemma: 'מִן', lemmaTranslit: 'min', gloss: 'us', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H4480', position: 7 },
  { id: 'Gen.3.22.8', language: 'hebrew', text: 'לָדַ֖עַת', transliteration: 'lāḏaʿaṯ', lemma: 'יָדַע', lemmaTranslit: 'yāḏaʿ', gloss: 'to know', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'Vqc' }, strongs: 'H3045', position: 8 },
  { id: 'Gen.3.22.9', language: 'hebrew', text: 'ט֣וֹב', transliteration: 'ṭôḇ', lemma: 'טוֹב', lemmaTranslit: 'ṭôḇ', gloss: 'good', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Aamsa' }, strongs: 'H2896', position: 9 },
  { id: 'Gen.3.22.10', language: 'hebrew', text: 'וָרָ֑ע', transliteration: 'wārāʿ', lemma: 'רַע', lemmaTranslit: 'raʿ', gloss: 'and evil', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Aamsa' }, strongs: 'H7451', position: 10 },
  { id: 'Gen.3.22.11', language: 'hebrew', text: 'וְעַתָּ֣ה', transliteration: 'wəʿattāh', lemma: 'עַתָּה', lemmaTranslit: 'ʿattāh', gloss: 'and now', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H6258', position: 11 },
  { id: 'Gen.3.22.12', language: 'hebrew', text: 'פֶּן־', transliteration: 'pen-', lemma: 'פֶּן', lemmaTranslit: 'pen', gloss: 'lest', morphology: { pos: 'conjunction', rawCode: 'Cc' }, strongs: 'H6435', position: 12 },
  { id: 'Gen.3.22.13', language: 'hebrew', text: 'יִשְׁלַ֣ח', transliteration: 'yišlaḥ', lemma: 'שָׁלַח', lemmaTranslit: 'šālaḥ', gloss: 'he reach out', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi3ms' }, strongs: 'H7971', position: 13 },
  { id: 'Gen.3.22.14', language: 'hebrew', text: 'יָד֗וֹ', transliteration: 'yāḏô', lemma: 'יָד', lemmaTranslit: 'yāḏ', gloss: 'his hand', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H3027', position: 14 },
  { id: 'Gen.3.22.15', language: 'hebrew', text: 'וְלָקַח֙', transliteration: 'wəlāqaḥ', lemma: 'לָקַח', lemmaTranslit: 'lāqaḥ', gloss: 'and take', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H3947', position: 15 },
  { id: 'Gen.3.22.16', language: 'hebrew', text: 'גַּ֣ם', transliteration: 'gam', lemma: 'גַּם', lemmaTranslit: 'gam', gloss: 'also', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H1571', position: 16 },
  { id: 'Gen.3.22.17', language: 'hebrew', text: 'מֵעֵ֣ץ', transliteration: 'mēʿēṣ', lemma: 'עֵץ', lemmaTranslit: 'ʿēṣ', gloss: 'from the tree of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H6086', position: 17 },
  { id: 'Gen.3.22.18', language: 'hebrew', text: 'הַֽחַיִּ֔ים', transliteration: 'haḥayyîm', lemma: 'חַי', lemmaTranslit: 'ḥay', gloss: 'life', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H2416', position: 18 },
  { id: 'Gen.3.22.19', language: 'hebrew', text: 'וְאָכַ֖ל', transliteration: 'wəʾāḵal', lemma: 'אָכַל', lemmaTranslit: 'ʾāḵal', gloss: 'and eat', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H398', position: 19 },
  { id: 'Gen.3.22.20', language: 'hebrew', text: 'וָחַ֥י', transliteration: 'wāḥay', lemma: 'חָיָה', lemmaTranslit: 'ḥāyāh', gloss: 'and live', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H2425', position: 20 },
  { id: 'Gen.3.22.21', language: 'hebrew', text: 'לְעֹלָֽם', transliteration: 'ləʿōlām', lemma: 'עוֹלָם', lemmaTranslit: 'ʿôlām', gloss: 'forever', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H5769', position: 21 },
];

export const genesis3_22_translation: VerseTranslation = {
  verseRef: 'Gen.3.22',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And said YHWH God: Behold the man has become like one of us to know good and evil; and now lest he reach out his hand and take also from the tree of life and eat and live forever.', spans: [{ id: 'Gen.3.22.en.lit.0', text: 'And said YHWH God: Behold the man has become...', position: 0, sourceTokenIds: ['Gen.3.22.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Then the LORD God said, "Behold, the man has become like one of us in knowing good and evil. Now, lest he reach out his hand and take also of the tree of life and eat, and live forever—"', spans: [{ id: 'Gen.3.22.en.idi.0', text: 'Then the LORD God said, "Behold, the man has become..."', position: 0, sourceTokenIds: ['Gen.3.22.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis3_22_notes: StudyNote[] = [
  { id: 'Gen.3.22.note.1', verseRef: 'Gen.3.22', sourceTokenIds: ['Gen.3.22.6', 'Gen.3.22.7'], category: 'theological', title: 'Like One of Us', content: 'The plural "us" echoes 1:26. Divine council or Trinity? The man now knows good and evil experientially—but this knowledge brought death, not godhood.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.3.22.note.2', verseRef: 'Gen.3.22', sourceTokenIds: ['Gen.3.22.17', 'Gen.3.22.18'], category: 'theological', title: 'Tree of Life', content: 'The tree of life reappears in Revelation 2:7; 22:2, 14. Access is restored through Christ. Eternal life in a sinful state would be eternal misery.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 3:23 - Sent out from the garden
export const genesis3_23_tokens: SourceToken[] = [
  { id: 'Gen.3.23.0', language: 'hebrew', text: 'וַֽיְשַׁלְּחֵ֛הוּ', transliteration: 'wayšalləḥēhû', lemma: 'שָׁלַח', lemmaTranslit: 'šālaḥ', gloss: 'And sent him out', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'piel', rawCode: 'Vpw3ms' }, strongs: 'H7971', position: 0 },
  { id: 'Gen.3.23.1', language: 'hebrew', text: 'יְהוָ֥ה', transliteration: 'yhwh', lemma: 'יְהוָה', lemmaTranslit: 'yhwh', gloss: 'YHWH', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 1 },
  { id: 'Gen.3.23.2', language: 'hebrew', text: 'אֱלֹהִ֖ים', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H430', position: 2 },
  { id: 'Gen.3.23.3', language: 'hebrew', text: 'מִגַּן־עֵ֑דֶן', transliteration: 'miggan-ʿēḏen', lemma: 'גַּן', lemmaTranslit: 'gan', gloss: 'from the garden of Eden', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H1588', position: 3 },
  { id: 'Gen.3.23.4', language: 'hebrew', text: 'לַֽעֲבֹד֙', transliteration: 'laʿăḇōḏ', lemma: 'עָבַד', lemmaTranslit: 'ʿāḇaḏ', gloss: 'to work', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'Vqc' }, strongs: 'H5647', position: 4 },
  { id: 'Gen.3.23.5', language: 'hebrew', text: 'אֶת־הָ֣אֲדָמָ֔ה', transliteration: 'ʾeṯ-hāʾăḏāmāh', lemma: 'אֲדָמָה', lemmaTranslit: 'ʾăḏāmāh', gloss: 'the ground', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H127', position: 5 },
  { id: 'Gen.3.23.6', language: 'hebrew', text: 'אֲשֶׁ֥ר', transliteration: 'ʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'from which', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 6 },
  { id: 'Gen.3.23.7', language: 'hebrew', text: 'לֻקַּ֖ח', transliteration: 'luqqaḥ', lemma: 'לָקַח', lemmaTranslit: 'lāqaḥ', gloss: 'he was taken', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'pual', rawCode: 'Vpp3ms' }, strongs: 'H3947', position: 7 },
  { id: 'Gen.3.23.8', language: 'hebrew', text: 'מִשָּֽׁם', transliteration: 'miššām', lemma: 'שָׁם', lemmaTranslit: 'šām', gloss: 'from there', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H8033', position: 8 },
];

export const genesis3_23_translation: VerseTranslation = {
  verseRef: 'Gen.3.23',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And sent him out YHWH God from the garden of Eden to work the ground from which he was taken from there.', spans: [{ id: 'Gen.3.23.en.lit.0', text: 'And sent him out YHWH God from the garden of Eden...', position: 0, sourceTokenIds: ['Gen.3.23.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Therefore the LORD God sent him out from the garden of Eden to work the ground from which he was taken.', spans: [{ id: 'Gen.3.23.en.idi.0', text: 'Therefore the LORD God sent him out...', position: 0, sourceTokenIds: ['Gen.3.23.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis3_23_notes: StudyNote[] = [
  { id: 'Gen.3.23.note.1', verseRef: 'Gen.3.23', sourceTokenIds: ['Gen.3.23.4', 'Gen.3.23.5'], category: 'interpretive', title: 'Work Outside Eden', content: 'Man still works the ground, but now outside Eden—the pleasant garden exchanged for cursed soil. Work continues but is now toilsome.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 3:24 - Cherubim and flaming sword
export const genesis3_24_tokens: SourceToken[] = [
  { id: 'Gen.3.24.0', language: 'hebrew', text: 'וַיְגָ֖רֶשׁ', transliteration: 'wayḡāreš', lemma: 'גָּרַשׁ', lemmaTranslit: 'gāraš', gloss: 'And he drove out', glossExtended: 'to drive out, expel', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'piel', rawCode: 'Vpw3ms' }, strongs: 'H1644', position: 0 },
  { id: 'Gen.3.24.1', language: 'hebrew', text: 'אֶת־הָֽאָדָ֑ם', transliteration: 'ʾeṯ-hāʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'the man', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 1 },
  { id: 'Gen.3.24.2', language: 'hebrew', text: 'וַיַּשְׁכֵּן֩', transliteration: 'wayyašken', lemma: 'שָׁכַן', lemmaTranslit: 'šāḵan', gloss: 'and he placed', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H7931', position: 2 },
  { id: 'Gen.3.24.3', language: 'hebrew', text: 'מִקֶּ֨דֶם', transliteration: 'miqqeḏem', lemma: 'קֶדֶם', lemmaTranslit: 'qeḏem', gloss: 'at the east of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H6924', position: 3 },
  { id: 'Gen.3.24.4', language: 'hebrew', text: 'לְגַן־עֵ֜דֶן', transliteration: 'ləḡan-ʿēḏen', lemma: 'גַּן', lemmaTranslit: 'gan', gloss: 'the garden of Eden', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H1588', position: 4 },
  { id: 'Gen.3.24.5', language: 'hebrew', text: 'אֶת־הַכְּרֻבִ֗ים', transliteration: 'ʾeṯ-hakkərūḇîm', lemma: 'כְּרוּב', lemmaTranslit: 'kərûḇ', gloss: 'the cherubim', glossExtended: 'cherubim (angelic beings)', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H3742', position: 5 },
  { id: 'Gen.3.24.6', language: 'hebrew', text: 'וְאֵ֨ת', transliteration: 'wəʾēṯ', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: 'and', morphology: { pos: 'particle', rawCode: 'To' }, strongs: 'H853', position: 6 },
  { id: 'Gen.3.24.7', language: 'hebrew', text: 'לַ֤הַט', transliteration: 'lahaṭ', lemma: 'לַהַט', lemmaTranslit: 'lahaṭ', gloss: 'the flame of', glossExtended: 'flame, flashing', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H3858', position: 7 },
  { id: 'Gen.3.24.8', language: 'hebrew', text: 'הַחֶ֙רֶב֙', transliteration: 'haḥereḇ', lemma: 'חֶרֶב', lemmaTranslit: 'ḥereḇ', gloss: 'the sword', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H2719', position: 8 },
  { id: 'Gen.3.24.9', language: 'hebrew', text: 'הַמִּתְהַפֶּ֔כֶת', transliteration: 'hammiṯhappekeṯ', lemma: 'הָפַךְ', lemmaTranslit: 'hāp̄aḵ', gloss: 'that turned', glossExtended: 'turning, revolving', morphology: { pos: 'verb', mood: 'participle', stem: 'hithpael', rawCode: 'Vtrfs' }, strongs: 'H2015', position: 9 },
  { id: 'Gen.3.24.10', language: 'hebrew', text: 'לִשְׁמֹ֕ר', transliteration: 'lišmōr', lemma: 'שָׁמַר', lemmaTranslit: 'šāmar', gloss: 'to guard', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'Vqc' }, strongs: 'H8104', position: 10 },
  { id: 'Gen.3.24.11', language: 'hebrew', text: 'אֶת־דֶּ֖רֶךְ', transliteration: 'ʾeṯ-dereḵ', lemma: 'דֶּרֶךְ', lemmaTranslit: 'dereḵ', gloss: 'the way to', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H1870', position: 11 },
  { id: 'Gen.3.24.12', language: 'hebrew', text: 'עֵ֥ץ', transliteration: 'ʿēṣ', lemma: 'עֵץ', lemmaTranslit: 'ʿēṣ', gloss: 'the tree of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H6086', position: 12 },
  { id: 'Gen.3.24.13', language: 'hebrew', text: 'הַֽחַיִּֽים', transliteration: 'haḥayyîm', lemma: 'חַי', lemmaTranslit: 'ḥay', gloss: 'life', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H2416', position: 13 },
];

export const genesis3_24_translation: VerseTranslation = {
  verseRef: 'Gen.3.24',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And he drove out the man; and he placed at the east of the garden of Eden the cherubim and the flame of the sword turning to guard the way to the tree of life.', spans: [{ id: 'Gen.3.24.en.lit.0', text: 'And he drove out the man...', position: 0, sourceTokenIds: ['Gen.3.24.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'He drove out the man, and at the east of the garden of Eden he placed the cherubim and a flaming sword that turned every way to guard the way to the tree of life.', spans: [{ id: 'Gen.3.24.en.idi.0', text: 'He drove out the man, and at the east of the garden...', position: 0, sourceTokenIds: ['Gen.3.24.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis3_24_notes: StudyNote[] = [
  { id: 'Gen.3.24.note.1', verseRef: 'Gen.3.24', sourceTokenIds: ['Gen.3.24.5'], category: 'lexical', title: 'Cherubim (kərûḇîm)', content: 'Cherubim are angelic beings associated with God\'s throne and presence (Ezek 1, 10). They later guard the ark of the covenant (Ex 25:18-22).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.3.24.note.2', verseRef: 'Gen.3.24', sourceTokenIds: ['Gen.3.24.7', 'Gen.3.24.8', 'Gen.3.24.9'], category: 'theological', title: 'Flaming Sword', content: 'The sword bars access to life until redemption opens the way again. In Christ, the way to the tree of life is restored (Rev 22:14).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Export verse structures
export const genesis3_20_verse = { ref: 'Gen.3.20', sourceTokens: genesis3_20_tokens, translation: genesis3_20_translation, notes: genesis3_20_notes };
export const genesis3_21_verse = { ref: 'Gen.3.21', sourceTokens: genesis3_21_tokens, translation: genesis3_21_translation, notes: genesis3_21_notes };
export const genesis3_22_verse = { ref: 'Gen.3.22', sourceTokens: genesis3_22_tokens, translation: genesis3_22_translation, notes: genesis3_22_notes };
export const genesis3_23_verse = { ref: 'Gen.3.23', sourceTokens: genesis3_23_tokens, translation: genesis3_23_translation, notes: genesis3_23_notes };
export const genesis3_24_verse = { ref: 'Gen.3.24', sourceTokens: genesis3_24_tokens, translation: genesis3_24_translation, notes: genesis3_24_notes };

// Combined export
export const genesis3_20_24_verses = [
  genesis3_20_verse,
  genesis3_21_verse,
  genesis3_22_verse,
  genesis3_23_verse,
  genesis3_24_verse,
];

export default genesis3_20_24_verses;
