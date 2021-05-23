function arrayDeNAZero(n){
    // escreve aqui a função

    let arrayDump = [];
    
    if (n > 0) {
        for (let i = 0; i <= n; i++) {
            console.log("Variavel I " + i)
            arrayDump[n-i] = i;
        }
    } else {
        return "Por favor insira um número superior a 0."
    }

    return arrayDump;
}