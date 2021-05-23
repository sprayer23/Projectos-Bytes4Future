function calculaModa(array){
    // escreve aqui a função
    const memoria = {};

    // loop de cada valor do array + incrementar a memoria = valor e numReps;
    array.forEach(i => {
        if (!memoria[i]) {
            memoria[i] = 1;
        } else {
            memoria[i] += 1;
        } 
    });
    
   
    let repMaisAlta = 0; // 2
    let memoriaMaisAlta = 0; // 5
  
    for (let memoriaValor in memoria) {
      const rep = memoria[memoriaValor];
      if (rep > repMaisAlta && Number(memoriaValor) > memoriaMaisAlta) {
        repMaisAlta = rep;
        memoriaMaisAlta = Number(memoriaValor);
      }
    }

    return memoriaMaisAlta;
}