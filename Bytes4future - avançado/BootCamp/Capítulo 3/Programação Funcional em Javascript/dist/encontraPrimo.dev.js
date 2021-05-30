"use strict";

function encontraPrimo(array) {
  return array.find(function (e) {
    return primo(e);
  });

  function primo(num) {
    // verifica se o numero digitado é "1", que não é primo
    if (num != 1) {
      for (var i = 2; i < num; i++) {
        if (num % i == 0) return false;
      }

      return num !== 1;
    }
  }
}