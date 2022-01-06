const characterSpecClass =
    require("../../src/shared/characterSpecClass").default;
const specs = [
    { specId: 62, characterClass: 8 },
    { specId: 63, characterClass: 8 },
    { specId: 64, characterClass: 8 },
    { specId: 65, characterClass: 2 },
    { specId: 66, characterClass: 2 },
    { specId: 70, characterClass: 2 },
    { specId: 71, characterClass: 1 },
    { specId: 72, characterClass: 1 },
    { specId: 73, characterClass: 1 },
    { specId: 102, characterClass: 11 },
    { specId: 103, characterClass: 11 },
    { specId: 104, characterClass: 11 },
    { specId: 105, characterClass: 11 },
    { specId: 250, characterClass: 6 },
    { specId: 251, characterClass: 6 },
    { specId: 252, characterClass: 6 },
    { specId: 253, characterClass: 3 },
    { specId: 254, characterClass: 3 },
    { specId: 255, characterClass: 3 },
    { specId: 256, characterClass: 5 },
    { specId: 257, characterClass: 5 },
    { specId: 258, characterClass: 5 },
    { specId: 259, characterClass: 4 },
    { specId: 260, characterClass: 4 },
    { specId: 261, characterClass: 4 },
    { specId: 262, characterClass: 7 },
    { specId: 263, characterClass: 7 },
    { specId: 264, characterClass: 7 },
    { specId: 265, characterClass: 9 },
    { specId: 266, characterClass: 9 },
    { specId: 267, characterClass: 9 },
    { specId: 268, characterClass: 10 },
    { specId: 269, characterClass: 10 },
    { specId: 270, characterClass: 10 },
];

describe("Shared character spec classes", () => {
    test(`There are ${specs.length} specs`, () => {
        expect(Object.keys(characterSpecClass).length).toBe(specs.length);
    });

    for (const { specId, characterClass } of specs) {
        test(`Spec id: ${specId} is class: ${characterClass}`, () => {
            expect(characterSpecClass[specId]).toBe(characterClass);
        });
    }
});
