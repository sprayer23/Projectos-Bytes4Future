"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function contaGrupos(matriz) {
  // Inicializar dois arrays, um para os grupos de 0, outro para os grupos de 1
  var todosOsGrupos = [[], []]; // Para cada elemento da matriz

  for (var i = 0; i < matriz.length; i++) {
    var _loop = function _loop(j) {
      //      Criar o Ponto
      var ponto = new Ponto(i, j);
      var elemento = matriz[i][j]; //      Se for um 0

      var gruposPossiveis = todosOsGrupos[elemento].filter(function (g) {
        return verificaSePertence(g, ponto);
      }); //          Verifica se pertence a um grupo existente

      if (gruposPossiveis.length === 1) {
        //              Se existir, então coloca o Ponto, no grupo
        gruposPossiveis[0].push(ponto);
      } else if (gruposPossiveis.length === 2) {
        var gruposEmQueNaoPertence = todosOsGrupos[elemento].filter(function (g) {
          return !verificaSePertence(g, ponto);
        });
        todosOsGrupos[elemento] = gruposEmQueNaoPertence;
        var _grupo = [];
        gruposPossiveis.forEach(function (gp) {
          gp.forEach(function (elemento) {
            return _grupo.push(elemento);
          });
        });

        _grupo.push(ponto);

        todosOsGrupos[elemento].push(_grupo);
      } else {
        //          Caso contrário
        //              Cria um novo grupo com o ponto
        todosOsGrupos[elemento].push([ponto]);
      }
    };

    for (var j = 0; j < matriz[i].length; j++) {
      _loop(j);
    }
  }

  console.log(todosOsGrupos.map(function (g) {
    return g.map(function (p) {
      return p.toString();
    }).join(":");
  }).join('\n')); // return [tamanho do array que tem os grupos de 0, tamanho do array que tem os grupos de 1]

  return todosOsGrupos.map(function (g) {
    return g.length;
  });
}

var Ponto =
/*#__PURE__*/
function () {
  function Ponto(linha, coluna) {
    _classCallCheck(this, Ponto);

    this.linha = linha;
    this.coluna = coluna;
  }

  _createClass(Ponto, [{
    key: "toString",
    value: function toString() {
      return "(".concat(this.linha, ", ").concat(this.coluna, ")");
    }
  }]);

  return Ponto;
}();

function verificaSePertence(grupo, ponto) {
  // Verificar se algum ponto do grupo verifica a condição
  return grupo.some(function (p) {
    return (// Está na mesma linha e na coluna atrás
      p.linha === ponto.linha && p.coluna === ponto.coluna - 1 || // OU está na mesma coluna e na linha acima
      p.linha === ponto.linha - 1 && p.coluna === ponto.coluna
    );
  });
}

var grupo = [new Ponto(0, 0)];
console.log(verificaSePertence(grupo, new Ponto(1, 0)));
console.log(verificaSePertence(grupo, new Ponto(0, 1)));
console.log(verificaSePertence(grupo, new Ponto(1, 1)));
console.log(verificaSePertence(grupo, new Ponto(0, 2)));
console.log(contaGrupos([[0, 0, 1, 1], [0, 0, 1, 0], [1, 0, 0, 1], [1, 1, 1, 0]] // [3, 3]
));
console.log(contaGrupos([[1, 0, 1, 1], [1, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]] // [2, 1]
));