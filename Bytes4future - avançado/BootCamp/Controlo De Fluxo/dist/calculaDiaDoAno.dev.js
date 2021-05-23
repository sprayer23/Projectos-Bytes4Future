"use strict";

function calculaDiaDoAno(dia, mes) {
  // escreve aqui a função
  if (dia < 1 && dia > 31) {
    return "Por favor introduza um dia entre 1 e 31.";
  }

  if (mes < 1 && mes > 12) {
    return "Por favor introduza um dia entre 1 e 31.";
  }

  if (dia > 30 && mes === 4 || dia > 30 && mes === 6 || dia > 30 && mes === 9 || dia > 30 && mes === 11) {
    return "Por favor introduza um dia entre 1 e 30.";
  }

  if (dia > 28 && mes === 2) {
    return "Por favor introduza um dia entre 1 e 28.";
  }

  var diaDoAno = 0;

  switch (mes) {
    case 1:
      diaDoAno = dia;
      break;

    case 2:
      diaDoAno = dia + 31;
      break;

    case 3:
      diaDoAno = dia + 31 + 28;
      break;

    case 4:
      diaDoAno = dia + 31 + 28 + 31;
      break;

    case 5:
      diaDoAno = dia + 31 + 28 + 31 + 30;
      break;

    case 6:
      diaDoAno = dia + 31 + 28 + 31 + 30 + 31;
      break;

    case 7:
      diaDoAno = dia + 31 + 28 + 31 + 30 + 31 + 30;
      break;

    case 8:
      diaDoAno = dia + 31 + 28 + 31 + 30 + 31 + 30 + 31;
      break;

    case 9:
      diaDoAno = dia + 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31;
      break;

    case 10:
      diaDoAno = dia + 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30;
      break;

    case 11:
      diaDoAno = dia + 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31;
      break;

    case 12:
      diaDoAno = dia + 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30;
      break;

    default:
      break;
  }

  return diaDoAno;
}