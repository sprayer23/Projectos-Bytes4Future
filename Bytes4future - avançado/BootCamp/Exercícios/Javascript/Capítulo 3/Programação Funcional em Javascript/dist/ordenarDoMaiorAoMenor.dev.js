"use strict";

function ordenaDoMaiorAoMenor(array) {
  // escreve aqui a função
  function ordena(a, b) {
    return b - a;
  }

  return array.sort(ordena);
}