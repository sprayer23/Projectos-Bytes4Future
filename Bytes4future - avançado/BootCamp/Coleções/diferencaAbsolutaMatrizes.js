function somaDiagonalPrincipal(matrizquadrada){
    let soma = 0;
    for (let i = 0; i < matrizquadrada.length; i++){
        soma += matrizquadrada[i][i];
    }
    return soma;

}
function somaDiagonalSecundaria(matrizquadrada){
    let soma = 0;
    for (let i = 0; i < matrizquadrada.length; i++){
        soma += matrizquadrada[matrizquadrada.length - 1 -i][i];
    }
    return soma;
}
function diferencaAbsolutaEntreDiagonais(matrizquadrada) {
    // escreve aqui a função
     const diff = somaDiagonalPrincipal(matrizquadrada) - somaDiagonalSecundaria(matrizquadrada)
    if (diff < 0){
        return diff * -1;
    }
    return diff;
}