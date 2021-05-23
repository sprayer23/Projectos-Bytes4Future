class SoInteiro {
    #inteiro

    constructor(num)    {
        if (Number.isInteger(num))  {
            this.#inteiro = num;
        } else {
            this.#inteiro = 0;
        }
    }

    get inteiro() {
        return this.#inteiro;
    }

    set inteiro(num)    {
        if (Number.isInteger(num)) {
            this.#inteiro = num;
       }   else if (!Number.isNaN(Number(num)))  {
        console.log("É número");
        this.#inteiro = Math.round(num);
        } else if (!this.#inteiro) {
            this.#inteiro = 0;
        }
    }
}

const si = new SoInteiro(1);
console.log(si.inteiro);
//const si = 3;
console.log(si.inteiro);
//si.inteiro = 'a';
console.log(si.inteiro);
console.log(new SoInteiro("").inteiro);
console.log(new SoInteiro(5.4).inteiro);