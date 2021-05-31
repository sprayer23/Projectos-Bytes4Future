"use strict";

function somatorioAteN(n) {
  // escreve aqui a função
  var sum = 0;
  var i = 0;

  while (i < n) {
    sum += i;
    i++;
  }

  return sum;
}