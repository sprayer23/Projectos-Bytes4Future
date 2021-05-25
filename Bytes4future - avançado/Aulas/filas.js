class ElementoDasListas {
    #dados
    #proximo
    constructor(dados, proximo) {
        this.#dados = dados;
        this.#proximo = proximo
    }

    toString() {
        return `${this.dados} -> ${this.proximo?.toString()}`
    }

    get dados() {
        return this.#dados;
    }

    get proximo() {
        return this.#proximo;
    }

    set proximo(elem) {
        this.#proximo = elem;
    }

    get eUltimo() {
        return this.#proximo === undefined
    }
}

class Listas {
    #topo

    toString() {
        return this.#topo?.toString()
    }

    insere(dados) {
        const novo = new ElementoDasListas(dados, this.#topo)
        this.#topo = novo;
    }

    remove() {
        if(!this.#topo) {return undefined}
        // topo passa a ser topo.proximo
        const removido = this.#topo;
        // Retornar o topo
        this.#topo = inicio;
        return inicio;
    }

    get eVazia() {
        return this.#topo === undefined;
    }
}

const fila = new Fila();
pilha.insere(1);
pilha.insere(3);
pilha.insere(6);
pilha.insere(9);
pilha.insere(7);
pilha.insere(4);
pilha.insere(2);
pilha.insere(5);
console.log(pilha.toString())