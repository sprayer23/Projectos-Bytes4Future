function aplica(n, f) {
    return f(n)
}

console.log(aplica(5, (n) => n * n)) //25
console.log(5, (n) => n * -1)   // -5
console.log(5, (n) => n % 2 === 0 ? 'Par' : 'Impar')