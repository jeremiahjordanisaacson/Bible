/**
 * Genesis 6:1-8 - Hebrew morphological data
 * Sons of God, human wickedness, and Noah finds favor
 * Source: Open Hebrew Bible (Tanach.us) - Public Domain
 */

import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

// Genesis 6:1 - When men began to multiply on the face of the earth
export const genesis6_1_tokens: SourceToken[] = [
  { id: 'Gen.6.1.0', language: 'hebrew', text: 'וַֽיְהִי֙', transliteration: 'wayəhî', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'And it was', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H1961', position: 0 },
  { id: 'Gen.6.1.1', language: 'hebrew', text: 'כִּֽי־הֵחֵ֣ל', transliteration: 'kî-hēḥēl', lemma: 'חָלַל', lemmaTranslit: 'ḥālal', gloss: 'when began', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'hiphil', rawCode: 'Vhp3ms' }, strongs: 'H2490', position: 1 },
  { id: 'Gen.6.1.2', language: 'hebrew', text: 'הָֽאָדָ֔ם', transliteration: 'hāʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'mankind', glossExtended: 'the human race', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 2 },
  { id: 'Gen.6.1.3', language: 'hebrew', text: 'לָרֹ֖ב', transliteration: 'lārōḇ', lemma: 'רָבַב', lemmaTranslit: 'rāḇaḇ', gloss: 'to multiply', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'Vqc' }, strongs: 'H7231', position: 3 },
  { id: 'Gen.6.1.4', language: 'hebrew', text: 'עַל־פְּנֵ֣י', transliteration: 'ʿal-pənê', lemma: 'פָּנִים', lemmaTranslit: 'pānîm', gloss: 'on the face of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H6440', position: 4 },
  { id: 'Gen.6.1.5', language: 'hebrew', text: 'הָֽאֲדָמָ֑ה', transliteration: 'hāʾăḏāmāh', lemma: 'אֲדָמָה', lemmaTranslit: 'ʾăḏāmāh', gloss: 'the ground', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H127', position: 5 },
  { id: 'Gen.6.1.6', language: 'hebrew', text: 'וּבָנ֖וֹת', transliteration: 'ûḇānôṯ', lemma: 'בַּת', lemmaTranslit: 'baṯ', gloss: 'and daughters', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Ncfpa' }, strongs: 'H1323', position: 6 },
  { id: 'Gen.6.1.7', language: 'hebrew', text: 'יֻלְּד֥וּ', transliteration: 'yulləḏû', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'were born', morphology: { pos: 'verb', person: '3', gender: 'common', number: 'plural', tense: 'perfect', stem: 'pual', rawCode: 'Vpp3cp' }, strongs: 'H3205', position: 7 },
  { id: 'Gen.6.1.8', language: 'hebrew', text: 'לָהֶֽם', transliteration: 'lāhem', lemma: 'לְ', lemmaTranslit: 'lə', gloss: 'to them', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H0', position: 8 },
];

export const genesis6_1_translation: VerseTranslation = {
  verseRef: 'Gen.6.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And it was when mankind began to multiply on the face of the ground, and daughters were born to them.', spans: [{ id: 'Gen.6.1.en.lit.0', text: 'And it was when mankind began to multiply...', position: 0, sourceTokenIds: ['Gen.6.1.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'When mankind began to multiply on the face of the earth and daughters were born to them,', spans: [{ id: 'Gen.6.1.en.idi.0', text: 'When mankind began to multiply...', position: 0, sourceTokenIds: ['Gen.6.1.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis6_1_notes: StudyNote[] = [
  { id: 'Gen.6.1.note.1', verseRef: 'Gen.6.1', sourceTokenIds: ['Gen.6.1.2'], category: 'lexical', title: 'ha\'adam (Mankind)', content: 'Here ha\'adam (הָאָדָם) refers to humanity collectively, not the individual Adam. The population growth includes both godly (Seth\'s line) and ungodly (Cain\'s line) descendants.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 6:2 - The sons of God saw the daughters of men
export const genesis6_2_tokens: SourceToken[] = [
  { id: 'Gen.6.2.0', language: 'hebrew', text: 'וַיִּרְא֤וּ', transliteration: 'wayyirʾû', lemma: 'רָאָה', lemmaTranslit: 'rāʾāh', gloss: 'And saw', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H7200', position: 0 },
  { id: 'Gen.6.2.1', language: 'hebrew', text: 'בְנֵי־הָֽאֱלֹהִים֙', transliteration: 'ḇənê-hāʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'the sons of God', glossExtended: 'divine beings, angels, or godly descendants', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H430', position: 1 },
  { id: 'Gen.6.2.2', language: 'hebrew', text: 'אֶת־בְּנ֣וֹת', transliteration: 'ʾeṯ-bənôṯ', lemma: 'בַּת', lemmaTranslit: 'baṯ', gloss: 'the daughters of', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'construct', rawCode: 'Ncfpc' }, strongs: 'H1323', position: 2 },
  { id: 'Gen.6.2.3', language: 'hebrew', text: 'הָֽאָדָ֔ם', transliteration: 'hāʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'mankind', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 3 },
  { id: 'Gen.6.2.4', language: 'hebrew', text: 'כִּ֥י', transliteration: 'kî', lemma: 'כִּי', lemmaTranslit: 'kî', gloss: 'that', morphology: { pos: 'conjunction', rawCode: 'C' }, strongs: 'H3588', position: 4 },
  { id: 'Gen.6.2.5', language: 'hebrew', text: 'טֹבֹ֖ת', transliteration: 'ṭōḇōṯ', lemma: 'טוֹב', lemmaTranslit: 'ṭôḇ', gloss: 'beautiful', morphology: { pos: 'adjective', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Ajfpa' }, strongs: 'H2896', position: 5 },
  { id: 'Gen.6.2.6', language: 'hebrew', text: 'הֵ֑נָּה', transliteration: 'hēnnāh', lemma: 'הוּא', lemmaTranslit: 'hûʾ', gloss: 'they were', morphology: { pos: 'pronoun', person: '3', gender: 'feminine', number: 'plural', rawCode: 'Pp3fp' }, strongs: 'H2007', position: 6 },
  { id: 'Gen.6.2.7', language: 'hebrew', text: 'וַיִּקְח֤וּ', transliteration: 'wayyiqḥû', lemma: 'לָקַח', lemmaTranslit: 'lāqaḥ', gloss: 'and they took', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H3947', position: 7 },
  { id: 'Gen.6.2.8', language: 'hebrew', text: 'לָהֶם֙', transliteration: 'lāhem', lemma: 'לְ', lemmaTranslit: 'lə', gloss: 'for themselves', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H0', position: 8 },
  { id: 'Gen.6.2.9', language: 'hebrew', text: 'נָשִׁ֔ים', transliteration: 'nāšîm', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'wives', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Ncfpa' }, strongs: 'H802', position: 9 },
  { id: 'Gen.6.2.10', language: 'hebrew', text: 'מִכֹּ֖ל', transliteration: 'mikkōl', lemma: 'כֹּל', lemmaTranslit: 'kōl', gloss: 'from all', morphology: { pos: 'noun', rawCode: 'Ncmsa' }, strongs: 'H3605', position: 10 },
  { id: 'Gen.6.2.11', language: 'hebrew', text: 'אֲשֶׁ֥ר', transliteration: 'ʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'whom', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 11 },
  { id: 'Gen.6.2.12', language: 'hebrew', text: 'בָּחָֽרוּ', transliteration: 'bāḥārû', lemma: 'בָּחַר', lemmaTranslit: 'bāḥar', gloss: 'they chose', morphology: { pos: 'verb', person: '3', gender: 'common', number: 'plural', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3cp' }, strongs: 'H977', position: 12 },
];

export const genesis6_2_translation: VerseTranslation = {
  verseRef: 'Gen.6.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And saw the sons of God the daughters of mankind that they were beautiful, and they took for themselves wives from all whom they chose.', spans: [{ id: 'Gen.6.2.en.lit.0', text: 'And saw the sons of God...', position: 0, sourceTokenIds: ['Gen.6.2.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'the sons of God saw that the daughters of man were attractive. And they took as their wives any they chose.', spans: [{ id: 'Gen.6.2.en.idi.0', text: 'the sons of God saw that the daughters of man...', position: 0, sourceTokenIds: ['Gen.6.2.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis6_2_notes: StudyNote[] = [
  { id: 'Gen.6.2.note.1', verseRef: 'Gen.6.2', sourceTokenIds: ['Gen.6.2.1'], category: 'interpretive', title: 'Sons of God (bənê hāʾĕlōhîm)', content: 'Three main interpretations: (1) Fallen angels (cf. Job 1:6, 2:1); (2) Godly descendants of Seth intermarrying with Cain\'s line; (3) Tyrannical kings/rulers. The phrase elsewhere in OT refers to angelic beings.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.6.2.note.2', verseRef: 'Gen.6.2', sourceTokenIds: ['Gen.6.2.7', 'Gen.6.2.12'], category: 'theological', title: 'Taking and Choosing', content: 'The language of "took" (lāqaḥ) and "chose" (bāḥar) echoes Eve\'s taking of the forbidden fruit (3:6). The criterion was physical beauty, not godliness—a repeat of prioritizing self over God\'s will.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 6:3 - My Spirit shall not strive with man forever
export const genesis6_3_tokens: SourceToken[] = [
  { id: 'Gen.6.3.0', language: 'hebrew', text: 'וַיֹּ֣אמֶר', transliteration: 'wayyōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'And said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H559', position: 0 },
  { id: 'Gen.6.3.1', language: 'hebrew', text: 'יְהוָ֗ה', transliteration: 'YHWH', lemma: 'יהוה', lemmaTranslit: 'YHWH', gloss: 'the LORD', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 1 },
  { id: 'Gen.6.3.2', language: 'hebrew', text: 'לֹֽא־יָד֨וֹן', transliteration: 'lōʾ-yāḏôn', lemma: 'דִּין', lemmaTranslit: 'dîn', gloss: 'shall not strive', glossExtended: 'shall not contend/abide', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi3ms' }, strongs: 'H1777', position: 2 },
  { id: 'Gen.6.3.3', language: 'hebrew', text: 'רוּחִ֤י', transliteration: 'rûḥî', lemma: 'רוּחַ', lemmaTranslit: 'rûaḥ', gloss: 'My Spirit', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H7307', position: 3 },
  { id: 'Gen.6.3.4', language: 'hebrew', text: 'בָֽאָדָם֙', transliteration: 'ḇāʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'with mankind', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 4 },
  { id: 'Gen.6.3.5', language: 'hebrew', text: 'לְעֹלָ֔ם', transliteration: 'ləʿōlām', lemma: 'עוֹלָם', lemmaTranslit: 'ʿôlām', gloss: 'forever', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H5769', position: 5 },
  { id: 'Gen.6.3.6', language: 'hebrew', text: 'בְּשַׁגַּ֖ם', transliteration: 'bəšaggam', lemma: 'שָׁגַג', lemmaTranslit: 'šāḡaḡ', gloss: 'for indeed', glossExtended: 'in their going astray, for he is', morphology: { pos: 'particle', rawCode: 'D' }, strongs: 'H7683', position: 6 },
  { id: 'Gen.6.3.7', language: 'hebrew', text: 'ה֣וּא', transliteration: 'hûʾ', lemma: 'הוּא', lemmaTranslit: 'hûʾ', gloss: 'he is', morphology: { pos: 'pronoun', person: '3', gender: 'masculine', number: 'singular', rawCode: 'Pp3ms' }, strongs: 'H1931', position: 7 },
  { id: 'Gen.6.3.8', language: 'hebrew', text: 'בָשָׂ֑ר', transliteration: 'ḇāśār', lemma: 'בָּשָׂר', lemmaTranslit: 'bāśār', gloss: 'flesh', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H1320', position: 8 },
  { id: 'Gen.6.3.9', language: 'hebrew', text: 'וְהָי֣וּ', transliteration: 'wəhāyû', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'and will be', morphology: { pos: 'verb', person: '3', gender: 'common', number: 'plural', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3cp' }, strongs: 'H1961', position: 9 },
  { id: 'Gen.6.3.10', language: 'hebrew', text: 'יָמָ֔יו', transliteration: 'yāmāyw', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'his days', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H3117', position: 10 },
  { id: 'Gen.6.3.11', language: 'hebrew', text: 'מֵאָ֥ה', transliteration: 'mēʾāh', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'a hundred', morphology: { pos: 'numeral', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Acfsa' }, strongs: 'H3967', position: 11 },
  { id: 'Gen.6.3.12', language: 'hebrew', text: 'וְעֶשְׂרִ֖ים', transliteration: 'wəʿeśrîm', lemma: 'עֶשְׂרִים', lemmaTranslit: 'ʿeśrîm', gloss: 'and twenty', morphology: { pos: 'numeral', rawCode: 'Acmpa' }, strongs: 'H6242', position: 12 },
  { id: 'Gen.6.3.13', language: 'hebrew', text: 'שָׁנָֽה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 13 },
];

export const genesis6_3_translation: VerseTranslation = {
  verseRef: 'Gen.6.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And said the LORD, "My Spirit shall not strive with mankind forever, for he is flesh, and his days will be a hundred and twenty years."', spans: [{ id: 'Gen.6.3.en.lit.0', text: 'And said the LORD...', position: 0, sourceTokenIds: ['Gen.6.3.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Then the LORD said, "My Spirit shall not abide in man forever, for he is flesh: his days shall be 120 years."', spans: [{ id: 'Gen.6.3.en.idi.0', text: 'Then the LORD said...', position: 0, sourceTokenIds: ['Gen.6.3.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis6_3_notes: StudyNote[] = [
  { id: 'Gen.6.3.note.1', verseRef: 'Gen.6.3', sourceTokenIds: ['Gen.6.3.2', 'Gen.6.3.3'], category: 'translation-choice', title: 'My Spirit Shall Not Strive', content: 'The verb yāḏôn is difficult. Options: (1) "strive/contend" (from dîn); (2) "abide/remain" (from dûn). God\'s Spirit striving with humanity or giving life will not continue indefinitely due to human corruption.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.6.3.note.2', verseRef: 'Gen.6.3', sourceTokenIds: ['Gen.6.3.11', 'Gen.6.3.12', 'Gen.6.3.13'], category: 'interpretive', title: '120 Years', content: 'Two interpretations: (1) Time until the flood—a grace period for repentance; (2) New maximum human lifespan. Post-flood lifespans do decline toward this number. The immediate context favors the first view.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 6:4 - The Nephilim were on the earth
export const genesis6_4_tokens: SourceToken[] = [
  { id: 'Gen.6.4.0', language: 'hebrew', text: 'הַנְּפִלִ֞ים', transliteration: 'hannəp̄ilîm', lemma: 'נְפִילִים', lemmaTranslit: 'nəp̄îlîm', gloss: 'The Nephilim', glossExtended: 'fallen ones, giants', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H5303', position: 0 },
  { id: 'Gen.6.4.1', language: 'hebrew', text: 'הָי֣וּ', transliteration: 'hāyû', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'were', morphology: { pos: 'verb', person: '3', gender: 'common', number: 'plural', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3cp' }, strongs: 'H1961', position: 1 },
  { id: 'Gen.6.4.2', language: 'hebrew', text: 'בָאָרֶץ֮', transliteration: 'ḇāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'in the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 2 },
  { id: 'Gen.6.4.3', language: 'hebrew', text: 'בַּיָּמִ֣ים', transliteration: 'bayyāmîm', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'in the days', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H3117', position: 3 },
  { id: 'Gen.6.4.4', language: 'hebrew', text: 'הָהֵם֒', transliteration: 'hāhēm', lemma: 'הוּא', lemmaTranslit: 'hûʾ', gloss: 'those', morphology: { pos: 'pronoun', person: '3', gender: 'masculine', number: 'plural', rawCode: 'Pdxmp' }, strongs: 'H1992', position: 4 },
  { id: 'Gen.6.4.5', language: 'hebrew', text: 'וְגַ֣ם', transliteration: 'wəḡam', lemma: 'גַּם', lemmaTranslit: 'gam', gloss: 'and also', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H1571', position: 5 },
  { id: 'Gen.6.4.6', language: 'hebrew', text: 'אַֽחֲרֵי־כֵ֗ן', transliteration: 'ʾaḥărê-ḵēn', lemma: 'כֵּן', lemmaTranslit: 'kēn', gloss: 'after that', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H3651', position: 6 },
  { id: 'Gen.6.4.7', language: 'hebrew', text: 'אֲשֶׁ֨ר', transliteration: 'ʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'when', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 7 },
  { id: 'Gen.6.4.8', language: 'hebrew', text: 'יָבֹ֜אוּ', transliteration: 'yāḇōʾû', lemma: 'בּוֹא', lemmaTranslit: 'bôʾ', gloss: 'came', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi3mp' }, strongs: 'H935', position: 8 },
  { id: 'Gen.6.4.9', language: 'hebrew', text: 'בְּנֵ֤י', transliteration: 'bənê', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'the sons of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H1121', position: 9 },
  { id: 'Gen.6.4.10', language: 'hebrew', text: 'הָֽאֱלֹהִים֙', transliteration: 'hāʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H430', position: 10 },
  { id: 'Gen.6.4.11', language: 'hebrew', text: 'אֶל־בְּנ֣וֹת', transliteration: 'ʾel-bənôṯ', lemma: 'בַּת', lemmaTranslit: 'baṯ', gloss: 'to the daughters of', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'construct', rawCode: 'Ncfpc' }, strongs: 'H1323', position: 11 },
  { id: 'Gen.6.4.12', language: 'hebrew', text: 'הָֽאָדָ֔ם', transliteration: 'hāʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'mankind', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 12 },
  { id: 'Gen.6.4.13', language: 'hebrew', text: 'וְיָלְד֖וּ', transliteration: 'wəyāləḏû', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'and they bore', morphology: { pos: 'verb', person: '3', gender: 'common', number: 'plural', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3cp' }, strongs: 'H3205', position: 13 },
  { id: 'Gen.6.4.14', language: 'hebrew', text: 'לָהֶ֑ם', transliteration: 'lāhem', lemma: 'לְ', lemmaTranslit: 'lə', gloss: 'to them', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H0', position: 14 },
  { id: 'Gen.6.4.15', language: 'hebrew', text: 'הֵ֧מָּה', transliteration: 'hēmmāh', lemma: 'הוּא', lemmaTranslit: 'hûʾ', gloss: 'they', morphology: { pos: 'pronoun', person: '3', gender: 'masculine', number: 'plural', rawCode: 'Pp3mp' }, strongs: 'H1992', position: 15 },
  { id: 'Gen.6.4.16', language: 'hebrew', text: 'הַגִּבֹּרִ֛ים', transliteration: 'haggibōrîm', lemma: 'גִּבּוֹר', lemmaTranslit: 'gibbôr', gloss: 'the mighty ones', morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ajmpa' }, strongs: 'H1368', position: 16 },
  { id: 'Gen.6.4.17', language: 'hebrew', text: 'אֲשֶׁ֥ר', transliteration: 'ʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'who', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 17 },
  { id: 'Gen.6.4.18', language: 'hebrew', text: 'מֵעוֹלָ֖ם', transliteration: 'mēʿôlām', lemma: 'עוֹלָם', lemmaTranslit: 'ʿôlām', gloss: 'from of old', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H5769', position: 18 },
  { id: 'Gen.6.4.19', language: 'hebrew', text: 'אַנְשֵׁ֥י', transliteration: 'ʾanšê', lemma: 'אִישׁ', lemmaTranslit: 'ʾîš', gloss: 'men of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H376', position: 19 },
  { id: 'Gen.6.4.20', language: 'hebrew', text: 'הַשֵּֽׁם', transliteration: 'haššēm', lemma: 'שֵׁם', lemmaTranslit: 'šēm', gloss: 'renown', glossExtended: 'the name, fame', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H8034', position: 20 },
];

export const genesis6_4_translation: VerseTranslation = {
  verseRef: 'Gen.6.4',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'The Nephilim were in the earth in those days, and also after that, when the sons of God came to the daughters of mankind, and they bore to them—they were the mighty ones who were from of old, men of the name.', spans: [{ id: 'Gen.6.4.en.lit.0', text: 'The Nephilim were in the earth...', position: 0, sourceTokenIds: ['Gen.6.4.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'The Nephilim were on the earth in those days, and also afterward, when the sons of God came in to the daughters of man and they bore children to them. These were the mighty men who were of old, the men of renown.', spans: [{ id: 'Gen.6.4.en.idi.0', text: 'The Nephilim were on the earth in those days...', position: 0, sourceTokenIds: ['Gen.6.4.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis6_4_notes: StudyNote[] = [
  { id: 'Gen.6.4.note.1', verseRef: 'Gen.6.4', sourceTokenIds: ['Gen.6.4.0'], category: 'lexical', title: 'Nephilim', content: 'From nāp̄al (נָפַל), "to fall." The Nephilim may be: (1) "fallen ones" (fallen angels or their offspring); (2) giants/mighty warriors; (3) "those who cause others to fall" (violent tyrants). They appear again in Numbers 13:33.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.6.4.note.2', verseRef: 'Gen.6.4', sourceTokenIds: ['Gen.6.4.16', 'Gen.6.4.19', 'Gen.6.4.20'], category: 'cultural', title: 'Mighty Men of Renown', content: 'The gibbōrîm (גִּבֹּרִים) and "men of the name" (šēm) parallel ancient Near Eastern hero traditions. But what the world celebrates as heroic, God sees as violent rebellion—a contrast between human and divine values.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 6:5 - The LORD saw that wickedness was great
export const genesis6_5_tokens: SourceToken[] = [
  { id: 'Gen.6.5.0', language: 'hebrew', text: 'וַיַּ֣רְא', transliteration: 'wayyarʾ', lemma: 'רָאָה', lemmaTranslit: 'rāʾāh', gloss: 'And saw', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H7200', position: 0 },
  { id: 'Gen.6.5.1', language: 'hebrew', text: 'יְהוָ֔ה', transliteration: 'YHWH', lemma: 'יהוה', lemmaTranslit: 'YHWH', gloss: 'the LORD', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 1 },
  { id: 'Gen.6.5.2', language: 'hebrew', text: 'כִּ֥י', transliteration: 'kî', lemma: 'כִּי', lemmaTranslit: 'kî', gloss: 'that', morphology: { pos: 'conjunction', rawCode: 'C' }, strongs: 'H3588', position: 2 },
  { id: 'Gen.6.5.3', language: 'hebrew', text: 'רַבָּ֛ה', transliteration: 'rabbāh', lemma: 'רַב', lemmaTranslit: 'raḇ', gloss: 'great', morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ajfsa' }, strongs: 'H7227', position: 3 },
  { id: 'Gen.6.5.4', language: 'hebrew', text: 'רָעַ֥ת', transliteration: 'rāʿaṯ', lemma: 'רָעָה', lemmaTranslit: 'rāʿāh', gloss: 'the wickedness of', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H7451', position: 4 },
  { id: 'Gen.6.5.5', language: 'hebrew', text: 'הָאָדָ֖ם', transliteration: 'hāʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'mankind', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 5 },
  { id: 'Gen.6.5.6', language: 'hebrew', text: 'בָּאָ֑רֶץ', transliteration: 'bāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'in the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 6 },
  { id: 'Gen.6.5.7', language: 'hebrew', text: 'וְכָל־יֵ֙צֶר֙', transliteration: 'wəḵāl-yēṣer', lemma: 'יֵצֶר', lemmaTranslit: 'yēṣer', gloss: 'and every inclination', glossExtended: 'intention, imagination, device', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H3336', position: 7 },
  { id: 'Gen.6.5.8', language: 'hebrew', text: 'מַחְשְׁבֹ֣ת', transliteration: 'maḥšəḇōṯ', lemma: 'מַחֲשָׁבָה', lemmaTranslit: 'maḥăšāḇāh', gloss: 'of the thoughts of', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'construct', rawCode: 'Ncfpc' }, strongs: 'H4284', position: 8 },
  { id: 'Gen.6.5.9', language: 'hebrew', text: 'לִבּ֔וֹ', transliteration: 'libbô', lemma: 'לֵב', lemmaTranslit: 'lēḇ', gloss: 'his heart', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H3820', position: 9 },
  { id: 'Gen.6.5.10', language: 'hebrew', text: 'רַ֥ק', transliteration: 'raq', lemma: 'רַק', lemmaTranslit: 'raq', gloss: 'only', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H7535', position: 10 },
  { id: 'Gen.6.5.11', language: 'hebrew', text: 'רַ֖ע', transliteration: 'raʿ', lemma: 'רַע', lemmaTranslit: 'raʿ', gloss: 'evil', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ajmsa' }, strongs: 'H7451', position: 11 },
  { id: 'Gen.6.5.12', language: 'hebrew', text: 'כָּל־הַיּֽוֹם', transliteration: 'kāl-hayyôm', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'all the day', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3117', position: 12 },
];

export const genesis6_5_translation: VerseTranslation = {
  verseRef: 'Gen.6.5',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And saw the LORD that great was the wickedness of mankind in the earth, and every inclination of the thoughts of his heart was only evil all the day.', spans: [{ id: 'Gen.6.5.en.lit.0', text: 'And saw the LORD that great was the wickedness...', position: 0, sourceTokenIds: ['Gen.6.5.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'The LORD saw that the wickedness of man was great in the earth, and that every intention of the thoughts of his heart was only evil continually.', spans: [{ id: 'Gen.6.5.en.idi.0', text: 'The LORD saw that the wickedness of man was great...', position: 0, sourceTokenIds: ['Gen.6.5.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis6_5_notes: StudyNote[] = [
  { id: 'Gen.6.5.note.1', verseRef: 'Gen.6.5', sourceTokenIds: ['Gen.6.5.7'], category: 'lexical', title: 'Yetser (Inclination)', content: 'The yēṣer (יֵצֶר) is the "forming, framing" of thoughts—the bent or tendency of the mind. This same word appears in 8:21 ("the intention of man\'s heart is evil from his youth"). It becomes central in later Jewish theology as yetser ha-ra (evil inclination).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.6.5.note.2', verseRef: 'Gen.6.5', sourceTokenIds: ['Gen.6.5.10', 'Gen.6.5.11', 'Gen.6.5.12'], category: 'theological', title: 'Total Depravity', content: 'The fourfold emphasis—"every" inclination, "only" evil, "all" the day—describes comprehensive corruption. Not merely sinful acts but the very imagination (yēṣer) and thoughts (maḥăšāḇōṯ) of the heart were thoroughly wicked.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 6:6 - And the LORD was sorry
export const genesis6_6_tokens: SourceToken[] = [
  { id: 'Gen.6.6.0', language: 'hebrew', text: 'וַיִּנָּ֣חֶם', transliteration: 'wayyinnāḥem', lemma: 'נָחַם', lemmaTranslit: 'nāḥam', gloss: 'And was sorry', glossExtended: 'grieved, relented', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'niphal', rawCode: 'Vnw3ms' }, strongs: 'H5162', position: 0 },
  { id: 'Gen.6.6.1', language: 'hebrew', text: 'יְהוָ֔ה', transliteration: 'YHWH', lemma: 'יהוה', lemmaTranslit: 'YHWH', gloss: 'the LORD', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 1 },
  { id: 'Gen.6.6.2', language: 'hebrew', text: 'כִּֽי־עָשָׂ֥ה', transliteration: 'kî-ʿāśāh', lemma: 'עָשָׂה', lemmaTranslit: 'ʿāśāh', gloss: 'that He had made', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H6213', position: 2 },
  { id: 'Gen.6.6.3', language: 'hebrew', text: 'אֶת־הָֽאָדָ֖ם', transliteration: 'ʾeṯ-hāʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'mankind', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 3 },
  { id: 'Gen.6.6.4', language: 'hebrew', text: 'בָּאָ֑רֶץ', transliteration: 'bāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'in the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 4 },
  { id: 'Gen.6.6.5', language: 'hebrew', text: 'וַיִּתְעַצֵּ֖ב', transliteration: 'wayyiṯʿaṣṣēḇ', lemma: 'עָצַב', lemmaTranslit: 'ʿāṣaḇ', gloss: 'and He was grieved', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hithpael', rawCode: 'Vtw3ms' }, strongs: 'H6087', position: 5 },
  { id: 'Gen.6.6.6', language: 'hebrew', text: 'אֶל־לִבּֽוֹ', transliteration: 'ʾel-libbô', lemma: 'לֵב', lemmaTranslit: 'lēḇ', gloss: 'to His heart', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H3820', position: 6 },
];

export const genesis6_6_translation: VerseTranslation = {
  verseRef: 'Gen.6.6',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And was sorry the LORD that He had made mankind in the earth, and He was grieved to His heart.', spans: [{ id: 'Gen.6.6.en.lit.0', text: 'And was sorry the LORD...', position: 0, sourceTokenIds: ['Gen.6.6.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'And the LORD regretted that he had made man on the earth, and it grieved him to his heart.', spans: [{ id: 'Gen.6.6.en.idi.0', text: 'And the LORD regretted that he had made man...', position: 0, sourceTokenIds: ['Gen.6.6.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis6_6_notes: StudyNote[] = [
  { id: 'Gen.6.6.note.1', verseRef: 'Gen.6.6', sourceTokenIds: ['Gen.6.6.0'], category: 'theological', title: 'The LORD Was Sorry (naḥam)', content: 'The niphal of nāḥam (נָחַם) expresses deep emotional response—grief, relenting, being moved. This anthropopathic language reveals God\'s genuine emotional engagement with His creation. It does not imply divine imperfection but divine compassion.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.6.6.note.2', verseRef: 'Gen.6.6', sourceTokenIds: ['Gen.6.6.5', 'Gen.6.6.6'], category: 'lexical', title: 'Grieved to His Heart', content: 'The verb ʿāṣaḇ (עָצַב) in hithpael means "to be deeply pained, grieved." The same root appears in 3:16-17 for Eve\'s labor pain and Adam\'s toil. Human sin causes God pain—a startling anthropopathism.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 6:7 - I will blot out man
export const genesis6_7_tokens: SourceToken[] = [
  { id: 'Gen.6.7.0', language: 'hebrew', text: 'וַיֹּ֣אמֶר', transliteration: 'wayyōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'And said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H559', position: 0 },
  { id: 'Gen.6.7.1', language: 'hebrew', text: 'יְהוָ֗ה', transliteration: 'YHWH', lemma: 'יהוה', lemmaTranslit: 'YHWH', gloss: 'the LORD', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 1 },
  { id: 'Gen.6.7.2', language: 'hebrew', text: 'אֶמְחֶ֨ה', transliteration: 'ʾemḥeh', lemma: 'מָחָה', lemmaTranslit: 'māḥāh', gloss: 'I will blot out', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi1cs' }, strongs: 'H4229', position: 2 },
  { id: 'Gen.6.7.3', language: 'hebrew', text: 'אֶת־הָאָדָ֤ם', transliteration: 'ʾeṯ-hāʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'mankind', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 3 },
  { id: 'Gen.6.7.4', language: 'hebrew', text: 'אֲשֶׁר־בָּרָ֙אתִי֙', transliteration: 'ʾăšer-bārāʾṯî', lemma: 'בָּרָא', lemmaTranslit: 'bārāʾ', gloss: 'whom I created', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp1cs' }, strongs: 'H1254', position: 4 },
  { id: 'Gen.6.7.5', language: 'hebrew', text: 'מֵעַל֙', transliteration: 'mēʿal', lemma: 'עַל', lemmaTranslit: 'ʿal', gloss: 'from upon', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H5921', position: 5 },
  { id: 'Gen.6.7.6', language: 'hebrew', text: 'פְּנֵ֣י', transliteration: 'pənê', lemma: 'פָּנִים', lemmaTranslit: 'pānîm', gloss: 'the face of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H6440', position: 6 },
  { id: 'Gen.6.7.7', language: 'hebrew', text: 'הָֽאֲדָמָ֔ה', transliteration: 'hāʾăḏāmāh', lemma: 'אֲדָמָה', lemmaTranslit: 'ʾăḏāmāh', gloss: 'the ground', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H127', position: 7 },
  { id: 'Gen.6.7.8', language: 'hebrew', text: 'מֵֽאָדָם֙', transliteration: 'mēʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'from man', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 8 },
  { id: 'Gen.6.7.9', language: 'hebrew', text: 'עַד־בְּהֵמָ֔ה', transliteration: 'ʿaḏ-bəhēmāh', lemma: 'בְּהֵמָה', lemmaTranslit: 'bəhēmāh', gloss: 'to beast', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H929', position: 9 },
  { id: 'Gen.6.7.10', language: 'hebrew', text: 'עַד־רֶ֖מֶשׂ', transliteration: 'ʿaḏ-remeś', lemma: 'רֶמֶשׂ', lemmaTranslit: 'remeś', gloss: 'to creeping thing', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H7431', position: 10 },
  { id: 'Gen.6.7.11', language: 'hebrew', text: 'וְעַד־ע֣וֹף', transliteration: 'wəʿaḏ-ʿôp̄', lemma: 'עוֹף', lemmaTranslit: 'ʿôp̄', gloss: 'and to bird of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H5775', position: 11 },
  { id: 'Gen.6.7.12', language: 'hebrew', text: 'הַשָּׁמָ֑יִם', transliteration: 'haššāmāyim', lemma: 'שָׁמַיִם', lemmaTranslit: 'šāmayim', gloss: 'the heavens', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H8064', position: 12 },
  { id: 'Gen.6.7.13', language: 'hebrew', text: 'כִּ֥י', transliteration: 'kî', lemma: 'כִּי', lemmaTranslit: 'kî', gloss: 'for', morphology: { pos: 'conjunction', rawCode: 'C' }, strongs: 'H3588', position: 13 },
  { id: 'Gen.6.7.14', language: 'hebrew', text: 'נִחַ֖מְתִּי', transliteration: 'niḥamtî', lemma: 'נָחַם', lemmaTranslit: 'nāḥam', gloss: 'I am sorry', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'perfect', stem: 'niphal', rawCode: 'Vnp1cs' }, strongs: 'H5162', position: 14 },
  { id: 'Gen.6.7.15', language: 'hebrew', text: 'כִּ֥י', transliteration: 'kî', lemma: 'כִּי', lemmaTranslit: 'kî', gloss: 'that', morphology: { pos: 'conjunction', rawCode: 'C' }, strongs: 'H3588', position: 15 },
  { id: 'Gen.6.7.16', language: 'hebrew', text: 'עֲשִׂיתִֽם', transliteration: 'ʿăśîṯim', lemma: 'עָשָׂה', lemmaTranslit: 'ʿāśāh', gloss: 'I made them', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp1cs' }, strongs: 'H6213', position: 16 },
];

export const genesis6_7_translation: VerseTranslation = {
  verseRef: 'Gen.6.7',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And said the LORD, "I will blot out mankind whom I created from upon the face of the ground—from man to beast to creeping thing and to bird of the heavens—for I am sorry that I made them."', spans: [{ id: 'Gen.6.7.en.lit.0', text: 'And said the LORD, I will blot out mankind...', position: 0, sourceTokenIds: ['Gen.6.7.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'So the LORD said, "I will blot out man whom I have created from the face of the land, man and animals and creeping things and birds of the heavens, for I am sorry that I have made them."', spans: [{ id: 'Gen.6.7.en.idi.0', text: 'So the LORD said, I will blot out man...', position: 0, sourceTokenIds: ['Gen.6.7.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis6_7_notes: StudyNote[] = [
  { id: 'Gen.6.7.note.1', verseRef: 'Gen.6.7', sourceTokenIds: ['Gen.6.7.2'], category: 'lexical', title: 'Blot Out (maḥah)', content: 'The verb māḥāh (מָחָה) means "to wipe, blot out, destroy." Used for wiping away tears (Isa 25:8) and blotting out names (Deut 9:14). The judgment reverses creation—the Flood will "wipe" the earth like wiping a dish (2 Kgs 21:13).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.6.7.note.2', verseRef: 'Gen.6.7', sourceTokenIds: ['Gen.6.7.8', 'Gen.6.7.9', 'Gen.6.7.10', 'Gen.6.7.11'], category: 'cross-reference', title: 'Reversal of Creation', content: 'The list (man, beast, creeping things, birds) reverses the creation order of Genesis 1:20-27. Human sin affects all creation—the ground cursed for Adam\'s sake (3:17), now all land creatures share in the judgment.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 6:8 - But Noah found favor in the eyes of the LORD
export const genesis6_8_tokens: SourceToken[] = [
  { id: 'Gen.6.8.0', language: 'hebrew', text: 'וְנֹ֕חַ', transliteration: 'wənōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'But Noah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 0 },
  { id: 'Gen.6.8.1', language: 'hebrew', text: 'מָ֥צָא', transliteration: 'māṣāʾ', lemma: 'מָצָא', lemmaTranslit: 'māṣāʾ', gloss: 'found', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H4672', position: 1 },
  { id: 'Gen.6.8.2', language: 'hebrew', text: 'חֵ֖ן', transliteration: 'ḥēn', lemma: 'חֵן', lemmaTranslit: 'ḥēn', gloss: 'favor', glossExtended: 'grace, favor', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H2580', position: 2 },
  { id: 'Gen.6.8.3', language: 'hebrew', text: 'בְּעֵינֵ֥י', transliteration: 'bəʿênê', lemma: 'עַיִן', lemmaTranslit: 'ʿayin', gloss: 'in the eyes of', morphology: { pos: 'noun', gender: 'common', number: 'dual', state: 'construct', rawCode: 'Ncbdc' }, strongs: 'H5869', position: 3 },
  { id: 'Gen.6.8.4', language: 'hebrew', text: 'יְהוָֽה', transliteration: 'YHWH', lemma: 'יהוה', lemmaTranslit: 'YHWH', gloss: 'the LORD', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 4 },
];

export const genesis6_8_translation: VerseTranslation = {
  verseRef: 'Gen.6.8',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'But Noah found favor in the eyes of the LORD.', spans: [{ id: 'Gen.6.8.en.lit.0', text: 'But Noah found favor...', position: 0, sourceTokenIds: ['Gen.6.8.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'But Noah found favor in the eyes of the LORD.', spans: [{ id: 'Gen.6.8.en.idi.0', text: 'But Noah found favor in the eyes of the LORD...', position: 0, sourceTokenIds: ['Gen.6.8.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis6_8_notes: StudyNote[] = [
  { id: 'Gen.6.8.note.1', verseRef: 'Gen.6.8', sourceTokenIds: ['Gen.6.8.2'], category: 'theological', title: 'Grace (ḥēn)', content: 'This is the first occurrence of ḥēn (חֵן, grace/favor) in Scripture. Noah did not earn salvation—he "found" it. Grace precedes obedience: Noah walked with God (v.9) because he found grace, not in order to find it.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.6.8.note.2', verseRef: 'Gen.6.8', sourceTokenIds: ['Gen.6.8.0'], category: 'lexical', title: 'Noah\'s Name', content: 'Nōaḥ (נֹחַ) means "rest." His name in Hebrew (nun-chet) spelled backward is ḥēn (chet-nun), "grace." Noah found (māṣāʾ) grace—a beautiful wordplay reinforcing the theme of divine initiative in salvation.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Export verse structures
export const genesis6_1_verse = { ref: 'Gen.6.1', sourceTokens: genesis6_1_tokens, translation: genesis6_1_translation, notes: genesis6_1_notes };
export const genesis6_2_verse = { ref: 'Gen.6.2', sourceTokens: genesis6_2_tokens, translation: genesis6_2_translation, notes: genesis6_2_notes };
export const genesis6_3_verse = { ref: 'Gen.6.3', sourceTokens: genesis6_3_tokens, translation: genesis6_3_translation, notes: genesis6_3_notes };
export const genesis6_4_verse = { ref: 'Gen.6.4', sourceTokens: genesis6_4_tokens, translation: genesis6_4_translation, notes: genesis6_4_notes };
export const genesis6_5_verse = { ref: 'Gen.6.5', sourceTokens: genesis6_5_tokens, translation: genesis6_5_translation, notes: genesis6_5_notes };
export const genesis6_6_verse = { ref: 'Gen.6.6', sourceTokens: genesis6_6_tokens, translation: genesis6_6_translation, notes: genesis6_6_notes };
export const genesis6_7_verse = { ref: 'Gen.6.7', sourceTokens: genesis6_7_tokens, translation: genesis6_7_translation, notes: genesis6_7_notes };
export const genesis6_8_verse = { ref: 'Gen.6.8', sourceTokens: genesis6_8_tokens, translation: genesis6_8_translation, notes: genesis6_8_notes };

// Combined export
export const genesis6_1_8_verses = [
  genesis6_1_verse,
  genesis6_2_verse,
  genesis6_3_verse,
  genesis6_4_verse,
  genesis6_5_verse,
  genesis6_6_verse,
  genesis6_7_verse,
  genesis6_8_verse,
];

export default genesis6_1_8_verses;
