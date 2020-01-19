export const chunk = <T>(array: T[], size: number) => {
  const arrayCopy = [...array]
  const chunks: Array<T[]> = []
  let chunk: T[] = []

  for (let val of arrayCopy) {
    chunk.push(val)
    if (chunk.length === size) {
      chunks.push(chunk)
      chunk = []
    }
  }
  chunk.length && chunks.push(chunk)

  return chunks
}
