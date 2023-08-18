function somaImpares(array) {
  return array.reduce ((acc, num) => (num % 2 !== 0) ? acc + num : acc, 0)
}

export default somaImpares