export const generateSteps = (steps: number) => {
  for (let i = 1; i <= steps; i++) {
    const steppers: string[] = []
    for (let j = 1; j <= steps; j++) {
      if (j <= i) steppers.push('#')
      else steppers.push(' ')
    }
    console.log(steppers.join(''))
  }
}
