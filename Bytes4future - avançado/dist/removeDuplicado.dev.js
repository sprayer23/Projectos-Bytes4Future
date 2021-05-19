"use strict";

function removeDuplicados(arr) {
  return Array.from(new Set(arr));
}

console.log(removeDuplicados([1, 1, 1, 3, 3, 5, 5, 8, 8]));