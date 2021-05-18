"use strict";

function escadaComCardinais(dim) {
  var resultado = "";

  for (var i = 0; i < dim; i++) {
    var numEspacos = dim - i - 1;
    var numCardinais = dim - numEspacos;

    for (var j = 0; j < numEspacos; j++) {
      resultado = resultado + "_";
      console.log("Insere espaço ", j + 1);
      console.log(resultado);
    }

    for (var _j = 0; _j < numCardinais; _j++) {
      resultado = resultado + "#";
      console.log("Insere # ", _j + 1);
      console.log(resultado);
    }

    resultado = resultado + (i < dim - 1 ? "\n" : "");
    console.log("Termina linha ", i + 1);
  }

  return resultado;
}