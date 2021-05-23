function minMax(arr)    {
    const soma = []
    for (let i = 0; i < arr.length; i++)    {
        for (let j = 0; j < arr.length; j++)    {
            if (i === j) continue;
            soma.push(arr[i] + arr[j])
        }
    }
    return [Math.min(...soma), Math.max(...soma)]
}

console.log(minMax([1, 2, 3, 4, 5,], 4))