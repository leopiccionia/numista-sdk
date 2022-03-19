import { describe, expect, it } from 'vitest'

import { createConnector } from '#tests'

describe('Retrieving the list of catalogues used for coin references', () => {

  it('works', async () => {
    const numista = createConnector()

    const catalogues = await numista.catalogues()

    expect(catalogues.count).toBeGreaterThan(10)
    expect(catalogues.catalogues.length).toBeGreaterThan(10)
    expect(catalogues.catalogues[0].author).toBeTypeOf('string')
  })
})
