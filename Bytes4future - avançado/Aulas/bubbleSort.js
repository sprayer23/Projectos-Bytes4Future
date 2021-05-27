// Enquanto o vetor não está ordenado
//   Assume que o vetor está ordenado
//   Para cada elemento
//     Se o elemento e o próximo não estão na ordem certa
//       Troca elemento com o próximo
//       Marca vetor como não estando ordenado

function bubbleSort(arr) {
    let ordenado = false;
    let elementosOrdenados = 0;
    while (!ordenado) {
        ordenado = true;
        for (let i = 0; i < arr.length - 1 - elementosOrdenados; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                ordenado = false;
            }
        }
        elementosOrdenados++;
    }
    return arr;
}

console.log(bubbleSort([3, 5, 1, 9])) // [1, 3, 5, 9]

function buildArray(n) {
    let arr = []
    for (let i = 0; i < n; i++) {
        arr = [Math.floor(Math.random() * n)].concat(arr)
    }
    return arr
}

function buildArraySorted(n) {
    let arr = []
    for (let i = 0; i < n; i++) {
        arr = [i].concat(arr)
    }
    return arr
}

const arr100 = buildArray(20000)
console.log(arr100)

const arr101 = buildArray(20000)
console.log(arr101)

const startBubble = new Date();
bubbleSort(arr100)
console.log(`${new Date() - startBubble}ms`)
console.log(arr100)


const startSort = new Date();
arr101.sort((e1, e2) => e1 - e2)
console.log(`${new Date() - startSort}ms`)
console.log(arr101)

// [3, 1, 5, 9]
// [1, 3, 5, 9]

// a = 3
// b = 5

// a = a + b
// a = 8
// b = 5

// b = a - b
// a = 8
// b = 3

// a = a - b
// a = 5
// b = 3
