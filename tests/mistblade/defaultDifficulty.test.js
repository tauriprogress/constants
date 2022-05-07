const defaultDifficulty =
    require("../../src/mistblade/defaultDifficulty").default;

const difficulty = 5;

describe("Mistblade default difficulty", () => {
    test(`Mistblade's default difficulty is ${difficulty}`, () => {
        expect(defaultDifficulty).toBe(difficulty);
    });
});
