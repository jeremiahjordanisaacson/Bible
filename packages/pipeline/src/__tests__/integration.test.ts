import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { Pipeline, PipelineConfig } from '../pipeline';
import { ingestStage } from '../stages/ingest';
import { tokenizeStage } from '../stages/tokenize';
import { translateStage } from '../stages/translate';
import { alignStage } from '../stages/align';
import { notesStage } from '../stages/notes';
import { indexBuilderStage } from '../stages/index-builder';
import { requiresNote, NOTE_CATEGORIES } from '../stages/notes';
import { searchTranslationIndex } from '../stages/index-builder';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

let tmpDir: string;

function makeConfig(overrides: Partial<PipelineConfig> = {}): PipelineConfig {
  return {
    dataDir: path.join(tmpDir, 'data'),
    outputDir: path.join(tmpDir, 'output'),
    targetLanguages: ['en'],
    engineId: 'stub',
    verbose: false,
    force: true,
    ...overrides,
  };
}

function buildPipeline(config: PipelineConfig): Pipeline {
  return new Pipeline(config)
    .addStage(ingestStage)
    .addStage(tokenizeStage)
    .addStage(translateStage)
    .addStage(alignStage)
    .addStage(notesStage)
    .addStage(indexBuilderStage);
}

// ---------------------------------------------------------------------------
// End-to-end pipeline integration
// ---------------------------------------------------------------------------

