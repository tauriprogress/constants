const realms = require("../../src/mistblade2/realms").default;

const { realms: constantRealms } = require("./testVariables");

describe("Mistblade 2 realms", () => {
    test(`There are ${constantRealms.length} realms`, () => {
        expect(realms.length).toBe(constantRealms.length);
    });

    for (const realmName of constantRealms) {
        test(`${realmName} included`, () => {
            expect(realms.includes(realmName)).toBe(true);
        });
    }
});
