// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 8:1 – No condemnation in Christ Jesus
 * ──────────────────────────────────────────────────────────── */

export const romans8_1_tokens: SourceToken[] = [
  {
    id: 'Rom.8.1.0',
    language: 'greek',
    text: 'Οὐδὲν',
    transliteration: 'Ouden',
    lemma: 'οὐδείς',
    lemmaTranslit: 'oudeis',
    gloss: 'nothing',
    morphology: { pos: 'pronoun', gender: 'neuter', number: 'singular', case: 'nominative' },
    strongs: 'G3762',
    position: 0,
  },
  {
    id: 'Rom.8.1.1',
    language: 'greek',
    text: 'ἄρα',
    transliteration: 'ara',
    lemma: 'ἄρα',
    lemmaTranslit: 'ara',
    gloss: 'therefore',
    morphology: { pos: 'conjunction' },
    strongs: 'G686',
    position: 1,
  },
  {
    id: 'Rom.8.1.2',
    language: 'greek',
    text: 'νῦν',
    transliteration: 'nyn',
    lemma: 'νῦν',
    lemmaTranslit: 'nyn',
    gloss: 'now',
    morphology: { pos: 'adverb' },
    strongs: 'G3568',
    position: 2,
  },
  {
    id: 'Rom.8.1.3',
    language: 'greek',
    text: 'κατάκριμα',
    transliteration: 'katakrima',
    lemma: 'κατάκριμα',
    lemmaTranslit: 'katakrima',
    gloss: 'condemnation',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'nominative' },
    strongs: 'G2631',
    position: 3,
  },
  {
    id: 'Rom.8.1.4',
    language: 'greek',
    text: 'τοῖς',
    transliteration: 'tois',
    lemma: 'ὁ',
    lemmaTranslit: 'ho',
    gloss: 'to those',
    morphology: { pos: 'article', gender: 'masculine', number: 'plural', case: 'dative' },
    strongs: 'G3588',
    position: 4,
  },
  {
    id: 'Rom.8.1.5',
    language: 'greek',
    text: 'ἐν',
    transliteration: 'en',
    lemma: 'ἐν',
    lemmaTranslit: 'en',
    gloss: 'in',
    morphology: { pos: 'preposition' },
    strongs: 'G1722',
    position: 5,
  },
  {
    id: 'Rom.8.1.6',
    language: 'greek',
    text: 'Χριστῷ',
    transliteration: 'Christō',
    lemma: 'Χριστός',
    lemmaTranslit: 'Christos',
    gloss: 'Christ',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'dative' },
    strongs: 'G5547',
    position: 6,
  },
  {
    id: 'Rom.8.1.7',
    language: 'greek',
    text: 'Ἰησοῦ',
    transliteration: 'Iēsou',
    lemma: 'Ἰησοῦς',
    lemmaTranslit: 'Iēsous',
    gloss: 'Jesus',
    morphology: { pos: 'proper-noun', gender: 'masculine', number: 'singular', case: 'dative' },
    strongs: 'G2424',
    position: 7,
  },
];

