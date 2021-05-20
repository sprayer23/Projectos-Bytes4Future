"use strict";

function somaDiagonalPrincipal(matrizquadrada) {
  var soma = 0;

  for (var i = 0; i < matrizquadrada.length; i++) {
    soma += matrizquadrada[i][i];
  }

  return soma;
}

function somaDiagonalSecundaria(matrizquadrada) {
  var soma = 0;

  for (var i = 0; i < matrizquadrada.length; i++) {
    soma += matrizquadrada[matrizquadrada.length - 1 - i][i];
  }

  return soma;
}

function diferencaAbsolutaEntreDiagonais(matrizquadrada) {
  // escreve aqui a função
  var diff = somaDiagonalPrincipal(matrizquadrada) - somaDiagonalSecundaria(matrizquadrada);

  if (diff < 0) {
    return diff * -1;
  }

  return diff;
}