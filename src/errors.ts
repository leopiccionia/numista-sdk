/** Error because server and client could not connect */
export class ConnectionError extends Error {

  constructor (error: Error) {
    super(error.message)
    this.name = 'ConnectionError'
    this.cause = error
  }
}

/** Server returned error */
export class RequestError extends Error {

  /** HTTP status code */
  status: number
  /** HTTP status text */
  statusText: string

  constructor (status: number, statusText: string, message: string) {
    super(message)
    this.name = 'RequestError'
    this.status = status
    this.statusText = statusText
  }
}
