const talents = require("../../src/tauri/talents").default;
const { classIds } = require("./testVariables");

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
    test("All classes have talents", () => {
        expect(talents instanceof Object).toBe(true);
        for (const classId of classIds) {
            expect(talents).toHaveProperty(String(classId));
        }
    });

    describe("Talents have required fields", () => {
        for (const classId of classIds) {
            test(`${classId}`, () => {
                for (const talent of talents[classId]) {
                    for (const field of fields) {
                        field.test(talent[field.key]);
                    }
                }
            });
        }
    });
});
