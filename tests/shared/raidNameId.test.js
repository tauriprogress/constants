const raidNameId = require("../../src/shared/raidNameId").default;

const raids = {
    Naxxramas: 533,
    "The Obsidian Sanctum": 615,
    "The Eye of Eternity": 616,
    Ulduar: 603,
    "Trial of the Crusader": 649,
    "Icecrown Citadel": 631,
    "The Ruby Sanctum": 724,
    "Mogu'shan Vaults": 1008,
    "Heart of Fear": 1009,
    "Terrace of Endless Spring": 996,
    "Throne of Thunder": 1098,
    "Siege of Orgrimmar": 1136,
};

describe("Shared raid ids", () => {
    test(`There are ${Object.keys(raids).length} raids`, () => {
        expect(Object.keys(raidNameId).length).toBe(Object.keys(raids).length);
    });

    for (const key in raids) {
        test(`${key} has id ${raids[key]}`, () => {
            expect(raidNameId[key]).toBe(raids[key]);
        });
    }
});
