function arrayDeZeroAN(n){
    // escreve aqui a função
     let arrayDump = [];

    for (let i = 0; i <= n; i++) {
        if (n > 0)  {
            arrayDump[i] = i;
        } else {
            return "Por favor insira um número superior a 0."
        }
    }

    return arrayDump
}