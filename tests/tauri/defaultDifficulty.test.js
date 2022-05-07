const defaultDifficulty = require("../../src/tauri/defaultDifficulty").default;

describe("Tauri default difficulty", () => {
    test("Tauri's default difficulty is 5", () => {
        expect(defaultDifficulty).toBe(5);
    });
});
