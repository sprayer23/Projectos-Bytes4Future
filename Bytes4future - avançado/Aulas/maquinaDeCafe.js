class MaquinaDeCafe {
    #custoDoCafe
    #centimosEmEspera
    #dosesAgua
    #dosesCafe
    #depositoReceitas
    #centimosParaTroco
    #capacidadeCentimosParaTroco
    #estadoDepositoBorra
    #capacidadeDepositoBorra
    #capacidadeAgua
    #capacidadeCafe

    constructor(custo, agua, cafe, borras, troco) {
        this.#custoDoCafe = custo;
        this.#capacidadeAgua = agua;
        this.#capacidadeCafe = cafe;
        this.#capacidadeDepositoBorra = borras;
        this.#capacidadeCentimosParaTroco = troco;

        this.#centimosEmEspera = 0;
        this.#dosesAgua = 0;
        this.#dosesCafe = 0;
        this.#depositoReceitas = 0;
        this.#estadoDepositoBorra = 0;
        this.#centimosParaTroco = 0;
    }

    fazCafe() {
        const troco = this.#centimosEmEspera - this.#custoDoCafe;
        if (troco < 0) {
            console.log(`Insira mais ${troco * -1} cêntimos.`)
            return false
        }
        // Verifica se tem doses de agua e café
        if (this.#dosesAgua <= 0 && this.#dosesCafe <= 0) {
            console.log(`Falta água e café.`)
            return false;
        }
        if (this.#dosesAgua <= 0) {
            console.log(`Falta água.`)
            return false;
        }
        if (this.#dosesCafe <= 0) {
            console.log(`Falta café.`)
            return false;
        }
        if (this.#centimosParaTroco < troco) {
            console.log(`Não tem troco.`)
            return false;
        }
        if (this.#estadoDepositoBorra >= this.#capacidadeDepositoBorra) {
            console.log("Limpe a máquina.")
            return false;
        }

        // Guardar #centimosEmEspera no depósito de Receitas
        this.#depositoReceitas += this.#centimosEmEspera;
        // Devolver o troco
        this.devolveTroco();
        // Limpa centimosEmEspera
        this.#centimosEmEspera = 0;

        // Consumir uma dose de agua
        this.#dosesAgua -= 1; //--
        // Consumir uma dose de café
        this.#dosesCafe -= 1; //--
        // Incrementar estado do depósito de borra
        this.#estadoDepositoBorra += 1;
        // Imprimir "A tirar café..."
        console.log("A tirar café...");
        return true;
    }

    recebeCentimos(centimos) {
        this.#centimosEmEspera += centimos;
        console.log(`Foram inseridos ${centimos}, existem ${this.#centimosEmEspera} cêntimos em espera.`)
    }

    devolveTroco() {
        const troco = this.#centimosEmEspera - this.#custoDoCafe;
        this.#centimosParaTroco -= troco;
        console.log(`Troco Devolvido (${troco})`)
    }

    cancelaOperacao() {
        const centimosADevolver = this.#centimosEmEspera;
        this.#centimosEmEspera = 0;
        console.log("Operação Cancelada")
        return centimosADevolver;
    }

    toString() {
        return `Custo do Café: ${this.#custoDoCafe}
Depósito Água: ${this.#dosesAgua}
Depósito Café: ${this.#dosesCafe}
Depósito Borra: ${this.#estadoDepositoBorra}/${this.#capacidadeDepositoBorra}
Receitas: ${this.#depositoReceitas}
Cêntimos em Espera: ${this.#centimosEmEspera}
Cêntimos para Troco: ${this.#centimosParaTroco}
Total cêntimos na máquina: ${this.#centimosParaTroco + this.#depositoReceitas}`
    }

    // esvaziaDepositoBorra() que esvazia o deposito de borra
    esvaziaDepositoBorra() {
        this.#estadoDepositoBorra = 0;
        return true;
    }

    // adicionaAgua(doses) que adiciona n doses de água ao depósito
    adicionaAgua(doses) {
        if (this.#dosesAgua + doses <= this.#capacidadeAgua) {
            this.#dosesAgua += doses;
        }
        return this.#dosesAgua;
    }
    // adicionaCafe(doses) que adiciona n doses de café ao depósito
    adicionaCafe(doses) {
        if (this.#dosesCafe + doses <= this.#capacidadeCafe) {
            this.#dosesCafe += doses;
        }
        return this.#dosesCafe;
    }

    // adicionaTroco(centimos) que adiciona n centimos ao depósito do troco

    adicionaTroco(centimos) {
        if (this.#centimosParaTroco + centimos 
            <= this.#capacidadeCentimosParaTroco) {
            this.#centimosParaTroco += centimos;
        }
        return this.#centimosParaTroco;
    }
}

// const mdc = new MaquinaDeCafe(10, 10, 10, 10, 100000);
const mdc = new MaquinaDeCafe(50, 200, 200, 200, 1000000);
mdc.recebeCentimos(600);
mdc.fazCafe();
console.log(mdc.toString())
mdc.adicionaAgua(50)
mdc.adicionaCafe(50)
mdc.fazCafe();
console.log(mdc.toString())
mdc.cancelaOperacao()
console.log(mdc.toString())
mdc.recebeCentimos(60)
mdc.fazCafe()
console.log(mdc.toString())
mdc.adicionaTroco(500)
mdc.recebeCentimos(200)
mdc.fazCafe()
console.log(mdc.toString())