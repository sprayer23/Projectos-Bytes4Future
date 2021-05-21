function moda(array){
    const contadores = new Map();
    for (const elem of array)   {
        if (!contadores.has(elem))  {
            contadores.set(elem, 0)
        }
        contadores.set(elem, contadores.get(elem) + 1);
    }
    console.log(contadores.entries());
    const maisRepetido = array[0];
    const contagemMaisRepetido = contadores.get(maisRepetido);
    for(const par of contadores.entries()) {
        const chave = par[0];
        const contagem = par[1];

        if ((contagem > contagemMaisRepetido) || (contagem === contagemMaisRepetido && chave < maisRepetido)) {
            maisRepetido = chave;
            contagemMaisRepetido = contagem;
        
    }
}
return maisRepetido
}
const arr = [1, 3, 5, 2, 6, 2, 4, 3, 1, 2, 1]