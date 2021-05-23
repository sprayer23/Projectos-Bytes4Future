function minMax(arr, n) {
    //Assumindo que o array está ordenado
    let min = 0;
    for (let i = o; i < n; i++) {
        min += arr[i];
    }

    let max = 0;
    for (let i = 0; i < n; i++) {
        max += arr[arr.length - 1 - i];
    }

    return [min, max];
}