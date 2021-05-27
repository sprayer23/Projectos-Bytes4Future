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

    get altura() {
        // console.log('altura', this.valor, 1 + Math.max(this.esquerda?.altura ?? 0, this.direita?.altura ?? 0))
        return 1 + Math.max(
            this.esquerda?.altura ?? 0, 
            this.direita?.altura ?? 0
        )
    }

    get fatorEquilibrio() {
        // console.log(this.direita?.altura ?? 0) - (this.esquerda?.altura ?? 0)
        return (this.direita?.altura ?? 0) 
            - (this.esquerda?.altura ?? 0)
    }
    
    toString() {
        // return `${this.valor} ( ${this.esquerda?.toString() ?? "_"}, ${this.direita?.toString() ?? "_"} )`
        return this.toStringRecursivo("", true, "")
    }


    toStringRecursivo(prefix, isTail, result) {
        if(this.direita !== undefined) {
            result += this.direita.toStringRecursivo(prefix + (isTail ? "│   " : "    "), false, "");
        }
        result = result + prefix + (isTail ? "└── " : "┌── ") + (this.valor.toString()) + "\n";
        if(this.esquerda !== undefined) {
            result += this.esquerda.toStringRecursivo(prefix + (isTail ? "    " : "│   "), true, "");
        }
        return result;
    }


    insere(valor) {
        if (this.valor > valor) {
            if (!this.esquerda) {
                const novo = new No(valor);
                this.esquerda = novo;
            } else {
                if (this.esquerda.insere(valor)) {
                    console.log('equilibra...', valor)
                    this.equilibra(this.esquerda)
                    return true;
                }
            }
        } else if (this.valor < valor) {
            if (!this.direita) {
                const novo = new No(valor);
                this.direita = novo;
            } else {
                if (this.direita.insere(valor)) {
                    console.log('equilibra...', valor)
                    this.equilibra(this.direita)
                }
            }
        }
        if (Math.abs(this.fatorEquilibrio) !== 0) {
            return true
        }
        return false;
    }

    // this
    // no

    //      4
    //  3       5
    //       4.5

    //      4
    //  3       4.5
    //                      5
    //                   4
    //               3     4.5
    rodaEsquerda(no) {
        let temp = no.direita;
        no.direita = temp.esquerda;
        temp.esquerda = no;

        if (no === this.esquerda) {
            this.esquerda = temp;
        } else {
            this.direita = temp;
        }
    }

    rodaDireita(no) {
        let temp = no.esquerda;
        no.esquerda = temp.direita;
        temp.direita = no;

        if (no === this.esquerda) {
            this.esquerda = temp;
        } else {
            this.direita = temp;
        }
    }

    rodaDireitaEsquerda(no) {
        no.rodaDireita(no.direita)
        this.rodaEsquerda(no)
    }
    rodaEsquerdaDireita(no) {
        no.rodaEsquerda(no.esquerda)
        this.rodaDireita(no)
    }

    equilibra(no) {
        if (no.fatorEquilibrio === -2 && no.esquerda.fatorEquilibrio === -1) {
            this.rodaDireita(no);
        } else if (no.fatorEquilibrio === 2 && no.direita.fatorEquilibrio === 1) {
            this.rodaEsquerda(no);
        } else if (no.fatorEquilibrio === -2 && no.esquerda.fatorEquilibrio === 1) {
            this.rodaEsquerdaDireita(no);
        } else if (no.fatorEquilibrio === 2 && no.direita.fatorEquilibrio === -1) {
            this.rodaDireitaEsquerda(no);
        }
    }
}

class ArvoreBinaria {
    #raiz
    
    insereNo(valor) {
        if (this.#raiz === undefined) {
            const novo = new No(valor);
            this.#raiz = novo;
        } else {
            if(this.#raiz.insere(valor)) {
                this.equilibra()
                console.log('inseriu...', valor, this.#raiz.fatorEquilibrio)
            }
        }
    }

    equilibra() {
        if (!this.#raiz) {
            return
        }
        const fakeParent = new No();
        fakeParent.esquerda = this.#raiz;
        fakeParent.equilibra(this.#raiz);

        this.#raiz = fakeParent.esquerda;
    }
        

        // Percorremos a árvore
        // Se o valor é maior que o valor do noAtual, 
            // o proximo noAtual é noAtual.direita
        // Caso Contrário
            // o próximo noAtual é noAtual.esquerda
        // Se formos definir o noAtual como undefined
        // noAtual.(...) = novo
    
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

console.log(arvore.toString());
console.log(arvore.procuraValor(7.5))

const arvore2 = new ArvoreBinaria();
arvore2.insereNo(1);
console.log(arvore2.toString());
arvore2.insereNo(3);
console.log(arvore2.toString());
arvore2.insereNo(4);
console.log(arvore2.toString());
arvore2.insereNo(5);
console.log(arvore2.toString());
arvore2.insereNo(6);
console.log(arvore2.toString());
arvore2.insereNo(7);
console.log(arvore2.toString());
arvore2.insereNo(7.5);
arvore2.insereNo(7.5);
arvore2.insereNo(7.5);
console.log(arvore2.toString());
arvore2.insereNo(8);

console.log(arvore2.toString());
console.log(arvore2.procuraValor(7.5))