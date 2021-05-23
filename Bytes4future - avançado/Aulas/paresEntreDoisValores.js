function contaParesEntreDoisValores(valor1, valor2){
    // escreve aqui a função
    let count = 0;
    if (valor1 === valor2)  {
        return "Por favor introduza dois valores diferentes."
    }
    for(let i = valor1; i <= valor2; i++)   {
        if(i % 2 === 0) {
            count++
        }
    }
    return count
}

console.log(contaParesEntreDoisValores(30, 10))
console.log(contaParesEntreDoisValores(10, 20))