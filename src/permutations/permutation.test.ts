import { checkPermutation } from './permutation'

describe(`Check permutations of a given string`, () => {
  test(`'bcda' is a permutation of 'abcd'`, () => {
    expect(checkPermutation('abcd', 'bcda')).toEqual(true)
  })

  test(`'bdcea' is not a permutation of 'abcd'`, () => {
    expect(checkPermutation('abcd', 'bdcea')).toEqual(false)
  })

  test(`'ACdB' is a permutation of 'abcd'`, () => {
    expect(checkPermutation('abcd', 'ACdB')).toEqual(true)
  })
})
