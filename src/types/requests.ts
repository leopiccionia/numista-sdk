import type { Language } from './schemas'

export interface BaseRequest {
  /** Language */
  lang?: Language
}

export interface PaginatedRequest {
  count: number
  page: number
}

export interface SearchCoinsRequest extends PaginatedRequest {
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
