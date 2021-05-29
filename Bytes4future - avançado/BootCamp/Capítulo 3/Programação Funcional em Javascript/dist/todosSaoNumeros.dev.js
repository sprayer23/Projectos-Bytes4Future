"use strict";

function todosSaoNumeros(array) {
  // escreve aqui a função
  return array.every(function (e) {
    return Number(e);
  });
}