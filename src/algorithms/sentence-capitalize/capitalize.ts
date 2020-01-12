export const capitalize = (str: string) => {
  const capitalized: string[] = []

  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i)
    if (i == 0) char = str.charAt(i).toUpperCase()
    else if (str.charAt(i - 1) === ' ') char = str.charAt(i).toUpperCase()
    capitalized.push(char)
  }
  return capitalized.join('')
}
