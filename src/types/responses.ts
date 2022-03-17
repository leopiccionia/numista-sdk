import type { Coin } from './schemas'

export interface PaginatedResponse {
  count: number
}

export type GetCoinResponse = Coin

export interface SearchCoinsResponse extends PaginatedResponse {
  /** Total count of matching coins */
  count: number,
  /** List of matching coins on the given page */
  coins: Array<Pick<Coin, 'id' | 'issuer' | 'max_year' | 'min_year' |  'title'>>,
}
