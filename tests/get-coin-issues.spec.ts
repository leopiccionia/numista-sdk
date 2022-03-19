import { describe, expect, it } from 'vitest'

import { ConnectorError } from '#lib'
import { createConnector } from '#tests'

describe.concurrent('Finding a coin by ID', () => {

  it('works', async () => {
    const numista = createConnector()
    const morganDollarIssues = await numista.coinIssues(1492)

    expect(morganDollarIssues[0].year).toBe(1878)
  })

  it('can fail', async () => {
    const numista = createConnector()
    const request = numista.coinIssues(999_999_999)

    await request.catch((error: ConnectorError) => {
      expect(error).toBeInstanceOf(ConnectorError)
      expect(error.status).toBe(404)
    })
  })
})
