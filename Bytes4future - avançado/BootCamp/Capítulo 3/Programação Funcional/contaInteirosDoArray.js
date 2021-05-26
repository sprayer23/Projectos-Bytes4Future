function contaInteirosDoArray(array){
    // escreve aqui a função
    if (array.length === 0) return 0;
    if (array[0]) return contaInteirosDoArray(Math.round(array))
}