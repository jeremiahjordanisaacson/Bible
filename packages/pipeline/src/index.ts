/**
 * Open Bible Translation Pipeline
 *
 * A staged pipeline for:
 * 1. Ingesting source texts (Hebrew, Greek, Aramaic)
 * 2. Tokenizing and attaching morphology
 * 3. Generating translations at multiple layers
 * 4. Creating alignments between source and target
 * 5. Generating study notes
 * 6. Building search indexes
 */

export * from './stages/ingest';
export * from './stages/tokenize';
export * from './stages/translate';
export * from './stages/align';
export * from './stages/notes';
export * from './stages/index-builder';
export * from './engines/translation-engine';
export * from './pipeline';
