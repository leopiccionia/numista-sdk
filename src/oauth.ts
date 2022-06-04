import { v4 as uuid } from 'uuid'

import type { Credentials } from './credentials'
import type { RestConnector } from './rest-api'
import type { OAuthToken, Scope } from './types/oauth'
import type { BaseRequest, OAuthAuthorizationCodeRequest } from './types/requests'

/** OAuth adapter using authorization code */
export class OAuthConnector {

  #credentials: Credentials
  #config: BaseRequest
  #redirectUri: string
  #rest: RestConnector
  #scope: string
  #state: string

  /** @internal */
  constructor (rest: RestConnector, credentials: Credentials, redirectUri: string, scope: Scope[], config: BaseRequest) {
    this.#credentials = credentials
    this.#config = config
    this.#redirectUri = redirectUri
    this.#rest = rest
    this.#scope = scope.join(',')
    this.#state = uuid()
  }

  get state (): string {
    return this.#state
  }

  get url (): string {
    const clientId = this.#credentials.clientId
    const lang = this.#config.lang
    const redirectUri = encodeURIComponent(this.#redirectUri)
    const scope = this.#scope
    const state = this.#state

    return `https://${lang}.numista.com/api/oauth_authorize.php?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${state}`
  }

  /**
   * Exchange the authorization code for an access token
   * @param code - The authorization code
   * @returns ID of the user who authenticated
   */
  async setCode (code: string): Promise<number> {
    const params: OAuthAuthorizationCodeRequest = {
      grant_type: 'authorization_code',
      code,
      client_id: this.#credentials.clientId,
      client_secret: this.#credentials.apiKey,
      redirect_uri: this.#redirectUri,
      scope: this.#scope,
    }

    const token = await this.#rest.get<OAuthToken>('/oauth_token', params)
    this.#credentials.oauthToken = token
    return token.user_id
  }
}
