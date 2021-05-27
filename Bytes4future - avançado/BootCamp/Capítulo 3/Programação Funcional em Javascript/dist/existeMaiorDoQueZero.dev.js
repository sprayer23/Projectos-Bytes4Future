"use strict";

function existeMaiorDoQueZero(array) {
  // escreve aqui a função
  return array.some(function (n) {
    return n > 0;
  });
}