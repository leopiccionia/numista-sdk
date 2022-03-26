import { Credentials } from './credentials'
import { OAuthConnector } from './oauth'
import { PaginatedResult } from './pagination'
import { RestConnector } from './rest-api'
import type { Coin, CoinUpdate, Issue, IssueUpdate, Language } from './types/schemas'
import type { OAuthToken, Scope } from './types/oauth'
import type { BaseRequest, CoinPricesRequest, CollectedCoinsRequest, OAuthClientCredentialsRequest, SearchCoinsRequest } from './types/requests'
import type { CataloguesResponse, CollectedCoinsResponse, CoinPricesResponse, IssuersResponse, SearchCoinsResponse, UserResponse } from './types/responses'

export interface ConnectorConfig {
  /** The default language for use in other methods */
  defaultLanguage: Language
}

/** The main entrypoint for Numista SDK */
export class NumistaConnector {

  #credentials: Credentials
  #config: ConnectorConfig
  #rest: RestConnector

  /**
   * @param apiKey - API key
   * @param clientId - Client ID
   * @param config - Other params
   */
  constructor (apiKey: string, clientId: string, config: Partial<ConnectorConfig> = {}) {
    const mergedConfig: ConnectorConfig = {
      defaultLanguage: 'en',
      ...config,
    }

    this.#credentials = new Credentials(apiKey, clientId)
    this.#config = mergedConfig
    this.#rest = new RestConnector(this.#credentials)
  }

  /**
   * This endpoint allows to add a coin to the catalogue
   *
   * It requires a specific permission associated to your API key. After adding a coin, you are required to add at least one issue
   * @param data - Data related to the coin to add to the catalogue
   * @param config - Other params
   * @returns The coin that has been added to the catalogue
   */
  addCoin (data: CoinUpdate, config: Partial<BaseRequest> = {}): Promise<Coin> {
    const params: BaseRequest = {
      lang: this.#config.defaultLanguage,
      ...config,
    }

    return this.#rest.request<Coin>('POST', '/coins', params, data)
  }

  /**
   * Add a coin issue
   *
   * It requires a specific permission associated to your API key
   * @param coinId - ID of the coin to which the issue is added
   * @param data - Data related to the coin issue to add to the catalogue
   * @param config - Other params
   * @returns The coin issue that has been added to the catalogue
   */
  addCoinIssue (coinId: number, data: IssueUpdate, config: Partial<BaseRequest> = {}): Promise<Issue> {
    const params: BaseRequest = {
      lang: this.#config.defaultLanguage,
      ...config,
    }

    return this.#rest.request<Issue>('POST', `/coins/${coinId}/issues`, params, data)
  }

  /** Retrieve the list of catalogues used for coin references */
  catalogues (): Promise<CataloguesResponse> {
    return this.#rest.request<CataloguesResponse>('GET', '/catalogues', {})
  }

  /**
   * Find a coin by ID
   * @param coinId - ID of the coin to fetch
   * @param config - Other params
   */
  coin (coinId: number, config: Partial<BaseRequest> = {}): Promise<Coin> {
    const params: BaseRequest = {
      lang: this.#config.defaultLanguage,
      ...config,
    }

    return this.#rest.request<Coin>('GET', `/coins/${coinId}`, params)
  }

  /**
   * Find the issues of a coin
   * @param coinId - ID of the coin to fetch the issues from
   * @param config - Other params
   */
  coinIssues (coinId: number, config: Partial<BaseRequest> = {}): Promise<Issue[]> {
    const params: BaseRequest = {
      lang: this.#config.defaultLanguage,
      ...config,
    }

    return this.#rest.request<Issue[]>('GET', `/coins/${coinId}/issues`, params)
  }

  /**
   * Get estimates for the price of an issue of a coin
   * @param coinId - ID of the coin type
   * @param issueId - ID of the issue of the coin
   * @param config - Other params
   */
  coinPrices (coinId: number, issueId: number, config: Partial<CoinPricesRequest> = {}): Promise<CoinPricesResponse> {
    const params: CoinPricesRequest = {
      currency: 'EUR',
      lang: this.#config.defaultLanguage,
      ...config,
    }

    return this.#rest.request<CoinPricesResponse>('GET', `/coins/${coinId}/issues/${issueId}/prices`, params)
  }

