function exercicio2(arr){
    // 1. Filtrar os pares
    const filtra = arr.filter((e) => e % 2 === 0);
    // 2. Mapear cada elemento para o seu quadrado
    const mapeia = filtra.map((e) => e ** 2);
    // 3. Reduzir o array para o seu somatorio
    const reduzir = mapeia.reduce((acc, e) => acc + e, 0);
    return reduzir;
}

console.log(exercicio2([1, 2, 3, 4])) //20