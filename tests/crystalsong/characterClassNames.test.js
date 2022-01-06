const characterClassNames =
    require("../../src/crystalsong/characterClassNames").default;
const classes = [
    { id: 1, label: "Warrior" },
    { id: 2, label: "Paladin" },
    { id: 3, label: "Hunter" },
    { id: 4, label: "Rogue" },
    { id: 5, label: "Priest" },
    { id: 6, label: "Death knight" },
    { id: 7, label: "Shaman" },
    { id: 8, label: "Mage" },
    { id: 9, label: "Warlock" },
    { id: 11, label: "Druid" },
];

describe("Crystalsong character class names", () => {
    test(`There are ${classes.length} classes`, () => {
        expect(Object.keys(characterClassNames).length).toBe(classes.length);
    });

    for (const { id, label } of classes) {
        describe(label, () => {
            test(`Id ${id} is ${label}`, () => {
                expect(characterClassNames[id]).toBe(label);
            });
        });
    }
});
