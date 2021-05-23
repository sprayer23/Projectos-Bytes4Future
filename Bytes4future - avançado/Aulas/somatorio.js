function somatorio(n)   {
    if (n.length === 1) {
        return parseInt(n);
    }
    return parseInt(
        parseInt(n[0])
        + somatorio(n.slice(1))
    )
}

console.log(somatorio("123"))