const defaultRealm = require("../../src/mistblade2/defaultRealm").default;

const realm = "Mistblade Season 2";

describe("Mistblade 2 default realm", () => {
    test(`Mistblade 2's default realm is ${realm}`, () => {
        expect(defaultRealm).toBe(realm);
    });
});
