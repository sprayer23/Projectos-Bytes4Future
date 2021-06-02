import React from "react"

class GeradorDeNumeros extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aleatorio: this.geraAleatorio(props)
        }
        this.gerar = this.gerar.bind(this);
    }

    geraAleatorio({maximo, minimo}) {
        return Math.floor(
            (maximo - minimo + 1)
            * Math.random()
        ) + minimo;
    }

    gerar() {
        this.setState((state, props) => ({
            aleatorio: this.geraAleatorio(props)
        }))
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

export default GeradorDeNumeros;