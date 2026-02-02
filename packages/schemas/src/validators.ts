import { z } from 'zod';
import { SourceToken, VerseTokens } from './types/source-token';
import { Verse, VerseRef } from './types/verse';
import { VerseTranslation, TranslationLayer } from './types/translation';
import { VerseAlignment, AlignmentMapping } from './types/alignment';
import { StudyNote, VerseNotes } from './types/notes';
import { VariantUnit, VerseVariants } from './types/variants';
import { BookManifest } from './types/book';

/**
 * Validation result
 */
export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
  warnings: ValidationWarning[];
}

export interface ValidationError {
  path: string;
  message: string;
  code: string;
}

export interface ValidationWarning {
  path: string;
  message: string;
  code: string;
}

/**
 * Convert Zod errors to our format
 */
function zodErrorsToValidationErrors(error: z.ZodError): ValidationError[] {
  return error.errors.map((e) => ({
    path: e.path.join('.'),
    message: e.message,
    code: e.code,
  }));
}

/**
 * Validate a source token
 */
export function validateSourceToken(data: unknown): ValidationResult {
  const result = SourceToken.safeParse(data);
  if (result.success) {
    return { valid: true, errors: [], warnings: [] };
  }
  return {
    valid: false,
    errors: zodErrorsToValidationErrors(result.error),
    warnings: [],
  };
}

/**
 * Validate a verse
 */
export function validateVerse(data: unknown): ValidationResult {
  const result = Verse.safeParse(data);
  const warnings: ValidationWarning[] = [];

  if (result.success) {
    // Additional semantic validations
    const verse = result.data;

    // Check token IDs are unique
    const tokenIds = verse.sourceTokens.map((t) => t.id);
    const uniqueIds = new Set(tokenIds);
    if (uniqueIds.size !== tokenIds.length) {
      warnings.push({
        path: 'sourceTokens',
        message: 'Duplicate token IDs found',
        code: 'DUPLICATE_TOKEN_IDS',
      });
    }

    // Check segment references valid tokens
    for (const segment of verse.segments) {
      for (const tokenId of segment.sourceTokenIds) {
        if (!tokenIds.includes(tokenId)) {
          warnings.push({
            path: `segments.${segment.id}`,
            message: `Segment references non-existent token: ${tokenId}`,
            code: 'INVALID_TOKEN_REFERENCE',
          });
        }
      }
    }

    return { valid: true, errors: [], warnings };
  }

  return {
    valid: false,
    errors: zodErrorsToValidationErrors(result.error),
    warnings: [],
  };
}

/**
 * Validate a translation
 */
export function validateTranslation(data: unknown): ValidationResult {
  const result = VerseTranslation.safeParse(data);
  if (result.success) {
    return { valid: true, errors: [], warnings: [] };
  }
  return {
    valid: false,
    errors: zodErrorsToValidationErrors(result.error),
    warnings: [],
  };
}

/**
 * Validate alignment data
 */
export function validateAlignment(data: unknown): ValidationResult {
  const result = VerseAlignment.safeParse(data);
  if (result.success) {
    return { valid: true, errors: [], warnings: [] };
  }
  return {
    valid: false,
    errors: zodErrorsToValidationErrors(result.error),
    warnings: [],
  };
}

/**
 * Validate alignment integrity between translation and source
 */
export function validateAlignmentIntegrity(
  alignment: VerseAlignment,
  sourceTokenIds: string[],
  translationSpanIds: string[]
): ValidationResult {
  const errors: ValidationError[] = [];
  const warnings: ValidationWarning[] = [];

  // Check all source tokens in alignments exist
  for (const mapping of alignment.alignments) {
    for (const tokenId of mapping.sourceTokenIds) {
      if (!sourceTokenIds.includes(tokenId)) {
        errors.push({
          path: `alignments.${mapping.id}.sourceTokenIds`,
          message: `References non-existent source token: ${tokenId}`,
          code: 'INVALID_SOURCE_TOKEN',
        });
      }
    }

    // Check target span exists
    if (!translationSpanIds.includes(mapping.targetSpanId)) {
      errors.push({
        path: `alignments.${mapping.id}.targetSpanId`,
        message: `References non-existent target span: ${mapping.targetSpanId}`,
        code: 'INVALID_TARGET_SPAN',
      });
    }
  }

  // Check for unaligned tokens
  const alignedTokens = new Set(
    alignment.alignments.flatMap((a) => a.sourceTokenIds)
  );
  for (const tokenId of sourceTokenIds) {
    if (!alignedTokens.has(tokenId)) {
      warnings.push({
        path: 'coverage',
        message: `Source token not aligned: ${tokenId}`,
        code: 'UNALIGNED_TOKEN',
      });
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Validate notes
 */
export function validateNotes(data: unknown): ValidationResult {
  const result = VerseNotes.safeParse(data);
  if (result.success) {
    return { valid: true, errors: [], warnings: [] };
  }
  return {
    valid: false,
    errors: zodErrorsToValidationErrors(result.error),
    warnings: [],
  };
}

/**
 * Validate variants
 */
export function validateVariants(data: unknown): ValidationResult {
  const result = VerseVariants.safeParse(data);
  if (result.success) {
    return { valid: true, errors: [], warnings: [] };
  }
  return {
    valid: false,
    errors: zodErrorsToValidationErrors(result.error),
    warnings: [],
  };
}

/**
 * Validate a book manifest
 */
export function validateBookManifest(data: unknown): ValidationResult {
  const result = BookManifest.safeParse(data);
  if (result.success) {
    return { valid: true, errors: [], warnings: [] };
  }
  return {
    valid: false,
    errors: zodErrorsToValidationErrors(result.error),
    warnings: [],
  };
}

/**
 * Validate verse reference format
 */
export function validateVerseRef(ref: string): boolean {
  const pattern = /^[A-Z][a-zA-Z0-9]+\.\d+\.\d+[a-z]?$/;
  return pattern.test(ref);
}

/**
 * Batch validation for multiple items
 */
export function batchValidate<T>(
  items: T[],
  validator: (item: T) => ValidationResult
): {
  totalItems: number;
  validItems: number;
  invalidItems: number;
  allErrors: Array<{ index: number; errors: ValidationError[] }>;
  allWarnings: Array<{ index: number; warnings: ValidationWarning[] }>;
} {
  const results = items.map((item, index) => ({
    index,
    result: validator(item),
  }));

  return {
    totalItems: items.length,
    validItems: results.filter((r) => r.result.valid).length,
    invalidItems: results.filter((r) => !r.result.valid).length,
    allErrors: results
      .filter((r) => r.result.errors.length > 0)
      .map((r) => ({ index: r.index, errors: r.result.errors })),
    allWarnings: results
      .filter((r) => r.result.warnings.length > 0)
      .map((r) => ({ index: r.index, warnings: r.result.warnings })),
  };
}
