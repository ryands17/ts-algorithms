export const maxChar = (str: string) => {
  const dict: { [key: string]: number } = Object.create(null)
  for (let char of str) {
    dict[char] = dict[char] !== undefined ? dict[char] + 1 : 1
  }

  let maxCharNum = 0
  let maxChar: string = ''
  for (let key in dict) {
    if (dict[key] > maxCharNum) {
      maxCharNum = dict[key]
      maxChar = key
    }
  }
  return maxChar
}
