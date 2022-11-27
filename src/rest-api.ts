import { ofetch } from 'ofetch'
import type { $Fetch } from 'ofetch'

import { Credentials } from './credentials'
import { handleFetchError } from './errors'

const BASE_URL = 'https://api.numista.com/api/v3'

/** @internal */
export class RestConnector {

  #credentials: Credentials
  #fetch: $Fetch

  constructor (credentials: Credentials) {
    this.#credentials = credentials
    this.#fetch = ofetch.create({ baseURL: BASE_URL })
  }

  #headers (useAuth: boolean): HeadersInit {
    const headers: HeadersInit = {
      'Numista-API-Key': this.#credentials.apiKey,
    }
    if (useAuth && this.#credentials.oauthToken) {
      headers['Authorization'] = `Bearer ${this.#credentials.oauthToken.access_token}`
    }
    return headers
  }

  async delete (url: string, params: object = {}, useAuth = false): Promise<void> {
    return this.#fetch(url, { method: 'DELETE', headers: this.#headers(useAuth), params }).catch(handleFetchError)
  }

  async get<T> (url: string, params: object = {}, useAuth = false): Promise<T> {
    return this.#fetch<T>(url, { method: 'GET', headers: this.#headers(useAuth), params }).catch(handleFetchError)
  }

  async patch<T> (url: string, params: object, body: object, useAuth = false): Promise<T> {
    return this.#fetch<T>(url, { method: 'PATCH', body, headers: this.#headers(useAuth), params }).catch(handleFetchError)
  }

  async post<T> (url: string, params: object, body: object, useAuth = false): Promise<T> {
    return this.#fetch<T>(url, { method: 'POST', body, headers: this.#headers(useAuth), params }).catch(handleFetchError)
  }
}
