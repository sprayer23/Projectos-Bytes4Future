"use strict";

function encontraMaiorQueZero(array) {
  // escreve aqui a função
  return array.find(function (n) {
    return n > 0;
  });
}