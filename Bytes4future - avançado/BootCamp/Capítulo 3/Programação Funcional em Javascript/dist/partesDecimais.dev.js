"use strict";

function partesDecimais(array) {
  // escreve aqui a função
  return array.map(function (n) {
    return Math.floor(n % 1 * 100) / 100;
  });
}