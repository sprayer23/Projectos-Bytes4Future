"use strict";

function valorMaximo(array) {
  // escreve aqui a função
  return array.reduce(function (maior, e) {
    return e > maior ? e : maior;
  });
}