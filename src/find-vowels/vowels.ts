export const vowels = (str: string) => {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let vowelCount = 0

  for (let char of str) {
    if (vowels.includes(char.toLowerCase())) vowelCount += 1
  }
  return vowelCount
}
