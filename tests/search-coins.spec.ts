import { ReadableStream } from 'node:stream/web'

import { describe, expect, it } from 'vitest'

import type { SearchCoinsResponse } from '#lib'
import { createConnector } from '#tests'

describe.concurrent('Searching for coins', () => {

  it('works', async () => {
    const numista = createConnector()
    const centavos = await numista.searchCoins('centavos', { count: 10 })

    expect(centavos.count).toBeGreaterThan(10)
    expect(centavos.coins.length).toBe(10)
  })

  it('can return empty result', async () => {
    const numista = createConnector()
    const largeFortunes = await numista.searchCoins('one trillion dollars')

    expect(largeFortunes.count).toBe(0)
    expect(largeFortunes.coins).toEqual([])
  })
})

describe.concurrent('Searching for coins (with pagination)', () => {

  it('works', async () => {
    const numista = createConnector()
    const centavos = await numista.searchCoinsPaginated('centavos', { count: 10 })

    expect(centavos.count).toBeGreaterThan(10)
    expect(centavos.data.coins.length).toBe(10)
  })

  it('is paginated', async () => {
    const numista = createConnector()
    const centavos = await numista.searchCoinsPaginated('centavos', { count: 10 })

    expect(centavos.count).toBeGreaterThan(20)
    expect(centavos.data.coins.length).toBe(10)
    expect(centavos.hasNext()).toBe(true)

    await centavos.next()

    expect(centavos.count).toBeGreaterThan(20)
    expect(centavos.data.coins.length).toBe(20)
  })

  it('can be easily collected', async () => {
    const numista = createConnector()
    const res = await numista.searchCoinsPaginated('centavos', { count: 25, issuer: 'bresil' })

    expect(res.count).toBeGreaterThan(25)

    const centavos = await res.collect()

    expect(centavos.coins.length).toBe(res.count)
    expect(res.data.coins.length).toBe(res.count)
  })

  it('can be streamed', async () => {
    const numista = createConnector()
    const res = await numista.searchCoinsPaginated('centavos', { count: 25, issuer: 'bresil' })

    expect(res.count).toBeGreaterThan(25)

    let centavos: SearchCoinsResponse['coins'] = []
    const reader = res.stream(ReadableStream).getReader()

    const push = async (): Promise<void> => {
      const { done, value } = await reader.read()
      if (!done) {
        centavos = [...centavos, ...value.coins]
        return push()
      }
    }

    await push()

    expect(centavos.length).toBe(res.count)
    expect(res.data.coins.length).toBe(res.count)
  })

  it('can return empty result', async () => {
    const numista = createConnector()
    const largeFortunes = await numista.searchCoinsPaginated('one trillion dollars')

    expect(largeFortunes.count).toBe(0)
    expect(largeFortunes.data.coins).toEqual([])
  })
})
