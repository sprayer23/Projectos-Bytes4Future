function diaDaSemanaPorExtenso(data){
    // escreve aqui a função
    let dias = new Map ([
        [0, "domingo"],
        [1, "segunda-feira"],
        [2, "terça-feira"],
        [3, "quarta-feira"],
        [4, "quinta-feira"],
        [5, "sexta-feira"],
        [6, "sábado"]
    ])

    let diaDaSemana = data.getDay();
    return dias.get(diaDaSemana);
}