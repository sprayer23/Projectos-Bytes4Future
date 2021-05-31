"use strict";

function somatorio(array) {
  // escreve aqui a função
  return array.reduce(function (soma, elem) {
    return soma += elem;
  });
}