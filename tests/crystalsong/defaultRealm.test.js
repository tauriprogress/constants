const defaultRealm = require("../../src/crystalsong/defaultRealm").default;

const realm = "Crystalsong";

describe("Crystalsong default realm", () => {
    test(`Crystalsong's default realm is ${realm}`, () => {
        expect(defaultRealm).toBe(realm);
    });
});
