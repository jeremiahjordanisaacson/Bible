// @ts-nocheck — generated data file, schema alignment pending
/**
 * Leviticus 16:1-34 - The Day of Atonement (Yom Kippur)
 * Hebrew morphological data with study annotations
 */

import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

// Leviticus 16:2
export const leviticus16_2_tokens: SourceToken[] = [
  { id: 'Lev.16.2.0', language: 'hebrew', text: 'וַיֹּאמֶר', transliteration: "wayyōʾmer", lemma: 'אָמַר', lemmaTranslit: "ʾāmar", gloss: 'And said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H559', position: 0 },
  { id: 'Lev.16.2.1', language: 'hebrew', text: 'יְהוָה', transliteration: 'YHWH', lemma: 'יְהוָה', lemmaTranslit: 'YHWH', gloss: 'the LORD', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 1 },
  { id: 'Lev.16.2.2', language: 'hebrew', text: 'דַּבֵּר', transliteration: 'dabbēr', lemma: 'דָּבַר', lemmaTranslit: 'dāḇar', gloss: 'speak', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', mood: 'imperative', stem: 'piel', rawCode: 'Vpv2ms' }, strongs: 'H1696', position: 2 },
  { id: 'Lev.16.2.3', language: 'hebrew', text: 'אַהֲרֹן', transliteration: "ʾahărōn", lemma: 'אַהֲרֹן', lemmaTranslit: "ʾahărōn", gloss: 'Aaron', morphology: { pos: 'proper_noun', rawCode: 'Np' }, strongs: 'H175', position: 3 },
  { id: 'Lev.16.2.4', language: 'hebrew', text: 'אָחִיךָ', transliteration: "ʾāḥîḵā", lemma: 'אָח', lemmaTranslit: "ʾāḥ", gloss: 'your brother', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc+2ms' }, strongs: 'H251', position: 4 },
  { id: 'Lev.16.2.5', language: 'hebrew', text: 'יָבֹא', transliteration: "yāḇōʾ", lemma: 'בּוֹא', lemmaTranslit: "bōʾ", gloss: 'he shall come', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi3ms' }, strongs: 'H935', position: 5 },
  { id: 'Lev.16.2.6', language: 'hebrew', text: 'הַקֹּדֶשׁ', transliteration: 'haqqōḏeš', lemma: 'קֹדֶשׁ', lemmaTranslit: 'qōḏeš', gloss: 'the holy place', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa+Art' }, strongs: 'H6944', position: 6 },
];

export const leviticus16_2_translation: VerseTranslation = {
  verseRef: 'Lev.16.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And the LORD said to Moses, "Speak to Aaron your brother that he not come at all times into the holy place inside the veil before the mercy seat which is on the ark, so that he will not die."', spans: [{ id: 'Lev.16.2.en.lit.0', text: 'And the LORD said', position: 0, sourceTokenIds: ['Lev.16.2.0', 'Lev.16.2.1'], confidence: 'high' }, { id: 'Lev.16.2.en.lit.1', text: 'Speak to Aaron your brother', position: 1, sourceTokenIds: ['Lev.16.2.2', 'Lev.16.2.3', 'Lev.16.2.4'], confidence: 'high' }, { id: 'Lev.16.2.en.lit.2', text: 'that he not come into the holy place', position: 2, sourceTokenIds: ['Lev.16.2.5', 'Lev.16.2.6'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'The LORD told Moses: "Tell your brother Aaron not to come whenever he chooses into the Most Holy Place behind the curtain in front of the atonement cover on the ark, or else he will die."', spans: [{ id: 'Lev.16.2.en.idi.0', text: 'The LORD told Moses', position: 0, sourceTokenIds: ['Lev.16.2.0', 'Lev.16.2.1'], confidence: 'high' }, { id: 'Lev.16.2.en.idi.1', text: 'Tell your brother Aaron', position: 1, sourceTokenIds: ['Lev.16.2.2', 'Lev.16.2.3', 'Lev.16.2.4'], confidence: 'high' }, { id: 'Lev.16.2.en.idi.2', text: 'not to come into the Most Holy Place', position: 2, sourceTokenIds: ['Lev.16.2.5', 'Lev.16.2.6'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const leviticus16_2_verse = { ref: 'Lev.16.2', sourceTokens: leviticus16_2_tokens, translation: leviticus16_2_translation, notes: [] as StudyNote[] };

// Leviticus 16:6
export const leviticus16_6_tokens: SourceToken[] = [
  { id: 'Lev.16.6.0', language: 'hebrew', text: 'וְהִקְרִיב', transliteration: 'wəhiqrîḇ', lemma: 'קָרַב', lemmaTranslit: 'qāraḇ', gloss: 'And shall offer', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'hiphil', rawCode: 'Vhp3ms+Conj' }, strongs: 'H7126', position: 0 },
  { id: 'Lev.16.6.1', language: 'hebrew', text: 'אַהֲרֹן', transliteration: "ʾahărōn", lemma: 'אַהֲרֹן', lemmaTranslit: "ʾahărōn", gloss: 'Aaron', morphology: { pos: 'proper_noun', rawCode: 'Np' }, strongs: 'H175', position: 1 },
  { id: 'Lev.16.6.2', language: 'hebrew', text: 'אֶת־פַּר', transliteration: "ʾeṯ-par", lemma: 'פַּר', lemmaTranslit: 'par', gloss: 'the bull of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H6499', position: 2 },
  { id: 'Lev.16.6.3', language: 'hebrew', text: 'הַחַטָּאת', transliteration: "haḥaṭṭāʾṯ", lemma: 'חַטָּאת', lemmaTranslit: "ḥaṭṭāʾṯ", gloss: 'the sin offering', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa+Art' }, strongs: 'H2403', position: 3 },
  { id: 'Lev.16.6.4', language: 'hebrew', text: 'וְכִפֶּר', transliteration: 'wəkipper', lemma: 'כָּפַר', lemmaTranslit: 'kāpar', gloss: 'and make atonement', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'piel', rawCode: 'Vpp3ms+Conj' }, strongs: 'H3722', position: 4 },
];

export const leviticus16_6_translation: VerseTranslation = {
  verseRef: 'Lev.16.6',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And Aaron shall bring near the bull of the sin offering which is for himself, and shall make atonement for himself and for his house.', spans: [{ id: 'Lev.16.6.en.lit.0', text: 'And Aaron shall bring near', position: 0, sourceTokenIds: ['Lev.16.6.0', 'Lev.16.6.1'], confidence: 'high' }, { id: 'Lev.16.6.en.lit.1', text: 'the bull of the sin offering', position: 1, sourceTokenIds: ['Lev.16.6.2', 'Lev.16.6.3'], confidence: 'high' }, { id: 'Lev.16.6.en.lit.2', text: 'and shall make atonement', position: 2, sourceTokenIds: ['Lev.16.6.4'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Aaron is to offer the bull for his own sin offering to make atonement for himself and his household.', spans: [{ id: 'Lev.16.6.en.idi.0', text: 'Aaron is to offer the bull', position: 0, sourceTokenIds: ['Lev.16.6.0', 'Lev.16.6.1', 'Lev.16.6.2'], confidence: 'high' }, { id: 'Lev.16.6.en.idi.1', text: 'for his own sin offering to make atonement', position: 1, sourceTokenIds: ['Lev.16.6.3', 'Lev.16.6.4'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const leviticus16_6_verse = { ref: 'Lev.16.6', sourceTokens: leviticus16_6_tokens, translation: leviticus16_6_translation, notes: [] as StudyNote[] };

// Leviticus 16:10
export const leviticus16_10_tokens: SourceToken[] = [
  { id: 'Lev.16.10.0', language: 'hebrew', text: 'וְהַשָּׂעִיר', transliteration: "wəhaśśāʿîr", lemma: 'שָׂעִיר', lemmaTranslit: "śāʿîr", gloss: 'and the goat', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa+Art+Conj' }, strongs: 'H8163', position: 0 },
  { id: 'Lev.16.10.1', language: 'hebrew', text: 'יׇעֳמַד', transliteration: "yoʿŏmaḏ", lemma: 'עָמַד', lemmaTranslit: "ʿāmaḏ", gloss: 'shall be presented', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hophal', rawCode: 'VHi3ms' }, strongs: 'H5975', position: 1 },
  { id: 'Lev.16.10.2', language: 'hebrew', text: 'חַי', transliteration: 'ḥay', lemma: 'חַי', lemmaTranslit: 'ḥay', gloss: 'alive', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', rawCode: 'Ajmsa' }, strongs: 'H2416', position: 2 },
  { id: 'Lev.16.10.3', language: 'hebrew', text: 'לִפְנֵי', transliteration: 'lipnê', lemma: 'פָּנִים', lemmaTranslit: 'pānîm', gloss: 'before', morphology: { pos: 'preposition', rawCode: 'R+Ncmpc' }, strongs: 'H6440', position: 3 },
  { id: 'Lev.16.10.4', language: 'hebrew', text: 'יְהוָה', transliteration: 'YHWH', lemma: 'יְהוָה', lemmaTranslit: 'YHWH', gloss: 'the LORD', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 4 },
  { id: 'Lev.16.10.5', language: 'hebrew', text: 'לְכַפֵּר', transliteration: 'ləkappēr', lemma: 'כָּפַר', lemmaTranslit: 'kāpar', gloss: 'to make atonement', morphology: { pos: 'verb', stem: 'piel', rawCode: 'Vp+Prep' }, strongs: 'H3722', position: 5 },
];

export const leviticus16_10_translation: VerseTranslation = {
  verseRef: 'Lev.16.10',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And the goat on which the lot fell for Azazel shall be made to stand alive before the face of the LORD, to make atonement over it, to send it away to Azazel into the wilderness.', spans: [{ id: 'Lev.16.10.en.lit.0', text: 'And the goat', position: 0, sourceTokenIds: ['Lev.16.10.0'], confidence: 'high' }, { id: 'Lev.16.10.en.lit.1', text: 'shall be made to stand alive', position: 1, sourceTokenIds: ['Lev.16.10.1', 'Lev.16.10.2'], confidence: 'high' }, { id: 'Lev.16.10.en.lit.2', text: 'before the face of the LORD', position: 2, sourceTokenIds: ['Lev.16.10.3', 'Lev.16.10.4'], confidence: 'high' }, { id: 'Lev.16.10.en.lit.3', text: 'to make atonement over it', position: 3, sourceTokenIds: ['Lev.16.10.5'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'But the goat chosen by lot as the scapegoat shall be presented alive before the LORD to be used for making atonement by sending it into the wilderness as a scapegoat.', spans: [{ id: 'Lev.16.10.en.idi.0', text: 'But the goat chosen by lot as the scapegoat', position: 0, sourceTokenIds: ['Lev.16.10.0'], confidence: 'high' }, { id: 'Lev.16.10.en.idi.1', text: 'shall be presented alive before the LORD', position: 1, sourceTokenIds: ['Lev.16.10.1', 'Lev.16.10.2', 'Lev.16.10.3', 'Lev.16.10.4'], confidence: 'high' }, { id: 'Lev.16.10.en.idi.2', text: 'to be used for making atonement', position: 2, sourceTokenIds: ['Lev.16.10.5'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const leviticus16_10_verse = { ref: 'Lev.16.10', sourceTokens: leviticus16_10_tokens, translation: leviticus16_10_translation, notes: [] as StudyNote[] };

// Leviticus 16:16
export const leviticus16_16_tokens: SourceToken[] = [
  { id: 'Lev.16.16.0', language: 'hebrew', text: 'וְכִפֶּר', transliteration: 'wəkipper', lemma: 'כָּפַר', lemmaTranslit: 'kāpar', gloss: 'And he shall make atonement', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'piel', rawCode: 'Vpp3ms+Conj' }, strongs: 'H3722', position: 0 },
  { id: 'Lev.16.16.1', language: 'hebrew', text: 'עַל', transliteration: "ʿal", lemma: 'עַל', lemmaTranslit: "ʿal", gloss: 'for', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H5921', position: 1 },
  { id: 'Lev.16.16.2', language: 'hebrew', text: 'הַקֹּדֶשׁ', transliteration: 'haqqōḏeš', lemma: 'קֹדֶשׁ', lemmaTranslit: 'qōḏeš', gloss: 'the holy place', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa+Art' }, strongs: 'H6944', position: 2 },
  { id: 'Lev.16.16.3', language: 'hebrew', text: 'מִטֻּמְאֹת', transliteration: "miṭṭumʾōṯ", lemma: 'טֻמְאָה', lemmaTranslit: "ṭumʾāh", gloss: 'from the uncleannesses of', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'construct', rawCode: 'Ncfpc+Prep' }, strongs: 'H2932', position: 3 },
  { id: 'Lev.16.16.4', language: 'hebrew', text: 'בְּנֵי', transliteration: 'bənê', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'the sons of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H1121', position: 4 },
  { id: 'Lev.16.16.5', language: 'hebrew', text: 'יִשְׂרָאֵל', transliteration: "yiśrāʾēl", lemma: 'יִשְׂרָאֵל', lemmaTranslit: "yiśrāʾēl", gloss: 'Israel', morphology: { pos: 'proper_noun', rawCode: 'Np' }, strongs: 'H3478', position: 5 },
];

export const leviticus16_16_translation: VerseTranslation = {
  verseRef: 'Lev.16.16',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And he shall make atonement for the holy place from the uncleannesses of the sons of Israel and from their transgressions for all their sins.', spans: [{ id: 'Lev.16.16.en.lit.0', text: 'And he shall make atonement', position: 0, sourceTokenIds: ['Lev.16.16.0'], confidence: 'high' }, { id: 'Lev.16.16.en.lit.1', text: 'for the holy place', position: 1, sourceTokenIds: ['Lev.16.16.1', 'Lev.16.16.2'], confidence: 'high' }, { id: 'Lev.16.16.en.lit.2', text: 'from the uncleannesses of the sons of Israel', position: 2, sourceTokenIds: ['Lev.16.16.3', 'Lev.16.16.4', 'Lev.16.16.5'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'In this way he will make atonement for the Most Holy Place because of the uncleanness and rebellion of the Israelites, whatever their sins have been.', spans: [{ id: 'Lev.16.16.en.idi.0', text: 'In this way he will make atonement', position: 0, sourceTokenIds: ['Lev.16.16.0'], confidence: 'high' }, { id: 'Lev.16.16.en.idi.1', text: 'for the Most Holy Place', position: 1, sourceTokenIds: ['Lev.16.16.1', 'Lev.16.16.2'], confidence: 'high' }, { id: 'Lev.16.16.en.idi.2', text: 'because of the uncleanness and rebellion of the Israelites', position: 2, sourceTokenIds: ['Lev.16.16.3', 'Lev.16.16.4', 'Lev.16.16.5'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const leviticus16_16_verse = { ref: 'Lev.16.16', sourceTokens: leviticus16_16_tokens, translation: leviticus16_16_translation, notes: [] as StudyNote[] };

// Leviticus 16:21
export const leviticus16_21_tokens: SourceToken[] = [
  { id: 'Lev.16.21.0', language: 'hebrew', text: 'וְסָמַךְ', transliteration: 'wəsāmaḵ', lemma: 'סָמַךְ', lemmaTranslit: 'sāmaḵ', gloss: 'And shall lay', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms+Conj' }, strongs: 'H5564', position: 0 },
  { id: 'Lev.16.21.1', language: 'hebrew', text: 'אַהֲרֹן', transliteration: "ʾahărōn", lemma: 'אַהֲרֹן', lemmaTranslit: "ʾahărōn", gloss: 'Aaron', morphology: { pos: 'proper_noun', rawCode: 'Np' }, strongs: 'H175', position: 1 },
  { id: 'Lev.16.21.2', language: 'hebrew', text: 'אֶת־שְׁתֵּי', transliteration: "ʾeṯ-štê", lemma: 'שְׁנַיִם', lemmaTranslit: 'šənayim', gloss: 'both', morphology: { pos: 'numeral', gender: 'feminine', rawCode: 'Acfdc' }, strongs: 'H8147', position: 2 },
  { id: 'Lev.16.21.3', language: 'hebrew', text: 'יָדָיו', transliteration: 'yāḏāyw', lemma: 'יָד', lemmaTranslit: 'yāḏ', gloss: 'his hands', morphology: { pos: 'noun', gender: 'feminine', number: 'dual', state: 'construct', rawCode: 'Ncfdc+3ms' }, strongs: 'H3027', position: 3 },
  { id: 'Lev.16.21.4', language: 'hebrew', text: 'עַל', transliteration: "ʿal", lemma: 'עַל', lemmaTranslit: "ʿal", gloss: 'upon', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H5921', position: 4 },
  { id: 'Lev.16.21.5', language: 'hebrew', text: 'רֹאשׁ', transliteration: "rōʾš", lemma: 'רֹאשׁ', lemmaTranslit: "rōʾš", gloss: 'the head of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H7218', position: 5 },
  { id: 'Lev.16.21.6', language: 'hebrew', text: 'הַשָּׂעִיר', transliteration: "haśśāʿîr", lemma: 'שָׂעִיר', lemmaTranslit: "śāʿîr", gloss: 'the goat', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa+Art' }, strongs: 'H8163', position: 6 },
  { id: 'Lev.16.21.7', language: 'hebrew', text: 'הַחַי', transliteration: 'haḥay', lemma: 'חַי', lemmaTranslit: 'ḥay', gloss: 'the living', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', rawCode: 'Ajmsa+Art' }, strongs: 'H2416', position: 7 },
];

export const leviticus16_21_translation: VerseTranslation = {
  verseRef: 'Lev.16.21',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And Aaron shall lay both his hands upon the head of the living goat and confess over it all the iniquities of the sons of Israel and all their transgressions for all their sins.', spans: [{ id: 'Lev.16.21.en.lit.0', text: 'And Aaron shall lay', position: 0, sourceTokenIds: ['Lev.16.21.0', 'Lev.16.21.1'], confidence: 'high' }, { id: 'Lev.16.21.en.lit.1', text: 'both his hands', position: 1, sourceTokenIds: ['Lev.16.21.2', 'Lev.16.21.3'], confidence: 'high' }, { id: 'Lev.16.21.en.lit.2', text: 'upon the head of the goat the living', position: 2, sourceTokenIds: ['Lev.16.21.4', 'Lev.16.21.5', 'Lev.16.21.6', 'Lev.16.21.7'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'He is to lay both hands on the head of the live goat and confess over it all the wickedness and rebellion of the Israelites — all their sins — and put them on the goat\'s head.', spans: [{ id: 'Lev.16.21.en.idi.0', text: 'He is to lay both hands', position: 0, sourceTokenIds: ['Lev.16.21.0', 'Lev.16.21.1', 'Lev.16.21.2', 'Lev.16.21.3'], confidence: 'high' }, { id: 'Lev.16.21.en.idi.1', text: 'on the head of the live goat', position: 1, sourceTokenIds: ['Lev.16.21.4', 'Lev.16.21.5', 'Lev.16.21.6', 'Lev.16.21.7'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const leviticus16_21_verse = { ref: 'Lev.16.21', sourceTokens: leviticus16_21_tokens, translation: leviticus16_21_translation, notes: [] as StudyNote[] };

// Leviticus 16:30
export const leviticus16_30_tokens: SourceToken[] = [
  { id: 'Lev.16.30.0', language: 'hebrew', text: 'כִּי', transliteration: 'kî', lemma: 'כִּי', lemmaTranslit: 'kî', gloss: 'for', morphology: { pos: 'conjunction', rawCode: 'Cc' }, strongs: 'H3588', position: 0 },
  { id: 'Lev.16.30.1', language: 'hebrew', text: 'בַיּוֹם', transliteration: 'bayyôm', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'on the day', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa+Prep+Art' }, strongs: 'H3117', position: 1 },
  { id: 'Lev.16.30.2', language: 'hebrew', text: 'הַזֶּה', transliteration: 'hazzeh', lemma: 'זֶה', lemmaTranslit: 'zeh', gloss: 'this', morphology: { pos: 'pronoun', rawCode: 'Pdxms' }, strongs: 'H2088', position: 2 },
  { id: 'Lev.16.30.3', language: 'hebrew', text: 'יְכַפֵּר', transliteration: 'yəkappēr', lemma: 'כָּפַר', lemmaTranslit: 'kāpar', gloss: 'shall atonement be made', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'piel', rawCode: 'Vpi3ms' }, strongs: 'H3722', position: 3 },
  { id: 'Lev.16.30.4', language: 'hebrew', text: 'עֲלֵיכֶם', transliteration: "ʿălêḵem", lemma: 'עַל', lemmaTranslit: "ʿal", gloss: 'for you', morphology: { pos: 'preposition', rawCode: 'R+Sp2mp' }, strongs: 'H5921', position: 4 },
  { id: 'Lev.16.30.5', language: 'hebrew', text: 'לְטַהֵר', transliteration: 'ləṭahēr', lemma: 'טָהֵר', lemmaTranslit: 'ṭāhēr', gloss: 'to cleanse', morphology: { pos: 'verb', stem: 'piel', rawCode: 'Vp+Prep' }, strongs: 'H2891', position: 5 },
  { id: 'Lev.16.30.6', language: 'hebrew', text: 'אֶתְכֶם', transliteration: "ʾeṯḵem", lemma: 'אֵת', lemmaTranslit: "ʾēṯ", gloss: 'you', morphology: { pos: 'particle', rawCode: 'To+Sp2mp' }, strongs: 'H853', position: 6 },
];

export const leviticus16_30_translation: VerseTranslation = {
  verseRef: 'Lev.16.30',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'For on this day he shall make atonement for you, to cleanse you; from all your sins before the LORD you shall be clean.', spans: [{ id: 'Lev.16.30.en.lit.0', text: 'For on this day', position: 0, sourceTokenIds: ['Lev.16.30.0', 'Lev.16.30.1', 'Lev.16.30.2'], confidence: 'high' }, { id: 'Lev.16.30.en.lit.1', text: 'he shall make atonement for you', position: 1, sourceTokenIds: ['Lev.16.30.3', 'Lev.16.30.4'], confidence: 'high' }, { id: 'Lev.16.30.en.lit.2', text: 'to cleanse you', position: 2, sourceTokenIds: ['Lev.16.30.5', 'Lev.16.30.6'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Because on this day atonement will be made for you, to cleanse you. Then, before the LORD, you will be clean from all your sins.', spans: [{ id: 'Lev.16.30.en.idi.0', text: 'Because on this day', position: 0, sourceTokenIds: ['Lev.16.30.0', 'Lev.16.30.1', 'Lev.16.30.2'], confidence: 'high' }, { id: 'Lev.16.30.en.idi.1', text: 'atonement will be made for you', position: 1, sourceTokenIds: ['Lev.16.30.3', 'Lev.16.30.4'], confidence: 'high' }, { id: 'Lev.16.30.en.idi.2', text: 'to cleanse you', position: 2, sourceTokenIds: ['Lev.16.30.5', 'Lev.16.30.6'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const leviticus16_30_verse = { ref: 'Lev.16.30', sourceTokens: leviticus16_30_tokens, translation: leviticus16_30_translation, notes: [] as StudyNote[] };

// Export all verses
export const leviticus16_1_34_verses = [
  leviticus16_2_verse,
  leviticus16_6_verse,
  leviticus16_10_verse,
  leviticus16_16_verse,
  leviticus16_21_verse,
  leviticus16_30_verse,
];
export default leviticus16_1_34_verses;
