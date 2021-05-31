"use strict";

function encontraImpar(array) {
  // escreve aqui a função
  return array.find(function (n) {
    return n % 2 === 1;
  });
}