"use strict";

function aplica(n, f) {
  return f(n);
}

console.log(aplica(5, function (n) {
  return n * n;
})); //25

console.log(5, function (n) {
  return n * -1;
}); // -5

console.log(5, function (n) {
  return n % 2 === 0 ? 'Par' : 'Impar';
});