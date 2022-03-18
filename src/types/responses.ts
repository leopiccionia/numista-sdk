import type { Coin, Issuer } from './schemas'

export interface PaginatedResponse {
  count: number
}

export interface GetCataloguesResponse {
  /** Count of catalogues */
  count: number
  catalogues: Array<{
    /** Unique ID of the catalogue at Numista */
    id: number
    /** Code of the catalogue */
    code: string
    /** Title of the catalogue */
    title: string
    /** Author(s) of the catalogue */
    author: string
    /** Publisher of the catalogue */
    publisher: string
    /** ISBN-13 code for the catalogue */
    isbn13?: string
  }>
}

export interface GetIssuersResponse {
  /** Count of issuers */
  count: number
  /** List of issuers */
  issuers: Array<{
    /** Unique ID of the issuer */
    code: string
    /** Name of the issuer */
    name: string
    /** Identifier of the issuer at Wikidata, starting with a "Q" */
    wikidata_id?: string
    parent: Issuer
  }>
}

export interface SearchCoinsResponse extends PaginatedResponse {
  /** Total count of matching coins */
  count: number
  /** List of matching coins on the given page */
  coins: Array<Pick<Coin, 'id' | 'issuer' | 'max_year' | 'min_year' |  'title'>>,
}
