const logBugs = require("../../src/crystalsong/logBugs").default;
const { realms, specIds } = require("./testVariables");
const { bugs } = require("../shared/testVariables.test.js");

describe("Crystalsong log bugs", () => {
    test("Log bugs is an array", () => {
        expect(Array.isArray(logBugs)).toBe(true);
    });

    describe("Array elements have all required fields", () => {
        let i = 1;
        for (const elem of logBugs) {
            describe(`Element ${i}`, () => {
                test("Bugtype is valid", () => {
                    expect(bugs).toHaveProperty(elem.type);
                });
                test("Fields are valid", () => {
                    for (const field of bugs[elem.type]) {
                        field.test(elem[field.key], realms, specIds);
                    }
                });
            });

            i++;
        }
    });
});
