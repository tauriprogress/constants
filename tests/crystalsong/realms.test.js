const realms = require("../../src/crystalsong/realms").default;

const { realms: constantRealms } = require("./testVariables");

describe("Crystalsong realms", () => {
    test(`There are ${constantRealms.length} realms`, () => {
        expect(realms.length).toBe(constantRealms.length);
    });

    for (const realmName of constantRealms) {
        test(`${realmName} included`, () => {
            expect(realms.includes(realmName)).toBe(true);
        });
    }
});
