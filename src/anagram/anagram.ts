type AnagramChars = {
  [key: string]: number
}

export const anagram = (str1: string, str2: string) => {
  const str1Keys: AnagramChars = Object.create(null)
  const str2Keys: AnagramChars = Object.create(null)

  for (let char of str1)
    str1Keys[char] = str1Keys[char] !== undefined ? str1Keys[char] + 1 : 1
  for (let char of str2)
    str2Keys[char] = str2Keys[char] !== undefined ? str2Keys[char] + 1 : 1

  let anagram = true
  for (let char in str1Keys) {
    if (str1Keys[char] !== str2Keys[char]) {
      anagram = false
      break
    }
  }
  return anagram
}
