const findMin = (list: number[], index: number) => {
  let minIndex = index
  let min = Infinity
  for (let i = index; i < list.length; i++) {
    if (list[i] < min) {
      min = list[i]
      minIndex = i
    }
  }
  return minIndex
}

export const selectionSort = (list: number[]): number[] => {
  const sortedList = [...list]

  if (sortedList.length < 2) return sortedList

  for (let i = 0; i < sortedList.length; i++) {
    const minIndex = findMin(sortedList, i + 1)
    if (sortedList[i] > sortedList[minIndex]) {
      let temp = sortedList[i]
      sortedList[i] = sortedList[minIndex]
      sortedList[minIndex] = temp
    }
  }

  return sortedList
}
