import { describe, expect, it } from 'vitest'

import { createConnector } from '#tests'

describe.concurrent('Search the catalogue for types by catalogue code', () => {

  it('works', async () => {
    const numista = createConnector()
    const peaceDollars = await numista.code(3, '150', { issuer: 'united-states' })

    expect(peaceDollars.count).toBeGreaterThanOrEqual(1)
    expect(peaceDollars.types[0].issuer?.code).toBe('etats-unis')
    expect(peaceDollars.types[0].title).toContain('Dollar')
  })

  it('can receive catalogue alias', async () => {
    const numista = createConnector()
    const peaceDollars = await numista.code('KM', '150', { issuer: 'united-states' })

    expect(peaceDollars.count).toBeGreaterThanOrEqual(1)
    expect(peaceDollars.types[0].issuer?.code).toBe('etats-unis')
    expect(peaceDollars.types[0].title).toContain('Dollar')
  })
})
