export type Scope = 'view_collection'

export interface OAuthToken {
  /** Token granting access to the data of a Numista user */
  access_token: string
  /** Type of token ("bearer") */
  token_type: 'bearer'
  /** Delay in seconds before the token expires */
  expires_in: number
  /** ID of the user who authenticated */
  user_id: number
}
