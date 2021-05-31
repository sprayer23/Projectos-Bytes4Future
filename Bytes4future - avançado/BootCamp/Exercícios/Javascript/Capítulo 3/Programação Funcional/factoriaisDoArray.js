function fatoriaisDoArray(array) {        
    if (array.length === 0) {
        return []
    }
return [fatorial(array[0])].concat(fatoriaisDoArray(array.slice(1)))
} 
function fatorial(n) { 
    if(n === 1) return 1;
    return n * fatorial(n-1);
}