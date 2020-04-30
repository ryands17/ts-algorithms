export class Queue<T> {
  private items: T[] = []

  add(item: T) {
    this.items.push(item)
  }

  remove(): T | undefined {
    return this.items.shift()
  }

  peek(): T | undefined {
    return this.items[0]
  }
}
