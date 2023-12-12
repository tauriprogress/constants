const defaultDifficulty =
    require("../../src/mistblade2/defaultDifficulty").default;

const difficulty = 5;

describe("Mistblade 2 default difficulty", () => {
    test(`Mistblade 2's default difficulty is ${difficulty}`, () => {
        expect(defaultDifficulty).toBe(difficulty);
    });
});
