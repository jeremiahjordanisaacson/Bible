import { z } from 'zod';

/**
 * Manuscript tradition/family
 */
export const ManuscriptTradition = z.enum([
  'MT',           // Masoretic Text (Hebrew OT)
  'LXX',          // Septuagint (Greek OT)
  'SP',           // Samaritan Pentateuch
  'DSS',          // Dead Sea Scrolls
  'NA28',         // Nestle-Aland 28th (Greek NT critical text)
  'UBS5',         // United Bible Societies 5th
  'Byzantine',    // Byzantine text-type
  'Alexandrian',  // Alexandrian text-type
  'Western',      // Western text-type
  'TR',           // Textus Receptus
  'Vulgate',      // Latin Vulgate
  'Peshitta',     // Syriac Peshitta
  'other',        // Other tradition
]);
export type ManuscriptTradition = z.infer<typeof ManuscriptTradition>;

/**
 * Witness/manuscript reference
 */
export const Witness = z.object({
  /** Manuscript siglum/identifier */
  siglum: z.string(),
  /** Full name */
  name: z.string(),
  /** Tradition it belongs to */
  tradition: ManuscriptTradition,
  /** Date (century or specific) */
  date: z.string().optional(),
  /** Brief description */
  description: z.string().optional(),
});
export type Witness = z.infer<typeof Witness>;

/**
 * A textual variant reading
 */
export const VariantReading = z.object({
  /** Unique ID for this reading */
  id: z.string(),
  /** The text of this reading */
  text: z.string(),
  /** Transliteration */
  transliteration: z.string(),
  /** Translation of this reading */
  translation: z.string().optional(),
  /** Witnesses/manuscripts supporting this reading */
  witnesses: z.array(z.string()),
  /** Traditions supporting this reading */
  traditions: z.array(ManuscriptTradition),
  /** Whether this is the reading adopted in our base text */
  isPrimary: z.boolean(),
  /** Brief note on this reading */
  note: z.string().optional(),
});
export type VariantReading = z.infer<typeof VariantReading>;

/**
 * A variant unit (location with multiple readings)
 */
export const VariantUnit = z.object({
  /** Unique ID */
  id: z.string(),
  /** Verse reference */
  verseRef: z.string(),
  /** Source token IDs affected */
  sourceTokenIds: z.array(z.string()),
  /** Starting word position in verse */
  startPosition: z.number().int().nonnegative(),
  /** Ending word position */
  endPosition: z.number().int().nonnegative(),
  /** All variant readings */
  readings: z.array(VariantReading),
  /** Significance level */
  significance: z.enum([
    'minor',           // Spelling, minor grammar
    'moderate',        // Affects translation but not meaning
    'significant',     // Affects interpretation
    'major',           // Major theological/interpretive impact
  ]),
  /** Plain language explanation of the impact */
  impactExplanation: z.string(),
  /** Category of variant */
  category: z.enum([
    'addition',        // Text present in some witnesses
    'omission',        // Text absent in some witnesses
    'substitution',    // Different word/phrase
    'transposition',   // Different word order
    'spelling',        // Spelling variation
  ]),
  /** References to text-critical discussions */
  references: z.array(z.string()).optional(),
});
export type VariantUnit = z.infer<typeof VariantUnit>;

/**
 * Collection of variants for a verse
 */
export const VerseVariants = z.object({
  /** Verse reference */
  verseRef: z.string(),
  /** All variant units in this verse */
  variants: z.array(VariantUnit),
  /** Total variant count */
  variantCount: z.number().int().nonnegative(),
  /** Whether any significant variants exist */
  hasSignificantVariants: z.boolean(),
  /** Base text used */
  baseText: ManuscriptTradition,
});
export type VerseVariants = z.infer<typeof VerseVariants>;
