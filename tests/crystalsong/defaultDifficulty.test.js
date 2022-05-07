const defaultDifficulty =
    require("../../src/crystalsong/defaultDifficulty").default;

describe("Crystalsong default difficulty", () => {
    test("Crystalsong's default difficulty is 3", () => {
        expect(defaultDifficulty).toBe(3);
    });
});
