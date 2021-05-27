"use strict";

function countGroups(matrix) {
  var oneGroups = [];
  var zeroGroups = [];
}

console.log(countGroups([[0, 0, 1, 1], [0, 0, 1, 0], [1, 0, 0, 1], [1, 1, 1, 0]])); // [3, 3]
// zeroGroups
// [[0, 0], [0, 1], [1, 0], [1, 1], [2, 1], [2, 2]]
// [[1, 3]]
// [[3, 3]]
// oneGroups
// [[0, 2], [0, 3], [1, 2]]
// [[2, 0], [3, 0], [3, 1], [3, 2]]
// [[2, 3]]

function belongsToGroup(group, pos) {
  return group.some(function (p) {
    return p[0] === pos[0] - 1 && p[1] === pos[1] || p[0] === pos[0] && p[1] === pos[1] - 1;
  });
}

console.log(belongsToGroup([[0, 0], [0, 1], [1, 0], [1, 1], [2, 1]], [2, 2]));
console.log(belongsToGroup([[0, 0]], [1, 0]));
console.log(belongsToGroup([[0, 0]], [0, 1]));