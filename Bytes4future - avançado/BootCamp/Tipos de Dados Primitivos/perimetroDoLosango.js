function perimetroDoLosango(diagonalMaior, diagonalMenor) {
    // escreve aqui a função
    let lado = (((diagonalMaior / 2) ** 2 ) + (diagonalMenor / 2) ** 2);
    let lado1 = Math.sqrt(lado)
    return lado1 * 4
}