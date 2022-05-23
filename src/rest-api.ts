import { $fetch } from 'ohmyfetch'
import type { $Fetch, FetchError } from 'ohmyfetch'

import { Credentials } from './credentials'
import { ConnectionError, RequestError } from './errors'
import type { APIError } from './types/schemas'

const BASE_URL = 'https://api.numista.com/api/v3'

function handleError (error: FetchError<APIError>): never {
  const { data, response } = error
  if (response) {
    throw new RequestError(response.status, response.statusText, data?.error_message || error.message)
  } else {
    throw new ConnectionError(error)
  }
}

/** @internal */
export class RestConnector {

  #credentials: Credentials
  #fetch: $Fetch

  constructor (credentials: Credentials) {
    this.#credentials = credentials
    this.#fetch = $fetch.create({ baseURL: BASE_URL })
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
    return this.#fetch(url, { method: 'DELETE', headers: this.#headers(useAuth), params }).catch(handleError)
  }

  async get<T> (url: string, params: object = {}, useAuth = false): Promise<T> {
    return this.#fetch<T>(url, { method: 'GET', headers: this.#headers(useAuth), params }).catch(handleError)
  }

  async patch<T> (url: string, params: object, body: object, useAuth = false): Promise<T> {
    return this.#fetch<T>(url, { method: 'PATCH', body, headers: this.#headers(useAuth), params }).catch(handleError)
  }

  async post<T> (url: string, params: object, body: object, useAuth = false): Promise<T> {
    return this.#fetch<T>(url, { method: 'POST', body, headers: this.#headers(useAuth), params }).catch(handleError)
  }
}
