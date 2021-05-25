conole.log(
eQuadrada([
    [1, 2, 3],
    [1, 2]
])
)

console.log(
eQuadrada([
    [1, 2],
    [1, 2]
])
)
/*
function eQuadrada(matriz) {
     opção 1
    return matriz.every(linha => linha.length === matriz.length);

    opção 2
    const linhasDiferentes = matriz.filter(linha => linha.length !== linha.length)
    console.log(linhasDiferentes)
    return linhasDiferentes.length === 0;
}
*/

function every(arr, predicado) {
    for (const linha of arr) {
        if (!predicado(linha)){
            return false;
        }
    }
    return true;
}