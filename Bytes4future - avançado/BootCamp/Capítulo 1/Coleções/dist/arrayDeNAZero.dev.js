"use strict";

function arrayDeNAZero(n) {
  // escreve aqui a função
  var arrayDump = [];

  if (n > 0) {
    for (var i = 0; i <= n; i++) {
      console.log("Variavel I " + i);
      arrayDump[n - i] = i;
    }
  } else {
    return "Por favor insira um número superior a 0.";
  }

  return arrayDump;
}