  /** Retrieve the list of issuing countries and territories */
  issuers (config: Partial<BaseRequest> = {}): Promise<IssuersResponse> {
    const params: BaseRequest = {
      lang: this.#config.defaultLanguage,
      ...config,
    }

    return this.#rest.request<IssuersResponse>('GET', '/issuers', params)
  }

  /**
   * Get the coins owned by the user
   * @param config - Params
   */
  async myCoins (config: Partial<CollectedCoinsRequest> = {}): Promise<CollectedCoinsResponse> {
    const userId: number = await this.useUserCredentials(['view_collection'])

    return this.userCoins(userId, config)
  }

  /**
   * Search for coins
   * @param query - Search query
   * @param config - Other params
   */
  searchCoins (query: string, config: Partial<Omit<SearchCoinsRequest, 'q'>> = {}): Promise<SearchCoinsResponse> {
    const params: SearchCoinsRequest = {
      count: 50,
      lang: this.#config.defaultLanguage,
      page: 1,
      ...config,
      q: query,
    }

    return this.#rest.request<SearchCoinsResponse>('GET', '/coins', params)
  }

  /**
   * Paginated search for coins
   * @param query - Search query
   * @param config - Other params
   */
  async searchCoinsPaginated (query: string, config: Partial<Omit<SearchCoinsRequest, 'page' | 'q'>> = {}): Promise<PaginatedResult<SearchCoinsRequest, SearchCoinsResponse>> {
    const params: SearchCoinsRequest = {
      count: 50,
      lang: this.#config.defaultLanguage,
      page: 1,
      ...config,
      q: query,
    }

    const initialData = await this.#rest.request<SearchCoinsResponse>('GET', '/coins', params)

    return new PaginatedResult<SearchCoinsRequest, SearchCoinsResponse>(this.#rest, initialData, '/coins', params)
  }

  /**
   * Get information about a user
   * @param userId - ID of the user
   * @param config - Other params
   */
  user (userId: number, config: Partial<BaseRequest> = {}): Promise<UserResponse> {
    const params: BaseRequest = {
      lang: this.#config.defaultLanguage,
      ...config,
    }

    return this.#rest.request<UserResponse>('GET', `/users/${userId}`, params)
  }

  /**
   * Get the coins owned by a user
   * @param userId - ID of the user
   * @param config - Other params
   */
  userCoins (userId: number, config: Partial<CollectedCoinsRequest> = {}): Promise<CollectedCoinsResponse> {
    const params: CollectedCoinsRequest = {
      lang: this.#config.defaultLanguage,
      ...config,
    }

    return this.#rest.request<CollectedCoinsResponse>('GET', `/users/${userId}/collected_coins`, params, null, true)
  }

  /**
   * Get OAuth access token via user credentials
   * @param redirectUri - URI to redirect back the user to your application after they authenticate
   * @param scope - List of permissions you are requesting (e.g. 'view_collection')
   * @param config - Other params
   * @returns OAuth adapter using authorization code
   */
  useAuthorizationCode (redirectUri: string, scope: Scope[], config: Partial<BaseRequest> = {}): OAuthConnector {
    const params: BaseRequest = {
      lang: this.#config.defaultLanguage,
      ...config,
    }

    return new OAuthConnector(this.#rest, this.#credentials, redirectUri, scope, params)
  }

  /**
   * Get OAuth access token via user credentials
   * @param scope - List of permissions
   * @returns ID of the user who authenticated
   */
  async useUserCredentials (scope: Scope[]): Promise<number> {
    const params: OAuthClientCredentialsRequest = {
      grant_type: 'client_credentials',
      scope: scope.join(','),
    }

    const token = await this.#rest.request<OAuthToken>('GET', '/oauth_token', params)
    this.#credentials.oauthToken = token
    return token.user_id
  }
}
