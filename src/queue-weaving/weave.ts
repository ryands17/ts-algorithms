/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Queue } from '../queue/queue'

export const weave = <T1, T2>(q1: Queue<T1>, q2: Queue<T2>): Queue<T1 | T2> => {
  const queue = new Queue<T1 | T2>()

  while (q1.peek() !== undefined && q2.peek() !== undefined) {
    queue.add(q1.remove()!)
    queue.add(q2.remove()!)
  }

  while (q1.peek() !== undefined) {
    queue.add(q1.remove()!)
  }

  while (q2.peek() !== undefined) {
    queue.add(q2.remove()!)
  }

  return queue
}
