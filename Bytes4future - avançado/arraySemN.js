function arraySemN(n, array){
    // escreve aqui a função
    arrayDump = [];
       for (let i = 0; i < array.length; i++)   {
           if(array[i] != n)   {
            arrayDump.push(array[i])
           }
       }
       return arrayDump
}