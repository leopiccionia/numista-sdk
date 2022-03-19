import fetch, { Headers } from 'cross-fetch'

import { ConnectorError, NetworkError } from './errors'
import type { APIError } from './types/schemas'

type HttpMethod = 'GET' | 'POST'

const BASE_URL = 'https://api.numista.com/api/v2'

function searchParams (obj: Record<string, any>): URLSearchParams {
  const entries = Object.keys(obj).map((key) => [key, String(obj[key])])
  return new URLSearchParams(entries)
}

export class RestConnector {

  #apiKey: string
  #oauthToken: string

  constructor (apiKey: string) {
    this.#apiKey = apiKey
    this.#oauthToken = ''
  }

  configureOauth (token: string) {
    this.#oauthToken = token
  }

  async request<T> (method: HttpMethod, url: string, params: object, body = null, useAuth = false): Promise<T> {
    const headers = new Headers({ 'Numista-API-Key': this.#apiKey })
    if (body) {
      headers.append('Content-Type', 'application/json')
    }
    if (useAuth && this.#oauthToken) {
      headers.append('Authorization', `Bearer ${this.#oauthToken}`)
    }

    try {
      const res = await fetch(`${BASE_URL}${url}?${searchParams(params).toString()}`, {
        body: body ? JSON.stringify(body) : undefined,
        headers,
        method,
      })
      const data = await res.json()
      if (res.ok) {
        return data as Promise<T>
      } else {
        return Promise.reject(new ConnectorError(res.status, res.statusText, (data as APIError).error_message))
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        return Promise.reject(new NetworkError(err))
      } else {
        return Promise.reject(new NetworkError(new Error('Unknown error')))
      }
    }
  }
}
