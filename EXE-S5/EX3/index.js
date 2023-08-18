
let numero = 17;
let divisor = 2;
let primo = true;

do {
  if (numero % divisor === 0) {
    primo = false;
    break;
  }
  divisor++;
} while (divisor < numero);

if (primo) {
  console.log(numero + ' é um número primo.');
} else {
  console.log(numero + ' não é um número primo.');
}