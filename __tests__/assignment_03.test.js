import { expect } from "@jest/globals";
import removeDuplicates from "../assignments/assignment_03 ";

describe("Oppgave 03", () => {
    it("Fjern duplikate verdier fra liste", () => {
        // arrange
        const input = [
            "Tesla",
            "Tesla",
            "BMW",
            "BMW",
            "Volvo",
            "Volvo",
            "Volvo",
            "Fiat",
            "Fiat",
            "Fiat",
            "BMW",
            "BMW",
            "KIA",
            "NEO",
            "NEO",
            "NEO",
            "NEO",
        ];

        // act
        const result = removeDuplicates(input);

        // assert
        expect(result.sort()).toEqual(
            ["Tesla", "Volvo", "Fiat", "BMW", "KIA", "NEO"].sort()
        );
    });
});
