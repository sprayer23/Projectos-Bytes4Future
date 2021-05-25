// Implementa a função minimo que recebe um array de objetos e o nome de uma propriedade. A função deve retornar o objeto que tem o valor mínimo na propriedade.

console.log(
    minimo([
        {valor: 1, nome: "a"},
        {valor: -1, nome: "aa"}
    ], "valor") // {valor: -1, nome: "aa"}
)

console.log(
    maximo([
        {valor: 1, nome: "a"},
        {valor: -1, nome: "aa"}
    ], "valor") // {valor: -1, nome: "aa"}
)

function minimo(arr, propriedade) {
    return arr.reduce((minimo, elemento) => {
        if (elemento[propriedade] 
            < minimo[propriedade]) {
                return elemento;
            }
        return minimo;
    })
}

function maximo(arr, propriedade) {
    return arr.reduce((minimo, elemento) => {
        if (elemento[propriedade] 
< minimo[propriedade]) {
                return elemento;
            }
        return minimo;
    })
}