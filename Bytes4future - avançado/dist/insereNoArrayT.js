function insereNoArray(array, elemento) {
    return array.concat(elemento);
}
console.log(insereNoArray([1, 2, 3], 4));
console.log(insereNoArray([1, 2, 3], "4")); // Erro
var ArrayTipificado = /** @class */ (function () {
    function ArrayTipificado() {
        this.array = [];
    }
    ArrayTipificado.prototype.insereNoArray = function (elemento) {
        this.array = this.Array.concat(elemento);
        return this.array;
    };
    return ArrayTipificado;
}());
var at = new ArrayTipificado();
var ats = new ArrayTipificado();
console.log(at.insereNoArray(1));
console.log(at.insereNoArray(BigInt(1)));
console.log(ats.insereNoArray('1'));
