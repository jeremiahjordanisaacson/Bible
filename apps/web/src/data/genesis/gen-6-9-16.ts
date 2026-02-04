/**
 * Genesis 6:9-16 - Hebrew morphological data
 * Noah's righteousness, earth's corruption, ark instructions begin
 * Source: Open Hebrew Bible (Tanach.us) - Public Domain
 */

import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

// Genesis 6:9 - These are the generations of Noah
export const genesis6_9_tokens: SourceToken[] = [
  { id: 'Gen.6.9.0', language: 'hebrew', text: 'אֵ֚לֶּה', transliteration: 'ʾēlleh', lemma: 'אֵלֶּה', lemmaTranslit: 'ʾēlleh', gloss: 'These', morphology: { pos: 'pronoun', rawCode: 'Pdxcp' }, strongs: 'H428', position: 0 },
  { id: 'Gen.6.9.1', language: 'hebrew', text: 'תּוֹלְדֹ֣ת', transliteration: 'tôləḏōṯ', lemma: 'תּוֹלֵדָה', lemmaTranslit: 'tôlēḏāh', gloss: 'the generations of', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'construct', rawCode: 'Ncfpc' }, strongs: 'H8435', position: 1 },
  { id: 'Gen.6.9.2', language: 'hebrew', text: 'נֹ֔חַ', transliteration: 'nōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'Noah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 2 },
  { id: 'Gen.6.9.3', language: 'hebrew', text: 'נֹ֗חַ', transliteration: 'nōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'Noah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 3 },
  { id: 'Gen.6.9.4', language: 'hebrew', text: 'אִ֥ישׁ', transliteration: 'ʾîš', lemma: 'אִישׁ', lemmaTranslit: 'ʾîš', gloss: 'a man', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H376', position: 4 },
  { id: 'Gen.6.9.5', language: 'hebrew', text: 'צַדִּ֛יק', transliteration: 'ṣaddîq', lemma: 'צַדִּיק', lemmaTranslit: 'ṣaddîq', gloss: 'righteous', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ajmsa' }, strongs: 'H6662', position: 5 },
  { id: 'Gen.6.9.6', language: 'hebrew', text: 'תָּמִ֥ים', transliteration: 'tāmîm', lemma: 'תָּמִים', lemmaTranslit: 'tāmîm', gloss: 'blameless', glossExtended: 'complete, without blemish', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ajmsa' }, strongs: 'H8549', position: 6 },
  { id: 'Gen.6.9.7', language: 'hebrew', text: 'הָיָ֖ה', transliteration: 'hāyāh', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'he was', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H1961', position: 7 },
  { id: 'Gen.6.9.8', language: 'hebrew', text: 'בְּדֹֽרֹתָ֑יו', transliteration: 'bəḏōrōṯāyw', lemma: 'דּוֹר', lemmaTranslit: 'dôr', gloss: 'in his generations', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H1755', position: 8 },
  { id: 'Gen.6.9.9', language: 'hebrew', text: 'אֶת־הָֽאֱלֹהִ֖ים', transliteration: 'ʾeṯ-hāʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'with God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H430', position: 9 },
  { id: 'Gen.6.9.10', language: 'hebrew', text: 'הִתְהַלֶּךְ־נֹֽחַ', transliteration: 'hiṯhallēḵ-nōaḥ', lemma: 'הָלַךְ', lemmaTranslit: 'hālaḵ', gloss: 'walked Noah', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'hithpael', rawCode: 'Vtp3ms' }, strongs: 'H1980', position: 10 },
];

export const genesis6_9_translation: VerseTranslation = {
  verseRef: 'Gen.6.9',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'These are the generations of Noah. Noah was a righteous man, blameless he was in his generations. With God walked Noah.', spans: [{ id: 'Gen.6.9.en.lit.0', text: 'These are the generations of Noah...', position: 0, sourceTokenIds: ['Gen.6.9.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'These are the generations of Noah. Noah was a righteous man, blameless in his generation. Noah walked with God.', spans: [{ id: 'Gen.6.9.en.idi.0', text: 'These are the generations of Noah...', position: 0, sourceTokenIds: ['Gen.6.9.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis6_9_notes: StudyNote[] = [
  { id: 'Gen.6.9.note.1', verseRef: 'Gen.6.9', sourceTokenIds: ['Gen.6.9.1'], category: 'lexical', title: 'Toledot (Generations)', content: 'The tôləḏōṯ (תּוֹלְדֹת) formula marks a major section division in Genesis. This is the third occurrence (after 2:4 and 5:1), introducing the flood narrative as a new "genesis" or new beginning for humanity.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.6.9.note.2', verseRef: 'Gen.6.9', sourceTokenIds: ['Gen.6.9.5', 'Gen.6.9.6'], category: 'theological', title: 'Righteous and Blameless', content: 'Ṣaddîq (צַדִּיק, righteous) describes conformity to God\'s standard. Tāmîm (תָּמִים, blameless) means "complete, whole, without defect." This is relative righteousness among his contemporaries, not sinless perfection (cf. 9:21).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.6.9.note.3', verseRef: 'Gen.6.9', sourceTokenIds: ['Gen.6.9.10'], category: 'cross-reference', title: 'Walked with God', content: 'The same phrase used of Enoch (5:22, 24). Only Enoch and Noah are said to have "walked with" (hiṯhallēḵ ʾeṯ) God. Abraham is later told to "walk before" (hiṯhallēḵ ləp̄ānê) God (17:1).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 6:10 - Noah fathered three sons
export const genesis6_10_tokens: SourceToken[] = [
  { id: 'Gen.6.10.0', language: 'hebrew', text: 'וַיּ֥וֹלֶד', transliteration: 'wayyôleḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'And fathered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H3205', position: 0 },
  { id: 'Gen.6.10.1', language: 'hebrew', text: 'נֹ֖חַ', transliteration: 'nōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'Noah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 1 },
  { id: 'Gen.6.10.2', language: 'hebrew', text: 'שְׁלֹשָׁ֣ה', transliteration: 'šəlōšāh', lemma: 'שָׁלֹשׁ', lemmaTranslit: 'šālōš', gloss: 'three', morphology: { pos: 'numeral', gender: 'masculine', rawCode: 'Acmsa' }, strongs: 'H7969', position: 2 },
  { id: 'Gen.6.10.3', language: 'hebrew', text: 'בָנִ֑ים', transliteration: 'ḇānîm', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'sons', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H1121', position: 3 },
  { id: 'Gen.6.10.4', language: 'hebrew', text: 'אֶת־שֵׁ֖ם', transliteration: 'ʾeṯ-šēm', lemma: 'שֵׁם', lemmaTranslit: 'šēm', gloss: 'Shem', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8035', position: 4 },
  { id: 'Gen.6.10.5', language: 'hebrew', text: 'אֶת־חָ֥ם', transliteration: 'ʾeṯ-ḥām', lemma: 'חָם', lemmaTranslit: 'ḥām', gloss: 'Ham', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2526', position: 5 },
  { id: 'Gen.6.10.6', language: 'hebrew', text: 'וְאֶת־יָֽפֶת', transliteration: 'wəʾeṯ-yāp̄eṯ', lemma: 'יֶפֶת', lemmaTranslit: 'yep̄eṯ', gloss: 'and Japheth', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3315', position: 6 },
];

export const genesis6_10_translation: VerseTranslation = {
  verseRef: 'Gen.6.10',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And fathered Noah three sons: Shem, Ham, and Japheth.', spans: [{ id: 'Gen.6.10.en.lit.0', text: 'And fathered Noah three sons...', position: 0, sourceTokenIds: ['Gen.6.10.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'And Noah had three sons: Shem, Ham, and Japheth.', spans: [{ id: 'Gen.6.10.en.idi.0', text: 'And Noah had three sons...', position: 0, sourceTokenIds: ['Gen.6.10.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis6_10_notes: StudyNote[] = [
  { id: 'Gen.6.10.note.1', verseRef: 'Gen.6.10', sourceTokenIds: ['Gen.6.10.4', 'Gen.6.10.5', 'Gen.6.10.6'], category: 'lexical', title: 'Names of Noah\'s Sons', content: 'Shem (שֵׁם) means "name/fame"—the Semitic peoples. Ham (חָם) means "hot"—father of Canaan, Egypt, Cush, Put. Japheth (יֶפֶת) means "enlargement/beauty"—the Indo-European peoples. These three repopulate the earth (ch. 10).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 6:11 - The earth was corrupt before God
export const genesis6_11_tokens: SourceToken[] = [
  { id: 'Gen.6.11.0', language: 'hebrew', text: 'וַתִּשָּׁחֵ֥ת', transliteration: 'wattišāḥēṯ', lemma: 'שָׁחַת', lemmaTranslit: 'šāḥaṯ', gloss: 'And was corrupt', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'niphal', rawCode: 'Vnw3fs' }, strongs: 'H7843', position: 0 },
  { id: 'Gen.6.11.1', language: 'hebrew', text: 'הָאָ֖רֶץ', transliteration: 'hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 1 },
  { id: 'Gen.6.11.2', language: 'hebrew', text: 'לִפְנֵ֣י', transliteration: 'lip̄nê', lemma: 'פָּנִים', lemmaTranslit: 'pānîm', gloss: 'before', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H6440', position: 2 },
  { id: 'Gen.6.11.3', language: 'hebrew', text: 'הָֽאֱלֹהִ֑ים', transliteration: 'hāʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H430', position: 3 },
  { id: 'Gen.6.11.4', language: 'hebrew', text: 'וַתִּמָּלֵ֥א', transliteration: 'wattimmālēʾ', lemma: 'מָלֵא', lemmaTranslit: 'mālēʾ', gloss: 'and was filled', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'niphal', rawCode: 'Vnw3fs' }, strongs: 'H4390', position: 4 },
  { id: 'Gen.6.11.5', language: 'hebrew', text: 'הָאָ֖רֶץ', transliteration: 'hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 5 },
  { id: 'Gen.6.11.6', language: 'hebrew', text: 'חָמָֽס', transliteration: 'ḥāmās', lemma: 'חָמָס', lemmaTranslit: 'ḥāmās', gloss: 'violence', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H2555', position: 6 },
];

export const genesis6_11_translation: VerseTranslation = {
  verseRef: 'Gen.6.11',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And was corrupt the earth before God, and was filled the earth with violence.', spans: [{ id: 'Gen.6.11.en.lit.0', text: 'And was corrupt the earth before God...', position: 0, sourceTokenIds: ['Gen.6.11.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Now the earth was corrupt in God\'s sight, and the earth was filled with violence.', spans: [{ id: 'Gen.6.11.en.idi.0', text: 'Now the earth was corrupt in God\'s sight...', position: 0, sourceTokenIds: ['Gen.6.11.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis6_11_notes: StudyNote[] = [
  { id: 'Gen.6.11.note.1', verseRef: 'Gen.6.11', sourceTokenIds: ['Gen.6.11.0'], category: 'lexical', title: 'Corrupt (šāḥat)', content: 'The root šāḥat (שָׁחַת) means "to ruin, corrupt, destroy." It appears three times in vv.11-13, creating a wordplay: the earth was "ruined" (šāḥat), so God will "destroy" (šāḥat) it. The punishment fits the crime.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.6.11.note.2', verseRef: 'Gen.6.11', sourceTokenIds: ['Gen.6.11.6'], category: 'lexical', title: 'Violence (ḥāmās)', content: 'Ḥāmās (חָמָס) means "violence, wrong, injustice." It refers to physical violence and oppression, possibly including the violence of the "mighty men" (v.4). Habakkuk uses this word to describe Babylon\'s brutality (Hab 1:2-3).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 6:12 - God saw that the earth was corrupt
export const genesis6_12_tokens: SourceToken[] = [
  { id: 'Gen.6.12.0', language: 'hebrew', text: 'וַיַּ֧רְא', transliteration: 'wayyarʾ', lemma: 'רָאָה', lemmaTranslit: 'rāʾāh', gloss: 'And saw', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H7200', position: 0 },
  { id: 'Gen.6.12.1', language: 'hebrew', text: 'אֱלֹהִ֛ים', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H430', position: 1 },
  { id: 'Gen.6.12.2', language: 'hebrew', text: 'אֶת־הָאָ֖רֶץ', transliteration: 'ʾeṯ-hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 2 },
  { id: 'Gen.6.12.3', language: 'hebrew', text: 'וְהִנֵּ֣ה', transliteration: 'wəhinnēh', lemma: 'הִנֵּה', lemmaTranslit: 'hinnēh', gloss: 'and behold', morphology: { pos: 'interjection', rawCode: 'Tm' }, strongs: 'H2009', position: 3 },
  { id: 'Gen.6.12.4', language: 'hebrew', text: 'נִשְׁחָ֑תָה', transliteration: 'nišḥāṯāh', lemma: 'שָׁחַת', lemmaTranslit: 'šāḥaṯ', gloss: 'it was corrupt', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'perfect', stem: 'niphal', rawCode: 'Vnp3fs' }, strongs: 'H7843', position: 4 },
  { id: 'Gen.6.12.5', language: 'hebrew', text: 'כִּֽי־הִשְׁחִ֧ית', transliteration: 'kî-hišḥîṯ', lemma: 'שָׁחַת', lemmaTranslit: 'šāḥaṯ', gloss: 'for had corrupted', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'hiphil', rawCode: 'Vhp3ms' }, strongs: 'H7843', position: 5 },
  { id: 'Gen.6.12.6', language: 'hebrew', text: 'כָּל־בָּשָׂ֛ר', transliteration: 'kāl-bāśār', lemma: 'בָּשָׂר', lemmaTranslit: 'bāśār', gloss: 'all flesh', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H1320', position: 6 },
  { id: 'Gen.6.12.7', language: 'hebrew', text: 'אֶת־דַּרְכּ֖וֹ', transliteration: 'ʾeṯ-darkô', lemma: 'דֶּרֶךְ', lemmaTranslit: 'dereḵ', gloss: 'its way', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H1870', position: 7 },
  { id: 'Gen.6.12.8', language: 'hebrew', text: 'עַל־הָאָֽרֶץ', transliteration: 'ʿal-hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'on the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 8 },
];

export const genesis6_12_translation: VerseTranslation = {
  verseRef: 'Gen.6.12',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And saw God the earth, and behold, it was corrupt, for had corrupted all flesh its way on the earth.', spans: [{ id: 'Gen.6.12.en.lit.0', text: 'And saw God the earth...', position: 0, sourceTokenIds: ['Gen.6.12.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'And God saw the earth, and behold, it was corrupt, for all flesh had corrupted their way on the earth.', spans: [{ id: 'Gen.6.12.en.idi.0', text: 'And God saw the earth...', position: 0, sourceTokenIds: ['Gen.6.12.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis6_12_notes: StudyNote[] = [
  { id: 'Gen.6.12.note.1', verseRef: 'Gen.6.12', sourceTokenIds: ['Gen.6.12.6'], category: 'lexical', title: 'All Flesh (kol basar)', content: 'The phrase kāl-bāśār (כָּל־בָּשָׂר) appears prominently in the flood narrative. It refers to all mortal creatures, both human and animal. The corruption was universal, affecting the entire created order.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.6.12.note.2', verseRef: 'Gen.6.12', sourceTokenIds: ['Gen.6.12.7'], category: 'theological', title: 'Corrupted Its Way', content: 'The "way" (dereḵ) refers to one\'s manner of life, conduct, or path. Each creature had corrupted its divinely intended pattern of living. This may include sexual perversion (the "sons of God" passage) and predatory violence.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 6:13 - God said to Noah, The end of all flesh has come
export const genesis6_13_tokens: SourceToken[] = [
  { id: 'Gen.6.13.0', language: 'hebrew', text: 'וַיֹּ֨אמֶר', transliteration: 'wayyōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'And said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H559', position: 0 },
  { id: 'Gen.6.13.1', language: 'hebrew', text: 'אֱלֹהִ֜ים', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H430', position: 1 },
  { id: 'Gen.6.13.2', language: 'hebrew', text: 'לְנֹ֗חַ', transliteration: 'lənōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'to Noah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 2 },
  { id: 'Gen.6.13.3', language: 'hebrew', text: 'קֵ֤ץ', transliteration: 'qēṣ', lemma: 'קֵץ', lemmaTranslit: 'qēṣ', gloss: 'the end of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H7093', position: 3 },
  { id: 'Gen.6.13.4', language: 'hebrew', text: 'כָּל־בָּשָׂר֙', transliteration: 'kāl-bāśār', lemma: 'בָּשָׂר', lemmaTranslit: 'bāśār', gloss: 'all flesh', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H1320', position: 4 },
  { id: 'Gen.6.13.5', language: 'hebrew', text: 'בָּ֣א', transliteration: 'bāʾ', lemma: 'בּוֹא', lemmaTranslit: 'bôʾ', gloss: 'has come', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H935', position: 5 },
  { id: 'Gen.6.13.6', language: 'hebrew', text: 'לְפָנַ֔י', transliteration: 'ləp̄ānay', lemma: 'פָּנִים', lemmaTranslit: 'pānîm', gloss: 'before Me', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H6440', position: 6 },
  { id: 'Gen.6.13.7', language: 'hebrew', text: 'כִּֽי־מָלְאָ֥ה', transliteration: 'kî-māləʾāh', lemma: 'מָלֵא', lemmaTranslit: 'mālēʾ', gloss: 'for is filled', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3fs' }, strongs: 'H4390', position: 7 },
  { id: 'Gen.6.13.8', language: 'hebrew', text: 'הָאָ֛רֶץ', transliteration: 'hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 8 },
  { id: 'Gen.6.13.9', language: 'hebrew', text: 'חָמָ֖ס', transliteration: 'ḥāmās', lemma: 'חָמָס', lemmaTranslit: 'ḥāmās', gloss: 'violence', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H2555', position: 9 },
  { id: 'Gen.6.13.10', language: 'hebrew', text: 'מִפְּנֵיהֶ֑ם', transliteration: 'mippənêhem', lemma: 'פָּנִים', lemmaTranslit: 'pānîm', gloss: 'because of them', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H6440', position: 10 },
  { id: 'Gen.6.13.11', language: 'hebrew', text: 'וְהִנְנִ֥י', transliteration: 'wəhinnənî', lemma: 'הִנֵּה', lemmaTranslit: 'hinnēh', gloss: 'and behold I', morphology: { pos: 'interjection', rawCode: 'Tm' }, strongs: 'H2009', position: 11 },
  { id: 'Gen.6.13.12', language: 'hebrew', text: 'מַשְׁחִיתָ֖ם', transliteration: 'mašḥîṯām', lemma: 'שָׁחַת', lemmaTranslit: 'šāḥaṯ', gloss: 'will destroy them', morphology: { pos: 'verb', gender: 'masculine', number: 'singular', stem: 'hiphil', mood: 'participle', rawCode: 'Vhpms' }, strongs: 'H7843', position: 12 },
  { id: 'Gen.6.13.13', language: 'hebrew', text: 'אֶת־הָאָֽרֶץ', transliteration: 'ʾeṯ-hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'with the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 13 },
];

export const genesis6_13_translation: VerseTranslation = {
  verseRef: 'Gen.6.13',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And said God to Noah, "The end of all flesh has come before Me, for is filled the earth with violence because of them. And behold, I will destroy them with the earth."', spans: [{ id: 'Gen.6.13.en.lit.0', text: 'And said God to Noah...', position: 0, sourceTokenIds: ['Gen.6.13.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'And God said to Noah, "I have determined to make an end of all flesh, for the earth is filled with violence through them. Behold, I will destroy them with the earth."', spans: [{ id: 'Gen.6.13.en.idi.0', text: 'And God said to Noah...', position: 0, sourceTokenIds: ['Gen.6.13.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis6_13_notes: StudyNote[] = [
  { id: 'Gen.6.13.note.1', verseRef: 'Gen.6.13', sourceTokenIds: ['Gen.6.13.3'], category: 'lexical', title: 'End (qets)', content: 'The word qēṣ (קֵץ) means "end, limit." It later appears in prophetic contexts (Dan 12:13). Here it signifies that God has reached the limit of His patience—judgment is now certain and imminent.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.6.13.note.2', verseRef: 'Gen.6.13', sourceTokenIds: ['Gen.6.13.12', 'Gen.6.13.13'], category: 'grammatical', title: 'Destroy Them with the Earth', content: 'The preposition ʾeṯ (אֶת) can mean "with" or mark the direct object. Thus: "I will destroy them along with the earth" or "I will destroy them and the earth." Either way, the judgment encompasses all creation.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 6:14 - Make yourself an ark of gopher wood
export const genesis6_14_tokens: SourceToken[] = [
  { id: 'Gen.6.14.0', language: 'hebrew', text: 'עֲשֵׂ֤ה', transliteration: 'ʿăśēh', lemma: 'עָשָׂה', lemmaTranslit: 'ʿāśāh', gloss: 'Make', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', mood: 'imperative', stem: 'qal', rawCode: 'Vqv2ms' }, strongs: 'H6213', position: 0 },
  { id: 'Gen.6.14.1', language: 'hebrew', text: 'לְךָ֙', transliteration: 'ləḵā', lemma: 'לְ', lemmaTranslit: 'lə', gloss: 'for yourself', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H0', position: 1 },
  { id: 'Gen.6.14.2', language: 'hebrew', text: 'תֵּבַ֣ת', transliteration: 'tēḇaṯ', lemma: 'תֵּבָה', lemmaTranslit: 'tēḇāh', gloss: 'an ark', glossExtended: 'box, chest, vessel', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H8392', position: 2 },
  { id: 'Gen.6.14.3', language: 'hebrew', text: 'עֲצֵי־גֹ֔פֶר', transliteration: 'ʿăṣê-ḡōp̄er', lemma: 'גֹּפֶר', lemmaTranslit: 'gōp̄er', gloss: 'gopher wood', glossExtended: 'cypress wood, resinous wood', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H1613', position: 3 },
  { id: 'Gen.6.14.4', language: 'hebrew', text: 'קִנִּ֖ים', transliteration: 'qinnîm', lemma: 'קֵן', lemmaTranslit: 'qēn', gloss: 'rooms', glossExtended: 'nests, compartments', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H7064', position: 4 },
  { id: 'Gen.6.14.5', language: 'hebrew', text: 'תַּֽעֲשֶׂ֣ה', transliteration: 'taʿăśeh', lemma: 'עָשָׂה', lemmaTranslit: 'ʿāśāh', gloss: 'you shall make', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi2ms' }, strongs: 'H6213', position: 5 },
  { id: 'Gen.6.14.6', language: 'hebrew', text: 'אֶת־הַתֵּבָ֑ה', transliteration: 'ʾeṯ-hattēḇāh', lemma: 'תֵּבָה', lemmaTranslit: 'tēḇāh', gloss: 'the ark', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8392', position: 6 },
  { id: 'Gen.6.14.7', language: 'hebrew', text: 'וְכָֽפַרְתָּ֥', transliteration: 'wəḵāp̄artā', lemma: 'כָּפַר', lemmaTranslit: 'kāp̄ar', gloss: 'and you shall cover', glossExtended: 'pitch, coat with pitch', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp2ms' }, strongs: 'H3722', position: 7 },
  { id: 'Gen.6.14.8', language: 'hebrew', text: 'אֹתָ֛הּ', transliteration: 'ʾōṯāh', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: 'it', morphology: { pos: 'preposition', rawCode: 'To' }, strongs: 'H853', position: 8 },
  { id: 'Gen.6.14.9', language: 'hebrew', text: 'מִבַּ֥יִת', transliteration: 'mibbayi ṯ', lemma: 'בַּיִת', lemmaTranslit: 'bayiṯ', gloss: 'inside', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H1004', position: 9 },
  { id: 'Gen.6.14.10', language: 'hebrew', text: 'וּמִח֖וּץ', transliteration: 'ûmiḥûṣ', lemma: 'חוּץ', lemmaTranslit: 'ḥûṣ', gloss: 'and outside', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H2351', position: 10 },
  { id: 'Gen.6.14.11', language: 'hebrew', text: 'בַּכֹּֽפֶר', transliteration: 'bakkōp̄er', lemma: 'כֹּפֶר', lemmaTranslit: 'kōp̄er', gloss: 'with pitch', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3724', position: 11 },
];

export const genesis6_14_translation: VerseTranslation = {
  verseRef: 'Gen.6.14',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: '"Make for yourself an ark of gopher wood. Rooms you shall make in the ark, and you shall cover it inside and outside with pitch."', spans: [{ id: 'Gen.6.14.en.lit.0', text: 'Make for yourself an ark of gopher wood...', position: 0, sourceTokenIds: ['Gen.6.14.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"Make yourself an ark of gopher wood. Make rooms in the ark, and cover it inside and out with pitch."', spans: [{ id: 'Gen.6.14.en.idi.0', text: 'Make yourself an ark of gopher wood...', position: 0, sourceTokenIds: ['Gen.6.14.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis6_14_notes: StudyNote[] = [
  { id: 'Gen.6.14.note.1', verseRef: 'Gen.6.14', sourceTokenIds: ['Gen.6.14.2'], category: 'lexical', title: 'Ark (tebah)', content: 'The word tēḇāh (תֵּבָה) is used only here and for Moses\' basket (Exod 2:3,5). It is not the word for Noah\'s "ark" used elsewhere (ʾărôn). Both vessels were means of salvation through water.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.6.14.note.2', verseRef: 'Gen.6.14', sourceTokenIds: ['Gen.6.14.7', 'Gen.6.14.11'], category: 'theological', title: 'Cover with Pitch (kaphar)', content: 'The verb kāp̄ar (כָּפַר, "cover") and noun kōp̄er (כֹּפֶר, "pitch") share the same root used for atonement. The ark was "atoned" or "covered"—a beautiful picture of salvation through covering, protection from judgment.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.6.14.note.3', verseRef: 'Gen.6.14', sourceTokenIds: ['Gen.6.14.3'], category: 'lexical', title: 'Gopher Wood', content: 'The identity of ʿăṣê-ḡōp̄er (עֲצֵי־גֹפֶר) is uncertain. This is its only occurrence in the Bible. Suggestions include cypress (resinous, water-resistant), cedar, or a generic term for resinous wood.', confidence: 'medium', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 6:15 - The dimensions of the ark
export const genesis6_15_tokens: SourceToken[] = [
  { id: 'Gen.6.15.0', language: 'hebrew', text: 'וְזֶ֕ה', transliteration: 'wəzeh', lemma: 'זֶה', lemmaTranslit: 'zeh', gloss: 'And this', morphology: { pos: 'pronoun', rawCode: 'Pdxms' }, strongs: 'H2088', position: 0 },
  { id: 'Gen.6.15.1', language: 'hebrew', text: 'אֲשֶׁ֥ר', transliteration: 'ʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'how', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 1 },
  { id: 'Gen.6.15.2', language: 'hebrew', text: 'תַּֽעֲשֶׂ֖ה', transliteration: 'taʿăśeh', lemma: 'עָשָׂה', lemmaTranslit: 'ʿāśāh', gloss: 'you shall make', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi2ms' }, strongs: 'H6213', position: 2 },
  { id: 'Gen.6.15.3', language: 'hebrew', text: 'אֹתָ֑הּ', transliteration: 'ʾōṯāh', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: 'it', morphology: { pos: 'preposition', rawCode: 'To' }, strongs: 'H853', position: 3 },
  { id: 'Gen.6.15.4', language: 'hebrew', text: 'שְׁלֹ֧שׁ', transliteration: 'šəlōš', lemma: 'שָׁלֹשׁ', lemmaTranslit: 'šālōš', gloss: 'three', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H7969', position: 4 },
  { id: 'Gen.6.15.5', language: 'hebrew', text: 'מֵא֣וֹת', transliteration: 'mēʾôṯ', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'hundred', morphology: { pos: 'numeral', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Acfpa' }, strongs: 'H3967', position: 5 },
  { id: 'Gen.6.15.6', language: 'hebrew', text: 'אַמָּה֙', transliteration: 'ʾammāh', lemma: 'אַמָּה', lemmaTranslit: 'ʾammāh', gloss: 'cubits', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H520', position: 6 },
  { id: 'Gen.6.15.7', language: 'hebrew', text: 'אֹ֣רֶךְ', transliteration: 'ʾōreḵ', lemma: 'אֹרֶךְ', lemmaTranslit: 'ʾōreḵ', gloss: 'the length of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H753', position: 7 },
  { id: 'Gen.6.15.8', language: 'hebrew', text: 'הַתֵּבָ֔ה', transliteration: 'hattēḇāh', lemma: 'תֵּבָה', lemmaTranslit: 'tēḇāh', gloss: 'the ark', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8392', position: 8 },
  { id: 'Gen.6.15.9', language: 'hebrew', text: 'חֲמִשִּׁ֤ים', transliteration: 'ḥămiššîm', lemma: 'חֲמִשִּׁים', lemmaTranslit: 'ḥămiššîm', gloss: 'fifty', morphology: { pos: 'numeral', rawCode: 'Acmpa' }, strongs: 'H2572', position: 9 },
  { id: 'Gen.6.15.10', language: 'hebrew', text: 'אַמָּה֙', transliteration: 'ʾammāh', lemma: 'אַמָּה', lemmaTranslit: 'ʾammāh', gloss: 'cubits', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H520', position: 10 },
  { id: 'Gen.6.15.11', language: 'hebrew', text: 'רָחְבָּ֔הּ', transliteration: 'rāḥbāh', lemma: 'רֹחַב', lemmaTranslit: 'rōḥaḇ', gloss: 'its width', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H7341', position: 11 },
  { id: 'Gen.6.15.12', language: 'hebrew', text: 'וּשְׁלֹשִׁ֥ים', transliteration: 'ûšəlōšîm', lemma: 'שְׁלֹשִׁים', lemmaTranslit: 'šəlōšîm', gloss: 'and thirty', morphology: { pos: 'numeral', rawCode: 'Acmpa' }, strongs: 'H7970', position: 12 },
  { id: 'Gen.6.15.13', language: 'hebrew', text: 'אַמָּ֖ה', transliteration: 'ʾammāh', lemma: 'אַמָּה', lemmaTranslit: 'ʾammāh', gloss: 'cubits', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H520', position: 13 },
  { id: 'Gen.6.15.14', language: 'hebrew', text: 'קוֹמָתָֽהּ', transliteration: 'qômāṯāh', lemma: 'קוֹמָה', lemmaTranslit: 'qômāh', gloss: 'its height', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H6967', position: 14 },
];

export const genesis6_15_translation: VerseTranslation = {
  verseRef: 'Gen.6.15',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: '"And this is how you shall make it: three hundred cubits the length of the ark, fifty cubits its width, and thirty cubits its height."', spans: [{ id: 'Gen.6.15.en.lit.0', text: 'And this is how you shall make it...', position: 0, sourceTokenIds: ['Gen.6.15.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"This is how you are to make it: the length of the ark 300 cubits, its breadth 50 cubits, and its height 30 cubits."', spans: [{ id: 'Gen.6.15.en.idi.0', text: 'This is how you are to make it...', position: 0, sourceTokenIds: ['Gen.6.15.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis6_15_notes: StudyNote[] = [
  { id: 'Gen.6.15.note.1', verseRef: 'Gen.6.15', sourceTokenIds: ['Gen.6.15.6'], category: 'cultural', title: 'Cubit Measurement', content: 'An ʾammāh (אַמָּה, cubit) was approximately 18 inches (45 cm). The ark dimensions: 450 × 75 × 45 feet (137 × 23 × 14 meters). This makes it roughly the size of a modern cargo ship, with ~1.5 million cubic feet of space.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.6.15.note.2', verseRef: 'Gen.6.15', sourceTokenIds: [], category: 'interpretive', title: 'Seaworthy Proportions', content: 'The 6:1 length-to-width ratio is remarkably seaworthy. Modern naval architects confirm these proportions provide excellent stability. The ark was designed for flotation, not navigation—it had no rudder or sail.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 6:16 - A window, door, and three decks
export const genesis6_16_tokens: SourceToken[] = [
  { id: 'Gen.6.16.0', language: 'hebrew', text: 'צֹ֣הַר', transliteration: 'ṣōhar', lemma: 'צֹהַר', lemmaTranslit: 'ṣōhar', gloss: 'A window', glossExtended: 'roof, light opening', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H6672', position: 0 },
  { id: 'Gen.6.16.1', language: 'hebrew', text: 'תַּֽעֲשֶׂ֣ה', transliteration: 'taʿăśeh', lemma: 'עָשָׂה', lemmaTranslit: 'ʿāśāh', gloss: 'you shall make', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi2ms' }, strongs: 'H6213', position: 1 },
  { id: 'Gen.6.16.2', language: 'hebrew', text: 'לַתֵּבָ֗ה', transliteration: 'lattēḇāh', lemma: 'תֵּבָה', lemmaTranslit: 'tēḇāh', gloss: 'for the ark', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8392', position: 2 },
  { id: 'Gen.6.16.3', language: 'hebrew', text: 'וְאֶל־אַמָּה֙', transliteration: 'wəʾel-ʾammāh', lemma: 'אַמָּה', lemmaTranslit: 'ʾammāh', gloss: 'and to a cubit', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H520', position: 3 },
  { id: 'Gen.6.16.4', language: 'hebrew', text: 'תְּכַלֶּ֣נָּה', transliteration: 'təḵallennāh', lemma: 'כָּלָה', lemmaTranslit: 'kālāh', gloss: 'you shall finish it', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'piel', rawCode: 'Vpi2ms' }, strongs: 'H3615', position: 4 },
  { id: 'Gen.6.16.5', language: 'hebrew', text: 'מִלְמַ֔עְלָה', transliteration: 'milmaʿlāh', lemma: 'מַעַל', lemmaTranslit: 'maʿal', gloss: 'from above', morphology: { pos: 'noun', rawCode: 'Ncmsa' }, strongs: 'H4605', position: 5 },
  { id: 'Gen.6.16.6', language: 'hebrew', text: 'וּפֶ֥תַח', transliteration: 'ûp̄eṯaḥ', lemma: 'פֶּתַח', lemmaTranslit: 'peṯaḥ', gloss: 'and a door of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H6607', position: 6 },
  { id: 'Gen.6.16.7', language: 'hebrew', text: 'הַתֵּבָ֖ה', transliteration: 'hattēḇāh', lemma: 'תֵּבָה', lemmaTranslit: 'tēḇāh', gloss: 'the ark', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8392', position: 7 },
  { id: 'Gen.6.16.8', language: 'hebrew', text: 'בְּצִדָּ֣הּ', transliteration: 'bəṣiddāh', lemma: 'צַד', lemmaTranslit: 'ṣaḏ', gloss: 'in its side', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H6654', position: 8 },
  { id: 'Gen.6.16.9', language: 'hebrew', text: 'תָּשִׂ֑ים', transliteration: 'tāśîm', lemma: 'שִׂים', lemmaTranslit: 'śîm', gloss: 'you shall set', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi2ms' }, strongs: 'H7760', position: 9 },
  { id: 'Gen.6.16.10', language: 'hebrew', text: 'תַּחְתִּיִּ֛ם', transliteration: 'taḥtiyyim', lemma: 'תַּחְתִּי', lemmaTranslit: 'taḥtî', gloss: 'lower', morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ajmpa' }, strongs: 'H8482', position: 10 },
  { id: 'Gen.6.16.11', language: 'hebrew', text: 'שְׁנִיִּ֥ם', transliteration: 'šəniyyim', lemma: 'שֵׁנִי', lemmaTranslit: 'šēnî', gloss: 'second', morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Aompa' }, strongs: 'H8145', position: 11 },
  { id: 'Gen.6.16.12', language: 'hebrew', text: 'וּשְׁלִשִׁ֖ים', transliteration: 'ûšəlišîm', lemma: 'שְׁלִישִׁי', lemmaTranslit: 'šəlîšî', gloss: 'and third', morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Aompa' }, strongs: 'H7992', position: 12 },
  { id: 'Gen.6.16.13', language: 'hebrew', text: 'תַּֽעֲשֶֽׂהָ', transliteration: 'taʿăśehā', lemma: 'עָשָׂה', lemmaTranslit: 'ʿāśāh', gloss: 'you shall make it', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi2ms' }, strongs: 'H6213', position: 13 },
];

export const genesis6_16_translation: VerseTranslation = {
  verseRef: 'Gen.6.16',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: '"A window you shall make for the ark, and to a cubit you shall finish it from above. And a door of the ark in its side you shall set. Lower, second, and third decks you shall make it."', spans: [{ id: 'Gen.6.16.en.lit.0', text: 'A window you shall make for the ark...', position: 0, sourceTokenIds: ['Gen.6.16.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"Make a roof for the ark, and finish it to a cubit above, and set the door of the ark in its side. Make it with lower, second, and third decks."', spans: [{ id: 'Gen.6.16.en.idi.0', text: 'Make a roof for the ark...', position: 0, sourceTokenIds: ['Gen.6.16.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis6_16_notes: StudyNote[] = [
  { id: 'Gen.6.16.note.1', verseRef: 'Gen.6.16', sourceTokenIds: ['Gen.6.16.0'], category: 'translation-choice', title: 'Tsohar (Window/Roof)', content: 'The meaning of ṣōhar (צֹהַר) is debated: (1) window/light-opening; (2) roof; (3) opening running around the top. "Finish it to a cubit above" suggests a gap for light and ventilation below the roofline.', confidence: 'medium', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.6.16.note.2', verseRef: 'Gen.6.16', sourceTokenIds: ['Gen.6.16.10', 'Gen.6.16.11', 'Gen.6.16.12'], category: 'interpretive', title: 'Three Decks', content: 'The three levels (lower, second, third) may correspond to types of animals or purposes. With three 15-foot decks, there was ample room for animals, food storage, and living quarters. The total deck space was approximately 100,000 square feet.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Export verse structures
export const genesis6_9_verse = { ref: 'Gen.6.9', sourceTokens: genesis6_9_tokens, translation: genesis6_9_translation, notes: genesis6_9_notes };
export const genesis6_10_verse = { ref: 'Gen.6.10', sourceTokens: genesis6_10_tokens, translation: genesis6_10_translation, notes: genesis6_10_notes };
export const genesis6_11_verse = { ref: 'Gen.6.11', sourceTokens: genesis6_11_tokens, translation: genesis6_11_translation, notes: genesis6_11_notes };
export const genesis6_12_verse = { ref: 'Gen.6.12', sourceTokens: genesis6_12_tokens, translation: genesis6_12_translation, notes: genesis6_12_notes };
export const genesis6_13_verse = { ref: 'Gen.6.13', sourceTokens: genesis6_13_tokens, translation: genesis6_13_translation, notes: genesis6_13_notes };
export const genesis6_14_verse = { ref: 'Gen.6.14', sourceTokens: genesis6_14_tokens, translation: genesis6_14_translation, notes: genesis6_14_notes };
export const genesis6_15_verse = { ref: 'Gen.6.15', sourceTokens: genesis6_15_tokens, translation: genesis6_15_translation, notes: genesis6_15_notes };
export const genesis6_16_verse = { ref: 'Gen.6.16', sourceTokens: genesis6_16_tokens, translation: genesis6_16_translation, notes: genesis6_16_notes };

// Combined export
export const genesis6_9_16_verses = [
  genesis6_9_verse,
  genesis6_10_verse,
  genesis6_11_verse,
  genesis6_12_verse,
  genesis6_13_verse,
  genesis6_14_verse,
  genesis6_15_verse,
  genesis6_16_verse,
];

export default genesis6_9_16_verses;
