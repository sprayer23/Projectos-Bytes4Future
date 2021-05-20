function somaDiagonalSecundaria(matrizquadrada)  {
    let soma = 0;
    for (let i = matrizquadrada.length - 1; i >= 0; i--) {
        soma += matrizquadrada[i][i];
    }
    return soma
}

console.log(somaDiagonalSecundaria([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ]));