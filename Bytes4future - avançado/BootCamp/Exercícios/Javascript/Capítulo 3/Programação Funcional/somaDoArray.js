function somaDoArray(array){
    // escreve aqui a função
    if (array.length === 0) return 0;
    return array[0] + somaDoArray(array.slice(1))
}