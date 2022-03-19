import { PaginatedResult } from './pagination'
import { RestConnector } from './rest-api'
import type { Coin, Issue, Language } from './types/schemas'
import type { BaseRequest, CoinPricesRequest, SearchCoinsRequest } from './types/requests'
import type { CataloguesResponse, CoinPricesResponse, IssuersResponse, SearchCoinsResponse, UserResponse } from './types/responses'

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
  catalogues (): Promise<CataloguesResponse> {
    return this.#rest.request<CataloguesResponse>('GET', '/catalogues', {})
  }

  /**
   * Find a coin by ID
   * @param numistaId ID of the coin to fetch
   * @param config Other params
   */
  coin (numistaId: number | string, config: Partial<BaseRequest> = {}): Promise<Coin> {
    const defaultConfig: BaseRequest = {
      lang: this.#config.defaultLanguage,
    }

    const params: BaseRequest = { ...defaultConfig, ...config }

    return this.#rest.request<Coin>('GET', `/coins/${numistaId}`, params)
  }

  /**
   * Find the issues of a coin
   * @param coinId ID of the coin to fetch the issues from
   * @param config Other params
   */
  coinIssues (coinId: number | string, config: Partial<BaseRequest> = {}): Promise<Issue[]> {
    const defaultConfig: BaseRequest = {
      lang: this.#config.defaultLanguage,
    }

    const params: BaseRequest = { ...defaultConfig, ...config }

    return this.#rest.request<Issue[]>('GET', `/coins/${coinId}/issues`, params)
  }

  /**
   * Get estimates for the price of an issue of a coin
   * @param coinId ID of the coin type
   * @param issueId ID of the issue of the coin
   * @param config Other params
   */
  coinPrices (coinId: number | string, issueId: number | string, config: Partial<CoinPricesRequest> = {}): Promise<CoinPricesResponse> {
    const defaultConfig: CoinPricesRequest = {
      currency: 'EUR',
      lang: this.#config.defaultLanguage,
    }

    const params: CoinPricesRequest = { ...defaultConfig, ...config }

    return this.#rest.request<CoinPricesResponse>('GET', `/coins/${coinId}/issues/${issueId}/prices`, params)
  }

  /** Retrieve the list of issuing countries and territories */
  issuers (config: Partial<BaseRequest> = {}): Promise<IssuersResponse> {
    const defaultConfig: BaseRequest = {
      lang: this.#config.defaultLanguage,
    }

    const params: BaseRequest = { ...defaultConfig, ...config }

    return this.#rest.request<IssuersResponse>('GET', '/issuers', params)
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

  /**
   * Get information about a user
   * @param userId ID of the user
   * @param config Other params
   */
  async user (userId: number | string, config: Partial<BaseRequest> = {}): Promise<UserResponse> {
    const defaultConfig: BaseRequest = {
      lang: this.#config.defaultLanguage,
    }

    const params: BaseRequest = { ...defaultConfig, ...config }

    return this.#rest.request<UserResponse>('GET', `/users/${userId}`, params)
  }
}
