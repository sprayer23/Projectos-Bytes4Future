function contaGrupos(matriz) {
    // Inicializar dois arrays, um para os grupos de 0, outro para os grupos de 1
    let todosOsGrupos = [ [], [] ]

    // Para cada elemento da matriz
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            //      Criar o Ponto
            const ponto = new Ponto(i, j);
            const elemento = matriz[i][j];
            //      Se for um 0
            const gruposPossiveis = todosOsGrupos[elemento]
                .filter(g => verificaSePertence(g, ponto))
            //          Verifica se pertence a um grupo existente
            if (gruposPossiveis.length === 1) {
                //              Se existir, então coloca o Ponto, no grupo
                gruposPossiveis[0].push(ponto);
            } else if (gruposPossiveis.length === 2) {
                const gruposEmQueNaoPertence = todosOsGrupos[elemento]
                    .filter(g => !verificaSePertence(g, ponto))

                todosOsGrupos[elemento] = gruposEmQueNaoPertence;
                const grupo = []
                gruposPossiveis.forEach(gp => {
                    gp.forEach(elemento => grupo.push(elemento))
                })
                grupo.push(ponto)
                todosOsGrupos[elemento].push(grupo)
            } else {
                //          Caso contrário
                //              Cria um novo grupo com o ponto
                todosOsGrupos[elemento].push([ponto])
            }
        }
    }
    console.log(
        todosOsGrupos
            .map(g => g 
                .map(p => p.toString())
                .join(":"))
            .join('\n'))

    // return [tamanho do array que tem os grupos de 0, tamanho do array que tem os grupos de 1]
    return todosOsGrupos.map(g => g.length)
}

class Ponto {
    constructor(linha, coluna) {
        this.linha = linha;
        this.coluna = coluna;
    }
    toString() {
        return `(${this.linha}, ${this.coluna})`
    }
}

function verificaSePertence(grupo, ponto) {
    // Verificar se algum ponto do grupo verifica a condição

    return grupo.some(p =>
        // Está na mesma linha e na coluna atrás
        (p.linha === ponto.linha
            && p.coluna === ponto.coluna - 1)
        // OU está na mesma coluna e na linha acima
        || (p.linha === ponto.linha - 1
            && p.coluna === ponto.coluna))
}

const grupo = [new Ponto(0, 0)]
console.log(verificaSePertence(grupo, new Ponto(1, 0)))
console.log(verificaSePertence(grupo, new Ponto(0, 1)))
console.log(verificaSePertence(grupo, new Ponto(1, 1)))
console.log(verificaSePertence(grupo, new Ponto(0, 2)))

console.log(
    contaGrupos(
        [
            [0, 0, 1, 1],
            [0, 0, 1, 0],
            [1, 0, 0, 1],
            [1, 1, 1, 0]
        ] // [3, 3]
    )
)


console.log(
    contaGrupos(
        [
            [1, 0, 1, 1],
            [1, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ] // [2, 1]
    )
)