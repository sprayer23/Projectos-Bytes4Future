"use strict";

function calculaModa(array) {
  // escreve aqui a função
  var memoria = {}; // loop de cada valor do array + incrementar a memoria = valor e numReps;

  array.forEach(function (i) {
    if (!memoria[i]) {
      memoria[i] = 1;
    } else {
      memoria[i] += 1;
    }
  });
  var repMaisAlta = 0; // 2

  var memoriaMaisAlta = 0; // 5

  for (var memoriaValor in memoria) {
    var rep = memoria[memoriaValor];

    if (rep > repMaisAlta && Number(memoriaValor) > memoriaMaisAlta) {
      repMaisAlta = rep;
      memoriaMaisAlta = Number(memoriaValor);
    }
  }

  return memoriaMaisAlta;
}