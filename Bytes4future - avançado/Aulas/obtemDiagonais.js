console.log(
obtemDiagonais([
    [1, 2, 3],
    [1, 2]
])
)

console.log(
obtemDiagonais([
    [1, 2, 3],
    [1, 2]
])
)

function obtemDiagonais(matriz) {
    // Obtem diagonal principal
    let diagonais = [diagonalPrincipal(matriz, 0, 0)];

    for(let i = 1; i < matriz.length; i++) {
        diagonais = [diagonalPrincipal(matriz, i, 0)]
        .concat(diagonais)
        .concat([diagonPrincipal(matriz, 0 , i)])
    }

    return diagonalPrincipal(matriz, 0 , 0)
}

function diagonalPrincipal(matriz, linha, coluna){
    const diagonal = []
    for(let i = 0; i < matriz.length - linha; i++){
        const elemento = matriz[linha + i][coluna + i]
        if(elemento){
            diagonal.push(elemento)
        }
    }
    return diagonal
}