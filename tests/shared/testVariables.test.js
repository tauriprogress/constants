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
            test: (value, realms) => expect(realms.includes(value)).toBe(true),
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
            test: (value, _, specIds) =>
                expect(specIds.includes(value)).toBe(true),
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
            test: (value, realms) => expect(realms.includes(value)).toBe(true),
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
            test: (value, realms) => expect(realms.includes(value)).toBe(true),
        },
        {
            key: "characterName",
            test: (value) => expect(typeof value).toBe("string"),
        },
        {
            key: "specId",
            test: (value, _, specIds) =>
                expect(specIds.includes(value)).toBe(true),
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
            test: (value, realms) => expect(realms.includes(value)).toBe(true),
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
                for (const key in value) {
                    expect(typeof key).toBe("string");
                }
            },
        },
    ],
    removeCharacterFromLogs: [
        {
            key: "type",
            test: (value) => expect(value).toBe("removeCharacterFromLogs"),
        },
        {
            key: "characterName",
            test: (value) => expect(typeof value).toBe("string"),
        },
        {
            key: "realm",
            test: (value, realms) => expect(realms.includes(value)).toBe(true),
        },
        { key: "date", test: testDate },
    ],
};
test("Bugs object is constructed", () => {
    expect(typeof bugs === "object").toBe(true);
});
module.exports = {
    bugs,
};
