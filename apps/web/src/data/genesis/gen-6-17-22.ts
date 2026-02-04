/**
 * Genesis 6:17-22 - Hebrew morphological data
 * Flood announcement, covenant promise, and Noah's obedience
 * Source: Open Hebrew Bible (Tanach.us) - Public Domain
 */

import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

// Genesis 6:17 - I will bring a flood of waters upon the earth
export const genesis6_17_tokens: SourceToken[] = [
  { id: 'Gen.6.17.0', language: 'hebrew', text: 'וַאֲנִ֗י', transliteration: 'waʾănî', lemma: 'אֲנִי', lemmaTranslit: 'ʾănî', gloss: 'And I', morphology: { pos: 'pronoun', person: '1', gender: 'common', number: 'singular', rawCode: 'Pp1cs' }, strongs: 'H589', position: 0 },
  { id: 'Gen.6.17.1', language: 'hebrew', text: 'הִנְנִ֨י', transliteration: 'hinnənî', lemma: 'הִנֵּה', lemmaTranslit: 'hinnēh', gloss: 'behold I', morphology: { pos: 'interjection', rawCode: 'Tm' }, strongs: 'H2009', position: 1 },
  { id: 'Gen.6.17.2', language: 'hebrew', text: 'מֵבִ֣יא', transliteration: 'mēḇîʾ', lemma: 'בּוֹא', lemmaTranslit: 'bôʾ', gloss: 'am bringing', morphology: { pos: 'verb', gender: 'masculine', number: 'singular', stem: 'hiphil', mood: 'participle', rawCode: 'Vhpms' }, strongs: 'H935', position: 2 },
  { id: 'Gen.6.17.3', language: 'hebrew', text: 'אֶת־הַמַּבּ֥וּל', transliteration: 'ʾeṯ-hammabbûl', lemma: 'מַבּוּל', lemmaTranslit: 'mabbûl', gloss: 'the flood', glossExtended: 'deluge, heavenly ocean', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3999', position: 3 },
  { id: 'Gen.6.17.4', language: 'hebrew', text: 'מַ֙יִם֙', transliteration: 'mayim', lemma: 'מַיִם', lemmaTranslit: 'mayim', gloss: 'waters', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H4325', position: 4 },
  { id: 'Gen.6.17.5', language: 'hebrew', text: 'עַל־הָאָ֔רֶץ', transliteration: 'ʿal-hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'upon the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 5 },
  { id: 'Gen.6.17.6', language: 'hebrew', text: 'לְשַׁחֵ֣ת', transliteration: 'ləšaḥēṯ', lemma: 'שָׁחַת', lemmaTranslit: 'šāḥaṯ', gloss: 'to destroy', morphology: { pos: 'verb', mood: 'infinitive', stem: 'piel', rawCode: 'Vpc' }, strongs: 'H7843', position: 6 },
  { id: 'Gen.6.17.7', language: 'hebrew', text: 'כָּל־בָּשָׂ֗ר', transliteration: 'kāl-bāśār', lemma: 'בָּשָׂר', lemmaTranslit: 'bāśār', gloss: 'all flesh', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H1320', position: 7 },
  { id: 'Gen.6.17.8', language: 'hebrew', text: 'אֲשֶׁר־בּוֹ֙', transliteration: 'ʾăšer-bô', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'in which', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 8 },
  { id: 'Gen.6.17.9', language: 'hebrew', text: 'ר֣וּחַ', transliteration: 'rûaḥ', lemma: 'רוּחַ', lemmaTranslit: 'rûaḥ', gloss: 'breath of', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H7307', position: 9 },
  { id: 'Gen.6.17.10', language: 'hebrew', text: 'חַיִּ֔ים', transliteration: 'ḥayyîm', lemma: 'חַי', lemmaTranslit: 'ḥay', gloss: 'life', morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ajmpa' }, strongs: 'H2416', position: 10 },
  { id: 'Gen.6.17.11', language: 'hebrew', text: 'מִתַּ֖חַת', transliteration: 'mittaḥaṯ', lemma: 'תַּחַת', lemmaTranslit: 'taḥaṯ', gloss: 'from under', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H8478', position: 11 },
  { id: 'Gen.6.17.12', language: 'hebrew', text: 'הַשָּׁמָ֑יִם', transliteration: 'haššāmāyim', lemma: 'שָׁמַיִם', lemmaTranslit: 'šāmayim', gloss: 'the heavens', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H8064', position: 12 },
  { id: 'Gen.6.17.13', language: 'hebrew', text: 'כֹּ֥ל', transliteration: 'kōl', lemma: 'כֹּל', lemmaTranslit: 'kōl', gloss: 'all', morphology: { pos: 'noun', rawCode: 'Ncmsa' }, strongs: 'H3605', position: 13 },
  { id: 'Gen.6.17.14', language: 'hebrew', text: 'אֲשֶׁר־בָּאָ֖רֶץ', transliteration: 'ʾăšer-bāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'that is on the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 14 },
  { id: 'Gen.6.17.15', language: 'hebrew', text: 'יִגְוָֽע', transliteration: 'yiḡwāʿ', lemma: 'גָּוַע', lemmaTranslit: 'gāwaʿ', gloss: 'shall perish', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi3ms' }, strongs: 'H1478', position: 15 },
];

export const genesis6_17_translation: VerseTranslation = {
  verseRef: 'Gen.6.17',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: '"And I, behold I am bringing the flood—waters upon the earth—to destroy all flesh in which is the breath of life from under the heavens. All that is on the earth shall perish."', spans: [{ id: 'Gen.6.17.en.lit.0', text: 'And I, behold I am bringing the flood...', position: 0, sourceTokenIds: ['Gen.6.17.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"For behold, I will bring a flood of waters upon the earth to destroy all flesh in which is the breath of life under heaven. Everything that is on the earth shall die."', spans: [{ id: 'Gen.6.17.en.idi.0', text: 'For behold, I will bring a flood of waters...', position: 0, sourceTokenIds: ['Gen.6.17.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis6_17_notes: StudyNote[] = [
  { id: 'Gen.6.17.note.1', verseRef: 'Gen.6.17', sourceTokenIds: ['Gen.6.17.3'], category: 'lexical', title: 'Mabbul (The Flood)', content: 'The word mabbûl (מַבּוּל) is used exclusively for Noah\'s flood. It may derive from a root meaning "to flow, pour" or relate to the Akkadian word for celestial waters. It suggests a cosmic cataclysm, not merely heavy rain.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.6.17.note.2', verseRef: 'Gen.6.17', sourceTokenIds: ['Gen.6.17.9', 'Gen.6.17.10'], category: 'cross-reference', title: 'Breath of Life', content: 'The phrase rûaḥ ḥayyîm (רוּחַ חַיִּים, "breath of life") echoes Genesis 2:7. The same breath God breathed into Adam will now be extinguished. Creation is being undone, returning to the watery chaos of 1:2.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 6:18 - I will establish My covenant with you
export const genesis6_18_tokens: SourceToken[] = [
  { id: 'Gen.6.18.0', language: 'hebrew', text: 'וַהֲקִמֹתִ֥י', transliteration: 'wahăqimōṯî', lemma: 'קוּם', lemmaTranslit: 'qûm', gloss: 'And I will establish', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'perfect', stem: 'hiphil', rawCode: 'Vhp1cs' }, strongs: 'H6965', position: 0 },
  { id: 'Gen.6.18.1', language: 'hebrew', text: 'אֶת־בְּרִיתִ֖י', transliteration: 'ʾeṯ-bərîṯî', lemma: 'בְּרִית', lemmaTranslit: 'bərîṯ', gloss: 'My covenant', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H1285', position: 1 },
  { id: 'Gen.6.18.2', language: 'hebrew', text: 'אִתָּ֑ךְ', transliteration: 'ʾittāḵ', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: 'with you', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H854', position: 2 },
  { id: 'Gen.6.18.3', language: 'hebrew', text: 'וּבָאתָ֙', transliteration: 'ûḇāʾṯā', lemma: 'בּוֹא', lemmaTranslit: 'bôʾ', gloss: 'and you shall enter', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp2ms' }, strongs: 'H935', position: 3 },
  { id: 'Gen.6.18.4', language: 'hebrew', text: 'אֶל־הַתֵּבָ֔ה', transliteration: 'ʾel-hattēḇāh', lemma: 'תֵּבָה', lemmaTranslit: 'tēḇāh', gloss: 'into the ark', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8392', position: 4 },
  { id: 'Gen.6.18.5', language: 'hebrew', text: 'אַתָּ֕ה', transliteration: 'ʾattāh', lemma: 'אַתָּה', lemmaTranslit: 'ʾattāh', gloss: 'you', morphology: { pos: 'pronoun', person: '2', gender: 'masculine', number: 'singular', rawCode: 'Pp2ms' }, strongs: 'H859', position: 5 },
  { id: 'Gen.6.18.6', language: 'hebrew', text: 'וּבָנֶ֛יךָ', transliteration: 'ûḇānêḵā', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'and your sons', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H1121', position: 6 },
  { id: 'Gen.6.18.7', language: 'hebrew', text: 'וְאִשְׁתְּךָ֥', transliteration: 'wəʾištəḵā', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'and your wife', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H802', position: 7 },
  { id: 'Gen.6.18.8', language: 'hebrew', text: 'וּנְשֵֽׁי־בָנֶ֖יךָ', transliteration: 'ûnəšê-ḇānêḵā', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'and the wives of your sons', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'construct', rawCode: 'Ncfpc' }, strongs: 'H802', position: 8 },
  { id: 'Gen.6.18.9', language: 'hebrew', text: 'אִתָּֽךְ', transliteration: 'ʾittāḵ', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: 'with you', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H854', position: 9 },
];

export const genesis6_18_translation: VerseTranslation = {
  verseRef: 'Gen.6.18',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: '"And I will establish My covenant with you, and you shall enter into the ark—you and your sons and your wife and the wives of your sons with you."', spans: [{ id: 'Gen.6.18.en.lit.0', text: 'And I will establish My covenant with you...', position: 0, sourceTokenIds: ['Gen.6.18.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"But I will establish my covenant with you, and you shall come into the ark, you, your sons, your wife, and your sons\' wives with you."', spans: [{ id: 'Gen.6.18.en.idi.0', text: 'But I will establish my covenant with you...', position: 0, sourceTokenIds: ['Gen.6.18.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis6_18_notes: StudyNote[] = [
  { id: 'Gen.6.18.note.1', verseRef: 'Gen.6.18', sourceTokenIds: ['Gen.6.18.1'], category: 'theological', title: 'First Mention of Covenant', content: 'This is the first occurrence of bərîṯ (בְּרִית, covenant) in Scripture. God initiates and establishes it—Noah receives it by grace. This covenant will be formally ratified after the flood (9:8-17) with the rainbow as its sign.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.6.18.note.2', verseRef: 'Gen.6.18', sourceTokenIds: ['Gen.6.18.0'], category: 'grammatical', title: 'Establish (heqim)', content: 'The hiphil of qûm (קוּם) means "to cause to stand, establish, confirm." God is the subject who establishes; Noah is the passive recipient. This language emphasizes divine initiative in covenant relationship.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.6.18.note.3', verseRef: 'Gen.6.18', sourceTokenIds: [], category: 'interpretive', title: 'Eight Souls Saved', content: 'Eight people entered the ark: Noah, his wife, three sons (Shem, Ham, Japheth), and their three wives. Peter later sees this as a type of baptism—salvation through water (1 Pet 3:20-21).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 6:19 - Two of every kind shall come to you
export const genesis6_19_tokens: SourceToken[] = [
  { id: 'Gen.6.19.0', language: 'hebrew', text: 'וּמִכָּל־הָ֠חַי', transliteration: 'ûmikkāl-hāḥay', lemma: 'חַי', lemmaTranslit: 'ḥay', gloss: 'And from all the living', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ajmsa' }, strongs: 'H2416', position: 0 },
  { id: 'Gen.6.19.1', language: 'hebrew', text: 'מִֽכָּל־בָּשָׂ֞ר', transliteration: 'mikkāl-bāśār', lemma: 'בָּשָׂר', lemmaTranslit: 'bāśār', gloss: 'from all flesh', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H1320', position: 1 },
  { id: 'Gen.6.19.2', language: 'hebrew', text: 'שְׁנַ֧יִם', transliteration: 'šənayim', lemma: 'שְׁנַיִם', lemmaTranslit: 'šənayim', gloss: 'two', morphology: { pos: 'numeral', gender: 'masculine', number: 'dual', rawCode: 'Acmda' }, strongs: 'H8147', position: 2 },
  { id: 'Gen.6.19.3', language: 'hebrew', text: 'מִכֹּ֛ל', transliteration: 'mikkōl', lemma: 'כֹּל', lemmaTranslit: 'kōl', gloss: 'of every kind', morphology: { pos: 'noun', rawCode: 'Ncmsa' }, strongs: 'H3605', position: 3 },
  { id: 'Gen.6.19.4', language: 'hebrew', text: 'תָּבִ֥יא', transliteration: 'tāḇîʾ', lemma: 'בּוֹא', lemmaTranslit: 'bôʾ', gloss: 'you shall bring', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhi2ms' }, strongs: 'H935', position: 4 },
  { id: 'Gen.6.19.5', language: 'hebrew', text: 'אֶל־הַתֵּבָ֖ה', transliteration: 'ʾel-hattēḇāh', lemma: 'תֵּבָה', lemmaTranslit: 'tēḇāh', gloss: 'into the ark', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8392', position: 5 },
  { id: 'Gen.6.19.6', language: 'hebrew', text: 'לְהַחֲיֹ֣ת', transliteration: 'ləhaḥăyōṯ', lemma: 'חָיָה', lemmaTranslit: 'ḥāyāh', gloss: 'to keep alive', morphology: { pos: 'verb', mood: 'infinitive', stem: 'hiphil', rawCode: 'Vhc' }, strongs: 'H2421', position: 6 },
  { id: 'Gen.6.19.7', language: 'hebrew', text: 'אִתָּ֑ךְ', transliteration: 'ʾittāḵ', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: 'with you', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H854', position: 7 },
  { id: 'Gen.6.19.8', language: 'hebrew', text: 'זָכָ֥ר', transliteration: 'zāḵār', lemma: 'זָכָר', lemmaTranslit: 'zāḵār', gloss: 'male', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H2145', position: 8 },
  { id: 'Gen.6.19.9', language: 'hebrew', text: 'וּנְקֵבָ֖ה', transliteration: 'ûnəqēḇāh', lemma: 'נְקֵבָה', lemmaTranslit: 'nəqēḇāh', gloss: 'and female', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H5347', position: 9 },
  { id: 'Gen.6.19.10', language: 'hebrew', text: 'יִֽהְיֽוּ', transliteration: 'yihyû', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'they shall be', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi3mp' }, strongs: 'H1961', position: 10 },
];

export const genesis6_19_translation: VerseTranslation = {
  verseRef: 'Gen.6.19',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: '"And from all the living, from all flesh, two of every kind you shall bring into the ark to keep alive with you. Male and female they shall be."', spans: [{ id: 'Gen.6.19.en.lit.0', text: 'And from all the living...', position: 0, sourceTokenIds: ['Gen.6.19.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"And of every living thing of all flesh, you shall bring two of every sort into the ark to keep them alive with you. They shall be male and female."', spans: [{ id: 'Gen.6.19.en.idi.0', text: 'And of every living thing of all flesh...', position: 0, sourceTokenIds: ['Gen.6.19.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis6_19_notes: StudyNote[] = [
  { id: 'Gen.6.19.note.1', verseRef: 'Gen.6.19', sourceTokenIds: ['Gen.6.19.8', 'Gen.6.19.9'], category: 'cross-reference', title: 'Male and Female', content: 'The language zāḵār ûnəqēḇāh (זָכָר וּנְקֵבָה) echoes Genesis 1:27. The ark preserves the created order—each kind with its male and female for future reproduction. This is a "new creation" moment.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.6.19.note.2', verseRef: 'Gen.6.19', sourceTokenIds: ['Gen.6.19.2'], category: 'interpretive', title: 'Two of Every Kind', content: 'Genesis 7:2-3 specifies seven pairs of clean animals and birds. The "two of every kind" here is the minimum for preservation; clean animals needed additional pairs for sacrifice and food (after 9:3).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 6:20 - Birds, animals, and creeping things
export const genesis6_20_tokens: SourceToken[] = [
  { id: 'Gen.6.20.0', language: 'hebrew', text: 'מֵהָע֣וֹף', transliteration: 'mēhāʿôp̄', lemma: 'עוֹף', lemmaTranslit: 'ʿôp̄', gloss: 'From the birds', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H5775', position: 0 },
  { id: 'Gen.6.20.1', language: 'hebrew', text: 'לְמִינֵ֗הוּ', transliteration: 'ləmînēhû', lemma: 'מִין', lemmaTranslit: 'mîn', gloss: 'according to its kind', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H4327', position: 1 },
  { id: 'Gen.6.20.2', language: 'hebrew', text: 'וּמִן־הַבְּהֵמָה֙', transliteration: 'ûmin-habbəhēmāh', lemma: 'בְּהֵמָה', lemmaTranslit: 'bəhēmāh', gloss: 'and from the animals', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H929', position: 2 },
  { id: 'Gen.6.20.3', language: 'hebrew', text: 'לְמִינָ֔הּ', transliteration: 'ləmînāh', lemma: 'מִין', lemmaTranslit: 'mîn', gloss: 'according to its kind', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H4327', position: 3 },
  { id: 'Gen.6.20.4', language: 'hebrew', text: 'מִכֹּ֛ל', transliteration: 'mikkōl', lemma: 'כֹּל', lemmaTranslit: 'kōl', gloss: 'from all', morphology: { pos: 'noun', rawCode: 'Ncmsa' }, strongs: 'H3605', position: 4 },
  { id: 'Gen.6.20.5', language: 'hebrew', text: 'רֶ֥מֶשׂ', transliteration: 'remeś', lemma: 'רֶמֶשׂ', lemmaTranslit: 'remeś', gloss: 'creeping things of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H7431', position: 5 },
  { id: 'Gen.6.20.6', language: 'hebrew', text: 'הָֽאֲדָמָ֖ה', transliteration: 'hāʾăḏāmāh', lemma: 'אֲדָמָה', lemmaTranslit: 'ʾăḏāmāh', gloss: 'the ground', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H127', position: 6 },
  { id: 'Gen.6.20.7', language: 'hebrew', text: 'לְמִינֵ֑הוּ', transliteration: 'ləmînēhû', lemma: 'מִין', lemmaTranslit: 'mîn', gloss: 'according to its kind', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H4327', position: 7 },
  { id: 'Gen.6.20.8', language: 'hebrew', text: 'שְׁנַ֧יִם', transliteration: 'šənayim', lemma: 'שְׁנַיִם', lemmaTranslit: 'šənayim', gloss: 'two', morphology: { pos: 'numeral', gender: 'masculine', number: 'dual', rawCode: 'Acmda' }, strongs: 'H8147', position: 8 },
  { id: 'Gen.6.20.9', language: 'hebrew', text: 'מִכֹּ֛ל', transliteration: 'mikkōl', lemma: 'כֹּל', lemmaTranslit: 'kōl', gloss: 'of every', morphology: { pos: 'noun', rawCode: 'Ncmsa' }, strongs: 'H3605', position: 9 },
  { id: 'Gen.6.20.10', language: 'hebrew', text: 'יָבֹ֥אוּ', transliteration: 'yāḇōʾû', lemma: 'בּוֹא', lemmaTranslit: 'bôʾ', gloss: 'shall come', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi3mp' }, strongs: 'H935', position: 10 },
  { id: 'Gen.6.20.11', language: 'hebrew', text: 'אֵלֶ֖יךָ', transliteration: 'ʾēlêḵā', lemma: 'אֵל', lemmaTranslit: 'ʾēl', gloss: 'to you', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H413', position: 11 },
  { id: 'Gen.6.20.12', language: 'hebrew', text: 'לְהַֽחֲיֽוֹת', transliteration: 'ləhaḥăyôṯ', lemma: 'חָיָה', lemmaTranslit: 'ḥāyāh', gloss: 'to keep alive', morphology: { pos: 'verb', mood: 'infinitive', stem: 'hiphil', rawCode: 'Vhc' }, strongs: 'H2421', position: 12 },
];

export const genesis6_20_translation: VerseTranslation = {
  verseRef: 'Gen.6.20',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: '"From the birds according to their kind, and from the animals according to their kind, from all the creeping things of the ground according to their kind—two of every kind shall come to you to keep alive."', spans: [{ id: 'Gen.6.20.en.lit.0', text: 'From the birds according to their kind...', position: 0, sourceTokenIds: ['Gen.6.20.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"Of the birds according to their kinds, and of the animals according to their kinds, of every creeping thing of the ground, according to its kind, two of every sort shall come in to you to keep them alive."', spans: [{ id: 'Gen.6.20.en.idi.0', text: 'Of the birds according to their kinds...', position: 0, sourceTokenIds: ['Gen.6.20.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis6_20_notes: StudyNote[] = [
  { id: 'Gen.6.20.note.1', verseRef: 'Gen.6.20', sourceTokenIds: ['Gen.6.20.1', 'Gen.6.20.3', 'Gen.6.20.7'], category: 'cross-reference', title: 'According to Their Kinds', content: 'The phrase ləmînēhû (לְמִינֵהוּ, "according to its kind") appears repeatedly, echoing the creation account (Gen 1:11-12, 21, 24-25). The ark preserves the original created distinctions.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.6.20.note.2', verseRef: 'Gen.6.20', sourceTokenIds: ['Gen.6.20.10'], category: 'theological', title: 'They Shall Come to You', content: 'The animals will "come" (yāḇōʾû) to Noah—divine providence ensures they arrive. Noah doesn\'t need to hunt or capture them. God orchestrates the preservation of His creation through supernatural means.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 6:21 - Take food for yourself and for them
export const genesis6_21_tokens: SourceToken[] = [
  { id: 'Gen.6.21.0', language: 'hebrew', text: 'וְאַתָּ֣ה', transliteration: 'wəʾattāh', lemma: 'אַתָּה', lemmaTranslit: 'ʾattāh', gloss: 'And you', morphology: { pos: 'pronoun', person: '2', gender: 'masculine', number: 'singular', rawCode: 'Pp2ms' }, strongs: 'H859', position: 0 },
  { id: 'Gen.6.21.1', language: 'hebrew', text: 'קַח־לְךָ֗', transliteration: 'qaḥ-ləḵā', lemma: 'לָקַח', lemmaTranslit: 'lāqaḥ', gloss: 'take for yourself', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', mood: 'imperative', stem: 'qal', rawCode: 'Vqv2ms' }, strongs: 'H3947', position: 1 },
  { id: 'Gen.6.21.2', language: 'hebrew', text: 'מִכָּל־מַאֲכָל֙', transliteration: 'mikkāl-maʾăḵāl', lemma: 'מַאֲכָל', lemmaTranslit: 'maʾăḵāl', gloss: 'from all food', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3978', position: 2 },
  { id: 'Gen.6.21.3', language: 'hebrew', text: 'אֲשֶׁ֣ר', transliteration: 'ʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'that', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 3 },
  { id: 'Gen.6.21.4', language: 'hebrew', text: 'יֵאָכֵ֔ל', transliteration: 'yēʾāḵēl', lemma: 'אָכַל', lemmaTranslit: 'ʾāḵal', gloss: 'is eaten', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'niphal', rawCode: 'Vni3ms' }, strongs: 'H398', position: 4 },
  { id: 'Gen.6.21.5', language: 'hebrew', text: 'וְאָסַפְתָּ֖', transliteration: 'wəʾāsap̄tā', lemma: 'אָסַף', lemmaTranslit: 'ʾāsap̄', gloss: 'and gather it', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp2ms' }, strongs: 'H622', position: 5 },
  { id: 'Gen.6.21.6', language: 'hebrew', text: 'אֵלֶ֑יךָ', transliteration: 'ʾēlêḵā', lemma: 'אֵל', lemmaTranslit: 'ʾēl', gloss: 'to yourself', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H413', position: 6 },
  { id: 'Gen.6.21.7', language: 'hebrew', text: 'וְהָיָ֥ה', transliteration: 'wəhāyāh', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'and it shall be', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H1961', position: 7 },
  { id: 'Gen.6.21.8', language: 'hebrew', text: 'לְךָ֛', transliteration: 'ləḵā', lemma: 'לְ', lemmaTranslit: 'lə', gloss: 'for you', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H0', position: 8 },
  { id: 'Gen.6.21.9', language: 'hebrew', text: 'וְלָהֶ֖ם', transliteration: 'wəlāhem', lemma: 'לְ', lemmaTranslit: 'lə', gloss: 'and for them', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H0', position: 9 },
  { id: 'Gen.6.21.10', language: 'hebrew', text: 'לְאָכְלָֽה', transliteration: 'ləʾāḵlāh', lemma: 'אָכְלָה', lemmaTranslit: 'ʾāḵlāh', gloss: 'for food', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H402', position: 10 },
];

export const genesis6_21_translation: VerseTranslation = {
  verseRef: 'Gen.6.21',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: '"And you, take for yourself from all food that is eaten, and gather it to yourself, and it shall be for you and for them for food."', spans: [{ id: 'Gen.6.21.en.lit.0', text: 'And you, take for yourself...', position: 0, sourceTokenIds: ['Gen.6.21.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"Also take with you every sort of food that is eaten, and store it up. It shall serve as food for you and for them."', spans: [{ id: 'Gen.6.21.en.idi.0', text: 'Also take with you every sort of food...', position: 0, sourceTokenIds: ['Gen.6.21.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis6_21_notes: StudyNote[] = [
  { id: 'Gen.6.21.note.1', verseRef: 'Gen.6.21', sourceTokenIds: ['Gen.6.21.2'], category: 'interpretive', title: 'All Food That Is Eaten', content: 'Before the flood, humans and animals ate plants (Gen 1:29-30). This likely included grains, fruits, vegetables, and fodder. Meat-eating was permitted only after the flood (9:3). The food storage was massive but feasible.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.6.21.note.2', verseRef: 'Gen.6.21', sourceTokenIds: ['Gen.6.21.5'], category: 'lexical', title: 'Gather (asaph)', content: 'The verb ʾāsap̄ (אָסַף) means "to gather, collect, store." Noah\'s task involved massive logistical preparation—gathering, storing, and organizing provisions for humans and animals for over a year aboard the ark.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 6:22 - Noah did according to all that God commanded
export const genesis6_22_tokens: SourceToken[] = [
  { id: 'Gen.6.22.0', language: 'hebrew', text: 'וַיַּ֖עַשׂ', transliteration: 'wayyaʿaś', lemma: 'עָשָׂה', lemmaTranslit: 'ʿāśāh', gloss: 'And did', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H6213', position: 0 },
  { id: 'Gen.6.22.1', language: 'hebrew', text: 'נֹ֑חַ', transliteration: 'nōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'Noah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 1 },
  { id: 'Gen.6.22.2', language: 'hebrew', text: 'כְּ֠כֹל', transliteration: 'kəḵōl', lemma: 'כֹּל', lemmaTranslit: 'kōl', gloss: 'according to all', morphology: { pos: 'noun', rawCode: 'Ncmsa' }, strongs: 'H3605', position: 2 },
  { id: 'Gen.6.22.3', language: 'hebrew', text: 'אֲשֶׁ֨ר', transliteration: 'ʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'that', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 3 },
  { id: 'Gen.6.22.4', language: 'hebrew', text: 'צִוָּ֥ה', transliteration: 'ṣiwwāh', lemma: 'צָוָה', lemmaTranslit: 'ṣāwāh', gloss: 'commanded', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'piel', rawCode: 'Vpp3ms' }, strongs: 'H6680', position: 4 },
  { id: 'Gen.6.22.5', language: 'hebrew', text: 'אֹת֛וֹ', transliteration: 'ʾōṯô', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: 'him', morphology: { pos: 'preposition', rawCode: 'To' }, strongs: 'H853', position: 5 },
  { id: 'Gen.6.22.6', language: 'hebrew', text: 'אֱלֹהִ֖ים', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H430', position: 6 },
  { id: 'Gen.6.22.7', language: 'hebrew', text: 'כֵּ֥ן', transliteration: 'kēn', lemma: 'כֵּן', lemmaTranslit: 'kēn', gloss: 'so', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H3651', position: 7 },
  { id: 'Gen.6.22.8', language: 'hebrew', text: 'עָשָֽׂה', transliteration: 'ʿāśāh', lemma: 'עָשָׂה', lemmaTranslit: 'ʿāśāh', gloss: 'he did', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H6213', position: 8 },
];

export const genesis6_22_translation: VerseTranslation = {
  verseRef: 'Gen.6.22',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And did Noah according to all that commanded him God; so he did.', spans: [{ id: 'Gen.6.22.en.lit.0', text: 'And did Noah according to all...', position: 0, sourceTokenIds: ['Gen.6.22.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Noah did this; he did all that God commanded him.', spans: [{ id: 'Gen.6.22.en.idi.0', text: 'Noah did this; he did all that God commanded him...', position: 0, sourceTokenIds: ['Gen.6.22.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis6_22_notes: StudyNote[] = [
  { id: 'Gen.6.22.note.1', verseRef: 'Gen.6.22', sourceTokenIds: ['Gen.6.22.0', 'Gen.6.22.8'], category: 'theological', title: 'Complete Obedience', content: 'The verse emphasizes Noah\'s obedience with repetition: "Noah did...so he did." This phrase recurs throughout the flood narrative (7:5, 9, 16). Noah\'s righteousness was expressed in complete, exact obedience to God\'s commands.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.6.22.note.2', verseRef: 'Gen.6.22', sourceTokenIds: [], category: 'cross-reference', title: 'Faith Expressed in Works', content: 'Hebrews 11:7 explains: "By faith Noah, being warned by God concerning events as yet unseen, in reverent fear constructed an ark for the saving of his household." Noah\'s obedience was an expression of his faith in God\'s word.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.6.22.note.3', verseRef: 'Gen.6.22', sourceTokenIds: ['Gen.6.22.2'], category: 'lexical', title: 'According to All (kekol)', content: 'The phrase kəḵōl (כְּכֹל, "according to all") indicates complete, not partial, obedience. Noah didn\'t modify God\'s instructions based on his own judgment. This comprehensive obedience is the hallmark of the righteous throughout Scripture.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Export verse structures
export const genesis6_17_verse = { ref: 'Gen.6.17', sourceTokens: genesis6_17_tokens, translation: genesis6_17_translation, notes: genesis6_17_notes };
export const genesis6_18_verse = { ref: 'Gen.6.18', sourceTokens: genesis6_18_tokens, translation: genesis6_18_translation, notes: genesis6_18_notes };
export const genesis6_19_verse = { ref: 'Gen.6.19', sourceTokens: genesis6_19_tokens, translation: genesis6_19_translation, notes: genesis6_19_notes };
export const genesis6_20_verse = { ref: 'Gen.6.20', sourceTokens: genesis6_20_tokens, translation: genesis6_20_translation, notes: genesis6_20_notes };
export const genesis6_21_verse = { ref: 'Gen.6.21', sourceTokens: genesis6_21_tokens, translation: genesis6_21_translation, notes: genesis6_21_notes };
export const genesis6_22_verse = { ref: 'Gen.6.22', sourceTokens: genesis6_22_tokens, translation: genesis6_22_translation, notes: genesis6_22_notes };

// Combined export
export const genesis6_17_22_verses = [
  genesis6_17_verse,
  genesis6_18_verse,
  genesis6_19_verse,
  genesis6_20_verse,
  genesis6_21_verse,
  genesis6_22_verse,
];

export default genesis6_17_22_verses;
