"use strict";

function contaParesEntreDoisValores(valor1, valor2) {
  // escreve aqui a função
  var count = 0;

  if (valor1 === valor2) {
    return "Por favor introduza dois valores diferentes.";
  }

  for (var i = valor1; i <= valor2; i++) {
    if (i % 2 === 0) {
      count++;
    }
  }

  return count;
}