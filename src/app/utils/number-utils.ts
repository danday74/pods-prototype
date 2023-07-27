export const getRandomNumber = (max: number) => { // min and max included
  return getRandomNumberInRange(1, max)
}

export const getRandomNumberInRange = (min: number, max: number) => { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}
