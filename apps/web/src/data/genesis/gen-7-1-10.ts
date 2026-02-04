/**
 * Genesis 7:1-10 - Hebrew morphological data
 * God's command to enter the ark and Noah's obedience
 * Source: Open Hebrew Bible (Tanach.us) - Public Domain
 */

import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

// Genesis 7:1 - Enter the ark, you and all your household
export const genesis7_1_tokens: SourceToken[] = [
  { id: 'Gen.7.1.0', language: 'hebrew', text: 'וַיֹּ֤אמֶר', transliteration: 'wayyōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'And said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H559', position: 0 },
  { id: 'Gen.7.1.1', language: 'hebrew', text: 'יְהוָה֙', transliteration: 'YHWH', lemma: 'יהוה', lemmaTranslit: 'YHWH', gloss: 'the LORD', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 1 },
  { id: 'Gen.7.1.2', language: 'hebrew', text: 'לְנֹ֔חַ', transliteration: 'lənōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'to Noah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 2 },
  { id: 'Gen.7.1.3', language: 'hebrew', text: 'בֹּֽא־אַתָּ֥ה', transliteration: 'bōʾ-ʾattāh', lemma: 'בּוֹא', lemmaTranslit: 'bôʾ', gloss: 'enter you', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', mood: 'imperative', stem: 'qal', rawCode: 'Vqv2ms' }, strongs: 'H935', position: 3 },
  { id: 'Gen.7.1.4', language: 'hebrew', text: 'וְכָל־בֵּיתְךָ֖', transliteration: 'wəḵāl-bêṯəḵā', lemma: 'בַּיִת', lemmaTranslit: 'bayiṯ', gloss: 'and all your household', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H1004', position: 4 },
  { id: 'Gen.7.1.5', language: 'hebrew', text: 'אֶל־הַתֵּבָ֑ה', transliteration: 'ʾel-hattēḇāh', lemma: 'תֵּבָה', lemmaTranslit: 'tēḇāh', gloss: 'into the ark', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8392', position: 5 },
  { id: 'Gen.7.1.6', language: 'hebrew', text: 'כִּֽי־אֹתְךָ֥', transliteration: 'kî-ʾōṯəḵā', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: 'for you', morphology: { pos: 'preposition', rawCode: 'To' }, strongs: 'H853', position: 6 },
  { id: 'Gen.7.1.7', language: 'hebrew', text: 'רָאִ֛יתִי', transliteration: 'rāʾîṯî', lemma: 'רָאָה', lemmaTranslit: 'rāʾāh', gloss: 'I have seen', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp1cs' }, strongs: 'H7200', position: 7 },
  { id: 'Gen.7.1.8', language: 'hebrew', text: 'צַדִּ֥יק', transliteration: 'ṣaddîq', lemma: 'צַדִּיק', lemmaTranslit: 'ṣaddîq', gloss: 'righteous', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ajmsa' }, strongs: 'H6662', position: 8 },
  { id: 'Gen.7.1.9', language: 'hebrew', text: 'לְפָנַ֖י', transliteration: 'ləp̄ānay', lemma: 'פָּנִים', lemmaTranslit: 'pānîm', gloss: 'before Me', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H6440', position: 9 },
  { id: 'Gen.7.1.10', language: 'hebrew', text: 'בַּדּ֥וֹר', transliteration: 'baddôr', lemma: 'דּוֹר', lemmaTranslit: 'dôr', gloss: 'in generation', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H1755', position: 10 },
  { id: 'Gen.7.1.11', language: 'hebrew', text: 'הַזֶּֽה', transliteration: 'hazzeh', lemma: 'זֶה', lemmaTranslit: 'zeh', gloss: 'this', morphology: { pos: 'pronoun', rawCode: 'Pdxms' }, strongs: 'H2088', position: 11 },
];

export const genesis7_1_translation: VerseTranslation = {
  verseRef: 'Gen.7.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And said the LORD to Noah, "Enter, you and all your household, into the ark, for you I have seen righteous before Me in this generation."', spans: [{ id: 'Gen.7.1.en.lit.0', text: 'And said the LORD to Noah...', position: 0, sourceTokenIds: ['Gen.7.1.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Then the LORD said to Noah, "Go into the ark, you and all your household, for I have seen that you are righteous before me in this generation."', spans: [{ id: 'Gen.7.1.en.idi.0', text: 'Then the LORD said to Noah...', position: 0, sourceTokenIds: ['Gen.7.1.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis7_1_notes: StudyNote[] = [
  { id: 'Gen.7.1.note.1', verseRef: 'Gen.7.1', sourceTokenIds: ['Gen.7.1.1'], category: 'theological', title: 'YHWH Speaking', content: 'In chapter 6, Elohim (God) gave instructions. Here YHWH (the LORD) calls Noah into the ark. YHWH emphasizes the covenant relationship; Elohim emphasizes His sovereign creative power. Both names are God; different aspects are in view.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.7.1.note.2', verseRef: 'Gen.7.1', sourceTokenIds: ['Gen.7.1.8'], category: 'theological', title: 'Righteous (ṣaddîq)', content: 'Noah\'s righteousness is relative to his generation ("in this generation"), not absolute perfection. He later sins (9:21). Yet faith was reckoned as righteousness—Noah believed God and obeyed, making him righteous in God\'s sight.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 7:2 - Take seven pairs of clean animals
export const genesis7_2_tokens: SourceToken[] = [
  { id: 'Gen.7.2.0', language: 'hebrew', text: 'מִכֹּ֣ל', transliteration: 'mikkōl', lemma: 'כֹּל', lemmaTranslit: 'kōl', gloss: 'From every', morphology: { pos: 'noun', rawCode: 'Ncmsa' }, strongs: 'H3605', position: 0 },
  { id: 'Gen.7.2.1', language: 'hebrew', text: 'הַבְּהֵמָ֣ה', transliteration: 'habbəhēmāh', lemma: 'בְּהֵמָה', lemmaTranslit: 'bəhēmāh', gloss: 'the clean animal', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H929', position: 1 },
  { id: 'Gen.7.2.2', language: 'hebrew', text: 'הַטְּהוֹרָ֗ה', transliteration: 'haṭṭəhôrāh', lemma: 'טָהוֹר', lemmaTranslit: 'ṭāhôr', gloss: 'clean', morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ajfsa' }, strongs: 'H2889', position: 2 },
  { id: 'Gen.7.2.3', language: 'hebrew', text: 'תִּֽקַּח־לְךָ֛', transliteration: 'tiqqaḥ-ləḵā', lemma: 'לָקַח', lemmaTranslit: 'lāqaḥ', gloss: 'you shall take for yourself', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi2ms' }, strongs: 'H3947', position: 3 },
  { id: 'Gen.7.2.4', language: 'hebrew', text: 'שִׁבְעָ֥ה', transliteration: 'šiḇʿāh', lemma: 'שֶׁבַע', lemmaTranslit: 'šeḇaʿ', gloss: 'seven', morphology: { pos: 'numeral', rawCode: 'Acmsa' }, strongs: 'H7651', position: 4 },
  { id: 'Gen.7.2.5', language: 'hebrew', text: 'שִׁבְעָ֖ה', transliteration: 'šiḇʿāh', lemma: 'שֶׁבַע', lemmaTranslit: 'šeḇaʿ', gloss: 'seven', morphology: { pos: 'numeral', rawCode: 'Acmsa' }, strongs: 'H7651', position: 5 },
  { id: 'Gen.7.2.6', language: 'hebrew', text: 'אִ֣ישׁ', transliteration: 'ʾîš', lemma: 'אִישׁ', lemmaTranslit: 'ʾîš', gloss: 'a male', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H376', position: 6 },
  { id: 'Gen.7.2.7', language: 'hebrew', text: 'וְאִשְׁתּ֑וֹ', transliteration: 'wəʾištô', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'and his female', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H802', position: 7 },
  { id: 'Gen.7.2.8', language: 'hebrew', text: 'וּמִן־הַבְּהֵמָ֡ה', transliteration: 'ûmin-habbəhēmāh', lemma: 'בְּהֵמָה', lemmaTranslit: 'bəhēmāh', gloss: 'and from the animal', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H929', position: 8 },
  { id: 'Gen.7.2.9', language: 'hebrew', text: 'אֲשֶׁ֨ר', transliteration: 'ʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'that', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 9 },
  { id: 'Gen.7.2.10', language: 'hebrew', text: 'לֹ֤א', transliteration: 'lōʾ', lemma: 'לֹא', lemmaTranslit: 'lōʾ', gloss: 'not', morphology: { pos: 'adverb', rawCode: 'Tn' }, strongs: 'H3808', position: 10 },
  { id: 'Gen.7.2.11', language: 'hebrew', text: 'טְהֹרָה֙', transliteration: 'ṭəhōrāh', lemma: 'טָהוֹר', lemmaTranslit: 'ṭāhôr', gloss: 'clean', morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ajfsa' }, strongs: 'H2889', position: 11 },
  { id: 'Gen.7.2.12', language: 'hebrew', text: 'הִ֔וא', transliteration: 'hîʾ', lemma: 'הוּא', lemmaTranslit: 'hûʾ', gloss: 'it is', morphology: { pos: 'pronoun', person: '3', gender: 'feminine', number: 'singular', rawCode: 'Pp3fs' }, strongs: 'H1931', position: 12 },
  { id: 'Gen.7.2.13', language: 'hebrew', text: 'שְׁנַ֖יִם', transliteration: 'šənayim', lemma: 'שְׁנַיִם', lemmaTranslit: 'šənayim', gloss: 'two', morphology: { pos: 'numeral', gender: 'masculine', number: 'dual', rawCode: 'Acmda' }, strongs: 'H8147', position: 13 },
  { id: 'Gen.7.2.14', language: 'hebrew', text: 'אִ֥ישׁ', transliteration: 'ʾîš', lemma: 'אִישׁ', lemmaTranslit: 'ʾîš', gloss: 'a male', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H376', position: 14 },
  { id: 'Gen.7.2.15', language: 'hebrew', text: 'וְאִשְׁתּֽוֹ', transliteration: 'wəʾištô', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'and his female', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H802', position: 15 },
];

export const genesis7_2_translation: VerseTranslation = {
  verseRef: 'Gen.7.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: '"From every clean animal you shall take for yourself seven seven, a male and his female; and from the animal that is not clean, two, a male and his female."', spans: [{ id: 'Gen.7.2.en.lit.0', text: 'From every clean animal...', position: 0, sourceTokenIds: ['Gen.7.2.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"Take with you seven pairs of all clean animals, the male and his mate, and a pair of the animals that are not clean, the male and his mate,"', spans: [{ id: 'Gen.7.2.en.idi.0', text: 'Take with you seven pairs...', position: 0, sourceTokenIds: ['Gen.7.2.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis7_2_notes: StudyNote[] = [
  { id: 'Gen.7.2.note.1', verseRef: 'Gen.7.2', sourceTokenIds: ['Gen.7.2.2'], category: 'theological', title: 'Clean Animals Before Sinai', content: 'The distinction between clean (ṭāhôr) and unclean animals predates the Mosaic law. Noah knew which animals were suitable for sacrifice. This reveals that God\'s moral and ceremonial categories existed from creation, not just from Sinai.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.7.2.note.2', verseRef: 'Gen.7.2', sourceTokenIds: ['Gen.7.2.4', 'Gen.7.2.5'], category: 'translation-choice', title: 'Seven Seven', content: 'The Hebrew "šiḇʿāh šiḇʿāh" (seven seven) is distributive: seven pairs (male and female). Some interpret it as seven total (3 pairs + 1 male for sacrifice). The extra clean animals provided for sacrifice (8:20) and future food (9:3).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 7:3 - Also seven pairs of birds
export const genesis7_3_tokens: SourceToken[] = [
  { id: 'Gen.7.3.0', language: 'hebrew', text: 'גַּ֣ם', transliteration: 'gam', lemma: 'גַּם', lemmaTranslit: 'gam', gloss: 'Also', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H1571', position: 0 },
  { id: 'Gen.7.3.1', language: 'hebrew', text: 'מֵע֧וֹף', transliteration: 'mēʿôp̄', lemma: 'עוֹף', lemmaTranslit: 'ʿôp̄', gloss: 'from the birds of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H5775', position: 1 },
  { id: 'Gen.7.3.2', language: 'hebrew', text: 'הַשָּׁמַ֗יִם', transliteration: 'haššāmayim', lemma: 'שָׁמַיִם', lemmaTranslit: 'šāmayim', gloss: 'the heavens', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H8064', position: 2 },
  { id: 'Gen.7.3.3', language: 'hebrew', text: 'שִׁבְעָ֥ה', transliteration: 'šiḇʿāh', lemma: 'שֶׁבַע', lemmaTranslit: 'šeḇaʿ', gloss: 'seven', morphology: { pos: 'numeral', rawCode: 'Acmsa' }, strongs: 'H7651', position: 3 },
  { id: 'Gen.7.3.4', language: 'hebrew', text: 'שִׁבְעָ֖ה', transliteration: 'šiḇʿāh', lemma: 'שֶׁבַע', lemmaTranslit: 'šeḇaʿ', gloss: 'seven', morphology: { pos: 'numeral', rawCode: 'Acmsa' }, strongs: 'H7651', position: 4 },
  { id: 'Gen.7.3.5', language: 'hebrew', text: 'זָכָ֣ר', transliteration: 'zāḵār', lemma: 'זָכָר', lemmaTranslit: 'zāḵār', gloss: 'male', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H2145', position: 5 },
  { id: 'Gen.7.3.6', language: 'hebrew', text: 'וּנְקֵבָ֑ה', transliteration: 'ûnəqēḇāh', lemma: 'נְקֵבָה', lemmaTranslit: 'nəqēḇāh', gloss: 'and female', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H5347', position: 6 },
  { id: 'Gen.7.3.7', language: 'hebrew', text: 'לְחַיּ֥וֹת', transliteration: 'ləḥayyôṯ', lemma: 'חָיָה', lemmaTranslit: 'ḥāyāh', gloss: 'to keep alive', morphology: { pos: 'verb', mood: 'infinitive', stem: 'piel', rawCode: 'Vpc' }, strongs: 'H2421', position: 7 },
  { id: 'Gen.7.3.8', language: 'hebrew', text: 'זֶ֖רַע', transliteration: 'zeraʿ', lemma: 'זֶרַע', lemmaTranslit: 'zeraʿ', gloss: 'offspring', glossExtended: 'seed', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H2233', position: 8 },
  { id: 'Gen.7.3.9', language: 'hebrew', text: 'עַל־פְּנֵ֥י', transliteration: 'ʿal-pənê', lemma: 'פָּנִים', lemmaTranslit: 'pānîm', gloss: 'on the face of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H6440', position: 9 },
  { id: 'Gen.7.3.10', language: 'hebrew', text: 'כָל־הָאָֽרֶץ', transliteration: 'ḵāl-hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'all the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 10 },
];

export const genesis7_3_translation: VerseTranslation = {
  verseRef: 'Gen.7.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: '"Also from the birds of the heavens seven seven, male and female, to keep alive offspring on the face of all the earth."', spans: [{ id: 'Gen.7.3.en.lit.0', text: 'Also from the birds of the heavens...', position: 0, sourceTokenIds: ['Gen.7.3.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"and seven pairs of the birds of the heavens also, male and female, to keep their offspring alive on the face of all the earth."', spans: [{ id: 'Gen.7.3.en.idi.0', text: 'and seven pairs of the birds of the heavens...', position: 0, sourceTokenIds: ['Gen.7.3.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis7_3_notes: StudyNote[] = [
  { id: 'Gen.7.3.note.1', verseRef: 'Gen.7.3', sourceTokenIds: ['Gen.7.3.8'], category: 'theological', title: 'To Keep Alive Seed', content: 'The purpose is preservation of zeraʿ (זֶרַע, seed/offspring). This echoes the promise of Genesis 3:15—the seed of the woman. The flood will not destroy the line through which the Messiah will come.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 7:4 - In seven days I will send rain
export const genesis7_4_tokens: SourceToken[] = [
  { id: 'Gen.7.4.0', language: 'hebrew', text: 'כִּי֩', transliteration: 'kî', lemma: 'כִּי', lemmaTranslit: 'kî', gloss: 'For', morphology: { pos: 'conjunction', rawCode: 'C' }, strongs: 'H3588', position: 0 },
  { id: 'Gen.7.4.1', language: 'hebrew', text: 'לְיָמִ֨ים', transliteration: 'ləyāmîm', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'in days', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H3117', position: 1 },
  { id: 'Gen.7.4.2', language: 'hebrew', text: 'ע֜וֹד', transliteration: 'ʿôḏ', lemma: 'עוֹד', lemmaTranslit: 'ʿôḏ', gloss: 'yet', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H5750', position: 2 },
  { id: 'Gen.7.4.3', language: 'hebrew', text: 'שִׁבְעָ֗ה', transliteration: 'šiḇʿāh', lemma: 'שֶׁבַע', lemmaTranslit: 'šeḇaʿ', gloss: 'seven', morphology: { pos: 'numeral', rawCode: 'Acmsa' }, strongs: 'H7651', position: 3 },
  { id: 'Gen.7.4.4', language: 'hebrew', text: 'אָֽנֹכִי֙', transliteration: 'ʾānōḵî', lemma: 'אָנֹכִי', lemmaTranslit: 'ʾānōḵî', gloss: 'I', morphology: { pos: 'pronoun', person: '1', gender: 'common', number: 'singular', rawCode: 'Pp1cs' }, strongs: 'H595', position: 4 },
  { id: 'Gen.7.4.5', language: 'hebrew', text: 'מַמְטִ֣יר', transliteration: 'mamṭîr', lemma: 'מָטַר', lemmaTranslit: 'māṭar', gloss: 'will cause to rain', morphology: { pos: 'verb', gender: 'masculine', number: 'singular', stem: 'hiphil', mood: 'participle', rawCode: 'Vhpms' }, strongs: 'H4305', position: 5 },
  { id: 'Gen.7.4.6', language: 'hebrew', text: 'עַל־הָאָ֔רֶץ', transliteration: 'ʿal-hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'upon the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 6 },
  { id: 'Gen.7.4.7', language: 'hebrew', text: 'אַרְבָּעִ֣ים', transliteration: 'ʾarbaʿîm', lemma: 'אַרְבָּעִים', lemmaTranslit: 'ʾarbaʿîm', gloss: 'forty', morphology: { pos: 'numeral', rawCode: 'Acmpa' }, strongs: 'H705', position: 7 },
  { id: 'Gen.7.4.8', language: 'hebrew', text: 'י֔וֹם', transliteration: 'yôm', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'days', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3117', position: 8 },
  { id: 'Gen.7.4.9', language: 'hebrew', text: 'וְאַרְבָּעִ֖ים', transliteration: 'wəʾarbaʿîm', lemma: 'אַרְבָּעִים', lemmaTranslit: 'ʾarbaʿîm', gloss: 'and forty', morphology: { pos: 'numeral', rawCode: 'Acmpa' }, strongs: 'H705', position: 9 },
  { id: 'Gen.7.4.10', language: 'hebrew', text: 'לָ֑יְלָה', transliteration: 'lāyəlāh', lemma: 'לַיְלָה', lemmaTranslit: 'laylāh', gloss: 'nights', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3915', position: 10 },
  { id: 'Gen.7.4.11', language: 'hebrew', text: 'וּמָחִ֗יתִי', transliteration: 'ûmāḥîṯî', lemma: 'מָחָה', lemmaTranslit: 'māḥāh', gloss: 'and I will blot out', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp1cs' }, strongs: 'H4229', position: 11 },
  { id: 'Gen.7.4.12', language: 'hebrew', text: 'אֶֽת־כָּל־הַיְקוּם֙', transliteration: 'ʾeṯ-kāl-hayəqûm', lemma: 'יְקוּם', lemmaTranslit: 'yəqûm', gloss: 'every living thing', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3351', position: 12 },
  { id: 'Gen.7.4.13', language: 'hebrew', text: 'אֲשֶׁ֣ר', transliteration: 'ʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'that', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 13 },
  { id: 'Gen.7.4.14', language: 'hebrew', text: 'עָשִׂ֔יתִי', transliteration: 'ʿāśîṯî', lemma: 'עָשָׂה', lemmaTranslit: 'ʿāśāh', gloss: 'I have made', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp1cs' }, strongs: 'H6213', position: 14 },
  { id: 'Gen.7.4.15', language: 'hebrew', text: 'מֵעַ֖ל', transliteration: 'mēʿal', lemma: 'עַל', lemmaTranslit: 'ʿal', gloss: 'from upon', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H5921', position: 15 },
  { id: 'Gen.7.4.16', language: 'hebrew', text: 'פְּנֵ֥י', transliteration: 'pənê', lemma: 'פָּנִים', lemmaTranslit: 'pānîm', gloss: 'the face of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H6440', position: 16 },
  { id: 'Gen.7.4.17', language: 'hebrew', text: 'הָֽאֲדָמָֽה', transliteration: 'hāʾăḏāmāh', lemma: 'אֲדָמָה', lemmaTranslit: 'ʾăḏāmāh', gloss: 'the ground', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H127', position: 17 },
];

export const genesis7_4_translation: VerseTranslation = {
  verseRef: 'Gen.7.4',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: '"For in yet seven days, I am causing to rain upon the earth forty days and forty nights, and I will blot out every living thing that I have made from upon the face of the ground."', spans: [{ id: 'Gen.7.4.en.lit.0', text: 'For in yet seven days...', position: 0, sourceTokenIds: ['Gen.7.4.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"For in seven days I will send rain on the earth forty days and forty nights, and every living thing that I have made I will blot out from the face of the ground."', spans: [{ id: 'Gen.7.4.en.idi.0', text: 'For in seven days I will send rain...', position: 0, sourceTokenIds: ['Gen.7.4.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis7_4_notes: StudyNote[] = [
  { id: 'Gen.7.4.note.1', verseRef: 'Gen.7.4', sourceTokenIds: ['Gen.7.4.3'], category: 'interpretive', title: 'Seven Days Warning', content: 'God gives Noah seven days to complete preparations and enter the ark. This grace period shows God\'s patience—one final week for repentance while judgment is certain.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.7.4.note.2', verseRef: 'Gen.7.4', sourceTokenIds: ['Gen.7.4.7', 'Gen.7.4.8', 'Gen.7.4.9', 'Gen.7.4.10'], category: 'cross-reference', title: 'Forty Days and Nights', content: 'The number forty signifies testing and judgment in Scripture: Moses on Sinai (Exod 24:18), Israel\'s wandering (Num 14:33), Elijah\'s journey (1 Kgs 19:8), Jesus\' temptation (Matt 4:2).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 7:5 - Noah did all that the LORD commanded
export const genesis7_5_tokens: SourceToken[] = [
  { id: 'Gen.7.5.0', language: 'hebrew', text: 'וַיַּ֖עַשׂ', transliteration: 'wayyaʿaś', lemma: 'עָשָׂה', lemmaTranslit: 'ʿāśāh', gloss: 'And did', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H6213', position: 0 },
  { id: 'Gen.7.5.1', language: 'hebrew', text: 'נֹ֑חַ', transliteration: 'nōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'Noah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 1 },
  { id: 'Gen.7.5.2', language: 'hebrew', text: 'כְּכֹ֥ל', transliteration: 'kəḵōl', lemma: 'כֹּל', lemmaTranslit: 'kōl', gloss: 'according to all', morphology: { pos: 'noun', rawCode: 'Ncmsa' }, strongs: 'H3605', position: 2 },
  { id: 'Gen.7.5.3', language: 'hebrew', text: 'אֲשֶׁר־צִוָּ֖הוּ', transliteration: 'ʾăšer-ṣiwwāhû', lemma: 'צָוָה', lemmaTranslit: 'ṣāwāh', gloss: 'that commanded him', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'piel', rawCode: 'Vpp3ms' }, strongs: 'H6680', position: 3 },
  { id: 'Gen.7.5.4', language: 'hebrew', text: 'יְהוָֽה', transliteration: 'YHWH', lemma: 'יהוה', lemmaTranslit: 'YHWH', gloss: 'the LORD', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 4 },
];

export const genesis7_5_translation: VerseTranslation = {
  verseRef: 'Gen.7.5',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And did Noah according to all that commanded him the LORD.', spans: [{ id: 'Gen.7.5.en.lit.0', text: 'And did Noah according to all...', position: 0, sourceTokenIds: ['Gen.7.5.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'And Noah did all that the LORD had commanded him.', spans: [{ id: 'Gen.7.5.en.idi.0', text: 'And Noah did all that the LORD had commanded him...', position: 0, sourceTokenIds: ['Gen.7.5.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis7_5_notes: StudyNote[] = [
  { id: 'Gen.7.5.note.1', verseRef: 'Gen.7.5', sourceTokenIds: ['Gen.7.5.0', 'Gen.7.5.2'], category: 'cross-reference', title: 'Repeated Obedience', content: 'This refrain echoes 6:22 and will appear again in 7:9, 16. Noah\'s obedience is consistent, complete, and continual—the pattern of true faith working through obedience.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 7:6 - Noah was 600 years old when the flood came
export const genesis7_6_tokens: SourceToken[] = [
  { id: 'Gen.7.6.0', language: 'hebrew', text: 'וְנֹ֕חַ', transliteration: 'wənōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'And Noah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 0 },
  { id: 'Gen.7.6.1', language: 'hebrew', text: 'בֶּן־שֵׁ֥שׁ', transliteration: 'ben-šēš', lemma: 'שֵׁשׁ', lemmaTranslit: 'šēš', gloss: 'was a son of six', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H8337', position: 1 },
  { id: 'Gen.7.6.2', language: 'hebrew', text: 'מֵא֖וֹת', transliteration: 'mēʾôṯ', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'hundred', morphology: { pos: 'numeral', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Acfpa' }, strongs: 'H3967', position: 2 },
  { id: 'Gen.7.6.3', language: 'hebrew', text: 'שָׁנָ֑ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 3 },
  { id: 'Gen.7.6.4', language: 'hebrew', text: 'וְהַמַּבּ֣וּל', transliteration: 'wəhammabbûl', lemma: 'מַבּוּל', lemmaTranslit: 'mabbûl', gloss: 'and the flood', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3999', position: 4 },
  { id: 'Gen.7.6.5', language: 'hebrew', text: 'הָיָ֥ה', transliteration: 'hāyāh', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'was', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H1961', position: 5 },
  { id: 'Gen.7.6.6', language: 'hebrew', text: 'מַ֖יִם', transliteration: 'mayim', lemma: 'מַיִם', lemmaTranslit: 'mayim', gloss: 'waters', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H4325', position: 6 },
  { id: 'Gen.7.6.7', language: 'hebrew', text: 'עַל־הָאָֽרֶץ', transliteration: 'ʿal-hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'upon the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 7 },
];

export const genesis7_6_translation: VerseTranslation = {
  verseRef: 'Gen.7.6',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And Noah was a son of six hundred years, and the flood was waters upon the earth.', spans: [{ id: 'Gen.7.6.en.lit.0', text: 'And Noah was a son of six hundred years...', position: 0, sourceTokenIds: ['Gen.7.6.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Noah was six hundred years old when the flood of waters came upon the earth.', spans: [{ id: 'Gen.7.6.en.idi.0', text: 'Noah was six hundred years old...', position: 0, sourceTokenIds: ['Gen.7.6.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis7_6_notes: StudyNote[] = [
  { id: 'Gen.7.6.note.1', verseRef: 'Gen.7.6', sourceTokenIds: ['Gen.7.6.1', 'Gen.7.6.2'], category: 'interpretive', title: '600 Years Old', content: 'Noah began building the ark after age 500 (5:32) and the flood came when he was 600. This means the ark project took less than 100 years—not the 120 years sometimes assumed (6:3 is a warning, not a construction period).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 7:7 - Noah and his family entered the ark
export const genesis7_7_tokens: SourceToken[] = [
  { id: 'Gen.7.7.0', language: 'hebrew', text: 'וַיָּ֣בֹא', transliteration: 'wayyāḇōʾ', lemma: 'בּוֹא', lemmaTranslit: 'bôʾ', gloss: 'And entered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H935', position: 0 },
  { id: 'Gen.7.7.1', language: 'hebrew', text: 'נֹ֗חַ', transliteration: 'nōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'Noah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 1 },
  { id: 'Gen.7.7.2', language: 'hebrew', text: 'וּ֠שֵׁם', transliteration: 'ûšēm', lemma: 'שֵׁם', lemmaTranslit: 'šēm', gloss: 'and Shem', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8035', position: 2 },
  { id: 'Gen.7.7.3', language: 'hebrew', text: 'וְחָ֤ם', transliteration: 'wəḥām', lemma: 'חָם', lemmaTranslit: 'ḥām', gloss: 'and Ham', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2526', position: 3 },
  { id: 'Gen.7.7.4', language: 'hebrew', text: 'וָיֶ֙פֶת֙', transliteration: 'wāyep̄eṯ', lemma: 'יֶפֶת', lemmaTranslit: 'yep̄eṯ', gloss: 'and Japheth', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3315', position: 4 },
  { id: 'Gen.7.7.5', language: 'hebrew', text: 'בְּנֵי־נֹ֔חַ', transliteration: 'bənê-nōaḥ', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'the sons of Noah', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H1121', position: 5 },
  { id: 'Gen.7.7.6', language: 'hebrew', text: 'וְאֵ֣שֶׁת', transliteration: 'wəʾēšeṯ', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'and the wife of', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H802', position: 6 },
  { id: 'Gen.7.7.7', language: 'hebrew', text: 'נֹ֔חַ', transliteration: 'nōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'Noah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 7 },
  { id: 'Gen.7.7.8', language: 'hebrew', text: 'וּשְׁלֹ֥שֶׁת', transliteration: 'ûšəlōšeṯ', lemma: 'שָׁלֹשׁ', lemmaTranslit: 'šālōš', gloss: 'and the three', morphology: { pos: 'numeral', rawCode: 'Acfsc' }, strongs: 'H7969', position: 8 },
  { id: 'Gen.7.7.9', language: 'hebrew', text: 'נְשֵֽׁי־בָנָ֖יו', transliteration: 'nəšê-ḇānāyw', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'wives of his sons', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'construct', rawCode: 'Ncfpc' }, strongs: 'H802', position: 9 },
  { id: 'Gen.7.7.10', language: 'hebrew', text: 'אִתָּ֑ם', transliteration: 'ʾittām', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: 'with them', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H854', position: 10 },
  { id: 'Gen.7.7.11', language: 'hebrew', text: 'אֶל־הַתֵּבָ֖ה', transliteration: 'ʾel-hattēḇāh', lemma: 'תֵּבָה', lemmaTranslit: 'tēḇāh', gloss: 'into the ark', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8392', position: 11 },
  { id: 'Gen.7.7.12', language: 'hebrew', text: 'מִפְּנֵ֖י', transliteration: 'mippənê', lemma: 'פָּנִים', lemmaTranslit: 'pānîm', gloss: 'because of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H6440', position: 12 },
  { id: 'Gen.7.7.13', language: 'hebrew', text: 'מֵ֥י', transliteration: 'mê', lemma: 'מַיִם', lemmaTranslit: 'mayim', gloss: 'the waters of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H4325', position: 13 },
  { id: 'Gen.7.7.14', language: 'hebrew', text: 'הַמַּבּֽוּל', transliteration: 'hammabbûl', lemma: 'מַבּוּל', lemmaTranslit: 'mabbûl', gloss: 'the flood', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3999', position: 14 },
];

export const genesis7_7_translation: VerseTranslation = {
  verseRef: 'Gen.7.7',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And entered Noah, and Shem and Ham and Japheth the sons of Noah, and the wife of Noah, and the three wives of his sons with them, into the ark, because of the waters of the flood.', spans: [{ id: 'Gen.7.7.en.lit.0', text: 'And entered Noah...', position: 0, sourceTokenIds: ['Gen.7.7.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'And Noah and his sons and his wife and his sons\' wives with him went into the ark to escape the waters of the flood.', spans: [{ id: 'Gen.7.7.en.idi.0', text: 'And Noah and his sons...', position: 0, sourceTokenIds: ['Gen.7.7.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis7_7_notes: StudyNote[] = [
  { id: 'Gen.7.7.note.1', verseRef: 'Gen.7.7', sourceTokenIds: [], category: 'interpretive', title: 'Eight Souls Saved', content: 'Eight people entered the ark: Noah, his wife, three sons, and their three wives. Peter references this: "eight persons, were brought safely through water" (1 Pet 3:20). Eight is the number of new beginnings—circumcision on the eighth day, Jesus rose on the eighth day.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 7:8 - Clean and unclean animals entered
export const genesis7_8_tokens: SourceToken[] = [
  { id: 'Gen.7.8.0', language: 'hebrew', text: 'מִן־הַבְּהֵמָ֣ה', transliteration: 'min-habbəhēmāh', lemma: 'בְּהֵמָה', lemmaTranslit: 'bəhēmāh', gloss: 'From the animal', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H929', position: 0 },
  { id: 'Gen.7.8.1', language: 'hebrew', text: 'הַטְּהוֹרָ֗ה', transliteration: 'haṭṭəhôrāh', lemma: 'טָהוֹר', lemmaTranslit: 'ṭāhôr', gloss: 'the clean', morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ajfsa' }, strongs: 'H2889', position: 1 },
  { id: 'Gen.7.8.2', language: 'hebrew', text: 'וּמִן־הַ֨בְּהֵמָ֔ה', transliteration: 'ûmin-habbəhēmāh', lemma: 'בְּהֵמָה', lemmaTranslit: 'bəhēmāh', gloss: 'and from the animal', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H929', position: 2 },
  { id: 'Gen.7.8.3', language: 'hebrew', text: 'אֲשֶׁ֥ר', transliteration: 'ʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'that', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 3 },
  { id: 'Gen.7.8.4', language: 'hebrew', text: 'אֵינֶ֖נָּה', transliteration: 'ʾênennāh', lemma: 'אַיִן', lemmaTranslit: 'ʾayin', gloss: 'is not', morphology: { pos: 'particle', rawCode: 'Tn' }, strongs: 'H369', position: 4 },
  { id: 'Gen.7.8.5', language: 'hebrew', text: 'טְהֹרָ֑ה', transliteration: 'ṭəhōrāh', lemma: 'טָהוֹר', lemmaTranslit: 'ṭāhôr', gloss: 'clean', morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ajfsa' }, strongs: 'H2889', position: 5 },
  { id: 'Gen.7.8.6', language: 'hebrew', text: 'וּמִן־הָע֕וֹף', transliteration: 'ûmin-hāʿôp̄', lemma: 'עוֹף', lemmaTranslit: 'ʿôp̄', gloss: 'and from the birds', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H5775', position: 6 },
  { id: 'Gen.7.8.7', language: 'hebrew', text: 'וְכֹ֥ל', transliteration: 'wəḵōl', lemma: 'כֹּל', lemmaTranslit: 'kōl', gloss: 'and all', morphology: { pos: 'noun', rawCode: 'Ncmsa' }, strongs: 'H3605', position: 7 },
  { id: 'Gen.7.8.8', language: 'hebrew', text: 'אֲשֶׁר־רֹמֵ֖שׂ', transliteration: 'ʾăšer-rōmēś', lemma: 'רָמַשׂ', lemmaTranslit: 'rāmaś', gloss: 'that creeps on', morphology: { pos: 'verb', gender: 'masculine', number: 'singular', stem: 'qal', mood: 'participle', rawCode: 'Vqpms' }, strongs: 'H7430', position: 8 },
  { id: 'Gen.7.8.9', language: 'hebrew', text: 'עַל־הָֽאֲדָמָֽה', transliteration: 'ʿal-hāʾăḏāmāh', lemma: 'אֲדָמָה', lemmaTranslit: 'ʾăḏāmāh', gloss: 'the ground', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H127', position: 9 },
];

export const genesis7_8_translation: VerseTranslation = {
  verseRef: 'Gen.7.8',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'From the clean animal and from the animal that is not clean, and from the birds and all that creeps on the ground,', spans: [{ id: 'Gen.7.8.en.lit.0', text: 'From the clean animal...', position: 0, sourceTokenIds: ['Gen.7.8.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Of clean animals, and of animals that are not clean, and of birds, and of everything that creeps on the ground,', spans: [{ id: 'Gen.7.8.en.idi.0', text: 'Of clean animals, and of animals...', position: 0, sourceTokenIds: ['Gen.7.8.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis7_8_notes: StudyNote[] = [];

// Genesis 7:9 - Two by two they went into the ark
export const genesis7_9_tokens: SourceToken[] = [
  { id: 'Gen.7.9.0', language: 'hebrew', text: 'שְׁנַ֨יִם', transliteration: 'šənayim', lemma: 'שְׁנַיִם', lemmaTranslit: 'šənayim', gloss: 'Two', morphology: { pos: 'numeral', gender: 'masculine', number: 'dual', rawCode: 'Acmda' }, strongs: 'H8147', position: 0 },
  { id: 'Gen.7.9.1', language: 'hebrew', text: 'שְׁנַ֜יִם', transliteration: 'šənayim', lemma: 'שְׁנַיִם', lemmaTranslit: 'šənayim', gloss: 'two', morphology: { pos: 'numeral', gender: 'masculine', number: 'dual', rawCode: 'Acmda' }, strongs: 'H8147', position: 1 },
  { id: 'Gen.7.9.2', language: 'hebrew', text: 'בָּ֣אוּ', transliteration: 'bāʾû', lemma: 'בּוֹא', lemmaTranslit: 'bôʾ', gloss: 'came', morphology: { pos: 'verb', person: '3', gender: 'common', number: 'plural', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3cp' }, strongs: 'H935', position: 2 },
  { id: 'Gen.7.9.3', language: 'hebrew', text: 'אֶל־נֹ֗חַ', transliteration: 'ʾel-nōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'to Noah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 3 },
  { id: 'Gen.7.9.4', language: 'hebrew', text: 'אֶל־הַתֵּבָ֔ה', transliteration: 'ʾel-hattēḇāh', lemma: 'תֵּבָה', lemmaTranslit: 'tēḇāh', gloss: 'into the ark', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8392', position: 4 },
  { id: 'Gen.7.9.5', language: 'hebrew', text: 'זָכָ֖ר', transliteration: 'zāḵār', lemma: 'זָכָר', lemmaTranslit: 'zāḵār', gloss: 'male', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H2145', position: 5 },
  { id: 'Gen.7.9.6', language: 'hebrew', text: 'וּנְקֵבָ֑ה', transliteration: 'ûnəqēḇāh', lemma: 'נְקֵבָה', lemmaTranslit: 'nəqēḇāh', gloss: 'and female', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H5347', position: 6 },
  { id: 'Gen.7.9.7', language: 'hebrew', text: 'כַּֽאֲשֶׁ֛ר', transliteration: 'kaʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'as', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 7 },
  { id: 'Gen.7.9.8', language: 'hebrew', text: 'צִוָּ֥ה', transliteration: 'ṣiwwāh', lemma: 'צָוָה', lemmaTranslit: 'ṣāwāh', gloss: 'commanded', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'piel', rawCode: 'Vpp3ms' }, strongs: 'H6680', position: 8 },
  { id: 'Gen.7.9.9', language: 'hebrew', text: 'אֱלֹהִ֖ים', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H430', position: 9 },
  { id: 'Gen.7.9.10', language: 'hebrew', text: 'אֶת־נֹֽחַ', transliteration: 'ʾeṯ-nōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'Noah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 10 },
];

export const genesis7_9_translation: VerseTranslation = {
  verseRef: 'Gen.7.9',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'two two came to Noah into the ark, male and female, as God had commanded Noah.', spans: [{ id: 'Gen.7.9.en.lit.0', text: 'two two came to Noah into the ark...', position: 0, sourceTokenIds: ['Gen.7.9.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'two and two, male and female, went into the ark with Noah, as God had commanded Noah.', spans: [{ id: 'Gen.7.9.en.idi.0', text: 'two and two, male and female...', position: 0, sourceTokenIds: ['Gen.7.9.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis7_9_notes: StudyNote[] = [
  { id: 'Gen.7.9.note.1', verseRef: 'Gen.7.9', sourceTokenIds: ['Gen.7.9.2'], category: 'theological', title: 'They Came to Noah', content: 'The animals "came" (bāʾû) to Noah by divine instinct or direction. Noah didn\'t have to hunt them down—God brought them. This supernatural gathering of animals underscores God\'s sovereign control over creation.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 7:10 - After seven days the flood came
export const genesis7_10_tokens: SourceToken[] = [
  { id: 'Gen.7.10.0', language: 'hebrew', text: 'וַֽיְהִ֖י', transliteration: 'wayəhî', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'And it was', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H1961', position: 0 },
  { id: 'Gen.7.10.1', language: 'hebrew', text: 'לְשִׁבְעַ֣ת', transliteration: 'ləšiḇʿaṯ', lemma: 'שֶׁבַע', lemmaTranslit: 'šeḇaʿ', gloss: 'at seven', morphology: { pos: 'numeral', rawCode: 'Acfsc' }, strongs: 'H7651', position: 1 },
  { id: 'Gen.7.10.2', language: 'hebrew', text: 'הַיָּמִ֑ים', transliteration: 'hayyāmîm', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'the days', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H3117', position: 2 },
  { id: 'Gen.7.10.3', language: 'hebrew', text: 'וּמֵ֣י', transliteration: 'ûmê', lemma: 'מַיִם', lemmaTranslit: 'mayim', gloss: 'and the waters of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H4325', position: 3 },
  { id: 'Gen.7.10.4', language: 'hebrew', text: 'הַמַּבּ֔וּל', transliteration: 'hammabbûl', lemma: 'מַבּוּל', lemmaTranslit: 'mabbûl', gloss: 'the flood', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3999', position: 4 },
  { id: 'Gen.7.10.5', language: 'hebrew', text: 'הָי֖וּ', transliteration: 'hāyû', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'were', morphology: { pos: 'verb', person: '3', gender: 'common', number: 'plural', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3cp' }, strongs: 'H1961', position: 5 },
  { id: 'Gen.7.10.6', language: 'hebrew', text: 'עַל־הָאָֽרֶץ', transliteration: 'ʿal-hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'upon the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 6 },
];

export const genesis7_10_translation: VerseTranslation = {
  verseRef: 'Gen.7.10',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And it was at the seven days, and the waters of the flood were upon the earth.', spans: [{ id: 'Gen.7.10.en.lit.0', text: 'And it was at the seven days...', position: 0, sourceTokenIds: ['Gen.7.10.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'And after seven days the waters of the flood came upon the earth.', spans: [{ id: 'Gen.7.10.en.idi.0', text: 'And after seven days...', position: 0, sourceTokenIds: ['Gen.7.10.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis7_10_notes: StudyNote[] = [
  { id: 'Gen.7.10.note.1', verseRef: 'Gen.7.10', sourceTokenIds: ['Gen.7.10.1'], category: 'interpretive', title: 'Seven Days Fulfilled', content: 'God\'s word proved true exactly as promised (v.4). The seven-day grace period ended, and judgment began. This establishes a pattern: God gives warning, allows time for repentance, then executes judgment at the appointed time.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Export verse structures
export const genesis7_1_verse = { ref: 'Gen.7.1', sourceTokens: genesis7_1_tokens, translation: genesis7_1_translation, notes: genesis7_1_notes };
export const genesis7_2_verse = { ref: 'Gen.7.2', sourceTokens: genesis7_2_tokens, translation: genesis7_2_translation, notes: genesis7_2_notes };
export const genesis7_3_verse = { ref: 'Gen.7.3', sourceTokens: genesis7_3_tokens, translation: genesis7_3_translation, notes: genesis7_3_notes };
export const genesis7_4_verse = { ref: 'Gen.7.4', sourceTokens: genesis7_4_tokens, translation: genesis7_4_translation, notes: genesis7_4_notes };
export const genesis7_5_verse = { ref: 'Gen.7.5', sourceTokens: genesis7_5_tokens, translation: genesis7_5_translation, notes: genesis7_5_notes };
export const genesis7_6_verse = { ref: 'Gen.7.6', sourceTokens: genesis7_6_tokens, translation: genesis7_6_translation, notes: genesis7_6_notes };
export const genesis7_7_verse = { ref: 'Gen.7.7', sourceTokens: genesis7_7_tokens, translation: genesis7_7_translation, notes: genesis7_7_notes };
export const genesis7_8_verse = { ref: 'Gen.7.8', sourceTokens: genesis7_8_tokens, translation: genesis7_8_translation, notes: genesis7_8_notes };
export const genesis7_9_verse = { ref: 'Gen.7.9', sourceTokens: genesis7_9_tokens, translation: genesis7_9_translation, notes: genesis7_9_notes };
export const genesis7_10_verse = { ref: 'Gen.7.10', sourceTokens: genesis7_10_tokens, translation: genesis7_10_translation, notes: genesis7_10_notes };

// Combined export
export const genesis7_1_10_verses = [
  genesis7_1_verse,
  genesis7_2_verse,
  genesis7_3_verse,
  genesis7_4_verse,
  genesis7_5_verse,
  genesis7_6_verse,
  genesis7_7_verse,
  genesis7_8_verse,
  genesis7_9_verse,
  genesis7_10_verse,
];

export default genesis7_1_10_verses;
