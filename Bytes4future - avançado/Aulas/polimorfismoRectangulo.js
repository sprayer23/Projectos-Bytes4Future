class Rectangulo {
    #altura
    #largura

    constructor(largura, altura)    {
        this.#largura = largura;
        this.#altura = altura;
    }

    get area() {
        return this.calculaArea()
    }

    calculaArea() {
        return this.#largura * this.#altura;
    }
}

console.log(new Rectangulo(2, 3).calculaArea());
console.log(new Rectangulo(2, 3).area);

class Quadrado extends Rectangulo {
    constructor(lado) {
        super(lado, lado);
    }
}

console.log(new Quadrado(2).area);