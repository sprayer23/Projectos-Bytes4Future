"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

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
      var chave = par[0];
      var contagem = par[1];

      if (contagem > contagemMaisRepetido || contagem === contagemMaisRepetido && chave < maisRepetido) {
        maisRepetido = (_readOnlyError("maisRepetido"), chave);
        contagemMaisRepetido = (_readOnlyError("contagemMaisRepetido"), contagem);
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

var arr = [1, 3, 5, 2, 6, 2, 4, 3, 1, 2, 1];