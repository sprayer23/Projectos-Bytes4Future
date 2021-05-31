"use strict";

function todosMaioresDoQueCinco(array) {
  // escreve aqui a função
  return array.every(function (array) {
    return array > 5;
  });
}