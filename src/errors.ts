/** Server returned error */
export class ConnectorError extends Error {

  /** HTTP status code */
  status: number
  /** HTTP status text */
  statusText: string

  constructor (status: number, statusText: string, message: string) {
    super(message)
    this.name = 'ConnectorError'
    this.status = status
    this.statusText = statusText
  }
}

/** Error because server and client could not connect */
export class NetworkError extends Error {

  constructor (error: Error) {
    super(error.message)
    this.name = 'NetworkError'
    this.cause = error
  }
}
