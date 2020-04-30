export const checkPermutation = (s1: string, s2: string) => {
  let hash = {}

  for (let s of s1) {
    s = s.toLowerCase()
    hash[s] = hash[s] ? hash[s] + 1 : 1
  }

  for (let s of s2) {
    s = s.toLowerCase()
    if (hash[s] === undefined) {
      return false
    }
    hash[s] = hash[s] - 1
  }

  for (let key in hash) {
    if (hash[key] !== 0) return false
  }
  return true
}
