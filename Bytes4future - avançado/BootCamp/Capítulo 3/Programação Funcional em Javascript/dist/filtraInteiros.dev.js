"use strict";

function filtraInteiros(array) {
  // escreve aqui a função
  return array.filter(function (array) {
    return array.isInteger;
  });
}

console.log(filtraInteiros([1, 2.5, 3, 4.1]));