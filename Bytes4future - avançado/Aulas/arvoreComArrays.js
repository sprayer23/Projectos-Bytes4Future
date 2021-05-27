class ArvoreBinaria {
    #elementos = []

    #parent(indice) {
        return Math.floor((indice - 1) / 2)
    }

    #esquerda(indice) {
        return (indice * 2) + 1
    }

    #direita(indice) {
        return (indice * 2) + 2
    }

    insereNo(valor) {
        if (this.#elementos.length === 0) {
            this.#elementos[0] = valor;
        } else {
            let indiceAtual = 0;
            while (this.#elementos[indiceAtual] !== undefined ) {
                if (this.#elementos[indiceAtual] < valor) {
                    indiceAtual = this.#direita(indiceAtual);
                    console.log('ver à direita...', indiceAtual)
                } else {
                    indiceAtual = this.#esquerda(indiceAtual);
                    console.log('ver à esquerda...', indiceAtual)
                }
            }
            this.#elementos[indiceAtual] = valor;
        }
    }


    procuraValor(valor) {
        let indice = 0;
        while (this.#elementos[indiceAtual] !== undefined) {
            console.log('compara', this.#elementos[indiceAtual], 'com, valor')
            if (this.#elementos[indiceAtual] === valor) {
                return true
            }
            if (valor < this.#elementos[indiceAtual]) {
                indiceAtual = this.#esquerda(indiceAtual)
            }
            if (valor > this.#elementos[indiceAtual]) {
                indiceAtual = this.#direita(indiceAtual)
            }
        }
        return false
    }

    toString() {
        return this.#elementos;
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
// console.log(arvore.procuraValor(7.5))

// const arvore2 = new ArvoreBinaria();
// arvore2.insereNo(1);
// console.log(arvore2.toString());
// arvore2.insereNo(3);
// console.log(arvore2.toString());
// arvore2.insereNo(4);
// console.log(arvore2.toString());
// arvore2.insereNo(5);
// console.log(arvore2.toString());
// arvore2.insereNo(6);
// console.log(arvore2.toString());
// arvore2.insereNo(7);
// console.log(arvore2.toString());
// arvore2.insereNo(7.5);
// arvore2.insereNo(7.5);
// arvore2.insereNo(7.5);
// console.log(arvore2.toString());
// arvore2.insereNo(8);

// console.log(arvore2.toString());
// console.log(arvore2.procuraValor(7.5))