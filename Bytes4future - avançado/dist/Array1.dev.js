"use strict";

function minMax(arr) {
  var soma = [];

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (i === j) continue;
      soma.push(arr[i] + arr[j]);
    }
  }

  return [Math.min.apply(Math, soma), Math.max.apply(Math, soma)];
}

console.log(minMax([1, 2, 3, 4, 5], 4));