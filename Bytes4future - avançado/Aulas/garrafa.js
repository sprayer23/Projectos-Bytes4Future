class Garrafa {
    #capacidadeMaxima
    #capacidadeAtual
    #fechada

    constructor(capacidadeMaxima) {
        this.#capacidadeMaxima = capacidadeMaxima;
        this.#capacidadeAtual = 0;
        this.#fechada = true;
    }

    adicionarLiquido(quantidade) {
        if (!this.#fechada) {
            if (this.#capacidadeAtual + quantidade > this.#capacidadeMaxima) {
                this.#capacidadeAtual = this.#capacidadeMaxima
            } else {
                this.#capacidadeAtual += quantidade;
            }

            // this.#capacidadeAtual = Math.min(
            //     this.#capacidadeMaxima,
            //     this.#capacidadeAtual + quantidade
            // )
        }
    }
    removerLiquido(quantidade) {
        if (!this.#fechada) {
            // this.#capacidadeAtual -= quantidade;
            this.#capacidadeAtual = Math.max(
                0,
                this.#capacidadeAtual - quantidade
            )
        }
    }

    abrirGarrafa() {
        this.#fechada = false;
    }
    fecharGarrafa() {
        this.#fechada = true;
    }

    toString() {
        return `Esta garrafa tem ${this.#capacidadeAtual} de ${this.#capacidadeMaxima}ml e está ${this.#fechada ? "fechada" : "aberta"}`
    }
}

const garrafa = new Garrafa(1000);
console.log(garrafa.toString())

garrafa.adicionarLiquido(1000);
console.log(garrafa.toString())

garrafa.abrirGarrafa();
garrafa.adicionarLiquido(500);
garrafa.adicionarLiquido(1000);
console.log(garrafa.toString())
garrafa.fecharGarrafa()
garrafa.removerLiquido(500);
console.log(garrafa.toString());
garrafa.removerLiquido(1000);
console.log(garrafa.toString());