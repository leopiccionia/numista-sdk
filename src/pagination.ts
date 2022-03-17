import { RestConnector } from './rest-api'
import type { PaginatedRequest } from './types/requests'
import type { PaginatedResponse } from './types/responses'
import { deepClone, mergeObjects } from './utils'

export class PaginatedResult<Req extends PaginatedRequest, Res extends PaginatedResponse> {

  #data: Res
  #isAuthenticated: boolean
  #page: number
  #params: Req
  #rest: RestConnector
  #url: string

  constructor (rest: RestConnector, res: Res, url: string, params: Req, isAuthenticated = false) {
    this.#data = res
    this.#isAuthenticated = isAuthenticated
    this.#page = 1
    this.#params = deepClone(params)
    this.#rest = rest
    this.#url = url
  }

  get count(): number {
    return this.#data.count
  }

  get data (): Readonly<Omit<Res, 'count'>> {
    return deepClone(this.#data)
  }

  hasNext (): boolean {
    return (this.#params.count * this.#page) < this.#data.count
  }

  async next (): Promise<Res> {
    const nextPage = this.#page + 1
    const params: Req = { ...this.#params, page: nextPage }

    const result = await this.#rest.request<Res>('GET', this.#url, params, null, this.#isAuthenticated)
    this.#data = mergeObjects<Res>(this.#data, result)
    this.#page = nextPage
    return result
  }

  get page(): number {
    return this.#page
  }
}
