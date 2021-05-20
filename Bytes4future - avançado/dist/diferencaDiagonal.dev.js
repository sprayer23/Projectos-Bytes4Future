"use strict";

function diferencaDiagonal(matriz) {
  // 1. Calcular a soma da Diagonal Principal
  var somaPrincipal = somaDiagonalPrincipal(matriz); // 2. Calcular a soma da Diagonal Secundária

  matriz.reverse();
  var somaSecundaria = somaDiagonalPrincipal(matriz);
  matriz.reverse(); // 3. Calcular a diferença entre as diagonais

  var diff = somaPrincipal - somaSecundaria; // 4. Se a diferença for menor que 0

  if (diff < 0) {
    // Então retorna a diferença * -1
    return diff * -1;
  } else {
    // Senão retornar a diferença
    return diff;
  }
}

function somaDiagonalPrincipal(matriz) {
  var soma = 0;

  for (var i = 0; i < matriz.length; i++) {
    soma += arr[i];
  }

  return soma;
}

function somaDiagonalSecundaria(matriz) {}