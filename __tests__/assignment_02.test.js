import { expect } from "@jest/globals";
import { findLongestName } from "../assignments/assignment_02";

describe("Oppgave 02", () => {
    it("Finn lengste lands navn i listen", () => {
        // arrange
        const input = [
            "Sweeden",
            "Denmark",
            "Norway",
            "Switzerland",
            "Iceland",
            "England",
        ];

        // act
        const result = findLongestName(input);

        // assert
        expect(result).toBe("Switzerland");
    });
});
