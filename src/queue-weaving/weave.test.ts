import { weave } from './weave'
import { Queue } from '../queue/queue'

test('peek returns, but does not remove, the first value', () => {
  const q = new Queue()
  q.add(1)
  q.add(2)
  expect(q.peek()).toEqual(1)
  expect(q.peek()).toEqual(1)
  expect(q.remove()).toEqual(1)
  expect(q.remove()).toEqual(2)
})

test('weave can combine two queues', () => {
  const one = new Queue<number>()
  one.add(1)
  one.add(2)
  one.add(3)
  one.add(4)
  const two = new Queue<string>()
  two.add('one')
  two.add('two')
  two.add('three')
  two.add('four')

  const result = weave(one, two)
  expect(result.remove()).toEqual(1)
  expect(result.remove()).toEqual('one')
  expect(result.remove()).toEqual(2)
  expect(result.remove()).toEqual('two')
  expect(result.remove()).toEqual(3)
  expect(result.remove()).toEqual('three')
  expect(result.remove()).toEqual(4)
  expect(result.remove()).toEqual('four')
  expect(result.remove()).toBeUndefined()
})

test('weave can combine two queues of unequal length', () => {
  const one = new Queue<number>()
  one.add(1)
  one.add(2)
  one.add(3)
  const two = new Queue<string>()
  two.add('one')
  two.add('two')
  two.add('three')
  two.add('four')

  const result = weave(one, two)
  expect(result.remove()).toEqual(1)
  expect(result.remove()).toEqual('one')
  expect(result.remove()).toEqual(2)
  expect(result.remove()).toEqual('two')
  expect(result.remove()).toEqual(3)
  expect(result.remove()).toEqual('three')
  expect(result.remove()).toEqual('four')
  expect(result.remove()).toBeUndefined()
})
