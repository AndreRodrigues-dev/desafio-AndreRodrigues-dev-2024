class Animal {
    constructor(especie, tamanho, biomas, carnivoro = false) {
        this.especie = especie;
        this.tamanho = tamanho;
        this.biomas = biomas;
        this.carnivoro = carnivoro;
    }

    podeViverEm(bioma) {
        return this.biomas.includes(bioma);
    }
}

export default Animal;