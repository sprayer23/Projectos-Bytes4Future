function clone(arr){
    if(arr.length === 0) return [];
    return [arr[0].concat(clone(arr.slice(1)))]
}

console.log(aplica([1, 2, 3]))

function aplica(arr, transformacao){ 
    if (arr.length === 0) return [];
    const [primeiro, ... resto] = arr
    const primeiroTransformado = transformacao(primeiro)
    return [primeiroTransformado].concat(aplica(resto, transformacao))
}

console.log(aplica([1, 2, 3], (n) => n * n))