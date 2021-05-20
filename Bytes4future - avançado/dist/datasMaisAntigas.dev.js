"use strict";

function dataMaisAntiga(datas) {
  var min = datas[0];

  for (var i = 0; i < datas.length; i++) {
    if (datas[i] < min) {
      min = datas[i];
    }
  }

  return min;
}

console.log(dataMaisAntiga([new Date('2021-11-22'), new Date('2015-6-25'), new Date('2011-1-11')]));