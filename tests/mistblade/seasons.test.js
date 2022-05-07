const seasons = require("../../src/mistblade/seasons").default;
const { isValidISODateString } = require("iso-datestring-validator");

const fields = [
    { key: "name", test: (value) => expect(typeof value).toBe("string") },
    {
        key: "start",
        test: (value) => expect(isValidISODateString(value)).toBe(true),
    },
    {
        key: "finish",
        test: (value) => expect(isValidISODateString(value)).toBe(true),
    },
];

describe("Mistblade seasons", () => {
    test("Seasons variable is an array of objects", () => {
        expect(Array.isArray(seasons)).toBe(true);
        for (const season of seasons) {
            expect(season instanceof Object).toBe(true);
        }
    });

    describe("Every seasons fields are valid", () => {
        let i = 0;
        for (const season of seasons) {
            i++;
            test(`Season ${i} has ${fields.length} fields`, () => {
                expect(Object.keys(season).length).toBe(fields.length);
            });

            test(`Seasons ${i} has all required fields`, () => {
                for (const field of fields) {
                    field.test(season[field.key]);
                }
            });
        }
    });
});