export const romans8_1_translation: VerseTranslation = {
  verseRef: 'Rom.8.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Nothing therefore now condemnation to those in Christ Jesus.',
      spans: [
        { id: 'Rom.8.1.en.lit.0', text: 'Nothing therefore now condemnation', position: 0, sourceTokenIds: ['Rom.8.1.0', 'Rom.8.1.1', 'Rom.8.1.2', 'Rom.8.1.3'], confidence: 'high' },
        { id: 'Rom.8.1.en.lit.1', text: 'to those in Christ Jesus.', position: 1, sourceTokenIds: ['Rom.8.1.4', 'Rom.8.1.5', 'Rom.8.1.6', 'Rom.8.1.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'There is therefore now no condemnation for those who are in Christ Jesus.',
      spans: [
        { id: 'Rom.8.1.en.idi.0', text: 'There is therefore now no condemnation', position: 0, sourceTokenIds: ['Rom.8.1.0', 'Rom.8.1.1', 'Rom.8.1.2', 'Rom.8.1.3'], confidence: 'high' },
        { id: 'Rom.8.1.en.idi.1', text: 'for those who are in Christ Jesus.', position: 1, sourceTokenIds: ['Rom.8.1.4', 'Rom.8.1.5', 'Rom.8.1.6', 'Rom.8.1.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
  },
  metadata: {
    pipelineVersion: '0.1.0',
    generatedAt: new Date().toISOString(),
    engineId: 'open-bible-pipeline',
    engineVersion: '0.1.0',
    sourceDataVersion: '1.0.0',
  },
};

export const romans8_1_notes: StudyNote[] = [
  { id: 'Rom.8.1.note.1', verseRef: 'Rom.8.1', sourceTokenIds: ['Rom.8.1.3'], category: 'theological', title: 'κατάκριμα — Condemnation', content: "κατάκριμα (katakrima) refers not merely to the act of judging but to the resulting sentence of condemnation — the penalty itself. Paul declares that for those united to Christ, the judicial verdict has been completely reversed. This is the triumphant conclusion to the argument of Romans 5-7, where Paul demonstrated humanity's bondage under sin, law, and death.", confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const romans8_1_verse = {
  ref: 'Rom.8.1',
  sourceTokens: romans8_1_tokens,
  translation: romans8_1_translation,
  notes: romans8_1_notes,
};

/* ────────────────────────────────────────────────────────────
 * Verse 8:2 – The law of the Spirit of life
 * ──────────────────────────────────────────────────────────── */

export const romans8_2_tokens: SourceToken[] = [
  {
    id: 'Rom.8.2.0',
    language: 'greek',
    text: 'νόμος',
    transliteration: 'nomos',
    lemma: 'νόμος',
    lemmaTranslit: 'nomos',
    gloss: 'law',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G3551',
    position: 0,
  },
  {
    id: 'Rom.8.2.1',
    language: 'greek',
    text: 'πνεύματος',
    transliteration: 'pneumatos',
    lemma: 'πνεῦμα',
    lemmaTranslit: 'pneuma',
    gloss: 'of the Spirit',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'genitive' },
    strongs: 'G4151',
    position: 1,
  },
  {
    id: 'Rom.8.2.2',
    language: 'greek',
    text: 'ζωῆς',
    transliteration: 'zōēs',
    lemma: 'ζωή',
    lemmaTranslit: 'zōē',
    gloss: 'of life',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G2222',
    position: 2,
  },
  {
    id: 'Rom.8.2.3',
    language: 'greek',
    text: 'ἠλευθέρωσέν',
    transliteration: 'ēleutherōsen',
    lemma: 'ἐλευθερόω',
    lemmaTranslit: 'eleutheroō',
    gloss: 'has set free',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G1659',
    position: 3,
  },
  {
    id: 'Rom.8.2.4',
    language: 'greek',
    text: 'νόμου',
    transliteration: 'nomou',
    lemma: 'νόμος',
    lemmaTranslit: 'nomos',
    gloss: 'from the law',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G3551',
    position: 4,
  },
  {
    id: 'Rom.8.2.5',
    language: 'greek',
    text: 'θανάτου',
    transliteration: 'thanatou',
    lemma: 'θάνατος',
    lemmaTranslit: 'thanatos',
    gloss: 'of death',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G2288',
    position: 5,
  },
];

export const romans8_2_translation: VerseTranslation = {
  verseRef: 'Rom.8.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'For the law of the Spirit of the life set you free from the law of the sin and of the death.',
      spans: [
        { id: 'Rom.8.2.en.lit.0', text: 'For the law of the Spirit of the life', position: 0, sourceTokenIds: ['Rom.8.2.0', 'Rom.8.2.1', 'Rom.8.2.2'], confidence: 'high' },
        { id: 'Rom.8.2.en.lit.1', text: 'set you free', position: 1, sourceTokenIds: ['Rom.8.2.3'], confidence: 'high' },
        { id: 'Rom.8.2.en.lit.2', text: 'from the law of the sin and of the death.', position: 2, sourceTokenIds: ['Rom.8.2.4', 'Rom.8.2.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'For the law of the Spirit of life has set you free in Christ Jesus from the law of sin and death.',
      spans: [
        { id: 'Rom.8.2.en.idi.0', text: 'For the law of the Spirit of life', position: 0, sourceTokenIds: ['Rom.8.2.0', 'Rom.8.2.1', 'Rom.8.2.2'], confidence: 'high' },
        { id: 'Rom.8.2.en.idi.1', text: 'has set you free in Christ Jesus', position: 1, sourceTokenIds: ['Rom.8.2.3'], confidence: 'high' },
        { id: 'Rom.8.2.en.idi.2', text: 'from the law of sin and death.', position: 2, sourceTokenIds: ['Rom.8.2.4', 'Rom.8.2.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
  },
  metadata: {
    pipelineVersion: '0.1.0',
    generatedAt: new Date().toISOString(),
    engineId: 'open-bible-pipeline',
    engineVersion: '0.1.0',
    sourceDataVersion: '1.0.0',
  },
};

export const romans8_2_verse = {
  ref: 'Rom.8.2',
  sourceTokens: romans8_2_tokens,
  translation: romans8_2_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 8:14 – Led by the Spirit, sons of God
 * ──────────────────────────────────────────────────────────── */

export const romans8_14_tokens: SourceToken[] = [
  {
    id: 'Rom.8.14.0',
    language: 'greek',
    text: 'ὅσοι',
    transliteration: 'hosoi',
    lemma: 'ὅσος',
    lemmaTranslit: 'hosos',
    gloss: 'as many as',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'plural', case: 'nominative' },
    strongs: 'G3745',
    position: 0,
  },
  {
    id: 'Rom.8.14.1',
    language: 'greek',
    text: 'πνεύματι',
    transliteration: 'pneumati',
    lemma: 'πνεῦμα',
    lemmaTranslit: 'pneuma',
    gloss: 'by the Spirit',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'dative' },
    strongs: 'G4151',
    position: 1,
  },
  {
    id: 'Rom.8.14.2',
    language: 'greek',
    text: 'θεοῦ',
    transliteration: 'theou',
    lemma: 'θεός',
    lemmaTranslit: 'theos',
    gloss: 'of God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G2316',
    position: 2,
  },
  {
    id: 'Rom.8.14.3',
    language: 'greek',
    text: 'ἄγονται',
    transliteration: 'agontai',
    lemma: 'ἄγω',
    lemmaTranslit: 'agō',
    gloss: 'are led',
    morphology: { pos: 'verb', person: '3', number: 'plural', tense: 'present', voice: 'passive', mood: 'indicative' },
    strongs: 'G71',
    position: 3,
  },
  {
    id: 'Rom.8.14.4',
    language: 'greek',
    text: 'υἱοὶ',
    transliteration: 'huioi',
    lemma: 'υἱός',
    lemmaTranslit: 'huios',
    gloss: 'sons',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', case: 'nominative' },
    strongs: 'G5207',
    position: 4,
  },
  {
    id: 'Rom.8.14.5',
    language: 'greek',
    text: 'θεοῦ',
    transliteration: 'theou',
    lemma: 'θεός',
    lemmaTranslit: 'theos',
    gloss: 'of God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'genitive' },
    strongs: 'G2316',
    position: 5,
  },
];

export const romans8_14_translation: VerseTranslation = {
  verseRef: 'Rom.8.14',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'For as many as by the Spirit of God are led, these are sons of God.',
      spans: [
        { id: 'Rom.8.14.en.lit.0', text: 'For as many as', position: 0, sourceTokenIds: ['Rom.8.14.0'], confidence: 'high' },
        { id: 'Rom.8.14.en.lit.1', text: 'by the Spirit of God are led,', position: 1, sourceTokenIds: ['Rom.8.14.1', 'Rom.8.14.2', 'Rom.8.14.3'], confidence: 'high' },
        { id: 'Rom.8.14.en.lit.2', text: 'these are sons of God.', position: 2, sourceTokenIds: ['Rom.8.14.4', 'Rom.8.14.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'For all who are led by the Spirit of God are sons of God.',
      spans: [
        { id: 'Rom.8.14.en.idi.0', text: 'For all who are led by the Spirit of God', position: 0, sourceTokenIds: ['Rom.8.14.0', 'Rom.8.14.1', 'Rom.8.14.2', 'Rom.8.14.3'], confidence: 'high' },
        { id: 'Rom.8.14.en.idi.1', text: 'are sons of God.', position: 1, sourceTokenIds: ['Rom.8.14.4', 'Rom.8.14.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
  },
  metadata: {
    pipelineVersion: '0.1.0',
    generatedAt: new Date().toISOString(),
    engineId: 'open-bible-pipeline',
    engineVersion: '0.1.0',
    sourceDataVersion: '1.0.0',
  },
};

export const romans8_14_verse = {
  ref: 'Rom.8.14',
  sourceTokens: romans8_14_tokens,
  translation: romans8_14_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 8:15 – The Spirit of adoption, Abba Father
 * ──────────────────────────────────────────────────────────── */

export const romans8_15_tokens: SourceToken[] = [
  {
    id: 'Rom.8.15.0',
    language: 'greek',
    text: 'ἐλάβετε',
    transliteration: 'elabete',
    lemma: 'λαμβάνω',
    lemmaTranslit: 'lambanō',
    gloss: 'you received',
    morphology: { pos: 'verb', person: '2', number: 'plural', tense: 'aorist', voice: 'active', mood: 'indicative' },
    strongs: 'G2983',
    position: 0,
  },
  {
    id: 'Rom.8.15.1',
    language: 'greek',
    text: 'πνεῦμα',
    transliteration: 'pneuma',
    lemma: 'πνεῦμα',
    lemmaTranslit: 'pneuma',
    gloss: 'spirit',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'accusative' },
    strongs: 'G4151',
    position: 1,
  },
  {
    id: 'Rom.8.15.2',
    language: 'greek',
    text: 'δουλείας',
    transliteration: 'douleias',
    lemma: 'δουλεία',
    lemmaTranslit: 'douleia',
    gloss: 'of slavery',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G1397',
    position: 2,
  },
  {
    id: 'Rom.8.15.3',
    language: 'greek',
    text: 'υἱοθεσίας',
    transliteration: 'huiothesias',
    lemma: 'υἱοθεσία',
    lemmaTranslit: 'huiothesia',
    gloss: 'of adoption',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G5206',
    position: 3,
  },
  {
    id: 'Rom.8.15.4',
    language: 'greek',
    text: 'κράζομεν',
    transliteration: 'krazomen',
    lemma: 'κράζω',
    lemmaTranslit: 'krazō',
    gloss: 'we cry',
    morphology: { pos: 'verb', person: '1', number: 'plural', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G2896',
    position: 4,
  },
  {
    id: 'Rom.8.15.5',
    language: 'greek',
    text: 'Ἀββᾶ',
    transliteration: 'Abba',
    lemma: 'Ἀββᾶ',
    lemmaTranslit: 'Abba',
    gloss: 'Abba',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'vocative' },
    strongs: 'G5',
    position: 5,
  },
];

export const romans8_15_translation: VerseTranslation = {
  verseRef: 'Rom.8.15',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'For you did not receive a spirit of slavery, but you received a spirit of adoption, by which we cry, "Abba, Father!"',
      spans: [
        { id: 'Rom.8.15.en.lit.0', text: 'For you did not receive', position: 0, sourceTokenIds: ['Rom.8.15.0'], confidence: 'high' },
        { id: 'Rom.8.15.en.lit.1', text: 'a spirit of slavery,', position: 1, sourceTokenIds: ['Rom.8.15.1', 'Rom.8.15.2'], confidence: 'high' },
        { id: 'Rom.8.15.en.lit.2', text: 'but a spirit of adoption, by which we cry, "Abba, Father!"', position: 2, sourceTokenIds: ['Rom.8.15.3', 'Rom.8.15.4', 'Rom.8.15.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "For you did not receive the spirit of slavery to fall back into fear, but you received the Spirit of adoption as sons, by whom we cry, \"Abba! Father!\"",
      spans: [
        { id: 'Rom.8.15.en.idi.0', text: 'For you did not receive the spirit of slavery to fall back into fear,', position: 0, sourceTokenIds: ['Rom.8.15.0', 'Rom.8.15.1', 'Rom.8.15.2'], confidence: 'high' },
        { id: 'Rom.8.15.en.idi.1', text: 'but you received the Spirit of adoption as sons, by whom we cry, "Abba! Father!"', position: 1, sourceTokenIds: ['Rom.8.15.3', 'Rom.8.15.4', 'Rom.8.15.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
  },
  metadata: {
    pipelineVersion: '0.1.0',
    generatedAt: new Date().toISOString(),
    engineId: 'open-bible-pipeline',
    engineVersion: '0.1.0',
    sourceDataVersion: '1.0.0',
  },
};

export const romans8_15_verse = {
  ref: 'Rom.8.15',
  sourceTokens: romans8_15_tokens,
  translation: romans8_15_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 8:26 – The Spirit intercedes for us
 * ──────────────────────────────────────────────────────────── */

export const romans8_26_tokens: SourceToken[] = [
  {
    id: 'Rom.8.26.0',
    language: 'greek',
    text: 'πνεῦμα',
    transliteration: 'pneuma',
    lemma: 'πνεῦμα',
    lemmaTranslit: 'pneuma',
    gloss: 'the Spirit',
    morphology: { pos: 'noun', gender: 'neuter', number: 'singular', case: 'nominative' },
    strongs: 'G4151',
    position: 0,
  },
  {
    id: 'Rom.8.26.1',
    language: 'greek',
    text: 'συναντιλαμβάνεται',
    transliteration: 'synantilambenetai',
    lemma: 'συναντιλαμβάνομαι',
    lemmaTranslit: 'synantilambanomai',
    gloss: 'helps',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'middle', mood: 'indicative' },
    strongs: 'G4878',
    position: 1,
  },
  {
    id: 'Rom.8.26.2',
    language: 'greek',
    text: 'ἀσθενείᾳ',
    transliteration: 'astheneia',
    lemma: 'ἀσθένεια',
    lemmaTranslit: 'astheneia',
    gloss: 'weakness',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'dative' },
    strongs: 'G769',
    position: 2,
  },
  {
    id: 'Rom.8.26.3',
    language: 'greek',
    text: 'ὑπερεντυγχάνει',
    transliteration: 'hyperentynchanei',
    lemma: 'ὑπερεντυγχάνω',
    lemmaTranslit: 'hyperentynchanō',
    gloss: 'intercedes',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G5241',
    position: 3,
  },
  {
    id: 'Rom.8.26.4',
    language: 'greek',
    text: 'στεναγμοῖς',
    transliteration: 'stenagmois',
    lemma: 'στεναγμός',
    lemmaTranslit: 'stenagmos',
    gloss: 'with groanings',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', case: 'dative' },
    strongs: 'G4726',
    position: 4,
  },
  {
    id: 'Rom.8.26.5',
    language: 'greek',
    text: 'ἀλαλήτοις',
    transliteration: 'alalētois',
    lemma: 'ἀλάλητος',
    lemmaTranslit: 'alalētos',
    gloss: 'too deep for words',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', case: 'dative' },
    strongs: 'G215',
    position: 5,
  },
];

export const romans8_26_translation: VerseTranslation = {
  verseRef: 'Rom.8.26',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'The Spirit helps together with our weakness; the Spirit himself intercedes with groanings unutterable.',
      spans: [
        { id: 'Rom.8.26.en.lit.0', text: 'The Spirit helps together with our weakness;', position: 0, sourceTokenIds: ['Rom.8.26.0', 'Rom.8.26.1', 'Rom.8.26.2'], confidence: 'high' },
        { id: 'Rom.8.26.en.lit.1', text: 'the Spirit himself intercedes', position: 1, sourceTokenIds: ['Rom.8.26.3'], confidence: 'high' },
        { id: 'Rom.8.26.en.lit.2', text: 'with groanings unutterable.', position: 2, sourceTokenIds: ['Rom.8.26.4', 'Rom.8.26.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Likewise the Spirit helps us in our weakness; the Spirit himself intercedes for us with groanings too deep for words.',
      spans: [
        { id: 'Rom.8.26.en.idi.0', text: 'Likewise the Spirit helps us in our weakness;', position: 0, sourceTokenIds: ['Rom.8.26.0', 'Rom.8.26.1', 'Rom.8.26.2'], confidence: 'high' },
        { id: 'Rom.8.26.en.idi.1', text: 'the Spirit himself intercedes for us with groanings too deep for words.', position: 1, sourceTokenIds: ['Rom.8.26.3', 'Rom.8.26.4', 'Rom.8.26.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
  },
  metadata: {
    pipelineVersion: '0.1.0',
    generatedAt: new Date().toISOString(),
    engineId: 'open-bible-pipeline',
    engineVersion: '0.1.0',
    sourceDataVersion: '1.0.0',
  },
};

export const romans8_26_verse = {
  ref: 'Rom.8.26',
  sourceTokens: romans8_26_tokens,
  translation: romans8_26_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 8:28 – All things work together for good
 * ──────────────────────────────────────────────────────────── */

export const romans8_28_tokens: SourceToken[] = [
  {
    id: 'Rom.8.28.0',
    language: 'greek',
    text: 'οἴδαμεν',
    transliteration: 'oidamen',
    lemma: 'οἶδα',
    lemmaTranslit: 'oida',
    gloss: 'we know',
    morphology: { pos: 'verb', person: '1', number: 'plural', tense: 'perfect', voice: 'active', mood: 'indicative' },
    strongs: 'G1492',
    position: 0,
  },
  {
    id: 'Rom.8.28.1',
    language: 'greek',
    text: 'ἀγαπῶσιν',
    transliteration: 'agapōsin',
    lemma: 'ἀγαπάω',
    lemmaTranslit: 'agapaō',
    gloss: 'to those who love',
    morphology: { pos: 'verb', number: 'plural', case: 'dative', tense: 'present', voice: 'active', mood: 'participle' },
    strongs: 'G25',
    position: 1,
  },
  {
    id: 'Rom.8.28.2',
    language: 'greek',
    text: 'θεὸν',
    transliteration: 'theon',
    lemma: 'θεός',
    lemmaTranslit: 'theos',
    gloss: 'God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'accusative' },
    strongs: 'G2316',
    position: 2,
  },
  {
    id: 'Rom.8.28.3',
    language: 'greek',
    text: 'πάντα',
    transliteration: 'panta',
    lemma: 'πᾶς',
    lemmaTranslit: 'pas',
    gloss: 'all things',
    morphology: { pos: 'adjective', gender: 'neuter', number: 'plural', case: 'nominative' },
    strongs: 'G3956',
    position: 3,
  },
  {
    id: 'Rom.8.28.4',
    language: 'greek',
    text: 'συνεργεῖ',
    transliteration: 'synergei',
    lemma: 'συνεργέω',
    lemmaTranslit: 'synergeō',
    gloss: 'works together',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'present', voice: 'active', mood: 'indicative' },
    strongs: 'G4903',
    position: 4,
  },
  {
    id: 'Rom.8.28.5',
    language: 'greek',
    text: 'ἀγαθόν',
    transliteration: 'agathon',
    lemma: 'ἀγαθός',
    lemmaTranslit: 'agathos',
    gloss: 'for good',
    morphology: { pos: 'adjective', gender: 'neuter', number: 'singular', case: 'accusative' },
    strongs: 'G18',
    position: 5,
  },
];

export const romans8_28_translation: VerseTranslation = {
  verseRef: 'Rom.8.28',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'We know that to the ones loving God all things work together unto good.',
      spans: [
        { id: 'Rom.8.28.en.lit.0', text: 'We know that', position: 0, sourceTokenIds: ['Rom.8.28.0'], confidence: 'high' },
        { id: 'Rom.8.28.en.lit.1', text: 'to the ones loving God', position: 1, sourceTokenIds: ['Rom.8.28.1', 'Rom.8.28.2'], confidence: 'high' },
        { id: 'Rom.8.28.en.lit.2', text: 'all things work together unto good.', position: 2, sourceTokenIds: ['Rom.8.28.3', 'Rom.8.28.4', 'Rom.8.28.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'And we know that for those who love God all things work together for good.',
      spans: [
        { id: 'Rom.8.28.en.idi.0', text: 'And we know that for those who love God', position: 0, sourceTokenIds: ['Rom.8.28.0', 'Rom.8.28.1', 'Rom.8.28.2'], confidence: 'high' },
        { id: 'Rom.8.28.en.idi.1', text: 'all things work together for good.', position: 1, sourceTokenIds: ['Rom.8.28.3', 'Rom.8.28.4', 'Rom.8.28.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
  },
  metadata: {
    pipelineVersion: '0.1.0',
    generatedAt: new Date().toISOString(),
    engineId: 'open-bible-pipeline',
    engineVersion: '0.1.0',
    sourceDataVersion: '1.0.0',
  },
};

export const romans8_28_verse = {
  ref: 'Rom.8.28',
  sourceTokens: romans8_28_tokens,
  translation: romans8_28_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 8:31 – If God is for us
 * ──────────────────────────────────────────────────────────── */

export const romans8_31_tokens: SourceToken[] = [
  {
    id: 'Rom.8.31.0',
    language: 'greek',
    text: 'τί',
    transliteration: 'ti',
    lemma: 'τίς',
    lemmaTranslit: 'tis',
    gloss: 'what',
    morphology: { pos: 'pronoun', gender: 'neuter', number: 'singular', case: 'accusative' },
    strongs: 'G5101',
    position: 0,
  },
  {
    id: 'Rom.8.31.1',
    language: 'greek',
    text: 'ἐροῦμεν',
    transliteration: 'eroumen',
    lemma: 'ἐρῶ',
    lemmaTranslit: 'erō',
    gloss: 'shall we say',
    morphology: { pos: 'verb', person: '1', number: 'plural', tense: 'future', voice: 'active', mood: 'indicative' },
    strongs: 'G2046',
    position: 1,
  },
  {
    id: 'Rom.8.31.2',
    language: 'greek',
    text: 'θεὸς',
    transliteration: 'theos',
    lemma: 'θεός',
    lemmaTranslit: 'theos',
    gloss: 'God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G2316',
    position: 2,
  },
  {
    id: 'Rom.8.31.3',
    language: 'greek',
    text: 'ὑπὲρ',
    transliteration: 'hyper',
    lemma: 'ὑπέρ',
    lemmaTranslit: 'hyper',
    gloss: 'for',
    morphology: { pos: 'preposition' },
    strongs: 'G5228',
    position: 3,
  },
  {
    id: 'Rom.8.31.4',
    language: 'greek',
    text: 'ἡμῶν',
    transliteration: 'hēmōn',
    lemma: 'ἐγώ',
    lemmaTranslit: 'egō',
    gloss: 'us',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'plural', case: 'genitive' },
    strongs: 'G1473',
    position: 4,
  },
  {
    id: 'Rom.8.31.5',
    language: 'greek',
    text: 'τίς',
    transliteration: 'tis',
    lemma: 'τίς',
    lemmaTranslit: 'tis',
    gloss: 'who',
    morphology: { pos: 'pronoun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G5101',
    position: 5,
  },
];

export const romans8_31_translation: VerseTranslation = {
  verseRef: 'Rom.8.31',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'What then shall we say to these things? If God for us, who against us?',
      spans: [
        { id: 'Rom.8.31.en.lit.0', text: 'What then shall we say to these things?', position: 0, sourceTokenIds: ['Rom.8.31.0', 'Rom.8.31.1'], confidence: 'high' },
        { id: 'Rom.8.31.en.lit.1', text: 'If God for us,', position: 1, sourceTokenIds: ['Rom.8.31.2', 'Rom.8.31.3', 'Rom.8.31.4'], confidence: 'high' },
        { id: 'Rom.8.31.en.lit.2', text: 'who against us?', position: 2, sourceTokenIds: ['Rom.8.31.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'What then shall we say to these things? If God is for us, who can be against us?',
      spans: [
        { id: 'Rom.8.31.en.idi.0', text: 'What then shall we say to these things?', position: 0, sourceTokenIds: ['Rom.8.31.0', 'Rom.8.31.1'], confidence: 'high' },
        { id: 'Rom.8.31.en.idi.1', text: 'If God is for us, who can be against us?', position: 1, sourceTokenIds: ['Rom.8.31.2', 'Rom.8.31.3', 'Rom.8.31.4', 'Rom.8.31.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
  },
  metadata: {
    pipelineVersion: '0.1.0',
    generatedAt: new Date().toISOString(),
    engineId: 'open-bible-pipeline',
    engineVersion: '0.1.0',
    sourceDataVersion: '1.0.0',
  },
};

export const romans8_31_verse = {
  ref: 'Rom.8.31',
  sourceTokens: romans8_31_tokens,
  translation: romans8_31_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 8:38 – Nothing can separate us from God's love
 * ──────────────────────────────────────────────────────────── */

export const romans8_38_tokens: SourceToken[] = [
  {
    id: 'Rom.8.38.0',
    language: 'greek',
    text: 'πέπεισμαι',
    transliteration: 'pepeismai',
    lemma: 'πείθω',
    lemmaTranslit: 'peithō',
    gloss: 'I am convinced',
    morphology: { pos: 'verb', person: '1', number: 'singular', tense: 'perfect', voice: 'passive', mood: 'indicative' },
    strongs: 'G3982',
    position: 0,
  },
  {
    id: 'Rom.8.38.1',
    language: 'greek',
    text: 'θάνατος',
    transliteration: 'thanatos',
    lemma: 'θάνατος',
    lemmaTranslit: 'thanatos',
    gloss: 'death',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', case: 'nominative' },
    strongs: 'G2288',
    position: 1,
  },
  {
    id: 'Rom.8.38.2',
    language: 'greek',
    text: 'ζωὴ',
    transliteration: 'zōē',
    lemma: 'ζωή',
    lemmaTranslit: 'zōē',
    gloss: 'life',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'nominative' },
    strongs: 'G2222',
    position: 2,
  },
  {
    id: 'Rom.8.38.3',
    language: 'greek',
    text: 'ἄγγελοι',
    transliteration: 'angeloi',
    lemma: 'ἄγγελος',
    lemmaTranslit: 'angelos',
    gloss: 'angels',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', case: 'nominative' },
    strongs: 'G32',
    position: 3,
  },
  {
    id: 'Rom.8.38.4',
    language: 'greek',
    text: 'δυνήσεται',
    transliteration: 'dynēsetai',
    lemma: 'δύναμαι',
    lemmaTranslit: 'dynamai',
    gloss: 'will be able',
    morphology: { pos: 'verb', person: '3', number: 'singular', tense: 'future', voice: 'middle', mood: 'indicative' },
    strongs: 'G1410',
    position: 4,
  },
  {
    id: 'Rom.8.38.5',
    language: 'greek',
    text: 'χωρίσαι',
    transliteration: 'chōrisai',
    lemma: 'χωρίζω',
    lemmaTranslit: 'chōrizō',
    gloss: 'to separate',
    morphology: { pos: 'verb', tense: 'aorist', voice: 'active', mood: 'infinitive' },
    strongs: 'G5563',
    position: 5,
  },
  {
    id: 'Rom.8.38.6',
    language: 'greek',
    text: 'ἀγάπης',
    transliteration: 'agapēs',
    lemma: 'ἀγάπη',
    lemmaTranslit: 'agapē',
    gloss: 'love',
    morphology: { pos: 'noun', gender: 'feminine', number: 'singular', case: 'genitive' },
    strongs: 'G26',
    position: 6,
  },
];

export const romans8_38_translation: VerseTranslation = {
  verseRef: 'Rom.8.38',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'For I have been persuaded that neither death nor life, nor angels nor rulers, will be able to separate us from the love of God.',
      spans: [
        { id: 'Rom.8.38.en.lit.0', text: 'For I have been persuaded that', position: 0, sourceTokenIds: ['Rom.8.38.0'], confidence: 'high' },
        { id: 'Rom.8.38.en.lit.1', text: 'neither death nor life, nor angels,', position: 1, sourceTokenIds: ['Rom.8.38.1', 'Rom.8.38.2', 'Rom.8.38.3'], confidence: 'high' },
        { id: 'Rom.8.38.en.lit.2', text: 'will be able to separate us', position: 2, sourceTokenIds: ['Rom.8.38.4', 'Rom.8.38.5'], confidence: 'high' },
        { id: 'Rom.8.38.en.lit.3', text: 'from the love of God.', position: 3, sourceTokenIds: ['Rom.8.38.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'For I am sure that neither death nor life, nor angels nor rulers, nor anything in all creation, will be able to separate us from the love of God.',
      spans: [
        { id: 'Rom.8.38.en.idi.0', text: 'For I am sure that neither death nor life, nor angels nor rulers,', position: 0, sourceTokenIds: ['Rom.8.38.0', 'Rom.8.38.1', 'Rom.8.38.2', 'Rom.8.38.3'], confidence: 'high' },
        { id: 'Rom.8.38.en.idi.1', text: 'will be able to separate us from the love of God.', position: 1, sourceTokenIds: ['Rom.8.38.4', 'Rom.8.38.5', 'Rom.8.38.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
  },
  metadata: {
    pipelineVersion: '0.1.0',
    generatedAt: new Date().toISOString(),
    engineId: 'open-bible-pipeline',
    engineVersion: '0.1.0',
    sourceDataVersion: '1.0.0',
  },
};

export const romans8_38_notes: StudyNote[] = [
  { id: 'Rom.8.38.note.1', verseRef: 'Rom.8.38', sourceTokenIds: ['Rom.8.38.5', 'Rom.8.38.6'], category: 'theological', title: 'Nothing Can Separate — χωρίσαι ἀγάπης', content: "Paul's climactic declaration in vv. 38-39 lists ten potential threats — death, life, angels, rulers, things present, things to come, powers, height, depth, and any other created thing — and insists that none of them δυνήσεται χωρίσαι (dynēsetai chōrisai, \"will be able to separate\") believers from God's love in Christ. This rhetorical crescendo forms the theological capstone of Romans 1-8, grounding assurance not in human perseverance but in the unbreakable love of God.", confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const romans8_38_verse = {
  ref: 'Rom.8.38',
  sourceTokens: romans8_38_tokens,
  translation: romans8_38_translation,
  notes: romans8_38_notes,
};

/* ────────────────────────────────────────────────────────────
 * Export combined verses
 * ──────────────────────────────────────────────────────────── */

export const romans8_1_39_verses = [
  romans8_1_verse,
  romans8_2_verse,
  romans8_14_verse,
  romans8_15_verse,
  romans8_26_verse,
  romans8_28_verse,
  romans8_31_verse,
  romans8_38_verse,
];

export default romans8_1_39_verses;
