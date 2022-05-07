const guildFactionBugs =
    require("../../src/mistblade/guildFactionBugs").default;
const { realms, factions } = require("./testVariables");

const fields = [
    { key: "guildName", test: (value) => expect(typeof value).toBe("string") },
    {
        key: "realm",
        test: (value) => {
            expect(realms.includes(value)).toBe(true);
        },
    },
    {
        key: "faction",
        test: (value) => {
            expect(factions.includes(value)).toBe(true);
        },
    },
];

describe("Mistblade guild faction bugs", () => {
    test("Guild faction bugs is an array", () => {
        expect(Array.isArray(guildFactionBugs)).toBe(true);
    });

    describe("Array elements have all required fields", () => {
        let i = 1;
        for (const elem of guildFactionBugs) {
            test(`Element ${i}`, () => {
                for (const field of fields) {
                    field.test(elem[field.key]);
                }
            });

            i++;
        }
    });
});
