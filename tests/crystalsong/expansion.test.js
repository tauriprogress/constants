const expansion = require("../../src/crystalsong/expansion").default;

describe("Crystalsong expansion", () => {
    test("Crystalsong's expansion is wotlk", () => {
        expect(expansion).toBe("wotlk");
    });
});
