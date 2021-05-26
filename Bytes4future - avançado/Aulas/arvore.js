class No {
    #valor
    #esquerda
    #direita
    constructor(valor) {
        this.#valor = valor;
    }
    get valor() {
        return this.#valor;
    }
    get esquerda() {
        return this.#esquerda;
    }
    set esquerda(esq) {
        this.#esquerda = esq;
    }
    get direita() {
        return this.#direita;
    }
    set direita(dir) {
        this.#direita = dir;
    }
    get eFolha() {
        return !this.esquerda && !this.direita;
    }
    toString() {
        return `${this.valor} ( ${this.esquerda?.toString()}, ${this.direita?.toString()})`
    }
}

class ArvoreBinaria {
    #raiz

    insereNo(valor) {
        // Se raiz for undefined
        // this.#raiz = new No(valor)
        const novo = new No(valor);
        if (this.#raiz === undefined) {
            this.#raiz = novo;
        }
        if (this.#raiz.valor > valor) {
            this.#raiz.esquerda = novo;
        } else {
            this.#raiz.direita = novo;
        }
    }
    removeNo(valor) {

    }

    toString() {
        return this.#raiz?.toString();
    }
}

const arvore = new ArvoreBinaria();
arvore.insereNo(5);
arvore.insereNo(1);
arvore.insereNo(7);
console.log(arvore.toString());