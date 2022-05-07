const defaultRealm = require("../../src/tauri/defaultRealm").default;

const realm = "[HU] Tauri WoW Server";

describe("Tauri default realm", () => {
    test(`Tauri's default realm is ${realm}`, () => {
        expect(defaultRealm).toBe(realm);
    });
});
