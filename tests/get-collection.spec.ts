import { describe, expect, it } from 'vitest'

import { ResponseError } from '#lib'
import { createConnector } from '#tests'

describe.concurrent('Getting the list of collections of a user', () => {

  it('works with own collections', async () => {
    const numista = createConnector()

    const myCollections = await numista.myCollections()

    expect(myCollections.count).toBeGreaterThanOrEqual(0)
  })

  it('requires authentication', async () => {
    const numista = createConnector()

    const request = numista.userCollections(2)

    await request.catch((error: ResponseError) => {
      expect(error).toBeInstanceOf(ResponseError)
      expect(error.status).toBe(401)
    })
  })
})
