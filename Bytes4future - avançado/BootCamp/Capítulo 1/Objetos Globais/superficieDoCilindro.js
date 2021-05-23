function superficieDoCilindro(raio, altura){
    // escreve aqui a função
    let raio1 = (2 * Math.PI * (raio ** 2));
    let altura1 = (2 * Math.PI * raio * altura)

    return raio1 + altura1
}

console.log(superficieDoCilindro(2, 5))