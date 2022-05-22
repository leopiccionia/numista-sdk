import { RestConnector } from './rest-api'
import type { PaginatedRequest } from './types/requests'
import type { PaginatedResponse } from './types/responses'
import { deepClone, mergeObjects } from './utils'

/** A paginated response */
export class PaginatedResult<Req extends PaginatedRequest, Res extends PaginatedResponse> {

  #count: number
  #data: Omit<Res, 'count'>
  #page: number
  #params: Req
  #rest: RestConnector
  #url: string
  #useAuth: boolean

  /** @internal */
  constructor (rest: RestConnector, res: Res, url: string, params: Req, useAuth = false) {
    const { count, ...data } = res
    this.#count = count
    this.#data = data
    this.#page = 1
    this.#params = deepClone(params)
    this.#rest = rest
    this.#url = url
    this.#useAuth = useAuth
  }

  /**
   * Fetch all missing pages
   * @returns All items
   */
  async collect (): Promise<Omit<Res, 'count'>> {
    while (this.hasNext()) {
      await this.next()
    }
    return Promise.resolve(this.data)
  }

  /** Total number of items */
  get count (): number {
    return this.#count
  }

  /** All items already fetched */
  get data (): Omit<Res, 'count'> {
    return deepClone(this.#data)
  }

  /** If there are items still unfetched */
  hasNext (): boolean {
    return (this.#params.count * this.#page) < this.#count
  }

  /**
   * Fetch next page
   * @returns The next page
  */
  async next (): Promise<Res> {
    const nextPage = this.#page + 1
    const params: Req = { ...this.#params, page: nextPage }

    const res = await this.#rest.get<Res>(this.#url, params, this.#useAuth)
    const { count, ...data } = res
    this.#count = count
    this.#data = mergeObjects(this.#data, data)
    this.#page = nextPage
    return res
  }

  /** Last fetched page */
  get page (): number {
    return this.#page
  }

  /**
   * Fetch and stream all missing pages (experimental)
   * @params constructor - A ReadableStream constructor
   * @returns A WHATWG-compatible readable stream
   * @experimental
   */
  stream (constructor: { new<T> (source: UnderlyingSource<T>): ReadableStream }): ReadableStream<Omit<Res, 'count'>> {
    let canceled = false

    return new constructor<Omit<Res, 'count'>>({
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
