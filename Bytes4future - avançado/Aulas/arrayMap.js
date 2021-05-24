function contaElementos(arr) {
    const contaElementos = (mapa, elemento) => {
        const contagem = mapa.has(elemento)
        ? mapa.get(elemento) + 1
        : 1
        return new Map([
            ...mapa.entries(), 
            [elemento, contagem]
        ])
    }
    return  arr.reduce(contaElementos, new Map())
}

console.log(contaElementos([1, 2, 1]))