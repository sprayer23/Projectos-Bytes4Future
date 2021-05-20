function superficieDaPiramideQuadrada(ladodabase, altura){
    // escreve aqui a função
    let h = Math.sqrt(((ladodabase / 2) ** 2) + altura ** 2);
    let area = (ladodabase ** 2) + (4 * ((ladodabase * h) / 2))
    return area
}