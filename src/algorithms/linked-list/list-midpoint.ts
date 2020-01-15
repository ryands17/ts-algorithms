import { LinkedList, INode } from './linkedList'

export const findMidpoint = <T>(list: LinkedList<T>): INode<T> => {
  let current = list.head
  let double = list.head?.next

  while (double?.next) {
    current = current?.next ?? null
    for (let i = 0; i < 2; i++) {
      double = double?.next ?? null
      if (!double?.next) break
    }
  }

  return current
}
