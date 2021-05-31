"use strict";

function perimetroDoTrapezio(comprimentoMaior, comprimentoMenor, altura) {
  // escreve aqui a função
  var altura1 = Math.pow(altura, 2) + Math.pow((comprimentoMenor - comprimentoMaior) / 2, 2);
  var altura2 = Math.sqrt(altura1);
  return comprimentoMenor + comprimentoMaior + altura2 * 2;
}