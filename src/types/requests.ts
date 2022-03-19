import type { Language } from './schemas'

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

export interface CoinPricesRequest extends BaseRequest {
  /** Language */
  lang?: Language
  /** 3-letter ISO 4217 currency code */
  currency?: string
}

export interface CollectedCoinsRequest extends BaseRequest {
  /** Language */
  lang?: Language
  /** Coin type ID. If this parameter is provided, only coins of the given coin type are returned. */
  type?: number
}

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
}

export interface OAuthClientCredentialsRequest {
  /** Grant type */
  grant_type: 'client_credentials'
  /** A comma-separated list of permissions you are requesting (e.g. 'view_collection') */
  scope: string
}

export interface SearchCoinsRequest extends BaseRequest, PaginatedRequest {
  /** Language */
  lang?: Language
  /** Search query */
  q: string
  /** Issuer code. If provided, only the coins from the given issuer are returned */
  issuer?: string
  /** Page of results */
  page: number
  /** Results per page */
  count: number
}
