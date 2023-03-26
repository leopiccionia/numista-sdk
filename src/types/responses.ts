import type { BaseType, CollectedItem, Collection, Grade, Issuer } from './schemas'

export interface SearchedType extends BaseType {
  /** URL to a thumbnail of the picture of the obverse */
  obverse_thumbnail?: string
  /** URL to a thumbnail of the picture of the reverse */
  reverse_thumbnail?: string
}

export interface PaginatedResponse {
  count: number
}

export interface CataloguesResponse {
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

export interface CollectedItemsResponse {
  /** Count of items owned by the user */
  item_count: number
  /** Count of items offered for swap by the user */
  item_for_swap_count: number
  /** Count of different types owned by the user */
  item_type_count: number
  /** Count of different types offered for swap by the user */
  item_type_for_swap_count: number
  /** List of items in the collection */
  items: CollectedItem[]
}

export interface CollectionsResponse {
  /** Number of collections */
  count: number
  /** List of collections */
  collections: Collection[]
}

export interface IssuersResponse {
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
    parent?: Issuer
  }>
}

export interface PricesResponse {
  /** 3-letter ISO 4217 code of the currency in which the prices are provided */
  currency: string
  /** List of zero or more prices for each grade */
  prices: Array<{
    /** Grade of the coin ("g", "vg", "f", "vf", "xf", "au" or "unc") */
    grade: Grade
    /** Estimate of the price determined by Numista */
    price: number
  }>
}

export interface SearchResponse extends PaginatedResponse {
  /** Total count of results */
  count: number
  /** List of results on the given page */
  types: SearchedType[]
}

export interface UserResponse {
  /** User name */
  username: string
  /** URL to the avatar picture of the user */
  avatar: string
}
