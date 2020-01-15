import { bubbleSort } from './bubbleSort'
import { selectionSort } from './selectionSort'

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
