export const palindrome = (str: string) => {
  let isPalindrome = true
  for (let i = 0, j = str.length / 2; i <= j; i++) {
    if (str.charAt(i) !== str.charAt(str.length - i - 1)) {
      isPalindrome = false
      break
    }
  }
  return isPalindrome
}
