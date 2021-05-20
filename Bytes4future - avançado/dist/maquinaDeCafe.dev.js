"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MaquinaDeCafe =
/*#__PURE__*/
function () {
  function MaquinaDeCafe() {
    _classCallCheck(this, MaquinaDeCafe);
  }

  _createClass(MaquinaDeCafe, [{
    key: "fazCafe",
    value: function fazCafe() {
      var troco = this.centimosEmEspera - this.custoDoCafe;

      if (troco < 0) {
        console.log("Insira mais ".concat(-troco, " c\xEAntimos"));
        return false;
      }
    }
  }]);

  return MaquinaDeCafe;
}();

var mdc = new MaquinaDeCafe();
mdc.fazCafe();