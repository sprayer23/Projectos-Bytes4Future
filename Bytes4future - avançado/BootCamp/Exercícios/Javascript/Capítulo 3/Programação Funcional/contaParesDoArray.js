function contaParesDoArray(array){
    // escreve aqui a função
    if (array.length === 0) return 0;
    if (array[0] % 2 === 1) return contaParesDoArray(array.slice(1))
    if (array[0] % 2 === 0) return 1 + contaParesDoArray(array.slice(1))
}