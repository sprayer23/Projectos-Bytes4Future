class Impressora {
    #tinteiros = []
    #alimentador

    insereTinteiro(tinteiro) {
        this.#tinteiros.push(tinteiro);
    }

    insereAlimentadorDePapel(alimentador) {
        this.#alimentador = alimentador
    }

    imprimir() {
        if (this.#alimentador.capacidadeAtual > 0
            && this.#tinteiros.filter(tinteiro => tinteiro.capacidadeAtual > 0).length == this.#tinteiros.length) {
            this.#tinteiros.forEach(tinteiro => tinteiro.consumir())
            this.#alimentador.consumir();
            return true;
        }
        return false;
    }
}

class Consumivel {
    #capacidade
    #utilizacao

    constructor(capacidade) {
        this.#capacidade = capacidade;
        this.#utilizacao = 0;
    }

    get capacidadeAtual() {
        return this.#capacidade - this.#utilizacao
    }

    consumir() {
        this.#utilizacao += 1;
    }
}

class Tinteiro extends Consumivel {
    // completa a classe
    constructor(capacidade) {
        super(capacidade)
    }
}

class TinteiroPreto extends Tinteiro {}
class TinteiroMagenta extends Tinteiro {}
class TinteiroAmarelo extends Tinteiro {}
class TinteiroCiano extends Tinteiro {}

class AlimentadorDePapel extends Consumivel {
    constructor(capacidade) {
        super(capacidade);
    }
}