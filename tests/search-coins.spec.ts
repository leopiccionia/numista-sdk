import { describe, expect, it } from 'vitest'

import { NumistaConnector } from '../src'
import { NUMISTA_KEY } from './setup'

describe('Searching for coins', () => {

  it('works', async () => {
    const numista = new NumistaConnector(NUMISTA_KEY)
    const centavos = await numista.searchCoins('centavos')
    expect(centavos.count).toBeGreaterThan(0)
  })
})
