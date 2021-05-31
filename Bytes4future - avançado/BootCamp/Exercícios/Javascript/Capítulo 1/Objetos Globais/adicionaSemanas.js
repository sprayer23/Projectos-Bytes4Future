function adicionaSemanas(data, semanas) {
    // escreve aqui a função
    let milisemanas = 7 * 24 * 60 * 60 *1000;
    let semana = semanas * milisemanas;
    let resultado = data.valueOf() + semana;
    return new Date(resultado)
}