"use strict";

function superDigito(n) {
  if (n.length === 1) {
    return parseInt(n);
  }

  return superDigito(somatorio(n).toString());
}

function somatorio(n) {
  if (n.length === 1) {
    return parseInt(n);
  }

  return parseInt(n[0]) + somatorio(n.slice(1));
}

console.log(superDigito('9875'));
console.log(superDigito('12'));
console.log(superDigito('2'));