import { describe, expect, it } from 'vitest'

import { RequestError } from '#lib'
import { createConnector } from '#tests'

describe.concurrent('Finding the issues of a type', () => {

  it('works', async () => {
    const numista = createConnector()
    const morganDollarIssues = await numista.issues(1492)

    expect(morganDollarIssues[0].year).toBe(1878)
  })

  it('can fail', async () => {
    const numista = createConnector()
    const request = numista.issues(999_999_999)

    await request.catch((error: RequestError) => {
      expect(error).toBeInstanceOf(RequestError)
      expect(error.status).toBe(404)
    })
  })
})
