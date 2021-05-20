class MaquinaDeCafe {
    #custoDoCafe
    #centimosEmEspera
    #dosesDeAgua
    #dosesDeCafe
    #depositoReceitas
    #centimosParaTroca
    #depositoBorra
    

    constructor()   {
        this.#custoDoCafe = 60;
        this.#centimosEmEspera = 0;
        this.#dosesDeAgua = 10;
        this.#dosesDeCafe = 10;
        this.#depositoReceias = 0;
        this.#centimosParaTroco = 100000;
        this.#depositoBorra = 10;
    }

    fazCafe(){
        const troco = this.centimosEmEspera - this.custoDoCafe;
        if(troco < 0)   {
            console.log(`Insira mais ${-troco} cêntimos`)
            return false;
        }

        // Verifica se tem doses de água e café

        if ( this.#dosesDeAgua <= 0)    {
            console.log("Falta água");
            return false
        }

        if ( this.#dosesDeCafe <= 0)    {
            console.log("Falta café");
            return false
        }

        if (!(this.#dosesDeAgua > 0 && this.#dosesDeCafe > 0)) {
            console.log("Falta água ou café");
            return false;
        }

        if (this.centimosParaTroco < troco) {
            console.log("Não tem troco.");
            return false;
        }
        if (this.#estadoDepositoBorra >= this.#CapacidadeDepositoBorra) {
            console.log("Limpe a máquina.");
            return false;
        }
    }

    

    // Guardar #centimosEmEspera no depósito de Receitas
    this.#depositoReceias += this.#centimosEmEspera;
    this.#centimosEmEspera = 0;
    // Devolver o troco
    this.devolveTroco(troco);
    // Consumir uma dose de água
    this.#dosesDeAgua -= 1;
    // Consumir uma dose de café
    this.#dosesDeCafe -= 1
    // Incrementar estado do depósito de borra
    this.#estadoDepositoBorra += 1
    // Imprimir "A tirar café..."
    


recebeCentimos(centimos)    {
    this.centimosEmEspera += centimos;
}

devolveTroco()  {
    this.#centimosParaTroco -= troco;
}

cancelaOperacao()   {
    const centimosADevolver = this.#centimosEmEspera;
    this.#centimosEmEspera = 0;
}

}

const mdc = new MaquinaDeCafe();
mdc.recebeCentimos(30);
mdc.fazCafe();
mdc.cancelaOperacao();
mdc.fazCafe();