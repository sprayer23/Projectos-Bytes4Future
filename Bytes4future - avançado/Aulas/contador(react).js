import React from "react";
import './App.css'

class Contador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0
        }
        this.incrementa = this.incrementa.bind(this)
        this.decrementa = this.decrementa.bind(this)
    }

    incrementa() {
        this.setState((state) => {
            return {
                contador: Math.min(
                    state.contador + 1,
                    this.props.maximo)
            }
        })
    }
    decrementa() {
        this.setState((state) => {
            return {
                contador: Math.max(
                    state.contador - 1,
                    this.props.minimo)
            }
        })
    }

    render() {
        // this.props.maximo
        // 1. Adicionar botão para decrementar
        // 2. Garantir que o contador não desce abaixo de 0, nem sobe acima de this.props.maximo
        return (
            <section>
                <p>{this.state.contador}</p>
                <button 
                    disabled={this.state.contador >= this.props.maximo}
                    onClick={this.incrementa}>Incrementar</button>
                <button 
                    disabled={this.state.contador <= this.props.minimo}
                    onClick={this.decrementa}>
                        Decrementar
                </button>
            </section>
        )
    }
}

export default Contador;