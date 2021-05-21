"use strict";

// Encontra a moda de um Array de números, recorrendo a um Map.
// Se dois elementos tiverem o maior número de ocorrências, retorna o menor.
function moda(array) {
  var contadores = new Map();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var elem = _step.value;

      if (!contadores.has(elem)) {
        contadores.set(elem, 0);
      }

      contadores.set(elem, contadores.get(elem) + 1);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  console.log(contadores.entries());
  var maisRepetido = array[0];
  var contagemMaisRepetido = contadores.get(maisRepetido);
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = contadores.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var par = _step2.value;
      var numero = par[0];
      var contagem = par[1];

      if (contagem > contagemMaisRepetido || contagem === contagemMaisRepetido && numero < maisRepetido) {
        maisRepetido = numero;
        contagemMaisRepetido = contagem;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return maisRepetido;
}

var arr = [6, 6, 3, 6, 5, 2, 6, 2, 4, 3, 1, 2, 1];
console.log(moda(arr));