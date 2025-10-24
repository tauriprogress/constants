const talents = require("../../src/tauri/talents").default;
const { specIds } = require("./testVariables");

const fields = [
    {
        key: "id",
        test: (value) => expect(typeof value).toBe("number"),
    },
    { key: "label", test: (value) => expect(typeof value).toBe("string") },
    {
        key: "image",
        test: (value) => expect(typeof value).toBe("string"),
    },
    {
        key: "row",
        test: (value) => expect(typeof value).toBe("number"),
    },
    {
        key: "column",
        test: (value) => expect(typeof value).toBe("number"),
    },
];

describe("Tauri talents", () => {
    test("All specs have talents", () => {
        expect(talents instanceof Object).toBe(true);
        for (const specId of specIds) {
            expect(talents).toHaveProperty(String(specId));
        }
    });

    describe("Talents have required fields", () => {
        for (const specId of specIds) {
            test(`${specId}`, () => {
                for (const talent of talents[specId]) {
                    for (const field of fields) {
                        field.test(talent[field.key]);
                    }
                }
            });
        }
    });
});
