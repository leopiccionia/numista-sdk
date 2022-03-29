import { Credentials } from './credentials'
import { OAuthConnector } from './oauth'
import { PaginatedResult } from './pagination'
import { RestConnector } from './rest-api'
import type { CollectedItem, Issue, IssueUpdate, Language, Type, TypeUpdate } from './types/schemas'
import type { OAuthToken, Scope } from './types/oauth'
import type { AddItemRequest, BaseRequest, CollectedItemsRequest, CollectionsRequest, EditItemRequest, OAuthClientCredentialsRequest, PricesRequest, SearchRequest } from './types/requests'
import type { CataloguesResponse, CollectedItemsResponse, CollectionsResponse, IssuersResponse, PricesResponse, SearchResponse, UserResponse } from './types/responses'

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
   * @deprecated Use {@linkcode NumistaConnector.addType addType} (since 0.3.0)
   * @param data - Data related to the coin to add to the catalogue
   * @param config - Other params
   * @returns The coin that has been added to the catalogue
   */
  addCoin (data: TypeUpdate, config: Partial<BaseRequest> = {}): Promise<Type> {
    return this.addType(data, config)
  }

  /**
   * Add a coin issue
   *
   * It requires a specific permission associated to your API key
   * @deprecated Use {@linkcode NumistaConnector.addIssue addIssue} (since 0.3.0)
   * @param coinId - ID of the coin to which the issue is added
   * @param data - Data related to the coin issue to add to the catalogue
   * @param config - Other params
   * @returns The coin issue that has been added to the catalogue
   */
  addCoinIssue (coinId: number, data: IssueUpdate, config: Partial<BaseRequest> = {}): Promise<Issue> {
    return this.addIssue(coinId, data, config)
  }

  /**
   * Add a issue
   *
   * It requires a specific permission associated to your API key
   * @param typeId - ID of the coin to which the issue is added
   * @param data - Data related to the coin issue to add to the catalogue
   * @param config - Other params
   * @returns The coin issue that has been added to the catalogue
   */
  addIssue (typeId: number, data: IssueUpdate, config: Partial<BaseRequest> = {}): Promise<Issue> {
    const params: BaseRequest = {
      lang: this.#config.defaultLanguage,
      ...config,
    }

    return this.#rest.request<Issue>('POST', `/types/${typeId}/issues`, params, data)
  }

  /**
   * Add an item in the user collection
   *
   * This functionality requires the OAuth 2.0 authentication with the scope `"edit_collection"`
   * @param userId - ID of the user
   * @param data - Data related to the item to be added to the collection
   * @returns The item
   */
  addItem (userId: number, data: AddItemRequest): Promise<CollectedItem> {
    return this.#rest.request<CollectedItem>('POST', `/users/${userId}/collected_items`, {}, data, true)
  }

  /**
   * This endpoint allows to add a type to the catalogue
   *
   * It requires a specific permission associated to your API key. After adding a coin, you are required to add at least one issue
   * @param data - Data related to the coin to add to the catalogue
   * @param config - Other params
   * @returns The coin that has been added to the catalogue
   */
  addType (data: TypeUpdate, config: Partial<BaseRequest> = {}): Promise<Type> {
    const params: BaseRequest = {
      lang: this.#config.defaultLanguage,
      ...config,
    }

    return this.#rest.request<Type>('POST', '/types', params, data)
  }

  /** Retrieve the list of catalogues used for coin references */
  catalogues (): Promise<CataloguesResponse> {
    return this.#rest.request<CataloguesResponse>('GET', '/catalogues', {})
  }

  /**
   * Find a coin by ID
   * @deprecated Use {@linkcode NumistaConnector.type type} (since 0.3.0)
   * @param coinId - ID of the coin to fetch
   * @param config - Other params
   */
  coin (coinId: number, config: Partial<BaseRequest> = {}): Promise<Type> {
    const params: BaseRequest = {
      lang: this.#config.defaultLanguage,
      ...config,
    }

    return this.#rest.request<Type>('GET', `/coins/${coinId}`, params)
  }

  /**
   * Find the issues of a coin
   * @deprecated Use {@linkcode NumistaConnector.issues issues} (since 0.3.0)
   * @param coinId - ID of the coin to fetch the issues from
   * @param config - Other params
   */
  coinIssues (coinId: number, config: Partial<BaseRequest> = {}): Promise<Issue[]> {
    return this.issues(coinId, config)
  }

  /**
   * Get estimates for the price of an issue of a coin
   * @deprecated Use {@linkcode NumistaConnector.prices prices} (since 0.3.0)
   * @param coinId - ID of the coin type
   * @param issueId - ID of the issue of the coin
   * @param config - Other params
   */
  coinPrices (coinId: number, issueId: number, config: Partial<PricesRequest> = {}): Promise<PricesResponse> {
    return this.prices(coinId, issueId, config)
  }

  /**
   * Edit an item in a user's collection
   *
   * This functionality requires the OAuth 2.0 authentication with the scope `"edit_collection"`
   * @param userId - ID of the user
   * @param itemId - ID of the collected item
   * @param data - Item data which need to be edited. All fields are optional. Only the fields which are present will be updated
   * @returns The updated item
   */
  editItem (userId: number, itemId: number, data: EditItemRequest): Promise<CollectedItem> {
    return this.#rest.request<CollectedItem>('PATCH', `/users/${userId}/collected_items/${itemId}`, {}, data, true)
  }

  /**
   * Retrieve the list of issuing countries and territories
   * @param config - Other params
   */
  issuers (config: Partial<BaseRequest> = {}): Promise<IssuersResponse> {
    const params: BaseRequest = {
      lang: this.#config.defaultLanguage,
      ...config,
    }

    return this.#rest.request<IssuersResponse>('GET', '/issuers', params)
  }

  /**
   * Find the issues of a type
   * @param typeId - ID of the type to fetch the issues from
   * @param config - Other params
   */
  issues (typeId: number, config: Partial<BaseRequest> = {}): Promise<Issue[]> {
    const params: BaseRequest = {
      lang: this.#config.defaultLanguage,
      ...config,
    }

    return this.#rest.request<Issue[]>('GET', `/types/${typeId}/issues`, params)
  }

  /**
   * Get an item in a user's collection
   *
   * This functionality requires the OAuth 2.0 authentication with the scope `"view_collection"`
   * @param userId - ID of the user
   * @param itemId - ID of the collected item
   */
  item (userId: number, itemId: number): Promise<CollectedItem> {
    return this.#rest.request<CollectedItem>('GET', `/users/${userId}/collected_items/${itemId}`, {}, null, true)
  }

  /**
   * Get the banknotes owned by the user
   * @param config - Other params
   */
  async myBanknotes (config: Partial<Omit<CollectedItemsRequest, 'category'>> = {}): Promise<CollectedItemsResponse> {
    return this.myItems({ ...config, category: 'banknote' })
  }

  /**
   * Get the coins owned by the user
   * @param config - Other params
   */
  async myCoins (config: Partial<Omit<CollectedItemsRequest, 'category'>> = {}): Promise<CollectedItemsResponse> {
    return this.myItems({ ...config, category: 'coin' })
  }

  /**
   * Get the list of collections of a user
   * @param config - Other params
   */
  async myCollections (config: Partial<CollectionsRequest> = {}): Promise<CollectionsResponse> {
    const userId: number = await this.useUserCredentials(['view_collection'])

    return this.userCollections(userId, config)
  }

  /**
   * Get the exonumia pieces owned by the user
   * @param config - Other params
   */
  async myExonumia (config: Partial<Omit<CollectedItemsRequest, 'category'>> = {}): Promise<CollectedItemsResponse> {
    return this.myItems({ ...config, category: 'exonumia' })
  }

  /**
   * Get the items (coins, banknotes, pieces of exonumia) owned by the user
   * @param config - Other params
   */
   async myItems (config: Partial<CollectedItemsRequest> = {}): Promise<CollectedItemsResponse> {
    const userId: number = await this.useUserCredentials(['view_collection'])

    return this.userCoins(userId, config)
  }

  /**
   * Search the catalogue for coin, banknote and exonumia types (with pagination)
   * @param query - Search query
   * @param config - Other params
   */
  async paginatedSearch (query: string, config: Partial<Omit<SearchRequest, 'page' | 'q'>> = {}): Promise<PaginatedResult<SearchRequest, SearchResponse>> {
    const params: SearchRequest = {
      count: 50,
      lang: this.#config.defaultLanguage,
      page: 1,
      ...config,
      q: query,
    }

    const initialData = await this.#rest.request<SearchResponse>('GET', '/types', params)

    return new PaginatedResult<SearchRequest, SearchResponse>(this.#rest, initialData, '/types', params)
  }

  /**
   * Get estimates for the price of an issue of a coin
   * @param typeId - ID of the type
   * @param issueId - ID of the issue
   * @param config - Other params
   */
  prices (typeId: number, issueId: number, config: Partial<PricesRequest> = {}): Promise<PricesResponse> {
    const params: PricesRequest = {
      currency: 'EUR',
      lang: this.#config.defaultLanguage,
      ...config,
    }

    return this.#rest.request<PricesResponse>('GET', `/types/${typeId}/issues/${issueId}/prices`, params)
  }

  /**
   * Delete an item from a user's collection
   *
   * This functionality requires the OAuth 2.0 authentication with the scope `"edit_collection"`
   * @param userId - ID of the user
   * @param itemId - ID of the collected item
   */
  removeItem (userId: number, itemId: number): Promise<void> {
    return this.#rest.request<void>('DELETE', `/users/${userId}/collected_items/${itemId}`, {}, null, true)
  }

  /**
   * Search the catalogue for coin, banknote and exonumia types
   * @param query - Search query
   * @param config - Other params
   */
  search (query: string, config: Partial<Omit<SearchRequest, 'q'>> = {}): Promise<SearchResponse> {
    const params: SearchRequest = {
      count: 50,
      lang: this.#config.defaultLanguage,
      page: 1,
      ...config,
      q: query,
    }

    return this.#rest.request<SearchResponse>('GET', '/types', params)
  }

  /**
   * Search the catalogue for banknotes
   * @param query - Search query
   * @param config - Other params
   */
  searchBanknotes (query: string, config: Partial<Omit<SearchRequest, 'category' | 'q'>> = {}): Promise<SearchResponse> {
    return this.search(query, { ...config, category: 'banknote' })
  }

  /**
   * Search the catalogue for coins
   * @param query - Search query
   * @param config - Other params
   */
  searchCoins (query: string, config: Partial<Omit<SearchRequest, 'category' | 'q'>> = {}): Promise<SearchResponse> {
    return this.search(query, { ...config, category: 'coin' })
  }

  /**
   * Search the catalogue for exonumia pieces
   * @param query - Search query
   * @param config - Other params
   */
  searchExonumia (query: string, config: Partial<Omit<SearchRequest, 'category' | 'q'>> = {}): Promise<SearchResponse> {
    return this.search(query, { ...config, category: 'exonumia' })
  }

  /**
   * Find a type by ID
   * @param typeId - ID of the type to fetch
   * @param config - Other params
   */
  type (typeId: number, config: Partial<BaseRequest> = {}): Promise<Type> {
    const params: BaseRequest = {
      lang: this.#config.defaultLanguage,
      ...config,
    }

    return this.#rest.request<Type>('GET', `/types/${typeId}`, params)
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
   * Get the banknotes owned by a user
   *
   * This functionality requires the OAuth 2.0 authentication with the scope `"view_collection"`
   * @param userId - ID of the user
   * @param config - Other params
   */
  userBanknotes (userId: number, config: Partial<Omit<CollectedItemsRequest, 'category'>> = {}): Promise<CollectedItemsResponse> {
    return this.userItems(userId, { ...config, category: 'banknote' })
  }

  /**
   * Get the coins owned by a user
   *
   * This functionality requires the OAuth 2.0 authentication with the scope `"view_collection"`
   * @param userId - ID of the user
   * @param config - Other params
   */
  userCoins (userId: number, config: Partial<Omit<CollectedItemsRequest, 'category'>> = {}): Promise<CollectedItemsResponse> {
    return this.userItems(userId, { ...config, category: 'coin' })
  }

  /**
   * Get the list of collections of a user
   *
   * This functionality requires the OAuth 2.0 authentication with the scope `"view_collection"`
   * @param userId - ID of the user
   * @param config - Other params
   */
  userCollections (userId: number, config: Partial<CollectionsRequest> = {}): Promise<CollectionsResponse> {
    return this.#rest.request<CollectionsResponse>('GET', `/users/${userId}/collections`, config, null, true)
  }

  /**
   * Get the exonumia pieces owned by a user
   *
   * This functionality requires the OAuth 2.0 authentication with the scope `"view_collection"`
   * @param userId - ID of the user
   * @param config - Other params
   */
  userExonumia (userId: number, config: Partial<Omit<CollectedItemsRequest, 'category'>> = {}): Promise<CollectedItemsResponse> {
    return this.userItems(userId, { ...config, category: 'exonumia' })
  }

  /**
   * Get the items (coin, banknotes, pieces of exonumia) owned by a user
   *
   * This functionality requires the OAuth 2.0 authentication with the scope `"view_collection"`
   * @param userId - ID of the user
   * @param config - Other params
   */
  userItems (userId: number, config: Partial<CollectedItemsRequest> = {}): Promise<CollectedItemsResponse> {
    const params: CollectedItemsRequest = {
      lang: this.#config.defaultLanguage,
      ...config,
    }

    return this.#rest.request<CollectedItemsResponse>('GET', `/users/${userId}/collected_items`, params, null, true)
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
