function calculaMedia(array) {
  const soma = array.reduce((acc, curr) => acc + curr, 0)
  return soma / array.length
}

export default calculaMedia