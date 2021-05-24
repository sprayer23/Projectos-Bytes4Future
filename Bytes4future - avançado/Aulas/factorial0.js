function factorial(n)   {
    if (n === 1) return 1n;
    return BigInt(n) * factorial (n - 1)
}

console.log(factorial(1000));