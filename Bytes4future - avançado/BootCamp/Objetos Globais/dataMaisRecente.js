function dataMaisRecente(data1, data2)  {
    if (data1 > data2)  {
        return data1    
    }   else {
        return data2
    }
}

console.log(dataMaisRecente(new Date ('2021-11-22'), new Date ('2015-6-25'), new Date ('2011-1-11')))