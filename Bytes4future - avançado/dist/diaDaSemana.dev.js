"use strict";

function diaDaSemana(dia) {
  // escreve aqui a função
  var correspondencias = new Map([[1, "Domingo"], [2, "Segunda-Feira"], [3, "Terça-Feira"], [4, "Quarta-Feira"], [5, "Quinta-Feira"], [6, "Sexta-Feira"], [7, "Sábado"]]);

  if (correspondencias.has(dia)) {
    return correspondencias.get(dia);
  }

  return "Número inválido. Por favor insira um número entre 1 e 7.";
}

console.log(diaDaSemana(2));
console.log(diaDaSemana(7));
console.log(diaDaSemana(4));
console.log(diaDaSemana(0));