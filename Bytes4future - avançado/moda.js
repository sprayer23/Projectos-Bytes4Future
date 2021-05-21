// Encontra a moda de um Array de números, recorrendo a um Map.

// Se dois elementos tiverem o maior número de ocorrências, retorna o menor.

function moda(array) {
    const contadores = new Map();
    for (const elem of array) {
        if (!contadores.has(elem)) {
            contadores.set(elem, 0);
        }
        contadores.set(elem, contadores.get(elem) + 1);
    }

    console.log(contadores.entries())
    let maisRepetido = array[0];
    let contagemMaisRepetido = contadores.get(maisRepetido);
    for (const par of contadores.entries()) {
        const numero = par[0];
        const contagem = par[1];
        
        if (contagem > contagemMaisRepetido
            || (contagem === contagemMaisRepetido && numero < maisRepetido)) {
                maisRepetido = numero;
                contagemMaisRepetido = contagem;
            }
    }
    return maisRepetido;
}

const arr = [6, 6, 3, 6, 5, 2, 6, 2, 4, 3, 1, 2, 1]
console.log(moda(arr))