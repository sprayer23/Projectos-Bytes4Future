function arrayDePares(array){
    // escreve aqui a função
       let arrayDump = [];

       for (let i = 0; i < array.length; i++)   {
           if(array[i] % 2 === 0)   {
               arrayDump.push(array[i])
           }
       }
       return arrayDump
}