#!/usr/bin/env node
/**
 * Full pipeline CLI - runs all stages
 */

import { Command } from 'commander';
import * as path from 'path';
import { createDefaultPipeline, type PipelineConfig } from '../pipeline';

const program = new Command();

program
  .name('open-bible-pipeline')
  .description('Open Bible Translation data processing pipeline')
  .version('0.1.0');

program
  .option('-d, --data-dir <path>', 'Data directory', './data')
  .option('-o, --output-dir <path>', 'Output directory', './data/output')
  .option('-b, --books <books>', 'Comma-separated list of books to process')
  .option('-l, --languages <langs>', 'Target languages (comma-separated)', 'en')
  .option('-e, --engine <id>', 'Translation engine ID', 'stub')
  .option('-f, --force', 'Force regeneration of all outputs')
  .option('-v, --verbose', 'Verbose output')
  .action(async (options) => {
    const config: PipelineConfig = {
      dataDir: path.resolve(options.dataDir),
      outputDir: path.resolve(options.outputDir),
      books: options.books ? options.books.split(',') : undefined,
      targetLanguages: options.languages.split(','),
      engineId: options.engine,
      force: options.force || false,
      verbose: options.verbose || false,
    };

    console.log('Starting Open Bible Translation Pipeline...');
    console.log(`Data dir: ${config.dataDir}`);
    console.log(`Output dir: ${config.outputDir}`);

    try {
      const pipeline = createDefaultPipeline(config);
      const result = await pipeline.run();

      if (result.errors.length > 0) {
        console.error('\nPipeline completed with errors:');
        result.errors.forEach(e => console.error(`  - ${e}`));
        process.exit(1);
      }

      if (result.warnings.length > 0) {
        console.warn('\nWarnings:');
        result.warnings.forEach(w => console.warn(`  - ${w}`));
      }

      console.log('\nPipeline completed successfully!');
    } catch (error) {
      console.error('Pipeline failed:', error);
      process.exit(1);
    }
  });

program.parse();
