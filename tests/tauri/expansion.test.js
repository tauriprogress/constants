const expansion = require("../../src/tauri/expansion").default;

const comparison = "mop";

describe("Tauri expansion", () => {
    test(`Tauri's expansion is ${comparison}`, () => {
        expect(expansion).toBe(comparison);
    });
});
