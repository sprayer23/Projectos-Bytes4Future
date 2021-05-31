"use strict";

function ordenaDoMenorAoMaior(array) {
  // escreve aqui a função
  function ordena(a, b) {
    return a - b;
  }

  return array.sort(ordena);
}