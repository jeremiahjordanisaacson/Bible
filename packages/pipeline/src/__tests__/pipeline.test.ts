import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { Pipeline, PipelineConfig, PipelineStage, PipelineContext } from '../pipeline';
import { tokenizeHebrew, tokenizeGreek } from '../stages/tokenize';
import { StubTranslationEngine, getTranslationEngine } from '../engines/translation-engine';
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
    ...overrides,
  };
}

function makeStage(name: string, fn?: (config: PipelineConfig, ctx: PipelineContext) => Promise<void>): PipelineStage {
  return {
    name,
    description: `Test stage: ${name}`,
    run: fn ?? (async () => {}),
  };
}

// ---------------------------------------------------------------------------
// Pipeline orchestrator
// ---------------------------------------------------------------------------

describe('Pipeline orchestrator', () => {
  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'bible-test-'));
    fs.mkdirSync(path.join(tmpDir, 'data'), { recursive: true });
    vi.spyOn(console, 'log').mockImplementation(() => {});
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    fs.rmSync(tmpDir, { recursive: true, force: true });
    vi.restoreAllMocks();
  });

  it('creates a Pipeline instance with config', () => {
    const pipeline = new Pipeline(makeConfig());
    expect(pipeline).toBeDefined();
  });

  it('addStage returns the pipeline for chaining', () => {
    const pipeline = new Pipeline(makeConfig());
    const result = pipeline.addStage(makeStage('a'));
    expect(result).toBe(pipeline);
  });

  it('runs stages in order', async () => {
    const order: string[] = [];
    const pipeline = new Pipeline(makeConfig());

    pipeline
      .addStage(makeStage('first', async () => { order.push('first'); }))
      .addStage(makeStage('second', async () => { order.push('second'); }));

    await pipeline.run();
    expect(order).toEqual(['first', 'second']);
  });

  it('collects errors when force mode is on and stage throws', async () => {
    const pipeline = new Pipeline(makeConfig({ force: true }));
    pipeline.addStage(makeStage('bad', async () => { throw new Error('boom'); }));

    const ctx = await pipeline.run();
    expect(ctx.errors.length).toBeGreaterThan(0);
    expect(ctx.errors[0]).toContain('boom');
  });

  it('propagates error when force mode is off and stage throws', async () => {
    const pipeline = new Pipeline(makeConfig({ force: false }));
    pipeline.addStage(makeStage('bad', async () => { throw new Error('fail'); }));

    await expect(pipeline.run()).rejects.toThrow('fail');
  });
});

// ---------------------------------------------------------------------------
// tokenizeHebrew
// ---------------------------------------------------------------------------

describe('tokenizeHebrew', () => {
  it('splits Hebrew text into tokens by whitespace', () => {
    const text = '\u05D1\u05E8\u05D0\u05E9\u05D9\u05EA \u05D1\u05E8\u05D0';
    const tokens = tokenizeHebrew(text, 'Gen.1.1');
    expect(tokens).toHaveLength(2);
  });

  it('assigns correct ids and positions', () => {
    const tokens = tokenizeHebrew('\u05D0 \u05D1 \u05D2', 'Gen.1.1');
    expect(tokens[0].id).toBe('Gen.1.1.0');
    expect(tokens[1].id).toBe('Gen.1.1.1');
    expect(tokens[2].position).toBe(2);
  });

  it('sets language to hebrew for all tokens', () => {
    const tokens = tokenizeHebrew('\u05D0 \u05D1', 'Gen.1.1');
    for (const t of tokens) {
      expect(t.language).toBe('hebrew');
    }
  });
});

// ---------------------------------------------------------------------------
// tokenizeGreek
// ---------------------------------------------------------------------------

describe('tokenizeGreek', () => {
  it('splits Greek text into tokens by whitespace and punctuation', () => {
    const text = '\u0395\u03BD \u03B1\u03C1\u03C7\u03B7, \u03B7\u03BD';
    const tokens = tokenizeGreek(text, 'John.1.1');
    expect(tokens).toHaveLength(3);
  });

  it('assigns correct ids and positions', () => {
    const tokens = tokenizeGreek('\u03B1 \u03B2', 'John.1.1');
    expect(tokens[0].id).toBe('John.1.1.0');
    expect(tokens[1].id).toBe('John.1.1.1');
  });

  it('sets language to greek for all tokens', () => {
    const tokens = tokenizeGreek('\u03B1 \u03B2', 'Matt.1.1');
    for (const t of tokens) {
      expect(t.language).toBe('greek');
    }
  });
});

// ---------------------------------------------------------------------------
// StubTranslationEngine
// ---------------------------------------------------------------------------

describe('StubTranslationEngine', () => {
  it('returns a valid VerseTranslation', async () => {
    const engine = new StubTranslationEngine();
    const tokens = {
      verseRef: 'Gen.1.1',
      language: 'hebrew' as const,
      tokens: [
        { id: 'Gen.1.1.0', language: 'hebrew' as const, text: '\u05D1\u05E8\u05D0\u05E9\u05D9\u05EA', transliteration: 'bereshit', lemma: 'reshit', gloss: 'beginning', position: 0 },
      ],
      tokenCount: 1,
    };

    const result = await engine.translateVerse('Gen.1.1', tokens, 'en', ['literal']);
    expect(result.verseRef).toBe('Gen.1.1');
    expect(result.targetLanguage).toBe('en');
    expect(result.layers.literal).toBeDefined();
    expect(result.layers.literal!.text).toBeTruthy();
    expect(result.metadata.engineId).toBe('stub');
  });

  it('translateToken returns the gloss', async () => {
    const engine = new StubTranslationEngine();
    const text = await engine.translateToken({ text: 'abc', lemma: 'lem', gloss: 'mygloss' }, 'en');
    expect(text).toBe('mygloss');
  });
});

// ---------------------------------------------------------------------------
// getTranslationEngine
// ---------------------------------------------------------------------------

describe('getTranslationEngine', () => {
  it('returns stub engine when unknown id is provided', () => {
    const engine = getTranslationEngine('nonexistent');
    expect(engine.id).toBe('stub');
  });

  it('returns stub engine when "stub" id is provided', () => {
    const engine = getTranslationEngine('stub');
    expect(engine.id).toBe('stub');
  });
});
