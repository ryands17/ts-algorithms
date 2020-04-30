export type BSTNode<T> = Node<T> | null

export class Node<T> {
  constructor(
    public data: T,
    public left: BSTNode<T> = null,
    public right: BSTNode<T> = null
  ) {}

  insert(data: T) {
    let inserted = false
    let item: BSTNode<T> = this
    while (!inserted) {
      if (data <= this.data) {
        if (item.left === null) {
          item.left = new Node(data)
          inserted = true
        } else {
          item = item.left
        }
      } else {
        if (item.right === null) {
          item.right = new Node(data)
          inserted = true
        } else {
          item = item.right
        }
      }
    }
  }

  contains(data: T) {
    let item: BSTNode<T> = this
    while (item) {
      if (item.data === data) return data
      if (item.left && data <= item.left.data) {
        item = item.left
      } else {
        item = item.right
      }
    }
    return null
  }
}

export const validate = <T>(node: Node<T>) => {
  let items: Node<T>[] = [node]

  while (items.length) {
    const node = items.shift()
    if (node?.left) {
      if (node.left.data <= node.data) items.push(node.left)
      else return false
    }
    if (node?.right) {
      if (node.right.data > node.data) items.push(node.right)
      else return false
    }
  }

  return true
}
