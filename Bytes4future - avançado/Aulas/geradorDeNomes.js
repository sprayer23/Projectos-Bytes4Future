import React from "react"

class GeradorDeNomes extends React.Component {
    #adjetivos = [
        "Espetacular",
        "Escanzelado",
        "Esfomeado"
    ]
    #nomes = [
        "Asdrubal",
        "Gertrudes",
        "Genopepa",
    ]

    constructor(props) {
        super(props);
        this.state = {
            aleatorio: this.gerarNome()
        }
        this.gerar = this.gerar.bind(this);
    }

    geraAleatorio({maximo, minimo}) {
        return Math.floor(
            (maximo - minimo + 1)
            * Math.random()
        ) + minimo;
    }

    obtemAleatorio(array) {
        return array[this.geraAleatorio({minimo: 0, maximo: array.length - 1})]
    }

    gerarNome() {
        return `${this.obtemAleatorio(this.#nomes)} ${this.obtemAleatorio(this.#adjetivos)}`
    }

    gerar() {
        this.setState({
            aleatorio: this.gerarNome()
        })
    }

    render() {
        return (
            <section>
                <p>{this.state.aleatorio}</p>
                <button onClick={this.gerar}>
                    Gerar
                </button>
            </section>
        )
    }
}

export default GeradorDeNomes;
