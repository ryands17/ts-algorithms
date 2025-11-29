import { test, expect, mock } from 'bun:test'
import { generatePyramid as pyramid } from './pyramid'

test('prints a pryamid for n = 2', () => {
  const log = mock((...args: any[]) => {})
  global.console.log = log
  pyramid(2)
  expect(log.mock.calls[0][0]).toEqual(' # ')
  expect(log.mock.calls[1][0]).toEqual('###')
  expect(log.mock.calls.length).toEqual(2)
})

test('prints a pryamid for n = 3', () => {
  const log = mock((...args: any[]) => {})
  global.console.log = log
  pyramid(3)
  expect(log.mock.calls[0][0]).toEqual('  #  ')
  expect(log.mock.calls[1][0]).toEqual(' ### ')
  expect(log.mock.calls[2][0]).toEqual('#####')
  expect(log.mock.calls.length).toEqual(3)
})

test('prints a pryamid for n = 4', () => {
  const log = mock((...args: any[]) => {})
  global.console.log = log
  pyramid(4)
  expect(log.mock.calls[0][0]).toEqual('   #   ')
  expect(log.mock.calls[1][0]).toEqual('  ###  ')
  expect(log.mock.calls[2][0]).toEqual(' ##### ')
  expect(log.mock.calls[3][0]).toEqual('#######')
  expect(log.mock.calls.length).toEqual(4)
})
