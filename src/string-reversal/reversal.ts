export const reverse = (str: string) => {
  const newStringArray: string[] = []
  for (let i = str.length - 1; i >= 0; i--) {
    newStringArray.push(str.charAt(i))
  }
  return newStringArray.join('')
}
