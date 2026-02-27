export function deepCopy<T = any>(data: T): T {
  const typeStr = typeof data;
  const ret = typeStr === 'string' ||
    typeStr === 'number' || data === null || data === undefined;
  if (ret) {
    return data;
  }
  const result: any = Array.isArray(data) ? [] : {}
  for (const key in data) {
    if (!Object.prototype.hasOwnProperty.call(data, key)) {
      continue
    }
    if (typeof data[key] === 'object' && data[key] !== null) {
      result[key] = deepCopy(data[key])
    } else {
      result[key] = data[key]
    }
  }

  return result
}
