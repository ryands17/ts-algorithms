import { test, expect } from 'bun:test'
import { reverse } from './reversal'

test('Reverse function exists', () => {
  expect(reverse).toBeDefined()
})

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba')
})

test('Reverse reverses a string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ')
})
