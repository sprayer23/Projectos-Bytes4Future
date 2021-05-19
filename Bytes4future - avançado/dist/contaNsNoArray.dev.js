"use strict";

function contarNsNoArray(n, array) {
  // escreve aqui a função
  var count = 0;

  for (var i = 0; i < array.length; i++) {
    if (array[i] === n) {
      count++;
    }
  }

  return count;
}