class Porta {
    #trinco
    
    get trinco() { return this.#trinco }

    trancar()   {
        this.#trinco = Boolean(estado);
    }

    destrancar()    {
        this.#destrancar = false;
    }
}

class PortaBlindada extends Porta {
    #trincoSuperior 
    #trincoInferior 
    #trincoTraseiro 
}