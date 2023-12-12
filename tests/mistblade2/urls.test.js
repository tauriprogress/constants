const urls = require("../../src/mistblade2/urls").default;

const fields = [
    {
        key: "server",
        test: (value) => expect(isValidHttpUrl(value)).toBe(true),
    },
    {
        key: "icon",
        test: (value) => expect(isValidHttpUrl(value)).toBe(true),
    },
    {
        key: "shoot",
        test: (value) => expect(isValidHttpUrl(value)).toBe(true),
    },
    {
        key: "api",
        test: (value) => expect(isValidHttpUrl(value)).toBe(true),
    },
];

function isValidHttpUrl(string) {
    let url;

    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
}

describe("Mistblade 2 urls", () => {
    test("Urls is an object", () => {
        expect(urls instanceof Object).toBe(true);
    });

    test("Urls have all required fields", () => {
        for (const field of fields) {
            field.test(urls[field.key]);
        }
    });
});
