function quadradosDoArray(array) {

    if (array.length === 0) return [];

    return [array[0] ** 2].concat(quadradosDoArray(array.slice(1)))

}