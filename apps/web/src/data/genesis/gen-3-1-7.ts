/**
 * Genesis 3:1-7 - Hebrew morphological data
 * The temptation and fall: serpent deceives Eve, Adam and Eve eat the fruit
 * Source: Open Hebrew Bible (Tanach.us) - Public Domain
 */

import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

// Genesis 3:1 - Now the serpent was more crafty
export const genesis3_1_tokens: SourceToken[] = [
  { id: 'Gen.3.1.0', language: 'hebrew', text: 'וְהַנָּחָשׁ֙', transliteration: 'wəhannāḥāš', lemma: 'נָחָשׁ', lemmaTranslit: 'nāḥāš', gloss: 'Now the serpent', glossExtended: 'serpent, snake', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H5175', position: 0 },
  { id: 'Gen.3.1.1', language: 'hebrew', text: 'הָיָ֣ה', transliteration: 'hāyāh', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'was', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H1961', position: 1 },
  { id: 'Gen.3.1.2', language: 'hebrew', text: 'עָר֔וּם', transliteration: 'ʿārûm', lemma: 'עָרוּם', lemmaTranslit: 'ʿārûm', gloss: 'crafty', glossExtended: 'crafty, shrewd, cunning', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Aamsa' }, strongs: 'H6175', position: 2 },
  { id: 'Gen.3.1.3', language: 'hebrew', text: 'מִכֹּל֙', transliteration: 'mikkōl', lemma: 'כֹּל', lemmaTranslit: 'kōl', gloss: 'than any', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsc' }, strongs: 'H3605', position: 3 },
  { id: 'Gen.3.1.4', language: 'hebrew', text: 'חַיַּ֣ת', transliteration: 'ḥayyaṯ', lemma: 'חַיָּה', lemmaTranslit: 'ḥayyāh', gloss: 'beast of', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H2416', position: 4 },
  { id: 'Gen.3.1.5', language: 'hebrew', text: 'הַשָּׂדֶ֔ה', transliteration: 'haśśāḏeh', lemma: 'שָׂדֶה', lemmaTranslit: 'śāḏeh', gloss: 'the field', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H7704', position: 5 },
  { id: 'Gen.3.1.6', language: 'hebrew', text: 'אֲשֶׁ֥ר', transliteration: 'ʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'that', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 6 },
  { id: 'Gen.3.1.7', language: 'hebrew', text: 'עָשָׂ֖ה', transliteration: 'ʿāśāh', lemma: 'עָשָׂה', lemmaTranslit: 'ʿāśāh', gloss: 'had made', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H6213', position: 7 },
  { id: 'Gen.3.1.8', language: 'hebrew', text: 'יְהוָ֣ה', transliteration: 'yhwh', lemma: 'יְהוָה', lemmaTranslit: 'yhwh', gloss: 'YHWH', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 8 },
  { id: 'Gen.3.1.9', language: 'hebrew', text: 'אֱלֹהִ֑ים', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H430', position: 9 },
  { id: 'Gen.3.1.10', language: 'hebrew', text: 'וַיֹּ֙אמֶר֙', transliteration: 'wayyōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'And he said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H559', position: 10 },
  { id: 'Gen.3.1.11', language: 'hebrew', text: 'אֶל־הָ֣אִשָּׁ֔ה', transliteration: 'ʾel-hāʾiššāh', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'to the woman', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H802', position: 11 },
  { id: 'Gen.3.1.12', language: 'hebrew', text: 'אַ֚ף', transliteration: 'ʾap̄', lemma: 'אַף', lemmaTranslit: 'ʾap̄', gloss: 'Indeed', glossExtended: 'even, also, indeed (rhetorical)', morphology: { pos: 'conjunction', rawCode: 'Cc' }, strongs: 'H637', position: 12 },
  { id: 'Gen.3.1.13', language: 'hebrew', text: 'כִּֽי־אָמַ֣ר', transliteration: 'kî-ʾāmar', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'did say', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H559', position: 13 },
  { id: 'Gen.3.1.14', language: 'hebrew', text: 'אֱלֹהִ֔ים', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H430', position: 14 },
  { id: 'Gen.3.1.15', language: 'hebrew', text: 'לֹ֣א', transliteration: 'lōʾ', lemma: 'לֹא', lemmaTranslit: 'lōʾ', gloss: 'not', morphology: { pos: 'adverb', rawCode: 'An' }, strongs: 'H3808', position: 15 },
  { id: 'Gen.3.1.16', language: 'hebrew', text: 'תֹֽאכְל֔וּ', transliteration: 'ṯōʾḵəlû', lemma: 'אָכַל', lemmaTranslit: 'ʾāḵal', gloss: 'you shall eat', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi2mp' }, strongs: 'H398', position: 16 },
  { id: 'Gen.3.1.17', language: 'hebrew', text: 'מִכֹּ֖ל', transliteration: 'mikkōl', lemma: 'כֹּל', lemmaTranslit: 'kōl', gloss: 'from any', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsc' }, strongs: 'H3605', position: 17 },
  { id: 'Gen.3.1.18', language: 'hebrew', text: 'עֵ֥ץ', transliteration: 'ʿēṣ', lemma: 'עֵץ', lemmaTranslit: 'ʿēṣ', gloss: 'tree of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H6086', position: 18 },
  { id: 'Gen.3.1.19', language: 'hebrew', text: 'הַגָּֽן', transliteration: 'haggān', lemma: 'גַּן', lemmaTranslit: 'gan', gloss: 'the garden', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H1588', position: 19 },
];

export const genesis3_1_translation: VerseTranslation = {
  verseRef: 'Gen.3.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'Now the serpent was crafty from-any beast of the field that had made YHWH God. And he said to the woman: Indeed did say God not you shall eat from any tree of the garden?', spans: [{ id: 'Gen.3.1.en.lit.0', text: 'Now the serpent was crafty...', position: 0, sourceTokenIds: ['Gen.3.1.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Now the serpent was more crafty than any other beast of the field that the LORD God had made. He said to the woman, "Did God actually say, \'You shall not eat of any tree in the garden\'?"', spans: [{ id: 'Gen.3.1.en.idi.0', text: 'Now the serpent was more crafty...', position: 0, sourceTokenIds: ['Gen.3.1.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis3_1_notes: StudyNote[] = [
  { id: 'Gen.3.1.note.1', verseRef: 'Gen.3.1', sourceTokenIds: ['Gen.3.1.2'], category: 'lexical', title: 'Crafty (ʿārûm) Wordplay', content: 'The word "crafty" (ʿārûm) sounds like "naked" (ʿărummîm) in 2:25, creating ironic wordplay linking innocence and cunning.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.3.1.note.2', verseRef: 'Gen.3.1', sourceTokenIds: ['Gen.3.1.12', 'Gen.3.1.13'], category: 'interpretive', title: 'Serpent\'s Distortion', content: 'The serpent distorts God\'s command: God said "freely eat" from all but one tree; the serpent implies total restriction.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 3:2 - The woman said to the serpent
export const genesis3_2_tokens: SourceToken[] = [
  { id: 'Gen.3.2.0', language: 'hebrew', text: 'וַתֹּ֥אמֶר', transliteration: 'wattōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'And said', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3fs' }, strongs: 'H559', position: 0 },
  { id: 'Gen.3.2.1', language: 'hebrew', text: 'הָֽאִשָּׁ֖ה', transliteration: 'hāʾiššāh', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'the woman', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H802', position: 1 },
  { id: 'Gen.3.2.2', language: 'hebrew', text: 'אֶל־הַנָּחָ֑שׁ', transliteration: 'ʾel-hannāḥāš', lemma: 'נָחָשׁ', lemmaTranslit: 'nāḥāš', gloss: 'to the serpent', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H5175', position: 2 },
  { id: 'Gen.3.2.3', language: 'hebrew', text: 'מִפְּרִ֥י', transliteration: 'mipprî', lemma: 'פְּרִי', lemmaTranslit: 'pərî', gloss: 'Of the fruit of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H6529', position: 3 },
  { id: 'Gen.3.2.4', language: 'hebrew', text: 'עֵֽץ־הַגָּ֖ן', transliteration: 'ʿēṣ-haggān', lemma: 'עֵץ', lemmaTranslit: 'ʿēṣ', gloss: 'trees of the garden', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H6086', position: 4 },
  { id: 'Gen.3.2.5', language: 'hebrew', text: 'נֹאכֵֽל', transliteration: 'nōʾḵēl', lemma: 'אָכַל', lemmaTranslit: 'ʾāḵal', gloss: 'we may eat', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi1cp' }, strongs: 'H398', position: 5 },
];

export const genesis3_2_translation: VerseTranslation = {
  verseRef: 'Gen.3.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And said the woman to the serpent: Of fruit of trees of the garden we may eat.', spans: [{ id: 'Gen.3.2.en.lit.0', text: 'And said the woman to the serpent...', position: 0, sourceTokenIds: ['Gen.3.2.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'And the woman said to the serpent, "We may eat of the fruit of the trees in the garden."', spans: [{ id: 'Gen.3.2.en.idi.0', text: 'And the woman said to the serpent...', position: 0, sourceTokenIds: ['Gen.3.2.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis3_2_notes: StudyNote[] = [];

// Genesis 3:3 - But of the fruit of the tree in the midst
export const genesis3_3_tokens: SourceToken[] = [
  { id: 'Gen.3.3.0', language: 'hebrew', text: 'וּמִפְּרִ֣י', transliteration: 'ûmipprî', lemma: 'פְּרִי', lemmaTranslit: 'pərî', gloss: 'But of the fruit of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H6529', position: 0 },
  { id: 'Gen.3.3.1', language: 'hebrew', text: 'הָעֵץ֮', transliteration: 'hāʿēṣ', lemma: 'עֵץ', lemmaTranslit: 'ʿēṣ', gloss: 'the tree', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H6086', position: 1 },
  { id: 'Gen.3.3.2', language: 'hebrew', text: 'אֲשֶׁ֣ר', transliteration: 'ʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'that is', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 2 },
  { id: 'Gen.3.3.3', language: 'hebrew', text: 'בְּתוֹךְ־הַגָּן֒', transliteration: 'bəṯôḵ-haggān', lemma: 'תָּוֶךְ', lemmaTranslit: 'tāweḵ', gloss: 'in the midst of the garden', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H8432', position: 3 },
  { id: 'Gen.3.3.4', language: 'hebrew', text: 'אָמַ֣ר', transliteration: 'ʾāmar', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H559', position: 4 },
  { id: 'Gen.3.3.5', language: 'hebrew', text: 'אֱלֹהִ֗ים', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H430', position: 5 },
  { id: 'Gen.3.3.6', language: 'hebrew', text: 'לֹ֤א', transliteration: 'lōʾ', lemma: 'לֹא', lemmaTranslit: 'lōʾ', gloss: 'not', morphology: { pos: 'adverb', rawCode: 'An' }, strongs: 'H3808', position: 6 },
  { id: 'Gen.3.3.7', language: 'hebrew', text: 'תֹֽאכְלוּ֙', transliteration: 'ṯōʾḵəlû', lemma: 'אָכַל', lemmaTranslit: 'ʾāḵal', gloss: 'you shall eat', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi2mp' }, strongs: 'H398', position: 7 },
  { id: 'Gen.3.3.8', language: 'hebrew', text: 'מִמֶּ֔נּוּ', transliteration: 'mimmennû', lemma: 'מִן', lemmaTranslit: 'min', gloss: 'from it', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H4480', position: 8 },
  { id: 'Gen.3.3.9', language: 'hebrew', text: 'וְלֹ֥א', transliteration: 'wəlōʾ', lemma: 'לֹא', lemmaTranslit: 'lōʾ', gloss: 'and not', morphology: { pos: 'adverb', rawCode: 'An' }, strongs: 'H3808', position: 9 },
  { id: 'Gen.3.3.10', language: 'hebrew', text: 'תִגְּע֖וּ', transliteration: 'ṯigəʿû', lemma: 'נָגַע', lemmaTranslit: 'nāḡaʿ', gloss: 'shall you touch', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi2mp' }, strongs: 'H5060', position: 10 },
  { id: 'Gen.3.3.11', language: 'hebrew', text: 'בּ֑וֹ', transliteration: 'bô', lemma: 'בְּ', lemmaTranslit: 'bə', gloss: 'it', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H9003', position: 11 },
  { id: 'Gen.3.3.12', language: 'hebrew', text: 'פֶּן־', transliteration: 'pen-', lemma: 'פֶּן', lemmaTranslit: 'pen', gloss: 'lest', morphology: { pos: 'conjunction', rawCode: 'Cc' }, strongs: 'H6435', position: 12 },
  { id: 'Gen.3.3.13', language: 'hebrew', text: 'תְּמֻתֽוּן', transliteration: 'təmuṯûn', lemma: 'מוּת', lemmaTranslit: 'mûṯ', gloss: 'you die', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi2mp' }, strongs: 'H4191', position: 13 },
];

export const genesis3_3_translation: VerseTranslation = {
  verseRef: 'Gen.3.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'But of fruit of the tree that is in the midst of the garden said God not you shall eat from it and not shall you touch it lest you die.', spans: [{ id: 'Gen.3.3.en.lit.0', text: 'But of fruit of the tree...', position: 0, sourceTokenIds: ['Gen.3.3.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"But God said, \'You shall not eat of the fruit of the tree that is in the midst of the garden, neither shall you touch it, lest you die.\'"', spans: [{ id: 'Gen.3.3.en.idi.0', text: '"But God said, \'You shall not eat...\'', position: 0, sourceTokenIds: ['Gen.3.3.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis3_3_notes: StudyNote[] = [
  { id: 'Gen.3.3.note.1', verseRef: 'Gen.3.3', sourceTokenIds: ['Gen.3.3.10'], category: 'interpretive', title: 'Eve\'s Addition', content: 'Eve adds "neither shall you touch it"—God never said this. She may be over-cautious, or subtly questioning God\'s goodness by exaggerating the restriction.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 3:4 - You will not surely die
export const genesis3_4_tokens: SourceToken[] = [
  { id: 'Gen.3.4.0', language: 'hebrew', text: 'וַיֹּ֥אמֶר', transliteration: 'wayyōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'And said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H559', position: 0 },
  { id: 'Gen.3.4.1', language: 'hebrew', text: 'הַנָּחָ֖שׁ', transliteration: 'hannāḥāš', lemma: 'נָחָשׁ', lemmaTranslit: 'nāḥāš', gloss: 'the serpent', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H5175', position: 1 },
  { id: 'Gen.3.4.2', language: 'hebrew', text: 'אֶל־הָֽאִשָּׁ֑ה', transliteration: 'ʾel-hāʾiššāh', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'to the woman', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H802', position: 2 },
  { id: 'Gen.3.4.3', language: 'hebrew', text: 'לֹֽא־', transliteration: 'lōʾ-', lemma: 'לֹא', lemmaTranslit: 'lōʾ', gloss: 'Not', morphology: { pos: 'adverb', rawCode: 'An' }, strongs: 'H3808', position: 3 },
  { id: 'Gen.3.4.4', language: 'hebrew', text: 'מ֖וֹת', transliteration: 'môṯ', lemma: 'מוּת', lemmaTranslit: 'mûṯ', gloss: 'surely', glossExtended: 'dying (infinitive absolute)', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'Vqa' }, strongs: 'H4191', position: 4 },
  { id: 'Gen.3.4.5', language: 'hebrew', text: 'תְּמֻתֽוּן', transliteration: 'təmuṯûn', lemma: 'מוּת', lemmaTranslit: 'mûṯ', gloss: 'you will die', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi2mp' }, strongs: 'H4191', position: 5 },
];

export const genesis3_4_translation: VerseTranslation = {
  verseRef: 'Gen.3.4',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And said the serpent to the woman: Not dying you will die.', spans: [{ id: 'Gen.3.4.en.lit.0', text: 'And said the serpent to the woman...', position: 0, sourceTokenIds: ['Gen.3.4.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'But the serpent said to the woman, "You will not surely die."', spans: [{ id: 'Gen.3.4.en.idi.0', text: 'But the serpent said to the woman...', position: 0, sourceTokenIds: ['Gen.3.4.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis3_4_notes: StudyNote[] = [
  { id: 'Gen.3.4.note.1', verseRef: 'Gen.3.4', sourceTokenIds: ['Gen.3.4.3', 'Gen.3.4.4', 'Gen.3.4.5'], category: 'theological', title: 'First Lie', content: 'The serpent directly contradicts God\'s word (cf. 2:17). This is the first recorded lie in Scripture—a flat denial of divine truth.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 3:5 - For God knows...you will be like God
export const genesis3_5_tokens: SourceToken[] = [
  { id: 'Gen.3.5.0', language: 'hebrew', text: 'כִּ֚י', transliteration: 'kî', lemma: 'כִּי', lemmaTranslit: 'kî', gloss: 'For', morphology: { pos: 'conjunction', rawCode: 'Cc' }, strongs: 'H3588', position: 0 },
  { id: 'Gen.3.5.1', language: 'hebrew', text: 'יֹדֵ֣עַ', transliteration: 'yōḏēaʿ', lemma: 'יָדַע', lemmaTranslit: 'yāḏaʿ', gloss: 'knows', morphology: { pos: 'verb', mood: 'participle', stem: 'qal', rawCode: 'Vqrms' }, strongs: 'H3045', position: 1 },
  { id: 'Gen.3.5.2', language: 'hebrew', text: 'אֱלֹהִ֔ים', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H430', position: 2 },
  { id: 'Gen.3.5.3', language: 'hebrew', text: 'כִּ֗י', transliteration: 'kî', lemma: 'כִּי', lemmaTranslit: 'kî', gloss: 'that', morphology: { pos: 'conjunction', rawCode: 'Cc' }, strongs: 'H3588', position: 3 },
  { id: 'Gen.3.5.4', language: 'hebrew', text: 'בְּיוֹם֙', transliteration: 'bəyôm', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'in the day', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H3117', position: 4 },
  { id: 'Gen.3.5.5', language: 'hebrew', text: 'אֲכָלְכֶ֣ם', transliteration: 'ʾăḵālḵem', lemma: 'אָכַל', lemmaTranslit: 'ʾāḵal', gloss: 'you eat', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'Vqc' }, strongs: 'H398', position: 5 },
  { id: 'Gen.3.5.6', language: 'hebrew', text: 'מִמֶּ֔נּוּ', transliteration: 'mimmennû', lemma: 'מִן', lemmaTranslit: 'min', gloss: 'of it', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H4480', position: 6 },
  { id: 'Gen.3.5.7', language: 'hebrew', text: 'וְנִפְקְח֖וּ', transliteration: 'wənip̄qəḥû', lemma: 'פָּקַח', lemmaTranslit: 'pāqaḥ', gloss: 'will be opened', morphology: { pos: 'verb', person: '3', gender: 'common', number: 'plural', tense: 'perfect', stem: 'niphal', rawCode: 'Vnp3cp' }, strongs: 'H6491', position: 7 },
  { id: 'Gen.3.5.8', language: 'hebrew', text: 'עֵֽינֵיכֶ֑ם', transliteration: 'ʿênêḵem', lemma: 'עַיִן', lemmaTranslit: 'ʿayin', gloss: 'your eyes', morphology: { pos: 'noun', gender: 'common', number: 'dual', state: 'construct', rawCode: 'Ncbdc' }, strongs: 'H5869', position: 8 },
  { id: 'Gen.3.5.9', language: 'hebrew', text: 'וִהְיִיתֶם֙', transliteration: 'wîhyîṯem', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'and you will be', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'plural', tense: 'perfect', stem: 'qal', rawCode: 'Vqp2mp' }, strongs: 'H1961', position: 9 },
  { id: 'Gen.3.5.10', language: 'hebrew', text: 'כֵּֽאלֹהִ֔ים', transliteration: 'kēʾlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'like God', glossExtended: 'like God / like gods', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H430', position: 10 },
  { id: 'Gen.3.5.11', language: 'hebrew', text: 'יֹדְעֵ֖י', transliteration: 'yōḏəʿê', lemma: 'יָדַע', lemmaTranslit: 'yāḏaʿ', gloss: 'knowing', morphology: { pos: 'verb', mood: 'participle', stem: 'qal', rawCode: 'Vqrmpc' }, strongs: 'H3045', position: 11 },
  { id: 'Gen.3.5.12', language: 'hebrew', text: 'ט֥וֹב', transliteration: 'ṭôḇ', lemma: 'טוֹב', lemmaTranslit: 'ṭôḇ', gloss: 'good', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Aamsa' }, strongs: 'H2896', position: 12 },
  { id: 'Gen.3.5.13', language: 'hebrew', text: 'וָרָֽע', transliteration: 'wārāʿ', lemma: 'רַע', lemmaTranslit: 'raʿ', gloss: 'and evil', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Aamsa' }, strongs: 'H7451', position: 13 },
];

export const genesis3_5_translation: VerseTranslation = {
  verseRef: 'Gen.3.5',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'For knows God that in day of your eating of it will be opened your eyes and you will be like God knowing good and evil.', spans: [{ id: 'Gen.3.5.en.lit.0', text: 'For knows God that in day of your eating...', position: 0, sourceTokenIds: ['Gen.3.5.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"For God knows that when you eat of it your eyes will be opened, and you will be like God, knowing good and evil."', spans: [{ id: 'Gen.3.5.en.idi.0', text: '"For God knows that when you eat of it...\'', position: 0, sourceTokenIds: ['Gen.3.5.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis3_5_notes: StudyNote[] = [
  { id: 'Gen.3.5.note.1', verseRef: 'Gen.3.5', sourceTokenIds: ['Gen.3.5.10'], category: 'theological', title: 'Like God', content: 'The serpent\'s promise mixes truth with lie: their eyes would indeed be opened (3:7), but the promised god-likeness brought death, not life.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 3:6 - She took of its fruit and ate
export const genesis3_6_tokens: SourceToken[] = [
  { id: 'Gen.3.6.0', language: 'hebrew', text: 'וַתֵּ֣רֶא', transliteration: 'wattērēʾ', lemma: 'רָאָה', lemmaTranslit: 'rāʾāh', gloss: 'And saw', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3fs' }, strongs: 'H7200', position: 0 },
  { id: 'Gen.3.6.1', language: 'hebrew', text: 'הָֽאִשָּׁ֡ה', transliteration: 'hāʾiššāh', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'the woman', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H802', position: 1 },
  { id: 'Gen.3.6.2', language: 'hebrew', text: 'כִּ֣י', transliteration: 'kî', lemma: 'כִּי', lemmaTranslit: 'kî', gloss: 'that', morphology: { pos: 'conjunction', rawCode: 'Cc' }, strongs: 'H3588', position: 2 },
  { id: 'Gen.3.6.3', language: 'hebrew', text: 'ט֣וֹב', transliteration: 'ṭôḇ', lemma: 'טוֹב', lemmaTranslit: 'ṭôḇ', gloss: 'good', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Aamsa' }, strongs: 'H2896', position: 3 },
  { id: 'Gen.3.6.4', language: 'hebrew', text: 'הָעֵץ֩', transliteration: 'hāʿēṣ', lemma: 'עֵץ', lemmaTranslit: 'ʿēṣ', gloss: 'the tree', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H6086', position: 4 },
  { id: 'Gen.3.6.5', language: 'hebrew', text: 'לְמַאֲכָ֨ל', transliteration: 'ləmaʾăḵāl', lemma: 'מַאֲכָל', lemmaTranslit: 'maʾăḵāl', gloss: 'for food', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3978', position: 5 },
  { id: 'Gen.3.6.6', language: 'hebrew', text: 'וְכִ֧י', transliteration: 'wəḵî', lemma: 'כִּי', lemmaTranslit: 'kî', gloss: 'and that', morphology: { pos: 'conjunction', rawCode: 'Cc' }, strongs: 'H3588', position: 6 },
  { id: 'Gen.3.6.7', language: 'hebrew', text: 'תַֽאֲוָה־ה֣וּא', transliteration: 'ṯaʾăwāh-hûʾ', lemma: 'תַּאֲוָה', lemmaTranslit: 'taʾăwāh', gloss: 'a delight', glossExtended: 'desire, delight', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8378', position: 7 },
  { id: 'Gen.3.6.8', language: 'hebrew', text: 'לָעֵינַ֗יִם', transliteration: 'lāʿênayim', lemma: 'עַיִן', lemmaTranslit: 'ʿayin', gloss: 'to the eyes', morphology: { pos: 'noun', gender: 'common', number: 'dual', state: 'absolute', rawCode: 'Ncbda' }, strongs: 'H5869', position: 8 },
  { id: 'Gen.3.6.9', language: 'hebrew', text: 'וְנֶחְמָ֤ד', transliteration: 'wəneḥmāḏ', lemma: 'חָמַד', lemmaTranslit: 'ḥāmaḏ', gloss: 'and desirable', morphology: { pos: 'verb', mood: 'participle', stem: 'niphal', rawCode: 'Vnrms' }, strongs: 'H2530', position: 9 },
  { id: 'Gen.3.6.10', language: 'hebrew', text: 'הָעֵץ֙', transliteration: 'hāʿēṣ', lemma: 'עֵץ', lemmaTranslit: 'ʿēṣ', gloss: 'the tree', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H6086', position: 10 },
  { id: 'Gen.3.6.11', language: 'hebrew', text: 'לְהַשְׂכִּ֔יל', transliteration: 'ləhaśkîl', lemma: 'שָׂכַל', lemmaTranslit: 'śāḵal', gloss: 'to make wise', morphology: { pos: 'verb', mood: 'infinitive', stem: 'hiphil', rawCode: 'Vhc' }, strongs: 'H7919', position: 11 },
  { id: 'Gen.3.6.12', language: 'hebrew', text: 'וַתִּקַּ֥ח', transliteration: 'wattiqaḥ', lemma: 'לָקַח', lemmaTranslit: 'lāqaḥ', gloss: 'and she took', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3fs' }, strongs: 'H3947', position: 12 },
  { id: 'Gen.3.6.13', language: 'hebrew', text: 'מִפִּרְי֖וֹ', transliteration: 'mippiryô', lemma: 'פְּרִי', lemmaTranslit: 'pərî', gloss: 'of its fruit', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H6529', position: 13 },
  { id: 'Gen.3.6.14', language: 'hebrew', text: 'וַתֹּאכַ֑ל', transliteration: 'wattōʾḵal', lemma: 'אָכַל', lemmaTranslit: 'ʾāḵal', gloss: 'and ate', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3fs' }, strongs: 'H398', position: 14 },
  { id: 'Gen.3.6.15', language: 'hebrew', text: 'וַתִּתֵּ֧ן', transliteration: 'wattittēn', lemma: 'נָתַן', lemmaTranslit: 'nāṯan', gloss: 'and she gave', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3fs' }, strongs: 'H5414', position: 15 },
  { id: 'Gen.3.6.16', language: 'hebrew', text: 'גַּם־לְאִישָׁ֛הּ', transliteration: 'gam-ləʾîšāh', lemma: 'אִישׁ', lemmaTranslit: 'ʾîš', gloss: 'also to her husband', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H376', position: 16 },
  { id: 'Gen.3.6.17', language: 'hebrew', text: 'עִמָּ֖הּ', transliteration: 'ʿimmāh', lemma: 'עִם', lemmaTranslit: 'ʿim', gloss: 'with her', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H5973', position: 17 },
  { id: 'Gen.3.6.18', language: 'hebrew', text: 'וַיֹּאכַֽל', transliteration: 'wayyōʾḵal', lemma: 'אָכַל', lemmaTranslit: 'ʾāḵal', gloss: 'and he ate', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H398', position: 18 },
];

export const genesis3_6_translation: VerseTranslation = {
  verseRef: 'Gen.3.6',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And saw the woman that good the tree for food and that a delight it to the eyes and desirable the tree to make wise, and she took of its fruit and ate; and she gave also to her husband with her and he ate.', spans: [{ id: 'Gen.3.6.en.lit.0', text: 'And saw the woman that good the tree...', position: 0, sourceTokenIds: ['Gen.3.6.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'So when the woman saw that the tree was good for food, and that it was a delight to the eyes, and that the tree was to be desired to make one wise, she took of its fruit and ate, and she also gave some to her husband who was with her, and he ate.', spans: [{ id: 'Gen.3.6.en.idi.0', text: 'So when the woman saw that the tree was good for food...', position: 0, sourceTokenIds: ['Gen.3.6.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis3_6_notes: StudyNote[] = [
  { id: 'Gen.3.6.note.1', verseRef: 'Gen.3.6', sourceTokenIds: ['Gen.3.6.3', 'Gen.3.6.7', 'Gen.3.6.9'], category: 'interpretive', title: 'Three Appeals', content: 'The threefold attraction parallels 1 John 2:16: "good for food" (lust of the flesh), "delight to the eyes" (lust of the eyes), "desired to make wise" (pride of life).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.3.6.note.2', verseRef: 'Gen.3.6', sourceTokenIds: ['Gen.3.6.17'], category: 'interpretive', title: 'With Her', content: '"With her" (ʿimmāh) suggests Adam was present during the temptation, not absent. His passive silence is culpable.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 3:7 - Then the eyes of both were opened
export const genesis3_7_tokens: SourceToken[] = [
  { id: 'Gen.3.7.0', language: 'hebrew', text: 'וַתִּפָּקַ֙חְנָה֙', transliteration: 'wattippāqaḥnāh', lemma: 'פָּקַח', lemmaTranslit: 'pāqaḥ', gloss: 'And were opened', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'plural', tense: 'imperfect', stem: 'niphal', rawCode: 'Vnw3fp' }, strongs: 'H6491', position: 0 },
  { id: 'Gen.3.7.1', language: 'hebrew', text: 'עֵינֵ֣י', transliteration: 'ʿênê', lemma: 'עַיִן', lemmaTranslit: 'ʿayin', gloss: 'the eyes of', morphology: { pos: 'noun', gender: 'common', number: 'dual', state: 'construct', rawCode: 'Ncbdc' }, strongs: 'H5869', position: 1 },
  { id: 'Gen.3.7.2', language: 'hebrew', text: 'שְׁנֵיהֶ֔ם', transliteration: 'šənêhem', lemma: 'שְׁנַיִם', lemmaTranslit: 'šənayim', gloss: 'both of them', morphology: { pos: 'adjective', gender: 'masculine', number: 'dual', rawCode: 'Acmdc' }, strongs: 'H8147', position: 2 },
  { id: 'Gen.3.7.3', language: 'hebrew', text: 'וַיֵּ֣דְע֔וּ', transliteration: 'wayyēḏəʿû', lemma: 'יָדַע', lemmaTranslit: 'yāḏaʿ', gloss: 'and they knew', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H3045', position: 3 },
  { id: 'Gen.3.7.4', language: 'hebrew', text: 'כִּ֥י', transliteration: 'kî', lemma: 'כִּי', lemmaTranslit: 'kî', gloss: 'that', morphology: { pos: 'conjunction', rawCode: 'Cc' }, strongs: 'H3588', position: 4 },
  { id: 'Gen.3.7.5', language: 'hebrew', text: 'עֵֽירֻמִּ֖ם', transliteration: 'ʿêrummim', lemma: 'עֵירֹם', lemmaTranslit: 'ʿêrōm', gloss: 'naked', morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Aampa' }, strongs: 'H5903', position: 5 },
  { id: 'Gen.3.7.6', language: 'hebrew', text: 'הֵ֑ם', transliteration: 'hēm', lemma: 'הֵם', lemmaTranslit: 'hēm', gloss: 'they', morphology: { pos: 'pronoun', person: '3', gender: 'masculine', number: 'plural', rawCode: 'Pp3mp' }, strongs: 'H1992', position: 6 },
  { id: 'Gen.3.7.7', language: 'hebrew', text: 'וַֽיִּתְפְּרוּ֙', transliteration: 'wayyiṯpərû', lemma: 'תָּפַר', lemmaTranslit: 'tāp̄ar', gloss: 'and they sewed', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H8609', position: 7 },
  { id: 'Gen.3.7.8', language: 'hebrew', text: 'עֲלֵ֣ה', transliteration: 'ʿălēh', lemma: 'עָלֶה', lemmaTranslit: 'ʿāleh', gloss: 'leaves of', glossExtended: 'leaf, foliage', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H5929', position: 8 },
  { id: 'Gen.3.7.9', language: 'hebrew', text: 'תְאֵנָ֔ה', transliteration: 'ṯəʾēnāh', lemma: 'תְּאֵנָה', lemmaTranslit: 'təʾēnāh', gloss: 'fig tree', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8384', position: 9 },
  { id: 'Gen.3.7.10', language: 'hebrew', text: 'וַיַּעֲשׂ֥וּ', transliteration: 'wayyaʿăśû', lemma: 'עָשָׂה', lemmaTranslit: 'ʿāśāh', gloss: 'and made', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H6213', position: 10 },
  { id: 'Gen.3.7.11', language: 'hebrew', text: 'לָהֶ֖ם', transliteration: 'lāhem', lemma: 'לְ', lemmaTranslit: 'lə', gloss: 'for themselves', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H9005', position: 11 },
  { id: 'Gen.3.7.12', language: 'hebrew', text: 'חֲגֹרֹֽת', transliteration: 'ḥăḡōrōṯ', lemma: 'חֲגוֹרָה', lemmaTranslit: 'ḥăḡôrāh', gloss: 'loincloths', glossExtended: 'loincloth, belt, girdle', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Ncfpa' }, strongs: 'H2290', position: 12 },
];

export const genesis3_7_translation: VerseTranslation = {
  verseRef: 'Gen.3.7',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And were opened the eyes of both of them and they knew that naked they; and they sewed leaves of fig tree and made for themselves loincloths.', spans: [{ id: 'Gen.3.7.en.lit.0', text: 'And were opened the eyes of both of them...', position: 0, sourceTokenIds: ['Gen.3.7.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Then the eyes of both were opened, and they knew that they were naked. And they sewed fig leaves together and made themselves loincloths.', spans: [{ id: 'Gen.3.7.en.idi.0', text: 'Then the eyes of both were opened...', position: 0, sourceTokenIds: ['Gen.3.7.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis3_7_notes: StudyNote[] = [
  { id: 'Gen.3.7.note.1', verseRef: 'Gen.3.7', sourceTokenIds: ['Gen.3.7.0', 'Gen.3.7.1', 'Gen.3.7.5'], category: 'theological', title: 'Eyes Opened to Shame', content: 'Their eyes were "opened" as promised (3:5), but instead of god-like wisdom, they gained awareness of their nakedness and shame. Sin brings false promises.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.3.7.note.2', verseRef: 'Gen.3.7', sourceTokenIds: ['Gen.3.7.12'], category: 'theological', title: 'Human Covering', content: 'Their fig-leaf loincloths represent humanity\'s futile attempt to cover sin. Later God provides proper covering (3:21)—pointing to atonement.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Export verse structures
export const genesis3_1_verse = { ref: 'Gen.3.1', sourceTokens: genesis3_1_tokens, translation: genesis3_1_translation, notes: genesis3_1_notes };
export const genesis3_2_verse = { ref: 'Gen.3.2', sourceTokens: genesis3_2_tokens, translation: genesis3_2_translation, notes: genesis3_2_notes };
export const genesis3_3_verse = { ref: 'Gen.3.3', sourceTokens: genesis3_3_tokens, translation: genesis3_3_translation, notes: genesis3_3_notes };
export const genesis3_4_verse = { ref: 'Gen.3.4', sourceTokens: genesis3_4_tokens, translation: genesis3_4_translation, notes: genesis3_4_notes };
export const genesis3_5_verse = { ref: 'Gen.3.5', sourceTokens: genesis3_5_tokens, translation: genesis3_5_translation, notes: genesis3_5_notes };
export const genesis3_6_verse = { ref: 'Gen.3.6', sourceTokens: genesis3_6_tokens, translation: genesis3_6_translation, notes: genesis3_6_notes };
export const genesis3_7_verse = { ref: 'Gen.3.7', sourceTokens: genesis3_7_tokens, translation: genesis3_7_translation, notes: genesis3_7_notes };

// Combined export
export const genesis3_1_7_verses = [
  genesis3_1_verse,
  genesis3_2_verse,
  genesis3_3_verse,
  genesis3_4_verse,
  genesis3_5_verse,
  genesis3_6_verse,
  genesis3_7_verse,
];

export default genesis3_1_7_verses;
