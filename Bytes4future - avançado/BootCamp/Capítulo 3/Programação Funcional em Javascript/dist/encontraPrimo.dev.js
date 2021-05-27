"use strict";

function encontraPrimo(array) {
  // escreve aqui a função
  function isPrime(n) {
    for (var i = 2; i < n; i++) {
      if (n % 1 === 0) {
        return false;
      }
    }

    return n;
  }

  return array.find(function (n) {
    return isPrime(n);
  });
}