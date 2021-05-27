class Fila {
    #elementos = []
    
    toString() {
        return this.#elementos.toString()
    }

    insere(dados) {
        this.#elementos = this.#elementos.concat(dados)
    }

    remove() {
        const [inicio, ...resto] = this.#elementos;
        if (!inicio) { return undefined; }
        this.#elementos = resto;
        return inicio;
    }

    get eVazia() {
        return this.#elementos.length === 0;
    }
}

class Vertice {
    #valor
    #descoberto
    constructor(valor) {
        this.#valor = valor;
        this.#descoberto = false;
    }
    get valor() {
        return this.#valor;
    }

    get descoberto() {
        return this.#descoberto;
    }
    marcarComoDescoberto() {
        console.log(this.valor + " foi descoberto")
        this.#descoberto = true;
    }
    desmarcarComoDescoberto() {
        this.#descoberto = false;
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
    encontraVertice(valor) {
        return this.#vertices.find(v => v.valor === valor)
    }
    limpaDescobertos() {
        this.#vertices.forEach(v => v.desmarcarComoDescoberto())
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

const joaoa = new Pessoa("João A")
const joaob = new Pessoa("João B")
const sofia = new Pessoa("Sofia")
const alberto = new Pessoa("Alberto")
const joaquim = new Pessoa("Joaquim")
const chico = new Pessoa("Chico")
const mariana = new Pessoa("Mariana")
const gertrudes = new Pessoa("Gertrudes")

const grafo = new Grafo();
grafo.insereVertice(joaoa);
grafo.insereVertice(joaob);
grafo.insereVertice(sofia);
grafo.insereVertice(alberto);
grafo.insereVertice(joaquim);
grafo.insereVertice(chico);
grafo.insereVertice(mariana);
grafo.insereVertice(gertrudes);

grafo.insereAresta(alberto, joaquim, 1);
grafo.insereAresta(sofia, mariana, 1);
grafo.insereAresta(chico, gertrudes, 1);
// grafo.insereAresta(joaoa, sofia, 1);
grafo.insereAresta(joaoa, mariana, 1);
grafo.insereAresta(joaoa, joaquim, 1);
grafo.insereAresta(joaoa, chico, 1);
grafo.insereAresta(joaoa, alberto, 1);
// grafo.insereAresta(joaob, sofia, 1);

grafo.insereAresta(gertrudes, joaob, 1);
grafo.insereAresta(alberto, sofia, 1);
grafo.insereAresta(joaquim, gertrudes, 1);
grafo.insereAresta(mariana, chico, 1);
grafo.insereAresta(alberto, chico, 1);

console.log(depthFirstSearch(grafo, grafo.encontraVertice(joaoa), sofia)?.valor.toString())
console.log('---')
grafo.limpaDescobertos();
console.log(breathFirstSearch(grafo, grafo.encontraVertice(joaoa), sofia)?.valor.toString())

// DepthFirstSearch(A, v)
//   Marca v como descoberto
//   Se v é o objetivo
//     retorna v
//   Para cada vertice w filho de v
//     Se w não foi descoberto Então
//       retorna DepthFirstSearch(A, w)

function depthFirstSearch(grafo, vertice, procurado) {
    vertice.marcarComoDescoberto();
    if (vertice.valor === procurado) {
        return vertice;
    }
    const adjacentes = grafo.obtemAdjacentes(vertice.valor);
    for(const adj of adjacentes) {
        const w = grafo.encontraVertice(adj.valor)
        if (!w.descoberto) {
            const resultado = depthFirstSearch(grafo, w, procurado);
            if (resultado) {
                return resultado;
            }
        }
    }
}

// BreathFirstSearch(A, raiz) is
//   Seja Q uma Fila
//   Marcar raiz como descoberta
//     Q.adiciona(raiz)
//     Enquanto Q não estiver vazio
//       v := Q.proximo()
//       Se v é o objetivo
//         retorna v
//       Para cada vertice w filho de v
//         Se w não foi descoberto Então
//           Marca w como descoberto
//           Q.adiciona(w)
function breathFirstSearch(grafo, vertice, procurado) {
    const queue = new Fila();
    vertice.marcarComoDescoberto();
    queue.insere(vertice);
    while (!queue.eVazia) {
        let verticeAtual = queue.remove();
        console.log('Verifica ', verticeAtual.valor.toString())
        if (verticeAtual.valor === procurado) {
            return verticeAtual;
        }
        const adjacentes = grafo.obtemAdjacentes(verticeAtual.valor);
        console.log('Adjacentes', adjacentes.map(a => a.valor.toString()))
        for(const adj of adjacentes) {
            const w = grafo.encontraVertice(adj.valor)
            if (!w.descoberto) {
                w.marcarComoDescoberto();
                console.log('Insere ', w.valor.toString(), ' na fila')
                queue.insere(w);
            }
        }
    }
}