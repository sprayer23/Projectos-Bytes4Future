"use strict";

function somaDiagonalPrincipal(matriz) {
  var soma = 0;

  for (var i = 0; i < matriz.length; i++) {
    console.log(matriz[i], matriz[i][i]);
    soma += matriz[i][i];
  }

  return soma;
}

function somaDiagonalSecundaria(matriz) {
  var soma = 0;

  for (var i = 0; i < matriz.length; i++) {
    soma += matriz[matriz.length - 1 - i][i];
  }

  return soma;
}