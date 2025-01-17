import { RecintosZoo } from "./recintos-zoo.mjs";

describe('Recintos do Zoológico', () => {
  
    test('Deve rejeitar animal inválido', () => {
        const resultado = new RecintosZoo().analisaRecintos('UNICORNIO', 1);
        expect(resultado.erro).toBe("Animal inválido");
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Deve rejeitar quantidade inválida', () => {
        const resultado = new RecintosZoo().analisaRecintos('MACACO', 0);
        expect(resultado.erro).toBe("Quantidade inválida");
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recintos para 10 macacos', () => {
        const resultado = new RecintosZoo().analisaRecintos('MACACO', 10);
        expect(resultado.erro).toBe("Não há recinto viável");
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Deve encontrar recinto para 1 crocodilo', () => {
        const resultado = new RecintosZoo().analisaRecintos('CROCODILO', 1);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 4 (espaço livre: 5 total: 8)');
        expect(resultado.recintosViaveis.length).toBe(1);
    });

    test('Deve encontrar recintos para 2 macacos', () => {
        const resultado = new RecintosZoo().analisaRecintos('MACACO', 2);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 5 total: 10)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 2 (espaço livre: 3 total: 5)');
        expect(resultado.recintosViaveis[2]).toBe('Recinto 3 (espaço livre: 2 total: 7)');
        expect(resultado.recintosViaveis.length).toBe(3);
    });

    test('Deve encontrar recintos para 1 leão', () => {
        const resultado = new RecintosZoo().analisaRecintos('LEAO', 1);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 5 (espaço livre: 6 total: 9)');
        expect(resultado.recintosViaveis.length).toBe(1);
    });

    test('Deve rejeitar leão em recinto que não seja savana', () => {
        const resultado = new RecintosZoo().analisaRecintos('LEAO', 1);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis).toContain('Recinto 5 (espaço livre: 6 total: 9)');
        expect(resultado.recintosViaveis).not.toContain('Recinto 1 (espaço livre: 5 total: 10)');
        expect(resultado.recintosViaveis).not.toContain('Recinto 3 (espaço livre: 2 total: 7)');
    });

    test('Deve encontrar recintos para 2 hipopótamos', () => {
        const resultado = new RecintosZoo().analisaRecintos('HIPOPOTAMO', 2);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 3 (espaço livre: 1 total: 7)');
        expect(resultado.recintosViaveis.length).toBe(1);
    });

    test('Deve rejeitar hipopótamos em recintos que não sejam savana e rio', () => {
        const resultado = new RecintosZoo().analisaRecintos('HIPOPOTAMO', 2);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis).not.toContain('Recinto 1 (espaço livre: 5 total: 10)');
        expect(resultado.recintosViaveis).not.toContain('Recinto 4 (espaço livre: 5 total: 8)');
    });

    test('Deve rejeitar macaco sozinho em recinto', () => {
        const resultado = new RecintosZoo().analisaRecintos('MACACO', 1);
        expect(resultado.erro).toBe("Não há recinto viável");
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Deve encontrar recintos para 1 leão e 1 macaco', () => {
        const resultado = new RecintosZoo().analisaRecintos('LEAO', 1);
        const resultadoMacaco = new RecintosZoo().analisaRecintos('MACACO', 1);
        expect(resultado.erro).toBeFalsy();
        expect(resultadoMacaco.erro).toBeFalsy();
        expect(resultado.recintosViaveis).toContain('Recinto 5 (espaço livre: 6 total: 9)');
        expect(resultadoMacaco.recintosViaveis).toContain('Recinto 5 (espaço livre: 6 total: 9)');
    });

});
