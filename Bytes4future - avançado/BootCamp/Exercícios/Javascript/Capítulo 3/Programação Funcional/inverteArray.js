function inverteArray(array){
    // escreve aqui a função
    if(array.length === 0) return [];
    return inverteArray(array.slice(1)).concat(array[0]);
}