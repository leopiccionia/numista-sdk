import type { FetchError } from 'ohmyfetch'

import type { APIError } from './types/schemas'

/**
 * @internal
 * Normalize a REST failure into either a `RequestError` or a `ResponseError`
 * @param error Error returned by `$fetch`
 */
export function handleFetchError (error: FetchError<APIError>): never {
  const { data, response } = error
  if (response) {
    throw new ResponseError(response.status, response.statusText, data, error)
  } else {
    throw new RequestError(error)
  }
}

/**
 * Error returned because server and client could not connect
 */
export class RequestError extends Error {

  /** @internal */
  constructor (error: Error) {
    super(error.message, { cause: error })
    this.name = 'RequestError'
  }
}

/**
 * Error returned if server returned an error status
 */
export class ResponseError extends Error {

  /** HTTP status code */
  status: number
  /** HTTP status text */
  statusText: string

  /** @internal */
  constructor (status: number, statusText: string, response: APIError | undefined, error: Error) {
    super(response?.error_message || error.message, { cause: error })
    this.name = 'ResponseError'
    this.status = status
    this.statusText = statusText
  }
}
