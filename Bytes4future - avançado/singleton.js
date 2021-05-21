class SingletonCalculadora {
    static #calculadora
    constructor() {
      if (SingletonCalculadora.#calculadora) {
        throw "Só pode existir uma instância...";
      }
    }
    static get calculadora() {
      if (!SingletonCalculadora.#calculadora) {
        SingletonCalculadora.#calculadora = new SingletonCalculadora();
      }
      return SingletonCalculadora.#calculadora;
    }
  }