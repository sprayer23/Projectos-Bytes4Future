// Implementa a classe MaquinaDeCapsulas onde podes introduzir uma Capsula e é extraído o conteúdo da cápsulo e utilizada uma dose de água.

class MaquinaDeCapsulas {
    #capsula
    
    introduzirCapsula(capsula) {
        if (!this.#capsula) {
            this.#capsula = capsula;
        } else {
            console.log("A máquina já tem uma cápsula.");
        }
        
    }

    removerCapsula() {
        if (this.#capsula) {
            const capsulaAntiga = this.#capsula;
            this.#capsula = undefined;
            
            return capsulaAntiga;
        }
        console.log("A máquina não tem cápsula.");
    }

    fazBebida() {
        if (!this.#capsula) {
            console.log("A tirar água quente");
        } else {
            console.log("A fazer bebida com " + this.#capsula.extrairConteudo());
        }
    }
}

class Capsula {
    #conteudo
    constructor(conteudo) {
        this.#conteudo = conteudo;
    }

    get conteudo() {
        return this.#conteudo;
    }

    extrairConteudo() {
        const conteudoOriginal = this.#conteudo;
        this.#conteudo += "-"
        return conteudoOriginal;
    }

    equals(outraCapsula) {
        return this.conteudo === outraCapsula.conteudo;
    }
}

class CapsulaCafeBuondi extends Capsula {
    constructor() {
        super("Café Buondi")
    }
}

class CapsulaChaVerdeLipton extends Capsula {
    constructor() {
        super("Chá Verde Lipton")
    }
}

const capsula = new CapsulaCafeBuondi();
const capsula2 = new CapsulaChaVerdeLipton();
const maquina1 = new MaquinaDeCapsulas();
const maquina2 = new MaquinaDeCapsulas();

maquina1.introduzirCapsula(capsula);
maquina1.fazBebida();

let capsulaRemovida = maquina1.removerCapsula();
console.log(capsula === capsulaRemovida)
maquina2.introduzirCapsula(capsulaRemovida);
maquina2.fazBebida();
maquina1.fazBebida();

maquina1.introduzirCapsula(capsula2)
maquina1.fazBebida();
maquina2.removerCapsula();
maquina2.introduzirCapsula(new CapsulaCafeBuondi())
maquina2.fazBebida();

console.log(new CapsulaCafeBuondi() === new CapsulaCafeBuondi())
console.log(new CapsulaCafeBuondi().equals(new CapsulaCafeBuondi()))