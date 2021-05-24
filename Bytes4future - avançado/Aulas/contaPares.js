function contaPares(arr){
    if (arr.length === 0) return 0;
    if (arr[0] % 2 === 1) return contaPares(arr.slice(1))
    if (arr[0] % 2 === 0) return 1 + contaPares(arr.slice(1))
}

console.log(contaPares([])) // 0
console.log(contaPares([1])) // 0
console.log(contaPares([2])) // 1
console.log(contaPares([1, 4, 2, 6, 1, 7, 9, 3]))