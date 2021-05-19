"use strict";

function tempoEmPalavrasSimplificado(hora, minuto) {
  var horas = new Map([[0, "zero horas"], [1, "uma hora"], [2, "duas horas"], [3, "três horas"], [4, "quatro horas"], [5, "cinco horas"], [6, "seis horas"], [7, "sete horas"], [8, "oito horas"], [9, "nove horas"], [10, "dez horas"], [11, "onze horas"], [12, "doze horas"]]);
  var minutos = new Map([[0, "zero minutos"], [1, "uma minutos"], [2, "duas minutos"], [3, "três minutos"], [4, "quatro minutos"], [5, "cinco minutos"], [6, "seis minutos"], [7, "sete minutos"], [8, "oito minutos"], [9, "nove minutos"], [10, "dez minutos"], [11, "onze minutos"], [12, "doze minutos"]]);
  return "".concat(horas.get(hora), " e ").concat(minutos.get(minuto));
}

console.log(tempoEmPalavrasSimplificado(0, 0));