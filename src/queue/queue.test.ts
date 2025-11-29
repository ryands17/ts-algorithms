import { test, expect } from 'bun:test'
import { Queue } from './queue'

test('can add elements to a queue', () => {
  const q = new Queue<number>()
  expect(() => {
    q.add(1)
  }).not.toThrow()
})

test('can remove elements from a queue', () => {
  const q = new Queue<number>()
  expect(() => {
    q.add(1)
    q.remove()
  }).not.toThrow()
})

test('Order of elements is maintained', () => {
  const q = new Queue<number>()
  q.add(1)
  q.add(2)
  q.add(3)
  expect(q.remove()).toEqual(1)
  expect(q.remove()).toEqual(2)
  expect(q.remove()).toEqual(3)
  expect(q.remove()).toEqual(undefined)
})
