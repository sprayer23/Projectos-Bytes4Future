"use strict";

function subtraiDias(data, dias) {
  // escreve aqui a função
  var milidias = 24 * 60 * 60 * 1000;
  var dia = dias * milidias;
  var resultado = data - dia;
  return new Date(resultado);
}