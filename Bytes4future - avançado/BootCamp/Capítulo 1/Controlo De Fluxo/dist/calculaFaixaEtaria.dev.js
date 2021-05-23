"use strict";

function calculaFaixaEtaria(idade) {
  // escreve aqui a função
  if (idade <= 11) {
    return "Criança";
  }

  if (idade >= 12 && idade <= 17) {
    return "Adolescente";
  }

  if (idade >= 18 && idade <= 64) {
    return "Adulto";
  }

  if (idade >= 65) {
    return "Sénior";
  }
}