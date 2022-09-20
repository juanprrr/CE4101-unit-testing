import { suma, resta, multi, division } from "../src/calc";

/**
 * @test describe("Probando calculadora básica") 
 * corresponde al Test Suite con el conjunto de 
 * tests unitarios para el módulo calc.ts
 */
describe("Probando calculadora básica", () => { 

    it("Debería retornar 15 para suma(10,5)", () => {
        var result = suma(10, 5);
        expect(result).toBe(15);
    });

    it("Debería retornar -1 para resta(2,3)", () => {
        var result = resta(2, 3);
        expect(result).toBe(-1);
    });

    it("Debería retornar 15 para multi(3,5)", () => {
        var result = multi(3, 5);
        expect(result).toBe(15);
    });

    it("Debería retornar 2 para division(2,3)", () => {
        var result = division(6, 3);
        expect(result).toBe(2);
    });

});