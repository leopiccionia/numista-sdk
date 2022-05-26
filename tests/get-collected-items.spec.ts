import { describe, expect, it } from 'vitest'

import { ResponseError } from '#lib'
import { createConnector } from '#tests'

describe.concurrent('Getting the items (coins, banknotes, pieces of exonumia) owned by a user', () => {

  it('works with own coins', async () => {
    const numista = createConnector()

    const myCoins = await numista.myCoins()

    expect(myCoins.item_count).toBeGreaterThanOrEqual(0)
  })

  it('requires authentication', async () => {
    const numista = createConnector()

    const request = numista.userCoins(2)

    await request.catch((error: ResponseError) => {
      expect(error).toBeInstanceOf(ResponseError)
      expect(error.status).toBe(401)
    })
  })
})
