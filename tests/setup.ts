import { NumistaConnector } from '#lib'
import type { ConnectorConfig } from '#lib'

const NUMISTA_API_KEY: string = (import.meta as any).env.NUMISTA_API_KEY
const NUMISTA_CLIENT_ID: string = (import.meta as any).env.NUMISTA_CLIENT_ID

export function createConnector (config: Partial<ConnectorConfig> = {}): NumistaConnector {
  return new NumistaConnector(NUMISTA_API_KEY, NUMISTA_CLIENT_ID, config)
}
