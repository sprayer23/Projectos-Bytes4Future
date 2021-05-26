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
        return `${this.valor} ( ${this.esquerda?.toString() ?? "_"}, ${this.direita?.toString() ?? "_"} )`
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
            return
        }
        
        let noAtual = this.#raiz;
        while (noAtual) {
            // console.log(noAtual.valor, valor);
            if (noAtual.valor > valor) {
                if (!noAtual.esquerda) {
                    noAtual.esquerda = novo;
                    noAtual = undefined;
                } else {
                    noAtual = noAtual.esquerda;
                }
            } else if (noAtual.valor < valor) {
                if (!noAtual.direita) {
                    noAtual.direita = novo;
                    noAtual = undefined;
                } else {
                    noAtual = noAtual.direita;
                }
            } else {
                break;
            }
        }
        

        // Percorremos a árvore
        // Se o valor é maior que o valor do noAtual, 
            // o proximo noAtual é noAtual.direita
        // Caso Contrário
            // o próximo noAtual é noAtual.esquerda
        // Se formos definir o noAtual como undefined
        // noAtual.(...) = novo
    }
    removeNo(valor) {

    }

    procuraValor(valor) {
        if (this.#raiz === undefined) {
            return false;
        }
        
        let noAtual = this.#raiz;
        while (noAtual) {
            console.log(`${noAtual.valor} === ${valor}`);
            if (noAtual.valor > valor) {
                if (!noAtual.esquerda) {
                    return false;
                } else {
                    noAtual = noAtual.esquerda;
                }
            } else if (noAtual.valor < valor) {
                if (!noAtual.direita) {
                    return false;
                } else {
                    noAtual = noAtual.direita;
                }
            } else {
                return true;
            }
        }
        return false;
    }

    toString() {
        return this.#raiz?.toString();
    }
}

const arvore = new ArvoreBinaria();
arvore.insereNo(5);
arvore.insereNo(3);
arvore.insereNo(1);
arvore.insereNo(4);
arvore.insereNo(7);
arvore.insereNo(6);
arvore.insereNo(8);
arvore.insereNo(7.5);

const arvore2 = new ArvoreBinaria();
arvore2.insereNo(1);
arvore2.insereNo(3);
arvore2.insereNo(4);
arvore2.insereNo(5);
arvore2.insereNo(6);
arvore2.insereNo(7);
arvore2.insereNo(7.5);
arvore2.insereNo(8);

console.log(arvore.toString());
console.log(arvore2.toString());
console.log(arvore.procuraValor(7.5))
console.log(arvore2.procuraValor(7.5))