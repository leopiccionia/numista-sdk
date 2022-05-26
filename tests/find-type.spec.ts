import { describe, expect, it } from 'vitest'

import { ResponseError } from '#lib'
import { createConnector } from '#tests'

describe.concurrent('Finding a type by ID', () => {

  it('works', async () => {
    const numista = createConnector()
    const morganDollar = await numista.type(1492)

    expect(morganDollar.title.includes('Morgan')).toBeTruthy()
    expect(morganDollar.min_year).toBe(1878)
    expect(morganDollar.max_year).toBe(1921)
    expect(morganDollar.obverse?.engravers?.[0]?.includes('Morgan')).toBeTruthy()
  })

  it('can fail', async () => {
    const numista = createConnector()
    const request = numista.type(999_999_999)

    await request.catch((error: ResponseError) => {
      expect(error).toBeInstanceOf(ResponseError)
      expect(error.status).toBe(404)
    })
  })
})
