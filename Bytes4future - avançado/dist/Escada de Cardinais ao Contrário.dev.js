"use strict";

function escadasComCardinais2(dim) {
  var resultado = "";

  for (var i = 0; i < dim; i++) {
    var numEspaços = dim - i - 1;
    var numCardinais = dim - numEspaços; // resultado = resultado + i + `${numEspaços}, ${numCardinais}` + (i < dim - 1 ? "\n" : "");

    for (var j = 0; j < numCardinais; j++) {
      resultado = resultado + "#";
    }

    for (var _j = 0; _j < numEspaços; _j++) {
      resultado = resultado + " ";
    }

    resultado = resultado + (i < dim - 1 ? "\n" : "");
  }

  return resultado;
}

console.log(escadasComCardinais2(6));