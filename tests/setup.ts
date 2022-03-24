import { NumistaConnector } from '#lib'
import type { ConnectorConfig } from '#lib'

export const NUMISTA_KEY: string = (import.meta as any).env.NUMISTA_API_KEY

export function createConnector (config: Partial<ConnectorConfig> = {}): NumistaConnector {
  return new NumistaConnector(NUMISTA_KEY, config)
}
