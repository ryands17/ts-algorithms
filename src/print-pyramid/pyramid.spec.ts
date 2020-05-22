import { generatePyramid as pyramid } from './pyramid'

test('prints a pryamid for n = 2', () => {
  const log = (global.console.log = jest.fn())
  pyramid(2)
  expect(log.mock.calls[0][0]).toEqual(' # ')
  expect(log.mock.calls[1][0]).toEqual('###')
  expect(log.mock.calls.length).toEqual(2)
})

test('prints a pryamid for n = 3', () => {
  const log = (global.console.log = jest.fn())
  pyramid(3)
  expect(log.mock.calls[0][0]).toEqual('  #  ')
  expect(log.mock.calls[1][0]).toEqual(' ### ')
  expect(log.mock.calls[2][0]).toEqual('#####')
  expect(log.mock.calls.length).toEqual(3)
})

test('prints a pryamid for n = 4', () => {
  const log = (global.console.log = jest.fn())
  pyramid(4)
  expect(log.mock.calls[0][0]).toEqual('   #   ')
  expect(log.mock.calls[1][0]).toEqual('  ###  ')
  expect(log.mock.calls[2][0]).toEqual(' ##### ')
  expect(log.mock.calls[3][0]).toEqual('#######')
  expect(log.mock.calls.length).toEqual(4)
})
