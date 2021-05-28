"use strict";

function existePar(array) {
  // escreve aqui a função
  return array.some(function (n) {
    return n % 2 === 0;
  });
}