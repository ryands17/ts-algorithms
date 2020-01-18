export const binarySearch = (list: number[], val: number) => {
  let ilist = [...list]
  while (ilist.length) {
    let midpoint = Math.floor(ilist.length / 2)
    if (val === ilist[midpoint]) return true

    if (val < ilist[midpoint]) ilist = ilist.slice(0, midpoint)
    else ilist = ilist.slice(midpoint)
  }

  return false
}
