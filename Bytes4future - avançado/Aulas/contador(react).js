import React from "react";

class Contador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0
        }
        this.incrementa = this.incrementa.bind(this)
    }

    incrementa() {
        this.setState((state) => ({
            contador: state.contador + 1
        }))
    }

    render() {
        // this.props.maximo
        // 1. Adicionar botão para decrementar
        // 2. Garantir que o contador não desce abaixo de 0, nem sobe acima de this.props.maximo
        return (
            <section>
                <p>{this.state.contador}</p>
                <button onClick={this.incrementa}>Incrementar</button>
            </section>
        )
    }
}

export default Contador;