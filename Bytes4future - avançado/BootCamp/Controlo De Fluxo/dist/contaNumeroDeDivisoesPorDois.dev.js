"use strict";

function contaNumeroDeDivisoesPorDois(n) {
  // escreve aqui a função
  var divisao = n;
  var count = 0;

  while (divisao > 1) {
    divisao = Math.floor(divisao / 2);
    count++;
  }

  return count;
}