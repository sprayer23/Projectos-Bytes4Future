function palavraExisteEmSopaDeLetras(sopa, palavra) {
    
    const palavraAoContrario = palavra.slice(0).reverse();

    for(const linha of sopa) {
        if (linha.includes(palavra))    { 
            return true;
        }
    }
    return false;
    
    const sopa = [
        "OOL",
        "LLO",
        "AYY"]

}