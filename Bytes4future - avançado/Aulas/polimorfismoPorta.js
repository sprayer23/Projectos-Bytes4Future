class Porta {
    #trinco

    static get TRANCADO() {return true}

    constructor(estado) {
        this.#trinco = Boolean(estado);
    }

    get trincos() { return [this.#trinco] }

    trancar() {
        this.#trinco = Porta.TRANCADO;
    }

    destrancar() {
        this.#trinco = !Porta.TRANCADO;
    }
}

class PortaBlindada extends Porta {
    #trincoSuperior
    #trincoInferior
    #trincoTraseiro

    constructor(estado) {
        super(estado);
        this.#trincoSuperior = Boolean(estado)
        this.#trincoInferior = Boolean(estado)
        this.#trincoTraseiro = Boolean(estado)
    }

    get trincos() { 
        return [
            ...super.trincos, 
            this.#trincoSuperior, 
            this.#trincoInferior, 
            this.#trincoTraseiro,
        ]
    }

    trancar() {
        super.trancar();
        this.#trincoSuperior = Porta.TRANCADO;
        this.#trincoInferior = Porta.TRANCADO;
        this.#trincoTraseiro = Porta.TRANCADO;
    }

    destrancar() {
        super.destrancar();
        this.#trincoSuperior = !Porta.TRANCADO;
        this.#trincoInferior = !Porta.TRANCADO;
        this.#trincoTraseiro = !Porta.TRANCADO;
    }
}

const porta = new Porta(false);
console.log(porta.trincos);
porta.trancar();
console.log(porta.trincos);
porta.destrancar();
console.log(porta.trincos);

const portaBlindada = new PortaBlindada(false);
console.log(portaBlindada.trincos);
portaBlindada.trancar();
console.log(portaBlindada.trincos);
portaBlindada.destrancar();
console.log(portaBlindada.trincos);
