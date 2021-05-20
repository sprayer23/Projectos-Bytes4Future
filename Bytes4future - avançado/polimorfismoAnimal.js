class Animal {
    fala()  {
        console.log('...')
    }
}

class Gato extends Animal {
    fala() {
        super.fala()
        console.log('miau')
    }
}

class Cao extends Animal {
    fala() {
        super.fala()
        console.log('auau')
    }
}

const gato = new Gato()
gato.fala()

const cao = new Cao()
cao.fala()

const animal = new Animal()
animal.fala()