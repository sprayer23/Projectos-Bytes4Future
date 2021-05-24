function inverteArray(arr) {
    if(arr.length === 0) return [];
    return inverteArray(arr.slice(1)).concat(arr[0]);
}

console.log(inverteArray([]))
console.log(inverteArray([1]))
console.log(inverteArray([1, 2, 3]))