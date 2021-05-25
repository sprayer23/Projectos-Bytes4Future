class ElementoDaLista {
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

console.log(
    new ElementoDaLista(1, undefined).eUltimo
)

class Lista {
    #primeiro
    
    toString() {
        return this.#primeiro?.toString()
    }

    insereNoInicio(dados) {
        const novo = new ElementoDaLista(dados, this.#primeiro)
        this.#primeiro = novo;
    }

    insereNoFim(dados) {
        // Inserir dados como ultimo elemento da lista
        const ultimo = new ElementoDaLista(dados, undefined);

        if (this.eVazia) {
            this.#primeiro = ultimo;
        } else {
            let elementoAtual = this.#primeiro;
            while (!elementoAtual.eUltimo) {
                elementoAtual = elementoAtual.proximo;
            }
            elementoAtual.proximo = ultimo;
        }
    }

    insereEmOrdem(dados) {
        // Inserir dados como ultimo elemento da lista
        const novo = new ElementoDaLista(dados, undefined);

        if (this.eVazia) {
            this.#primeiro = novo;
        } else {
            let elementoAtual = this.#primeiro;
            while (
                !(elementoAtual.eUltimo
                || (elementoAtual.dados < dados &&
                    elementoAtual.proximo.dados >= dados) )
                ) {
                elementoAtual = elementoAtual.proximo;
            }
            novo.proximo = elementoAtual.proximo;
            elementoAtual.proximo = novo;
        }
    }

    get eVazia() {
        return this.#primeiro === undefined;
    }
}

const lista = new Lista();
// lista.insereNoInicio(1);
// lista.insereNoInicio(2);
// lista.insereNoInicio(3);
lista.insereEmOrdem(1);
lista.insereEmOrdem(3);
lista.insereEmOrdem(6);
lista.insereEmOrdem(9);
lista.insereEmOrdem(7);
lista.insereEmOrdem(4);
lista.insereEmOrdem(2);
lista.insereEmOrdem(5);
console.log(lista.toString())

