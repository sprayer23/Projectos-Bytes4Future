function somaDiagonalSecundaria(matrizquadrada)  {
    let soma = 0;
    for (let i = 0; i < matrizquadrada.length; i++) {
        soma += matrizquadrada[matrizquadrada.length - 1 - i][i];
    }
    return soma
}

console.log(somaDiagonalSecundaria([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ]));