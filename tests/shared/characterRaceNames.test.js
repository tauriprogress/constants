const characterRaceNames =
    require("../../src/shared/characterRaceNames").default;
const races = [
    { id: 1, label: "Human" },
    { id: 2, label: "Orc" },
    { id: 3, label: "Dwarf" },
    { id: 4, label: "Night elf" },
    { id: 5, label: "Undead" },
    { id: 6, label: "Tauren" },
    { id: 7, label: "Gnome" },
    { id: 8, label: "Troll" },
    { id: 9, label: "Goblin" },
    { id: 10, label: "Bloodelf" },
    { id: 11, label: "Draenei" },
    { id: 12, label: "Fel Orc" },
    { id: 13, label: "Naga" },
    { id: 14, label: "Broken" },
    { id: 15, label: "Skeleton" },
    { id: 16, label: "Vrykul" },
    { id: 17, label: "Tuskarr" },
    { id: 18, label: "Forest Troll" },
    { id: 19, label: "Taunka" },
    { id: 20, label: "Northrend Skeleton" },
    { id: 21, label: "Ice Troll" },
    { id: 22, label: "Worgen" },
    { id: 23, label: "Gilnean" },
    { id: 25, label: "Pandaren" },
    { id: 26, label: "Pandaren" },
];
describe("Shared character names", () => {
    test(`There are ${races.length} classes`, () => {
        expect(Object.keys(characterRaceNames).length).toBe(races.length);
    });

    for (const { id, label } of races) {
        describe(label, () => {
            test(`Id ${id} is ${label}`, () => {
                expect(characterRaceNames[id]).toBe(label);
            });
        });
    }
});
