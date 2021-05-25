// Cria uma função eQuadrada que recebe uma matriz e retorna true se a matriz for quadrada.

console.log(
    eQuadrada([
        [1, 2, 3],
        [1, 2] 
    ]) // false
)

console.log(
    eQuadrada([
        [1, 2],
        [1, 2] 
    ]) // true
)

function eQuadrada(matriz) {
    // Opção 1
    //return matriz.every(linha => linha.length === matriz.length)

    // Opção 2
    // const linhasDiferentes = matriz
    //     .filter(linha => linha.length !== matriz.length)
    // console.log(linhasDiferentes)
    // return linhasDiferentes.length === 0

    // Opção 3
    return every(
        matriz, 
        (linha) => linha.length === matriz.length
    )
}

function every(arr, predicado) {
    for(const linha of arr) {
        if (!predicado(linha)) {
            return false;
        }
    }
    return true;
}
