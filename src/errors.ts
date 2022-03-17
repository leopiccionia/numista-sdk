export class ConnectorError extends Error {

  status: number
  statusText: string

  constructor (status: number, statusText: string, message: string) {
    super(message)
    this.name = 'ConnectorError'
    this.status = status
    this.statusText = statusText
  }
}

export class NetworkError extends Error {

  constructor (error: Error) {
    super(error.message)
    this.name = 'NetworkError'
    this.cause = error
  }
}
