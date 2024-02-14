import { expect } from "@jest/globals";
import { decrypt, encrypt } from "../assignments/assignment_07";
 
describe("Oppgave 07", () => {
    it("Krypter melding med Cease cypher", () => {
        // arrange
        const message = "Experience is the teacher of all things.";
 
        const expected = "Lewlyplujl pz aol alhjoly vm hss aopunz.";
 
        // act
        const result = encrypt(message, 7);
 
        // assert
        expect(result).toEqual(expected);
    });
 
    it("Dekrypter melding med Cease cypher", () => {
        // arrange
        const message = "Mhj hu hq Dzhvrph surjudphuhu!";
 
        const expected = "Jeg er en Awesome programerer!";
 
        // act
        const result = decrypt(message, 3);
 
        // assert
        expect(result).toEqual(expected);
    });
});
