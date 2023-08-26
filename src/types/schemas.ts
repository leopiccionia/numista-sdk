/** Catalogue category */
export type Category = 'coin' | 'banknote' | 'exonumia'

export type CoinType = 'common_coin' | 'commemorative_coin' | 'non_circulating_coin' | 'token' | 'pattern'

export type CompositionType = 'plain'

export type CopyrightType = 'personnel' | 'site_autorise' | 'autre'

export type Grade = 'g' | 'vg' | 'f' | 'vf' | 'xf' | 'au' | 'unc'

export type Language = 'en' | 'es' | 'fr'

export type MimeType = 'image/jpeg' | 'image/png'

export type Orientation = 'coin' | 'medal' | 'variable'

/** @internal */
export interface APIError {
  /** Error message */
  error_message: string
}

export interface BaseType {
  /** Unique ID of the type on Numista */
  id: number
  /** Title of the type */
  title: string
  /** Category */
  category: Category
  issuer?: Issuer
  /** First year the type was produced (in the Gregorian calendar) */
  min_year?: number
  /** Last year the type was produced (in the Gregorian calendar) */
  max_year?: number
}

export interface CollectedItem {
  /** Unique ID of the item */
  id: number
  /** Quantity of items */
  quantity: number
  /** Describe the type of the item */
  type: {
    /** ID of the type */
    id: number
    /** Title of the type */
    title: string
    /** Category */
    category: Category
    issuer?: Issuer
  }
  issue?: Issue
  /** Indicate whether the item is available for swap */
  for_swap: boolean
  /** Grade of the item */
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
}

export interface Collection {
  /** ID of the collection */
  id: number
  /** Name of the collection */
  name: string
}

export interface Currency {
  /** Unique ID of the currency on Numista */
  id: number
  /** Name of the currency */
  name: string
  /** Full name of the currency, including dates */
  full_name: string
}

export interface Issue {
  /** Unique ID of the issue on Numista */
  id: string
  /** Informs whether the issuance year is present on the issue */
  is_dated?: boolean
  /** Issuance year as written on the coin, if the issue is dated */
  year?: number
  /** Issuance year in Gregorian calendar, if the issue is dated */
  gregorian_year?: number
  /** First year of issuance in Gregorian calendar, if the issue is non dated */
  min_year?: number
  /** Last year of issuance in Gregorian calendar, if the issue is non dated */
  max_year?: number
  /** Mint letter */
  mint_letter?: string
  /** List of marks (mint master mark, privy mark, die mark, etc.) */
  marks?: Array<{
    /** ID of the mark */
    id: number
    /** URL to the picture of the mark. Marks either have a picture or letters */
    picture?: string
    /** Letters of the mark. Marks either have a picture or letters */
    letters?: string
  }>
  /** List of signatures on the banknote */
  signatures?: Array<{
    /** Name of the person who signed */
    signer_name: string
    /** Job title of the person who signed */
    signer_title?: string
  }>
  /** Quantity minted */
  mintage?: number
  /** Comment about the issue */
  comment?: string
}

export interface Issuer {
  /** Unique ID of the issuer on Numista */
  code: string
  /** Name of the issuer */
  name: string
}

export interface IssueUpdate {
  /** Informs whether the issuance year is present on the coin */
  is_dated: boolean
  /** Issuance year as written on the coin. This field is mandatory for dated coins and ignored for non-dated coins */
  year?: number
  /** Issuance year in Gregorian calendar. If missing, it will be calculated automatically. This field is ignored for non-dated coins */
  gregorian_year?: number
  /** First year of issuance in Gregorian calendar, if the coin is non dated. This field is ignored for dated coins */
  min_year?: number
  /** Last year of issuance in Gregorian calendar, if the coin is non dated. This field is ignored for dated coins */
  max_year?: number
  /** Mint letter */
  mint_letter?: string
  /** List of marks (mint master mark, privy mark, die mark, etc.) */
  marks?: Array<{
    /** ID of the mark */
    id: number
  }>
  /** List of signatures */
  signatures?: Array<{
    /** ID of the signature */
    id: number
  }>
  /** Quantity minted */
  mintage?: number
  /** Comment about the issue */
  comment?: LocalizedLabel[]
}

export interface LocalizedLabel {
  /** Language code */
  language: Language
  /** Label in the given language */
  label: string
}

export interface Price {
  /** Value */
  value: number
  /** 3-letter ISO 4217 currency code */
  currency: string
}

