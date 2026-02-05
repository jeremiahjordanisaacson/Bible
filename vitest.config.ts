import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Enable globals so describe/it/expect are available without import
    globals: true,
    // Use the default 'node' environment
    environment: 'node',
    // Include test files from all packages
    include: ['packages/*/src/**/__tests__/**/*.test.ts'],
    // Coverage configuration
    coverage: {
      provider: 'v8',
      include: ['packages/*/src/**/*.ts'],
      exclude: ['packages/*/src/**/__tests__/**'],
    },
  },
});
