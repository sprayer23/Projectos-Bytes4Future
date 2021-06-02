class BoosterPack {
    #cards

    constructor(cards) {
        this.#cards = cards;
    }

    open() {
        const cards = this.#cards;
        this.#cards = []

        return cards;
    }
}

class BoosterPackFactory {
    constructor(colecao) {
        this.colecaoDeCartas = colecao
    }

    create(num) {
        function randomIndex(array) {
            return Math.floor(array.length * Math.random())
        }

        let pack = [];

        for(let i = 0; i < num; i++) {
            pack.push(this.colecaoDeCartas[randomIndex(this.colecaoDeCartas)])
        }

        return new BoosterPack(pack);
    }
}


const factory1 = new BoosterPackFactory([
    "Pikachu",
    "Charizard",
    "Bulbasour",
    "Blastoise",
    "Squirtle",
    "Snorlax",
])

const factory2 = new BoosterPackFactory([
    "Raikou",
    "Raichu",
    "Rayquaza",
    "Melmetal",
    "Lapras",
    "Infernape",
    "Jigglypuff",
])

const booster1 = factory1.create(3);
const booster2 = factory2.create(3);
console.log(booster1.open())
console.log(booster2.open())