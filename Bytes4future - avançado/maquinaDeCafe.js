class MaquinaDeCafe {
    #custoDoCafe
    #centimosEmEspera
    #dosesAgua
    #dosesCafe
    #depositoReceitas
    #centimosParaTroco
    #estadoDepositoBorra
    #capacidadeDepositoBorra
    #esvaziaDepositoBorra
    #adicionaAgua
    #adicionaCafe
    #adicionaTroco
    #capacidadeAgua
    #capacidadeCafe

    constructor() {
        this.#custoDoCafe = 60;
        this.#centimosEmEspera = 0;
        this.#dosesAgua = 10;
        this.#dosesCafe = 10;
        this.#depositoReceitas = 0;
        this.#estadoDepositoBorra = 0;
        this.#capacidadeDepositoBorra = 10;
        this.#centimosParaTroco = 100000;
        this.#capacidadeAgua = 10;
        this.#capacidadeCafe = 10;
    }

    fazCafe() {
        const troco = this.#centimosEmEspera - this.#custoDoCafe;
        if (troco < 0) {
            console.log(`Insira mais ${troco * -1} cêntimos.`)
            return false
        }
        // Verifica se tem doses de agua e café
        if (this.#dosesAgua <= 0) {
            console.log(`Falta água.`)
            return false;
        }
        if (this.#dosesCafe <= 0) {
            console.log(`Falta café.`)
            return false;
        }
        if (this.#dosesAgua <= 0 && this.#dosesCafe <= 0) {
            console.log(`Falta água e café.`)
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
        // esvaziar o depósito de borra
        esvaziaDepositoBora()   {
            this.#estadoDepositoBorra = 0
            return true
        }
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
}

const mdc = new MaquinaDeCafe();
mdc.recebeCentimos(600);
mdc.fazCafe();
console.log(mdc.toString())