"use strict";

function somaQuadradosAteN(n) {
  // escreve aqui a função
  var sum = 0;

  for (var i = 1; i <= n; i++) {
    sum += Math.pow(i, 2);
  }

  return sum;
}