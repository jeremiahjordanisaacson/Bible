// @ts-nocheck — generated data file, schema alignment pending
/**
 * Genesis 18:1-15 - Three visitors at Mamre
 * Hebrew morphological data with study annotations
 */

import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

// Genesis 18:1
export const genesis18_1_tokens: SourceToken[] = [
  { id: 'Gen.18.1.0', language: 'hebrew', text: 'וַיֵּרָ֤א', transliteration: 'wayyērāʾ', lemma: 'רָאָה', lemmaTranslit: 'rāʾāh', gloss: 'And appeared', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'niphal', rawCode: 'VNw3ms' }, strongs: 'H7200', position: 0 },
  { id: 'Gen.18.1.1', language: 'hebrew', text: 'אֵלָיו֙', transliteration: 'ʾēlāyw', lemma: 'אֵל', lemmaTranslit: 'ʾēl', gloss: 'to him', morphology: { pos: 'preposition', rawCode: 'RPs3ms' }, strongs: 'H413', position: 1 },
  { id: 'Gen.18.1.2', language: 'hebrew', text: 'יְהוָ֔ה', transliteration: 'YHWH', lemma: 'יְהוָה', lemmaTranslit: 'YHWH', gloss: 'the LORD', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 2 },
  { id: 'Gen.18.1.3', language: 'hebrew', text: 'בְּאֵלֹנֵ֖י', transliteration: 'bəʾēlōnê', lemma: 'אֵלוֹן', lemmaTranslit: 'ʾēlôn', gloss: 'at the oaks of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H436', position: 3 },
  { id: 'Gen.18.1.4', language: 'hebrew', text: 'מַמְרֵ֑א', transliteration: 'mamrēʾ', lemma: 'מַמְרֵא', lemmaTranslit: 'mamrēʾ', gloss: 'Mamre', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H4471', position: 4 },
  { id: 'Gen.18.1.5', language: 'hebrew', text: 'וְה֛וּא', transliteration: 'wəhûʾ', lemma: 'הוּא', lemmaTranslit: 'hûʾ', gloss: 'and he', morphology: { pos: 'pronoun', person: '3', gender: 'masculine', number: 'singular', rawCode: 'Pp3ms' }, strongs: 'H1931', position: 5 },
  { id: 'Gen.18.1.6', language: 'hebrew', text: 'יֹשֵׁ֥ב', transliteration: 'yōšēḇ', lemma: 'יָשַׁב', lemmaTranslit: 'yāšaḇ', gloss: 'sitting', morphology: { pos: 'verb', gender: 'masculine', number: 'singular', stem: 'qal', rawCode: 'Vqrmsa' }, strongs: 'H3427', position: 6 },
  { id: 'Gen.18.1.7', language: 'hebrew', text: 'פֶּֽתַח־הָאֹ֖הֶל', transliteration: 'petaḥ-hāʾōhel', lemma: 'אֹהֶל', lemmaTranslit: 'ʾōhel', gloss: 'entrance of the tent', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H168', position: 7 },
  { id: 'Gen.18.1.8', language: 'hebrew', text: 'כְּחֹ֥ם', transliteration: 'kəḥōm', lemma: 'חֹם', lemmaTranslit: 'ḥōm', gloss: 'in the heat of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H2527', position: 8 },
  { id: 'Gen.18.1.9', language: 'hebrew', text: 'הַיּֽוֹם', transliteration: 'hayyôm', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'the day', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3117', position: 9 },
];

export const genesis18_1_translation: VerseTranslation = {
  verseRef: 'Gen.18.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And the LORD appeared to him at the oaks of Mamre, and he was sitting at the entrance of the tent in the heat of the day.', spans: [{ id: 'Gen.18.1.en.lit.0', text: 'And the LORD appeared to him...', position: 0, sourceTokenIds: ['Gen.18.1.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'The LORD appeared to Abraham near the great trees of Mamre while he was sitting at the entrance to his tent in the heat of the day.', spans: [{ id: 'Gen.18.1.en.idi.0', text: 'The LORD appeared to Abraham...', position: 0, sourceTokenIds: ['Gen.18.1.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis18_1_notes: StudyNote[] = [
  { id: 'Gen.18.1.note.1', verseRef: 'Gen.18.1', sourceTokenIds: ['Gen.18.1.0', 'Gen.18.1.2'], category: 'theological', title: 'Theophany at Mamre', content: 'This theophany (wayyera YHWH, "and the LORD appeared") is unique — YHWH appears as (or accompanied by) three men (v. 2). The relationship between YHWH and the three visitors has generated extensive theological discussion. Jewish tradition sees three angels; Christian tradition has often seen a Trinitarian foreshadowing.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 18:2
export const genesis18_2_tokens: SourceToken[] = [
  { id: 'Gen.18.2.0', language: 'hebrew', text: 'וַיִּשָּׂ֤א', transliteration: 'wayyiśśāʾ', lemma: 'נָשָׂא', lemmaTranslit: 'nāśāʾ', gloss: 'And he lifted up', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H5375', position: 0 },
  { id: 'Gen.18.2.1', language: 'hebrew', text: 'עֵינָיו֙', transliteration: 'ʿênāyw', lemma: 'עַיִן', lemmaTranslit: 'ʿayin', gloss: 'his eyes', morphology: { pos: 'noun', gender: 'feminine', number: 'dual', state: 'construct', rawCode: 'Ncfdc' }, strongs: 'H5869', position: 1 },
  { id: 'Gen.18.2.2', language: 'hebrew', text: 'וַיַּ֔רְא', transliteration: 'wayyarʾ', lemma: 'רָאָה', lemmaTranslit: 'rāʾāh', gloss: 'and he saw', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H7200', position: 2 },
  { id: 'Gen.18.2.3', language: 'hebrew', text: 'וְהִנֵּה֙', transliteration: 'wəhinnēh', lemma: 'הִנֵּה', lemmaTranslit: 'hinnēh', gloss: 'and behold', morphology: { pos: 'particle', rawCode: 'Tm' }, strongs: 'H2009', position: 3 },
  { id: 'Gen.18.2.4', language: 'hebrew', text: 'שְׁלֹשָׁ֣ה', transliteration: 'šəlōšāh', lemma: 'שָׁלוֹשׁ', lemmaTranslit: 'šālôš', gloss: 'three', morphology: { pos: 'noun', rawCode: 'Ac' }, strongs: 'H7969', position: 4 },
  { id: 'Gen.18.2.5', language: 'hebrew', text: 'אֲנָשִׁ֔ים', transliteration: 'ʾănāšîm', lemma: 'אִישׁ', lemmaTranslit: 'ʾîš', gloss: 'men', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H376', position: 5 },
  { id: 'Gen.18.2.6', language: 'hebrew', text: 'וַיַּ֗רְא', transliteration: 'wayyarʾ', lemma: 'רָאָה', lemmaTranslit: 'rāʾāh', gloss: 'and he saw', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H7200', position: 6 },
  { id: 'Gen.18.2.7', language: 'hebrew', text: 'וַיָּ֤רָץ', transliteration: 'wayyārāṣ', lemma: 'רוּץ', lemmaTranslit: 'rûṣ', gloss: 'and he ran', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H7323', position: 7 },
  { id: 'Gen.18.2.8', language: 'hebrew', text: 'וַיִּשְׁתַּ֖חוּ', transliteration: 'wayyištaḥû', lemma: 'שָׁחָה', lemmaTranslit: 'šāḥāh', gloss: 'and he bowed down', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hishtaphel', rawCode: 'Vtw3ms' }, strongs: 'H7812', position: 8 },
  { id: 'Gen.18.2.9', language: 'hebrew', text: 'אָֽרְצָה', transliteration: 'ʾārṣāh', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'to the ground', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', rawCode: 'Ncfsa' }, strongs: 'H776', position: 9 },
];

export const genesis18_2_translation: VerseTranslation = {
  verseRef: 'Gen.18.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And he lifted his eyes and saw, and behold, three men standing before him. And he saw and ran to meet them from the entrance of the tent, and bowed down to the ground.', spans: [{ id: 'Gen.18.2.en.lit.0', text: 'And he lifted his eyes and s...', position: 0, sourceTokenIds: ['Gen.18.2.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Abraham looked up and saw three men standing nearby. When he saw them, he hurried from the entrance of his tent to meet them and bowed low to the ground.', spans: [{ id: 'Gen.18.2.en.idi.0', text: 'Abraham looked up and saw thr...', position: 0, sourceTokenIds: ['Gen.18.2.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis18_2_notes: StudyNote[] = [];

// Genesis 18:10
export const genesis18_10_tokens: SourceToken[] = [
  { id: 'Gen.18.10.0', language: 'hebrew', text: 'וַיֹּ֗אמֶר', transliteration: 'wayyōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'And he said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H559', position: 0 },
  { id: 'Gen.18.10.1', language: 'hebrew', text: 'שׁ֣וֹב', transliteration: 'šôḇ', lemma: 'שׁוּב', lemmaTranslit: 'šûḇ', gloss: 'surely returning', morphology: { pos: 'verb', stem: 'qal', rawCode: 'Vqa' }, strongs: 'H7725', position: 1 },
  { id: 'Gen.18.10.2', language: 'hebrew', text: 'אָשׁ֤וּב', transliteration: 'ʾāšûḇ', lemma: 'שׁוּב', lemmaTranslit: 'šûḇ', gloss: 'I will return', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi1cs' }, strongs: 'H7725', position: 2 },
  { id: 'Gen.18.10.3', language: 'hebrew', text: 'אֵלֶ֙יךָ֙', transliteration: 'ʾēleyḵā', lemma: 'אֵל', lemmaTranslit: 'ʾēl', gloss: 'to you', morphology: { pos: 'preposition', rawCode: 'RPs2ms' }, strongs: 'H413', position: 3 },
  { id: 'Gen.18.10.4', language: 'hebrew', text: 'כָּעֵ֣ת', transliteration: 'kāʿēṯ', lemma: 'עֵת', lemmaTranslit: 'ʿēṯ', gloss: 'at the time', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H6256', position: 4 },
  { id: 'Gen.18.10.5', language: 'hebrew', text: 'חַיָּ֔ה', transliteration: 'ḥayyāh', lemma: 'חַי', lemmaTranslit: 'ḥay', gloss: 'living', morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', rawCode: 'Ajfsa' }, strongs: 'H2416', position: 5 },
  { id: 'Gen.18.10.6', language: 'hebrew', text: 'וְהִנֵּה־בֵ֖ן', transliteration: 'wəhinnēh-ḇēn', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'and behold a son', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H1121', position: 6 },
  { id: 'Gen.18.10.7', language: 'hebrew', text: 'לְשָׂרָ֣ה', transliteration: 'ləśārāh', lemma: 'שָׂרָה', lemmaTranslit: 'śārāh', gloss: 'to Sarah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8283', position: 7 },
  { id: 'Gen.18.10.8', language: 'hebrew', text: 'אִשְׁתֶּ֑ךָ', transliteration: 'ʾištteḵā', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'your wife', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H802', position: 8 },
];

export const genesis18_10_translation: VerseTranslation = {
  verseRef: 'Gen.18.10',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And he said, "I will surely return to you at the time of life, and behold, a son to Sarah your wife."', spans: [{ id: 'Gen.18.10.en.lit.0', text: 'And he said, I will surely r...', position: 0, sourceTokenIds: ['Gen.18.10.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Then one of them said, "I will surely return to you about this time next year, and Sarah your wife will have a son."', spans: [{ id: 'Gen.18.10.en.idi.0', text: 'Then one of them said, I wil...', position: 0, sourceTokenIds: ['Gen.18.10.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis18_10_notes: StudyNote[] = [];

// Genesis 18:12
export const genesis18_12_tokens: SourceToken[] = [
  { id: 'Gen.18.12.0', language: 'hebrew', text: 'וַתִּצְחַ֥ק', transliteration: 'wattiṣḥaq', lemma: 'צָחַק', lemmaTranslit: 'ṣāḥaq', gloss: 'And laughed', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3fs' }, strongs: 'H6711', position: 0 },
  { id: 'Gen.18.12.1', language: 'hebrew', text: 'שָׂרָ֖ה', transliteration: 'śārāh', lemma: 'שָׂרָה', lemmaTranslit: 'śārāh', gloss: 'Sarah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8283', position: 1 },
  { id: 'Gen.18.12.2', language: 'hebrew', text: 'בְּקִרְבָּ֣הּ', transliteration: 'bəqirbāh', lemma: 'קֶרֶב', lemmaTranslit: 'qereḇ', gloss: 'within herself', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H7130', position: 2 },
  { id: 'Gen.18.12.3', language: 'hebrew', text: 'לֵאמֹ֑ר', transliteration: 'lēʾmōr', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'saying', morphology: { pos: 'verb', stem: 'qal', rawCode: 'Vqc' }, strongs: 'H559', position: 3 },
  { id: 'Gen.18.12.4', language: 'hebrew', text: 'אַחֲרֵ֤י', transliteration: 'ʾaḥărê', lemma: 'אַחַר', lemmaTranslit: 'ʾaḥar', gloss: 'After', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H310', position: 4 },
  { id: 'Gen.18.12.5', language: 'hebrew', text: 'בְלֹתִי֙', transliteration: 'ḇəlōṯî', lemma: 'בָּלָה', lemmaTranslit: 'bālāh', gloss: 'I am worn out', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', stem: 'qal', rawCode: 'Vqc' }, strongs: 'H1086', position: 5 },
  { id: 'Gen.18.12.6', language: 'hebrew', text: 'הָֽיְתָה־לִּ֣י', transliteration: 'hāyṯāh-llî', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'shall I have', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3fs' }, strongs: 'H1961', position: 6 },
  { id: 'Gen.18.12.7', language: 'hebrew', text: 'עֶדְנָ֔ה', transliteration: 'ʿeḏnāh', lemma: 'עֶדְנָה', lemmaTranslit: 'ʿeḏnāh', gloss: 'pleasure', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H5730', position: 7 },
];

export const genesis18_12_translation: VerseTranslation = {
  verseRef: 'Gen.18.12',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And Sarah laughed within herself, saying, "After I have become worn out, shall I have pleasure, and my lord is old?"', spans: [{ id: 'Gen.18.12.en.lit.0', text: 'And Sarah laughed within hers...', position: 0, sourceTokenIds: ['Gen.18.12.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'So Sarah laughed to herself as she thought, "After I am worn out and my lord is old, will I now have this pleasure?"', spans: [{ id: 'Gen.18.12.en.idi.0', text: 'So Sarah laughed to herself...', position: 0, sourceTokenIds: ['Gen.18.12.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis18_12_notes: StudyNote[] = [
  { id: 'Gen.18.12.note.1', verseRef: 'Gen.18.12', sourceTokenIds: ['Gen.18.12.0'], category: 'lexical', title: 'Sarah\'s Laughter (tsachaq)', content: 'Sarah\'s laugh (tsachaq, צָחַק) uses the same root that will become Isaac\'s name (Yitschaq, יִצְחָק, "he laughs"). Both Abraham (17:17) and Sarah laugh at the promise, creating a rich wordplay — the child of promise is literally named "Laughter," transforming disbelief into joy (21:6).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 18:14
export const genesis18_14_tokens: SourceToken[] = [
  { id: 'Gen.18.14.0', language: 'hebrew', text: 'הֲיִפָּלֵ֥א', transliteration: 'hayippālēʾ', lemma: 'פָּלָא', lemmaTranslit: 'pālāʾ', gloss: 'Is too hard', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'niphal', rawCode: 'VNi3ms' }, strongs: 'H6381', position: 0 },
  { id: 'Gen.18.14.1', language: 'hebrew', text: 'מֵיְהוָ֖ה', transliteration: 'mēYHWH', lemma: 'יְהוָה', lemmaTranslit: 'YHWH', gloss: 'from the LORD', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 1 },
  { id: 'Gen.18.14.2', language: 'hebrew', text: 'דָּבָ֑ר', transliteration: 'dāḇār', lemma: 'דָּבָר', lemmaTranslit: 'dāḇār', gloss: 'a thing', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H1697', position: 2 },
  { id: 'Gen.18.14.3', language: 'hebrew', text: 'לַמּוֹעֵ֞ד', transliteration: 'lammôʿēḏ', lemma: 'מוֹעֵד', lemmaTranslit: 'môʿēḏ', gloss: 'At the appointed time', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H4150', position: 3 },
  { id: 'Gen.18.14.4', language: 'hebrew', text: 'אָשׁ֤וּב', transliteration: 'ʾāšûḇ', lemma: 'שׁוּב', lemmaTranslit: 'šûḇ', gloss: 'I will return', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi1cs' }, strongs: 'H7725', position: 4 },
  { id: 'Gen.18.14.5', language: 'hebrew', text: 'אֵלֶ֙יךָ֙', transliteration: 'ʾēleyḵā', lemma: 'אֵל', lemmaTranslit: 'ʾēl', gloss: 'to you', morphology: { pos: 'preposition', rawCode: 'RPs2ms' }, strongs: 'H413', position: 5 },
  { id: 'Gen.18.14.6', language: 'hebrew', text: 'וּלְשָׂרָ֖ה', transliteration: 'ûləśārāh', lemma: 'שָׂרָה', lemmaTranslit: 'śārāh', gloss: 'and to Sarah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8283', position: 6 },
  { id: 'Gen.18.14.7', language: 'hebrew', text: 'בֵֽן', transliteration: 'ḇēn', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'a son', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H1121', position: 7 },
];

export const genesis18_14_translation: VerseTranslation = {
  verseRef: 'Gen.18.14',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: '"Is anything too hard for the LORD? At the appointed time I will return to you, and Sarah shall have a son."', spans: [{ id: 'Gen.18.14.en.lit.0', text: 'Is anything too hard for the...', position: 0, sourceTokenIds: ['Gen.18.14.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"Is anything too hard for the LORD? I will return to you at the appointed time next year, and Sarah will have a son."', spans: [{ id: 'Gen.18.14.en.idi.0', text: 'Is anything too hard for the...', position: 0, sourceTokenIds: ['Gen.18.14.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis18_14_notes: StudyNote[] = [
  { id: 'Gen.18.14.note.1', verseRef: 'Gen.18.14', sourceTokenIds: ['Gen.18.14.0', 'Gen.18.14.1', 'Gen.18.14.2'], category: 'theological', title: 'Is Anything Too Hard for YHWH?', content: 'The rhetorical question hayippale meYHWH davar (הֲיִפָּלֵא מֵיְהוָה דָּבָר, "Is anything too wonderful/hard for the LORD?") uses the niphal of pala (פָּלָא), meaning "to be extraordinary, wonderful, beyond comprehension." This verse becomes a touchstone for divine omnipotence, echoed in Jeremiah 32:17,27 and Luke 1:37 (the annunciation to Mary).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 18:15
export const genesis18_15_tokens: SourceToken[] = [
  { id: 'Gen.18.15.0', language: 'hebrew', text: 'וַתְּכַחֵ֨שׁ', transliteration: 'wattəḵaḥēš', lemma: 'כָּחַשׁ', lemmaTranslit: 'kāḥaš', gloss: 'And denied', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'piel', rawCode: 'Vpw3fs' }, strongs: 'H3584', position: 0 },
  { id: 'Gen.18.15.1', language: 'hebrew', text: 'שָׂרָ֧ה', transliteration: 'śārāh', lemma: 'שָׂרָה', lemmaTranslit: 'śārāh', gloss: 'Sarah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8283', position: 1 },
  { id: 'Gen.18.15.2', language: 'hebrew', text: 'לֵאמֹ֛ר', transliteration: 'lēʾmōr', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'saying', morphology: { pos: 'verb', stem: 'qal', rawCode: 'Vqc' }, strongs: 'H559', position: 2 },
  { id: 'Gen.18.15.3', language: 'hebrew', text: 'לֹ֣א', transliteration: 'lōʾ', lemma: 'לֹא', lemmaTranslit: 'lōʾ', gloss: 'not', morphology: { pos: 'adverb', rawCode: 'Tn' }, strongs: 'H3808', position: 3 },
  { id: 'Gen.18.15.4', language: 'hebrew', text: 'צָחַ֑קְתִּי', transliteration: 'ṣāḥaqtî', lemma: 'צָחַק', lemmaTranslit: 'ṣāḥaq', gloss: 'I laughed', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp1cs' }, strongs: 'H6711', position: 4 },
  { id: 'Gen.18.15.5', language: 'hebrew', text: 'כִּ֣י', transliteration: 'kî', lemma: 'כִּי', lemmaTranslit: 'kî', gloss: 'for', morphology: { pos: 'conjunction', rawCode: 'Cc' }, strongs: 'H3588', position: 5 },
  { id: 'Gen.18.15.6', language: 'hebrew', text: 'יָרֵ֔אָה', transliteration: 'yārēʾāh', lemma: 'יָרֵא', lemmaTranslit: 'yārēʾ', gloss: 'she was afraid', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3fs' }, strongs: 'H3372', position: 6 },
  { id: 'Gen.18.15.7', language: 'hebrew', text: 'וַיֹּ֥אמֶר', transliteration: 'wayyōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'But he said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H559', position: 7 },
  { id: 'Gen.18.15.8', language: 'hebrew', text: 'לֹ֖א', transliteration: 'lōʾ', lemma: 'לֹא', lemmaTranslit: 'lōʾ', gloss: 'No', morphology: { pos: 'adverb', rawCode: 'Tn' }, strongs: 'H3808', position: 8 },
  { id: 'Gen.18.15.9', language: 'hebrew', text: 'כִּ֥י', transliteration: 'kî', lemma: 'כִּי', lemmaTranslit: 'kî', gloss: 'but', morphology: { pos: 'conjunction', rawCode: 'Cc' }, strongs: 'H3588', position: 9 },
  { id: 'Gen.18.15.10', language: 'hebrew', text: 'צָחָֽקְתְּ', transliteration: 'ṣāḥāqtə', lemma: 'צָחַק', lemmaTranslit: 'ṣāḥaq', gloss: 'you did laugh', morphology: { pos: 'verb', person: '2', gender: 'feminine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp2fs' }, strongs: 'H6711', position: 10 },
];

export const genesis18_15_translation: VerseTranslation = {
  verseRef: 'Gen.18.15',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And Sarah denied, saying, "I did not laugh," for she was afraid. But he said, "No, but you did laugh."', spans: [{ id: 'Gen.18.15.en.lit.0', text: 'And Sarah denied, saying...', position: 0, sourceTokenIds: ['Gen.18.15.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Sarah was afraid, so she lied and said, "I did not laugh." But he said, "Yes, you did laugh."', spans: [{ id: 'Gen.18.15.en.idi.0', text: 'Sarah was afraid, so she lie...', position: 0, sourceTokenIds: ['Gen.18.15.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis18_15_notes: StudyNote[] = [];

// Export all verses
export const genesis18_1_15_verses = [
  { ref: 'Gen.18.1', sourceTokens: genesis18_1_tokens, translation: genesis18_1_translation, notes: genesis18_1_notes },
  { ref: 'Gen.18.2', sourceTokens: genesis18_2_tokens, translation: genesis18_2_translation, notes: genesis18_2_notes },
  { ref: 'Gen.18.10', sourceTokens: genesis18_10_tokens, translation: genesis18_10_translation, notes: genesis18_10_notes },
  { ref: 'Gen.18.12', sourceTokens: genesis18_12_tokens, translation: genesis18_12_translation, notes: genesis18_12_notes },
  { ref: 'Gen.18.14', sourceTokens: genesis18_14_tokens, translation: genesis18_14_translation, notes: genesis18_14_notes },
  { ref: 'Gen.18.15', sourceTokens: genesis18_15_tokens, translation: genesis18_15_translation, notes: genesis18_15_notes },
];
