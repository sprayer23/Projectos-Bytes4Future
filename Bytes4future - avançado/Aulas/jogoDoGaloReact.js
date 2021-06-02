import React from "react";
import { transpor } from "./util";
import "./JogoDoGalo.css"

class JogoDoGalo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      proximoJogador: "X",
      tabuleiro: [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
      ]
    }

    this.registaJogada = this.registaJogada.bind(this);
    this.obtemPerguntaProximoJogador = this.obtemPerguntaProximoJogador.bind(this);
    this.clear = this.clear.bind(this);
  }

  render() {
    return (
      <>
        <table>
          <tbody>
            {
              this.state.tabuleiro.map((linha, i) => (
                <tr key={i}>
                  {
                    linha.map((celula, j) => (
                      <td key={j}
                          className={celula.toLowerCase()}
                          onClick={() => this.registaJogada(i + 1, j + 1)}>
                        {celula}
                      </td>
                    ))
                  }
                </tr>
              ))
            }
          </tbody>
        </table>
        <p>{this.obtemPerguntaProximoJogador()}</p>
        <button onClick={this.clear}>Começar de Novo</button>
      </>
    )
  }

  clear() {
    this.setState({
      proximoJogador: "X",
      tabuleiro: [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
      ]
    })
  }

  obtemPerguntaProximoJogador() {
    if (this.jogoTerminado()) {
      const vencedor = this.obtemVencedor();
      if (vencedor === undefined) {
        return "Empate";
      }
      return `O jogador ${vencedor} venceu!`
    }
    return `Jogador ${this.state.proximoJogador}, qual é a tua jogada?`
  }

  registaJogada(linha, coluna) {
    // linha e coluna entre 1 e 3
    this.setState((state) => {
      if (state.tabuleiro[linha - 1][coluna - 1] === " " && !this.jogoTerminado()) {
        return {
          tabuleiro: state.tabuleiro.map((l, i) => {
            if (i === linha - 1) {
              return l.map((c, j) => {
                if (j === coluna - 1) {
                  return state.proximoJogador;
                }
                return c
              })
            }
            return l;
          }),
          proximoJogador: state.proximoJogador === "X" ? "O" : "X"
        };
      }
      return {};
    })
  }

  get jogadorAtual() {
    return this.state.proximoJogador;
  }

  jogoTerminado() {
    // 1ª Alguem ganhou
    // 2ª já não há jogadas possíveis
    return this.obtemVencedor() !== undefined
      || !this.state.tabuleiro.some(linha =>
        linha.some(e => e === " "))
  }

  obtemVencedor() {
    const linhas = []
    for (const linha of this.state.tabuleiro) {
      linhas.push(linha.join(''))
    }
    for (const coluna of transpor(this.state.tabuleiro)) {
      linhas.push(coluna.join(''))
    }
    let diagonal = ""
    for (let i = 0; i < this.state.tabuleiro.length; i++) {
      diagonal += this.state.tabuleiro[i][i]
    }
    linhas.push(diagonal)
    let diagonalInversa = ""
    for (let i = 0; i < this.state.tabuleiro.length; i++) {
      diagonalInversa += this.state.tabuleiro[i][this.state.tabuleiro.length - 1 - i]
    }
    linhas.push(diagonalInversa)

    if (linhas.some(l => l === "XXX")) {
      return "X"
    } else if (linhas.some(l => l === "OOO")) {
      return "O"
    } else {
      return undefined
    }
  }
}

export default JogoDoGalo