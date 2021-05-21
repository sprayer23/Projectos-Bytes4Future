function palavraExisteEmSopaDeLetras(sopa, palavra) {
    const palavraAoContrario = invertePalavra(palavra)
    for (const linha of sopa) {
        if (linha.includes(palavra)
            || linha.includes(palavraAoContrario)) {
            return true;
        }
    }

    const arrayTransposto = transpoeArray(sopa)
    for (const coluna of arrayTransposto) {
        if (coluna.includes(palavra)
            || coluna.includes(palavraAoContrario)) {
            return true;
        }
    }

    return false;
}

function invertePalavra(palavra) {
    let invertida = "";

    for (let i = palavra.length - 1;
        i >= 0;
        i--) {
            invertida += palavra[i]
            // console.log(invertida)
        }
    // for (let i = 0;
    //     i < palavra.length;
    //     i++) {
    //         invertida = palavra[i] + invertida
    //         console.log(invertida)
    //     }

    return invertida;
}

console.log(invertePalavra("OLA"))

const sopa = [
    "OOL",
    "LLO",
    "AYY"
]

function transpoeArray(array) {
    const transposto = []

    for (let i = 0; i < array.length; i++) {
        const linha = array[i];
        for (let j = 0; j < linha.length; j++) {
            const elemento = linha[j];
            if (!transposto[j]) {
                transposto[j] = ""
            }
            transposto[j] += elemento
            console.log(transposto)
        }
    }

    return transposto;
}

console.log(transpoeArray(sopa))

const sopaTransposta = [
    "OLA",
    "OLY",
    "LOY"
]

console.log(palavraExisteEmSopaDeLetras(sopa, "OL"))
console.log(palavraExisteEmSopaDeLetras(sopa, "YA"))
console.log(palavraExisteEmSopaDeLetras(sopa, "I"))
console.log(palavraExisteEmSopaDeLetras(sopa, "OLA"))
