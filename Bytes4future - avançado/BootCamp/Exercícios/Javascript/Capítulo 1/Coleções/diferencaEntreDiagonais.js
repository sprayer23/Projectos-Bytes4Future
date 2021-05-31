function somaDiagonalPrincipal(matrizquadrada) {
    let soma = 0;
    for (let i = 0; i < matrizquadrada.length; i++) {
        soma += matrizquadrada[i][i];
    }
    return soma;
}

function diferencaEntreDiagonais(matrizquadrada) {
    // escreve aqui a função
    const somaPrincipal = somaDiagonalPrincipal(matrizquadrada);
    matrizquadrada.reverse();
    const somaSecundaria = somaDiagonalPrincipal(matrizquadrada);
    matrizquadrada.reverse();
    const diff = somaPrincipal - somaSecundaria
    return diff;
}