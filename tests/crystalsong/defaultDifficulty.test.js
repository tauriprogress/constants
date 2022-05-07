const defaultDifficulty =
    require("../../src/crystalsong/defaultDifficulty").default;

const difficulty = 3;
describe("Crystalsong default difficulty", () => {
    test(`Crystalsong's default difficulty is ${difficulty}`, () => {
        expect(defaultDifficulty).toBe(difficulty);
    });
});
