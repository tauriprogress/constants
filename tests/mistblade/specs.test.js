const specs = require("../../src/mistblade/specs").default;
const { specIds, roles, rangeTypes } = require("./testVariables");

const fields = [
    { key: "label", test: (value) => expect(typeof value).toBe("string") },
    {
        key: "isDps",
        test: (value) => expect(typeof value).toBe("boolean"),
    },
    {
        key: "isHealer",
        test: (value) => expect(typeof value).toBe("boolean"),
    },
    {
        key: "isTank",
        test: (value) => expect(typeof value).toBe("boolean"),
    },
    {
        key: "image",
        test: (value) => expect(typeof value).toBe("string"),
    },
    {
        key: "id",
        test: (value) => expect(typeof value).toBe("number"),
    },

    {
        key: "role",
        test: (value) => expect(roles.includes(value)).toBe(true),
    },
    {
        key: "rangeType",
        test: (value) => expect(rangeTypes.includes(value)).toBe(true),
    },
];

describe("Mistblade specs", () => {
    test("All specs data is present", () => {
        expect(specs instanceof Object).toBe(true);
        for (const specId of specIds) {
            expect(specs).toHaveProperty(String(specId));
        }
    });

    describe("Specs have required fields", () => {
        for (const specId of specIds) {
            test(`${specId}`, () => {
                for (const field of fields) {
                    field.test(specs[specId][field.key]);
                }
            });
            test(`Spec id matches field id`, () => {
                expect(specs[specId].id).toBe(specId);
            });
        }
    });
});
