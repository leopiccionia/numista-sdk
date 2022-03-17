export function deepClone<T> (original: T): Readonly<T> {
  return JSON.parse(JSON.stringify(original))
}

export function mergeObjects<T> (acc: T, curr: T): Readonly<T> {
  const merge: Record<string, any> = { ...acc }

  for (const key of Object.keys(curr)) {
    /** @ts-ignore */
    if (Array.isArray(merge[key]) && Array.isArray(curr[key])) {
      /** @ts-ignore */
      merge[key] = [...merge[key], ...curr[key] as Array<unknown>]
    } else {
      /** @ts-ignore */
      merge[key] = curr[key]
    }
  }

  return merge as T
}
