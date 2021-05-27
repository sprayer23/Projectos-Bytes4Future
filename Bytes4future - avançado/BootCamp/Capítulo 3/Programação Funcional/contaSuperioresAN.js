function contaSuperioresAN(array, n){
    // escreve aqui a função
    if (array.length === 0) return 0;
    if (array[0] > n) return contaSuperioresAN((array.slice(1)), n) + 1;
    return contaSuperioresAN((array.slice(1)), n)
}