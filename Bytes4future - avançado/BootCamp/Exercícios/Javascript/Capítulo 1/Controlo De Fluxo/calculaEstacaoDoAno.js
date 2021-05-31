function calculaEstacaoDoAno(dia, mes){
    // Mensagens de Erro
    if (mes > 12 || mes < 1) return "Por favor introduza um mês entre 1 e 12.";
    if (mes === 2 && (dia > 28 || dia < 1)) return "Por favor introduza um dia entre 1 e 28.";
    if ((dia > 30 || dia < 1) && (mes === 4 || mes === 6 || mes === 9 || mes === 11)) return "Por favor introduza um dia entre 1 e 30.";
    if (dia > 31 || dia < 1) return "Por favor introduza um dia entre 1 e 31.";

    // Primavera - 21 de Março a 20 de Junho
    // Verão - 21 de Junho a 20 de Setembro
    // Outono - 21 de Setembro a 20 de Dezembro
    // Inverno - 21 de Dezembro a 20 de Março
    if ((mes === 3 && dia > 20) || mes === 4 || mes === 5 || (mes === 6 && dia < 21)) return "Primavera";
    if ((mes === 6 && dia > 20) || mes === 7 || mes === 8 || (mes === 9 && dia < 21)) return "Verão";
    if ((mes === 9 && dia > 20) || mes === 10 || mes === 11 || (mes === 12 && dia < 21) ) return "Outono";
    if ((mes === 12 && dia > 20) || mes === 1 || mes === 2 || (mes === 3 && dia < 21)) return "Inverno";
}   