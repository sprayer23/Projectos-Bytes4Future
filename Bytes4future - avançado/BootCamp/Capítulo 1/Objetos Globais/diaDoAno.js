function diaDoAno(data){
    // escreve aqui a função
    let dia = 24 * 60 * 60 * 1000;
    let ano = data.getFullYear();
    let datinha = new Date(data);
    let primeiroDia = new Date(`${ano}-01-01`);
    let diferenca = data - primeiroDia;

    console.log(datinha);
    console.log(primeiroDia);

    return Math.ceil(diferenca / dia);
}