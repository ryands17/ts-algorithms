export function mergeSort(list: number[]): number[] {
  const sortedList = [...list]
  if (sortedList.length < 2) return sortedList

  const midpoint = Math.floor(sortedList.length / 2)
  const left = sortedList.slice(0, midpoint)
  const right = sortedList.slice(midpoint)

  return merge(mergeSort(left), mergeSort(right))
}

export function merge(left: number[], right: number[]): number[] {
  const list: number[] = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      list.push(left[leftIndex])
      leftIndex++
    } else {
      list.push(right[rightIndex])
      rightIndex++
    }
  }

  while (leftIndex < left.length) {
    list.push(left[leftIndex])
    leftIndex++
  }

  while (rightIndex < right.length) {
    list.push(right[rightIndex])
    rightIndex++
  }

  return list
}
