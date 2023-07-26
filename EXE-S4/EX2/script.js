var peso = prompt("Digite o seu peso em quilograma:")
var altura = prompt("Digite a sua altura em metros:")

peso = parseFloat(peso)
altura = parseFloat(altura)

var imc = peso / (altura * altura)

console.log("o seu Indice de massa Corporal (IMC) é: " + imc.toFixed(2))