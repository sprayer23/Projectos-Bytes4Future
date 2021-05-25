// Implementa a classe ParChaveValor que tem duas propriedades: chave e valor.

class ParChaveValor {
    #chave
    #valor
    constructor(chave, valor) {
        this.#chave = chave;
        this.#valor = valor;
    }

    get chave() {
        return this.#chave;
    }
    
    get valor() {
        return this.#valor;
    }

    set valor(novoValor) {
        this.#valor = novoValor;
    }

    toString() {
        return `(chave: ${this.chave}, valor: ${this.valor})`
    }
}

console.log(new ParChaveValor(1, 3).toString())
console.log(new ParChaveValor(2, 6).toString())

const par = new ParChaveValor(1, 3);
par.valor = 5
par.chave = 10
console.log(par.toString())

// Implementa a classe Mapa. Internamente, podes implementar o mapa como um array de ParChaveValor.

class Mapa {
    #pares = []
    definir(chave, valor) {
        // Exercício 1
        // Define o valor da chave como sendo o valor
        // Se a chave existir, substitui

        // 1. remover a chave
        // const novo = new ParChaveValor(chave, valor);
        // const paresSC = this.#pares.filter(p => p.chave !== chave)
        // const paresCPcv = paresSC.concat(novo)
        // this.#pares = paresCPcv;

        this.#pares = this.#pares
            .filter(p => p.chave !== chave)
            .concat(new ParChaveValor(chave, valor))
    }

    obter(chave) {
        // Exercício 2
        // Obtem o valor associado a uma chave
        // Se a chave não existir, retorna undefined
        return this.#pares.find(p => p.chave === chave)?.valor
    }

    eliminar(chave) {
        // Exercício 3
        // Elimina o par que tem a chave indicada
        // Se não existir, não faz nada
        const valor = this.obter(chave);
        this.#pares = this.#pares.filter(p => p.chave !== chave)
        return valor;
    }

    existe(chave) {
        // Exercício 4
        // Retorna true se a chave existir, false caso contrário
    }

    toString() {
        return `Mapa {
        ${this.#pares.map(p => p.toString()).join('\n\t')}
}`
    }
}

const mapa = new Mapa();
console.log(mapa.toString())
mapa.definir(1, 2);
console.log(mapa.toString())
mapa.definir(1, 3);
console.log(mapa.toString())
mapa.definir(2, 3);
console.log(mapa.toString())
console.log(mapa.obter(2))
mapa.definir(2, 8);
console.log(mapa.eliminar(2))
console.log(mapa.toString())
