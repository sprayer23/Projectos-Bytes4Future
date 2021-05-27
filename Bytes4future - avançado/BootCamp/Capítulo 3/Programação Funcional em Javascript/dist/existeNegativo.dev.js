"use strict";

function existeNegativo(array) {
  // escreve aqui a função
  return array.some(function (n) {
    return n < 0;
  });
}