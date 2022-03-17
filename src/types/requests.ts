import { Language } from './schemas'

export interface GetCoinRequest {
  /** Language */
  lang?: Language
}

export interface SearchCoinsRequest {
  /** Language */
  lang?: Language
  /** Search query */
  q: string
  /** Issuer code. If provided, only the coins from the given issuer are returned */
  issuer?: string
  /** Page of results */
  page?: number
  /** Results per page */
  count?: number
}
