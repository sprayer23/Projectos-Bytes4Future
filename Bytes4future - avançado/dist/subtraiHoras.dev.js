"use strict";

function subtraiHoras(data, horas) {
  // escreve aqui a função
  var milihoras = 60 * 60 * 1000;
  var hora = horas * milihoras;
  var resultado = data - hora;
  return new Date(resultado);
}