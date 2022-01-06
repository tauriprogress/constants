const difficultyNames =
    require("../../src/crystalsong/difficultyNames").default;
const difficulties = [
    {
        id: 0,
        value: "10 N",
    },
    {
        id: 1,
        value: "25 N",
    },
    {
        id: 2,
        value: "10 HC",
    },
    {
        id: 3,
        value: "25 HC",
    },
];

describe("Crystalsong difficulty names", () => {
    test(`There are ${difficulties.length} difficulties`, () => {
        expect(Object.keys(difficultyNames).length).toBe(difficulties.length);
    });

    for (const difficulty of difficulties) {
        test(`${difficulty.value} has ID ${difficulty.id}`, () => {
            expect(difficultyNames[difficulty.id]).toBe(difficulty.value);
        });
    }
});
