import { URL } from 'url'

import { defineConfig } from 'vitest/config'

export default defineConfig({
  build: {
    lib: {
      entry: new URL('src/index.ts', import.meta.url).pathname,
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'umd'],
      name: 'NumistaSDK',
    },
    target: 'ESNext',
  },
  envPrefix: 'NUMISTA_',
  resolve: {
    alias: {
      '#lib': new URL('src/index.ts', import.meta.url).pathname,
      '#tests': new URL('tests/setup.ts', import.meta.url).pathname,
    }
  },
  test: {
    testTimeout: 60_000,
  },
})
