import { URL } from 'url'

import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '#lib': new URL('src/index.ts', import.meta.url).pathname,
      '#tests': new URL('tests/setup.ts', import.meta.url).pathname,
    }
  },
  test: {
  },
})
