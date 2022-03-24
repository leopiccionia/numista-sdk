import { v4 as uuid } from 'uuid'

import { GET_API_KEY } from './rest-api'
import type { RestConnector } from './rest-api'
import type { OAuthToken, Scope } from './types/oauth'
import type { OAuthAuthorizationCodeRequest } from './types/requests'
import type { BaseRequest } from './types/requests'

/** OAuth adapter using authorization code */
export class OAuthConnector {

  #clientId: string
  #config: BaseRequest
  #redirectUri: string
  #rest: RestConnector
  #scope: string
  #state: string

  /** @internal */
  constructor (rest: RestConnector, clientId: string, redirectUri: string, scope: Scope[], config: BaseRequest) {
    this.#clientId = clientId
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
    const clientId = this.#clientId
    const lang = this.#config.lang
    const redirectUri = encodeURIComponent(this.#redirectUri)
    const scope = this.#scope
    const state = this.#state

    return `https://${lang}.numista.com/api/oauth_authorize.php?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${state}`
  }

  /**
   * Exchange the authorization code for an access token
   * @param code The authorization code
   * @returns ID of the user who authenticated
   */
  async setCode (code: string): Promise<number> {
    const params: OAuthAuthorizationCodeRequest = {
      grant_type: 'authorization_code',
      code,
      client_id: this.#clientId,
      client_secret: this.#rest[GET_API_KEY],
      redirect_uri: this.#redirectUri,
    }

    const response = await this.#rest.request<OAuthToken>('GET', '/oauth_token', params)
    this.#rest.configureOauth(response)
    return response.user_id
  }
}
