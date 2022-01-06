const logBugs = require("../../src/tauri/logBugs").default;
const { realms, specIds } = require("./testVariables");

function testDate(value) {
    expect(value instanceof Object).toBe(true);
    const fields = ["from", "to"];
    for (const field of fields) {
        expect(typeof value[field]).toBe("number");
    }
}

const bugs = {
    ignoreLogOfId: [
        {
            key: "type",
            test: (value) => expect(value).toBe("ignoreLogOfId"),
        },
        { key: "id", test: (value) => expect(typeof value).toBe("number") },
        {
            key: "realm",
            test: (value) => expect(realms.includes(value)).toBe(true),
        },
    ],
    ignoreBossOfDate: [
        {
            key: "type",
            test: (value) => expect(value).toBe("ignoreBossOfDate"),
        },
        {
            key: "date",
            test: testDate,
        },
        {
            key: "bossId",
            test: (value) => expect(typeof value).toBe("number"),
        },
    ],
    changeSpecDmgDoneOfDate: [
        {
            key: "type",
            test: (value) => expect(value).toBe("changeSpecDmgDoneOfDate"),
        },
        { key: "date", test: testDate },
        {
            key: "specId",
            test: (value) => expect(specIds.includes(value)).toBe(true),
        },
        {
            key: "changeTo",
            test: (value) => expect(value).toBe(true),
        },
    ],
    ignoreLogOfCharacter: [
        {
            key: "type",
            test: (value) => expect(value).toBe("ignoreLogOfCharacter"),
        },
        {
            key: "name",
            test: (value) => expect(typeof value).toBe("string"),
        },
        {
            key: "realm",
            test: (value) => expect(realms.includes(value)).toBe(true),
        },
    ],
    overwriteSpecOfCharacter: [
        {
            key: "type",
            test: (value) => expect(value).toBe("overwriteSpecOfCharacter"),
        },
        {
            key: "logId",
            test: (value) => expect(typeof value).toBe("number"),
        },
        {
            key: "realm",
            test: (value) => expect(realms.includes(value)).toBe(true),
        },
        {
            key: "characterName",
            test: (value) => expect(typeof value).toBe("string"),
        },
        {
            key: "specId",
            test: (value) => expect(specIds.includes(value)).toBe(true),
        },
    ],
    ignoreCharacter: [
        {
            key: "type",
            test: (value) => expect(value).toBe("ignoreCharacter"),
        },
        { key: "name", test: (value) => expect(typeof value).toBe("string") },
        {
            key: "realm",
            test: (value) => expect(realms.includes(value)).toBe(true),
        },
    ],
    changeKilltimeOfLog: [
        {
            key: "type",
            test: (value) => expect(value).toBe("changeKilltimeOfLog"),
        },
        { key: "id", test: (value) => expect(typeof value).toBe("number") },
        {
            key: "changeTo",
            test: (value) => expect(typeof value).toBe("number"),
        },
    ],
    changeGuildData: [
        {
            key: "type",
            test: (value) => expect(value).toBe("changeGuildData"),
        },
        { key: "id", test: (value) => expect(typeof value).toBe("number") },
        {
            key: "guildIds",
            test: (value) => {
                expect(value instanceof Object).toBe(true);
                for (const key of value) {
                    expect(typeof value).toBe("string");
                }
            },
        },
    ],
};

describe("Tauri log bugs", () => {
    test("Guild log bugs is an array", () => {
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
                        field.test(elem[field.key]);
                    }
                });
            });

            i++;
        }
    });
});
