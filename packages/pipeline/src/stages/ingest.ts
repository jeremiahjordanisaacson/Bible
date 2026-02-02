import * as fs from 'fs';
import * as path from 'path';
import type { PipelineStage, PipelineConfig, PipelineContext } from '../pipeline';
import type { SourceDataset } from '@open-bible/schemas';

/**
 * Ingest stage - loads raw source texts and registers datasets
 */
export const ingestStage: PipelineStage = {
  name: 'ingest',
  description: 'Load and validate source text data',

  async run(config: PipelineConfig, context: PipelineContext): Promise<void> {
    const sourcesDir = path.join(config.dataDir, 'sources');

    // Check for source data directory
    if (!fs.existsSync(sourcesDir)) {
      console.log(`  Creating sources directory at ${sourcesDir}`);
      fs.mkdirSync(sourcesDir, { recursive: true });
      context.warnings.push('No source data found. Created empty sources directory.');
      return;
    }

    // Load dataset manifests
    const manifestFiles = fs.readdirSync(sourcesDir)
      .filter(f => f.endsWith('.manifest.json'));

    if (manifestFiles.length === 0) {
      console.log('  No dataset manifests found. Using sample data.');
      context.warnings.push('No dataset manifests found. Pipeline will use sample data only.');

      // Register built-in sample datasets
      const sampleDatasets: SourceDataset[] = [
        {
          id: 'sample-hebrew',
          name: 'Sample Hebrew Text',
          description: 'Sample Hebrew text for Genesis 1 (demonstration)',
          version: '1.0.0',
          license: {
            name: 'Public Domain',
            summary: 'Public domain sample text',
          },
          attribution: 'Open Bible Translation Project - Sample Data',
          accessDate: new Date().toISOString().split('T')[0],
          contentType: 'source-text',
          languages: ['hebrew'],
          books: ['Gen'],
        },
        {
          id: 'sample-greek',
          name: 'Sample Greek Text',
          description: 'Sample Greek text for John 1 (demonstration)',
          version: '1.0.0',
          license: {
            name: 'CC BY 4.0',
            spdx: 'CC-BY-4.0',
            summary: 'Free to use with attribution',
          },
          attribution: 'Based on SBLGNT structure (sblgnt.com)',
          accessDate: new Date().toISOString().split('T')[0],
          contentType: 'source-text',
          languages: ['greek'],
          books: ['John'],
        },
      ];

      context.datasets.push(...sampleDatasets);
      return;
    }

    // Load each dataset manifest
    for (const manifestFile of manifestFiles) {
      const manifestPath = path.join(sourcesDir, manifestFile);
      try {
        const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
        const dataset = validateDataset(manifest);
        context.datasets.push(dataset);
        console.log(`  Loaded dataset: ${dataset.name}`);
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        context.warnings.push(`Failed to load dataset ${manifestFile}: ${message}`);
      }
    }

    console.log(`  Total datasets: ${context.datasets.length}`);
  },
};

/**
 * Validate a dataset manifest
 */
function validateDataset(data: unknown): SourceDataset {
  // Basic validation - in production, use the Zod schema
  if (!data || typeof data !== 'object') {
    throw new Error('Invalid dataset manifest');
  }

  const d = data as Record<string, unknown>;

  if (!d.id || typeof d.id !== 'string') {
    throw new Error('Dataset missing id');
  }
  if (!d.name || typeof d.name !== 'string') {
    throw new Error('Dataset missing name');
  }
  if (!d.license || typeof d.license !== 'object') {
    throw new Error('Dataset missing license');
  }

  return data as SourceDataset;
}

/**
 * Load source text file for a book
 */
export async function loadSourceText(
  config: PipelineConfig,
  bookCode: string,
  language: 'hebrew' | 'greek' | 'aramaic'
): Promise<string | null> {
  const possiblePaths = [
    path.join(config.dataDir, 'sources', language, `${bookCode}.txt`),
    path.join(config.dataDir, 'sources', language, `${bookCode}.xml`),
    path.join(config.dataDir, 'sources', language, `${bookCode}.json`),
  ];

  for (const filePath of possiblePaths) {
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, 'utf-8');
    }
  }

  return null;
}
