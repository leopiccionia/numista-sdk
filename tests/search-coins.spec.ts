import { describe, expect, it } from 'vitest'

import { createConnector } from '#tests'

describe('Searching for coins', () => {

  it('works', async () => {
    const numista = createConnector()
    const centavos = await numista.searchCoins('centavos', { count: 10 })

    expect(centavos.coins.length).toBe(10)
    expect(centavos.count).toBeGreaterThan(10)
  })

  it('can return empty result', async () => {
    const numista = createConnector()
    const largeFortunes = await numista.searchCoins('one trillion dollars')

    expect(largeFortunes.count).toBe(0)
    expect(largeFortunes.coins).toEqual([])
  })
})
