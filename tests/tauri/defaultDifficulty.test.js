const defaultDifficulty = require("../../src/tauri/defaultDifficulty").default;

const difficulty = 16;

describe("Tauri default difficulty", () => {
    test(`Tauri's default difficulty is ${difficulty}`, () => {
        expect(defaultDifficulty).toBe(difficulty);
    });
});
