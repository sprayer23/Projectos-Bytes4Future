function transpor(matriz) {
    // Retorna matriz transposta
    let transposta = []
    for(let i = 0; i < matriz.length; i++) {
        let coluna = []
        for (let j = 0; j < matriz.length; j++) {
            const elemento = matriz[j][i];
            coluna.push(elemento);
        }
        transposta.push(coluna);
    }
    return transposta;
}

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(transpor(matriz))
// [
//  [1, 4, 7],
//  [2, 5, 8],
//  [3, 6, 9],