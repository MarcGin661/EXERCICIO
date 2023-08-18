const readline = require('readline')
const filtrarPares = required('./filtrarPares')
const somaImpares = required('./somaImpares')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function getInputArray() {
  rl.question('Insira um array de números separados por espaço: ', (input) => {
    const array = input.split (' ').map(Number)

    const pares = filtrarPares(array)
    const somaImpar = somaImpares(array)

    console.log ('Números pares:', pares)
    console.log ('Soma dos números impares', somaImpar)

    rl.close
  })
}

getInputArray()