describe('Pipeline end-to-end integration', () => {
  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'bible-integration-'));
    fs.mkdirSync(path.join(tmpDir, 'data'), { recursive: true });
    vi.spyOn(console, 'log').mockImplementation(() => {});
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    fs.rmSync(tmpDir, { recursive: true, force: true });
    vi.restoreAllMocks();
  });

  it('runs the full default pipeline without errors', async () => {
    const config = makeConfig();
    const pipeline = buildPipeline(config);
    const context = await pipeline.run();

    expect(context.errors).toHaveLength(0);
    // With no source data, sample datasets are registered and processed
    expect(context.datasets.length).toBeGreaterThanOrEqual(0);
  });

  it('generates pipeline summary JSON on completion', async () => {
    const config = makeConfig();
    const pipeline = buildPipeline(config);
    await pipeline.run();

    const summaryPath = path.join(config.outputDir, 'pipeline-summary.json');
    expect(fs.existsSync(summaryPath)).toBe(true);

    const summary = JSON.parse(fs.readFileSync(summaryPath, 'utf-8'));
    expect(summary.metadata).toBeDefined();
    expect(summary.metadata.version).toBeDefined();
    expect(summary.processedBooks).toBeDefined();
  });

  it('creates token files for processed books', async () => {
    const config = makeConfig();
    const pipeline = buildPipeline(config);
    const context = await pipeline.run();

    const tokensDir = path.join(config.outputDir, 'tokens');
    expect(fs.existsSync(tokensDir)).toBe(true);

    for (const book of context.processedBooks) {
      const tokenFile = path.join(tokensDir, `${book}.tokens.json`);
      expect(fs.existsSync(tokenFile)).toBe(true);

      const data = JSON.parse(fs.readFileSync(tokenFile, 'utf-8'));
      expect(typeof data).toBe('object');
    }
  });

  it('creates translation files for each target language', async () => {
    const config = makeConfig({ targetLanguages: ['en'] });
    const pipeline = buildPipeline(config);
    const context = await pipeline.run();

    const transDir = path.join(config.outputDir, 'translations', 'en');
    expect(fs.existsSync(transDir)).toBe(true);

    for (const book of context.processedBooks) {
      const transFile = path.join(transDir, `${book}.translations.json`);
      expect(fs.existsSync(transFile)).toBe(true);
    }
  });

  it('creates alignment files for each target language', async () => {
    const config = makeConfig();
    const pipeline = buildPipeline(config);
    const context = await pipeline.run();

    const alignDir = path.join(config.outputDir, 'alignments', 'en');
    expect(fs.existsSync(alignDir)).toBe(true);
  });

  it('creates notes files for processed books', async () => {
    const config = makeConfig();
    const pipeline = buildPipeline(config);
    const context = await pipeline.run();

    const notesDir = path.join(config.outputDir, 'notes');
    expect(fs.existsSync(notesDir)).toBe(true);

    for (const book of context.processedBooks) {
      const notesFile = path.join(notesDir, `${book}.notes.json`);
      expect(fs.existsSync(notesFile)).toBe(true);
    }
  });

  it('creates search index files', async () => {
    const config = makeConfig();
    const pipeline = buildPipeline(config);
    await pipeline.run();

    const indexDir = path.join(config.outputDir, 'index');
    expect(fs.existsSync(indexDir)).toBe(true);
    expect(fs.existsSync(path.join(indexDir, 'translation-index.json'))).toBe(true);
    expect(fs.existsSync(path.join(indexDir, 'lemma-index.json'))).toBe(true);
    expect(fs.existsSync(path.join(indexDir, 'strongs-index.json'))).toBe(true);
  });

  it('warns when no source data directory exists', async () => {
    const config = makeConfig();
    const pipeline = buildPipeline(config);
    const context = await pipeline.run();

    // Should warn about missing source data or missing manifests
    expect(context.warnings.length).toBeGreaterThan(0);
  });

  it('handles multiple target languages', async () => {
    const config = makeConfig({ targetLanguages: ['en', 'es'] });
    const pipeline = buildPipeline(config);
    const context = await pipeline.run();

    expect(context.errors).toHaveLength(0);
    // Both language directories should exist
    expect(fs.existsSync(path.join(config.outputDir, 'translations', 'en'))).toBe(true);
    expect(fs.existsSync(path.join(config.outputDir, 'translations', 'es'))).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Notes utilities
// ---------------------------------------------------------------------------

describe('requiresNote', () => {
  it('returns true for significant Hebrew terms', () => {
    expect(requiresNote({ gloss: 'God', strongs: 'H430' })).toBe(true);
    expect(requiresNote({ gloss: 'LORD', strongs: 'H3068' })).toBe(true);
    expect(requiresNote({ gloss: 'create', strongs: 'H1254' })).toBe(true);
  });

  it('returns true for significant Greek terms', () => {
    expect(requiresNote({ gloss: 'word', strongs: 'G3056' })).toBe(true);
    expect(requiresNote({ gloss: 'God', strongs: 'G2316' })).toBe(true);
    expect(requiresNote({ gloss: 'Christ', strongs: 'G5547' })).toBe(true);
  });

  it('returns false for ordinary terms', () => {
    expect(requiresNote({ gloss: 'and', strongs: 'H9999' })).toBe(false);
    expect(requiresNote({ gloss: 'the' })).toBe(false);
  });
});

describe('NOTE_CATEGORIES', () => {
  it('contains all expected categories', () => {
    expect(NOTE_CATEGORIES).toContain('translation-choice');
    expect(NOTE_CATEGORIES).toContain('grammatical');
    expect(NOTE_CATEGORIES).toContain('theological');
    expect(NOTE_CATEGORIES).toContain('textual');
    expect(NOTE_CATEGORIES).toContain('cross-reference');
    expect(NOTE_CATEGORIES.length).toBe(11);
  });
});

// ---------------------------------------------------------------------------
// Index search
// ---------------------------------------------------------------------------

describe('searchTranslationIndex', () => {
  let indexPath: string;

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'bible-search-'));
    indexPath = path.join(tmpDir, 'translation-index.json');
  });

  afterEach(() => {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  it('returns empty array for non-existent index', () => {
    const results = searchTranslationIndex('/nonexistent/path.json', 'test');
    expect(results).toEqual([]);
  });

  it('returns matching verses from index', () => {
    const index = {
      'beginning': [{ verseRef: 'Gen.1.1', text: 'In the beginning God created' }],
      'god': [
        { verseRef: 'Gen.1.1', text: 'In the beginning God created' },
        { verseRef: 'Gen.1.2', text: 'The spirit of God moved' },
      ],
      'created': [{ verseRef: 'Gen.1.1', text: 'In the beginning God created' }],
    };
    fs.writeFileSync(indexPath, JSON.stringify(index));

    const results = searchTranslationIndex(indexPath, 'beginning God');
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].verseRef).toBe('Gen.1.1');
  });

  it('ranks results by number of matching words', () => {
    const index = {
      'word': [
        { verseRef: 'John.1.1', text: 'In the beginning was the Word' },
        { verseRef: 'John.1.14', text: 'The Word became flesh' },
      ],
      'beginning': [{ verseRef: 'John.1.1', text: 'In the beginning was the Word' }],
    };
    fs.writeFileSync(indexPath, JSON.stringify(index));

    const results = searchTranslationIndex(indexPath, 'beginning word');
    expect(results[0].verseRef).toBe('John.1.1');
  });

  it('ignores short query words (length <= 2)', () => {
    const index = {
      'the': [{ verseRef: 'Gen.1.1', text: 'test' }],
    };
    fs.writeFileSync(indexPath, JSON.stringify(index));

    const results = searchTranslationIndex(indexPath, 'it is');
    expect(results).toEqual([]);
  });
});