export interface Reference {
  /** The catalogue in which the reference can be found */
  catalogue: {
    /** ID of the catalogue in Numista */
    id: number
    /** Code identifying the catalogue */
    code: string
  }
  /** Number of the type in the catalogue */
  number: string
}

export interface Type extends BaseType {
  /** URL to the type on Numista */
  url?: string
  /** Type */
  type?: string
  /** Face value */
  value?: {
    /** Face value in text format */
    text?: string
    /** Face value as a floating number */
    numeric_value?: number
    /** If the value is better described as a fraction, this is the numerator of the fraction */
    numerator?: number
    /** If the value is better described as a fraction, this is the denominator of the fraction */
    denominator?: number
    currency?: Currency
  }
  /** Ruling authorities (emperor, queen, period, etc.) */
  ruler?: Array<{
    /** Unique ID of the ruling authority on Numista */
    id: number
    /** Name of the ruling authority */
    name: string
    /** Identifier of the ruling authority at Wikidata, starting with a "Q" */
    wikidata_id?: string
    /** Dynasty, house, extended period, or any other group of ruling authorities */
    group?: {
      /** Unique ID of the ruling authority group on Numista */
      id: number
      /** Name of the ruling authority group */
      name: string
    }
  }>
  /** Information about the demonetization of the coin or banknote */
  demonetization?: {
    /** True if the type is demonetized, false if it is not demonetized */
    is_demonetized: number
    /** Date of demonetisation (YYYY-MM-DD) */
    demonetization_date?: string
  }
  /** Shape */
  shape?: string
  /** Composition (metallic content) */
  composition?: {
    /** Description of the composition */
    text?: string
  }
  /** Manufacturing technique */
  technique?: {
    /** Description of the technique */
    text: string
  }
  /** Weight in grams */
  weight?: number
  /** Size (diameter) in millimeters */
  size?: number
  /** Thickness of the coin in millimeters */
  thickness?: number
  /** Orientation of the coin ("coin", "medal" or "variable") */
  orientation?: Orientation
  obverse?: TypeSide
  reverse?: TypeSide
  edge?: TypeSide
  watermark?: TypeSide
  /** Mints where the coin was minted */
  mints?: Array<{
    /** Unique ID of the mint on Numista */
    id: string
    /** Name of the mint */
    name: string
  }>
  /** Printers where the banknote was printed */
  printers?: Array<{
    /** Unique ID of the printer on Numista */
    id: number
    /** Name of the printer */
    name: string
  }>
  /** For types which are part of a series, the name of the series */
  series?: string
  /** For commemorated types, short description of the commemorated topic (event, person, etc.) */
  commemorated_topic?: string
  /** General comments about the type (HTML format) */
  comments?: string
  /** List of related types */
  related_types?: Array<{
    /** Unique ID of the type on Numista */
    id: number
    /** Title of the type */
    title: string
    /** Category */
    category?: Category
    issuer?: Issuer
    /** First year the type was produced (in the Gregorian calendar) */
    min_year: number
    /** Last year the type was produced (in the Gregorian calendar) */
    max_year: number
  }>
  /** List of tags */
  tags?: string[]
  /** References of the type in other catalogues */
  references?: Reference[]
}

export interface TypeSide {
  /** Name of the engraver(s) */
  engravers?: string[]
  /** Description of the side of the type */
  description?: string
  /** Lettering visible on the side of the type */
  lettering?: string
  /** Scripts used to write the lettering on the side of the coins */
  lettering_scripts?: {
    /** Name of the script */
    name: string
  }
  /** Legend visible on the side of the type with abbreviations replaced by full words */
  unabridged_legend?: string
  /** Translation of the lettering visible on the side of the type */
  lettering_translation?: string
  /** URL to the picture of the side of the type */
  picture?: string
  /** URL to the thumbnail of the picture of the side of the type */
  thumbnail?: string
  /** Name of the owner of the picture. Pictures should not be used without consent from their owner */
  picture_copyright?: string
  /** URL to the website of the owner of the picture. Pictures should not be used without consent from their owner */
  picture_copyright_url?: string
  /** Name of the license of the picture, if the owner of the picture specified a license */
  license_name?: string
  /** URL to the license of the picture, if the owner of the picture specified a license. */
  license_url?: string
}

