
function adicionarElemento(array, elemento) {
  array.push(elemento);
  return array;
}

function removerUltimoElemento(array) {
  return array.pop();
}

function removerElementosIntervalo(array, indiceInicial, indiceFinal) {
  array.splice(indiceInicial, indiceFinal - indiceInicial + 1);
  return array;
}

let meuArray = [1, 2, 3, 4, 5];

console.log(adicionarElemento(meuArray, 6)); 

console.log(removerUltimoElemento(meuArray));

console.log(removerElementosIntervalo(meuArray, 1, 3));