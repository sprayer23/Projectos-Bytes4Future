function partesDecimais(array){
    // escreve aqui a função
    return array.map(n => Math.floor((n % 1) * 100) / 100);
}