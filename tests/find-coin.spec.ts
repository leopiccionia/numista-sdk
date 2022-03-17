import { describe, expect, it } from 'vitest'

import { ConnectorError } from '#lib'
import { createConnector } from '#tests'

describe('Finding a coin by ID', () => {

  it('works', async () => {
    const numista = createConnector()
    const morganDollar = await numista.getCoin(1492)

    expect(morganDollar.title.includes('Morgan')).toBeTruthy()
    expect(morganDollar.min_year).toBe(1878)
    expect(morganDollar.max_year).toBe(1921)
    expect(morganDollar.obverse?.engravers?.[0]?.includes('Morgan')).toBeTruthy()
  })

  it('can fail', async () => {
    const numista = createConnector()
    const request = numista.getCoin(999_999_999)

    await request.catch((error: ConnectorError) => {
      expect(error).toBeInstanceOf(ConnectorError)
      expect(error.status).toBe(404)
    })
  })
})
