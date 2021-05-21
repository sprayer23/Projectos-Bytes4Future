"use strict";

function palavraExisteEmSopaDeLetras(sopa, palavra) {
  var palavraAoContrario = invertePalavra(palavra);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = sopa[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var linha = _step.value;

      if (linha.includes(palavra) || linha.includes(palavraAoContrario)) {
        return true;
      }
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

  var arrayTransposto = transpoeArray(sopa);
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = arrayTransposto[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var coluna = _step2.value;

      if (coluna.includes(palavra) || coluna.includes(palavraAoContrario)) {
        return true;
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

  return false;
}

function invertePalavra(palavra) {
  var invertida = "";

  for (var i = palavra.length - 1; i >= 0; i--) {
    invertida += palavra[i]; // console.log(invertida)
  } // for (let i = 0;
  //     i < palavra.length;
  //     i++) {
  //         invertida = palavra[i] + invertida
  //         console.log(invertida)
  //     }


  return invertida;
}

console.log(invertePalavra("OLA"));
var sopa = ["OOL", "LLO", "AYY"];

function transpoeArray(array) {
  var transposto = [];

  for (var i = 0; i < array.length; i++) {
    var linha = array[i];

    for (var j = 0; j < linha.length; j++) {
      var elemento = linha[j];

      if (!transposto[j]) {
        transposto[j] = "";
      }

      transposto[j] += elemento;
      console.log(transposto);
    }
  }

  return transposto;
}

console.log(transpoeArray(sopa));
var sopaTransposta = ["OLA", "OLY", "LOY"];
console.log(palavraExisteEmSopaDeLetras(sopa, "OL"));
console.log(palavraExisteEmSopaDeLetras(sopa, "YA"));
console.log(palavraExisteEmSopaDeLetras(sopa, "I"));
console.log(palavraExisteEmSopaDeLetras(sopa, "OLA"));