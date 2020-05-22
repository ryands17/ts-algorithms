import { LinkedList as List } from './linkedList'
import { elementFromLast as fromLast } from './from-last'

test('fromLast returns the node n elements from the end', () => {
  const l = new List()

  l.insertLast('a')
  l.insertLast('b')
  l.insertLast('c')
  l.insertLast('d')
  l.insertLast('e')

  expect(fromLast(l, 3)?.data).toEqual('b')
})
