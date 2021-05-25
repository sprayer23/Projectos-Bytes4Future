class ElementoDaLista {
    #dados
    #proximo
    #anterior
    constructor(dados, proximo, anterior) {
        this.#dados = dados;
        this.#proximo = proximo;
        this.#anterior = anterior;
    }

    toString() {
        return `${this.dados} -> ${this.proximo?.toString()}`
    }

    toStringInvertido() {
        return `${this.dados} -> ${this.anterior?.toStringInvertido()}`
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

    get anterior() {
        return this.#anterior;
    }

    set anterior(elem) {
        this.#anterior = elem;
    }

    get eUltimo() {
        return this.#proximo === undefined
    }

    get ePrimeiro() {
        return this.#anterior === undefined
    }
}

console.log(
    new ElementoDaLista(1, undefined).eUltimo
)

class ListaDuplamenteLigada {
    #primeiro
    #ultimo
    
    toString() {
        return this.#primeiro?.toString()
    }

    toStringInvertido() {
        return this.#ultimo?.toStringInvertido()
    }

    insereNoInicio(dados) {
        const novo = new ElementoDaLista(dados, this.#primeiro)
        if (this.#primeiro) {
            this.#primeiro.anterior = novo;
        }
        this.#primeiro = novo;
        if (!this.#ultimo) {
            this.#ultimo = novo;
        }
    }

    insereNoFim(dados) {
        // Inserir dados como ultimo elemento da lista
        const novo = new ElementoDaLista(dados, undefined);

        if (this.eVazia) {
            this.#primeiro = novo;
            if (!this.#ultimo) {
                this.#ultimo = novo;
            }
        } else {
            novo.anterior = this.#ultimo
            this.#ultimo.proximo = novo
            this.#ultimo = novo
        }
    }

    insereEmOrdem(dados) {
        // Inserir dados como ultimo elemento da lista
        const novo = new ElementoDaLista(dados, undefined, undefined);

        if (this.eVazia) {
            this.#primeiro = novo;
            if (!this.#ultimo) {
                this.#ultimo = novo;
            }
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

            if (novo.proximo) {
                novo.proximo.anterior = novo;
            }
            novo.anterior = elementoAtual;

            if (novo.eUltimo) {
                this.#ultimo = novo;
            }
        }
    }

    get eVazia() {
        return this.#primeiro === undefined;
    }
}

const lista = new ListaDuplamenteLigada();
// lista.insereNoInicio(1);
// lista.insereNoInicio(2);
// lista.insereNoInicio(3);
lista.insereEmOrdem(1);
lista.insereEmOrdem(3);
lista.insereEmOrdem(2);
console.log(lista.toString())
console.log(lista.toStringInvertido())

