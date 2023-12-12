const difficultyNames = require("../../src/mistblade2/difficultyNames").default;
const difficulties = [
    {
        id: 3,
        value: "10 N",
    },
    {
        id: 4,
        value: "25 N",
    },
    {
        id: 5,
        value: "10 HC",
    },
    {
        id: 6,
        value: "25 HC",
    },
];

describe("Mistblade 2 difficulty names", () => {
    test(`There are ${difficulties.length} difficulties`, () => {
        expect(Object.keys(difficultyNames).length).toBe(difficulties.length);
    });

    for (const difficulty of difficulties) {
        test(`${difficulty.value} has ID ${difficulty.id}`, () => {
            expect(difficultyNames[difficulty.id]).toBe(difficulty.value);
        });
    }
});
