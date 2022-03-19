import { describe, expect, it } from 'vitest'

import { NumistaConnector, RequestError } from '#lib'

describe('NumistaConnector', () => {

  it('requires API key', async () => {
    const numista = new NumistaConnector('INVALID_KEY')
    const request = numista.searchCoins('dollar')

    await request.catch((error: RequestError) => {
      expect(error).toBeInstanceOf(RequestError)
      expect(error.name).toBe('RequestError')
      expect(error.status).toBe(401)
      expect(error.statusText).toBe('Unauthorized')
      expect(error.message.toLowerCase().includes('key')).toBeTruthy()
    })
  })
})
