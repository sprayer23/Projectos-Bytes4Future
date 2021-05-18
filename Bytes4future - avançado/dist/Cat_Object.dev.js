"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cat =
/*#__PURE__*/
function () {
  function Cat(name, weight, maxJumpHeight) {
    _classCallCheck(this, Cat);

    this.name = name;
    this.weight = weight;
    this.maxJumpHeight = maxJumpHeight;
    this.verticalPosition = 0;
  }

  _createClass(Cat, [{
    key: "jump",
    value: function jump(power) {
      this.verticalPosition += this.maxJumpHeight * power;
    }
  }]);

  return Cat;
}();

var cat = new Cat('Tobias', 12, 100);
console.log(cat.verticalPosition);
cat.jump(.2);
console.log(cat.verticalPosition);