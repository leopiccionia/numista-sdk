import { describe, expect, it } from 'vitest'

import { createConnector } from '#tests'

describe.concurrent('Getting the coins owned by a user', () => {

  it('works with own coins', async () => {
    const numista = createConnector()

    const myCoins = await numista.myCoins()

    expect(myCoins.coin_count).toBeGreaterThanOrEqual(0)
    expect(myCoins.warning).toBeUndefined()
  })

  it('requires authentication', async () => {
    const numista = createConnector()

    const userCoins = await numista.userCoins(2)

    expect(userCoins.warning).toBeDefined()
  })
})
