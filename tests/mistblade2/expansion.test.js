const expansion = require("../../src/mistblade2/expansion").default;

const comparison = "mop";

describe("Mistblade 2 expansion", () => {
    test(`Mistblade 2's expansion is ${comparison}`, () => {
        expect(expansion).toBe(comparison);
    });
});
