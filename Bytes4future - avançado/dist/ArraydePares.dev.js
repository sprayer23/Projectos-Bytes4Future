"use strict";

function arrayDePares(array) {
  // escreve aqui a função
  var arrayDump = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      arrayDump.push(array[i]);
    }
  }

  return arrayDump;
}