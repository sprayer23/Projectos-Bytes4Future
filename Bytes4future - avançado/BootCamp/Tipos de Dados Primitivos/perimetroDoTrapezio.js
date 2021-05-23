function perimetroDoTrapezio(comprimentoMaior, comprimentoMenor, altura) {
    // escreve aqui a função
    let altura1 = (altura ** 2 + ((comprimentoMenor - comprimentoMaior) / 2) ** 2)
    let altura2 = Math.sqrt(altura1)
    return (comprimentoMenor + comprimentoMaior + (altura2  * 2))
}