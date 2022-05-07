const defaultRealm = require("../../src/mistblade/defaultRealm").default;

const realm = "Mistblade";

describe("Mistblade default realm", () => {
    test(`Mistblade's default realm is ${realm}`, () => {
        expect(defaultRealm).toBe(realm);
    });
});
