import { describe, expect, it } from 'vitest'

import { NumistaConnector, ResponseError } from '#lib'

describe('NumistaConnector', () => {

  it('requires API key', async () => {
    const numista = new NumistaConnector('INVALID_KEY', 'INVALID_CLIENT_ID')
    const request = numista.search('dollar')

    await request.catch((error: ResponseError) => {
      expect(error).toBeInstanceOf(ResponseError)
      expect(error.name).toBe('ResponseError')
      expect(error.status).toBe(401)
      expect(error.statusText).toBe('Unauthorized')
      expect(error.message.toLowerCase().includes('key')).toBeTruthy()
    })
  })
})
