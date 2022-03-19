import { describe, expect, it } from 'vitest'

import { ConnectorError, NetworkError } from '#lib'
import { createConnector } from '#tests'

describe('Getting the coins owned by a user', () => {

  it('works with own coins', async () => {
    const numista = createConnector()

    await numista.useUserCredentials(['view_collection'])
    const myCoins = await numista.myCoins()

    expect(myCoins.coin_count).toBeGreaterThanOrEqual(0)
    expect(myCoins.warning).toBeUndefined()
  })

  it('throws if user ID is not set', async () => {
    const numista = createConnector()

    const request = numista.myCoins()

    request.catch((error: NetworkError) => {
      expect(error.name).toBe('NetworkError')
      expect(error.message).toBe('Current user is not set')
    })
  })

  it('requires authentication', async () => {
    const numista = createConnector()

    const userCoins = await numista.userCoins(2)

    expect(userCoins.warning).toBeDefined()
  })
})
