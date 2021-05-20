"use strict";

function diferencaEmDias(data1, data2) {
  var diff = data1 - data2;
  var miliDia = 24 * 60 * 60 * 1000;
  var resultado = Math.floor(diff / miliDia);
  return Math.abs(resultado);
}