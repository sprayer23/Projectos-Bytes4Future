function areaDoHexagono(lado) {
    // escreve aqui a função
    let altura = Math.sqrt((lado ** 2) - (lado / 2) ** 2)
    return ((6 * lado) * altura) / 2
}