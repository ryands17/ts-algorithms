export class Stack<T> {
  private items: T[] = []

  push(val: T) {
    this.items.push(val)
  }

  pop(): T | undefined {
    return this.items.pop()
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1]
  }
}
