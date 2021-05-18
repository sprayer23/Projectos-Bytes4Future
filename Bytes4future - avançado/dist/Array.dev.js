"use strict";

function minMax(arr, n) {
  //Assumindo que o array está ordenado
  var min = 0;

  for (var i = o; i < n; i++) {
    min += arr[i];
  }

  var max = 0;

  for (var _i = 0; _i < n; _i++) {
    max += arr[arr.length - 1 - _i];
  }

  return [min, max];
}