let number = parseInt(prompt("Digite um valor aqui"));

function snapCracklePrime(maxValue) {
  let str = ""; //string que recebe os valores
  let array = []; // array que recebe a string

  for (let i = 1; i <= maxValue; i++) {
    //lopp para definir os demais numeros
    str = i;
    let numDivisoresPrime = 0;
    for (let y = 2; y < i; y++) {
      //loop para definir o prime
      if (i % y == 00) {
        numDivisoresPrime++;
      }
    }
    if (numDivisoresPrime % i == 0 && i % 2 == 1 && i % 5 == 0) {
      str = "SnapCracklePrime";
    } else if (numDivisoresPrime % i == 0 && i % 2 == 1 && i != 1) {
      str = "SnapPrime";
    } else if (i % 2 == 1 && i % 5 == 0) {
      str = "SnapCrackle";
    } else if (numDivisoresPrime % i == 0 && i != 1) {
      str = "Prime";
    } else if (i % 2 == 1) {
      str = "Snap";
    } else if (i % 5 == 0) {
      str = "Crackle";
    }
    array.push(str); //envio dos dados da string para a array
  }
  return array.join(", "); //converter todos os elementos do array para uma string, concatenando com a" ,"" e o espaço
}
let resultadoSnapCracklePrime = snapCracklePrime(number);
alert(resultadoSnapCracklePrime);
console.log(resultadoSnapCracklePrime);
