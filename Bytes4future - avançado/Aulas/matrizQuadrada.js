class Ponto {
    constructor(linha, coluna) {
        this.linha = linha;
        this.coluna = coluna;
    }
}

function contaGrupos(matriz) {
    // Inicializar dois arrays, um para os grupos de 0, outro para os grupos de 1
    // Para cada elemento da matriz
    // Criar o Ponto
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
    // Se for um 0
            
        }
    }

    

    //          Verifica se pertence a um grupo existente

    //              Se existir, então coloca o Ponto, no grupo
    //          Caso contrário
    //              Cria um novo grupo com o ponto
    //      Se for um 1
    //          Verifica se pertence a um grupo existente
    //              Se existir, então coloca o Ponto, no grupo
    //          Caso contrário
    //              Cria um novo grupo com o ponto

    // return [tamanho do array que tem os grupos de 0, tamanho do array que tem os grupos de 1]
}

function verificaSePertence(grupo, ponto) {
    // Verificar se algum ponto do grupo verifica a condição

    return grupo.some(p =>
        // Etá na mesma linha e na coluna atrás
        (p.linha === ponto.linha) && (p.coluna === ponto.coluna - 1)
        // Ou está na mesma coluna e na linha acima
        || (p.linha === ponto.linha -1 && p.coluna === ponto.coluna))
}