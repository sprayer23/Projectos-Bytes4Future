class Candeeiro {
    #lampadaTopo
    #lampadaLateral
    #interruptorTopo = new Interruptor()
    #interruptorLateral = new Interruptor()

    inserirLampadaTopo(lampada) {
        if (!this.#lampadaTopo && lampada instanceof Lampada) {
            this.#lampadaTopo = lampada;
        }
    }
    inserirLampadaLateral(lampada) {
        if (!this.#lampadaLateral) {
            this.#lampadaLateral = lampada;
        }
    }
    removerLampadaTopo() {
        if (this.#lampadaTopo) {
            this.#lampadaTopo = null;
        }
    }
    removerLampadaLateral() {
        if (this.#lampadaLateral) {
            this.#lampadaLateral = null;
        }
    }

    ligarTopo() {
        this.#interruptorTopo.ligar();
        if (this.#interruptorTopo.ligado) {
            this.#lampadaTopo?.brilhar();
        }
    }
    ligarLateral() {
        this.#interruptorLateral.ligar();
        this.#lampadaLateral?.brilhar();
    }

    desligarTopo() {
        this.#interruptorTopo.desligar();
    }
    desligarLateral() {
        this.#interruptorLateral.desligar();
    }

    toString() {
        return `---
Topo: ${this.#interruptorTopo.ligado ? "Ligado" : "Desligado"} ${this.#lampadaTopo?.toString() ?? "Sem lâmpada"}
Lateral: ${this.#interruptorLateral.ligado ? "Ligado" : "Desligado"} ${this.#lampadaLateral?.toString() ?? "Sem lâmpada"}
---`
    }
}

class Interruptor {
    #ligado = false
    get ligado() {
        return this.#ligado;
    }
    ligar() {
        this.#ligado = true;
        console.log("interruptor ligado");
    }
    desligar() {
        this.#ligado = false;
        console.log("interruptor desligado");
    }
}

class Lampada {
    #intensidade
    #potencia
    #fundida = false
    
    constructor(intensidade, potencia) {
        this.#intensidade = intensidade;
        this.#potencia = potencia;
    }

    brilhar() {
        if (Math.random() < .3) {
            this.#fundida = true;
            console.log("A lâmpada fundiu-se!")
        }
        if (this.#fundida) {
            console.log(`A lâmpada está fundida.`);
        } else {
            console.log(`A brilhar com ${this.#intensidade}lm
A consumir ${this.#potencia}W`);
        }
        
    }

    toString() {
        return `Lâmpada ${this.#fundida ? "fundida " : ""}com intensidade ${this.#intensidade}lm e potência ${this.#potencia}W.`;
    }
}

const lampada = new Lampada(1000, 60)
const candeeiro = new Candeeiro();
console.log(candeeiro.toString())
candeeiro.inserirLampadaTopo(lampada);
candeeiro.inserirLampadaLateral(new Lampada(500, 30));
console.log(candeeiro.toString())
candeeiro.ligarTopo();
candeeiro.desligarTopo();
candeeiro.ligarTopo();
candeeiro.desligarTopo();
candeeiro.ligarTopo();
candeeiro.desligarTopo();
candeeiro.ligarTopo();
candeeiro.desligarTopo();
candeeiro.ligarTopo();
candeeiro.desligarTopo();
candeeiro.ligarTopo();
candeeiro.desligarTopo();
candeeiro.ligarTopo();
candeeiro.desligarTopo();
candeeiro.ligarTopo();
candeeiro.desligarTopo();
candeeiro.ligarTopo();
console.log(candeeiro.toString())
