const characteritemSlotNames =
    require("../../src/shared/itemSlotNames").default;
const itemSlots = [
    { slot: 0, label: "Non-equippable" },
    { slot: 1, label: "Head" },
    { slot: 2, label: "Neck" },
    { slot: 3, label: "Shoulder" },
    { slot: 4, label: "Shirt" },
    { slot: 5, label: "Chest" },
    { slot: 6, label: "Waist" },
    { slot: 7, label: "Legs" },
    { slot: 8, label: "Feet" },
    { slot: 9, label: "Wrist" },
    { slot: 10, label: "Hands" },
    { slot: 11, label: "Finger" },
    { slot: 12, label: "Trinket" },
    { slot: 13, label: "One-Hand" },
    { slot: 14, label: "Off Hand" },
    { slot: 15, label: "Ranged" },
    { slot: 16, label: "Back" },
    { slot: 17, label: "Two-Hand" },
    { slot: 18, label: "Bag" },
    { slot: 19, label: "Tabard" },
    { slot: 20, label: "Chest" },
    { slot: 21, label: "Main Hand" },
    { slot: 22, label: "Off Hand" },
    { slot: 23, label: "Held In Off-hand" },
    { slot: 24, label: "Ammo" },
    { slot: 25, label: "Thrown" },
    { slot: 26, label: "Ranged" },
    { slot: 27, label: "Quiver" },
    { slot: 28, label: "Relic" },
];

describe("Shared item slot names", () => {
    test(`There are ${itemSlots.length} items`, () => {
        expect(Object.keys(characteritemSlotNames).length).toBe(
            itemSlots.length
        );
    });

    for (const { slot, label } of itemSlots) {
        test(`Item slot ${slot} is ${label}`, () => {
            expect(characteritemSlotNames[slot]).toBe(label);
        });
    }
});
