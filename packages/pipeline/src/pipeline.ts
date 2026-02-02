import * as fs from 'fs';
import * as path from 'path';
import type { PipelineMetadata, SourceDataset, BookManifest } from '@open-bible/schemas';

export interface PipelineConfig {
  /** Input data directory */
  dataDir: string;
  /** Output directory */
  outputDir: string;
  /** Books to process (empty = all available) */
  books?: string[];
  /** Target languages */
  targetLanguages: string[];
  /** Translation engine ID */
  engineId: string;
  /** Engine configuration */
  engineConfig?: Record<string, unknown>;
  /** Whether to force regeneration */
  force?: boolean;
  /** Verbose logging */
  verbose?: boolean;
}

export interface PipelineStage {
  name: string;
  description: string;
  run: (config: PipelineConfig, context: PipelineContext) => Promise<void>;
}

export interface PipelineContext {
  metadata: PipelineMetadata;
  datasets: SourceDataset[];
  processedBooks: string[];
  warnings: string[];
  errors: string[];
}

/**
 * Main pipeline orchestrator
 */
export class Pipeline {
  private stages: PipelineStage[] = [];
  private config: PipelineConfig;

  constructor(config: PipelineConfig) {
    this.config = config;
  }

  /**
   * Add a stage to the pipeline
   */
  addStage(stage: PipelineStage): Pipeline {
    this.stages.push(stage);
    return this;
  }

  /**
   * Run the complete pipeline
   */
  async run(): Promise<PipelineContext> {
    const startTime = Date.now();

    // Initialize context
    const context: PipelineContext = {
      metadata: {
        version: this.getVersion(),
        stage: 'init',
        timestamp: new Date().toISOString(),
        gitCommit: this.getGitCommit(),
      },
      datasets: [],
      processedBooks: [],
      warnings: [],
      errors: [],
    };

    // Ensure output directory exists
    if (!fs.existsSync(this.config.outputDir)) {
      fs.mkdirSync(this.config.outputDir, { recursive: true });
    }

    console.log(`\n=== Open Bible Translation Pipeline ===`);
    console.log(`Version: ${context.metadata.version}`);
    console.log(`Output: ${this.config.outputDir}`);
    console.log(`Languages: ${this.config.targetLanguages.join(', ')}`);
    console.log(`Stages: ${this.stages.length}\n`);

    // Run each stage
    for (const stage of this.stages) {
      console.log(`[${stage.name}] ${stage.description}...`);
      context.metadata.stage = stage.name;

      try {
        await stage.run(this.config, context);
        console.log(`[${stage.name}] Complete\n`);
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        context.errors.push(`${stage.name}: ${message}`);
        console.error(`[${stage.name}] ERROR: ${message}\n`);

        if (!this.config.force) {
          throw error;
        }
      }
    }

    // Write pipeline summary
    const duration = Date.now() - startTime;
    context.metadata.durationMs = duration;
    context.metadata.warnings = context.warnings;

    this.writeSummary(context);

    console.log(`=== Pipeline Complete ===`);
    console.log(`Duration: ${(duration / 1000).toFixed(2)}s`);
    console.log(`Books: ${context.processedBooks.length}`);
    console.log(`Warnings: ${context.warnings.length}`);
    console.log(`Errors: ${context.errors.length}`);

    return context;
  }

  /**
   * Get pipeline version from package.json
   */
  private getVersion(): string {
    try {
      const pkgPath = path.join(__dirname, '..', 'package.json');
      const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
      return pkg.version || '0.0.0';
    } catch {
      return '0.0.0';
    }
  }

  /**
   * Get current git commit hash
   */
  private getGitCommit(): string | undefined {
    try {
      const { execSync } = require('child_process');
      return execSync('git rev-parse --short HEAD', { encoding: 'utf-8' }).trim();
    } catch {
      return undefined;
    }
  }

  /**
   * Write pipeline summary to output
   */
  private writeSummary(context: PipelineContext): void {
    const summary = {
      metadata: context.metadata,
      datasets: context.datasets,
      processedBooks: context.processedBooks,
      warnings: context.warnings,
      errors: context.errors,
    };

    const summaryPath = path.join(this.config.outputDir, 'pipeline-summary.json');
    fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
  }
}

/**
 * Create a default pipeline with all standard stages
 */
export function createDefaultPipeline(config: PipelineConfig): Pipeline {
  const { ingestStage } = require('./stages/ingest');
  const { tokenizeStage } = require('./stages/tokenize');
  const { translateStage } = require('./stages/translate');
  const { alignStage } = require('./stages/align');
  const { notesStage } = require('./stages/notes');
  const { indexBuilderStage } = require('./stages/index-builder');

  return new Pipeline(config)
    .addStage(ingestStage)
    .addStage(tokenizeStage)
    .addStage(translateStage)
    .addStage(alignStage)
    .addStage(notesStage)
    .addStage(indexBuilderStage);
}
