import type { Coin, Collection, Grade, Issue, Issuer, Price } from './schemas'

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

export interface CoinPricesResponse {
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

export interface CollectedCoinsResponse {
  /** Warning message (e.g. in case of user not authenticated but some data can be retrieved since the collection is public) */
  warning?: string
  /** Count of coins owned by the user */
  coin_count: number
  /** Count of coins offered for swap by the user */
  coin_for_swap_count: number
  /** Count of different coin types owned by the user */
  coin_type_count: number
  /** Count of different coin types offered for swap by the user */
  coin_type_for_swap_count: number
  /** List of collected coins */
  collected_coins: Array<{
    /** Unique ID of the coin in collection */
    id: number
    /** Quantity of coins */
    quantity: number
    /** Describe the type of coin */
    coin: {
      /** ID of the type of coin */
      id: number
      /** Title of the type of coin */
      title: string
      issuer?: Issuer
    }
    issue?: Issue
    /** Indicate whether the coin is available for swap */
    for_swap: boolean
    /** Grade of the coin ("g", "vg", "f", "vf", "xf", "au" or "unc") */
    grade?: Grade
    /** Private comment (not available if the user is not authenticated) */
    private_comment?: string
    /** Public comment */
    public_comment?: string
    price?: Price
    collection?: Collection
    /** List of pictures or PDF documents. PDF documents are available only if the user is not authenticated. */
    pictures?: Array<{
      /** URL to the picture or the document in original size */
      url: string
      /** URL to the thumbnail of the picture or document */
      thumbnail_url: string
    }>
  }>
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
    parent: Issuer
  }>
}

export interface OAuthResponse {
  /** Token granting access to the data of a Numista user */
  access_token: string
  /** Type of token ("bearer") */
  token_type: 'bearer'
  /** Delay in seconds before the token expires */
  expires_in: number
  /** ID of the user who authenticated */
  user_id: number
}

export interface SearchCoinsResponse extends PaginatedResponse {
  /** Total count of matching coins */
  count: number
  /** List of matching coins on the given page */
  coins: Array<Pick<Coin, 'id' | 'issuer' | 'max_year' | 'min_year' |  'title'>>,
}

export interface UserResponse {
  /** User name */
  username: string
  /** URL to the avatar picture of the user */
  avatar: string
}
