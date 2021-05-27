"use strict";

function existeMultiploDeTres(array) {
  // escreve aqui a função
  return array.some(function (n) {
    return n % 3 === 0;
  });
}