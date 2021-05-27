function contaInteirosDoArray(array){
    // escreve aqui a função
    if (array.length === 0) return 0;
    if (Number.isInteger(array[0])) return contaInteirosDoArray(array.slice(1)) + 1;
    if (Number.isInteger(array[0])) return contaInteirosDoArray(array.slice(1));
}