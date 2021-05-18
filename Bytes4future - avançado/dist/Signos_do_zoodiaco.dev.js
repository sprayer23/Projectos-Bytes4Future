"use strict";

function calculaSigno(dia, mes) {
  // escreve aqui a função
  //Fevereiro
  if (mes === 2) {
    if (dia >= 1 && dia <= 18) {
      return "Aquário";
    } else if (dia < 18 && dia >= 28) {
      return "Peixes";
    } else {
      return "Por favor introduza um dia entre 1 e 28.";
    }
  } //Meses de 31


  if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) {
    if (mes === 1) {
      if (dia >= 21 && dia <= 31) {
        return "Aquário";
      } else if (dia <= 1 && dia > 21) {
        return "Capricórnio";
      } else {
        return "Por favor introduza um dia entre 1 e 31.";
      }
    }

    if (mes === 3) {
      if (dia >= 1 && dia <= 20) {
        return "Peixes";
      } else if (dia >= 21 && dia <= 31) {
        return "Carneiro";
      } else {
        return "Por favor introduza um dia entre 1 e 31.";
      }
    }

    if (mes === 5) {
      if (dia >= 21 && dia <= 31) {
        return "Gémeos";
      } else if (dia >= 1 && dia < 21) {
        return "Touro";
      } else {
        return "Por favor introduza um dia entre 1 e 31.";
      }
    }

    if (mes === 7) {
      if (dia >= 23 && dia <= 31) {
        return "Leão";
      } else if (dia >= 1 && dia < 23) {
        return "Carangueijo";
      } else {
        return "Por favor introduza um dia entre 1 e 31.";
      }
    }

    if (mes === 8) {
      if (dia >= 23 && dia <= 31) {
        return "Virgem";
      } else if (dia >= 1 && dia < 23) {
        return "Leão";
      } else {
        return "Por favor introduza um dia entre 1 e 31.";
      }
    }

    if (mes === 10) {
      if (dia >= 23 && dia <= 31) {
        return "Escorpião";
      } else if (dia >= 1 && dia < 23) {
        return "Balança";
      } else {
        return "Por favor introduza um dia entre 1 e 31.";
      }
    }

    if (mes === 12) {
      if (dia >= 22 && dia <= 31) {
        return "Capricórnio";
      } else if (dia >= 1 && dia < 22) {
        return "Sagitário";
      } else {
        return "Por favor introduza um dia entre 1 e 31.";
      }
    }
  } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
    // Meses de 30
    if (mes === 4) {
      if (dia >= 21 && dia <= 30) {
        return "Touro";
      } else if (dia >= 1 && dia < 21) {
        return "Carneiro";
      } else {
        return "Por favor introduza um dia entre 1 e 30.";
      }
    }

    if (mes === 6) {
      if (dia >= 21 && dia <= 30) {
        return "Carangueijo";
      } else if (dia >= 1 && dia < 21) {
        return "Gémeos";
      } else {
        return "Por favor introduza um dia entre 1 e 30.";
      }
    }

    if (mes === 9) {
      if (dia >= 23 && dia <= 30) {
        return "Balança";
      } else if (dia >= 1 && dia < 23) {
        return "Virgem";
      } else {
        return "Por favor introduza um dia entre 1 e 30.";
      }
    }

    if (mes === 11) {
      if (dia >= 22 && dia <= 30) {
        return "Sagitário";
      } else if (dia >= 1 && dia < 22) {
        return "Escorpião";
      } else {
        return "Por favor introduza um dia entre 1 e 30.";
      }
    }
  } else {
    return "Por favor introduza um mês entre 1 e 12.";
  }
}

console.log(calculaSigno(13, 5));
console.log(calculaSigno(31, 2));
console.log(calculaSigno(1, 8));
console.log(calculaSigno(25, 6));
console.log(calculaSigno(14, 12));
console.log(calculaSigno(13, 13));