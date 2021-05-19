"use strict";

function mesesDoAno(mes) {
  // escreve aqui a função
  var meses = new Map([[1, "Janeiro"], [2, "Fevereiro"], [3, "Março"], [4, "Abril"], [5, "Maio"], [6, "Junho"], [7, "Julho"], [8, "Agosto"], [9, "Setembro"], [10, "Outubro"], [11, "Novembro"], [12, "Dezembro"]]);

  if (meses.has(mes)) {
    return meses.get(mes);
  }

  return "Por favor insira um número entre 1 e 12.";
}

console.log(mesesDoAno(1));
console.log(mesesDoAno(6));
console.log(mesesDoAno(15));