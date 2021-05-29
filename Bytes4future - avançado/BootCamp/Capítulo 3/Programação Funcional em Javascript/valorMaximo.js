function valorMaximo(array){
    // escreve aqui a função
    return array.reduce((maior, e) => e > maior ? e : maior)
}