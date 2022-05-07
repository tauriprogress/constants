const expansion = require("../../src/mistblade/expansion").default;

const comparison = "mop";

describe("Mistblade expansion", () => {
    test(`Mistblade's expansion is ${comparison}`, () => {
        expect(expansion).toBe(comparison);
    });
});
