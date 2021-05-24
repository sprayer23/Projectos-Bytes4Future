function inverteArray(arr){
    if(arr.length === 0) return [];
    return inverteArray(arr.slice(1)).concat(arr[0]);
}

function mapeiaArray(array){
    const transformacao = (e) => inverteArray(e);
    return array.map(transformacao);
}