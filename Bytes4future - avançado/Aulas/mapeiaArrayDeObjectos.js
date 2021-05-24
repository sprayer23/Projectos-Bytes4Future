function mapeiaArrayDeObjectos(arr) {
    return arr.map(e => ({
        ...e,
        age: calculaIdade(e.birthday)
    }))
}

console.log(mapeiaArrayDeObjectos([
    {name: "a", birthday: new Date('2001-01-01')},
    {name: "a", birthday: new Date('2005-01-01')}
]))

function calculaIdade(data) {
    return Math.floor((new Date() - data) / (365 * 24 * 60 * 60 * 1000));
}


console.log(mapeiaArrayDeObjectos([
    {name: "a", birthday: new Date('2001-01-01')},
    {name: "a", birthday: new Date('2005-01-01')}
]))