import { describe, expect, it } from 'vitest'

import { ConnectorError, NumistaConnector } from '../src'
import { NUMISTA_KEY } from './setup'

describe('NumistaConnector', () => {

  it('requires API Key', async () => {
    const numista = new NumistaConnector('INVALID_KEY')
    const request = numista.searchCoins('dollar')

    expect(request).rejects.toBeInstanceOf(ConnectorError)
    await request.catch((error: ConnectorError) => {
      expect(error.name).toBe('ConnectorError')
      expect(error.status).toBe(401)
      expect(error.statusText).toBe('Unauthorized')
      expect(error.message.toLowerCase().includes('key')).toBeTruthy()
    })
  })
})
