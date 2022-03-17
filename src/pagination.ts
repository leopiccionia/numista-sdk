import { RestConnector } from './rest-api'
import type { PaginatedRequest } from './types/requests'
import type { PaginatedResponse } from './types/responses'
import { deepClone, mergeObjects } from './utils'

export class PaginatedResult<Req extends PaginatedRequest, Res extends PaginatedResponse> {

  #count: number
  #data: Omit<Res, 'count'>
  #isAuthenticated: boolean
  #page: number
  #params: Req
  #rest: RestConnector
  #url: string

  constructor (rest: RestConnector, res: Res, url: string, params: Req, isAuthenticated = false) {
    const { count, ...data } = res
    this.#count = count
    this.#data = data
    this.#isAuthenticated = isAuthenticated
    this.#page = 1
    this.#params = deepClone(params)
    this.#rest = rest
    this.#url = url
  }

  async collect (): Promise<Omit<Res, 'count'>> {
    while (this.hasNext()) {
      await this.next()
    }
    return Promise.resolve(this.data)
  }

  get count (): number {
    return this.#count
  }

  get data (): Omit<Res, 'count'> {
    return deepClone(this.#data)
  }

  hasNext (): boolean {
    return (this.#params.count * this.#page) < this.#count
  }

  async next (): Promise<Res> {
    const nextPage = this.#page + 1
    const params: Req = { ...this.#params, page: nextPage }

    const res = await this.#rest.request<Res>('GET', this.#url, params, null, this.#isAuthenticated)
    const { count, ...data } = res
    this.#count = count
    this.#data = mergeObjects(this.#data, data)
    this.#page = nextPage
    return res
  }

  get page (): number {
    return this.#page
  }

  stream (): ReadableStream<Omit<Res, 'count'>> {
    let canceled = false

    return new ReadableStream<Omit<Res, 'count'>>({
      cancel: () => {
        canceled = true
      },
      start: async (controller) => {
        controller.enqueue(this.#data)

        while (this.hasNext() && !canceled) {
          const { count, ...data } = await this.next()
          controller.enqueue(deepClone(data))
        }

        controller.close()
      },
    })
  }
}
