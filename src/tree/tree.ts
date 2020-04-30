export type TreeNode<T> = Node<T> | null

export class Node<T> {
  constructor(public data: T, public children: Node<T>[] = []) {}

  add(data: T) {
    this.children.push(new Node(data))
  }

  remove(data: T) {
    const index = this.children.findIndex(value => value.data === data)
    if (index !== -1) {
      this.children.splice(index, 1)
    }
  }
}

export class Tree<T> {
  root: TreeNode<T> = null

  traverseBF(cb: (node: Node<T>) => void) {
    if (this.root) {
      let items: Node<T>[] = [this.root]
      while (items.length) {
        let item = items.shift()
        if (item?.children) {
          items.push(...item.children)
        }
        item && cb(item)
      }
    }
  }

  traverseDF(cb: (node: Node<T>) => void) {
    if (this.root) {
      let items: Node<T>[] = [this.root]
      while (items.length) {
        let item = items.shift()
        if (item?.children) {
          items.unshift(...item.children)
        }
        item && cb(item)
      }
    }
  }
}
