function paresDeZeroAN(n){

    let arrayDump = [];
    
    if (n > 0) {
        for (let i = 0; i <= n; i++) {
            if (i % 2 === 0) {
                arrayDump.push(i);
            }
        }
    } else {
        return "Por favor insira um número superior a 0."
    }

    return arrayDump;

}