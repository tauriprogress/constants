const characterClassSpecs =
    require("../../src/shared/characterClassSpecs").default;
const classes = [
    { id: 1, specs: [71, 72, 73] },
    { id: 2, specs: [65, 66, 70] },
    { id: 3, specs: [254, 253, 255] },
    { id: 4, specs: [259, 260, 261] },
    { id: 5, specs: [256, 257, 258] },
    { id: 6, specs: [250, 251, 252] },
    { id: 7, specs: [262, 263, 264] },
    { id: 8, specs: [64, 63, 62] },
    { id: 9, specs: [265, 266, 267] },
    { id: 10, specs: [270, 269, 268] },
    { id: 11, specs: [105, 104, 103, 102] },
];

describe("Shared character class specs", () => {
    test(`There are ${classes.length} classes`, () => {
        expect(Object.keys(characterClassSpecs).length).toBe(classes.length);
    });

    for (const { id, specs } of classes) {
        test(`Class ${id}}`, () => {
            for (const spec of specs) {
                expect(characterClassSpecs[id].includes(spec)).toBe(true);
            }
        });
    }
});
