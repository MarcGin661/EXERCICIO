
function calculadora(numero1, numero2, operacao) {
  return operacao(numero1, numero2);
}

const soma = (a, b) => a + b;
console.log(calculadora(5, 3, soma));

const subtracao = (a, b) => a - b;
console.log(calculadora(10, 4, subtracao));

const multiplicacao = (a, b) => a * b;
console.log(calculadora(6, 2, multiplicacao));

const divisao = (a, b) => a / b;
console.log(calculadora(10, 2, divisao));