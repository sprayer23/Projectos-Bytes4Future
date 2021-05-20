"use strict";

function somaDiagonalSecundaria(matrizquadrada) {
  var soma = 0;

  for (var i = 0; i < matrizquadrada.length; i++) {
    soma += matrizquadrada[matrizquadrada.length - 1 - i][i];
  }

  return soma;
}

console.log(somaDiagonalSecundaria([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));