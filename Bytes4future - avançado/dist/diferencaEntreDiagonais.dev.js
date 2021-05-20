"use strict";

function somaDiagonalPrincipal(matrizquadrada) {
  var soma = 0;

  for (var i = 0; i < matrizquadrada.length; i++) {
    soma += matrizquadrada[i][i];
  }

  return soma;
}

function diferencaEntreDiagonais(matrizquadrada) {
  // escreve aqui a função
  var somaPrincipal = somaDiagonalPrincipal(matrizquadrada);
  matrizquadrada.reverse();
  var somaSecundaria = somaDiagonalPrincipal(matrizquadrada);
  matrizquadrada.reverse();
  var diff = somaPrincipal - somaSecundaria;
  return diff;
}