function calculaSigno(diadoano) {
    

    if (diadoano > 0 && diadoano <= 20 || diadoano >= 356 && diadoano <= 365) {
        return "Capricórnio"
    }

    if (diadoano >= 21 && diadoano <= 49) {
        return "Aquário"
    }

    if (diadoano >= 50 && diadoano <= 79) {
        return "Peixes"
    }

    if (diadoano >= 80 && diadoano <= 110) {
        return "Carneiro"
    }

    if (diadoano >= 111 && diadoano <= 140) {
        return "Touro"
    }

    if (diadoano >= 141 && diadoano <= 171) {
        return "Gémeos"
    }

    if (diadoano >= 172 && diadoano <= 203) {
        return "Carangueijo"
    }

    if (diadoano >= 204 && diadoano <= 234) {
        return "Leão"
    }

    if (diadoano >= 235 && diadoano <= 264) {
        return "Virgem"
    }

    if (diadoano >= 265 && diadoano <= 295) {
        return "Balança"
    }

    if (diadoano >= 296 && diadoano <= 325) {
        return "Escorpião"
    }

    if (diadoano >= 326 && diadoano <= 355) {
        return "Sagitário"
    }

    else {
        return "Por favor introduza um dia entre 1 e 365."; 
    }
}