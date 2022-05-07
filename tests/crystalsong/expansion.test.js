const expansion = require("../../src/crystalsong/expansion").default;

const comparison = "wotlk";

describe("Crystalsong expansion", () => {
    test(`Crystalsong's expansion is ${comparison}`, () => {
        expect(expansion).toBe(comparison);
    });
});
