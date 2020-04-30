import { bubbleSort } from './bubbleSort'
import { selectionSort } from './selectionSort'
import { merge, mergeSort } from './mergeSort'

function getArray() {
  return [100, -40, 500, -124, 0, 21, 7]
}

function getSortedArray() {
  return [-124, -40, 0, 7, 21, 100, 500]
}

describe('Bubble sort', () => {
  test('sorts an array', () => {
    expect(bubbleSort(getArray())).toEqual(getSortedArray())
  })
})

describe('Selection sort', () => {
  test('sorts an array', () => {
    expect(selectionSort(getArray())).toEqual(getSortedArray())
  })
})

describe('Merge sort', () => {
  test('merge function can join together two sorted arrays', () => {
    const left = [1, 10]
    const right = [2, 8, 12]

    expect(merge(left, right)).toEqual([1, 2, 8, 10, 12])
  })

  test('merge function can join together two sorted arrays of same length', () => {
    const left = [1, 10, 21]
    const right = [2, 8, 12]

    expect(merge(left, right)).toEqual([1, 2, 8, 10, 12, 21])
  })

  test('sorts an array', () => {
    expect(mergeSort(getArray())).toEqual(getSortedArray())
  })
})
