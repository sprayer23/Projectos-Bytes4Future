"use strict";

function superficieDoCilindro(raio, altura) {
  // escreve aqui a função
  var raio1 = 2 * Math.PI * Math.pow(raio, 2);
  var altura1 = 2 * Math.PI * raio * altura;
  return raio1 + altura1;
}

console.log(superficieDoCilindro(2, 5));