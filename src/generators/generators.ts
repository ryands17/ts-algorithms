export function* range(
  start: number,
  stop?: number,
  step = 1
): Generator<number, void, undefined> {
  if (stop === undefined) {
    stop = start
    start = 0
  }

  for (let i = start; i < stop; i += step) {
    yield i
  }
}
