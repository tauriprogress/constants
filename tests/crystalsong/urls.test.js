const urls = require("../../src/crystalsong/urls").default;

const fields = [
    {
        key: "armory",
        test: (value) => expect(isValidHttpUrl(value)).toBe(true),
    },
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

describe("Crystalsong urls", () => {
    test("Urls is an object", () => {
        expect(urls instanceof Object).toBe(true);
    });

    test("Urls have all required fields", () => {
        for (const field of fields) {
            field.test(urls[field.key]);
        }
    });
});
