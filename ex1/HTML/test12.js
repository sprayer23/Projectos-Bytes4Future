//Cria uma função que recebe como argumento um número d e retorna o dia da semana correspondente.

//Quando recebe um número diferente deve retornar a mensagem: "Número inválido. Por favor insira um número entre 1 e 7."

function diasDaSemana(d) {

    const dias = {
        1: "Domingo",
        2: "Segunda-Feira",
        3: "Terça-Feira",
        4: "Quarta-Feira",
        5: "Quinta-Feira",
        6: "Sexta-Feira",
        7: "Sábado",
    }

    // Se encontrar um número entre 1 a 7 então retornar o dia
    if (d > 0 && d < 8) {
        result =  dias[d]
        return result
    }

    else //retorna numero inválido
    {
        result = "Número inválido. Por favor insira um número entre 1 e 7."
        return result 
    }

}

//neste momento apenas esta a dar o numero invalido para qualquer numero

    console.log(diasDaSemana(3))