/**
 * Genesis 10:6-20 - The Table of Nations: Descendants of Ham
 * Hebrew morphological data with study annotations
 */

import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

// Genesis 10:6
export const genesis10_6_tokens: SourceToken[] = [
  { id: 'Gen.10.6.0', language: 'hebrew', text: 'וּבְנֵ֖י', transliteration: 'ûḇənê', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'And the sons of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H1121', position: 0 },
  { id: 'Gen.10.6.1', language: 'hebrew', text: 'חָ֑ם', transliteration: 'ḥām', lemma: 'חָם', lemmaTranslit: 'ḥām', gloss: 'Ham', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2526', position: 1 },
  { id: 'Gen.10.6.2', language: 'hebrew', text: 'כּ֥וּשׁ', transliteration: 'kûš', lemma: 'כּוּשׁ', lemmaTranslit: 'kûš', gloss: 'Cush', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3568', position: 2 },
  { id: 'Gen.10.6.3', language: 'hebrew', text: 'וּמִצְרַ֖יִם', transliteration: 'ûmiṣrayim', lemma: 'מִצְרַיִם', lemmaTranslit: 'miṣrayim', gloss: 'and Mizraim', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H4714', position: 3 },
  { id: 'Gen.10.6.4', language: 'hebrew', text: 'וּפ֥וּט', transliteration: 'ûp̄ûṭ', lemma: 'פּוּט', lemmaTranslit: 'pûṭ', gloss: 'and Put', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H6316', position: 4 },
  { id: 'Gen.10.6.5', language: 'hebrew', text: 'וּכְנָֽעַן', transliteration: 'ûḵənaʿan', lemma: 'כְּנַעַן', lemmaTranslit: 'kənaʿan', gloss: 'and Canaan', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3667', position: 5 },
];

export const genesis10_6_translation: VerseTranslation = {
  verseRef: 'Gen.10.6',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And the sons of Ham: Cush, Mizraim, Put, and Canaan.', spans: [{ id: 'Gen.10.6.en.lit.0', text: 'And the sons of Ham...', position: 0, sourceTokenIds: ['Gen.10.6.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'The sons of Ham: Cush, Egypt, Put and Canaan.', spans: [{ id: 'Gen.10.6.en.idi.0', text: 'The sons of Ham...', position: 0, sourceTokenIds: ['Gen.10.6.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis10_6_notes: StudyNote[] = [
  { id: 'Gen.10.6.note.1', verseRef: 'Gen.10.6', sourceTokenIds: ['Gen.10.6.2'], category: 'historical', title: 'Cush', content: 'Cush refers to the region south of Egypt—Nubia/Ethiopia (modern Sudan). Cushites appear throughout the OT (Moses\' wife, 2 Sam 18:21, Jer 13:23). The name may derive from Egyptian "Kash."', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.10.6.note.2', verseRef: 'Gen.10.6', sourceTokenIds: ['Gen.10.6.3'], category: 'lexical', title: 'Mizraim', content: 'Mizraim (מִצְרַיִם) is the Hebrew name for Egypt. The dual ending (-ayim) may reflect Upper and Lower Egypt. This links Egypt to Ham, making it a "Hamitic" nation—consistent with ancient Egyptian self-identification.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.10.6.note.3', verseRef: 'Gen.10.6', sourceTokenIds: ['Gen.10.6.4'], category: 'historical', title: 'Put', content: 'Put is usually identified with Libya (ancient Lubim). Egyptian texts mention "Punt" as a land to the south or east. Put appears as mercenaries alongside Cush and Lud (Ezek 30:5, Jer 46:9).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 10:7
export const genesis10_7_tokens: SourceToken[] = [
  { id: 'Gen.10.7.0', language: 'hebrew', text: 'וּבְנֵ֣י', transliteration: 'ûḇənê', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'And the sons of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H1121', position: 0 },
  { id: 'Gen.10.7.1', language: 'hebrew', text: 'כ֔וּשׁ', transliteration: 'kûš', lemma: 'כּוּשׁ', lemmaTranslit: 'kûš', gloss: 'Cush', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3568', position: 1 },
  { id: 'Gen.10.7.2', language: 'hebrew', text: 'סְבָא֙', transliteration: 'səḇāʾ', lemma: 'סְבָא', lemmaTranslit: 'səḇāʾ', gloss: 'Seba', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5434', position: 2 },
  { id: 'Gen.10.7.3', language: 'hebrew', text: 'וַחֲוִילָ֔ה', transliteration: 'waḥăwîlāh', lemma: 'חֲוִילָה', lemmaTranslit: 'ḥăwîlāh', gloss: 'and Havilah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2341', position: 3 },
  { id: 'Gen.10.7.4', language: 'hebrew', text: 'וְסַבְתָּ֥ה', transliteration: 'wəsaḇtāh', lemma: 'סַבְתָּה', lemmaTranslit: 'saḇtāh', gloss: 'and Sabtah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5454', position: 4 },
  { id: 'Gen.10.7.5', language: 'hebrew', text: 'וְרַעְמָ֖ה', transliteration: 'wəraʿmāh', lemma: 'רַעְמָה', lemmaTranslit: 'raʿmāh', gloss: 'and Raamah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H7484', position: 5 },
  { id: 'Gen.10.7.6', language: 'hebrew', text: 'וְסַבְתְּכָ֑א', transliteration: 'wəsaḇtəḵāʾ', lemma: 'סַבְתְּכָא', lemmaTranslit: 'saḇtəḵāʾ', gloss: 'and Sabteca', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5455', position: 6 },
  { id: 'Gen.10.7.7', language: 'hebrew', text: 'וּבְנֵ֥י', transliteration: 'ûḇənê', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'and the sons of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H1121', position: 7 },
  { id: 'Gen.10.7.8', language: 'hebrew', text: 'רַעְמָ֖ה', transliteration: 'raʿmāh', lemma: 'רַעְמָה', lemmaTranslit: 'raʿmāh', gloss: 'Raamah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H7484', position: 8 },
  { id: 'Gen.10.7.9', language: 'hebrew', text: 'שְׁבָ֥א', transliteration: 'šəḇāʾ', lemma: 'שְׁבָא', lemmaTranslit: 'šəḇāʾ', gloss: 'Sheba', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H7614', position: 9 },
  { id: 'Gen.10.7.10', language: 'hebrew', text: 'וּדְדָֽן', transliteration: 'ûḏəḏān', lemma: 'דְּדָן', lemmaTranslit: 'dəḏān', gloss: 'and Dedan', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H1719', position: 10 },
];

export const genesis10_7_translation: VerseTranslation = {
  verseRef: 'Gen.10.7',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And the sons of Cush: Seba, Havilah, Sabtah, Raamah, and Sabteca; and the sons of Raamah: Sheba and Dedan.', spans: [{ id: 'Gen.10.7.en.lit.0', text: 'And the sons of Cush...', position: 0, sourceTokenIds: ['Gen.10.7.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'The sons of Cush: Seba, Havilah, Sabtah, Raamah and Sabteka. The sons of Raamah: Sheba and Dedan.', spans: [{ id: 'Gen.10.7.en.idi.0', text: 'The sons of Cush...', position: 0, sourceTokenIds: ['Gen.10.7.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis10_7_notes: StudyNote[] = [
  { id: 'Gen.10.7.note.1', verseRef: 'Gen.10.7', sourceTokenIds: ['Gen.10.7.9'], category: 'historical', title: 'Sheba', content: 'Sheba is associated with southwestern Arabia (modern Yemen). The Queen of Sheba visited Solomon (1 Kings 10). Note: both Hamites (here) and Semites (10:28) have "Sheba," suggesting intermarriage or territorial overlap.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.10.7.note.2', verseRef: 'Gen.10.7', sourceTokenIds: ['Gen.10.7.10'], category: 'historical', title: 'Dedan', content: 'Dedan was an Arabian trading center (modern Al-Ula in Saudi Arabia). Ezekiel 27:20 mentions Dedan trading saddle blankets with Tyre. Like Sheba, Dedan appears in both Hamite and Semite genealogies.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 10:8
export const genesis10_8_tokens: SourceToken[] = [
  { id: 'Gen.10.8.0', language: 'hebrew', text: 'וְכ֖וּשׁ', transliteration: 'wəḵûš', lemma: 'כּוּשׁ', lemmaTranslit: 'kûš', gloss: 'And Cush', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3568', position: 0 },
  { id: 'Gen.10.8.1', language: 'hebrew', text: 'יָלַ֣ד', transliteration: 'yālaḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'fathered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H3205', position: 1 },
  { id: 'Gen.10.8.2', language: 'hebrew', text: 'אֶת־נִמְרֹ֑ד', transliteration: 'ʾeṯ-nimrōḏ', lemma: 'נִמְרוֹד', lemmaTranslit: 'nimrôḏ', gloss: 'Nimrod', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5248', position: 2 },
  { id: 'Gen.10.8.3', language: 'hebrew', text: 'ה֣וּא', transliteration: 'hûʾ', lemma: 'הוּא', lemmaTranslit: 'hûʾ', gloss: 'he', morphology: { pos: 'pronoun', person: '3', gender: 'masculine', number: 'singular', rawCode: 'Pp3ms' }, strongs: 'H1931', position: 3 },
  { id: 'Gen.10.8.4', language: 'hebrew', text: 'הֵחֵ֔ל', transliteration: 'hēḥēl', lemma: 'חָלַל', lemmaTranslit: 'ḥālal', gloss: 'began', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'hiphil', rawCode: 'Vhp3ms' }, strongs: 'H2490', position: 4 },
  { id: 'Gen.10.8.5', language: 'hebrew', text: 'לִהְי֥וֹת', transliteration: 'lihyôṯ', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'to be', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'VqIc' }, strongs: 'H1961', position: 5 },
  { id: 'Gen.10.8.6', language: 'hebrew', text: 'גִּבֹּ֖ר', transliteration: 'gibbōr', lemma: 'גִּבּוֹר', lemmaTranslit: 'gibbôr', gloss: 'a mighty one', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', rawCode: 'Ajmsa' }, strongs: 'H1368', position: 6 },
  { id: 'Gen.10.8.7', language: 'hebrew', text: 'בָּאָֽרֶץ', transliteration: 'bāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'in the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 7 },
];

export const genesis10_8_translation: VerseTranslation = {
  verseRef: 'Gen.10.8',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And Cush fathered Nimrod; he began to be a mighty one in the earth.', spans: [{ id: 'Gen.10.8.en.lit.0', text: 'And Cush fathered Nimrod...', position: 0, sourceTokenIds: ['Gen.10.8.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Cush was the father of Nimrod, who became a mighty warrior on the earth.', spans: [{ id: 'Gen.10.8.en.idi.0', text: 'Cush was the father of Nimrod...', position: 0, sourceTokenIds: ['Gen.10.8.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis10_8_notes: StudyNote[] = [
  { id: 'Gen.10.8.note.1', verseRef: 'Gen.10.8', sourceTokenIds: ['Gen.10.8.2'], category: 'lexical', title: 'Nimrod', content: 'The name Nimrod may derive from Hebrew marad (מָרַד) "to rebel," though this etymology is debated. He is presented as the first post-flood empire builder—a "mighty one" (gibbor) reminiscent of the nephilim "mighty men" (6:4).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.10.8.note.2', verseRef: 'Gen.10.8', sourceTokenIds: ['Gen.10.8.4', 'Gen.10.8.6'], category: 'interpretive', title: 'Began to be Mighty', content: 'The phrase "began to be a gibbor" suggests Nimrod initiated something new—perhaps organized military conquest and empire-building. Jewish and Christian tradition often portrays Nimrod negatively as a tyrant opposing God, possibly connected to Babel (11:1-9).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 10:9
export const genesis10_9_tokens: SourceToken[] = [
  { id: 'Gen.10.9.0', language: 'hebrew', text: 'הֽוּא־הָיָ֥ה', transliteration: 'hûʾ-hāyāh', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'He was', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H1961', position: 0 },
  { id: 'Gen.10.9.1', language: 'hebrew', text: 'גִבֹּֽר־צַ֖יִד', transliteration: 'gibbōr-ṣayiḏ', lemma: 'צַיִד', lemmaTranslit: 'ṣayiḏ', gloss: 'a mighty hunter', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H6718', position: 1 },
  { id: 'Gen.10.9.2', language: 'hebrew', text: 'לִפְנֵ֣י', transliteration: 'lip̄nê', lemma: 'פָּנִים', lemmaTranslit: 'pānîm', gloss: 'before', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H6440', position: 2 },
  { id: 'Gen.10.9.3', language: 'hebrew', text: 'יְהוָ֑ה', transliteration: 'YHWH', lemma: 'יהוה', lemmaTranslit: 'YHWH', gloss: 'the LORD', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 3 },
  { id: 'Gen.10.9.4', language: 'hebrew', text: 'עַל־כֵּן֙', transliteration: 'ʿal-kēn', lemma: 'כֵּן', lemmaTranslit: 'kēn', gloss: 'therefore', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H3651', position: 4 },
  { id: 'Gen.10.9.5', language: 'hebrew', text: 'יֵֽאָמַ֔ר', transliteration: 'yēʾāmar', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'it is said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'niphal', rawCode: 'VNi3ms' }, strongs: 'H559', position: 5 },
  { id: 'Gen.10.9.6', language: 'hebrew', text: 'כְּנִמְרֹ֛ד', transliteration: 'kənimrōḏ', lemma: 'נִמְרוֹד', lemmaTranslit: 'nimrôḏ', gloss: 'like Nimrod', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5248', position: 6 },
  { id: 'Gen.10.9.7', language: 'hebrew', text: 'גִּבּ֥וֹר', transliteration: 'gibbôr', lemma: 'גִּבּוֹר', lemmaTranslit: 'gibbôr', gloss: 'a mighty', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', rawCode: 'Ajmsa' }, strongs: 'H1368', position: 7 },
  { id: 'Gen.10.9.8', language: 'hebrew', text: 'צַ֖יִד', transliteration: 'ṣayiḏ', lemma: 'צַיִד', lemmaTranslit: 'ṣayiḏ', gloss: 'hunter', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H6718', position: 8 },
  { id: 'Gen.10.9.9', language: 'hebrew', text: 'לִפְנֵ֥י', transliteration: 'lip̄nê', lemma: 'פָּנִים', lemmaTranslit: 'pānîm', gloss: 'before', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H6440', position: 9 },
  { id: 'Gen.10.9.10', language: 'hebrew', text: 'יְהוָֽה', transliteration: 'YHWH', lemma: 'יהוה', lemmaTranslit: 'YHWH', gloss: 'the LORD', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 10 },
];

export const genesis10_9_translation: VerseTranslation = {
  verseRef: 'Gen.10.9',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'He was a mighty hunter before the LORD; therefore it is said, "Like Nimrod, a mighty hunter before the LORD."', spans: [{ id: 'Gen.10.9.en.lit.0', text: 'He was a mighty hunter...', position: 0, sourceTokenIds: ['Gen.10.9.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'He was a mighty hunter before the LORD; that is why it is said, "Like Nimrod, a mighty hunter before the LORD."', spans: [{ id: 'Gen.10.9.en.idi.0', text: 'He was a mighty hunter...', position: 0, sourceTokenIds: ['Gen.10.9.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis10_9_notes: StudyNote[] = [
  { id: 'Gen.10.9.note.1', verseRef: 'Gen.10.9', sourceTokenIds: ['Gen.10.9.2', 'Gen.10.9.3'], category: 'interpretive', title: 'Before the LORD', content: 'The phrase "before the LORD" (liphnê YHWH) can mean "in the LORD\'s sight/estimation" (positive) or "in defiance of/against the LORD" (negative). Context suggests he was renowned—whether for good or ill is debated.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.10.9.note.2', verseRef: 'Gen.10.9', sourceTokenIds: ['Gen.10.9.4', 'Gen.10.9.5', 'Gen.10.9.6'], category: 'cultural', title: 'Proverbial Saying', content: 'Nimrod\'s fame became proverbial. The narrator quotes a common saying of his day: "Like Nimrod, a mighty hunter." This suggests Nimrod was a legendary figure even in ancient Israel—the archetype of the powerful warrior-king.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 10:10
export const genesis10_10_tokens: SourceToken[] = [
  { id: 'Gen.10.10.0', language: 'hebrew', text: 'וַתְּהִ֨י', transliteration: 'wattəhî', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'And was', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3fs' }, strongs: 'H1961', position: 0 },
  { id: 'Gen.10.10.1', language: 'hebrew', text: 'רֵאשִׁ֤ית', transliteration: 'rēʾšîṯ', lemma: 'רֵאשִׁית', lemmaTranslit: 'rēʾšîṯ', gloss: 'the beginning of', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H7225', position: 1 },
  { id: 'Gen.10.10.2', language: 'hebrew', text: 'מַמְלַכְתּוֹ֙', transliteration: 'mamlḵtô', lemma: 'מַמְלָכָה', lemmaTranslit: 'mamlāḵāh', gloss: 'his kingdom', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H4467', position: 2 },
  { id: 'Gen.10.10.3', language: 'hebrew', text: 'בָּבֶ֔ל', transliteration: 'bāḇel', lemma: 'בָּבֶל', lemmaTranslit: 'bāḇel', gloss: 'Babel', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H894', position: 3 },
  { id: 'Gen.10.10.4', language: 'hebrew', text: 'וְאֶ֖רֶךְ', transliteration: 'wəʾereḵ', lemma: 'אֶרֶךְ', lemmaTranslit: 'ʾereḵ', gloss: 'and Erech', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H751', position: 4 },
  { id: 'Gen.10.10.5', language: 'hebrew', text: 'וְאַכַּ֣ד', transliteration: 'wəʾakkḏ', lemma: 'אַכַּד', lemmaTranslit: 'ʾakkaḏ', gloss: 'and Akkad', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H390', position: 5 },
  { id: 'Gen.10.10.6', language: 'hebrew', text: 'וְכַלְנֵ֑ה', transliteration: 'wəḵalnēh', lemma: 'כַּלְנֵה', lemmaTranslit: 'kalnēh', gloss: 'and Calneh', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3641', position: 6 },
  { id: 'Gen.10.10.7', language: 'hebrew', text: 'בְּאֶ֖רֶץ', transliteration: 'bəʾereṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'in the land of', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H776', position: 7 },
  { id: 'Gen.10.10.8', language: 'hebrew', text: 'שִׁנְעָֽר', transliteration: 'šinʿār', lemma: 'שִׁנְעָר', lemmaTranslit: 'šinʿār', gloss: 'Shinar', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8152', position: 8 },
];

export const genesis10_10_translation: VerseTranslation = {
  verseRef: 'Gen.10.10',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And the beginning of his kingdom was Babel, Erech, Akkad, and Calneh, in the land of Shinar.', spans: [{ id: 'Gen.10.10.en.lit.0', text: 'And the beginning of his kingdom...', position: 0, sourceTokenIds: ['Gen.10.10.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'The first centers of his kingdom were Babylon, Uruk, Akkad and Kalneh, in Shinar.', spans: [{ id: 'Gen.10.10.en.idi.0', text: 'The first centers of his kingdom...', position: 0, sourceTokenIds: ['Gen.10.10.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis10_10_notes: StudyNote[] = [
  { id: 'Gen.10.10.note.1', verseRef: 'Gen.10.10', sourceTokenIds: ['Gen.10.10.3'], category: 'historical', title: 'Babel/Babylon', content: 'Babel (בָּבֶל) is Babylon. The name means "gate of god" in Akkadian (bāb-ili), though Genesis 11:9 offers a Hebrew etymology from balal "confuse." This links Nimrod to the Babel narrative that follows.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.10.10.note.2', verseRef: 'Gen.10.10', sourceTokenIds: ['Gen.10.10.4'], category: 'historical', title: 'Erech/Uruk', content: 'Erech is Uruk (modern Warka, Iraq), one of the earliest great cities of Mesopotamia. It was the legendary home of Gilgamesh. At its height (~3000 BC), Uruk was perhaps the largest city in the world.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.10.10.note.3', verseRef: 'Gen.10.10', sourceTokenIds: ['Gen.10.10.5'], category: 'historical', title: 'Akkad', content: 'Akkad (Agade) gave its name to the Akkadian Empire founded by Sargon (~2334 BC), the first true empire in history. The Akkadian language became the lingua franca of the ancient Near East.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.10.10.note.4', verseRef: 'Gen.10.10', sourceTokenIds: ['Gen.10.10.8'], category: 'geographical', title: 'Shinar', content: 'Shinar is the biblical name for southern Mesopotamia (Sumer/Babylonia). The Tower of Babel was built in "the land of Shinar" (11:2). Abraham came from this region (Ur of the Chaldeans).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 10:11
export const genesis10_11_tokens: SourceToken[] = [
  { id: 'Gen.10.11.0', language: 'hebrew', text: 'מִן־הָאָ֥רֶץ', transliteration: 'min-hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'From that land', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 0 },
  { id: 'Gen.10.11.1', language: 'hebrew', text: 'הַהִ֖וא', transliteration: 'hahîwʾ', lemma: 'הוּא', lemmaTranslit: 'hûʾ', gloss: 'that', morphology: { pos: 'pronoun', rawCode: 'Pdxfs' }, strongs: 'H1931', position: 1 },
  { id: 'Gen.10.11.2', language: 'hebrew', text: 'יָצָ֣א', transliteration: 'yāṣāʾ', lemma: 'יָצָא', lemmaTranslit: 'yāṣāʾ', gloss: 'went out', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H3318', position: 2 },
  { id: 'Gen.10.11.3', language: 'hebrew', text: 'אַשּׁ֑וּר', transliteration: 'ʾaššûr', lemma: 'אַשּׁוּר', lemmaTranslit: 'ʾaššûr', gloss: 'Asshur', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H804', position: 3 },
  { id: 'Gen.10.11.4', language: 'hebrew', text: 'וַיִּ֙בֶן֙', transliteration: 'wayyiḇen', lemma: 'בָּנָה', lemmaTranslit: 'bānāh', gloss: 'and he built', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H1129', position: 4 },
  { id: 'Gen.10.11.5', language: 'hebrew', text: 'אֶת־נִ֣ינְוֵ֔ה', transliteration: 'ʾeṯ-nînwēh', lemma: 'נִינְוֵה', lemmaTranslit: 'nînwēh', gloss: 'Nineveh', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5210', position: 5 },
  { id: 'Gen.10.11.6', language: 'hebrew', text: 'וְאֶת־רְחֹבֹ֥ת', transliteration: 'wəʾeṯ-rəḥōḇōṯ', lemma: 'רְחֹבוֹת', lemmaTranslit: 'rəḥōḇôṯ', gloss: 'and Rehoboth-Ir', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H7344', position: 6 },
  { id: 'Gen.10.11.7', language: 'hebrew', text: 'עִ֖יר', transliteration: 'ʿîr', lemma: 'עִיר', lemmaTranslit: 'ʿîr', gloss: 'city', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H5892', position: 7 },
  { id: 'Gen.10.11.8', language: 'hebrew', text: 'וְאֶת־כָּֽלַח', transliteration: 'wəʾeṯ-kālaḥ', lemma: 'כֶּלַח', lemmaTranslit: 'kelaḥ', gloss: 'and Calah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3625', position: 8 },
];

export const genesis10_11_translation: VerseTranslation = {
  verseRef: 'Gen.10.11',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'From that land he went out to Asshur, and he built Nineveh, Rehoboth-Ir, and Calah,', spans: [{ id: 'Gen.10.11.en.lit.0', text: 'From that land he went out...', position: 0, sourceTokenIds: ['Gen.10.11.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'From that land he went to Assyria, where he built Nineveh, Rehoboth Ir, Calah', spans: [{ id: 'Gen.10.11.en.idi.0', text: 'From that land he went to Assyria...', position: 0, sourceTokenIds: ['Gen.10.11.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis10_11_notes: StudyNote[] = [
  { id: 'Gen.10.11.note.1', verseRef: 'Gen.10.11', sourceTokenIds: ['Gen.10.11.3'], category: 'interpretive', title: 'Asshur', content: 'Hebrew allows either: (1) Nimrod went to Asshur (Assyria) and built these cities, or (2) Asshur (person, son of Shem) went out and built them. Most translations favor Nimrod as subject, showing his empire extended north to Assyria.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.10.11.note.2', verseRef: 'Gen.10.11', sourceTokenIds: ['Gen.10.11.5'], category: 'historical', title: 'Nineveh', content: 'Nineveh (modern Mosul area, Iraq) became capital of the Neo-Assyrian Empire. Jonah was sent to preach there. Nahum prophesied its destruction, fulfilled in 612 BC when Babylon conquered it.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 10:12
export const genesis10_12_tokens: SourceToken[] = [
  { id: 'Gen.10.12.0', language: 'hebrew', text: 'וְאֶת־רֶ֨סֶן֙', transliteration: 'wəʾeṯ-resen', lemma: 'רֶסֶן', lemmaTranslit: 'resen', gloss: 'and Resen', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H7449', position: 0 },
  { id: 'Gen.10.12.1', language: 'hebrew', text: 'בֵּ֣ין', transliteration: 'bên', lemma: 'בֵּין', lemmaTranslit: 'bên', gloss: 'between', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H996', position: 1 },
  { id: 'Gen.10.12.2', language: 'hebrew', text: 'נִֽינְוֵ֔ה', transliteration: 'nînwēh', lemma: 'נִינְוֵה', lemmaTranslit: 'nînwēh', gloss: 'Nineveh', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5210', position: 2 },
  { id: 'Gen.10.12.3', language: 'hebrew', text: 'וּבֵ֖ין', transliteration: 'ûḇên', lemma: 'בֵּין', lemmaTranslit: 'bên', gloss: 'and between', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H996', position: 3 },
  { id: 'Gen.10.12.4', language: 'hebrew', text: 'כָּ֑לַח', transliteration: 'kālaḥ', lemma: 'כֶּלַח', lemmaTranslit: 'kelaḥ', gloss: 'Calah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3625', position: 4 },
  { id: 'Gen.10.12.5', language: 'hebrew', text: 'הִ֖וא', transliteration: 'hîwʾ', lemma: 'הוּא', lemmaTranslit: 'hûʾ', gloss: 'that is', morphology: { pos: 'pronoun', person: '3', gender: 'feminine', number: 'singular', rawCode: 'Pp3fs' }, strongs: 'H1931', position: 5 },
  { id: 'Gen.10.12.6', language: 'hebrew', text: 'הָעִ֥יר', transliteration: 'hāʿîr', lemma: 'עִיר', lemmaTranslit: 'ʿîr', gloss: 'the city', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H5892', position: 6 },
  { id: 'Gen.10.12.7', language: 'hebrew', text: 'הַגְּדֹלָֽה', transliteration: 'haggəḏōlāh', lemma: 'גָּדוֹל', lemmaTranslit: 'gāḏôl', gloss: 'the great', morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', rawCode: 'Ajfsa' }, strongs: 'H1419', position: 7 },
];

export const genesis10_12_translation: VerseTranslation = {
  verseRef: 'Gen.10.12',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'and Resen between Nineveh and Calah; that is the great city.', spans: [{ id: 'Gen.10.12.en.lit.0', text: 'and Resen between Nineveh and Calah...', position: 0, sourceTokenIds: ['Gen.10.12.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'and Resen, which is between Nineveh and Calah—which is the great city.', spans: [{ id: 'Gen.10.12.en.idi.0', text: 'and Resen...', position: 0, sourceTokenIds: ['Gen.10.12.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis10_12_notes: StudyNote[] = [
  { id: 'Gen.10.12.note.1', verseRef: 'Gen.10.12', sourceTokenIds: ['Gen.10.12.6', 'Gen.10.12.7'], category: 'interpretive', title: 'The Great City', content: '"The great city" could refer to Nineveh (as in Jonah 1:2), Calah, Resen, or the entire urban complex. Nineveh and Calah were both major Assyrian capitals. The phrase may describe the metropolitan area spanning all four sites.', confidence: 'medium', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 10:13-14
export const genesis10_13_tokens: SourceToken[] = [
  { id: 'Gen.10.13.0', language: 'hebrew', text: 'וּמִצְרַ֡יִם', transliteration: 'ûmiṣrayim', lemma: 'מִצְרַיִם', lemmaTranslit: 'miṣrayim', gloss: 'And Mizraim', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H4714', position: 0 },
  { id: 'Gen.10.13.1', language: 'hebrew', text: 'יָלַ֞ד', transliteration: 'yālaḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'fathered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H3205', position: 1 },
  { id: 'Gen.10.13.2', language: 'hebrew', text: 'אֶת־לוּדִ֧ים', transliteration: 'ʾeṯ-lûḏîm', lemma: 'לוּדִים', lemmaTranslit: 'lûḏîm', gloss: 'the Ludim', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3866', position: 2 },
  { id: 'Gen.10.13.3', language: 'hebrew', text: 'וְאֶת־עֲנָמִ֛ים', transliteration: 'wəʾeṯ-ʿănāmîm', lemma: 'עֲנָמִים', lemmaTranslit: 'ʿănāmîm', gloss: 'and the Anamim', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H6047', position: 3 },
  { id: 'Gen.10.13.4', language: 'hebrew', text: 'וְאֶת־לְהָבִ֖ים', transliteration: 'wəʾeṯ-ləhāḇîm', lemma: 'לְהָבִים', lemmaTranslit: 'ləhāḇîm', gloss: 'and the Lehabim', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3853', position: 4 },
  { id: 'Gen.10.13.5', language: 'hebrew', text: 'וְאֶת־נַפְתֻּחִֽים', transliteration: 'wəʾeṯ-nap̄tuḥîm', lemma: 'נַפְתֻּחִים', lemmaTranslit: 'nap̄tuḥîm', gloss: 'and the Naphtuhim', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5320', position: 5 },
];

export const genesis10_13_translation: VerseTranslation = {
  verseRef: 'Gen.10.13',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And Mizraim fathered the Ludim, the Anamim, the Lehabim, and the Naphtuhim,', spans: [{ id: 'Gen.10.13.en.lit.0', text: 'And Mizraim fathered the Ludim...', position: 0, sourceTokenIds: ['Gen.10.13.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Egypt was the father of the Ludites, Anamites, Lehabites, Naphtuhites,', spans: [{ id: 'Gen.10.13.en.idi.0', text: 'Egypt was the father of the Ludites...', position: 0, sourceTokenIds: ['Gen.10.13.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis10_13_notes: StudyNote[] = [
  { id: 'Gen.10.13.note.1', verseRef: 'Gen.10.13', sourceTokenIds: ['Gen.10.13.2'], category: 'historical', title: 'Ludim', content: 'The Ludim (different from Semitic Lud in v. 22) are likely an African people west of Egypt, possibly Libyans. Jeremiah 46:9 lists "Ludim" alongside Cush and Put as Egyptian allies.', confidence: 'medium', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const genesis10_14_tokens: SourceToken[] = [
  { id: 'Gen.10.14.0', language: 'hebrew', text: 'וְאֶת־פַּתְרֻסִ֞ים', transliteration: 'wəʾeṯ-paṯrusîm', lemma: 'פַּתְרֻסִים', lemmaTranslit: 'paṯrusîm', gloss: 'and the Pathrusim', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H6625', position: 0 },
  { id: 'Gen.10.14.1', language: 'hebrew', text: 'וְאֶת־כַּסְלֻחִ֗ים', transliteration: 'wəʾeṯ-kaslḥîm', lemma: 'כַּסְלֻחִים', lemmaTranslit: 'kaslḥîm', gloss: 'and the Casluhim', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3695', position: 1 },
  { id: 'Gen.10.14.2', language: 'hebrew', text: 'אֲשֶׁ֨ר', transliteration: 'ʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'from whom', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 2 },
  { id: 'Gen.10.14.3', language: 'hebrew', text: 'יָצְא֥וּ', transliteration: 'yāṣəʾû', lemma: 'יָצָא', lemmaTranslit: 'yāṣāʾ', gloss: 'came', morphology: { pos: 'verb', person: '3', gender: 'common', number: 'plural', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3cp' }, strongs: 'H3318', position: 3 },
  { id: 'Gen.10.14.4', language: 'hebrew', text: 'מִשָּׁ֛ם', transliteration: 'miššām', lemma: 'שָׁם', lemmaTranslit: 'šām', gloss: 'from there', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H8033', position: 4 },
  { id: 'Gen.10.14.5', language: 'hebrew', text: 'פְּלִשְׁתִּ֖ים', transliteration: 'pəlištîm', lemma: 'פְּלִשְׁתִּי', lemmaTranslit: 'pəlištî', gloss: 'the Philistines', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H6430', position: 5 },
  { id: 'Gen.10.14.6', language: 'hebrew', text: 'וְאֶת־כַּפְתֹּרִֽים', transliteration: 'wəʾeṯ-kap̄tōrîm', lemma: 'כַּפְתֹּרִים', lemmaTranslit: 'kap̄tōrîm', gloss: 'and the Caphtorim', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3732', position: 6 },
];

export const genesis10_14_translation: VerseTranslation = {
  verseRef: 'Gen.10.14',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'the Pathrusim, the Casluhim (from whom came the Philistines), and the Caphtorim.', spans: [{ id: 'Gen.10.14.en.lit.0', text: 'the Pathrusim, the Casluhim...', position: 0, sourceTokenIds: ['Gen.10.14.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Pathrusites, Kasluhites (from whom the Philistines came) and Caphtorites.', spans: [{ id: 'Gen.10.14.en.idi.0', text: 'Pathrusites, Kasluhites...', position: 0, sourceTokenIds: ['Gen.10.14.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis10_14_notes: StudyNote[] = [
  { id: 'Gen.10.14.note.1', verseRef: 'Gen.10.14', sourceTokenIds: ['Gen.10.14.5'], category: 'historical', title: 'Philistines', content: 'The Philistines are connected to Egypt here, though other texts associate them with Caphtor (Crete/Aegean). They were part of the "Sea Peoples" who invaded the eastern Mediterranean ~1200 BC. They became Israel\'s major coastal enemy.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.10.14.note.2', verseRef: 'Gen.10.14', sourceTokenIds: ['Gen.10.14.6'], category: 'historical', title: 'Caphtorim', content: 'Caphtor is usually identified with Crete (or possibly Cyprus). Amos 9:7 and Jeremiah 47:4 state that God brought the Philistines from Caphtor. The connection to Egypt may reflect the complex migration patterns of these peoples.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 10:15-18
export const genesis10_15_tokens: SourceToken[] = [
  { id: 'Gen.10.15.0', language: 'hebrew', text: 'וּכְנַ֗עַן', transliteration: 'ûḵənaʿan', lemma: 'כְּנַעַן', lemmaTranslit: 'kənaʿan', gloss: 'And Canaan', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3667', position: 0 },
  { id: 'Gen.10.15.1', language: 'hebrew', text: 'יָלַ֛ד', transliteration: 'yālaḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'fathered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H3205', position: 1 },
  { id: 'Gen.10.15.2', language: 'hebrew', text: 'אֶת־צִידֹ֥ן', transliteration: 'ʾeṯ-ṣîḏōn', lemma: 'צִידוֹן', lemmaTranslit: 'ṣîḏôn', gloss: 'Sidon', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H6721', position: 2 },
  { id: 'Gen.10.15.3', language: 'hebrew', text: 'בְּכֹר֖וֹ', transliteration: 'bəḵōrô', lemma: 'בְּכוֹר', lemmaTranslit: 'bəḵôr', gloss: 'his firstborn', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H1060', position: 3 },
  { id: 'Gen.10.15.4', language: 'hebrew', text: 'וְאֶת־חֵֽת', transliteration: 'wəʾeṯ-ḥēṯ', lemma: 'חֵת', lemmaTranslit: 'ḥēṯ', gloss: 'and Heth', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2845', position: 4 },
];

export const genesis10_15_translation: VerseTranslation = {
  verseRef: 'Gen.10.15',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And Canaan fathered Sidon his firstborn, and Heth,', spans: [{ id: 'Gen.10.15.en.lit.0', text: 'And Canaan fathered Sidon...', position: 0, sourceTokenIds: ['Gen.10.15.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Canaan was the father of Sidon his firstborn, and of the Hittites,', spans: [{ id: 'Gen.10.15.en.idi.0', text: 'Canaan was the father of Sidon...', position: 0, sourceTokenIds: ['Gen.10.15.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis10_15_notes: StudyNote[] = [
  { id: 'Gen.10.15.note.1', verseRef: 'Gen.10.15', sourceTokenIds: ['Gen.10.15.2'], category: 'historical', title: 'Sidon', content: 'Sidon was a major Phoenician port city (modern Saida, Lebanon). Often paired with Tyre, it was famous for maritime trade and purple dye. "Sidonians" became a general term for Phoenicians (1 Kings 16:31).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.10.15.note.2', verseRef: 'Gen.10.15', sourceTokenIds: ['Gen.10.15.4'], category: 'historical', title: 'Heth/Hittites', content: 'Heth is the ancestor of the Hittites (Hebrew ḥittî). In Genesis, Hittites are local residents of Canaan (Gen 23, 27:46). Historically, the great Hittite Empire was based in Anatolia (modern Turkey), raising questions about the biblical connection.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const genesis10_16_tokens: SourceToken[] = [
  { id: 'Gen.10.16.0', language: 'hebrew', text: 'וְאֶת־הַיְבוּסִי֙', transliteration: 'wəʾeṯ-hayyəḇûsî', lemma: 'יְבוּסִי', lemmaTranslit: 'yəḇûsî', gloss: 'and the Jebusite', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2983', position: 0 },
  { id: 'Gen.10.16.1', language: 'hebrew', text: 'וְאֶת־הָ֣אֱמֹרִ֔י', transliteration: 'wəʾeṯ-hāʾĕmōrî', lemma: 'אֱמֹרִי', lemmaTranslit: 'ʾĕmōrî', gloss: 'and the Amorite', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H567', position: 1 },
  { id: 'Gen.10.16.2', language: 'hebrew', text: 'וְאֵ֖ת', transliteration: 'wəʾēṯ', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: 'and', morphology: { pos: 'particle', rawCode: 'To' }, strongs: 'H853', position: 2 },
  { id: 'Gen.10.16.3', language: 'hebrew', text: 'הַגִּרְגָּשִֽׁי', transliteration: 'haggirggāšî', lemma: 'גִּרְגָּשִׁי', lemmaTranslit: 'girggāšî', gloss: 'the Girgashite', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H1622', position: 3 },
];

export const genesis10_16_translation: VerseTranslation = {
  verseRef: 'Gen.10.16',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'and the Jebusite, the Amorite, and the Girgashite,', spans: [{ id: 'Gen.10.16.en.lit.0', text: 'and the Jebusite, the Amorite...', position: 0, sourceTokenIds: ['Gen.10.16.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Jebusites, Amorites, Girgashites,', spans: [{ id: 'Gen.10.16.en.idi.0', text: 'Jebusites, Amorites, Girgashites...', position: 0, sourceTokenIds: ['Gen.10.16.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis10_16_notes: StudyNote[] = [
  { id: 'Gen.10.16.note.1', verseRef: 'Gen.10.16', sourceTokenIds: ['Gen.10.16.0'], category: 'historical', title: 'Jebusites', content: 'The Jebusites inhabited Jerusalem (called "Jebus" in Judg 19:10-11). David captured their stronghold (2 Sam 5:6-8), and Jerusalem became Israel\'s capital. Araunah the Jebusite sold David the threshing floor for the temple site.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.10.16.note.2', verseRef: 'Gen.10.16', sourceTokenIds: ['Gen.10.16.1'], category: 'historical', title: 'Amorites', content: 'The Amorites were a major Canaanite people. "Amorite" sometimes serves as a general term for pre-Israelite inhabitants (Gen 15:16). They had kingdoms on both sides of the Jordan; Sihon and Og were Amorite kings defeated by Israel.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const genesis10_17_tokens: SourceToken[] = [
  { id: 'Gen.10.17.0', language: 'hebrew', text: 'וְאֶת־הַחִוִּ֑י', transliteration: 'wəʾeṯ-haḥiwwî', lemma: 'חִוִּי', lemmaTranslit: 'ḥiwwî', gloss: 'and the Hivite', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2340', position: 0 },
  { id: 'Gen.10.17.1', language: 'hebrew', text: 'וְאֶת־הַֽעַרְקִ֖י', transliteration: 'wəʾeṯ-haʿarqî', lemma: 'עַרְקִי', lemmaTranslit: 'ʿarqî', gloss: 'and the Arkite', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H6208', position: 1 },
  { id: 'Gen.10.17.2', language: 'hebrew', text: 'וְאֶת־הַסִּינִֽי', transliteration: 'wəʾeṯ-hassînî', lemma: 'סִינִי', lemmaTranslit: 'sînî', gloss: 'and the Sinite', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5513', position: 2 },
];

export const genesis10_17_translation: VerseTranslation = {
  verseRef: 'Gen.10.17',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'and the Hivite, the Arkite, and the Sinite,', spans: [{ id: 'Gen.10.17.en.lit.0', text: 'and the Hivite, the Arkite...', position: 0, sourceTokenIds: ['Gen.10.17.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Hivites, Arkites, Sinites,', spans: [{ id: 'Gen.10.17.en.idi.0', text: 'Hivites, Arkites, Sinites...', position: 0, sourceTokenIds: ['Gen.10.17.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis10_17_notes: StudyNote[] = [];

export const genesis10_18_tokens: SourceToken[] = [
  { id: 'Gen.10.18.0', language: 'hebrew', text: 'וְאֶת־הָֽאַרְוָדִ֞י', transliteration: 'wəʾeṯ-hāʾarwāḏî', lemma: 'אַרְוָדִי', lemmaTranslit: 'ʾarwāḏî', gloss: 'and the Arvadite', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H721', position: 0 },
  { id: 'Gen.10.18.1', language: 'hebrew', text: 'וְאֶת־הַצְּמָרִ֗י', transliteration: 'wəʾeṯ-haṣṣəmārî', lemma: 'צְמָרִי', lemmaTranslit: 'ṣəmārî', gloss: 'and the Zemarite', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H6786', position: 1 },
  { id: 'Gen.10.18.2', language: 'hebrew', text: 'וְאֶת־הַֽחֲמָתִ֑י', transliteration: 'wəʾeṯ-haḥămāṯî', lemma: 'חֲמָתִי', lemmaTranslit: 'ḥămāṯî', gloss: 'and the Hamathite', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2577', position: 2 },
  { id: 'Gen.10.18.3', language: 'hebrew', text: 'וְאַחַ֣ר', transliteration: 'wəʾaḥar', lemma: 'אַחַר', lemmaTranslit: 'ʾaḥar', gloss: 'and afterward', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H310', position: 3 },
  { id: 'Gen.10.18.4', language: 'hebrew', text: 'נָפֹ֔צוּ', transliteration: 'nāp̄ōṣû', lemma: 'פּוּץ', lemmaTranslit: 'pûṣ', gloss: 'were scattered', morphology: { pos: 'verb', person: '3', gender: 'common', number: 'plural', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3cp' }, strongs: 'H6327', position: 4 },
  { id: 'Gen.10.18.5', language: 'hebrew', text: 'מִשְׁפְּח֖וֹת', transliteration: 'mišpəḥôṯ', lemma: 'מִשְׁפָּחָה', lemmaTranslit: 'mišpāḥāh', gloss: 'the clans of', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'construct', rawCode: 'Ncfpc' }, strongs: 'H4940', position: 5 },
  { id: 'Gen.10.18.6', language: 'hebrew', text: 'הַכְּנַעֲנִֽי', transliteration: 'hakkənaʿănî', lemma: 'כְּנַעֲנִי', lemmaTranslit: 'kənaʿănî', gloss: 'the Canaanite', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3669', position: 6 },
];

export const genesis10_18_translation: VerseTranslation = {
  verseRef: 'Gen.10.18',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'and the Arvadite, the Zemarite, and the Hamathite. And afterward the clans of the Canaanite were scattered.', spans: [{ id: 'Gen.10.18.en.lit.0', text: 'and the Arvadite, the Zemarite...', position: 0, sourceTokenIds: ['Gen.10.18.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Arvadites, Zemarites and Hamathites. Later the Canaanite clans scattered', spans: [{ id: 'Gen.10.18.en.idi.0', text: 'Arvadites, Zemarites and Hamathites...', position: 0, sourceTokenIds: ['Gen.10.18.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis10_18_notes: StudyNote[] = [
  { id: 'Gen.10.18.note.1', verseRef: 'Gen.10.18', sourceTokenIds: ['Gen.10.18.2'], category: 'historical', title: 'Hamathite', content: 'Hamath was an important Syrian city-state on the Orontes River (modern Hama). It marked the northern boundary of the promised land (Num 34:8, 1 Kings 8:65). Lebo-Hamath ("entrance of Hamath") was a key geographical marker.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 10:19-20
export const genesis10_19_tokens: SourceToken[] = [
  { id: 'Gen.10.19.0', language: 'hebrew', text: 'וַיְהִ֞י', transliteration: 'wayəhî', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'And was', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H1961', position: 0 },
  { id: 'Gen.10.19.1', language: 'hebrew', text: 'גְּבוּל֙', transliteration: 'gəḇûl', lemma: 'גְּבוּל', lemmaTranslit: 'gəḇûl', gloss: 'the border of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H1366', position: 1 },
  { id: 'Gen.10.19.2', language: 'hebrew', text: 'הַֽכְּנַעֲנִ֔י', transliteration: 'hakkənaʿănî', lemma: 'כְּנַעֲנִי', lemmaTranslit: 'kənaʿănî', gloss: 'the Canaanite', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3669', position: 2 },
  { id: 'Gen.10.19.3', language: 'hebrew', text: 'מִצִּידֹ֛ן', transliteration: 'miṣṣîḏōn', lemma: 'צִידוֹן', lemmaTranslit: 'ṣîḏôn', gloss: 'from Sidon', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H6721', position: 3 },
  { id: 'Gen.10.19.4', language: 'hebrew', text: 'בֹּאֲכָ֥ה', transliteration: 'bōʾăḵāh', lemma: 'בּוֹא', lemmaTranslit: 'bôʾ', gloss: 'as you go', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'VqIc' }, strongs: 'H935', position: 4 },
  { id: 'Gen.10.19.5', language: 'hebrew', text: 'גְרָ֖רָה', transliteration: 'gərārāh', lemma: 'גְּרָר', lemmaTranslit: 'gərār', gloss: 'toward Gerar', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H1642', position: 5 },
  { id: 'Gen.10.19.6', language: 'hebrew', text: 'עַד־עַזָּ֑ה', transliteration: 'ʿaḏ-ʿazzāh', lemma: 'עַזָּה', lemmaTranslit: 'ʿazzāh', gloss: 'as far as Gaza', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5804', position: 6 },
  { id: 'Gen.10.19.7', language: 'hebrew', text: 'בֹּאֲכָ֞ה', transliteration: 'bōʾăḵāh', lemma: 'בּוֹא', lemmaTranslit: 'bôʾ', gloss: 'as you go', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'VqIc' }, strongs: 'H935', position: 7 },
  { id: 'Gen.10.19.8', language: 'hebrew', text: 'סְדֹ֧מָה', transliteration: 'səḏōmāh', lemma: 'סְדֹם', lemmaTranslit: 'səḏōm', gloss: 'toward Sodom', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5467', position: 8 },
  { id: 'Gen.10.19.9', language: 'hebrew', text: 'וַעֲמֹרָ֛ה', transliteration: 'waʿămōrāh', lemma: 'עֲמֹרָה', lemmaTranslit: 'ʿămōrāh', gloss: 'and Gomorrah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H6017', position: 9 },
  { id: 'Gen.10.19.10', language: 'hebrew', text: 'וְאַדְמָ֥ה', transliteration: 'wəʾaḏmāh', lemma: 'אַדְמָה', lemmaTranslit: 'ʾaḏmāh', gloss: 'and Admah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H126', position: 10 },
  { id: 'Gen.10.19.11', language: 'hebrew', text: 'וּצְבֹיִ֖ם', transliteration: 'ûṣəḇōyim', lemma: 'צְבוֹיִים', lemmaTranslit: 'ṣəḇôyîm', gloss: 'and Zeboiim', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H6636', position: 11 },
  { id: 'Gen.10.19.12', language: 'hebrew', text: 'עַד־לָֽשַׁע', transliteration: 'ʿaḏ-lāšaʿ', lemma: 'לֶשַׁע', lemmaTranslit: 'lešaʿ', gloss: 'as far as Lasha', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3962', position: 12 },
];

export const genesis10_19_translation: VerseTranslation = {
  verseRef: 'Gen.10.19',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And the border of the Canaanite was from Sidon, as you go toward Gerar, as far as Gaza; as you go toward Sodom, Gomorrah, Admah, and Zeboiim, as far as Lasha.', spans: [{ id: 'Gen.10.19.en.lit.0', text: 'And the border of the Canaanite...', position: 0, sourceTokenIds: ['Gen.10.19.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'and the borders of Canaan reached from Sidon toward Gerar as far as Gaza, and then toward Sodom, Gomorrah, Admah and Zeboyim, as far as Lasha.', spans: [{ id: 'Gen.10.19.en.idi.0', text: 'and the borders of Canaan reached...', position: 0, sourceTokenIds: ['Gen.10.19.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis10_19_notes: StudyNote[] = [
  { id: 'Gen.10.19.note.1', verseRef: 'Gen.10.19', sourceTokenIds: ['Gen.10.19.8', 'Gen.10.19.9'], category: 'geographical', title: 'Cities of the Plain', content: 'Sodom, Gomorrah, Admah, and Zeboiim are the "cities of the plain" destroyed in Genesis 19. Their inclusion here shows they were Canaanite cities, underscoring the theme that Canaanite wickedness brought divine judgment.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.10.19.note.2', verseRef: 'Gen.10.19', sourceTokenIds: ['Gen.10.19.1', 'Gen.10.19.2'], category: 'geographical', title: 'Canaan\'s Borders', content: 'The borders describe Canaan from north (Sidon) to south (Gaza) along the coast, and inland to the Dead Sea region. This roughly corresponds to the land promised to Abraham\'s descendants (Gen 15:18-21).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const genesis10_20_tokens: SourceToken[] = [
  { id: 'Gen.10.20.0', language: 'hebrew', text: 'אֵ֣לֶּה', transliteration: 'ʾēlleh', lemma: 'אֵלֶּה', lemmaTranslit: 'ʾēlleh', gloss: 'These', morphology: { pos: 'pronoun', rawCode: 'Pdxcp' }, strongs: 'H428', position: 0 },
  { id: 'Gen.10.20.1', language: 'hebrew', text: 'בְנֵי־חָ֔ם', transliteration: 'ḇənê-ḥām', lemma: 'חָם', lemmaTranslit: 'ḥām', gloss: 'the sons of Ham', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2526', position: 1 },
  { id: 'Gen.10.20.2', language: 'hebrew', text: 'לְמִשְׁפְּחֹתָ֖ם', transliteration: 'ləmišpəḥōṯām', lemma: 'מִשְׁפָּחָה', lemmaTranslit: 'mišpāḥāh', gloss: 'according to their clans', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'construct', rawCode: 'Ncfpc' }, strongs: 'H4940', position: 2 },
  { id: 'Gen.10.20.3', language: 'hebrew', text: 'לִלְשֹׁנֹתָ֑ם', transliteration: 'lilšōnōṯām', lemma: 'לָשׁוֹן', lemmaTranslit: 'lāšôn', gloss: 'according to their languages', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'construct', rawCode: 'Ncfpc' }, strongs: 'H3956', position: 3 },
  { id: 'Gen.10.20.4', language: 'hebrew', text: 'בְּאַרְצֹתָ֖ם', transliteration: 'bəʾarṣōṯām', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'in their lands', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'construct', rawCode: 'Ncfpc' }, strongs: 'H776', position: 4 },
  { id: 'Gen.10.20.5', language: 'hebrew', text: 'בְּגוֹיֵהֶֽם', transliteration: 'bəḡôyēhem', lemma: 'גּוֹי', lemmaTranslit: 'gôy', gloss: 'in their nations', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H1471', position: 5 },
];

export const genesis10_20_translation: VerseTranslation = {
  verseRef: 'Gen.10.20',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'These are the sons of Ham, according to their clans, according to their languages, in their lands, in their nations.', spans: [{ id: 'Gen.10.20.en.lit.0', text: 'These are the sons of Ham...', position: 0, sourceTokenIds: ['Gen.10.20.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'These are the sons of Ham by their clans and languages, in their territories and nations.', spans: [{ id: 'Gen.10.20.en.idi.0', text: 'These are the sons of Ham...', position: 0, sourceTokenIds: ['Gen.10.20.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis10_20_notes: StudyNote[] = [
  { id: 'Gen.10.20.note.1', verseRef: 'Gen.10.20', sourceTokenIds: ['Gen.10.20.1'], category: 'theological', title: 'Hamites and Israel', content: 'Ham\'s descendants occupied the lands that would most directly impact Israel: Egypt (oppression/exodus), Canaan (conquest), and Mesopotamia (exile via Nimrod\'s cities). The Table of Nations thus foreshadows Israel\'s national story.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Export all verses
export const genesis10_6_20_verses = [
  { ref: 'Gen.10.6', sourceTokens: genesis10_6_tokens, translation: genesis10_6_translation, notes: genesis10_6_notes },
  { ref: 'Gen.10.7', sourceTokens: genesis10_7_tokens, translation: genesis10_7_translation, notes: genesis10_7_notes },
  { ref: 'Gen.10.8', sourceTokens: genesis10_8_tokens, translation: genesis10_8_translation, notes: genesis10_8_notes },
  { ref: 'Gen.10.9', sourceTokens: genesis10_9_tokens, translation: genesis10_9_translation, notes: genesis10_9_notes },
  { ref: 'Gen.10.10', sourceTokens: genesis10_10_tokens, translation: genesis10_10_translation, notes: genesis10_10_notes },
  { ref: 'Gen.10.11', sourceTokens: genesis10_11_tokens, translation: genesis10_11_translation, notes: genesis10_11_notes },
  { ref: 'Gen.10.12', sourceTokens: genesis10_12_tokens, translation: genesis10_12_translation, notes: genesis10_12_notes },
  { ref: 'Gen.10.13', sourceTokens: genesis10_13_tokens, translation: genesis10_13_translation, notes: genesis10_13_notes },
  { ref: 'Gen.10.14', sourceTokens: genesis10_14_tokens, translation: genesis10_14_translation, notes: genesis10_14_notes },
  { ref: 'Gen.10.15', sourceTokens: genesis10_15_tokens, translation: genesis10_15_translation, notes: genesis10_15_notes },
  { ref: 'Gen.10.16', sourceTokens: genesis10_16_tokens, translation: genesis10_16_translation, notes: genesis10_16_notes },
  { ref: 'Gen.10.17', sourceTokens: genesis10_17_tokens, translation: genesis10_17_translation, notes: genesis10_17_notes },
  { ref: 'Gen.10.18', sourceTokens: genesis10_18_tokens, translation: genesis10_18_translation, notes: genesis10_18_notes },
  { ref: 'Gen.10.19', sourceTokens: genesis10_19_tokens, translation: genesis10_19_translation, notes: genesis10_19_notes },
  { ref: 'Gen.10.20', sourceTokens: genesis10_20_tokens, translation: genesis10_20_translation, notes: genesis10_20_notes },
];
