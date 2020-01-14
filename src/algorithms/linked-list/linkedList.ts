type INode<T> = Node<T> | null

export class Node<T> {
  constructor(public data: T, public next: INode<T> = null) {}
}

export class LinkedList<T> {
  public head: INode<T> = null

  insertFirst(data: T) {
    const next = this.head
    const node = new Node(data, next)
    this.head = node
  }

  insertLast(data: T) {
    const newItem = new Node(data)

    let item = this.head
    while (item?.next) {
      item = item.next
    }
    if (item) {
      item.next = newItem
    } else {
      this.head = newItem
    }
  }

  insertAt(val: T, position: number) {
    const data = new Node(val)
    if (position === 0) {
      data.next = this.head
      this.head = data
      return
    }

    let count = 0
    let current = this.head
    let previous: INode<T> = null
    while (current?.next && count < position) {
      previous = current
      current = current.next
      count++
    }
    if (count !== position) {
      current && (current.next = data)
      return
    }
    data.next = current
    previous && (previous.next = data)
  }

  getFirst() {
    return this.head
  }

  getLast() {
    let item = this.head
    while (item?.next) {
      item = item.next
    }
    return item
  }

  getAt(position: number): INode<T> {
    let count = 0
    let item = this.head
    while (item?.next && count < position) {
      item = item.next
      count++
    }

    if (count !== position) return null
    return item
  }

  removeFirst() {
    let first = this.head
    this.head = first?.next ?? null
    first = null
  }

  removeLast() {
    let current = this.head
    let previous: INode<T> = null

    while (current?.next) {
      previous = current
      current = current.next
    }

    if (!previous) this.head = null
    else previous.next = null
  }

  removeAt(position: number) {
    let count = 0
    let current = this.head
    let previous: INode<T> = null
    while (current?.next && count < position) {
      previous = current
      current = current.next
      count++
    }

    if (count !== position) return

    if (previous) {
      previous.next = current?.next ?? null
    } else {
      this.head = current?.next ?? null
    }
  }

  size() {
    let count = 0
    let item = this.head
    while (item) {
      count++
      item = item.next
    }
    return count
  }

  clear() {
    this.head = null
  }

  forEach(cb: (node: Node<T>) => void) {
    let item = this.head
    while (item) {
      cb(item)
      item = item.next
    }
  }

  *[Symbol.iterator]() {
    let item = this.head
    while (item) {
      yield item
      item = item.next
    }
  }
}
