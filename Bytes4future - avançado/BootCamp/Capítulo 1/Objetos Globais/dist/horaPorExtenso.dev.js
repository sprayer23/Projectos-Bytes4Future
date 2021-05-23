"use strict";

function horaPorExtenso(data) {
  // escreve aqui a função
  var horaExtenso = new Map([[0, 'meia noite'], [1, 'uma'], [2, 'duas'], [3, 'três'], [4, 'quatro'], [5, 'cinco'], [6, 'seis'], [7, 'sete'], [8, 'oito'], [9, 'nove'], [10, 'dez'], [11, 'onze'], [12, 'doze'], [13, 'treze'], [14, 'catorze'], [15, 'quinze'], [16, 'dezasseis'], [17, 'dezassete'], [18, 'dezoito'], [19, 'dezanove'], [20, 'vinte'], [21, 'vinte e um'], [22, 'vinte e dois'], [23, 'vinte e três']]);
  var minutoExtenso = new Map([[0, 'em ponto'], [1, 'e um'], [2, 'e dois'], [3, 'e três'], [4, 'e quatro'], [5, 'e cinco'], [6, 'e seis'], [7, 'e sete'], [8, 'e oito'], [9, 'e nove'], [10, 'e dez'], [11, 'e onze'], [12, 'e doze'], [13, 'e treze'], [14, 'e catorze'], [15, 'e um quarto'], [16, 'e dezasseis'], [17, 'e dezassete'], [18, 'e dezoito'], [19, 'e dezanove'], [20, 'e vinte'], [21, 'e vinte e um'], [22, 'e vinte e dois'], [23, 'e vinte e três'], [24, 'e vinte e quatro'], [25, 'e vinte e cinco'], [26, 'e vinte e seis'], [27, 'e vinte e sete'], [28, 'e vinte e oito'], [29, 'e vinte e nove'], [30, 'e meia'], [31, 'e trinta e um'], [32, 'e trinta e dois'], [33, 'e trinta e três'], [34, 'e trinta e quatro'], [35, 'e trinta e cinco'], [36, 'e trinta e seis'], [37, 'e trinta e sete'], [38, 'e trinta e oito'], [39, 'e trinta e nove'], [40, 'e quarenta'], [41, 'e quarenta e um'], [42, 'e quarenta e dois'], [43, 'e quarenta e três'], [44, 'e quarenta e quatro'], [45, 'e três quartos'], [46, 'e quarenta e seis'], [47, 'e quarenta e sete'], [48, 'e quarenta e oito'], [49, 'e quarenta e nove'], [50, 'e cinquenta'], [51, 'e cinquenta e um'], [52, 'e cinquenta e dois'], [53, 'e cinquenta e três'], [54, 'e cinquenta e quatro'], [55, 'e cinquenta e cinco'], [56, 'e cinquenta e seis'], [57, 'e cinquenta e sete'], [58, 'e cinquenta e oito'], [59, 'e cinquenta e nove']]);
  var horas = horaExtenso.get(data.getHours());
  var minutos = minutoExtenso.get(data.getMinutes());
  return "".concat(horas, " ").concat(minutos);
}

console.log(horaPorExtenso(new Date()));