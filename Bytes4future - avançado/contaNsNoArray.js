function contarNsNoArray(n, array){
    // escreve aqui a função
    let count = 0;
       for (let i = 0; i < array.length; i++)   {
           if(array[i] === n)   {
            count++
           }
       }
       return count
}