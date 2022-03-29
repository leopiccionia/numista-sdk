import { describe, expect, it } from 'vitest'

import { RequestError } from '#lib'
import { createConnector } from '#tests'

describe.concurrent('Get the items (coins, banknotes, pieces of exonumia) owned by a user', () => {

  it('works with own coins', async () => {
    const numista = createConnector()

    const myCoins = await numista.myCoins()

    expect(myCoins.item_count).toBeGreaterThanOrEqual(0)
  })

  it('requires authentication', async () => {
    const numista = createConnector()

    const request = numista.userCoins(2)

    await request.catch((error: RequestError) => {
      expect(error).toBeInstanceOf(RequestError)
      expect(error.status).toBe(401)
    })
  })
})
