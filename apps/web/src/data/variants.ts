/**
 * Sample textual variants data
 * Demonstrates the variant display system
 */

import type { VariantUnit, VerseVariants } from '@open-bible/schemas';

/**
 * John 1:18 - A famous textual variant
 * "the only begotten Son" vs "the only begotten God"
 */
export const john1_18_variants: VerseVariants = {
  verseRef: 'John.1.18',
  variants: [
    {
      id: 'John.1.18.var.1',
      verseRef: 'John.1.18',
      sourceTokenIds: ['John.1.18.4', 'John.1.18.5'],
      startPosition: 4,
      endPosition: 5,
      readings: [
        {
          id: 'John.1.18.var.1.a',
          text: 'μονογενὴς θεός',
          transliteration: 'monogenēs theos',
          translation: 'the only begotten God',
          witnesses: ['P66', 'P75', 'א*', 'B', 'C*'],
          traditions: ['Alexandrian'],
          isPrimary: true,
          note: 'Earliest and best manuscripts',
        },
        {
          id: 'John.1.18.var.1.b',
          text: 'ὁ μονογενὴς υἱός',
          transliteration: 'ho monogenēs huios',
          translation: 'the only begotten Son',
          witnesses: ['A', 'C³', 'Θ', 'Ψ', 'f¹', 'f¹³', '33', 'Byz'],
          traditions: ['Byzantine', 'Western'],
          isPrimary: false,
          note: 'Later manuscripts, harmonization with common Johannine usage',
        },
      ],
      significance: 'major',
      impactExplanation: 'This variant affects the understanding of Christ\'s nature. "Only begotten God" (μονογενὴς θεός) is a more difficult reading that explicitly attributes deity to Christ, while "only begotten Son" (ὁ μονογενὴς υἱός) aligns with more common Johannine terminology. The harder reading is generally preferred as scribes would more likely change "God" to "Son" than vice versa.',
      category: 'substitution',
      references: ['Metzger, Textual Commentary, 169-170', 'Wallace, "The Gospel According to John"'],
    },
  ],
  variantCount: 1,
  hasSignificantVariants: true,
  baseText: 'NA28',
};

/**
 * Mark 1:1 - "Son of God" present or absent?
 */
export const mark1_1_variants: VerseVariants = {
  verseRef: 'Mark.1.1',
  variants: [
    {
      id: 'Mark.1.1.var.1',
      verseRef: 'Mark.1.1',
      sourceTokenIds: ['Mark.1.1.5', 'Mark.1.1.6'],
      startPosition: 5,
      endPosition: 6,
      readings: [
        {
          id: 'Mark.1.1.var.1.a',
          text: 'υἱοῦ θεοῦ',
          transliteration: 'huiou theou',
          translation: 'Son of God',
          witnesses: ['א', 'B', 'D', 'L', 'W'],
          traditions: ['Alexandrian'],
          isPrimary: true,
          note: 'Included in most early manuscripts',
        },
        {
          id: 'Mark.1.1.var.1.b',
          text: '(omitted)',
          transliteration: '',
          translation: '',
          witnesses: ['Θ', '28', '1555'],
          traditions: ['other'],
          isPrimary: false,
          note: 'Absent in some manuscripts; possibly omitted by scribal error (homoioteleuton)',
        },
      ],
      significance: 'significant',
      impactExplanation: 'The phrase "Son of God" is present in most manuscripts but absent in a few. If original, it establishes the divine identity of Jesus from the very first verse of Mark. If secondary, it may be a later scribal addition influenced by the rest of the Gospel. Most scholars accept it as original.',
      category: 'omission',
      references: ['Metzger, Textual Commentary, 62'],
    },
  ],
  variantCount: 1,
  hasSignificantVariants: true,
  baseText: 'NA28',
};

/**
 * 1 John 5:7-8 - The Comma Johanneum
 * Most famous textual addition
 */
export const firstJohn5_7_variants: VerseVariants = {
  verseRef: '1John.5.7',
  variants: [
    {
      id: '1John.5.7.var.1',
      verseRef: '1John.5.7',
      sourceTokenIds: ['1John.5.7.1', '1John.5.7.2', '1John.5.7.3'],
      startPosition: 1,
      endPosition: 20,
      readings: [
        {
          id: '1John.5.7.var.1.a',
          text: 'ὅτι τρεῖς εἰσιν οἱ μαρτυροῦντες, τὸ πνεῦμα καὶ τὸ ὕδωρ καὶ τὸ αἷμα',
          transliteration: 'hoti treis eisin hoi martyrountes, to pneuma kai to hydōr kai to haima',
          translation: 'For there are three that testify: the Spirit, the water, and the blood',
          witnesses: ['P74', 'א', 'A', 'B', '048', '33'],
          traditions: ['Alexandrian', 'NA28'],
          isPrimary: true,
          note: 'All Greek manuscripts before the 16th century',
        },
        {
          id: '1John.5.7.var.1.b',
          text: 'ὅτι τρεῖς εἰσιν οἱ μαρτυροῦντες ἐν τῷ οὐρανῷ, ὁ πατήρ, ὁ λόγος, καὶ τὸ ἅγιον πνεῦμα· καὶ οὗτοι οἱ τρεῖς ἕν εἰσι. καὶ τρεῖς εἰσιν οἱ μαρτυροῦντες ἐν τῇ γῇ, τὸ πνεῦμα καὶ τὸ ὕδωρ καὶ τὸ αἷμα',
          transliteration: '(Comma Johanneum)',
          translation: 'For there are three that bear record in heaven, the Father, the Word, and the Holy Ghost: and these three are one. And there are three that bear witness in earth, the Spirit, and the water, and the blood',
          witnesses: ['61', '629', 'Vulgate (some)', 'TR'],
          traditions: ['TR'],
          isPrimary: false,
          note: 'The "Comma Johanneum" - added in Latin tradition, translated back to Greek in 16th century',
        },
      ],
      significance: 'major',
      impactExplanation: 'The Comma Johanneum is a famous later addition to the text that explicitly mentions the Trinity ("the Father, the Word, and the Holy Ghost"). It is absent from ALL Greek manuscripts before the 16th century and appears to have originated in Latin commentaries before being added to some Latin Bibles. Erasmus famously added it to his 3rd edition Greek NT under pressure, though he doubted its authenticity. No modern critical text includes it.',
      category: 'addition',
      references: ['Metzger, Textual Commentary, 647-649', 'Ehrman, The Orthodox Corruption of Scripture, 45-46'],
    },
  ],
  variantCount: 1,
  hasSignificantVariants: true,
  baseText: 'NA28',
};

/**
 * Get variants for a verse
 */
export function getVariantsForVerse(verseRef: string): VerseVariants | null {
  const variants: Record<string, VerseVariants> = {
    'John.1.18': john1_18_variants,
    'Mark.1.1': mark1_1_variants,
    '1John.5.7': firstJohn5_7_variants,
  };
  return variants[verseRef] || null;
}

/**
 * Sample verses with variants for demonstration
 */
export const versesWithVariants = [
  'John.1.18',
  'Mark.1.1',
  '1John.5.7',
];

const variantsModule = {
  john1_18_variants,
  mark1_1_variants,
  firstJohn5_7_variants,
  getVariantsForVerse,
  versesWithVariants,
};

export default variantsModule;
