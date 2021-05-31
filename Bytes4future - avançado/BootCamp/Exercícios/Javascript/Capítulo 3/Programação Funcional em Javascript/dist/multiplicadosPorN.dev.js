"use strict";

function multiplicadosPorN(array, n) {
  // escreve aqui a função
  return array.map(function (array) {
    return array * n;
  });
}

console.log(multiplicadosPorN([1, 2, 3, 4], -1));