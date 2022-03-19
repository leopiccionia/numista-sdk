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

export interface GetIssuePricesRequest extends BaseRequest {
  /** Language */
  lang?: Language
  /** 3-letter ISO 4217 currency code */
  currency?: string
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
