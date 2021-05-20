function superDigito(n, k) {
    if (k > 1) {
        // let resultado = "";
        // for (let i = 0; i < k; i++) {
        //     resultado += n;
        // }
        // console.log(resultado)
        // return superDigito(resultado, 1);

        return superDigito(
            (somatorio(n) * BigInt(k))
            .toString(),
            1
        );
    }
    if (n.length === 1) {
        return BigInt(n);
    }
    return superDigito(somatorio(n).toString(), 1)
}

function somatorio(n) {
    if (n.length === 1) {
        return BigInt(n);
    }
    return BigInt(n[0]) 
        + somatorio(n.slice(1))
}


console.log(superDigito('9875', 4))
console.log(superDigito('9875', 123123123123123123))
console.log(superDigito('9875', 123123123123123123123123123))