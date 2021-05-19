"use strict";

/*Cria uma função que recebe como argumentos um dia e um mês e retorna o dia do ano correspondente (entre 1 e 365).

Caso o número do dia inserido seja inválido deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 31."

Caso o número do mês inserido seja inválido deve retornar a mensagem de erro: "Por favor introduza um mês entre 1 e 12."

Nos meses em que os dias só vão até ao 30 deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 30."

No mês de Fevereiro só pode aceitar o número de dias até 28
caso seja inserido um número diferente deve retornar a mensagem de erro: 
"Por favor introduza um dia entre 1 e 28."*/
function calculaDiaDoAno(dia, mes) {
  var diasNosMeses = [0, 31, 59, 90, 120, 151, 181, 212, 242, 273, 303, 334];
  var diaDoAno = 0; // Fevereiro;

  if (mes === 2) {
    if (dia >= 1 && dia <= 28) {
      diaDoAno = dia + diasNosMeses[mes - 1];
      return diaDoAno;
    } else {
      return "Por favor introduza um dia entre 1 e 28.";
    }
  } // Meses de 31 dias;


  if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) {
    if (dia >= 1 && dia <= 31) {
      diaDoAno = dia + diasNosMeses[mes - 1];
      return diaDoAno;
    } else {
      return "Por favor introduza um dia entre 1 e 31.";
    }
  } // Meses de 30 dias;


  if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
    if (dia >= 1 && dia <= 30) {
      diaDoAno = dia + diasNosMeses[mes - 1];
      return diaDoAno;
    } else {
      return "Por favor introduza um dia entre 1 e 30.";
    }
  } else {
    return "Por favor introduza um mês entre 1 e 12.";
  }
}

console.log(calculaDiaDoAno(21, 12));
console.log(calculaDiaDoAno(2, 2));
console.log(calculaDiaDoAno(25, 6));
console.log(calculaDiaDoAno(80, 13));
console.log(calculaDiaDoAno(200, 2));