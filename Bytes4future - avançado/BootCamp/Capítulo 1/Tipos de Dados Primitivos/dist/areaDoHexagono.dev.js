"use strict";

function areaDoHexagono(lado) {
  // escreve aqui a função
  var altura = Math.sqrt(Math.pow(lado, 2) - Math.pow(lado / 2, 2));
  return 6 * lado * altura / 2;
}