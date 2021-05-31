function fatorialN(n){
    // escreve aqui a função
    let factorial = 1n;
    while (n > 0)   {
        factorial += BigInt(n);
        n--
    }
    return factorial
}