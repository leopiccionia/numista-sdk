import fetch, { Headers } from 'cross-fetch'

import { Credentials } from './credentials'
import { ConnectionError, RequestError } from './errors'
import type { APIError } from './types/schemas'

type HttpMethod = 'GET' | 'POST'

const BASE_URL = 'https://api.numista.com/api/v2'

function searchParams (obj: Record<string, any>): URLSearchParams {
  const entries = Object.keys(obj).map((key) => [key, String(obj[key])])
  return new URLSearchParams(entries)
}

export class RestConnector {

  #credentials: Credentials

  constructor (credentials: Credentials) {
    this.#credentials = credentials
  }

  async request<T> (method: HttpMethod, url: string, params: object, body: object | null = null, useAuth = false): Promise<T> {
    const headers = new Headers({ 'Numista-API-Key': this.#credentials.apiKey })
    if (body) {
      headers.append('Content-Type', 'application/json')
    }
    if (useAuth && this.#credentials.oauthToken) {
      headers.append('Authorization', `Bearer ${this.#credentials.oauthToken.access_token}`)
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
        return Promise.reject(new RequestError(res.status, res.statusText, (data as APIError).error_message))
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        return Promise.reject(new ConnectionError(err))
      } else {
        return Promise.reject(new ConnectionError(new Error('Unknown error')))
      }
    }
  }
}
