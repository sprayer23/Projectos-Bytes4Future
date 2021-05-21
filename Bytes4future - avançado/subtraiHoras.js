function subtraiHoras(data, horas) {
    // escreve aqui a função
    let milihoras = 60 * 60 *1000;
    let hora = horas * milihoras
    let resultado = data - hora;
    return new Date(resultado)
}