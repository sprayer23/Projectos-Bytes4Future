// Começa por pensar que membros precisas para:

// Ver tabuleiro no terminal
// Ver pergunta no terminal
// Registar jogada
// Saber quem é o jogador atual
// Saber se o jogo terminou
// Saber quem é o vencedor
// E cria a estrutura da classe

class JogoDoGalo {
    #proximoJogador
    #tabuleiro
    constructor() {
        this.#proximoJogador = "X";
        this.#tabuleiro = [
            [ " ", " ", " "],
            [ " ", " ", " "],
            [ " ", " ", " "],    
        ]
    }

    toString() {
        // retorna a string que representa o estado atual do jogo
        return this.#tabuleiro
            .map(linha => linha.join("|"))
            .join("\n")
    }

    obtemPerguntaProximoJogador() {
        return `Jogador ${this.#proximoJogador}, qual é a tua jogada?`
    }

    // registaJogada(pos) {
    //     // pos é um número entre 0 e 8
    //     const linha = Math.floor(pos / 3);
    //     const coluna = pos % 3;
    //     if (this.#tabuleiro[linha][coluna] === " ") {
    //         this.#tabuleiro[linha][coluna] = this.#proximoJogador;
    //         this.#proximoJogador = this.#proximoJogador === "X" ? "O" : "X"
    //     }
    // }
    registaJogada(linha, coluna) {
        // linha e coluna entre 1 e 3
        if (this.#tabuleiro[linha - 1][coluna - 1] === " ") {
            this.#tabuleiro[linha - 1][coluna - 1] = this.#proximoJogador;
            this.#proximoJogador = this.#proximoJogador === "X" ? "O" : "X"
        }
    }

    get jogadorAtual() {
        return this.#proximoJogador;
    }

    jogoTerminado() {
        // 1ª Alguem ganhou
        // 2ª já não há jogadas possíveis
    }

    obtemVencedor() {
        const linhas = []
        for (const linha of this.#tabuleiro) {
            linhas.push(linha.join(''))
        }
        for (const coluna of transpor(this.#tabuleiro)) {
            linhas.push(coluna.join(''))
        }
        let diagonal = ""
        for (let i = 0; i < this.#tabuleiro.length; i++) {
            diagonal += this.#tabuleiro[i][i]
        }
        linhas.push(diagonal)
        let diagonalInversa = ""
        for (let i = 0; i < this.#tabuleiro.length; i++) {
            diagonalInversa += this.#tabuleiro[i][this.#tabuleiro.length - 1 - i]
        }
        linhas.push(diagonalInversa)

        if (linhas.some(l === "XXX")) {
            return "X"
        } else if (linhas.some(l === "OOO")) {
            return "O"
        } else {
            return undefined
        }
    }
}

function transpor(matriz) {
    // Retorna matriz transposta
    let transposta = []
    for(let i = 0; i < matriz.length; i++) {
        let coluna = []
        for (let j = 0; j < matriz.length; j++) {
            const elemento = matriz[j][i];
            coluna.push(elemento);            
        }
        transposta.push(coluna);
    }
    return transposta;
}

const jogo = new JogoDoGalo();
console.log(jogo.toString())
console.log(jogo.obtemPerguntaProximoJogador())
jogo.registaJogada(3, 3)
console.log(jogo.toString())
console.log(jogo.obtemPerguntaProximoJogador())
jogo.registaJogada(2, 2)
console.log(jogo.toString())
console.log(jogo.obtemPerguntaProximoJogador())
jogo.registaJogada(3, 2)
console.log(jogo.toString())
console.log(jogo.obtemPerguntaProximoJogador())
jogo.registaJogada(2, 1)
console.log(jogo.toString())
console.log(jogo.obtemPerguntaProximoJogador())
jogo.registaJogada(3, 1)
console.log(jogo.toString())
console.log(jogo.obtemPerguntaProximoJogador())
console.log(jogo.obtemVencedor())
// console.log(jogo.jogadorAtual)