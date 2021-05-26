class Vertice {
    #valor
    constructor(valor) {
        this.#valor = valor;
    }
    get valor() {
        return this.#valor;
    }

    toString() {
        return `${this.#valor.toString()}`
    }
}

console.log(new Vertice(1).valor)

class Aresta {
    #origem
    #destino
    #peso
    constructor(origem, destino, peso) {
        this.#origem = origem;
        this.#destino = destino;
        this.#peso = peso;
    }
    get origem() {
        return this.#origem;
    }
    get destino() {
        return this.#destino;
    }
    get peso() {
        return this.#peso;
    }

    toString() {
        return `${this.#origem.toString()} - ${this.peso} -> ${this.#destino.toString()}`
    }
}


// class Aresta {
//     constructor(origem, destino, peso) {
//         this.origem = origem;
//         this.destino = destino;
//         this.peso = peso;
//     }
// }
const a = new Aresta("a", "b", 5);
console.log(a.origem, a.destino, a.peso)
a.peso = 7
a.origem = "c"
console.log(a.origem, a.destino, a.peso)

class Grafo {
    #vertices
    #arestas
    constructor() {
        this.#vertices = []
        this.#arestas = []
    }
    insereVertice(valor) {
        const verticeExiste = this.#vertices
            .some(v => v.valor === valor);
        if (!verticeExiste) {
            this.#vertices.push(new Vertice(valor));
        }
    }
    insereAresta(origem, destino, peso) {
        if (origem === destino) return;
        // Obter vertice origem
        const verticeOrigem = this.#vertices.find(v => v.valor === origem)
        // Obter vertice destino
        const verticeDestino = this.#vertices.find(v => v.valor === destino)

        const arestaExiste = this.#arestas
            .some(a => a.origem === verticeOrigem 
                    && a.destino === verticeDestino)

        // Se ambos existirem
        if (verticeDestino && verticeOrigem && !arestaExiste) {
        //  Então, criamos uma Aresta e adicionamos a aresta no array this.#arestas
            this.#arestas.push(new Aresta(verticeOrigem, verticeDestino, peso))
        }

        // não inserir se já existir aresta
        // não inserir aresta com origem === destino
    }

    obtemAdjacentes(origem) {
        // Obter o vertice origem
        const verticeOrigem = this.#vertices
            .find(v => v.valor === origem)
        
        if (verticeOrigem) {
        // Obter todas as arestas cuja origem é o vertice origem
        // Mapear as arestas para um objeto que tenha o valor do destino e o peso
            const arestasComOrigem = this.#arestas
                .filter(a => a.origem === verticeOrigem);
            
            return arestasComOrigem.map(a => new Adjacente(a.destino.valor, a.peso));
        }
        return []
    }

    toString() {
        return `Vértices: ${this.#vertices.map(v => v.toString()).join(', ')}\n` + 
        `Arestas:\n${this.#arestas.map(a => a.toString()).join('\n')}`
    }
}

class Adjacente {
    #valor
    #peso
    constructor(valor, peso) {
        this.#valor = valor;
        this.#peso = peso;
    }
    get valor() {return this.#valor;}
    get peso() {return this.#peso;}
    toString() {
        return `${this.valor} - ${this.peso}`
    }
}

class Pessoa {
    #nome
    constructor(nome) {
        this.#nome = nome;
    }
    get nome() {
        return this.#nome;
    }
    toString() {
        return this.nome;
    }
}

const pessoa1 = new Pessoa("João A")
const pessoa3 = new Pessoa("João B")
const pessoa2 = new Pessoa("Mariana")
const pessoa4 = new Pessoa("Gertrudes")
const grafo = new Grafo();
console.log(grafo.toString())
grafo.insereVertice(pessoa1);
grafo.insereVertice(pessoa3);
grafo.insereVertice(pessoa2);
grafo.insereVertice(pessoa4);
grafo.insereAresta(pessoa1, pessoa2, 5);
grafo.insereAresta(pessoa1, pessoa3, 5);
grafo.insereAresta(pessoa2, pessoa1, 1);
grafo.insereAresta(pessoa4, pessoa2, 10);
grafo.insereAresta(pessoa2, pessoa4, 10);

grafo.insereAresta(pessoa4, pessoa4, 10); // Não insere
grafo.insereAresta(pessoa2, pessoa4, 10); // Não insere

console.log(grafo.obtemAdjacentes(pessoa1).map(a => a.toString()))
console.log(grafo.obtemAdjacentes(pessoa2).map(a => a.toString()))
console.log(grafo.obtemAdjacentes(pessoa3).map(a => a.toString()))
console.log(grafo.obtemAdjacentes(pessoa4).map(a => a.toString()))

console.log(grafo.obtemAdjacentes(pessoa2)
    .map(a => grafo.obtemAdjacentes(a.valor))
    .map(a => a.toString()))

console.log(grafo.toString())