import { test, expect } from 'bun:test'
import { range } from './generators'

test('Gets the correct range with a single parameter', () => {
  let arr: number[] = []
  for (let i of range(10)) arr.push(i)

  expect(arr).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
})

test('Gets the correct range with steps included', () => {
  let arr: number[] = []
  for (let i of range(1, 20, 3)) arr.push(i)

  expect(arr).toEqual([1, 4, 7, 10, 13, 16, 19])
})
