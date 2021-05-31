function encontraPrimo(array){
    if (!array.some(primo)) {return null}

    return array.find(e => primo(e))

    function primo(num) {
    // verifica se o numero digitado é "1", que não é primo
     if(num!=1){
      for (let i = 2; i < num; i++)
        if (num % i == 0) return false;
      return num !== 1;
    }
}
}