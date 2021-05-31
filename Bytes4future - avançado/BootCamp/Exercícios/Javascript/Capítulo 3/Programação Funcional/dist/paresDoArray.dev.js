"use strict";

function paresDoArray(array) {
  // escreve aqui a função
  if (array.length === 0) return [];

  if (array[0] % 2 === 0) {
    return [array[0].concat(paresDoArray(array.slice(1)))];
  } else {
    return paresDoArray(array.slice(1));
  }
}