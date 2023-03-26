import type { Category, Grade, Language, Price } from './schemas'

export interface BaseRequest {
  /** Language */
  lang?: Language
}

export interface PaginatedRequest {
  /** Results per page */
  count: number
  /** Page of results */
  page: number
}

export interface AddItemRequest {
  /** ID of the type of the item */
  type: number
  /** ID of the issue of the item */
  issue?: number
  /**
   * Quantity of items
   * @defaultValue 1
   */
  quantity?: number
  /** Grade of the item */
  grade?: Grade
  /**
   * Indicate whether the item is available for swap
   * @defaultValue false
   */
  for_swap?: boolean
  /** Private comment */
  private_comment?: string
  /** Public comment */
  public_comment?: string
  /** Buying price */
  price?: Price
  /** ID of the collection */
  collection?: number
}

export interface CollectedItemsRequest extends BaseRequest {
  /** Category. If this parameter is provided, only items of the given category are returned */
  category?: Category
  /** Collection ID. If this parameter is provided, only items in the given collection are returned */
  collection?: number
  /** Language */
  lang?: Language
  /** Coin type ID. If this parameter is provided, only coins of the given coin type are returned */
  type?: number
}

export interface CollectionsRequest {
  /** Category. If this parameter is provided, only collections containing items of the given category are returned */
  category?: Category
}

export interface EditItemRequest {
  /** ID of the type of the item */
  type?: number
  /** ID of the issue of the item, or null for undetermined issue */
  issue?: number | null
  /**
   * Quantity of items
   * @defaultValue 1
   */
  quantity?: number
  /** Grade of the item, or null for undetermined grade */
  grade?: number | null
  /**
   * Indicate whether the item is available for swap
   * @defaultValue false
   */
  for_swap?: boolean
  /** Private comment */
  private_comment?: string
  /** Public comment */
  public_comment?: string
  /** Buying price */
  price?: Price | null
  /** ID of the collection */
  collection?: number
}

/** @internal */
export interface OAuthAuthorizationCodeRequest {
  /** Grant type */
  grant_type: 'authorization_code'
  /** For grant type "authorization_code", this is the authorization code */
  code: string
  /** For grant type "authorization_code", client ID */
  client_id: string
  /** For grant type "authorization_code", client secret, which is the same as the API key */
  client_secret: string
  /** For grant type "authorization_code", repeat the redirect URI used to get the authorization code */
  redirect_uri: string
  /** A comma-separated list of permissions you are requesting (e.g. 'view_collection') */
  scope: string
}

/** @internal */
export interface OAuthClientCredentialsRequest {
  /** Grant type */
  grant_type: 'client_credentials'
  /** A comma-separated list of permissions you are requesting (e.g. 'view_collection') */
  scope: string
}

export interface PricesRequest extends BaseRequest {
  /** Language */
  lang?: Language
  /** 3-letter ISO 4217 currency code */
  currency?: string
}

/**
 * At least one of the following parameters should be provided: `q`, `issuer`, `catalogue`
 */
export interface SearchRequest extends BaseRequest, PaginatedRequest {
  /** Language */
  lang?: Language
  /** Catalogue category */
  category?: Category
  /** Search query */
  q?: string
  /** Issuer code. If provided, only the types from the given issuer are returned */
  issuer?: string
  /** ID of a reference catalogue. If provided, only the types referenced in the given catalogue are returned */
  catalogue?: number
  /** Number of the searched typed in a reference catalogue. This parameter works only with the other parameter `catalogue` */
  number?: string
  /** Page of results */
  page: number
  /** Results per page */
  count: number
}
