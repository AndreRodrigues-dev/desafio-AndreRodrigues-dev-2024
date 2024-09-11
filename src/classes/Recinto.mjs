class Recinto {
    constructor(numero, biomas, tamanhoTotal) {
        this.numero = numero;
        this.biomas = biomas;
        this.tamanhoTotal = tamanhoTotal;
        this.animais = [];
    }

    espacoOcupado() {
        return this.animais.reduce((total, a) => total + a.animal.tamanho * a.quantidade, 0);
    }

    adicionarAnimal(animal, quantidade) {
        this.animais.push({ animal, quantidade });
    }

    podeReceber(animal, quantidade) {
        const espacoExtra = (this.animais.length > 0 && this.animais[0].animal.especie !== animal.especie) ? 1 : 0;
        const espacoDisponivel = this.tamanhoTotal - this.espacoOcupado() - espacoExtra;

        if (!this.biomas.some(bioma => animal.podeViverEm(bioma))) {
            return false;
        }

        if (animal.carnivoro && this.animais.length > 0 && this.animais[0].animal.especie !== animal.especie) {
            return false;
        }

        const recintoTemCarnivoro = this.animais.some(a => a.animal.carnivoro);
        if (recintoTemCarnivoro && this.animais[0].animal.especie !== animal.especie) {
            return false;
        }

        if (animal.especie === 'HIPOPOTAMO' && !this.biomas.includes('rio')) {
            return false;
        }

        if (animal.especie === 'MACACO' && quantidade === 1 && this.animais.length === 0) {
            return false;
        }

        return espacoDisponivel >= (animal.tamanho * quantidade);
    }
}
export default Recinto;  

