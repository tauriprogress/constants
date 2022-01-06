const characterRaceFaction =
    require("../../src/shared/characterRaceFaction").default;
const classes = [
    { id: 1, faction: 0 },
    { id: 2, faction: 1 },
    { id: 3, faction: 0 },
    { id: 4, faction: 0 },
    { id: 5, faction: 1 },
    { id: 6, faction: 1 },
    { id: 7, faction: 0 },
    { id: 8, faction: 1 },
    { id: 9, faction: 1 },
    { id: 10, faction: 1 },
    { id: 11, faction: 0 },
    { id: 22, faction: 0 },
    { id: 25, faction: 0 },
    { id: 26, faction: 1 },
];

describe("Shared character race faction", () => {
    test(`There are ${classes.length} classes`, () => {
        expect(Object.keys(characterRaceFaction).length).toBe(classes.length);
    });

    for (const { id, faction } of classes) {
        test(`Class ${id}}`, () => {
            expect(characterRaceFaction[id]).toBe(faction);
        });
    }
});
