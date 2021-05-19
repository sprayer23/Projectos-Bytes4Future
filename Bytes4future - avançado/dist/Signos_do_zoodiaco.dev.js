"use strict";

function calculaSigno(dia, mes) {
  // Mensagens de Erro
  if (mes > 12 || mes < 1) return "Por favor introduza um mês entre 1 e 12.";
  if (mes === 2 && (dia > 28 || dia < 1)) return "Por favor introduza um dia entre 1 e 28.";
  if ((dia > 30 || dia < 1) && (mes === 4 || mes === 6 || mes === 9 || mes === 11)) return "Por favor introduza um dia entre 1 e 30.";
  if (dia > 31 || dia < 1) return "Por favor introduza um dia entre 1 e 31."; // Carneiro - 21.03 a 20.4
  // Touro - 21.04 a 20.5
  // Gémeos - 21.05 a 20.6
  // Carangueijo - 21.06 a 22.07
  // Leão - 23.07 a 22.08
  // Virgem - 23.08 a 22.09
  // Balança - 23.09 a 22.10
  // Escorpião - 23.10 a 21.11
  // Sagitário - 22.11 a 21.12
  // Capricórnio - 22.12 a 20.1
  // Aquário - 21.01 a 18.02
  // Peixes - 19.02 a 20.03

  if (mes === 3 && dia > 20 || mes === 4 && dia < 21) return "Carneiro";
  if (mes === 4 && dia > 20 || mes === 5 && dia < 21) return "Touro";
  if (mes === 5 && dia > 20 || mes === 6 && dia < 21) return "Gémeos";
  if (mes === 6 && dia > 20 || mes === 7 && dia < 23) return "Carangueijo";
  if (mes === 7 && dia > 22 || mes === 8 && dia < 23) return "Leão";
  if (mes === 8 && dia > 22 || mes === 9 && dia < 23) return "Virgem";
  if (mes === 9 && dia > 22 || mes === 10 && dia < 23) return "Balança";
  if (mes === 10 && dia > 22 || mes === 11 && dia < 22) return "Escorpião";
  if (mes === 11 && dia > 21 || mes === 12 && dia < 22) return "Sagitário";
  if (mes === 12 && dia > 21 || mes === 1 && dia < 21) return "Capricórnio";
  if (mes === 1 && dia > 20 || mes === 2 && dia < 19) return "Aquário";
  if (mes === 2 && dia > 18 || mes === 3 && dia < 21) return "Peixes";
}