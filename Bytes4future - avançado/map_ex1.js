function abreviaturaParaMes(abreviatura)    {
    const correspondencia = new Map([
        ["jan", "Janeiro"],
        ["fev", "Fevereiro"],
        ["mar", "Março"],
        ["abr", "Abril"],
        ["mai", "Maio"],
        ["jun", "Junho"],
        ["jul", "Julho"],
        ["ago", "Agosto"],
        ["set", "Setembro"],
        ["out", "Outubro"],
        ["nov", "Novembro"],
        ["dez", "Dezembro"]
    ])

    const sanitizeInput = abreviatura
    .toLowerCase()
    .trim()
    
    if (correspondencia.has(sanitizeInput))   {
        return correspondencia.get(sanitizeInput);
    }
    return "Abreviatura Inválida";
}

console.log(abreviaturaParaMes(" Jun "))