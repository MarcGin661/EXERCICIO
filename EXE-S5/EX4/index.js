let n = 10;
let sequence = [0, 1];

while (sequence[sequence.length - 1] <= n) {
  let nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
  sequence.push(nextNumber);
}

console.log("Sequência de Fibonacci até", n + ":");
console.log(sequence);