"use strict";

function todasPossuemLetra(array, letra) {
  // escreve aqui a função
  return array.every(function (e) {
    return e.includes(letra);
  });
}