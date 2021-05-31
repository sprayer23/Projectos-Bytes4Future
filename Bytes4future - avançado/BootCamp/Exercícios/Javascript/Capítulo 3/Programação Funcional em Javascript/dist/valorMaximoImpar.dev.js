"use strict";

function valorMaximoImpar(array) {
  // escreve aqui a função
  function redutor(maior, elem) {
    if (elem > maior && elem % 2 === 1) return elem;else return maior;
  }

  return array.reduce(redutor);
}