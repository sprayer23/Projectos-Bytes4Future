function somaDiagonalPrincipal(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i], matriz[i][i])
        soma += matriz[i][i];
    }
    return soma;
}

function somaDiagonalSecundaria(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        soma += matriz[matriz.length - 1 - i][i];
    }
    return soma;
}
