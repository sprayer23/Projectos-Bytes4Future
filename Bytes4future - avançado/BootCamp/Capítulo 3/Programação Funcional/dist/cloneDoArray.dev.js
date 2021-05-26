"use strict";

function cloneDoArray(array) {
  // escreve aqui a função
  if (array.length === 0) return [];
  return [array[0]].concat(cloneDoArray(array.slice(1)));
}