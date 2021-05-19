"use strict";

function arraySemN(n, array) {
  // escreve aqui a função
  arrayDump = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] != n) {
      arrayDump.push(array[i]);
    }
  }

  return arrayDump;
}