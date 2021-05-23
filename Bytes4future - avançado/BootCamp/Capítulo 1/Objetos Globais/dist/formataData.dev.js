"use strict";

function formataData(data) {
  // escreve aqui a função
  var dia = data.getDate().toString();

  if (dia.length < 2) {
    dia = "0" + dia;
  }

  var mes = (data.getMonth() + 1).toString();

  if (mes.length < 2) {
    mes = "0" + mes;
  }

  var ano = data.getFullYear();
  return "".concat(mes, "-").concat(dia, "-").concat(ano);
}

console.log(formataData(10 - 11 - 2020));