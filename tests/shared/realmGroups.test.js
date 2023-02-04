const realmGroups = require("../../src/shared/realmGroups").default;
const testCaseRealmGroups = ["tauri", "mistblade"];

describe("Shared realmgroups", () => {
    test(`There are ${testCaseRealmGroups.length} realmgroups`, () => {
        expect(realmGroups.length).toBe(testCaseRealmGroups.length);
    });

    test("Realmgroups are correct", () => {
        for (const realmGroup of realmGroups) {
            expect(testCaseRealmGroups.includes(realmGroup)).toBe(true);
        }
    });
});
