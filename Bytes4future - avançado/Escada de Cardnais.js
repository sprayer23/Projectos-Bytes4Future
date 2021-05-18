function escadasComCardinais(dim){
    let resultado = "";
    for (let i = 0; i < dim; i++){
        const numEspaços= dim - i - 1;
        const numCardinais = dim - numEspaços;
       // resultado = resultado + i + `${numEspaços}, ${numCardinais}` + (i < dim - 1 ? "\n" : "");
        for (let j = 0; j < numEspaços; j++){
            resultado = resultado + " "
        }
        for (let j = 0; j < numCardinais; j++){
            resultado = resultado + "#"
        }
        resultado = resultado
            + (i < dim - 1 ? "\n" : "")
    }
    return resultado;
}

console.log(escadasComCardinais(6))