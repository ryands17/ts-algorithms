export const generatePyramid = (step: number) => {
  const total = step * 2 - 1
  for (let i = 1; i <= step; i++) {
    const pyramids = i * 2 - 1
    const pyramid: string[] = []

    for (let j = 0; j < (total - pyramids) / 2; j++) pyramid.push(' ')
    for (let j = 1; j <= pyramids; j++) pyramid.push('#')
    for (let j = 0; j < (total - pyramids) / 2; j++) pyramid.push(' ')

    console.log(pyramid.join(''))
  }
}
