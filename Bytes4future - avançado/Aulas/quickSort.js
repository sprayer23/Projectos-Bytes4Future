// QuickSort(array, first, last)
//   Se first < last
//     pivot = Partition(array, first, last)
//     QuickSort(array, first, pivot - 1)
//     QuickSort(array, pivot + 1, last)

function quickSortExposto(arr) {
    return quickSort(arr, 0, arr.length - 1)
}

function quickSort(arr, first, last) {
    if (first < last) {
        const pivot = partition(arr, first, last);
        // console.log(arr.slice(first, pivot), arr[pivot], arr.slice(pivot + 1, last+1))
        quickSort(arr, first, pivot - 1)
        quickSort(arr, pivot + 1, last)
    }
    return arr;
}

// Partition(array, first, last)
//   Escolhe pivot e coloca na ultima posição
//   x = array[last]
//   i = first
//   Para cada j entre first e last - 1
//     Se array[j] < x
//       Troca array[i] com array[j]
//       i++
//   Troca array[i] com array[last]
//   retorna i

function partition(arr, first, last) {
    const pivotIndex = Math.floor(Math.random() * (last - first)) + first
    
    const tempPivot = arr[last]
    arr[last] = arr[pivotIndex]
    arr[pivotIndex] = tempPivot;

    const x = arr[last]
    let i = first

    for (let j = first; j < last; j++) {
        if (arr[j] < x) {
            const temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp
            i++
        }
    }

    const tempLast = arr[last]
    arr[last] = arr[i]
    arr[i] = tempLast

    return i
}


let arr = [3, 5, 1, 9, 2, 6, 8];
console.log(quickSortExposto(arr)) // [1, 3, 5, 9]

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

const arr100 = buildArray(200000)
console.log(arr100)

const arr101 = buildArray(200000)
console.log(arr101)

const startQuickSort = new Date();
quickSortExposto(arr100)
console.log(`${new Date() - startQuickSort}ms`)
console.log(arr100)


const startSort = new Date();
arr101.sort((e1, e2) => e1 - e2)
console.log(`${new Date() - startSort}ms`)
console.log(arr101)