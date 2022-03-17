import { PaginatedResult } from './pagination'
import { RestConnector } from './rest-api'
import type { Language } from './types/schemas'
import type { GetCoinRequest, SearchCoinsRequest } from './types/requests'
import type { GetCoinResponse, SearchCoinsResponse } from './types/responses'

export interface ConnectorConfig {
  defaultLanguage: Language
}

export class NumistaConnector {

  #config: ConnectorConfig
  #rest: RestConnector

  constructor (apiKey: string, config: Partial<ConnectorConfig> = {}) {
    const defaultConfig: ConnectorConfig = {
      defaultLanguage: 'en',
    }

    this.#config = { ...defaultConfig, ...config }
    this.#rest = new RestConnector(apiKey)
  }

  /**
   * Find a coin by ID
   * @param numistaId ID of the coin to fetch
   * @param config Other params
   */
  getCoin (numistaId: number | string, config: Partial<GetCoinRequest> = {}): Promise<GetCoinResponse> {
    const defaultConfig: GetCoinRequest = {
      lang: this.#config.defaultLanguage,
    }

    const params: GetCoinRequest = { ...defaultConfig, ...config }

    return this.#rest.request<GetCoinResponse>('GET', `/coins/${numistaId}`, params)
  }

  /**
   * Search for coins
   * @param query Search query
   * @param config Other params
   */
  async searchCoins (query: string, config: Partial<Omit<SearchCoinsRequest, 'page' | 'q'>> = {}): Promise<PaginatedResult<SearchCoinsRequest, SearchCoinsResponse>> {
    const defaultConfig: Omit<SearchCoinsRequest, 'q'> = {
      count: 50,
      lang: this.#config.defaultLanguage,
      page: 1,
    }

    const params: SearchCoinsRequest = { ...defaultConfig, ...config, q: query }

    const initialData = await this.#rest.request<SearchCoinsResponse>('GET', '/coins', params)

    return new PaginatedResult<SearchCoinsRequest, SearchCoinsResponse>(this.#rest, initialData, '/coins', params)
  }
}
