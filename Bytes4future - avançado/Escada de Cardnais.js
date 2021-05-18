function escadaComCardinais(dim) {
    let resultado = "";
    for (let i = 0; i < dim; i++) {
        const numEspacos = dim - i - 1;
        const numCardinais = dim - numEspacos;

        for (let j = 0; j < numEspacos; j++) {
            resultado = resultado + "_"
            console.log("Insere espaço ", j + 1)
            console.log(resultado)
        }
        for (let j = 0; j < numCardinais; j++) {
            resultado = resultado + "#"
            console.log("Insere # ", j + 1)
            console.log(resultado)
        }
        resultado = resultado
            + (i < dim - 1 ? "\n" : "")
        console.log("Termina linha ", i + 1)
    }
    return resultado;
}