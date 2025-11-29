import { test, expect, describe } from 'bun:test'
import { LinkedList } from './linkedList'
import { findMidpoint as midpoint } from './list-midpoint'

describe('Midpoint returns the middle node of an odd numbered list', () => {
  test('when the list has only 1 element', () => {
    const l = new LinkedList<string>()
    l.insertLast('a')
    expect(midpoint(l)?.data).toEqual('a')
  })

  test('when the list has 3 elements', () => {
    const l = new LinkedList<string>()
    l.insertLast('a')
    l.insertLast('b')
    l.insertLast('c')
    expect(midpoint(l)?.data).toEqual('b')
  })

  test('when the list has 5 elements', () => {
    const l = new LinkedList<string>()
    l.insertLast('a')
    l.insertLast('b')
    l.insertLast('c')
    l.insertLast('d')
    l.insertLast('e')
    expect(midpoint(l)?.data).toEqual('c')
  })
})

describe('Midpoint returns the middle node of an even numbered list', () => {
  test('when the list has 2 elements', () => {
    const l = new LinkedList<string>()
    l.insertLast('a')
    l.insertLast('b')
    expect(midpoint(l)?.data).toEqual('a')
  })

  test('when the list has 4 elements', () => {
    const l = new LinkedList<string>()
    l.insertLast('a')
    l.insertLast('b')
    l.insertLast('c')
    l.insertLast('d')
    expect(midpoint(l)?.data).toEqual('b')
  })
})
