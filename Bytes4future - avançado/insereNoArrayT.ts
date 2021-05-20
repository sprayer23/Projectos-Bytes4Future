function insereNoArray<T>(array: T[], elemento: T): T[] {
    return array.concat(elemento);
}

console.log(insereNoArray([1, 2, 3], 4))
console.log(insereNoArray([1, 2, 3], "4")) // Erro