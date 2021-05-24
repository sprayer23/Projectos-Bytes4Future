function exercicio2(arr){
    // 1. Filtrar os pares
    return  arr.filter(e => e % 2 === 0)
    // 2. Mapear cada elemento para o seu quadrado
        .map(e => e ** 2)
    // 3. Reduzir o array para o seu somatorio
        .reduce((acc, e) => acc + e, 0)
}

console.log(exercicio2([1, 2, 3, 4])) //20