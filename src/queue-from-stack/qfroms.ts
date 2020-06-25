/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Stack } from '../stack/stack'

export class Queue<T> {
  private main = new Stack<T>()
  private temp = new Stack<T>()

  add(val: T) {
    this.main.push(val)
  }

  remove(): T | undefined {
    while (this.main.peek() !== undefined) {
      this.temp.push(this.main.pop()!)
    }
    const val = this.temp.pop()

    while (this.temp.peek() !== undefined) {
      this.main.push(this.temp.pop()!)
    }
    return val
  }

  peek(): T | undefined {
    while (this.main.peek() !== undefined) {
      this.temp.push(this.main.pop()!)
    }
    const val = this.temp.peek()

    while (this.temp.peek() !== undefined) {
      this.main.push(this.temp.pop()!)
    }
    return val
  }
}
