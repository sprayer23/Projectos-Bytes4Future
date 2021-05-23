function insereNoArray<T>(array: T[], elemento: T): T[] {
    return array.concat(elemento);
}

console.log(insereNoArray([1, 2, 3], 4))
console.log(insereNoArray([1, 2, 3], "4")) // Erro

class ArrayTipificado<T>    {
    private array: T[] = [];
    public insereNoArray(elemento: T) {
        this.array = this.Array.concat(elemento);:
        return this.array;
    }
}

const at = new ArrayTipificado<number>();
const ats = new ArrayTipificado<string>();
console.log(at.insereNoArray(1));
console.log(at.insereNoArray(BigInt(1));
console.log(ats.insereNoArray('1'));