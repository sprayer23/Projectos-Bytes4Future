"use strict";

function somaDiagonalPrincipal(matrizquadrada) {
  var soma = 0;

  for (var i = 0; i < matrizquadrada.length; i++) {
    soma += matrizquadrada[i][i];
  }

  return soma;
}

console.log(somaDiagonalPrincipal([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));