export interface TypeSideUpdate {
  /** Name of the engraver(s). Note that this field is not applicable for the edge or watermark */
  engravers?: string[]
  /** Name of the designer(s). Note that this field is not applicable for the edge or watermark */
  designers?: string[]
  /** Description of the side of the type */
  description?: LocalizedLabel[]
  /** Lettering visible on the side of the type */
  lettering?: string
  /** Scripts used to write the lettering on the side of the coins */
  lettering_scripts?: Array<{
    /** Unique ID of the script */
    id: number
  }>
  /** Legend visible on the side of the type with abbreviations replaced by full words */
  unabridged_legend?: string
  /** Translation of the lettering visible on the side of the type */
  lettering_translation?: LocalizedLabel[]
  /** URL to the picture of the side of the type. You may provide any URL publicly available. The picture will be downloaded by Numista and stored internally. Only JPEG images are accepted */
  picture?: string
  /** Name of the owner of the picture. This field is mandatory if a picture is provided. Pictures should not be used without consent from their owner */
  picture_copyright?: string
  /** Type of source of the picture. This field is mandatory if a picture is provided */
  picture_copyright_type?: CopyrightType
}

export interface TypeUpdate {
  /** Title of the type */
  title: LocalizedLabel[]
  /** Category */
  category: Category
  /** Issuer */
  issuer?: {
    /** Unique ID of the issuer on Numista */
    code: string
  }
  /** Type */
  type?: string
  /** Face value */
  value?: {
    /** Face value in text format */
    text?: LocalizedLabel[]
    /** Face value as a floating number. This field is ignored if a numerator and a denominator are provided */
    numeric_value?: number
    /** If the value is better described as a fraction, this is the numerator of the fraction */
    numerator?: number
    /** If the value is better described as a fraction, this is the denominator of the fraction */
    denominator?: number
    /** Currency */
    currency?: {
      /** Unique ID of the currency on Numista */
      id: number
    }
  }
  /** Ruling authorities (emperor, queen, period, etc.) */
  ruling_authority?: Array<{
    /** Unique ID of the ruling authority on Numista */
    id: number
  }>
  /** Shape */
  shape?: {
    /** Unique ID of the shape on Numista */
    id: number
    additional_details?: LocalizedLabel[]
  }
  /** Composition (metallic content) */
  composition?: {
    /** Type of composition */
    composition_type: CompositionType
    /** COmposition of the core */
    core?: {
      material: {
        /** Unique ID of the material on Numista */
        id: number
      }
      /** Fineness of the material (e.g. 999.9) */
      fineness?: number
    }
    additional_details?: LocalizedLabel[]
  }
  /** Manufacturing technique */
  technique?: {
    list?: Array<{
      /** Unique ID of the manufacturing technique on Numista */
      id: number
    }>
    additional_details?: LocalizedLabel[]
  }
  /** Weight in grams */
  weight?: number
  /** Size (diameter) in millimeters */
  size?: number
  /** Thickness of the coin in millimeters */
  thickness?: number
  /** Orientation of the coin ("coin", "medal" or "variable") */
  orientation?: Orientation
  /** Inform whether the coin or banknote is demonetized */
  demonetization?: {
    /** true for demonetized, and false if still legal tender */
    is_demonetized: boolean
    /** Demonetization date, with format "YYYY-MM-DD" */
    demonetization_date?: string
  }
  /** Calendar to which the year visible on the type belongs */
  calendar?: {
    /** Unique ID of the calendar on Numista */
    code: string
  }
  obverse?: TypeSideUpdate
  reverse?: TypeSideUpdate
  edge?: TypeSideUpdate
  watermark?: TypeSideUpdate
  /** Mints where the coin was minted */
  mints?: Array<{
    /** Unique ID of the mint on Numista */
    id: number
    /** Mint letter */
    letter?: string
  }>
  /** Printers where the banknote was printed */
  printers?: Array<{
    /** Unique ID of the printer on Numista */
    id: number
  }>
  /** For types which are part of a series, the name of the series */
  series?: LocalizedLabel[]
  /** For commemorated types, short description of the commemorated topic (event, person, etc.) */
  commemorated_topic?: LocalizedLabel[]
  /** General comments about the type (HTML format) */
  comments?: LocalizedLabel[]
  /** List of related types */
  related_coins?: Array<{
    /** Unique ID of the type on Numista */
    id: number
  }>
  /** List of tags */
  tags?: Array<{
    /** ID of the tag in Numista */
    id: number
  }>
  references?: Array<{
    /** The catalogue in which the reference can be found */
    catalogue: {
      /** ID of the catalogue in Numista */
      id: number
    }
    /** Number of the type in the catalogue */
    number: string
  }>
}
