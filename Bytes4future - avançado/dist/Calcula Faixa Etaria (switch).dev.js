"use strict";

function calculaFaixaEtaria(idade) {
  // escreve aqui a função
  switch (idade) {
    case idade <= 11:
      return "Criança";
      break;

    case idade >= 12 && idade <= 17:
      return "Adolescente";
      break;

    case idade >= 18 && idade <= 64:
      return "Adulto";
      break;

    case idade >= 65:
      return "Sénior";
      break;
  }
}