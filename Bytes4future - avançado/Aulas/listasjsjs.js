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

    get primeiro(){
        return this.#primeiro;
    }
    
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
        // console.log(dados, this.#primeiro?.dados)

        if (this.eVazia) {
            this.#primeiro = novo;
        } else if (dados < this.#primeiro.dados) {
            novo.proximo = this.#primeiro;
            this.#primeiro = novo;
        } else {
            let elementoAtual = this.#primeiro;
            // console.log(elementoAtual.dados, dados, elementoAtual.proximo?.dados)
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
lista.insereNoInicio(1);
lista.insereNoInicio(3);
lista.insereNoInicio(6);
lista.insereNoInicio(9);
lista.insereNoInicio(7);
lista.insereNoInicio(4);
lista.insereNoInicio(2);
lista.insereNoInicio(5);

function insertionSort(lista) {
    let novaLista = new Lista();
    let elementoAtual = lista.primeiro;
    while(elementoAtual !== undefined) {
        // Para cada elemento da lista
        //  Insere numa nova lista o elemento ordenado
        // console.log('nova list', novaLista.toString())
        // console.log('elemento atual', elementoAtual.dados)
        novaLista.insereEmOrdem(elementoAtual.dados)
        elementoAtual = elementoAtual.proximo;
        // console.log("---")
    }
    return novaLista;
}

console.log(lista.toString())
console.log(insertionSort(lista).toString())


function insereEmPosicao(arr, elem, i) {
    arr[i] = elem;
    // TODO: mover os elementos a partir da posição i uma casa para a frente
    elem[i + 1] = elem[i];
}

let array = [1, 2, 4];
insereEmPosicao(array, 3, 2)
console.log(array)