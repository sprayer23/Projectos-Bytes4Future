"use strict";

function diaEmPalavras(dia, mes, ano) {
  // escreve aqui a função
  var dias = new Map([[1, "um"], [2, "dois"], [3, "três"], [4, "quatro"], [5, "cinco"], [6, "seis"], [7, "sete"], [8, "oito"], [9, "nove"], [10, "dez"], [11, "onze"], [12, "doze"], [13, "treze"], [14, "catorze"], [15, "quinze"], [16, "dezasseis"], [17, "dezassete"], [18, "dezoito"], [19, "dezanove"], [20, "vinte"], [21, "vinte e um"], [22, "vinte e dois"], [23, "vinte e três"], [24, "vinte e quatro"], [25, "vinte e cinco"], [26, "vinte e seis"], [27, "vinte e sete"], [28, "vinte e oito"], [29, "vinte e nove"], [30, "trinta"], [31, "trinta e um"]]);
  var meses = new Map([[1, "janeiro"], [2, "fevereiro"], [3, "março"], [4, "abril"], [5, "maio"], [6, "junho"], [7, "julho"], [8, "agosto"], [9, "setembro"], [10, "outubro"], [11, "novembro"], [12, "dezembro"]]);
  var anos = new Map([[2000, 'dois mil'], [2001, 'dois mil e um'], [2002, 'dois mil e dois'], [2003, 'dois mil e três'], [2004, 'dois mil e quatro'], [2005, 'dois mil e cinco'], [2006, 'dois mil e seis'], [2007, 'dois mil e sete'], [2008, 'dois mil e oito'], [2009, 'dois mil e nove'], [2010, 'dois mil e dez'], [2011, 'dois mil e onze'], [2012, 'dois mil e doze'], [2013, 'dois mil e treze'], [2014, 'dois mil e catorze'], [2015, 'dois mil e quinze'], [2016, 'dois mil e dezasseis'], [2017, 'dois mil e dezassete'], [2018, 'dois mil e dezoito'], [2019, 'dois mil e dezanove'], [2020, 'dois mil e vinte'], [2021, 'dois mil e vinte um'], [2022, 'dois mil e vinte dois'], [2023, 'dois mil e vinte três'], [2024, 'dois mil e vinte quatro'], [2025, 'dois mil e vinte cinco'], [2026, 'dois mil e vinte seis'], [2027, 'dois mil e vinte sete'], [2028, 'dois mil e vinte oito'], [2029, 'dois mil e vinte nove'], [2030, 'dois mil e trinta']]);

  if (anos.has(ano)) {
    if (mes === 2) {
      if (0 === ano % 4 && 0 != 100 || 0 === ano % 400) {
        if (dia >= 1 && dia <= 29) {
          return "".concat(dias.get(dia), " de ").concat(meses.get(mes), " de ").concat(anos.get(ano));
        } else {
          return "Por favor introduza um dia entre 1 e 29.";
        }
      } else {
        if (dia >= 1 && dia <= 28) {
          return "".concat(dias.get(dia), " de ").concat(meses.get(mes), " de ").concat(anos.get(ano));
        } else {
          return "Por favor introduza um dia entre 1 e 28.";
        }
      }
    }

    if (meses.has(mes)) {
      //meses 31 dias
      if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) {
        if (dias.has(dia)) {
          return "".concat(dias.get(dia), " de ").concat(meses.get(mes), " de ").concat(anos.get(ano));
        } else {
          return "Por favor introduza um dia entre 1 e 31.";
        }
      } //meses de 30 dias


      if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
        if (dia >= 1 && dia <= 30) {
          return "".concat(dias.get(dia), " de ").concat(meses.get(mes), " de ").concat(anos.get(ano));
        } else {
          return "Por favor introduza um dia entre 1 e 30.";
        }
      }
    } else {
      return "Por favor introduza um mês entre 1 e 12.";
    }
  } else {
    return "Por favor introduza um ano entre 2000 e 2030.";
  }
}

console.log(diaEmPalavras(29, 2, 2016));
console.log(diaEmPalavras(29, 2, 2014));