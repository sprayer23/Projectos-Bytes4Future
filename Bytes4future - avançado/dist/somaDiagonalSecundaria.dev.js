"use strict";

function somaDiagonalSecundaria(matrizquadrada) {
  var soma = 0;

  for (var i = matrizquadrada.length - 1; i >= 0; i--) {
    soma += matrizquadrada[i][i];
  }

  return soma;
}

console.log(somaDiagonalSecundaria([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));