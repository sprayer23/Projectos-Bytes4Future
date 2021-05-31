"use strict";

function quadradosDoArray(array) {
  if (array.length === 0) return [];
  return [Math.pow(array[0], 2)].concat(quadradosDoArray(array.slice(1)));
}