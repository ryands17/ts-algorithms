import { Node } from './tree'

export const levelWidth = <T>(node: Node<T>) => {
  let children: Node<T>[] = [node]
  let count = [1]

  while (children.length) {
    let items: Node<T>[] = []
    for (let i = 0; i < count[count.length - 1]; i++) {
      let item = children.shift()
      item && items.push(item)
    }
    for (let item of items) {
      children.push(...item.children)
    }
    children.length && count.push(children.length)
  }
  return count
}
