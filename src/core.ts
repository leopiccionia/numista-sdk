import { PaginatedResult } from './pagination'
import { RestConnector } from './rest-api'
import type { Language, Coin } from './types/schemas'
import type { BaseRequest, SearchCoinsRequest } from './types/requests'
import type { GetCataloguesResponse, GetIssuersResponse, SearchCoinsResponse } from './types/responses'

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

  /** Retrieve the list of catalogues used for coin references */
  getCatalogues (): Promise<GetCataloguesResponse> {
    return this.#rest.request<GetCataloguesResponse>('GET', '/catalogues', {})
  }

  /**
   * Find a coin by ID
   * @param numistaId ID of the coin to fetch
   * @param config Other params
   */
  getCoin (numistaId: number | string, config: Partial<BaseRequest> = {}): Promise<Coin> {
    const defaultConfig: BaseRequest = {
      lang: this.#config.defaultLanguage,
    }

    const params: BaseRequest = { ...defaultConfig, ...config }

    return this.#rest.request<Coin>('GET', `/coins/${numistaId}`, params)
  }

  /** Retrieve the list of issuing countries and territories */
  getIssuers (config: Partial<BaseRequest> = {}): Promise<GetIssuersResponse> {
    const defaultConfig: BaseRequest = {
      lang: this.#config.defaultLanguage,
    }

    const params: BaseRequest = { ...defaultConfig, ...config }

    return this.#rest.request<GetIssuersResponse>('GET', '/issuers', params)
  }

  /**
   * Search for coins
   * @param query Search query
   * @param config Other params
   */
  async searchCoins (query: string, config: Partial<Omit<SearchCoinsRequest, 'q'>> = {}): Promise<SearchCoinsResponse> {
    const defaultConfig: Omit<SearchCoinsRequest, 'q'> = {
      count: 50,
      lang: this.#config.defaultLanguage,
      page: 1,
    }

    const params: SearchCoinsRequest = { ...defaultConfig, ...config, q: query }

    return this.#rest.request<SearchCoinsResponse>('GET', '/coins', params)
  }

  /**
   * Paginated search for coins
   * @param query Search query
   * @param config Other params
   */
  async searchCoinsPaginated (query: string, config: Partial<Omit<SearchCoinsRequest, 'page' | 'q'>> = {}): Promise<PaginatedResult<SearchCoinsRequest, SearchCoinsResponse>> {
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
