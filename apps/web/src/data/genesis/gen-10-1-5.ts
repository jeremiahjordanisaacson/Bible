/**
 * Genesis 10:1-5 - The Table of Nations: Descendants of Japheth
 * Hebrew morphological data with study annotations
 */

import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

// Genesis 10:1
export const genesis10_1_tokens: SourceToken[] = [
  { id: 'Gen.10.1.0', language: 'hebrew', text: 'וְאֵ֨לֶּה֙', transliteration: 'wəʾēlleh', lemma: 'אֵלֶּה', lemmaTranslit: 'ʾēlleh', gloss: 'And these', morphology: { pos: 'pronoun', rawCode: 'Pdxcp' }, strongs: 'H428', position: 0 },
  { id: 'Gen.10.1.1', language: 'hebrew', text: 'תּוֹלְדֹ֣ת', transliteration: 'tôləḏōṯ', lemma: 'תּוֹלֵדוֹת', lemmaTranslit: 'tôlēḏôṯ', gloss: 'the generations of', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'construct', rawCode: 'Ncfpc' }, strongs: 'H8435', position: 1 },
  { id: 'Gen.10.1.2', language: 'hebrew', text: 'בְּנֵי־נֹ֔חַ', transliteration: 'bənê-nōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'sons of Noah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 2 },
  { id: 'Gen.10.1.3', language: 'hebrew', text: 'שֵׁ֖ם', transliteration: 'šēm', lemma: 'שֵׁם', lemmaTranslit: 'šēm', gloss: 'Shem', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8035', position: 3 },
  { id: 'Gen.10.1.4', language: 'hebrew', text: 'חָ֣ם', transliteration: 'ḥām', lemma: 'חָם', lemmaTranslit: 'ḥām', gloss: 'Ham', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2526', position: 4 },
  { id: 'Gen.10.1.5', language: 'hebrew', text: 'וָיָ֑פֶת', transliteration: 'wāyāp̄eṯ', lemma: 'יֶפֶת', lemmaTranslit: 'yep̄eṯ', gloss: 'and Japheth', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3315', position: 5 },
  { id: 'Gen.10.1.6', language: 'hebrew', text: 'וַיִּוָּלְד֥וּ', transliteration: 'wayyiwwālḏû', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'and were born', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'niphal', rawCode: 'VNw3mp' }, strongs: 'H3205', position: 6 },
  { id: 'Gen.10.1.7', language: 'hebrew', text: 'לָהֶ֛ם', transliteration: 'lāhem', lemma: 'לְ', lemmaTranslit: 'lə', gloss: 'to them', morphology: { pos: 'preposition', rawCode: 'RPs3mp' }, strongs: 'H', position: 7 },
  { id: 'Gen.10.1.8', language: 'hebrew', text: 'בָּנִ֖ים', transliteration: 'bānîm', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'sons', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H1121', position: 8 },
  { id: 'Gen.10.1.9', language: 'hebrew', text: 'אַחַ֥ר', transliteration: 'ʾaḥar', lemma: 'אַחַר', lemmaTranslit: 'ʾaḥar', gloss: 'after', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H310', position: 9 },
  { id: 'Gen.10.1.10', language: 'hebrew', text: 'הַמַּבּֽוּל', transliteration: 'hammabbûl', lemma: 'מַבּוּל', lemmaTranslit: 'mabbûl', gloss: 'the flood', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3999', position: 10 },
];

export const genesis10_1_translation: VerseTranslation = {
  verseRef: 'Gen.10.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And these are the generations of the sons of Noah: Shem, Ham, and Japheth. And sons were born to them after the flood.', spans: [{ id: 'Gen.10.1.en.lit.0', text: 'And these are the generations...', position: 0, sourceTokenIds: ['Gen.10.1.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'This is the account of Shem, Ham and Japheth, Noah\'s sons, who themselves had sons after the flood.', spans: [{ id: 'Gen.10.1.en.idi.0', text: 'This is the account of Shem...', position: 0, sourceTokenIds: ['Gen.10.1.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis10_1_notes: StudyNote[] = [
  { id: 'Gen.10.1.note.1', verseRef: 'Gen.10.1', sourceTokenIds: ['Gen.10.1.1'], category: 'structural', title: 'Fourth Toledot', content: 'This is the fourth toledot (תּוֹלְדֹת) formula in Genesis (cf. 2:4, 5:1, 6:9). The "Table of Nations" traces how all humanity descends from Noah\'s three sons. Ancient readers would recognize their own peoples within this genealogy.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.10.1.note.2', verseRef: 'Gen.10.1', sourceTokenIds: ['Gen.10.1.3', 'Gen.10.1.4', 'Gen.10.1.5'], category: 'interpretive', title: 'Order of Sons', content: 'The chapter reverses the order, starting with Japheth (youngest?), then Ham, then Shem. This builds toward Shem as the climax—the line through which Abraham and ultimately Messiah would come.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 10:2
export const genesis10_2_tokens: SourceToken[] = [
  { id: 'Gen.10.2.0', language: 'hebrew', text: 'בְּנֵ֣י', transliteration: 'bənê', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'Sons of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H1121', position: 0 },
  { id: 'Gen.10.2.1', language: 'hebrew', text: 'יֶ֔פֶת', transliteration: 'yep̄eṯ', lemma: 'יֶפֶת', lemmaTranslit: 'yep̄eṯ', gloss: 'Japheth', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3315', position: 1 },
  { id: 'Gen.10.2.2', language: 'hebrew', text: 'גֹּ֣מֶר', transliteration: 'gōmer', lemma: 'גֹּמֶר', lemmaTranslit: 'gōmer', gloss: 'Gomer', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H1586', position: 2 },
  { id: 'Gen.10.2.3', language: 'hebrew', text: 'וּמָג֔וֹג', transliteration: 'ûmāḡôḡ', lemma: 'מָגוֹג', lemmaTranslit: 'māḡôḡ', gloss: 'and Magog', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H4031', position: 3 },
  { id: 'Gen.10.2.4', language: 'hebrew', text: 'וּמָדַ֖י', transliteration: 'ûmāḏay', lemma: 'מָדַי', lemmaTranslit: 'māḏay', gloss: 'and Madai', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H4074', position: 4 },
  { id: 'Gen.10.2.5', language: 'hebrew', text: 'וְיָוָ֣ן', transliteration: 'wəyāwān', lemma: 'יָוָן', lemmaTranslit: 'yāwān', gloss: 'and Javan', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3120', position: 5 },
  { id: 'Gen.10.2.6', language: 'hebrew', text: 'וְתֻבָ֑ל', transliteration: 'wəṯuḇāl', lemma: 'תֻּבַל', lemmaTranslit: 'tuḇal', gloss: 'and Tubal', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8422', position: 6 },
  { id: 'Gen.10.2.7', language: 'hebrew', text: 'וּמֶ֖שֶׁךְ', transliteration: 'ûmešeḵ', lemma: 'מֶשֶׁךְ', lemmaTranslit: 'mešeḵ', gloss: 'and Meshech', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H4902', position: 7 },
  { id: 'Gen.10.2.8', language: 'hebrew', text: 'וְתִירָֽס', transliteration: 'wəṯîrās', lemma: 'תִּירָס', lemmaTranslit: 'tîrās', gloss: 'and Tiras', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8494', position: 8 },
];

export const genesis10_2_translation: VerseTranslation = {
  verseRef: 'Gen.10.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'The sons of Japheth: Gomer, Magog, Madai, Javan, Tubal, Meshech, and Tiras.', spans: [{ id: 'Gen.10.2.en.lit.0', text: 'The sons of Japheth...', position: 0, sourceTokenIds: ['Gen.10.2.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'The sons of Japheth: Gomer, Magog, Madai, Javan, Tubal, Meshek and Tiras.', spans: [{ id: 'Gen.10.2.en.idi.0', text: 'The sons of Japheth...', position: 0, sourceTokenIds: ['Gen.10.2.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis10_2_notes: StudyNote[] = [
  { id: 'Gen.10.2.note.1', verseRef: 'Gen.10.2', sourceTokenIds: ['Gen.10.2.2'], category: 'historical', title: 'Gomer', content: 'Gomer is identified with the Cimmerians (Akkadian Gimirrai), who lived north of the Black Sea and later invaded Anatolia. They are the ancestors of some European peoples.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.10.2.note.2', verseRef: 'Gen.10.2', sourceTokenIds: ['Gen.10.2.3'], category: 'theological', title: 'Magog', content: 'Magog appears in Ezekiel 38-39 as a future enemy from the north. The name may relate to Lydia or regions of Asia Minor. In Revelation 20:8, Gog and Magog represent end-time enemies of God\'s people.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.10.2.note.3', verseRef: 'Gen.10.2', sourceTokenIds: ['Gen.10.2.4'], category: 'historical', title: 'Madai', content: 'Madai is the ancestor of the Medes (Old Persian Māda), who established an empire in northwest Iran. The Medes later merged with the Persians under Cyrus.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.10.2.note.4', verseRef: 'Gen.10.2', sourceTokenIds: ['Gen.10.2.5'], category: 'historical', title: 'Javan', content: 'Javan (Hebrew יָוָן) is the ancestor of the Greeks. The name corresponds to "Ionia" (Greek coastal region of Asia Minor). In later Hebrew, Yavan means "Greece" (Dan 8:21, 10:20).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 10:3
export const genesis10_3_tokens: SourceToken[] = [
  { id: 'Gen.10.3.0', language: 'hebrew', text: 'וּבְנֵ֖י', transliteration: 'ûḇənê', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'And the sons of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H1121', position: 0 },
  { id: 'Gen.10.3.1', language: 'hebrew', text: 'גֹּ֑מֶר', transliteration: 'gōmer', lemma: 'גֹּמֶר', lemmaTranslit: 'gōmer', gloss: 'Gomer', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H1586', position: 1 },
  { id: 'Gen.10.3.2', language: 'hebrew', text: 'אַשְׁכְּנַ֥ז', transliteration: 'ʾašəkənaz', lemma: 'אַשְׁכְּנַז', lemmaTranslit: 'ʾašəkənaz', gloss: 'Ashkenaz', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H813', position: 2 },
  { id: 'Gen.10.3.3', language: 'hebrew', text: 'וְרִיפַ֖ת', transliteration: 'wərîp̄aṯ', lemma: 'רִיפַת', lemmaTranslit: 'rîp̄aṯ', gloss: 'and Riphath', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H7384', position: 3 },
  { id: 'Gen.10.3.4', language: 'hebrew', text: 'וְתֹגַרְמָֽה', transliteration: 'wəṯōḡarmāh', lemma: 'תּוֹגַרְמָה', lemmaTranslit: 'tôḡarmāh', gloss: 'and Togarmah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8425', position: 4 },
];

export const genesis10_3_translation: VerseTranslation = {
  verseRef: 'Gen.10.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And the sons of Gomer: Ashkenaz, Riphath, and Togarmah.', spans: [{ id: 'Gen.10.3.en.lit.0', text: 'And the sons of Gomer...', position: 0, sourceTokenIds: ['Gen.10.3.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'The sons of Gomer: Ashkenaz, Riphath and Togarmah.', spans: [{ id: 'Gen.10.3.en.idi.0', text: 'The sons of Gomer...', position: 0, sourceTokenIds: ['Gen.10.3.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis10_3_notes: StudyNote[] = [
  { id: 'Gen.10.3.note.1', verseRef: 'Gen.10.3', sourceTokenIds: ['Gen.10.3.2'], category: 'historical', title: 'Ashkenaz', content: 'Ashkenaz is identified with the Scythians (Akkadian Aškuzai/Iškuzai). In medieval Jewish tradition, Germany was called Ashkenaz, hence "Ashkenazi Jews" denotes Jews of Central/Eastern European descent.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.10.3.note.2', verseRef: 'Gen.10.3', sourceTokenIds: ['Gen.10.3.4'], category: 'historical', title: 'Togarmah', content: 'Togarmah is likely ancient Armenia (Akkadian Tilgarimmu). Ezekiel 27:14 mentions Togarmah as trading horses and mules with Tyre. Ezekiel 38:6 associates them with Gomer as allies of Gog.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 10:4
export const genesis10_4_tokens: SourceToken[] = [
  { id: 'Gen.10.4.0', language: 'hebrew', text: 'וּבְנֵ֥י', transliteration: 'ûḇənê', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'And the sons of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H1121', position: 0 },
  { id: 'Gen.10.4.1', language: 'hebrew', text: 'יָוָ֖ן', transliteration: 'yāwān', lemma: 'יָוָן', lemmaTranslit: 'yāwān', gloss: 'Javan', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3120', position: 1 },
  { id: 'Gen.10.4.2', language: 'hebrew', text: 'אֱלִישָׁ֣ה', transliteration: 'ʾĕlîšāh', lemma: 'אֱלִישָׁה', lemmaTranslit: 'ʾĕlîšāh', gloss: 'Elishah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H473', position: 2 },
  { id: 'Gen.10.4.3', language: 'hebrew', text: 'וְתַרְשִׁ֑ישׁ', transliteration: 'wəṯaršîš', lemma: 'תַּרְשִׁישׁ', lemmaTranslit: 'taršîš', gloss: 'and Tarshish', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8659', position: 3 },
  { id: 'Gen.10.4.4', language: 'hebrew', text: 'כִּתִּ֖ים', transliteration: 'kittîm', lemma: 'כִּתִּי', lemmaTranslit: 'kittî', gloss: 'Kittim', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3794', position: 4 },
  { id: 'Gen.10.4.5', language: 'hebrew', text: 'וְדֹדָנִֽים', transliteration: 'wəḏōḏānîm', lemma: 'דּוֹדָנִים', lemmaTranslit: 'dôḏānîm', gloss: 'and Dodanim', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H1721', position: 5 },
];

export const genesis10_4_translation: VerseTranslation = {
  verseRef: 'Gen.10.4',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And the sons of Javan: Elishah, Tarshish, Kittim, and Dodanim.', spans: [{ id: 'Gen.10.4.en.lit.0', text: 'And the sons of Javan...', position: 0, sourceTokenIds: ['Gen.10.4.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'The sons of Javan: Elishah, Tarshish, the Kittites and the Rodanites.', spans: [{ id: 'Gen.10.4.en.idi.0', text: 'The sons of Javan...', position: 0, sourceTokenIds: ['Gen.10.4.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis10_4_notes: StudyNote[] = [
  { id: 'Gen.10.4.note.1', verseRef: 'Gen.10.4', sourceTokenIds: ['Gen.10.4.2'], category: 'historical', title: 'Elishah', content: 'Elishah is likely Alashiya (ancient Cyprus). Ezekiel 27:7 mentions "the coasts of Elishah" as a source of purple-dyed cloth, consistent with Cyprus\'s famous purple dye industry.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.10.4.note.2', verseRef: 'Gen.10.4', sourceTokenIds: ['Gen.10.4.3'], category: 'historical', title: 'Tarshish', content: 'Tarshish is a distant maritime location, possibly Tartessus in Spain or Sardinia. "Ships of Tarshish" became a term for large seagoing vessels. Jonah fled toward Tarshish—the opposite direction from Nineveh.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.10.4.note.3', verseRef: 'Gen.10.4', sourceTokenIds: ['Gen.10.4.4'], category: 'historical', title: 'Kittim', content: 'Kittim originally referred to Kition (modern Larnaca) in Cyprus. Later the term broadened to include all Mediterranean islands and coastlands (Num 24:24, Dan 11:30). The Dead Sea Scrolls use "Kittim" for Romans.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 10:5
export const genesis10_5_tokens: SourceToken[] = [
  { id: 'Gen.10.5.0', language: 'hebrew', text: 'מֵאֵ֠לֶּה', transliteration: 'mēʾēlleh', lemma: 'אֵלֶּה', lemmaTranslit: 'ʾēlleh', gloss: 'From these', morphology: { pos: 'pronoun', rawCode: 'Pdxcp' }, strongs: 'H428', position: 0 },
  { id: 'Gen.10.5.1', language: 'hebrew', text: 'נִפְרְד֞וּ', transliteration: 'nip̄rəḏû', lemma: 'פָּרַד', lemmaTranslit: 'pāraḏ', gloss: 'were separated', morphology: { pos: 'verb', person: '3', gender: 'common', number: 'plural', tense: 'perfect', stem: 'niphal', rawCode: 'VNp3cp' }, strongs: 'H6504', position: 1 },
  { id: 'Gen.10.5.2', language: 'hebrew', text: 'אִיֵּ֤י', transliteration: 'ʾiyyê', lemma: 'אִי', lemmaTranslit: 'ʾî', gloss: 'the coastlands of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H339', position: 2 },
  { id: 'Gen.10.5.3', language: 'hebrew', text: 'הַגּוֹיִם֙', transliteration: 'haggôyim', lemma: 'גּוֹי', lemmaTranslit: 'gôy', gloss: 'the nations', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H1471', position: 3 },
  { id: 'Gen.10.5.4', language: 'hebrew', text: 'בְּאַרְצֹתָ֔ם', transliteration: 'bəʾarṣōṯām', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'in their lands', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'construct', rawCode: 'Ncfpc' }, strongs: 'H776', position: 4 },
  { id: 'Gen.10.5.5', language: 'hebrew', text: 'אִ֖ישׁ', transliteration: 'ʾîš', lemma: 'אִישׁ', lemmaTranslit: 'ʾîš', gloss: 'each', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H376', position: 5 },
  { id: 'Gen.10.5.6', language: 'hebrew', text: 'לִלְשֹׁנ֑וֹ', transliteration: 'lilšōnô', lemma: 'לָשׁוֹן', lemmaTranslit: 'lāšôn', gloss: 'according to his language', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H3956', position: 6 },
  { id: 'Gen.10.5.7', language: 'hebrew', text: 'לְמִשְׁפְּחֹתָ֖ם', transliteration: 'ləmišpəḥōṯām', lemma: 'מִשְׁפָּחָה', lemmaTranslit: 'mišpāḥāh', gloss: 'according to their clans', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'construct', rawCode: 'Ncfpc' }, strongs: 'H4940', position: 7 },
  { id: 'Gen.10.5.8', language: 'hebrew', text: 'בְּגוֹיֵהֶֽם', transliteration: 'bəḡôyēhem', lemma: 'גּוֹי', lemmaTranslit: 'gôy', gloss: 'in their nations', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H1471', position: 8 },
];

export const genesis10_5_translation: VerseTranslation = {
  verseRef: 'Gen.10.5',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'From these the coastlands of the nations were separated in their lands, each according to his language, according to their clans, in their nations.', spans: [{ id: 'Gen.10.5.en.lit.0', text: 'From these the coastlands...', position: 0, sourceTokenIds: ['Gen.10.5.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'From these the maritime peoples spread out into their territories by their clans within their nations, each with its own language.', spans: [{ id: 'Gen.10.5.en.idi.0', text: 'From these the maritime peoples...', position: 0, sourceTokenIds: ['Gen.10.5.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis10_5_notes: StudyNote[] = [
  { id: 'Gen.10.5.note.1', verseRef: 'Gen.10.5', sourceTokenIds: ['Gen.10.5.2', 'Gen.10.5.3'], category: 'lexical', title: 'Coastlands of the Nations', content: 'Hebrew iyyim (אִיִּים) means "coastlands, islands, or maritime regions." The Japhethites spread across the Mediterranean coastlands and islands—essentially the peoples of Europe and Asia Minor.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.10.5.note.2', verseRef: 'Gen.10.5', sourceTokenIds: ['Gen.10.5.6'], category: 'theological', title: 'Languages', content: 'This anticipates Genesis 11 (Babel). The diversity of languages is presented as a natural development within families, though chapter 11 will explain how this occurred through divine intervention as judgment on human pride.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Export all verses
export const genesis10_1_5_verses = [
  { ref: 'Gen.10.1', sourceTokens: genesis10_1_tokens, translation: genesis10_1_translation, notes: genesis10_1_notes },
  { ref: 'Gen.10.2', sourceTokens: genesis10_2_tokens, translation: genesis10_2_translation, notes: genesis10_2_notes },
  { ref: 'Gen.10.3', sourceTokens: genesis10_3_tokens, translation: genesis10_3_translation, notes: genesis10_3_notes },
  { ref: 'Gen.10.4', sourceTokens: genesis10_4_tokens, translation: genesis10_4_translation, notes: genesis10_4_notes },
  { ref: 'Gen.10.5', sourceTokens: genesis10_5_tokens, translation: genesis10_5_translation, notes: genesis10_5_notes },
];
