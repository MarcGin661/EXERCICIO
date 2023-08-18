const readline = required('readline')
const somaArray = required ('./somaArray')
const multiplicaArray = required ('./multiplicaArray')
const calculaMedia = required ('./calculaMedia')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function getInputArray(){
  rl.question('Insira um Array de numeros separados por espaço: ', (input) => {
    const array = input.split('').map(Number)

    const sum = somaArray(array)
    const product = multiplicaArray(array)
    const average = calculaMedia(array)

    console.log ('Soma dos elementos', sum)
    console.log ('Multiplicação dos elementos', product)
    console.log ('Média dos elementos', average)

    rl.close()
  })
}

getInputArray()