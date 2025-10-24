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
    Highmaul: 1228,
    "The Emerald Nightmare": 1520,
    "The Nighthold": 1530,
    "Trial of Valor": 1648,
    "Tomb of Sargeras": 1676,
    "Antorus, the Burning Throne": 1712,
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
