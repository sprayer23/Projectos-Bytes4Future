"use strict";

function diaDoAno(data) {
  // escreve aqui a função
  var dia = 24 * 60 * 60 * 1000;
  var ano = data.getFullYear();
  var datinha = new Date(data);
  var primeiroDia = new Date("".concat(ano, "-01-01"));
  var diferenca = data - primeiroDia;
  console.log(datinha);
  console.log(primeiroDia);
  return Math.ceil(diferenca / dia);
}