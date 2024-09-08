function encontrarMaiorElemento<T extends number | string>(array: T[]): T {
    if (array.length === 0) {
        throw new Error("Array não pode estar vazio. Por favor verificar");
    }

    let maior = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }
    return maior;
}

const maiorNumero = encontrarMaiorElemento([10, 20, 30]);
const maiorPalavra = encontrarMaiorElemento(['Cavalo', 'Papagaio', 'Cachorro']);

console.log(maiorNumero);
