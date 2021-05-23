function subtraiDias(data, dias) {
    // escreve aqui a função
    let milidias = 24 * 60 * 60 *1000;
    let dia = dias * milidias
    let resultado = data - dia;
    return new Date(resultado)
}