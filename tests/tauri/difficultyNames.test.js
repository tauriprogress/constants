const difficultyNames = require("../../src/tauri/difficultyNames").default;
const difficulties = [
    {
        id: 15,
        value: "Heroic",
    },
    {
        id: 16,
        value: "Mythic",
    },
];

describe("Tauri difficulty names", () => {
    test(`There are ${difficulties.length} difficulties`, () => {
        expect(Object.keys(difficultyNames).length).toBe(difficulties.length);
    });

    for (const difficulty of difficulties) {
        test(`${difficulty.value} has ID ${difficulty.id}`, () => {
            expect(difficultyNames[difficulty.id]).toBe(difficulty.value);
        });
    }
});
