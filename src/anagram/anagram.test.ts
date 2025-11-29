import { test, expect } from 'bun:test'
import { anagram } from './anagram'

test('"hello" is an anagram of "llohe"', () => {
  expect(anagram('hello', 'llohe')).toBe(true)
})

test('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
  expect(anagram('Whoa! Hi!', 'Hi! Whoa!')).toBe(true)
})

test('"One One" is not an anagram of "Two two two"', () => {
  expect(anagram('One One', 'Two two two')).toBe(false)
})

test('"One one" is not an anagram of "One one c"', () => {
  expect(anagram('One one', 'One one c')).toBe(false)
})

test('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
  expect(anagram('A tree, a life, a bench', 'A tree, a fence, a yard')).toBe(
    false,
  )
})
