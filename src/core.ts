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
   * @param config - Miscellaneous configuration
   */
  constructor (apiKey: string, clientId: string, config: Partial<ConnectorConfig> = {}) {
    const _config: ConnectorConfig = {
      defaultLanguage: 'en',
      ...config,
    }

    this.#credentials = new Credentials(apiKey, clientId)
    this.#config = _config
    this.#rest = new RestConnector(this.#credentials)
  }

  /**
   * Add a issue
   *
   * It requires a specific permission associated to your API key
   * @param typeId - ID of the coin to which the issue is added
   * @param data - Data related to the coin issue to add to the catalogue
   * @param params - Miscellaneous params
   * @returns The coin issue that has been added to the catalogue
   */
  addIssue (typeId: number, data: IssueUpdate, params: Partial<BaseRequest> = {}): Promise<Issue> {
    const _params: BaseRequest = {
      lang: this.#config.defaultLanguage,
      ...params,
    }

    return this.#rest.post<Issue>(`/types/${typeId}/issues`, _params, data)
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
    return this.#rest.post<CollectedItem>(`/users/${userId}/collected_items`, {}, data, true)
  }

  /**
   * This endpoint allows to add a type to the catalogue
   *
   * It requires a specific permission associated to your API key. After adding a coin, you are required to add at least one issue
   * @param data - Data related to the coin to add to the catalogue
   * @param params - Miscellaneous params
   * @returns The coin that has been added to the catalogue
   */
  addType (data: TypeUpdate, params: Partial<BaseRequest> = {}): Promise<Type> {
    const _params: BaseRequest = {
      lang: this.#config.defaultLanguage,
      ...params,
    }

    return this.#rest.post<Type>('/types', _params, data)
  }

  /** Retrieve the list of catalogues used for coin references */
  catalogues (): Promise<CataloguesResponse> {
    return this.#rest.get<CataloguesResponse>('/catalogues')
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
    return this.#rest.patch<CollectedItem>(`/users/${userId}/collected_items/${itemId}`, {}, data, true)
  }

  /**
   * Retrieve the list of issuing countries and territories
   * @param params - Miscellaneous params
   */
  issuers (params: Partial<BaseRequest> = {}): Promise<IssuersResponse> {
    const _params: BaseRequest = {
      lang: this.#config.defaultLanguage,
      ...params,
    }

    return this.#rest.get<IssuersResponse>('/issuers', _params)
  }

  /**
   * Find the issues of a type
   * @param typeId - ID of the type to fetch the issues from
   * @param params - Miscellaneous params
   */
  issues (typeId: number, params: Partial<BaseRequest> = {}): Promise<Issue[]> {
    const _params: BaseRequest = {
      lang: this.#config.defaultLanguage,
      ...params,
    }

    return this.#rest.get<Issue[]>(`/types/${typeId}/issues`, _params)
  }

  /**
   * Get an item in a user's collection
   *
   * This functionality requires the OAuth 2.0 authentication with the scope `"view_collection"`
   * @param userId - ID of the user
   * @param itemId - ID of the collected item
   */
  item (userId: number, itemId: number): Promise<CollectedItem> {
    return this.#rest.get<CollectedItem>(`/users/${userId}/collected_items/${itemId}`, {}, true)
  }

  /**
   * Get the banknotes owned by the user
   * @param params - Miscellaneous params
   */
  async myBanknotes (params: Partial<Omit<CollectedItemsRequest, 'category'>> = {}): Promise<CollectedItemsResponse> {
    return this.myItems({ ...params, category: 'banknote' })
  }

  /**
   * Get the coins owned by the user
   * @param params - Miscellaneous params
   */
  async myCoins (params: Partial<Omit<CollectedItemsRequest, 'category'>> = {}): Promise<CollectedItemsResponse> {
    return this.myItems({ ...params, category: 'coin' })
  }

  /**
   * Get the list of collections of a user
   * @param params - Miscellaneous params
   */
  async myCollections (params: Partial<CollectionsRequest> = {}): Promise<CollectionsResponse> {
    const userId: number = await this.useUserCredentials(['view_collection'])

    return this.userCollections(userId, params)
  }

  /**
   * Get the exonumia pieces owned by the user
   * @param params - Miscellaneous params
   */
  async myExonumia (params: Partial<Omit<CollectedItemsRequest, 'category'>> = {}): Promise<CollectedItemsResponse> {
    return this.myItems({ ...params, category: 'exonumia' })
  }

  /**
   * Get the items (coins, banknotes, pieces of exonumia) owned by the user
   * @param params - Miscellaneous params
   */
   async myItems (params: Partial<CollectedItemsRequest> = {}): Promise<CollectedItemsResponse> {
    const userId: number = await this.useUserCredentials(['view_collection'])

    return this.userCoins(userId, params)
  }

  /**
   * Search the catalogue for coin, banknote and exonumia types (with pagination)
   * @param query - Search query
   * @param params - Miscellaneous params
   */
  async paginatedSearch (query: string, params: Partial<Omit<SearchRequest, 'page' | 'q'>> = {}): Promise<PaginatedResult<SearchRequest, SearchResponse>> {
    const _params: SearchRequest = {
      count: 50,
      lang: this.#config.defaultLanguage,
      page: 1,
      ...params,
      q: query,
    }

    const initialData = await this.#rest.get<SearchResponse>('/types', _params)

    return new PaginatedResult<SearchRequest, SearchResponse>(this.#rest, initialData, '/types', _params)
  }

  /**
   * Get estimates for the price of an issue of a coin
   * @param typeId - ID of the type
   * @param issueId - ID of the issue
   * @param params - Miscellaneous params
   */
  prices (typeId: number, issueId: number, params: Partial<PricesRequest> = {}): Promise<PricesResponse> {
    const _params: PricesRequest = {
      currency: 'EUR',
      lang: this.#config.defaultLanguage,
      ...params,
    }

    return this.#rest.get<PricesResponse>(`/types/${typeId}/issues/${issueId}/prices`, _params)
  }

  /**
   * Delete an item from a user's collection
   *
   * This functionality requires the OAuth 2.0 authentication with the scope `"edit_collection"`
   * @param userId - ID of the user
   * @param itemId - ID of the collected item
   */
  removeItem (userId: number, itemId: number): Promise<void> {
    return this.#rest.delete(`/users/${userId}/collected_items/${itemId}`, {}, true)
  }

  /**
   * Search the catalogue for coin, banknote and exonumia types
   * @param query - Search query
   * @param params - Miscellaneous params
   */
  search (query: string, params: Partial<Omit<SearchRequest, 'q'>> = {}): Promise<SearchResponse> {
    const _params: SearchRequest = {
      count: 50,
      lang: this.#config.defaultLanguage,
      page: 1,
      ...params,
      q: query,
    }

    return this.#rest.get<SearchResponse>('/types', _params)
  }

  /**
   * Search the catalogue for banknotes
   * @param query - Search query
   * @param params - Miscellaneous params
   */
  searchBanknotes (query: string, params: Partial<Omit<SearchRequest, 'category' | 'q'>> = {}): Promise<SearchResponse> {
    return this.search(query, { ...params, category: 'banknote' })
  }

  /**
   * Search the catalogue for coins
   * @param query - Search query
   * @param params - Miscellaneous params
   */
  searchCoins (query: string, params: Partial<Omit<SearchRequest, 'category' | 'q'>> = {}): Promise<SearchResponse> {
    return this.search(query, { ...params, category: 'coin' })
  }

  /**
   * Search the catalogue for exonumia pieces
   * @param query - Search query
   * @param params - Miscellaneous params
   */
  searchExonumia (query: string, params: Partial<Omit<SearchRequest, 'category' | 'q'>> = {}): Promise<SearchResponse> {
    return this.search(query, { ...params, category: 'exonumia' })
  }

  /**
   * Find a type by ID
   * @param typeId - ID of the type to fetch
   * @param params - Miscellaneous params
   */
  type (typeId: number, params: Partial<BaseRequest> = {}): Promise<Type> {
    const _params: BaseRequest = {
      lang: this.#config.defaultLanguage,
      ...params,
    }

    return this.#rest.get<Type>(`/types/${typeId}`, _params)
  }

  /**
   * Get information about a user
   * @param userId - ID of the user
   * @param params - Miscellaneous params
   */
  user (userId: number, params: Partial<BaseRequest> = {}): Promise<UserResponse> {
    const _params: BaseRequest = {
      lang: this.#config.defaultLanguage,
      ...params,
    }

    return this.#rest.get<UserResponse>(`/users/${userId}`, _params)
  }

  /**
   * Get the banknotes owned by a user
   *
   * This functionality requires the OAuth 2.0 authentication with the scope `"view_collection"`
   * @param userId - ID of the user
   * @param params - Miscellaneous params
   */
  userBanknotes (userId: number, params: Partial<Omit<CollectedItemsRequest, 'category'>> = {}): Promise<CollectedItemsResponse> {
    return this.userItems(userId, { ...params, category: 'banknote' })
  }

  /**
   * Get the coins owned by a user
   *
   * This functionality requires the OAuth 2.0 authentication with the scope `"view_collection"`
   * @param userId - ID of the user
   * @param params - Miscellaneous params
   */
  userCoins (userId: number, params: Partial<Omit<CollectedItemsRequest, 'category'>> = {}): Promise<CollectedItemsResponse> {
    return this.userItems(userId, { ...params, category: 'coin' })
  }

  /**
   * Get the list of collections of a user
   *
   * This functionality requires the OAuth 2.0 authentication with the scope `"view_collection"`
   * @param userId - ID of the user
   * @param params - Miscellaneous params
   */
  userCollections (userId: number, params: Partial<CollectionsRequest> = {}): Promise<CollectionsResponse> {
    return this.#rest.get<CollectionsResponse>(`/users/${userId}/collections`, params, true)
  }

  /**
   * Get the exonumia pieces owned by a user
   *
   * This functionality requires the OAuth 2.0 authentication with the scope `"view_collection"`
   * @param userId - ID of the user
   * @param params - Miscellaneous params
   */
  userExonumia (userId: number, params: Partial<Omit<CollectedItemsRequest, 'category'>> = {}): Promise<CollectedItemsResponse> {
    return this.userItems(userId, { ...params, category: 'exonumia' })
  }

  /**
   * Get the items (coin, banknotes, pieces of exonumia) owned by a user
   *
   * This functionality requires the OAuth 2.0 authentication with the scope `"view_collection"`
   * @param userId - ID of the user
   * @param params - Miscellaneous params
   */
  userItems (userId: number, params: Partial<CollectedItemsRequest> = {}): Promise<CollectedItemsResponse> {
    const _params: CollectedItemsRequest = {
      lang: this.#config.defaultLanguage,
      ...params,
    }

    return this.#rest.get<CollectedItemsResponse>(`/users/${userId}/collected_items`, _params, true)
  }

  /**
   * Get OAuth access token via user credentials
   * @param redirectUri - URI to redirect back the user to your application after they authenticate
   * @param scope - List of permissions you are requesting (e.g. 'view_collection')
   * @param params - Miscellaneous params
   * @returns OAuth adapter using authorization code
   */
  useAuthorizationCode (redirectUri: string, scope: Scope[], params: Partial<BaseRequest> = {}): OAuthConnector {
    const _params: BaseRequest = {
      lang: this.#config.defaultLanguage,
      ...params,
    }

    return new OAuthConnector(this.#rest, this.#credentials, redirectUri, scope, _params)
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

    const token = await this.#rest.get<OAuthToken>('/oauth_token', params)
    this.#credentials.oauthToken = token
    return token.user_id
  }
}
