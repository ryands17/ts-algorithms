import { LinkedList } from './linkedList'

export const isCircularList = <T>(list: LinkedList<T>) => {
  let current = list.head
  let double = list.head

  while (current?.next) {
    current = current?.next ?? null
    if (current === null) return false
    for (let i = 0; i < 2; i++) {
      double = double?.next ?? null
    }
    if (current === double) return true
  }

  return false
}
