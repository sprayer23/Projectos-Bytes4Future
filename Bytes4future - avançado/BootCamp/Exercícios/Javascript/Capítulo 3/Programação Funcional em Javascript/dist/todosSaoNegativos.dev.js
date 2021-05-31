"use strict";

function todosSaoNegativos(array) {
  // escreve aqui a função
  return array.every(function (e) {
    return e < 0;
  });
}