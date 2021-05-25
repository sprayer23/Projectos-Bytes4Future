class ElementoDaPilha {
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

class Pilha {
    #topo

    toString() {
        return this.#topo?.toString()
    }

    insere(dados) {
        const novo = new ElementoDaPilha(dados, this.#topo)
        this.#topo = novo;
    }

    remove() {
        if(!this.#topo) {return undefined}
        // topo passa a ser topo.proximo
        const removido = this.#topo;
        // Retornar o topo
        this.#topo = removido.proximo;
        return removido.dados
    }

    get eVazia() {
        return this.#topo === undefined;
    }
}

const pilha = new Pilha();
pilha.insere(1);
pilha.insere(3);
pilha.insere(6);
pilha.insere(9);
pilha.insere(7);
pilha.insere(4);
pilha.insere(2);
pilha.insere(5);
console.log(pilha.toString())