class Inteiro {
    #inteiro
    constructor(inteiro) {
        if (Number.isNaN(Number(inteiro))) {
            this.#inteiro = 0;
        } else {
            this.#inteiro = Math.floor(inteiro);
        }
    }

    get valor() {return this.#inteiro}
    set valor(nv) {
        if (Number.isNaN(Number(nv))) {
            this.#inteiro = (this.#inteiro ? this.#inteiro : 0);
        } else {
            this.#inteiro = Math.floor(Number(nv));
        }
    }
}