export const chunk = <T>(array: T[], size: number) => {
  const mainCopy = [...array]
  const chunks: Array<T[]> = []

  while (mainCopy.length) {
    if (size >= mainCopy.length) {
      chunks.push(mainCopy)
      break
    }

    let chunk: T[] = []
    for (let i = 0; i < size; i++) {
      chunk.push(mainCopy[0])
      mainCopy.shift()
    }
    chunks.push(chunk)
  }
  return chunks
}
