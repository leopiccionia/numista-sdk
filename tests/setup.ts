import { ConnectorConfig, NumistaConnector } from '#lib'

export const NUMISTA_KEY: string = (import.meta as any).env.VITE_NUMISTA_API_KEY

export function createConnector (config: Partial<ConnectorConfig> = {}): NumistaConnector {
  return new NumistaConnector(NUMISTA_KEY, config)
}
