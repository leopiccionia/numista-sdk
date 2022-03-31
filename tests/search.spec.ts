import { ReadableStream } from 'node:stream/web'

import { describe, expect, it } from 'vitest'

import type { SearchedType } from '#lib'
import { createConnector } from '#tests'

describe.concurrent('Search the catalogue for coin, banknote and exonumia types', () => {

  it('works', async () => {
    const numista = createConnector()
    const centavos = await numista.searchCoins('centavos', { count: 10 })

    expect(centavos.count).toBeGreaterThan(10)
    expect(centavos.types.length).toBe(10)
  })

  it('can return empty result', async () => {
    const numista = createConnector()
    const largeFortunes = await numista.searchCoins('one trillion dollars')

    expect(largeFortunes.count).toBe(0)
    expect(largeFortunes.types).toEqual([])
  })
})

describe.concurrent('Search the catalogue for coin, banknote and exonumia types (with pagination)', () => {

  it('works', async () => {
    const numista = createConnector()
    const centavos = await numista.paginatedSearch('centavos', { count: 10 })

    expect(centavos.count).toBeGreaterThan(10)
    expect(centavos.data.types.length).toBe(10)
  })

  it('is paginated', async () => {
    const numista = createConnector()
    const centavos = await numista.paginatedSearch('centavos', { count: 10 })

    expect(centavos.count).toBeGreaterThan(20)
    expect(centavos.data.types.length).toBe(10)
    expect(centavos.hasNext()).toBe(true)

    await centavos.next()

    expect(centavos.count).toBeGreaterThan(20)
    expect(centavos.data.types.length).toBe(20)
  })

  it('can be easily collected', async () => {
    const numista = createConnector()
    const res = await numista.paginatedSearch('centavos', { category: 'coin', count: 25, issuer: 'bresil' })

    expect(res.count).toBeGreaterThan(25)

    const centavos = await res.collect()

    expect(centavos.types.length).toBe(res.count)
    expect(res.data.types.length).toBe(res.count)
  })

  it('can be streamed', async () => {
    const numista = createConnector()
    const res = await numista.paginatedSearch('centavos', { category: 'coin', count: 25, issuer: 'bresil' })

    expect(res.count).toBeGreaterThan(25)

    let centavos: SearchedType[] = []
    const reader = res.stream(ReadableStream).getReader()

    const push = async (): Promise<void> => {
      const { done, value } = await reader.read()
      if (!done) {
        centavos = [...centavos, ...value.types]
        return push()
      }
    }

    await push()

    expect(centavos.length).toBe(res.count)
    expect(res.data.types.length).toBe(res.count)
  })

  it('can return empty result', async () => {
    const numista = createConnector()
    const largeFortunes = await numista.paginatedSearch('one trillion dollars', { category: 'coin' })

    expect(largeFortunes.count).toBe(0)
    expect(largeFortunes.data.types).toEqual([])
  })
})
