"use strict";

function adicionaSemanas(data, semanas) {
  // escreve aqui a função
  var milisemanas = 7 * 24 * 60 * 60 * 1000;
  var semana = semanas * milisemanas;
  var resultado = data.valueOf() + semana;
  return new Date(resultado);
}