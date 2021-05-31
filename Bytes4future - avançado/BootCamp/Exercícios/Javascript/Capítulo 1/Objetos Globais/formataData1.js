function formataData(data){
    // escreve aqui a função
    let dia = data.getDate().toString();
    if(dia.length < 2){
        dia = "0" + dia;
    }
    let mes = (data.getMonth() + 1).toString();
    if(mes.length < 2){
        mes = "0" + mes;
    }
    let ano = data.getFullYear();

    return `${dia}-${mes}-${ano}`;
} 
console.log(formataData(10-11-2020))