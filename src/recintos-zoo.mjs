import Animal from './classes/Animal.mjs';
import Recinto from "./classes/Recinto.mjs";

class RecintosZoo {
    constructor() {
        this.recintos = [
            new Recinto(1, ['savana'], 10),
            new Recinto(2, ['floresta'], 5),
            new Recinto(3, ['savana', 'rio'], 7),
            new Recinto(4, ['rio'], 8),
            new Recinto(5, ['savana'], 9)
        ];

        this.recintos[0].adicionarAnimal(new Animal('MACACO', 1, ['savana', 'floresta']), 3);
        this.recintos[2].adicionarAnimal(new Animal('GAZELA', 2, ['savana']), 1);
        this.recintos[4].adicionarAnimal(new Animal('LEAO', 3, ['savana'], true), 1);

        this.animaisPermitidos = {
            LEAO: new Animal('LEAO', 3, ['savana'], true),
            LEOPARDO: new Animal('LEOPARDO', 2, ['savana'], true),
            CROCODILO: new Animal('CROCODILO', 3, ['rio'], true),
            MACACO: new Animal('MACACO', 1, ['savana', 'floresta']),
            GAZELA: new Animal('GAZELA', 2, ['savana']),
            HIPOPOTAMO: new Animal('HIPOPOTAMO', 4, ['savana', 'rio'])
        };
    }

    analisaRecintos(animalNome, quantidade) {
        const animal = this.animaisPermitidos[animalNome];
        if (!animal) {
            return { erro: "Animal inválido" };
        }

        if (isNaN(quantidade) || quantidade <= 0) {
            return { erro: "Quantidade inválida" };
        }

        const recintosViaveis = this.recintos
            .filter(recinto => recinto.podeReceber(animal, quantidade))
            .map(recinto => `Recinto ${recinto.numero} (espaço livre: ${recinto.tamanhoTotal - recinto.espacoOcupado() - animal.tamanho * quantidade} total: ${recinto.tamanhoTotal})`);

        if (recintosViaveis.length > 0) {
            return { recintosViaveis };
        } else {
            return { erro: "Não há recinto viável" };
        }
    }
}

export { RecintosZoo as RecintosZoo };