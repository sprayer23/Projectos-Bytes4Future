"use strict";

function encontraMenorDoQueN(array, n) {
  // escreve aqui a função
  return array.find(function (i) {
    return i < n;
  });
}