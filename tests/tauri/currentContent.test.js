const currentContent = require("../../src/tauri/currentContent").default;

const currentContentFields = [
    {
        key: "abbreviation",
        test: (value) => expect(typeof value).toBe("string"),
    },
    { key: "name", test: (value) => expect(typeof value).toBe("string") },
    { key: "lastBoss", test: (value) => expect(typeof value).toBe("string") },
    { key: "bossCount", test: (value) => expect(typeof value).toBe("number") },
    {
        key: "completionDifficulties",
        test: (value) => {
            expect(Array.isArray(value)).toBe(true);
            for (const diff of value) {
                expect(typeof diff).toBe("number");
            }
        },
    },
    {
        key: "raids",
        test: (value) => {
            expect(Array.isArray(value)).toBe(true);
        },
    },
];

const raidFields = [
    { key: "name", test: (value) => expect(typeof value).toBe("string") },
    { key: "lastBoss", test: (value) => expect(typeof value).toBe("string") },
    { key: "bossCount", test: (value) => expect(typeof value).toBe("number") },
    { key: "id", test: (value) => expect(typeof value).toBe("number") },
    {
        key: "difficulties",
        test: (value) => {
            expect(Array.isArray(value)).toBe(true);
            for (const diff of value) {
                expect(typeof diff).toBe("number");
            }
        },
    },
    {
        key: "image",
        test: (value) => expect(typeof value).toBe("string"),
    },
    {
        key: "bosses",
        test: (value) => {
            expect(Array.isArray(value)).toBe(true);
        },
    },
];

const bossFields = [
    { key: "name", test: (value) => expect(typeof value).toBe("string") },
    {
        key: "bossIdOfDifficulty",
        test: (value) => {
            expect(value instanceof Object).toBe(true);
            Object.keys(value).map((key) => {
                expect(typeof Number(key)).toBe("number");
                expect(typeof value[key]).toBe("number");
            });
        },
    },
];

describe("Tauri current content", () => {
    describe(`Has all required fields`, () => {
        for (const field of currentContentFields) {
            test(field.key, () => {
                field.test(currentContent[field.key]);
            });
        }
    });

    describe(`Raids have all required fields`, () => {
        for (const raid of currentContent.raids) {
            describe(raid.name, () => {
                for (const field of raidFields) {
                    test(field.key, () => {
                        field.test(raid[field.key]);
                    });
                }
            });
        }
    });

    describe(`Bosses have all required fields`, () => {
        for (const raid of currentContent.raids) {
            for (const boss of raid.bosses) {
                describe(boss.name, () => {
                    for (const field of bossFields) {
                        test(field.key, () => {
                            field.test(boss[field.key]);
                        });
                    }
                });
            }
        }
    });
});
