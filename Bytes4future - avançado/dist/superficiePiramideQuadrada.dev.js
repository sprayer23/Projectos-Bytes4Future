"use strict";

function superficieDaPiramideQuadrada(ladodabase, altura) {
  // escreve aqui a função
  var h = Math.sqrt(Math.pow(ladodabase / 2, 2) + Math.pow(altura, 2));
  var area = Math.pow(ladodabase, 2) + 4 * (ladodabase * h / 2);
  return area;
}