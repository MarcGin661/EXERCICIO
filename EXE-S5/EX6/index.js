
const produtos = [
  { nome: "Camisa", preco: 29.99 },
  { nome: "Calça", preco: 59.99 },
  { nome: "Sapato", preco: 99.99 }
];

let totalProdutos = 0;
let valorTotal = 0;

for (let i = 0; i < produtos.length; i++) {
  const produto = produtos[i];
  console.log(`Nome: ${produto.nome} - Preço: R$ ${produto.preco.toFixed(2)}`);
  
  totalProdutos++;
  valorTotal += produto.preco;
}

console.log(`Total de produtos: ${totalProdutos}`);
console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);