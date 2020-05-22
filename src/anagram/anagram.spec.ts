import { anagram } from './anagram'

test('"hello" is an anagram of "llohe"', () => {
  expect(anagram('hello', 'llohe')).toBeTruthy()
})

test('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
  expect(anagram('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy()
})

test('"One One" is not an anagram of "Two two two"', () => {
  expect(anagram('One One', 'Two two two')).toBeFalsy()
})

test('"One one" is not an anagram of "One one c"', () => {
  expect(anagram('One one', 'One one c')).toBeFalsy()
})

test('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
  expect(
    anagram('A tree, a life, a bench', 'A tree, a fence, a yard')
  ).toBeFalsy()
})
