import type { CatalogueCode } from './types/sugar'

const wellKnownCatalogues: Record<CatalogueCode, number> = {
  'KM': 3,
  'N': 1782,
  'P': 931,
  'X': 6,
  'Y': 9,
}

export function getCatalogueByCode (code: CatalogueCode): number {
  return wellKnownCatalogues[code] ?? 3
}
