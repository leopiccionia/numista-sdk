import type { OAuthToken } from './types/oauth'

/** @internal */
export class Credentials {

  #apiKey: string
  #clientId: string
  #oauthToken?: OAuthToken

  constructor (apiKey: string, clientId: string) {
    this.#apiKey = apiKey
    this.#clientId = clientId
    this.#oauthToken = undefined
  }

  get apiKey (): string {
    return this.#apiKey
  }

  get clientId (): string {
    return this.#clientId
  }

  get oauthToken (): OAuthToken | undefined {
    return this.#oauthToken
  }

  set oauthToken (oauthToken: OAuthToken | undefined) {
    this.#oauthToken = oauthToken

    if (oauthToken) {
      setTimeout(() => {
        this.#oauthToken = undefined
      }, oauthToken.expires_in * 1000)
    }
  }
}
