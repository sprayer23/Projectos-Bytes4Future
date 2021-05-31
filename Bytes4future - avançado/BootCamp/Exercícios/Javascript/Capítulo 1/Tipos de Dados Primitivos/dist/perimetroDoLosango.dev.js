"use strict";

function perimetroDoLosango(diagonalMaior, diagonalMenor) {
  // escreve aqui a função
  var lado = Math.pow(diagonalMaior / 2, 2) + Math.pow(diagonalMenor / 2, 2);
  var lado1 = Math.sqrt(lado);
  return lado1 * 4;
}