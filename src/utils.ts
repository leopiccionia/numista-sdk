export function deepClone<T> (original: T): Readonly<T> {
  return JSON.parse(JSON.stringify(original))
}
