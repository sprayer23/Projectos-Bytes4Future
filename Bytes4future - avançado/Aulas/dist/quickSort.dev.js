"use strict";

// QuickSort(array, first, last)
//   Se first < last
//     pivot = Partition(array, first, last)
//     QuickSort(array, first, pivot - 1)
//     QuickSort(array, pivot + 1, last)
function quickSortExposto(arr) {
  return quickSort(arr, 0, arr.length - 1);
}

function quickSort(arr, first, last) {
  if (first < last) {
    var pivot = partition(arr, first, last); // console.log(arr.slice(first, pivot), arr[pivot], arr.slice(pivot + 1, last+1))

    quickSort(arr, first, pivot - 1);
    quickSort(arr, pivot + 1, last);
  }

  return arr;
} // Partition(array, first, last)
//   Escolhe pivot e coloca na ultima posição
//   x = array[last]
//   i = first
//   Para cada j entre first e last - 1
//     Se array[j] < x
//       Troca array[i] com array[j]
//       i++
//   Troca array[i] com array[last]
//   retorna i


function partition(arr, first, last) {
  var pivotIndex = Math.floor(Math.random() * (last - first)) + first;
  var tempPivot = arr[last];
  arr[last] = arr[pivotIndex];
  arr[pivotIndex] = tempPivot;
  var x = arr[last];
  var i = first;

  for (var j = first; j < last; j++) {
    if (arr[j] < x) {
      var temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      i++;
    }
  }

  var tempLast = arr[last];
  arr[last] = arr[i];
  arr[i] = tempLast;
  return i;
}

var arr = [3, 5, 1, 9, 2, 6, 8];
console.log(quickSortExposto(arr)); // [1, 3, 5, 9]

function buildArray(n) {
  var arr = [];

  for (var i = 0; i < n; i++) {
    arr = [Math.floor(Math.random() * n)].concat(arr);
  }

  return arr;
}

function buildArraySorted(n) {
  var arr = [];

  for (var i = 0; i < n; i++) {
    arr = [i].concat(arr);
  }

  return arr;
}

var arr100 = buildArray(200000);
console.log(arr100);
var arr101 = buildArray(200000);
console.log(arr101);
var startQuickSort = new Date();
quickSortExposto(arr100);
console.log("".concat(new Date() - startQuickSort, "ms"));
console.log(arr100);
var startSort = new Date();
arr101.sort(function (e1, e2) {
  return e1 - e2;
});
console.log("".concat(new Date() - startSort, "ms"));
console.log(arr101);