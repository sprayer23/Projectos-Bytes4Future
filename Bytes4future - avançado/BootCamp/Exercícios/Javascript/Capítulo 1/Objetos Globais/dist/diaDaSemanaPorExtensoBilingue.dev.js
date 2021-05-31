"use strict";

function diaDaSemanaPorExtensoBilingue(data, lingua) {
  // escreve aqui a função
  var dias = new Map([[0, "domingo"], [1, "segunda-feira"], [2, "terça-feira"], [3, "quarta-feira"], [4, "quinta-feira"], [5, "sexta-feira"], [6, "sábado"]]);
  var days = new Map([[0, "sunday"], [1, "monday"], [2, "tuesday"], [3, "wednesday"], [4, "thursday"], [5, "friday"], [6, "saturday"]]);
  var diaDaSemana = data.getDay();

  if (lingua == "pt") {
    return dias.get(diaDaSemana);
  } else if (lingua == "en") {
    return days.get(diaDaSemana);
  }
}