function calculaMelhorColheita(filas) {
    // escreve aqui a função
    let indice = [];
    let index = 0;
    let max = 0;

    for (let i = 0; i < filas.length; i++) {
        somatorioDaFila = 0;
        for (let x = 0; x < filas[i].length; x++)  {
            somatorioDaFila += filas[i][x]
        }
        indice[i] = somatorioDaFila
    }
    for (let y = 0; y < indice.length; y++) {
        if (max < indice[y])    {
            max = indice[y];
            index = y;
        }
    }
    return (`A fila ${index} é a que tem mais maçãs a serem colhidas, mais especificamente ${max} unidades.`)
}