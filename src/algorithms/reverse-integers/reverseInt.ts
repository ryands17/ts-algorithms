export const reverseInt = (num: number) => {
  let number = num
  let reversedNumber = 0

  while (number !== 0) {
    let val = number % 10
    reversedNumber = 10 * reversedNumber + val
    if (Math.sign(number) > 0) {
      number = Math.floor(number / 10)
    } else if (Math.sign(number) < 0) {
      number = Math.ceil(number / 10)
    }
  }
  return reversedNumber
}
