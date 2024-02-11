import { expect } from "@jest/globals";
import kombinerAlleIngredienser from "../assignments/assignment_04";

describe("Oppgave 04", () => {
    it("kombiner to lister til en liste", () => {
        // arrange
        const torreIngredienser = ["Mel", "Salt"];
        const vaateIngredienser = ["Egg", "Melk"];

        // act
        const result = kombinerAlleIngredienser(
            torreIngredienser,
            vaateIngredienser
        );

        // assert
        expect(result.sort()).toEqual(["Mel", "Salt", "Egg", "Melk"].sort());
    });
});
