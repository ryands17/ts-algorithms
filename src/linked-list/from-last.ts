import { LinkedList, INode } from './linkedList'

export const elementFromLast = <T>(
  list: LinkedList<T>,
  position: number
): INode<T> => {
  let current = list.head
  let buffer = list.head

  for (let i = 0; i < position; i++) {
    buffer = buffer?.next ?? null
  }

  if (!buffer && position !== 0) return null

  while (buffer?.next) {
    buffer = buffer.next
    current = current?.next ?? null
  }

  return current
}
