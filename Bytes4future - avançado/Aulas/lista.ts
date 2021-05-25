class ElementoDaLista<T> {
    #dados: T
    #proximo?: ElementoDaLista<T>
    constructor(
        dados: T,
        proximo: ElementoDaLista<T> | undefined
    ) {
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

    set proximo(elem : ElementoDaLista<T> | undefined) {
        this.#proximo = elem;
    }

    get eUltimo() {
        return this.#proximo === undefined
    }
}

console.log(
    new ElementoDaLista<number>(1, undefined).eUltimo
)

class Lista<T> {
    #primeiro?: ElementoDaLista<T>
    
    toString() {
        return this.#primeiro?.toString()
    }

    insereNoInicio(dados: T) {
        const novo = new ElementoDaLista<T>(dados, this.#primeiro)
        this.#primeiro = novo;
    }

    insereNoFim(dados: T) {
        // Inserir dados como ultimo elemento da lista
        const ultimo = new ElementoDaLista<T>(dados, undefined);

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

    insereEmOrdem(dados: T) {
        // Inserir dados como ultimo elemento da lista
        const novo = new ElementoDaLista<T>(dados, undefined);

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

const lista = new Lista<number>();
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
console.log(lista.toString())

