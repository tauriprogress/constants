const expansion = require("../../src/tauri/expansion").default;

describe("Tauri expansion", () => {
    test("Tauri's expansion is mop", () => {
        expect(expansion).toBe("mop");
    });
});
