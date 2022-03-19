import { describe, expect, it } from 'vitest'

import { ConnectorError } from '#lib'
import { createConnector } from '#tests'

describe.concurrent('Getting estimates for the price of an issue of a coin', () => {

  it('works', async () => {
    const numista = createConnector()
    const morganDollarPrices = await numista.coinPrices(1492, 28645, { currency: 'USD' })

    expect(morganDollarPrices.currency).toBe('USD')
    expect(morganDollarPrices.prices[0]?.price).toBeGreaterThan(10)
  })

  it('can fail', async () => {
    const numista = createConnector()
    const request = numista.coinPrices(1492, 999_999_999, { currency: 'USD' })

    await request.catch((error: ConnectorError) => {
      expect(error).toBeInstanceOf(ConnectorError)
      expect(error.status).toBe(404)
    })
  })
})
