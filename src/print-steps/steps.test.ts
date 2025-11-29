import { test, expect, mock } from 'bun:test'
import { generateSteps as steps } from './steps'

test('steps called with n = 1', () => {
  const log = mock((...args: any[]) => {})
  global.console.log = log
  steps(1)
  expect(log.mock.calls[0][0]).toEqual('#')
  expect(log.mock.calls.length).toEqual(1)
})

test('steps called with n = 2', () => {
  const log = mock((...args: any[]) => {})
  global.console.log = log
  steps(2)
  expect(log.mock.calls[0][0]).toEqual('# ')
  expect(log.mock.calls[1][0]).toEqual('##')
  expect(log.mock.calls.length).toEqual(2)
})

test('steps called with n = 3', () => {
  const log = mock((...args: any[]) => {})
  global.console.log = log
  steps(3)
  expect(log.mock.calls[0][0]).toEqual('#  ')
  expect(log.mock.calls[1][0]).toEqual('## ')
  expect(log.mock.calls[2][0]).toEqual('###')
  expect(log.mock.calls.length).toEqual(3)
})
