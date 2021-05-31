"use strict";

function minimoPar(array) {
  // escreve aqui a função
  function redutor(menor, elem) {
    if (menor % 2 === 1) return elem;
    if (elem < menor && elem % 2 === 0) return elem;else return menor;
  }

  return array.reduce(redutor);
}