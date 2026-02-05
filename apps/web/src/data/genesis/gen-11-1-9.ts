/**
 * Genesis 11:1-9 - The Tower of Babel
 * Hebrew morphological data with study annotations
 */

import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

// Genesis 11:1
export const genesis11_1_tokens: SourceToken[] = [
  { id: 'Gen.11.1.0', language: 'hebrew', text: 'וַיְהִ֥י', transliteration: 'wayəhî', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'And was', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H1961', position: 0 },
  { id: 'Gen.11.1.1', language: 'hebrew', text: 'כָל־הָאָ֖רֶץ', transliteration: 'ḵāl-hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'all the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 1 },
  { id: 'Gen.11.1.2', language: 'hebrew', text: 'שָׂפָ֣ה', transliteration: 'śāp̄āh', lemma: 'שָׂפָה', lemmaTranslit: 'śāp̄āh', gloss: 'language', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8193', position: 2 },
  { id: 'Gen.11.1.3', language: 'hebrew', text: 'אֶחָ֑ת', transliteration: 'ʾeḥāṯ', lemma: 'אֶחָד', lemmaTranslit: 'ʾeḥāḏ', gloss: 'one', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H259', position: 3 },
  { id: 'Gen.11.1.4', language: 'hebrew', text: 'וּדְבָרִ֖ים', transliteration: 'ûḏəḇārîm', lemma: 'דָּבָר', lemmaTranslit: 'dāḇār', gloss: 'and words', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H1697', position: 4 },
  { id: 'Gen.11.1.5', language: 'hebrew', text: 'אֲחָדִֽים', transliteration: 'ʾăḥāḏîm', lemma: 'אֶחָד', lemmaTranslit: 'ʾeḥāḏ', gloss: 'same', morphology: { pos: 'numeral', rawCode: 'Acmpa' }, strongs: 'H259', position: 5 },
];

export const genesis11_1_translation: VerseTranslation = {
  verseRef: 'Gen.11.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And all the earth was one language and same words.', spans: [{ id: 'Gen.11.1.en.lit.0', text: 'And all the earth was one language...', position: 0, sourceTokenIds: ['Gen.11.1.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Now the whole world had one language and a common speech.', spans: [{ id: 'Gen.11.1.en.idi.0', text: 'Now the whole world had one language...', position: 0, sourceTokenIds: ['Gen.11.1.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis11_1_notes: StudyNote[] = [
  { id: 'Gen.11.1.note.1', verseRef: 'Gen.11.1', sourceTokenIds: ['Gen.11.1.2', 'Gen.11.1.3'], category: 'lexical', title: 'One Language', content: 'Hebrew safah (שָׂפָה) literally means "lip," hence "language" by metonymy. The phrase "one lip and same words" emphasizes complete linguistic unity—not just the same language but identical vocabulary and speech patterns.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.11.1.note.2', verseRef: 'Gen.11.1', sourceTokenIds: ['Gen.11.1.1'], category: 'structural', title: 'Chronological Placement', content: 'This narrative precedes chapter 10 chronologically (which describes diverse languages). The arrangement is thematic: chapter 10 shows the result (scattered nations), chapter 11 explains the cause (Babel). This is a common Hebrew narrative technique.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 11:2
export const genesis11_2_tokens: SourceToken[] = [
  { id: 'Gen.11.2.0', language: 'hebrew', text: 'וַיְהִ֖י', transliteration: 'wayəhî', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'And it was', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H1961', position: 0 },
  { id: 'Gen.11.2.1', language: 'hebrew', text: 'בְּנָסְעָ֣ם', transliteration: 'bənāsʿām', lemma: 'נָסַע', lemmaTranslit: 'nāsaʿ', gloss: 'as they journeyed', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'VqIc' }, strongs: 'H5265', position: 1 },
  { id: 'Gen.11.2.2', language: 'hebrew', text: 'מִקֶּ֑דֶם', transliteration: 'miqqeḏem', lemma: 'קֶדֶם', lemmaTranslit: 'qeḏem', gloss: 'from the east', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H6924', position: 2 },
  { id: 'Gen.11.2.3', language: 'hebrew', text: 'וַֽיִּמְצְא֥וּ', transliteration: 'wayyimṣəʾû', lemma: 'מָצָא', lemmaTranslit: 'māṣāʾ', gloss: 'and they found', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H4672', position: 3 },
  { id: 'Gen.11.2.4', language: 'hebrew', text: 'בִקְעָ֛ה', transliteration: 'ḇiqʿāh', lemma: 'בִּקְעָה', lemmaTranslit: 'biqʿāh', gloss: 'a plain', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H1237', position: 4 },
  { id: 'Gen.11.2.5', language: 'hebrew', text: 'בְּאֶ֥רֶץ', transliteration: 'bəʾereṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'in the land of', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H776', position: 5 },
  { id: 'Gen.11.2.6', language: 'hebrew', text: 'שִׁנְעָ֖ר', transliteration: 'šinʿār', lemma: 'שִׁנְעָר', lemmaTranslit: 'šinʿār', gloss: 'Shinar', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8152', position: 6 },
  { id: 'Gen.11.2.7', language: 'hebrew', text: 'וַיֵּ֥שְׁבוּ', transliteration: 'wayyēšəḇû', lemma: 'יָשַׁב', lemmaTranslit: 'yāšaḇ', gloss: 'and they settled', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H3427', position: 7 },
  { id: 'Gen.11.2.8', language: 'hebrew', text: 'שָֽׁם', transliteration: 'šām', lemma: 'שָׁם', lemmaTranslit: 'šām', gloss: 'there', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H8033', position: 8 },
];

export const genesis11_2_translation: VerseTranslation = {
  verseRef: 'Gen.11.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And it was as they journeyed from the east, they found a plain in the land of Shinar, and they settled there.', spans: [{ id: 'Gen.11.2.en.lit.0', text: 'And it was as they journeyed from the east...', position: 0, sourceTokenIds: ['Gen.11.2.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'As people moved eastward, they found a plain in Shinar and settled there.', spans: [{ id: 'Gen.11.2.en.idi.0', text: 'As people moved eastward...', position: 0, sourceTokenIds: ['Gen.11.2.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis11_2_notes: StudyNote[] = [
  { id: 'Gen.11.2.note.1', verseRef: 'Gen.11.2', sourceTokenIds: ['Gen.11.2.2'], category: 'interpretive', title: 'From the East', content: 'Hebrew miqqedem can mean "from the east" or "eastward." If the ark landed in the mountains of Ararat (northeast), movement "from the east" to Shinar (Babylonia) would be southwestward. Some translations read "eastward" based on context.', confidence: 'medium', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.11.2.note.2', verseRef: 'Gen.11.2', sourceTokenIds: ['Gen.11.2.6'], category: 'geographical', title: 'Shinar', content: 'Shinar is Babylonia (southern Mesopotamia). This is where Nimrod\'s kingdom began (10:10). The location connects the Babel story to Mesopotamian civilization and its famous ziggurats—the likely inspiration behind the "tower."', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 11:3
export const genesis11_3_tokens: SourceToken[] = [
  { id: 'Gen.11.3.0', language: 'hebrew', text: 'וַיֹּאמְר֞וּ', transliteration: 'wayyōʾmərû', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'And they said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H559', position: 0 },
  { id: 'Gen.11.3.1', language: 'hebrew', text: 'אִ֣ישׁ', transliteration: 'ʾîš', lemma: 'אִישׁ', lemmaTranslit: 'ʾîš', gloss: 'each man', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H376', position: 1 },
  { id: 'Gen.11.3.2', language: 'hebrew', text: 'אֶל־רֵעֵ֗הוּ', transliteration: 'ʾel-rēʿēhû', lemma: 'רֵעַ', lemmaTranslit: 'rēaʿ', gloss: 'to his neighbor', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H7453', position: 2 },
  { id: 'Gen.11.3.3', language: 'hebrew', text: 'הָ֚בָה', transliteration: 'hāḇāh', lemma: 'הָבָה', lemmaTranslit: 'hāḇāh', gloss: 'Come', morphology: { pos: 'verb', rawCode: 'Vqv2ms' }, strongs: 'H3051', position: 3 },
  { id: 'Gen.11.3.4', language: 'hebrew', text: 'נִלְבְּנָ֣ה', transliteration: 'nilbənāh', lemma: 'לָבַן', lemmaTranslit: 'lāḇan', gloss: 'let us make', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'plural', tense: 'imperfect', mood: 'cohortative', stem: 'qal', rawCode: 'Vqc1cp' }, strongs: 'H3835', position: 4 },
  { id: 'Gen.11.3.5', language: 'hebrew', text: 'לְבֵנִ֔ים', transliteration: 'ləḇēnîm', lemma: 'לְבֵנָה', lemmaTranslit: 'ləḇēnāh', gloss: 'bricks', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Ncfpa' }, strongs: 'H3843', position: 5 },
  { id: 'Gen.11.3.6', language: 'hebrew', text: 'וְנִשְׂרְפָ֖ה', transliteration: 'wəniśrəp̄āh', lemma: 'שָׂרַף', lemmaTranslit: 'śārap̄', gloss: 'and let us burn', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'plural', tense: 'imperfect', mood: 'cohortative', stem: 'qal', rawCode: 'Vqc1cp' }, strongs: 'H8313', position: 6 },
  { id: 'Gen.11.3.7', language: 'hebrew', text: 'לִשְׂרֵפָ֑ה', transliteration: 'liśrēp̄āh', lemma: 'שְׂרֵפָה', lemmaTranslit: 'śərēp̄āh', gloss: 'thoroughly', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8316', position: 7 },
  { id: 'Gen.11.3.8', language: 'hebrew', text: 'וַתְּהִ֨י', transliteration: 'wattəhî', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'And was', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3fs' }, strongs: 'H1961', position: 8 },
  { id: 'Gen.11.3.9', language: 'hebrew', text: 'לָהֶ֤ם', transliteration: 'lāhem', lemma: 'לְ', lemmaTranslit: 'lə', gloss: 'to them', morphology: { pos: 'preposition', rawCode: 'RPs3mp' }, strongs: 'H', position: 9 },
  { id: 'Gen.11.3.10', language: 'hebrew', text: 'הַלְּבֵנָה֙', transliteration: 'halləḇēnāh', lemma: 'לְבֵנָה', lemmaTranslit: 'ləḇēnāh', gloss: 'the brick', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H3843', position: 10 },
  { id: 'Gen.11.3.11', language: 'hebrew', text: 'לְאָ֔בֶן', transliteration: 'ləʾāḇen', lemma: 'אֶבֶן', lemmaTranslit: 'ʾeḇen', gloss: 'for stone', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H68', position: 11 },
  { id: 'Gen.11.3.12', language: 'hebrew', text: 'וְהַ֣חֵמָ֔ר', transliteration: 'wəhaḥēmār', lemma: 'חֵמָר', lemmaTranslit: 'ḥēmār', gloss: 'and the bitumen', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H2564', position: 12 },
  { id: 'Gen.11.3.13', language: 'hebrew', text: 'הָיָ֥ה', transliteration: 'hāyāh', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'was', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H1961', position: 13 },
  { id: 'Gen.11.3.14', language: 'hebrew', text: 'לָהֶ֖ם', transliteration: 'lāhem', lemma: 'לְ', lemmaTranslit: 'lə', gloss: 'to them', morphology: { pos: 'preposition', rawCode: 'RPs3mp' }, strongs: 'H', position: 14 },
  { id: 'Gen.11.3.15', language: 'hebrew', text: 'לַחֹֽמֶר', transliteration: 'laḥōmer', lemma: 'חֹמֶר', lemmaTranslit: 'ḥōmer', gloss: 'for mortar', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H2563', position: 15 },
];

export const genesis11_3_translation: VerseTranslation = {
  verseRef: 'Gen.11.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And they said, each man to his neighbor, "Come, let us make bricks and burn them thoroughly." And the brick was to them for stone, and the bitumen was to them for mortar.', spans: [{ id: 'Gen.11.3.en.lit.0', text: 'And they said, each man to his neighbor...', position: 0, sourceTokenIds: ['Gen.11.3.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'They said to each other, "Come, let\'s make bricks and bake them thoroughly." They used brick instead of stone, and tar for mortar.', spans: [{ id: 'Gen.11.3.en.idi.0', text: 'They said to each other...', position: 0, sourceTokenIds: ['Gen.11.3.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis11_3_notes: StudyNote[] = [
  { id: 'Gen.11.3.note.1', verseRef: 'Gen.11.3', sourceTokenIds: ['Gen.11.3.3'], category: 'lexical', title: 'Come (Havah)', content: 'Hebrew havah (הָבָה) "come!" is an interjection urging action. It appears three times in the narrative: twice by the builders (vv. 3-4) and once by God (v. 7), creating an ironic parallel between human and divine deliberation.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.11.3.note.2', verseRef: 'Gen.11.3', sourceTokenIds: ['Gen.11.3.5', 'Gen.11.3.10', 'Gen.11.3.11'], category: 'cultural', title: 'Mesopotamian Building', content: 'Southern Mesopotamia lacked stone, so buildings used mud bricks. The detail about kiln-fired bricks and bitumen (asphalt) as mortar is archaeologically accurate for Babylonian construction. The narrator highlights this foreign technology.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 11:4
export const genesis11_4_tokens: SourceToken[] = [
  { id: 'Gen.11.4.0', language: 'hebrew', text: 'וַיֹּאמְר֞וּ', transliteration: 'wayyōʾmərû', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'And they said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H559', position: 0 },
  { id: 'Gen.11.4.1', language: 'hebrew', text: 'הָ֣בָה', transliteration: 'hāḇāh', lemma: 'הָבָה', lemmaTranslit: 'hāḇāh', gloss: 'Come', morphology: { pos: 'verb', rawCode: 'Vqv2ms' }, strongs: 'H3051', position: 1 },
  { id: 'Gen.11.4.2', language: 'hebrew', text: 'נִבְנֶה־לָּ֣נוּ', transliteration: 'niḇneh-lānû', lemma: 'בָּנָה', lemmaTranslit: 'bānāh', gloss: 'let us build for ourselves', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'plural', tense: 'imperfect', mood: 'cohortative', stem: 'qal', rawCode: 'Vqc1cp' }, strongs: 'H1129', position: 2 },
  { id: 'Gen.11.4.3', language: 'hebrew', text: 'עִ֗יר', transliteration: 'ʿîr', lemma: 'עִיר', lemmaTranslit: 'ʿîr', gloss: 'a city', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H5892', position: 3 },
  { id: 'Gen.11.4.4', language: 'hebrew', text: 'וּמִגְדָּ֛ל', transliteration: 'ûmiḡdāl', lemma: 'מִגְדָּל', lemmaTranslit: 'miḡdāl', gloss: 'and a tower', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H4026', position: 4 },
  { id: 'Gen.11.4.5', language: 'hebrew', text: 'וְרֹאשׁ֥וֹ', transliteration: 'wərōʾšô', lemma: 'רֹאשׁ', lemmaTranslit: 'rōʾš', gloss: 'and its top', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H7218', position: 5 },
  { id: 'Gen.11.4.6', language: 'hebrew', text: 'בַשָּׁמַ֖יִם', transliteration: 'ḇaššāmayim', lemma: 'שָׁמַיִם', lemmaTranslit: 'šāmayim', gloss: 'in the heavens', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H8064', position: 6 },
  { id: 'Gen.11.4.7', language: 'hebrew', text: 'וְנַֽעֲשֶׂה־לָּ֣נוּ', transliteration: 'wənaʿăśeh-lānû', lemma: 'עָשָׂה', lemmaTranslit: 'ʿāśāh', gloss: 'and let us make for ourselves', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'plural', tense: 'imperfect', mood: 'cohortative', stem: 'qal', rawCode: 'Vqc1cp' }, strongs: 'H6213', position: 7 },
  { id: 'Gen.11.4.8', language: 'hebrew', text: 'שֵׁ֑ם', transliteration: 'šēm', lemma: 'שֵׁם', lemmaTranslit: 'šēm', gloss: 'a name', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H8034', position: 8 },
  { id: 'Gen.11.4.9', language: 'hebrew', text: 'פֶּן־נָפ֖וּץ', transliteration: 'pen-nāp̄ûṣ', lemma: 'פּוּץ', lemmaTranslit: 'pûṣ', gloss: 'lest we be scattered', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi1cp' }, strongs: 'H6327', position: 9 },
  { id: 'Gen.11.4.10', language: 'hebrew', text: 'עַל־פְּנֵ֥י', transliteration: 'ʿal-pənê', lemma: 'פָּנִים', lemmaTranslit: 'pānîm', gloss: 'over the face of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H6440', position: 10 },
  { id: 'Gen.11.4.11', language: 'hebrew', text: 'כָל־הָאָֽרֶץ', transliteration: 'ḵāl-hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'all the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 11 },
];

export const genesis11_4_translation: VerseTranslation = {
  verseRef: 'Gen.11.4',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And they said, "Come, let us build for ourselves a city and a tower, and its top in the heavens, and let us make for ourselves a name, lest we be scattered over the face of all the earth."', spans: [{ id: 'Gen.11.4.en.lit.0', text: 'And they said, Come, let us build...', position: 0, sourceTokenIds: ['Gen.11.4.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Then they said, "Come, let us build ourselves a city, with a tower that reaches to the heavens, so that we may make a name for ourselves; otherwise we will be scattered over the face of the whole earth."', spans: [{ id: 'Gen.11.4.en.idi.0', text: 'Then they said, Come, let us build ourselves a city...', position: 0, sourceTokenIds: ['Gen.11.4.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis11_4_notes: StudyNote[] = [
  { id: 'Gen.11.4.note.1', verseRef: 'Gen.11.4', sourceTokenIds: ['Gen.11.4.4', 'Gen.11.4.5', 'Gen.11.4.6'], category: 'cultural', title: 'Tower with Top in Heavens', content: 'This describes a ziggurat—a Mesopotamian stepped temple-tower. The phrase "top in the heavens" was standard ancient Near Eastern hyperbole (cf. Deut 1:28). Ziggurats were meant to connect heaven and earth, providing gods a stairway to descend.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.11.4.note.2', verseRef: 'Gen.11.4', sourceTokenIds: ['Gen.11.4.7', 'Gen.11.4.8'], category: 'theological', title: 'Make a Name', content: 'The desire to "make a name" (shem) for themselves reflects prideful self-exaltation. This contrasts with God\'s promise to Abraham: "I will make your name great" (12:2). True greatness comes from God, not human achievement.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.11.4.note.3', verseRef: 'Gen.11.4', sourceTokenIds: ['Gen.11.4.9'], category: 'theological', title: 'Lest We Be Scattered', content: 'Their fear of scattering directly contradicts God\'s command to "fill the earth" (9:1, 7). They sought security through centralization and self-reliance rather than obedient dispersion. Ironically, their effort to prevent scattering caused it.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 11:5
export const genesis11_5_tokens: SourceToken[] = [
  { id: 'Gen.11.5.0', language: 'hebrew', text: 'וַיֵּ֣רֶד', transliteration: 'wayyēreḏ', lemma: 'יָרַד', lemmaTranslit: 'yāraḏ', gloss: 'And came down', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H3381', position: 0 },
  { id: 'Gen.11.5.1', language: 'hebrew', text: 'יְהוָ֔ה', transliteration: 'YHWH', lemma: 'יהוה', lemmaTranslit: 'YHWH', gloss: 'the LORD', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 1 },
  { id: 'Gen.11.5.2', language: 'hebrew', text: 'לִרְאֹ֥ת', transliteration: 'lirʾōṯ', lemma: 'רָאָה', lemmaTranslit: 'rāʾāh', gloss: 'to see', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'VqIc' }, strongs: 'H7200', position: 2 },
  { id: 'Gen.11.5.3', language: 'hebrew', text: 'אֶת־הָעִ֖יר', transliteration: 'ʾeṯ-hāʿîr', lemma: 'עִיר', lemmaTranslit: 'ʿîr', gloss: 'the city', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H5892', position: 3 },
  { id: 'Gen.11.5.4', language: 'hebrew', text: 'וְאֶת־הַמִּגְדָּ֑ל', transliteration: 'wəʾeṯ-hammiḡdāl', lemma: 'מִגְדָּל', lemmaTranslit: 'miḡdāl', gloss: 'and the tower', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H4026', position: 4 },
  { id: 'Gen.11.5.5', language: 'hebrew', text: 'אֲשֶׁ֥ר', transliteration: 'ʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'which', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 5 },
  { id: 'Gen.11.5.6', language: 'hebrew', text: 'בָּנ֖וּ', transliteration: 'bānû', lemma: 'בָּנָה', lemmaTranslit: 'bānāh', gloss: 'had built', morphology: { pos: 'verb', person: '3', gender: 'common', number: 'plural', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3cp' }, strongs: 'H1129', position: 6 },
  { id: 'Gen.11.5.7', language: 'hebrew', text: 'בְּנֵ֥י', transliteration: 'bənê', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'the sons of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H1121', position: 7 },
  { id: 'Gen.11.5.8', language: 'hebrew', text: 'הָאָדָֽם', transliteration: 'hāʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'man', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 8 },
];

export const genesis11_5_translation: VerseTranslation = {
  verseRef: 'Gen.11.5',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And the LORD came down to see the city and the tower which the sons of man had built.', spans: [{ id: 'Gen.11.5.en.lit.0', text: 'And the LORD came down to see...', position: 0, sourceTokenIds: ['Gen.11.5.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'But the LORD came down to see the city and the tower the people were building.', spans: [{ id: 'Gen.11.5.en.idi.0', text: 'But the LORD came down to see...', position: 0, sourceTokenIds: ['Gen.11.5.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis11_5_notes: StudyNote[] = [
  { id: 'Gen.11.5.note.1', verseRef: 'Gen.11.5', sourceTokenIds: ['Gen.11.5.0'], category: 'theological', title: 'The LORD Came Down', content: 'This anthropomorphic description is deeply ironic. The tower builders thought they could reach heaven, but YHWH had to "come down" to even see it! Their grand project was so insignificant from God\'s perspective that He had to descend to inspect it.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.11.5.note.2', verseRef: 'Gen.11.5', sourceTokenIds: ['Gen.11.5.7', 'Gen.11.5.8'], category: 'lexical', title: 'Sons of Man', content: 'Hebrew benê ha\'adam "sons of man/Adam" emphasizes their mortality and creaturely status. Despite pretensions to reach heaven, they remain mere humans—descendants of the dust-formed Adam. This contrasts with "sons of God" in 6:2.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 11:6
export const genesis11_6_tokens: SourceToken[] = [
  { id: 'Gen.11.6.0', language: 'hebrew', text: 'וַיֹּ֣אמֶר', transliteration: 'wayyōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'And said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H559', position: 0 },
  { id: 'Gen.11.6.1', language: 'hebrew', text: 'יְהוָ֗ה', transliteration: 'YHWH', lemma: 'יהוה', lemmaTranslit: 'YHWH', gloss: 'the LORD', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 1 },
  { id: 'Gen.11.6.2', language: 'hebrew', text: 'הֵ֣ן', transliteration: 'hēn', lemma: 'הֵן', lemmaTranslit: 'hēn', gloss: 'Behold', morphology: { pos: 'particle', rawCode: 'Tn' }, strongs: 'H2005', position: 2 },
  { id: 'Gen.11.6.3', language: 'hebrew', text: 'עַ֤ם', transliteration: 'ʿam', lemma: 'עַם', lemmaTranslit: 'ʿam', gloss: 'people', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H5971', position: 3 },
  { id: 'Gen.11.6.4', language: 'hebrew', text: 'אֶחָד֙', transliteration: 'ʾeḥāḏ', lemma: 'אֶחָד', lemmaTranslit: 'ʾeḥāḏ', gloss: 'one', morphology: { pos: 'numeral', rawCode: 'Acmsa' }, strongs: 'H259', position: 4 },
  { id: 'Gen.11.6.5', language: 'hebrew', text: 'וְשָׂפָ֤ה', transliteration: 'wəśāp̄āh', lemma: 'שָׂפָה', lemmaTranslit: 'śāp̄āh', gloss: 'and language', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8193', position: 5 },
  { id: 'Gen.11.6.6', language: 'hebrew', text: 'אַחַת֙', transliteration: 'ʾaḥaṯ', lemma: 'אֶחָד', lemmaTranslit: 'ʾeḥāḏ', gloss: 'one', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H259', position: 6 },
  { id: 'Gen.11.6.7', language: 'hebrew', text: 'לְכֻלָּ֔ם', transliteration: 'ləḵullām', lemma: 'כֹּל', lemmaTranslit: 'kōl', gloss: 'to all of them', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3605', position: 7 },
  { id: 'Gen.11.6.8', language: 'hebrew', text: 'וְזֶ֖ה', transliteration: 'wəzeh', lemma: 'זֶה', lemmaTranslit: 'zeh', gloss: 'and this', morphology: { pos: 'pronoun', rawCode: 'Pdxms' }, strongs: 'H2088', position: 8 },
  { id: 'Gen.11.6.9', language: 'hebrew', text: 'הַחִלָּ֣ם', transliteration: 'haḥillām', lemma: 'חָלַל', lemmaTranslit: 'ḥālal', gloss: 'they have begun', morphology: { pos: 'verb', mood: 'infinitive', stem: 'hiphil', rawCode: 'VhIc' }, strongs: 'H2490', position: 9 },
  { id: 'Gen.11.6.10', language: 'hebrew', text: 'לַעֲשׂ֑וֹת', transliteration: 'laʿăśôṯ', lemma: 'עָשָׂה', lemmaTranslit: 'ʿāśāh', gloss: 'to do', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'VqIc' }, strongs: 'H6213', position: 10 },
  { id: 'Gen.11.6.11', language: 'hebrew', text: 'וְעַתָּה֙', transliteration: 'wəʿattāh', lemma: 'עַתָּה', lemmaTranslit: 'ʿattāh', gloss: 'and now', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H6258', position: 11 },
  { id: 'Gen.11.6.12', language: 'hebrew', text: 'לֹֽא־יִבָּצֵ֣ר', transliteration: 'lōʾ-yibbāṣēr', lemma: 'בָּצַר', lemmaTranslit: 'bāṣar', gloss: 'not will be withheld', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'niphal', rawCode: 'VNi3ms' }, strongs: 'H1219', position: 12 },
  { id: 'Gen.11.6.13', language: 'hebrew', text: 'מֵהֶ֔ם', transliteration: 'mēhem', lemma: 'מִן', lemmaTranslit: 'min', gloss: 'from them', morphology: { pos: 'preposition', rawCode: 'RPs3mp' }, strongs: 'H4480', position: 13 },
  { id: 'Gen.11.6.14', language: 'hebrew', text: 'כֹּ֛ל', transliteration: 'kōl', lemma: 'כֹּל', lemmaTranslit: 'kōl', gloss: 'all', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H3605', position: 14 },
  { id: 'Gen.11.6.15', language: 'hebrew', text: 'אֲשֶׁ֥ר', transliteration: 'ʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'which', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 15 },
  { id: 'Gen.11.6.16', language: 'hebrew', text: 'יָזְמ֖וּ', transliteration: 'yāzəmû', lemma: 'זָמַם', lemmaTranslit: 'zāmam', gloss: 'they purpose', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi3mp' }, strongs: 'H2161', position: 16 },
  { id: 'Gen.11.6.17', language: 'hebrew', text: 'לַעֲשֽׂוֹת', transliteration: 'laʿăśôṯ', lemma: 'עָשָׂה', lemmaTranslit: 'ʿāśāh', gloss: 'to do', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'VqIc' }, strongs: 'H6213', position: 17 },
];

export const genesis11_6_translation: VerseTranslation = {
  verseRef: 'Gen.11.6',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And the LORD said, "Behold, one people and one language to all of them, and this is what they have begun to do; and now nothing will be withheld from them of all which they purpose to do."', spans: [{ id: 'Gen.11.6.en.lit.0', text: 'And the LORD said, Behold, one people...', position: 0, sourceTokenIds: ['Gen.11.6.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'The LORD said, "If as one people speaking the same language they have begun to do this, then nothing they plan to do will be impossible for them."', spans: [{ id: 'Gen.11.6.en.idi.0', text: 'The LORD said, If as one people speaking the same language...', position: 0, sourceTokenIds: ['Gen.11.6.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis11_6_notes: StudyNote[] = [
  { id: 'Gen.11.6.note.1', verseRef: 'Gen.11.6', sourceTokenIds: ['Gen.11.6.9', 'Gen.11.6.10'], category: 'theological', title: 'This Is What They Have Begun', content: 'God recognizes that this is just the beginning. Human unity, when directed against God\'s purposes, leads to corporate rebellion on an unprecedented scale. The flood dealt with individual wickedness; Babel addresses organized human autonomy.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.11.6.note.2', verseRef: 'Gen.11.6', sourceTokenIds: ['Gen.11.6.12', 'Gen.11.6.13'], category: 'interpretive', title: 'Nothing Withheld', content: 'This is not an admission of divine limitation but recognition that unified humanity can achieve remarkable (though misguided) things. God\'s intervention prevents worse evil, not limits His power. Cf. 3:22—human potential for harm must sometimes be checked.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 11:7
export const genesis11_7_tokens: SourceToken[] = [
  { id: 'Gen.11.7.0', language: 'hebrew', text: 'הָ֚בָה', transliteration: 'hāḇāh', lemma: 'הָבָה', lemmaTranslit: 'hāḇāh', gloss: 'Come', morphology: { pos: 'verb', rawCode: 'Vqv2ms' }, strongs: 'H3051', position: 0 },
  { id: 'Gen.11.7.1', language: 'hebrew', text: 'נֵֽרְדָ֔ה', transliteration: 'nērəḏāh', lemma: 'יָרַד', lemmaTranslit: 'yāraḏ', gloss: 'let us go down', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'plural', tense: 'imperfect', mood: 'cohortative', stem: 'qal', rawCode: 'Vqc1cp' }, strongs: 'H3381', position: 1 },
  { id: 'Gen.11.7.2', language: 'hebrew', text: 'וְנָבְלָ֥ה', transliteration: 'wənāḇəlāh', lemma: 'בָּלַל', lemmaTranslit: 'bālal', gloss: 'and let us confuse', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'plural', tense: 'imperfect', mood: 'cohortative', stem: 'qal', rawCode: 'Vqc1cp' }, strongs: 'H1101', position: 2 },
  { id: 'Gen.11.7.3', language: 'hebrew', text: 'שָׁ֖ם', transliteration: 'šām', lemma: 'שָׁם', lemmaTranslit: 'šām', gloss: 'there', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H8033', position: 3 },
  { id: 'Gen.11.7.4', language: 'hebrew', text: 'שְׂפָתָ֑ם', transliteration: 'śəp̄āṯām', lemma: 'שָׂפָה', lemmaTranslit: 'śāp̄āh', gloss: 'their language', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H8193', position: 4 },
  { id: 'Gen.11.7.5', language: 'hebrew', text: 'אֲשֶׁר֙', transliteration: 'ʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'so that', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 5 },
  { id: 'Gen.11.7.6', language: 'hebrew', text: 'לֹ֣א', transliteration: 'lōʾ', lemma: 'לֹא', lemmaTranslit: 'lōʾ', gloss: 'not', morphology: { pos: 'adverb', rawCode: 'Tn' }, strongs: 'H3808', position: 6 },
  { id: 'Gen.11.7.7', language: 'hebrew', text: 'יִשְׁמְע֔וּ', transliteration: 'yišməʿû', lemma: 'שָׁמַע', lemmaTranslit: 'šāmaʿ', gloss: 'they will understand', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi3mp' }, strongs: 'H8085', position: 7 },
  { id: 'Gen.11.7.8', language: 'hebrew', text: 'אִ֖ישׁ', transliteration: 'ʾîš', lemma: 'אִישׁ', lemmaTranslit: 'ʾîš', gloss: 'each man', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H376', position: 8 },
  { id: 'Gen.11.7.9', language: 'hebrew', text: 'שְׂפַ֥ת', transliteration: 'śəp̄aṯ', lemma: 'שָׂפָה', lemmaTranslit: 'śāp̄āh', gloss: 'the language of', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H8193', position: 9 },
  { id: 'Gen.11.7.10', language: 'hebrew', text: 'רֵעֵֽהוּ', transliteration: 'rēʿēhû', lemma: 'רֵעַ', lemmaTranslit: 'rēaʿ', gloss: 'his neighbor', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H7453', position: 10 },
];

export const genesis11_7_translation: VerseTranslation = {
  verseRef: 'Gen.11.7',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: '"Come, let us go down and confuse there their language, so that they will not understand each man the language of his neighbor."', spans: [{ id: 'Gen.11.7.en.lit.0', text: 'Come, let us go down and confuse...', position: 0, sourceTokenIds: ['Gen.11.7.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"Come, let us go down and confuse their language so they will not understand each other."', spans: [{ id: 'Gen.11.7.en.idi.0', text: 'Come, let us go down and confuse their language...', position: 0, sourceTokenIds: ['Gen.11.7.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis11_7_notes: StudyNote[] = [
  { id: 'Gen.11.7.note.1', verseRef: 'Gen.11.7', sourceTokenIds: ['Gen.11.7.0', 'Gen.11.7.1'], category: 'theological', title: 'Let Us', content: 'The plural "let us" (like Gen 1:26, 3:22) suggests divine deliberation. This has been interpreted as: (1) the Trinity, (2) divine council with angels, or (3) plural of majesty. The plurals create a literary parallel with the builders\' "let us" in vv. 3-4.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.11.7.note.2', verseRef: 'Gen.11.7', sourceTokenIds: ['Gen.11.7.2'], category: 'lexical', title: 'Confuse (Balal)', content: 'Hebrew balal (בָּלַל) means "to mix, confuse." This verb gives rise to the wordplay with "Babel" (בָּבֶל) in v. 9. Though Babel meant "gate of god" in Babylonian, Hebrew hears it as "confusion"—a pointed polemic against Babylonian pretensions.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 11:8
export const genesis11_8_tokens: SourceToken[] = [
  { id: 'Gen.11.8.0', language: 'hebrew', text: 'וַיָּ֨פֶץ', transliteration: 'wayyāp̄eṣ', lemma: 'פּוּץ', lemmaTranslit: 'pûṣ', gloss: 'And scattered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H6327', position: 0 },
  { id: 'Gen.11.8.1', language: 'hebrew', text: 'יְהוָ֥ה', transliteration: 'YHWH', lemma: 'יהוה', lemmaTranslit: 'YHWH', gloss: 'the LORD', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 1 },
  { id: 'Gen.11.8.2', language: 'hebrew', text: 'אֹתָ֛ם', transliteration: 'ʾōṯām', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: 'them', morphology: { pos: 'particle', rawCode: 'To' }, strongs: 'H853', position: 2 },
  { id: 'Gen.11.8.3', language: 'hebrew', text: 'מִשָּׁ֖ם', transliteration: 'miššām', lemma: 'שָׁם', lemmaTranslit: 'šām', gloss: 'from there', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H8033', position: 3 },
  { id: 'Gen.11.8.4', language: 'hebrew', text: 'עַל־פְּנֵ֣י', transliteration: 'ʿal-pənê', lemma: 'פָּנִים', lemmaTranslit: 'pānîm', gloss: 'over the face of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H6440', position: 4 },
  { id: 'Gen.11.8.5', language: 'hebrew', text: 'כָל־הָאָ֑רֶץ', transliteration: 'ḵāl-hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'all the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 5 },
  { id: 'Gen.11.8.6', language: 'hebrew', text: 'וַֽיַּחְדְּל֖וּ', transliteration: 'wayyaḥdəlû', lemma: 'חָדַל', lemmaTranslit: 'ḥāḏal', gloss: 'and they stopped', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H2308', position: 6 },
  { id: 'Gen.11.8.7', language: 'hebrew', text: 'לִבְנֹ֥ת', transliteration: 'liḇnōṯ', lemma: 'בָּנָה', lemmaTranslit: 'bānāh', gloss: 'building', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'VqIc' }, strongs: 'H1129', position: 7 },
  { id: 'Gen.11.8.8', language: 'hebrew', text: 'הָעִֽיר', transliteration: 'hāʿîr', lemma: 'עִיר', lemmaTranslit: 'ʿîr', gloss: 'the city', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H5892', position: 8 },
];

export const genesis11_8_translation: VerseTranslation = {
  verseRef: 'Gen.11.8',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And the LORD scattered them from there over the face of all the earth, and they stopped building the city.', spans: [{ id: 'Gen.11.8.en.lit.0', text: 'And the LORD scattered them from there...', position: 0, sourceTokenIds: ['Gen.11.8.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'So the LORD scattered them from there over all the earth, and they stopped building the city.', spans: [{ id: 'Gen.11.8.en.idi.0', text: 'So the LORD scattered them from there...', position: 0, sourceTokenIds: ['Gen.11.8.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis11_8_notes: StudyNote[] = [
  { id: 'Gen.11.8.note.1', verseRef: 'Gen.11.8', sourceTokenIds: ['Gen.11.8.0'], category: 'theological', title: 'Poetic Justice', content: 'The very thing they feared (v. 4 "lest we be scattered") is what God accomplishes. Their attempt to circumvent God\'s purpose through human achievement results in the fulfillment of God\'s original command to fill the earth (9:1).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 11:9
export const genesis11_9_tokens: SourceToken[] = [
  { id: 'Gen.11.9.0', language: 'hebrew', text: 'עַל־כֵּ֞ן', transliteration: 'ʿal-kēn', lemma: 'כֵּן', lemmaTranslit: 'kēn', gloss: 'Therefore', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H3651', position: 0 },
  { id: 'Gen.11.9.1', language: 'hebrew', text: 'קָרָ֤א', transliteration: 'qārāʾ', lemma: 'קָרָא', lemmaTranslit: 'qārāʾ', gloss: 'was called', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H7121', position: 1 },
  { id: 'Gen.11.9.2', language: 'hebrew', text: 'שְׁמָהּ֙', transliteration: 'šəmāh', lemma: 'שֵׁם', lemmaTranslit: 'šēm', gloss: 'its name', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H8034', position: 2 },
  { id: 'Gen.11.9.3', language: 'hebrew', text: 'בָּבֶ֔ל', transliteration: 'bāḇel', lemma: 'בָּבֶל', lemmaTranslit: 'bāḇel', gloss: 'Babel', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H894', position: 3 },
  { id: 'Gen.11.9.4', language: 'hebrew', text: 'כִּי־שָׁ֛ם', transliteration: 'kî-šām', lemma: 'שָׁם', lemmaTranslit: 'šām', gloss: 'for there', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H8033', position: 4 },
  { id: 'Gen.11.9.5', language: 'hebrew', text: 'בָּלַ֥ל', transliteration: 'bālal', lemma: 'בָּלַל', lemmaTranslit: 'bālal', gloss: 'confused', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H1101', position: 5 },
  { id: 'Gen.11.9.6', language: 'hebrew', text: 'יְהוָ֖ה', transliteration: 'YHWH', lemma: 'יהוה', lemmaTranslit: 'YHWH', gloss: 'the LORD', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 6 },
  { id: 'Gen.11.9.7', language: 'hebrew', text: 'שְׂפַ֣ת', transliteration: 'śəp̄aṯ', lemma: 'שָׂפָה', lemmaTranslit: 'śāp̄āh', gloss: 'the language of', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H8193', position: 7 },
  { id: 'Gen.11.9.8', language: 'hebrew', text: 'כָּל־הָאָ֑רֶץ', transliteration: 'kāl-hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'all the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 8 },
  { id: 'Gen.11.9.9', language: 'hebrew', text: 'וּמִשָּׁם֙', transliteration: 'ûmiššām', lemma: 'שָׁם', lemmaTranslit: 'šām', gloss: 'and from there', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H8033', position: 9 },
  { id: 'Gen.11.9.10', language: 'hebrew', text: 'הֱפִיצָ֣ם', transliteration: 'hĕp̄îṣām', lemma: 'פּוּץ', lemmaTranslit: 'pûṣ', gloss: 'scattered them', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'hiphil', rawCode: 'Vhp3ms' }, strongs: 'H6327', position: 10 },
  { id: 'Gen.11.9.11', language: 'hebrew', text: 'יְהוָ֔ה', transliteration: 'YHWH', lemma: 'יהוה', lemmaTranslit: 'YHWH', gloss: 'the LORD', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 11 },
  { id: 'Gen.11.9.12', language: 'hebrew', text: 'עַל־פְּנֵ֖י', transliteration: 'ʿal-pənê', lemma: 'פָּנִים', lemmaTranslit: 'pānîm', gloss: 'over the face of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H6440', position: 12 },
  { id: 'Gen.11.9.13', language: 'hebrew', text: 'כָּל־הָאָֽרֶץ', transliteration: 'kāl-hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'all the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 13 },
];

export const genesis11_9_translation: VerseTranslation = {
  verseRef: 'Gen.11.9',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'Therefore its name was called Babel, for there the LORD confused the language of all the earth, and from there the LORD scattered them over the face of all the earth.', spans: [{ id: 'Gen.11.9.en.lit.0', text: 'Therefore its name was called Babel...', position: 0, sourceTokenIds: ['Gen.11.9.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'That is why it was called Babel—because there the LORD confused the language of the whole world. From there the LORD scattered them over the face of the whole earth.', spans: [{ id: 'Gen.11.9.en.idi.0', text: 'That is why it was called Babel...', position: 0, sourceTokenIds: ['Gen.11.9.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis11_9_notes: StudyNote[] = [
  { id: 'Gen.11.9.note.1', verseRef: 'Gen.11.9', sourceTokenIds: ['Gen.11.9.3', 'Gen.11.9.5'], category: 'lexical', title: 'Babel/Balal Wordplay', content: 'The Hebrew narrator derives "Babel" (בָּבֶל) from balal (בָּלַל) "to confuse." Historically, Babylonians understood their city\'s name as "gate of god" (Akkadian bāb-ili). The Hebrew etymology is a pointed theological critique: what they called "gate of god" is actually "confusion."', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.11.9.note.2', verseRef: 'Gen.11.9', sourceTokenIds: ['Gen.11.9.3'], category: 'theological', title: 'Babel and Babylon', content: 'Throughout Scripture, Babylon symbolizes human pride and opposition to God. From this tower to the exile (2 Kings 25) to Revelation\'s "Babylon the Great" (Rev 17-18), Babel represents the city of man versus the city of God.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.11.9.note.3', verseRef: 'Gen.11.9', sourceTokenIds: ['Gen.11.9.0', 'Gen.11.9.1', 'Gen.11.9.2', 'Gen.11.9.3'], category: 'intertextual', title: 'Reversed at Pentecost', content: 'At Babel, God divided languages to scatter humanity. At Pentecost (Acts 2), the Spirit enabled people from all nations to hear the gospel in their own languages—a reversal of Babel. What divided humanity is overcome in the church, the new humanity in Christ.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Export all verses
export const genesis11_1_9_verses = [
  { ref: 'Gen.11.1', sourceTokens: genesis11_1_tokens, translation: genesis11_1_translation, notes: genesis11_1_notes },
  { ref: 'Gen.11.2', sourceTokens: genesis11_2_tokens, translation: genesis11_2_translation, notes: genesis11_2_notes },
  { ref: 'Gen.11.3', sourceTokens: genesis11_3_tokens, translation: genesis11_3_translation, notes: genesis11_3_notes },
  { ref: 'Gen.11.4', sourceTokens: genesis11_4_tokens, translation: genesis11_4_translation, notes: genesis11_4_notes },
  { ref: 'Gen.11.5', sourceTokens: genesis11_5_tokens, translation: genesis11_5_translation, notes: genesis11_5_notes },
  { ref: 'Gen.11.6', sourceTokens: genesis11_6_tokens, translation: genesis11_6_translation, notes: genesis11_6_notes },
  { ref: 'Gen.11.7', sourceTokens: genesis11_7_tokens, translation: genesis11_7_translation, notes: genesis11_7_notes },
  { ref: 'Gen.11.8', sourceTokens: genesis11_8_tokens, translation: genesis11_8_translation, notes: genesis11_8_notes },
  { ref: 'Gen.11.9', sourceTokens: genesis11_9_tokens, translation: genesis11_9_translation, notes: genesis11_9_notes },
];
