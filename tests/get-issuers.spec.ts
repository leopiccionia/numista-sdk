import { describe, expect, it } from 'vitest'

import { createConnector } from '#tests'

describe('Retrieving the list of issuing countries and territories', () => {

  it('works', async () => {
    const numista = createConnector()

    const issuers = await numista.issuers()

    expect(issuers.count).toBeGreaterThan(100)
    expect(issuers.issuers.length).toBeGreaterThan(100)
    expect(issuers.issuers[0].name).toBeTypeOf('string')
  })
})
