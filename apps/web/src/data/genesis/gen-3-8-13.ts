/**
 * Genesis 3:8-13 - Hebrew morphological data
 * God confronts Adam and Eve: hiding, questions, blame
 * Source: Open Hebrew Bible (Tanach.us) - Public Domain
 */

import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

// Genesis 3:8 - They heard the sound of the LORD God walking
export const genesis3_8_tokens: SourceToken[] = [
  { id: 'Gen.3.8.0', language: 'hebrew', text: 'וַֽיִּשְׁמְע֞וּ', transliteration: 'wayyišməʿû', lemma: 'שָׁמַע', lemmaTranslit: 'šāmaʿ', gloss: 'And they heard', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H8085', position: 0 },
  { id: 'Gen.3.8.1', language: 'hebrew', text: 'אֶת־ק֨וֹל', transliteration: 'ʾeṯ-qôl', lemma: 'קוֹל', lemmaTranslit: 'qôl', gloss: 'the sound of', glossExtended: 'voice, sound', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H6963', position: 1 },
  { id: 'Gen.3.8.2', language: 'hebrew', text: 'יְהוָ֧ה', transliteration: 'yhwh', lemma: 'יְהוָה', lemmaTranslit: 'yhwh', gloss: 'YHWH', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 2 },
  { id: 'Gen.3.8.3', language: 'hebrew', text: 'אֱלֹהִ֛ים', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H430', position: 3 },
  { id: 'Gen.3.8.4', language: 'hebrew', text: 'מִתְהַלֵּ֥ךְ', transliteration: 'miṯhallēḵ', lemma: 'הָלַךְ', lemmaTranslit: 'hālaḵ', gloss: 'walking', morphology: { pos: 'verb', mood: 'participle', stem: 'hithpael', rawCode: 'Vtrms' }, strongs: 'H1980', position: 4 },
  { id: 'Gen.3.8.5', language: 'hebrew', text: 'בַּגָּ֖ן', transliteration: 'baggān', lemma: 'גַּן', lemmaTranslit: 'gan', gloss: 'in the garden', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H1588', position: 5 },
  { id: 'Gen.3.8.6', language: 'hebrew', text: 'לְר֣וּחַ', transliteration: 'lərûaḥ', lemma: 'רוּחַ', lemmaTranslit: 'rûaḥ', gloss: 'at the breeze of', glossExtended: 'wind, spirit, breeze', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H7307', position: 6 },
  { id: 'Gen.3.8.7', language: 'hebrew', text: 'הַיּ֑וֹם', transliteration: 'hayyôm', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'the day', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3117', position: 7 },
  { id: 'Gen.3.8.8', language: 'hebrew', text: 'וַיִּתְחַבֵּ֨א', transliteration: 'wayyiṯḥabbēʾ', lemma: 'חָבָא', lemmaTranslit: 'ḥāḇāʾ', gloss: 'and hid themselves', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hithpael', rawCode: 'Vtw3ms' }, strongs: 'H2244', position: 8 },
  { id: 'Gen.3.8.9', language: 'hebrew', text: 'הָֽאָדָ֜ם', transliteration: 'hāʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'the man', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 9 },
  { id: 'Gen.3.8.10', language: 'hebrew', text: 'וְאִשְׁתּ֗וֹ', transliteration: 'wəʾištô', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'and his wife', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H802', position: 10 },
  { id: 'Gen.3.8.11', language: 'hebrew', text: 'מִפְּנֵי֙', transliteration: 'mippənê', lemma: 'פָּנִים', lemmaTranslit: 'pānîm', gloss: 'from the presence of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H6440', position: 11 },
  { id: 'Gen.3.8.12', language: 'hebrew', text: 'יְהוָ֣ה', transliteration: 'yhwh', lemma: 'יְהוָה', lemmaTranslit: 'yhwh', gloss: 'YHWH', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 12 },
  { id: 'Gen.3.8.13', language: 'hebrew', text: 'אֱלֹהִ֔ים', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H430', position: 13 },
  { id: 'Gen.3.8.14', language: 'hebrew', text: 'בְּת֖וֹךְ', transliteration: 'bəṯôḵ', lemma: 'תָּוֶךְ', lemmaTranslit: 'tāweḵ', gloss: 'among', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H8432', position: 14 },
  { id: 'Gen.3.8.15', language: 'hebrew', text: 'עֵ֥ץ', transliteration: 'ʿēṣ', lemma: 'עֵץ', lemmaTranslit: 'ʿēṣ', gloss: 'trees of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H6086', position: 15 },
  { id: 'Gen.3.8.16', language: 'hebrew', text: 'הַגָּֽן', transliteration: 'haggān', lemma: 'גַּן', lemmaTranslit: 'gan', gloss: 'the garden', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H1588', position: 16 },
];

export const genesis3_8_translation: VerseTranslation = {
  verseRef: 'Gen.3.8',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And they heard the sound of YHWH God walking in the garden at the breeze of the day, and hid the man and his wife from the presence of YHWH God among the trees of the garden.', spans: [{ id: 'Gen.3.8.en.lit.0', text: 'And they heard the sound of YHWH God walking...', position: 0, sourceTokenIds: ['Gen.3.8.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'And they heard the sound of the LORD God walking in the garden in the cool of the day, and the man and his wife hid themselves from the presence of the LORD God among the trees of the garden.', spans: [{ id: 'Gen.3.8.en.idi.0', text: 'And they heard the sound of the LORD God walking...', position: 0, sourceTokenIds: ['Gen.3.8.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis3_8_notes: StudyNote[] = [
  { id: 'Gen.3.8.note.1', verseRef: 'Gen.3.8', sourceTokenIds: ['Gen.3.8.4'], category: 'theological', title: 'God Walking', content: 'The anthropomorphic image of God "walking" suggests intimate fellowship that was previously normal. Sin disrupts this communion.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.3.8.note.2', verseRef: 'Gen.3.8', sourceTokenIds: ['Gen.3.8.6', 'Gen.3.8.7'], category: 'lexical', title: 'Cool of the Day', content: 'Literally "at the wind/spirit of the day"—likely the evening breeze, a pleasant time for walking.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 3:9 - Where are you?
export const genesis3_9_tokens: SourceToken[] = [
  { id: 'Gen.3.9.0', language: 'hebrew', text: 'וַיִּקְרָ֛א', transliteration: 'wayyiqrāʾ', lemma: 'קָרָא', lemmaTranslit: 'qārāʾ', gloss: 'And called', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H7121', position: 0 },
  { id: 'Gen.3.9.1', language: 'hebrew', text: 'יְהוָ֥ה', transliteration: 'yhwh', lemma: 'יְהוָה', lemmaTranslit: 'yhwh', gloss: 'YHWH', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 1 },
  { id: 'Gen.3.9.2', language: 'hebrew', text: 'אֱלֹהִ֖ים', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H430', position: 2 },
  { id: 'Gen.3.9.3', language: 'hebrew', text: 'אֶל־הָֽאָדָ֑ם', transliteration: 'ʾel-hāʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'to the man', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 3 },
  { id: 'Gen.3.9.4', language: 'hebrew', text: 'וַיֹּ֥אמֶר', transliteration: 'wayyōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'and said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H559', position: 4 },
  { id: 'Gen.3.9.5', language: 'hebrew', text: 'ל֖וֹ', transliteration: 'lô', lemma: 'לְ', lemmaTranslit: 'lə', gloss: 'to him', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H9005', position: 5 },
  { id: 'Gen.3.9.6', language: 'hebrew', text: 'אַיֶּֽכָּה', transliteration: 'ʾayyekkāh', lemma: 'אֵי', lemmaTranslit: 'ʾêy', gloss: 'Where are you?', glossExtended: 'where? (with 2ms suffix)', morphology: { pos: 'pronoun', rawCode: 'Pi' }, strongs: 'H335', position: 6 },
];

export const genesis3_9_translation: VerseTranslation = {
  verseRef: 'Gen.3.9',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And called YHWH God to the man and said to him: Where are you?', spans: [{ id: 'Gen.3.9.en.lit.0', text: 'And called YHWH God to the man...', position: 0, sourceTokenIds: ['Gen.3.9.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'But the LORD God called to the man and said to him, "Where are you?"', spans: [{ id: 'Gen.3.9.en.idi.0', text: 'But the LORD God called to the man...', position: 0, sourceTokenIds: ['Gen.3.9.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis3_9_notes: StudyNote[] = [
  { id: 'Gen.3.9.note.1', verseRef: 'Gen.3.9', sourceTokenIds: ['Gen.3.9.6'], category: 'theological', title: 'Where Are You?', content: 'God\'s question is not for information—He is omniscient. It is an invitation for Adam to confess, giving opportunity for repentance. God pursues the sinner.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 3:10 - I heard...I was afraid...I was naked
export const genesis3_10_tokens: SourceToken[] = [
  { id: 'Gen.3.10.0', language: 'hebrew', text: 'וַיֹּ֕אמֶר', transliteration: 'wayyōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'And he said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H559', position: 0 },
  { id: 'Gen.3.10.1', language: 'hebrew', text: 'אֶת־קֹלְךָ֥', transliteration: 'ʾeṯ-qōləḵā', lemma: 'קוֹל', lemmaTranslit: 'qôl', gloss: 'Your voice', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H6963', position: 1 },
  { id: 'Gen.3.10.2', language: 'hebrew', text: 'שָׁמַ֖עְתִּי', transliteration: 'šāmaʿtî', lemma: 'שָׁמַע', lemmaTranslit: 'šāmaʿ', gloss: 'I heard', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp1cs' }, strongs: 'H8085', position: 2 },
  { id: 'Gen.3.10.3', language: 'hebrew', text: 'בַּגָּ֑ן', transliteration: 'baggān', lemma: 'גַּן', lemmaTranslit: 'gan', gloss: 'in the garden', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H1588', position: 3 },
  { id: 'Gen.3.10.4', language: 'hebrew', text: 'וָאִירָ֛א', transliteration: 'wāʾîrāʾ', lemma: 'יָרֵא', lemmaTranslit: 'yārēʾ', gloss: 'and I was afraid', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw1cs' }, strongs: 'H3372', position: 4 },
  { id: 'Gen.3.10.5', language: 'hebrew', text: 'כִּֽי־עֵירֹ֥ם', transliteration: 'kî-ʿêrōm', lemma: 'עֵירֹם', lemmaTranslit: 'ʿêrōm', gloss: 'because naked', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Aamsa' }, strongs: 'H5903', position: 5 },
  { id: 'Gen.3.10.6', language: 'hebrew', text: 'אָנֹ֖כִי', transliteration: 'ʾānōḵî', lemma: 'אָנֹכִי', lemmaTranslit: 'ʾānōḵî', gloss: 'I am', morphology: { pos: 'pronoun', person: '1', gender: 'common', number: 'singular', rawCode: 'Pp1cs' }, strongs: 'H595', position: 6 },
  { id: 'Gen.3.10.7', language: 'hebrew', text: 'וָאֵחָבֵֽא', transliteration: 'wāʾēḥāḇēʾ', lemma: 'חָבָא', lemmaTranslit: 'ḥāḇāʾ', gloss: 'and I hid', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'imperfect', stem: 'niphal', rawCode: 'Vnw1cs' }, strongs: 'H2244', position: 7 },
];

export const genesis3_10_translation: VerseTranslation = {
  verseRef: 'Gen.3.10',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And he said: Your voice I heard in the garden and I was afraid because naked I am, and I hid.', spans: [{ id: 'Gen.3.10.en.lit.0', text: 'And he said: Your voice I heard...', position: 0, sourceTokenIds: ['Gen.3.10.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'And he said, "I heard the sound of you in the garden, and I was afraid, because I was naked, and I hid myself."', spans: [{ id: 'Gen.3.10.en.idi.0', text: 'And he said, "I heard the sound of you..."', position: 0, sourceTokenIds: ['Gen.3.10.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis3_10_notes: StudyNote[] = [
  { id: 'Gen.3.10.note.1', verseRef: 'Gen.3.10', sourceTokenIds: ['Gen.3.10.4'], category: 'theological', title: 'Fear of God', content: 'Before sin, there was no fear of God\'s presence. Now fear accompanies sin. This is not reverent awe but terror of judgment.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 3:11 - Who told you that you were naked?
export const genesis3_11_tokens: SourceToken[] = [
  { id: 'Gen.3.11.0', language: 'hebrew', text: 'וַיֹּ֕אמֶר', transliteration: 'wayyōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'And he said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H559', position: 0 },
  { id: 'Gen.3.11.1', language: 'hebrew', text: 'מִ֚י', transliteration: 'mî', lemma: 'מִי', lemmaTranslit: 'mî', gloss: 'Who', morphology: { pos: 'pronoun', rawCode: 'Pi' }, strongs: 'H4310', position: 1 },
  { id: 'Gen.3.11.2', language: 'hebrew', text: 'הִגִּ֣יד', transliteration: 'higgîḏ', lemma: 'נָגַד', lemmaTranslit: 'nāḡaḏ', gloss: 'told', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'hiphil', rawCode: 'Vhp3ms' }, strongs: 'H5046', position: 2 },
  { id: 'Gen.3.11.3', language: 'hebrew', text: 'לְךָ֔', transliteration: 'ləḵā', lemma: 'לְ', lemmaTranslit: 'lə', gloss: 'you', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H9005', position: 3 },
  { id: 'Gen.3.11.4', language: 'hebrew', text: 'כִּ֥י', transliteration: 'kî', lemma: 'כִּי', lemmaTranslit: 'kî', gloss: 'that', morphology: { pos: 'conjunction', rawCode: 'Cc' }, strongs: 'H3588', position: 4 },
  { id: 'Gen.3.11.5', language: 'hebrew', text: 'עֵירֹ֖ם', transliteration: 'ʿêrōm', lemma: 'עֵירֹם', lemmaTranslit: 'ʿêrōm', gloss: 'naked', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Aamsa' }, strongs: 'H5903', position: 5 },
  { id: 'Gen.3.11.6', language: 'hebrew', text: 'אָ֑תָּה', transliteration: 'ʾāttāh', lemma: 'אַתָּה', lemmaTranslit: 'ʾattāh', gloss: 'you are', morphology: { pos: 'pronoun', person: '2', gender: 'masculine', number: 'singular', rawCode: 'Pp2ms' }, strongs: 'H859', position: 6 },
  { id: 'Gen.3.11.7', language: 'hebrew', text: 'הֲמִן־', transliteration: 'hămin-', lemma: 'מִן', lemmaTranslit: 'min', gloss: 'From', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H4480', position: 7 },
  { id: 'Gen.3.11.8', language: 'hebrew', text: 'הָעֵ֗ץ', transliteration: 'hāʿēṣ', lemma: 'עֵץ', lemmaTranslit: 'ʿēṣ', gloss: 'the tree', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H6086', position: 8 },
  { id: 'Gen.3.11.9', language: 'hebrew', text: 'אֲשֶׁ֧ר', transliteration: 'ʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'that', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 9 },
  { id: 'Gen.3.11.10', language: 'hebrew', text: 'צִוִּיתִ֛יךָ', transliteration: 'ṣiwwîṯîḵā', lemma: 'צָוָה', lemmaTranslit: 'ṣāwāh', gloss: 'I commanded you', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'perfect', stem: 'piel', rawCode: 'Vpp1cs' }, strongs: 'H6680', position: 10 },
  { id: 'Gen.3.11.11', language: 'hebrew', text: 'לְבִלְתִּ֥י', transliteration: 'ləḇilətî', lemma: 'בִּלְתִּי', lemmaTranslit: 'biltî', gloss: 'not', morphology: { pos: 'adverb', rawCode: 'An' }, strongs: 'H1115', position: 11 },
  { id: 'Gen.3.11.12', language: 'hebrew', text: 'אֲכָל־', transliteration: 'ʾăḵāl-', lemma: 'אָכַל', lemmaTranslit: 'ʾāḵal', gloss: 'to eat', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'Vqc' }, strongs: 'H398', position: 12 },
  { id: 'Gen.3.11.13', language: 'hebrew', text: 'מִמֶּ֖נּוּ', transliteration: 'mimmennû', lemma: 'מִן', lemmaTranslit: 'min', gloss: 'from it', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H4480', position: 13 },
  { id: 'Gen.3.11.14', language: 'hebrew', text: 'אָכָֽלְתָּ', transliteration: 'ʾāḵāltā', lemma: 'אָכַל', lemmaTranslit: 'ʾāḵal', gloss: 'have you eaten', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp2ms' }, strongs: 'H398', position: 14 },
];

export const genesis3_11_translation: VerseTranslation = {
  verseRef: 'Gen.3.11',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And he said: Who told you that naked you are? From the tree that I commanded you not to eat from it—have you eaten?', spans: [{ id: 'Gen.3.11.en.lit.0', text: 'And he said: Who told you...', position: 0, sourceTokenIds: ['Gen.3.11.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'He said, "Who told you that you were naked? Have you eaten of the tree of which I commanded you not to eat?"', spans: [{ id: 'Gen.3.11.en.idi.0', text: 'He said, "Who told you that you were naked?..."', position: 0, sourceTokenIds: ['Gen.3.11.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis3_11_notes: StudyNote[] = [
  { id: 'Gen.3.11.note.1', verseRef: 'Gen.3.11', sourceTokenIds: ['Gen.3.11.1'], category: 'theological', title: 'Probing Questions', content: 'Again God asks questions not for information but to draw out confession. The questions lead Adam to face his disobedience.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 3:12 - The woman you gave me
export const genesis3_12_tokens: SourceToken[] = [
  { id: 'Gen.3.12.0', language: 'hebrew', text: 'וַיֹּ֖אמֶר', transliteration: 'wayyōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'And said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H559', position: 0 },
  { id: 'Gen.3.12.1', language: 'hebrew', text: 'הָֽאָדָ֑ם', transliteration: 'hāʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'the man', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 1 },
  { id: 'Gen.3.12.2', language: 'hebrew', text: 'הָֽאִשָּׁה֙', transliteration: 'hāʾiššāh', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'The woman', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H802', position: 2 },
  { id: 'Gen.3.12.3', language: 'hebrew', text: 'אֲשֶׁ֣ר', transliteration: 'ʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'whom', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 3 },
  { id: 'Gen.3.12.4', language: 'hebrew', text: 'נָתַ֣תָּה', transliteration: 'nāṯattāh', lemma: 'נָתַן', lemmaTranslit: 'nāṯan', gloss: 'you gave', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp2ms' }, strongs: 'H5414', position: 4 },
  { id: 'Gen.3.12.5', language: 'hebrew', text: 'עִמָּדִ֔י', transliteration: 'ʿimmāḏî', lemma: 'עִם', lemmaTranslit: 'ʿim', gloss: 'to be with me', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H5978', position: 5 },
  { id: 'Gen.3.12.6', language: 'hebrew', text: 'הִ֛וא', transliteration: 'hîʾ', lemma: 'הִוא', lemmaTranslit: 'hîʾ', gloss: 'she', morphology: { pos: 'pronoun', person: '3', gender: 'feminine', number: 'singular', rawCode: 'Pp3fs' }, strongs: 'H1931', position: 6 },
  { id: 'Gen.3.12.7', language: 'hebrew', text: 'נָֽתְנָה־', transliteration: 'nāṯənāh-', lemma: 'נָתַן', lemmaTranslit: 'nāṯan', gloss: 'gave', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3fs' }, strongs: 'H5414', position: 7 },
  { id: 'Gen.3.12.8', language: 'hebrew', text: 'לִּ֥י', transliteration: 'lî', lemma: 'לְ', lemmaTranslit: 'lə', gloss: 'me', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H9005', position: 8 },
  { id: 'Gen.3.12.9', language: 'hebrew', text: 'מִן־הָעֵ֖ץ', transliteration: 'min-hāʿēṣ', lemma: 'עֵץ', lemmaTranslit: 'ʿēṣ', gloss: 'from the tree', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H6086', position: 9 },
  { id: 'Gen.3.12.10', language: 'hebrew', text: 'וָאֹכֵֽל', transliteration: 'wāʾōḵēl', lemma: 'אָכַל', lemmaTranslit: 'ʾāḵal', gloss: 'and I ate', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw1cs' }, strongs: 'H398', position: 10 },
];

export const genesis3_12_translation: VerseTranslation = {
  verseRef: 'Gen.3.12',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And said the man: The woman whom you gave to be with me—she gave to me from the tree and I ate.', spans: [{ id: 'Gen.3.12.en.lit.0', text: 'And said the man: The woman whom you gave...', position: 0, sourceTokenIds: ['Gen.3.12.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'The man said, "The woman whom you gave to be with me, she gave me fruit of the tree, and I ate."', spans: [{ id: 'Gen.3.12.en.idi.0', text: 'The man said, "The woman whom you gave..."', position: 0, sourceTokenIds: ['Gen.3.12.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis3_12_notes: StudyNote[] = [
  { id: 'Gen.3.12.note.1', verseRef: 'Gen.3.12', sourceTokenIds: ['Gen.3.12.2', 'Gen.3.12.4'], category: 'theological', title: 'Blame-Shifting', content: 'Adam blames both the woman AND God ("whom YOU gave me"). Sin introduces blame-shifting—refusing responsibility and implicating others, even God.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 3:13 - The serpent deceived me
export const genesis3_13_tokens: SourceToken[] = [
  { id: 'Gen.3.13.0', language: 'hebrew', text: 'וַיֹּ֨אמֶר', transliteration: 'wayyōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'And said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H559', position: 0 },
  { id: 'Gen.3.13.1', language: 'hebrew', text: 'יְהוָ֧ה', transliteration: 'yhwh', lemma: 'יְהוָה', lemmaTranslit: 'yhwh', gloss: 'YHWH', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 1 },
  { id: 'Gen.3.13.2', language: 'hebrew', text: 'אֱלֹהִ֛ים', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H430', position: 2 },
  { id: 'Gen.3.13.3', language: 'hebrew', text: 'לָאִשָּׁ֖ה', transliteration: 'lāʾiššāh', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'to the woman', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H802', position: 3 },
  { id: 'Gen.3.13.4', language: 'hebrew', text: 'מַה־', transliteration: 'mah-', lemma: 'מָה', lemmaTranslit: 'māh', gloss: 'What', morphology: { pos: 'pronoun', rawCode: 'Pi' }, strongs: 'H4100', position: 4 },
  { id: 'Gen.3.13.5', language: 'hebrew', text: 'זֹּ֣את', transliteration: 'zōʾṯ', lemma: 'זֹאת', lemmaTranslit: 'zōʾṯ', gloss: 'this', morphology: { pos: 'pronoun', gender: 'feminine', number: 'singular', rawCode: 'Pdxfs' }, strongs: 'H2063', position: 5 },
  { id: 'Gen.3.13.6', language: 'hebrew', text: 'עָשִׂ֑ית', transliteration: 'ʿāśîṯ', lemma: 'עָשָׂה', lemmaTranslit: 'ʿāśāh', gloss: 'have you done', morphology: { pos: 'verb', person: '2', gender: 'feminine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp2fs' }, strongs: 'H6213', position: 6 },
  { id: 'Gen.3.13.7', language: 'hebrew', text: 'וַתֹּ֙אמֶר֙', transliteration: 'wattōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'And said', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3fs' }, strongs: 'H559', position: 7 },
  { id: 'Gen.3.13.8', language: 'hebrew', text: 'הָֽאִשָּׁ֔ה', transliteration: 'hāʾiššāh', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'the woman', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H802', position: 8 },
  { id: 'Gen.3.13.9', language: 'hebrew', text: 'הַנָּחָ֥שׁ', transliteration: 'hannāḥāš', lemma: 'נָחָשׁ', lemmaTranslit: 'nāḥāš', gloss: 'The serpent', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H5175', position: 9 },
  { id: 'Gen.3.13.10', language: 'hebrew', text: 'הִשִּׁיאַ֖נִי', transliteration: 'hiššîʾanî', lemma: 'נָשָׁא', lemmaTranslit: 'nāšāʾ', gloss: 'deceived me', glossExtended: 'to deceive, beguile', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'hiphil', rawCode: 'Vhp3ms' }, strongs: 'H5377', position: 10 },
  { id: 'Gen.3.13.11', language: 'hebrew', text: 'וָאֹכֵֽל', transliteration: 'wāʾōḵēl', lemma: 'אָכַל', lemmaTranslit: 'ʾāḵal', gloss: 'and I ate', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw1cs' }, strongs: 'H398', position: 11 },
];

export const genesis3_13_translation: VerseTranslation = {
  verseRef: 'Gen.3.13',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And said YHWH God to the woman: What this have you done? And said the woman: The serpent deceived me and I ate.', spans: [{ id: 'Gen.3.13.en.lit.0', text: 'And said YHWH God to the woman...', position: 0, sourceTokenIds: ['Gen.3.13.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Then the LORD God said to the woman, "What is this that you have done?" The woman said, "The serpent deceived me, and I ate."', spans: [{ id: 'Gen.3.13.en.idi.0', text: 'Then the LORD God said to the woman...', position: 0, sourceTokenIds: ['Gen.3.13.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis3_13_notes: StudyNote[] = [
  { id: 'Gen.3.13.note.1', verseRef: 'Gen.3.13', sourceTokenIds: ['Gen.3.13.9', 'Gen.3.13.10'], category: 'theological', title: 'Eve\'s Blame', content: 'Eve also shifts blame to the serpent. While true that she was deceived (2 Cor 11:3; 1 Tim 2:14), it does not excuse her disobedience.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.3.13.note.2', verseRef: 'Gen.3.13', sourceTokenIds: ['Gen.3.13.10'], category: 'lexical', title: 'Deceived (hiššîʾanî)', content: 'The verb nāšāʾ in hiphil means "to deceive, beguile, lead astray." Paul uses the same concept in 2 Cor 11:3.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Export verse structures
export const genesis3_8_verse = { ref: 'Gen.3.8', sourceTokens: genesis3_8_tokens, translation: genesis3_8_translation, notes: genesis3_8_notes };
export const genesis3_9_verse = { ref: 'Gen.3.9', sourceTokens: genesis3_9_tokens, translation: genesis3_9_translation, notes: genesis3_9_notes };
export const genesis3_10_verse = { ref: 'Gen.3.10', sourceTokens: genesis3_10_tokens, translation: genesis3_10_translation, notes: genesis3_10_notes };
export const genesis3_11_verse = { ref: 'Gen.3.11', sourceTokens: genesis3_11_tokens, translation: genesis3_11_translation, notes: genesis3_11_notes };
export const genesis3_12_verse = { ref: 'Gen.3.12', sourceTokens: genesis3_12_tokens, translation: genesis3_12_translation, notes: genesis3_12_notes };
export const genesis3_13_verse = { ref: 'Gen.3.13', sourceTokens: genesis3_13_tokens, translation: genesis3_13_translation, notes: genesis3_13_notes };

// Combined export
export const genesis3_8_13_verses = [
  genesis3_8_verse,
  genesis3_9_verse,
  genesis3_10_verse,
  genesis3_11_verse,
  genesis3_12_verse,
  genesis3_13_verse,
];

export default genesis3_8_13_verses;
