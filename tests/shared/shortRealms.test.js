const shortRealms = require("../../src/shared/shortRealms").default;

const realms = {
    "[HU] Tauri WoW Server": "t",
    "[HU] Warriors of Darkness": "w",
    "[EN] Evermoon": "e",
    Crystalsong: "c",
    Mistblade: "m",
    "Mistblade Season 2": "mb2",
};

describe("Shared short realms", () => {
    test(`There are ${Object.keys(realms).length} realms`, () => {
        expect(Object.keys(shortRealms).length).toBe(
            Object.keys(realms).length
        );
    });

    for (const key in realms) {
        test(`${key} has id ${realms[key]}`, () => {
            expect(shortRealms[key]).toBe(realms[key]);
        });
    }
});
