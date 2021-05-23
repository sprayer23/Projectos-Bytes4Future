function contaNumeroDeDivisoesPorDois(n){
    // escreve aqui a função
    let divisao = n;
    let count = 0;

    while (divisao > 1) {
        divisao = Math.floor(divisao/2)
        count++
    }
    return count
}