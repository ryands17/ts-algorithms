import { binarySearch } from './binarySearch'

describe(`Given a sorted array`, () => {
  const arr = [8, 14, 21, 43, 56, 67, 89, 101, 156, 261]
  test(`Binary search returns 'true' if data exists`, () => {
    expect(binarySearch(arr, 14)).toEqual(true)
  })

  test(`Binary search returns 'false' if data doesn't exist`, () => {
    expect(binarySearch(arr, -20)).toEqual(false)
  })
})
