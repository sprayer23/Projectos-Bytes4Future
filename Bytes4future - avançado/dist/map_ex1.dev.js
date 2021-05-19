"use strict";

function abreviaturaParaMes(abreviatura) {
  var correspondencia = new Map([["jan", "Janeiro"], ["fev", "Fevereiro"], ["mar", "Março"], ["abr", "Abril"], ["mai", "Maio"], ["jun", "Junho"], ["jul", "Julho"], ["ago", "Agosto"], ["set", "Setembro"], ["out", "Outubro"], ["nov", "Novembro"], ["dez", "Dezembro"]]);
  var sanitizeInput = abreviatura.toLowerCase().trim();

  if (correspondencia.has(sanitizeInput)) {
    return correspondencia.get(sanitizeInput);
  }

  return "Abreviatura Inválida";
}

console.log(abreviaturaParaMes(" Jun "));