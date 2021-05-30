"use strict";

function cubosDoArray(array) {
  // escreve aqui a função
  if (array.length === 0) return [];
  return [Math.pow(array[0], 3)].concat(cubosDoArray(array.slice(1)));
}