class Animal {
    anda() {
        console.log('andar');
    }
}
class Gato extends Animal { }

const gato = new Gato()
gato.anda() // andar