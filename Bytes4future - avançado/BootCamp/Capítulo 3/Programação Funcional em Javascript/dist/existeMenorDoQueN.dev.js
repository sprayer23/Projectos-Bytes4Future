"use strict";

function existeMenorDoQueN(array, n) {
  // escreve aqui a função
  return array.some(function (i) {
    return i < n;
  });
}