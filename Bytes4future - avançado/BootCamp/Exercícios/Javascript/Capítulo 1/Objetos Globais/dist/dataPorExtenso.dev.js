"use strict";

function dataPorExtenso(data) {
  // escreve aqui a função
  var dia = data.getDate();
  ;
  var mes = data.getMonth();
  var ano = data.getFullYear();
  var diaDaSemana = data.getDay(); // if (dia.length < 2) {
  //     dia ="0" + dia;
  // }

  var mapaDoMes = new Map([[0, "janeiro"], [1, "fevereiro"], [2, "março"], [3, "abril"], [4, "maio"], [5, "junho"], [6, "julho"], [7, "agosto"], [8, "setembro"], [9, "outubro"], [10, "novembro"], [11, "dezembro"]]);
  var mapaDaSemana = new Map([[0, "domingo"], [1, "segunda-feira"], [2, "terça-feira"], [3, "quarta-feira"], [4, "quinta-feira"], [5, "sexta-feira"], [6, "sábado"]]);
  return "".concat(mapaDaSemana.get(diaDaSemana), ", ").concat(dia, " de ").concat(mapaDoMes.get(mes), " de ").concat(ano);
}