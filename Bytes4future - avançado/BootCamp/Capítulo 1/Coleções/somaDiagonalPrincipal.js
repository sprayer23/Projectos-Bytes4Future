function somaDiagonalPrincipal(matrizquadrada)  {
    let soma = 0;
    for (let i = 0; i < matrizquadrada.length; i++) {
        soma += matrizquadrada[i][i];
    }
    return soma
}


console.log(somaDiagonalPrincipal([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ]));