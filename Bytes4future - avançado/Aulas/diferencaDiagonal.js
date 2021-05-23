function diferencaDiagonal(matriz)   {
    // 1. Calcular a soma da Diagonal Principal
    const somaPrincipal = somaDiagonalPrincipal(matriz);
    // 2. Calcular a soma da Diagonal Secundária
    matriz.reverse();
    const somaSecundaria = somaDiagonalPrincipal(matriz);
    matriz.reverse();
    // 3. Calcular a diferença entre as diagonais
    const diff = somaPrincipal - somaSecundaria
    // 4. Se a diferença for menor que 0
    if (diff < 0) {
    // Então retorna a diferença * -1
    return diff * -1
    } else {
    // Senão retornar a diferença
            return diff
    }
}

function somaDiagonalPrincipal(matriz)  {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        soma += arr[i];
    }
    return soma
}

function somaDiagonalSecundaria(matriz) {

}