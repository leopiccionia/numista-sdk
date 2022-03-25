/**
 * Error returned because server and client could not connect
 */
export class ConnectionError extends Error {

  /** @internal */
  constructor (error: Error) {
    super(error.message)
    this.name = 'ConnectionError'
    this.cause = error
  }
}

/**
 * Error returned if server returned an error status
 */
export class RequestError extends Error {

  /** HTTP status code */
  status: number
  /** HTTP status text */
  statusText: string

  /** @internal */
  constructor (status: number, statusText: string, message: string) {
    super(message)
    this.name = 'RequestError'
    this.status = status
    this.statusText = statusText
  }
}
