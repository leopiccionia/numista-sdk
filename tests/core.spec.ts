import { describe, expect, it } from 'vitest'

import { ConnectorError, NumistaConnector } from '#lib'

describe('NumistaConnector', () => {

  it('requires API Key', async () => {
    const numista = new NumistaConnector('INVALID_KEY')
    const request = numista.searchCoins('dollar')

    await request.catch((error: ConnectorError) => {
      expect(error).toBeInstanceOf(ConnectorError)
      expect(error.name).toBe('ConnectorError')
      expect(error.status).toBe(401)
      expect(error.statusText).toBe('Unauthorized')
      expect(error.message.toLowerCase().includes('key')).toBeTruthy()
    })
  })
})
