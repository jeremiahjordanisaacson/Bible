/**
 * Genesis 10:21-32 - The Table of Nations: Descendants of Shem
 * Hebrew morphological data with study annotations
 */

import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

// Genesis 10:21
export const genesis10_21_tokens: SourceToken[] = [
  { id: 'Gen.10.21.0', language: 'hebrew', text: 'וּלְשֵׁ֥ם', transliteration: 'ûləšēm', lemma: 'שֵׁם', lemmaTranslit: 'šēm', gloss: 'And to Shem', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8035', position: 0 },
  { id: 'Gen.10.21.1', language: 'hebrew', text: 'יֻלַּ֖ד', transliteration: 'yullaḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'were born', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'pual', rawCode: 'VPp3ms' }, strongs: 'H3205', position: 1 },
  { id: 'Gen.10.21.2', language: 'hebrew', text: 'גַּם־ה֑וּא', transliteration: 'gam-hûʾ', lemma: 'גַּם', lemmaTranslit: 'gam', gloss: 'also', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H1571', position: 2 },
  { id: 'Gen.10.21.3', language: 'hebrew', text: 'אֲבִי֙', transliteration: 'ʾăḇî', lemma: 'אָב', lemmaTranslit: 'ʾāḇ', gloss: 'the father of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H1', position: 3 },
  { id: 'Gen.10.21.4', language: 'hebrew', text: 'כָּל־בְּנֵי־עֵ֔בֶר', transliteration: 'kāl-bənê-ʿēḇer', lemma: 'עֵבֶר', lemmaTranslit: 'ʿēḇer', gloss: 'all the sons of Eber', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5677', position: 4 },
  { id: 'Gen.10.21.5', language: 'hebrew', text: 'אֲחִ֖י', transliteration: 'ʾăḥî', lemma: 'אָח', lemmaTranslit: 'ʾāḥ', gloss: 'the brother of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H251', position: 5 },
  { id: 'Gen.10.21.6', language: 'hebrew', text: 'יֶ֥פֶת', transliteration: 'yep̄eṯ', lemma: 'יֶפֶת', lemmaTranslit: 'yep̄eṯ', gloss: 'Japheth', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3315', position: 6 },
  { id: 'Gen.10.21.7', language: 'hebrew', text: 'הַגָּדֽוֹל', transliteration: 'haggāḏôl', lemma: 'גָּדוֹל', lemmaTranslit: 'gāḏôl', gloss: 'the elder', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', rawCode: 'Ajmsa' }, strongs: 'H1419', position: 7 },
];

export const genesis10_21_translation: VerseTranslation = {
  verseRef: 'Gen.10.21',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And to Shem also children were born—he was the father of all the sons of Eber, the brother of Japheth the elder.', spans: [{ id: 'Gen.10.21.en.lit.0', text: 'And to Shem also children were born...', position: 0, sourceTokenIds: ['Gen.10.21.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Sons were also born to Shem, whose older brother was Japheth; Shem was the ancestor of all the sons of Eber.', spans: [{ id: 'Gen.10.21.en.idi.0', text: 'Sons were also born to Shem...', position: 0, sourceTokenIds: ['Gen.10.21.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis10_21_notes: StudyNote[] = [
  { id: 'Gen.10.21.note.1', verseRef: 'Gen.10.21', sourceTokenIds: ['Gen.10.21.4'], category: 'lexical', title: 'Sons of Eber', content: 'Eber (עֵבֶר) is the eponymous ancestor of the "Hebrews" (עִבְרִי). The name may mean "one who crosses over" (from ʿāḇar "to cross"). Shem\'s special distinction is being ancestor of the Hebrews—the line through which Abraham and Israel would come.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.10.21.note.2', verseRef: 'Gen.10.21', sourceTokenIds: ['Gen.10.21.6', 'Gen.10.21.7'], category: 'interpretive', title: 'Brother of Japheth the Elder', content: 'The Hebrew allows either "Shem, the elder brother of Japheth" or "brother of Japheth the elder." Birth order remains debated (cf. 9:24 where Ham is "youngest"). The narrative emphasis falls on Shem regardless of birth order.', confidence: 'medium', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 10:22
export const genesis10_22_tokens: SourceToken[] = [
  { id: 'Gen.10.22.0', language: 'hebrew', text: 'בְּנֵ֥י', transliteration: 'bənê', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'The sons of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H1121', position: 0 },
  { id: 'Gen.10.22.1', language: 'hebrew', text: 'שֵׁ֖ם', transliteration: 'šēm', lemma: 'שֵׁם', lemmaTranslit: 'šēm', gloss: 'Shem', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8035', position: 1 },
  { id: 'Gen.10.22.2', language: 'hebrew', text: 'עֵילָ֣ם', transliteration: 'ʿêlām', lemma: 'עֵילָם', lemmaTranslit: 'ʿêlām', gloss: 'Elam', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5867', position: 2 },
  { id: 'Gen.10.22.3', language: 'hebrew', text: 'וְאַשּׁ֑וּר', transliteration: 'wəʾaššûr', lemma: 'אַשּׁוּר', lemmaTranslit: 'ʾaššûr', gloss: 'and Asshur', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H804', position: 3 },
  { id: 'Gen.10.22.4', language: 'hebrew', text: 'וְאַרְפַּכְשַׁ֖ד', transliteration: 'wəʾarpakšaḏ', lemma: 'אַרְפַּכְשַׁד', lemmaTranslit: 'ʾarpakšaḏ', gloss: 'and Arpachshad', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H775', position: 4 },
  { id: 'Gen.10.22.5', language: 'hebrew', text: 'וְל֥וּד', transliteration: 'wəlûḏ', lemma: 'לוּד', lemmaTranslit: 'lûḏ', gloss: 'and Lud', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3865', position: 5 },
  { id: 'Gen.10.22.6', language: 'hebrew', text: 'וַאֲרָֽם', transliteration: 'waʾărām', lemma: 'אֲרָם', lemmaTranslit: 'ʾărām', gloss: 'and Aram', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H758', position: 6 },
];

export const genesis10_22_translation: VerseTranslation = {
  verseRef: 'Gen.10.22',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'The sons of Shem: Elam, Asshur, Arpachshad, Lud, and Aram.', spans: [{ id: 'Gen.10.22.en.lit.0', text: 'The sons of Shem...', position: 0, sourceTokenIds: ['Gen.10.22.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'The sons of Shem: Elam, Ashur, Arphaxad, Lud and Aram.', spans: [{ id: 'Gen.10.22.en.idi.0', text: 'The sons of Shem...', position: 0, sourceTokenIds: ['Gen.10.22.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis10_22_notes: StudyNote[] = [
  { id: 'Gen.10.22.note.1', verseRef: 'Gen.10.22', sourceTokenIds: ['Gen.10.22.2'], category: 'historical', title: 'Elam', content: 'Elam was a kingdom in southwestern Iran (capital: Susa). Though linguistically non-Semitic, it\'s listed with Shem\'s descendants, showing the Table reflects historical/geographical relationships as much as linguistic ones.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.10.22.note.2', verseRef: 'Gen.10.22', sourceTokenIds: ['Gen.10.22.3'], category: 'historical', title: 'Asshur', content: 'Asshur is both a person and the region of Assyria (named after its original capital city Ashur). Note that Asshur appears here as Shem\'s son, while 10:11 suggests Nimrod (Hamite) built Assyrian cities—reflecting complex historical realities.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.10.22.note.3', verseRef: 'Gen.10.22', sourceTokenIds: ['Gen.10.22.4'], category: 'theological', title: 'Arpachshad', content: 'Arpachshad is the key ancestor for Israel\'s genealogy. The line continues: Arpachshad → Shelah → Eber → Peleg → Reu → Serug → Nahor → Terah → Abraham. This is the messianic line traced in Luke 3.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.10.22.note.4', verseRef: 'Gen.10.22', sourceTokenIds: ['Gen.10.22.6'], category: 'historical', title: 'Aram', content: 'Aram is the ancestor of the Arameans (Syrians). Aramaic became the lingua franca of the Near East, eventually displacing Hebrew among Jews. Parts of Daniel and Ezra are written in Aramaic. Jesus likely spoke Aramaic.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 10:23
export const genesis10_23_tokens: SourceToken[] = [
  { id: 'Gen.10.23.0', language: 'hebrew', text: 'וּבְנֵ֖י', transliteration: 'ûḇənê', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'And the sons of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H1121', position: 0 },
  { id: 'Gen.10.23.1', language: 'hebrew', text: 'אֲרָ֑ם', transliteration: 'ʾărām', lemma: 'אֲרָם', lemmaTranslit: 'ʾărām', gloss: 'Aram', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H758', position: 1 },
  { id: 'Gen.10.23.2', language: 'hebrew', text: 'ע֥וּץ', transliteration: 'ʿûṣ', lemma: 'עוּץ', lemmaTranslit: 'ʿûṣ', gloss: 'Uz', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5780', position: 2 },
  { id: 'Gen.10.23.3', language: 'hebrew', text: 'וְח֖וּל', transliteration: 'wəḥûl', lemma: 'חוּל', lemmaTranslit: 'ḥûl', gloss: 'and Hul', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2343', position: 3 },
  { id: 'Gen.10.23.4', language: 'hebrew', text: 'וְגֶ֥תֶר', transliteration: 'wəḡeṯer', lemma: 'גֶּתֶר', lemmaTranslit: 'geṯer', gloss: 'and Gether', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H1666', position: 4 },
  { id: 'Gen.10.23.5', language: 'hebrew', text: 'וָמַֽשׁ', transliteration: 'wāmaš', lemma: 'מַשׁ', lemmaTranslit: 'maš', gloss: 'and Mash', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H4851', position: 5 },
];

export const genesis10_23_translation: VerseTranslation = {
  verseRef: 'Gen.10.23',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And the sons of Aram: Uz, Hul, Gether, and Mash.', spans: [{ id: 'Gen.10.23.en.lit.0', text: 'And the sons of Aram...', position: 0, sourceTokenIds: ['Gen.10.23.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'The sons of Aram: Uz, Hul, Gether and Meshek.', spans: [{ id: 'Gen.10.23.en.idi.0', text: 'The sons of Aram...', position: 0, sourceTokenIds: ['Gen.10.23.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis10_23_notes: StudyNote[] = [
  { id: 'Gen.10.23.note.1', verseRef: 'Gen.10.23', sourceTokenIds: ['Gen.10.23.2'], category: 'intertextual', title: 'Land of Uz', content: 'Uz is the homeland of Job (Job 1:1). The location is uncertain—possibly Edom, Syria, or northern Arabia. Lamentations 4:21 associates Uz with Edom. This connects the wisdom tradition to the Semitic/Aramean branch of Noah\'s family.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 10:24
export const genesis10_24_tokens: SourceToken[] = [
  { id: 'Gen.10.24.0', language: 'hebrew', text: 'וְאַרְפַּכְשַׁ֖ד', transliteration: 'wəʾarpakšaḏ', lemma: 'אַרְפַּכְשַׁד', lemmaTranslit: 'ʾarpakšaḏ', gloss: 'And Arpachshad', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H775', position: 0 },
  { id: 'Gen.10.24.1', language: 'hebrew', text: 'יָלַ֣ד', transliteration: 'yālaḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'fathered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H3205', position: 1 },
  { id: 'Gen.10.24.2', language: 'hebrew', text: 'אֶת־שָׁ֑לַח', transliteration: 'ʾeṯ-šālaḥ', lemma: 'שֶׁלַח', lemmaTranslit: 'šelaḥ', gloss: 'Shelah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H7974', position: 2 },
  { id: 'Gen.10.24.3', language: 'hebrew', text: 'וְשֶׁ֖לַח', transliteration: 'wəšelaḥ', lemma: 'שֶׁלַח', lemmaTranslit: 'šelaḥ', gloss: 'and Shelah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H7974', position: 3 },
  { id: 'Gen.10.24.4', language: 'hebrew', text: 'יָלַ֥ד', transliteration: 'yālaḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'fathered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H3205', position: 4 },
  { id: 'Gen.10.24.5', language: 'hebrew', text: 'אֶת־עֵֽבֶר', transliteration: 'ʾeṯ-ʿēḇer', lemma: 'עֵבֶר', lemmaTranslit: 'ʿēḇer', gloss: 'Eber', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5677', position: 5 },
];

export const genesis10_24_translation: VerseTranslation = {
  verseRef: 'Gen.10.24',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And Arpachshad fathered Shelah, and Shelah fathered Eber.', spans: [{ id: 'Gen.10.24.en.lit.0', text: 'And Arpachshad fathered Shelah...', position: 0, sourceTokenIds: ['Gen.10.24.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Arphaxad was the father of Shelah, and Shelah the father of Eber.', spans: [{ id: 'Gen.10.24.en.idi.0', text: 'Arphaxad was the father of Shelah...', position: 0, sourceTokenIds: ['Gen.10.24.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis10_24_notes: StudyNote[] = [
  { id: 'Gen.10.24.note.1', verseRef: 'Gen.10.24', sourceTokenIds: ['Gen.10.24.5'], category: 'theological', title: 'Eber and the Hebrews', content: 'Eber (עֵבֶר) is singled out in v. 21 as Shem\'s special descendant. From his name likely derives "Hebrew" (עִבְרִי). The genealogy focuses on this line because it leads to Abraham and the covenant people.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 10:25
export const genesis10_25_tokens: SourceToken[] = [
  { id: 'Gen.10.25.0', language: 'hebrew', text: 'וּלְעֵ֥בֶר', transliteration: 'ûləʿēḇer', lemma: 'עֵבֶר', lemmaTranslit: 'ʿēḇer', gloss: 'And to Eber', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5677', position: 0 },
  { id: 'Gen.10.25.1', language: 'hebrew', text: 'יֻלַּ֖ד', transliteration: 'yullaḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'were born', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'pual', rawCode: 'VPp3ms' }, strongs: 'H3205', position: 1 },
  { id: 'Gen.10.25.2', language: 'hebrew', text: 'שְׁנֵ֣י', transliteration: 'šənê', lemma: 'שְׁנַיִם', lemmaTranslit: 'šənayim', gloss: 'two', morphology: { pos: 'numeral', rawCode: 'Acmdc' }, strongs: 'H8147', position: 2 },
  { id: 'Gen.10.25.3', language: 'hebrew', text: 'בָנִ֑ים', transliteration: 'ḇānîm', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'sons', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H1121', position: 3 },
  { id: 'Gen.10.25.4', language: 'hebrew', text: 'שֵׁ֣ם', transliteration: 'šēm', lemma: 'שֵׁם', lemmaTranslit: 'šēm', gloss: 'the name of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H8034', position: 4 },
  { id: 'Gen.10.25.5', language: 'hebrew', text: 'הָאֶחָ֞ד', transliteration: 'hāʾeḥāḏ', lemma: 'אֶחָד', lemmaTranslit: 'ʾeḥāḏ', gloss: 'the one', morphology: { pos: 'numeral', rawCode: 'Acmsa' }, strongs: 'H259', position: 5 },
  { id: 'Gen.10.25.6', language: 'hebrew', text: 'פֶּ֗לֶג', transliteration: 'peleg', lemma: 'פֶּלֶג', lemmaTranslit: 'peleg', gloss: 'Peleg', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H6389', position: 6 },
  { id: 'Gen.10.25.7', language: 'hebrew', text: 'כִּ֤י', transliteration: 'kî', lemma: 'כִּי', lemmaTranslit: 'kî', gloss: 'for', morphology: { pos: 'conjunction', rawCode: 'Cc' }, strongs: 'H3588', position: 7 },
  { id: 'Gen.10.25.8', language: 'hebrew', text: 'בְיָמָיו֙', transliteration: 'ḇəyāmāyw', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'in his days', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H3117', position: 8 },
  { id: 'Gen.10.25.9', language: 'hebrew', text: 'נִפְלְגָ֣ה', transliteration: 'nip̄ləḡāh', lemma: 'פָּלַג', lemmaTranslit: 'pālaḡ', gloss: 'was divided', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'perfect', stem: 'niphal', rawCode: 'VNp3fs' }, strongs: 'H6385', position: 9 },
  { id: 'Gen.10.25.10', language: 'hebrew', text: 'הָאָ֔רֶץ', transliteration: 'hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 10 },
  { id: 'Gen.10.25.11', language: 'hebrew', text: 'וְשֵׁ֥ם', transliteration: 'wəšēm', lemma: 'שֵׁם', lemmaTranslit: 'šēm', gloss: 'and the name of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H8034', position: 11 },
  { id: 'Gen.10.25.12', language: 'hebrew', text: 'אָחִ֖יו', transliteration: 'ʾāḥîw', lemma: 'אָח', lemmaTranslit: 'ʾāḥ', gloss: 'his brother', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H251', position: 12 },
  { id: 'Gen.10.25.13', language: 'hebrew', text: 'יָקְטָֽן', transliteration: 'yāqṭān', lemma: 'יָקְטָן', lemmaTranslit: 'yāqṭān', gloss: 'Joktan', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3355', position: 13 },
];

export const genesis10_25_translation: VerseTranslation = {
  verseRef: 'Gen.10.25',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And to Eber were born two sons: the name of the one was Peleg, for in his days the earth was divided; and the name of his brother was Joktan.', spans: [{ id: 'Gen.10.25.en.lit.0', text: 'And to Eber were born two sons...', position: 0, sourceTokenIds: ['Gen.10.25.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Two sons were born to Eber: One was named Peleg, because in his time the earth was divided; his brother was named Joktan.', spans: [{ id: 'Gen.10.25.en.idi.0', text: 'Two sons were born to Eber...', position: 0, sourceTokenIds: ['Gen.10.25.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis10_25_notes: StudyNote[] = [
  { id: 'Gen.10.25.note.1', verseRef: 'Gen.10.25', sourceTokenIds: ['Gen.10.25.6', 'Gen.10.25.9'], category: 'interpretive', title: 'Earth Divided', content: 'The name Peleg (פֶּלֶג) means "division." Most scholars connect this to the division of languages at Babel (Gen 11). Some suggest geographical division (continents) or political/territorial division. The Babel connection fits the immediate context best.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.10.25.note.2', verseRef: 'Gen.10.25', sourceTokenIds: ['Gen.10.25.6'], category: 'theological', title: 'Peleg\'s Line', content: 'Peleg is the ancestor through whom Abraham descends (11:16-26). The genealogy traces through the "division" line—the chosen family amid the scattering of nations. From division comes election; from Babel comes the call of Abraham.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 10:26-29 (Joktan's descendants)
export const genesis10_26_tokens: SourceToken[] = [
  { id: 'Gen.10.26.0', language: 'hebrew', text: 'וְיָקְטָ֣ן', transliteration: 'wəyāqṭān', lemma: 'יָקְטָן', lemmaTranslit: 'yāqṭān', gloss: 'And Joktan', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3355', position: 0 },
  { id: 'Gen.10.26.1', language: 'hebrew', text: 'יָלַ֔ד', transliteration: 'yālaḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'fathered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H3205', position: 1 },
  { id: 'Gen.10.26.2', language: 'hebrew', text: 'אֶת־אַלְמוֹדָ֖ד', transliteration: 'ʾeṯ-ʾalmôḏāḏ', lemma: 'אַלְמוֹדָד', lemmaTranslit: 'ʾalmôḏāḏ', gloss: 'Almodad', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H486', position: 2 },
  { id: 'Gen.10.26.3', language: 'hebrew', text: 'וְאֶת־שָׁ֑לֶף', transliteration: 'wəʾeṯ-šālep̄', lemma: 'שֶׁלֶף', lemmaTranslit: 'šelep̄', gloss: 'and Sheleph', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8026', position: 3 },
  { id: 'Gen.10.26.4', language: 'hebrew', text: 'וְאֶת־חֲצַרְמָ֖וֶת', transliteration: 'wəʾeṯ-ḥăṣarmāweṯ', lemma: 'חֲצַרְמָוֶת', lemmaTranslit: 'ḥăṣarmāweṯ', gloss: 'and Hazarmaveth', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2700', position: 4 },
  { id: 'Gen.10.26.5', language: 'hebrew', text: 'וְאֶת־יָֽרַח', transliteration: 'wəʾeṯ-yāraḥ', lemma: 'יֶרַח', lemmaTranslit: 'yeraḥ', gloss: 'and Jerah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3392', position: 5 },
];

export const genesis10_26_translation: VerseTranslation = {
  verseRef: 'Gen.10.26',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And Joktan fathered Almodad, Sheleph, Hazarmaveth, and Jerah,', spans: [{ id: 'Gen.10.26.en.lit.0', text: 'And Joktan fathered Almodad...', position: 0, sourceTokenIds: ['Gen.10.26.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Joktan was the father of Almodad, Sheleph, Hazarmaveth, Jerah,', spans: [{ id: 'Gen.10.26.en.idi.0', text: 'Joktan was the father of Almodad...', position: 0, sourceTokenIds: ['Gen.10.26.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis10_26_notes: StudyNote[] = [
  { id: 'Gen.10.26.note.1', verseRef: 'Gen.10.26', sourceTokenIds: ['Gen.10.26.0'], category: 'historical', title: 'Joktan\'s Arabian Line', content: 'Joktan\'s 13 sons represent Arabian tribes, mostly in southern Arabia (modern Yemen). While Peleg\'s line leads to Abraham, Joktan\'s line represents Semitic peoples who did not participate in Israel\'s covenant history.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.10.26.note.2', verseRef: 'Gen.10.26', sourceTokenIds: ['Gen.10.26.4'], category: 'historical', title: 'Hazarmaveth', content: 'Hazarmaveth corresponds to Hadramaut, an ancient region in southern Arabia (modern eastern Yemen). The name means "court of death" in Hebrew. This region was known for frankincense production.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const genesis10_27_tokens: SourceToken[] = [
  { id: 'Gen.10.27.0', language: 'hebrew', text: 'וְאֶת־הֲדוֹרָ֥ם', transliteration: 'wəʾeṯ-hăḏôrām', lemma: 'הֲדוֹרָם', lemmaTranslit: 'hăḏôrām', gloss: 'and Hadoram', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H1913', position: 0 },
  { id: 'Gen.10.27.1', language: 'hebrew', text: 'וְאֶת־אוּזָ֖ל', transliteration: 'wəʾeṯ-ʾûzāl', lemma: 'אוּזָל', lemmaTranslit: 'ʾûzāl', gloss: 'and Uzal', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H187', position: 1 },
  { id: 'Gen.10.27.2', language: 'hebrew', text: 'וְאֶת־דִּקְלָֽה', transliteration: 'wəʾeṯ-diqlāh', lemma: 'דִּקְלָה', lemmaTranslit: 'diqlāh', gloss: 'and Diklah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H1853', position: 2 },
];

export const genesis10_27_translation: VerseTranslation = {
  verseRef: 'Gen.10.27',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'Hadoram, Uzal, and Diklah,', spans: [{ id: 'Gen.10.27.en.lit.0', text: 'Hadoram, Uzal, and Diklah...', position: 0, sourceTokenIds: ['Gen.10.27.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Hadoram, Uzal, Diklah,', spans: [{ id: 'Gen.10.27.en.idi.0', text: 'Hadoram, Uzal, Diklah...', position: 0, sourceTokenIds: ['Gen.10.27.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis10_27_notes: StudyNote[] = [];

export const genesis10_28_tokens: SourceToken[] = [
  { id: 'Gen.10.28.0', language: 'hebrew', text: 'וְאֶת־עוֹבָ֥ל', transliteration: 'wəʾeṯ-ʿôḇāl', lemma: 'עוֹבָל', lemmaTranslit: 'ʿôḇāl', gloss: 'and Obal', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5745', position: 0 },
  { id: 'Gen.10.28.1', language: 'hebrew', text: 'וְאֶת־אֲבִימָאֵ֖ל', transliteration: 'wəʾeṯ-ʾăḇîmāʾēl', lemma: 'אֲבִימָאֵל', lemmaTranslit: 'ʾăḇîmāʾēl', gloss: 'and Abimael', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H39', position: 1 },
  { id: 'Gen.10.28.2', language: 'hebrew', text: 'וְאֶת־שְׁבָֽא', transliteration: 'wəʾeṯ-šəḇāʾ', lemma: 'שְׁבָא', lemmaTranslit: 'šəḇāʾ', gloss: 'and Sheba', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H7614', position: 2 },
];

export const genesis10_28_translation: VerseTranslation = {
  verseRef: 'Gen.10.28',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'Obal, Abimael, and Sheba,', spans: [{ id: 'Gen.10.28.en.lit.0', text: 'Obal, Abimael, and Sheba...', position: 0, sourceTokenIds: ['Gen.10.28.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Obal, Abimael, Sheba,', spans: [{ id: 'Gen.10.28.en.idi.0', text: 'Obal, Abimael, Sheba...', position: 0, sourceTokenIds: ['Gen.10.28.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis10_28_notes: StudyNote[] = [
  { id: 'Gen.10.28.note.1', verseRef: 'Gen.10.28', sourceTokenIds: ['Gen.10.28.2'], category: 'historical', title: 'Sheba (Semitic)', content: 'This Sheba is Semitic (from Joktan), distinct from the Hamitic Sheba in 10:7. Both names point to the Sabaean kingdom of South Arabia. The overlap may indicate that Sabaea had mixed Semitic-Hamitic origins or territorial intersections.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const genesis10_29_tokens: SourceToken[] = [
  { id: 'Gen.10.29.0', language: 'hebrew', text: 'וְאֶת־אוֹפִ֥ר', transliteration: 'wəʾeṯ-ʾôp̄îr', lemma: 'אוֹפִיר', lemmaTranslit: 'ʾôp̄îr', gloss: 'and Ophir', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H211', position: 0 },
  { id: 'Gen.10.29.1', language: 'hebrew', text: 'וְאֶת־חֲוִילָ֖ה', transliteration: 'wəʾeṯ-ḥăwîlāh', lemma: 'חֲוִילָה', lemmaTranslit: 'ḥăwîlāh', gloss: 'and Havilah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2341', position: 1 },
  { id: 'Gen.10.29.2', language: 'hebrew', text: 'וְאֶת־יוֹבָ֑ב', transliteration: 'wəʾeṯ-yôḇāḇ', lemma: 'יוֹבָב', lemmaTranslit: 'yôḇāḇ', gloss: 'and Jobab', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3103', position: 2 },
  { id: 'Gen.10.29.3', language: 'hebrew', text: 'כָּל־אֵ֖לֶּה', transliteration: 'kāl-ʾēlleh', lemma: 'אֵלֶּה', lemmaTranslit: 'ʾēlleh', gloss: 'all these', morphology: { pos: 'pronoun', rawCode: 'Pdxcp' }, strongs: 'H428', position: 3 },
  { id: 'Gen.10.29.4', language: 'hebrew', text: 'בְּנֵ֥י', transliteration: 'bənê', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'the sons of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H1121', position: 4 },
  { id: 'Gen.10.29.5', language: 'hebrew', text: 'יָקְטָֽן', transliteration: 'yāqṭān', lemma: 'יָקְטָן', lemmaTranslit: 'yāqṭān', gloss: 'Joktan', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3355', position: 5 },
];

export const genesis10_29_translation: VerseTranslation = {
  verseRef: 'Gen.10.29',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'Ophir, Havilah, and Jobab; all these were the sons of Joktan.', spans: [{ id: 'Gen.10.29.en.lit.0', text: 'Ophir, Havilah, and Jobab...', position: 0, sourceTokenIds: ['Gen.10.29.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Ophir, Havilah and Jobab. All these were sons of Joktan.', spans: [{ id: 'Gen.10.29.en.idi.0', text: 'Ophir, Havilah and Jobab...', position: 0, sourceTokenIds: ['Gen.10.29.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis10_29_notes: StudyNote[] = [
  { id: 'Gen.10.29.note.1', verseRef: 'Gen.10.29', sourceTokenIds: ['Gen.10.29.0'], category: 'historical', title: 'Ophir', content: 'Ophir became legendary for its gold. Solomon\'s ships brought gold from Ophir (1 Kings 9:28, 10:11). Its location is debated: southern Arabia, East Africa (Somalia), or even India. "Gold of Ophir" became proverbial for finest gold (Isa 13:12).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.10.29.note.2', verseRef: 'Gen.10.29', sourceTokenIds: ['Gen.10.29.1'], category: 'geographical', title: 'Havilah (Semitic)', content: 'Like Sheba, Havilah appears in both Hamite (10:7) and Semite lists. The name means "sandy" and refers to a region known for gold (Gen 2:11). This likely represents overlapping tribal territories in Arabia.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 10:30-32
export const genesis10_30_tokens: SourceToken[] = [
  { id: 'Gen.10.30.0', language: 'hebrew', text: 'וַיְהִ֥י', transliteration: 'wayəhî', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'And was', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H1961', position: 0 },
  { id: 'Gen.10.30.1', language: 'hebrew', text: 'מוֹשָׁבָ֖ם', transliteration: 'môšāḇām', lemma: 'מוֹשָׁב', lemmaTranslit: 'môšāḇ', gloss: 'their dwelling', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H4186', position: 1 },
  { id: 'Gen.10.30.2', language: 'hebrew', text: 'מִמֵּשָׁ֑א', transliteration: 'mimmēšāʾ', lemma: 'מֵשָׁא', lemmaTranslit: 'mēšāʾ', gloss: 'from Mesha', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H4852', position: 2 },
  { id: 'Gen.10.30.3', language: 'hebrew', text: 'בֹּאֲכָ֥ה', transliteration: 'bōʾăḵāh', lemma: 'בּוֹא', lemmaTranslit: 'bôʾ', gloss: 'as you go', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'VqIc' }, strongs: 'H935', position: 3 },
  { id: 'Gen.10.30.4', language: 'hebrew', text: 'סְפָ֖רָה', transliteration: 'səp̄ārāh', lemma: 'סְפָר', lemmaTranslit: 'səp̄ār', gloss: 'toward Sephar', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5611', position: 4 },
  { id: 'Gen.10.30.5', language: 'hebrew', text: 'הַ֥ר', transliteration: 'har', lemma: 'הַר', lemmaTranslit: 'har', gloss: 'the hill country of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H2022', position: 5 },
  { id: 'Gen.10.30.6', language: 'hebrew', text: 'הַקֶּֽדֶם', transliteration: 'haqqeḏem', lemma: 'קֶדֶם', lemmaTranslit: 'qeḏem', gloss: 'the east', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H6924', position: 6 },
];

export const genesis10_30_translation: VerseTranslation = {
  verseRef: 'Gen.10.30',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And their dwelling was from Mesha, as you go toward Sephar, the hill country of the east.', spans: [{ id: 'Gen.10.30.en.lit.0', text: 'And their dwelling was from Mesha...', position: 0, sourceTokenIds: ['Gen.10.30.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'The region where they lived stretched from Mesha toward Sephar, in the eastern hill country.', spans: [{ id: 'Gen.10.30.en.idi.0', text: 'The region where they lived...', position: 0, sourceTokenIds: ['Gen.10.30.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis10_30_notes: StudyNote[] = [
  { id: 'Gen.10.30.note.1', verseRef: 'Gen.10.30', sourceTokenIds: ['Gen.10.30.5', 'Gen.10.30.6'], category: 'geographical', title: 'Eastern Hill Country', content: 'This describes the Joktanite territory in southern/eastern Arabia. The "hill country of the east" likely refers to the mountains of Oman or Yemen. Mesha and Sephar are uncertain locations, but the general region is Arabian.', confidence: 'medium', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const genesis10_31_tokens: SourceToken[] = [
  { id: 'Gen.10.31.0', language: 'hebrew', text: 'אֵ֣לֶּה', transliteration: 'ʾēlleh', lemma: 'אֵלֶּה', lemmaTranslit: 'ʾēlleh', gloss: 'These', morphology: { pos: 'pronoun', rawCode: 'Pdxcp' }, strongs: 'H428', position: 0 },
  { id: 'Gen.10.31.1', language: 'hebrew', text: 'בְנֵי־שֵׁ֔ם', transliteration: 'ḇənê-šēm', lemma: 'שֵׁם', lemmaTranslit: 'šēm', gloss: 'the sons of Shem', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8035', position: 1 },
  { id: 'Gen.10.31.2', language: 'hebrew', text: 'לְמִשְׁפְּחֹתָ֖ם', transliteration: 'ləmišpəḥōṯām', lemma: 'מִשְׁפָּחָה', lemmaTranslit: 'mišpāḥāh', gloss: 'according to their clans', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'construct', rawCode: 'Ncfpc' }, strongs: 'H4940', position: 2 },
  { id: 'Gen.10.31.3', language: 'hebrew', text: 'לִלְשֹׁנֹתָ֑ם', transliteration: 'lilšōnōṯām', lemma: 'לָשׁוֹן', lemmaTranslit: 'lāšôn', gloss: 'according to their languages', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'construct', rawCode: 'Ncfpc' }, strongs: 'H3956', position: 3 },
  { id: 'Gen.10.31.4', language: 'hebrew', text: 'בְּאַרְצֹתָ֖ם', transliteration: 'bəʾarṣōṯām', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'in their lands', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'construct', rawCode: 'Ncfpc' }, strongs: 'H776', position: 4 },
  { id: 'Gen.10.31.5', language: 'hebrew', text: 'לְגוֹיֵהֶֽם', transliteration: 'ləḡôyēhem', lemma: 'גּוֹי', lemmaTranslit: 'gôy', gloss: 'according to their nations', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H1471', position: 5 },
];

export const genesis10_31_translation: VerseTranslation = {
  verseRef: 'Gen.10.31',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'These are the sons of Shem, according to their clans, according to their languages, in their lands, according to their nations.', spans: [{ id: 'Gen.10.31.en.lit.0', text: 'These are the sons of Shem...', position: 0, sourceTokenIds: ['Gen.10.31.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'These are the sons of Shem by their clans and languages, in their territories and nations.', spans: [{ id: 'Gen.10.31.en.idi.0', text: 'These are the sons of Shem...', position: 0, sourceTokenIds: ['Gen.10.31.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis10_31_notes: StudyNote[] = [];

export const genesis10_32_tokens: SourceToken[] = [
  { id: 'Gen.10.32.0', language: 'hebrew', text: 'אֵ֣לֶּה', transliteration: 'ʾēlleh', lemma: 'אֵלֶּה', lemmaTranslit: 'ʾēlleh', gloss: 'These', morphology: { pos: 'pronoun', rawCode: 'Pdxcp' }, strongs: 'H428', position: 0 },
  { id: 'Gen.10.32.1', language: 'hebrew', text: 'מִשְׁפְּחֹ֧ת', transliteration: 'mišpəḥōṯ', lemma: 'מִשְׁפָּחָה', lemmaTranslit: 'mišpāḥāh', gloss: 'the clans of', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'construct', rawCode: 'Ncfpc' }, strongs: 'H4940', position: 1 },
  { id: 'Gen.10.32.2', language: 'hebrew', text: 'בְּנֵי־נֹ֛חַ', transliteration: 'bənê-nōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'the sons of Noah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 2 },
  { id: 'Gen.10.32.3', language: 'hebrew', text: 'לְתוֹלְדֹתָ֖ם', transliteration: 'ləṯôləḏōṯām', lemma: 'תּוֹלֵדוֹת', lemmaTranslit: 'tôlēḏôṯ', gloss: 'according to their generations', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'construct', rawCode: 'Ncfpc' }, strongs: 'H8435', position: 3 },
  { id: 'Gen.10.32.4', language: 'hebrew', text: 'בְּגוֹיֵהֶ֑ם', transliteration: 'bəḡôyēhem', lemma: 'גּוֹי', lemmaTranslit: 'gôy', gloss: 'in their nations', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H1471', position: 4 },
  { id: 'Gen.10.32.5', language: 'hebrew', text: 'וּמֵאֵ֜לֶּה', transliteration: 'ûmēʾēlleh', lemma: 'אֵלֶּה', lemmaTranslit: 'ʾēlleh', gloss: 'and from these', morphology: { pos: 'pronoun', rawCode: 'Pdxcp' }, strongs: 'H428', position: 5 },
  { id: 'Gen.10.32.6', language: 'hebrew', text: 'נִפְרְד֧וּ', transliteration: 'nip̄rəḏû', lemma: 'פָּרַד', lemmaTranslit: 'pāraḏ', gloss: 'spread out', morphology: { pos: 'verb', person: '3', gender: 'common', number: 'plural', tense: 'perfect', stem: 'niphal', rawCode: 'VNp3cp' }, strongs: 'H6504', position: 6 },
  { id: 'Gen.10.32.7', language: 'hebrew', text: 'הַגּוֹיִ֛ם', transliteration: 'haggôyim', lemma: 'גּוֹי', lemmaTranslit: 'gôy', gloss: 'the nations', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H1471', position: 7 },
  { id: 'Gen.10.32.8', language: 'hebrew', text: 'בָּאָ֖רֶץ', transliteration: 'bāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'on the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 8 },
  { id: 'Gen.10.32.9', language: 'hebrew', text: 'אַחַ֥ר', transliteration: 'ʾaḥar', lemma: 'אַחַר', lemmaTranslit: 'ʾaḥar', gloss: 'after', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H310', position: 9 },
  { id: 'Gen.10.32.10', language: 'hebrew', text: 'הַמַּבּֽוּל', transliteration: 'hammabbûl', lemma: 'מַבּוּל', lemmaTranslit: 'mabbûl', gloss: 'the flood', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3999', position: 10 },
];

export const genesis10_32_translation: VerseTranslation = {
  verseRef: 'Gen.10.32',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'These are the clans of the sons of Noah, according to their generations, in their nations; and from these the nations spread out on the earth after the flood.', spans: [{ id: 'Gen.10.32.en.lit.0', text: 'These are the clans of the sons of Noah...', position: 0, sourceTokenIds: ['Gen.10.32.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'These are the clans of Noah\'s sons, according to their lines of descent, within their nations. From these the nations spread out over the earth after the flood.', spans: [{ id: 'Gen.10.32.en.idi.0', text: 'These are the clans of Noah\'s sons...', position: 0, sourceTokenIds: ['Gen.10.32.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis10_32_notes: StudyNote[] = [
  { id: 'Gen.10.32.note.1', verseRef: 'Gen.10.32', sourceTokenIds: ['Gen.10.32.0', 'Gen.10.32.1', 'Gen.10.32.2'], category: 'theological', title: 'Unity of Humanity', content: 'The Table of Nations emphasizes that all peoples descend from one family. Despite linguistic, cultural, and territorial diversity, humanity shares a common ancestry in Noah. This provides the backdrop for God choosing Abraham—from all nations, one is chosen to bless all.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.10.32.note.2', verseRef: 'Gen.10.32', sourceTokenIds: ['Gen.10.32.6', 'Gen.10.32.7'], category: 'structural', title: 'Transition to Babel', content: 'This concluding verse sets up the Babel narrative (Gen 11). The nations "spread out" (niphradu)—but chapter 11 will explain how this happened: through divine intervention that confused languages and scattered humanity as judgment for their pride.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Export all verses
export const genesis10_21_32_verses = [
  { ref: 'Gen.10.21', sourceTokens: genesis10_21_tokens, translation: genesis10_21_translation, notes: genesis10_21_notes },
  { ref: 'Gen.10.22', sourceTokens: genesis10_22_tokens, translation: genesis10_22_translation, notes: genesis10_22_notes },
  { ref: 'Gen.10.23', sourceTokens: genesis10_23_tokens, translation: genesis10_23_translation, notes: genesis10_23_notes },
  { ref: 'Gen.10.24', sourceTokens: genesis10_24_tokens, translation: genesis10_24_translation, notes: genesis10_24_notes },
  { ref: 'Gen.10.25', sourceTokens: genesis10_25_tokens, translation: genesis10_25_translation, notes: genesis10_25_notes },
  { ref: 'Gen.10.26', sourceTokens: genesis10_26_tokens, translation: genesis10_26_translation, notes: genesis10_26_notes },
  { ref: 'Gen.10.27', sourceTokens: genesis10_27_tokens, translation: genesis10_27_translation, notes: genesis10_27_notes },
  { ref: 'Gen.10.28', sourceTokens: genesis10_28_tokens, translation: genesis10_28_translation, notes: genesis10_28_notes },
  { ref: 'Gen.10.29', sourceTokens: genesis10_29_tokens, translation: genesis10_29_translation, notes: genesis10_29_notes },
  { ref: 'Gen.10.30', sourceTokens: genesis10_30_tokens, translation: genesis10_30_translation, notes: genesis10_30_notes },
  { ref: 'Gen.10.31', sourceTokens: genesis10_31_tokens, translation: genesis10_31_translation, notes: genesis10_31_notes },
  { ref: 'Gen.10.32', sourceTokens: genesis10_32_tokens, translation: genesis10_32_translation, notes: genesis10_32_notes },
];
