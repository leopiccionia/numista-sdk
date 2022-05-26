import { describe, expect, it } from 'vitest'

import { ResponseError } from '#lib'
import { createConnector } from '#tests'

describe.concurrent('Getting information about a user', () => {

  it('works', async () => {
    const numista = createConnector()
    const xavier = await numista.user(2)

    expect(xavier.username.toLowerCase().includes('xav')).toBeTruthy()
  })

  it('can fail', async () => {
    const numista = createConnector()
    const missingUser = numista.user(999_999_999)

    await missingUser.catch((error: ResponseError) => {
      expect(error).toBeInstanceOf(ResponseError)
      expect(error.status).toBe(404)
    })
  })
})