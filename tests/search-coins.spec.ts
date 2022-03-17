import { describe, expect, it } from 'vitest'

import { NumistaConnector } from '../src'
import { NUMISTA_KEY } from './setup'

describe('Searching for coins', () => {

  it('works', async () => {
    const numista = new NumistaConnector(NUMISTA_KEY)
    const centavos = await numista.searchCoins('centavos', { count: 10 })

    expect(centavos.count).toBeGreaterThan(10)
  })

  it('can return empty result', async () => {
    const numista = new NumistaConnector(NUMISTA_KEY)
    const largeFortunes = await numista.searchCoins('one trillion dollars')

    expect(largeFortunes.count).toBe(0)
    expect(largeFortunes.coins).toEqual([])
  })
})
