function diasDaSemana(d) {
    // escreve aqui a função 

    if (d === 1){
        return "Domingo"
    }else if (d === 2){
        return "Segunda"
    }else if (d === 3) {
        return "Terça-Feira"
    }else if (d === 4){
        return "Quarta-Feira"
    }else if (d === 5){
        return "Quinta-Feira"
    }else if (d === 6){
        return "Sexta-Feira"
    }else if (d === 7){
        return "Sábado"
    }else{
       
        return "Abreviatura inválida. Por favor tente novamente."
    }

}
console.log(diasDaSemana(3))