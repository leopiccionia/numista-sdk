import { describe, expect, it } from 'vitest'

import { createConnector } from '#tests'

describe('Searching for coins (with pagination)', () => {

  it('works', async () => {
    const numista = createConnector()
    const centavos = await numista.searchCoinsWithPagination('centavos', { count: 10 })

    expect(centavos.count).toBeGreaterThan(10)
    expect(centavos.data.coins.length).toBe(10)
  })

  it('is paginated', async () => {
    const numista = createConnector()
    const centavos = await numista.searchCoinsWithPagination('centavos', { count: 10 })

    expect(centavos.count).toBeGreaterThan(20)
    expect(centavos.data.coins.length).toBe(10)
    expect(centavos.hasNext()).toBe(true)

    await centavos.next()

    expect(centavos.count).toBeGreaterThan(20)
    expect(centavos.data.coins.length).toBe(20)
  })

  it('can be easily collected', async () => {
    const numista = createConnector()
    const res = await numista.searchCoinsWithPagination('centavos', { count: 25, issuer: 'bresil' })

    expect(res.count).toBeGreaterThan(25)

    const centavos = await res.collect()

    expect(res.count).toBe(centavos.coins.length)
  })

  it('can return empty result', async () => {
    const numista = createConnector()
    const largeFortunes = await numista.searchCoinsWithPagination('one trillion dollars')

    expect(largeFortunes.count).toBe(0)
    expect(largeFortunes.data.coins).toEqual([])
  })
})
