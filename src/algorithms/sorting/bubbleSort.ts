export const bubbleSort = <T>(list: T[]): T[] => {
  const sortedList = [...list]

  for (let i = 0; i < sortedList.length; i++) {
    for (let j = i + 1; j < sortedList.length; j++) {
      if (sortedList[i] > sortedList[j]) {
        let temp = sortedList[i]
        sortedList[i] = sortedList[j]
        sortedList[j] = temp
      }
    }
  }
  return sortedList
}
